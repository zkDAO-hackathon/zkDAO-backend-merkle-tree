import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import * as Joi from 'joi'

import { environments } from '@/config/environments'
import register from '@/config/register'
import { MerkleTreeModule } from '@/modules/usecases/merkle-tree/merkle-tree.module'

@Module({
	imports: [
		ConfigModule.forRoot({
			envFilePath:
				environments[process.env.NODE_ENV as keyof typeof environments] ||
				environments.dev,
			isGlobal: true,
			load: [register],
			validationSchema: Joi.object({})
		}),
		MerkleTreeModule
	],
	controllers: [],
	providers: []
})
export class AppModule {}
