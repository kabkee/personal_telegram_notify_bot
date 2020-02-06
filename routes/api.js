var express = require('express');
let bot = require('../components/Telegram')
var router = express.Router();

require('dotenv').config()
const chat_id_with_kabkee = process.env.CHAT_ID_WITH_KABKEE

router.get('/send/kabkee/:msg?', function(req, res, next) {
    let sendMsg;
    if (!req.params.msg) {
        sendMsg = 'Say Hello to Kabkee'
    } else {
        sendMsg = req.params.msg;
    }
    bot.telegram.sendMessage(chat_id_with_kabkee, sendMsg)

    res.send(`Current Time :: ${new Date()}`)
});


module.exports = router;