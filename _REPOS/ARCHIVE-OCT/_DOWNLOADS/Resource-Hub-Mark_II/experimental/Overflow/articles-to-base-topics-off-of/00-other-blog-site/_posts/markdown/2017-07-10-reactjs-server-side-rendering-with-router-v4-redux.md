<!--


---
 'ReactJS : Server side rendering with router v4 & redux'
excerpt: 'ReactJS : Server side rendering with react router v4 & redux'
date: 2017-07-10 00:00:00 IST
updated: 2017-07-10 00:00:00 IST
categories: react
tags: react, router, redux, ssr
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

This is post is originally published on [crypt.codemancers.com](http://crypt.codemancers.com/posts/2017-06-03-reactjs-server-side-rendering-with-router-v4-and-redux/).

----

When I wrote [React.js: Server side rendering][part_1] a few months back, I used react router v3.0.2. But ever since react router released v4, which is a total rewrite into a declarative format, the old blog post won't work with react router v4. So I decided to write a new blog as 2nd part of it which uses [react router v4][react_router] along with [redux][redux]. 

Since we already have a blog post explaining the initial setup, I will be skipping the repeated steps needed here but will add the new updates need to use the new router.

### Major Router Updates

Major changes in React Router v4 are

* Declarative routing
* No more central routes config
* Separate packages for web & native
* No `onEnter` or `onChange` hooks/callbacks, instead use component lifecycle hooks

### Adding React Router v4 to our application

Since react router has separate packages for web and native, let go with installing the package needed for the web.

~~~sh
npm i --save react-router-dom react-router-config
~~~

`react-router-config` package will have configuration helpers to use with `StaticRouter` for server side rendering.
If your application already has `react-router` package, I recommend you to remove it and use only the above ones.

### Adding Redux to our application

Let add the redux packages need for our application. Since this demo contains async actions we will add `redux-thunk` package as well.

~~~sh
npm i --save redux react-redux redux-thunk
~~~

If you are not familiar with the redux setup you can follow my previous blog on [Getting started with redux][redux_setup].

Also, let's install `isomorphic-fetch` so we can use `fetch` on both server and client.

~~~sh
npm i --save isomorphic-fetch
~~~

### Setup React Router

Setting up the Router will start with defining the routes. 

~~~javascript
// client/routes.js

import AppRoot from './app-root';
import Home from './home';
import List from './list';

const routes = [
  { component: AppRoot,
    routes: [
      { path: '/',
        exact: true,
        component: Home
      },
      { path: '/home',
        component: Home
      },
      { path: '/list',
        component: List
      }
    ]
  }
];

export default routes;
~~~

And load the routes on client side like

~~~javascript
// client/app.jsx

import React from 'react';
import {render} from 'react-dom';

import BrowserRouter from 'react-router-dom/BrowserRouter';
import { renderRoutes } from 'react-router-config';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import routes from './routes';
import reducers from './modules';

const store = createStore(
  reducers, window.__INITIAL_STATE__, applyMiddleware(thunk)
);

const AppRouter = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        {renderRoutes(routes)}
      </BrowserRouter>
    </Provider>
  )
}

render(<AppRouter />, document.querySelector('#app'));
~~~

Here `<BrowserRouter>` is a new component provided by react router which uses HTML5 history API. The above setup is used only on client side.
For server side rendering we will be using `<StaticRouter>` component.

### Render static component on Server

As same as PART 1, we have a `/home` route which will render some HTML. No dynamic content or data from API.
Even though our `Home` component is same, we have a different setup on `routes/index.jsx`.

~~~javascript
// routes/index.jsx

import express from 'express';
import request from 'request';

import React from 'react';
import { renderToString } from 'react-dom/server';

import StaticRouter from 'react-router-dom/StaticRouter';
import { renderRoutes } from 'react-router-config';

import routes from '../client/routes';

const router = express.Router();

router.get('*', (req, res) => {
  let context = {};
  const content = renderToString(
    <StaticRouter location={req.url} context={context}>
      {renderRoutes(routes)}
    </StaticRouter>
  );
  res.render('index', {title: 'Express', data: false, content });
});

