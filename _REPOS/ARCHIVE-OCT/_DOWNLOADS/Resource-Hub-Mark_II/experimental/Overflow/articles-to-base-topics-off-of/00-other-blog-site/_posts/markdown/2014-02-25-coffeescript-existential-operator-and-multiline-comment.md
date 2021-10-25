<!--


---
 "CoffeeSctipt : Existential operator &amp; Multiline comment"
date: 2014-02-25 11:00:00 IST
updated: 2014-02-25 11:00:00 IST
categories: CoffeeSctipt
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

Eventhough I am using CoffeeScript for a couple of months now, many of the feature were still unknown to me. Two days before I got hands into two such features which I wish I have known from the beginning.

# Existential Operator

Existential operator will help you to check whether the variable exists or not. It is similar to ruby's `.nil?` method. consider we have a variable named `open`. we can check whether when open exists using `open?` which returns `true` if the variable is already defined.

```coffeescript
if open?
  console.log "Hello"

```

This wil be compiled to

```js
if (typeof open !== "undefined" && open !== null) {
  console.log("Hello");
}
```

[Try it yourself](http://coffeescript.org/#try:if%20open%3F%0A%20%20console.log%20%22Hello%22).

This can be used to set the default values/ conditional assinments like

```coffeescript
data = {}
data.open ?= true
```

It says, if `data.open` is `null` then set it to `true`. This will be compiled to

```js
if (data.open == null) {
  data.open = true;
}
```

[Try it yourself](http://coffeescript.org/#try:data%20%3D%20{}%0Aopen%20%3F%3D%20true).

You can read more about exisitential operator below the [operators](http://coffeescript.org/#operators) section.

# Multiline comments

Couple of days before only I came to know about the multiline comment with `###` in CoffeeScript. Till that I were using `#`(single line comment).

```coffeescript
###
 $->
   console.log "Hello"
###
```
