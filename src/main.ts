import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { ApiModule } from '@/api.module';
import { AppModule } from '@/app.module';
import { apiConfig, apiServer, swaggerConfig, swaggerServer, appServer, appConfig } from '@/servers';

async function bootstrap() {
  const logger = new Logger('bootstrap');
  const api = await NestFactory.create(ApiModule);
  const app = await NestFactory.create(AppModule);

  apiServer(api);
  swaggerServer(api);
  appServer(app);

  const { host: apiHost, port: apiPort, prefix: apiPrefix } = apiConfig;
  const { prefix: swaggerPrefix } = swaggerConfig;
  const { host: appHost, port: appPort } = appConfig;

  await api.listen(apiPort);
  await app.listen(appPort);

  logger.debug(`Appliation listening on: http://${apiHost}:${apiPort}/${apiPrefix}`);
  logger.debug(`Appliation listening on: http://${apiHost}:${apiPort}/${swaggerPrefix}`);
  logger.debug(`Appliation listening on: http://${appHost}:${appPort}/`);
}
bootstrap();
