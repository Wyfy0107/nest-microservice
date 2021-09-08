import { Module } from '@nestjs/common';
import { ClientProxyFactory } from '@nestjs/microservices';

import { ConfigService } from './config/config.service';
import { AppConfigModule as ConfigModule } from './config/config.module';
import { AppController } from './app.controller';

@Module({
  imports: [ConfigModule],
  controllers: [AppController],
  providers: [
    {
      provide: 'USER_SERVICE',
      useFactory: (configService: ConfigService) => {
        const userSvcOptions = configService.userService;
        return ClientProxyFactory.create(userSvcOptions);
      },
      inject: [ConfigService],
    },
    {
      provide: 'MAIL_SERVICE',
      useFactory: (configService: ConfigService) => {
        const mailSvcOptions = configService.mailService;
        return ClientProxyFactory.create(mailSvcOptions);
      },
      inject: [ConfigService],
    },
  ],
})
export class AppModule {}
