<!--


---
 "Getting started with React"
excerpt: "Getting started with React.js and precopiling jsx with gulp"
date: 2014-05-19 00:00:00 IST
updated: 2014-05-19 00:00:00 IST
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

Recently when I saw a tweet saying "its super easy to build UI components with [React.js](http://facebook.github.io/react/)" I thought I should try it as well.

# React

React is a JavaScript library from Facebook to create UI components. React uses `*.jsx` extention. We write both the HTML template and its logic in the same .jsx file. You can either precompile it with react npm module or in the browser with `JSXTransformer.js`.

I started with installing react with bower.

```sh
bower install react
```

After installing with bower I added react.js into my index.html.

```html
<script src="bower_components/react/react.js"></script>
```

Since I prefer to precompile the jsx files, I installed react-tools npm module and gulp plugin for it.

```sh
npm install react-tools gulp-react --save
```

# First component

My first component was a simple HelloMessage with name and click handler.

```js
/** @jsx React.DOM */
var HelloMessage = React.createClass({
  click: function () {
    console.log("clicked");
  },
  render: function () {
    return <div onClick={this.click}>Hello {this.props.name} </div>;
  },
});

var parent = document.querySelector(".jumbotron");
React.renderComponent(<HelloMessage name="Revath" />, parent);
```

To create a new component you need to extend `React.createClass`

The `React.renderComponent` method accepts two arguments

1. The Component name and the properties

   > In this case the component is `HelloMessage` which has a property `name` with value "Revath"

2. The parent element is where it should inject in the DOM.
   > In this case it is the element with class `jumbtron`

The `render` method is where you will define the HTML template.

It is optional to use `/** @jsx React.DOM */` as the first line when you use [gulp-react]() to precompile.

To precompile this, I configured the gulpfile.

```js
// gulpfile.js
var react = require("gulp-react");

gulp.task("react", function () {
  return gulp
    .src("app/scripts/*.jsx")
    .pipe(react())
    .pipe(gulp.dest(".tmp/scripts/"));
});
```

This will precompile all the `*.jsx` files in `app/scripts/` and put it in `.tmp/scripts/`.

# Compile from browser

If you don't wanna precompile, then load `JSXTransformer.js` along with `react`. Then write your component in a script tag with type `text/jsx`.

```html
<script src="bower_components/react/react.js"></script>
<script src="bower_components/react/JSXTransformer.js"></script>
<body>
  <div class="change-text"></div>
  <script type="text/jsx">
    var UpdateText = React.createClass({
      getInitialState: function(){
        return {name: ''}
      },
      change: function(e){
        this.setState({name: e.target.value})
      },
      render: function(){
        return (
          <div>
            <input type="text" name="name" onChange={this.change} />
            <h1> Hello {this.state.name}!!!</h1>
          </div>
        )
      }
    });

    React.renderComponent(<UpdateText/>, document.querySelector('.change-text'));
  </script>
</body>
```

The above example will update the `<h1>` tag with the name entered in the textbox. This utilises the concept of `state` in react. `this.state` will store the internal state of the application. When ever the state change the react will reinvoke the `render` method and change in the data will be displyed to the user.

# Conclusion

In conclusion, I feel super easily to build the UI components with react, but I don't really intrested in mixing up of component logic and template (personal preference).
