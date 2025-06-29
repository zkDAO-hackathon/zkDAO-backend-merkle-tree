import { Inject, Injectable } from '@nestjs/common'
import { ConfigType } from '@nestjs/config'
import register from 'src/config/register'

@Injectable()
export class ScanClient {
	private gateway: string
	private publicKey: string
	private apiKey: string

	constructor(
		@Inject(register.KEY)
		private readonly configService: ConfigType<typeof register>
	) {
		this.initializeApiKey()
	}

	private initializeApiKey(): void {
		const { scan } = this.configService

		if (!scan.apiKey) {
			throw new Error('Scan API key is not defined.')
		}

		this.apiKey = scan.apiKey
	}

	public getApiKey(): string {
		return this.apiKey
	}
}
