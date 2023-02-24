import { Module } from '@nestjs/common';
import { TelegramModule } from 'nestjs-telegram';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TelegramModule.forRoot({
      botKey: '5348423291:AAHCstOJ16LDuABBSiCOG4fPXWzmLs_7-Uw',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
