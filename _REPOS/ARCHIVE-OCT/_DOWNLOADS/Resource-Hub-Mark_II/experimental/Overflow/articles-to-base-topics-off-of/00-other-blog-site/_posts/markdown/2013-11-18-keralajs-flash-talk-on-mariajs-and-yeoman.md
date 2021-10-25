<!--


---
 "Slides : flash talk on MariaJS and Yeoman"
date: 2013-11-18 18:19:00 IST
updated: 2013-11-18 18:19:00 IST
categories: talks
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

# Summary

This is just a summary of my unprepard flash talk on [MariaJS](http://peter.michaux.ca/maria/) and [Yeoman](http://yeoman.io) in [KeralaJS](http://keralajs.org) meetup. I was really happy that I am able to introduce MariaJS and Yeoman to community. Most of them were already heard and used about Yeoman, But MariaJS was really new to everyone. I started my talk with **What's MariaJS** and **How it's different from other MV\* frameworks**. My intension was not to start a debate on JS frameworks, but rather make them understand other JS frameworks availabe now are not MVC.

# MariaJS

Since there were no slides, I was not able to share them who is behind and where you can find the docs and more details of it. Please find those details below.

Here is the explanation of MVC by Peter Michaux.

    There is a model that is at the heart of the whole thing. If the model
    changes, it notifies its observers that a change occurred. The view is the
    stuff you can see and the view observes the model. When the view is
    notified that the model has changed, the view changes its appearance. The
    user can interact with the view (e.g. clicking stuff) but the view
    doesn't know what to do. So the view tells the controller what the user
    did and assumes the controller knows what to do. The controller
    appropriately changes the model. And around and around it goes.

- Created by : [Peter Michaux](http://peter.michaux.ca/)

  - Github : [@petermichaux](https://github.com/petermichaux)
  - Twitter : [@petermichaux](http://twitter.com/petermichaux)

- MariaJS : [website](http://peter.michaux.ca/maria/)
  - [Source](https://github.com/petermichaux/maria)
  - [Docs](http://peter.michaux.ca/maria/api/maria.html)
  - [TodoMVC](http://todomvc.com/architecture-examples/maria/)

# Yeoman

Yeoman helps you to generate bootstap for your application. You can turn your idea into prototype within in 10 mins and no more manual setup for your project. Yeoman will create directory structure, bootstrap files, download libraries for you.

If you want, you can take a look into my presentation from [Kerala Ruby User Group](http://krug.github.io) meetup in August 2013.

<script async class="speakerdeck-embed" data-id="3d9e1a602494013115bc024f2b53895d" data-ratio="1.29456384323641" src="//speakerdeck.com/assets/embed.js"></script>

And at last here is my [source](http://andrzejonsoftware.blogspot.in/2011/09/rails-is-not-mvc.html) from which I said **Rails is not MVC**.
