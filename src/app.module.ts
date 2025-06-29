import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import * as Joi from 'joi'

import { environments } from '@/config/environments'
import register from '@/config/register'
import { FirebaseModule } from '@/modules/globals/databases/firebase/firebase.model'
import { ClientModule } from '@/modules/globals/web3/clients/client.module'
import { IpfsModule } from '@/modules/usecases/ipfs/ipfs.module'
import { MerkleTreeModule } from '@/modules/usecases/merkle-tree/merkle-tree.module'

@Module({
	imports: [
		ConfigModule.forRoot({
			envFilePath:
				environments[process.env.NODE_ENV as keyof typeof environments] ||
				environments.dev,
			isGlobal: true,
			load: [register],
			validationSchema: Joi.object({
				FIREBASE_API_KEY: Joi.string().required(),
				FIREBASE_AUTH_DOMAIN: Joi.string().required(),
				FIREBASE_DATABASE_URL: Joi.string().required(),
				FIREBASE_PROJECT_ID: Joi.string().required(),
				FIREBASE_STORAGE_BUCKET: Joi.string().required(),
				FIREBASE_MESSAGING_SENDER_ID: Joi.string().required(),
				FIREBASE_APP_ID: Joi.string().required(),
				SCAN_API_KEY: Joi.string().required(),
				LIGHTHOUSE_API_KEY: Joi.string().required(),
				LIGHTHOUSE_GATEWAY: Joi.string().required(),
				WALLET_PRIVATE_KEY: Joi.string().required(),
				WALLET_PUBLIC_KEY: Joi.string().required()
			})
		}),
		ClientModule,
		FirebaseModule,
		IpfsModule,
		MerkleTreeModule
	],
	controllers: [],
	providers: []
})
export class AppModule {}
