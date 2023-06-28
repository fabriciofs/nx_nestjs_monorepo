import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';

import { UserLazyModule } from './user/user.lazy.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST_CENTRAL ?? 'localhost',
      port: Number(process.env.DB_PORT_CENTRAL) ?? 5432,
      username: process.env.DB_USER_CENTRAL ?? 'postgres',
      password: process.env.DB_PWS_CENTRAL ?? 'postgres',
      database: process.env.DB_NAME_CENTRAL ?? 'dbname',
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      autoLoadEntities: true,
      synchronize: true,
    } as TypeOrmModuleOptions),
    UserLazyModule(),
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
