<!--


---
 "ReactJS : writing in ES6"
excerpt: "When writing ReactJS components in ES6 here is the certain things that are different from ES5 syntax"
date: 2016-02-12 00:00:00 IST
updated: 2016-02-12 00:03:00 IST
categories: javascript
tags: reactjs
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

When you are new to ES6 syntax with react here is certain things that are different from ES5 syntax.

## Extend from React.Component

In ES5 syntax, we use `React.createClass` create component where as along with ES6 syntax you can extends the component from `React.Component`.

As per ES5

```js
var React = require("react");

var Comp = React.createClass({
  render() {
    return <div>Comp with ES5</div>;
  },
});
```

Where as in ES6

```js
import React, { Component } from "react";

class Comp extends Component {
  render() {
    return <div>Comp with ES5</div>;
  }
}
```

## Use `constructor` instead of `getInitialState`

In ES5 with `React.createClass` we usually use `getInitialState` method to specify the initial state of the component. But with ES6 `class` syntax you don't need `getInitialState` method. You set the initial state in `constructor` itself.

```js
import React, { Component } from "react";

class Comp extends Component {
  constructor() {
    super();
    this.state = {
      name: "some name",
    };
  }
  render() {
    return <div>Comp with ES5 :: {this.state.name}</div>;
  }
}
```

## Use `constructor` to make ajax calls

Also if you want to make any ajax calls when component is loading you can do that as well in the `constructor`.

```js
import React, { Component } from "react";

class Comp extends Component {
  constructor() {
    super();
    this.getData();
  }
  getData() {
    // make ajax call
  }
  render() {
    return <div>Comp with ES5 :: {this.state.name}</div>;
  }
}
```

You don't need to to call `getData` in `componentDidMount`.

## Specifing `propTypes`

When using `React.createClass` with ES5 we can specify the `propTypes` like

```js
var React = require("react");

var Comp = React.createClass({
  propTypes: {
    name: React.PropTypes.string,
  },
  render() {
    return <div>Comp with ES5 {this.props.name}</div>;
  },
});
```

But when using ES6 it's bit different

```js
import React, { Component, PropTypes } from "react";

class Comp extends Component {
  render() {
    return <div>Comp with ES5 :: {this.props.name}</div>;
  }
}

// specify proptypes in class
Comp.propTypes = {
  name: PropTypes.string,
};

Comp.defaultProps = {
  name: "",
};
```

## Mixins are supported with ES6 classes

Since mixins are not supportes with ES6 classes, we need to use [Higher-Order Components](https://gist.github.com/sebmarkbage/ef0bf1f338a7182b6775) to reuse functionalities across components.

## Use `.bind(this)` on methods

ES6 classes won't bind the methods with it's instance. You need to explicity bind with instance using `.bind(this)`

```js
import React, { Component, PropTypes } from "react";

class Comp extends Component {
  getData() {
    // make ajax call
  }
  onClick() {
    this.getData();
  }
  render() {
    return (
      <div onClick={this.onClick.bind(this)}>
        Comp with ES5 :: {this.props.name}
      </div>
    );
  }
}
```

If you didn't bind `this.onClick.bind(this)` the above code will throw `TypeError: this.getData is not a function`.
