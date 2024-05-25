import { Controller, Get } from '@nestjs/common';
import { AppService } from '../services/app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    var comment = "esto es un comentario";
    console.log(comment);
    return this.appService.getHello();
  }
}
