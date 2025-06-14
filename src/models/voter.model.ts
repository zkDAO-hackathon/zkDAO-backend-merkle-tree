import { Address, Hex } from 'viem'

export interface Voter {
	address: Address
	weight: number
	secret: string
	nullifier: Hex
	leaf: Hex
	index: number
	path: string[]
}
