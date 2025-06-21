import { addDoc, collection, getDocs, query, where } from 'firebase/firestore'
import { Firestore } from 'firebase/firestore'
import { Address, Hex } from 'viem'

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
				secret: string
				weight: number
				snapshotMerkleTree: string
				leaf: string
				index: number
				path: string[]
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
				(voter: Voter) => voter.address === address
			)

			if (!voter) return undefined

			return {
				secret: voter.secret,
				weight: voter.weight,
				snapshotMerkleTree: merkleTree.root,
				leaf: voter.leaf,
				index: voter.index,
				path: voter.path
			}
		} catch (error) {
			console.error('❌', error)
			return undefined
		}
	}

	async getMerkleTrees(dao: Address): Promise<MerkleTree[]> {
		try {
			const q = query(this.collectionRef, where('dao', '==', dao))
			const querySnapshot = await getDocs(q)

			if (querySnapshot.empty) return []

			return querySnapshot.docs.map(doc => {
				const data = doc.data() as MerkleTree
				return {
					...data,
					id: doc.id
				}
			})
		} catch (error) {
			console.error('❌', error)
			return []
		}
	}

	//  POST
	async saveMerkleTree(data: MerkleTree): Promise<string | undefined> {
		try {
			const docRef = await addDoc(this.collectionRef, data)
			return docRef.id
		} catch (error) {
			console.error('❌', error)
			return undefined
		}
	}
}
