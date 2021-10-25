# Glossary

This is a glossary of the core terms in Redux, along with their type signatures. The types are documented using

# [Flow notation](https://flowtype.org/docs/quick-reference.html)

Adding type annotations is an important part of your interaction with Flow.

Flow has a powerful ability to infer the types of your programs. The majority of your code can rely on it. Still, there are places where you'll want to add types.

Imagine the following `concat` function for concatenating two strings together.

|

1
2
3

|

```js
function concat(a, b) {
  return a + b;
}
```

|

When you use this function, Flow knows exactly what is going on.

|

1

|

```js
concat("A", "B"); // Works!
```

|

However, you can use the `+` operator on strings or numbers, so this would also be valid.

|

1

|

```js
concat(1, 2); // Works!
```

|

But suppose you only want to allow strings in your function. For that you can add types.

|

1
2
3

|

```js
function concat(a: string, b: string) {
  return a + b;
}
```

|

Now you'll get a warning from Flow if you try to use numbers.

|

1
2
3
4
5
6
7

|

```js
// @flow
function concat(a: string, b: string) {
  return a + b;
}

concat("A", "B"); // Works!
concat(1, 2); // Error!
```

|

Setting up "boundaries" with your types means you can tell Flow your intent on top of the inference it already does.

This guide will teach you the syntax and semantics of all the different types you can have in Flow.

---

---

## State[**(Link To Docs)**](https://redux.js.org/understanding/thinking-in-redux/glossary#state)

```js
type State = any;
```

