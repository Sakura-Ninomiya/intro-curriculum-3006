'use strict';
const bolt = require('@slack/bolt');
const dotenv = require ('dotenv');
dotenv.config();

const app = new bolt.App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true,
  logLevel: 'debug'
});

app.message(/hello/i, ({message, say}) => {
  say('こんにちは！');
});

app.message(/おみくじ/i, ({message, say}) => {
  let items = ["大吉", "中吉", "吉", "小吉", "凶"];
  let lot = lots[Math.floor(Math.random() * items.length)];
  say( `${lot}, <@${message.user}>`);
});

app.start();
