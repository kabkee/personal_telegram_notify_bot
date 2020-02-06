const Telegraf = require('telegraf')
require('dotenv').config()

const bot = new Telegraf(process.env.BOT_TOKEN)
const chat_id_with_kabkee = process.env.CHAT_ID_WITH_KABKEE

function sleep(millis) {
    return new Promise(resolve => setTimeout(resolve, millis));
}

bot.start((ctx) => {
    let chat_id = ctx.update.message.chat.id;
    console.info('chat_id :: ', chat_id)
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

module.exports = bot