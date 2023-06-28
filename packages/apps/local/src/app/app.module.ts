import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';

import { UserLazyModule } from './user/user.lazy.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST_LOCAL ?? 'localhost',
      port: Number(process.env.DB_PORT_LOCAL) ?? 5432,
      username: process.env.DB_USER_LOCAL ?? 'postgres',
      password: process.env.DB_PWS_LOCAL ?? 'postgres',
      database: process.env.DB_NAME_LOCAL ?? 'dbname',
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      autoLoadEntities: true,
      synchronize: true,
    } as TypeOrmModuleOptions),
    UserLazyModule(),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
