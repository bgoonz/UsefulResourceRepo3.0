<!--


---
 "React.js : communication between components"
excerpt: "React.js : communication between components"
date: 2015-05-08 00:00:00 IST
updated: 2015-05-08 00:00:00 IST
categories: javascript
tags: reactjs, javascript
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

One of the best thing about React is, it helps to componentize the whole app. We will divide the whole app into chunks of small components. But when we divide in components then a new issue will arise, communication between different components.

As a reactjs beginner one of the things you should know is communication between different components of the React.js app.

## \#1 Parent communicating to child

If the want to pass data from parent component to child one, you can pass the data as props.

```js
var Holder = React.createClass({
  render: function () {
    return <span>{this.props.count}</span>;
  },
});

var Incrementer = React.createClass({
  getInitialState: function () {
    return { count: 0 };
  },
  handleClick: function () {
    var count = this.state.count + 1;
    this.setState({ count: count });
  },
  render: function () {
    return (
      <div>
        <button onClick={this.handleClick}>Increment</button>
        <Holder count={this.state.count} />
      </div>
    );
  },
});
```

In the above example the `Incrementer` component is the parent component and `Holder` is the child component. So we can easily pass the data from parent to child with `props`.

## \#2 Without parent-child relationship

Sometimes the components which are not in parent-child relationship might need to communicate, In this case we need to depend on global event system. You can use any pubsub library as you like. Since most project have jQuery, we can use `$.trigger` and `$.on` to setup global event system.

In this each component can subscribe to event in `componentDidMount` lifecycle method and unsubscribe in `componentWillUnmount` method.

```js
var APP = {};

var Holder = React.createClass({
  getInitialState: function () {
    return { count: 0 };
  },
  componentDidMount: function () {
    $(APP).on(
      "up",
      function (e) {
        var count = this.state.count + 1;
        this.setState({ count: count });
      }.bind(this)
    );

    $(APP).on(
      "down",
      function (e) {
        var count = this.state.count - 1;
        this.setState({ count: count });
      }.bind(this)
    );
  },
  componentWillUnmount: function () {
    $(APP).off("up");
    $(APP).off("down");
  },
  render: function () {
    var count = this.state.count;
    return <span>{count}</span>;
  },
});

var Counter = React.createClass({
  decrement: function () {
    $(APP).trigger("down");
  },
  increment: function () {
    $(APP).trigger("up");
  },
  render: function () {
    return (
      <div>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  },
});
```
