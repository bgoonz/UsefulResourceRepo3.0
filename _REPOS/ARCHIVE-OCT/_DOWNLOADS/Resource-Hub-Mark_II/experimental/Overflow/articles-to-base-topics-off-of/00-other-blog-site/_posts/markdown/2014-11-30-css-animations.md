<!--


---
 "CSS: Getting started with animations"
excerpt: "CSS: Getting started with animations"
date: 2014-11-30 00:00:00 IST
updated: 2014-11-30 00:00:00 IST
categories: css
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

[Whatznear](http://whatznear.com) is using CSS animation for the loading indicators. So inorder to work on this I need to learn some basics of CSS animations. This is just my expeimental work to see how the do simple CSS animations.

At present the CSS animations is a experimental technology and all the major browsers are now supportted with vendor prefixes. I hope when this get standardised they will remove the vendor prefixes. From IE 10, animations are supported.

# animation

`animation` property is the shorthand to properties like animation-name, animation-duration, animation-timing, animation-delay, animation-iteration-count, animation-direction, animation-fill-mode and animation-play-state.

The formal synatax is

```css
animation: name duration timing delay iteration-count direction fill-mode
  play-state;
```

In this `timing` and `delay` accepts time and the first time value seen by parser will be assigned to `timing` and second will be assigned to `delay`. So the order of values are important.

The various vendor prefixes are

> - Mozilla Firefox : `-moz-`
> - Chrome/Safari : `-webkit-`
> - Opera : `-o-`

If you are familiar with flash animations, you will already know that time will be divided into lot of frames and we will place the object in different places for each frame and when they are executed we will feel like the object is moving. The same concept is used here as well. Using `@keyframes` we tell CSS engine to what to do with the object at a particular frame.

# @keyframes

`@keyframes` let the author control over animation sequence, and author can tell what to do when it reach this particular sequence. We will define a `@keyframes` with a name and that name will be provided as `animation-name`.

```css
@keyframes some-name {
  from {
  }
  to {
  }
}
```

Lets get into some real animation like rotation.

# boilerplate

Let me add some boilerpate code say, placeholder for the animators. lets create some lines so we can do some animations over it.

```html
<!-- Boilerplate HTML -->
<div class="wrapper">
  <div class="line1">Loading...</div>
</div>
```

```css
/* Boilerplate CSS for wrapper and lines/holder */
.wrapper {
  background-color: #fff;
  width: 50%;
  height: 100%;
  padding: 5px;
}

.line1 {
  width: 100px;
  height: 20px;
  background-color: #000;
  color: #fff;
  position: relative;
}
```

So if I want to rotate the `.line1`

```css
@-moz-keyframes rotate_some {
  0% {
    -moz-transform: rotate(0deg);
  }
  25% {
    -moz-transform: rotate(90deg);
  }
  50% {
    -moz-transform: rotate(180deg);
  }
  75% {
    -moz-transform: rotate(270deg);
  }
  100% {
    -moz-transform: rotate(360deg);
  }
}
```

Here we use `tranform` property to rotate the object. The `tranform` property will accept a function, in this case `rotate` and `rotate` method will accept the angle to which it should rotate.

So in the `@keyframes` we have already specified 5 interavals `0%`, `25%`, `50%`, `75%` and `100%`. You can specify any number of intervals to make your animation smooth. In each interval we have said that how much degree we should rotate the object. Then we will give the `@keyframes` name to our `animation` property with values like `duration` and `iteration-count`. By default the the `timing` is ease.

```css
.line1 {
  -moz-animation: rotate_some 2s infinite;
}
```

since `@keyframes` is vendor specific the above code will work only in firefox. In order to support others

```css
/* For Safari and Chrome */
@-webkit-keyframes rotate_some {
  0% {
    -webkit-transform: rotate(0deg);
  }
  25% {
    -webkit-transform: rotate(90deg);
  }
  50% {
    -webkit-transform: rotate(180deg);
  }
  75% {
    -webkit-transform: rotate(270deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

/* for Opera */
@-o-keyframes rotate_some {
  0% {
    -o-transform: rotate(0deg);
  }
  25% {
    -o-transform: rotate(90deg);
  }
  50% {
    -o-transform: rotate(180deg);
  }
  75% {
    -o-transform: rotate(270deg);
  }
  100% {
    -o-transform: rotate(360deg);
  }
}

.line1 {
  -webkit-animation: rotate_some 2s infinite;
  -o-animation: rotate_some 2s infinite;
}
```

`tranform` property also support other transformations like `skew`, `translate`, `scale` etc.
You can try those tranformations as well. Here is a jsbin with some of those transforms are implemented.

<a class="jsbin-embed" href="http://jsbin.com/wudel/4/embed?css,output">JS Bin</a><script src="http://static.jsbin.com/js/embed.js"></script>
