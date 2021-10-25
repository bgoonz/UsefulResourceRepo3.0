<!--


---
 "JavaScript : Array assignment creates reference not copy"
excerpt: "JavaScript : Array assignment creates reference not copy"
date: 2015-05-29 00:00:00 IST
updated: 2015-05-29 00:00:00 IST
categories: javascript
tags: javascript, array
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

Consider we have an array `var a = [1,2,3,4];` and we assign `var b = a;` then b not a copy of `a`, `b` is a pointer to `a`. So if you make any changes on `b` will have effect on `a` as well. Here is an example.

```js
var a = [1,2,3,4];
var b = a;
var b.pop();
console.log(b); // [1, 2, 3]
console.log(a); // [1, 2, 3]
```

so if you really want a copy of `a` you need to use `.slice` method.

```js
var a = [1,2,3,4];
var b = a.slice(0);
var b.pop();
console.log(b); // [1, 2, 3]
console.log(a); // [1, 2, 3, 4]
```

JavaScript doesn't have a clone method for array, so if you really want, you can define yourself on `Array` but its not highly recommended.

```js
Array.prototype.clone = function () {
  return this.slice(0);
};
```

Now you can call `.clone` on any Array type.

```js
var a = [1,2,3,4];
var b = a.clone();
var b.pop();
console.log(b); // [1, 2, 3]
console.log(a); // [1, 2, 3, 4]
```

I recommend to keep this in mind when ever you are dealing with JavaScript Array's, else you might facing some unexpected behaviour and wonder why it happens.

Happy coding.
