import { NestFactory } from '@nestjs/core';
import express from 'express';
import * as bodyParser from 'body-parser';

import { ApplicationModule } from './modules/app.module';

async function bootstrap() {
  const instance = express();
  instance.use(bodyParser.json());
  const app = await NestFactory.create(ApplicationModule, instance);
  await app.listen(3000, () => console.log('Application is listening on port 3000'));
}
bootstrap();
