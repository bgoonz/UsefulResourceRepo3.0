<!--


---
 "CoffeeScript : Avoid using jQuery proxy and .bind(this)"
date: 2013-10-20 00:00:00 UTC
updated: 2013-10-20 00:00:00 UTC
categories: es6
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

There are many times I need to execute the methods, which are triggered by an event handler/callbacks to execute without changing the context. It helps me to use instance variables or methods inside callback. I usually use [$.proxy](http://api.jquery.com/jQuery.proxy/) or [.bind()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) method to achieve this.

When I was learning [CoffeeSctipt](http://coffeescript.org), I continued using the same. But later I came to know CoffeeScript have much handy way to do the same.

In CS, you can use Fat arrow functions for this.

{% highlight coffeescript %}
class Form
constructor: (root) ->
@root = root;
@root.on 'submit', @onSubmit
@root.on 'submit', @onSub

onSub:(e) ->
console.log(this)
return false;

onSubmit:(e) =>
console.log(this)
return false;
{% endhighlight %}

In the above code, I want to execute the `onSubmit` method in the context of `Form`.
Since the `onSubmit` is trigger by the submit event, by default its context will be element which the event is binded.

I hope I am able to convince you the differece between thin arrow and fat arrow function. You can get the detailed description on the [CoffeeScript doc](http://coffeescript.org/#fat-arrow).

Also you can look into the <a href="http://coffeescript.org/#try:class%20Form%0A%20%20constructor%3A%20(root)%20-%3E%0A%20%20%20%20%40root%20%3D%20root%3B%0A%20%20%20%20%40root.on%20'submit'%2C%20%40onSubmit%0A%20%20%20%20%40root.on%20'submit'%2C%20%40onSub%0A%0A%20%20onSub%3A(e)%20-%3E%0A%20%20%20%20console.log(this)%0A%20%20%20%20return%20false%3B%0A%20%20%0A%20%20onSubmit%3A(e)%20%3D%3E%0A%20%20%20%20console.log(this)%0A%20%20%20%20return%20false%3B">code generated</a> by CoffeeScript when you use fat arrow.

## In ECMAScript 5

If you are using ECMAScript 5, As I saild before you can use [.bind()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) method.

{% highlight coffeescript %}
var Form = (function(){
function Form(root){
this.root = root;
this.root.on('submit', this.onSubmit.bind(this));
this.root.on('submit', this.onSub);
}

Form.prototype.onsubmit = function(e){
console.log(this)
return false;
}

Form.prototype.onSub = function(e){
console.log(this)
return false;
}

return Form;
})()
{% endhighlight %}
