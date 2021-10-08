import { Injectable } from '@nestjs/common';
import { ConfigService as Config } from '@nestjs/config';
import { ClientOptions, Transport } from '@nestjs/microservices';

@Injectable()
export class ConfigService {
  constructor(private configService: Config) {}

  get userService(): ClientOptions {
    return {
      options: {
        port: 80,
        host: 'nest-ms-user.default.svc',
      },
      transport: Transport.TCP,
    };
  }

  get mailService(): ClientOptions {
    return {
      options: {
        port: 80,
        host: 'nest-ms-mail.default.svc',
      },
      transport: Transport.TCP,
    };
  }
}
