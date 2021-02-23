import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as config from 'config';
import { apiConfig } from '@/servers/api.server';

interface IContact {
  name: string;
  email: string;
  repository: string;
}

interface ILicense {
  name: string;
  url: string;
}

export interface ISwaggerConfig {
  title: string;
  description: string;
  version: string;
  contact: IContact;
  license: ILicense;
  prefix: string;
}

export const swaggerConfig: ISwaggerConfig = config.get('swagger');

export const swaggerServer = (app: INestApplication) => {
  const { title, description, version, contact, license, prefix } = swaggerConfig;
  const { host, port } = apiConfig;

  const swgOptions = new DocumentBuilder()
    .setTitle(title)
    .setDescription(description)
    .setVersion(version)
    .setContact(contact.name, contact.repository, contact.email)
    .setLicense(license.name, license.url)
    .addServer(`http://${host}:${port}`)
    .build();

  const swgDocument = SwaggerModule.createDocument(app, swgOptions);

  SwaggerModule.setup(prefix, app, swgDocument);
};
