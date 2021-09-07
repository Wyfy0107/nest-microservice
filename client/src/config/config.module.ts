import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { ConfigService } from './config.service';

@Module({
  imports: [ConfigModule.forRoot()],
  providers: [ConfigService],
  exports: [ConfigService],
})
export class AppConfigModule {}
