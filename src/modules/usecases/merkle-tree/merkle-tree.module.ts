import { Module } from '@nestjs/common'

import { MerkleTreeController } from './merkle-tree.controller'
import { MerkleTreeService } from './merkle-tree.service'

@Module({
	providers: [MerkleTreeService],
	controllers: [MerkleTreeController]
})
export class MerkleTreeModule {}
