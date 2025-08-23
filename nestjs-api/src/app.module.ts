import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './app/users/users.module';
import { AuthModule } from './app/auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST || 'localhost',
      port: Number(process.env.DB_PORT) || 3307,
      username: process.env.DB_USERNAME || 'myuser',
      password: process.env.DB_PASSWORD || 'password',
      database: process.env.DB_DATABASE || 'myapp_db',
      autoLoadEntities: true,
      synchronize: process.env.NODE_ENV !== 'production', // 生产环境关闭自动同步
    }),
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
