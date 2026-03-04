import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/hello')
  sayHello(): string {
    return 'Hello, Inga';
  }

  @Post('/error')
  error(): string {
    return 'mistake';
  }

  @Get('/service')
  sayHello2(): string {
    return this.appService.sayHello2();
  }
}
