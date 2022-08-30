import { Module } from '@nestjs/common';
import { CommonModule } from '../common/common.module';
import { UsersModule } from '../modules/users/users.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [CommonModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
