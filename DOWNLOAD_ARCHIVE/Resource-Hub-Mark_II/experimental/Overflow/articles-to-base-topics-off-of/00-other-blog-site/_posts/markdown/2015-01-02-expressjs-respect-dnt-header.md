<!--


---
 "Express.js : respect DNT header"
excerpt: "Express.js : respect DNT header"
date: 2015-01-02 00:00:00 IST
updated: 2015-01-02 00:00:00 IST
categories: javascript, express, nodejs
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

Nowadays big companies like google and facebook are tracking uses even they are logged out. Most of the sites are now installed with facebook like button and google analytics which help them to track users easily.

We might need Google analytics and Facebook like button for our apps to reach and target users. Many users really don't want to be tracked and care about their privacy. Installing these trackers for those users is against our ethics. Its our duty to respect the privacy of our users.

But how we will know whether users don't want to be tracked when they visit our website?

Now every popular browsers are equipped with a **Do not track (DNT)** settings. The people who care about privacy, will have DNT enabled in their browsers. If the user is enabled Do not Track, the browser will send a **DNT** flag with headers. Using this flag you can identify the users who care for privacy and can be opt out from installing tracker for them.

Recently, when I released [Gist reader](http://gistreader.herokuapp.com/), a toy app for reading gists written in markdown, I thought I don't want to install any tracker for those users who send **DNT** header. Since _Gist reader_ was build with [Express.js](http://expressjs.com) I can show you how I opt out Google Analytics for users with DNT flag.

Since DNT should be implement though out all the pages, I implemented it as a middleware. You can get the value of DNT header from `req.headers.dnt`. I used the value from `req.headers.dnt` and passed to view using [app.set](http://expressjs.com/api.html#app.set). The value of `req.headers.dnt` will **`1`** if the user enable DNT and **`0`** if they didn't.

```js
// In app.js
app.use(function (req, res, next) {
  app.set("dnt", req.headers.dnt);
  next();
});
```

Now the value of DNT header will be available in views via `settings` variable and we can install Google Analytics tracker for those DNT header value is **`0`**.

```jade
// layout.jade
unless settings.dnt
  script
    | (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    | (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    | m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    | })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

    | ga('create', 'UA-xxxxxxx-xx', 'auto');
    | ga('send', 'pageview');
```

Done. Now you are respecting the users privacy by not installing the trackers. Same way you can replace the Facebook like/share button with a simple share link.
