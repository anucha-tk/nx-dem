/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 3333;

  const logger = new Logger();

  await app.listen(port);

  logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );

  logger.log(
    `Database running on ${configService.get<string>(
      'database.host'
    )}/${configService.get<string>('database.name')}`,
    'NestApplication'
  );
  logger.log(`==========================================================`);
  logger.log(`Server running on ${await app.getUrl()}`, 'NestApplication');
}

bootstrap();
