import { Module } from '@nestjs/common'

import { IpfsModule } from '../ipfs/ipfs.module'
import { MerkleTreeController } from './controllers/merkle-tree.controller'
import { MerkleTreeService } from './services/merkle-tree.service'

@Module({
	imports: [IpfsModule],
	providers: [MerkleTreeService],
	controllers: [MerkleTreeController]
})
export class MerkleTreeModule {}
