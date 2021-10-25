<!--


---
 "ES6 : observe the object change using Proxy"
excerpt: "ES6 : observe change in object using Proxy"
date: 2016-02-17 00:00:00 IST
updated: 2016-02-17 00:00:00 IST
categories: javascript
tags: es6
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

Utilizing ES6 Proxy we can observe a change in object or do some validation before setting an value.

The ES6 `Proxy` constructor will accept the source object and an `interceptor`/`handler`. An interceptor can be a object with a functions which define the operation.

~~~ js
const obj = {};

const handler = {
  set(target, key, value) {
    console.log(`Setting value ${key} as ${value}`)
    target[key] = value;
  },
};

const p = new Proxy(obj, handler);
p.a = 10; // logs "Setting value a as 10"
p.c = 20; // logs "Setting value c as 20"
console.log(p.a); // logs 10
~~~

The above snippet is an example for how we can observe a change on `obj` when a value is set or changed.

Similar way we can observe when we try to read any value from the object by defining a `get` method on `handler`.

~~~ js
const obj = {a: 10, c: 20};

const handler = {
  get(target, key) {
    console.log(`Reading value from ${key}`)
    return target[key];
  },
};

const p = new Proxy(obj, handler);
console.log(p.a); // logs "Reading value from a" and "10"
~~~

Now to observe deleting a key we can define `deleteProperty` on handler.


~~~ js
const obj = {a: 10, c: 20};

const handler = {
  deleteProperty(target, key) {
    console.log(`Deleting ${key}`)
    delete target[key];
  },
};

const p = new Proxy(obj, handler);
delete p.a; // logs "Deleting a"
~~~

You can find a [working sample](https://jsbin.com/rureme/edit?js,console) on jsbin. This is just a basics of `Proxy`. you can look into more ways to observe on [Proxy on MDN](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Proxy#No-op_forwarding_proxy)
