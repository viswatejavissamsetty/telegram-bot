import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Context } from 'telegraf';

@Injectable()
export class ChartGuardGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const message = context.switchToRpc().getData<Context>().message;
    console.log(message);

    return true;
  }
}
