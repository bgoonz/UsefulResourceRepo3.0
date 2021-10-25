<!--


---
 "JavaScript : window.onbeforeunload"
excerpt: "Adding a simple prompt when user try to close or refresh the window using window.onbeforeunload"
date: 2015-08-06 00:00:00 IST
updated: 2015-08-06 00:00:00 IST
categories: javascript
tags: javascript
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

When you want to ask a confirmation from user about leaving a webpage by closing or refreshing window when their work is not saved, you can use `window.onbeforeunload` event for it.

unlike other events the use of `confirm`, `alert` and `prompt` will be ignored inside `onbeforeunload` event. We should return the message that we want show to the user.

```js
window.onbeforeunload = function (e) {
  return "Are you sure you want leave?";
};
```

if you are using jQuery,

```js
$(window).on("beforeunload", function (e) {
  return "Are you sure you want leave?";
});
```

But if you want to support some IE versions, returning message won't help you. You need to set the `event.returnValue` with the message.

```js
window.onbeforeunload = function (e) {
  message = "Are you sure you want leave?";
  e.returnValue = message;
  return message;
};
```

If you want this prompt to be conditional then,

```js
window.onbeforeunload = function (e) {
  if (inputChanged) {
    var message = "Are you sure you want leave?";
    e.returnValue = message;
    return message;
  }
  return;
};
```

Any value except `null` returned will be converted into string. You can unbind this event by assigning `null`.

```js
window.onbeforeunload = null;
```

and in jQuery, using `off` method.

```js
$(window).off("beforeunload");
```

Here is a demo on [jsbin](http://jsbin.com/bidehe/edit?html,js,output).
