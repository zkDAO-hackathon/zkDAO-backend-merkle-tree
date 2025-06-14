import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import * as Joi from 'joi'

import { environments } from '@/config/environments'
import register from '@/config/register'
import { ClientModule } from '@/modules/globals/web3/clients/client.model'
import { MerkleTreeModule } from '@/modules/usecases/merkle-tree/merkle-tree.module'

import { IpfsModule } from './modules/usecases/ipfs/ipfs.module'

@Module({
	imports: [
		ConfigModule.forRoot({
			envFilePath:
				environments[process.env.NODE_ENV as keyof typeof environments] ||
				environments.dev,
			isGlobal: true,
			load: [register],
			validationSchema: Joi.object({
				LIGHTHOUSE_API_KEY: Joi.string().required(),
				LIGHTHOUSE_GATEWAY: Joi.string().required(),
				WALLET_PRIVATE_KEY: Joi.string().required(),
				WALLET_PUBLIC_KEY: Joi.string().required()
			})
		}),
		ClientModule,
		IpfsModule,
		MerkleTreeModule
	],
	controllers: [],
	providers: []
})
export class AppModule {}
