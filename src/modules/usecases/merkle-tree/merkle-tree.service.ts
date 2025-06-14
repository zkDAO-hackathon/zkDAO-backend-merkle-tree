import {
	Inject,
	Injectable,
	InternalServerErrorException
} from '@nestjs/common'
import { randomBytes } from 'crypto'
import { MerkleTree as MerkleTreeJs } from 'merkletreejs'
import { poseidon2, poseidon3 } from 'poseidon-lite'
import {
	Address,
	createPublicClient,
	Hex,
	hexToBigInt,
	http,
	parseAbiItem
} from 'viem'
import { toHex } from 'viem'

import { GovernorTokenABI } from '@/assets/abis/governor.abi'
import { localhost } from '@/config/viem.config'
import { MerkleTree } from '@/models/merkle-tree.model'
import { Proposal } from '@/models/proposal.model'
import { Voter } from '@/models/voter.model'
import { MerkleTreeCollection } from '@/modules/globals/databases/firebase/collections/merkle-tree/merkle-tree.collection'
import { Firebase } from '@/modules/globals/databases/firebase/firebase.database'

@Injectable()
export class MerkleTreeService {
	private readonly merkleTreeCollection: MerkleTreeCollection

	constructor(
		@Inject('Firebase')
		private readonly firebase: Firebase
	) {
		this.merkleTreeCollection = new MerkleTreeCollection(this.firebase.getDb())
	}

	async getMerkleProof(dao: Address, proposalId: Hex, address: Address) {
		return this.merkleTreeCollection.getMerkleProof(dao, proposalId, address)
	}

	async getMerkleTrees(dao: Address): Promise<MerkleTree[]> {
		return this.merkleTreeCollection.getMerkleTrees(dao)
	}

	async generateMerkleTrees(proposals: Proposal[]): Promise<{
		cids: string
	}> {
		try {
			const client = createPublicClient({
				chain: localhost,
				transport: http()
			})

			const allVoters: {
				address: Address
				weight: bigint
				proposalId: bigint
			}[] = []

			const merkleTrees: string[] = []

			for (const proposal of proposals) {
				const { snapshot, voteToken, proposalId } = proposal

				const governorToken = {
					address: voteToken,
					abi: GovernorTokenABI
				}

				// TODO: improve this by using a more efficient way to get all voters
				const logs = await client.getLogs({
					address: voteToken,
					event: parseAbiItem(
						'event DelegateChanged(address indexed delegator, address indexed fromDelegate, address indexed toDelegate)'
					),
					fromBlock: 0n,
					toBlock: snapshot
				})

				const delegates = [
					...new Set(logs.map(log => log.args.toDelegate as Address))
				]

				for (const delegate of delegates) {
					const delegateVotes = (await client.readContract({
						...governorToken,
						functionName: 'getVotes',
						args: [delegate]
					})) as bigint

					if (delegateVotes > 0n) {
						allVoters.push({
							address: delegate,
							weight: delegateVotes,
							proposalId: BigInt(proposalId)
						})
					}
				}

				// 1.) TODO: save root in IPFS
				const { root, votersData } = generateSnapshotMerkleTree(allVoters)

				const merkleTreeData: MerkleTree = {
					dao: proposal.dao,
					proposalId: proposal.proposalId,
					voters: votersData,
					root
				}

				// 2.) TODO: handle Errors
				await this.merkleTreeCollection.saveMerkleTree(merkleTreeData)

				// 3.) TODO: push Merkle Tree CID
				merkleTrees.push(root)
			}

			const cidsString = concatenateCIDsWithPipelineSeparator(merkleTrees)

			return {
				cids: cidsString
			}
		} catch (error) {
			throw new InternalServerErrorException(
				'Failed to generate Merkle Tree',
				error
			)
		}
	}
}

export function generateSnapshotMerkleTree(
	voters: { address: Address; weight: bigint; proposalId: bigint }[]
) {
	const leaves: string[] = []
	const votersData: Voter[] = []

	for (const { address, weight, proposalId } of voters) {
		const secretHex = '0x' + randomBytes(32).toString('hex')
		const secretBigInt = BigInt(secretHex)

		const nullifier = poseidon2([secretBigInt, proposalId])

		const addressBigInt = hexToBigInt(address)
		const leaf = poseidon3([addressBigInt, weight, nullifier])

		const hexLeaf = toHex(leaf, { size: 32 })

		leaves.push(hexLeaf)

		votersData.push({
			address,
			weight: Number(weight),
			secret: secretHex,
			nullifier: toHex(nullifier, { size: 32 }),
			leaf: hexLeaf,
			index: -1,
			path: []
		})
	}

	const tree = new MerkleTreeJs(leaves, x => x, { sortPairs: true })
	const root = tree.getHexRoot()

	for (const voterData of votersData) {
		const proof = tree.getProof(voterData.leaf)
		const index = tree.getLeafIndex(Buffer.from(voterData.leaf.slice(2), 'hex'))

		voterData.index = index
		voterData.path = proof.map(proof => '0x' + proof.data.toString('hex'))
	}

	return {
		root,
		votersData
	}
}

function concatenateCIDsWithPipelineSeparator(cids: string[]): string {
	return cids.join('|') + '|'
}
