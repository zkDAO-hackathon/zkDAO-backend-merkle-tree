import { Address, Hex } from 'viem'

import { Voter } from './voter.model'

export interface MerkleTree {
	dao: Address
	proposalId: Hex
	voters: Voter[]
	root: string
}
