<!--


---
 "Ruby : write logs into log file synchronously"
date: 2013-08-23 12:29:00 IST
updated: 2013-08-23 12:29:00 IST
categories: ruby
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

Most time when I redirect the logs to a log file, I noticed that log are not written to log file in real time (synchronously), rather they will wait and flush a set of logs all together at some time. Its quite difficult for us to debug in this situtaion.

To avoid this, try the below snippet in your code.

{% highlight ruby %}
$stdout.sync = true
{% endhighlight %}

Happy debugging.
