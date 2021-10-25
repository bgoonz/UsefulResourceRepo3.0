<!--


---
 "Express.js : Github authentication with passport"
excerpt: "Configure github authentication with express.js and passport"
date: 2014-06-06 00:00:00 IST
updated: 2014-06-06 00:00:00 IST
categories: nodejs, express
tags: express, passport, github, authentication
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

[Express.js](http://expressjs.com) is one of the popular web application framework for Node.js. To implement Github authentication [passport](http://passportjs.org/) module seems to really flexible.

To start, register a new application on Github goto [Account > Applications > Register new application](https://github.com/settings/applications/new). This will yield you a client id and client secret for your application which we will use later. While registering new appplication they will ask for a callback url, let it be `http://localhost:3000/auth/callback`.

# Install passport

After creating new express.js project install the [passport](https://www.npmjs.org/package/passport) and [passport-github](https://www.npmjs.org/package/passport-github) Strategy.

```sh
npm install passport passport-github --save
```

# Configure passport

To configure, start with require passport and passport-github strategy into your application.

```js
// app.js
var passport = require("passport");
var GithubStrategy = require("passport-github").Strategy;
```

Now initialize the passport middleware with `app.use`. Usually, a freshly baked express.js doesn't use `cookieParse` and `session` middleware so before adding passport middleware add those to your application. You will receive some weird errors if you didn't. Also I recommend to use them in the following order after `app.use(express.methodOverride());`

```js
app.use(express.cookieParser());
app.use(express.session({ secret: "mysecret" }));
app.use(passport.initialize());
app.use(passport.session());
```

# Configure github strategy

```js
// app.js
passport.use(
  new GithubStrategy(
    {
      clientID: "your app client id",
      clientSecret: "your app client secret",
      callbackURL: "http://localhost:3000/auth/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, {
        accessToken: accessToken,
        profile: profile,
      });
    }
  )
);
```

Github doen't have a `refreshToken` so we don't care about it. The object we passed to `done()` method will be received by `serializeUser`.

In order to maintain the users session,
Passport will serialize and deserialize `user` instances to and from the session. we need to configure those methods as our needs.

```js
// app.js
passport.serializeUser(function (user, done) {
  // for the time being tou can serialize the user
  // object {accessToken: accessToken, profile: profile }
  // In the real app you might be storing on the id like user.profile.id
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  // If you are storing the whole user on session we can just pass to the done method,
  // But if you are storing the user id you need to query your db and get the user
  //object and pass to done()
  done(null, user);
});
```

The `serializeUser` will store the user id in the session and `deserializeUser` will get the user from our database and store it in `req.user`.

# Configure routes

We need to configure the routes for auth callback and error.

```js
// app.js
app.get("/auth", passport.authenticate("github"));
app.get("/auth/error", auth.error);
app.get(
  "/auth/callback",
  passport.authenticate("github", { failureRedirect: "/auth/error" }),
  auth.callback
);
```

The implementation of the routes are upto you.

```js
// routes/auth.js
exports.callback = function (req, res) {
  // In the real application you might need to check
  // whether the user exits and if exists redirect
  // or if not you many need to create user.
  res.send("Login success");
};

exports.error = function (req, res) {
  res.send("Login Failed");
};
```

Thats it, you successfully implemented the github authentication for you express.js app with passport. In this I just skipped the usage of models and store the data to make it short. Consider this as a steeping stone and if you have any issues on implementing this in a real app, lemme know via comments. I will try my best to address it.

Until next time.
Thank you.
