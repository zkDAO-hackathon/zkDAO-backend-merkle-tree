import { Body, Controller, Post } from '@nestjs/common'

import { MerkleTreeService } from './merkle-tree.service'

@Controller('merkle-tree')
export class MerkleTreeController {
	constructor(private readonly merkleTreeService: MerkleTreeService) {}

	// TODO: Add Interceptor and DTO validation
	@Post()
	getMerkleTree(@Body() body): { data: string } {
		const { proposals } = body
		return { data: this.merkleTreeService.generateMerkleTree(proposals) }
	}
}
