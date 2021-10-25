<!--


---
 "Rails : Disable slim template HTML minification in development"
excerpt: "Rails : Disable slim template HTML minification in development"
date: 2014-07-01 00:00:00 IST
updated: 2014-07-01 00:00:00 IST
categories: rails, slim
tags: rails, slim
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

We were using [slim template](http://slim-lang.com/) at [whatznear](http://whatznear.com/). Slim will minify HTML by default even in development. I found it bit annoying and difficult to debug in development environment.

In order to disable HTML minifiaction by default, you can set `pretty` option to `true` in `config/environments/development.rb`.

Add the below code to the `Application.configure` block in `development.rb`.

```rb
# config/environments/development.rb
YourApp::Application.configure do
  # ...
  Slim::Engine.set_default_options pretty: true
  # ...
end
```

Be careful not use spaces, to adjust you design. Since the minification is disabled in development, the design might be good but there is a chance the design will break in production since the slim will minify the HTML and trim all the possible spaces.
