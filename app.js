const Telegraf = require('telegraf')
    // const Telegram = require('telegraf/telegram')

require('dotenv').config()

const bot = new Telegraf(process.env.BOT_TOKEN)

function sleep(millis) {
    return new Promise(resolve => setTimeout(resolve, millis));
}

bot.start((ctx) => {
    // let chat_id = ctx.update.message.chat.id;
    ctx.reply('Hi, you got me started!')
})

bot.help((ctx) => {
    ctx.reply('Send me a sticker')
})
bot.on('sticker', (ctx) => {
    ctx.reply('👍')
})
bot.hears('hi', (ctx) => {
    ctx.reply('Hey there')
})
bot.launch()