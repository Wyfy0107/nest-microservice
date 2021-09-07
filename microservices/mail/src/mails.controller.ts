import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { MailsService } from './mails.service';

@Controller()
export class MailsController {
  constructor(private readonly mailsService: MailsService) {}

  @MessagePattern('createMail')
  create(@Payload() createMailDto: any) {
    return this.mailsService.create(createMailDto);
  }

  @MessagePattern('findAllMails')
  findAll() {
    return this.mailsService.findAll();
  }

  @MessagePattern('findOneMail')
  findOne(@Payload() payload: { msg: string }) {
    return `msg from mail service and ${payload.msg}`;
  }

  @MessagePattern('updateMail')
  update(@Payload() updateMailDto: any) {
    return this.mailsService.update(updateMailDto.id, updateMailDto);
  }

  @MessagePattern('removeMail')
  remove(@Payload() id: number) {
    return this.mailsService.remove(id);
  }
}
