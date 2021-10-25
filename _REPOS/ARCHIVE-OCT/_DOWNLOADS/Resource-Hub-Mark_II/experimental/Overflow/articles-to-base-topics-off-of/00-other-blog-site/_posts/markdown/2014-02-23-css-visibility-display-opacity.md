<!--


---
 "CSS : Visibility, Opacity and Display"
date: 2014-02-23 21:00:00 IST
updated: 2014-02-23 21:00:00 IST
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

Until last wednesday, I was really confused about the functionality of `visibility`, `opacity` and `display` properties. Then [Shidhin](http://twitter.com/shidhin) spend some time, explained and make me understand what are the difference between those.

In this post, I am trying to summarize the difference between `visibility:hidden`, `display:none` and `opacity:0`.

# Demo

<a class="jsbin-embed" href="http://jsbin.com/fupeb/6/embed?output,css">JS Bin</a><script src="http://static.jsbin.com/js/embed.js"></script>

# Visibility

Using the visibility property in CSS, we can toggle the visibility of an element using the values `hidden` or `visible`. If we make the the element hidden, it will be hidden from the user and user can't access it's child, but still in the DOM, `the space of the element will be consumed`.

In the demo above, You can see a box below the text visibility.The box look like a rectangle even the child element is given `visibility:hidden` proves that it still consumes the space on DOM.

# Opacity

If we use `opacity:0` to hide an element, in the fist look it looks like hidden, but still the user `can access the child element`. It also `consume the space` of the element in the DOM.

In the above demo, you can try mousehover on the box just below the text opacity. You can see that the curson turns to pointer. Its because there is a link inside that box, which will open `google.com` in a new tab. Now go ahead and try a click, hooray a new tab opens even though its parent is not visible to our eyes.

# Display

If we use `display:none`, the browser will consider as if the element is not available in the DOM as the result it won't consume the space.

In the demo above, you can see that the box below the text display is turned into a line and when you try to comment the `display:none` in the CSS panel it truns back to normal rectangular box.
