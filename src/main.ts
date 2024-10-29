import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { cors, envs } from './config';
import { setupSwagger } from './swagger';

const DEFAULT_PORT = 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('bootstrap');
  const port = Number(envs.port) || DEFAULT_PORT;
  
  app.enableCors(cors());
  app.setGlobalPrefix('api/v1');

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
    transformOptions: {
      enableImplicitConversion: true,
    }
  }));
  
  setupSwagger(app)
  
  await app.listen(port);
  logger.log(`Server running on port: ${port}`);

}
bootstrap();
