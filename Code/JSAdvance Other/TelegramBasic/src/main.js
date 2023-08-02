import 'dotenv/config';
import { Telegraf } from 'telegraf';

const main = async () => {
  // Chỉ cần api key của bot + channel id  tạo được 1 bot có thể gửi message vào channel
  const token = process.env.TELEGRAM_TOKEN;
  const channelID = process.env.TELEGRAM_CHANNEL_ID;
  const message = '⏰⏰⏰ Message được gửi tự động khi đến thời hạn!!!';

  const bot = new Telegraf(token);
  await bot.telegram.sendMessage(channelID, message);
};

export default main;
