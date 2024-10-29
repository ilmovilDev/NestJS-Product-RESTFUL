import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { envs } from './config';

export function setupSwagger(app: INestApplication) {

    const config = new DocumentBuilder()
        .setTitle(envs.swaggerDocTitle || 'NestJs Authentication')
        .setDescription(envs.swaggerDocDescription || 'The NestJs Authentication API')
        .setVersion(envs.swaggerDocVersion || '0.0.1')
        .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api/docs', app, document);
}
