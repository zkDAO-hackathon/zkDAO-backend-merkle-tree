import {
	BadRequestException,
	Body,
	Controller,
	Post,
	UploadedFile,
	UseInterceptors
} from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express'
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger'

import { IpfsService } from '../services/ipfs.services'

@ApiBearerAuth()
@ApiTags('ipfs')
@Controller('ipfs')
export class IpfsController {
	constructor(private readonly ipfsService: IpfsService) {}

	// POST
	@Post('/store-image')
	@ApiConsumes('multipart/form-data')
	@ApiBody({
		schema: {
			type: 'object',
			properties: {
				file: {
					type: 'string',
					format: 'binary'
				}
			}
		}
	})
	@UseInterceptors(FileInterceptor('file'))
	async storeImage(
		@UploadedFile() file: Express.Multer.File
	): Promise<string | undefined> {
		if (!file || !file.buffer) {
			throw new BadRequestException('Image file must be required.')
		}

		return this.ipfsService.storeImage(file.buffer)
	}

	@Post('/store-any-object')
	async storeAnyObject(@Body() data: unknown): Promise<string | undefined> {
		return this.ipfsService.storeObject(data)
	}
}
