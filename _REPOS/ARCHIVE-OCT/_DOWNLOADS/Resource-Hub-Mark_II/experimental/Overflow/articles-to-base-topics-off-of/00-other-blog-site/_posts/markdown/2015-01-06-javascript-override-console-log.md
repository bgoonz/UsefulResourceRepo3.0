<!--


---
 "JavaScript: override console.log"
excerpt: "How to implement a custom method for logging, by overriding console.log"
date: 2015-01-06 00:00:00 IST
updated: 2015-01-06 00:00:00 IST
categories: javascript
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

I still use `console.log` heavily for debugging purpose. Since I use it more frequently, I want this to really handy and accessed with minimum key strokes. For this I added a [custom snippet](https://github.com/revathskumar/dotfiles/blob/143b9df805ffbed82004b4092e8a537e15b2fb5e/sublime2/User/console.log.sublime-snippet) to my sublime text.

Now this was handy and I started using everywhere and always forgot to remove this debugging statements before pushing to production. So I started searching some solution that `console.log` should be ineffective in production if I forgot to remove the statement.

Thus I finally reached the following solution of custom method for logging.

```js
function l(data) {
  if (App.env == "production" || !window.console) return;
  console.log.call(console, data);
  return;
}
```

Since I already have my app environment in `App.env`, this was pretty easy for me to implement. If the app is in production I just return from `l()` before logging to console.
