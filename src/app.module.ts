import { Module } from '@nestjs/common';
import { TelegrafModule } from 'nestjs-telegraf';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as LocalSession from 'telegraf-session-local';
import { AppUpdate } from './app.update';
import { ChartGuardGuard } from './chartguard.guard';

const sessions = new LocalSession({ database: 'session_db.json' });

@Module({
  imports: [
    TelegrafModule.forRoot({
      middlewares: [sessions.middleware()],
      token: '5348423291:AAHCstOJ16LDuABBSiCOG4fPXWzmLs_7-Uw',
    }),
  ],
  controllers: [AppController],
  providers: [AppService, AppUpdate, ChartGuardGuard],
})
export class AppModule {}
