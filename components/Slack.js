const { WebClient } = require('@slack/web-api');
require('dotenv').config()

const bot = new WebClient(process.env.SLACK_BOT_TOKEN);
module.exports = bot
