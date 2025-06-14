import { Module } from '@nestjs/common'

import { IpfsController } from './controllers/ipfs.controller'
import { IpfsService } from './services/ipfs.services'

@Module({
	imports: [],
	controllers: [IpfsController],
	providers: [IpfsService],
	exports: [IpfsService]
})
export class IpfsModule {}
