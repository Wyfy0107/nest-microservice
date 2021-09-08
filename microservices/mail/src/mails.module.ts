import { Module } from '@nestjs/common';
import { ClientProxyFactory } from '@nestjs/microservices';

import { MailsController } from './mails.controller';
import { AppConfigModule as ConfigModule } from './config/config.module';
import { ConfigService } from './config/config.service';

@Module({
  imports: [ConfigModule],
  controllers: [MailsController],
  providers: [
    {
      provide: 'USER_SERVICE',
      useFactory: (configService: ConfigService) => {
        const userSvcOptions = configService.userService;
        return ClientProxyFactory.create(userSvcOptions);
      },
      inject: [ConfigService],
    },
  ],
})
export class MailsModule {}
