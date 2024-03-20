import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';


@Injectable()
export class EnvironmentConfigService {
  constructor(private configService: ConfigService) { }

  getToken(): string {
    // console.log('env.service', this.configService.get<string>('TOKEN'));
    return this.configService.get<string>('TOKEN');
  }
}
