<!--


---
 "Sublime Text handler for firefox in Ubuntu"
excerpt: "Sublime Text handler for firefox in Ubuntu"
date: 2014-07-02 00:00:00 IST
updated: 2014-07-02 00:00:00 IST
categories: rails, sublime
tags: rails, sublime, better-errors
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

[Better errors](https://github.com/charliesome/better_errors) is a pretty good gem for debugging. It comes with live REPL on the error page which makes debugging lot easier. You can inspect the variable right from the error page with the REPL and even you can switch the context in the stack frame.

Another best thing is you can open the file right from the browser in Sublime Text.

[![Better Errors](http://i653.photobucket.com/albums/uu253/revathskumar/Coderepo/2014/07/3d610a9c-fd0b-491d-8a20-56a74b91c066_zpsd222cd62.png)](http://i653.photobucket.com/albums/uu253/revathskumar/Coderepo/2014/07/3d610a9c-fd0b-491d-8a20-56a74b91c066_zpsd222cd62.png).

When you click on the filename `app/controllers/home_controller.rb` (the one marked on the above image) it open the file, in your editor. But in order to this work on ubuntu, you need to register a handler for it.

To register the handler, copy the below code into a file and save it somewhere the shell can find it.

```sh
#!/usr/bin/env bash

request=${1:23}               # Delete the first 23 characters
request=${request//%2F//}     # Replace %2F with /
request=${request/&line=/:}   # Replace &line= with :
request=${request/&column=/:} # Replace &column= with :
subl $request                 # Launch ST2
```

I saved this in `~/bin` since `~/bin` is already availabe in my `$PATH`. Make sure you have given that file and executable permission.

After saving the handler, when you click on filename (shown in the image above), firefox will ask to point out the handler for subl.

[![firefox](http://i653.photobucket.com/albums/uu253/revathskumar/Coderepo/2014/07/fafd05e5-2775-41d2-8e46-f47ea7bdb44a_zpsd2818e43.png)](http://i653.photobucket.com/albums/uu253/revathskumar/Coderepo/2014/07/fafd05e5-2775-41d2-8e46-f47ea7bdb44a_zpsd2818e43.png)

Click on choose and select your handler. Make sure you check the "remember my choice" option so that firefox won't ask the same again.

Easy debugging.