*State* (also called the *state tree*) is a broad term, but in the Redux API it usually refers to the single state value that is managed by the store and returned by [`getState()`](https://redux.js.org/api/store#getState). It represents the entire state of a Redux application, which is often a deeply nested object.

By convention, the top-level state is an object or some other key-value collection like a Map, but technically it can be any type. Still, you should do your best to keep the state serializable. Don't put anything inside it that you can't easily turn into JSON.

## Action[**(Link To Docs)**](https://redux.js.org/understanding/thinking-in-redux/glossary#action)

```js
type Action = Object;
```

An *action* is a plain object that represents an intention to change the state. Actions are the only way to get data into the store. Any data, whether from UI events, network callbacks, or other sources such as WebSockets needs to eventually be dispatched as actions.

Actions must have a `type` field that indicates the type of action being performed. Types can be defined as constants and imported from another module. It's better to use strings for `type` than [Symbols](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Symbol) because strings are serializable.

Other than `type`, the structure of an action object is really up to you. If you're interested, check out [Flux Standard Action](https://github.com/acdlite/flux-standard-action) for recommendations on how actions should be constructed.

See also [async action](https://redux.js.org/understanding/thinking-in-redux/glossary#async-action) below.

## Reducer[**(Link To Docs)**](https://redux.js.org/understanding/thinking-in-redux/glossary#reducer)

```js
type Reducer<S, A> = (state: S, action: A) => S;
```

A *reducer* (also called a *reducing function*) is a function that accepts an accumulation and a value and returns a new accumulation. They are used to reduce a collection of values down to a single value.

Reducers are not unique to Redux---they are a fundamental concept in functional programming. Even most non-functional languages, like JavaScript, have a built-in API for reducing. In JavaScript, it's [`Array.prototype.reduce()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce).

In Redux, the accumulated value is the state object, and the values being accumulated are actions. Reducers calculate a new state given the previous state and an action. They must be *pure functions*---functions that return the exact same output for given inputs. They should also be free of side-effects. This is what enables exciting features like hot reloading and time travel.

Reducers are the most important concept in Redux.

_Do not put API calls into reducers._

## Dispatching Function[**(Link To Docs)**](https://redux.js.org/understanding/thinking-in-redux/glossary#dispatching-function)

```js
type BaseDispatch = (a: Action) => Actiontype Dispatch = (a: Action | AsyncAction) => any
```

A *dispatching function* (or simply *dispatch function*) is a function that accepts an action or an [async action](https://redux.js.org/understanding/thinking-in-redux/glossary#async-action); it then may or may not dispatch one or more actions to the store.

We must distinguish between dispatching functions in general and the base [`dispatch`](https://redux.js.org/api/store#dispatchaction) function provided by the store instance without any middleware.

The base dispatch function *always* synchronously sends an action to the store's reducer, along with the previous state returned by the store, to calculate a new state. It expects actions to be plain objects ready to be consumed by the reducer.

[Middleware](https://redux.js.org/understanding/thinking-in-redux/glossary#middleware) wraps the base dispatch function. It allows the dispatch function to handle [async actions](https://redux.js.org/understanding/thinking-in-redux/glossary#async-action) in addition to actions. Middleware may transform, delay, ignore, or otherwise interpret actions or async actions before passing them to the next middleware. See below for more information.

## Action Creator[**(Link To Docs)**](https://redux.js.org/understanding/thinking-in-redux/glossary#action-creator)

```js
type ActionCreator<A, P extends any[] = any[]> = (...args: P) => Action | AsyncAction
```

An *action creator* is, quite simply, a function that creates an action. Do not confuse the two terms---again, an action is a payload of information, and an action creator is a factory that creates an action.

Calling an action creator only produces an action, but does not dispatch it. You need to call the store's [`dispatch`](https://redux.js.org/api/store#dispatchaction) function to actually cause the mutation. Sometimes we say *bound action creators* to mean functions that call an action creator and immediately dispatch its result to a specific store instance.

If an action creator needs to read the current state, perform an API call, or cause a side effect, like a routing transition, it should return an [async action](https://redux.js.org/understanding/thinking-in-redux/glossary#async-action) instead of an action.

## Async Action[**(Link To Docs)**](https://redux.js.org/understanding/thinking-in-redux/glossary#async-action)

```js
type AsyncAction = any;
```

An *async action* is a value that is sent to a dispatching function, but is not yet ready for consumption by the reducer. It will be transformed by [middleware](https://redux.js.org/understanding/thinking-in-redux/glossary#middleware) into an action (or a series of actions) before being sent to the base [`dispatch()`](https://redux.js.org/api/store#dispatchaction) function. Async actions may have different types, depending on the middleware you use. They are often asynchronous primitives, like a Promise or a thunk, which are not passed to the reducer immediately, but trigger action dispatches once an operation has completed.

## Middleware[**(Link To Docs)**](https://redux.js.org/understanding/thinking-in-redux/glossary#middleware)

```js
type MiddlewareAPI = { dispatch: Dispatch, getState: () => State }type Middleware = (api: MiddlewareAPI) => (next: Dispatch) => Dispatch
```

A middleware is a higher-order function that composes a [dispatch function](https://redux.js.org/understanding/thinking-in-redux/glossary#dispatching-function) to return a new dispatch function. It often turns [async actions](https://redux.js.org/understanding/thinking-in-redux/glossary#async-action) into actions.

Middleware is composable using function composition. It is useful for logging actions, performing side effects like routing, or turning an asynchronous API call into a series of synchronous actions.

See [`applyMiddleware(...middlewares)`](https://redux.js.org/api/applymiddleware) for a detailed look at middleware.

## Store[**(Link To Docs)**](https://redux.js.org/understanding/thinking-in-redux/glossary#store)

```js
type Store = {  dispatch: Dispatch  getState: () => State  subscribe: (listener: () => void) => () => void  replaceReducer: (reducer: Reducer) => void}
```

A store is an object that holds the application's state tree. There should only be a single store in a Redux app, as the composition happens on the reducer level.

- [`dispatch(action)`](https://redux.js.org/api/store#dispatchaction) is the base dispatch function described above.
- [`getState()`](https://redux.js.org/api/store#getState) returns the current state of the store.
- [`subscribe(listener)`](https://redux.js.org/api/store#subscribelistener) registers a function to be called on state changes.
- [`replaceReducer(nextReducer)`](https://redux.js.org/api/store#replacereducernextreducer) can be used to implement hot reloading and code splitting. Most likely you won't use it.

See the complete [store API reference](https://redux.js.org/api/store#dispatchaction) for more details.

## Store creator[**(Link To Docs)**](https://redux.js.org/understanding/thinking-in-redux/glossary#store-creator)

```js
type StoreCreator = (reducer: Reducer, preloadedState: ?State) => Store;
```

A store creator is a function that creates a Redux store. Like with dispatching function, we must distinguish the base store creator, [`createStore(reducer, preloadedState)`](https://redux.js.org/api/createstore) exported from the Redux package, from store creators that are returned from the store enhancers.

## Store enhancer[**(Link To Docs)**](https://redux.js.org/understanding/thinking-in-redux/glossary#store-enhancer)

```js
type StoreEnhancer = (next: StoreCreator) => StoreCreator;
```

Because a store is not an instance, but rather a plain-object collection of functions, copies can be easily created and modified without mutating the original store. There is an example in [`compose`](https://redux.js.org/api/compose) documentation demonstrating that.

Most likely you'll never write a store enhancer, but you may use the one provided by the [developer tools](https://github.com/reduxjs/redux-devtools). It is what makes time travel possible without the app being aware it is happening. Amusingly, the [Redux middleware implementation](https://redux.js.org/api/applymiddleware) is itself a store enhancer.
