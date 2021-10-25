<!--


---
 'NodeJS : Writing your first telegram bot'
excerpt: 'This post will guide you to create your first inline telegram bot using nodejs'
date: 2018-06-22 00:00:00 IST
updated: 2018-06-22 00:00:00 IST
categories: nodejs
tags: nodejs, telegram, bots
---

-->
<!DOCTYPE html>
<html>

<head>
  <title>basic-git-workflow</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">


  <link rel="stylesheet" href="./css/bootstrap.css">
  <link rel="stylesheet" href="./css/bootstrap.grid.css">
  <link rel="stylesheet" href="./css/bootstrap.min.css">
  <link rel="stylesheet" href="./css/bootstrap-reboot.min.css">
  <link rel="stylesheet" href="./css/bootstrap.css.map">
  <link rel="stylesheet" href="./css/blog-home.css">
  <link rel="stylesheet" href="./css/prism.css">
  <script async defer src="./css/prism.js"></script>
</head>

<body>

[Telegram bots][telegram_bot] helps to add you own custom functionality to telegram by running your own third party applications. It can 
help to [communicate][gifs_bot] or share information, do some fun/informative tasks with in the telegram, can help groups to avoid spam messages or may be 
take a poll in the group.

In this tutorial we will look into [inline mode][inline_mode] bots which users can use them in the text field itself.

### <a class="anchor" name="register-bot" href="#register-bot"><i class="anchor-icon"></i></a>Register bot

Writing an telegram bot starts with the simple task of registering your bot with [@BotFather][bot_father] and get the bot token.
You can create a new bot by sending the command `/newbot` to BotFather.Then BotFather will take you though a interactive chat 
to set the username, description etc and give back the bot token. Once you have the bot token keep it confidential and don't share it with anyone.
In this blog post we are creating an `Inline mode` bot. For this we have to enable inline mode by sending `/setinline` command to BotFather and provide a placeholder text.

### <a class="anchor" name="setup-project" href="#setup-project"><i class="anchor-icon"></i></a>Setup project

Lets setup up a nodejs project using command [npm init -y][npm_init_y]
and install the first and main package [telegram-node-bot][telegram-node-bot] using

```
npm i telegram-node-bot
```

This package uses MVC kind of architecture with router, controller etc. 

Then setup your main controller and router. For inline mode bot the contoller should extend from `Telegram.TelegramBaseInlineQueryController`.

```js
'use strict'

const Telegram = require('telegram-node-bot')

const TelegramBaseInlineQueryController = Telegram.TelegramBaseInlineQueryController
const tg = new Telegram.Telegram(process.env.TELEGRAM_BOT_TOKEN, {
    workers: 1
})

class DuckController extends TelegramBaseInlineQueryController {
    handle($) {
        // handle the query
    }
}

tg.router
    .inlineQuery(new DuckController())
```

By default `telegram-node-bot` uses long-polling to get the updates. If you want to setup the webhook, you can use the option `webhook` along with `workers` option.

```js
const tg = new Telegram.Telegram(process.env.TELEGRAM_BOT_TOKEN, {
    workers: 1,
    webhook: {
        url: process.env.WEBHOOK_URL,
        port: process.env.PORT || 3000,
        host: process.env.WEBHOOK_HOST || 'localhost'
    }
})
```

In my opinion, `webhook` is needed only on `production`. If you want to use `webhook` in development, then you need to expose the local webserver to internet via [ngrok][ngrok] or some other similar services.

### <a class="anchor" name="handling-query" href="#handling-query"><i class="anchor-icon"></i></a>Handling query

Handling query is the part where we want our bot to do the main task which they are intended to do. like search for images, search for google results etc.
For this demo we will convert the user query into [duckduckgo.com][duck] search url.

```js
class DuckController extends TelegramBaseInlineQueryController {
    handle($) {
        const query = $._inlineQuery.query;
        let results = [];
        if (query) {
            results = [{
                id: Math.random().toString(36).substring(7),
                type:'article',
                message_text: `https://duckduckgo.com/?q=${encodeURIComponent(query)}`,
                title: 'Duck It',
                description: `${query}`
            }];
        }
        $.answer(results, {}, function(result) {
        });
    }
}
```

The `handle` method will be called with first argument (`$`) which has the context of message like, what's the user query, who is the user and other details. 
In our case we need only the query send by the user which we can get from `$._inlineQuery.query`.

Next, constuct the results array using appropriate [inline query result type][query_result_type], In this case [article][result_type_article].
Once we have the results constructed, pass it to `$.answer` method and the result will be shown to the users in telegram.

To see our inline bot in action,

```sh
TELEGRAM_BOT_TOKEN=<bot token> node index.js
```

You can optionally add start command (`node index.js`) to npm scripts.

![lmdtf_bot][lmdtfy_gif]

### <a class="anchor" name="hosting-your-bot" href="#hosting-your-bot"><i class="anchor-icon"></i></a>Hosting your bot

You can use any hosting provider to host our bot. For me the easiest to host node project is [heroku][heroku].
You can setup a new project there and get the public url. like `https://yourbot.herokuapp.com` and then setup the `ENV` variable in the project settings.

In this make sure you provide 

* `WEBHOOK_HOST` as `0.0.0.0` and 
* `WEBHOOK_URL` as `https://yourbot.herokuapp.com`

![heroku env vars][heroku_env_vars]

After this go to **BotFather** and set webhookurl using the command `/setwebhookurl` or 
use the api url 

```
https://api.telegram.org/bot<bot token>/setwebhook?url=https://yourbot.herokuapp.com
```

This bot is available as [@lmdtfy_bot][lmdtfy_bot] for telegram users and code on [github][lmdtfy_bot_github]

Hope it helped.


    Versions of Language/packages used in this post.

    | Library/Language  | Version |
    | ----------------- |---------|
    |      Node         |  10.0.0 |
    |      NPM          |  6.0.1  |
    | telegram-node-bot |  4.0.5  |

[telegram_bot]: https://core.telegram.org/bots
[gifs_bot]: https://t.me/gif
[bot_father]: https://telegram.me/botfather
[inline_mode]: https://core.telegram.org/bots#inline-mode
[npm_init_y]: /2018/03/nodejs-npm-init-with-custom-values.html
[telegram-node-bot]: https://npmjs.org/package/telegram-node-bot
[ngrok]: https://ngrok.com/
[duck]: https://duckduckgo.com/
[query_result_type]: https://core.telegram.org/bots/api#inlinequeryresult
[result_type_article]: https://core.telegram.org/bots/api#inlinequeryresultarticle
[lmdtfy_gif]: https://raw.githubusercontent.com/revathskumar/lmdtfy_bot/master/images/lmdtfy.gif
[heroku]: http://heroku.com/
[heroku_env_vars]: https://s3.ap-south-1.amazonaws.com/revathskumar-blog-images/2018/telegram-bot/heroku-vars-updated.png
[lmdtfy_bot]: https://t.me/lmdtfy_bot
[lmdtfy_bot_github]: https://github.com/revathskumar/lmdtfy_bot
