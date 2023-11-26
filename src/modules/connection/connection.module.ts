import { Module } from '@nestjs/common';
import { ConnectionController } from 'src/controllers/connection/connection.controller';
import { ConnectionService } from 'src/services/connection/connection.service';

@Module({
  imports: [],
  controllers: [ConnectionController],
  providers: [ConnectionService],
  exports: [],
})
export class ConnectionModule {}
