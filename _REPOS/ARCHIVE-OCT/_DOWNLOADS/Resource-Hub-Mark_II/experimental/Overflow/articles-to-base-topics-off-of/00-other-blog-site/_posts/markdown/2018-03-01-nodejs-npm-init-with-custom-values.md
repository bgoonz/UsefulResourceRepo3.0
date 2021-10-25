<!--


---
 'NodeJS : npm init with custom values'
date: 2018-03-01 00:02:00 IST
updated: 2018-03-01 00:02:00 IST
categories: nodejs
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

`npm init` command is the simplest way to start a project, but filling answers to those questions are irritating. If we use `npm init -y` it will skip all the questions, but it will generate the `package.json` with npm default values. We have to update the author details, version and license later.

To make this easier we can set the author details, starting version and our favorite license in the `.npmrc` file so that next time we do `npm init -y` instead of npm default npm use `.npmrc` and fill the details.

### npm config

We can use the `npm config` command to set those values to our global `.npmrc`.

```sh
npm config set init-author-name "Your name"
npm config set init-author-email "yourname@email.com"
npm config set init-author-url "http://example.com/"
npm config set init-license "MIT"
```

Now the `.npmrc` will have these configuration

```
init-author-name=Your name
init-author-email=yourname@email.com
init-author-url=http://example.com/
init-license=MIT
```

Next time when we do `npm init -y` this will set the author name as **"Your name"**, email as **"yourname@email.com"**, url as **"http://example.com/"** and license as **"MIT"**.

For more details on npm config check the [official doc](https://docs.npmjs.com/misc/config)

Hope it helped.  
Let me know if you have any feedback or corrections via comments
