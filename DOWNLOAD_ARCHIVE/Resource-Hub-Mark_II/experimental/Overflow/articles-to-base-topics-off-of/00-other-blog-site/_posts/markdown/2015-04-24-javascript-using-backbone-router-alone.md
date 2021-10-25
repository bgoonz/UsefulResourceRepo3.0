<!--


---
 "JavaScript : Using backbone router alone"
excerpt: "JavaScript : Using backbone router alone using exoskeleton"
date: 2015-04-24 00:00:00 IST
updated: 2015-04-24 00:00:00 IST
categories: backbone
tags: backbone
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

In many projects I needed the functionality of a router. Adding backbone just for the router seems heavy for me beacause heavily coupled with Underscore.js. But then I found exoskeleton.

[Exoskeleton](http://exosjs.com/) is a faster and leaner Backbone for your HTML5 apps. It's not coupled with any external libraries and you can make a custom build with modules you only need. There are other routers available for javascript but I prefer this because I already know its api.

## Custom build of Backbone Router

Creating a custom build with exoskeleton is easy. Clone exoskeleton from [github](https://github.com/paulmillr/exoskeleton).

```sh
git clone  git@github.com:paulmillr/exoskeleton.git
```

Now in the `lib` directory there will be the individual modules without any dependencies. In those files `header` and `footer` are some common files you require in most builds.

Since I need only `router` with event capabilities, this is what my custom build look like.

```sh
cat lib/{header,utils,events,history,router,footer}.js > exoskeleton.js
```

Then minify using make if needed. Its uses [uglifyjs](https://www.npmjs.com/package/uglifyjs) for minification.

```sh
make min
```

Now I have the independent `Backbone.Router` which I can use with any other javascript framework.
