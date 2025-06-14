import { Global, Module } from '@nestjs/common'

import { Firebase } from './firebase.database'

@Global()
@Module({
	providers: [
		{
			provide: 'Firebase',
			useClass: Firebase
		}
	],
	exports: ['Firebase']
})
export class FirebaseModule {}
