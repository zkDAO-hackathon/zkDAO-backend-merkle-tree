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
import { sepolia } from 'viem/chains'

import { GovernorTokenABI } from '@/assets/abis/governor.abi'
import { MerkleTree } from '@/models/merkle-tree.model'
import { Proposal } from '@/models/proposal.model'
import { Voter } from '@/models/voter.model'
import { MerkleTreeCollection } from '@/modules/globals/databases/firebase/collections/merkle-tree/merkle-tree.collection'
import { Firebase } from '@/modules/globals/databases/firebase/firebase.database'

import { IpfsService } from '../../ipfs/services/ipfs.services'

@Injectable()
export class MerkleTreeService {
	private readonly merkleTreeCollection: MerkleTreeCollection

	constructor(
		@Inject('Firebase')
		private readonly firebase: Firebase,
		private readonly ipfsService: IpfsService
	) {
		this.merkleTreeCollection = new MerkleTreeCollection(this.firebase.getDb())
	}

	// GET
	async getMerkleProof(dao: Address, proposalId: Hex, voter: Address) {
		return this.merkleTreeCollection.getMerkleProof(dao, proposalId, voter)
	}

	async getMerkleTrees(dao: Address): Promise<MerkleTree[]> {
		return this.merkleTreeCollection.getMerkleTrees(dao)
	}

	// POST
	async generateMerkleTrees(proposals: Proposal[]): Promise<{
		cids: string
	}> {
		try {
			const client = createPublicClient({
				chain: sepolia,
				transport: http()
			})

			const allVoters: {
				address: Address
				weight: bigint
				proposalId: bigint
			}[] = []

			const merkleTrees: string[] = []

			for (const proposal of proposals) {
				const { snapshot, proposalBlock, voteToken, proposalId } = proposal

				const governorToken = {
					address: voteToken,
					abi: GovernorTokenABI
				}

				const snapshotBlock = await getBlockNumberByTimestamp(snapshot)

				const logs = await client.getLogs({
					address: voteToken,
					event: parseAbiItem(
						'event DelegateChanged(address indexed delegator, address indexed fromDelegate, address indexed toDelegate)'
					),
					fromBlock: proposalBlock,
					toBlock: snapshotBlock
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

				const rootCID = await this.ipfsService.storeObject(merkleTreeData)

				console.log(
					`Merkle Tree CID for proposal ${proposal.proposalId}: ${rootCID}`
				)

				merkleTrees.push(rootCID)
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

		const nullifier = poseidon2([secretBigInt, weight])

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

async function getBlockNumberByTimestamp(timestamp: bigint): Promise<bigint> {
	const timestampString = timestamp.toString()
	const response = await fetch(
		`https://api-sepolia.etherscan.io/api?module=block&action=getblocknobytime&timestamp=${timestampString}&closest=before&apikey=KCMQQAD17EZIBQ2PH7QKQ2H2J9TVIRFP1T`
	)

	const data = await response.json()
	const snapshotBlock = BigInt(data.result)
	return snapshotBlock
}
