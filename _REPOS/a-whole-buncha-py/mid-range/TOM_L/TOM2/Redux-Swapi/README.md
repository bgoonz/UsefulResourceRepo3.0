# Redux Swapi

---

## Topics

* Middleware and applyMiddleware
* redux-thunk
* redux-logger

## Description

* Notice the file structure. There are certainly many ways by which one could layout an application.
* This pattern is commonly used:

```
src
  actions
    - index.js
  components -
    - index.js
    - App.js
  reducers
    - index.js
  styles
    - App.css
```

## Initialize Project

* The purpose of this mini-project is to expose you to the world of asyncronous Redux.
* **Notice** the `package.json`. We have included a few new packages here for you.

  * `redux-thunk redux-logger and axios`.

* `axios` isn't something new to you, you've used it before to make **Asynchronous JavaScript and XML** requests.
* `redux-thunk` and `redux-logger` are the technologies you'll be introduced to here.

## middleware

* Simply put, middleware is software that sits between our action creators and the reducer stack. Every action will first go through all middleware sequentially before it is sent to the reducers.
* Consider something we can use to augment the powers of Redux. `redux` has a package you can use called `applyMiddleware` that will allow you to install utilities to help you achieve specific tasks.
* We can pull in the `applyMiddleware` function directly from `redux`.

```
import { applyMiddleware, createStore } from 'redux';
```

* We're going to use `applyMiddleware` to inject middlware into the store, specifically we'll add the `redux-thunk` and `redux-logger` middleware packages.

## redux-thunk

* [redux-thunk](https://github.com/gaearon/redux-thunk) was built by _Dan Abramov_, co-author of Redux, to handle Asynchronous requests in Recux.
* **What is it?** - `redux-thunk` is a middleware that we can plug into our `createStore()` method when setting up our Redux application.
* **Why do we need it?** Well, Dan himself argues that if you have to ask that question you probably don't need it. However, the average single-page-application deals with `HTTP` requests and often times, we don't have the data back from the server we need in time for use in a synchronous flow. `redux-thunk` allows us to turn our action creators into async functions by granting them the ability to return 'functions' instead of plain objects.
* **How do we use it?** It's pretty simple really.

```
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { someCoolReducer } from './reducers';

const store = createStore(someCoolReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
```

* instead of passing our initial state directly to our `createStore()` function, we can pass it `applyMiddleware` as a second argument.
* Then, anything we add to `applyMiddleware` we'll have access to once we pass it to our store and set it as a property on the `<Provider />` component.
* Set up is really that simple. The real difficulties lie in re-design of our `action-creators`.
* Instead of returning a simple object every time, any `http request` sent out can be done within an action creator and that function can now return another function.
* This would look a lot like this.

```
function myCleverAction = () => {
  const request = axios.get('https://someRadUrlAPI.com/api/coolness);
  return (dispatch) => {
    request.then(({data}) => {
      dispatch({type: GET_COOL_THING, payload: data.things});
    })
    .catch(err => {
      dispatch({type: ERROR_GETTING_THINGS, error: err});
    });
  };
};
```

* This is an `http` request, and at this point in time, it is a promise.
* Our promise resolves here with data in this `.then` block
* Now we just call the `dispatch` method which has ben exposed to us through our `thunk` middleware.
* This looks like a lot of boiler plate, but it's actually a controlled, and eloquent solution to big problems often caused by `cross-site-scripting` and making `http` requests.

## redux-logger

* [redux-logger](https://github.com/evgenyrodionov/redux-logger) is a logging middleware that allows us to simply put some of the powers of the `redux dev tools` directly into our browser.
* If you don't want to mess with configuration of Chrome packages etc. this is a really good way to tap into your `store.subscribe()` function.
* Set up is simple, pass it into the `applyMiddleware()` method along with your `redux-thunk` middleware and you're good to go!

```
import logger from 'redux-logger';

applyMiddleware(thunk, logger);
```

* As soon as your app starts dispatching actions, you'll see a very delightful log of these actions in the console :) Feel free to disable this at anytime if logs get to busy or if you just simply prefer to use the dev tools.

## Project

* Your project here is to build a `react-redux` application that will request some data from a 3rd party api.
* go ahead and run an `npm install` or `yarn` to get what you need installed here.
* **Start** in `src/index.js`. We'll need to pull in the appropriate packages.
* **Next** after you're all wired up in your `index` lets move over to work on your reducers.
* **Next** move into our `actions/index.js` file to build out the action that will be sending off the `axios` request to the `SWAPI` api, the URL is `https://swapi.co/api/people`.
  * Hint - `console.log` will be your best friend here. As soon as you get the right data back, you'll want to make sure your _reducer_ is ready to receive it... so there may be some back and forth here.
* **Finally** wire everything up inside of your `components/App.js` and be sure to call your action from within `componentDidMount` to trigger the request.
