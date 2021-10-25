<!--


---
 'React Fiber : Try it now'
excerpt: "Trying out new React Fiber in your project"
date: 2017-01-23 00:00:00 IST
updated: 2017-10-23 00:00:00 IST
categories: react
tags: react, javascript
image: 'http://i653.photobucket.com/albums/uu253/revathskumar/Coderepo/2017/react-fiber/react-fiber_zps0rs4kvgd.jpg'
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

> Disclaimer : **React Fiber** is experimental and do not use it for production. 

**React Fiber** is the new experimental version of `react` with new reconciliation algorithm 
to diff one tree with another.

It take advantage of scheduling, and set priority for each fibers. A unit of work to be done is called a `fiber`.
It uses [requestIdleCallback](https://developer.mozilla.org/en-US/docs/Web/API/Window/requestIdleCallback) to schedule the low priority fibers and [requestAnimationFrame](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame) to schedule the high priority work.

![react-fiber](http://i653.photobucket.com/albums/uu253/revathskumar/Coderepo/2017/react-fiber/react-fiber_zps0rs4kvgd.jpg)

If we want we can give a try, But it not available on npm as of now. So we need to clone the [react](https://github.com/facebook/react/) from github.

``` sh
git clone https://github.com/facebook/react.git
```

Once the clone is complete, you can install the npm dependencies.

``` sh
cd react
npm i
```

Now you can run gulp to build packages from the repo

``` sh
gulp
```

If you are getting any warnings, 

```
Error message "Missing owner for string ref %s" cannot be found. The current React version and the error map are probably out of sync. Please run `gulp react:extract-errors` before building React.
Error message "render(): Invalid component element." cannot be found. The current React version and the error map are probably out of sync. Please run `gulp react:extract-errors` before building React.
Error message "%s(...): Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null." cannot be found. The current React version and the error map are probably out of sync. Please run `gulp react:extract-errors` before building React.
```

You can run `gulp react:extract-errors` and then `gulp`.

![react-build](http://i653.photobucket.com/albums/uu253/revathskumar/Coderepo/2017/react-fiber/Screenshot%20from%202017-01-22%2017-47-21_zpstgfllpbt.png)

Now all the packages are build, and available in `build/packages` directory.

![react-packages](http://i653.photobucket.com/albums/uu253/revathskumar/Coderepo/2017/react-fiber/2c5651b8-77f1-4902-ab2a-ee63e415b934_zps2ylyx2rn.png)

### How to try fiber in your project

Once the package builds are ready, you can navigate into the those directories and run `npm link`.

``` sh
cd build/packages/react
npm link
```

Next link the `react-dom`

``` sh
cd build/packages/react-dom
npm link
```

Now in your project directory, instead if `npm i react` do `npm link react`.

```sh
npm link react
npm link react-dom
```

Now your project bundler can use the latest react from github master. But still it didn't started using the fiber.
For that one last step need to be done. Replace your `react-dom` imports with

``` js
import { render } from 'react-dom/fiber';
```

Thats it, Now you project will be using **React Fiber**.

### Resources :

* [Andrew Clark: What's Next for React — ReactNext 2016](https://www.youtube.com/watch?v=aV1271hd9ew)
* [React Fiber Architecture (Unofficial)](https://github.com/acdlite/react-fiber-architecture)

> Please note that **React Fiber** is experimental and do not use it for production. If you found any bugs, you can file an issue on [github issues](https://github.com/facebook/react/issues).
