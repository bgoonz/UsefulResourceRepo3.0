<!--


---
 "CSS : Hide up/down buttons on number field"
excerpt: "CSS : Hide up/down buttons on number field"
date: 2014-07-21 00:00:00 IST
updated: 2014-07-21 00:00:00 IST
categories: css
tags: css
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

While working on the responsive version of [whatznear](http://whatznear.com), we wanted to use `<input type="number">` for the pincode so that mobile can show the appropriate the keyboard. But when we use number type in desktop it will show a up/down buttons. The up/down spins for a pincode input is doesn't look appropriate.

## Here is how you can hide those up/down spins with CSS.

![Input spin](http://i653.photobucket.com/albums/uu253/revathskumar/Coderepo/2014/07/5ffea443-1a5f-424c-9650-407158a048be_zpsa4806bc6.png)

```css
input[type="number"] {
  -moz-appearance: textfield;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  /* display: none; <- Crashes Chrome on hover */
  -webkit-appearance: none;
  margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
}
```

This will ensure that appropriate keyboard will be show in mobile and input element looks
similar to textbox on desktop.
