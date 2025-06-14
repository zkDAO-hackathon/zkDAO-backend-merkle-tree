import { Injectable, InternalServerErrorException } from '@nestjs/common'
import { randomBytes } from 'crypto'
import { MerkleTree } from 'merkletreejs'
import { poseidon2, poseidon3 } from 'poseidon-lite'
import {
	Address,
	createPublicClient,
	hexToBigInt,
	http,
	parseAbiItem
} from 'viem'
import { toHex } from 'viem'

import { GovernorTokenABI } from '@/assets/abis/governor.abi'
import { localhost } from '@/config/viem.config'
import { Proposal } from '@/models/proposal.model'
import { VoterSnapshot } from '@/models/vote-snapshot.model'

@Injectable()
export class MerkleTreeService {
	// 4. TODO: implement getMerkleProof method
	async getMerkleProof(dao: Address, proposalId: string, address: Address) {}

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
				const { root, voterData } = generateSnapshotMerkleTree(allVoters)

				// 2.) TODO: save merkle tree data in database
				const merkleTreeData = {
					dao: proposal.dao,
					proposalId: proposal.proposalId,
					voterData,
					root
				}

				console.dir(merkleTreeData, {
					depth: null,
					colors: true
				})

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
	const voterData: VoterSnapshot[] = []

	for (const { address, weight, proposalId } of voters) {
		const secretHex = '0x' + randomBytes(32).toString('hex')
		const secretBigInt = BigInt(secretHex)

		const nullifier = poseidon2([secretBigInt, proposalId])

		const addressBigInt = hexToBigInt(address)
		const leaf = poseidon3([addressBigInt, weight, nullifier])

		const hexLeaf = toHex(leaf, { size: 32 })

		leaves.push(hexLeaf)

		voterData.push({
			address,
			weight,
			secret: secretHex,
			nullifier: toHex(nullifier, { size: 32 }),
			leaf: hexLeaf,
			index: -1,
			path: []
		})
	}

	const tree = new MerkleTree(leaves, x => x, { sortPairs: true })
	const root = tree.getHexRoot()

	for (const voter of voterData) {
		const proof = tree.getProof(voter.leaf)
		const index = tree.getLeafIndex(Buffer.from(voter.leaf.slice(2), 'hex'))

		voter.index = index
		voter.path = proof.map(proof => '0x' + proof.data.toString('hex'))
	}

	return {
		root,
		voterData
	}
}

function concatenateCIDsWithPipelineSeparator(cids: string[]): string {
	return cids.join('|') + '|'
}
