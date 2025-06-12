import { Injectable } from '@nestjs/common'

@Injectable()
export class MerkleTreeService {
	generateMerkleTree(proposals: string[]): string {
		return `Merkle Tree generated with proposals: ${proposals.join(', ')}`
	}
}
