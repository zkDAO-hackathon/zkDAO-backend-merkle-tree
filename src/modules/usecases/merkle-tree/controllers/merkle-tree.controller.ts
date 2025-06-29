import {
	Body,
	Controller,
	Get,
	Param,
	Post,
	UseInterceptors
} from '@nestjs/common'
import { Address, getAddress, Hex } from 'viem'

import { ParseProposalsInterceptor } from '@/interceptors/ParseProposals.interceptor'
import { MerkleTree } from '@/models/merkle-tree.model'
import { Proposal } from '@/models/proposal.model'

import { MerkleTreeService } from '../services/merkle-tree.service'

@Controller('merkle-tree')
export class MerkleTreeController {
	constructor(private readonly merkleTreeService: MerkleTreeService) {}
	// GET
	@Get('getMerkleProofs/:dao')
	async getMerkleTrees(@Param('dao') dao: Address): Promise<MerkleTree[]> {
		return await this.merkleTreeService.getMerkleTrees(getAddress(dao))
	}

	@Get('getMerkleProof/:dao/proposals/:proposalId/:voter')
	async getMerkleProof(
		@Param('dao') dao: Address,
		@Param('proposalId') proposalId: Hex,
		@Param('voter') voter: Address
	) {
		return await this.merkleTreeService.getMerkleProof(
			getAddress(dao),
			proposalId,
			getAddress(voter)
		)
	}

	// POST
	@Post('generate-merkle-trees')
	@UseInterceptors(ParseProposalsInterceptor)
	async generateMerkleTrees(@Body('proposals') proposals: Proposal[]) {
		this.merkleTreeService.generateMerkleTrees(proposals)

		return Promise.resolve({
			cids: 'bafkreidytm7ihribazgxsnnu7jldsuszwletlszo3pjxpqnztntfibpeae|'
		})
	}
}
