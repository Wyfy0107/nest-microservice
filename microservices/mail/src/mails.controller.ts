import { Controller, Inject } from '@nestjs/common';
import { ClientProxy, MessagePattern, Payload } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

@Controller()
export class MailsController {
  constructor(@Inject('USER_SERVICE') private userService: ClientProxy) {}

  @MessagePattern('findOneMail')
  async findOne(@Payload() payload: { msg: string }) {
    const observable = this.userService.send('findOneUser', {}).pipe();
    const msgFromUserSvc = await lastValueFrom(observable);

    return `msg from mail service and ${payload.msg} ${msgFromUserSvc}`;
  }
}
