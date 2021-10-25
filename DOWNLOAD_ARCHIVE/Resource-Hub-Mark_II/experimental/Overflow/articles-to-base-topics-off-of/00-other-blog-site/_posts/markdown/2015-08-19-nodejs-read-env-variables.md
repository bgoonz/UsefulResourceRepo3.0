<!--


---
 "Nodejs : read env variables"
excerpt: "Nodejs : read env variables"
date: 2015-08-19 00:00:00 IST
updated: 2015-08-19 00:00:00 IST
categories: nodejs
tags: nodejs
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

Environment variables are really handy to pass value to a process. It really helps you to easily set the environment like development or production or pass a port number to use, so you don't want change the code to set a temporarily value.

You can read the environment variables in nodejs using

```js
process.env.VARIABLE_NAME;
```

For example if you want to pass the port number, you can use

```js
var port = process.env.PORT || 9000;
```

so it will take `9000` as the default port and if you want change the port temporarily, you can run like

```sh
PORT=9002 node app.js
```

Hope that helped you.
