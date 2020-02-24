var express = require('express');
var router = express.Router();
const axios = require('axios')

require('dotenv').config()

router.post('/send/telegram', function(req, res, next) {
    let bot = require('../components/Telegram')
    const chat_id_with_kabkee = process.env.CHAT_ID_WITH_KABKEE
    const currentTime = new Date().toTimeString();
    let sendMsg;

    if (!req.body.msg) {
        sendMsg = `Say Hello to Kabkee, ${currentTime}`;
    } else {
        sendMsg = req.body.msg;
    }
    bot.telegram.sendMessage(chat_id_with_kabkee, sendMsg)

    res.send(`Current Time :: ${new Date()}`)
});

router.post('/send/slack', function(req, res, next) {
    // let bot = require('../components/Slack');
    // if (req.body.msg) {
    //     (async() => {
    //         try {
    //             // Use the `chat.postMessage` method to send a message from this app
    //             await bot.chat.postMessage({
    //                 channel: '#look360slackbot',
    //                 text: req.body.msg,
    //             });
    //         } catch (error) {
    //             console.log(error);
    //         }
    //         console.log('Message posted!');
    //     })();
    // } else {
    //     // The current date
    //     const currentTime = new Date().toTimeString();

    //     (async() => {
    //         try {
    //             // Use the `chat.postMessage` method to send a message from this app
    //             await bot.chat.postMessage({
    //                 channel: '#look360slackbot',
    //                 text: `The current time is ${currentTime}`,
    //             });
    //         } catch (error) {
    //             console.log(error);
    //         }
    //         console.log('Message posted!');
    //     })();
    // }

    var postData = {
        text: req.body.msg
    }
    axios.post(process.env.SLACK_WEB_HOOK_URL, postData)
        .then((result) => {})
        .catch((err) => {
            console.error(err);
        })

    res.send(`Current Time :: ${new Date()}`)
});

module.exports = router;
