import { Global, Module } from '@nestjs/common'

import { LightHouseClient } from './lighthouse.client'
import { ScanClient } from './scan.module'

@Global()
@Module({
	providers: [
		{
			provide: 'LightHouseClient',
			useClass: LightHouseClient
		},
		{
			provide: 'ScanClient',
			useClass: ScanClient
		}
	],
	exports: ['LightHouseClient', 'ScanClient']
})
export class ClientModule {}
