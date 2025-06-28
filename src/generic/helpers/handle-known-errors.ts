import {
	BadGatewayException,
	BadRequestException,
	ConflictException,
	ForbiddenException,
	GatewayTimeoutException,
	GoneException,
	HttpVersionNotSupportedException,
	ImATeapotException,
	InternalServerErrorException,
	MethodNotAllowedException,
	NotAcceptableException,
	NotFoundException,
	NotImplementedException,
	PayloadTooLargeException,
	PreconditionFailedException,
	RequestTimeoutException,
	ServiceUnavailableException,
	UnauthorizedException,
	UnprocessableEntityException,
	UnsupportedMediaTypeException
} from '@nestjs/common'

/**
 * Throws the specific HTTP exception if it's recognized, otherwise throws a generic InternalServerErrorException.
 *
 * @param error - The error to handle
 */

export function handleKnownErrors(error: any): never {
	switch (true) {
		case error instanceof BadRequestException:
			throw new BadRequestException(error.message)
		case error instanceof UnauthorizedException:
			throw new UnauthorizedException(error.message)
		case error instanceof NotFoundException:
			throw new NotFoundException(error.message)
		case error instanceof ForbiddenException:
			throw new ForbiddenException(error.message)
		case error instanceof NotAcceptableException:
			throw new NotAcceptableException(error.message)
		case error instanceof RequestTimeoutException:
			throw new RequestTimeoutException(error.message)
		case error instanceof ConflictException:
			throw new ConflictException(error.message)
		case error instanceof GoneException:
			throw new GoneException(error.message)
		case error instanceof HttpVersionNotSupportedException:
			throw new HttpVersionNotSupportedException(error.message)
		case error instanceof PayloadTooLargeException:
			throw new PayloadTooLargeException(error.message)
		case error instanceof UnsupportedMediaTypeException:
			throw new UnsupportedMediaTypeException(error.message)
		case error instanceof UnprocessableEntityException:
			throw new UnprocessableEntityException(error.message)
		case error instanceof NotImplementedException:
			throw new NotImplementedException(error.message)
		case error instanceof ImATeapotException:
			throw new ImATeapotException(error.message)
		case error instanceof MethodNotAllowedException:
			throw new MethodNotAllowedException(error.message)
		case error instanceof BadGatewayException:
			throw new BadGatewayException(error.message)
		case error instanceof ServiceUnavailableException:
			throw new ServiceUnavailableException(error.message)
		case error instanceof GatewayTimeoutException:
			throw new GatewayTimeoutException(error.message)
		case error instanceof PreconditionFailedException:
			throw new PreconditionFailedException(error.message)
		default:
			throw new InternalServerErrorException('An unexpected error occurred')
	}
}
