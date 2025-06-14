import {
	Body,
	Controller,
	Get,
	Param,
	Post,
	UseInterceptors
} from '@nestjs/common'
import { Address, Hex } from 'viem'

import { ParseProposalsInterceptor } from '@/interceptors/ParseProposals.interceptor'
import { MerkleTree } from '@/models/merkle-tree.model'
import { Proposal } from '@/models/proposal.model'

import { MerkleTreeService } from './merkle-tree.service'

@Controller('merkle-tree')
export class MerkleTreeController {
	constructor(private readonly merkleTreeService: MerkleTreeService) {}
	// GET
	@Get('getMerkleProofs/:dao')
	async getMerkleTrees(@Param('dao') dao: Address): Promise<MerkleTree[]> {
		return await this.merkleTreeService.getMerkleTrees(dao)
	}

	@Get('getMerkleProof/:dao/proposals/:proposalId/:address')
	async getMerkleProof(
		@Param('dao') dao: Address,
		@Param('proposalId') proposalId: Hex,
		@Param('address') address: Address
	) {
		return await this.merkleTreeService.getMerkleProof(dao, proposalId, address)
	}

	// POST
	@Post('generate-merkle-trees')
	@UseInterceptors(ParseProposalsInterceptor)
	generateMerkleTrees(@Body('proposals') proposals: Proposal[]) {
		this.merkleTreeService.generateMerkleTrees(proposals)

		return Promise.resolve({
			cids: 'QmXy7Z5g8d9f3b2c4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t'
		})
	}
}
