import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import * as Joi from 'joi';
import Configs from '../config';
import { DatabaseOptionsService } from './database/services/database.options.service';
import { DatabaseOptionsModule } from './database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: Configs,
      ignoreEnvFile: false,
      isGlobal: true,
      cache: true,
      envFilePath: ['.env'],
      expandVariables: true,
      validationSchema: Joi.object({
        NX_APP_NAME: Joi.string().required(),
        NX_APP_HOST: [
          Joi.string().ip({ version: 'ipv4' }).required(),
          Joi.valid('localhost').required(),
        ],
        NX_APP_PORT: Joi.number().default(3000).required(),
        NX_AUTH_JWT_ACCESS_TOKEN_SECRET: Joi.string().required(),
        NX_AUTH_JWT_ACCESS_TOKEN_EXPIRE: Joi.string().required(),
        NX_AUTH_JWT_REFRESH_TOKEN_SECRET: Joi.string().required(),
        NX_AUTH_JWT_REFRESH_TOKEN_EXPIRE: Joi.string().required(),
        NX_DB_HOST: Joi.string().required(),
        NX_DB_NAME: Joi.string().required(),
        NX_DB_ADMIN: Joi.string().required(),
        NX_DB_ADMIN_PWD: Joi.string().required(),
        NX_DB_USER: Joi.string().required(),
        NX_DB_USER_PWD: Joi.string().required(),
      }),
      validationOptions: {
        allowUnknown: true,
        abortEarly: true,
      },
    }),
    MongooseModule.forRootAsync({
      inject: [DatabaseOptionsService],
      imports: [DatabaseOptionsModule],
      useFactory: (databaseOptionsService: DatabaseOptionsService) =>
        databaseOptionsService.createMongooseOptions(),
    }),
  ],
})
export class CommonModule {}
