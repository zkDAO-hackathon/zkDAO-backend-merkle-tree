import { Inject, Injectable } from '@nestjs/common'
import { ConfigType } from '@nestjs/config'
import { initializeApp } from 'firebase/app'
import { Firestore, getFirestore } from 'firebase/firestore'
import register from 'src/config/register'

import { MerkleTreeCollection } from './collections/merkle-tree/merkle-tree.collection'

@Injectable()
export class Firebase {
	private db: Firestore
	private merkleTreeCollection: MerkleTreeCollection

	constructor(
		@Inject(register.KEY)
		private readonly configService: ConfigType<typeof register>
	) {
		this.db = this.initializeFirebaseApp()
		this.merkleTreeCollection = new MerkleTreeCollection(this.db)
	}

	private initializeFirebaseApp(): Firestore {
		const { firebase } = this.configService

		if (!firebase || !firebase.apiKey) {
			throw new Error('Missing Firebase configuration.')
		}

		const firebaseConfig = {
			apiKey: firebase.apiKey,
			authDomain: firebase.authDomain,
			projectId: firebase.projectId,
			storageBucket: firebase.storageBucket,
			messagingSenderId: firebase.messagingSenderId,
			appId: firebase.appId
		}

		const app = initializeApp(firebaseConfig)
		return getFirestore(app)
	}

	public getDb(): Firestore {
		return this.db
	}

	public merkleTree(): MerkleTreeCollection {
		return this.merkleTreeCollection
	}
}
