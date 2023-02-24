import { Injectable } from '@nestjs/common';
import { TelegramService, TelegramUser } from 'nestjs-telegram';
import { Observable } from 'rxjs';

@Injectable()
export class AppService {
  constructor(private readonly telegram: TelegramService) {}

  testBot(): Observable<TelegramUser> {
    return <Observable<TelegramUser>>(<unknown>this.telegram.getMe());
  }
}
