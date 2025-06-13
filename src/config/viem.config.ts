import { defineChain } from 'viem'

export const localhost = defineChain({
	id: 31337,
	name: 'Hardhat',
	network: 'hardhat',
	nativeCurrency: {
		name: 'Ether',
		symbol: 'ETH',
		decimals: 18
	},
	rpcUrls: {
		default: {
			http: ['http://127.0.0.1:8545']
		}
	}
})
