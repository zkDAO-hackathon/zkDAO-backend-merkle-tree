import kavach from '@lighthouse-web3/kavach'
import { Inject, Injectable } from '@nestjs/common'
import { ConfigType } from '@nestjs/config'
import register from 'src/config/register'
import { Address, createWalletClient, http } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import { sepolia } from 'viem/chains'

@Injectable()
export class LightHouseClient {
	private gateway: string
	private publicKey: string
	private apiKey: string

	constructor(
		@Inject(register.KEY)
		private readonly configService: ConfigType<typeof register>
	) {
		this.initializeGateway()
		this.initializePublicKey()
		this.initializeApiKey()
	}

	private initializeGateway(): void {
		const { lighthouse } = this.configService

		if (!lighthouse.gateway) {
			throw new Error('Lighthouse gateway is not defined.')
		}

		this.gateway = lighthouse.gateway
	}

	private initializePublicKey(): void {
		const { wallet } = this.configService

		if (!wallet.address) {
			throw new Error('Wallet address is not defined.')
		}

		const publicKey: string = wallet.address

		this.publicKey = publicKey
	}

	private initializeApiKey(): void {
		const { lighthouse } = this.configService

		if (!lighthouse.apiKey) {
			throw new Error('Lighthouse API key is not defined.')
		}

		this.apiKey = lighthouse.apiKey
	}

	public getGateway(): string {
		return this.gateway
	}

	public getPublicKey(): string {
		return this.publicKey
	}

	public getApiKey(): string {
		return this.apiKey
	}

	public async getJWT(): Promise<string> {
		const { wallet } = this.configService
		const privateKey: Address = wallet.mnemonic as Address

		const account = privateKeyToAccount(privateKey)

		const client = createWalletClient({
			account,
			chain: sepolia,
			transport: http()
		})

		const authMessage = await kavach.getAuthMessage(account.address)

		if (!authMessage.message) {
			throw new Error('Failed to get authentication message.')
		}

		const signedMessage = await client.signMessage({
			message: authMessage.message
		})

		const { JWT, error } = await kavach.getJWT(account.address, signedMessage)
		if (error) throw new Error(error)

		return JWT
	}
}
