import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';

import { UserLazyModule } from './user/user.lazy.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST_CLOUD ?? 'localhost',
      port: Number(process.env.DB_PORT_CLOUD) ?? 5432,
      username: process.env.DB_USER_CLOUD ?? 'postgres',
      password: process.env.DB_PWS_CLOUD ?? 'postgres',
      database: process.env.DB_NAME_CLOUD ?? 'dbname',
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      synchronize: true,
      autoLoadEntities: true,
    } as TypeOrmModuleOptions),
    UserLazyModule(),
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
