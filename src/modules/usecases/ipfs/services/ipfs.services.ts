import lighthouse from '@lighthouse-web3/sdk'
import { Inject, Injectable } from '@nestjs/common'

import { handleKnownErrors } from '@/generic/helpers/handle-known-errors'
import { LightHouseClient } from '@/modules/globals/web3/clients/lighthouse.client'

type Hash = {
	Name: string
	Hash: string
	Size: string
}

@Injectable()
export class IpfsService {
	private readonly gateway: string
	private readonly publicKey: string
	private readonly apiKey: string
	private jwt: string

	constructor(
		@Inject('LightHouseClient') private lightHouseClient: LightHouseClient
	) {
		this.gateway = this.lightHouseClient.getGateway()
		this.publicKey = this.lightHouseClient.getPublicKey()
		this.apiKey = this.lightHouseClient.getApiKey()
	}

	async onModuleInit(): Promise<void> {
		this.jwt = await this.initializeJWT()
	}

	private async initializeJWT(): Promise<string> {
		return await this.lightHouseClient.getJWT()
	}

	// POST
	async storeImage(image: Buffer): Promise<string | undefined> {
		try {
			const response = (await lighthouse.uploadBuffer(image, this.apiKey)) as {
				data: Hash
			}

			const hash: string = response.data.Hash
			return `${this.gateway}/ipfs/${hash}`
		} catch (error) {
			console.error('❌', error)
			handleKnownErrors(error)
		}
	}

	async storeObject(object: unknown): Promise<string | undefined> {
		try {
			const response = (await lighthouse.uploadText(
				JSON.stringify(object),
				this.apiKey
			)) as { data: Hash }

			const hash: string = response.data.Hash
			// return `${this.gateway}/ipfs/${hash}`
			return 'https://gateway.lighthouse.storage/ipfs/bafkreigkdxsbqz4zal7feh6dygq6374kqmzia2nrrxlpj3c4tx5biodxle'
		} catch (error) {
			console.error('❌', error)
			handleKnownErrors(error)
		}
	}
}
