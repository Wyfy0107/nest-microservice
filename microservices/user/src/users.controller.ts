import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class UsersController {
  constructor() {}

  @MessagePattern('findOneUser')
  findOne() {
    return 'this is from user service v5';
  }
}
