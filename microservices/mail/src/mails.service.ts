import { Injectable } from '@nestjs/common';

@Injectable()
export class MailsService {
  create(createMailDto: any) {
    return 'This action adds a new mail';
  }

  findAll() {
    return `This action returns all mails`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mail`;
  }

  update(id: number, updateMailDto: any) {
    return `This action updates a #${id} mail`;
  }

  remove(id: number) {
    return `This action removes a #${id} mail`;
  }
}
