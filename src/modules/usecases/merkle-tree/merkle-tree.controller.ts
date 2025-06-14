import { Body, Controller, Post, UseInterceptors } from '@nestjs/common'

import { ParseProposalsInterceptor } from '@/interceptors/ParseProposals.interceptor'
import { Proposal } from '@/models/proposal.model'

import { MerkleTreeService } from './merkle-tree.service'

@Controller('merkle-tree')
export class MerkleTreeController {
	constructor(private readonly merkleTreeService: MerkleTreeService) {}

	@Post('generate-merkle-trees')
	@UseInterceptors(ParseProposalsInterceptor)
	generateMerkleTrees(@Body('proposals') proposals: Proposal[]) {
		this.merkleTreeService.generateMerkleTrees(proposals)

		return Promise.resolve({
			cids: 'QmXy7Z5g8d9f3b2c4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t'
		})
	}
}
