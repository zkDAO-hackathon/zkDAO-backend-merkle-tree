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
			merkleRoots:
				'0x061013d6e33b7dd04732d7435f6aaa5902d67bcd5ce446dfeaa753ecba1ac0be0b6f089e32ff487c783f093b1ff31b9b27077b6476226225f341193dd652e22c22ecf81240a6d6c3698021b1b16d6d410a826efc0be8f151b6e509f3b74a466b'
		})
	}
}
