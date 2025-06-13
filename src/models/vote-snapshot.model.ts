import { Address, Hex } from 'viem'

export interface VoterSnapshot {
	address: Address
	weight: bigint
	secret: string
	nullifier: Hex
	leaf: Hex
	index: number
	path: string[]
}
