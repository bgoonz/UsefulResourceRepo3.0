<!--


---
 "ReactJS : context"
excerpt: "ReactJS : context"
date: 2016-02-16 00:00:00 IST
updated: 2016-02-16 00:00:00 IST
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

When my app grown to large app with lots of nested components, passing data from top to inner components via props have become really nasty. This felt like a code smell to me and it's started really difficult to maintain as well. That's when I found the React's experimental feature called [context](http://facebook.github.io/react/docs/context.html).

Please not that **this is a experimental feature and the api might change in future**.

React's `context` helps to pass the data to component tree without passing through each of the intermediate components. Even though this is against the philosophy of react ie., react always favor explicit data flow where as `context` make it implicit.

While using `context` we need to know three things, `getChildContext`, `childContextTypes` and `contextTypes`.

we need to specify `getChildContext` method in top component and return an object with data which we wish to pass via `context`.

~~~ js
const {PropTypes, Component} = React;
const {render} = ReactDOM;

class App extends Component {
  getChildContext() {
    return {items: ['A', 'B', 'C']};
  }
  render() {
    return (
      <List />
    );
  }
}

App.childContextTypes = {
  items: PropTypes.array
}
~~~

Also we need to specify the what all data we are passing through `context` need to be specified in `childContextTypes` of top component. If we miss specifying in `childContextTypes` the child won't be able to receive those data.

Now in the child component where we need to receive data we need to specify all data need to receive in `contextTypes`. Once that this done, we can access data in child component using `this.context`.

In the above example you can see that I am missing the `<List />` component (which we will fill in next example) and also you can see I am not passing any props to `<List />`. 

~~~ js
// imports from above example

class List extends Component {
  render() {
    return (
      <ul>
        {
          this.context.items.map((item) => {
            return <li>{item}</li>;
          })
        }
      </ul>
    )
  }
}

List.contextTypes = {
  items: PropTypes.array
}

// app component from above example
~~~

Now the code snippet looks like

~~~ js
const {PropTypes, Component} = React;
const {render} = ReactDOM;

class List extends Component {
  render() {
    return (
      <ul>
        {
          this.context.items.map((item) => {
            return <li>{item}</li>;
          })
        }
      </ul>
    )
  }
}

List.contextTypes = {
  items: PropTypes.array
}

class App extends Component {
  getChildContext() {
    return {items: ['A', 'B', 'C']};
  }
  render() {
    return (
      <List />
    );
  }
}

App.childContextTypes = {
  items: PropTypes.array
}

render(<App />, document.getElementById('mount'));
~~~

You can find an [working example](https://jsbin.com/bivile/edit?js,output) in jsbin.
