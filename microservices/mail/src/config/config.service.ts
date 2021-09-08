import { Injectable } from '@nestjs/common';
import { ConfigService as Config } from '@nestjs/config';
import { ClientOptions, Transport } from '@nestjs/microservices';

@Injectable()
export class ConfigService {
  constructor(private configService: Config) {}

  get userService(): ClientOptions {
    return {
      options: {
        port: 3000,
        host: 'localhost',
      },
      transport: Transport.TCP,
    };
  }

  get mailService(): ClientOptions {
    return {
      options: {
        port: 5000,
        host: 'localhost',
      },
      transport: Transport.TCP,
    };
  }
}
