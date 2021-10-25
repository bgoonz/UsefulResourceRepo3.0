<!--


---
 "Rails: redirect from router"
excerpt: "Rails: redirect from router itself and using constraints"
date: 2014-11-07 00:00:00 IST
updated: 2014-11-07 00:00:00 IST
categories: rails, routes
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

In one of my recent requirements, I need redirect the people/bot landing on an old/deprecated urls need to redirected to either a new page or to our home page. Usually I do such redirecting from the controller, But recently I came to know that we can even redirect from the router itself.

## Simple redirect

```ruby
match /.*/, to:  redirect('/'), via: :all
```

The above route will match anything and route to homepage. Be cautions to use such routes, and use only in end of your `WhatznearWebApp::Application.routes.draw` block in router file. The routes on top of `draw` block have higher precedence and matched first.

## Redirect with constraints

If you have some constraints for redirects you can use `:constaints` key to impose them.

```ruby
match ":url", to: redirect('/'), via: :all, constraints: { url: /stores-.*/ }
```

In the above route, the request will be redirected to homepage only if the url starts with `stores-`. Make sure you don't use `^`(Regexp anchor characters) to specify `starts with` rails won't accept that.

## Why I am redirecting

If you are thinking of asking me why I am redirecting instead of mapping this to home page, the reasons are

- since the urls are deprecated, I don't want anyone to bookmark this.
- search engine crawlers should know that this url is redirect and should not index as home page.

Comments and corrections are welcome.
If you like this article feel free to share this using the links below.
