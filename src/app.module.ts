import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PickingSlipsModule } from './picking-slips/picking-slips.module';
require('dotenv').config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT,10),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: false,
      entities: [__dirname + '/**/*.entity.{ts,js}'],
    }),
    PickingSlipsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
