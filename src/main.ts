import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common'
import { NestFactory, Reflector } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

import { AppModule } from '@/app.module'

async function bootstrap(): Promise<void> {
	const app = await NestFactory.create(AppModule)

	const config = new DocumentBuilder()
		.setTitle('ZKDAO API')
		.setDescription('')
		.setVersion('1.0')
		.addBearerAuth()
		.build()

	const document = SwaggerModule.createDocument(app, config)
	SwaggerModule.setup('docs', app, document)

	app.useGlobalPipes(
		new ValidationPipe({
			forbidNonWhitelisted: true,
			transformOptions: {
				enableImplicitConversion: true
			},
			whitelist: true
		})
	)


	// TODO: configure CORS
	app.enableCors({
		origin: true,
		methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
		credentials: true
	}) // Enable CORS
	await app.listen(process.env.PORT || 3000)
}

bootstrap()
