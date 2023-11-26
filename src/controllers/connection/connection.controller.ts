import { Controller, Get } from '@nestjs/common';
import { Client } from 'discord.js';
import { ConnectionService } from 'src/services/connection/connection.service';

@Controller('connection')
export class ConnectionController {
  constructor(private readonly cnnService: ConnectionService) {}

  @Get()
  getConnection(): Promise<Client> {
    const connection = this.cnnService.connect();
    return connection;
  }

  @Get('x')
  getInit(): string {
    return 'Connection successful'; // Simple response for testing
  }

  @Get('*') // Catch-all route for debugging
  notFound() {
    return 'F in the chat';
  }
}
