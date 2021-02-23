import { INestApplication } from '@nestjs/common';
import * as config from 'config';

export interface IAppConfig {
  host: string;
  port: number;
}

export const appConfig: IAppConfig = config.get('app');

export const appServer = (app: INestApplication) => {
  app.enableCors();
};
