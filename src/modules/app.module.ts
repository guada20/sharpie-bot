import { Module, Injectable } from '@nestjs/common';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';
import { ConnectionModule } from './connection/connection.module';
import { RouterModule } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';
import { ConnectionController } from 'src/controllers/connection/connection.controller';
import { ConnectionService } from 'src/services/connection/connection.service';
import { EnvironmentConfigService } from 'src/services/environment-config/environment-config.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.development.env'],
      // envFilePath: ['development.local.env', '.development.env'],
      isGlobal: true,
    }),    
    RouterModule.register([
      {
        path: '',
        module: AppModule,
      },
      {
        path: 'connection',
        module: ConnectionModule,
      },
    ])
  ],
  controllers: [AppController, ConnectionController],
  providers: [AppService, ConnectionService, EnvironmentConfigService],
})
export class AppModule {}
