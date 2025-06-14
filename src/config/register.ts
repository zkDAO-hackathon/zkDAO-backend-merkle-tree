import { registerAs } from '@nestjs/config'

export default registerAs('config', () => {
	return {
		firebase: {
			apiKey: process.env.FIREBASE_API_KEY,
			authDomain: process.env.FIREBASE_AUTH_DOMAIN,
			databaseURL: process.env.FIREBASE_DATABASE_URL,
			projectId: process.env.FIREBASE_PROJECT_ID,
			storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
			messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
			appId: process.env.FIREBASE_APP_ID
		},
		lighthouse: {
			apiKey: process.env.LIGHTHOUSE_API_KEY,
			gateway: process.env.LIGHTHOUSE_GATEWAY
		},
		wallet: {
			address: process.env.WALLET_PUBLIC_KEY,
			mnemonic: process.env.WALLET_PRIVATE_KEY
		}
	}
})
