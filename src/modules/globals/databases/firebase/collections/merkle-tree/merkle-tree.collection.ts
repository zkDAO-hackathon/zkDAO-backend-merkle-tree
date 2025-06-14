import { addDoc, collection, getDocs, query, where } from 'firebase/firestore'
import { Firestore } from 'firebase/firestore'
import { Address, getAddress, Hex } from 'viem'

import { handleKnownErrors } from '@/generic/helpers/handle-known-errors'
import { MerkleTree } from '@/models/merkle-tree.model'
import { Voter } from '@/models/voter.model'

export class MerkleTreeCollection {
	private collectionRef

	constructor(private db: Firestore) {
		this.collectionRef = collection(db, 'merkle-trees')
	}

	//  GET
	async getMerkleProof(
		dao: Address,
		proposalId: Hex,
		address: Address
	): Promise<
		| {
				_secret: string
				_weight: number
				_snapshot_merkle_tree: string
				_leaf: string
				_index: number
				_path: string[]
		  }
		| undefined
	> {
		try {
			const q = query(
				this.collectionRef,
				where('dao', '==', dao),
				where('proposalId', '==', proposalId)
			)

			const querySnapshot = await getDocs(q)
			if (querySnapshot.empty) return undefined

			const merkleTree = querySnapshot.docs[0].data() as MerkleTree

			const voter = merkleTree.voters.find(
				(voter: Voter) => getAddress(voter.address) === getAddress(address)
			)

			if (!voter) return undefined

			return {
				_secret: voter.secret,
				_weight: voter.weight,
				_snapshot_merkle_tree: merkleTree.root,
				_leaf: voter.leaf,
				_index: voter.index,
				_path: voter.path
			}
		} catch (error) {
			console.error('❌', error)
			handleKnownErrors(error)
		}
	}

	//  POST
	async saveMerkleTree(data: MerkleTree): Promise<string | undefined> {
		try {
			const docRef = await addDoc(this.collectionRef, { data })
			return docRef.id
		} catch (error) {
			console.error('❌', error)
			handleKnownErrors(error)
		}
	}
}
