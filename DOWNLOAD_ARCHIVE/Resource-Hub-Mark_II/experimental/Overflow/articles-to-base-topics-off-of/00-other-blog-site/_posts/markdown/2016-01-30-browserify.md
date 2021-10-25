<!--


---
 "Bundle using Browserify"
excerpt: "Bundle using Browserify"
date: 2016-01-30 00:00:00 IST
updated: 2016-01-30 00:00:00 IST
categories: javascript, browserify
tags: javascript, browserify
image: http://www.braveterry.com/wp-content/uploads/2014/11/browserify.png
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

![browseify]({{ page.image }})

Browserify helps you to bring node modules to browser. You can write frontend javascript as commonjs modules and require in browser. Also it helps to manage packages using npm and we no more need a different package manager for frontend.

```js
// utils.js
var get = function () {
  console.log("get");
};

var set = function () {
  console.log("set");
};

module.exports = {
  get: get,
  set: set,
};
```

Now I can require this module in my other modules like

```js
// src/start.js
var utils = require("./utils.js");

utils.set();
utils.get();
```

Now we can bundle this common js modules using browserify. We will start with installing the browserify.

```
npm install --save browserify
```

Now we an bundle it using the browserify command.

```
./node_modules/.bin/browserify src/start.js -o index.js
```

Now you can use the index.js in browser using script tag.

```html
<script src="index.js"></script>
```

## Watch and bundle

If you want browserify to bundle each time you make change to source, you need to install `watchify`.

```
npm install --save watchify
```

Now you can watch and bundle each time you make changes to source.

```
./node_modules/.bin/watchify src/start.js -o index.js
```

## Transforms

Tranforms can be used to convert source files like converting `.coffee` files or convert ES6 to ES5 while bundling. In order to to this you need to install tranforms like `coffeeify` or `babelify`.

For transform ES6, you need to install `babelify` and `babel-preset-es2015`.

```
npm i --save babelify babel-preset-es2015
```

Now you can use `-t` option to specify the transform while bundle.

```
./node_modules/.bin/browserify -t [ babelify --presets [ es2015 ] ] src/start-es6.js -o index-es6.js
```

When you provide options for babelify make sure to put spaces around the `[` and `]`.

You can also specify presets using `.babelrc`. You can find more information at [babeljs setup](/2016/01/babeljs-writing-next-generation-js.html).

## Using with react

You can use `browserify` with `babelify` to bundle react modules as well. For that you need to install `babel-preset-react`.

```
npm i --save babelify babel-preset-react
```

Now specify `react` along with `es2015` preset in `--presets` option.

```
./node_modules/.bin/browserify -t [ babelify --presets [ es2015 react ] ] src/start.jsx -o index.js
```

You can pass the same options to `watchify` to watch and bundle the changes.

We will discuss the browserify with gulp, splitting the bundles and making the bundling faster in the upcoming posts.

image courtesy [braveterry.com](http://www.braveterry.com)
