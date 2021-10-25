<!--


---
 "JavaScript : Things I learned after building first webapp with ReactJS"
excerpt: "Things I learned after building first webapp with ReactJS"
date: 2015-08-22 00:00:00 IST
updated: 2015-08-22 00:00:00 IST
categories: reactjs, javascript
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

I was pretty impressed with react.js when I [tried sometimes before](/2014/05/getting-started-with-react.html). When I started building an app with it, there are some small issues popped up, which I missed when creating a sample application. Here I tried to list out all those things.

## \#1 Should close all the tags

You can't leave any tag without closing it. JSX will throw error if they find any closing tag is missing even the self closing tags like `<input/>` or `<br/>`.

## \#2 Avoid Inline styles

React doesn't support normal style attribute like

```html
style="color:red"
```

if you want to use inline style then

```js
var Compo = React.Component({
  render: function () {
    var style = {
      color: "red",
    };

    return <span style={style}></span>;
  },
});
```

## \#3 Attributes should be in camelCase.

JSX want the tag attributes in camel case, ie., it doesn't support `enctype` instead it support `encType`.

```js
var FormCompo = React.Component({
  render: function () {
    return <form encType="multipart/form-data"></form>;
  },
});
```

## \#4 Always have a `key` attr for list/child component.

If you are rendering a list then react expect all the list tags to have a `key` attribute.

```js
var ItemCompo = React.Component({
 render: function () {
   <li>{this.props.name}</li>;
 }
});


var ListCompo = React.Component({
 render: function () {
   return (
     <ul>
       {this.props.items.map(function(item, i) {
         return <ListComp key={i} name={item.name}>
       })}
     </ul>
   );
 }
});
```

## \#5 `render` method should return one single child

React render method doesn't support returning more than one child, ie., it doesn't support

```js
// Error
var Compo = React.Component({
  render: function () {
    return (
      <div></div>
      <div></div>
    );
  }
});
```

If you need to return more than one child then you should enclose the childs in a parent wrapper like

```js
var Compo = React.Component({
  render: function () {
    return (
      <div>
        <div></div>
        <div></div>
      </div>
    );
  },
});
```

## \#6 Use `props` to pass data from parent to child component

```js

var Child = React.createClass({
  render: () {
    return (
      <li>{this.prop.name}</li>
    )
  }
});

var Parent = React.Component({
  render: function () {
    var children = this.props.list.map(function(item){
      return <Child name={item.name} />
    })
    return (
      <ul>
        {children}
      </ul>
    );
  }
});


var list = [
  {name: "AAAAA"},
  {name: "BBBBB"},
  {name: "CCCCC"}
]

React.renderComponent(<Parent list={list} />, document.getElementById('app'));
```

## \#7 Never mutate the DOM with jQuery

Never add or delete elements from DOM within the react app. All mutations should be done via react only else you will end in error similar to

```
Uncaught Error: Invariant Violation: findComponentRoot(..., .5.1): Unable to find element. This probably means the DOM was unexpectedly mutated
```

## \#8 Make sure the browser will not mutate the DOM

Similar to **\#7** sometimes the browser itself will mutate the DOM, ie., if we miss `<tbody>` tag the browser will add it without our knowledge. This will end put in the same error as above.

## \#9 Make sure to unbind events on componentDidUnMount

You will be binding events for each component in `componentDidMount` callback. make sure for each component you unbind those events in `componentDidUnMount` callback.

## \#10 Never render to body, always place a container and render into it.

It's always a good paractice not to render the react app directly to `<body>` element. It will cause issue when you add some external script will inject script or create elements inside `<body>`. So it is always a good practice to place a container for your react app inside the `<body>` and render your app into it.

## \#11 You can namespace React components, and avoid adding to Global namespace.

When I started with my fist app, I didn't thought of namespacing my app. Later when the compoents increased every component was in `Global` namespace. We can namespace the component like below,

```js
var App = App || {};

var App.Child = React.createClass({
  render: () {
    return (
      <li>{this.prop.name}</li>
    )
  }
});

var App.Parent = React.Component({
  render: function () {
    var children = this.props.list.map(function(item){
      return <App.Child name={item.name} />
    })
    return (
      <ul>
        {children}
      </ul>
    );
  }
});

React.renderComponent(<App.Parent list=[]/>, document.getElementById('my-app'));
```

Now your component won't pollute the `Global` namespace. I first saw this namespacing react components in [imgur.com](http://imgur.com) code.
