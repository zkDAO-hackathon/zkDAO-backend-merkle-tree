import { registerAs } from '@nestjs/config'

export default registerAs('config', () => {
	return {
		// apiKey: process.env.API_KEY,
	}
})
