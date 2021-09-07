import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';

import { MailsModule } from './mails.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    MailsModule,
    {
      transport: Transport.TCP,
      options: {
        host: '0.0.0.0',
        port: 5000,
      },
    },
  );
  app.listen();
}
bootstrap();
