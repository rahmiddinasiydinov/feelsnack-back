import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT ?? 5001;
  await app.listen(port);
  console.log(`🚀 FeelSnack API is running on port ${port}`);
}
bootstrap();