module.exports = router;
~~~

### Render component with data

Now when it comes to rendering component with data, we need to make some changes to the express route, setup redux store and 
add static method on a component to fetch the data and update the store.

Since we are using `redux` we need to setup `reducer` & `action` to fetch the user details from API. Here I will be using [erikras/ducks-modular-redux][ducks] pattern, so the constants, reducer & actions will be available in a single file.

~~~javascript
// client/modules/users.js

import 'isomorphic-fetch';

export const USERS_LOADED = '@ssr/users/loaded';

const initialState = {
  items: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case USERS_LOADED:
      return Object.assign({}, state, { items: action.items });
  
    default:
      return state;
  }
}

export const fetchUsers = () => (dispatch) => {
  return fetch('//jsonplaceholder.typicode.com/users')
    .then(res => {
      return res.json();
    })
    .then(users => {
      dispatch({
        type: USERS_LOADED,
        items: users
      });
    })
}
~~~

Now let's modify the `List` component to use the `fetchUsers` action and also add a `fetchData` static method which can be used on the server.

~~~javascript
// client/list.jsx

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchUsers } from './modules/users';

class List extends Component {
  static fetchData(store) {
    return store.dispatch(fetchUsers());
  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    return (
      <div >
        {
          this.props.items.map(item => {
            return (
              <div key={item.id} >
                <span>{item.name}</span>
              </div>
            )
          })
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({items: state.users.items});
const mapDispatchToProps = (dispatch) => 
  bindActionCreators({ fetchUsers }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(List);
~~~

Now the updates for the express route.

~~~javascript
// routes/index.jsx

import express from 'express';
import request from 'request';

import React, {Component} from 'react';
import {renderToString} from 'react-dom/server';

import StaticRouter from 'react-router-dom/StaticRouter';
import { matchRoutes, renderRoutes } from 'react-router-config';

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import routes from '../client/routes';
import reducers from '../client/modules';

/*eslint-disable*/
const router = express.Router();
/*eslint-enable*/

const store = createStore(reducers, applyMiddleware(thunk));

router.get('*', (req, res) => {
  const branch = matchRoutes(routes, req.url);
  const promises = branch.map(({route}) => {
    let fetchData = route.component.fetchData;
    return fetchData instanceof Function ? fetchData(store) : Promise.resolve(null)
  });
  return Promise.all(promises).then((data) => {
    let context = {};
    const content = renderToString(
      <Provider store={store}>
        <StaticRouter location={req.url} context={context}>
          {renderRoutes(routes)}
        </StaticRouter>
      </Provider>
    );
    res.render('index', {title: 'Express', data: store.getState(), content });
  });
});

module.exports = router;
~~~

In the above snippet, `matchRoutes` will filter the routes and components needed to render the given URL.
Once we have the list of routes for the given URL, we can map through each and check whether it has a static method named 
`fetchData`. If the component has the fetchData method, then execute those else return a null promise. 

Once we collect all the promises, executed and updated the store, we can render the component using `<StaticRouter>` component and return the `data` and compiled HTML to the client.

Now when we navigate to `/list`, the route we can see the list of users rendered from the server.

### Handling 404

Next, let's see how to handle the 404. In this case just rendering the `NotFound` component is not enough, we have to return back appropriate status code to the client as well.

Let's start with adding `NotFound` component

~~~javascript
// client/notfound.jsx

import React from 'react';
import { Route } from 'react-router-dom';

const NotFound = () => {
  return (
    <Route render={({ staticContext }) => {
      if (staticContext) {
        staticContext.status = 404;
      }
      return (
        <div>
          <h1>404 : Not Found</h1>
        </div>
      )
    }}/>
  );
};

export default NotFound;
~~~

In `NotFound` component, rendering some 404 message is not enough. We should be setting the status on `staticContext` so that when rendering on the server we can access the status on the `context` object we passed.

Remember `staticContext` will be available only on the server, so make sure we guard the setting of status with `if` condition.

next, we add the route to handle 404.

~~~diff
// client/routes.js

import AppRoot from './app-root';
import Home from './home';
import List from './list';
+import NotFound from './notfound';

const routes = [
  { component: AppRoot,
    routes: [
     { path: '/',
        exact: true,
        component: Home
      },
      { path: '/home',
        component: Home
      },
      { path: '/list',
        component: List
      }
+     {
+       path: '*',
+       component: NotFound
+     }
    ]
  }
];

export default routes;
~~~

Now we need to update the `express` routes to set the response status as 404.

~~~diff
// routes/index.jsx

import express from 'express';
import request from 'request';

import React, {Component} from 'react';
import {renderToString} from 'react-dom/server';

import StaticRouter from 'react-router-dom/StaticRouter';
import { matchRoutes, renderRoutes } from 'react-router-config';

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import routes from '../client/routes';
import reducers from '../client/modules';

const router = express.Router();

const store = createStore(reducers, applyMiddleware(thunk));

router.get('*', (req, res) => {
  const branch = matchRoutes(routes, req.url);
  const promises = branch.map(({route}) => {
    let fetchData = route.component.fetchData;
    return fetchData instanceof Function ? fetchData(store) : Promise.resolve(null)
  });
  return Promise.all(promises).then((data) => {
    let context = {};
    const content = renderToString(
      <Provider store={store}>
        <StaticRouter location={req.url} context={context}>
          {renderRoutes(routes)}
        </StaticRouter>
      </Provider>
    );
+   if(context.status === 404) {
+     res.status(404);
+   }
    res.render('index', {title: 'Express', data: store.getState(), content });
  });
});

module.exports = router;
~~~

### Handling Redirects

After handling 404, now we can handle redirects in a similar way. For redirects, we will be using `<Redirect>` component from react router. To show the redirection we will be redirecting `/list` route to a new route `/users` where we will list the users from API.

For this, we will define a new component `ListToUsers` which utilises `<Redirect>`.

~~~javascript
// client/listtousers.jsx

import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ListToUsers = () => {
  return (
    <Route render={({ staticContext }) => {
      if (staticContext) {
        staticContext.status = 302;
      }
      return <Redirect from="/list" to="/users" />
    }}/>
  );
};

export default ListToUsers;
~~~

As we did in handling `404`, here as well we need to set the status on `staticContext` to **302** or **301** as per your need. Here I am using **302**.

Now let's update the `routes`. 

~~~diff
// client/routes.js

import AppRoot from './app-root';
import Home from './home';
import List from './list';
import NotFound from './notfound';
+import ListToUsers from './listtousers';

const routes = [
  { component: AppRoot,
    routes: [
     { path: '/',
        exact: true,
        component: Home
      },
      { path: '/home',
        component: Home
      },
+     { path: '/list',
+       component: ListToUsers
+     }
+     { path: '/users',
+       component: List
+     }
      {
        path: '*',
        component: NotFound
      }
    ]
  }
];

export default routes;
~~~

Next, make necessary changes for express routes so it will perform redirect

~~~diff
// routes/index.jsx

// All neeeded imports

router.get('*', (req, res) => {
  const branch = matchRoutes(routes, req.url);
  const promises = branch.map(({route}) => {
    let fetchData = route.component.fetchData;
    return fetchData instanceof Function ? fetchData(store) : Promise.resolve(null)
  });
  return Promise.all(promises).then((data) => {
    
    // render component to string

+   if (context.status === 302) {
+     return res.redirect(302, context.url);
+   }
    res.render('index', {title: 'Express', data: store.getState(), content });
  });
});

module.exports = router;
~~~

Now we have a fully functional server rendered react application. 

The demo app is available on [github][demo_app] and working demo can be found in [now.sh][working_demo]

[part_1]: http://crypt.codemancers.com/posts/2016-09-16-react-server-side-rendering/
[react_router]: https://github.com/ReactTraining/react-router/tree/v4.1.1
[redux]: http://redux.js.org/
[redux_setup]: http://blog.revathskumar.com/2016/02/redux.html
[ducks]: https://github.com/erikras/ducks-modular-redux
[demo_app]: https://github.com/revathskumar/react-server-render/tree/react-router-v4-redux
[working_demo]: https://server-render-hzoyerpkgh.now.sh
