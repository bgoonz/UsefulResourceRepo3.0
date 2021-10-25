<!--


---
 "JavaScript: currying and chaining"
excerpt: "JavaScript: currying and chaining"
date: 2014-12-02 00:00:00 IST
updated: 2014-12-02 00:00:00 IST
categories: javascript
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

# Currying

A function which accepts a one or more arguments of func which wither invoked when all the arguments are passed or return a function which accepts one or remaining arguments.

```js
var add = function (a) {
  return function (b) {
    return a + b;
  };
};

add(5)(100); //returns 105
```

Please not that the above one is just a simple of mine and not fully compatible with the spec/definition above.

# Building API for chaining

After learning about currying, promises and RxJS, I thought of exploring the how these things are build. So I tried build a simple mockup which can chain methods like in promises.

Let take a collection of todo, let see how can we filter and list only completed tasks.

```js
var collection = [
  { id: 1, task: "task 1", completed: false },
  { id: 2, task: "task 2", completed: false },
  { id: 3, task: "task 3", completed: true },
];
```

We have a collection of tasks now. We can start with a wrapper function which will accept the collection and a chain function called `then`.

```js
var P = function (data) {
  var out = data;
  return {
    then: function (func) {
      out = func(out);
      return this;
    },
  };
};
```

This wrapper function, `P` will accept the collection and return a `object` with `then` method on it so that we can chain other methods. This `then` method can pass the output of a function as the input to the next chain just like in promise. Next we need to filter the completed tasks.

```js
var completed = function () {
  return function (obj) {
    if (obj.completed) {
      return obj;
    }
  };
};

var filter = function (func) {
  return function (obj) {
    return obj.filter(func);
  };
};
```

I have written two methods, `completed` for return the object only if the task is completed and `filter` to apply filter on the collection. Independent small methods helps to maximum reusability. Now we can filter like

```js
P(collection).then(filter(completed())).then(console.log);
```

If I need to get only the task name of the completed tasks, I can write a `get` method to find all the name and plug in between `filter` and `console.log`.

```js
var get = function (key) {
  return function (obj) {
    if (obj) {
      return obj[key];
    }
  };
};

var map = function (func) {
  return function (obj) {
    return obj.map(func);
  };
};
```

And the final one will be,

```js
P(collection)
  .then(filter(completed()))
  .then(map(get("task")))
  .then(console.log);
```

Now I have pretty good chained methods which will log only the names of completed tasks. Since all the method are small independent block, we can mix this any way we like and resuse at maximum.

If you like my simple API in action, here is the jsbin for it.

<a class="jsbin-embed" href="http://jsbin.com/benixu/1/embed?js,console">JS Bin</a><script src="http://static.jsbin.com/js/embed.js"></script>

Currying helps to use the full power of functional programing and maximum reusability of small independent methods. Try using those and let me know it does.

Until next time. ;)
