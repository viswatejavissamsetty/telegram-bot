import { UseGuards } from '@nestjs/common';
import { readFileSync } from 'fs';
import {
  Action,
  Ctx,
  Hears,
  Help,
  InjectBot,
  On,
  Start,
  Update,
} from 'nestjs-telegraf';
import { Context, Markup, Telegraf } from 'telegraf';
import { ChartGuardGuard } from './chartguard.guard';

@Update()
export class AppUpdate {
  constructor(@InjectBot() private readonly bot: Telegraf<Context>) {}

  @Start()
  async startCommand(ctx: Context) {
    await ctx.reply(
      'Hello world',
      Markup.keyboard(
        [
          Markup.button.callback('Apple', 'apple'),
          Markup.button.callback('Banana', 'banana'),
          Markup.button.callback('Mango', 'mango'),
        ],
        { columns: 3 },
      ),
    );
  }

  @Hears('apple')
  async getAll(@Ctx() ctx: Context) {
    await ctx.reply('Hi');
  }

  @On('photo')
  async handlePhoto(ctx: Context) {
    await ctx.reply('Succesfullly received photo');
  }

  @Hears('Hi')
  @UseGuards(ChartGuardGuard)
  async hearsHi(@Ctx() ctx: Context) {
    await ctx.reply('Hey there');
  }

  @On('text')
  async handleMessage(@Ctx() ctx: Context) {
    await ctx.reply('Succesfullly received message');
  }

  @Help()
  async handleHelp(ctx: Context) {
    await ctx.reply('Received help ' + JSON.stringify(ctx.message));
  }
}
