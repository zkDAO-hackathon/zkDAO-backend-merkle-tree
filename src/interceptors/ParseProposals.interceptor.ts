import {
	CallHandler,
	ExecutionContext,
	Injectable,
	NestInterceptor
} from '@nestjs/common'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

import { Proposal } from '../models/proposal.model'

@Injectable()
export class ParseProposalsInterceptor implements NestInterceptor {
	intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
		const request = context.switchToHttp().getRequest()

		if (request.body?.proposals && Array.isArray(request.body.proposals)) {
			request.body.proposals = request.body.proposals.map(
				(proposal: string) => new Proposal(proposal)
			)
		}

		return next.handle().pipe(map(data => data))
	}
}
