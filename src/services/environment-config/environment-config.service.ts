import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';


@Injectable()
export class EnvironmentConfigService {
  constructor(private configService: ConfigService) {}

  getToken(): string {
    return this.configService.get<string>('TOKEN');
  }
}
//TOKEN = 'MTE3NzAzMjYxOTIxNzY2NjE0OA.GZRmNj.hEnqqvtv1fYKWwaNxwn5G2Xj3-AsxYkBc2ZIwc'
