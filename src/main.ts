import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helment from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(helment());
  await app.listen(3000);
}
bootstrap();
