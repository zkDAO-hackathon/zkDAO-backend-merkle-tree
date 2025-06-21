import { Address, getAddress, Hex } from 'viem'

export class Proposal {
	dao: Address
	daoId: bigint
	proposalId: Hex
	snapshot: bigint
	voteToken: Address

	constructor(data: string) {
		const parts = data.split(';')
		const map: Record<string, string> = {}

		for (const part of parts) {
			const [key, value] = part.split('=')
			if (key && value) map[key] = value
		}

		this.dao = getAddress(map.dao)
		this.daoId = BigInt(map.daoId)
		this.proposalId = map.proposalId as Hex
		this.snapshot = BigInt(map.snapshot)
		this.voteToken = getAddress(map.voteToken)
	}
}
