<!--


---
 "Redux : testing a simple component"
excerpt: "Redux : testing a simple component"
date: 2016-02-25 00:00:00 IST
updated: 2016-02-25 00:00:00 IST
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

In my last post on [redux : using with vanilla js](/2016/02/redux-using-with-vanilla-js.html) we created a simple counter. In this post let's see how we can test the component as well as redux actions. For testing I will be using [mocha](http://mochajs.org/) testing framework and for assertion [expect.js](https://github.com/LearnBoost/expect.js).

For my last post the counter module will look like 

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

For testing purpose, I will be adding a new dispatch type called "RESET" which will reset the state to zero.

~~~ diff
// reducer 
function counter(state=0, action) {
  switch(action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
+    case 'RESET':
+      return 0;
    default:
      return state;
  }
}
~~~

Testing can be done in two parts, First unit test the actions then the `Counter` module.
In initial setup, we setup for `bdd` and will create a new store for test

~~~ js
mocha.ui('bdd');

const testStore = createStore(counter);

// our tests

mocha.run();
~~~

## Testing actions

While testing action we dispatch the events and see the state is changed accordingly. For this before running each test we need to reset the state to zero to make sure other test cases won't effect one another's results.

So in `beforeEach` callback we dispatch the reset event.

~~~ js
describe('actions', () => {
  beforeEach(() => {
    testStore.dispatch({type: 'RESET'});
  });

  // test for actions
});
~~~

Now we can write tests for the actions described.

~~~ js
// code for the component from first snippet

mocha.ui('bdd');

const testStore = createStore(counter);

describe('actions', () => {
  beforeEach(() => {
    testStore.dispatch({type: 'RESET'});
  });

  it('inc', () => {
    testStore.dispatch(increment());
    expect(testStore.getState()).toEqual(1);
  });

  it('dec', () => {
    testStore.dispatch(decrement());
    expect(testStore.getState()).toEqual(-1);
  })
});

mocha.run()
~~~

So we tested the `actions` separately, now we can test the actual `Counter` component.

## Testing component

For testing we `Counter` component we need to create the `Counter` object. For this I added a new `div#test-counter` to my HTML and we instantiate the `Counter` before the tests.

~~~ js
const el = d.getElementById('test-counter');
const c = new Counter({
  el,
  store: testStore
});
~~~

Now we can use the variable `c` in the following tests and we will `RESET` the store in `beforeEach` as we did while testing actions. Now for testing we can call `c.inc()` and `c.dec()` and check whether the states are changed.
 
~~~ js
let c;
describe('Counter', () => {
  beforeEach(() => {
    testStore.dispatch({type: 'RESET'});
  });

  it('inc', () => {
    c.inc();
    expect(testStore.getState()).toEqual(1);
  });

  it('dec', () => {
    c.dec();
    expect(testStore.getState()).toEqual(-1);
  });
});
~~~

Here is full version of [redux and component tests](https://jsbin.com/jibagu/edit?js,output) in jsbin. 

<a class="jsbin-embed" href="http://jsbin.com/jibagu/3/embed?js,output">JS Bin on jsbin.com</a><script src="http://static.jsbin.com/js/embed.min.js?3.35.9"></script>
