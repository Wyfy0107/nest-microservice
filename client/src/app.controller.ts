import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(@Inject('MAIL_SERVICE') private mailService: ClientProxy) {}

  @Get()
  getHello() {
    return this.mailService.send('findOneMail', { msg: 'message from client' });
  }
}
