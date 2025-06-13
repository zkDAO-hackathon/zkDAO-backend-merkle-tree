import { ArrayNotEmpty, IsArray, IsString } from 'class-validator'

export class GetMerkleTreeDto {
	@IsArray()
	@IsString({ each: true })
	@ArrayNotEmpty()
	proposals: string[]
}
