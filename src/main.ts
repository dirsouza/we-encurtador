import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';
import { apiConfig, apiServer } from './servers';

async function bootstrap() {
  const logger = new Logger('bootstrap');
  const app = await NestFactory.create(AppModule);

  apiServer(app);

  const { host, port, prefix: apiPrefix } = apiConfig;
  await app.listen(port);

  logger.debug(`Appliation listening on: http://${host}:${port}/${apiPrefix}`);
}
bootstrap();
