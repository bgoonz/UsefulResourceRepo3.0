<!--


---
 "Redux : using with vanilla JS"
excerpt: "A simple example to show how we can use redux with vanilla JS"
date: 2016-02-19 00:00:00 IST
updated: 2016-02-19 00:00:00 IST
categories: javascript
tags: redux
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

When I [introduced redux](/2016/02/redux.html) we discussed how we can use it with ReactJS. But redux can be used along with vanilla js as well. In this post I like to discuss how we can use redux with vanilla js using the same counter example from [getting started with redux](/2016/02/redux.html).

Here we reuse the same reducer, actions and store from the earlier post except the react and react bindings part.

~~~ js
import {createStore} from 'redux';

// reducer 
function counter(state=0, action) {
  console.log('counter', action)
  switch(action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}


//actions
const increment = () => {
  return {
    type: 'INCREMENT'
  };
};

const decrement = () => {
  return {
    type: 'DECREMENT'
  };
};

//create store
const store = createStore(counter);
~~~

Now we need a module for counter and add the functionalities to dispatch the actions. Our HTML for counter will looks like

~~~ html
<div id="counter">
  <button id="inc">+</button>
  <span id="text"></span>
  <button id="dec">-</button>
</div>
~~~

we are writing the counter modules using the constructor pattern using ES6 class syntax.
In the `constructor` we will subscribe to store for changes and add event bindings.

~~~ js
class Counter {
  constructor(options) {
    this.$el = options.el;
    this.store = options.store;
    store.subscribe(this.update.bind(this));
    this.$el.querySelector('#inc')
      .addEventListener('click', this.inc.bind(this));
    this.$el.querySelector('#dec')
      .addEventListener('click', this.dec.bind(this));
  }

  inc() {
    this.store.dispatch(increment())
  }

  dec() {
    this.store.dispatch(decrement())
  }


  update() { 
    console.log(store.getState());
    this.$el
      .querySelector('#text')
      .innerHTML = store.getState();
  }

  render() {
    this.update();
  }
}
~~~

Now we need to initiate the counter on `DOMContentLoaded` event.

~~~ js
const d = document;

d.addEventListener("DOMContentLoaded", () => {
  const counter = new Counter({
    el: d.getElementById('counter'),
    store
  });
  counter.render();
});
~~~

We call the `render` method soon after initiating is to render the initial state.
Now when you click the increment button we dispatch the action for increment and on decrement button we dispatch action to decrement. Since in `constructor` we already subscribed to store for changes, when a change in store happens `this.update` method will be called and update the content in span.

Here is the working example of [redux with vanilla js](https://jsbin.com/juqoce/1/edit?js,output) in jsbin.

<a class="jsbin-embed" href="http://jsbin.com/juqoce/embed?js,output">JS Bin on jsbin.com</a><script src="http://static.jsbin.com/js/embed.min.js?3.35.9"></script>
