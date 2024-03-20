import { Injectable } from '@nestjs/common';
import { Client, GatewayIntentBits, IntentsBitField } from 'discord.js';
import { EnvironmentConfigService } from '../environment-config/environment-config.service';

@Injectable()
export class ConnectionService {
  constructor(private readonly envConfig: EnvironmentConfigService) { }

  async connect(): Promise<Client> {
    const client = new Client({
      intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
        IntentsBitField.Flags.GuildMessageReactions,
        GatewayIntentBits.Guilds,
      ],
    });

    client.on('ready', (c) => {
      console.log(`Logged in as ${c.guilds.valueOf()}`, c.user);
    });

    const token: string = this.envConfig.getToken();
    // console.log('token', token);
    const clU = await client.login(token);
    console.log('Response', clU);
    return client;
  }
}
