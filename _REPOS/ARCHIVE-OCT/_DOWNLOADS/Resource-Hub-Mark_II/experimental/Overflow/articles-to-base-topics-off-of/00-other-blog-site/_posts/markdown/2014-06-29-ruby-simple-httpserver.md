<!--


---
 "Ruby: Simple HttpServer"
excerpt: "Simple HttpServer in Ruby"
date: 2014-06-29 11:00:00 IST
updated: 2014-06-29 11:00:00 IST
categories: ruby
tags: ruby
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

Most time to run my experiments on JavaScript, I was always in need of some simple way to serve html files and assets from a directory. Since I am a Rubyist, the easiest way to use ruby for it. So here is the simple command which will serve your files from your current directory using the port 5000.

It uses WEBrick HTTP server.

```sh
ruby -run -e httpd . -p 5000
```

Here is the explanintion for it. Here you can see `-run` but it actually we are using `-r` option, like `-r un`.

The `-r<library>` option will `require the library before executing your script`. When we say `-run` it will load `un.rb` in the ruby path. `un.rb` comes along with ruby installation.

The `-e <command>` option will run the one line script. Here the `un.rb` have a method called `httpd` since we already loaded `un.rb` with `-r` option we can execute the httpd method using `-e` option.

After the command, the `.` indicates the current directory and `-p` to specify the port.
