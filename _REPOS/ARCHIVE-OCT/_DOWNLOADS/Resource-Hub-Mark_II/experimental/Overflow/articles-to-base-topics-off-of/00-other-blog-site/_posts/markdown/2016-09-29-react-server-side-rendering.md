<!--


---
 "React.js : server side rendering"
excerpt: "React.js server side rendering along with express.js and react-router"
date: 2016-09-29 00:00:00 IST
updated: 2016-09-29 00:00:00 IST
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

This is post is originally published on [crypt.codemancers.com](http://crypt.codemancers.com/posts/2016-09-16-react-server-side-rendering/).

----

These days server side rendering has become an important feature for heavy client side applications and now most of
the client side frameworks support it. Yesterday I tried a bit of react server
rendering along with express.js and react-router.

## Setup Express js server and dependencies.

We can start with scaffolding a new express.js app using [expressjs-generator](http://expressjs.com/en/starter/generator.html) and installing all the dependencies. We use `webpack` for client side
bundling. 

We can install all the dependencies by running

~~~sh
npm i --save react react-dom react-router babel-register
~~~

and development dependencies by running

~~~sh
npm i --save-dev babel-cli babel-core babel-preset-es2015 babel-preset-react babel-preset-stage-0 webpack babel-loader
~~~

## Setup webpack & babel for client.

We will keep all our client JavaScript and React components in a new folder named
`client` and put all the compiled js in `public/javascripts`. Also we shall add a
`.babelrc` to load babel presets and configs.

~~~json
{
    "presets": ["es2015", "react", "stage-0"]  
}
~~~

Now in `webpack.config.js`, we will configure the entry point, output directory and babel
loader.

~~~javascript
// webpack.config.js

var path = require('path');

module.exports = {
  entry: './client/app.jsx',

  output: {
    filename: 'app.js',
    path: path.join('public/javascripts/')
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
};
~~~

Now we can run the following to build client JavaScript files in development mode with debug flag turned on, and watch for changes.

~~~sh
webpack --debug --watch
~~~

For easier use, we can add the command to [npm scripts](https://docs.npmjs.com/misc/scripts) with name `webpack:server`. Now we just need to run `npm run webpack:server`.

## Setup react router

Now the basic scaffolding and development setup is finished and time to start
building our app. We can start with configuring the router. We are planning mainly for
two routes `/home` to show the rendering of static component and `/list` to show
the server side rendering with some data.

First we have to define the entry point which will mount our `react-router`
component to DOM. 

~~~javascript
// client/app.jsx

import React from 'react';
import {render} from 'react-dom';

import AppRouter from './router.jsx';

render(<AppRouter/>, document.querySelector('#app'));
~~~

Next, define routes in `client/router.jsx`

~~~javascript
// client/router.jsx

import React from 'react';
import {Router, browserHistory, Route} from 'react-router';

import AppRoot from './app-root.jsx';
import Home from './home.jsx';
import List from './list.jsx';

const AppRouter = () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={AppRoot}>
        <Route path="/home" component={Home}/>
        <Route path="/list" component={List}/>
      </Route>
    </Router>
  );
};

export default AppRouter;
~~~

`AppRoot` is nothing but a simple layout for our app.

~~~javascript
// client/app-root.jsx

import React, {Component} from 'react';
import {Link} from 'react-router';

class AppRoot extends Component {
  render() {
    return (
      <div>
        <h2>React Universal App</h2>
        <Link to="/home"> Home </Link>
        <Link to="/list"> List </Link>
        {this.props.children}
      </div>
    );
  }
}

export default AppRoot;
~~~

## Setup express js for server side rendering

Since we are using React + ES6 for components, we have to use the `babel-register` on server 
side so that we can write express js routes also in ES6 and import the react routes we 
already wrote. Please note that, we have to require/import the `babel-register` at the beginning of 
express js entry point `app.js`.

~~~javascript
// app.js
require('babel-register');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');

//rest of the express js boilerplate
~~~

Then we rename the `routes/index.js` to `routes/index.jsx`, after this we can use the 
react routes and react components on server side. For server side rendering we use 
`renderToString` method from `react-dom/sever` package and methods like `match`, `createRoutes` and `RouterContext`
from `react-router`.

[match](https://github.com/ReactTraining/react-router/blob/c3cd9675bd8a31368f87da74ac588981cbd6eae7/docs/API.md#match-routes-location-history-options--cb) 
function in `react-router` module will match a set of routes to a location and calls a callback, without rendering.
We use [createRoutes](https://github.com/reactjs/react-router/blob/master/docs/API.md#createroutesroutes) 
method from `react-router` to create a set of routes from our `client/router.jsx`(`appRouter`) component and provide it to `match`.

~~~javascript
// routes/index.jsx
// express and react imports

import appRouter from '../client/router.jsx';

const routes = createRoutes(appRouter());
~~~

Once we have a match [RouterContext](https://github.com/ReactTraining/react-router/blob/c3cd9675bd8a31368f87da74ac588981cbd6eae7/docs/API.md#routercontext) will render the component tree for the given router state and return the component markup as a string with the help of `renderToString` method.

~~~javascript
// Express.js route

router.get('*', (req, res) => {
  match({routes, location: req.url}, (error, redirectLocation, renderProps) => {
    // check for error and redirection
    const content = renderToString(<RouterContext {...renderProps}/>);
    // pass content to jade view (we'll see it in a while)
  })
})
~~~

Now we have the react components rendered as string and we need to pass this to our [pug.js (Previously known as jade)](https://pugjs.org/api/getting-started.htmlF) view. 
The jade view will accept the string in `content` variable and substitute inside the react app mount point.  

~~~jade
//- views/index.jade
extends layout

block content
  script(type='text/javascript').
    window.__INITIAL_STATE__ = !{JSON.stringify(data)}
  div.container#app!= content
~~~

## Rendering a static component on server

`/home` points to a static component called `Home` which we are going to render from server.

~~~javascript
import React from 'react';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
~~~

and now when we join the dots the `routes/index.jsx` will look like this

~~~javascript
import express from 'express';
import React from 'react';
import {renderToString} from 'react-dom/server';
import {RouterContext, match, createRoutes} from 'react-router';

import appRouter from '../client/router.jsx';

const routes = createRoutes(appRouter());

const router = express.Router();

router.get('/home', (req, res) => {
  match({routes, location: req.url}, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      const content = renderToString(<RouterContext {...renderProps}/>);
      res.render('index', {title: 'Express', data: false, content});
    } else {
      res.status(404).send('Not Found');
    }
  });
});
~~~ 

## Rendering component on server with data

In this section, we are trying to render a list of users, the data source is not DB but an API for demo purpose.
In order to render data, we need to fetch data from the server, pass it to a component via [context](https://facebook.github.io/react/docs/context.html). For this we need to write a Higher Order Component to set the data to context.

~~~javascript
import express from 'express';
import request from 'request';
import React, {Component} from 'react';
import {renderToString} from 'react-dom/server';
import {RouterContext, match, createRoutes} from 'react-router';

import appRouter from '../client/router.jsx';

const routes = createRoutes(appRouter());

class DataProvider extends Component {
  getChildContext() {
    return {data: this.props.data};
  }
  render() {
    return <RouterContext {...this.props}/>;
  }
}

DataProvider.propTypes = { 
  data: React.PropTypes.object
};

DataProvider.childContextTypes = { 
  data: React.PropTypes.object
};
~~~

The above `DataProvider` will set data to context if we pass it via props named `data`.

The `List` component will look like,

~~~javascript
import React, {Component} from 'react';

class List extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = this.context.data || window.__INITIAL_STATE__ || {items: []};
  }

  componentDidMount() {
    this.fetchList();
  }

  fetchList() {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(res => {
        return res.json();
      })  
      .then(data => {
        this.setState({
          items: data
        });
      })  
      .catch(err => {
        console.log(err);
      }); 
  }

  render() {
    return (
      <ul>
        {this.state.items.map(item => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </ul>
    );  
  }
}

List.contextTypes = { 
  data: React.PropTypes.object
};

export default List;
~~~

The above list component will look for data in context first, then in global state and later in component level state. 
While we render it from server, the data will be available in context and component use the data in context to render the initial HTML. 
Later after loading it in browser the component can fetch again and update the data.

Now we can setup the route to fetch the data and render the component. 

~~~javascript
router.get('/list', (req, res) => {
  match({routes, location: req.url}, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      request('http://jsonplaceholder.typicode.com/users', (error, response, body) => {
        const data = {items: JSON.parse(body)};
        const content = renderToString(<DataProvider {...renderProps} data={data}/>);
        res.render('index', {title: 'Express', data, content});
      });
    } else {
      res.status(404).send('Not Found');
    }
  });
});
~~~

Thats it. We successfully rendered our react components from server side with and without data, so that user don't have to wait
for another ajax request after loading the page to see the data.

Thanks to codemancers team especially [@emil](https://twitter.com/emilsoman), [@kashyap](https://twitter.com/kgrz) and [@yuva](https://twitter.com/iffyuva) for helping to fix spelling and grammer mistakes.
