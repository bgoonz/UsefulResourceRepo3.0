# Redux DOCS

## Table of Contents

- **General**
  - [When should I learn Redux?](faq/General.md#when-should-i-learn-redux)
  - [When should I use Redux?](faq/General.md#when-should-i-use-redux)
  - [Can Redux only be used with React?](faq/General.md#can-redux-only-be-used-with-react)
  - [Do I need to have a particular build tool to use Redux?](faq/General.md#do-i-need-to-have-a-particular-build-tool-to-use-redux)
- **Reducers**
  - [How do I share state between two reducers? Do I have to use combineReducers?](faq/Reducers.md#how-do-i-share-state-between-two-reducers-do-i-have-to-use-combinereducers)
  - [Do I have to use the switch statement to handle actions?](faq/Reducers.md#do-i-have-to-use-the-switch-statement-to-handle-actions)
- **Organizing State**
  - [Do I have to put all my state into Redux? Should I ever use React's setState()?](faq/OrganizingState.md#do-i-have-to-put-all-my-state-into-redux-should-i-ever-use-reacts-setstate)
  - [Can I put functions, promises, or other non-serializable items in my store state?](faq/OrganizingState.md#can-i-put-functions-promises-or-other-non-serializable-items-in-my-store-state)
  - [How do I organize nested or duplicate data in my state?](faq/OrganizingState.md#how-do-i-organize-nested-or-duplicate-data-in-my-state)
  - [Should I put form state or other UI state in my store?](faq/OrganizingState.md#should-i-put-form-state-or-other-ui-state-in-my-store)
- **Store Setup**
  - [Can or should I create multiple stores? Can I import my store directly, and use it in components myself?](faq/StoreSetup.md#can-or-should-i-create-multiple-stores-can-i-import-my-store-directly-and-use-it-in-components-myself)
  - [Is it OK to have more than one middleware chain in my store enhancer? What is the difference between next and dispatch in a middleware function?](faq/StoreSetup.md#is-it-ok-to-have-more-than-one-middleware-chain-in-my-store-enhancer-what-is-the-difference-between-next-and-dispatch-in-a-middleware-function)
  - [How do I subscribe to only a portion of the state? Can I get the dispatched action as part of the subscription?](faq/StoreSetup.md#how-do-i-subscribe-to-only-a-portion-of-the-state-can-i-get-the-dispatched-action-as-part-of-the-subscription)
- **Actions**
  - [Why should type be a string, or at least serializable? Why should my action types be constants?](faq/Actions.md#why-should-type-be-a-string-or-at-least-serializable-why-should-my-action-types-be-constants)
  - [Is there always a one-to-one mapping between reducers and actions?](faq/Actions.md#is-there-always-a-one-to-one-mapping-between-reducers-and-actions)
  - [How can I represent “side effects” such as AJAX calls? Why do we need things like “action creators”, “thunks”, and “middleware” to do async behavior?](faq/Actions.md#how-can-i-represent-side-effects-such-as-ajax-calls-why-do-we-need-things-like-action-creators-thunks-and-middleware-to-do-async-behavior)
  - [What async middleware should I use? How do you decide between thunks, sagas, observables, or something else?](faq/Actions.md#what-async-middleware-should-i-use-how-do-you-decide-between-thunks-sagas-observables-or-something-else)
  - [Should I dispatch multiple actions in a row from one action creator?](faq/Actions.md#should-i-dispatch-multiple-actions-in-a-row-from-one-action-creator)
- **Immutable Data**
  - [What are the benefits of immutability?](faq/ImmutableData.md#what-are-the-benefits-of-immutability)
  - [Why is immutability required by Redux?](faq/ImmutableData.md#why-is-immutability-required-by-redux)
  - [What approaches are there for handling data immutability? Do I have to use Immer?](faq/ImmutableData.md#what-approaches-are-there-for-handling-data-immutability-do-i-have-to-use-immer)
  - [What are the issues with using JavaScript for immutable operations?](faq/ImmutableData.md#what-are-the-issues-with-using-plain-javascript-for-immutable-operations)
- **Code Structure**
  - [What should my file structure look like? How should I group my action creators and reducers in my project? Where should my selectors go?](faq/CodeStructure.md#what-should-my-file-structure-look-like-how-should-i-group-my-action-creators-and-reducers-in-my-project-where-should-my-selectors-go)
  - [How should I split my logic between reducers and action creators? Where should my “business logic” go?](faq/CodeStructure.md#how-should-i-split-my-logic-between-reducers-and-action-creators-where-should-my-business-logic-go)
  - [Why should I use action creators?](faq/CodeStructure.md#why-should-i-use-action-creators)
  - [Where should websockets and other persistent connections live?](faq/CodeStructure.md#where-should-websockets-and-other-persistent-connections-live)
  - [How can I use the Redux store in non-component files?](faq/CodeStructure.md#how-can-i-use-the-redux-store-in-non-component-files)
- **Performance**
  - [How well does Redux “scale” in terms of performance and architecture?](faq/Performance.md#how-well-does-redux-scale-in-terms-of-performance-and-architecture)
  - [Won't calling “all my reducers” for each action be slow?](faq/Performance.md#wont-calling-all-my-reducers-for-each-action-be-slow)
  - [Do I have to deep-clone my state in a reducer? Isn't copying my state going to be slow?](faq/Performance.md#do-i-have-to-deep-clone-my-state-in-a-reducer-isnt-copying-my-state-going-to-be-slow)
  - [How can I reduce the number of store update events?](faq/Performance.md#how-can-i-reduce-the-number-of-store-update-events)
  - [Will having “one state tree” cause memory problems? Will dispatching many actions take up memory?](faq/Performance.md#will-having-one-state-tree-cause-memory-problems-will-dispatching-many-actions-take-up-memory)
  - [Will caching remote data cause memory problems?](faq/Performance.md#will-caching-remote-data-cause-memory-problems)
- **Design Decisions**
  - [Why doesn't Redux pass the state and action to subscribers?](faq/DesignDecisions.md#why-doesnt-redux-pass-the-state-and-action-to-subscribers)
  - [Why doesn't Redux support using classes for actions and reducers?](faq/DesignDecisions.md#why-doesnt-redux-support-using-classes-for-actions-and-reducers)
  - [Why does the middleware signature use currying?](faq/DesignDecisions.md#why-does-the-middleware-signature-use-currying)
  - [Why does applyMiddleware use a closure for dispatch?](faq/DesignDecisions.md#why-does-applymiddleware-use-a-closure-for-dispatch)
  - [Why doesn't `combineReducers` include a third argument with the entire state when it calls each reducer?](faq/DesignDecisions.md#why-doesnt-combinereducers-include-a-third-argument-with-the-entire-state-when-it-calls-each-reducer)
  - [Why doesn't mapDispatchToProps allow use of return values from `getState()` or `mapStateToProps()`?](faq/DesignDecisions.md#why-doesnt-mapdispatchtoprops-allow-use-of-return-values-from-getstate-or-mapstatetoprops)
- **React Redux**
  - [Why should I use React-Redux?](faq/ReactRedux.md#why-should-i-use-react-redux)
  - [Why isn't my component re-rendering, or my mapStateToProps running?](faq/ReactRedux.md#why-isnt-my-component-re-rendering-or-my-mapstatetoprops-running)
  - [Why is my component re-rendering too often?](faq/ReactRedux.md#why-is-my-component-re-rendering-too-often)
  - [How can I speed up my mapStateToProps?](faq/ReactRedux.md#how-can-i-speed-up-my-mapstatetoprops)
  - [Why don't I have this.props.dispatch available in my connected component?](faq/ReactRedux.md#why-dont-i-have-this-props-dispatch-available-in-my-connected-component)
  - [Should I only connect my top component, or can I connect multiple components in my tree?](faq/ReactRedux.md#should-i-only-connect-my-top-component-or-can-i-connect-multiple-components-in-my-tree)
- **Miscellaneous**
  - [Are there any larger, “real” Redux projects?](faq/Miscellaneous.md#are-there-any-larger-real-redux-projects)
  - [How can I implement authentication in Redux?](faq/Miscellaneous.md#how-can-i-implement-authentication-in-redux)

---

id: core-concepts
title: Core Concepts
description: "Introduction > Core Concepts: A quick overview of Redux's key idea, reducer functions"

---

# Core Concepts

Imagine your app’s state is described as a plain object. For example, the state of a todo app might look like this:

```js
{
  todos: [{
    text: 'Eat food',
    completed: true
  }, {
    text: 'Exercise',
    completed: false
  }],
  visibilityFilter: 'SHOW_COMPLETED'
}
```

This object is like a “model” except that there are no setters. This is so that different parts of the code can’t change the state arbitrarily, causing hard-to-reproduce bugs.

To change something in the state, you need to dispatch an action. An action is a plain JavaScript object (notice how we don’t introduce any magic?) that describes what happened. Here are a few example actions:

```js
{ type: 'ADD_TODO', text: 'Go to swimming pool' }
{ type: 'TOGGLE_TODO', index: 1 }
{ type: 'SET_VISIBILITY_FILTER', filter: 'SHOW_ALL' }
```

Enforcing that every change is described as an action lets us have a clear understanding of what’s going on in the app. If something changed, we know why it changed. Actions are like breadcrumbs of what has happened.
Finally, to tie state and actions together, we write a function called a reducer. Again, nothing magical about it—it’s just a function that takes state and action as arguments, and returns the next state of the app.
It would be hard to write such a function for a big app, so we write smaller functions managing parts of the state:

```js
function visibilityFilter(state = "SHOW_ALL", action) {
  if (action.type === "SET_VISIBILITY_FILTER") {
    return action.filter;
  } else {
    return state;
  }
}

function todos(state = [], action) {
  switch (action.type) {
    case "ADD_TODO":
      return state.concat([{ text: action.text, completed: false }]);
    case "TOGGLE_TODO":
      return state.map((todo, index) =>
        action.index === index
          ? { text: todo.text, completed: !todo.completed }
          : todo
      );
    default:
      return state;
  }
}
```

And we write another reducer that manages the complete state of our app by calling those two reducers for the corresponding state keys:

```js
function todoApp(state = {}, action) {
  return {
    todos: todos(state.todos, action),
    visibilityFilter: visibilityFilter(state.visibilityFilter, action),
  };
}
```

This is basically the whole idea of Redux. Note that we haven’t used any Redux APIs. It comes with a few utilities to facilitate this pattern, but the main idea is that you describe how your state is updated over time in response to action objects, and 90% of the code you write is just plain JavaScript, with no use of Redux itself, its APIs, or any magic.

---

id: ecosystem
title: Ecosystem
description: 'Introduction > Ecosystem: Links to popular, recommended, and interesting Redux-related libraries'

---

# Ecosystem

Redux is a tiny library, but its contracts and APIs are carefully chosen to spawn an ecosystem of tools and extensions, and the community has created a wide variety of helpful addons, libraries, and tools. You don't need to use any of these addons to use Redux, but they can help make it easier to implement features and solve problems in your application.

For an extensive catalog of libraries, addons, and tools related to Redux, check out the [Redux Ecosystem Links](https://github.com/markerikson/redux-ecosystem-links) list. Also, the [React/Redux Links](https://github.com/markerikson/react-redux-links) list contains tutorials and other useful resources for anyone learning React or Redux.

This page lists some of the Redux-related addons that the Redux maintainers have vetted personally, or that have shown widespread adoption in the community. Don't let this discourage you from trying the rest of them! The ecosystem is growing too fast, and we have a limited time to look at everything. Consider these the “staff picks”, and don't hesitate to submit a PR if you've built something wonderful with Redux.

## Table of Contents

- [Ecosystem](#ecosystem)
  - [Table of Contents](#table-of-contents)
  - [Library Integration and Bindings](#library-integration-and-bindings)
  - [Reducers](#reducers)
    - [Reducer Combination](#reducer-combination)
    - [Reducer Composition](#reducer-composition)
    - [Higher-Order Reducers](#higher-order-reducers)
  - [Actions](#actions)
  - [Utilities](#utilities)
  - [Store](#store)
    - [Change Subscriptions](#change-subscriptions)
    - [Batching](#batching)
    - [Persistence](#persistence)
  - [Immutable Data](#immutable-data)
    - [Data Structures](#data-structures)
    - [Immutable Update Utilities](#immutable-update-utilities)
    - [Immutable/Redux Interop](#immutableredux-interop)
  - [Side Effects](#side-effects)
    - [Widely Used](#widely-used)
    - [Promises](#promises)
  - [Middleware](#middleware)
    - [Networks and Sockets](#networks-and-sockets)
    - [Async Behavior](#async-behavior)
    - [Analytics](#analytics)
  - [Entities and Collections](#entities-and-collections)
  - [Component State and Encapsulation](#component-state-and-encapsulation)
  - [Dev Tools](#dev-tools)
    - [Debuggers and Viewers](#debuggers-and-viewers)
    - [DevTools Monitors](#devtools-monitors)
    - [Logging](#logging)
    - [Mutation Detection](#mutation-detection)
  - [Testing](#testing)
  - [Routing](#routing)
  - [Forms](#forms)
  - [Higher-Level Abstractions](#higher-level-abstractions)
  - [Community Conventions](#community-conventions)

## Library Integration and Bindings

**[reduxjs/react-redux](https://github.com/reduxjs/react-redux)** <br />
The official React bindings for Redux, maintained by the Redux team

**[angular-redux/ng-redux](https://github.com/angular-redux/ng-redux)** <br />
Angular 1 bindings for Redux

**[ember-redux/ember-redux](https://github.com/ember-redux/ember-redux)** <br />
Ember bindings for Redux

**[glimmer-redux/glimmer-redux](https://github.com/glimmer-redux/glimmer-redux)** <br />
Redux bindings for Ember's Glimmer component engine

**[tur-nr/polymer-redux](https://github.com/tur-nr/polymer-redux)** <br />
Redux bindings for Polymer

**[lastmjs/redux-store-element](https://github.com/lastmjs/redux-store-element)**
Redux bindings for custom elements

## Reducers

#### Reducer Combination

**[ryo33/combineSectionReducers](https://gitlab.com/ryo33/combine-section-reducers)** <br />
An expanded version of `combineReducers`, which allows passing `state` as a third argument to all slice reducers.

**[KodersLab/topologically-combine-reducers](https://github.com/KodersLab/topologically-combine-reducers)** <br />
A `combineReducers` variation that allows defining cross-slice dependencies for ordering and data passing

```js
var masterReducer = topologicallyCombineReducers(
  { auth, users, todos },
  // define the dependency tree
  { auth: ["users"], todos: ["auth"] }
);
```

#### Reducer Composition

**[acdlite/reduce-reducers](https://github.com/acdlite/reduce-reducers)** <br />
Provides sequential composition of reducers at the same level

```js
const combinedReducer = combineReducers({ users, posts, comments });
const rootReducer = reduceReducers(
  combinedReducer,
  otherTopLevelFeatureReducer
);
```

**[mhelmer/redux-xforms](https://github.com/mhelmer/redux-xforms)** <br />
A collection of composable reducer transformers

```js
const createByFilter = (predicate, mapActionToKey) =>
  compose(
    withInitialState({}), // inject initial state as {}
    withFilter(predicate), // let through if action has filterName
    updateSlice(mapActionToKey), // update a single key in the state
    isolateSlice(mapActionToKey) // run the reducer on a single state slice
  );
```

**[adrienjt/redux-data-structures](https://github.com/adrienjt/redux-data-structures)** <br />
Reducer factory functions for common data structures: counters, maps, lists (queues, stacks), sets

```js
const myCounter = counter({
  incrementActionTypes: ["INCREMENT"],
  decrementActionTypes: ["DECREMENT"],
});
```

#### Higher-Order Reducers

**[omnidan/redux-undo](https://github.com/omnidan/redux-undo)** <br />
Effortless undo/redo and action history for your reducers

**[omnidan/redux-ignore](https://github.com/omnidan/redux-ignore)** <br />
Ignore redux actions by array or filter function

**[omnidan/redux-recycle](https://github.com/omnidan/redux-recycle)** <br />
Reset the redux state on certain actions

**[ForbesLindesay/redux-optimist](https://github.com/ForbesLindesay/redux-optimist)** <br />
A reducer enhancer to enable type-agnostic optimistic updates

## Actions

**[reduxactions/redux-actions](https://github.com/reduxactions/redux-actions)** <br />
Flux Standard Action utilities for Redux

```js
const increment = createAction("INCREMENT");
const reducer = handleActions({ [increment]: (state, action) => state + 1 }, 0);
const store = createStore(reducer);
store.dispatch(increment());
```

**[BerkeleyTrue/redux-create-types](https://github.com/BerkeleyTrue/redux-create-types)** <br />
Creates standard and async action types based on namespaces

```js
export const types = createTypes(
  ["openModal", createAsyncTypes("fetch")],
  "app"
);
// { openModal : "app.openModal", fetch : { start : "app.fetch.start", complete: 'app.fetch.complete' } }
```

**[maxhallinan/kreighter](https://github.com/maxhallinan/kreighter)** <br />
Generates action creators based on types and expected fields

```js
const formatTitle = (id, title) => ({
  id,
  title: toTitleCase(title),
});
const updateBazTitle = fromType("UPDATE_BAZ_TITLE", formatTitle);
updateBazTitle(1, "foo bar baz");
// -> { type: 'UPDATE_BAZ_TITLE', id: 1, title: 'Foo Bar Baz', }
```

## Utilities

**[reduxjs/reselect](https://github.com/reduxjs/reselect)** <br />
Creates composable memoized selector functions for efficiently deriving data from the store state

```js
const taxSelector = createSelector(
  [subtotalSelector, taxPercentSelector],
  (subtotal, taxPercent) => subtotal * (taxPercent / 100)
);
```

**[paularmstrong/normalizr](https://github.com/paularmstrong/normalizr)** <br />
Normalizes nested JSON according to a schema

```js
const user = new schema.Entity("users");
const comment = new schema.Entity("comments", { commenter: user });
const article = new schema.Entity("articles", {
  author: user,
  comments: [comment],
});
const normalizedData = normalize(originalData, article);
```

**[planttheidea/selectorator](https://github.com/planttheidea/selectorator)** <br />
Abstractions over Reselect for common selector use cases

```js
const getBarBaz = createSelector(
  ["foo.bar", "baz"],
  (bar, baz) => `${bar} ${baz}`
);
getBarBaz({ foo: { bar: "a" }, baz: "b" }); // "a b"
```

## Store

#### Change Subscriptions

**[jprichardson/redux-watch](https://github.com/jprichardson/redux-watch)** <br />
Watch for state changes based on key paths or selectors

```js
let w = watch(() => mySelector(store.getState()));
store.subscribe(
  w((newVal, oldVal) => {
    console.log(newval, oldVal);
  })
);
```

**[ashaffer/redux-subscribe](https://github.com/ashaffer/redux-subscribe)** <br />
Centralized subscriptions to state changes based on paths

```js
store.dispatch( subscribe("users.byId.abcd", "subscription1", () => {} );
```

#### Batching

**[tappleby/redux-batched-subscribe](https://github.com/tappleby/redux-batched-subscribe)** <br />
Store enhancer that can debounce subscription notifications

```js
const debounceNotify = _.debounce((notify) => notify());
const store = createStore(
  reducer,
  initialState,
  batchedSubscribe(debounceNotify)
);
```

**[manaflair/redux-batch](https://github.com/manaflair/redux-batch)** <br />
Store enhancer that allows dispatching arrays of actions

```js
const store = createStore(reducer, reduxBatch);
store.dispatch([{ type: "INCREMENT" }, { type: "INCREMENT" }]);
```

**[laysent/redux-batch-actions-enhancer](https://github.com/laysent/redux-batch-actions-enhancer)** <br />
Store enhancer that accepts batched actions

```js
const store = createStore(reducer, initialState, batch().enhancer);
store.dispatch(createAction({ type: "INCREMENT" }, { type: "INCREMENT" }));
```

**[tshelburne/redux-batched-actions](https://github.com/tshelburne/redux-batched-actions)** <br />
Higher-order reducer that handles batched actions

```js
const store = createStore(enableBatching(reducer), initialState);
store.dispatch(batchActions([{ type: "INCREMENT" }, { type: "INCREMENT" }]));
```

#### Persistence

**[rt2zz/redux-persist](https://github.com/rt2zz/redux-persist)** <br />
Persist and rehydrate a Redux store, with many extensible options

```js
const store = createStore(reducer, autoRehydrate());
persistStore(store);
```

**[react-stack/redux-storage](https://github.com/react-stack/redux-storage)** <br />
Persistence layer for Redux with flexible backends

```js
const reducer = storage.reducer(combineReducers(reducers));
const engine = createEngineLocalStorage("my-save-key");
const storageMiddleware = storage.createMiddleware(engine);
const store = createStore(reducer, applyMiddleware(storageMiddleware));
```

**[redux-offline/redux-offline](https://github.com/redux-offline/redux-offline)** <br />
Persistent store for Offline-First apps, with support for optimistic UIs

```js
const store = createStore(reducer, offline(offlineConfig));
store.dispatch({
  type: "FOLLOW_USER_REQUEST",
  meta: { offline: { effect: {}, commit: {}, rollback: {} } },
});
```

## Immutable Data

**[ImmerJS/immer](https://github.com/immerjs/immer)** <br />
Immutable updates with normal mutative code, using Proxies

```js
const nextState = produce(baseState, (draftState) => {
  draftState.push({ todo: "Tweet about it" });
  draftState[1].done = true;
});
```

## Side Effects

#### Widely Used

**[gaearon/redux-thunk](https://github.com/gaearon/redux-thunk)** <br />
Dispatch functions, which are called and given `dispatch` and `getState` as parameters. This acts as a loophole for AJAX calls and other async behavior.

**Best for**: getting started, simple async and complex synchronous logic.

```js
function fetchData(someValue) {
    return (dispatch, getState) => {
        dispatch({type : "REQUEST_STARTED"});

        myAjaxLib.post("/someEndpoint", {data : someValue})
            .then(response => dispatch({type : "REQUEST_SUCCEEDED", payload : response})
            .catch(error => dispatch({type : "REQUEST_FAILED", error : error});
    };
}

function addTodosIfAllowed(todoText) {
    return (dispatch, getState) => {
        const state = getState();

        if(state.todos.length < MAX_TODOS) {
            dispatch({type : "ADD_TODO", text : todoText});
        }
    }
}
```

**[redux-saga/redux-saga](https://github.com/redux-saga/redux-saga)** <br />
Handle async logic using synchronous-looking generator functions. Sagas return descriptions of effects, which are executed by the saga middleware, and act like "background threads" for JS applications.

**Best for**: complex async logic, decoupled workflows

```js
function* fetchData(action) {
  const { someValue } = action;
  try {
    const response = yield call(myAjaxLib.post, "/someEndpoint", {
      data: someValue,
    });
    yield put({ type: "REQUEST_SUCCEEDED", payload: response });
  } catch (error) {
    yield put({ type: "REQUEST_FAILED", error: error });
  }
}

function* addTodosIfAllowed(action) {
  const { todoText } = action;
  const todos = yield select((state) => state.todos);

  if (todos.length < MAX_TODOS) {
    yield put({ type: "ADD_TODO", text: todoText });
  }
}
```

**[redux-observable/redux-observable](https://github.com/redux-observable/redux-observable)**

Handle async logic using RxJS observable chains called "epics".
Compose and cancel async actions to create side effects and more.

**Best for**: complex async logic, decoupled workflows

```js
const loginRequestEpic = (action$) =>
  action$
    .ofType(LOGIN_REQUEST)
    .mergeMap(({ payload: { username, password } }) =>
      Observable.from(postLogin(username, password))
        .map(loginSuccess)
        .catch(loginFailure)
    );

const loginSuccessfulEpic = (action$) =>
  action$
    .ofType(LOGIN_SUCCESS)
    .delay(2000)
    .mergeMap(({ payload: { msg } }) => showMessage(msg));

const rootEpic = combineEpics(loginRequestEpic, loginSuccessfulEpic);
```

**[redux-loop/redux-loop](https://github.com/redux-loop/redux-loop)**

A port of the Elm Architecture to Redux that allows you to sequence your effects naturally and purely by returning them from your reducers. Reducers now return both a state value and a side effect description.

**Best for**: trying to be as much like Elm as possible in Redux+JS

```js
export const reducer = (state = {}, action) => {
  switch (action.type) {
    case ActionType.LOGIN_REQUEST:
      const { username, password } = action.payload;
      return loop(
        { pending: true },
        Effect.promise(loginPromise, username, password)
      );
    case ActionType.LOGIN_SUCCESS:
      const { user, msg } = action.payload;
      return loop(
        { pending: false, user },
        Effect.promise(delayMessagePromise, msg, 2000)
      );
    case ActionType.LOGIN_FAILURE:
      return { pending: false, err: action.payload };
    default:
      return state;
  }
};
```

**[jeffbski/redux-logic](https://github.com/jeffbski/redux-logic)**

Side effects lib built with observables, but allows use of callbacks, promises, async/await, or observables. Provides declarative processing of actions.

**Best for**: very decoupled async logic

```js
const loginLogic = createLogic({
  type: Actions.LOGIN_REQUEST,

  process({ getState, action }, dispatch, done) {
    const { username, password } = action.payload;

    postLogin(username, password)
      .then(
        ({ user, msg }) => {
          dispatch(loginSucceeded(user));

          setTimeout(() => dispatch(showMessage(msg)), 2000);
        },
        (err) => dispatch(loginFailure(err))
      )
      .then(done);
  },
});
```

#### Promises

**[acdlite/redux-promise](https://github.com/acdlite/redux-promise)** <br />
Dispatch promises as action payloads, and have FSA-compliant actions dispatched as the promise resolves or rejects.

```js
dispatch({ type: "FETCH_DATA", payload: myAjaxLib.get("/data") });
// will dispatch either {type : "FETCH_DATA", payload : response} if resolved,
// or dispatch {type : "FETCH_DATA", payload : error, error : true} if rejected
```

**[lelandrichardson/redux-pack](https://github.com/lelandrichardson/redux-pack)** <br />
Sensible, declarative, convention-based promise handling that guides users in a good direction without exposing the full power of dispatch.

```js
dispatch({type : "FETCH_DATA", payload : myAjaxLib.get("/data") });

// in a reducer:
        case "FETCH_DATA": =
            return handle(state, action, {
                start: prevState => ({
                  ...prevState,
                  isLoading: true,
                  fooError: null
                }),
                finish: prevState => ({ ...prevState, isLoading: false }),
                failure: prevState => ({ ...prevState, fooError: payload }),
                success: prevState => ({ ...prevState, foo: payload }),
            });
```

## Middleware

#### Networks and Sockets

**[svrcekmichal/redux-axios-middleware](https://github.com/svrcekmichal/redux-axios-middleware)** <br />
Fetches data with Axios and dispatches start/success/fail actions

```js
export const loadCategories() => ({ type: 'LOAD', payload: { request : { url: '/categories'} } });
```

**[agraboso/redux-api-middleware](https://github.com/agraboso/redux-api-middleware)** <br />
Reads API call actions, fetches, and dispatches FSAs

```js
const fetchUsers = () => ({
  [CALL_API]: {
    endpoint: "http://www.example.com/api/users",
    method: "GET",
    types: ["REQUEST", "SUCCESS", "FAILURE"],
  },
});
```

**[itaylor/redux-socket.io](https://github.com/itaylor/redux-socket.io)** <br />
An opinionated connector between socket.io and redux.

```js
const store = createStore(reducer, applyMiddleware(socketIoMiddleware));
store.dispatch({ type: "server/hello", data: "Hello!" });
```

**[tiberiuc/redux-react-firebase](https://github.com/tiberiuc/redux-react-firebase)** <br />
Integration between Firebase, React, and Redux

#### Async Behavior

**[rt2zz/redux-action-buffer](https://github.com/rt2zz/redux-action-buffer)** <br />
Buffers all actions into a queue until a breaker condition is met, at which point the queue is released

**[wyze/redux-debounce](https://github.com/wyze/redux-debounce)** <br />
FSA-compliant middleware for Redux to debounce actions.

**[mathieudutour/redux-queue-offline](https://github.com/mathieudutour/redux-queue-offline)** <br />
Queue actions when offline and dispatch them when getting back online.

#### Analytics

**[rangle/redux-beacon](https://github.com/rangle/redux-beacon)** <br />
Integrates with any analytics services, can track while offline, and decouples analytics logic from app logic

**[markdalgleish/redux-analytics](https://github.com/markdalgleish/redux-analytics)** <br />
Watches for Flux Standard Actions with meta analytics values and processes them

## Entities and Collections

**[tommikaikkonen/redux-orm](https://github.com/tommikaikkonen/redux-orm)** <br />
A simple immutable ORM to manage relational data in your Redux store.

**[Versent/redux-crud](https://github.com/Versent/redux-crud)** <br />
Convention-based actions and reducers for CRUD logic

**[kwelch/entities-reducer](https://github.com/kwelch/entities-reducer)** <br />
A higher-order reducer that handles data from Normalizr

**[amplitude/redux-query](https://github.com/amplitude/redux-query)** <br />
Declare colocated data dependencies with your components, run queries when components mount, perform optimistic updates, and trigger server changes with Redux actions.

**[cantierecreativo/redux-bees](https://github.com/cantierecreativo/redux-bees)** <br />
Declarative JSON-API interaction that normalizes data, with a React HOC that can run queries

**[GetAmbassador/redux-clerk](https://github.com/GetAmbassador/redux-clerk)** <br />
Async CRUD handling with normalization, optimistic updates, sync/async action creators, selectors, and an extendable reducer.

**[shoutem/redux-io](https://github.com/shoutem/redux-io)** <br />
JSON-API abstraction with async CRUD, normalization, optimistic updates, caching, data status, and error handling.

**[jmeas/redux-resource](https://github.com/jmeas/redux-resource)** <br />
A tiny but powerful system for managing 'resources': data that is persisted to remote servers.

## Component State and Encapsulation

**[threepointone/redux-react-local](https://github.com/threepointone/redux-react-local)** <br />
Local component state in Redux, with handling for component actions

```js
@local({
  ident: 'counter', initial: 0, reducer : (state, action) => action.me ? state + 1 : state }
})
class Counter extends React.Component {
```

**[epeli/lean-redux](https://github.com/epeli/lean-redux)** <br />
Makes component state in Redux as easy as setState

```js
const DynamicCounters = connectLean(
    scope: "dynamicCounters",
    getInitialState() => ({counterCount : 1}),
    addCounter, removeCounter
)(CounterList);
```

**[DataDog/redux-doghouse](https://github.com/DataDog/redux-doghouse)** <br />
Aims to make reusable components easier to build with Redux by scoping actions and reducers to a particular instance of a component.

```js
const scopeableActions = new ScopedActionFactory(actionCreators);
const actionCreatorsScopedToA = scopeableActions.scope("a");
actionCreatorsScopedToA.foo("bar"); //{ type: SET_FOO, value: 'bar', scopeID: 'a' }

const boundScopeableActions = bindScopedActionFactories(
  scopeableActions,
  store.dispatch
);
const scopedReducers = scopeReducers(reducers);
```

## Dev Tools

#### Debuggers and Viewers

**[reduxjs/redux-devtools](https://github.com/reduxjs/redux-devtools)**

Dan Abramov's original Redux DevTools implementation, built for in-app display of state and time-travel debugging

**[zalmoxisus/redux-devtools-extension](https://github.com/zalmoxisus/redux-devtools-extension)**

Mihail Diordiev's browser extension, which bundles multiple state monitor views and adds integration with the browser's own dev tools

**[infinitered/reactotron](https://github.com/infinitered/reactotron)**

A cross-platform Electron app for inspecting React and React Native apps, including app state, API requests, perf, errors, sagas, and action dispatching.

#### DevTools Monitors

**[Log Monitor](https://github.com/reduxjs/redux-devtools/tree/master/packages/redux-devtools-log-monitor)** <br />
The default monitor for Redux DevTools with a tree view

**[Dock Monitor](https://github.com/reduxjs/redux-devtools/tree/master/packages/redux-devtools-dock-monitor)** <br />
A resizable and movable dock for Redux DevTools monitors

**[Slider Monitor](https://github.com/calesce/redux-slider-monitor)** <br />
A custom monitor for Redux DevTools to replay recorded Redux actions

**[Diff Monitor](https://github.com/whetstone/redux-devtools-diff-monitor)** <br />
A monitor for Redux DevTools that diffs the Redux store mutations between actions

**[Filterable Log Monitor](https://github.com/bvaughn/redux-devtools-filterable-log-monitor/)** <br />
Filterable tree view monitor for Redux DevTools

**[Filter Actions](https://github.com/zalmoxisus/redux-devtools-filter-actions)** <br />
Redux DevTools composable monitor with the ability to filter actions

#### Logging

**[evgenyrodionov/redux-logger](https://github.com/evgenyrodionov/redux-logger)** <br />
Logging middleware that shows actions, states, and diffs

**[inakianduaga/redux-state-history](https://github.com/inakianduaga/redux-state-history)** <br />
Enhancer that provides time-travel and efficient action recording capabilities, including import/export of action logs and action playback.

**[joshwcomeau/redux-vcr](https://github.com/joshwcomeau/redux-vcr)** <br />
Record and replay user sessions in real-time

**[socialtables/redux-unhandled-action](https://github.com/socialtables/redux-unhandled-action)** <br />
Warns about actions that produced no state changes in development

#### Mutation Detection

**[leoasis/redux-immutable-state-invariant](https://github.com/leoasis/redux-immutable-state-invariant)** <br />
Middleware that throws an error when you try to mutate your state either inside a dispatch or between dispatches.

**[flexport/mutation-sentinel](https://github.com/flexport/mutation-sentinel)** <br />
Helps you deeply detect mutations at runtime and enforce immutability in your codebase.

**[mmahalwy/redux-pure-connect](https://github.com/mmahalwy/redux-pure-connect)** <br />
Check and log whether react-redux's connect method is passed `mapState` functions that create impure props.

## Testing

**[arnaudbenard/redux-mock-store](https://github.com/arnaudbenard/redux-mock-store)** <br />
A mock store that saves dispatched actions in an array for assertions

**[Workable/redux-test-belt](https://github.com/Workable/redux-test-belt)** <br />
Extends the store API to make it easier assert, isolate, and manipulate the store

**[conorhastings/redux-test-recorder](https://github.com/conorhastings/redux-test-recorder)** <br />
Middleware to automatically generate reducers tests based on actions in the app

**[wix/redux-testkit](https://github.com/wix/redux-testkit)** <br />
Complete and opinionated testkit for testing Redux projects (reducers, selectors, actions, thunks)

**[jfairbank/redux-saga-test-plan](https://github.com/jfairbank/redux-saga-test-plan)** <br />
Makes integration and unit testing of sagas a breeze

## Routing

**[supasate/connected-react-router](https://github.com/supasate/connected-react-router)**
Synchronize React Router 4 state with your Redux store.

**[faceyspacey/redux-first-router](https://github.com/faceyspacey/redux-first-router)** <br />
Seamless Redux-first routing. Think of your app in states, not routes, not components, while keeping the address bar in sync. Everything is state. Connect your components and just dispatch flux standard actions.

## Forms

**[erikras/redux-form](https://github.com/erikras/redux-form)** <br />
A full-featured library to enable a React HTML form to store its state in Redux.

**[davidkpiano/react-redux-form](https://github.com/davidkpiano/react-redux-form)** <br />
React Redux Form is a collection of reducer creators and action creators that make implementing even the most complex and custom forms with React and Redux simple and performant.

## Higher-Level Abstractions

**[keajs/kea](https://github.com/keajs/kea)** <br />
An abstraction over Redux, Redux-Saga and Reselect. Provides a framework for your app’s actions, reducers, selectors and sagas. It empowers Redux, making it as simple to use as setState. It reduces boilerplate and redundancy, while retaining composability.

**[TheComfyChair/redux-scc](https://github.com/TheComfyChair/redux-scc)** <br />
Takes a defined structure and uses 'behaviors' to create a set of actions, reducer responses and selectors.

**[Bloomca/redux-tiles](https://github.com/Bloomca/redux-tiles)** <br />
Provides minimal abstraction on top of Redux, to allow easy composability, easy async requests, and sane testability.

## Community Conventions

**[Flux Standard Action](https://github.com/acdlite/flux-standard-action)** <br />
A human-friendly standard for Flux action objects

**[Canonical Reducer Composition](https://github.com/gajus/canonical-reducer-composition)** <br />
An opinionated standard for nested reducer composition

**[Ducks: Redux Reducer Bundles](https://github.com/erikras/ducks-modular-redux)** <br />
A proposal for bundling reducers, action types and actions

---

id: examples
title: Examples
description: 'Introduction > Examples: Redux interactive example apps'

---

# Examples

Redux is distributed with a few examples in its [source code](https://github.com/reduxjs/redux/tree/master/examples). Most of these examples are also on [CodeSandbox](https://codesandbox.io), an online editor that lets you play with the examples online.

## Counter Vanilla

Run the [Counter Vanilla](https://github.com/reduxjs/redux/tree/master/examples/counter-vanilla) example:

```sh
git clone https://github.com/reduxjs/redux.git

cd redux/examples/counter-vanilla
open index.html
```

Or check out the [sandbox](https://codesandbox.io/s/github/reduxjs/redux/tree/master/examples/counter-vanilla):

<iframe class="codesandbox"src="https://codesandbox.io/embed/github/reduxjs/redux/tree/master/examples/counter-vanilla/?runonclick=1"sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

It does not require a build system or a view framework and exists to show the raw Redux API used with ES5.

## Counter

Run the [Counter](https://github.com/reduxjs/redux/tree/master/examples/counter) example:

```sh
git clone https://github.com/reduxjs/redux.git

cd redux/examples/counter
npm install
npm start
```

Or check out the [sandbox](https://codesandbox.io/s/github/reduxjs/redux/tree/master/examples/counter):

<iframe class="codesandbox"src="https://codesandbox.io/embed/github/reduxjs/redux/tree/master/examples/counter/?runonclick=1"sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

This is the most basic example of using Redux together with React. For simplicity, it re-renders the React component manually when the store changes. In real projects, you will likely want to use the highly performant [React Redux](https://github.com/reduxjs/react-redux) bindings instead.

This example includes tests.

## Todos

Run the [Todos](https://github.com/reduxjs/redux/tree/master/examples/todos) example:

```sh
git clone https://github.com/reduxjs/redux.git

cd redux/examples/todos
npm install
npm start
```

Or check out the [sandbox](https://codesandbox.io/s/github/reduxjs/redux/tree/master/examples/todos):

<iframe class="codesandbox"src="https://codesandbox.io/embed/github/reduxjs/redux/tree/master/examples/todos/?runonclick=1"sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

This is the best example to get a deeper understanding of how the state updates work together with components in Redux. It shows how reducers can delegate handling actions to other reducers, and how you can use [React Redux](https://github.com/reduxjs/react-redux) to generate container components from your presentational components.

This example includes tests.

## Todos with Undo

Run the [Todos with Undo](https://github.com/reduxjs/redux/tree/master/examples/todos-with-undo) example:

```sh
git clone https://github.com/reduxjs/redux.git

cd redux/examples/todos-with-undo
npm install
npm start
```

Or check out the [sandbox](https://codesandbox.io/s/github/reduxjs/redux/tree/master/examples/todos-with-undo):

<iframe class="codesandbox"src="https://codesandbox.io/embed/github/reduxjs/redux/tree/master/examples/todos-with-undo/?runonclick=1"sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

This is a variation on the previous example. It is almost identical, but additionally shows how wrapping your reducer with [Redux Undo](https://github.com/omnidan/redux-undo) lets you add a Undo/Redo functionality to your app with a few lines of code.

## TodoMVC

Run the [TodoMVC](https://github.com/reduxjs/redux/tree/master/examples/todomvc) example:

```sh
git clone https://github.com/reduxjs/redux.git

cd redux/examples/todomvc
npm install
npm start
```

Or check out the [sandbox](https://codesandbox.io/s/github/reduxjs/redux/tree/master/examples/todomvc):

<iframe class="codesandbox"src="https://codesandbox.io/embed/github/reduxjs/redux/tree/master/examples/todomvc/?runonclick=1"sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

This is the classical [TodoMVC](http://todomvc.com/) example. It's here for the sake of comparison, but it covers the same points as the Todos example.

This example includes tests.

## Shopping Cart

Run the [Shopping Cart](https://github.com/reduxjs/redux/tree/master/examples/shopping-cart) example:

```sh
git clone https://github.com/reduxjs/redux.git

cd redux/examples/shopping-cart
npm install
npm start
```

Or check out the [sandbox](https://codesandbox.io/s/github/reduxjs/redux/tree/master/examples/shopping-cart):

<iframe class="codesandbox"src="https://codesandbox.io/embed/github/reduxjs/redux/tree/master/examples/shopping-cart/?runonclick=1"sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

This example shows important idiomatic Redux patterns that become important as your app grows. In particular, it shows how to store entities in a normalized way by their IDs, how to compose reducers on several levels, and how to define selectors alongside the reducers so the knowledge about the state shape is encapsulated. It also demonstrates logging with [Redux Logger](https://github.com/fcomb/redux-logger) and conditional dispatching of actions with [Redux Thunk](https://github.com/gaearon/redux-thunk) middleware.

## Tree View

Run the [Tree View](https://github.com/reduxjs/redux/tree/master/examples/tree-view) example:

```sh
git clone https://github.com/reduxjs/redux.git

cd redux/examples/tree-view
npm install
npm start
```

Or check out the [sandbox](https://codesandbox.io/s/github/reduxjs/redux/tree/master/examples/tree-view):

<iframe class="codesandbox"src="https://codesandbox.io/embed/github/reduxjs/redux/tree/master/examples/tree-view/?runonclick=1"sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

This example demonstrates rendering a deeply nested tree view and representing its state in a normalized form so it is easy to update from reducers. Good rendering performance is achieved by the container components granularly subscribing only to the tree nodes that they render.

This example includes tests.

## Async

Run the [Async](https://github.com/reduxjs/redux/tree/master/examples/async) example:

```sh
git clone https://github.com/reduxjs/redux.git

cd redux/examples/async
npm install
npm start
```

Or check out the [sandbox](https://codesandbox.io/s/github/reduxjs/redux/tree/master/examples/async):

<iframe class="codesandbox"src="https://codesandbox.io/embed/github/reduxjs/redux/tree/master/examples/async/?runonclick=1"sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

This example includes reading from an asynchronous API, fetching data in response to user input, showing loading indicators, caching the response, and invalidating the cache. It uses [Redux Thunk](https://github.com/gaearon/redux-thunk) middleware to encapsulate asynchronous side effects.

## Universal

Run the [Universal](https://github.com/reduxjs/redux/tree/master/examples/universal) example:

```sh
git clone https://github.com/reduxjs/redux.git

cd redux/examples/universal
npm install
npm start
```

This is a basic demonstration of [server rendering](../usage/ServerRendering.md) with Redux and React. It shows how to prepare the initial store state on the server, and pass it down to the client so the client store can boot up from an existing state.

## Real World

Run the [Real World](https://github.com/reduxjs/redux/tree/master/examples/real-world) example:

```sh
git clone https://github.com/reduxjs/redux.git

cd redux/examples/real-world
npm install
npm start
```

Or check out the [sandbox](https://codesandbox.io/s/github/reduxjs/redux/tree/master/examples/real-world):

<iframe class="codesandbox" src="https://codesandbox.io/embed/github/reduxjs/redux/tree/master/examples/real-world/?runonclick=1" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

This is the most advanced example. It is dense by design. It covers keeping fetched entities in a normalized cache, implementing a custom middleware for API calls, rendering partially loaded data, pagination, caching responses, displaying error messages, and routing. Additionally, it includes Redux DevTools.

## More Examples

You can find more examples in the [Redux Apps and Examples](https://github.com/markerikson/redux-ecosystem-links/blob/master/apps-and-examples.md)
page of the [Redux Addons Catalog](https://github.com/markerikson/redux-ecosystem-links).

---

id: getting-started
title: Getting Started with Redux
description: 'Introduction > Getting Started: Resources to get started learning and using Redux'

---

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

Redux is a predictable state container for JavaScript apps.

It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. On top of that, it provides a great developer experience, such as [live code editing combined with a time traveling debugger](https://github.com/reduxjs/redux-devtools).

You can use Redux together with [React](https://reactjs.org), or with any other view library. It is tiny (2kB, including dependencies), but has a large ecosystem of addons available.

## Installation

### Redux Toolkit

[**Redux Toolkit**](https://redux-toolkit.js.org) is our official recommended approach for writing Redux logic. It wraps around the Redux core, and contains packages and functions that we think are essential for building a Redux app. Redux Toolkit builds in our suggested best practices, simplifies most Redux tasks, prevents common mistakes, and makes it easier to write Redux applications.

RTK includes utilities that help simplify many common use cases, including [store setup](https://redux-toolkit.js.org/api/configureStore),
[creating reducers and writing immutable update logic](https://redux-toolkit.js.org/api/createreducer),
and even [creating entire "slices" of state at once](https://redux-toolkit.js.org/api/createslice).

Whether you're a brand new Redux user setting up your first project, or an experienced user who wants to
simplify an existing application, **[Redux Toolkit](https://redux-toolkit.js.org/)** can help you
make your Redux code better.

Redux Toolkit is available as a package on NPM for use with a module bundler or in a Node application:

```bash
# NPM
npm install @reduxjs/toolkit

# Yarn
yarn add @reduxjs/toolkit
```

### Create a React Redux App

The recommended way to start new apps with React and Redux is by using the [official Redux+JS template](https://github.com/reduxjs/cra-template-redux) or [Redux+TS template](https://github.com/reduxjs/cra-template-redux-typescript) for [Create React App](https://github.com/facebook/create-react-app), which takes advantage of **[Redux Toolkit](https://redux-toolkit.js.org/)** and React Redux's integration with React components.

```bash
# Redux + Plain JS template
npx create-react-app my-app --template redux

# Redux + TypeScript template
npx create-react-app my-app --template redux-typescript
```

### Redux Core

The Redux core library is available as a package on NPM for use with a module bundler or in a Node application:

```bash
# NPM
npm install redux

# Yarn
yarn add redux
```

It is also available as a precompiled UMD package that defines a `window.Redux` global variable. The UMD package can be used as a [`<script>` tag](https://unpkg.com/redux/dist/redux.js) directly.

For more details, see the [Installation](Installation.md) page.

## Basic Example

The whole global state of your app is stored in an object tree inside a single _store_.
The only way to change the state tree is to create an _action_, an object describing what happened, and _dispatch_ it to the store.
To specify how state gets updated in response to an action, you write pure _reducer_ functions that calculate a new state based on the old state and the action.

```js
import { createStore } from "redux";

/**
 * This is a reducer - a function that takes a current state value and an
 * action object describing "what happened", and returns a new state value.
 * A reducer's function signature is: (state, action) => newState
 *
 * The Redux state should contain only plain JS objects, arrays, and primitives.
 * The root state value is usually an object.  It's important that you should
 * not mutate the state object, but return a new object if the state changes.
 *
 * You can use any conditional logic you want in a reducer. In this example,
 * we use a switch statement, but it's not required.
 */
function counterReducer(state = { value: 0 }, action) {
  switch (action.type) {
    case "counter/incremented":
      return { value: state.value + 1 };
    case "counter/decremented":
      return { value: state.value - 1 };
    default:
      return state;
  }
}

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
let store = createStore(counterReducer);

// You can use subscribe() to update the UI in response to state changes.
// Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
// There may be additional use cases where it's helpful to subscribe as well.

store.subscribe(() => console.log(store.getState()));

// The only way to mutate the internal state is to dispatch an action.
// The actions can be serialized, logged or stored and later replayed.
store.dispatch({ type: "counter/incremented" });
// {value: 1}
store.dispatch({ type: "counter/incremented" });
// {value: 2}
store.dispatch({ type: "counter/decremented" });
// {value: 1}
```

Instead of mutating the state directly, you specify the mutations you want to happen with plain objects called _actions_. Then you write a special function called a _reducer_ to decide how every action transforms the entire application's state.

In a typical Redux app, there is just a single store with a single root reducing function. As your app grows, you split the root reducer into smaller reducers independently operating on the different parts of the state tree. This is exactly like how there is just one root component in a React app, but it is composed out of many small components.

This architecture might seem like a lot for a counter app, but the beauty of this pattern is how well it scales to large and complex apps. It also enables very powerful developer tools, because it is possible to trace every mutation to the action that caused it. You can record user sessions and reproduce them just by replaying every action.

### Redux Toolkit Example

Redux Toolkit simplifies the process of writing Redux logic and setting up the store. With Redux Toolkit, that same logic looks like:

```js
import { createSlice, configureStore } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    incremented: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decremented: (state) => {
      state.value -= 1;
    },
  },
});

export const { incremented, decremented } = counterSlice.actions;

const store = configureStore({
  reducer: counterSlice.reducer,
});

// Can still subscribe to the store
store.subscribe(() => console.log(store.getState()));

// Still pass action objects to `dispatch`, but they're created for us
store.dispatch(incremented());
// {value: 1}
store.dispatch(incremented());
// {value: 2}
store.dispatch(decremented());
// {value: 1}
```

Redux Toolkit allows us to write shorter logic that's easier to read, while still following the same Redux behavior and data flow.

## Learn Redux

We have a variety of resources available to help you learn Redux.

### Redux Essentials Tutorial

The [**Redux Essentials tutorial**](../tutorials/essentials/part-1-overview-concepts.md) is a "top-down" tutorial that teaches "how to use Redux the right way", using our latest recommended APIs and best practices. We recommend starting there.

### Redux Fundamentals Tutorial

The [**Redux Fundamentals tutorial**](../tutorials/fundamentals/part-1-overview.md) is a "bottom-up" tutorial that teaches "how Redux works" from first principles and without any abstractions, and why standard Redux usage patterns exist.

### Learn Modern Redux Livestream

Redux maintainer Mark Erikson appeared on the "Learn with Jason" show to explain how we recommend using Redux today. The show includes a live-coded example app that shows how to use Redux Toolkit and React-Redux hooks with Typescript, as well as the new RTK Query data fetching APIs.

See [the "Learn Modern Redux" show notes page](https://www.learnwithjason.dev/let-s-learn-modern-redux) for a transcript and links to the example app source.

<LiteYouTubeEmbed
    id="9zySeP5vH9c"
    title="Learn Modern Redux - Redux Toolkit, React-Redux Hooks, and RTK Query"
/>

### Additional Tutorials

- The Redux repository contains several example projects demonstrating various aspects of how to use Redux. Almost all examples have a corresponding CodeSandbox sandbox. This is an interactive version of the code that you can play with online. See the complete list of examples in the **[Examples page](./Examples.md)**.
- Redux creator Dan Abramov's **free ["Getting Started with Redux" video series](https://app.egghead.io/playlists/fundamentals-of-redux-course-from-dan-abramov-bd5cc867)** and **[Building React Applications with Idiomatic Redux](https://egghead.io/courses/building-react-applications-with-idiomatic-redux)** video courses on Egghead.io
- Redux maintainer Mark Erikson's **["Redux Fundamentals" conference talk](https://blog.isquaredsoftware.com/2018/03/presentation-reactathon-redux-fundamentals/)** and [**"Redux Fundamentals" workshop slides**](https://blog.isquaredsoftware.com/2018/06/redux-fundamentals-workshop-slides/)
- Dave Ceddia's post [**A Complete React Redux Tutorial for Beginners**](https://daveceddia.com/redux-tutorial/)

### Other Resources

- The **[Redux FAQ](../FAQ.md)** answers many common questions about how to use Redux, and the **["Using Redux" docs section](../usage/index.md)** has information on handling derived data, testing, structuring reducer logic, and reducing boilerplate.
- Redux maintainer Mark Erikson's **["Practical Redux" tutorial series](https://blog.isquaredsoftware.com/series/practical-redux/)** demonstrates real-world intermediate and advanced techniques for working with React and Redux (also available as **[an interactive course on Educative.io](https://www.educative.io/collection/5687753853370368/5707702298738688)**).
- The **[React/Redux links list](https://github.com/markerikson/react-redux-links)** has categorized articles on working with [reducers and selectors](https://github.com/markerikson/react-redux-links/blob/master/redux-reducers-selectors.md), [managing side effects](https://github.com/markerikson/react-redux-links/blob/master/redux-side-effects.md), [Redux architecture and best practices](https://github.com/markerikson/react-redux-links/blob/master/redux-architecture.md), and more.
- Our community has created thousands of Redux-related libraries, addons, and tools. The **["Ecosystem" docs page](./Ecosystem.md)** lists our recommendations, and there's a complete listing available in the **[Redux addons catalog](https://github.com/markerikson/redux-ecosystem-links)**.

## Help and Discussion

The **[#redux channel](https://discord.gg/0ZcbPKXt5bZ6au5t)** of the **[Reactiflux Discord community](https://www.reactiflux.com)** is our official resource for all questions related to learning and using Redux. Reactiflux is a great place to hang out, ask questions, and learn - come join us!

You can also ask questions on [Stack Overflow](https://stackoverflow.com) using the **[#redux tag](https://stackoverflow.com/questions/tagged/redux)**.

If you have a bug report or need to leave other feedback, [please file an issue on the Github repo](https://github.com/reduxjs/redux)

## Should You Use Redux?

Redux is a valuable tool for organizing your state, but you should also consider whether it's appropriate for your situation. **Don't use Redux just because someone said you should - take some time to understand the potential benefits and tradeoffs of using it**.

Here are some suggestions on when it makes sense to use Redux:

- You have reasonable amounts of data changing over time
- You need a single source of truth for your state
- You find that keeping all your state in a top-level component is no longer sufficient

> **For more thoughts on how Redux is meant to be used, see:**
>
> - **[Redux FAQ: When should I use Redux?](../faq/General.md#when-should-i-use-redux)**
> - **[You Might Not Need Redux](https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367)**
>
> - **[The Tao of Redux, Part 1 - Implementation and Intent](https://blog.isquaredsoftware.com/2017/05/idiomatic-redux-tao-of-redux-part-1/)**
>
> - **[The Tao of Redux, Part 2 - Practice and Philosophy](https://blog.isquaredsoftware.com/2017/05/idiomatic-redux-tao-of-redux-part-2/)**
> - **[Redux FAQ](../FAQ.md)**

---

id: installation
title: Installation
description: 'Introduction > Installation: Installation instructions for Redux and related packages'

---

# Installation

## Redux Toolkit

Redux Toolkit includes the Redux core, as well as other key packages we feel are essential for building Redux applications (such as Redux Thunk and Reselect).

It's available as a package on NPM for use with a module bundler or in a Node application:

```bash
# NPM
npm install @reduxjs/toolkit

# Yarn
yarn add @reduxjs/toolkit
```

It's also available as a UMD build, which can be loaded from [the `dist` folder on unpkg](https://unpkg.com/@reduxjs/toolkit/dist/). The UMD builds make Redux Toolkit available as a `window.RTK` global variable.

## Redux Core

To install the stable version:

```bash
# NPM
npm install redux

# Yarn
yarn add redux
```

If you're not, you can [access these files on unpkg](https://unpkg.com/redux/), download them, or point your package manager to them.

Most commonly, people consume Redux as a collection of [CommonJS](http://www.commonjs.org/) modules. These modules are what you get when you import `redux` in a [Webpack](https://webpack.js.org/), [Browserify](http://browserify.org/), or a Node environment. If you like to live on the edge and use [Rollup](https://rollupjs.org), we support that as well.

If you don't use a module bundler, it's also fine. The `redux` npm package includes precompiled production and development [UMD](https://github.com/umdjs/umd) builds in the [`dist` folder](https://unpkg.com/redux/dist/). They can be used directly without a bundler and are thus compatible with many popular JavaScript module loaders and environments. For example, you can drop a UMD build as a [`<script>` tag](https://unpkg.com/redux/dist/redux.js) on the page, or [tell Bower to install it](https://github.com/reduxjs/redux/pull/1181#issuecomment-167361975). The UMD builds make Redux available as a `window.Redux` global variable.

The Redux source code is written in ES2015 but we precompile both CommonJS and UMD builds to ES5 so they work in [any modern browser](https://caniuse.com/#feat=es5). You don't need to use Babel or a module bundler to [get started with Redux](https://redux.js.org/introduction/examples#counter-vanilla).

## Complementary Packages

Most likely, you'll also need [the React bindings](https://github.com/reduxjs/react-redux) and [the developer tools](https://github.com/reduxjs/redux-devtools).

```bash
npm install react-redux
npm install --save-dev redux-devtools
```

Note that unlike Redux itself, many packages in the Redux ecosystem don't provide UMD builds, so we recommend using CommonJS module bundlers like [Webpack](https://webpack.js.org/) and [Browserify](http://browserify.org/) for the most comfortable development experience.

## Create a React Redux App

The recommended way to start new apps with React and Redux is by using the [official Redux+JS template](https://github.com/reduxjs/cra-template-redux) or [Redux+TS template](https://github.com/reduxjs/cra-template-redux-typescript) for [Create React App](https://github.com/facebook/create-react-app), which takes advantage of **[Redux Toolkit](https://redux-toolkit.js.org/)** and React Redux's integration with React components.

```bash
# Redux + Plain JS template
npx create-react-app my-app --template redux

# Redux + TypeScript template
npx create-react-app my-app --template redux-typescript
```

---

id: learning-resources
title: Learning Resources
description: 'Introduction > Learning Resources: Additional articles and resources for learning Redux'

---

# Learning Resources

The Redux docs are intended to teach the basic concepts of Redux, as well as explain key concepts for use in real-world applications. However, the docs can't cover everything. Happily, there are many other great resources available for learning Redux. We encourage you to check them out. Many of them cover topics that are beyond the scope of the docs, or describe the same topics in other ways that may work better for your learning style.

This page includes our recommendations for some of the best external resources available to learn Redux. For an additional extensive list of tutorials, articles, and other resources on React, Redux, Javascript, and related topics, see the [React/Redux Links list](https://github.com/markerikson/react-redux-links).

## Basic Introductions

_Tutorials that teach the basic concepts of Redux and how to use it_

- **Intro to React, Redux, and Typescript** <br />
  <https://blog.isquaredsoftware.com/2020/12/presentations-react-redux-ts-intro/> <br />
  Redux maintainer Mark Erikson's slideset that covers the basics of React, Redux, and TypeScript. Redux topics include stores, reducers, middleware, React-Redux, and Redux Toolkit.

- **Learn Modern Redux - Redux Toolkit, React-Redux Hooks, and RTK Query** <br />
  <https://www.learnwithjason.dev/let-s-learn-modern-redux> <br />
  An episode of the "Learn with Jason" show, with Redux maintainer Mark Erikson as guest. The episode features a live-coded app, and shows how to create a new React+TS project, add the Redux packages, and set up Redux Toolkit and React-Redux from scratch (including our recommended TS hooks configuration). It also shows how to use the upcoming RTK Query data fetching API and display that data in a UI.

- **Redux Tutorial: An Overview and Walkthrough** <br />
  <https://www.taniarascia.com/redux-react-guide/> <br />
  A well-written tutorial from Tania Rascia that quickly explains key Redux concepts, and shows how to put together a basic Redux + React app using vanilla Redux and Redux Toolkit.

- **Redux for Beginners - The Brain-Friendly Guide to Learning Redux** <br />
  <https://www.freecodecamp.org/news/redux-for-beginners-the-brain-friendly-guide-to-redux/> <br />
  An easy-to-follow tutorial that builds a small todo app with Redux Toolkit and React-Redux, including data fetching.

- **Redux made easy with Redux Toolkit and Typescript** <br />
  <https://www.mattbutton.com/redux-made-easy-with-redux-toolkit-and-typescript/> <br />
  A helpful tutorial that shows how to use Redux Toolkit and TypeScript together to write Redux applications, and how RTK simplifies typical Redux usage.

- **Redux: From Twitter Hype to Production** <br/>
  <https://slides.com/jenyaterpil/redux-from-twitter-hype-to-production#/> <br/>
  A well-produced slideshow that visually steps through core Redux concepts, usage with React, project organization, and side effects with thunks and sagas. Has some good animated diagrams demonstrating how data flows through a React+Redux architecture.

## Using Redux With React

_Explanations of the React-Redux bindings library_

- **Modernizing a Legacy Redux Application with React-Redux Hooks** <br />
  <https://app.egghead.io/playlists/modernizing-a-legacy-redux-application-with-react-hooks-c528> <br />
  A video series that shows the differences between the earlier `connect` API and the newer React-Redux hooks API, and how to use those hooks in your components.

- **Why Redux is Useful in React Apps** <br/>
  <https://www.fullstackreact.com/articles/redux-with-mark-erikson/> <br/>
  An explanation of some of the benefits of using Redux with React, including sharing data between components and hot module reloading.

## Project-Based Tutorials

_Tutorials that teach Redux concepts by building projects, including larger "real-world"-type applications_

- **Practical Redux** <br/>
  <https://blog.isquaredsoftware.com/2016/10/practical-redux-part-0-introduction/> <br/>
  <https://blog.isquaredsoftware.com/series/practical-redux/> <br/>
  An ongoing series of posts intended to demonstrate a number of specific Redux techniques by building a sample application, based on the MekHQ application for managing Battletech campaigns. Written by Redux co-maintainer Mark Erikson. Covers topics like managing relational data, connecting multiple components and lists, complex reducer logic for features, handling forms, showing modal dialogs, and much more. (Note: this is an older series, and today we recommend newer patterns for writing Redux code. However, many of the principles in this series are still valuable.)

## Redux Implementation

_Explanations of how Redux works internally, by writing miniature reimplementations_

- **Getting Started with Redux - Video Series** <br/>
  <https://egghead.io/courses/fundamentals-of-redux-course-from-dan-abramov-bd5cc867> <br/>
  <https://github.com/tayiorbeii/egghead.io_redux_course_notes> <br/>
  Dan Abramov, the creator of Redux, demonstrates various concepts in 30 short (2-5 minute) videos. The linked Github repo contains notes and transcriptions of the videos.

- **Building React Applications with Idiomatic Redux - Video Series** <br/>
  <https://egghead.io/courses/building-react-applications-with-idiomatic-redux> <br/>
  <https://github.com/tayiorbeii/egghead.io_idiomatic_redux_course_notes> <br/>
  Dan Abramov's second video tutorial series, continuing directly after the first. Includes lessons on store initial state, using Redux with React Router, using "selector" functions, normalizing state, use of Redux middleware, async action creators, and more. The linked Github repo contains notes and transcriptions of the videos.

- **Live React: Hot Reloading and Time Travel** <br/>
  <https://youtube.com/watch?v=xsSnOQynTHs> <br/>
  Dan Abramov's original conference talk that introduced Redux. See how constraints enforced by Redux make hot reloading with time travel easy

- **Build Yourself a Redux** <br/>
  <https://zapier.com/engineering/how-to-build-redux/> <br/>
  An excellent in-depth "build a mini-Redux" article, which covers not only Redux's core, but also `connect` and middleware as well.

- **Connect.js explained** <br/>
  <https://gist.github.com/gaearon/1d19088790e70ac32ea636c025ba424e> <br/>
  A very simplified version of React Redux's `connect()` function that illustrates the basic implementation

- **Let's Write Redux!** <br/>
  <https://www.jamasoftware.com/blog/lets-write-redux/> <br/>
  Walks through writing a miniature version of Redux step-by-step, to help explain the concepts and implementation.

## Reducers

_Articles discussing ways to write reducer functions_

- **Taking Advantage of `combineReducers`** <br/>
  <https://randycoulman.com/blog/2016/11/22/taking-advantage-of-combinereducers/> <br/>
  Examples of using `combineReducers` multiple times to produce a state tree, and some thoughts on tradeoffs in various approaches to reducer logic.

- **The Power of Higher-Order Reducers** <br/>
  <https://slides.com/omnidan/hor#/> <br/>
  A slideshow from the author of redux-undo and other libraries, explaining the concept of higher-order reducers and how they can be used

- **Reducer composition with Higher Order Reducers** <br/>
  <https://medium.com/@mange_vibration/reducer-composition-with-higher-order-reducers-35c3977ed08f> <br/>
  Some great examples of writing small functions that can be composed together to perform larger specific reducer tasks, such as providing initial state, filtering, updating specific keys, and more.

- **Higher Order Reducers - It just sounds scary** <br/>
  <https://medium.com/@danielkagan/high-order-reducers-it-just-sounds-scary-2b9e5dbfc705> <br/>
  Explains how reducers can be composed like Lego bricks to create reusable and testable reducer logic.

## Selectors

_Explanations of how and why to use selector functions to read values from state_

- **Idiomatic Redux: Using Reselect Selectors for Encapsulation and Performance** <br/>
  <https://blog.isquaredsoftware.com/2017/12/idiomatic-redux-using-reselect-selectors/> <br/>
  A complete guide to why you should use selector functions with Redux, how to use the Reselect library to write optimized selectors, and advanced tips for improving performance.

- **ReactCasts #8: Selectors in Redux** <br/>
  <https://www.youtube.com/watch?v=frT3to2ACCw> <br/>
  A great overview of why and how to use selector functions to retrieve data from the store, and derive additional data from store values

- **Optimizing React Redux Application Development with Reselect** <br/>
  <https://codebrahma.com/reselect-tutorial-optimizing-react-redux-application-development-with-reselect/> <br/>
  A good tutorial on Reselect. Covers the concept of "selector functions", how to use Reselect's API, and how to use memoized selectors to improve performance.

- **Usage of Reselect in a React-Redux Application** <br/>
  <https://dashbouquet.com/blog/frontend-development/usage-of-reselect-in-a-react-redux-application> <br/>
  Discusses the importance of memoized selectors for performance, and good practices for using Reselect.

- **React, Reselect, and Redux** <br/>
  <https://medium.com/@parkerdan/react-reselect-and-redux-b34017f8194c> <br/>
  An explanation of how Reselect's memoized selector functions are useful in Redux apps, and how to create unique selector instances for each component instance.

## Normalization

_How to structure the Redux store like a database for best performance_

- **Querying a Redux Store** <br/>
  <https://medium.com/@adamrackis/querying-a-redux-store-37db8c7f3b0f> <br/>
  A look at best practices for organizing and storing data in Redux, including normalizing data and use of selector functions.

- **Normalizing Redux Stores for Maximum Code Reuse** <br/>
  <https://medium.com/@adamrackis/normalizing-redux-stores-for-maximum-code-reuse-ae6e3844ae95> <br/>
  Thoughts on how normalized Redux stores enable some useful data handling approaches, with examples of using selector functions to denormalize hierarchical data.

- **Advanced Redux Entity Normalization** <br/>
  <https://medium.com/@dcousineau/advanced-redux-entity-normalization-f5f1fe2aefc5> <br/>
  Describes a "keyWindow" concept for tracking subsets of entities in state, similar to an SQL "view". A useful extension to the idea of normalized data.

## Middleware

_Explanations and examples of how middleware work and how to write them_

- **Exploring Redux Middlewares** <br/>
  <https://blog.krawaller.se/posts/exploring-redux-middleware/> <br/>
  Understanding middlewares through a series of small experiments

- **Redux Middleware Tutorial** <br/>
  <https://www.pshrmn.com/tutorials/react/redux-middleware/> <br/>
  An overview of what middleware is, how `applyMiddleware` works, and how to write middleware.

- **ReactCasts #6: Redux Middleware** <br/>
  <https://www.youtube.com/watch?v=T-qtHI1qHIg> <br/>
  A screencast that describes how middleware fit into Redux, their uses, and how to implement a custom middleware

- **A Beginner's Guide to Redux Middleware** <br/>
  <https://www.codementor.io/reactjs/tutorial/beginner-s-guide-to-redux-middleware> <br/>
  A useful explanation of middleware use cases, with numerous examples

- **Functional Composition in Javascript** <br/>
  <https://joecortopassi.com/articles/functional-composition-in-javascript/> <br/>
  Breaking down how the `compose` function works

## Side Effects - Basics

_Introductions to handling async behavior in Redux_

- **Stack Overflow: Dispatching Redux Actions with a Timeout** <br/>
  <https://stackoverflow.com/questions/35411423/how-to-dispatch-a-redux-action-with-a-timeout/35415559#35415559> <br/>
  Dan Abramov explains the basics of managing async behavior in Redux, walking through a progressive series of approaches (inline async calls, async action creators, thunk middleware).

- **Stack Overflow: Why do we need middleware for async flow in Redux?** <br/>
  <https://stackoverflow.com/questions/34570758/why-do-we-need-middleware-for-async-flow-in-redux/34599594#34599594> <br/>
  Dan Abramov gives reasons for using thunks and async middleware, and some useful patterns for using thunks.

- **What the heck is a "thunk"?** <br/>
  <https://daveceddia.com/what-is-a-thunk/> <br/>
  A quick explanation for what the word "thunk" means in general, and for Redux specifically.

- **Thunks in Redux: The Basics** <br/>
  <https://medium.com/fullstack-academy/thunks-in-redux-the-basics-85e538a3fe60> <br/>
  A detailed look at what thunks are, what they solve, and how to use them.

## Side Effects - Advanced

_Advanced tools and techniques for managing async behavior_

- **What is the right way to do asynchronous operations in Redux?** <br/>
  <https://decembersoft.com/posts/what-is-the-right-way-to-do-asynchronous-operations-in-redux/> <br/>
  An excellent look at the most popular libraries for Redux side effects, with comparisons of how each one works.

- **Redux 4 Ways** <br/>
  <https://medium.com/react-native-training/redux-4-ways-95a130da0cdc> <br/>
  Side-by-side comparisons of implementing some basic data fetching using thunks, sagas, observables, and a promise middleware

- **Idiomatic Redux: Thoughts on Thunks, Sagas, Abstractions, and Reusability** <br/>
  <https://blog.isquaredsoftware.com/2017/01/idiomatic-redux-thoughts-on-thunks-sagas-abstraction-and-reusability/> <br/>
  A response to several "thunks are bad" concerns, arguing that thunks (and sagas) are still a valid approach for managing complex sync logic and async side effects.

- **Javascript Power Tools: Redux-Saga** <br/>
  <https://formidable.com/blog/2017/javascript-power-tools-redux-saga/> <br/>
  <https://formidable.com/blog/2017/composition-patterns-in-redux-saga/> <br/>
  <https://formidable.com/blog/2017/real-world-redux-saga-patterns/> <br/>
  A fantastic series that teaches the concepts, implementation, and benefits behind Redux-Saga, including how ES6 generators are used to control function flow, how sagas can be composed together to accomplish concurrency, and practical use cases for sagas.

- **Exploring Redux Sagas** <br/>
  <https://medium.com/onfido-tech/exploring-redux-sagas-cc1fca2015ee> <br/>
  An excellent article that explores how to use sagas to provide a glue layer to implement decoupled business logic in a Redux application.

- **Taming Redux with Sagas** <br/>
  <https://objectpartners.com/2017/11/20/taming-redux-with-sagas/> <br/>
  A good overview of Redux-Saga, including info on generator functions, use cases for sagas, using sagas to deal with promises, and testing sagas.

- **Reactive Redux State with RxJS** <br/>
  <https://ivanjov.com/reactive-redux-state-with-rxjs/> <br/>
  Describes the concept of "Reactive Programming" and the RxJS library, and shows how to use redux-observable to fetch data, along with examples of testing.

- **Using redux-observable to handle asynchronous logic in Redux** <br/>
  <https://medium.com/dailyjs/using-redux-observable-to-handle-asynchronous-logic-in-redux-d49194742522> <br/>
  An extended post that compares a thunk-based implementation of handling a line-drawing example vs an observable-based implementation.

## Thinking in Redux

_Deeper looks at how Redux is meant to be used, and why it works the way it does_

- **When (and when not) to reach for Redux** <br />
  <https://changelog.com/posts/when-and-when-not-to-reach-for-redux> <br />
  Redux maintainer Mark Erikson describes the problems Redux was created to solve, and how it compares to other commonly used tools.

- **You Might Not Need Redux** <br/>
  <https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367> <br/>
  Dan Abramov discusses the tradeoffs involved in using Redux.

- **Idiomatic Redux: The Tao of Redux, Part 1 - Implementation and Intent** <br/>
  <https://blog.isquaredsoftware.com/2017/05/idiomatic-redux-tao-of-redux-part-1/> <br/>
  A deep dive into how Redux actually works, the constraints it asks you to follow, and the intent behind its design and usage.

- **Idiomatic Redux: The Tao of Redux, Part 2 - Practice and Philosophy** <br/>
  <https://blog.isquaredsoftware.com/2017/05/idiomatic-redux-tao-of-redux-part-2/> <br/>
  A follow-up look at why common Redux usage patterns exist, other ways that Redux can be used, and thoughts on the pros and cons of those different patterns and approaches.

- **What's So Great About Redux?** <br/>
  <https://medium.freecodecamp.org/whats-so-great-about-redux-ac16f1cc0f8b> <br/>
  Deep and fascinating analysis of how Redux compares to OOP and message-passing, how typical Redux usage can devolve towards Java-like "setter" functions with more boilerplate, and something of a plea for a higher-level "blessed" abstraction on top of Redux to make it easier to work with and learn for newbies. Very worth reading.

## Redux Architecture

_Patterns and practices for structuring larger Redux applications_

- **Avoiding Accidental Complexity When Structuring Your App State** <br/>
  <https://hackernoon.com/avoiding-accidental-complexity-when-structuring-your-app-state-6e6d22ad5e2a> <br/>
  An excellent set of guidelines for organizing your Redux store structure.

- **Redux Step by Step: A Simple and Robust Workflow for Real Life Apps** <br/>
  <https://hackernoon.com/redux-step-by-step-a-simple-and-robust-workflow-for-real-life-apps-1fdf7df46092> <br/>
  A follow-up to the "Accidental Complexity" article, discussing principle

- **Things I Wish I Knew About Redux** <br/>
  <https://medium.com/horrible-hacks/things-i-wish-i-knew-about-redux-9924abf2f9e0> <br/>
  <https://www.reddit.com/r/javascript/comments/4taau2/things_i_wish_i_knew_about_redux/> <br/>
  A number of excellent tips and lessons learned after building an app with Redux. Includes info on connecting components, selecting data, and app/project structure. Additional discussion on Reddit.

- **React+Redux: Tips and Best Practices for Clean, Reliable, & Maintainable Code** <br/>
  <https://speakerdeck.com/goopscoop/react-plus-redux-tips-and-best-practices-for-clean-reliable-and-scalable-code> <br/>
  An excellent slideshow with a wide variety of tips and suggestions, including keeping action creators simple and data manipulation in reducers, abstracting away API calls, avoiding spreading props, and more.

- **Redux for state management in large web apps** <br/>
  <https://blog.mapbox.com/redux-for-state-management-in-large-web-apps-c7f3fab3ce9b> <br/>
  Excellent discussion and examples of idiomatic Redux architecture, and how Mapbox applies those approaches to their Mapbox Studio application.

## Apps and Examples

- **React-Redux RealWorld Example: TodoMVC for the Real World** <br/>
  <https://github.com/GoThinkster/redux-review> <br/>
  An example full-stack "real world" application built with Redux. Demos a Medium-like social blogging site that includes JWT authentication, CRUD, favoriting articles, following users, routing, and more. The RealWorld project also includes many other implementations of the front and back ends of the site, specifically intended to show how different server and client implementations of the same project and API spec compare with each other.

- **Project Mini-Mek** <br/>
  <https://github.com/markerikson/project-minimek> <br/>
  A sample app to demonstrate various useful Redux techniques, accompanying the "Practical Redux" blog series at <https://blog.isquaredsoftware.com/series/practical-redux>

- **react-redux-yelp-clone** <br/>
  <https://github.com/mohamed-ismat/react-redux-yelp-clone> <br/>
  An adaptation of the "Yelp Clone" app by FullStackReact. It extends the original by using Redux and Redux Saga instead of local state, as well as React Router v4, styled-components, and other modern standards. Based on the React-Boilerplate starter kit.

- **WordPress-Calypso** <br/>
  <https://github.com/Automattic/wp-calypso> <br/>
  The new JavaScript- and API-powered WordPress.com

- **Sound-Redux** <br/>
  <https://github.com/andrewngu/sound-redux> <br/>
  A Soundcloud client built with React / Redux

- **Webamp** <br/>
  <https://webamp.org> <br/>
  <https://github.com/captbaritone/webamp> <br/>
  An in-browser recreation of Winamp2, built with React and Redux. Actually plays MP3s, and lets you load in local MP3 files.

- **Tello** <br/>
  <https://github.com/joshwcomeau/Tello> <br/>
  A simple and delightful way to track and manage TV shows

- **io-808** <br/>
  <https://github.com/vincentriemer/io-808> <br/>
  An attempt at a fully recreated web-based TR-808 drum machine

## Redux Docs Translations

- [中文文档](http://camsong.github.io/redux-in-chinese/) — Chinese
- [繁體中文文件](https://github.com/chentsulin/redux) — Traditional Chinese
- [Redux in Russian](https://github.com/rajdee/redux-in-russian) — Russian
- [Redux en Español](https://es.redux.js.org/) - Spanish
- [Redux in Korean](https://ko.redux.js.org/) - Korean

## Books

- **Redux in Action** <br/>
  <https://www.manning.com/books/redux-in-action> <br/>
  A comprehensive book that covers many key aspects of using Redux, including the basics of reducers and actions and use with React, complex middlewares and side effects, application structure, performance, testing, and much more. Does a great job of explaining the pros, cons, and tradeoffs of many approaches to using Redux. Personally recommended by Redux co-maintainer Mark Erikson.

- **The Complete Redux Book** <br/>
  <https://leanpub.com/redux-book> <br/>
  How do I manage a large state in production? Why do I need store enhancers? What is the best way to handle form validations? Get the answers to all these questions and many more using simple terms and sample code. Learn everything you need to use Redux to build complex and production-ready web applications. (Note: now permanently free!)

- **Taming the State in React** <br/>
  <https://www.robinwieruch.de/learn-react-redux-mobx-state-management/> <br/>
  If you have learned React with the previous book of the author called The Road to learn React, Taming the State in React will be the perfect blend to learn about basic and advanced state management in React. You will start out with learning only Redux without React. Afterward, the book shows you how to connect Redux to your React application. The advanced chapters will teach you about normalization, naming, selectors and asynchronous actions. In the end, you will set up and build a real world application with React and Redux.

## Courses

- **Modern React with Redux, by Stephen Grider (paid)** <br/>
  <https://www.udemy.com/react-redux/> <br/>
  Master the fundamentals of React and Redux with this tutorial as you develop apps with React Router, Webpack, and ES6. This course will get you up and running quickly, and teach you the core knowledge you need to deeply understand and build React components and structure applications with Redux.

- **Redux, by Tyler McGinnis (paid)** <br/>
  <https://tylermcginnis.com/courses/redux/> <br/>
  When learning Redux, you need to learn it in the context of an app big enough to see the benefits. That's why this course is huge. A better name might be _"Real World Redux"_. If you're sick of "todo list" Redux tutorials, you've come to the right place. In this course we'll talk all about what makes Redux special for managing state in your application. We'll build an actual "real world" application so you can see how Redux handles edge cases like optimistic updates and error handling. We'll also cover many other technologies that work well with Redux, Firebase, and CSS Modules.

- **Learn Redux, by Wes Bos (free)** <br/>
  <https://learnredux.com/> <br/>
  A video course that walks through building 'Reduxstagram' — a simple photo app that will simplify the core ideas behind Redux, React Router and React.js

## More Resources

- [React-Redux Links](https://github.com/markerikson/react-redux-links) is a curated list of high-quality articles, tutorials, and related content for React, Redux, ES6, and more.
- [Redux Ecosystem Links](https://github.com/markerikson/redux-ecosystem-links) is a categorized collection of Redux-related libraries, addons, and utilities.
- [Awesome Redux](https://github.com/xgrommx/awesome-redux) is an extensive list of Redux-related repositories.
- [DEV Community](https://dev.to/t/redux) is a place to share Redux projects, articles and tutorials as well as start discussions and ask for feedback on Redux-related topics. Developers of all skill-levels are welcome to take part.

# Introduction

- [Core Concepts](CoreConcepts.md)
- [Learning Resources](LearningResources.md)
- [Ecosystem](Ecosystem.md)
- [Examples](Examples.md)

---

id: code-splitting
title: Code Splitting

---

# Code Splitting

In large web applications, it is often desirable to split up the app code into multiple JS bundles that can be loaded on-demand. This strategy, called 'code splitting', helps to increase performance of your application by reducing the size of the initial JS payload that must be fetched.

To code split with Redux, we want to be able to dynamically add reducers to the store. However, Redux really only has a single root reducer function. This root reducer is normally generated by calling `combineReducers()` or a similar function when the application is initialized. In order to dynamically add more reducers, we need to call that function again to re-generate the root reducer. Below, we discuss some approaches to solving this problem and reference two libraries that provide this functionality.

## Basic Principle

### Using `replaceReducer`

The Redux store exposes a `replaceReducer` function, which replaces the current active root reducer function with a new root reducer function. Calling it will swap the internal reducer function reference, and dispatch an action to help any newly-added slice reducers initialize themselves:

```js
const newRootReducer = combineReducers({
  existingSlice: existingSliceReducer,
  newSlice: newSliceReducer,
});

store.replaceReducer(newRootReducer);
```

## Reducer Injection Approaches

### Defining an `injectReducer` function

We will likely want to call `store.replaceReducer()` from anywhere in the application. Because of that, it's helpful
to define a reusable `injectReducer()` function that keeps references to all of the existing slice reducers, and attach
that to the store instance.

```js
import { createStore } from "redux";

// Define the Reducers that will always be present in the application
const staticReducers = {
  users: usersReducer,
  posts: postsReducer,
};

// Configure the store
export default function configureStore(initialState) {
  const store = createStore(createReducer(), initialState);

  // Add a dictionary to keep track of the registered async reducers
  store.asyncReducers = {};

  // Create an inject reducer function
  // This function adds the async reducer, and creates a new combined reducer
  store.injectReducer = (key, asyncReducer) => {
    store.asyncReducers[key] = asyncReducer;
    store.replaceReducer(createReducer(store.asyncReducers));
  };

  // Return the modified store
  return store;
}

function createReducer(asyncReducers) {
  return combineReducers({
    ...staticReducers,
    ...asyncReducers,
  });
}
```

Now, one just needs to call `store.injectReducer` to add a new reducer to the store.

### Using a 'Reducer Manager'

Another approach is to create a 'Reducer Manager' object, which keeps track of all the registered reducers and exposes a `reduce()` function. Consider the following example:

```js
export function createReducerManager(initialReducers) {
  // Create an object which maps keys to reducers
  const reducers = { ...initialReducers };

  // Create the initial combinedReducer
  let combinedReducer = combineReducers(reducers);

  // An array which is used to delete state keys when reducers are removed
  let keysToRemove = [];

  return {
    getReducerMap: () => reducers,

    // The root reducer function exposed by this object
    // This will be passed to the store
    reduce: (state, action) => {
      // If any reducers have been removed, clean up their state first
      if (keysToRemove.length > 0) {
        state = { ...state };
        for (let key of keysToRemove) {
          delete state[key];
        }
        keysToRemove = [];
      }

      // Delegate to the combined reducer
      return combinedReducer(state, action);
    },

    // Adds a new reducer with the specified key
    add: (key, reducer) => {
      if (!key || reducers[key]) {
        return;
      }

      // Add the reducer to the reducer mapping
      reducers[key] = reducer;

      // Generate a new combined reducer
      combinedReducer = combineReducers(reducers);
    },

    // Removes a reducer with the specified key
    remove: (key) => {
      if (!key || !reducers[key]) {
        return;
      }

      // Remove it from the reducer mapping
      delete reducers[key];

      // Add the key to the list of keys to clean up
      keysToRemove.push(key);

      // Generate a new combined reducer
      combinedReducer = combineReducers(reducers);
    },
  };
}

const staticReducers = {
  users: usersReducer,
  posts: postsReducer,
};

export function configureStore(initialState) {
  const reducerManager = createReducerManager(staticReducers);

  // Create a store with the root reducer function being the one exposed by the manager.
  const store = createStore(reducerManager.reduce, initialState);

  // Optional: Put the reducer manager on the store so it is easily accessible
  store.reducerManager = reducerManager;
}
```

To add a new reducer, one can now call `store.reducerManager.add("asyncState", asyncReducer)`.

To remove a reducer, one can now call `store.reducerManager.remove("asyncState")`

## Libraries and Frameworks

There are a few good libraries out there that can help you add the above functionality automatically:

- [`redux-dynamic-modules`](https://github.com/Microsoft/redux-dynamic-modules):
  This library introduces the concept of a 'Redux Module', which is a bundle of Redux artifacts (reducers, middleware) that should be dynamically loaded. It also exposes a React higher-order component to load 'modules' when areas of the application come online. Additionally, it has integrations with libraries like `redux-thunk` and `redux-saga` which also help dynamically load their artifacts (thunks, sagas).
- [Redux Ecosystem Links: Reducers - Dynamic Reducer Injection](https://github.com/markerikson/redux-ecosystem-links/blob/master/reducers.md#dynamic-reducer-injection)

---

id: configuring-your-store
title: Configuring Your Store
sidebar_label: Configuring Your Store

---

# Configuring Your Store

In the ["Redux Fundamentals" tutorial](../tutorials/fundamentals/part-1-overview.md), we introduced the fundamental Redux concepts by building an example Todo list app. As part of that, we talked about [how to create and configure a Redux store](../tutorials/fundamentals/part-4-store.md).

We will now explore how to customise the store to add extra functionality. We'll start with the source code from ["Redux Fundamentals" part 5: UI and React](../tutorials/fundamentals/part-5-ui-and-react.md). You can view the source from this stage of the tutorial in [the example app repository on Github](https://github.com/reduxjs/redux-fundamentals-example-app/tree/checkpoint-5-uiAllActions), or [in your browser via CodeSandbox](https://codesandbox.io/s/github/reduxjs/redux-fundamentals-example-app/tree/checkpoint-5-uiAllActions/).

## Creating the store

First, let's look at the original `index.js` file in which we created our store:

```js
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers";
import App from "./components/App";

const store = createStore(rootReducer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
```

In this code, we pass our reducers to the Redux `createStore` function, which returns a `store` object. We then pass this object to the `react-redux` `Provider` component, which is rendered at the top of our component tree.

This ensures that any time we connect to Redux in our app via `react-redux` `connect`, the store is available to our components.

## Extending Redux functionality

Most apps extend the functionality of their Redux store by adding middleware or store enhancers _(note: middleware is common, enhancers are less common)_. Middleware adds extra functionality to the Redux `dispatch` function; enhancers add extra functionality to the Redux store.

We will add two middlewares and one enhancer:

- The [`redux-thunk` middleware](https://github.com/reduxjs/redux-thunk), which allows simple asynchronous use of dispatch.
- A middleware which logs dispatched actions and the resulting new state.
- An enhancer which logs the time taken for the reducers to process each action.

#### Install `redux-thunk`

```sh
npm install redux-thunk
```

#### middleware/logger.js

```js
const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.info("dispatching", action);
  let result = next(action);
  console.log("next state", store.getState());
  console.groupEnd();
  return result;
};

export default logger;
```

#### enhancers/monitorReducer.js

```js
const round = (number) => Math.round(number * 100) / 100;

const monitorReducerEnhancer =
  (createStore) => (reducer, initialState, enhancer) => {
    const monitoredReducer = (state, action) => {
      const start = performance.now();
      const newState = reducer(state, action);
      const end = performance.now();
      const diff = round(end - start);

      console.log("reducer process time:", diff);

      return newState;
    };

    return createStore(monitoredReducer, initialState, enhancer);
  };

export default monitorReducerEnhancer;
```

Let's add these to our existing `index.js`.

- First, we need to import `redux-thunk` plus our `loggerMiddleware` and `monitorReducerEnhancer`, plus two extra functions provided by Redux: `applyMiddleware` and `compose`.
- We then use `applyMiddleware` to create a store enhancer which will apply our `loggerMiddleware` and the `thunkMiddleware` to the store's dispatch function.
- Next, we use `compose` to compose our new `middlewareEnhancer` and our `monitorReducerEnhancer` into one function.

  This is needed because you can only pass one enhancer into `createStore`. To use multiple enhancers, you must first compose them into a single larger enhancer, as shown in this example.

- Finally, we pass this new `composedEnhancers` function into `createStore` as its third argument. _Note: the second argument, which we will ignore, lets you preloaded state into the store._

```js
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./reducers";
import loggerMiddleware from "./middleware/logger";
import monitorReducerEnhancer from "./enhancers/monitorReducer";
import App from "./components/App";

const middlewareEnhancer = applyMiddleware(loggerMiddleware, thunkMiddleware);
const composedEnhancers = compose(middlewareEnhancer, monitorReducerEnhancer);

const store = createStore(rootReducer, undefined, composedEnhancers);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
```

## Problems with this approach

While this code works, for a typical app it is not ideal.

Most apps use more than one middleware, and each middleware often requires some initial setup. The extra noise added to the `index.js` can quickly make it hard to maintain, because the logic is not cleanly organised.

## The solution: `configureStore`

The solution to this problem is to create a new `configureStore` function which encapsulates our store creation logic, which can then be located in its own file to ease extensibility.

The end goal is for our `index.js` to look like this:

```js
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "./components/App";
import configureStore from "./configureStore";

const store = configureStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
```

All the logic related to configuring the store - including importing reducers, middleware, and enhancers - is handled in a dedicated file.

To achieve this, `configureStore` function looks like this:

```js
import { applyMiddleware, compose, createStore } from "redux";
import thunkMiddleware from "redux-thunk";

import monitorReducersEnhancer from "./enhancers/monitorReducers";
import loggerMiddleware from "./middleware/logger";
import rootReducer from "./reducers";

export default function configureStore(preloadedState) {
  const middlewares = [loggerMiddleware, thunkMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer, monitorReducersEnhancer];
  const composedEnhancers = compose(...enhancers);

  const store = createStore(rootReducer, preloadedState, composedEnhancers);

  return store;
}
```

This function follows the same steps outlined above, with some of the logic split out to prepare for extension, which will make it easier to add more in future:

- Both `middlewares` and `enhancers` are defined as arrays, separate from the functions which consume them.

  This allows us to easily add more middleware or enhancers based on different conditions.

  For example, it is common to add some middleware only when in development mode, which is easily achieved by pushing to the middlewares array inside an if statement:

  ```js
  if (process.env.NODE_ENV === "development") {
    middlewares.push(secretMiddleware);
  }
  ```

- A `preloadedState` variable is passed through to `createStore` in case we want to add this later.

This also makes our `createStore` function easier to reason about - each step is clearly separated, which makes it more obvious what exactly is happening.

## Integrating the devtools extension

Another common feature which you may wish to add to your app is the `redux-devtools-extension` integration.

The extension is a suite of tools which give you absolute control over your Redux store - it allows you to inspect and replay actions, explore your state at different times, dispatch actions directly to the store, and much more. [Click here to read more about the available features.](https://github.com/zalmoxisus/redux-devtools-extension)

There are several ways to integrate the extension, but we will use the most convenient option.

First, we install the package via npm:

```sh
npm install --save-dev redux-devtools-extension
```

Next, we remove the `compose` function which we imported from `redux`, and replace it with a new `composeWithDevTools` function imported from `redux-devtools-extension`.

The final code looks like this:

```js
import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import monitorReducersEnhancer from "./enhancers/monitorReducers";
import loggerMiddleware from "./middleware/logger";
import rootReducer from "./reducers";

export default function configureStore(preloadedState) {
  const middlewares = [loggerMiddleware, thunkMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer, monitorReducersEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers);

  const store = createStore(rootReducer, preloadedState, composedEnhancers);

  return store;
}
```

And that's it!

If we now visit our app via a browser with the devtools extension installed, we can explore and debug using a powerful new tool.

## Hot reloading

Another powerful tool which can make the development process a lot more intuitive is hot reloading, which means replacing pieces of code without restarting your whole app.

For example, consider what happens when you run your app, interact with it for a while, and then decide to make changes to one of your reducers. Normally, when you make those changes your app will restart, reverting your Redux state to its initial value.

With hot module reloading enabled, only the reducer you changed would be reloaded, allowing you to change your code _without_ resetting the state every time. This makes for a much faster development process.

We'll add hot reloading both to our Redux reducers and to our React components.

First, let's add it to our `configureStore` function:

```js
import { applyMiddleware, compose, createStore } from "redux";
import thunkMiddleware from "redux-thunk";

import monitorReducersEnhancer from "./enhancers/monitorReducers";
import loggerMiddleware from "./middleware/logger";
import rootReducer from "./reducers";

export default function configureStore(preloadedState) {
  const middlewares = [loggerMiddleware, thunkMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer, monitorReducersEnhancer];
  const composedEnhancers = compose(...enhancers);

  const store = createStore(rootReducer, preloadedState, composedEnhancers);

  if (process.env.NODE_ENV !== "production" && module.hot) {
    module.hot.accept("./reducers", () => store.replaceReducer(rootReducer));
  }

  return store;
}
```

The new code is wrapped in an `if` statement, so it only runs when our app is not in production mode, and only if the `module.hot` feature is available.

Bundlers like Webpack and Parcel support a `module.hot.accept` method to specify which module should be hot reloaded, and what should happen when the module changes. In this case, we're watching the `./reducers` module, and passing the updated `rootReducer` to the `store.replaceReducer` method when it changes.

We'll also use the same pattern in our `index.js` to hot reload any changes to our React components:

```js
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "./components/App";
import configureStore from "./configureStore";

const store = configureStore();

const renderApp = () =>
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );

if (process.env.NODE_ENV !== "production" && module.hot) {
  module.hot.accept("./components/App", renderApp);
}

renderApp();
```

The only extra change here is that we have encapsulated our app's rendering into a new `renderApp` function, which we now call to re-render the app.

## Simplifying Setup with Redux Toolkit

The Redux core library is deliberately unopinionated. It lets you decide how you want to handle everything, like store
setup, what your state contains, and how you want to build your reducers.

This is good in some cases, because it gives you flexibility, but that flexibility isn't always needed. Sometimes we
just want the simplest possible way to get started, with some good default behavior out of the box.

The [Redux Toolkit](https://redux-toolkit.js.org/) package is designed to help simplify several common Redux use cases, including store setup.
Let's see how it can help improve the store setup process.

Redux Toolkit includes a prebuilt [`configureStore` function](https://redux-toolkit.js.org/api/configureStore) like
the one shown in the earlier examples.

The fastest way to use is it is to just pass the root reducer function:

```js
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";

const store = configureStore({
  reducer: rootReducer,
});

export default store;
```

Note that it accepts an object with named parameters, to make it clearer what you're passing in.

By default, `configureStore` from Redux Toolkit will:

- Call `applyMiddleware` with [a default list of middleware, including `redux-thunk`](https://redux-toolkit.js.org/api/getDefaultMiddleware), and some development-only middleware that catch common mistakes like mutating state
- Call `composeWithDevTools` to set up the Redux DevTools Extension

Here's what the hot reloading example might look like using Redux Toolkit:

```js
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import monitorReducersEnhancer from "./enhancers/monitorReducers";
import loggerMiddleware from "./middleware/logger";
import rootReducer from "./reducers";

export default function configureAppStore(preloadedState) {
  const store = configureStore({
    reducer: rootReducer,
    middleware: [loggerMiddleware, ...getDefaultMiddleware()],
    preloadedState,
    enhancers: [monitorReducersEnhancer],
  });

  if (process.env.NODE_ENV !== "production" && module.hot) {
    module.hot.accept("./reducers", () => store.replaceReducer(rootReducer));
  }

  return store;
}
```

That definitely simplifies some of the setup process.

## Next Steps

Now that you know how to encapsulate your store configuration to make it easier to maintain, you can [look at the Redux Toolkit `configureStore` API](https://redux-toolkit.js.org/api/configureStore), or take a closer look at some of the [extensions available in the Redux ecosystem](../introduction/Ecosystem.md#debuggers-and-viewers).

---

id: implementing-undo-history
title: Implementing Undo History

---

# Implementing Undo History

:::important Prerequisites

- Completion of the ["Redux Fundamentals" tutorial](../tutorials/fundamentals/part-1-overview.md)
- Understanding of ["reducer composition"](../tutorials/fundamentals/part-3-state-actions-reducers.md#splitting-reducers)

:::

Building an Undo and Redo functionality into an app has traditionally required conscious effort from the developer. It is not an easy problem with classical MVC frameworks because you need to keep track of every past state by cloning all relevant models. In addition, you need to be mindful of the undo stack because the user-initiated changes should be undoable.

This means that implementing Undo and Redo in an MVC application usually forces you to rewrite parts of your application to use a specific data mutation pattern like [Command](https://en.wikipedia.org/wiki/Command_pattern).

With Redux, however, implementing undo history is a breeze. There are three reasons for this:

- There are no multiple models—just a state subtree that you want to keep track of.
- The state is already immutable, and mutations are already described as discrete actions, which is close to the undo stack mental model.
- The reducer `(state, action) => state` signature makes it natural to implement generic “reducer enhancers” or “higher order reducers”. They are functions that take your reducer and enhance it with some additional functionality while preserving its signature. Undo history is exactly such a case.

In the first part of this recipe, we will explain the underlying concepts that make Undo and Redo possible to implement in a generic way.

In the second part of this recipe, we will show how to use [Redux Undo](https://github.com/omnidan/redux-undo) package that provides this functionality out of the box.

[![demo of todos-with-undo](https://i.imgur.com/lvDFHkH.gif)](https://twitter.com/dan_abramov/status/647038407286390784)

## Understanding Undo History

### Designing the State Shape

Undo history is also part of your app's state, and there is no reason why we should approach it differently. Regardless of the type of the state changing over time, when you implement Undo and Redo, you want to keep track of the _history_ of this state at different points in time.

For example, the state shape of a counter app might look like this:

```js
{
  counter: 10;
}
```

If we wanted to implement Undo and Redo in such an app, we'd need to store more state so we can answer the following questions:

- Is there anything left to undo or redo?
- What is the current state?
- What are the past (and future) states in the undo stack?

It is reasonable to suggest that our state shape should change to answer these questions:

```js
{
  counter: {
    past: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    present: 10,
    future: []
  }
}
```

Now, if user presses “Undo”, we want it to change to move into the past:

```js
{
  counter: {
    past: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    present: 9,
    future: [10]
  }
}
```

And further yet:

```js
{
  counter: {
    past: [0, 1, 2, 3, 4, 5, 6, 7],
    present: 8,
    future: [9, 10]
  }
}
```

When the user presses “Redo”, we want to move one step back into the future:

```js
{
  counter: {
    past: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    present: 9,
    future: [10]
  }
}
```

Finally, if the user performs an action (e.g. decrement the counter) while we're in the middle of the undo stack, we're going to discard the existing future:

```js
{
  counter: {
    past: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    present: 8,
    future: []
  }
}
```

The interesting part here is that it does not matter whether we want to keep an undo stack of numbers, strings, arrays, or objects. The structure will always be the same:

```js
{
  counter: {
    past: [0, 1, 2],
    present: 3,
    future: [4]
  }
}
```

```js
{
  todos: {
    past: [
      [],
      [{ text: 'Use Redux' }],
      [{ text: 'Use Redux', complete: true }]
    ],
    present: [
      { text: 'Use Redux', complete: true },
      { text: 'Implement Undo' }
    ],
    future: [
      [
        { text: 'Use Redux', complete: true },
        { text: 'Implement Undo', complete: true }
      ]
    ]
  }
}
```

In general, it looks like this:

```js
{
  past: Array<T>,
  present: T,
  future: Array<T>
}
```

It is also up to us whether to keep a single top-level history:

```js
{
  past: [
    { counterA: 1, counterB: 1 },
    { counterA: 1, counterB: 0 },
    { counterA: 0, counterB: 0 }
  ],
  present: { counterA: 2, counterB: 1 },
  future: []
}
```

Or many granular histories so user can undo and redo actions in them independently:

```js
{
  counterA: {
    past: [1, 0],
    present: 2,
    future: []
  },
  counterB: {
    past: [0],
    present: 1,
    future: []
  }
}
```

We will see later how the approach we take lets us choose how granular Undo and Redo need to be.

### Designing the Algorithm

Regardless of the specific data type, the shape of the undo history state is the same:

```js
{
  past: Array<T>,
  present: T,
  future: Array<T>
}
```

Let's talk through the algorithm to manipulate the state shape described above. We can define two actions to operate on this state: `UNDO` and `REDO`. In our reducer, we will do the following steps to handle these actions:

#### Handling Undo

- Remove the _last_ element from the `past`.
- Set the `present` to the element we removed in the previous step.
- Insert the old `present` state at the _beginning_ of the `future`.

#### Handling Redo

- Remove the _first_ element from the `future`.
- Set the `present` to the element we removed in the previous step.
- Insert the old `present` state at the _end_ of the `past`.

#### Handling Other Actions

- Insert the `present` at the end of the `past`.
- Set the `present` to the new state after handling the action.
- Clear the `future`.

### First Attempt: Writing a Reducer

```js
const initialState = {
  past: [],
  present: null, // (?) How do we initialize the present?
  future: [],
};

function undoable(state = initialState, action) {
  const { past, present, future } = state;

  switch (action.type) {
    case "UNDO":
      const previous = past[past.length - 1];
      const newPast = past.slice(0, past.length - 1);
      return {
        past: newPast,
        present: previous,
        future: [present, ...future],
      };
    case "REDO":
      const next = future[0];
      const newFuture = future.slice(1);
      return {
        past: [...past, present],
        present: next,
        future: newFuture,
      };
    default:
      // (?) How do we handle other actions?
      return state;
  }
}
```

This implementation isn't usable because it leaves out three important questions:

- Where do we get the initial `present` state from? We don't seem to know it beforehand.
- Where do we react to the external actions to save the `present` to the `past`?
- How do we actually delegate the control over the `present` state to a custom reducer?

It seems that reducer isn't the right abstraction, but we're very close.

### Meet Reducer Enhancers

You might be familiar with [higher order functions](https://en.wikipedia.org/wiki/Higher-order_function). If you use React, you might be familiar with [higher order components](https://medium.com/@dan_abramov/mixins-are-dead-long-live-higher-order-components-94a0d2f9e750). Here is a variation on the same pattern, applied to reducers.

A _reducer enhancer_ (or a _higher order reducer_) is a function that takes a reducer, and returns a new reducer that is able to handle new actions, or to hold more state, delegating control to the inner reducer for the actions it doesn't understand. This isn't a new pattern—technically, [`combineReducers()`](../api/combineReducers.md) is also a reducer enhancer because it takes reducers and returns a new reducer.

A reducer enhancer that doesn't do anything looks like this:

```js
function doNothingWith(reducer) {
  return function (state, action) {
    // Just call the passed reducer
    return reducer(state, action);
  };
}
```

A reducer enhancer that combines other reducers might look like this:

```js
function combineReducers(reducers) {
  return function (state = {}, action) {
    return Object.keys(reducers).reduce((nextState, key) => {
      // Call every reducer with the part of the state it manages
      nextState[key] = reducers[key](state[key], action);
      return nextState;
    }, {});
  };
}
```

### Second Attempt: Writing a Reducer Enhancer

Now that we have a better understanding of reducer enhancers, we can see that this is exactly what `undoable` should have been:

```js
function undoable(reducer) {
  // Call the reducer with empty action to populate the initial state
  const initialState = {
    past: [],
    present: reducer(undefined, {}),
    future: [],
  };

  // Return a reducer that handles undo and redo
  return function (state = initialState, action) {
    const { past, present, future } = state;

    switch (action.type) {
      case "UNDO":
        const previous = past[past.length - 1];
        const newPast = past.slice(0, past.length - 1);
        return {
          past: newPast,
          present: previous,
          future: [present, ...future],
        };
      case "REDO":
        const next = future[0];
        const newFuture = future.slice(1);
        return {
          past: [...past, present],
          present: next,
          future: newFuture,
        };
      default:
        // Delegate handling the action to the passed reducer
        const newPresent = reducer(present, action);
        if (present === newPresent) {
          return state;
        }
        return {
          past: [...past, present],
          present: newPresent,
          future: [],
        };
    }
  };
}
```

We can now wrap any reducer into `undoable` reducer enhancer to teach it to react to `UNDO` and `REDO` actions.

```js
// This is a reducer
function todos(state = [], action) {
  /* ... */
}

// This is also a reducer!
const undoableTodos = undoable(todos);

import { createStore } from "redux";
const store = createStore(undoableTodos);

store.dispatch({
  type: "ADD_TODO",
  text: "Use Redux",
});

store.dispatch({
  type: "ADD_TODO",
  text: "Implement Undo",
});

store.dispatch({
  type: "UNDO",
});
```

There is an important gotcha: you need to remember to append `.present` to the current state when you retrieve it. You may also check `.past.length` and `.future.length` to determine whether to enable or to disable the Undo and Redo buttons, respectively.

You might have heard that Redux was influenced by [Elm Architecture](https://github.com/evancz/elm-architecture-tutorial/). It shouldn't come as a surprise that this example is very similar to [elm-undo-redo package](https://package.elm-lang.org/packages/TheSeamau5/elm-undo-redo/2.0.0).

## Using Redux Undo

This was all very informative, but can't we just drop a library and use it instead of implementing `undoable` ourselves? Sure, we can! Meet [Redux Undo](https://github.com/omnidan/redux-undo), a library that provides simple Undo and Redo functionality for any part of your Redux tree.

In this part of the recipe, you will learn how to make a small "todo list" app logic undoable. You can find the full source of this recipe in the [`todos-with-undo` example that comes with Redux](https://github.com/reduxjs/redux/tree/master/examples/todos-with-undo).

### Installation

First of all, you need to run

```sh
npm install redux-undo
```

This installs the package that provides the `undoable` reducer enhancer.

### Wrapping the Reducer

You will need to wrap the reducer you wish to enhance with `undoable` function. For example, if you exported a `todos` reducer from a dedicated file, you will want to change it to export the result of calling `undoable()` with the reducer you wrote:

#### `reducers/todos.js`

```js
import undoable from "redux-undo";

/* ... */

const todos = (state = [], action) => {
  /* ... */
};

const undoableTodos = undoable(todos);

export default undoableTodos;
```

There are [many other options](https://github.com/omnidan/redux-undo#configuration) to configure your undoable reducer, like setting the action type for Undo and Redo actions.

Note that your `combineReducers()` call will stay exactly as it was, but the `todos` reducer will now refer to the reducer enhanced with Redux Undo:

#### `reducers/index.js`

```js
import { combineReducers } from "redux";
import todos from "./todos";
import visibilityFilter from "./visibilityFilter";

const todoApp = combineReducers({
  todos,
  visibilityFilter,
});

export default todoApp;
```

You may wrap one or more reducers in `undoable` at any level of the reducer composition hierarchy. We choose to wrap `todos` instead of the top-level combined reducer so that changes to `visibilityFilter` are not reflected in the undo history.

### Updating the Selectors

Now the `todos` part of the state looks like this:

```js
{
  visibilityFilter: 'SHOW_ALL',
  todos: {
    past: [
      [],
      [{ text: 'Use Redux' }],
      [{ text: 'Use Redux', complete: true }]
    ],
    present: [
      { text: 'Use Redux', complete: true },
      { text: 'Implement Undo' }
    ],
    future: [
      [
        { text: 'Use Redux', complete: true },
        { text: 'Implement Undo', complete: true }
      ]
    ]
  }
}
```

This means you need to access your state with `state.todos.present` instead of
just `state.todos`:

#### `containers/VisibleTodoList.js`

```js
const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos.present, state.visibilityFilter),
  };
};
```

### Adding the Buttons

Now all you need to do is add the buttons for the Undo and Redo actions.

First, create a new container component called `UndoRedo` for these buttons. We won't bother to split the presentational part into a separate file because it is very small:

#### `containers/UndoRedo.js`

```js
import React from "react";

/* ... */

let UndoRedo = ({ canUndo, canRedo, onUndo, onRedo }) => (
  <p>
    <button onClick={onUndo} disabled={!canUndo}>
      Undo
    </button>
    <button onClick={onRedo} disabled={!canRedo}>
      Redo
    </button>
  </p>
);
```

You will use `connect()` from [React Redux](https://github.com/reduxjs/react-redux) to generate a container component. To determine whether to enable Undo and Redo buttons, you can check `state.todos.past.length` and `state.todos.future.length`. You won't need to write action creators for performing undo and redo because Redux Undo already provides them:

#### `containers/UndoRedo.js`

```js
/* ... */

import { ActionCreators as UndoActionCreators } from "redux-undo";
import { connect } from "react-redux";

/* ... */

const mapStateToProps = (state) => {
  return {
    canUndo: state.todos.past.length > 0,
    canRedo: state.todos.future.length > 0,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onUndo: () => dispatch(UndoActionCreators.undo()),
    onRedo: () => dispatch(UndoActionCreators.redo()),
  };
};

UndoRedo = connect(mapStateToProps, mapDispatchToProps)(UndoRedo);

export default UndoRedo;
```

Now you can add `UndoRedo` component to the `App` component:

#### `components/App.js`

```js
import React from "react";
import Footer from "./Footer";
import AddTodo from "../containers/AddTodo";
import VisibleTodoList from "../containers/VisibleTodoList";
import UndoRedo from "../containers/UndoRedo";

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
    <UndoRedo />
  </div>
);

export default App;
```

This is it! Run `npm install` and `npm start` in the [example folder](https://github.com/reduxjs/redux/tree/master/examples/todos-with-undo) and try it out!

---

id: isolating-redux-sub-apps
title: Isolating Redux Sub-Apps

---

# Isolating Redux Sub-Apps

Consider the case of a “big” app (contained in a `<BigApp>` component)
that embeds smaller “sub-apps” (contained in `<SubApp>` components):

```js
import React, { Component } from "react";
import SubApp from "./subapp";

class BigApp extends Component {
  render() {
    return (
      <div>
        <SubApp />
        <SubApp />
        <SubApp />
      </div>
    );
  }
}
```

These `<SubApp>`s will be completely independent. They won't share data or
actions, and won't see or communicate with each other.

It's best not to mix this approach with standard Redux reducer composition.
For typical web apps, stick with reducer composition. For
“product hubs”, “dashboards”, or enterprise software that groups disparate
tools into a unified package, give the sub-app approach a try.

The sub-app approach is also useful for large teams that are divided by product
or feature verticals. These teams can ship sub-apps independently or in combination
with an enclosing “app shell”.

Below is a sub-app's root connected component.
As usual, it can render more components, connected or not, as children.
Usually we'd render it in `<Provider>` and be done with it.

```js
class App extends Component { ... }
export default connect(mapStateToProps)(App)
```

However, we don't have to call `ReactDOM.render(<Provider><App /></Provider>)`
if we're interested in hiding the fact that the sub-app component is a Redux app.

Maybe we want to be able to run multiple instances of it in the same “bigger” app
and keep it as a complete black box, with Redux being an implementation detail.

To hide Redux behind a React API, we can wrap it in a special component that
initializes the store in the constructor:

```js
import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducers";
import App from "./App";

class SubApp extends Component {
  constructor(props) {
    super(props);
    this.store = createStore(reducer);
  }

  render() {
    return (
      <Provider store={this.store}>
        <App />
      </Provider>
    );
  }
}
```

This way every instance will be independent.

This pattern is _not_ recommended for parts of the same app that share data.
However, it can be useful when the bigger app has zero access to the smaller apps' internals,
and we'd like to keep the fact that they are implemented with Redux as an implementation detail.
Each component instance will have its own store, so they won't “know” about each other.

---

id: migrating-to-redux
title: Migrating to Redux

---

# Migrating to Redux

Redux is not a monolithic framework, but a set of contracts and a [few functions that make them work together](../api/README.md). The majority of your “Redux code” will not even use Redux APIs, as most of the time you'll be writing functions.

This makes it easy to migrate both to and from Redux.
We don't want to lock you in!

## From Flux

[Reducers](../understanding/thinking-in-redux/Glossary.md#reducer) capture “the essence” of Flux Stores, so it's possible to gradually migrate an existing Flux project towards Redux, whether you are using [Flummox](https://github.com/acdlite/flummox), [Alt](http://github.com/goatslacker/alt), [traditional Flux](https://github.com/facebook/flux), or any other Flux library.

Your process will look like this:

- Create a function called `createFluxStore(reducer)` that creates a Flux store compatible with your existing app from a reducer function. Internally it might look similar to [`createStore`](../api/createStore.md) ([source](https://github.com/reduxjs/redux/blob/v4.0.5/src/createStore.js)) implementation from Redux. Its dispatch handler should just call the `reducer` for any action, store the next state, and emit change.

- This allows you to gradually rewrite every Flux Store in your app as a reducer, but still export `createFluxStore(reducer)` so the rest of your app is not aware that this is happening and sees the Flux stores.

- As you rewrite your Stores, you will find that you need to avoid certain Flux anti-patterns such as fetching API inside the Store, or triggering actions inside the Stores. Your Flux code will be easier to follow once you port it to be based on reducers!

- When you have ported all of your Flux Stores to be implemented on top of reducers, you can replace the Flux library with a single Redux store, and combine those reducers you already have into one using [`combineReducers(reducers)`](../api/combineReducers.md).

- Now all that's left to do is to port the UI to [use React-Redux](../tutorials/fundamentals/part-5-ui-and-react.md) or equivalent.

- Finally, you might want to begin using some Redux idioms like middleware to further simplify your asynchronous code.

## From Backbone

Backbone's model layer is quite different from Redux, so we don't suggest mixing them. If possible, it is best that you rewrite your app's model layer from scratch instead of connecting Backbone to Redux. However, if a rewrite is not feasible, you may use [backbone-redux](https://github.com/redbooth/backbone-redux) to migrate gradually, and keep the Redux store in sync with Backbone models and collections.

If your Backbone codebase is too big for a quick rewrite or you don't want to manage interactions between store and models, use [backbone-redux-migrator](https://github.com/naugtur/backbone-redux-migrator) to help your two codebases coexist while keeping healthy separation. Once your rewrite finishes, Backbone code can be discarded and your Redux application can work on its own once you configure router.

---

id: reducing-boilerplate
title: Reducing Boilerplate

---

# Reducing Boilerplate

Redux is in part [inspired by Flux](../understanding/history-and-design/PriorArt.md), and the most common complaint about Flux is how it makes you write a lot of boilerplate. In this recipe, we will consider how Redux lets us choose how verbose we'd like our code to be, depending on personal style, team preferences, longer term maintainability, and so on.

## Actions

Actions are plain objects describing what happened in the app, and serve as the sole way to describe an intention to mutate the data. It's important that **actions being objects you have to dispatch is not boilerplate, but one of the [fundamental design choices](../understanding/thinking-in-redux/ThreePrinciples.md) of Redux**.

There are frameworks claiming to be similar to Flux, but without a concept of action objects. In terms of being predictable, this is a step backwards from Flux or Redux. If there are no serializable plain object actions, it is impossible to record and replay user sessions, or to implement [hot reloading with time travel](https://www.youtube.com/watch?v=xsSnOQynTHs). If you'd rather modify data directly, you don't need Redux.

Actions look like this:

```js
{ type: 'ADD_TODO', text: 'Use Redux' }
{ type: 'REMOVE_TODO', id: 42 }
{ type: 'LOAD_ARTICLE', response: { ... } }
```

It is a common convention that actions have a constant type that helps reducers (or Stores in Flux) identify them. We recommend that you use strings and not [Symbols](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Symbol) for action types, because strings are serializable, and by using Symbols you make recording and replaying harder than it needs to be.

In Flux, it is traditionally thought that you would define every action type as a string constant:

```js
const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = "REMOVE_TODO";
const LOAD_ARTICLE = "LOAD_ARTICLE";
```

Why is this beneficial? **It is often claimed that constants are unnecessary, and for small projects, this might be correct.** For larger projects, there are some benefits to defining action types as constants:

- It helps keep the naming consistent because all action types are gathered in a single place.
- Sometimes you want to see all existing actions before working on a new feature. It may be that the action you need was already added by somebody on the team, but you didn't know.
- The list of action types that were added, removed, and changed in a Pull Request helps everyone on the team keep track of scope and implementation of new features.
- If you make a typo when importing an action constant, you will get `undefined`. Redux will immediately throw when dispatching such an action, and you'll find the mistake sooner.

It is up to you to choose the conventions for your project. You may start by using inline strings, and later transition to constants, and maybe later group them into a single file. Redux does not have any opinion here, so use your best judgment.

## Action Creators

It is another common convention that, instead of creating action objects inline in the places where you dispatch the actions, you would create functions generating them.

For example, instead of calling `dispatch` with an object literal:

```js
// somewhere in an event handler
dispatch({
  type: "ADD_TODO",
  text: "Use Redux",
});
```

You might write an action creator in a separate file, and import it into your component:

#### `actionCreators.js`

```js
export function addTodo(text) {
  return {
    type: "ADD_TODO",
    text,
  };
}
```

#### `AddTodo.js`

```js
import { addTodo } from "./actionCreators";

// somewhere in an event handler
dispatch(addTodo("Use Redux"));
```

Action creators have often been criticized as boilerplate. Well, you don't have to write them! **You can use object literals if you feel this better suits your project.** There are, however, some benefits for writing action creators you should know about.

Let's say a designer comes back to us after reviewing our prototype, and tells us that we need to allow three todos maximum. We can enforce this by rewriting our action creator to a callback form with [redux-thunk](https://github.com/gaearon/redux-thunk) middleware and adding an early exit:

```js
function addTodoWithoutCheck(text) {
  return {
    type: "ADD_TODO",
    text,
  };
}

export function addTodo(text) {
  // This form is allowed by Redux Thunk middleware
  // described below in “Async Action Creators” section.
  return function (dispatch, getState) {
    if (getState().todos.length === 3) {
      // Exit early
      return;
    }
    dispatch(addTodoWithoutCheck(text));
  };
}
```

We just modified how the `addTodo` action creator behaves, completely invisible to the calling code. **We don't have to worry about looking at each place where todos are being added, to make sure they have this check.** Action creators let you decouple additional logic around dispatching an action, from the actual components emitting those actions. It's very handy when the application is under heavy development, and the requirements change often.

### Generating Action Creators

Some frameworks like [Flummox](https://github.com/acdlite/flummox) generate action type constants automatically from the action creator function definitions. The idea is that you don't need to both define `ADD_TODO` constant and `addTodo()` action creator. Under the hood, such solutions still generate action type constants, but they're created implicitly so it's a level of indirection and can cause confusion. We recommend creating your action type constants explicitly.

Writing simple action creators can be tiresome and often ends up generating redundant boilerplate code:

```js
export function addTodo(text) {
  return {
    type: "ADD_TODO",
    text,
  };
}

export function editTodo(id, text) {
  return {
    type: "EDIT_TODO",
    id,
    text,
  };
}

export function removeTodo(id) {
  return {
    type: "REMOVE_TODO",
    id,
  };
}
```

You can always write a function that generates an action creator:

```js
function makeActionCreator(type, ...argNames) {
  return function (...args) {
    const action = { type };
    argNames.forEach((arg, index) => {
      action[argNames[index]] = args[index];
    });
    return action;
  };
}

const ADD_TODO = "ADD_TODO";
const EDIT_TODO = "EDIT_TODO";
const REMOVE_TODO = "REMOVE_TODO";

export const addTodo = makeActionCreator(ADD_TODO, "text");
export const editTodo = makeActionCreator(EDIT_TODO, "id", "text");
export const removeTodo = makeActionCreator(REMOVE_TODO, "id");
```

There are also utility libraries to aid in generating action creators, such as [redux-act](https://github.com/pauldijou/redux-act) and [redux-actions](https://github.com/acdlite/redux-actions). These can help reduce boilerplate code and enforce adherence to standards such as [Flux Standard Action (FSA)](https://github.com/acdlite/flux-standard-action).

## Async Action Creators

[Middleware](../understanding/thinking-in-redux/Glossary.md#middleware) lets you inject custom logic that interprets every action object before it is dispatched. Async actions are the most common use case for middleware.

Without any middleware, [`dispatch`](../api/Store.md#dispatchaction) only accepts a plain object, so we have to perform AJAX calls inside our components:

#### `actionCreators.js`

```js
export function loadPostsSuccess(userId, response) {
  return {
    type: "LOAD_POSTS_SUCCESS",
    userId,
    response,
  };
}

export function loadPostsFailure(userId, error) {
  return {
    type: "LOAD_POSTS_FAILURE",
    userId,
    error,
  };
}

export function loadPostsRequest(userId) {
  return {
    type: "LOAD_POSTS_REQUEST",
    userId,
  };
}
```

#### `UserInfo.js`

```js
import { Component } from "react";
import { connect } from "react-redux";
import {
  loadPostsRequest,
  loadPostsSuccess,
  loadPostsFailure,
} from "./actionCreators";

class Posts extends Component {
  loadData(userId) {
    // Injected into props by React Redux `connect()` call:
    const { dispatch, posts } = this.props;

    if (posts[userId]) {
      // There is cached data! Don't do anything.
      return;
    }

    // Reducer can react to this action by setting
    // `isFetching` and thus letting us show a spinner.
    dispatch(loadPostsRequest(userId));

    // Reducer can react to these actions by filling the `users`.
    fetch(`http://myapi.com/users/${userId}/posts`).then(
      (response) => dispatch(loadPostsSuccess(userId, response)),
      (error) => dispatch(loadPostsFailure(userId, error))
    );
  }

  componentDidMount() {
    this.loadData(this.props.userId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.userId !== this.props.userId) {
      this.loadData(this.props.userId);
    }
  }

  render() {
    if (this.props.isFetching) {
      return <p>Loading...</p>;
    }

    const posts = this.props.posts.map((post) => (
      <Post post={post} key={post.id} />
    ));

    return <div>{posts}</div>;
  }
}

export default connect((state) => ({
  posts: state.posts,
  isFetching: state.isFetching,
}))(Posts);
```

However, this quickly gets repetitive because different components request data from the same API endpoints. Moreover, we want to reuse some of this logic (e.g., early exit when there is cached data available) from many components.

**Middleware lets us write more expressive, potentially async action creators.** It lets us dispatch something other than plain objects, and interprets the values. For example, middleware can “catch” dispatched Promises and turn them into a pair of request and success/failure actions.

The simplest example of middleware is [redux-thunk](https://github.com/gaearon/redux-thunk). **“Thunk” middleware lets you write action creators as “thunks”, that is, functions returning functions.** This inverts the control: you will get `dispatch` as an argument, so you can write an action creator that dispatches many times.

> ##### Note
>
> Thunk middleware is just one example of middleware. Middleware is not about “letting you dispatch functions”. It's about letting you dispatch anything that the particular middleware you use knows how to handle. Thunk middleware adds a specific behavior when you dispatch functions, but it really depends on the middleware you use.

Consider the code above rewritten with [redux-thunk](https://github.com/gaearon/redux-thunk):

#### `actionCreators.js`

```js
export function loadPosts(userId) {
  // Interpreted by the thunk middleware:
  return function (dispatch, getState) {
    const { posts } = getState();
    if (posts[userId]) {
      // There is cached data! Don't do anything.
      return;
    }

    dispatch({
      type: "LOAD_POSTS_REQUEST",
      userId,
    });

    // Dispatch vanilla actions asynchronously
    fetch(`http://myapi.com/users/${userId}/posts`).then(
      (response) =>
        dispatch({
          type: "LOAD_POSTS_SUCCESS",
          userId,
          response,
        }),
      (error) =>
        dispatch({
          type: "LOAD_POSTS_FAILURE",
          userId,
          error,
        })
    );
  };
}
```

#### `UserInfo.js`

```js
import { Component } from "react";
import { connect } from "react-redux";
import { loadPosts } from "./actionCreators";

class Posts extends Component {
  componentDidMount() {
    this.props.dispatch(loadPosts(this.props.userId));
  }

  componentDidUpdate(prevProps) {
    if (prevProps.userId !== this.props.userId) {
      this.props.dispatch(loadPosts(this.props.userId));
    }
  }

  render() {
    if (this.props.isFetching) {
      return <p>Loading...</p>;
    }

    const posts = this.props.posts.map((post) => (
      <Post post={post} key={post.id} />
    ));

    return <div>{posts}</div>;
  }
}

export default connect((state) => ({
  posts: state.posts,
  isFetching: state.isFetching,
}))(Posts);
```

This is much less typing! If you'd like, you can still have “vanilla” action creators like `loadPostsSuccess` which you'd use from a container `loadPosts` action creator.

**Finally, you can write your own middleware.** Let's say you want to generalize the pattern above and describe your async action creators like this instead:

```js
export function loadPosts(userId) {
  return {
    // Types of actions to emit before and after
    types: ["LOAD_POSTS_REQUEST", "LOAD_POSTS_SUCCESS", "LOAD_POSTS_FAILURE"],
    // Check the cache (optional):
    shouldCallAPI: (state) => !state.posts[userId],
    // Perform the fetching:
    callAPI: () => fetch(`http://myapi.com/users/${userId}/posts`),
    // Arguments to inject in begin/end actions
    payload: { userId },
  };
}
```

The middleware that interprets such actions could look like this:

```js
function callAPIMiddleware({ dispatch, getState }) {
  return (next) => (action) => {
    const { types, callAPI, shouldCallAPI = () => true, payload = {} } = action;

    if (!types) {
      // Normal action: pass it on
      return next(action);
    }

    if (
      !Array.isArray(types) ||
      types.length !== 3 ||
      !types.every((type) => typeof type === "string")
    ) {
      throw new Error("Expected an array of three string types.");
    }

    if (typeof callAPI !== "function") {
      throw new Error("Expected callAPI to be a function.");
    }

    if (!shouldCallAPI(getState())) {
      return;
    }

    const [requestType, successType, failureType] = types;

    dispatch(
      Object.assign({}, payload, {
        type: requestType,
      })
    );

    return callAPI().then(
      (response) =>
        dispatch(
          Object.assign({}, payload, {
            response,
            type: successType,
          })
        ),
      (error) =>
        dispatch(
          Object.assign({}, payload, {
            error,
            type: failureType,
          })
        )
    );
  };
}
```

After passing it once to [`applyMiddleware(...middlewares)`](../api/applyMiddleware.md), you can write all your API-calling action creators the same way:

```js
export function loadPosts(userId) {
  return {
    types: ["LOAD_POSTS_REQUEST", "LOAD_POSTS_SUCCESS", "LOAD_POSTS_FAILURE"],
    shouldCallAPI: (state) => !state.posts[userId],
    callAPI: () => fetch(`http://myapi.com/users/${userId}/posts`),
    payload: { userId },
  };
}

export function loadComments(postId) {
  return {
    types: [
      "LOAD_COMMENTS_REQUEST",
      "LOAD_COMMENTS_SUCCESS",
      "LOAD_COMMENTS_FAILURE",
    ],
    shouldCallAPI: (state) => !state.comments[postId],
    callAPI: () => fetch(`http://myapi.com/posts/${postId}/comments`),
    payload: { postId },
  };
}

export function addComment(postId, message) {
  return {
    types: [
      "ADD_COMMENT_REQUEST",
      "ADD_COMMENT_SUCCESS",
      "ADD_COMMENT_FAILURE",
    ],
    callAPI: () =>
      fetch(`http://myapi.com/posts/${postId}/comments`, {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      }),
    payload: { postId, message },
  };
}
```

## Reducers

Redux reduces the boilerplate of Flux stores considerably by describing the update logic as a function. A function is simpler than an object, and much simpler than a class.

Consider this Flux store:

```js
const _todos = [];

const TodoStore = Object.assign({}, EventEmitter.prototype, {
  getAll() {
    return _todos;
  },
});

AppDispatcher.register(function (action) {
  switch (action.type) {
    case ActionTypes.ADD_TODO:
      const text = action.text.trim();
      _todos.push(text);
      TodoStore.emitChange();
  }
});

export default TodoStore;
```

With Redux, the same update logic can be described as a reducing function:

```js
export function todos(state = [], action) {
  switch (action.type) {
    case ActionTypes.ADD_TODO:
      const text = action.text.trim();
      return [...state, text];
    default:
      return state;
  }
}
```

The `switch` statement is _not_ the real boilerplate. The real boilerplate of Flux is conceptual: the need to emit an update, the need to register the Store with a Dispatcher, the need for the Store to be an object (and the complications that arise when you want a universal app).

It's unfortunate that many still choose Flux framework based on whether it uses `switch` statements in the documentation. If you don't like `switch`, you can solve this with a single function, as we show below.

### Generating Reducers

Let's write a function that lets us express reducers as an object mapping from action types to handlers. For example, if we want our `todos` reducers to be defined like this:

```js
export const todos = createReducer([], {
  [ActionTypes.ADD_TODO]: (state, action) => {
    const text = action.text.trim();
    return [...state, text];
  },
});
```

We can write the following helper to accomplish this:

```js
function createReducer(initialState, handlers) {
  return function reducer(state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    } else {
      return state;
    }
  };
}
```

This wasn't difficult, was it? Redux doesn't provide such a helper function by default because there are many ways to write it. Maybe you want it to automatically convert plain JS objects to Immutable objects to hydrate the server state. Maybe you want to merge the returned state with the current state. There may be different approaches to a “catch all” handler. All of this depends on the conventions you choose for your team on a specific project.

The Redux reducer API is `(state, action) => newState`, but how you create those reducers is up to you.

---

id: server-rendering
title: Server Rendering

---

# Server Rendering

The most common use case for server-side rendering is to handle the _initial render_ when a user (or search engine crawler) first requests our app. When the server receives the request, it renders the required component(s) into an HTML string, and then sends it as a response to the client. From that point on, the client takes over rendering duties.

We will use React in the examples below, but the same techniques can be used with other view frameworks that can render on the server.

### Redux on the Server

When using Redux with server rendering, we must also send the state of our app along in our response, so the client can use it as the initial state. This is important because, if we preload any data before generating the HTML, we want the client to also have access to this data. Otherwise, the markup generated on the client won't match the server markup, and the client would have to load the data again.

To send the data down to the client, we need to:

- create a fresh, new Redux store instance on every request;
- optionally dispatch some actions;
- pull the state out of store;
- and then pass the state along to the client.

On the client side, a new Redux store will be created and initialized with the state provided from the server.
Redux's **_only_** job on the server side is to provide the **initial state** of our app.

## Setting Up

In the following recipe, we are going to look at how to set up server-side rendering. We'll use the simplistic [Counter app](https://github.com/reduxjs/redux/tree/master/examples/counter) as a guide and show how the server can render state ahead of time based on the request.

### Install Packages

For this example, we'll be using [Express](https://expressjs.com/) as a simple web server. We also need to install the React bindings for Redux, since they are not included in Redux by default.

```sh
npm install express react-redux
```

## The Server Side

The following is the outline for what our server side is going to look like. We are going to set up an [Express middleware](https://expressjs.com/guide/using-middleware.html) using [app.use](http://expressjs.com/api.html#app.use) to handle all requests that come in to our server. If you're unfamiliar with Express or middleware, just know that our handleRender function will be called every time the server receives a request.

Additionally, as we are using ES6 and JSX syntax, we will need to compile with [Babel](https://babeljs.io/) (see [this example of a Node Server with Babel](https://github.com/babel/example-node-server)) and the [React preset](https://babeljs.io/docs/plugins/preset-react/).

##### `server.js`

```js
import path from "path";
import Express from "express";
import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import counterApp from "./reducers";
import App from "./containers/App";

const app = Express();
const port = 3000;

//Serve static files
app.use("/static", Express.static("static"));

// This is fired every time the server side receives a request
app.use(handleRender);

// We are going to fill these out in the sections to follow
function handleRender(req, res) {
  /* ... */
}
function renderFullPage(html, preloadedState) {
  /* ... */
}

app.listen(port);
```

### Handling the Request

The first thing that we need to do on every request is to create a new Redux store instance. The only purpose of this store instance is to provide the initial state of our application.

When rendering, we will wrap `<App />`, our root component, inside a `<Provider>` to make the store available to all components in the component tree, as we saw in ["Redux Fundamentals" Part 5: UI and React](../tutorials/fundamentals/part-5-ui-and-react.md).

The key step in server side rendering is to render the initial HTML of our component _**before**_ we send it to the client side. To do this, we use [ReactDOMServer.renderToString()](https://facebook.github.io/react/docs/react-dom-server.html#rendertostring).

We then get the initial state from our Redux store using [`store.getState()`](../api/Store.md#getState). We will see how this is passed along in our `renderFullPage` function.

```js
import { renderToString } from "react-dom/server";

function handleRender(req, res) {
  // Create a new Redux store instance
  const store = createStore(counterApp);

  // Render the component to a string
  const html = renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  );

  // Grab the initial state from our Redux store
  const preloadedState = store.getState();

  // Send the rendered page back to the client
  res.send(renderFullPage(html, preloadedState));
}
```

### Inject Initial Component HTML and State

The final step on the server side is to inject our initial component HTML and initial state into a template to be rendered on the client side. To pass along the state, we add a `<script>` tag that will attach `preloadedState` to `window.__PRELOADED_STATE__`.

The `preloadedState` will then be available on the client side by accessing `window.__PRELOADED_STATE__`.

We also include our bundle file for the client-side application via a script tag. This is whatever output your bundling tool provides for your client entry point. It may be a static file or a URL to a hot reloading development server.

```js
function renderFullPage(html, preloadedState) {
  return `
    <!doctype html>
    <html>
      <head>
        <title>Redux Universal Example</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // https://redux.js.org/usage/server-rendering#security-considerations
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
            /</g,
            "\\u003c"
          )}
        </script>
        <script src="/static/bundle.js"></script>
      </body>
    </html>
    `;
}
```

## The Client Side

The client side is very straightforward. All we need to do is grab the initial state from `window.__PRELOADED_STATE__`, and pass it to our [`createStore()`](../api/createStore.md) function as the initial state.

Let's take a look at our new client file:

#### `client.js`

```js
import React from "react";
import { hydrate } from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./containers/App";
import counterApp from "./reducers";

// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.__PRELOADED_STATE__;

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__;

// Create Redux store with initial state
const store = createStore(counterApp, preloadedState);

hydrate(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
```

You can set up your build tool of choice (Webpack, Browserify, etc.) to compile a bundle file into `static/bundle.js`.

When the page loads, the bundle file will be started up and [`ReactDOM.hydrate()`](https://reactjs.org/docs/react-dom.html#hydrate) will reuse the server-rendered HTML. This will connect our newly-started React instance to the virtual DOM used on the server. Since we have the same initial state for our Redux store and used the same code for all our view components, the result will be the same real DOM.

And that's it! That is all we need to do to implement server side rendering.

But the result is pretty vanilla. It essentially renders a static view from dynamic code. What we need to do next is build an initial state dynamically to allow that rendered view to be dynamic.

## Preparing the Initial State

Because the client side executes ongoing code, it can start with an empty initial state and obtain any necessary state on demand and over time. On the server side, rendering is synchronous and we only get one shot to render our view. We need to be able to compile our initial state during the request, which will have to react to input and obtain external state (such as that from an API or database).

### Processing Request Parameters

The only input for server side code is the request made when loading up a page in your app in your browser. You may choose to configure the server during its boot (such as when you are running in a development vs. production environment), but that configuration is static.

The request contains information about the URL requested, including any query parameters, which will be useful when using something like [React Router](https://github.com/ReactTraining/react-router). It can also contain headers with inputs like cookies or authorization, or POST body data. Let's see how we can set the initial counter state based on a query parameter.

#### `server.js`

```js
import qs from "qs"; // Add this at the top of the file
import { renderToString } from "react-dom/server";

function handleRender(req, res) {
  // Read the counter from the request, if provided
  const params = qs.parse(req.query);
  const counter = parseInt(params.counter, 10) || 0;

  // Compile an initial state
  let preloadedState = { counter };

  // Create a new Redux store instance
  const store = createStore(counterApp, preloadedState);

  // Render the component to a string
  const html = renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  );

  // Grab the initial state from our Redux store
  const finalState = store.getState();

  // Send the rendered page back to the client
  res.send(renderFullPage(html, finalState));
}
```

The code reads from the Express `Request` object passed into our server middleware. The parameter is parsed into a number and then set in the initial state. If you visit [http://localhost:3000/?counter=100](http://localhost:3000/?counter=100) in your browser, you'll see the counter starts at 100. In the rendered HTML, you'll see the counter output as 100 and the `__PRELOADED_STATE__` variable has the counter set in it.

### Async State Fetching

The most common issue with server side rendering is dealing with state that comes in asynchronously. Rendering on the server is synchronous by nature, so it's necessary to map any asynchronous fetches into a synchronous operation.

The easiest way to do this is to pass through some callback back to your synchronous code. In this case, that will be a function that will reference the response object and send back our rendered HTML to the client. Don't worry, it's not as hard as it may sound.

For our example, we'll imagine there is an external datastore that contains the counter's initial value (Counter As A Service, or CaaS). We'll make a mock call over to them and build our initial state from the result. We'll start by building out our API call:

#### `api/counter.js`

```js
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export function fetchCounter(callback) {
  setTimeout(() => {
    callback(getRandomInt(1, 100));
  }, 500);
}
```

Again, this is just a mock API, so we use `setTimeout` to simulate a network request that takes 500 milliseconds to respond (this should be much faster with a real world API). We pass in a callback that returns a random number asynchronously. If you're using a Promise-based API client, then you would issue this callback in your `then` handler.

On the server side, we simply wrap our existing code in the `fetchCounter` and receive the result in the callback:

#### `server.js`

```js
// Add this to our imports
import { fetchCounter } from "./api/counter";
import { renderToString } from "react-dom/server";

function handleRender(req, res) {
  // Query our mock API asynchronously
  fetchCounter((apiResult) => {
    // Read the counter from the request, if provided
    const params = qs.parse(req.query);
    const counter = parseInt(params.counter, 10) || apiResult || 0;

    // Compile an initial state
    let preloadedState = { counter };

    // Create a new Redux store instance
    const store = createStore(counterApp, preloadedState);

    // Render the component to a string
    const html = renderToString(
      <Provider store={store}>
        <App />
      </Provider>
    );

    // Grab the initial state from our Redux store
    const finalState = store.getState();

    // Send the rendered page back to the client
    res.send(renderFullPage(html, finalState));
  });
}
```

Because we call `res.send()` inside of the callback, the server will hold open the connection and won't send any data until that callback executes. You'll notice a 500ms delay is now added to each server request as a result of our new API call. A more advanced usage would handle errors in the API gracefully, such as a bad response or timeout.

### Security Considerations

Because we have introduced more code that relies on user generated content (UGC) and input, we have increased our attack surface area for our application. It is important for any application that you ensure your input is properly sanitized to prevent things like cross-site scripting (XSS) attacks or code injections.

In our example, we take a rudimentary approach to security. When we obtain the parameters from the request, we use `parseInt` on the `counter` parameter to ensure this value is a number. If we did not do this, you could easily get dangerous data into the rendered HTML by providing a script tag in the request. That might look like this: `?counter=</script><script>doSomethingBad();</script>`

For our simplistic example, coercing our input into a number is sufficiently secure. If you're handling more complex input, such as freeform text, then you should run that input through an appropriate sanitization function, such as [xss-filters](https://github.com/yahoo/xss-filters).

Furthermore, you can add additional layers of security by sanitizing your state output. `JSON.stringify` can be subject to script injections. To counter this, you can scrub the JSON string of HTML tags and other dangerous characters. This can be done with either a simple text replacement on the string, e.g. `JSON.stringify(state).replace(/</g, '\\u003c')`, or via more sophisticated libraries such as [serialize-javascript](https://github.com/yahoo/serialize-javascript).

## Next Steps

You may want to read [Redux Fundamentals Part 6: Async Logic and Data Fetching](../tutorials/fundamentals/part-6-async-logic.md) to learn more about expressing asynchronous flow in Redux with async primitives such as Promises and thunks. Keep in mind that anything you learn there can also be applied to universal rendering.

If you use something like [React Router](https://github.com/ReactTraining/react-router), you might also want to express your data fetching dependencies as static `fetchData()` methods on your route handler components. They may return [thunks](../tutorials/fundamentals/part-6-async-logic.md), so that your `handleRender` function can match the route to the route handler component classes, dispatch `fetchData()` result for each of them, and render only after the Promises have resolved. This way the specific API calls required for different routes are colocated with the route handler component definitions. You can also use the same technique on the client side to prevent the router from switching the page until its data has been loaded.

---

id: troubleshooting
title: Troubleshooting

---

# Troubleshooting

This is a place to share common problems and solutions to them.
The examples use React, but you should still find them useful if you use something else.

### Nothing happens when I dispatch an action

Sometimes, you are trying to dispatch an action, but your view does not update. Why does this happen? There may be several reasons for this.

#### Never mutate reducer arguments

It is tempting to modify the `state` or `action` passed to you by Redux. Don't do this!

Redux assumes that you never mutate the objects it gives to you in the reducer. **Every single time, you must return the new state object.** Even if you don't use a library like [Immer](https://github.com/immerjs/immer), you need to completely avoid mutation.

Immutability is what lets [react-redux](https://github.com/gaearon/react-redux) efficiently subscribe to fine-grained updates of your state. It also enables great developer experience features such as time travel with [redux-devtools](https://github.com/reduxjs/redux-devtools).

For example, a reducer like this is wrong because it mutates the state:

```js
function todos(state = [], action) {
  switch (action.type) {
    case "ADD_TODO":
      // Wrong! This mutates state
      state.push({
        text: action.text,
        completed: false,
      });
      return state;
    case "COMPLETE_TODO":
      // Wrong! This mutates state[action.index].
      state[action.index].completed = true;
      return state;
    default:
      return state;
  }
}
```

It needs to be rewritten like this:

```js
function todos(state = [], action) {
  switch (action.type) {
    case "ADD_TODO":
      // Return a new array
      return [
        ...state,
        {
          text: action.text,
          completed: false,
        },
      ];
    case "COMPLETE_TODO":
      // Return a new array
      return state.map((todo, index) => {
        if (index === action.index) {
          // Copy the object before mutating
          return Object.assign({}, todo, {
            completed: true,
          });
        }
        return todo;
      });
    default:
      return state;
  }
}
```

It's more code, but it's exactly what makes Redux predictable and efficient. If you want to have less code, you can use a helper like [`React.addons.update`](https://facebook.github.io/react/docs/update.html) to write immutable transformations with a terse syntax:

```js
// Before:
return state.map((todo, index) => {
  if (index === action.index) {
    return Object.assign({}, todo, {
      completed: true,
    });
  }
  return todo;
});

// After
return update(state, {
  [action.index]: {
    completed: {
      $set: true,
    },
  },
});
```

Finally, to update objects, you'll need something like `_.extend` from Underscore, or better, an [`Object.assign`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign) polyfill.

Make sure that you use `Object.assign` correctly. For example, instead of returning something like `Object.assign(state, newData)` from your reducers, return `Object.assign({}, state, newData)`. This way you don't override the previous `state`.

You can also use the object spread operator proposal for a more succinct syntax:

```js
// Before:
return state.map((todo, index) => {
  if (index === action.index) {
    return Object.assign({}, todo, {
      completed: true,
    });
  }
  return todo;
});

// After:
return state.map((todo, index) => {
  if (index === action.index) {
    return { ...todo, completed: true };
  }
  return todo;
});
```

Note that experimental language features are subject to change.

Also keep an eye out for nested state objects that need to be deeply copied. Both `_.extend` and `Object.assign` make a shallow copy of the state. See [Updating Nested Objects](./usage/structuring-reducers/ImmutableUpdatePatterns.md#updating-nested-objects) for suggestions on how to deal with nested state objects.

#### Don't forget to call [`dispatch(action)`](api/Store.md#dispatchaction)

If you define an action creator, calling it will _not_ automatically dispatch the action. For example, this code will do nothing:

#### `TodoActions.js`

```js
export function addTodo(text) {
  return { type: "ADD_TODO", text };
}
```

#### `AddTodo.js`

```js
import React, { Component } from "react";
import { addTodo } from "./TodoActions";

class AddTodo extends Component {
  handleClick() {
    // Won't work!
    addTodo("Fix the issue");
  }

  render() {
    return <button onClick={() => this.handleClick()}>Add</button>;
  }
}
```

It doesn't work because your action creator is just a function that _returns_ an action. It is up to you to actually dispatch it. We can't bind your action creators to a particular Store instance during the definition because apps that render on the server need a separate Redux store for every request.

The fix is to call [`dispatch()`](api/Store.md#dispatchaction) method on the [store](api/Store.md) instance:

```js
handleClick() {
  // Works! (but you need to grab store somehow)
  store.dispatch(addTodo('Fix the issue'))
}
```

If you're somewhere deep in the component hierarchy, it is cumbersome to pass the store down manually. This is why [react-redux](https://github.com/gaearon/react-redux) lets you use a `connect` [higher-order component](https://medium.com/@dan_abramov/mixins-are-dead-long-live-higher-order-components-94a0d2f9e750) that will, apart from subscribing you to a Redux store, inject `dispatch` into your component's props.

The fixed code looks like this:

#### `AddTodo.js`

```js
import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "./TodoActions";

class AddTodo extends Component {
  handleClick() {
    // Works!
    this.props.dispatch(addTodo("Fix the issue"));
  }

  render() {
    return <button onClick={() => this.handleClick()}>Add</button>;
  }
}

// In addition to the state, `connect` puts `dispatch` in our props.
export default connect()(AddTodo);
```

You can then pass `dispatch` down to other components manually, if you want to.

#### Make sure mapStateToProps is correct

It's possible you're correctly dispatching an action and applying your reducer but the corresponding state is not being correctly translated into props.

## Something else doesn't work

Ask around on the **#redux** [Reactiflux](https://www.reactiflux.com/) Discord channel, or [create an issue](https://github.com/reduxjs/redux/issues).

If you figure it out, [edit this document](https://github.com/reduxjs/redux/edit/master/docs/usage/Troubleshooting.md) as a courtesy to the next person having the same problem.

---

id: usage-with-typescript
title: Usage With TypeScript

---

# Usage with TypeScript

:::tip What You'll Learn

- Standard patterns for setting up a Redux app with TypeScript
- Techniques for correctly typing portions of Redux logic

:::

:::important Prerequisites

- Understanding of [TypeScript syntax and terms](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
- Familiarity with TypeScript concepts like [generics](https://www.typescriptlang.org/docs/handbook/2/generics.html) and [utility types](https://www.typescriptlang.org/docs/handbook/utility-types.html)
- Knowledge of [React Hooks](https://reactjs.org/docs/hooks-intro.html)

:::

## Overview

**TypeScript** is a typed superset of JavaScript that provides compile-time checking of source code. When used with Redux, TypeScript can help provide:

1. Type safety for reducers, state and action creators, and UI components
2. Easy refactoring of typed code
3. A superior developer experience in a team environment

[**We strongly recommend using TypeScript in Redux applications**](../style-guide/style-guide.md#use-static-typing). However, like all tools, TypeScript has tradeoffs. It adds complexity in terms of writing additional code, understanding TS syntax, and building the application. At the same time, it provides value by catching errors earlier in development, enabling safer and more efficient refactoring, and acting as documentation for existing source code.

We believe that **[pragmatic use of TypeScript](https://blog.isquaredsoftware.com/2019/11/blogged-answers-learning-and-using-typescript/#pragmatism-is-vital) provides more than enough value and benefit to justify the added overhead**, especially in larger codebases, but you should take time to **evaluate the tradeoffs and decide whether it's worth using TS in your own application**.

There are multiple possible approaches to type checking Redux code. **This page shows our standard recommended patterns for using Redux and TypeScript together**, and is not an exhaustive guide. Following these patterns should result in a good TS usage experience, with **the best tradeoffs between type safety and amount of type declarations you have to add to your codebase**.

## Standard Redux Toolkit Project Setup with TypeScript

We assume that a typical Redux project is using Redux Toolkit and React Redux together.

[Redux Toolkit](https://redux-toolkit.js.org) (RTK) is the standard approach for writing modern Redux logic. RTK is already written in TypeScript, and its API is designed to provide a good experience for TypeScript usage.

[React Redux](https://react-redux.js.org) has its type definitions in a separate [`@types/react-redux` typedefs package](https://npm.im/@types/react-redux) on NPM. In addition to typing the library functions, the types also export some helpers to make it easier to write typesafe interfaces between your Redux store and your React components.

As of React Redux v7.2.3, the `react-redux` package has a dependency on `@types/react-redux`, so the type definitions will be automatically installed with the library. Otherwise, you'll need to manually install them yourself (typically `npm install @types/react-redux` ).

The [Redux+TS template for Create-React-App](https://github.com/reduxjs/cra-template-redux-typescript) comes with a working example of these patterns already configured.

### Define Root State and Dispatch Types

Using [configureStore](https://redux-toolkit.js.org/api/configureStore) should not need any additional typings. You will, however, want to extract the `RootState` type and the `Dispatch` type so that they can be referenced as needed. Inferring these types from the store itself means that they correctly update as you add more state slices or modify middleware settings.

Since those are types, it's safe to export them directly from your store setup file such as `app/store.ts` and import them directly into other files.

```ts title="app/store.ts"
import { configureStore } from "@reduxjs/toolkit";
// ...

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    comments: commentsReducer,
    users: usersReducer,
  },
});

// highlight-start
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
// highlight-end
```

### Define Typed Hooks

While it's possible to import the `RootState` and `AppDispatch` types into each component, it's better to **create pre-typed versions of the `useDispatch` and `useSelector` hooks for usage in your application**. This is important for a couple reasons:

- For `useSelector`, it saves you the need to type `(state: RootState)` every time
- For `useDispatch`, the default `Dispatch` type does not know about thunks or other middleware. In order to correctly dispatch thunks, you need to use the specific customized `AppDispatch` type from the store that includes the thunk middleware types, and use that with `useDispatch`. Adding a pre-typed `useDispatch` hook keeps you from forgetting to import `AppDispatch` where it's needed.

Since these are actual variables, not types, it's important to define them in a separate file such as `app/hooks.ts`, not the store setup file. This allows you to import them into any component file that needs to use the hooks, and avoids potential circular import dependency issues.

```ts title="app/hooks.ts"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";

// highlight-start
// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
// highlight-end
```

## Application Usage

### Define Slice State and Action Types

Each slice file should define a type for its initial state value, so that `createSlice` can correctly infer the type of `state` in each case reducer.

All generated actions should be defined using the `PayloadAction<T>` type from Redux Toolkit, which takes the type of the `action.payload` field as its generic argument.

You can safely import the `RootState` type from the store file here. It's a circular import, but the TypeScript compiler can correctly handle that for types. This may be needed for use cases like writing selector functions.

```ts title="features/counter/counterSlice.ts"
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

// highlight-start
// Define a type for the slice state
interface CounterState {
  value: number;
}

// Define the initial state using that type
const initialState: CounterState = {
  value: 0,
};
// highlight-end

export const counterSlice = createSlice({
  name: "counter",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    // highlight-start
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      // highlight-end
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value;

export default counterSlice.reducer;
```

The generated action creators will be correctly typed to accept a `payload` argument based on the `PayloadAction<T>` type you provided for the reducer. For example, `incrementByAmount` requires a `number` as its argument.

In some cases, [TypeScript may unnecessarily tighten the type of the initial state](https://github.com/reduxjs/redux-toolkit/pull/827). If that happens, you can work around it by casting the initial state using `as`, instead of declaring the type of the variable:

```ts
// Workaround: cast state instead of declaring variable type
const initialState = {
  value: 0,
} as CounterState;
```

### Use Typed Hooks in Components

In component files, import the pre-typed hooks instead of the standard hooks from React Redux.

```tsx title="features/counter/Counter.tsx"
import React, { useState } from "react";

// highlight-next-line
import { useAppSelector, useAppDispatch } from "app/hooks";

import { decrement, increment } from "./counterSlice";

export function Counter() {
  // highlight-start
  // The `state` arg is correctly typed as `RootState` already
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  // highlight-end

  // omit rendering logic
}
```

## Typing Additional Redux Logic

### Type Checking Reducers

[Reducers](../tutorials/fundamentals/part-3-state-actions-reducers.md) are pure functions that receive the current `state` and incoming `action` as arguments, and return a new state.

If you are using Redux Toolkit's `createSlice`, you should rarely need to specifically type a reducer separately. If you do actually write a standalone reducer, it's typically sufficient to declare the type of the `initialState` value, and type the `action` as `AnyAction`:

```ts
import { AnyAction } from "redux";

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export default function counterReducer(
  state = initialState,
  action: AnyAction
) {
  // logic here
}
```

However, the Redux core does export a `Reducer<State, Action>` type you can use as well.

### Type Checking Middleware

[Middleware](../tutorials/fundamentals/part-4-store.md#middleware) are an extension mechanism for the Redux store. Middleware are composed into a pipeline that wrap the store's `dispatch` method, and have access to the store's `dispatch` and `getState` methods.

The Redux core exports a `Middleware` type that can be used to correctly type a middleware function:

```ts
export interface Middleware<
  DispatchExt = {}, // optional override return behavior of `dispatch`
  S = any, // type of the Redux store state
  D extends Dispatch = Dispatch // type of the dispatch method
>
```

A custom middleware should use the `Middleware` type, and pass the generic args for `S` (state) and `D` (dispatch) if needed:

```ts
import { Middleware } from "redux";

import { RootState } from "../store";

export const exampleMiddleware: Middleware<
  {}, // Most middleware do not modify the dispatch return value
  RootState
> = (storeApi) => (next) => (action) => {
  const state = storeApi.getState(); // correctly typed as RootState
};
```

The dispatch generic should likely only be needed if you are dispatching additional thunks within the middleware.

### Type Checking Redux Thunks

[Redux Thunk](https://github.com/reduxjs/redux-thunk) is the standard middleware for writing sync and async logic that interacts with the Redux store. A thunk function receives `dispatch` and `getState` as its parameters. Redux Thunk has a built in `ThunkAction` type which we can use to define types for those arguments:

```ts
export type ThunkAction<
  R, // Return type of the thunk function
  S, // state type used by getState
  E, // any "extra argument" injected into the thunk
  A extends Action // known types of actions that can be dispatched
> = (
  dispatch: ThunkDispatch<S, E, A>,
  getState: () => S,
  extraArgument: E
) => R;
```

You will typically want to provide the `R` (return type) and `S` (state) generic arguments. Unfortunately, TS does not allow only providing _some_ generic arguments, so the usual values for the other arguments are `unknown` for `E` and `AnyAction` for `A`:

```ts
import { AnyAction } from "redux";
import { sendMessage } from "./store/chat/actions";
import { RootState } from "./store";
import { ThunkAction } from "redux-thunk";

export const thunkSendMessage =
  (message: string): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (dispatch) => {
    const asyncResp = await exampleAPI();
    dispatch(
      sendMessage({
        message,
        user: asyncResp,
        timestamp: new Date().getTime(),
      })
    );
  };

function exampleAPI() {
  return Promise.resolve("Async Chat Bot");
}
```

To reduce repetition, you might want to define a reusable `AppThunk` type once, in your store file, and then use that type whenever you write a thunk:

```ts
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AnyAction
>;
```

Note that this assumes that there is no meaningful return value from the thunk. If your thunk returns a promise and you want to [use the returned promise after dispatching the thunk](../tutorials/essentials/part-5-async-logic.md#checking-thunk-results-in-components), you'd want to use this as `AppThunk<Promise<SomeReturnType>>`.

:::caution

Don't forget that **the default `useDispatch` hook does not know about thunks**, and so dispatching a thunk will cause a type error. Be sure to [use an updated form of `Dispatch` in your components that recognizes thunks as an acceptable type to dispatch](#define-root-state-and-dispatch-types).

:::

## Usage with React Redux

While [React Redux](https://react-redux.js.org) is a separate library from Redux itself, it is commonly used with React.

For a complete guide on how to correctly use React Redux with TypeScript, see **[the "Static Typing" page in the React Redux docs](https://react-redux.js.org/using-react-redux/static-typing)**. This section will highlight the standard patterns.

As mentioned above, React Redux doesn't ship with its own type definitions. If you are using TypeScript you should install the [`@types/react-redux` type definitions](https://npm.im/@types/react-redux) from npm.

### Typing the `useSelector` hook

Declare the type of the `state` parameter in the selector function, and the return type of `useSelector` will be inferred to match the return type of the selector:

```ts
interface RootState {
  isOn: boolean;
}

// TS infers type: (state: RootState) => boolean
const selectIsOn = (state: RootState) => state.isOn;

// TS infers `isOn` is boolean
const isOn = useSelector(selectIsOn);
```

This can also be done inline as well:

```ts
const isOn = useSelector((state: RootState) => state.isOn);
```

However, prefer creating a pre-typed `useSelector` hook with the correct type of `state` built-in instead.

### Typing the `useDispatch` hook

By default, the return value of `useDispatch` is the standard `Dispatch` type defined by the Redux core types, so no declarations are needed:

```ts
const dispatch = useDispatch();
```

However, prefer creating a pre-typed `useAppDispatch` hook with the correct type of `Dispatch` built-in instead.

### Typing the `connect` higher order component

If you are still using `connect`, you should use the `ConnectedProps<T>` type exported by `@types/react-redux^7.1.2` to infer the types of the props from `connect` automatically. This requires splitting the `connect(mapState, mapDispatch)(MyComponent)` call into two parts:

```tsx
import { connect, ConnectedProps } from "react-redux";

interface RootState {
  isOn: boolean;
}

const mapState = (state: RootState) => ({
  isOn: state.isOn,
});

const mapDispatch = {
  toggleOn: () => ({ type: "TOGGLE_IS_ON" }),
};

const connector = connect(mapState, mapDispatch);

// The inferred type will look like:
// {isOn: boolean, toggleOn: () => void}
type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & {
  backgroundColor: string;
};

const MyComponent = (props: Props) => (
  <div style={{ backgroundColor: props.backgroundColor }}>
    <button onClick={props.toggleOn}>
      Toggle is {props.isOn ? "ON" : "OFF"}
    </button>
  </div>
);

export default connector(MyComponent);
```

## Usage with Redux Toolkit

The [Standard Redux Toolkit Project Setup with TypeScript](#standard-redux-toolkit-project-setup-with-typescript) section already covered the normal usage patterns for `configureStore` and `createSlice`, and the [Redux Toolkit "Usage with TypeScript" page](https://redux-toolkit.js.org/usage/usage-with-typescript) covers all of the RTK APIs in detail.

Here are some additional typing patterns you will commonly see when using RTK.

### Typing `configureStore`

`configureStore` infers the type of the state value from the provided root reducer function, so no specific type declarations should be needed.

If you want to add additional middleware to the store, be sure to use the specialized `.concat()` and `.prepend()` methods included in the array returned by `getDefaultMiddleware()`, as those will correctly preserve the types of the middleware you're adding. (Using plain JS array spreads often loses those types.)

```ts
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .prepend(
        // correctly typed middlewares can just be used
        additionalMiddleware,
        // you can also type middlewares manually
        untypedMiddleware as Middleware<
          (action: Action<"specialAction">) => number,
          RootState
        >
      )
      // prepend and concat calls can be chained
      .concat(logger),
});
```

### Matching Actions

RTK-generated action creators have a `match` method that acts as a [type predicate](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates). Calling `someActionCreator.match(action)` will do a string comparison against the `action.type` string, and if used as a condition, narrow the type of `action` down to be the correct TS type:

```ts
const increment = createAction<number>("increment");
function test(action: Action) {
  if (increment.match(action)) {
    // action.payload inferred correctly here
    const num = 5 + action.payload;
  }
}
```

This is particularly useful when checking for action types in Redux middleware, such as custom middleware, `redux-observable`, and RxJS's `filter` method.

### Typing `createSlice`

#### Defining Separate Case Reducers

If you have too many case reducers and defining them inline would be messy, or you want to reuse case reducers across slices, you can also define them outside the `createSlice` call and type them as `CaseReducer`:

```ts
type State = number;
const increment: CaseReducer<State, PayloadAction<number>> = (state, action) =>
  state + action.payload;

createSlice({
  name: "test",
  initialState: 0,
  reducers: {
    increment,
  },
});
```

#### Typing `extraReducers`

If you are adding an `extraReducers` field in `createSlice`, be sure to use the "builder callback" form, as the "plain object" form cannot infer action types correctly. Passing an RTK-generated action creator to `builder.addCase()` will correctly infer the type of the `action`:

```ts
const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    // fill in primary logic here
  },
  // highlight-start
  extraReducers: (builder) => {
    builder.addCase(fetchUserById.pending, (state, action) => {
      // both `state` and `action` are now correctly typed
      // based on the slice state and the `pending` action creator
    });
  },
  // highlight-end
});
```

#### Typing `prepare` Callbacks

If you want to add a `meta` or `error` property to your action, or customize the `payload` of your action, you have to use the `prepare` notation for defining the case reducer. Using this notation with TypeScript looks like:

```ts
const blogSlice = createSlice({
  name: "blogData",
  initialState,
  reducers: {
    // highlight-start
    receivedAll: {
      reducer(
        state,
        action: PayloadAction<Page[], string, { currentPage: number }>
      ) {
        state.all = action.payload;
        state.meta = action.meta;
      },
      prepare(payload: Page[], currentPage: number) {
        return { payload, meta: { currentPage } };
      },
    },
    // highlight-end
  },
});
```

#### Fixing Circular Types in Exported Slices

Finally, on rare occasions you might need to export the slice reducer with a specific type in order to break a circular type dependency problem. This might look like:

```ts
export default counterSlice.reducer as Reducer<Counter>;
```

### Typing `createAsyncThunk`

For basic usage, the only type you need to provide for `createAsyncThunk` is the type of the single argument for your payload creation callback. You should also ensure that the return value of the callback is typed correctly:

```ts
const fetchUserById = createAsyncThunk(
  "users/fetchById",
  // Declare the type your function argument here:
  // highlight-next-line
  async (userId: number) => {
    const response = await fetch(`https://reqres.in/api/users/${userId}`);
    // Inferred return type: Promise<MyData>
    // highlight-next-line
    return (await response.json()) as MyData;
  }
);

// the parameter of `fetchUserById` is automatically inferred to `number` here
// and dispatching the resulting thunkAction will return a Promise of a correctly
// typed "fulfilled" or "rejected" action.
const lastReturnedAction = await store.dispatch(fetchUserById(3));
```

If you need to modify the types of the `thunkApi` parameter, such as supplying the type of the `state` returned by `getState()`, you must supply the first two generic arguments for return type and payload argument, plus whicher "thunkApi argument fields" are relevant in an object:

```ts
const fetchUserById = createAsyncThunk<
  //highlight-start
  // Return type of the payload creator
  MyData,
  // First argument to the payload creator
  number,
  {
    // Optional fields for defining thunkApi field types
    dispatch: AppDispatch;
    state: State;
    extra: {
      jwt: string;
    };
  }
  // highlight-end
>("users/fetchById", async (userId, thunkApi) => {
  const response = await fetch(`https://reqres.in/api/users/${userId}`, {
    headers: {
      Authorization: `Bearer ${thunkApi.extra.jwt}`,
    },
  });
  return (await response.json()) as MyData;
});
```

### Typing `createEntityAdapter`

Typing `createEntityAdapter` only requires you to specify the entity type as the single generic argument. This typically looks like:

```ts
interface Book {
  bookId: number;
  title: string;
  // ...
}

// highlight-next-line
const booksAdapter = createEntityAdapter<Book>({
  selectId: (book) => book.bookId,
  sortComparer: (a, b) => a.title.localeCompare(b.title),
});

const booksSlice = createSlice({
  name: "books",
  // highlight-start
  // The type of the state is inferred here
  initialState: booksAdapter.getInitialState(),
  // highlight-end
  reducers: {
    bookAdded: booksAdapter.addOne,
    booksReceived(state, action: PayloadAction<{ books: Book[] }>) {
      booksAdapter.setAll(state, action.payload.books);
    },
  },
});
```

## Additional Recommendations

### Use the React Redux Hooks API

**We recommend using the React Redux hooks API as the default approach**. The hooks API is much simpler to use with TypeScript, as `useSelector` is a simple hook that takes a selector function, and the return type is easily inferred from the type of the `state` argument.

While `connect` still works fine, and _can_ be typed, it's much more difficult to type correctly.

### Avoid Action Type Unions

**We specifically recommend _against_ trying to create unions of action types**, as it provides no real benefit and actually misleads the compiler in some ways. See RTK maintainer Lenz Weber's post [Do Not Create Union Types with Redux Action Types](https://phryneas.de/redux-typescript-no-discriminating-union) for an explanation of why this is a problem.

In addition, if you're using `createSlice`, you already know that all actions defined by that slice are being handled correctly.

## Resources

For further information, see these additional resources:

- Redux library documentation:
  - [React Redux docs: Static Typing](https://react-redux.js.org/using-react-redux/static-typing): Examples of how to use the React Redux APIs with TypeScript
  - [Redux Toolkit docs: Usage with TypeScript](https://redux-toolkit.js.org/usage/usage-with-typescript): Examples of how to use the Redux Toolkit APIs with TypeScript
- React + Redux + TypeScript guides:
  - [React+TypeScript Cheatsheet](https://github.com/typescript-cheatsheets/react-typescript-cheatsheet): a comprehensive guide to using React with TypeScript
  - [React + Redux in TypeScript Guide](https://github.com/piotrwitek/react-redux-typescript-guide): extensive information on patterns for using React and Redux with TypeScript
    - _Note: while this guide has some useful info, many of the patterns it shows go against our recommended practices shown in this page, such as using action type unions. We link this out of completeness_
- Other articles:
  - [Do Not Create Union Types with Redux Action Types](https://phryneas.de/redux-typescript-no-discriminating-union)
  - [Redux with Code-Splitting and Type Checking](https://www.matthewgerstman.com/tech/redux-code-split-typecheck/)

---

id: using-object-spread-operator
title: Using Object Spread Operator

---

# Using Object Spread Operator

Since one of the core tenets of Redux is to never mutate state, you'll often find yourself using [`Object.assign()`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign) to create copies of objects with new or updated values. For example, in the `todoApp` below `Object.assign()` is used to return a new `state` object with an updated `visibilityFilter` property:

```js
function todoApp(state = initialState, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return Object.assign({}, state, {
        visibilityFilter: action.filter,
      });
    default:
      return state;
  }
}
```

While effective, using `Object.assign()` can quickly make simple reducers difficult to read given its rather verbose syntax.

An alternative approach is to use the [object spread syntax](https://github.com/tc39/proposal-object-rest-spread) recently added to the JavaScript specification. It lets you use the spread (`...`) operator to copy enumerable properties from one object to another in a more succinct way. The object spread operator is conceptually similar to the ES6 [array spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator). We can simplify the `todoApp` example above by using the object spread syntax:

```js
function todoApp(state = initialState, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return { ...state, visibilityFilter: action.filter };
    default:
      return state;
  }
}
```

The advantage of using the object spread syntax becomes more apparent when you're composing complex objects. Below `getAddedIds` maps an array of `id` values to an array of objects with values returned from `getProduct` and `getQuantity`.

```js
return getAddedIds(state.cart).map((id) =>
  Object.assign({}, getProduct(state.products, id), {
    quantity: getQuantity(state.cart, id),
  })
);
```

Object spread lets us simplify the above `map` call to:

```js
return getAddedIds(state.cart).map((id) => ({
  ...getProduct(state.products, id),
  quantity: getQuantity(state.cart, id),
}));
```

While the object spread syntax is a [Stage 4](https://github.com/tc39/proposal-object-rest-spread#status-of-this-proposal) proposal for ECMAScript and accepted for the 2018 specification release, you will still need to use a transpiler such as [Babel](https://babeljs.io/) to use it in production systems. You should use the [`env`](https://github.com/babel/babel/tree/master/packages/babel-preset-env) preset, install [`@babel/plugin-proposal-object-rest-spread`](https://babeljs.io/docs/en/babel-plugin-proposal-object-rest-spread) and add it individually to the `plugins` array in your `.babelrc`.

```json
{
  "presets": ["@babel/preset-env"],
  "plugins": ["@babel/plugin-proposal-object-rest-spread"]
}
```

> ##### Note on Object Spread Operator

> Like the Array Spread Operator, the Object Spread Operator creates a [shallow clone](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#Spread_in_object_literals) of the original object. In other words, for multidimensional source objects, elements in the copied object at a depth greater than one are mere references to the source object (with the exception of [primitives](https://developer.mozilla.org/en-US/docs/Glossary/Primitive), which are copied). Thus, you cannot reliably use the Object Spread Operator (`...`) for deep cloning objects.

---

id: writing-tests
title: Writing Tests
description: 'Usage > Writing Tests: recommended practices and setup for testing Redux apps'

---

# Writing Tests

:::tip What You'll Learn

- Recommended practices for testing apps using Redux
- Examples of test configuration and setup

:::

## Guiding Principles

The guiding principles for testing Redux logic closely follow that of React Testing Library:

> [The more your tests resemble the way your software is used, the more confidence they can give you.](https://twitter.com/kentcdodds/status/977018512689455106) - Kent C. Dodds

Because most of the Redux code you write are functions, and many of them are pure, they are easy to test without mocking. However, you should consider whether each piece of your Redux code needs it's own dedicated tests. In the majority of scenarios, the end-user does not know, and does not care whether Redux is used within the application at all. As such, the Redux code can be treated as an implementation detail of the app, without requiring explicit tests for the Redux code in many circumstances.

The general advice for testing an app using Redux is as follows:

- Use integration tests for everything working together. I.e. for a React app using Redux, render a `<Provider>` with a real store instance wrapping the component/s being tested. Interactions with the page being tested should use real Redux logic, with API calls mocked out so app code doesn't have to change, and assert that the UI is updated appropriately.
- If needed, use basic unit tests for pure functions such as particularly complex reducers or selectors. However, in many cases, these are just implementation details that are covered by integration tests instead.

:::info

For background on why we recommend integration-style tests, see:

- Kent C Dodds: [Testing Implementation Details](https://kentcdodds.com/blog/testing-implementation-details): thoughts on why he recommends avoiding testing implementation details.
- Mark Erikson: [Blogged Answers: The Evolution of Redux Testing Approaches](https://blog.isquaredsoftware.com/2021/06/the-evolution-of-redux-testing-approaches/): thoughts on how Redux testing has evolved from 'isolation' to 'integration' over time.

:::

## Setting Up

Redux can be tested with any test runner, however in the examples below we will be using [Jest](https://facebook.github.io/jest/), a popular testing framework.
Note that it runs in a Node environment, so you won't have access to the real DOM.
Jest can instead use [jsdom](https://github.com/jsdom/jsdom) to emulate portions of the browser in a test environment.

```sh
npm install --save-dev jest
```

To use it together with [Babel](https://babeljs.io), you will need to install `babel-jest`:

```sh
npm install --save-dev babel-jest
```

and configure it to use [babel-preset-env](https://github.com/babel/babel/tree/master/packages/babel-preset-env) features in `.babelrc`:

```js
{
  "presets": ["@babel/preset-env"]
}
```

Then, add this to `scripts` in your `package.json`:

```js
{
  ...
  "scripts": {
    ...
    "test": "jest",
    "test:watch": "npm test -- --watch"
  },
  ...
}
```

and run `npm test` to run it once, or `npm run test:watch` to test on every file change.

## Action Creators & Thunks

In Redux, action creators are functions which return plain objects. Our recommendation is not to write action creators manually, but instead have them generated automatically by [`createSlice`](https://redux-toolkit.js.org/api/createSlice#return-value), or created via [`createAction`](https://redux-toolkit.js.org/api/createAction) from [`@reduxjs/toolkit`](https://redux-toolkit.js.org/introduction/getting-started). As such, you should not feel the need to test action creators by themselves (the Redux Toolkit maintainers have already done that for you!).

The return value of action creators is considered an implementation detail within your application, and when following an integration testing style, do not need explicit tests.

Similarly for thunks using [Redux Thunk](https://github.com/gaearon/redux-thunk), our recommendation is not to write them manually, but instead use [`createAsyncThunk`](https://redux-toolkit.js.org/api/createAsyncThunk) from [`@reduxjs/toolkit`](https://redux-toolkit.js.org/introduction/getting-started). The thunk handles dispatching the appropriate `pending`, `fulfilled` and `rejected` action types for you based on the lifecycle of the thunk.

We consider thunk behavior to be an implementation detail of the application, and recommend that it be covered by testing the group of components (or whole app) using it, rather than testing the thunk in isolation.

Our recommendation is to mock async requests at the `fetch/xhr` level using tools like [`msw`](https://mswjs.io/), [`miragejs`](https://miragejs.com/), [`jest-fetch-mock`](https://github.com/jefflau/jest-fetch-mock#readme), [`fetch-mock`](https://www.wheresrhys.co.uk/fetch-mock/), or similar. By mocking requests at this level, none of the thunk logic has to change in a test - the thunk still tries to make a "real" async request, it just gets intercepted. See the [components example](#example-1) for an example of testing a component which internally includes the behavior of a thunk.

:::info

If you prefer, or are otherwise required to write unit tests for your action creators or thunks, refer to the tests that Redux Toolkit uses for [`createAction`](https://github.com/reduxjs/redux-toolkit/blob/635d6d5e513e13dd59cd717f600d501b30ca2381/src/tests/createAction.test.ts) and [`createAsyncThunk`](https://github.com/reduxjs/redux-toolkit/blob/635d6d5e513e13dd59cd717f600d501b30ca2381/src/tests/createAsyncThunk.test.ts).

:::

## Reducers

Reducers are pure functions that return the new state after applying the action to the previous state. In the majority of cases, the reducer is an implementation detail that does not need explicit tests. However, if your reducer contains particularly complex logic that you would like the confidence of having unit tests for, reducers can be easily tested.

Because reducers are pure functions, testing them should be straightforward. Call the reducer with a specific input `state` and `action`, and assert that the result state matches expectations.

#### Example

```js
import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    text: "Use Redux",
    completed: false,
    id: 0,
  },
];

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    todoAdded(state, action: PayloadAction<string>) {
      state.push({
        id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
        completed: false,
        text: action.payload,
      });
    },
  },
});

export const { todoAdded } = todosSlice.actions;

export default todosSlice.reducer;
```

can be tested like:

```js
import reducer, { todoAdded } from "./todosSlice";

test("should return the initial state", () => {
  expect(reducer(undefined, {})).toEqual([
    {
      text: "Use Redux",
      completed: false,
      id: 0,
    },
  ]);
});

test("should handle a todo being added to an empty list", () => {
  const previousState = [];
  expect(reducer(previousState, todoAdded("Run the tests"))).toEqual([
    {
      text: "Run the tests",
      completed: false,
      id: 0,
    },
  ]);
});

test("should handle a todo being added to an existing list", () => {
  const previousState = [
    {
      text: "Run the tests",
      completed: true,
      id: 0,
    },
  ];
  expect(reducer(previousState, todoAdded("Use Redux"))).toEqual([
    {
      text: "Run the tests",
      completed: true,
      id: 0,
    },
    {
      text: "Use Redux",
      completed: false,
      id: 1,
    },
  ]);
});
```

## Components

Our recommendation for testing components that include Redux code is via integration tests that include everything working together, with assertions aimed at verifying that the app behaves the way you expect when the user interacts with it in a given manner.

First, we will install [React Testing Library](https://testing-library.com/docs/react-testing-library/intro). React Testing Library is a simple and complete React DOM testing utility that encourages good testing practices. It uses react-dom's `render` function and `act` from react-dom/tests-utils.

```sh
npm install --save-dev @testing-library/react
```

If you are using jest, we also recommend installing [jest-dom](https://github.com/testing-library/jest-dom) as it provides a set of custom jest matchers that you can use to extend jest. These will make your tests more declarative, clear to read and to maintain. jest-dom is being used in the examples below.

```sh
npm install --save-dev @testing-library/jest-dom
```

#### Example

Consider the following `userSlice` slice and `App` component:

```js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { userAPI } from "./userAPI";

export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
  const response = await userAPI.fetchUser();
  return response.data;
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "No user",
    status: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.status = "complete";
      state.name = action.payload;
    });
  },
});

export const selectUser = (state) => state.user.name;
export const selectUserFetchStatus = (state) => state.user.status;

export default userSlice.reducer;
```

```jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser, selectUser, selectUserFetchStatus } from "./userSlice";

export default function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const userFetchStatus = useSelector(selectUserFetchStatus);

  return (
    <div>
      {/* Display the current user name */}
      <div>{user}</div>
      {/* On button click, dispatch a thunk action to fetch a user */}
      <button onClick={() => dispatch(fetchUser())}>Fetch user</button>
      {/* At any point if we're fetching a user, display that on the UI */}
      {userFetchStatus === "loading" && <div>Fetching user...</div>}
    </div>
  );
}
```

This app involves thunks, reducers and selectors. All of these can be tested by writing an integration test with the following in mind:

- Upon first loading the app, there should be no user yet - we should see 'No user' on the screen.
- After clicking the button that says 'Fetch user', we expect it to start fetching the user. We should see 'Fetching user...' displayed on the screen.
- After some time, the user should be received. We should no longer see 'Fetching user...', but instead should see the expected user's name based on the response from our API.

Writing our tests to focus on the above as a whole, we can avoid mocking as much of the app as possible. We will also have confidence that the critical behavior of our app does what we expect it to when interacted with in the way we expect the user to use the app.

To test the component, we `render` it into the DOM, and assert that the app responds to interactions in the way we expect the user to use the app. We can use the `wrapper` option in the `render` function and export our own `render` function as explained in React Testing Library's [setup docs](https://testing-library.com/docs/react-testing-library/setup).

Our `render` function can look like this:

```jsx
// test-utils.jsx
import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
// Import your own reducer
import userReducer from "../userSlice";

function render(
  ui,
  {
    preloadedState,
    store = configureStore({ reducer: { user: userReducer }, preloadedState }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from "@testing-library/react";
// override render method
export { render };
```

And our test can use our exported `render` function to test the criteria of our integration test:

```jsx
import React from "react";
import { rest } from "msw";
import { setupServer } from "msw/node";
// We're using our own custom render function and not RTL's render.
// Our custom utils also re-export everything from RTL
// so we can import fireEvent and screen here as well
import { render, fireEvent, screen } from "../../test-utils";
import App from "../../containers/App";

// We use msw to intercept the network request during the test,
// and return the response 'John Smith' after 150ms
// when receiving a get request to the `/api/user` endpoint
export const handlers = [
  rest.get("/api/user", (req, res, ctx) => {
    return res(ctx.json("John Smith"), ctx.delay(150));
  }),
];

const server = setupServer(...handlers);

// Enable API mocking before tests.
beforeAll(() => server.listen());

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers());

// Disable API mocking after the tests are done.
afterAll(() => server.close());

test("fetches & receives a user after clicking the fetch user button", async () => {
  render(<App />);

  // should show no user initially, and not be fetching a user
  expect(screen.getByText(/no user/i)).toBeInTheDocument();
  expect(screen.queryByText(/Fetching user\.\.\./i)).not.toBeInTheDocument();

  // after clicking the 'Fetch user' button, it should now show that it is fetching the user
  fireEvent.click(screen.getByRole("button", { name: /Fetch user/i }));
  expect(screen.getByText(/no user/i)).toBeInTheDocument();

  // after some time, the user should be received
  expect(await screen.findByText(/John Smith/i)).toBeInTheDocument();
  expect(screen.queryByText(/no user/i)).not.toBeInTheDocument();
  expect(screen.queryByText(/Fetching user\.\.\./i)).not.toBeInTheDocument();
});
```

In this test, we have completely avoided testing any Redux code directly, treating it as an implementation detail. As a result, we are free to re-factor the _implementation_, while our tests will continue to pass and avoid false negatives (tests that fail despite the app still behaving how we want it to). We might change our state structure, convert our slice to use [RTK-Query](https://redux-toolkit.js.org/rtk-query/overview), or remove Redux entirely, and our tests will still pass. We have a strong degree of confidence that if we change some code and our tests report a failure, then our app really _is_ broken.

## Middleware

Middleware functions wrap behavior of `dispatch` calls in Redux, so to test this modified behavior we need to mock the behavior of the `dispatch` call.

#### Example

First, we'll need a middleware function. This is similar to the real [redux-thunk](https://github.com/gaearon/redux-thunk/blob/master/src/index.js).

```js
const thunk =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    if (typeof action === "function") {
      return action(dispatch, getState);
    }

    return next(action);
  };
```

We need to create a fake `getState`, `dispatch`, and `next` functions. We use `jest.fn()` to create stubs, but with other test frameworks you would likely use [Sinon](https://sinonjs.org/).

The invoke function runs our middleware in the same way Redux does.

```js
const create = () => {
  const store = {
    getState: jest.fn(() => ({})),
    dispatch: jest.fn(),
  };
  const next = jest.fn();

  const invoke = (action) => thunk(store)(next)(action);

  return { store, next, invoke };
};
```

We test that our middleware is calling the `getState`, `dispatch`, and `next` functions at the right time.

```js
test("passes through non-function action", () => {
  const { next, invoke } = create();
  const action = { type: "TEST" };
  invoke(action);
  expect(next).toHaveBeenCalledWith(action);
});

test("calls the function", () => {
  const { invoke } = create();
  const fn = jest.fn();
  invoke(fn);
  expect(fn).toHaveBeenCalled();
});

test("passes dispatch and getState", () => {
  const { store, invoke } = create();
  invoke((dispatch, getState) => {
    dispatch("TEST DISPATCH");
    getState();
  });
  expect(store.dispatch).toHaveBeenCalledWith("TEST DISPATCH");
  expect(store.getState).toHaveBeenCalled();
});
```

In some cases, you will need to modify the `create` function to use different mock implementations of `getState` and `next`.

## Further Information

- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro): React Testing Library is a very light-weight solution for testing React components. It provides light utility functions on top of react-dom and react-dom/test-utils, in a way that encourages better testing practices. Its primary guiding principle is: "The more your tests resemble the way your software is used, the more confidence they can give you."

- [React Test Utils](https://reactjs.org/docs/test-utils.html): ReactTestUtils makes it easy to test React components in the testing framework of your choice. React Testing Library uses the `act` function exported by React Test Utils.

- [Blogged Answers: The Evolution of Redux Testing Approaches](https://blog.isquaredsoftware.com/2021/06/the-evolution-of-redux-testing-approaches/): Mark Erikson's thoughts on how Redux testing has evolved from 'isolation' to 'integration'.

- [Testing Implementation Details](https://kentcdodds.com/blog/testing-implementation-details): Blog post by Kent C. Dodds on why he recommends to avoid testing implementation details.

---

id: deriving-data-selectors
title: Deriving Data with Selectors
description: 'Usage > Redux Logic > Selectors: deriving data from the Redux state'

---

:::tip What You'll Learn

- Why good Redux architecture keeps state minimal and derives additional data
- Principles of using selector functions to derive data and encapsulate lookups
- How to use the Reselect library to write memoized selectors for optimization
- Advanced techniques for using Reselect
- Additional tools and libraries for creating selectors
- Best practices for writing selectors

:::

## Deriving Data

We specifically recommend that Redux apps should [keep the Redux state minimal, and derive additional values from that state whenever possible](../style-guide/style-guide.md#keep-state-minimal-and-derive-additional-values).

This includes things like calculating filtered lists or summing up values. As an example, a todo app would keep an original list of todo objects in state, but derive a filtered list of todos outside the state whenever the state is updated. Similarly, a check for whether all todos have been completed, or number of todos remaining, can be calculated outside the store as well.

This has several benefits:

- The actual state is easier to read
- Less logic is needed to calculate those additional values and keep them in sync with the rest of the data
- The original state is still there as a reference and isn't being replaced

:::tip

This is _also_ a good principle for React state as well! Many times users tried to define a `useEffect` hook that waits for a state value to change, and then sets state with some derived value like `setAllCompleted(allCompleted)`. Instead, that value can be derived during the rendering process and used directly, without having to save the value into state at all:

```js
function TodoList() {
  const [todos, setTodos] = useState([]);

  // highlight-start
  // Derive the data while rendering
  const allTodosCompleted = todos.every((todo) => todo.completed);
  // highlight-end

  // render with this value
}
```

:::

## Calculating Derived Data with Selectors

In a typical Redux application, the logic for deriving data is usually written as functions we call **_selectors_**.

Selectors are primarily used to encapsulate logic for looking up specific values from state, logic for actually deriving values, and improving performance by avoiding unnecessary recalculations.

You are not _required_ to use selectors for all state lookups, but they are a standard pattern and widely used.

### Basic Selector Concepts

**A "selector function" is any function that accepts the Redux store state (or part of the state) as an argument, and returns data that is based on that state.**

**Selectors don't have to be written using a special library**, and it doesn't matter whether you write them as arrow functions or the `function` keyword. For example, all of these are valid selector functions:

```js
// Arrow function, direct lookup
const selectEntities = (state) => state.entities;

// Function declaration, mapping over an array to derive values
function selectItemIds(state) {
  return state.items.map((item) => item.id);
}

// Function declaration, encapsulating a deep lookup
function selectSomeSpecificField(state) {
  return state.some.deeply.nested.field;
}

// Arrow function, deriving values from an array
const selectItemsWhoseNamesStartWith = (items, namePrefix) =>
  items.filter((item) => item.name.startsWith(namePrefix));
```

A selector function can have any name you want. However, [**we recommend prefixing selector function names with the word `select` combined with a description of the value being selected**](../style-guide/style-guide.md#name-selector-functions-as-selectthing). Typical examples of this would look like **`selectTodoById`**, **`selectFilteredTodos`**, and **`selectVisibleTodos`**.

If you've used [the `useSelector` hook from React-Redux](../tutorials/fundamentals/part-5-ui-and-react.md), you're probably already familiar with the basic idea of a selector function - the functions that we pass to `useSelector` must be selectors:

```js
function TodoList() {
  // highlight-start
  // This anonymous arrow function is a selector!
  const todos = useSelector((state) => state.todos);
  // highlight-end
}
```

Selector functions are typically defined in two different parts of a Redux application:

- In slice files, alongside the reducer logic
- In component files, either outside the component, or inline in `useSelector` calls

A selector function can be used anywhere you have access to the entire Redux root state value. This includes the `useSelector` hook, the `mapState` function for `connect`, middleware, thunks, and sagas. For example, thunks and middleware have access to the `getState` argument, so you can call a selector there:

```js
function addTodosIfAllowed(todoText) {
  return (dispatch, getState) => {
    const state = getState();
    const canAddTodos = selectCanAddTodos(state);

    if (canAddTodos) {
      dispatch(todoAdded(todoText));
    }
  };
}
```

It's not typically possible to use selectors inside of reducers, because a slice reducer only has access to its own slice of the Redux state, and most selectors expect to be given the _entire_ Redux root state as an argument.

### Encapsulating State Shape with Selectors

The first reason to use selector functions is for encapsulation and reusability when dealing with your Redux state shape.

Let's say that one of your `useSelector` hooks makes a very specific lookup into part of your Redux state:

```js
const data = useSelector((state) => state.some.deeply.nested.field);
```

That is legal code, and will run fine. But, it might not be the best idea architecturally. Imagine that you've got several components that need to access that field. What happens if you need to make a change to where that piece of state lives? You would now have to go change _every_ `useSelector` hook that references that value. So, in the same way that [we recommend using action creators to encapsulate details of creating actions](../style-guide/style-guide.md#use-action-creators), we recommend defining reusable selectors to encapsulate the knowledge of where a given piece of state lives. Then, you can use a given selector function many times in the codebase, anywhere that your app needs to retrieve that particular data.

**Ideally, only your reducer functions and selectors should know the exact state structure, so if you change where some state lives, you would only need to update those two pieces of logic**.

Because of this, it's often a good idea to define reusable selectors directly inside slice files, rather than always defining them inside of a component.

One common description of selectors is that they're like **"queries into your state"**. You don't care about exactly how the query came up with the data you needed, just that you asked for the data and got back a result.

### Optimizing Selectors with Memoization

Selector functions often need to perform relatively "expensive" calculations, or create derived values that are new object and array references. This can be a concern for application performance, for several reasons:

- Selectors used with `useSelector` or `mapState` will be re-run after every dispatched action, regardless of what section of the Redux root state was actually updated. Re-running expensive calculations when the input state sections didn't change is a waste of CPU time, and it's very likely that the inputs won't have changed most of the time anyway.
- `useSelector` and `mapState` rely on `===` reference equality checks of the return values to determine if the component needs to re-render. If a selector _always_ returns new references, it will force the component to re-render even if the derived data is effectively the same as last time. This is especially common with array operations like `map()` and `filter()`, which return new array references.

As an example, this component is written badly, because its `useSelector` call _always_ returns a new array reference. That means the component will re-render after _every_ dispatched action, even if the input `state.todos` slice hasn't changed:

```js
function TodoList() {
  // highlight-start
  // ❌ WARNING: this _always_ returns a new reference, so it will _always_ re-render!
  const completedTodos = useSelector((state) =>
    state.todos.map((todo) => todo.completed)
  );
  // highlight-end
}
```

Another example is a component that needs to do some "expensive" work to transform data:

```js
function ExampleComplexComponent() {
  const data = useSelector((state) => {
    const initialData = state.data;
    const filteredData = expensiveFiltering(initialData);
    const sortedData = expensiveSorting(filteredData);
    const transformedData = expensiveTransformation(sortedData);

    return transformedData;
  });
}
```

Similarly, this "expensive" logic will re-run after _every_ dispatched action. Not only will it probably create new references, but it's work that doesn't need to be done unless `state.data` actually changes.

Because of this, we need a way to write optimized selectors that can avoid recalculating results if the same inputs are passed in. This is where the idea of **_memoization_** comes in.

**Memoization is a form of caching**. It involves tracking inputs to a function, and storing the inputs and the results for later reference. If a function is called with the same inputs as before, the function can skip doing the actual work, and return the same result it generated the last time it received those input values. This optimizes performance by only doing work if inputs have changed, and consistently returning the same result references if the inputs are the same.

Next, we'll look at some options for writing memoized selectors.

## Writing Memoized Selectors with Reselect

The Redux ecosystem has traditionally used a library called [**Reselect**](https://github.com/reduxjs/reselect) to create memoized selector functions. There also are other similar libraries, as well as multiple variations and wrappers around Reselect - we'll look at those later.

### `createSelector` Overview

Reselect provides a function called [`createSelector`](https://github.com/reduxjs/reselect#createselectorinputselectors--inputselectors-resultfunc) to generate memoized selectors. `createSelector` accepts one or more "input selector" functions, plus an "output selector" function, and returns a new selector function for you to use.

`createSelector` is included as part of [our official Redux Toolkit package](https://redux-toolkit.js.org), and is re-exported for ease of use.

`createSelector` can accept multiple input selectors, which can be provided as separate arguments or as an array. The results from all the input selectors are provided as separate arguments to the output selector:

```js
const selectA = (state) => state.a;
const selectB = (state) => state.b;
const selectC = (state) => state.c;

const selectABC = createSelector([selectA, selectB, selectC], (a, b, c) => {
  // do something with a, b, and c, and return a result
  return a + b + c;
});

// Call the selector function and get a result
const abc = selectABC(state);

// could also be written as separate arguments, and works exactly the same
const selectABC2 = createSelector(selectA, selectB, selectC, (a, b, c) => {
  // do something with a, b, and c, and return a result
  return a + b + c;
});
```

When you call the selector, Reselect will run your input selectors with all of the arguments you gave, and looks at the returned values. If any of the results are `===` different than before, it will re-run the output selector, and pass in those results as the arguments. If all of the results are the same as the last time, it will skip re-running the output selector, and just return the cached final result from before.

This means that **"input selectors" should usually just extract and return values, and the "output selector" should do the transformation work**.

:::caution

A somewhat common mistake is to write an "input selector" that extracts a value or does some derivation, and an "output selector" that just returns its result:

```js
// ❌ BROKEN: this will not memoize correctly, and does nothing useful!
const brokenSelector = createSelector(
  (state) => state.todos,
  (todos) => todos
);
```

**Any "output selector" that just returns its inputs is incorrect!** The output selector should always have the transformation logic.

Similarly, a memoized selector should _never_ use `state => state` as an input! That will force the selector to always recalculate.
:::

In typical Reselect usage, you write your top-level "input selectors" as plain functions, and use `createSelector` to create memoized selectors that look up nested values:

```js
const state = {
  a: {
    first: 5,
  },
  b: 10,
};

const selectA = (state) => state.a;
const selectB = (state) => state.b;

const selectA1 = createSelector([selectA], (a) => a.first);

const selectResult = createSelector([selectA1, selectB], (a1, b) => {
  console.log("Output selector running");
  return a1 + b;
});

const result = selectResult(state);
// Log: "Output selector running"
console.log(result);
// 15

const secondResult = selectResult(state);
// No log output
console.log(secondResult);
// 15
```

Note that the second time we called `selectResult`, the "output selector" didn't execute. Because the results of `selectA1` and `selectB` were the same as the first call, `selectResult` was able to return the memoized result from the first call.

### `createSelector` Behavior

It's important to note that by default, **`createSelector` only memoizes the most recent set of parameters**. That means that if you call a selector repeatedly with different inputs, it will still return a result, but it will have to keep re-running the output selector to produce the result:

```js
const a = someSelector(state, 1); // first call, not memoized
const b = someSelector(state, 1); // same inputs, memoized
const c = someSelector(state, 2); // different inputs, not memoized
const d = someSelector(state, 1); // different inputs from last time, not memoized
```

Also, you can pass multiple arguments into a selector. Reselect will call all of the input selectors with those exact inputs:

```js
const selectItems = (state) => state.items;
const selectItemId = (state, itemId) => itemId;

const selectItemById = createSelector(
  [selectItems, selectItemId],
  (items, itemId) => items[itemId]
);

const item = selectItemById(state, 42);

/*
Internally, Reselect does something like this:

const firstArg = selectItems(state, 42);  
const secondArg = selectItemId(state, 42);  
  
const result = outputSelector(firstArg, secondArg);  
return result;  
*/
```

Because of this, **it's important that all of the "input selectors" you provide should accept the same types of parameters**. Otherwise, the selectors will break.

```js
const selectItems = state => state.items;

// expects a number as the second argument
const selectItemId = (state, itemId) => itemId;

// expects an object as the second argument
const selectOtherField (state, someObject) => someObject.someField;

const selectItemById = createSelector(
    [selectItems, selectItemId, selectOtherField],
    (items, itemId, someField) => items[itemId]
);
```

In this example, `selectItemId` expects that its second argument will be some simple value, while `selectOtherField` expects that the second argument is an object. If you call `selectItemById(state, 42)`, `selectOtherField` will break because it's trying to access `42.someField`.

### Reselect Usage Patterns and Limitations

#### Nesting Selectors

It's possible to take selectors generated with `createSelector`, and use them as inputs for other selectors as well. In this example, the `selectCompletedTodos` selector is used as an input to `selectCompletedTodoDescriptions`:

```js
const selectTodos = (state) => state.todos;

const selectCompletedTodos = createSelector([selectTodos], (todos) =>
  todos.filter((todo) => todo.completed)
);

const selectCompletedTodoDescriptions = createSelector(
  [selectCompletedTodos],
  (completedTodos) => completedTodos.map((todo) => todo.text)
);
```

#### Passing Input Parameters

A Reselect-generated selector function can be called with as many arguments as you want: `selectThings(a, b, c, d, e)`. However, what matters for re-running the output is not the number of arguments, or whether the arguments themselves have changed to be new references. Instead, it's about the "input selectors" that were defined, and whether _their_ results have changed. Similarly, the arguments for the "output selector" are solely based on what the input selectors return.

This means that if you want to pass additional parameters through to the output selector, you must define input selectors that extract those values from the original selector arguments:

```js
const selectItemsByCategory = createSelector(
  [
    // Usual first input - extract value from `state`
    (state) => state.items,
    // Take the second arg, `category`, and forward to the output selector
    (state, category) => category,
  ],
  // Output selector gets (`items, category)` as args
  (items, category) => items.filter((item) => item.category === category)
);
```

For consistency, you may want to consider passing additional parameters to a selector as a single object, such as `selectThings(state, otherArgs)`, and then extracting values from the `otherArgs` object.

#### Selector Factories

**`createSelector` only has a default cache size of 1, and this is per each unique instance of a selector**. This creates problems when a single selector function needs to get reused in multiple places with differing inputs.

One option is to create a "selector factory" - a function that runs `createSelector()` and generates a new unique selector instance every time it's called:

```js
const makeSelectItemsByCategory = () => {
  const selectItemsByCategory = createSelector(
    [(state) => state.items, (state, category) => category],
    (items, category) => items.filter((item) => item.category === category)
  );
  return selectItemsByCategory;
};
```

This is particularly useful when multiple similar UI components need to derive different subsets of the data based on props.

## Alternative Selector Libraries

While Reselect is the most widely used selector library with Redux, there are many other libraries that solve similar problems, or expand on Reselect's capabilities.

### `proxy-memoize`

`proxy-memoize` is a relatively new memoized selector library that uses a unique implementation approach. It relies on ES6 `Proxy` objects to track attempted reads of nested values, then compares only the nested values on later calls to see if they've changed. This can provide better results than Reselect in some cases.

A good example of this is a selector that derives an array of todo descriptions:

```js
import { createSelector } from "reselect";

const selectTodoDescriptionsReselect = createSelector(
  [(state) => state.todos],
  (todos) => todos.map((todo) => todo.text)
);
```

Unfortunately, this will recalculate the derived array if any other value inside of `state.todos` changes, such as toggling a `todo.completed` flag. The _contents_ of the derived array are identical, but because the input `todos` array changed, it has to calculate a new output array, and that has a new reference.

The same selector with `proxy-memoize` might look like:

```js
import memoize from "proxy-memoize";

const selectTodoDescriptionsProxy = memoize((state) =>
  state.todos.map((todo) => todo.text)
);
```

Unlike Reselect, `proxy-memoize` can detect that only the `todo.text` fields are being accessed, and will only recalculate the rest if one of the `todo.text` fields changed.

It also has a built-in `size` option, which lets you set the desired cache size for a single selector instance.

It has some tradeoffs and differences from Reselect:

- All values are passed in as a single object argument
- It requires that the environment supports ES6 `Proxy` objects (no IE11)
- It's more magical, whereas Reselect is more explicit
- There are some edge cases regarding the `Proxy`-based tracking behavior
- It's newer and less widely used

All that said, **we officially encourage considering using `proxy-memoize` as a viable alternative to Reselect**.

### `re-reselect`

<https://github.com/toomuchdesign/re-reselect> improves Reselect's caching behavior, by allowing you to define a "key selector". This is used to manage multiple instances of Reselect selectors internally, which can help simplify usage across multiple components.

```js
import { createCachedSelector } from "re-reselect";

const getUsersByLibrary = createCachedSelector(
  // inputSelectors
  getUsers,
  getLibraryId,

  // resultFunc
  (users, libraryId) => expensiveComputation(users, libraryId)
)(
  // re-reselect keySelector (receives selectors' arguments)
  // Use "libraryName" as cacheKey
  (_state_, libraryName) => libraryName
);
```

### `reselect-tools`

Sometimes it can be hard to trace how multiple Reselect selectors relate to each other, and what caused a selector to recalculate. <https://github.com/skortchmark9/reselect-tools> provides a way to trace selector dependencies, and its own DevTools to help visualize those relationships and check selector values.

### `redux-views`

<https://github.com/josepot/redux-views> is similar to `re-reselect`, in that it provides a way to select unique keys for each item for consistent caching. It was designed as a near-drop-in replacement for Reselect, and actually proposed as an option for a potential Reselect version 5.

### Reselect v5 Proposal

We've opened up a roadmap discussion in the Reselect repo to figure out potential enhancements to a future version of Reselect, such as improving the API to better support larger cache sizes, rewriting the codebase in TypeScript, and other possible improvements. We'd welcome additional community feedback in that discussion:

[**Reselect v5 Roadmap Discussion: Goals and API Design**](https://github.com/reduxjs/reselect/discussions/491)

## Using Selectors with React-Redux

### Calling Selectors with Parameters

It's common to want to pass additional arguments to a selector function. However, `useSelector` always calls the provided selector function with one argument - the Redux root `state`.

The simplest solution is to pass an anonymous selector to `useSelector`, and then immediately call the real selector with both `state` and any additional arguments:

```js
import { selectTodoById } from "./todosSlice";

function TodoListitem({ todoId }) {
  // highlight-start
  // Captures `todoId` from scope, gets `state` as an arg, and forwards both
  // to the actual selector function to extract the result
  const todo = useSelector((state) => selectTodoById(state, todoId));
  // highlight-end
}
```

### Creating Unique Selector Instances

There are many cases where a selector function needs to be reused across multiple components. If the components will all be calling the selector with different arguments, it will break memoization - the selector never sees the same arguments multiple times in a row, and thus can never return a cached value.

The standard approach here is to create a unique instance of a memoized selector in the component, and then use that with `useSelector`. That allows each component to consistently pass the same arguments to its own selector instance, and that selector can correctly memoize the results.

For function components, this is normally done with `useMemo` or `useCallback`:

```js
import { makeSelectItemsByCategory } from "./categoriesSlice";

function CategoryList({ category }) {
  // Create a new memoized selector, for each component instance, on mount
  const selectItemsByCategory = useMemo(makeSelectItemsByCategory, []);

  const itemsByCategory = useSelector((state) =>
    selectItemsByCategory(state, category)
  );
}
```

For class components with `connect`, this can be done with an advanced "factory function" syntax for `mapState`. If the `mapState` function returns a new function on its first call, that will be used as the real `mapState` function. This provides a closure where you can create a new selector instance:

```js
import { makeSelectItemsByCategory } from "./categoriesSlice";

const makeMapState = (state, ownProps) => {
  // Closure - create a new unique selector instance here,
  // and this will run once for every component instance
  const selectItemsByCategory = makeSelectItemsByCategory();

  const realMapState = (state, ownProps) => {
    return {
      itemsByCategory: selectItemsByCategory(state, ownProps.category),
    };
  };

  // Returning a function here will tell `connect` to use it as
  // `mapState` instead of the original one given to `connect`
  return realMapState;
};

export default connect(makeMapState)(CategoryList);
```

## Using Selectors Effectively

While selectors are a common pattern in Redux applications, they are often misused or misunderstood. Here are some guidelines for using selector functions correctly.

### Define Selectors Alongside Reducers

Selector functions are often defined in the UI layer, directly inside of `useSelector` calls. However, this means that there can be repetition between selectors defined in different files, and the functions are anonymous.

Like any other function, you can extract an anonymous function outside the component to give it a name:

```js
// highlight-next-line
const selectTodos = (state) => state.todos;

function TodoList() {
  // highlight-next-line
  const todos = useSelector(selectTodos);
}
```

However, multiple parts of the application may want to use the same lookups. Also, conceptually, we may want to keep the knowledge of how the `todos` state is organized as an implementation detail inside the `todosSlice` file, so that it's all in one place.

Because of this, **it's a good idea to define reusable selectors alongside their corresponding reducers**. In this case, we could export `selectTodos` from the `todosSlice` file:

```js title="src/features/todos/todosSlice.js"
import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    todoAdded(state, action) {
      state.push(action.payload);
    },
  },
});

export const { todoAdded } = todosSlice.actions;
export default todosSlice.reducer;

// highlight-start
// Export a reusable selector here
export const selectTodos = (state) => state.todos;
// highlight-end
```

That way, if we happen to make an update to the structure of the todos slice state, the relevant selectors are right here and can be updated at the same time, with minimal changes to any other parts of the app.

### Balance Selector Usage

It's possible to add _too many_ selectors to an application. **Adding a separate selector function for every single field is not a good idea!** That ends up turning Redux into something resembling a Java class with getter/setter functions for every field. It's not going to _improve_ the code, and it's probably going to make the code _worse_ - maintaining all those extra selectors is a lot of additional effort, and it will be harder to trace what values are being used where.

Similarly, **don't make every single selector memoized!**. Memoization is only needed if you are truly _deriving_ results, _and_ if the derived results would likely create new references every time. **A selector function that does a direct lookup and return of a value should be a plain function, not memoized**.

Some examples of when and when not to memoize:

```js
// ❌ DO NOT memoize: will always return a consistent reference
const selectTodos = (state) => state.todos;
const selectNestedValue = (state) => state.some.deeply.nested.field;
const selectTodoById = (state, todoId) => state.todos[todoId];

// ❌ DO NOT memoize: deriving data, but will return a consistent result
const selectItemsTotal = (state) => {
  return state.items.reduce((result, item) => {
    return result + item.total;
  }, 0);
};
const selectAllCompleted = (state) =>
  state.todos.every((todo) => todo.completed);

// ✅ SHOULD memoize: returns new references when called
const selectTodoDescriptions = (state) => state.todos.map((todo) => todo.text);
```

### Reshape State as Needed for Components

Selectors do not have to limit themselves to direct lookups - they can perform _any_ needed transformation logic inside. This is especially valuable to help prepare data that is needed by specific components.

A Redux state often has data in a "raw" form, because [the state should be kept minimal](#deriving-data), and many components may need to present the same data differently. You can use selectors to not only _extract_ state, but to _reshape_ it as needed for this specific component's needs. That could include pulling data from multiple slices of the root state, extracting specific values, merging different pieces of the data together, or any other transformations that are helpful.

It's fine if a component has some of this logic too, but it can be beneficial to pull all of this transformation logic out into separate selectors for better reuse and testability.

### Globalize Selectors if Needed

There's an inherent imbalance between writing slice reducers and selectors. Slice reducers only know about their one portion of the state - to the reducer, its `state` is all that exists, such as the array of todos in a `todoSlice`. Selectors, on the other hand, _usually_ are written to take the entire Redux root state as their argument. This means that they have to know where in the root state this slice's data is kept, such as `state.todos`, even though that's not really defined until the root reducer is created (typically in the app-wide store setup logic).

A typical slice file often has both of these patterns side-by-side. That's fine, especially in small or midsize apps. But, depending on your app's architecture, you may want to further abstract the selectors so that they _don't_ know where the slice state is kept - it has to be handed to them.

We refer to this pattern as "globalizing" selectors. A **"globalized" selector** is one that accepts the Redux root state as an argument, and knows how to find the relevant slice of state to perform the real logic. A **"localized" selector** is one that expects _just a piece_ of the state as an argument, without knowing or caring where that is in the root state:

```js
// "Globalized" - accepts root state, knows to find data at `state.todos`
const selectAllTodosCompletedGlobalized = (state) =>
  state.todos.every((todo) => todo.completed);

// "Localized" - only accepts `todos` as argument, doesn't know where that came from
const selectAllTodosCompletedLocalized = (todos) =>
  todos.every((todo) => todo.completed);
```

"Localized" selectors can be turned into "globalized" selectors by wrapping them in a function that knows how to retrieve the right slice of state and pass it onwards.

Redux Toolkit's [`createEntityAdapter` API](https://redux-toolkit.js.org/api/createEntityAdapter#selector-functions) is an example of this pattern. If you call `todosAdapter.getSelectors()`, with no argument, it returns a set of "localized" selectors that expect the _entity slice state_ as their argument. If you call `todosAdapter.getSelectors(state => state.todos)`, it returns a set of "globalized" selectors that expect to be called with the _Redux root state_ as their argument.

There may also be other benefits to having "localized" versions of selectors as well. For example, say we have an advanced scenario of keeping multiple copies of `createEntityAdapter` data nested in the store, such as a `chatRoomsAdapter` that tracks rooms, and each room definition then has a `chatMessagesAdapter` state to store the messages. We can't directly look up the messages for each room - we first have to retrieve the room object, then select the messages out of that. This is easier if we have a set of "localized" selectors for the messages.

## Further Information

- Selector libraries:
  - Reselect: <https://github.com/reduxjs/reselect>
  - `proxy-memoize`: <https://github.com/dai-shi/proxy-memoize>
  - `re-reselect`: <https://github.com/toomuchdesign/re-reselect>
  - `reselect-tools`: <https://github.com/skortchmark9/reselect-tools>
  - `redux-views`: <https://github.com/josepot/redux-views>
- [Reselect v5 Roadmap Discussion: Goals and API Design](https://github.com/reduxjs/reselect/discussions/491)
- Randy Coulman has an excellent series of blog posts on selector architecture and different approaches for globalizing Redux selectors, with tradeoffs:
  - [Encapsulating the Redux State Tree](https://randycoulman.com/blog/2016/09/13/encapsulating-the-redux-state-tree/)
  - [Redux Reducer/Selector Asymmetry](https://randycoulman.com/blog/2016/09/20/redux-reducer-selector-asymmetry/)
  - [Modular Reducers and Selectors](https://randycoulman.com/blog/2016/09/27/modular-reducers-and-selectors/)
  - [Globalizing Redux Selectors](https://randycoulman.com/blog/2016/11/29/globalizing-redux-selectors/)
  - [Globalizing Curried Selectors](https://randycoulman.com/blog/2016/12/27/globalizing-curried-selectors/)
  - [Solving Circular Dependencies in Modular Redux](https://randycoulman.com/blog/2018/06/12/solving-circular-dependencies-in-modular-redux/)

---

id: index
title: Usage Guides Index
sidebar_label: Usage Guides Index

---

# Usage Guides

The Usage Guides section provides practical guidance on how to correctly use Redux in real-world applications, including project setup and architecture, patterns, practices, and techniques.

:::info Prerequisites

The pages in this category assume you understand the core Redux terms and concepts explained in [the "Redux Fundamentals" tutorial](../tutorials/fundamentals/part-1-overview.md), including actions, reducers, stores, immutability, React-Redux, and async logic.

:::

## Setup and Organization

This section covers information on how to set up and organize Redux-based projects.

- [Configuring Your Store](ConfiguringYourStore.md)
- [Code Splitting](CodeSplitting.md)
- [Server Rendering](ServerRendering.md)
- [Isolating Redux Sub-Apps](IsolatingSubapps.md)

## Code Quality

This section provides information on tools and techniques used to improve the quality of your Redux code.

- [Usage with TypeScript](UsageWithTypescript.md)
- [Writing Tests](WritingTests.md)
- [Troubleshooting](Troubleshooting.md)

## Redux Logic and Patterns

This section provides information about typical Redux patterns and approaches for writing different kinds of Redux logic.

- [Structuring Reducers](structuring-reducers/StructuringReducers.md)
- [Reducing Boilerplate](ReducingBoilerplate.md)
- [Deriving Data with Selectors](../usage/deriving-data-selectors.md)
- [Implementing Undo History](ImplementingUndoHistory.md)

---

id: part-1-overview
title: 'Redux Fundamentals, Part 1: Redux Overview'
sidebar_label: 'Redux Overview'
description: 'The official Fundamentals tutorial for Redux: learn the fundamentals of using Redux'

---

import { DetailedExplanation } from '../../components/DetailedExplanation'

# Redux Fundamentals, Part 1: Redux Overview

:::tip What You'll Learn

- What Redux is and why you might want to use it
- The basic pieces that make up a Redux app

:::

## Introduction

Welcome to the Redux Fundamentals tutorial! **This tutorial will introduce you to the core concepts, principles, and patterns for using Redux**. By the time you finish, you should understand the different pieces that make up a Redux app, how data flows when using Redux, and our standard recommended patterns for building Redux apps.

In Part 1 of this tutorial, we'll briefly look at a minimal example of a working Redux app to see what the pieces are, and in [Part 2: Redux Concepts and Data Flow](./part-2-concepts-data-flow.md) we'll look at those pieces in more detail and how data flows in a Redux application.

Starting in [Part 3: State, Actions, and Reducers](./part-3-state-actions-reducers.md), we'll use that knowledge to build a small example app that demonstrates how these pieces fit together and talk about how Redux works in practice. After we finish building the working example app "by hand" so that you can see exactly what's happening, we'll talk about some of the standard patterns and abstractions typically used with Redux. Finally, we'll see how these lower-level examples translate into the higher-level patterns that we recommend for actual usage in real applications.

### How to Read This Tutorial

**This tutorial will teach you "how Redux works"**, as well as _why_ these patterns exist. Fair warning though - learning the concepts is different from putting them into practice in actual apps.

**The initial code will be less concise than the way we suggest writing real app code**, but writing it out long-hand is the best way to learn. Once you understand how everything fits together, we'll look at using Redux Toolkit to simplify things. **Redux Toolkit is the recommended way to build production apps with Redux**, and is built on all of the concepts that we will look at throughout this tutorial. Once you understand the core concepts covered here, you'll understand how to use Redux Toolkit more efficiently.

:::info

If you're looking to learn more about how Redux is used to write real-world applications, please see:

- [**The "Modern Redux" page in this tutorial**](./part-8-modern-redux.md), which shows how to convert the low-level examples from earlier sections into the modern patterns we do recommend for real-world usage
- [**The "Redux Essentials" tutorial**](../essentials/part-1-overview-concepts.md), which teaches "how to use Redux, the right way" for real-world apps, using our latest recommended patterns and practices.

:::

We've tried to keep these explanations beginner-friendly, but we do need to make some assumptions about what you know already so that we can focus on explaining Redux itself. **This tutorial assumes that you know**:

:::important Prerequisites

- Familiarity with [HTML & CSS](https://internetingishard.com/).
- Familiarity with [ES6 syntax and features](https://www.taniarascia.com/es6-syntax-and-feature-overview/)
- Understanding of [the array and object spread operators](https://javascript.info/rest-parameters-spread#spread-syntax)
- Knowledge of React terminology: [JSX](https://reactjs.org/docs/introducing-jsx.html), [State](https://reactjs.org/docs/state-and-lifecycle.html), [Function Components, Props](https://reactjs.org/docs/components-and-props.html), and [Hooks](https://reactjs.org/docs/hooks-intro.html)
- Knowledge of [asynchronous JavaScript](https://javascript.info/promise-basics) and [making AJAX requests](https://javascript.info/fetch)

:::

**If you're not already comfortable with those topics, we encourage you to take some time to become comfortable with them first, and then come back to learn about Redux**. We'll be here when you're ready!

Finally, you should make sure that you have the React and Redux DevTools extensions installed in your browser:

- React DevTools Extension:
  - [React DevTools Extension for Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)
  - [React DevTools Extension for Firefox](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/)
- Redux DevTools Extension:
  - [Redux DevTools Extension for Chrome](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)
  - [Redux DevTools Extension for Firefox](https://addons.mozilla.org/en-US/firefox/addon/reduxdevtools/)

## What is Redux?

It helps to understand what this "Redux" thing is in the first place. What does it do? What problems does it help me solve? Why would I want to use it?

**Redux is a pattern and library for managing and updating application state, using events called "actions".** It serves as a centralized store for state that needs to be used across your entire application, with rules ensuring that the state can only be updated in a predictable fashion.

### Why Should I Use Redux?

Redux helps you manage "global" state - state that is needed across many parts of your application.

**The patterns and tools provided by Redux make it easier to understand when, where, why, and how the state in your application is being updated, and how your application logic will behave when those changes occur**. Redux guides you towards writing code that is predictable and testable, which helps give you confidence that your application will work as expected.

### When Should I Use Redux?

Redux helps you deal with shared state management, but like any tool, it has tradeoffs. There are more concepts to learn, and more code to write. It also adds some indirection to your code, and asks you to follow certain restrictions. It's a trade-off between short term and long term productivity.

Redux is more useful when:

- You have large amounts of application state that are needed in many places in the app
- The app state is updated frequently over time
- The logic to update that state may be complex
- The app has a medium or large-sized codebase, and might be worked on by many people

**Not all apps need Redux. Take some time to think about the kind of app you're building, and decide what tools would be best to help solve the problems you're working on.**

:::info Want to Know More?

If you're not sure whether Redux is a good choice for your app, these resources give some more guidance:

- **[When (and when not) to reach for Redux](https://changelog.com/posts/when-and-when-not-to-reach-for-redux)**
- **[The Tao of Redux, Part 1 - Implementation and Intent](https://blog.isquaredsoftware.com/2017/05/idiomatic-redux-tao-of-redux-part-1/)**
- **[Redux FAQ: When should I use Redux?](../../faq/General.md#when-should-i-use-redux)**
- **[You Might Not Need Redux](https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367)**

:::

### Redux Libraries and Tools

Redux is a small standalone JS library. However, it is commonly used with several other packages:

#### React-Redux

Redux can integrate with any UI framework, and is most frequently used with React. [**React-Redux**](https://react-redux.js.org/) is our official package that lets your React components interact with a Redux store by reading pieces of state and dispatching actions to update the store.

#### Redux Toolkit

[**Redux Toolkit**](https://redux-toolkit.js.org) is our recommended approach for writing Redux logic. It contains packages and functions that we think are essential for building a Redux app. Redux Toolkit builds in our suggested best practices, simplifies most Redux tasks, prevents common mistakes, and makes it easier to write Redux applications.

#### Redux DevTools Extension

The [**Redux DevTools Extension**](https://github.com/zalmoxisus/redux-devtools-extension) shows a history of the changes to the state in your Redux store over time. This allows you to debug your applications effectively, including using powerful techniques like "time-travel debugging".

## Redux Basics

Now that you know what Redux is, let's briefly look at the pieces that make up a Redux app and how it works.

:::info

The rest of the description on this page focuses solely on the Redux core library (the `redux` package). We'll talk about the other Redux-related packages as we go through the rest of the tutorial.

:::

### The Redux Store

The center of every Redux application is the **store**. A "store" is a container that holds your application's global **state**.

A store is a JavaScript object with a few special functions and abilities that make it different than a plain global object:

- You must never directly modify or change the state that is kept inside the Redux store
- Instead, the only way to cause an update to the state is to create a plain **action** object that describes "something that happened in the application", and then **dispatch** the action to the store to tell it what happened.
- When an action is dispatched, the store runs the root **reducer** function, and lets it calculate the new state based on the old state and the action
- Finally, the store notifies **subscribers** that the state has been updated so the UI can be updated with the new data.

### Redux Core Example App

Let's look at a minimal working example of a Redux app - a small counter application:

<iframe
  class="codesandbox"
  src="https://codesandbox.io/embed/dank-architecture-lr7k1?fontsize=14&hidenavigation=1&theme=dark&runonclick=1"
  title="redux-fundamentals-core-example"
  allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
  sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
></iframe>

Because Redux is a standalone JS library with no dependencies, this example is written by only loading a single script tag for the Redux library, and uses basic JS and HTML for the UI. In practice, Redux is normally used by [installing the Redux packages from NPM](../../introduction/Installation.md), and the UI is created using a library like [React](https://reactjs.org).

:::info

[Part 5: UI and React](./part-5-ui-and-react.md) shows how to use Redux and React together.

:::

Let's break this example down into its separate parts to see what's happening.

#### State, Actions, and Reducers

We start by defining an initial **state** value to describe the application:

```js
// Define an initial state value for the app
const initialState = {
  value: 0,
};
```

For this app, we're going to track a single number with the current value of our counter.

Redux apps normally have a JS object as the root piece of the state, with other values inside that object.

Then, we define a **reducer** function. The reducer receives two arguments, the current `state` and an
`action` object describing what happened. When the Redux app starts up, we don't have any state yet,
so we provide the `initialState` as the default value for this reducer:

```js
// Create a "reducer" function that determines what the new state
// should be when something happens in the app
function counterReducer(state = initialState, action) {
  // Reducers usually look at the type of action that happened
  // to decide how to update the state
  switch (action.type) {
    case "counter/incremented":
      return { ...state, value: state.value + 1 };
    case "counter/decremented":
      return { ...state, value: state.value - 1 };
    default:
      // If the reducer doesn't care about this action type,
      // return the existing state unchanged
      return state;
  }
}
```

Action objects always have a `type` field, which is a string you provide that
acts as a unique name for the action. The `type` should be a readable name so that
anyone who looks at this code understands what it means. In this case, we use the
word 'counter' as the first half of our action type, and the second half is a
description of "what happened". In this case, our 'counter' was 'incremented', so
we write the action type as `'counter/incremented'`.

Based on the type of the action, we either need to return a brand-new object to
be the new `state` result, or return the existing `state` object if nothing should change.
Note that we update the state _immutably_ by copying the existing state and updating the
copy, instead of modifying the original object directly.

#### Store

Now that we have a reducer function, we can create a **store** instance by
calling the Redux library `createStore` API.

```js
// Create a new Redux store with the `createStore` function,
// and use the `counterReducer` for the update logic
const store = Redux.createStore(counterReducer);
```

We pass the reducer function to `createStore`, which uses the reducer function
to generate the initial state, and to calculate any future updates.

#### UI

In any application, the user interface will show existing state on screen. When a user
does something, the app will update its data and then redraw the UI with those values.

```js
// Our "user interface" is some text in a single HTML element
const valueEl = document.getElementById("value");

// Whenever the store state changes, update the UI by
// reading the latest store state and showing new data
function render() {
  const state = store.getState();
  valueEl.innerHTML = state.value.toString();
}

// Update the UI with the initial data
render();
// And subscribe to redraw whenever the data changes in the future
store.subscribe(render);
```

In this small example, we're only using some basic HTML elements as our UI,
with a single `<div>` showing the current value.

So, we write a function that knows how to get the latest state from the Redux
store using the `store.getState()` method, then takes that value and updates the UI to show it.

The Redux store lets us call `store.subscribe()` and pass a subscriber callback function that will be called
every time the store is updated. So, we can pass our `render` function as the subscriber, and know that
each time the store updates, we can update the UI with the latest value.

Redux itself is a standalone library that can be used anywhere. This also means that it can be used with any UI layer.

#### Dispatching Actions

Finally, we need to respond to user input by creating **action** objects that
describe what happened, and **dispatching** them to the store. When we call `store.dispatch(action)`,
the store runs the reducer, calculates the updated state, and runs the subscribers
to update the UI.

```js
// Handle user inputs by "dispatching" action objects,
// which should describe "what happened" in the app
document.getElementById("increment").addEventListener("click", function () {
  store.dispatch({ type: "counter/incremented" });
});

document.getElementById("decrement").addEventListener("click", function () {
  store.dispatch({ type: "counter/decremented" });
});

document
  .getElementById("incrementIfOdd")
  .addEventListener("click", function () {
    // We can write logic to decide what to do based on the state
    if (store.getState().value % 2 !== 0) {
      store.dispatch({ type: "counter/incremented" });
    }
  });

document
  .getElementById("incrementAsync")
  .addEventListener("click", function () {
    // We can also write async logic that interacts with the store
    setTimeout(function () {
      store.dispatch({ type: "counter/incremented" });
    }, 1000);
  });
```

Here, we'll dispatch the actions that will make the reducer add 1 or
subtract 1 from the current counter value.

We can also write code that only dispatches an action if a certain
condition is true, or write some async code that dispatches an action
after a delay.

### Data Flow

We can summarize the flow of data through a Redux app with this diagram. It represents how:

- actions are dispatched in response to a user interaction like a click
- the store runs the reducer function to calculate a new state
- the UI reads the new state to display the new values

(Don't worry if these pieces aren't quite clear yet! Keep this picture in your mind as you go through the rest of this tutorial, and you'll see how the pieces fit together.)

![Redux data flow diagram](/img/tutorials/essentials/ReduxDataFlowDiagram.gif)

## What You've Learned

That counter example was small, but it does show all the working pieces of a real Redux app.
**Everything we'll talk about in the following sections expands on those basic pieces.**

With that in mind, let's review what we've learned so far:

:::tip Summary

- **Redux is a library for managing global application state**
  - Redux is typically used with the React-Redux library for integrating Redux and React together
  - Redux Toolkit is the recommended way to write Redux logic
- **Redux uses several types of code**
  - _Actions_ are plain objects with a `type` field, and describe "what happened" in the app
  - _Reducers_ are functions that calculate a new state value based on previous state + an action
  - A Redux _store_ runs the root reducer whenever an action is _dispatched_

:::

## What's Next?

Now that you know what the basic pieces of a Redux app are, step ahead to [Part 2: Redux Concepts and Data Flow](./part-2-concepts-data-flow.md),
where we'll look at how data flows through a Redux app in more detail.

---

id: part-2-concepts-data-flow
title: 'Redux Fundamentals, Part 2: Concepts and Data Flow'
sidebar_label: 'Redux Concepts and Data Flow'
description: 'The official Redux Fundamentals tutorial: learn key Redux terms and how data flows in a Redux app'

---

import { DetailedExplanation } from '../../components/DetailedExplanation'

# Redux Fundamentals, Part 2: Concepts and Data Flow

:::tip What You'll Learn

- Key terms and concepts for using Redux
- How data flows through a Redux app

:::

## Introduction

In [Part 1: Redux Overview](./part-1-overview.md), we talked about what Redux is, why you might want to use it, and listed the other Redux libraries that are typically used with the Redux core. We also saw a small example of what a working Redux app looks like and the pieces that make up the app. Finally, we briefly mentioned some of the terms and concepts used with Redux.

In this section, we'll look at those terms and concepts in more detail, and talk more about how data flows
through a Redux application.

## Background Concepts

Before we dive into some actual code, let's talk about some of the terms and concepts you'll need to know to use Redux.

### State Management

Let's start by looking at a small React counter component. It tracks a number in component state, and increments the number when a button is clicked:

```jsx
function Counter() {
  // State: a counter value
  const [counter, setCounter] = useState(0);

  // Action: code that causes an update to the state when something happens
  const increment = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  // View: the UI definition
  return (
    <div>
      Value: {counter} <button onClick={increment}>Increment</button>
    </div>
  );
}
```

It is a self-contained app with the following parts:

- The **state**, the source of truth that drives our app;
- The **view**, a declarative description of the UI based on the current state
- The **actions**, the events that occur in the app based on user input, and trigger updates in the state

This is a small example of **"one-way data flow"**:

- State describes the condition of the app at a specific point in time
- The UI is rendered based on that state
- When something happens (such as a user clicking a button), the state is updated based on what occurred
- The UI re-renders based on the new state

![One-way data flow](/img/tutorials/essentials/one-way-data-flow.png)

However, the simplicity can break down when we have **multiple components that need to share and use the same state**, especially if those components are located in different parts of the application. Sometimes this can be solved by ["lifting state up"](https://reactjs.org/docs/lifting-state-up.html) to parent components, but that doesn't always help.

One way to solve this is to extract the shared state from the components, and put it into a centralized location outside the component tree. With this, our component tree becomes a big "view", and any component can access the state or trigger actions, no matter where they are in the tree!

By defining and separating the concepts involved in state management and enforcing rules that maintain independence between views and states, we give our code more structure and maintainability.

This is the basic idea behind Redux: a single centralized place to contain the global state in your application, and specific patterns to follow when updating that state to make the code predictable.

### Immutability

"Mutable" means "changeable". If something is "immutable", it can never be changed.

JavaScript objects and arrays are all mutable by default. If I create an object, I can change the contents of its fields. If I create an array, I can change the contents as well:

```js
const obj = { a: 1, b: 2 };
// still the same object outside, but the contents have changed
obj.b = 3;

const arr = ["a", "b"];
// In the same way, we can change the contents of this array
arr.push("c");
arr[1] = "d";
```

This is called _mutating_ the object or array. It's the same object or array reference in memory, but now the contents inside the object have changed.

**In order to update values immutably, your code must make _copies_ of existing objects/arrays, and then modify the copies**.

We can do this by hand using JavaScript's array / object spread operators, as well as array methods that return new copies of the array instead of mutating the original array:

```js
const obj = {
  a: {
    // To safely update obj.a.c, we have to copy each piece
    c: 3,
  },
  b: 2,
};

const obj2 = {
  // copy obj
  ...obj,
  // overwrite a
  a: {
    // copy obj.a
    ...obj.a,
    // overwrite c
    c: 42,
  },
};

const arr = ["a", "b"];
// Create a new copy of arr, with "c" appended to the end
const arr2 = arr.concat("c");

// or, we can make a copy of the original array:
const arr3 = arr.slice();
// and mutate the copy:
arr3.push("c");
```

**Redux expects that all state updates are done immutably**. We'll look at where and how this is important a bit later, as well as some easier ways to write immutable update logic.

:::info Want to Know More?

For more info on how immutability works in JavaScript, see:

- [A Visual Guide to References in JavaScript](https://daveceddia.com/javascript-references/)
- [Immutability in React and Redux: The Complete Guide](https://daveceddia.com/react-redux-immutability-guide/)

:::

## Redux Terminology

There's some important Redux terms that you'll need to be familiar with before we continue:

### Actions

An **action** is a plain JavaScript object that has a `type` field. **You can think of an action as an event that describes something that happened in the application**.

The `type` field should be a string that gives this action a descriptive name, like `"todos/todoAdded"`. We usually write that type string like `"domain/eventName"`, where the first part is the feature or category that this action belongs to, and the second part is the specific thing that happened.

An action object can have other fields with additional information about what happened. By convention, we put that information in a field called `payload`.

A typical action object might look like this:

```js
const addTodoAction = {
  type: "todos/todoAdded",
  payload: "Buy milk",
};
```

### Reducers

A **reducer** is a function that receives the current `state` and an `action` object, decides how to update the state if necessary, and returns the new state: `(state, action) => newState`. **You can think of a reducer as an event listener which handles events based on the received action (event) type.**

:::info

"Reducer" functions get their name because they're similar to the kind of callback function you pass to the [`Array.reduce()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) method.

:::

Reducers must _always_ follow some specific rules:

- They should only calculate the new state value based on the `state` and `action` arguments
- They are not allowed to modify the existing `state`. Instead, they must make _immutable updates_, by copying the existing `state` and making changes to the copied values.
- They must not do any asynchronous logic, calculate random values, or cause other "side effects"

We'll talk more about the rules of reducers later, including why they're important and how to follow them correctly.

The logic inside reducer functions typically follows the same series of steps:

- Check to see if the reducer cares about this action
  - If so, make a copy of the state, update the copy with new values, and return it
- Otherwise, return the existing state unchanged

Here's a small example of a reducer, showing the steps that each reducer should follow:

```js
const initialState = { value: 0 };

function counterReducer(state = initialState, action) {
  // Check to see if the reducer cares about this action
  if (action.type === "counter/incremented") {
    // If so, make a copy of `state`
    return {
      ...state,
      // and update the copy with the new value
      value: state.value + 1,
    };
  }
  // otherwise return the existing state unchanged
  return state;
}
```

Reducers can use any kind of logic inside to decide what the new state should be: `if/else`, `switch`, loops, and so on.

<DetailedExplanation title="Detailed Explanation: Why Are They Called 'Reducers?'" >

The [`Array.reduce()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) method lets you take an array of values, process each item in the array one at a time, and return a single final result. You can think of it as "reducing the array down to one value".

`Array.reduce()` takes a callback function as an argument, which will be called one time for each item in the array. It takes two arguments:

- `previousResult`, the value that your callback returned last time
- `currentItem`, the current item in the array

The first time that the callback runs, there isn't a `previousResult` available, so we need to also pass in an initial value that will be used as the first `previousResult`.

If we wanted to add together an array of numbers to find out what the total is, we could write a reduce callback that looks like this:

```js
const numbers = [2, 5, 8];

const addNumbers = (previousResult, currentItem) => {
  console.log({ previousResult, currentItem });
  return previousResult + currentItem;
};

const initialValue = 0;

const total = numbers.reduce(addNumbers, initialValue);
// {previousResult: 0, currentItem: 2}
// {previousResult: 2, currentItem: 5}
// {previousResult: 7, currentItem: 8}

console.log(total);
// 15
```

Notice that this `addNumbers` "reduce callback" function doesn't need to keep track of anything itself. It takes the `previousResult` and `currentItem` arguments, does something with them, and returns a new result value.

**A Redux reducer function is exactly the same idea as this "reduce callback" function!** It takes a "previous result" (the `state`), and the "current item" (the `action` object), decides a new state value based on those arguments, and returns that new state.

If we were to create an array of Redux actions, call `reduce()`, and pass in a reducer function, we'd get a final result the same way:

```js
const actions = [
  { type: "counter/incremented" },
  { type: "counter/incremented" },
  { type: "counter/incremented" },
];

const initialState = { value: 0 };

const finalResult = actions.reduce(counterReducer, initialState);
console.log(finalResult);
// {value: 3}
```

We can say that **Redux reducers reduce a set of actions (over time) into a single state**. The difference is that with `Array.reduce()` it happens all at once, and with Redux, it happens over the lifetime of your running app.

</DetailedExplanation>

### Store

The current Redux application state lives in an object called the **store** .

The store is created by passing in a reducer, and has a method called `getState` that returns the current state value:

```js
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({ reducer: counterReducer });

console.log(store.getState());
// {value: 0}
```

### Dispatch

The Redux store has a method called `dispatch`. **The only way to update the state is to call `store.dispatch()` and pass in an action object**. The store will run its reducer function and save the new state value inside, and we can call `getState()` to retrieve the updated value:

```js
store.dispatch({ type: "counter/incremented" });

console.log(store.getState());
// {value: 1}
```

**You can think of dispatching actions as "triggering an event"** in the application. Something happened, and we want the store to know about it. Reducers act like event listeners, and when they hear an action they are interested in, they update the state in response.

### Selectors

**Selectors** are functions that know how to extract specific pieces of information from a store state value. As an application grows bigger, this can help avoid repeating logic as different parts of the app need to read the same data:

```js
const selectCounterValue = (state) => state.value;

const currentValue = selectCounterValue(store.getState());
console.log(currentValue);
// 2
```

## Core Concepts and Principles

Overall, we can summarize the intent behind Redux's design in three core concepts:

### Single Source of Truth

The **global state** of your application is stored as an object inside a single **store**. Any given piece of data should only exist in one location, rather than being duplicated in many places.

This makes it easier to debug and inspect your app's state as things change, as well as centralizing logic that needs to interact with the entire application.

:::tip

This does _not_ mean that _every_ piece of state in your app must go into the Redux store! You should decide whether a piece of state belongs in Redux or your UI components, based on where it's needed.

:::

### State is Read-Only

The only way to change the state is to dispatch an **action**, an object that describes what happened.

This way, the UI won't accidentally overwrite data, and it's easier to trace why a state update happened. Since actions are plain JS objects, they can be logged, serialized, stored, and later replayed for debugging or testing purposes.

### Changes are Made with Pure Reducer Functions

To specify how the state tree is updated based on actions, you write **reducer** functions. Reducers are pure functions that take the previous state and an action, and return the next state. Like any other functions, you can split reducers into smaller functions to help do the work, or write reusable reducers for common tasks.

## Redux Application Data Flow

Earlier, we talked about "one-way data flow", which describes this sequence of steps to update the app:

- State describes the condition of the app at a specific point in time
- The UI is rendered based on that state
- When something happens (such as a user clicking a button), the state is updated based on what occurred
- The UI re-renders based on the new state

For Redux specifically, we can break these steps into more detail:

- Initial setup:
  - A Redux store is created using a root reducer function
  - The store calls the root reducer once, and saves the return value as its initial `state`
  - When the UI is first rendered, UI components access the current state of the Redux store, and use that data to decide what to render. They also subscribe to any future store updates so they can know if the state has changed.
- Updates:
  - Something happens in the app, such as a user clicking a button
  - The app code dispatches an action to the Redux store, like `dispatch({type: 'counter/incremented'})`
  - The store runs the reducer function again with the previous `state` and the current `action`, and saves the return value as the new `state`
  - The store notifies all parts of the UI that are subscribed that the store has been updated
  - Each UI component that needs data from the store checks to see if the parts of the state they need have changed.
  - Each component that sees its data has changed forces a re-render with the new data, so it can update what's shown on the screen

Here's what that data flow looks like visually:

![Redux data flow diagram](/img/tutorials/essentials/ReduxDataFlowDiagram.gif)

## What You've Learned

:::tip Summary

- **Redux's intent can be summarized in three principles**
  - Global app state is kept in a single store
  - The store state is read-only to the rest of the app
  - Reducer functions are used to update the state in response to actions
- **Redux uses a "one-way data flow" app structure**
  - State describes the condition of the app at a point in time, and UI renders based on that state
  - When something happens in the app:
    - The UI dispatches an action
    - The store runs the reducers, and the state is updated based on what occurred
    - The store notifies the UI that the state has changed
  - The UI re-renders based on the new state

:::

## What's Next?

You should now be familiar with the key concepts and terms that describe the different parts of a Redux app.

Now, let's see how those pieces work together as we start building a new Redux application in [Part 3: State, Actions, and Reducers](./part-3-state-actions-reducers).

---

id: part-3-state-actions-reducers
title: 'Redux Fundamentals, Part 3: State, Actions, and Reducers'
sidebar_label: 'State, Actions, and Reducers'
description: 'The official Redux Fundamentals tutorial: learn how reducers update state in response to actions'

---

import { DetailedExplanation } from '../../components/DetailedExplanation'

# Redux Fundamentals, Part 3: State, Actions, and Reducers

:::tip What You'll Learn

- How to define state values that contain your app's data
- How to define action objects that describe what happens in your app
- How to write reducer functions that calculate updated state based on existing state and actions

:::

:::info Prerequisites

- Familiarity with key Redux terms and concepts like "actions", "reducers", "store", and "dispatching". (See **[Part 2: Redux Concepts and Data Flow](./part-2-concepts-data-flow.md)** for explanations of these terms.)

:::

## Introduction

In [Part 2: Redux Concepts and Data Flow](./part-2-concepts-data-flow.md), we looked at how Redux can help us build maintainable apps by giving us a single central place to put global app state. We also talked about core Redux concepts like dispatching action objects and using reducer functions that return new state values.

Now that you have some idea of what these pieces are, it's time to put that knowledge into practice. We're going to build a small example app to see how these pieces actually work together.

:::caution

**The example app is not meant as a complete production-ready project**. The goal is to help you learn core Redux APIs and usage patterns, and point you in the right direction using some limited examples. Also, some of the early pieces we build will be updated later on to show better ways to do things. **Please read through the whole tutorial to see all the concepts in use**.

:::

### Project Setup

For this tutorial, we've created a pre-configured starter project that already has React set up, includes some default styling, and has a fake REST API that will allow us to write actual API requests in our app. You'll use this as the basis for writing the actual application code.

To get started, you can open and fork this CodeSandbox:

<iframe
  class="codesandbox"
  src="https://codesandbox.io/embed/github/reduxjs/redux-fundamentals-example-app/tree/master/?fontsize=14&hidenavigation=1&theme=dark&runonclick=1"
  title="redux-fundamentals-example-app"
  allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
  sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
></iframe>

You can also [clone the same project from this Github repo](https://github.com/reduxjs/redux-fundamentals-example-app). After cloning the repo, you can install the tools for the project with `npm install`, and start it with `npm start`.

If you'd like to see the final version of what we're going to build, you can check out [the **`tutorial-steps` branch**](https://github.com/reduxjs/redux-fundamentals-example-app/tree/tutorial-steps), or [look at the final version in this CodeSandbox](https://codesandbox.io/s/github/reduxjs/redux-fundamentals-example-app/tree/tutorial-steps).

#### Creating a New Redux + React Project

Once you've finished this tutorial, you'll probably want to try working on your own projects. **We recommend using the [Redux templates for Create-React-App](https://github.com/reduxjs/cra-template-redux) as the fastest way to create a new Redux + React project**. It comes with Redux Toolkit and React-Redux already configured, using [a modernized version of the "counter" app example you saw in Part 1](./part-1-overview.md). This lets you jump right into writing your actual application code without having to add the Redux packages and set up the store.

If you want to know specific details on how to add Redux to a project, see this explanation:

<DetailedExplanation title="Detailed Explanation: Adding Redux to a React Project">

The Redux template for CRA comes with Redux Toolkit and React-Redux already configured. If you're setting up a new project from scratch without that template, follow these steps:

- Add the `@reduxjs/toolkit` and `react-redux` packages
- Create a Redux store using RTK's `configureStore` API, and pass in at least one reducer function
- Import the Redux store into your application's entry point file (such as `src/index.js`)
- Wrap your root React component with the `<Provider>` component from React-Redux, like:

```jsx
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
```

</DetailedExplanation>

#### Exploring the Initial Project

This initial project is based on [the standard Create-React-App](https://create-react-app.dev/docs/getting-started) project template, with some modifications.

Let's take a quick look at what the initial project contains:

- `/src`
  - `index.js`: the entry point file for the application. It renders the main `<App>` component.
  - `App.js`: the main application component.
  - `index.css`: styles for the complete application
  - `/api`
    - `client.js`: a small AJAX request client that allows us to make GET and POST requests
    - `server.js`: provides a fake REST API for our data. Our app will fetch data from these fake endpoints later.
  - `/exampleAddons`: contains some additional Redux addons that we'll use later in the tutorial to show how things work

If you load the app now, you should see a welcome message, but the rest of the app is otherwise empty.

With that, let's get started!

## Starting the Todo Example App

Our example application will be a small "todo" application. You've probably seen todo app examples before - they make
good examples because they let us show how to do things like tracking a list of items, handling user input, and updating
the UI when that data changes, which are all things that happen in a normal application.

### Defining Requirements

Let's start by figuring out the initial business requirements for this application:

- The UI should consist of three main sections:
  - An input box to let the user type in the text of a new todo item
  - A list of all the existing todo items
  - A footer section that shows the number of non-completed todos, and shows filtering options
- Todo list items should have a checkbox that toggles their "completed" status. We should also be able to add a color-coded
  category tag for a predefined list of colors, and delete todo items.
- The counter should pluralize the number of active todos: "0 items", "1 item", "3 items", etc
- There should be buttons to mark all todos as completed, and to clear all completed todos by removing them
- There should be two ways to filter the displayed todos in the list:
  - Filtering based on showing "All", "Active", and "Completed" todos
  - Filtering based on selecting one or more colors, and showing any todos whose tag that match those colors

We'll add some more requirements later on, but this is enough to get us started.

The end goal is an app that should look like this:

![Example todo app screenshot](/img/tutorials/fundamentals/todos-app-screenshot.png)

### Designing the State Values

One of the core principles of React and Redux is that **your UI should be based on your state**. So, one approach to designing an application is to first think of all the state needed to describe how the application works. It's also a good idea
to try to describe your UI with as few values in the state as possible, so there's less data you need to keep track of
and update.

Conceptually, there are two main aspects of this application:

- The actual list of current todo items
- The current filtering options

We'll also need to keep track of the data the user is typing into the "Add Todo" input box, but that's less important
and we'll handle that later.

For each todo item, we need to store a few pieces of information:

- The text the user entered
- The boolean flag saying if it's completed or not
- A unique ID value
- A color category, if selected

Our filtering behavior can probably be described with some enumerated values:

- Completed status: "All", "Active", and "Completed"
- Colors: "Red", "Yellow", "Green", "Blue", "Orange", "Purple"

Looking at these values, we can also say that the todos are "app state" (the core data that the application works with),
while the filtering values are "UI state" (state that describes what the app is doing right now). It can be helpful to
think about these different kinds of categories to help understand how the different pieces of state are being used.

### Designing the State Structure

With Redux, **our application state is always kept in plain JavaScript objects and arrays**. That means you may not put
other things into the Redux state - no class instances, built-in JS types like `Map` / `Set` `Promise` / `Date`, functions, or anything else that is not plain JS data.

**The root Redux state value is almost always a plain JS object**, with other data nested inside of it.

Based on this information, we should now be able to describe the kinds of values we need to have inside our Redux state:

- First, we need an array of todo item objects. Each item should have these fields:
  - `id`: a unique number
  - `text`: the text the user typed in
  - `completed`: a boolean flag
  - `color`: An optional color category
- Then, we need to describe our filtering options. We need to have:
  - The current "completed" filter value
  - An array of the currently selected color categories

So, here's what an example of our app's state might look like:

```js
const todoAppState = {
  todos: [
    { id: 0, text: "Learn React", completed: true },
    { id: 1, text: "Learn Redux", completed: false, color: "purple" },
    { id: 2, text: "Build something fun!", completed: false, color: "blue" },
  ],
  filters: {
    status: "Active",
    colors: ["red", "blue"],
  },
};
```

It's important to note that **it's okay to have other state values outside of Redux!**. This example is small enough so far that we actually do have all our state in the Redux store, but as we'll see later, some data really doesn't need to be kept in Redux (like "is this dropdown open?" or "current value of a form input").

### Designing Actions

**Actions** are plain JavaScript objects that have a `type` field. As mentioned earlier, **you can think of an action as an event that describes something that happened in the application**.

In the same way that we designed the state structure based on the app's requirements, we should also be able to
come up with a list of some of the actions that describe what's happening:

- Add a new todo entry based on the text the user entered
- Toggle the completed status of a todo
- Select a color category for a todo
- Delete a todo
- Mark all todos as completed
- Clear all completed todos
- Choose a different "completed" filter value
- Add a new color filter
- Remove a color filter

We normally put any extra data needed to describe what's happening into the `action.payload` field. This could be a
number, a string, or an object with multiple fields inside.

The Redux store doesn't care what the actual text of the `action.type` field is. However, your own code will look
at `action.type` to see if an update is needed. Also, you will frequently look at action type strings in the Redux
DevTools Extension while debugging to see what's going on in your app. So, try to choose action types that are
readable and clearly describe what's happening - it'll be much easier to understand things when you look at them later!

Based on that list of things that can happen, we can create a list of actions that our application will use:

- `{type: 'todos/todoAdded', payload: todoText}`
- `{type: 'todos/todoToggled', payload: todoId}`
- `{type: 'todos/colorSelected, payload: {todoId, color}}`
- `{type: 'todos/todoDeleted', payload: todoId}`
- `{type: 'todos/allCompleted'}`
- `{type: 'todos/completedCleared'}`
- `{type: 'filters/statusFilterChanged', payload: filterValue}`
- `{type: 'filters/colorFilterChanged', payload: {color, changeType}}`

In this case, the actions primarily have a single extra piece of data apiece, so we can put that directly in the `action.payload` field. We could have split the color filter behavior into two actions, one for "added" and one for "removed", but in this case
we'll do it as one action with an extra field inside specifically to show that we can have objects as an action payload.

Like the state data, **actions should contain the smallest amount of information needed to describe what happened**.

## Writing Reducers

Now that we know what our state structure and our actions look like, it's time to write our first reducer.

**Reducers** are functions that take the current `state` and an `action` as arguments, and return a new `state` result. In other words, **`(state, action) => newState`**.

### Creating the Root Reducer

**A Redux app really only has one reducer function: the "root reducer" function** that you will pass to `createStore` later on. That one root reducer function is responsible for handling _all_ of the actions that are dispatched, and calculating what the _entire_ new state result should be every time.

Let's start by creating a `reducer.js` file in the `src` folder, alongside `index.js` and `App.js`.

Every reducer needs some initial state, so we'll add some fake todo entries to get us started. Then, we can write an outline for the logic inside the reducer function:

```js title="src/reducer.js"
const initialState = {
  todos: [
    { id: 0, text: "Learn React", completed: true },
    { id: 1, text: "Learn Redux", completed: false, color: "purple" },
    { id: 2, text: "Build something fun!", completed: false, color: "blue" },
  ],
  filters: {
    status: "All",
    colors: [],
  },
};

// Use the initialState as a default value
export default function appReducer(state = initialState, action) {
  // The reducer normally looks at the action type field to decide what happens
  switch (action.type) {
    // Do something here based on the different types of actions
    default:
      // If this reducer doesn't recognize the action type, or doesn't
      // care about this specific action, return the existing state unchanged
      return state;
  }
}
```

A reducer may be called with `undefined` as the state value when the application is being initialized. If that happens, we need to provide an initial state value so the rest of the reducer code has something to work with. **Reducers normally use ES6 default argument syntax to provide initial state: `(state = initialState, action)`**.

Next, let's add the logic to handle the `'todos/todoAdded'` action.

We know we need to check to see the current action's type matches that specific string.
Then, we need to return a new object containing _all_ of the state, even for the fields
that didn't change.

```js title="src/reducer.js"
function nextTodoId(todos) {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
  return maxId + 1;
}

// Use the initialState as a default value
export default function appReducer(state = initialState, action) {
  // The reducer normally looks at the action type field to decide what happens
  switch (action.type) {
    // Do something here based on the different types of actions
    // highlight-start
    case "todos/todoAdded": {
      // We need to return a new state object
      return {
        // that has all the existing state data
        ...state,
        // but has a new array for the `todos` field
        todos: [
          // with all of the old todos
          ...state.todos,
          // and the new todo object
          {
            // Use an auto-incrementing numeric ID for this example
            id: nextTodoId(state.todos),
            text: action.payload,
            completed: false,
          },
        ],
      };
    }
    // highlight-end
    default:
      // If this reducer doesn't recognize the action type, or doesn't
      // care about this specific action, return the existing state unchanged
      return state;
  }
}
```

That's... an awful lot of work to add one todo item to the state. Why is all this extra work necessary?

### Rules of Reducers

We said earlier that **reducers must _always_ follow some special rules**:

- They should only calculate the new state value based on the `state` and `action` arguments
- They are not allowed to modify the existing `state`. Instead, they must make _immutable updates_, by copying the existing `state` and making changes to the copied values.
- They must not do any asynchronous logic or other "side effects"

:::tip

**A "side effect" is any change to state or behavior that can be seen outside of returning a value from a function**. Some common kinds of side effects are things like:

- Logging a value to the console
- Saving a file
- Setting an async timer
- Making an AJAX HTTP request
- Modifying some state that exists outside of a function, or mutating arguments to a function
- Generating random numbers or unique random IDs (such as `Math.random()` or `Date.now()`)

:::

Any function that follows these rules is also known as a **"pure" function**, even if it's not specifically written as a reducer function.

But why are these rules important? There's a few different reasons:

- One of the goals of Redux is to make your code predictable. When a function's output is only calculated from the input arguments, it's easier to understand how that code works, and to test it.
- On the other hand, if a function depends on variables outside itself, or behaves randomly, you never know what will happen when you run it.
- If a function modifies other values, including its arguments, that can change the way the application works unexpectedly. This can be a common source of bugs, such as "I updated my state, but now my UI isn't updating when it should!"
- Some of the Redux DevTools capabilities depend on having your reducers follow these rules correctly

The rule about "immutable updates" is particularly important, and worth talking about further.

### Reducers and Immutable Updates

Earlier, we talked about "mutation" (modifying existing object/array values) and "immutability" (treating values as something that cannot be changed).

:::warning

In Redux, **our reducers are _never_ allowed to mutate the original / current state values!**

```js
// ❌ Illegal - by default, this will mutate the state!
state.value = 123;
```

:::

There are several reasons why you must not mutate state in Redux:

- It causes bugs, such as the UI not updating properly to show the latest values
- It makes it harder to understand why and how the state has been updated
- It makes it harder to write tests
- It breaks the ability to use "time-travel debugging" correctly
- It goes against the intended spirit and usage patterns for Redux

So if we can't change the originals, how do we return an updated state?

:::tip

**Reducers can only make _copies_ of the original values, and then they can mutate the copies.**

```js
// ✅ This is safe, because we made a copy
return {
  ...state,
  value: 123,
};
```

:::

We already saw that we can [write immutable updates by hand](./part-2-concepts-data-flow.md#immutability), by using JavaScript's array / object spread operators and other functions that return copies of the original values.

This becomes harder when the data is nested. **A critical rule of immutable updates is that you must make a copy of _every_ level of nesting that needs to be updated.**

However, if you're thinking that "writing immutable updates by hand this way looks hard to remember and do correctly"... yeah, you're right! :)

Writing immutable update logic by hand _is_ hard, and **accidentally mutating state in reducers is the single most common mistake Redux users make**.

:::tip

**In real-world applications, you won't have to write these complex nested immutable updates by hand**. In [Part 8: Modern Redux with Redux Toolkit](./part-8-modern-redux.md), you'll
learn how to use Redux Toolkit to simplify writing immutable update logic in reducers.

:::

### Handling Additional Actions

With that in mind, let's add the reducer logic for a couple more cases. First, toggling a todo's `completed` field based on its ID:

```js title="src/reducer.js"
export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case "todos/todoAdded": {
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: nextTodoId(state.todos),
            text: action.payload,
            completed: false,
          },
        ],
      };
    }
    // highlight-start
    case "todos/todoToggled": {
      return {
        // Again copy the entire state object
        ...state,
        // This time, we need to make a copy of the old todos array
        todos: state.todos.map((todo) => {
          // If this isn't the todo item we're looking for, leave it alone
          if (todo.id !== action.payload) {
            return todo;
          }

          // We've found the todo that has to change. Return a copy:
          return {
            ...todo,
            // Flip the completed flag
            completed: !todo.completed,
          };
        }),
      };
    }
    // highlight-end
    default:
      return state;
  }
}
```

And since we've been focusing on the todos state, let's add a case to handle the "visibility selection changed" action as well:

```js title="src/reducer.js"
export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case "todos/todoAdded": {
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: nextTodoId(state.todos),
            text: action.payload,
            completed: false,
          },
        ],
      };
    }
    case "todos/todoToggled": {
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id !== action.payload) {
            return todo;
          }

          return {
            ...todo,
            completed: !todo.completed,
          };
        }),
      };
    }
    // highlight-start
    case "filters/statusFilterChanged": {
      return {
        // Copy the whole state
        ...state,
        // Overwrite the filters value
        filters: {
          // copy the other filter fields
          ...state.filters,
          // And replace the status field with the new value
          status: action.payload,
        },
      };
    }
    // highlight-end
    default:
      return state;
  }
}
```

We've only handled 3 actions, but this is already getting a bit long. If we try to handle every action in this one reducer
function, it's going to be hard to read it all.

That's why **reducers are typically split into multiple smaller reducer functions** - to make it easier to understand and
maintain the reducer logic.

## Splitting Reducers

As part of this, **Redux reducers are typically split apart based on the section of the Redux state that they update**. Our todo app state currently has two top-level sections: `state.todos` and `state.filters`. So, we can split the large root reducer function into two smaller reducers - a `todosReducer` and a `filtersReducer`.

So, where should these split-up reducer functions live?

**We recommend organizing your Redux app folders and files based on "features"** - code that relates to a specific concept
or area of your application. **The Redux code for a particular feature is usually written as a single file, known as a
"slice" file**, which contains all the reducer logic and all of the action-related code for that part of your app state.

Because of that, **the reducer for a specific section of the Redux app state is called a "slice reducer"**. Typically, some of the action objects will be closely related to a specific slice reducer, and so the action type strings should start with the name of that feature (like `'todos'`) and describe the event that happened (like `'todoAdded'`), joined together into one string (`'todos/todoAdded'`).

In our project, create a new `features` folder, and then a `todos` folder inside that. Create a new file named `todosSlice.js`, and let's cut and paste the todo-related initial state over into this file:

```js title="src/features/todos/todosSlice.js"
const initialState = [
  { id: 0, text: "Learn React", completed: true },
  { id: 1, text: "Learn Redux", completed: false, color: "purple" },
  { id: 2, text: "Build something fun!", completed: false, color: "blue" },
];

function nextTodoId(todos) {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
  return maxId + 1;
}

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
```

Now we can copy over the logic for updating the todos. However, there's an important difference here. **This file only has to update the todos-related state - it's not nested any more!** This is another reason why we split up reducers. Since the todos state is an array by itself, we don't have to copy the outer root state object in here. That makes this reducer easier to read.

This is called **reducer composition**, and it's the fundamental pattern of building Redux apps.

Here's what the updated reducer looks like after we handle those actions:

```js title="src/features/todos/todosSlice.js"
export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    // highlight-start
    case "todos/todoAdded": {
      // Can return just the new todos array - no extra object around it
      return [
        ...state,
        {
          id: nextTodoId(state),
          text: action.payload,
          completed: false,
        },
      ];
    }
    case "todos/todoToggled": {
      return state.map((todo) => {
        if (todo.id !== action.payload) {
          return todo;
        }

        return {
          ...todo,
          completed: !todo.completed,
        };
      });
    }
    //highlight-end
    default:
      return state;
  }
}
```

That's a bit shorter and easier to read.

Now we can do the same thing for the visibility logic. Create `src/features/filters/filtersSlice.js`, and let's move all the filter-related code over there:

```js title="src/features/filters/filtersSlice.js"
const initialState = {
  status: "All",
  colors: [],
};

export default function filtersReducer(state = initialState, action) {
  switch (action.type) {
    // highlight-start
    case "filters/statusFilterChanged": {
      return {
        // Again, one less level of nesting to copy
        ...state,
        status: action.payload,
      };
    }
    // highlight-end
    default:
      return state;
  }
}
```

We still have to copy the object containing the filters state, but since there's less nesting, it's easier to read what's happening.

:::info

To keep this page shorter, we'll skip showing how to write the reducer update logic for the other actions.

**Try writing the updates for those yourself**, based on [the requirements described above](#defining-requirements).

If you get stuck, see [the CodeSandbox at the end of this page](#what-youve-learned) for the complete implementation of these reducers.

:::

## Combining Reducers

We now have two separate slice files, each with its own slice reducer function. But, we said earlier that the Redux store needs _one_ root reducer function when we create it. So, how can we go back to having a root reducer without putting all the code in one big function?

Since reducers are normal JS functions, we can import the slice reducers back into `reducer.js`, and write a new root reducer whose only job is to call the other two functions.

```js title="src/reducer.js"
import todosReducer from "./features/todos/todosSlice";
import filtersReducer from "./features/filters/filtersSlice";

export default function rootReducer(state = {}, action) {
  // always return a new object for the root state
  return {
    // the value of `state.todos` is whatever the todos reducer returns
    todos: todosReducer(state.todos, action),
    // For both reducers, we only pass in their slice of the state
    filters: filtersReducer(state.filters, action),
  };
}
```

**Note that each of these reducers is managing its own part of the global state. The state parameter is different for every reducer, and corresponds to the part of the state it manages.**

This allows us to split up our logic based on features and slices of state, to keep things maintainable.

### `combineReducers`

We can see that the new root reducer is doing the same thing for each slice: calling the slice reducer, passing in the slice of the state owned by that reducer, and assigning the result back to the root state object. If we were to add more slices, the pattern
would repeat.

The Redux core library includes a utility called [`combineReducers`](../../api/combineReducers.md), which does this same boilerplate step for us. We can replace our hand-written `rootReducer` with a shorter one generated by `combineReducers`.

**Now that we need `combineReducers`, it's time to actually install the Redux core library**:

```js
npm install redux
```

Once that's done, we can import `combineReducers` and use it:

```js title="src/reducer.js"
// highlight-next-line
import { combineReducers } from "redux";

import todosReducer from "./features/todos/todosSlice";
import filtersReducer from "./features/filters/filtersSlice";

const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  todos: todosReducer,
  filters: filtersReducer,
});

export default rootReducer;
```

`combineReducers` accepts an object where the key names will become the keys in your root state object, and the
values are the slice reducer functions that know how to update those slices of the Redux state.

**Remember, the key names you give to `combineReducers` decides what the key names of your state object will be!**

## What You've Learned

**State, Actions, and Reducers are the building blocks of Redux**. Every Redux app has state values, creates actions to describe what happened, and uses reducer functions to calculate new state values based on the previous state and an action.

Here's the contents of our app so far:

<iframe
  class="codesandbox"
  src="https://codesandbox.io/embed/github/reduxjs/redux-fundamentals-example-app/tree/checkpoint-1-combinedReducers/?fontsize=14&hidenavigation=1&module=%2Fsrc%2Freducer.js&theme=dark&runonclick=1"
  title="redux-fundamentals-example-app"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

:::tip Summary

- **Redux apps use plain JS objects, arrays, and primitives as the state values**
  - The root state value should be a plain JS object
  - The state should contain the smallest amount of data needed to make the app work
  - Classes, Promises, functions, and other non-plain values should _not_ go in the Redux state
  - Reducers must not create random values like `Math.random()` or `Date.now()`
  - It's okay to have other state values that are not in the Redux store (like local component state) side-by side with Redux
- **Actions are plain objects with a `type` field that describe what happened**
  - The `type` field should be a readable string, and is usually written as `'feature/eventName'`
  - Actions may contain other values, which are typically stored in the `action.payload` field
  - Actions should have the smallest amount of data needed to describe what happened
- **Reducers are functions that look like `(state, action) => newState`**
  - Reducers must always follow special rules:
    - Only calculate the new state based on the `state` and `action` arguments
    - Never mutate the existing `state` - always return a copy
    - No "side effects" like AJAX calls or async logic
- **Reducers should be split up to make them easier to read**
  - Reducers are usually split based on top-level state keys or "slices" of state
  - Reducers are usually written in "slice" files, organized into "feature" folders
  - Reducers can be combined together with the Redux `combineReducers` function
  - The key names given to `combineReducers` define the top-level state object keys

:::

## What's Next?

We now have some reducer logic that will update our state, but those reducers won't do anything by themselves. They need
to be put inside a Redux store, which can call the reducer code with actions when something has happened.

In [Part 4: Store](./part-4-store.md), we'll see how to create a Redux store and run our reducer logic.

---

id: part-4-store
title: 'Redux Fundamentals, Part 4: Store'
sidebar_label: 'Store'
description: 'The official Redux Fundamentals tutorial: learn how to create and use a Redux store'

---

import { DetailedExplanation } from '../../components/DetailedExplanation'

# Redux Fundamentals, Part 4: Store

:::tip What You'll Learn

- How to create a Redux store
- How to use the store to update state and listen for updates
- How to configure the store to extend its capabilities
- How to set up the Redux DevTools Extension to debug your app

:::

## Introduction

In [Part 3: State, Actions, and Reducers](./part-3-state-actions-reducers.md), we started writing our example todo app. We
listed business requirements, defined the **state** structure we need to make the app work, and created a series of action types
to describe "what happened" and match the kinds of events that can happen as a user interacts with our app. We also wrote **reducer** functions that can handle updating our `state.todos` and `state.filters` sections, and saw how we can use the Redux `combineReducers` function
to create a "root reducer" based on the different "slice reducers" for each feature in our app.

Now, it's time to pull those pieces together, with the central piece of a Redux app: the **store**.

## Redux Store

The Redux **store** brings together the state, actions, and reducers that make up your app. The store has several responsibilities:

- Holds the current application state inside
- Allows access to the current state via [`store.getState()`](../../api/Store.md#getState);
- Allows state to be updated via [`store.dispatch(action)`](../../api/Store.md#dispatch);
- Registers listener callbacks via [`store.subscribe(listener)`](../../api/Store.md#subscribe);
- Handles unregistering of listeners via the `unsubscribe` function returned by [`store.subscribe(listener)`](../../api/Store.md#subscribe).

It's important to note that **you'll only have a single store in a Redux application**. When you want to split your data handling logic, you'll use [reducer composition](./part-3-state-actions-reducers.md#splitting-reducers) and create multiple reducers that
can be combined together, instead of creating separate stores.

### Creating a Store

**Every Redux store has a single root reducer function**. In the previous section, we [created a root reducer function using `combineReducers`](./part-3-state-actions-reducers.md#combinereducers). That root reducer is currently defined in `src/reducer.js` in our example app. Let's import that root reducer and create our first store.

The Redux core library has [**a `createStore` API**](../../api/createStore.md) that will create the store. Add a new file
called `store.js`, and import `createStore` and the root reducer. Then, call `createStore` and pass in the root reducer:

```js title="src/store.js"
import { createStore } from "redux";
import rootReducer from "./reducer";

// highlight-next-line
const store = createStore(rootReducer);

export default store;
```

### Loading Initial State

`createStore` can also accept a `preloadedState` value as its second argument. You could use this to add
initial data when the store is created, such as values that were included in an HTML page sent from the server, or persisted in
`localStorage` and read back when the user visits the page again, like this:

```js title="storeStatePersistenceExample.js"
import { createStore } from "redux";
import rootReducer from "./reducer";

// highlight-start
let preloadedState;
const persistedTodosString = localStorage.getItem("todos");

if (persistedTodosString) {
  preloadedState = {
    todos: JSON.parse(persistedTodosString),
  };
}

const store = createStore(rootReducer, preloadedState);
// highlight-end
```

## Dispatching Actions

Now that we have created a store, let's verify our program works! Even without any UI, we can already test the update logic.

:::tip

Before you run this code, try going back to `src/features/todos/todosSlice.js`, and remove all the example todo objects from the `initialState` so that it's an empty array. That will make the output from this example a bit easier to read.

:::

```js title="src/index.js"
// Omit existing React imports

import store from "./store";

// Log the initial state
// highlight-next-line
console.log("Initial state: ", store.getState());
// {todos: [....], filters: {status, colors}}

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
// highlight-start
const unsubscribe = store.subscribe(() =>
  console.log("State after dispatch: ", store.getState())
);
// highlight-end

// Now, dispatch some actions

// highlight-next-line
store.dispatch({ type: "todos/todoAdded", payload: "Learn about actions" });
store.dispatch({ type: "todos/todoAdded", payload: "Learn about reducers" });
store.dispatch({ type: "todos/todoAdded", payload: "Learn about stores" });

store.dispatch({ type: "todos/todoToggled", payload: 0 });
store.dispatch({ type: "todos/todoToggled", payload: 1 });

store.dispatch({ type: "filters/statusFilterChanged", payload: "Active" });

store.dispatch({
  type: "filters/colorFilterChanged",
  payload: { color: "red", changeType: "added" },
});

// Stop listening to state updates
// highlight-next-line
unsubscribe();

// Dispatch one more action to see what happens

store.dispatch({ type: "todos/todoAdded", payload: "Try creating a store" });

// Omit existing React rendering logic
```

Remember, every time we call `store.dispatch(action)`:

- The store calls `rootReducer(state, action)`
  - That root reducer may call other slice reducers inside of itself, like `todosReducer(state.todos, action)`
- The store saves the _new_ state value inside
- The store calls all the listener subscription callbacks
- If a listener has access to the `store`, it can now call `store.getState()` to read the latest state value

If we look at the console log output from that example, you can see how the
Redux state changes as each action was dispatched:

![Logged Redux state after dispatching actions](/img/tutorials/fundamentals/initial-state-updates.png)

Notice that our app did _not_ log anything from the last action. That's because we removed the listener callback when we called `unsubscribe()`, so nothing else ran after the action was dispatched.

We specified the behavior of our app before we even started writing the UI. That
helps give us confidence that the app will work as intended.

:::info

If you want, you can now try writing tests for your reducers. Because they're [pure functions](../../understanding/thinking-in-redux/ThreePrinciples.md#changes-are-made-with-pure-functions), it should be straightforward to test them. Call them with an example `state` and `action`,
take the result, and check to see if it matches what you expect:

```js title="todosSlice.spec.js"
import todosReducer from "./todosSlice";

test("Toggles a todo based on id", () => {
  const initialState = [{ id: 0, text: "Test text", completed: false }];

  const action = { type: "todos/todoToggled", payload: 0 };
  const result = todosReducer(initialState, action);
  expect(result[0].completed).toBe(true);
});
```

:::

## Inside a Redux Store

It might be helpful to take a peek inside a Redux store to see how it works. Here's a miniature example of a working Redux store, in about 25 lines of code:

```js title="miniReduxStoreExample.js"
function createStore(reducer, preloadedState) {
  let state = preloadedState;
  const listeners = [];

  function getState() {
    return state;
  }

  function subscribe(listener) {
    listeners.push(listener);
    return function unsubscribe() {
      const index = listeners.indexOf(listener);
      listeners.splice(index, 1);
    };
  }

  function dispatch(action) {
    state = reducer(state, action);
    listeners.forEach((listener) => listener());
  }

  dispatch({ type: "@@redux/INIT" });

  return { dispatch, subscribe, getState };
}
```

This small version of a Redux store works well enough that you could use it to replace the actual Redux `createStore` function you've been using in your app so far. (Try it and see for yourself!) [The actual Redux store implementation is longer and a bit more complicated](https://github.com/reduxjs/redux/blob/v4.0.5/src/createStore.js), but most of that is comments, warning messages, and handling some edge cases.

As you can see, the actual logic here is fairly short:

- The store has the current `state` value and `reducer` function inside of itself
- `getState` returns the current state value
- `subscribe` keeps an array of listener callbacks and returns a function to remove the new callback
- `dispatch` calls the reducer, saves the state, and runs the listeners
- The store dispatches one action on startup to initialize the reducers with their state
- The store API is an object with `{dispatch, subscribe, getState}` inside

To emphasize one of those in particular: notice that `getState` just returns whatever the current `state` value is. That means that **by default, nothing prevents you from accidentally mutating the current state value!** This code will run without any errors, but it's incorrect:

```js
const state = store.getState();
// ❌ Don't do this - it mutates the current state!
state.filters.status = "Active";
```

In other words:

- The Redux store doesn't make an extra copy of the `state` value when you call `getState()`. It's exactly the same reference that was returned from the root reducer function
- The Redux store doesn't do anything else to prevent accidental mutations. It _is_ possible to mutate the state, either inside a reducer or outside the store, and you must always be careful to avoid mutations.

One common cause of accidental mutations is sorting arrays. [**Calling `array.sort()` actually mutates the existing array**](https://doesitmutate.xyz/sort/). If we called `const sortedTodos = state.todos.sort()`, we'd end up mutating the real store state unintentionally.

:::tip

In [Part 8: Modern Redux](./part-8-modern-redux.md), we'll see how Redux Toolkit helps avoid mutations in reducers, and detects and warns about accidental mutations outside of reducers.

:::

## Configuring the Store

We've already seen that we can pass `rootReducer` and `preloadedState` arguments to `createStore`. However, `createStore` can also take one more argument, which is used to customize the store's abilities and give it new powers.

Redux stores are customized using something called a **store enhancer**. A store enhancer is like a special version of `createStore` that adds another layer wrapping around the original Redux store. An enhanced store can then change how the store behaves, by supplying its own versions of the store's `dispatch`, `getState`, and `subscribe` functions instead of the originals.

For this tutorial, we won't go into details about how store enhancers actually work - we'll focus on how to use them.

### Creating a Store with Enhancers

Our project has two small example store enhancers available, in the `src/exampleAddons/enhancers.js` file:

- `sayHiOnDispatch`: an enhancer that always logs `'Hi'!` to the console every time an action is dispatched
- `includeMeaningOfLife`: an enhancer that always adds the field `meaningOfLife: 42` to the value returned from `getState()`

Let's start by using `sayHiOnDispatch`. First, we'll import it, and pass it to `createStore`:

```js title="src/store.js"
import { createStore } from "redux";
import rootReducer from "./reducer";
import { sayHiOnDispatch } from "./exampleAddons/enhancers";

const store = createStore(rootReducer, undefined, sayHiOnDispatch);

export default store;
```

We don't have a `preloadedState` value here, so we'll pass `undefined` as the second argument instead.

Next, let's try dispatching an action:

```js title="src/index.js"
import store from "./store";

// highlight-start
console.log("Dispatching action");
store.dispatch({ type: "todos/todoAdded", payload: "Learn about actions" });
console.log("Dispatch complete");
// highlight-end
```

Now look at the console. You should see `'Hi!'` logged there, in between the other two log statements:

![sayHi store enhancer logging](/img/tutorials/fundamentals/sayhi-enhancer-logging.png)

The `sayHiOnDispatch` enhancer wrapped the original `store.dispatch` function with its own specialized version of `dispatch`. When we called `store.dispatch()`, we were actually calling the wrapper function from `sayHiOnDispatch`, which called the original and then printed 'Hi'.

Now, let's try adding a second enhancer. We can import `includeMeaningOfLife` from that same file... but we have a problem. **`createStore` only accepts one enhancer as its third argument!** How can we pass _two_ enhancers at the same time?

What we really need is some way to merge both the `sayHiOnDispatch` enhancer and the `includeMeaningOfLife` enhancer into a single combined enhancer, and then pass that instead.

Fortunately, **the Redux core includes [a `compose` function](../../api/compose.md) that can be used to merge multiple enhancers together**. Let's use that here:

```js title="src/store.js"
// highlight-next-line
import { createStore, compose } from "redux";
import rootReducer from "./reducer";
import {
  sayHiOnDispatch,
  includeMeaningOfLife,
} from "./exampleAddons/enhancers";

// highlight-next-line
const composedEnhancer = compose(sayHiOnDispatch, includeMeaningOfLife);

// highlight-next-line
const store = createStore(rootReducer, undefined, composedEnhancer);

export default store;
```

Now we can see what happens if we use the store:

```js title="src/index.js"
import store from "./store";

store.dispatch({ type: "todos/todoAdded", payload: "Learn about actions" });
// log: 'Hi!'

console.log("State after dispatch: ", store.getState());
// log: {todos: [...], filters: {status, colors}, meaningOfLife: 42}
```

And the logged output looks like this:

![meaningOfLife store enhancer logging](/img/tutorials/fundamentals/meaningOfLife-enhancer-logging.png)

So, we can see that both enhancers are modifying the behavior of the store at the same time. `sayHiOnDispatch` has changed how `dispatch` works, and `includeMeaningOfLife` has changed how `getState` works.

Store enhancers are a very powerful way to modify the store, and almost all Redux apps will include at least one enhancer when setting up the store.

:::tip

If you don't have any `preloadedState` to pass in, you can pass the `enhancer` as the second argument instead:

```js
const store = createStore(rootReducer, storeEnhancer);
```

:::

## Middleware

Enhancers are powerful because they can override or replace any of the store's methods: `dispatch`, `getState`, and `subscribe`.

But, much of the time, we only need to customize how `dispatch` behaves. It would be nice if there was a way to add some customized behavior when `dispatch` runs.

Redux uses a special kind of addon called **middleware** to let us customize the `dispatch` function.

If you've ever used a library like Express or Koa, you might already be familiar with the idea of adding middleware to customize behavior. In these frameworks, middleware is some code you can put between the framework receiving a request, and the framework generating a response. For example, Express or Koa middleware may add CORS headers, logging, compression, and more. The best feature of middleware is that it's composable in a chain. You can use multiple independent third-party middleware in a single project.

Redux middleware solves different problems than Express or Koa middleware, but in a conceptually similar way. **Redux middleware provides a third-party extension point between dispatching an action, and the moment it reaches the reducer.** People use Redux middleware for logging, crash reporting, talking to an asynchronous API, routing, and more.

First, we'll look at how to add middleware to the store, then we'll show how you can write your own.

### Using Middleware

We already saw that you can customize a Redux store using store enhancers. Redux middleware are actually implemented on top of a very special store enhancer that comes built in with Redux, called **`applyMiddleware`**.

Since we already know how to add enhancers to our store, we should be able to do that now. We'll start with `applyMiddleware` by itself, and we'll add three example middleware that have been included in this project.

```js title="src/store.js"
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducer";
import { print1, print2, print3 } from "./exampleAddons/middleware";

const middlewareEnhancer = applyMiddleware(print1, print2, print3);

// Pass enhancer as the second arg, since there's no preloadedState
const store = createStore(rootReducer, middlewareEnhancer);

export default store;
```

As their names say, each of these middleware will print a number when an action is dispatched.

What happens if we dispatch now?

```js title="src/index.js"
import store from "./store";

store.dispatch({ type: "todos/todoAdded", payload: "Learn about actions" });
// log: '1'
// log: '2'
// log: '3'
```

And we can see the output in the console:

![print middleware logging](/img/tutorials/fundamentals/print-middleware-logging.png)

So how does that work?

**Middleware form a pipeline around the store's `dispatch` method**. When we call `store.dispatch(action)`, we're _actually_ calling the first middleware in the pipeline. That middleware can then do anything it wants when it sees the action. Typically, a middleware will check to see if the action is a specific type that it cares about, much like a reducer would. If it's the right type, the middleware might run some custom logic. Otherwise, it passes the action to the next middleware in the pipeline.

_Unlike_ a reducer, **middleware can have side effects inside**, including timeouts and other async logic.

In this case, the action is passed through:

1. The `print1` middleware (which we see as `store.dispatch`)
2. The `print2` middleware
3. The `print3` middleware
4. The original `store.dispatch`
5. The root reducer inside `store`

And since these are all function calls, they all _return_ from that call stack. So, the `print1` middleware is the first to run, and the last to finish.

### Writing Custom Middleware

We can also write our own middleware. You might not need to do this all the time, but custom middleware are a great way to add specific behaviors to a Redux application.

**Redux middleware are written as a series of three nested functions**. Let's see what that pattern looks like. We'll start by trying to write this middleware using the `function` keyword, so that it's more clear what's happening:

```js
// Middleware written as ES5 functions

// Outer function:
function exampleMiddleware(storeAPI) {
  return function wrapDispatch(next) {
    return function handleAction(action) {
      // Do anything here: pass the action onwards with next(action),
      // or restart the pipeline with storeAPI.dispatch(action)
      // Can also use storeAPI.getState() here

      return next(action);
    };
  };
}
```

Let's break down what these three functions do and what their arguments are.

- `exampleMiddleware`: The outer function is actually the "middleware" itself. It will be called by `applyMiddleware`, and receives a `storeAPI` object containing the store's `{dispatch, getState}` functions. These are the same `dispatch` and `getState` functions that are actually part of the store. If you call this `dispatch` function, it will send the action to the _start_ of the middleware pipeline. This is only called once.
- `wrapDispatch`: The middle function receives a function called `next` as its argument. This function is actually the _next middleware_ in the pipeline. If this middleware is the last one in the sequence, then `next` is actually the original `store.dispatch` function instead. Calling `next(action)` passes the middleware to the _next_ middleware in the pipeline. This is also only called once
- `handleAction`: Finally, the inner function receives the current `action` as its argument, and will be called _every_ time an action is dispatched.

:::tip

You can give these middleware functions any names you want, but it can help to use these names to remember what each one does:

- Outer: `someCustomMiddleware` (or whatever your middleware is called)
- Middle: `wrapDispatch`
- Inner: `handleAction`

:::

Because these are normal functions, we can also write them using ES6 arrow functions. This lets us write them shorter because arrow functions don't have to have a `return` statement, but it can also be a bit harder to read if you're not yet familiar with arrow functions and implicit returns.

Here's the same example as above, using arrow functions:

```js
const anotherExampleMiddleware = (storeAPI) => (next) => (action) => {
  // Do something in here, when each action is dispatched

  return next(action);
};
```

We're still nesting those three functions together, and returning each function, but the implicit returns make this shorter.

### Your First Custom Middleware

Let's say we want to add some logging to our application. We'd like to see the contents of each action in the console when it's dispatched, and we'd like to see what the state is after the action has been handled by the reducers.

:::info

These example middleware aren't specifically part of the actual todo app, but you can try adding them to your project to see what happens when you use them.

:::

We can write a small middleware that will log that information to the console for us:

```js
const loggerMiddleware = (storeAPI) => (next) => (action) => {
  console.log("dispatching", action);
  let result = next(action);
  console.log("next state", storeAPI.getState());
  return result;
};
```

Whenever an action is dispatched:

- The first part of the `handleAction` function runs, and we print `'dispatching'`
- We pass the action to the `next` section, which may be another middleware or the real `store.dispatch`
- Eventually the reducers run and the state is updated, and the `next` function returns
- We can now call `storeAPI.getState()` and see what the new state is
- We finish by returning whatever `result` value came from the `next` middleware

Any middleware can return any value, and the return value from the first middleware in the pipeline is actually returned when you call `store.dispatch()`. For example:

```js
const alwaysReturnHelloMiddleware = storeAPI => next => action {
  const originalResult = next(action);
  // Ignore the original result, return something else
  return 'Hello!'
}

const middlewareEnhancer = applyMiddleware(alwaysReturnHelloMiddleware)
const store = createStore(rootReducer, middlewareEnhancer)

const dispatchResult = store.dispatch({type: 'some/action'})
console.log(dispatchResult)
// log: 'Hello!'
```

Let's try one more example. Middleware often look for a specific action, and then do something when that action is dispatched. Middleware also have the ability to run async logic inside. We can write a middleware that prints something on a delay when it sees a certain action:

```js
const delayedMessageMiddleware = (storeAPI) => (next) => (action) => {
  if (action.type === "todos/todoAdded") {
    setTimeout(() => {
      console.log("Added a new todo: ", action.payload);
    }, 1000);
  }

  return next(action);
};
```

This middleware will look for "todo added" actions. Every time it sees one, it sets a 1-second timer, and then prints the action's payload to the console.

### Middleware Use Cases

So, what can we do with middleware? Lots of things!

A middleware can do anything it wants when it sees a dispatched action:

- Log something to the console
- Set timeouts
- Make asynchronous API calls
- Modify the action
- Pause the action or even stop it entirely

and anything else you can think of.

In particular, **middleware are _intended_ to contain logic with side effects**. In addition, **middleware can modify `dispatch` to accept things that are _not_ plain action objects**. We'll talk more about both of these [in Part 6: Async Logic](./part-6-async-logic.md).

## Redux DevTools

Finally, there's one more very important thing to cover with configuring the store.

**Redux was specifically designed to make it easier to understand when, where, why, and how your state has changed over time**. As part of that, Redux was built to enable the use of the **Redux DevTools** - an addon that shows you a history of what actions were dispatched, what those actions contained, and how the state changed after each dispatched action.

The Redux DevTools UI is available as a browser extension for [Chrome](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en) and [Firefox](https://addons.mozilla.org/en-US/firefox/addon/reduxdevtools/). If you haven't already added that to your browser, go ahead and do that now.

Once that's installed, open up the browser's DevTools window. You should now see a new "Redux" tab there. It doesn't do anything, yet - we've got to set it up to talk to a Redux store first.

### Adding the DevTools to the Store

Once the extension is installed, we need to configure the store so that the DevTools can see what's happening inside. The DevTools require a specific store enhancer to be added to make that possible.

The [Redux DevTools Extension docs](https://github.com/zalmoxisus/redux-devtools-extension) have some instructions on how to set up the store, but the steps listed are a bit complicated. However, there's an NPM package called `redux-devtools-extension` that takes care of the complicated part. That package exports a specialized `composeWithDevTools` function that we can use instead of the original Redux `compose` function.

Here's how that looks:

```js title="src/store.js"
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducer";
import { print1, print2, print3 } from "./exampleAddons/middleware";

const composedEnhancer = composeWithDevTools(
  // EXAMPLE: Add whatever middleware you actually want to use here
  applyMiddleware(print1, print2, print3)
  // other store enhancers if any
);

const store = createStore(rootReducer, composedEnhancer);
export default store;
```

Make sure that `index.js` is still dispatching an action after importing the store. Now, open up the Redux DevTools tab in the browser's DevTools window. You should see something that looks like this:

![Redux DevTools Extension: action tab](/img/tutorials/fundamentals/devtools-action-tab.png)

There's a list of dispatched actions on the left. If we click one of them, the right pane shows several tabs:

- The contents of that action object
- The entire Redux state as it looked after the reducer ran
- The diff between the previous state and this state
- If enabled, the function stack trace leading back to the line of code that called `store.dispatch()` in the first place

Here's what the "State" and "Diff" tabs look like after we dispatched that "add todo" action:

![Redux DevTools Extension: state tab](/img/tutorials/fundamentals/devtools-state-tab.png)

![Redux DevTools Extension: diff tab](/img/tutorials/fundamentals/devtools-diff-tab.png)

These are very powerful tools that can help us debug our apps and understand exactly what's happening inside.

## What You've Learned

As you've seen, the store is the central piece of every Redux application. Stores contain state and handle actions by running reducers, and can be customized to add additional behaviors.

Let's see how our example app looks now:

<iframe
  class="codesandbox"
  src="https://codesandbox.io/embed/github/reduxjs/redux-fundamentals-example-app/tree/checkpoint-2-storeSetup/?fontsize=14&hidenavigation=1&theme=dark&module=%2Fsrc%2Fstore.js&runonclick=1"
  title="redux-fundamentals-example-app"
  allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
  sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
></iframe>

And as a reminder, here's what we covered in this section:

:::tip Summary

- **Redux apps always have a single store**
  - Stores are created with the Redux `createStore` API
  - Every store has a single root reducer function
- **Stores have three main methods**
  - `getState` returns the current state
  - `dispatch` sends an action to the reducer to update the state
  - `subscribe` takes a listener callback that runs each time an action is dispatched
- **Store enhancers let us customize the store when it's created**
  - Enhancers wrap the store and can override its methods
  - `createStore` accepts one enhancer as an argument
  - Multiple enhancers can be merged together using the `compose` API
- **Middleware are the main way to customize the store**
  - Middleware are added using the `applyMiddleware` enhancer
  - Middleware are written as three nested functions inside each other
  - Middleware run each time an action is dispatched
  - Middleware can have side effects inside
- **The Redux DevTools let you see what's changed in your app over time**
  - The DevTools Extension can be installed in your browser
  - The store needs the DevTools enhancer added, using `composeWithDevTools`
  - The DevTools show dispatched actions and changes in state over time

:::

## What's Next?

We now have a working Redux store that can run our reducers and update the state when we dispatch actions.

However, every app needs a user interface to display the data and let the user do something useful. In [Part 5: UI and React](./part-5-ui-and-react.md), we'll see how the Redux store works with a UI, and specifically see how Redux can work together with React.

---

id: part-5-ui-react
title: 'Redux Fundamentals, Part 5: UI and React'
sidebar_label: 'UI and React'
description: 'The official Redux Fundamentals tutorial: learn how to use Redux with React'

---

import { DetailedExplanation } from '../../components/DetailedExplanation'

# Redux Fundamentals, Part 5: UI and React

:::tip What You'll Learn

- How a Redux store works with a UI
- How to use Redux with React

:::

## Introduction

In [Part 4: Store](./part-4-store.md), we saw how to create a Redux store, dispatch actions, and read the current state. We also looked at how a store works inside, how enhancers and middleware let us customize the store with additional abilities, and how to add the Redux DevTools to let us see what's happening inside our app as actions are dispatched.

In this section, we'll add a User Interface for our todo app. We'll see how Redux works with a UI layer overall, and we'll specifically cover how Redux works together with React.

## Integrating Redux with a UI

Redux is a standalone JS library. As we've already seen, you can create and use a Redux store even if you don't have a user interface set up. This also means that **you can use Redux with any UI framework** (or even without _any_ UI framework), and use it on both client and server. You can write Redux apps with React, Vue, Angular, Ember, jQuery, or vanilla JavaScript.

That said, **Redux was specifically designed to work well with [React](https://reactjs.org)**. React lets you describe your UI as a function of your state, and Redux contains state and updates it in response to actions.

Because of that, we'll use React for this tutorial as we build our todo app, and cover the basics of how to use React with Redux.

Before we get to that part, let's take a quick look at how Redux interacts with a UI layer in general.

### Basic Redux and UI Integration

Using Redux with any UI layer requires a few consistent steps:

1. Create a Redux store
2. Subscribe to updates
3. Inside the subscription callback:
   1. Get the current store state
   2. Extract the data needed by this piece of UI
   3. Update the UI with the data
4. If necessary, render the UI with initial state
5. Respond to UI inputs by dispatching Redux actions

Let's go back to the [the counter app example we saw in Part 1](./part-1-overview.md) and see how it follows those steps:

```js
// 1) Create a new Redux store with the `createStore` function
const store = Redux.createStore(counterReducer);

// 2) Subscribe to redraw whenever the data changes in the future
store.subscribe(render);

// Our "user interface" is some text in a single HTML element
const valueEl = document.getElementById("value");

// 3) When the subscription callback runs:
function render() {
  // 3.1) Get the current store state
  const state = store.getState();
  // 3.2) Extract the data you want
  const newValue = state.value.toString();

  // 3.3) Update the UI with the new value
  valueEl.innerHTML = newValue;
}

// 4) Display the UI with the initial store state
render();

// 5) Dispatch actions based on UI inputs
document.getElementById("increment").addEventListener("click", function () {
  store.dispatch({ type: "counter/incremented" });
});
```

No matter what UI layer you're using, **Redux works this same way with every UI**. The actual implementations are typically a bit more complicated to help optimize performance, but it's the same steps each time.

Since Redux is a separate library, there are different "binding" libraries to help you use Redux with a given UI framework. Those UI binding libraries handle the details of subscribing to the store and efficiently updating the UI as state changes, so that you don't have to write that code yourself.

## Using Redux with React

The official [**React-Redux UI bindings library**](https://react-redux.js.org) is a separate package from the Redux core. You'll need to install that in addition as well:

```sh
npm install react-redux
```

(If you don't use npm, you may grab the latest UMD build from unpkg (either a [development](https://unpkg.com/react-redux@latest/dist/react-redux.js) or a [production](https://unpkg.com/react-redux@latest/dist/react-redux.min.js) build). The UMD build exports a global called `window.ReactRedux` if you add it to your page via a `<script>` tag.)

For this tutorial, we'll cover the most important patterns and examples you need to use React and Redux together, and see how they work in practice as part of our todo app.

:::info

See **the official React-Redux docs at <https://react-redux.js.org>** for a complete guide on how to use Redux and React together, and reference documentation on the React-Redux APIs.

:::

### Designing the Component Tree

Much like we [designed the state structure](./part-3-state-actions-reducers.md#designing-the-state-structure) based on requirements, we can also design the overall set of UI components and how they relate to each other in the application.

Based on [the list of business requirements for the app](./part-3-state-actions-reducers.md#defining-requirements), at a minimum we're going to need this set of components:

- **`<App>`**: the root component that renders everything else.
  - **`<Header>`**: contains the "new todo" text input and the "complete all todos" checkbox
  - **`<TodoList>`**: a list of all currently visible todo items, based on the filtered results
    - **`<TodoListItem>`**: a single todo list item, with a checkbox that can be clicked to toggle the todo's completed status, and a color category selector
  - **`<Footer>`**: Shows the number of active todos and controls for filtering the list based on completed status and color category

Beyond this basic component structure, we could potentially divide the components up in several different ways. For example, the `<Footer>` component _could_ be one larger component, or it could have multiple smaller components inside like `<CompletedTodos>`, `<StatusFilter>`, and `<ColorFilters>`. There's no single right way to divide these, and you'll find that it may be better to write larger components or split things into many smaller components depending on your situation.

For now, we'll start with this small list of components to keep things easier to follow. On that note, since we assume that [you already know React](https://reactjs.org), **we're going to skip past the details of how to write the layout code for these components and focus on how to actually use the React-Redux library in your React components**.

Here's the initial React UI of this app looks like before we start adding any Redux-related logic:

<iframe
  class="codesandbox"
  src="https://codesandbox.io/embed/github/reduxjs/redux-fundamentals-example-app/tree/checkpoint-3-initialUI/?fontsize=14&hidenavigation=1&theme=dark&view=preview&runonclick=1"
  title="redux-fundamentals-example-app"
  allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
  sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
></iframe>

### Reading State from the Store with `useSelector`

We know that we need to be able to show a list of todo items. Let's start by creating a `<TodoList>` component that can read the list of todos from the store, loop over them, and show one `<TodoListItem>` component for each todo entry.

You should be familiar with [React hooks like `useState`](https://reactjs.org/docs/hooks-state.html), which can be called in React function components to give them access to React state values. React also lets us write [custom hooks](https://reactjs.org/docs/hooks-custom.html), which let us extract reusable hooks to add our own behavior on top of React's built-in hooks.

Like many other libraries, React-Redux includes [its own custom hooks](https://react-redux.js.org/api/hooks), which you can use in your own components. The React-Redux hooks give your React component the ability to talk to the Redux store by reading state and dispatching actions.

The first React-Redux hook that we'll look at is the [**`useSelector` hook**](https://react-redux.js.org/api/hooks#useselector), which **lets your React components read data from the Redux store**.

`useSelector` accepts a single function, which we call a **selector** function. **A selector is a function that takes the entire Redux store state as its argument, reads some value from the state, and returns that result**.

For example, we know that our todo app's Redux state keeps the array of todo items as `state.todos`. We can write a small selector function that returns that todos array:

```js
const selectTodos = (state) => state.todos;
```

Or, maybe we want to find out how many todos are currently marked as "completed":

```js
const selectTotalCompletedTodos = (state) => {
  const completedTodos = state.todos.filter((todo) => todo.completed);
  return completedTodos.length;
};
```

So, **selectors can return values from the Redux store state, and also return _derived_ values based on that state as well**.

Let's read the array of todos into our `<TodoList>` component. First, we'll import the `useSelector` hook from the `react-redux` library, then call it with a selector function as its argument:

```jsx title="src/features/todos/TodoList.js"
import React from "react";
// highlight-next-line
import { useSelector } from "react-redux";
import TodoListItem from "./TodoListItem";

// highlight-next-line
const selectTodos = (state) => state.todos;

const TodoList = () => {
  // highlight-next-line
  const todos = useSelector(selectTodos);

  // since `todos` is an array, we can loop over it
  const renderedListItems = todos.map((todo) => {
    return <TodoListItem key={todo.id} todo={todo} />;
  });

  return <ul className="todo-list">{renderedListItems}</ul>;
};

export default TodoList;
```

The first time the `<TodoList>` component renders, the `useSelector` hook will call `selectTodos` and pass in the _entire_ Redux state object. Whatever the selector returns will be returned by the hook to your component. So, the `const todos` in our component will end up holding the same `state.todos` array inside our Redux store state.

But, what happens if we dispatch an action like `{type: 'todos/todoAdded'}`? The Redux state will be updated by the reducer, but our component needs to know that something has changed so that it can re-render with the new list of todos.

We know that we can call `store.subscribe()` to listen for changes to the store, so we _could_ try writing the code to subscribe to the store in every component. But, that would quickly get very repetitive and hard to handle.

Fortunately, **`useSelector` automatically subscribes to the Redux store for us!** That way, any time an action is dispatched, it will call its selector function again right away. **If the value returned by the selector changes from the last time it ran, `useSelector` will force our component to re-render with the new data**. All we have to do is call `useSelector()` once in our component, and it does the rest of the work for us.

However, there's a very important thing to remember here:

:::caution

**`useSelector` compares its results using strict `===` reference comparisons, so the component will re-render any time the selector result is a new reference!** This means that if you create a new reference in your selector and return it, your component could re-render _every_ time an action has been dispatched, even if the data really isn't different.

:::

For example, passing this selector to `useSelector` will cause the component to _always_ re-render, because `array.map()` always returns a new array reference:

```js
// Bad: always returning a new reference
const selectTodoDescriptions = (state) => {
  // This creates a new array reference!
  return state.todos.map((todo) => todo.text);
};
```

:::tip

We'll talk about one way to fix this issue later in this section. We'll also talk about how you can improve performance and avoid unnecessary re-renders using "memoized" selector function in [Part 7: Standard Redux Patterns](./part-7-standard-patterns.md).

:::

It's also worth noting that we don't have to write a selector function as a separate variable. You can write a selector function directly inside the call to `useSelector`, like this:

```js
const todos = useSelector((state) => state.todos);
```

### Dispatching Actions with `useDispatch`

We now know how to read data from the Redux store into our components. But, how can we dispatch actions to the store from a component? We know that outside of React, we can call `store.dispatch(action)`. Since we don't have access to the store in a component file, we need some way to get access to the `dispatch` function by itself inside our components.

The React-Redux [**`useDispatch` hook**](https://react-redux.js.org/api/hooks#usedispatch) gives us the store's `dispatch` method as its result. (In fact, the implementation of the hook really is `return store.dispatch`.)

So, we can call `const dispatch = useDispatch()` in any component that needs to dispatch actions, and then call `dispatch(someAction)` as needed.

Let's try that in our `<Header>` component. We know that we need to let the user type in some text for a new todo item, and then dispatch a `{type: 'todos/todoAdded'}` action containing that text.

We'll write a typical React form component that uses ["controlled inputs"](https://reactjs.org/docs/forms.html#controlled-components) to let the user type in the form text. Then, when the user presses the Enter key specifically, we'll dispatch that action.

```jsx title="src/features/header/Header.js"
import React, { useState } from "react";
// highlight-next-line
import { useDispatch } from "react-redux";

const Header = () => {
  const [text, setText] = useState("");
  // highlight-next-line
  const dispatch = useDispatch();

  const handleChange = (e) => setText(e.target.value);

  const handleKeyDown = (e) => {
    const trimmedText = e.target.value.trim();
    // If the user pressed the Enter key:
    if (e.key === "Enter" && trimmedText) {
      // highlight-start
      // Dispatch the "todo added" action with this text
      dispatch({ type: "todos/todoAdded", payload: trimmedText });
      // highlight-end
      // And clear out the text input
      setText("");
    }
  };

  return (
    <input
      type="text"
      placeholder="What needs to be done?"
      autoFocus={true}
      value={text}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
    />
  );
};

export default Header;
```

### Passing the Store with `Provider`

Our components can now read state from the store, and dispatch actions to the store. However, we're still missing something. Where and how are the React-Redux hooks finding the right Redux store? A hook is a JS function, so it can't automatically import a store from `store.js` by itself.

Instead, we have to specifically tell React-Redux what store we want to use in our components. We do this by **rendering a `<Provider>` component around our entire `<App>`, and passing the Redux store as a prop to `<Provider>`**. After we do this once, every component in the application will be able to access the Redux store if needs to.

Let's add that to our main `index.js` file:

```jsx title="src/index.js"
import React from "react";
import ReactDOM from "react-dom";
// highlight-next-line
import { Provider } from "react-redux";

import App from "./App";
import store from "./store";

ReactDOM.render(
  // highlight-start
  // Render a `<Provider>` around the entire `<App>`,
  // and pass the Redux store to as a prop
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  // highlight-end
  document.getElementById("root")
);
```

That covers the key parts of using React-Redux with React:

- Call the `useSelector` hook to read data in React components
- Call the `useDispatch` hook to dispatch actions in React components
- Put `<Provider store={store}>` around your entire `<App>` component so that other components can talk to the store

We should now be able to actually interact with the app! Here's the working UI so far:

<iframe
  class="codesandbox"
  src="https://codesandbox.io/embed/github/reduxjs/redux-fundamentals-example-app/tree/checkpoint-4-initialHooks/?fontsize=14&hidenavigation=1&theme=dark&runonclick=1"
  title="redux-fundamentals-example-app"
  allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
  sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
></iframe>

Now, let's look at a couple more ways we can use these together in our todo app.

## React-Redux Patterns

### Global State, Component State, and Forms

By now you might be wondering, "Do I always have to put all my app's state into the Redux store?"

The answer is **NO. Global state that is needed across the app should go in the Redux store. State that's only needed in one place should be kept in component state.**

A good example of this is the `<Header>` component we wrote earlier. We _could_ keep the current text input string in the Redux store, by dispatching an action in the input's `onChange` handler and keeping it in our reducer. But, that doesn't give us any benefit. The only place that text string is used is here, in the `<Header>` component.

So, it makes sense to keep that value in a `useState` hook here in the `<Header>` component.

Similarly, if we had a boolean flag called `isDropdownOpen`, no other components in the app would care about that - it should really stay local to this component.

:::tip

**In a React + Redux app, your global state should go in the Redux store, and your local state should stay in React components.**

If you're not sure where to put something, here are some common rules of thumb for determining what kind of data should be put into Redux:

- Do other parts of the application care about this data?
- Do you need to be able to create further derived data based on this original data?
- Is the same data being used to drive multiple components?
- Is there value to you in being able to restore this state to a given point in time (ie, time travel debugging)?
- Do you want to cache the data (ie, use what's in state if it's already there instead of re-requesting it)?
- Do you want to keep this data consistent while hot-reloading UI components (which may lose their internal state when swapped)?

:::

This is also a good example of how to think about forms in Redux in general. **Most form state probably shouldn't be kept in Redux.** Instead, keep the data in your form components as you're editing it, and then dispatch Redux actions to update the store when the user is done.

### Using Multiple Selectors in a Component

Right now only our `<TodoList>` component is reading data from the store. Let's see what it might look like for the `<Footer>` component to start reading some data as well.

The `<Footer>` needs to know three different pieces of information:

- How many completed todos there are
- The current "status" filter value
- The current list of selected "color" category filters

How can we read these values into the component?

**We can call `useSelector` multiple times within one component**. In fact, this is actually a good idea - **each call to `useSelector` should always return the smallest amount of state possible**.

We already saw how to write a selector that counts completed todos earlier. For the filters values, both the status filter value and the color filters values live in the `state.filters` slice. Since this component needs both of them, we can select the entire `state.filters` object.

As we mentioned earlier, we could put all the input handling directly into `<Footer>`, or we could split it out into separate components like `<StatusFilter>`. To keep this explanation shorter, we'll skip the exact details of writing the input handling and assume we've got smaller separate components that are given some data and change handler callbacks as props.

Given that assumption, the React-Redux parts of the component might look like this:

```jsx title="src/features/footer/Footer.js"
import React from "react";
// highlight-next-line
import { useSelector } from "react-redux";

import { availableColors, capitalize } from "../filters/colors";
import { StatusFilters } from "../filters/filtersSlice";

// Omit other footer components

const Footer = () => {
  // highlight-start
  const todosRemaining = useSelector((state) => {
    const uncompletedTodos = state.todos.filter((todo) => !todo.completed);
    return uncompletedTodos.length;
  });

  const { status, colors } = useSelector((state) => state.filters);
  // highlight-end

  // omit placeholder change handlers

  return (
    <footer className="footer">
      <div className="actions">
        <h5>Actions</h5>
        <button className="button">Mark All Completed</button>
        <button className="button">Clear Completed</button>
      </div>

      <RemainingTodos count={todosRemaining} />
      <StatusFilter value={status} onChange={onStatusChange} />
      <ColorFilters value={colors} onChange={onColorChange} />
    </footer>
  );
};

export default Footer;
```

### Selecting Data in List Items by ID

Currently, our `<TodoList>` is reading the entire `state.todos` array and passing the actual todo objects as a prop to each `<TodoListItem>` component.

This works, but there's a potential performance problem.

- Changing one todo object means creating copies of both the todo and the `state.todos` array, and each copy is a new reference in memory
- When `useSelector` sees a new reference as its result, it forces its component to re-render
- So, any time _one_ todo object is updated (like clicking it to toggle its completed status), the whole `<TodoList>` parent component will re-render
- Then, [because React re-renders all child components recursively by default](https://blog.isquaredsoftware.com/2020/05/blogged-answers-a-mostly-complete-guide-to-react-rendering-behavior/#standard-render-behavior), it also means that _all_ of the `<TodoListItem>` components will re-render, even though most of them didn't actually change at all!

Re-rendering components isn't bad - that's how React knows if it needs to update the DOM. But, re-rendering lots of components when nothing has actually changed can potentially get too slow if the list is too big.

There's a couple ways we could try to fix this. One option is to [wrap all the `<TodoListItem>` components in `React.memo()`](https://reactjs.org/docs/react-api.html#reactmemo), so that they only re-render when their props actually change. This is often a good choice for improving performance, but it does require that the child component always receives the same props until something really changes. Since each `<TodoListItem>` component is receiving a todo item as a prop, only one of them should actually get a changed prop and have to re-render.

Another option is to have the `<TodoList>` component only read an array of todo IDs from the store, and pass those IDs as props to the child `<TodoListItem>` components. Then, each `<TodoListItem>` can use that ID to find the right todo object it needs.

Let's give that a shot.

```jsx title="src/features/todos/TodoList.js"
import React from "react";
import { useSelector } from "react-redux";
import TodoListItem from "./TodoListItem";

// highlight-next-line
const selectTodoIds = (state) => state.todos.map((todo) => todo.id);

const TodoList = () => {
  // highlight-next-line
  const todoIds = useSelector(selectTodoIds);

  const renderedListItems = todoIds.map((todoId) => {
    // highlight-next-line
    return <TodoListItem key={todoId} id={todoId} />;
  });

  return <ul className="todo-list">{renderedListItems}</ul>;
};
```

This time, we only select an array of todo IDs from the store in `<TodoList>`, and we pass each `todoId` as an `id` prop to the child `<TodoListItem>`s.

Then, in `<TodoListItem>`, we can use that ID value to read our todo item. We can also update `<TodoListItem>` to dispatch the "toggled" action based on the todo's ID.

```jsx title="src/features/todos/TodoListItem.js"
import React from "react";
// highlight-next-line
import { useSelector, useDispatch } from "react-redux";

import { availableColors, capitalize } from "../filters/colors";

// highlight-start
const selectTodoById = (state, todoId) => {
  return state.todos.find((todo) => todo.id === todoId);
};
// highlight-end

// Destructure `props.id`, since we only need the ID value
const TodoListItem = ({ id }) => {
  // Call our `selectTodoById` with the state _and_ the ID value
  // highlight-next-line
  const todo = useSelector((state) => selectTodoById(state, id));
  const { text, completed, color } = todo;

  // highlight-next-line
  const dispatch = useDispatch();

  // highlight-start
  const handleCompletedChanged = () => {
    dispatch({ type: "todos/todoToggled", payload: todo.id });
  };
  // highlight-end

  // omit other change handlers
  // omit other list item rendering logic and contents

  return (
    <li>
      <div className="view">{/* omit other rendering output */}</div>
    </li>
  );
};

export default TodoListItem;
```

There's a problem with this, though. We said earlier that **returning new array references in selectors causes components to re-render every time**, and right now we're returning a new IDs array in `<TodoList>`. In this case, the _contents_ of the IDs array should be the same if we're toggling a todo, because we're still showing the same todo items - we haven't added or deleted any. But, the array _containing_ those IDs is a new reference, so `<TodoList>` will re-render when it really doesn't need to.

One possible solution to this is to change how `useSelector` compares its values to see if they've changed. `useSelector` can take a comparison function as its second argument. A comparison function is called with the old and new values, and returns `true` if they're considered the same. If they're the same, `useSelector` won't make the component re-render.

React-Redux has a `shallowEqual` comparison function we can use to check if the items _inside_ the array are still the same. Let's try that:

```jsx title="src/features/todos/TodoList.js"
import React from "react";
// highlight-next-line
import { useSelector, shallowEqual } from "react-redux";
import TodoListItem from "./TodoListItem";

// highlight-next-line
const selectTodoIds = (state) => state.todos.map((todo) => todo.id);

const TodoList = () => {
  // highlight-next-line
  const todoIds = useSelector(selectTodoIds, shallowEqual);

  const renderedListItems = todoIds.map((todoId) => {
    return <TodoListItem key={todoId} id={todoId} />;
  });

  return <ul className="todo-list">{renderedListItems}</ul>;
};
```

Now, if we toggle a todo item, the list of IDs will be considered the same, and `<TodoList>` won't have to re-render. The one `<TodoListItem>` will get an updated todo object and re-render, but all the rest of them will still have the existing todo object and not have to re-render at all.

As mentioned earlier, you can also use a specialized kind of selector function called [a "memoized selector"](part-7-standard-patterns.md) to help improve component rendering, and we'll look at how to use those in another section.

## What You've Learned

We now have a working todo app! Our app creates a store, passes the store to the React UI layer using `<Provider>`, and then calls `useSelector` and `useDispatch` to talk to the store in our React components.

:::info

Try implementing the rest of the missing UI features on your own! Here's a list of the things you'll need to add:

- In `<TodoListItem>` component, use the `useDispatch` hook to dispatch actions to for changing the color category and deleting the todo
- In `<Footer>`, use the `useDispatch` hook to dispatch actions for marking all todos as completed, clearing completed todos, and changing the filter values.

We'll cover implementing the filters in [Part 7: Standard Redux Patterns](./part-7-standard-patterns.md).

:::

Let's see how the app looks now, including the components and sections we skipped to keep this shorter:

<iframe
  class="codesandbox"
  src="https://codesandbox.io/embed/github/reduxjs/redux-fundamentals-example-app/tree/checkpoint-5-uiAllActions/?fontsize=14&hidenavigation=1&theme=dark&runonclick=1"
  title="redux-fundamentals-example-app"
  allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
  sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
></iframe>

:::tip Summary

- **Redux stores can be used with any UI layer**
  - UI code always subscribes to the store, gets the latest state, and redraws itself
- **React-Redux is the official Redux UI bindings library for React**
  - React-Redux is installed as a separate `react-redux` package
- **The `useSelector` hook lets React components read data from the store**
  - Selector functions take the entire store `state` as an argument, and return a value based on that state
  - `useSelector` calls its selector function and returns the result from the selector
  - `useSelector` subscribes to the store, and re-runs the selector each time an action is dispatched.
  - Whenever the selector result changes, `useSelector` forces the component to re-render with the new data
- **The `useDispatch` hook lets React components dispatch actions to the store**
  - `useDispatch` returns the actual `store.dispatch` function
  - You can call `dispatch(action)` as needed inside your components
- **The `<Provider>` component makes the store available to other React components**
  - Render `<Provider store={store}>` around your entire `<App>`

:::

## What's Next?

Now that our UI is working, it's time to see how to make our Redux app talk to a server. In [Part 6: Async Logic](./part-6-async-logic.md), we'll talk about how asynchronous logic like timeouts and AJAX calls fit into the Redux data flow.

---

id: part-6-async-logic
title: 'Redux Fundamentals, Part 6: Async Logic and Data Fetching'
sidebar_label: 'Async Logic and Data Fetching'
description: 'The official Redux Fundamentals tutorial: learn how to use async logic with Redux'

---

# Redux Fundamentals, Part 6: Async Logic and Data Fetching

:::tip What You'll Learn

- How the Redux data flow works with async data
- How to use Redux middleware for async logic
- Patterns for handling async request state

:::

:::info Prerequisites

- Familiarity with using AJAX requests to fetch and update data from a server
- Understanding asynchronous logic in JS, including Promises

:::

## Introduction

In [Part 5: UI and React](./part-5-ui-and-react.md), we saw how to use the React-Redux library to let our React components interact with a Redux store, including calling `useSelector` to read Redux state, calling `useDispatch` to give us access to the `dispatch` function, and wrapping our app in a `<Provider>` component to give those hooks access to the store.

So far, all the data we've worked with has been directly inside of our React+Redux client application. However, most real applications need to work with data from a server, by making HTTP API calls to fetch and save items.

In this section, we'll update our todo app to fetch the todos from an API, and add new todos by saving them to the API.

### Example REST API and Client

To keep the example project isolated but realistic, the initial project setup already included a fake in-memory REST API for our data (configured using [the Mirage.js mock API tool](https://miragejs.com/)). The API uses `/fakeApi` as the base URL for the endpoints, and supports the typical `GET/POST/PUT/DELETE` HTTP methods for `/fakeApi/todos`. It's defined in `src/api/server.js`.

The project also includes a small HTTP API client object that exposes `client.get()` and `client.post()` methods, similar to popular HTTP libraries like `axios`. It's defined in `src/api/client.js`.

We'll use the `client` object to make HTTP calls to our in-memory fake REST API for this section.

## Redux Middleware and Side Effects

By itself, a Redux store doesn't know anything about async logic. It only knows how to synchronously dispatch actions, update the state by calling the root reducer function, and notify the UI that something has changed. Any asynchronicity has to happen outside the store.

Earlier, we said that Redux reducers must never contain "side effects". **A "side effect" is any change to state or behavior that can be seen outside of returning a value from a function**. Some common kinds of side effects are things like:

- Logging a value to the console
- Saving a file
- Setting an async timer
- Making an AJAX HTTP request
- Modifying some state that exists outside of a function, or mutating arguments to a function
- Generating random numbers or unique random IDs (such as `Math.random()` or `Date.now()`)

However, any real app will need to do these kinds of things _somewhere_. So, if we can't put side effects in reducers, where _can_ we put them?

**Redux middleware were designed to enable writing logic that has side effects**.

As we said [in Part 4](./part-4-store.md#middleware-use-cases), a Redux middleware can do _anything_ when it sees a dispatched action: log something, modify the action, delay the action, make an async call, and more. Also, since middleware form a pipeline around the real `store.dispatch` function, this also means that we could actually pass something that _isn't_ a plain action object to `dispatch`, as long as a middleware intercepts that value and doesn't let it reach the reducers.

Middleware also have access to `dispatch` and `getState`. That means you could write some async logic in a middleware, and still have the ability to interact with the Redux store by dispatching actions.

### Using Middleware to Enable Async Logic

Let's look at a couple examples of how middleware can enable us to write some kind of async logic that interacts with the Redux store.

One possibility is writing a middleware that looks for specific action types, and runs async logic when it sees those actions, like these examples:

```js
import { client } from "../api/client";

const delayedActionMiddleware = (storeAPI) => (next) => (action) => {
  if (action.type === "todos/todoAdded") {
    setTimeout(() => {
      // Delay this action by one second
      next(action);
    }, 1000);
    return;
  }

  return next(action);
};

const fetchTodosMiddleware = (storeAPI) => (next) => (action) => {
  if (action.type === "todos/fetchTodos") {
    // Make an API call to fetch todos from the server
    client.get("todos").then((todos) => {
      // Dispatch an action with the todos we received
      storeAPI.dispatch({ type: "todos/todosLoaded", payload: todos });
    });
  }

  return next(action);
};
```

:::info

For more details on why and how Redux uses middleware for async logic, see these StackOverflow answers by Redux creator Dan Abramov:

- ["How to dispatch a Redux action with a timeout?"](https://stackoverflow.com/questions/35411423/how-to-dispatch-a-redux-action-with-a-timeout/35415559#35415559)
- ["Why do we need middleware for async flow?"](https://stackoverflow.com/questions/34570758/why-do-we-need-middleware-for-async-flow-in-redux/34599594#34599594)

:::

### Writing an Async Function Middleware

Both of the middleware in that last section were very specific and only do one thing. It would be nice if we had a way to write _any_ async logic ahead of time, separate from the middleware itself, and still have access to `dispatch` and `getState` so that we can interact with the store.

**What if we wrote a middleware that let us pass a _function_ to `dispatch`, instead of an action object**? We could have our middleware check to see if the "action" is actually a function instead, and if it's a function, call the function right away. That would let us write async logic in separate functions, outside of the middleware definition.

Here's what that middleware might look like:

```js title="Example async function middleware"
const asyncFunctionMiddleware = (storeAPI) => (next) => (action) => {
  // If the "action" is actually a function instead...
  if (typeof action === "function") {
    // then call the function and pass `dispatch` and `getState` as arguments
    return action(storeAPI.dispatch, storeAPI.getState);
  }

  // Otherwise, it's a normal action - send it onwards
  return next(action);
};
```

And then we could use that middleware like this:

```js
const middlewareEnhancer = applyMiddleware(asyncFunctionMiddleware);
const store = createStore(rootReducer, middlewareEnhancer);

// Write a function that has `dispatch` and `getState` as arguments
const fetchSomeData = (dispatch, getState) => {
  // Make an async HTTP request
  client.get("todos").then((todos) => {
    // Dispatch an action with the todos we received
    dispatch({ type: "todos/todosLoaded", payload: todos });
    // Check the updated store state after dispatching
    const allTodos = getState().todos;
    console.log("Number of todos after loading: ", allTodos.length);
  });
};

// Pass the _function_ we wrote to `dispatch`
store.dispatch(fetchSomeData);
// logs: 'Number of todos after loading: ###'
```

Again, notice that **this "async function middleware" let us pass a _function_ to `dispatch`!** Inside that function, we were able to write some async logic (an HTTP request), then dispatch a normal action object when the request completed.

## Redux Async Data Flow

So how do middleware and async logic affect the overall data flow of a Redux app?

Just like with a normal action, we first need to handle a user event in the application, such as a click on a button. Then, we call `dispatch()`, and pass in _something_, whether it be a plain action object, a function, or some other value that a middleware can look for.

Once that dispatched value reaches a middleware, it can make an async call, and then dispatch a real action object when the async call completes.

Earlier, we saw [a diagram that represents the normal synchronous Redux data flow](./part-2-concepts-data-flow.md#redux-application-data-flow). When we add async logic to a Redux app, we add an extra step where middleware can run logic like AJAX requests, then dispatch actions. That makes the async data flow look like this:

![Redux async data flow diagram](/img/tutorials/essentials/ReduxAsyncDataFlowDiagram.gif)

## Using the Redux Thunk Middleware

As it turns out, Redux already has an official version of that "async function middleware", called the [**Redux "Thunk" middleware**](https://github.com/reduxjs/redux-thunk). The thunk middleware allows us to write functions that get `dispatch` and `getState` as arguments. The thunk functions can have any async logic we want inside, and that logic can dispatch actions and read the store state as needed.

**Writing async logic as thunk functions allows us to reuse that logic without knowing what Redux store we're using ahead of time**.

:::info

The word "thunk" is a programming term that means ["a piece of code that does some delayed work"](https://en.wikipedia.org/wiki/Thunk). For more details on how to use thunks, see the thunk usage guide page:

- [Using Redux: Writing Logic with Thunks](../../usage/writing-logic-thunks.mdx)

as well as these posts:

- [What the heck is a thunk?](https://daveceddia.com/what-is-a-thunk/)
- [Thunks in Redux: the basics](https://medium.com/fullstack-academy/thunks-in-redux-the-basics-85e538a3fe60)

:::

### Configuring the Store

The Redux thunk middleware is available on NPM as a package called `redux-thunk`. We need to install that package to use it in our app:

```bash
npm install redux-thunk
```

Once it's installed, we can update the Redux store in our todo app to use that middleware:

```js title="src/store.js"
import { createStore, applyMiddleware } from "redux";
// highlight-next-line
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducer";

// highlight-next-line
const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

// The store now has the ability to accept thunk functions in `dispatch`
const store = createStore(rootReducer, composedEnhancer);
export default store;
```

### Fetching Todos from a Server

Right now our todo entries can only exist in the client's browser. We need a way to load a list of todos from the server when the app starts up.

We'll start by writing a thunk function that makes an AJAX call to our `/fakeApi/todos` endpoint to request an array of todo objects, and then dispatch an action containing that array as the payload. Since this is related to the todos feature in general, we'll write the thunk function in the `todosSlice.js` file:

```js title="src/features/todos/todosSlice.js"
import { client } from "../../api/client";

const initialState = [];

export default function todosReducer(state = initialState, action) {
  // omit reducer logic
}

// Thunk function
// highlight-start
export async function fetchTodos(dispatch, getState) {
  const response = await client.get("/fakeApi/todos");
  dispatch({ type: "todos/todosLoaded", payload: response.todos });
}
// highlight-end
```

We only want to make this API call once, when the application loads for the first time. There's a few places we _could_ put this:

- In the `<App>` component, in a `useEffect` hook
- In the `<TodoList>` component, in a `useEffect` hook
- In the `index.js` file directly, right after we import the store

For now, let's try putting this directly in `index.js`:

```js title="src/index.js"
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";

import "./api/server";

// highlight-start
import store from "./store";
import { fetchTodos } from "./features/todos/todosSlice";

store.dispatch(fetchTodos);
// highlight-end

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
```

If we reload the page, there's no visible change in the UI. However, if we open up the Redux DevTools extension, we should now see that a `'todos/todosLoaded'` action was dispatched, and it should contain some todo objects that were generated by our fake server API:

![Devtools - todosLoaded action contents](/img/tutorials/fundamentals/devtools-todosLoaded-action.png)

Notice that even though we've dispatched an action, nothing's happening to change the state. **We need to handle this action in our todos reducer to have the state updated.**

Let's add a case to the reducer to load this data into the store. Since we're fetching the data from the server, we want to completely replace any existing todos, so we can return the `action.payload` array to make it be the new todos `state` value:

```js title="src/features/todos/todosSlice.js"
import { client } from "../../api/client";

const initialState = [];

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    // omit other reducer cases
    // highlight-start
    case "todos/todosLoaded": {
      // Replace the existing state entirely by returning the new value
      return action.payload;
    }
    // highlight-end
    default:
      return state;
  }
}

export async function fetchTodos(dispatch, getState) {
  const response = await client.get("/fakeApi/todos");
  dispatch({ type: "todos/todosLoaded", payload: response.todos });
}
```

Since dispatching an action immediately updates the store, we can also call `getState` in the thunk to read the updated state value after we dispatch. For example, we could log the number of total todos to the console before and after dispatching the `'todos/todosLoaded'` action:

```js
export async function fetchTodos(dispatch, getState) {
  const response = await client.get("/fakeApi/todos");

  // highlight-next-line
  const stateBefore = getState();
  console.log("Todos before dispatch: ", stateBefore.todos.length);

  dispatch({ type: "todos/todosLoaded", payload: response.todos });

  // highlight-next-line
  const stateAfter = getState();
  console.log("Todos after dispatch: ", stateAfter.todos.length);
}
```

### Saving Todo Items

We also need to update the server whenever we try to create a new todo item. Instead of dispatching the `'todos/todoAdded'` action right away, we should make an API call to the server with the initial data, wait for the server to send back a copy of the newly saved todo item, and _then_ dispatch an action with that todo item.

However, if we start trying to write this logic as a thunk function, we're going to run into a problem: since we're writing the thunk as a separate function in the `todosSlice.js` file, the code that makes the API call doesn't know what the new todo text is supposed to be:

```js title="src/features/todos/todosSlice.js"
async function saveNewTodo(dispatch, getState) {
  // ❌ We need to have the text of the new todo, but where is it coming from?
  // highlight-next-line
  const initialTodo = { text };
  const response = await client.post("/fakeApi/todos", { todo: initialTodo });
  dispatch({ type: "todos/todoAdded", payload: response.todo });
}
```

We need a way to write one function that accepts `text` as its parameter, but then creates the actual thunk function so that it can use the `text` value to make the API call. Our outer function should then return the thunk function so that we can pass to `dispatch` in our component.

```js title="src/features/todos/todosSlice.js"
// Write a synchronous outer function that receives the `text` parameter:
export function saveNewTodo(text) {
  // And then creates and returns the async thunk function:
  return async function saveNewTodoThunk(dispatch, getState) {
    // ✅ Now we can use the text value and send it to the server
    const initialTodo = { text };
    const response = await client.post("/fakeApi/todos", { todo: initialTodo });
    dispatch({ type: "todos/todoAdded", payload: response.todo });
  };
}
```

Now we can use this in our `<Header>` component:

```js title="src/features/header/Header.js"
import React, { useState } from "react";
import { useDispatch } from "react-redux";

// highlight-next-line
import { saveNewTodo } from "../todos/todosSlice";

const Header = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => setText(e.target.value);

  const handleKeyDown = (e) => {
    // If the user pressed the Enter key:
    const trimmedText = text.trim();
    if (e.which === 13 && trimmedText) {
      // highlight-start
      // Create the thunk function with the text the user wrote
      const saveNewTodoThunk = saveNewTodo(trimmedText);
      // Then dispatch the thunk function itself
      dispatch(saveNewTodoThunk);
      // highlight-end
      setText("");
    }
  };

  // omit rendering output
};
```

Since we know we're going to immediately pass the thunk function to `dispatch` in the
component, we can skip creating the temporary variable. Instead, we can call `saveNewTodo(text)`, and pass the resulting thunk function straight to `dispatch`:

```js title="src/features/header/Header.js"
const handleKeyDown = (e) => {
  // If the user pressed the Enter key:
  const trimmedText = text.trim();
  if (e.which === 13 && trimmedText) {
    // highlight-start
    // Create the thunk function and immediately dispatch it
    dispatch(saveNewTodo(trimmedText));
    // highlight-end
    setText("");
  }
};
```

Now the component doesn't actually know that it's even dispatching a thunk function - the `saveNewTodo` function is encapsulating what's actually happening. The `<Header>` component only knows that it needs to dispatch _some value_ when the user presses enter.

This pattern of writing a function to prepare something that will get passed to `dispatch` is called **the "action creator" pattern**, and we'll talk about that more in [the next section](./part-7-standard-patterns.md).

We can now see the updated `'todos/todoAdded'` action being dispatched:

![Devtools - async todoAdded action contents](/img/tutorials/fundamentals/devtools-async-todoAdded-action.png)

The last thing we need to change here is updating our todos reducer. When we make a POST request to `/fakeApi/todos`, the server will return a completely new todo object (including a new ID value). That means our reducer doesn't have to calculate a new ID, or fill out the other fields - it only needs to create a new `state` array that includes the new todo item:

```js title="src/features/todos/todosSlice.js"
const initialState = [];

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    // highlight-start
    case "todos/todoAdded": {
      // Return a new todos state array with the new todo item at the end
      return [...state, action.payload];
    }
    // highlight-end
    // omit other cases
    default:
      return state;
  }
}
```

And now adding a new todo will work correctly:

![Devtools - async todoAdded state diff](/img/tutorials/fundamentals/devtools-async-todoAdded-diff.png)

:::tip

Thunk functions can be used for both asynchronous _and_ synchronous logic. Thunks provide a way to write any reusable logic that needs access to `dispatch` and `getState`.

:::

## What You've Learned

We've now succesfully updated our todo app so that we can fetch a list of todo items and save new todo items, using "thunk" functions to make the AJAX calls to our fake server API.

In the process, we saw how Redux middleware are used to let us make async calls and interact with the store by dispatching actions with after the async calls have completed.

Here's what the current app looks like:

<iframe
  class="codesandbox"
  src="https://codesandbox.io/embed/github/reduxjs/redux-fundamentals-example-app/tree/checkpoint-6-asyncThunks/?fontsize=14&hidenavigation=1&theme=dark&runonclick=1"
  title="redux-fundamentals-example-app"
  allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
  sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
></iframe>

:::tip Summary

- **Redux middleware were designed to enable writing logic that has side effects**
  - "Side effects" are code that changes state/behavior outside a function, like AJAX calls, modifying function arguments, or generating random values
- **Middleware add an extra step to the standard Redux data flow**
  - Middleware can intercept other values passed to `dispatch`
  - Middleware have access to `dispatch` and `getState`, so they can dispatch more actions as part of async logic
- **The Redux "Thunk" middleware lets us pass functions to `dispatch`**
  - "Thunk" functions let us write async logic ahead of time, without knowing what Redux store is being used
  - A Redux thunk function receives `dispatch` and `getState` as arguments, and can dispatch actions like "this data was received from an API response"

:::

## What's Next?

We've now covered all the core pieces of how to use Redux! You've seen how to:

- Write reducers that update state based on dispatched actions,
- Create and configure a Redux store with a reducer, enhancers, and middleware
- Use middleware to write async logic that dispatches actions

In [Part 7: Standard Redux Patterns](./part-7-standard-patterns.md), we'll look at several code patterns that are typically used by real-world Redux apps to make our code more consistent and scale better as the application grows.

---

id: part-7-standard-patterns
title: 'Redux Fundamentals, Part 7: Standard Redux Patterns'
sidebar_label: 'Standard Redux Patterns'
description: 'The official Fundamentals tutorial for Redux: learn the standard patterns used in real-world Redux apps'

---

import { DetailedExplanation } from '../../components/DetailedExplanation'

# Redux Fundamentals, Part 7: Standard Redux Patterns

:::tip What You'll Learn

- Standard patterns used in real-world Redux apps, and why those patterns exist:
  - Action creators for encapsulating action objects
  - Memoized selectors for improving performance
  - Tracking request status via loading enums
  - Normalizing state for managing collections of items
  - Working with promises and thunks

:::

:::info Prerequisites

- Understanding the topics in all previous sections

:::

In [Part 6: Async Logic and Data Fetching](./part-6-async-logic.md), we saw how to use Redux middleware to write async logic that can talk to the store. In particular, we used the Redux "thunk" middleware to write functions that can contain reusable async logic, without knowing what Redux store they'll be talking to ahead of time.

So far, we've covered the basics of how Redux actually works. However, real world Redux applications use some additional patterns on top of those basics.

It's important to note that **none of these patterns are _required_ to use Redux!** But, there are very good reasons why each of these patterns exists, and you'll see some or all of them in almost every Redux codebase.

In this section, we'll rework our existing todo app code to use some of these patterns, and talk about why they're commonly used in Redux apps. Then, in [**Part 8**](./part-8-modern-redux.md), we'll talk about "modern Redux", including **how to use our official [Redux Toolkit](https://redux-toolkit.js.org) package to simplify all the Redux logic we've written "by hand"** in our app, and why **we recommend using Redux Toolkit as the standard approach for writing Redux apps**.

## Action Creators

In our app, we've been writing action objects directly in the code, where they're being dispatched:

```js
dispatch({ type: "todos/todoAdded", payload: trimmedText });
```

However, in practice, well-written Redux apps don't actually write those action objects inline when we dispatch them. Instead, we use "action creator" functions.

An **action creator** is a function that creates and returns an action object. We typically use these so we don't have to write the action object by hand every time:

```js
const todoAdded = (text) => {
  return {
    type: "todos/todoAdded",
    payload: text,
  };
};
```

We then use them by **calling the action creator**, and then **passing the resulting action object directly to `dispatch`**:

```js
store.dispatch(todoAdded("Buy milk"));

console.log(store.getState().todos);
// [ {id: 0, text: 'Buy milk', completed: false}]
```

<DetailedExplanation title="Detailed Explanation: Why use Action Creators?">

In our small example todo app, writing action objects by hand every time isn't too difficult. In fact, by switching to using action creators, we've added _more_ work - now we have to write a function _and_ the action object.

But, what if we needed to dispatch the same action from many parts of the application? Or what if there's some additional logic that we have to do every time we dispatch an action, like creating a unique ID? We'd end up having to copy-paste the additional setup logic every time we need to dispatch that action.

Action creators have two primary purposes:

- They prepare and format the contents of action objects
- They encapsulate any additional work needed whenever we create those actions

That way, we have a consistent approach for creating actions, whether or not there's any extra work that needs to be done. The same goes for thunks as well.

</DetailedExplanation>

### Using Action Creators

Let's update our todos slice file to use action creators for a couple of our action types.

We'll start with the two main actions we've been using so far: loading the list of todos from the server, and adding a new todo after saving it to the server.

Right now, `todosSlice.js` is dispatching an action object directly, like this:

```js
dispatch({ type: "todos/todosLoaded", payload: response.todos });
```

We'll create a function that creates and returns that same kind of action object, but accepts the array of todos as its argument and puts it into the action as `action.payload`. Then, we can dispatch the action using that new action creator inside of our `fetchTodos` thunk:

```js title="src/features/todos/todosSlice.js"
// highlight-start
export const todosLoaded = (todos) => {
  return {
    type: "todos/todosLoaded",
    payload: todos,
  };
};
// highlight-end

export async function fetchTodos(dispatch, getState) {
  const response = await client.get("/fakeApi/todos");
  // highlight-next-line
  dispatch(todosLoaded(response.todos));
}
```

We can also do the same thing for the "todo added" action:

```js title="src/features/todos/todosSlice.js"
// highlight-start
export const todoAdded = (todo) => {
  return {
    type: "todos/todoAdded",
    payload: todo,
  };
};
// highlight-end

export function saveNewTodo(text) {
  return async function saveNewTodoThunk(dispatch, getState) {
    const initialTodo = { text };
    const response = await client.post("/fakeApi/todos", { todo: initialTodo });
    // highlight-next-line
    dispatch(todoAdded(response.todo));
  };
}
```

While we're at it, let's do the same thing for the "color filter changed" action:

```js title="src/features/filters/filtersSlice.js"
// highlight-start
export const colorFilterChanged = (color, changeType) => {
  return {
    type: "filters/colorFilterChanged",
    payload: { color, changeType },
  };
};
// highlight-end
```

And since this action was being dispatched from the `<Footer>` component, we'll need to import the `colorFilterChanged` action creator over there and use it:

```js title="src/features/footer/Footer.js"
import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { availableColors, capitalize } from "../filters/colors";
// highlight-next-line
import { StatusFilters, colorFilterChanged } from "../filters/filtersSlice";

// omit child components

const Footer = () => {
  const dispatch = useDispatch();

  const todosRemaining = useSelector((state) => {
    const uncompletedTodos = state.todos.filter((todo) => !todo.completed);
    return uncompletedTodos.length;
  });

  const { status, colors } = useSelector((state) => state.filters);

  const onMarkCompletedClicked = () => dispatch({ type: "todos/allCompleted" });
  const onClearCompletedClicked = () =>
    dispatch({ type: "todos/completedCleared" });

  // highlight-start
  const onColorChange = (color, changeType) =>
    dispatch(colorFilterChanged(color, changeType));
  // highlight-end

  const onStatusChange = (status) =>
    dispatch({ type: "filters/statusFilterChanged", payload: status });

  // omit rendering output
};

export default Footer;
```

Notice that the `colorFilterChanged` action creator actually accepts two different arguments, and then combines them together to form the right `action.payload` field.

This doesn't change anything about how the application works, or how the Redux data flow behaves - we're still creating action objects, and dispatching them. But, instead of writing action objects directly in our code all the time, we're now using action creators to prepare those action objects before they're dispatched.

We can also use action creators with thunk functions, and in fact [we wrapped a thunk in an action creator in the previous section](./part-6-async-logic.md#saving-todo-items) . We specifically wrapped `saveNewTodo` in a "thunk action creator" function so that we could pass in a `text` parameter. While `fetchTodos` doesn't take any parameters, we could still wrap it in an action creator as well:

```js title="src/features/todos/todosSlice.js"
// highlight-next-line
export function fetchTodos() {
  return async function fetchTodosThunk(dispatch, getState) {
    const response = await client.get("/fakeApi/todos");
    dispatch(todosLoaded(response.todos));
  };
}
```

And that means we have to change the place it's dispatched in `index.js` to call the outer thunk action creator function, and pass the returned inner thunk function to `dispatch`:

```js title="src/index.js"
import store from "./store";
import { fetchTodos } from "./features/todos/todosSlice";

// highlight-next-line
store.dispatch(fetchTodos());
```

We've written thunks using the `function` keyword so far to make it clear what they're doing. However, we can also write them using arrow function syntax instead. Using implicit returns can shorten the code, although it may make it a bit harder to read as well if you're not familiar with arrow functions:

```js title="src/features/todos/todosSlice.js"
// Same thing as the above example!
// highlight-next-line
export const fetchTodos = () => async (dispatch) => {
  const response = await client.get("/fakeApi/todos");
  dispatch(todosLoaded(response.todos));
};
```

Similarly, we _could_ shorten the plain action creators if we wanted to:

```js title="src/features/todos/todosSlice.js"
// highlight-next-line
export const todoAdded = (todo) => ({ type: "todos/todoAdded", payload: todo });
```

It's up to you to decide whether using arrow functions this way is better or not.

:::info

For more details on why action creators are useful, see:

- [Idiomatic Redux: Why Use Action Creators?](https://blog.isquaredsoftware.com/2016/10/idiomatic-redux-why-use-action-creators/)

:::

## Memoized Selectors

We've already seen that we can write "selector" functions, which accept the Redux `state` object as an argument, and return a value:

```js
const selectTodos = (state) => state.todos;
```

What if we need to _derive_ some data? For example, maybe we want to have an array of only the todo IDs:

```js
const selectTodoIds = (state) => state.todos.map((todo) => todo.id);
```

However, `array.map()` always returns a new array reference. We know that the React-Redux `useSelector` hook will re-run its selector function after _every_ dispatched action, and if the selector result changes, it will force the component to re-render.

In this example, **calling `useSelector(selectTodoIds)` will _always_ cause the component to re-render after _every_ action, because it's returning a new array reference!**

In Part 5, we saw that [we can pass `shallowEqual` as an argument to `useSelector`](./part-5-ui-and-react.md#selecting-data-in-list-items-by-id). There's another option here, though: we could use "memoized" selectors.

**Memoization** is a kind of caching - specifically, saving the results of an expensive calculation, and reusing those results if we see the same inputs later.

**Memoized selector functions** are selectors that save the most recent result value, and if you call them multiple times with the same inputs, will return the same result value. If you call them with _different_ inputs than last time, they will recalculate a new result value, cache it, and return the new result.

### Memoizing Selectors with `createSelector`

The **[Reselect library](https://github.com/reduxjs/reselect) provides a `createSelector` API that will generate memoized selector functions**. `createSelector` accepts one or more "input selector" functions as arguments, plus an "output selector", and returns the new selector function. Every time you call the selector:

- All "input selectors" are called with all of the arguments
- If any of the input selector return values have changed, the "output selector" will re-run
- All of the input selector results become arguments to the output selector
- The final result of the output selector is cached for next time

Let's create a memoized version of `selectTodoIds` and use that with our `<TodoList>`.

First, we need to install Reselect:

```bash
npm install reselect
```

Then, we can import and call `createSelector`. Our original `selectTodoIds` function was defined over in `TodoList.js`, but it's more common for selector functions to be written in the relevant slice file. So, let's add this to the todos slice:

```js title="src/features/todos/todosSlice.js"
// highlight-next-line
import { createSelector } from "reselect";

// omit reducer

// omit action creators

// highlight-start
export const selectTodoIds = createSelector(
  // First, pass one or more "input selector" functions:
  (state) => state.todos,
  // Then, an "output selector" that receives all the input results as arguments
  // and returns a final result value
  (todos) => todos.map((todo) => todo.id)
);
// highlight-end
```

Then, let's use it in `<TodoList>`:

```js title="src/features/todos/TodoList.js"
import React from "react";
import { useSelector, shallowEqual } from "react-redux";

// highlight-next-line
import { selectTodoIds } from "./todosSlice";
import TodoListItem from "./TodoListItem";

const TodoList = () => {
  // highlight-next-line
  const todoIds = useSelector(selectTodoIds);

  const renderedListItems = todoIds.map((todoId) => {
    return <TodoListItem key={todoId} id={todoId} />;
  });

  return <ul className="todo-list">{renderedListItems}</ul>;
};
```

This actually behaves a bit differently than the `shallowEqual` comparison function does. Any time the `state.todos` array changes, we're going to create a new todo IDs array as a result. That includes any immutable updates to todo items like toggling their `completed` field, since we have to create a new array for the immutable update.

:::tip

Memoized selectors are only helpful when you actually derive additional values from the original data. If you are only looking up and returning an existing value, you can keep the selector as a plain function.

:::

### Selectors with Multiple Arguments

Our todo app is supposed to have the ability to filter the visible todos based on their completed status. Let's write a memoized selector that returns that filtered list of todos.

We know we need the entire `todos` array as one argument to our output selector. We also need to pass in the current completion status filter value as well. We'll add a separate "input selector" to extract each value, and pass the results to the "output selector".

```js title="src/features/todos/todosSlice.js"
import { createSelector } from "reselect";
import { StatusFilters } from "../filters/filtersSlice";

// omit other code

// highlight-start
export const selectFilteredTodos = createSelector(
  // First input selector: all todos
  (state) => state.todos,
  // Second input selector: current status filter
  (state) => state.filters.status,
  // Output selector: receives both values
  (todos, status) => {
    if (status === StatusFilters.All) {
      return todos;
    }

    const completedStatus = status === StatusFilters.Completed;
    // Return either active or completed todos based on filter
    return todos.filter((todo) => todo.completed === completedStatus);
  }
);
// highlight-end
```

:::caution

Note that we've now added an import dependency between two slices - the `todosSlice` is importing a value from the `filtersSlice`. This is legal, but be careful. **If two slices _both_ try to import something from each other, you can end up with a "cyclic import dependency" problem that can cause your code to crash**. If that happens, try moving some common code to its own file and import from that file instead.

:::

Now we can use this new "filtered todos" selector as an input to another selector that returns the IDs of those todos:

```js title="src/features/todos/todosSlice.js"
export const selectFilteredTodoIds = createSelector(
  // Pass our other memoized selector as an input
  selectFilteredTodos,
  // And derive data in the output selector
  (filteredTodos) => filteredTodos.map((todo) => todo.id)
);
```

If we switch `<TodoList>` to use `selectFilteredTodoIds`, we should then be able to mark a couple todo items as completed:

![Todo app - todos marked completed](/img/tutorials/fundamentals/todos-app-markedCompleted.png)

and then filter the list to _only_ show completed todos:

![Todo app - todos marked completed](/img/tutorials/fundamentals/todos-app-showCompleted.png)

We can then expand our `selectFilteredTodos` to also include color filtering in the selection as well:

```js title="src/features/todos/todosSlice.js"
export const selectFilteredTodos = createSelector(
  // First input selector: all todos
  selectTodos,
  // Second input selector: all filter values
  // highlight-next-line
  (state) => state.filters,
  // Output selector: receives both values
  (todos, filters) => {
    // highlight-start
    const { status, colors } = filters;
    const showAllCompletions = status === StatusFilters.All;
    if (showAllCompletions && colors.length === 0) {
      // highlight-end
      return todos;
    }

    // highlight-next-line
    const completedStatus = status === StatusFilters.Completed;
    // Return either active or completed todos based on filter
    return todos.filter((todo) => {
      // highlight-start
      const statusMatches =
        showAllCompletions || todo.completed === completedStatus;
      const colorMatches = colors.length === 0 || colors.includes(todo.color);
      return statusMatches && colorMatches;
      // highlight-end
    });
  }
);
```

Notice that by encapsulating the logic in this selector, our component never needed to change, even as we changed the filtering behavior. Now we can filter by both status and color at once:

![Todo app - status and color filters](/img/tutorials/fundamentals/todos-app-selectorFilters.png)

Finally, we've got several places where our code is looking up `state.todos`. We're going to be making some changes to how that state is designed as we go through the rest of this section, so we'll extract a single `selectTodos` selector and use that everywhere. We can also move `selectTodoById` over into the `todosSlice`:

```js title="src/features/todos/todosSlice.js"
export const selectTodos = (state) => state.todos;

export const selectTodoById = (state, todoId) => {
  return selectTodos(state).find((todo) => todo.id === todoId);
};
```

:::info

For more details on why we use selector functions and how to write memoized selectors with Reselect, see:

- [Using Redux: Deriving Data with Selectors](../../usage/deriving-data-selectors.md)

:::

## Async Request Status

We're using an async thunk to fetch the initial list of todos from the server. Since we're using a fake server API, that response comes back immediately. In a real app, the API call might take a while to resolve. In that case, it's common to show some kind of a loading spinner while we wait for the response to complete.

This is usually handled in Redux apps by:

- Having some kind of "loading state" value to indicate the current status of a request
- Dispatching a "request started" action _before_ making the API call, which is handled by changing the loading state value
- Updating the loading state value again when the request completes to indicate that the call is done

The UI layer then shows a loading spinner while the request is in progress, and switches to showing the actual data when the request is complete.

We're going to update our todos slice to track a loading state value, and dispatch an additional `'todos/todosLoading'` action as part of the `fetchTodos` thunk.

Right now, the `state` of our todos reducer is only the array of todos itself. If we want to track the loading state inside the todos slice, we'll need to reorganize the todos state to be an object that has the todos array _and_ the loading state value. That also means rewriting the reducer logic to handle the additional nesting:

```js title="src/features/todos/todosSlice.js"
// highlight-start
const initialState = {
  status: "idle",
  entities: [],
};
// highlight-end

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case "todos/todoAdded": {
      // highlight-start
      return {
        ...state,
        entities: [...state.entities, action.payload],
      };
      // highlight-end
    }
    case "todos/todoToggled": {
      // highlight-start
      return {
        ...state,
        entities: state.entities.map((todo) => {
          if (todo.id !== action.payload) {
            return todo;
          }

          return {
            ...todo,
            completed: !todo.completed,
          };
        }),
      };
      // highlight-end
    }
    // omit other cases
    default:
      return state;
  }
}

// omit action creators

// highlight-next-line
export const selectTodos = (state) => state.todos.entities;
```

There's a few important things to note here:

- The todos array is now nested as `state.entities` in the `todosReducer` state object. The word "entities" is a term that means "unique items with an ID", which does describe our todo objects.
- That also means the array is nested in the _entire_ Redux state object as `state.todos.entities`
- We now have to do extra steps in the reducer to copy the additional level of nesting for correct immutable updates, such as `state` object -> `entities` array -> `todo` object
- Because the rest of our code is _only_ accessing the todos state via selectors, **we only need to update the `selectTodos` selector** - the rest of the UI will continue to work as expected even though we reshaped our state considerably.

### Loading State Enum Values

You'll also notice that we've defined the loading state field as a string enum:

```js
{
  status: "idle"; // or: 'loading', 'succeeded', 'failed'
}
```

instead of an `isLoading` boolean.

A boolean limits us to two possibilities: "loading" or "not loading". In reality, **it's possible for a request to actually be in _many_ different states**, such as:

- Hasn't started at all
- In progress
- Succeeded
- Failed
- Succeeded, but now back in a situation where we might want to refetch

It's also possible that the app logic should only transition between specific states based on certain actions, and this is harder to implement using booleans.

Because of this, we recommend **storing loading state as a string enum value instead of boolean flags**.

:::info

For a detailed explanation of why loading states should be enums, see:

- [Redux Style Guide: treat reducers as state machines](../../style-guide/style-guide.md#treat-reducers-as-state-machines)

:::

Based on that, we'll add a new "loading" action that will set our status to `'loading'`, and update the "loaded" action to reset the state flag to `'idle'`:

```js title="src/features/todos/todosSlice.js"
const initialState = {
  status: "idle",
  entities: [],
};

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    // omit other cases
    // highlight-start
    case "todos/todosLoading": {
      return {
        ...state,
        status: "loading",
      };
    }
    // highlight-end
    case "todos/todosLoaded": {
      return {
        ...state,
        // highlight-next-line
        status: "idle",
        entities: action.payload,
      };
    }
    default:
      return state;
  }
}

// omit action creators

// Thunk function
export const fetchTodos = () => async (dispatch) => {
  // highlight-next-line
  dispatch(todosLoading());
  const response = await client.get("/fakeApi/todos");
  dispatch(todosLoaded(response.todos));
};
```

However, before we try to show this in the UI, we need to modify the fake server API to add an artificial delay to our API calls. Open up `src/api/server.js`, and look for this commented-out line around line 63:

```js title="src/api/server.js"
new Server({
  routes() {
    this.namespace = "fakeApi";
    // highlight-next-line
    // this.timing = 2000

    // omit other code
  },
});
```

If you uncomment that line, the fake server will add a 2-second delay to every API call our app makes, which gives us enough time to actually see a loading spinner being displayed.

Now, we can read the loading state value in our `<TodoList>` component, and show a loading spinner instead based on that value.

```js title="src/features/todos/TodoList.js"
// omit imports

const TodoList = () => {
  const todoIds = useSelector(selectFilteredTodoIds);
  // highlight-start
  const loadingStatus = useSelector((state) => state.todos.status);

  if (loadingStatus === "loading") {
    return (
      <div className="todo-list">
        <div className="loader" />
      </div>
    );
  }
  // highlight-end

  const renderedListItems = todoIds.map((todoId) => {
    return <TodoListItem key={todoId} id={todoId} />;
  });

  return <ul className="todo-list">{renderedListItems}</ul>;
};
```

In a real app, we'd also want to handle API failure errors and other potential cases.

Here's what the app looks like with that loading status enabled (to see the spinner again, reload the app preview or open it in a new tab):

<iframe
  class="codesandbox"
  src="https://codesandbox.io/embed/github/reduxjs/redux-fundamentals-example-app/tree/checkpoint-7-asyncLoading/?fontsize=14&hidenavigation=1&theme=dark&runonclick=1"
  title="redux-fundamentals-example-app"
  allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
  sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
></iframe>

## Flux Standard Actions

The Redux store itself does not actually care what fields you put into your action object. It only cares that `action.type` exists and has a value, and normal Redux actions always use a string for `action.type`. That means that you _could_ put any other fields into the action that you want. Maybe we could have `action.todo` for a "todo added" action, or `action.color`, and so on.

However, if every action uses different field names for its data fields, it can be hard to know ahead of time what fields you need to handle in each reducer.

That's why the Redux community came up with [the "Flux Standard Actions" convention](https://github.com/redux-utilities/flux-standard-action#motivation), or "FSA". This is a suggested approach for how to organize fields inside of action objects, so that developers always know what fields contain what kind of data. The FSA pattern is widely used in the Redux community, and in fact you've already been using it throughout this whole tutorial.

The FSA convention says that:

- If your action object has any actual data, that "data" value of your action should always go in `action.payload`
- An action may also have an `action.meta` field with extra descriptive data
- An action may have an `action.error` field with error information

So, _all_ Redux actions MUST:

- be a plain JavaScript object
- have a `type` field

And if you write your actions using the FSA pattern, an action MAY

- have a `payload` field
- have an `error` field
- have a `meta` field

<DetailedExplanation title="Detailed Explanation: FSAs and Errors">

The FSA specification says that:

> The optional `error` property MAY be set to `true` if the action represents an error.
> An action whose `error` is true is analogous to a rejected Promise. By convention, the `payload` SHOULD be an error object.
> If `error` has any other value besides `true`, including `undefined` and `null`, the action MUST NOT be interpreted as an error.

The FSA specs also argue against having specific action types for things like "loading succeeded" and "loading failed".

However, in practice, the Redux community has ignored the idea of using `action.error` as a boolean flag, and instead settled on separate action types, like `'todos/todosLoadingSucceeded'` and `'todos/todosLoadingFailed'`. This is because it's much easier to check for those action types than it is to first handle `'todos/todosLoaded'` and _then_ check `if (action.error)`.

You can do whichever approach works better for you, but most apps use separate action types for success and failure.

</DetailedExplanation>

## Normalized State

So far, we've kept our todos in an array. This is reasonable, because we received the data from the server as an array, and we also need to loop over the todos to show them as a list in the UI.

However, in larger Redux apps, it is common to store data in a **normalized state structure**. "Normalization" means:

- Making sure there is only one copy of each piece of data
- Storing items in a way that allows directly finding items by ID
- Referring to other items based on IDs, instead of copying the entire item

For example, in a blogging application, you might have `Post` objects that point to `User` and `Comment` objects. There might be many posts by the same person, so if every `Post` object includes an entire `User`, we would have many copies of the same `User` object. Instead, a `Post` object would have a user ID value as `post.user`, and then we could look up `User` objects by ID as `state.users[post.user]`.

This means we typically organize our data as objects instead of arrays, where the item IDs are the keys and the items themselves are the values, like this:

```js
const rootState = {
  todos: {
    status: "idle",
    // highlight-start
    entities: {
      2: { id: 2, text: "Buy milk", completed: false },
      7: { id: 7, text: "Clean room", completed: true },
    },
    // highlight-end
  },
};
```

Let's convert our todos slice to store the todos in a normalized form. This will require some significant changes to our reducer logic, as well as updating the selectors:

```js title="src/features/todos/todosSlice"
const initialState = {
  status: "idle",
  // highlight-next-line
  entities: {},
};

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case "todos/todoAdded": {
      const todo = action.payload;
      // highlight-start
      return {
        ...state,
        entities: {
          ...state.entities,
          [todo.id]: todo,
        },
      };
      // highlight-end
    }
    case "todos/todoToggled": {
      // highlight-start
      const todoId = action.payload;
      const todo = state.entities[todoId];
      return {
        ...state,
        entities: {
          ...state.entities,
          [todoId]: {
            ...todo,
            completed: !todo.completed,
          },
        },
      };
      // highlight-end
    }
    case "todos/colorSelected": {
      // highlight-start
      const { color, todoId } = action.payload;
      const todo = state.entities[todoId];
      return {
        ...state,
        entities: {
          ...state.entities,
          [todoId]: {
            ...todo,
            color,
          },
        },
      };
      // highlight-end
    }
    case "todos/todoDeleted": {
      // highlight-start
      const newEntities = { ...state.entities };
      delete newEntities[action.payload];
      return {
        ...state,
        entities: newEntities,
      };
      // highlight-end
    }
    case "todos/allCompleted": {
      // highlight-start
      const newEntities = { ...state.entities };
      Object.values(newEntities).forEach((todo) => {
        newEntities[todo.id] = {
          ...todo,
          completed: true,
        };
      });
      return {
        ...state,
        entities: newEntities,
      };
      // highlight-end
    }
    case "todos/completedCleared": {
      // highlight-start
      const newEntities = { ...state.entities };
      Object.values(newEntities).forEach((todo) => {
        if (todo.completed) {
          delete newEntities[todo.id];
        }
      });
      return {
        ...state,
        entities: newEntities,
      };
      // highlight-end
    }
    case "todos/todosLoading": {
      return {
        ...state,
        status: "loading",
      };
    }
    case "todos/todosLoaded": {
      // highlight-start
      const newEntities = {};
      action.payload.forEach((todo) => {
        newEntities[todo.id] = todo;
      });
      return {
        ...state,
        status: "idle",
        entities: newEntities,
      };
      // highlight-end
    }
    default:
      return state;
  }
}

// omit action creators

// highlight-start
const selectTodoEntities = (state) => state.todos.entities;

export const selectTodos = createSelector(selectTodoEntities, (entities) =>
  Object.values(entities)
);

export const selectTodoById = (state, todoId) => {
  return selectTodoEntities(state)[todoId];
};
// highlight-end
```

Because our `state.entities` field is now an object instead of an array, we have to use nested object spread operators to update the data instead of array operations. Also, we can't loop over objects the way we loop over arrays, so there's several places where we have to use `Object.values(entities)` to get an array of the todo items so that we can loop over them.

The good news is that because we're using selectors to encapsulate the state lookups, our UI still doesn't have to change. The bad news is that the reducer code is actually longer and more complicated.

Part of the issue here is that **this todo app example is not a large real-world application**. So, normalizing state is not as useful in this particular app, and it's harder to see the potential benefits.

Fortunately, in [Part 8: Modern Redux with Redux Toolkit](part-8-modern-redux.md) we'll see some ways to drastically shorten the reducer logic for managing our normalized state.

For now, the important things to understand are:

- Normalization _is_ commonly used in Redux apps
- The primary benefits are being able to look up individual items by ID and ensure that only one copy of an item exists in the state

:::info

For more details on why normalization is useful with Redux, see:

- [Structuring Reducers: Normalizing State Shape](../../usage/structuring-reducers/NormalizingStateShape.md)

:::

## Thunks and Promises

We have one last pattern to look at for this section. We've already seen how to handle loading state in the Redux store based on dispatched actions. What if we need to look at the results of a thunk in our components?

Whenever you call `store.dispatch(action)`, `dispatch` will actually return the `action` as its result. Middleware can then modify that behavior and return some other value instead.

We've already seen that the Redux Thunk middleware lets us pass a function to `dispatch`, calls the function, and then returns the result:

```js title="reduxThunkMiddleware.js"
const reduxThunkMiddleware = (storeAPI) => (next) => (action) => {
  // If the "action" is actually a function instead...
  if (typeof action === "function") {
    // then call the function and pass `dispatch` and `getState` as arguments
    // Also, return whatever the thunk function returns
    return action(storeAPI.dispatch, storeAPI.getState);
  }

  // Otherwise, it's a normal action - send it onwards
  return next(action);
};
```

This means that **we can write thunk functions that return a promise, and wait on that promise in our components**.

We already have our `<Header>` component dispatching a thunk to save new todo entries to the server. Let's add some loading state inside the `<Header>` component, then disable the text input and show another loading spinner while we're waiting for the server:

```js title="src/features/header/Header.js"
const Header = () => {
  const [text, setText] = useState("");
  // highlight-next-line
  const [status, setStatus] = useState("idle");
  const dispatch = useDispatch();

  const handleChange = (e) => setText(e.target.value);

  // highlight-start
  const handleKeyDown = async (e) => {
    // If the user pressed the Enter key:
    const trimmedText = text.trim();
    if (e.which === 13 && trimmedText) {
      // Create and dispatch the thunk function itself
      setStatus("loading");
      // Wait for the promise returned by saveNewTodo
      await dispatch(saveNewTodo(trimmedText));
      // And clear out the text input
      setText("");
      setStatus("idle");
    }
  };

  let isLoading = status === "loading";
  let placeholder = isLoading ? "" : "What needs to be done?";
  let loader = isLoading ? <div className="loader" /> : null;
  // highlight-end

  return (
    <header className="header">
      <input
        className="new-todo"
        placeholder={placeholder}
        autoFocus={true}
        value={text}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        // highlight-next-line
        disabled={isLoading}
      />
      // highlight-next-line
      {loader}
    </header>
  );
};

export default Header;
```

Now, if we add a todo, we'll see a spinner in the header:

![Todo app - component loading spinner](/img/tutorials/fundamentals/todos-app-headerLoading.png)

## What You've Learned

As you've seen, there's several additional patterns that are widely used in Redux apps. These patterns are not required, and may involve writing more code initially, but they provide benefits like making logic reusable, encapsulating implementation details, improving app performance, and making it easier to look up data.

:::info

For more details on why these patterns exist and how Redux is meant to be used, see:

- [Idiomatic Redux: The Tao of Redux, Part 1 - Implementation and Intent](https://blog.isquaredsoftware.com/2017/05/idiomatic-redux-tao-of-redux-part-1/)
- [Idiomatic Redux: The Tao of Redux, Part 2 - Practice and Philosophy](https://blog.isquaredsoftware.com/2017/05/idiomatic-redux-tao-of-redux-part-2/)

:::

Here's how our app looks after it's been fully converted to use these patterns:

<iframe
  class="codesandbox"
  src="https://codesandbox.io/embed/github/reduxjs/redux-fundamentals-example-app/tree/checkpoint-8-normalizedState/?fontsize=14&hidenavigation=1&theme=dark&runonclick=1"
  title="redux-fundamentals-example-app"
  allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
  sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
></iframe>

:::tip Summary

- **Action creator functions encapsulate preparing action objects and thunks**
  - Action creators can accept arguments and contain setup logic, and return the final action object or thunk function
- **Memoized selectors help improve Redux app performance**
  - Reselect has a `createSelector` API that generates memoized selectors
  - Memoized selectors return the same result reference if given the same inputs
- **Request status should be stored as an enum, not booleans**
  - Using enums like `'idle'` and `'loading'` helps track status consistently
- **"Flux Standard Actions" are the common convention for organizing action objects**
  - Actions use `payload` for data, `meta` for extra descriptions, and `error` for errors
- **Normalized state makes it easier to find items by ID**
  - Normalized data is stored in objects instead of arrays, with item IDs as keys
- **Thunks can return promises from `dispatch`**
  - Components can wait for async thunks to complete, then do more work

:::

## What's Next?

Writing all this code "by hand" can be time-consuming and difficult. **That's why we recommend that you use our official [Redux Toolkit](https://redux-toolkit.js.org) package to write your Redux logic instead**.

Redux Toolkit includes APIs that **help you write all the typical Redux usage patterns, but with less code**. It also helps **prevent common mistakes** like accidentally mutating state.

In [Part 8: Modern Redux](./part-8-modern-redux.md), we'll cover how to use Redux Toolkit to simplify all the code we've written so far.

---

id: part-8-modern-redux
title: 'Redux Fundamentals, Part 8: Modern Redux with Redux Toolkit'
sidebar_label: 'Modern Redux with Redux Toolkit'
description: 'The official Fundamentals tutorial for Redux: learn the modern way to write Redux logic'

---

import { DetailedExplanation } from '../../components/DetailedExplanation'

# Redux Fundamentals, Part 8: Modern Redux with Redux Toolkit

:::tip What You'll Learn

- How to simplify your Redux logic using Redux Toolkit
- Next steps for learning and using Redux

:::

Congratulations, you've made it to the last section of this tutorial! We've got one more topic to cover before we're done.

If you'd like a reminder of what we've covered so far, take a look at this summary:

:::info

<DetailedExplanation title="Recap: What You've Learned">

- [Part 1: Overview](./part-1-overview.md):
  - what Redux is, when/why to use it, and the basic pieces of a Redux app
- [Part 2: Concepts and Data Flow](./part-2-concepts-data-flow.md):
  - How Redux uses a "one-way data flow" pattern
- [Part 3: State, Actions, and Reducers](./part-3-state-actions-reducers.md):
  - Redux state is made of plain JS data
  - Actions are objects that describe "what happened" events in an app
  - Reducers take current state and an action, and calculate a new state
  - Reducers must follow rules like "immutable updates" and "no side effects"
- [Part 4: Store](./part-4-store.md):
  - The `createStore` API creates a Redux store with a root reducer function
  - Stores can be customized using "enhancers" and "middleware"
  - The Redux DevTools extension lets you see how your state changes over time
- [Part 5: UI and React](./part-5-ui-and-react.md):
  - Redux is separate from any UI, but frequently used with React
  - React-Redux provides APIs to let React components talk to Redux stores
  - `useSelector` reads values from Redux state and subscribes to updates
  - `useDispatch` lets components dispatch actions
  - `<Provider>` wraps your app and lets components access the store
- [Part 6: Async Logic and Data Fetching](./part-6-async-logic.md):
  - Redux middleware allow writing logic that has side effects
  - Middleware add an extra step to the Redux data flow, enabling async logic
  - Redux "thunk" functions are the standard way to write basic async logic
- [Part 7: Standard Redux Patterns](./part-7-standard-patterns.md):
  - Action creators encapsulate preparing action objects and thunks
  - Memoized selectors optimize calculating transformed data
  - Request status should be tracked with loading state enum values
  - Normalized state makes it easier to look up items by IDs

</DetailedExplanation>

:::

As you've seen, many aspects of Redux involve writing some code that can be verbose, such as immutable updates, action types and action creators, and normalizing state. There's good reasons why these patterns exist, but writing that code "by hand" can be difficult. In addition, the process for setting up a Redux store takes several steps, and we've had to come up with our own logic for things like dispatching "loading" actions in thunks or processing normalized data. Finally, many times users aren't sure what "the right way" is to write Redux logic.

That's why the Redux team created [**Redux Toolkit**: our official, opinionated, "batteries included" toolset for efficient Redux development](https://redux-toolkit.js.org).

Redux Toolkit contains packages and functions that we think are essential for building a Redux app. Redux Toolkit builds in our suggested best practices, simplifies most Redux tasks, prevents common mistakes, and makes it easier to write Redux applications.

Because of this, **Redux Toolkit is the standard way to write Redux application logic**. The "hand-written" Redux logic you've written so far in this tutorial is actual working code, but **you shouldn't write Redux logic by hand** - we've covered those approaches in this tutorial so that you understand _how_ Redux works. However, **for real applications, you should use Redux Toolkit to write your Redux logic.**

When you use Redux Toolkit, all the concepts that we've covered so far (actions, reducers, store setup, action creators, thunks, etc) still exist, but **Redux Toolkit provides easier ways to write that code**.

:::tip

Redux Toolkit _only_ covers the Redux logic - we still use React-Redux to let our React components talk to the Redux store, including `useSelector` and `useDispatch`.

:::

So, let's see how we can use Redux Toolkit to simplify the code we've already written in our example todo application. We'll primarily be rewriting our "slice" files, but we should be able to keep all the UI code the same.

Before we continue, **add the Redux Toolkit package to your app**:

```bash
npm install @reduxjs/toolkit
```

## Store Setup

We've gone through a few iterations of setup logic for our Redux store. Currently, it looks like this:

```js title="src/rootReducer.js"
import { combineReducers } from "redux";

import todosReducer from "./features/todos/todosSlice";
import filtersReducer from "./features/filters/filtersSlice";

const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  todos: todosReducer,
  filters: filtersReducer,
});

export default rootReducer;
```

```js title="src/store.js"
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducer";

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

const store = createStore(rootReducer, composedEnhancer);
export default store;
```

Notice that the setup process takes several steps. We have to:

- Combine the slice reducers together to form the root reducer
- Import the root reducer into the store file
- Import the thunk middleware, `applyMiddleware`, and `composeWithDevTools` APIs
- Create a store enhancer with the middleware and devtools
- Create the store with the root reducer

It would be nice if we could cut down the number of steps here.

### Using `configureStore`

**Redux Toolkit has a `configureStore` API that simplifies the store setup process**. `configureStore` wraps around the Redux core `createStore` API, and handles most of the store setup for us automatically. In fact, we can cut it down to effectively one step:

```js title="src/store.js"
// highlight-next-line
import { configureStore } from "@reduxjs/toolkit";

import todosReducer from "./features/todos/todosSlice";
import filtersReducer from "./features/filters/filtersSlice";

// highlight-start
const store = configureStore({
  reducer: {
    // Define a top-level state field named `todos`, handled by `todosReducer`
    todos: todosReducer,
    filters: filtersReducer,
  },
});
// highlight-end

export default store;
```

That one call to `configureStore` did all the work for us:

- It combined `todosReducer` and `filtersReducer` into the root reducer function, which will handle a root state that looks like `{todos, filters}`
- It created a Redux store using that root reducer
- It automatically added the `thunk` middleware
- It automatically added more middleware to check for common mistakes like accidentally mutating the state
- It automatically set up the Redux DevTools Extension connection

We can confirm this works by opening up our example todo application and using it. All of our existing feature code works fine! Since we're dispatching actions, dispatching thunks, reading state in the UI, and looking at the action history in the DevTools, all those pieces must be working correctly. All we've done is switched out the store setup code.

Let's see what happens now if we accidentally mutate some of the state. What if we change the "todos loading" reducer so that it directly changes the state field, instead of immutably making a copy?

```js title="src/features/todos/todosSlice"
export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    // omit other cases
    case "todos/todosLoading": {
      // ❌ WARNING: example only - don't do this in a normal reducer!
      state.status = "loading";
      return state;
    }
    default:
      return state;
  }
}
```

Uh-oh. Our whole app just crashed! What happened?

![Immutability check middleware error](/img/tutorials/fundamentals/immutable-error.png)

**This error message is a _good_ thing - we caught a bug in our app!** `configureStore` specifically added an extra middleware that automatically throws an error whenever it sees an accidental mutation of our state (in development mode only). That helps catch mistakes we might make while writing our code.

### Package Cleanup

Redux Toolkit already includes several of the packages we're using, like `redux`, `redux-thunk`, and `reselect`, and re-exports those APIs. So, we can clean up our project a bit.

First, we can switch our `createSelector` import to be from `'@reduxjs/toolkit'` instead of `'reselect'`. Then, we can remove the separate packages we have listed in our `package.json`:

```js
npm uninstall redux redux-thunk reselect
```

To be clear, **we're still using these packages and need to have them installed**. However, because Redux Toolkit depends on them, they'll be installed automatically when we install `@reduxjs/toolkit`, so we don't need to have the other packages specifically listed in our `package.json` file.

## Writing Slices

As we've added new features to our app, the slice files have gotten bigger and more complicated. In particular, the `todosReducer` has gotten harder to read because of all the nested object spreads for immutable updates, and we've written multiple action creator functions.

**Redux Toolkit has a `createSlice` API that will help us simplify our Redux reducer logic and actions**. `createSlice` does several important things for us:

- We can write the case reducers as functions inside of an object, instead of having to write a `switch/case` statement
- The reducers will be able to write shorter immutable update logic
- All the action creators will be generated automatically based on the reducer functions we've provided

### Using `createSlice`

`createSlice` takes an object with three main options fields:

- `name`: a string that will be used as the prefix for generated action types
- `initialState`: the initial state of the reducer
- `reducers`: an object where the keys are strings, and the values are "case reducer" functions that will handle specific actions

Let's look at a small standalone example first.

```js title="createSlice  example"
import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    todoAdded(state, action) {
      // ✅ This "mutating" code is okay inside of createSlice!
      state.push(action.payload);
    },
    todoToggled(state, action) {
      const todo = state.find((todo) => todo.id === action.payload);
      todo.completed = !todo.completed;
    },
    todosLoading(state, action) {
      return {
        ...state,
        status: "loading",
      };
    },
  },
});

export const { todoAdded, todoToggled, todosLoading } = todosSlice.actions;

export default todosSlice.reducer;
```

There's several things to see in this example:

- We write case reducer functions inside the `reducers` object, and give them readable names
- **`createSlice` will automatically generate action creators** that correspond to each case reducer function we provide
- createSlice automatically returns the existing state in the default case
- **`createSlice` allows us to safely "mutate" our state!**
- But, we can also make immutable copies like before if we want to

The generated action creators will be available as `slice.actions.todoAdded`, and we typically destructure and export those individually like we did with the action creators we wrote earlier. The complete reducer function is available as `slice.reducer`, and we typically `export default slice.reducer`, again the same as before.

So what do these auto-generated action objects look like? Let's try calling one of them and logging the action to see:

```js
console.log(todoToggled(42));
// {type: 'todos/todoToggled', payload: 42}
```

`createSlice` generated the action type string for us, by combining the slice's `name` field with the `todoToggled` name of the reducer function we wrote. By default, the action creator accepts one argument, which it puts into the action object as `action.payload`.

Inside of the generated reducer function, `createSlice` will check to see if a dispatched action's `action.type` matches one of the names it generated. If so, it will run that case reducer function. This is exactly the same pattern that we wrote ourselves using a `switch/case` statement, but `createSlice` does it for us automatically.

It's also worth talking about the "mutation" aspect in more detail.

### Immutable Updates with Immer

Earlier, we talked about "mutation" (modifying existing object/array values) and "immutability" (treating values as something that cannot be changed).

:::warning

In Redux, **our reducers are _never_ allowed to mutate the original / current state values!**

```js
// ❌ Illegal - by default, this will mutate the state!
state.value = 123;
```

:::

So if we can't change the originals, how do we return an updated state?

:::tip

**Reducers can only make _copies_ of the original values, and then they can mutate the copies.**

```js
// This is safe, because we made a copy
return {
  ...state,
  value: 123,
};
```

:::

As you've seen throughout this tutorial, we can write immutable updates by hand by using JavaScript's array / object spread operators and other functions that return copies of the original values. However, writing immutable update logic by hand _is_ hard, and accidentally mutating state in reducers is the single most common mistake Redux users make.

**That's why Redux Toolkit's `createSlice` function lets you write immutable updates an easier way!**

`createSlice` uses a library called [Immer](https://immerjs.github.io/immer/) inside. Immer uses a special JS tool called a `Proxy` to wrap the data you provide, and lets you write code that "mutates" that wrapped data. But, **Immer tracks all the changes you've tried to make, and then uses that list of changes to return a safely immutably updated value**, as if you'd written all the immutable update logic by hand.

So, instead of this:

```js
function handwrittenReducer(state, action) {
  return {
    ...state,
    first: {
      ...state.first,
      second: {
        ...state.first.second,
        [action.someId]: {
          ...state.first.second[action.someId],
          fourth: action.someValue,
        },
      },
    },
  };
}
```

You can write code that looks like this:

```js
function reducerWithImmer(state, action) {
  state.first.second[action.someId].fourth = action.someValue;
}
```

That's a lot easier to read!

But, here's something _very_ important to remember:

:::warning

**You can _only_ write "mutating" logic in Redux Toolkit's `createSlice` and `createReducer` because they use Immer inside! If you write mutating logic in reducers without Immer, it _will_ mutate the state and cause bugs!**

:::

Immer still lets us write immutable updates by hand and return the new value ourselves if we want to. You can even mix and match. For example, removing an item from an array is often easier to do with `array.filter()`, so you could call that and then assign the result to `state` to "mutate" it:

```js
// can mix "mutating" and "immutable" code inside of Immer:
state.todos = state.todos.filter((todo) => todo.id !== action.payload);
```

### Converting the Todos Reducer

Let's start converting our todos slice file to use `createSlice` instead. We'll pick a couple specific cases from our switch statement first to show how the process works.

```js title="src/features/todos/todosSlice.js"
// highlight-next-line
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "idle",
  entities: {},
};

// highlight-start
const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    todoAdded(state, action) {
      const todo = action.payload;
      state.entities[todo.id] = todo;
    },
    todoToggled(state, action) {
      const todoId = action.payload;
      const todo = state.entities[todoId];
      todo.completed = !todo.completed;
    },
  },
});

export const { todoAdded, todoToggled } = todosSlice.actions;

export default todosSlice.reducer;
// highlight-end
```

The todos reducer in our example app is still using normalized state that is nested in a parent object, so the code here is a bit different than the miniature `createSlice` example we just looked at. Remember how we had to [write a lot of nested spread operators to toggle that todo earlier](./part-7-standard-patterns.md#normalized-state)? Now that same code is a _lot_ shorter and easier to read.

Let's add a couple more cases to this reducer.

```js title="src/features/todos/todosSlice.js"
const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    todoAdded(state, action) {
      const todo = action.payload;
      state.entities[todo.id] = todo;
    },
    todoToggled(state, action) {
      const todoId = action.payload;
      const todo = state.entities[todoId];
      todo.completed = !todo.completed;
    },
    // highlight-start
    todoColorSelected: {
      reducer(state, action) {
        const { color, todoId } = action.payload;
        state.entities[todoId].color = color;
      },
      prepare(todoId, color) {
        return {
          payload: { todoId, color },
        };
      },
    },
    todoDeleted(state, action) {
      delete state.entities[action.payload];
    },
    // highlight-end
  },
});

export const { todoAdded, todoToggled, todoColorSelected, todoDeleted } =
  todosSlice.actions;

export default todosSlice.reducer;
```

The action creators for `todoAdded` and `todoToggled` only need to take a single parameter, like an entire todo object or a todo ID. But, what if we need to pass in multiple parameters, or do some of that "preparation" logic we talked about like generating a unique ID?

`createSlice` lets us handle those situations by adding a "prepare callback" to the reducer. We can pass an object that has functions named `reducer` and `prepare`. When we call the generated action creator, the `prepare` function will be called with whatever parameters were passed in. It should then create and return an object that has a `payload` field (or, optionally, `meta` and `error` fields), matching the [Flux Standard Action convention](./part-7-standard-patterns.md#flux-standard-actions).

Here, we've used a prepare callback to let our `todoColorSelected` action creator accept separate `todoId` and `color` arguments, and put them together as an object in `action.payload`.

Meanwhile, in the `todoDeleted` reducer, we can use the JS `delete` operator to remove items from our normalized state.

We can use these same patterns to go rewrite the rest of our reducers in `todosSlice.js` and `filtersSlice.js`.

Here's how our code looks with all the slices converted:

<iframe
  class="codesandbox"
  src="https://codesandbox.io/embed/github/reduxjs/redux-fundamentals-example-app/tree/checkpoint-9-createSlice/?fontsize=14&hidenavigation=1&theme=dark&module=%2Fsrc%2Ffeatures%2Ftodos%2FtodosSlice.js&runonclick=1"
  title="redux-fundamentals-example-app"
  allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
  sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
></iframe>

## Writing Thunks

We've seen how we can [write thunks that dispatch "loading", "request succeeded", and "request failed" actions](./part-7-standard-patterns.md#loading-state-enum-values). We had to write action creators, action types, _and_ reducers to handle those cases.

Because this pattern is so common, **Redux Toolkit has a `createAsyncThunk` API that will generate these thunks for us**. It also generates the action types and action creators for those different request status actions, and dispatches those actions automatically based on the resulting `Promise`.

:::tip

Redux Toolkit has a new [**RTK Query data fetching API**](https://redux-toolkit.js.org/rtk-query/overview). RTK Query is a purpose built data fetching and caching solution for Redux apps, and **can eliminate the need to write _any_ thunks or reducers to manage data fetching**. We encourage you to try it out and see if it can help simplify the data fetching code in your own apps!

We'll be updating the Redux tutorials soon to include sections on using RTK Query. Until then, see [the RTK Query section in the Redux Toolkit docs](https://redux-toolkit.js.org/rtk-query/overview).

:::

### Using `createAsyncThunk`

Let's replace our `fetchTodos` thunk by generating a thunk with `createAsyncThunk`.

`createAsyncThunk` accepts two arguments:

- A string that will be used as the prefix for the generated action types
- A "payload creator" callback function that should return a `Promise`. This is often written using the `async/await` syntax, since `async` functions automatically return a promise.

```js title="src/features/todos/todosSlice.js"
// highlight-next-line
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// omit imports and state

// highlight-start
export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const response = await client.get("/fakeApi/todos");
  return response.todos;
});
// highlight-end

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    // omit reducer cases
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        const newEntities = {};
        action.payload.forEach((todo) => {
          newEntities[todo.id] = todo;
        });
        state.entities = newEntities;
        state.status = "idle";
      });
  },
});

// omit exports
```

We pass `'todos/fetchTodos'` as the string prefix, and a "payload creator" function that calls our API and returns a promise containing the fetched data. Inside, `createAsyncThunk` will generate three action creators and action types, plus a thunk function that automatically dispatches those actions when called. In this case, the action creators and their types are:

- `fetchTodos.pending`: `todos/fetchTodos/pending`
- `fetchTodos.fulfilled`: `todos/fetchTodos/fulfilled`
- `fetchTodos.rejected`: `todos/fetchTodos/rejected`

However, these action creators and types are being defined _outside_ of the `createSlice` call. We can't handle those inside of the `createSlice.reducers` field, because those generate new action types too. We need a way for our `createSlice` call to listen for _other_ action types that were defined elsewhere.

**`createSlice` also accepts an `extraReducers` option, where we can have the same slice reducer listen for other action types**. This field should be a callback function with a `builder` parameter, and we can call `builder.addCase(actionCreator, caseReducer)` to listen for other actions.

So, here we've called `builder.addCase(fetchTodos.pending, caseReducer)`. When that action is dispatched, we'll run the reducer that sets `state.status = 'loading'`, same as it did earlier when we wrote that logic in a switch statement. We can do the same thing for `fetchTodos.fulfilled`, and handle the data we received from the API.

As one more example, let's convert `saveNewTodo`. This thunk takes the `text` of the new todo object as its parameter, and saves it to the server. How do we handle that?

```js title="src/features/todos/todosSlice.js"
// omit imports

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const response = await client.get("/fakeApi/todos");
  return response.todos;
});

// highlight-start
export const saveNewTodo = createAsyncThunk(
  "todos/saveNewTodo",
  async (text) => {
    const initialTodo = { text };
    const response = await client.post("/fakeApi/todos", { todo: initialTodo });
    return response.todo;
  }
);
// highlight-end

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    // omit case reducers
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        const newEntities = {};
        action.payload.forEach((todo) => {
          newEntities[todo.id] = todo;
        });
        state.entities = newEntities;
        state.status = "idle";
      })
      // highlight-start
      .addCase(saveNewTodo.fulfilled, (state, action) => {
        const todo = action.payload;
        state.entities[todo.id] = todo;
      });
    // highlight-end
  },
});

// omit exports and selectors
```

The process for `saveNewTodo` is the same as we saw for `fetchTodos`. We call `createAsyncThunk`, and pass in the action prefix and a payload creator. Inside the payload creator, we make an async API call, and return a result value.

In this case, when we call `dispatch(saveNewTodo(text))`, the `text` value will be passed in to the payload creator as its first argument.

While we won't cover `createAsyncThunk` in more detail here, a few other quick notes for reference:

- You can only pass one argument to the thunk when you dispatch it. If you need to pass multiple values, pass them in a single object
- The payload creator will receive an object as its second argument, which contains `{getState, dispatch}`, and some other useful values
- The thunk dispatches the `pending` action before running your payload creator, then dispatches either `fulfilled` or `rejected` based on whether the `Promise` you return succeeds or fails

## Normalizing State

We previously saw how to "normalize" state, by keeping items in an object keyed by item IDs. This gives us the ability to look up any item by its ID without having to loop through an entire array. However, writing the logic to update normalized state by hand was long and tedious. Writing "mutating" update code with Immer makes that simpler, but there's still likely to be a lot of repetition - we might be loading many different types of items in our app, and we'd have to repeat the same reducer logic each time.

**Redux Toolkit includes a `createEntityAdapter` API that has prebuilt reducers for typical data update operations with normalized state**. This includes adding, updating, and removing items from a slice. **`createEntityAdapter` also generates some memoized selectors for reading values from the store**.

### Using `createEntityAdapter`

Let's replace our normalized entity reducer logic with `createEntityAdapter`.

Calling `createEntityAdapter` gives us an "adapter" object that contains several premade reducer functions, including:

- `addOne` / `addMany`: add new items to the state
- `upsertOne` / `upsertMany`: add new items or update existing ones
- `updateOne` / `updateMany`: update existing items by supplying partial values
- `removeOne` / `removeMany`: remove items based on IDs
- `setAll`: replace all existing items

We can use these functions as case reducers, or as "mutating helpers" inside of `createSlice`.

The adapter also contains:

- `getInitialState`: returns an object that looks like `{ ids: [], entities: {} }`, for storing a normalized state of items along with an array of all item IDs
- `getSelectors`: generates a standard set of selector functions

Let's see how we can use these in our todos slice:

```js title="src/features/todos/todosSlice.js"
// highlight-start
import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
// omit some imports

// highlight-start
const todosAdapter = createEntityAdapter();

const initialState = todosAdapter.getInitialState({
  status: "idle",
});
// highlight-end

// omit thunks

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    // omit some reducers
    // highlight-start
    // Use an adapter reducer function to remove a todo by ID
    todoDeleted: todosAdapter.removeOne,
    // highlight-end
    completedTodosCleared(state, action) {
      const completedIds = Object.values(state.entities)
        .filter((todo) => todo.completed)
        .map((todo) => todo.id);
      // highlight-start
      // Use an adapter function as a "mutating" update helper
      todosAdapter.removeMany(state, completedIds);
      // highlight-end
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        todosAdapter.setAll(state, action.payload);
        state.status = "idle";
      })
      // highlight-start
      // Use another adapter function as a reducer to add a todo
      .addCase(saveNewTodo.fulfilled, todosAdapter.addOne);
    // highlight-end
  },
});

// omit selectors
```

The different adapter reducer functions take different values depending on the function, all in `action.payload`. The "add" and "upsert" functions take a single item or an array of items, the "remove" functions take a single ID or array of IDs, and so on.

`getInitialState` allows us to pass in additional state fields that will be included. In this case, we've passed in a `status` field, giving us a final todos slice state of `{ids, entities, status}`, much like we had before.

We can also replace some of our todos selector functions as well. The `getSelectors` adapter function will generate selectors like `selectAll`, which returns an array of all items, and `selectById`, which returns one item. However, since `getSelectors` doesn't know where our data is in the entire Redux state tree, we need to pass in a small selector that returns this slice out of the whole state tree. Let's switch to using these instead. Since this is the last major change to our code, we'll include the whole todos slice file this time to see what the final version of the code looks like using Redux Toolkit:

```js title="src/features/todos/todosSlice.js"
import {
  createSlice,
  createSelector,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import { client } from "../../api/client";
import { StatusFilters } from "../filters/filtersSlice";

const todosAdapter = createEntityAdapter();

const initialState = todosAdapter.getInitialState({
  status: "idle",
});

// Thunk functions
export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const response = await client.get("/fakeApi/todos");
  return response.todos;
});

export const saveNewTodo = createAsyncThunk(
  "todos/saveNewTodo",
  async (text) => {
    const initialTodo = { text };
    const response = await client.post("/fakeApi/todos", { todo: initialTodo });
    return response.todo;
  }
);

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    todoToggled(state, action) {
      const todoId = action.payload;
      const todo = state.entities[todoId];
      todo.completed = !todo.completed;
    },
    todoColorSelected: {
      reducer(state, action) {
        const { color, todoId } = action.payload;
        state.entities[todoId].color = color;
      },
      prepare(todoId, color) {
        return {
          payload: { todoId, color },
        };
      },
    },
    todoDeleted: todosAdapter.removeOne,
    allTodosCompleted(state, action) {
      Object.values(state.entities).forEach((todo) => {
        todo.completed = true;
      });
    },
    completedTodosCleared(state, action) {
      const completedIds = Object.values(state.entities)
        .filter((todo) => todo.completed)
        .map((todo) => todo.id);
      todosAdapter.removeMany(state, completedIds);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        todosAdapter.setAll(state, action.payload);
        state.status = "idle";
      })
      .addCase(saveNewTodo.fulfilled, todosAdapter.addOne);
  },
});

export const {
  allTodosCompleted,
  completedTodosCleared,
  todoAdded,
  todoColorSelected,
  todoDeleted,
  todoToggled,
} = todosSlice.actions;

export default todosSlice.reducer;

// highlight-start
export const { selectAll: selectTodos, selectById: selectTodoById } =
  todosAdapter.getSelectors((state) => state.todos);
// highlight-end

export const selectTodoIds = createSelector(
  // First, pass one or more "input selector" functions:
  selectTodos,
  // Then, an "output selector" that receives all the input results as arguments
  // and returns a final result value
  (todos) => todos.map((todo) => todo.id)
);

export const selectFilteredTodos = createSelector(
  // First input selector: all todos
  selectTodos,
  // Second input selector: all filter values
  (state) => state.filters,
  // Output selector: receives both values
  (todos, filters) => {
    const { status, colors } = filters;
    const showAllCompletions = status === StatusFilters.All;
    if (showAllCompletions && colors.length === 0) {
      return todos;
    }

    const completedStatus = status === StatusFilters.Completed;
    // Return either active or completed todos based on filter
    return todos.filter((todo) => {
      const statusMatches =
        showAllCompletions || todo.completed === completedStatus;
      const colorMatches = colors.length === 0 || colors.includes(todo.color);
      return statusMatches && colorMatches;
    });
  }
);

export const selectFilteredTodoIds = createSelector(
  // Pass our other memoized selector as an input
  selectFilteredTodos,
  // And derive data in the output selector
  (filteredTodos) => filteredTodos.map((todo) => todo.id)
);
```

We call `todosAdapter.getSelectors`, and pass in a `state => state.todos` selector that returns this slice of state. From there, the adapter generates a `selectAll` selector that takes the _entire_ Redux state tree, as usual, and loops over `state.todos.entities` and `state.todos.ids` to give us the complete array of todo objects. Since `selectAll` doesn't tell us _what_ we're selecting, we can use ES6 destructuring syntax to rename the function to `selectTodos`. Similarly, we can rename `selectById` to `selectTodoById`.

Notice that our other selectors still use `selectTodos` as an input. That's because it's still returning an array of todo objects this whole time, no matter whether we were keeping the array as the entire `state.todos`, keeping it as a nested array, or storing it as a normalized object and converting to an array. Even as we've made all these changes to how we stored our data, the use of selectors allowed us to keep the rest of our code the same, and the use of memoized selectors has helped the UI perform better by avoiding unnecessary rerenders.

## What You've Learned

**Congratulations! You've completed the "Redux Fundamentals" tutorial!**

You should now have a solid understanding of what Redux is, how it works, and how to use it correctly:

- Managing global app state
- Keeping the state of our app as plain JS data
- Writing action objects that describe "what happened" in the app
- Using reducer functions that look at the current state and an action, and create a new state immutably in response
- Reading the Redux state in our React components with `useSelector`
- Dispatching actions from React components with `useDispatch`

In addition, you've seen how **Redux Toolkit simplifies writing Redux logic**, and why **Redux Toolkit is the standard approach for writing real Redux applications**. By seeing how to write Redux code "by hand" first, it should be clear what the Redux Toolkit APIs like `createSlice` are doing for you, so that you don't have to write that code yourself.

:::info

For more info on Redux Toolkit, including usage guides and API references, see:

- The Redux Toolkit docs at **<https://redux-toolkit.js.org>**

:::

Let's take one final look at the completed todo application, including all the code that's been converted to use Redux Toolkit:

<iframe
  class="codesandbox"
  src="https://codesandbox.io/embed/github/reduxjs/redux-fundamentals-example-app/tree/checkpoint-10-finalCode/?fontsize=14&hidenavigation=1&theme=dark&module=%2Fsrc%2Ffeatures%2Ftodos%2FtodosSlice.js&runonclick=1"
  title="redux-fundamentals-example-app"
  allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
  sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
></iframe>

And we'll do a final recap of the key points you learned in this section:

:::tip Summary

- **Redux Toolkit (RTK) is the standard way to write Redux logic**
  - RTK includes APIs that simplify most Redux code
  - RTK wraps around the Redux core, and includes other useful packages
- **`configureStore` sets up a Redux store with good defaults**
  - Automatically combines slice reducers to create the root reducer
  - Automatically sets up the Redux DevTools Extension and debugging middleware
- **`createSlice` simplifies writing Redux actions and reducers**
  - Automatically generates action creators based on slice/reducer names
  - Reducers can "mutate" state inside `createSlice` using Immer
- **`createAsyncThunk` generates thunks for async calls**
  - Automatically generates a thunk + `pending/fulfilled/rejected` action creators
  - Dispatching the thunk runs your payload creator and dispatches the actions
  - Thunk actions can be handled in `createSlice.extraReducers`
- **`createEntityAdapter` provides reducers + selectors for normalized state**
  - Includes reducer functions for common tasks like adding/updating/removing items
  - Generates memoized selectors for `selectAll` and `selectById`

:::

## Next Steps for Learning and Using Redux

Now that you've completed this tutorial, we have several suggestions for what you should try next to learn more about Redux.

This "Fundamentals" tutorial focused on the low-level aspects of Redux: writing action types and immutable updates by hand, how a Redux store and middleware work, and why we use patterns like action creators and normalized state. In addition, our todo example app is fairly small, and not meant as a realistic example of building a full app.

However, our [**"Redux Essentials" tutorial**](../essentials/part-1-overview-concepts.md) specifically teaches you **how to build a "real-world" type application**. It focuses on "how to use Redux the right way" using Redux Toolkit, and talks about more realistic patterns that you'll see in larger apps. It covers many of the same topics as this "Fundamentals" tutorial, such as why reducers need to use immutable updates, but with a focus on building a real working application. **We strongly recommend reading through the "Redux Essentials" tutorial as your next step.**

At the same time, the concepts we've covered in this tutorial should be enough to get you started building your own applications using React and Redux. Now's a great time to try working on a project yourself to solidify these concepts and see how they work in practice. If you're not sure what kind of a project to build, see [this list of app project ideas](https://github.com/florinpop17/app-ideas) for some inspiration.

The [Using Redux](../../usage/index.md) section has information on a number of important concepts, like [how to structure your reducers](../../usage/structuring-reducers/StructuringReducers.md), and [**our Style Guide page**](../../style-guide/style-guide) has important information on our recommended patterns and best practices.

If you'd like to know more about _why_ Redux exists, what problems it tries to solve, and how it's meant to be used, see Redux maintainer Mark Erikson's posts on [The Tao of Redux, Part 1: Implementation and Intent](https://blog.isquaredsoftware.com/2017/05/idiomatic-redux-tao-of-redux-part-1/) and [The Tao of Redux, Part 2: Practice and Philosophy](https://blog.isquaredsoftware.com/2017/05/idiomatic-redux-tao-of-redux-part-2/).

If you're looking for help with Redux questions, come join [the `#redux` channel in the Reactiflux server on Discord](https://www.reactiflux.com).

**Thanks for reading through this tutorial, and we hope you enjoy building applications with Redux!**

---

id: part-1-overview-concepts
title: 'Redux Essentials, Part 1: Redux Overview and Concepts'
sidebar_label: 'Redux Overview and Concepts'
description: 'The official Essentials tutorial for Redux: learn how to use Redux, the right way'

---

import { DetailedExplanation } from '../../components/DetailedExplanation'

:::tip What You'll Learn

- What Redux is and why you might want to use it
- Key Redux terms and concepts
- How data flows through a Redux app

:::

## Introduction

Welcome to the Redux Essentials tutorial! **This tutorial will introduce you to Redux and teach you how to use it the right way, using our latest recommended tools and best practices**. By the time you finish, you should be able to start building your own Redux applications using the tools and patterns you've learned here.

In Part 1 of this tutorial, we'll cover the key concepts and terms you need to know to use Redux, and in [Part 2: Redux App Structure](./part-2-app-structure.md) we'll examine a basic React + Redux app to see how the pieces fit together.

Starting in [Part 3: Basic Redux Data Flow](./part-3-data-flow.md), we'll use that knowledge to build a small social media feed app with some real-world features, see how those pieces actually work in practice, and talk about some important patterns and guidelines for using Redux.

### How to Read This Tutorial

This page will focus on showing you _how_ to use Redux the right way, and explain just enough of the concepts so that you can understand how to build Redux apps correctly.

We've tried to keep these explanations beginner-friendly, but we do need to make some assumptions about what you know already:

:::important Prerequisites

- Familiarity with [HTML & CSS](https://internetingishard.com/).
- Familiarity with [ES6 syntax and features](https://www.taniarascia.com/es6-syntax-and-feature-overview/)
- Knowledge of React terminology: [JSX](https://reactjs.org/docs/introducing-jsx.html), [State](https://reactjs.org/docs/state-and-lifecycle.html), [Function Components, Props](https://reactjs.org/docs/components-and-props.html), and [Hooks](https://reactjs.org/docs/hooks-intro.html)
- Knowledge of [asynchronous JavaScript](https://javascript.info/promise-basics) and [making AJAX requests](https://javascript.info/fetch)

:::

**If you're not already comfortable with those topics, we encourage you to take some time to become comfortable with them first, and then come back to learn about Redux**. We'll be here when you're ready!

You should make sure that you have the React and Redux DevTools extensions installed in your browser:

- React DevTools Extension:
  - [React DevTools Extension for Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)
  - [React DevTools Extension for Firefox](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/)
- Redux DevTools Extension:
  - [Redux DevTools Extension for Chrome](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)
  - [Redux DevTools Extension for Firefox](https://addons.mozilla.org/en-US/firefox/addon/reduxdevtools/)

## What is Redux?

It helps to understand what this "Redux" thing is in the first place. What does it do? What problems does it help me solve? Why would I want to use it?

**Redux is a pattern and library for managing and updating application state, using events called "actions".** It serves as a centralized store for state that needs to be used across your entire application, with rules ensuring that the state can only be updated in a predictable fashion.

### Why Should I Use Redux?

Redux helps you manage "global" state - state that is needed across many parts of your application.

**The patterns and tools provided by Redux make it easier to understand when, where, why, and how the state in your application is being updated, and how your application logic will behave when those changes occur**. Redux guides you towards writing code that is predictable and testable, which helps give you confidence that your application will work as expected.

### When Should I Use Redux?

Redux helps you deal with shared state management, but like any tool, it has tradeoffs. There are more concepts to learn, and more code to write. It also adds some indirection to your code, and asks you to follow certain restrictions. It's a trade-off between short term and long term productivity.

Redux is more useful when:

- You have large amounts of application state that are needed in many places in the app
- The app state is updated frequently over time
- The logic to update that state may be complex
- The app has a medium or large-sized codebase, and might be worked on by many people

**Not all apps need Redux. Take some time to think about the kind of app you're building, and decide what tools would be best to help solve the problems you're working on.**

:::info Want to Know More?

If you're not sure whether Redux is a good choice for your app, these resources give some more guidance:

- **[When (and when not) to reach for Redux](https://changelog.com/posts/when-and-when-not-to-reach-for-redux)**
- **[The Tao of Redux, Part 1 - Implementation and Intent](https://blog.isquaredsoftware.com/2017/05/idiomatic-redux-tao-of-redux-part-1/)**
- **[Redux FAQ: When should I use Redux?](../../faq/General.md#when-should-i-use-redux)**
- **[You Might Not Need Redux](https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367)**

:::

### Redux Libraries and Tools

Redux is a small standalone JS library. However, it is commonly used with several other packages:

#### React-Redux

Redux can integrate with any UI framework, and is most frequently used with React. [**React-Redux**](https://react-redux.js.org/) is our official package that lets your React components interact with a Redux store by reading pieces of state and dispatching actions to update the store.

#### Redux Toolkit

[**Redux Toolkit**](https://redux-toolkit.js.org) is our recommended approach for writing Redux logic. It contains packages and functions that we think are essential for building a Redux app. Redux Toolkit builds in our suggested best practices, simplifies most Redux tasks, prevents common mistakes, and makes it easier to write Redux applications.

#### Redux DevTools Extension

The [**Redux DevTools Extension**](https://github.com/zalmoxisus/redux-devtools-extension) shows a history of the changes to the state in your Redux store over time. This allows you to debug your applications effectively, including using powerful techniques like "time-travel debugging".

## Redux Terms and Concepts

Before we dive into some actual code, let's talk about some of the terms and concepts you'll need to know to use Redux.

### State Management

Let's start by looking at a small React counter component. It tracks a number in component state, and increments the number when a button is clicked:

```jsx
function Counter() {
  // State: a counter value
  const [counter, setCounter] = useState(0);

  // Action: code that causes an update to the state when something happens
  const increment = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  // View: the UI definition
  return (
    <div>
      Value: {counter} <button onClick={increment}>Increment</button>
    </div>
  );
}
```

It is a self-contained app with the following parts:

- The **state**, the source of truth that drives our app;
- The **view**, a declarative description of the UI based on the current state
- The **actions**, the events that occur in the app based on user input, and trigger updates in the state

This is a small example of **"one-way data flow"**:

- State describes the condition of the app at a specific point in time
- The UI is rendered based on that state
- When something happens (such as a user clicking a button), the state is updated based on what occurred
- The UI re-renders based on the new state

![One-way data flow](/img/tutorials/essentials/one-way-data-flow.png)

However, the simplicity can break down when we have **multiple components that need to share and use the same state**, especially if those components are located in different parts of the application. Sometimes this can be solved by ["lifting state up"](https://reactjs.org/docs/lifting-state-up.html) to parent components, but that doesn't always help.

One way to solve this is to extract the shared state from the components, and put it into a centralized location outside the component tree. With this, our component tree becomes a big "view", and any component can access the state or trigger actions, no matter where they are in the tree!

By defining and separating the concepts involved in state management and enforcing rules that maintain independence between views and states, we give our code more structure and maintainability.

This is the basic idea behind Redux: a single centralized place to contain the global state in your application, and specific patterns to follow when updating that state to make the code predictable.

### Immutability

"Mutable" means "changeable". If something is "immutable", it can never be changed.

JavaScript objects and arrays are all mutable by default. If I create an object, I can change the contents of its fields. If I create an array, I can change the contents as well:

```js
const obj = { a: 1, b: 2 };
// still the same object outside, but the contents have changed
obj.b = 3;

const arr = ["a", "b"];
// In the same way, we can change the contents of this array
arr.push("c");
arr[1] = "d";
```

This is called _mutating_ the object or array. It's the same object or array reference in memory, but now the contents inside the object have changed.

**In order to update values immutably, your code must make _copies_ of existing objects/arrays, and then modify the copies**.

We can do this by hand using JavaScript's array / object spread operators, as well as array methods that return new copies of the array instead of mutating the original array:

```js
const obj = {
  a: {
    // To safely update obj.a.c, we have to copy each piece
    c: 3,
  },
  b: 2,
};

const obj2 = {
  // copy obj
  ...obj,
  // overwrite a
  a: {
    // copy obj.a
    ...obj.a,
    // overwrite c
    c: 42,
  },
};

const arr = ["a", "b"];
// Create a new copy of arr, with "c" appended to the end
const arr2 = arr.concat("c");

// or, we can make a copy of the original array:
const arr3 = arr.slice();
// and mutate the copy:
arr3.push("c");
```

**Redux expects that all state updates are done immutably**. We'll look at where and how this is important a bit later, as well as some easier ways to write immutable update logic.

:::info Want to Know More?

For more info on how immutability works in JavaScript, see:

- [A Visual Guide to References in JavaScript](https://daveceddia.com/javascript-references/)
- [Immutability in React and Redux: The Complete Guide](https://daveceddia.com/react-redux-immutability-guide/)

:::

### Terminology

There are some important Redux terms that you'll need to be familiar with before we continue:

#### Actions

An **action** is a plain JavaScript object that has a `type` field. **You can think of an action as an event that describes something that happened in the application**.

The `type` field should be a string that gives this action a descriptive name, like `"todos/todoAdded"`. We usually write that type string like `"domain/eventName"`, where the first part is the feature or category that this action belongs to, and the second part is the specific thing that happened.

An action object can have other fields with additional information about what happened. By convention, we put that information in a field called `payload`.

A typical action object might look like this:

```js
const addTodoAction = {
  type: "todos/todoAdded",
  payload: "Buy milk",
};
```

#### Action Creators

An **action creator** is a function that creates and returns an action object. We typically use these so we don't have to write the action object by hand every time:

```js
const addTodo = (text) => {
  return {
    type: "todos/todoAdded",
    payload: text,
  };
};
```

#### Reducers

A **reducer** is a function that receives the current `state` and an `action` object, decides how to update the state if necessary, and returns the new state: `(state, action) => newState`. **You can think of a reducer as an event listener which handles events based on the received action (event) type.**

:::info

"Reducer" functions get their name because they're similar to the kind of callback function you pass to the [`Array.reduce()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) method.

:::

Reducers must _always_ follow some specific rules:

- They should only calculate the new state value based on the `state` and `action` arguments
- They are not allowed to modify the existing `state`. Instead, they must make _immutable updates_, by copying the existing `state` and making changes to the copied values.
- They must not do any asynchronous logic, calculate random values, or cause other "side effects"

We'll talk more about the rules of reducers later, including why they're important and how to follow them correctly.

The logic inside reducer functions typically follows the same series of steps:

- Check to see if the reducer cares about this action
  - If so, make a copy of the state, update the copy with new values, and return it
- Otherwise, return the existing state unchanged

Here's a small example of a reducer, showing the steps that each reducer should follow:

```js
const initialState = { value: 0 };

function counterReducer(state = initialState, action) {
  // Check to see if the reducer cares about this action
  if (action.type === "counter/increment") {
    // If so, make a copy of `state`
    return {
      ...state,
      // and update the copy with the new value
      value: state.value + 1,
    };
  }
  // otherwise return the existing state unchanged
  return state;
}
```

Reducers can use any kind of logic inside to decide what the new state should be: `if/else`, `switch`, loops, and so on.

<DetailedExplanation title="Detailed Explanation: Why Are They Called 'Reducers?'" >

The [`Array.reduce()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) method lets you take an array of values, process each item in the array one at a time, and return a single final result. You can think of it as "reducing the array down to one value".

`Array.reduce()` takes a callback function as an argument, which will be called one time for each item in the array. It takes two arguments:

- `previousResult`, the value that your callback returned last time
- `currentItem`, the current item in the array

The first time that the callback runs, there isn't a `previousResult` available, so we need to also pass in an initial value that will be used as the first `previousResult`.

If we wanted to add together an array of numbers to find out what the total is, we could write a reduce callback that looks like this:

```js
const numbers = [2, 5, 8];

const addNumbers = (previousResult, currentItem) => {
  console.log({ previousResult, currentItem });
  return previousResult + currentItem;
};

const initialValue = 0;

const total = numbers.reduce(addNumbers, initialValue);
// {previousResult: 0, currentItem: 2}
// {previousResult: 2, currentItem: 5}
// {previousResult: 7, currentItem: 8}

console.log(total);
// 15
```

Notice that this `addNumbers` "reduce callback" function doesn't need to keep track of anything itself. It takes the `previousResult` and `currentItem` arguments, does something with them, and returns a new result value.

**A Redux reducer function is exactly the same idea as this "reduce callback" function!** It takes a "previous result" (the `state`), and the "current item" (the `action` object), decides a new state value based on those arguments, and returns that new state.

If we were to create an array of Redux actions, call `reduce()`, and pass in a reducer function, we'd get a final result the same way:

```js
const actions = [
  { type: "counter/increment" },
  { type: "counter/increment" },
  { type: "counter/increment" },
];

const initialState = { value: 0 };

const finalResult = actions.reduce(counterReducer, initialState);
console.log(finalResult);
// {value: 3}
```

We can say that **Redux reducers reduce a set of actions (over time) into a single state**. The difference is that with `Array.reduce()` it happens all at once, and with Redux, it happens over the lifetime of your running app.

</DetailedExplanation>

#### Store

The current Redux application state lives in an object called the **store** .

The store is created by passing in a reducer, and has a method called `getState` that returns the current state value:

```js
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({ reducer: counterReducer });

console.log(store.getState());
// {value: 0}
```

#### Dispatch

The Redux store has a method called `dispatch`. **The only way to update the state is to call `store.dispatch()` and pass in an action object**. The store will run its reducer function and save the new state value inside, and we can call `getState()` to retrieve the updated value:

```js
store.dispatch({ type: "counter/increment" });

console.log(store.getState());
// {value: 1}
```

**You can think of dispatching actions as "triggering an event"** in the application. Something happened, and we want the store to know about it. Reducers act like event listeners, and when they hear an action they are interested in, they update the state in response.

We typically call action creators to dispatch the right action:

```js
const increment = () => {
  return {
    type: "counter/increment",
  };
};

store.dispatch(increment());

console.log(store.getState());
// {value: 2}
```

#### Selectors

**Selectors** are functions that know how to extract specific pieces of information from a store state value. As an application grows bigger, this can help avoid repeating logic as different parts of the app need to read the same data:

```js
const selectCounterValue = (state) => state.value;

const currentValue = selectCounterValue(store.getState());
console.log(currentValue);
// 2
```

### Redux Application Data Flow

Earlier, we talked about "one-way data flow", which describes this sequence of steps to update the app:

- State describes the condition of the app at a specific point in time
- The UI is rendered based on that state
- When something happens (such as a user clicking a button), the state is updated based on what occurred
- The UI re-renders based on the new state

For Redux specifically, we can break these steps into more detail:

- Initial setup:
  - A Redux store is created using a root reducer function
  - The store calls the root reducer once, and saves the return value as its initial `state`
  - When the UI is first rendered, UI components access the current state of the Redux store, and use that data to decide what to render. They also subscribe to any future store updates so they can know if the state has changed.
- Updates:
  - Something happens in the app, such as a user clicking a button
  - The app code dispatches an action to the Redux store, like `dispatch({type: 'counter/increment'})`
  - The store runs the reducer function again with the previous `state` and the current `action`, and saves the return value as the new `state`
  - The store notifies all parts of the UI that are subscribed that the store has been updated
  - Each UI component that needs data from the store checks to see if the parts of the state they need have changed.
  - Each component that sees its data has changed forces a re-render with the new data, so it can update what's shown on the screen

Here's what that data flow looks like visually:

![Redux data flow diagram](/img/tutorials/essentials/ReduxDataFlowDiagram.gif)

## What You've Learned

Redux does have a number of new terms and concepts to remember. As a reminder, here's what we just covered:

:::tip Summary

- **Redux is a library for managing global application state**
  - Redux is typically used with the React-Redux library for integrating Redux and React together
  - Redux Toolkit is the recommended way to write Redux logic
- **Redux uses a "one-way data flow" app structure**
  - State describes the condition of the app at a point in time, and UI renders based on that state
  - When something happens in the app:
    - The UI dispatches an action
    - The store runs the reducers, and the state is updated based on what occurred
    - The store notifies the UI that the state has changed
  - The UI re-renders based on the new state
- **Redux uses several types of code**
  - _Actions_ are plain objects with a `type` field, and describe "what happened" in the app
  - _Reducers_ are functions that calculate a new state value based on previous state + an action
  - A Redux _store_ runs the root reducer whenever an action is _dispatched_

:::

## What's Next?

We've seen each of the individual pieces of a Redux app. Next, continue on to [Part 2: Redux App Structure](./part-2-app-structure.md), where we'll look at a full working example to see how the pieces fit together.

---

id: part-2-app-structure
title: 'Redux Essentials, Part 2: Redux App Structure'
sidebar_label: 'Redux App Structure'
description: 'The official Redux Essentials tutorial: learn the structure of a typical React + Redux app'

---

import { DetailedExplanation } from '../../components/DetailedExplanation'

:::tip What You'll Learn

- The structure of a typical React + Redux app
- How to view state changes in the Redux DevTools Extension

:::

## Introduction

In [Part 1: Redux Overview and Concepts](./part-1-overview-concepts.md), we looked at why Redux is useful, the terms and concepts used to describe different parts of Redux code, and how data flows through a Redux app.

Now, let's look at a real working example to see how these pieces fit together.

## The Counter Example App

The sample project we'll look at is a small counter application that lets us add or subtract from a number as we click buttons. It may not be very exciting, but it shows all the important pieces of a React+Redux application in action.

The project has been created using [the official Redux template for Create-React-App](https://github.com/reduxjs/cra-template-redux). Out of the box, it has already been configured with a standard Redux application structure, using [Redux Toolkit](https://redux-toolkit.js.org) to create the Redux store and logic, and [React-Redux](https://react-redux.js.org) to connect together the Redux store and the React components.

Here's the live version of the project. You can play around with it by clicking the buttons in the app preview on the right, and browse through the source files on the left.

<iframe
  class="codesandbox"
  src="https://codesandbox.io/embed/github/reduxjs/redux-essentials-counter-example/tree/master/?fontsize=14&hidenavigation=1&module=%2Fsrc%2Ffeatures%2Fcounter%2FcounterSlice.js&theme=dark&runonclick=1"
  title="redux-essentials-example"
  allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
  sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
></iframe>

If you'd like to try create this project on your own computer, you can [start a new Create-React-App project](https://create-react-app.dev/docs/getting-started#selecting-a-template) using our Redux template:

```
npx create-react-app redux-essentials-example --template redux
```

### Using the Counter App

The counter app has already been set up to let us watch what happens inside as we use it.

Open up your browser's DevTools. Then, choose the "Redux" tab in the DevTools, and click the "State" button in the upper-right toolbar. You should see something that looks like this:

![Redux DevTools: initial app state](/img/tutorials/essentials/devtools-initial.png)

On the right, we can see that our Redux store is starting off with an app state value that looks like this:

```js
{
  counter: {
    value: 0;
  }
}
```

The DevTools will show us how the store state changes as we use the app.

Let's play with the app first to see what it does. Click the "+" button in the app, then look at the "Diff" tab in the Redux DevTools:

![Redux DevTools: first dispatched action](/img/tutorials/essentials/devtools-first-action.png)

We can see two important things here:

- When we clicked the "+" button, an action with a type of `"counter/increment"` was dispatched to the store
- When that action was dispatched, the `state.counter.value` field changed from `0` to `1`

Now try these steps:

- Click the "+" button again. The displayed value should now be 2.
- Click the "-" button once. The displayed value should now be 1.
- Click the "Add Amount" button. The displayed value should now be 3.
- Change the number "2" in the textbox to a "3"
- Click the "Add Async" button. You should see a progress bar fill the button, and after a couple seconds, the displayed value should change to 6.

Go back to the Redux DevTools. You should see a total of five actions dispatched, one for each time we clicked a button . Now select the last `"counter/incrementByAmount"` entry from the list on the left, and click the "Action" tab on the right side:

![Redux DevTools: done clicking buttons](/img/tutorials/essentials/devtools-done-clicking.png)

We can see that this action object looked like this:

```js
{
  type: 'counter/incrementByAmount',
  payload: 3
}
```

And if you click the "Diff" tab, you can see that the `state.counter.value` field changed from a `3` to a `6` in response to that action.

The ability to see what is happening inside of our app and how our state is changing over time is very powerful!

The DevTools have several more commands and options to help you debug your app. Try clicking the "Trace" tab in the upper right. You should see a JavaScript function stack trace in the panel, with several sections of source code showing the lines that were executing when the action reached the store. One line in particular should be highlighted: the line of code where we dispatched this action from the `<Counter>` component:

![Redux DevTools: action stack traces](/img/tutorials/essentials/devtools-action-stacktrace.png)

This makes it easier to trace what part of the code dispatched a specific action.

## Application Contents

Now that you know what the app does, let's look at how it works.

Here are the key files that make up this application:

- `/src`
  - `index.js`: the starting point for the app
  - `App.js`: the top-level React component
  - `/app`
    - `store.js`: creates the Redux store instance
  - `/features`
    - `/counter`
      - `Counter.js`: a React component that shows the UI for the counter feature
      - `counterSlice.js`: the Redux logic for the counter feature

Let's start by looking at how the Redux store is created.

### Creating the Redux Store

Open up `app/store.js`, which should look like this:

```js title="app/store.js"
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
```

The Redux store is created using the `configureStore` function from Redux Toolkit. `configureStore` requires that we pass in a `reducer` argument.

Our application might be made up of many different features, and each of those features might have its own reducer function. When we call `configureStore`, we can pass in all of the different reducers in an object. The key names in the object will define the keys in our final state value.

We have a file named `features/counter/counterSlice.js` that exports a reducer function for the counter logic. We can import that `counterReducer` function here, and include it when we create the store.

When we pass in an object like `{counter: counterReducer}`, that says that we want to have a `state.counter` section of our Redux state object, and that we want the `counterReducer` function to be in charge of deciding if and how to update the `state.counter` section whenever an action is dispatched.

Redux allows store setup to be customized with different kinds of plugins ("middleware" and "enhancers"). `configureStore` automatically adds several middleware to the store setup by default to provide a good developer experience, and also sets up the store so that the Redux DevTools Extension can inspect its contents.

#### Redux Slices

**A "slice" is a collection of Redux reducer logic and actions for a single feature in your app**, typically defined together in a single file. The name comes from splitting up the root Redux state object into multiple "slices" of state.

For example, in a blogging app, our store setup might look like:

```js
import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../features/users/usersSlice";
import postsReducer from "../features/posts/postsSlice";
import commentsReducer from "../features/comments/commentsSlice";

export default configureStore({
  reducer: {
    users: usersReducer,
    posts: postsReducer,
    comments: commentsReducer,
  },
});
```

In that example, `state.users`, `state.posts`, and `state.comments` are each a separate "slice" of the Redux state. Since `usersReducer` is responsible for updating the `state.users` slice, we refer to it as a "slice reducer" function.

<DetailedExplanation title="Detailed Explanation: Reducers and State Structure">

A Redux store needs to have a single "root reducer" function passed in when it's created. So if we have many different slice reducer functions, how do we get a single root reducer instead, and how does this define the contents of the Redux store state?

If we tried calling all of the slice reducers by hand, it might look like this:

```js
function rootReducer(state = {}, action) {
  return {
    users: usersReducer(state.users, action),
    posts: postsReducer(state.posts, action),
    comments: commentsReducer(state.comments, action),
  };
}
```

That calls each slice reducer individually, passes in the specific slice of the Redux state, and includes each return value in the final new Redux state object.

Redux has a function called [`combineReducers`](../../api/combineReducers.md) that does this for us automatically. It accepts an object full of slice reducers as its argument, and returns a function that calls each slice reducer whenever an action is dispatched. The result from each slice reducer are all combined together into a single object as the final result. We can do the same thing as the previous example using `combineReducers`:

```js
const rootReducer = combineReducers({
  users: usersReducer,
  posts: postsReducer,
  comments: commentsReducer,
});
```

When we pass an object of slice reducers to `configureStore`, it passes those to `combineReducers` for us to generate the root reducer.

As we saw earlier, you can also pass a reducer function directly as the `reducer` argument:

```js
const store = configureStore({
  reducer: rootReducer,
});
```

</DetailedExplanation>

### Creating Slice Reducers and Actions

Since we know that the `counterReducer` function is coming from `features/counter/counterSlice.js`, let's see what's in that file, piece by piece.

```js title="features/counter/counterSlice.js"
import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
```

Earlier, we saw that clicking the different buttons in the UI dispatched three different Redux action types:

- `{type: "counter/increment"}`
- `{type: "counter/decrement"}`
- `{type: "counter/incrementByAmount"}`

We know that actions are plain objects with a `type` field, the `type` field is always a string, and we typically have "action creator" functions that create and return the action objects. So where are those action objects, type strings, and action creators defined?

We _could_ write those all by hand, every time. But, that would be tedious. Besides, what's _really_ important in Redux is the reducer functions, and the logic they have for calculating new state.

Redux Toolkit has a function called `createSlice`, which takes care of the work of generating action type strings, action creator functions, and action objects. All you have to do is define a name for this slice, write an object that has some reducer functions in it, and it generates the corresponding action code automatically. The string from the `name` option is used as the first part of each action type, and the key name of each reducer function is used as the second part. So, the `"counter"` name + the `"increment"` reducer function generated an action type of `{type: "counter/increment"}`. (After all, why write this by hand if the computer can do it for us!)

In addition to the `name` field, `createSlice` needs us to pass in the initial state value for the reducers, so that there is a `state` the first time it gets called. In this case, we're providing an object with a `value` field that starts off at 0.

We can see here that there are three reducer functions, and that corresponds to the three different action types that were dispatched by clicking the different buttons.

`createSlice` automatically generates action creators with the same names as the reducer functions we wrote. We can check that by calling one of them and seeing what it returns:

```js
console.log(counterSlice.actions.increment());
// {type: "counter/increment"}
```

It also generates the slice reducer function that knows how to respond to all these action types:

```js
const newState = counterSlice.reducer(
  { value: 10 },
  counterSlice.actions.increment()
);
console.log(newState);
// {value: 11}
```

### Rules of Reducers

We said earlier that reducers must **always** follow some special rules:

- They should only calculate the new state value based on the `state` and `action` arguments
- They are not allowed to modify the existing `state`. Instead, they must make _immutable updates_, by copying the existing `state` and making changes to the copied values.
- They must not do any asynchronous logic or other "side effects"

But why are these rules important? There's a few different reasons:

- One of the goals of Redux is to make your code predictable. When a function's output is only calculated from the input arguments, it's easier to understand how that code works, and to test it.
- On the other hand, if a function depends on variables outside itself, or behaves randomly, you never know what will happen when you run it.
- If a function modifies other values, including its arguments, that can change the way the application works unexpectedly. This can be a common source of bugs, such as "I updated my state, but now my UI isn't updating when it should!"
- Some of the Redux DevTools capabilities depend on having your reducers follow these rules correctly

The rule about "immutable updates" is particularly important, and worth talking about further.

### Reducers and Immutable Updates

Earlier, we talked about "mutation" (modifying existing object/array values) and "immutability" (treating values as something that cannot be changed).

In Redux, **our reducers are _never_ allowed to mutate the original / current state values!**

```js
// ❌ Illegal - by default, this will mutate the state!
state.value = 123;
```

:::

There are several reasons why you must not mutate state in Redux:

- It causes bugs, such as the UI not updating properly to show the latest values
- It makes it harder to understand why and how the state has been updated
- It makes it harder to write tests
- It breaks the ability to use "time-travel debugging" correctly
- It goes against the intended spirit and usage patterns for Redux

So if we can't change the originals, how do we return an updated state?

:::tip

**Reducers can only make _copies_ of the original values, and then they can mutate the copies.**

```js
// ✅ This is safe, because we made a copy
return {
  ...state,
  value: 123,
};
```

:::

We already saw that we can [write immutable updates by hand](./part-1-overview-concepts.md#immutability), by using JavaScript's array / object spread operators and other functions that return copies of the original values. However, if you're thinking that "writing immutable updates by hand this way looks hard to remember and do correctly"... yeah, you're right! :)

Writing immutable update logic by hand _is_ hard, and accidentally mutating state in reducers is the single most common mistake Redux users make.

**That's why Redux Toolkit's `createSlice` function lets you write immutable updates an easier way!**

`createSlice` uses a library called [Immer](https://immerjs.github.io/immer/) inside. Immer uses a special JS tool called a `Proxy` to wrap the data you provide, and lets you write code that "mutates" that wrapped data. But, **Immer tracks all the changes you've tried to make, and then uses that list of changes to return a safely immutably updated value**, as if you'd written all the immutable update logic by hand.

So, instead of this:

```js
function handwrittenReducer(state, action) {
  return {
    ...state,
    first: {
      ...state.first,
      second: {
        ...state.first.second,
        [action.someId]: {
          ...state.first.second[action.someId],
          fourth: action.someValue,
        },
      },
    },
  };
}
```

You can write code that looks like this:

```js
function reducerWithImmer(state, action) {
  state.first.second[action.someId].fourth = action.someValue;
}
```

That's a lot easier to read!

But, here's something _very_ important to remember:

:::warning

**You can _only_ write "mutating" logic in Redux Toolkit's `createSlice` and `createReducer` because they use Immer inside! If you write mutating logic in reducers without Immer, it _will_ mutate the state and cause bugs!**

:::

With that in mind, let's go back and look at the actual reducers from the counter slice.

```js title="features/counter/counterSlice.js"
export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      // highlight-next-line
      state.value += action.payload;
    },
  },
});
```

We can see that the `increment` reducer will always add 1 to `state.value`. Because Immer knows we've made changes to the draft `state` object, we don't have to actually return anything here. In the same way, the `decrement` reducer subtracts 1.

In both of those reducers, we don't actually need to have our code look at the `action` object. It will be passed in anyway, but since we don't need it, we can skip declaring `action` as a parameter for the reducers.

On the other hand, the `incrementByAmount` reducer _does_ need to know something: how much it should be adding to the counter value. So, we declare the reducer as having both `state` and `action` arguments. In this case, we know that the amount we typed into the textbox is being put into the `action.payload` field, so we can add that to `state.value`.

:::info Want to Know More?

For more information on immutability and writing immutable updates, see [the "Immutable Update Patterns" docs page](../../usage/structuring-reducers/ImmutableUpdatePatterns.md) and [The Complete Guide to Immutability in React and Redux](https://daveceddia.com/react-redux-immutability-guide/).

:::

### Writing Async Logic with Thunks

So far, all the logic in our application has been synchronous. Actions are dispatched, the store runs the reducers and calculates the new state, and the dispatch function finishes. But, the JavaScript language has many ways to write code that is asynchronous, and our apps normally have async logic for things like fetching data from an API. We need a place to put that async logic in our Redux apps.

A **thunk** is a specific kind of Redux function that can contain asynchronous logic. Thunks are written using two functions:

- An inside thunk function, which gets `dispatch` and `getState` as arguments
- The outside creator function, which creates and returns the thunk function

The next function that's exported from `counterSlice` is an example of a thunk action creator:

```js title="features/counter/counterSlice.js"
// The function below is called a thunk and allows us to perform async logic.
// It can be dispatched like a regular action: `dispatch(incrementAsync(10))`.
// This will call the thunk with the `dispatch` function as the first argument.
// Async code can then be executed and other actions can be dispatched
export const incrementAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000);
};
```

We can use them the same way we use a typical Redux action creator:

```js
store.dispatch(incrementAsync(5));
```

However, using thunks requires that the `redux-thunk` _middleware_ (a type of plugin for Redux) be added to the Redux store when it's created. Fortunately, Redux Toolkit's `configureStore` function already sets that up for us automatically, so we can go ahead and use thunks here.

When you need to make AJAX calls to fetch data from the server, you can put that call in a thunk. Here's an example that's written a bit longer, so you can see how it's defined:

```js title="features/counter/counterSlice.js"
// the outside "thunk creator" function
const fetchUserById = (userId) => {
  // the inside "thunk function"
  return async (dispatch, getState) => {
    try {
      // make an async call in the thunk
      const user = await userAPI.fetchById(userId);
      // dispatch an action when we get the response back
      dispatch(userLoaded(user));
    } catch (err) {
      // If something went wrong, handle it here
    }
  };
};
```

We'll see thunks being used in [Part 5: Async Logic and Data Fetching](./part-5-async-logic.md)

<DetailedExplanation title="Detailed Explanation: Thunks and Async Logic">

We know that we're not allowed to put any kind of async logic in reducers. But, that logic has to live somewhere.

If we have access to the Redux store, we could write some async code and call `store.dispatch()` when we're done:

```js
const store = configureStore({ reducer: counterReducer });

setTimeout(() => {
  store.dispatch(increment());
}, 250);
```

But, in a real Redux app, we're not allowed to import the store into other files, especially in our React components, because it makes that code harder to test and reuse.

In addition, we often need to write some async logic that we know will be used with _some_ store, eventually, but we don't know _which_ store.

The Redux store can be extended with "middleware", which are a kind of add-on or plugin that can add extra abilities. The most common reason to use middleware is to let you write code that can have async logic, but still talk to the store at the same time. They can also modify the store so that we can call `dispatch()` and pass in values that are _not_ plain action objects, like functions or Promises.

The Redux Thunk middleware modifies the store to let you pass functions into `dispatch`. In fact, it's short enough we can paste it here:

```js
const thunkMiddleware =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    if (typeof action === "function") {
      return action(dispatch, getState);
    }

    return next(action);
  };
```

It looks to see if the "action" that was passed into `dispatch` is actually a function instead of a plain action object. If it's actually a function, it calls the function, and returns the result. Otherwise, since this must be an action object, it passes the action forward to the store.

This gives us a way to write whatever sync or async code we want, while still having access to `dispatch` and `getState`.

</DetailedExplanation>

There's one more function in this file, but we'll talk about that in a minute when we look at the `<Counter>` UI component.

:::info Want to Know More?

See [the Redux Thunk docs](https://github.com/reduxjs/redux-thunk), the post [What the heck is a thunk?](https://daveceddia.com/what-is-a-thunk/) and the [Redux FAQ entry on "why do we use middleware for async?"](../../faq/Actions.md#how-can-i-represent-side-effects-such-as-ajax-calls-why-do-we-need-things-like-action-creators-thunks-and-middleware-to-do-async-behavior) for more information.

:::

### The React Counter Component

Earlier, we saw what a standalone React `<Counter>` component looks like. Our React+Redux app has a similar `<Counter>` component, but it does a few things differently.

We'll start by looking at the `Counter.js` component file:

```jsx title="features/counter/Counter.js"
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount,
} from "./counterSlice";
import styles from "./Counter.module.css";

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");

  return (
    <div>
      <div className={styles.row}>
        // highlight-start
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        // highlight-end
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
      {/* omit additional rendering output here */}
    </div>
  );
}
```

Like with the earlier plain React example, we have a function component called `Counter`, that stores some data in a `useState` hook.

However, in our component, it doesn't look like we're storing the actual current counter value as state. There _is_ a variable called `count`, but it's not coming from a `useState` hook.

While React includes several built-in hooks like `useState` and `useEffect`, other libraries can create their own [custom hooks](https://reactjs.org/docs/hooks-custom.html) that use React's hooks to build custom logic.

The [React-Redux library](https://react-redux.js.org/) has [a set of custom hooks that allow your React component to interact with a Redux store](https://react-redux.js.org/api/hooks).

#### Reading Data with `useSelector`

First, the `useSelector` hook lets our component extract whatever pieces of data it needs from the Redux store state.

Earlier, we saw that we can write "selector" functions, which take `state` as an argument and return some part of the state value.

Our `counterSlice.js` has this selector function at the bottom:

```js title="features/counter/counterSlice.js"
// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCount = (state) => state.counter.value;
```

If we had access to a Redux store, we could retrieve the current counter value as:

```js
const count = selectCount(store.getState());
console.log(count);
// 0
```

Our components can't talk to the Redux store directly, because we're not allowed to import it into component files. But, `useSelector` takes care of talking to the Redux store behind the scenes for us. If we pass in a selector function, it calls `someSelector(store.getState())` for us, and returns the result.

So, we can get the current store counter value by doing:

```js
const count = useSelector(selectCount);
```

We don't have to _only_ use selectors that have already been exported, either. For example, we could write a selector function as an inline argument to `useSelector`:

```js
const countPlusTwo = useSelector((state) => state.counter.value + 2);
```

Any time an action has been dispatched and the Redux store has been updated, `useSelector` will re-run our selector function. If the selector returns a different value than last time, `useSelector` will make sure our component re-renders with the new value.

#### Dispatching Actions with `useDispatch`

Similarly, we know that if we had access to a Redux store, we could dispatch actions using action creators, like `store.dispatch(increment())`. Since we don't have access to the store itself, we need some way to have access to just the `dispatch` method.

The `useDispatch` hook does that for us, and gives us the actual `dispatch` method from the Redux store:

```js
const dispatch = useDispatch();
```

From there, we can dispatch actions when the user does something like clicking on a button:

```jsx title="features/counter/Counter.js"
<button
  className={styles.button}
  aria-label="Increment value"
  onClick={() => dispatch(increment())}
>
  +
</button>
```

### Component State and Forms

By now you might be wondering, "Do I always have to put all my app's state into the Redux store?"

The answer is **NO. Global state that is needed across the app should go in the Redux store. State that's only needed in one place should be kept in component state.**

In this example, we have an input textbox where the user can type in the next number to be added to the counter:

```jsx title="features/counter/Counter.js"
const [incrementAmount, setIncrementAmount] = useState("2");

// later
return (
  <div className={styles.row}>
    <input
      className={styles.textbox}
      aria-label="Set increment amount"
      value={incrementAmount}
      onChange={(e) => setIncrementAmount(e.target.value)}
    />
    <button
      className={styles.button}
      onClick={() => dispatch(incrementByAmount(Number(incrementAmount) || 0))}
    >
      Add Amount
    </button>
    <button
      className={styles.asyncButton}
      onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
    >
      Add Async
    </button>
  </div>
);
```

We _could_ keep the current number string in the Redux store, by dispatching an action in the input's `onChange` handler and keeping it in our reducer. But, that doesn't give us any benefit. The only place that text string is used is here, in the `<Counter>` component. (Sure, there's only one other component in this example: `<App>`. But even if we had a larger application with many components, only `<Counter>` cares about this input value.)

So, it makes sense to keep that value in a `useState` hook here in the `<Counter>` component.

Similarly, if we had a boolean flag called `isDropdownOpen`, no other components in the app would care about that - it should really stay local to this component.

**In a React + Redux app, your global state should go in the Redux store, and your local state should stay in React components.**

If you're not sure where to put something, here are some common rules of thumb for determining what kind of data should be put into Redux:

- Do other parts of the application care about this data?
- Do you need to be able to create further derived data based on this original data?
- Is the same data being used to drive multiple components?
- Is there value to you in being able to restore this state to a given point in time (ie, time travel debugging)?
- Do you want to cache the data (ie, use what's in state if it's already there instead of re-requesting it)?
- Do you want to keep this data consistent while hot-reloading UI components (which may lose their internal state when swapped)?

This is also a good example of how to think about forms in Redux in general. **Most form state probably shouldn't be kept in Redux.** Instead, keep the data in your form components as you're editing it, and then dispatch Redux actions to update the store when the user is done.

One other thing to note before we move on: remember that `incrementAsync` thunk from `counterSlice.js`? We're using it here in this component. Notice that we use it the same way we dispatch the other normal action creators. This component doesn't care whether we're dispatching a normal action or starting some async logic. It only knows that when you click that button, it dispatches something.

### Providing the Store

We've seen that our components can use the `useSelector` and `useDispatch` hooks to talk to the Redux store. But, since we didn't import the store, how do those hooks know what Redux store to talk to?

Now that we've seen all the different pieces of this application, it's time to circle back to the starting point of this application and see how the last pieces of the puzzle fit together.

```jsx title="index.js"
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./app/store";
// highlight-next-line
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  // highlight-start
  <Provider store={store}>
    <App />
  </Provider>,
  // highlight-end
  document.getElementById("root")
);
```

We always have to call `ReactDOM.render(<App />)` to tell React to start rendering our root `<App>` component. In order for our hooks like `useSelector` to work right, we need to use a component called `<Provider>` to pass down the Redux store behind the scenes so they can access it.

We already created our store in `app/store.js`, so we can import it here. Then, we put our `<Provider>` component around the whole `<App>`, and pass in the store: `<Provider store={store}>`.

Now, any React components that call `useSelector` or `useDispatch` will be talking to the Redux store we gave to the `<Provider>`.

## What You've Learned

Even though the counter example app is pretty small, it showed all the key pieces of a React + Redux app working together. Here's what we covered:

:::tip Summary

- **We can create a Redux store using the Redux Toolkit `configureStore` API**
  - `configureStore` accepts a `reducer` function as a named argument
  - `configureStore` automatically sets up the store with good default settings
- **Redux logic is typically organized into files called "slices"**
  - A "slice" contains the reducer logic and actions related to a specific feature / section of the Redux state
  - Redux Toolkit's `createSlice` API generates action creators and action types for each individual reducer function you provide
- **Redux reducers must follow specific rules**
  - Should only calculate a new state value based on the `state` and `action` arguments
  - Must make _immutable updates_ by copying the existing state
  - Cannot contain any asynchronous logic or other "side effects"
  - Redux Toolkit's `createSlice` API uses Immer to allow "mutating" immutable updates
- **Async logic is typically written in special functions called "thunks"**
  - Thunks receive `dispatch` and `getState` as arguments
  - Redux Toolkit enables the `redux-thunk` middleware by default
- **React-Redux allows React components to interact with a Redux store**
  - Wrapping the app with `<Provider store={store}>` enables all components to use the store
  - Global state should go in the Redux store, local state should stay in React components

:::

## What's Next?

Now that you've seen all the pieces of a Redux app in action, it's time to write your own! For the rest of this tutorial, you'll be building a larger example app that uses Redux. Along the way, we'll cover all the key ideas you need to know to use Redux the right way.

Continue on to [Part 3: Basic Redux Data Flow](./part-3-data-flow.md) to get started building the example app.

---

id: part-3-data-flow
title: 'Redux Essentials, Part 3: Basic Redux Data Flow'
sidebar_label: 'Basic Redux Data Flow'
description: 'The official Redux Essentials tutorial: learn how data flows in a React + Redux app'

---

import { DetailedExplanation } from '../../components/DetailedExplanation'

:::tip What You'll Learn

- How to add "slices" of reducer logic to the Redux store with `createSlice`
- Reading Redux data in components with the `useSelector` hook
- Dispatching actions in components with the `useDispatch` hook

:::

:::info Prerequisites

- Familiarity with key Redux terms and concepts like "actions", "reducers", "store", and "dispatching". (See [**Part 1: Redux Overview and Concepts**](./part-1-overview-concepts.md) for explanations of these terms.)

:::

## Introduction

In [Part 1: Redux Overview and Concepts](./part-1-overview-concepts.md), we looked at how Redux can help us build maintainable apps by giving us a single central place to put global app state. We also talked about core Redux concepts like dispatching action objects, using reducer functions that return new state values, and writing async logic using thunks. In [Part 2: Redux App Structure](./part-2-app-structure.md), we saw how APIs like `configureStore` and `createSlice` from Redux Toolkit and `Provider` and `useSelector` from React-Redux work together to let us write Redux logic and interact with that logic from our React components.

Now that you have some idea of what these pieces are, it's time to put that knowledge into practice. We're going to build a small social media feed app, which will include a number of features that demonstrate some real-world use cases. This will help you understand how to use Redux in your own applications.

:::caution

The example app is not meant as a complete production-ready project. The goal is to help you learn the Redux APIs and typical usage patterns, and point you in the right direction using some limited examples. Also, some of the early pieces we build will be updated later on to show better ways to do things. Please read through the whole tutorial to see all the concepts in use.

:::

### Project Setup

For this tutorial, we've created a pre-configured starter project that already has React and Redux set up, includes some default styling, and has a fake REST API that will allow us to write actual API requests in our app. You'll use this as the basis for writing the actual application code.

To get started, you can open and fork this CodeSandbox:

<iframe
  class="codesandbox"
  src="https://codesandbox.io/embed/github/reduxjs/redux-essentials-example-app/tree/master/?fontsize=14&hidenavigation=1&theme=dark&runonclick=1"
  title="redux-quick-start-example-app"
  allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
  sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
></iframe>

You can also [clone the same project from this Github repo](https://github.com/reduxjs/redux-essentials-example-app). After cloning the repo, you can install the tools for the project with `npm install`, and start it with `npm start`.

If you'd like to see the final version of what we're going to build, you can check out [the **`tutorial-steps` branch**](https://github.com/reduxjs/redux-essentials-example-app/tree/tutorial-steps), or [look at the final version in this CodeSandbox](https://codesandbox.io/s/github/reduxjs/redux-essentials-example-app/tree/tutorial-steps).

> We'd like to thank [Tania Rascia](https://www.taniarascia.com/), whose [Using Redux with React](https://www.taniarascia.com/redux-react-guide/) tutorial helped inspire the example in this page. It also uses her [Primitive UI CSS starter](https://taniarascia.github.io/primitive/) for styling.

#### Creating a New Redux + React Project

Once you've finished this tutorial, you'll probably want to try working on your own projects. **We recommend using the [Redux templates for Create-React-App](https://github.com/reduxjs/cra-template-redux) as the fastest way to create a new Redux + React project**. It comes with Redux Toolkit and React-Redux already configured, using [the same "counter" app example you saw in Part 1](./part-1-overview-concepts.md). This lets you jump right into writing your actual application code without having to add the Redux packages and set up the store.

If you want to know specific details on how to add Redux to a project, see this explanation:

<DetailedExplanation title="Detailed Explanation: Adding Redux to a React Project">

The Redux template for CRA comes with Redux Toolkit and React-Redux already configured. If you're setting up a new project from scratch without that template, follow these steps:

- Add the `@reduxjs/toolkit` and `react-redux` packages
- Create a Redux store using RTK's `configureStore` API, and pass in at least one reducer function
- Import the Redux store into your application's entry point file (such as `src/index.js`)
- Wrap your root React component with the `<Provider>` component from React-Redux, like:

```jsx
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
```

</DetailedExplanation>

#### Exploring the Initial Project

Let's take a quick look at what the initial project contains:

- `/public`: the HTML host page template and other static files like icons
- `/src`
  - `index.js`: the entry point file for the application. It renders the React-Redux `<Provider>` component and the main `<App>` component.
  - `App.js`: the main application component. Renders the top navbar and handles client-side routing for the other content.
  - `index.css`: styles for the complete application
  - `/api`
    - `client.js`: a small AJAX request client that allows us to make GET and POST requests
    - `server.js`: provides a fake REST API for our data. Our app will fetch data from these fake endpoints later.
  - `/app`
    - `Navbar.js`: renders the top header and nav content
    - `store.js`: creates the Redux store instance

If you load the app now, you should see the header and a welcome message. We can also open up the Redux DevTools Extension and see that our initial Redux state is entirely empty.

With that, let's get started!

## Main Posts Feed

The main feature for our social media feed app will be a list of posts. We'll add several more pieces to this feature as we go along, but to start off, our first goal is to only show the list of post entries on screen.

### Creating the Posts Slice

The first step is to create a new Redux "slice" that will contain the data for our posts. Once we have that data in the Redux store, we can create the React components to show that data on the page.

Inside of `src`, create a new `features` folder, put a `posts` folder inside of `features`, and add a new file named `postsSlice.js`.

We're going to use the Redux Toolkit `createSlice` function to make a reducer function that knows how to handle our posts data. Reducer functions need to have some initial data included so that the Redux store has those values loaded when the app starts up.

For now, we'll create an array with some fake post objects inside so that we can begin adding the UI.

We'll import `createSlice`, define our initial posts array, pass that to `createSlice`, and export the posts reducer function that `createSlice` generated for us:

```js title="features/posts/postsSlice.js"
import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "1", title: "First Post!", content: "Hello!" },
  { id: "2", title: "Second Post", content: "More text" },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
});

export default postsSlice.reducer;
```

Every time we create a new slice, we need to add its reducer function to our Redux store. We already have a Redux store being created, but right now it doesn't have any data inside. Open up `app/store.js`, import the `postsReducer` function, and update the call to `configureStore` so that the `postsReducer` is being passed as a reducer field named `posts`:

```js title="app/store.js"
import { configureStore } from "@reduxjs/toolkit";

import postsReducer from "../features/posts/postsSlice";

export default configureStore({
  reducer: {
    posts: postsReducer,
  },
});
```

This tells Redux that we want our top-level state object to have a field named `posts` inside, and all the data for `state.posts` will be updated by the `postsReducer` function when actions are dispatched.

We can confirm that this works by opening the Redux DevTools Extension and looking at the current state contents:

![Initial posts state](/img/tutorials/essentials/example-initial-posts.png)

### Showing the Posts List

Now that we have some posts data in our store, we can create a React component that shows the list of posts. All of the code related to our feed posts feature should go in the `posts` folder, so go ahead and create a new file named `PostsList.js` in there.

If we're going to render a list of posts, we need to get the data from somewhere. React components can read data from the Redux store using the `useSelector` hook from the React-Redux library. The "selector functions" that you write will be called with the entire Redux `state` object as a parameter, and should return the specific data that this component needs from the store.

Our initial `PostsList` component will read the `state.posts` value from the Redux store, then loop over the array of posts and show each of them on screen:

```jsx title="features/posts/PostsList.js"
import React from "react";
import { useSelector } from "react-redux";

export const PostsList = () => {
  const posts = useSelector((state) => state.posts);

  const renderedPosts = posts.map((post) => (
    <article className="post-excerpt" key={post.id}>
      <h3>{post.title}</h3>
      <p className="post-content">{post.content.substring(0, 100)}</p>
    </article>
  ));

  return (
    <section className="posts-list">
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
};
```

We then need to update the routing in `App.js` so that we show the `PostsList` component instead of the "welcome" message. Import the `PostsList` component into `App.js`, and replace the welcome text with `<PostsList />`. We'll also wrap it in a React Fragment, because we're going to add something else to the main page soon:

```jsx title="App.js"
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { Navbar } from "./app/Navbar";

// highlight-next-line
import { PostsList } from "./features/posts/PostsList";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              // highlight-start
              <React.Fragment>
                <PostsList />
              </React.Fragment>
              // highlight-end
            )}
          />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
```

Once that's added, the main page of our app should now look like this:

![Initial posts list](/img/tutorials/essentials/working_post_list.png)

Progress! We've added some data to the Redux store, and shown it on screen in a React component.

### Adding New Posts

It's nice to look at posts people have written, but we'd like to be able to write our own posts. Let's create an "Add New Post" form that lets us write posts and save them.

We'll create the empty form first and add it to the page. Then, we'll connect the form to our Redux store so that new posts are added when we click the "Save Post" button.

#### Adding the New Post Form

Create `AddPostForm.js` in our `posts` folder. We'll add a text input for the post title, and a text area for the body of the post:

```jsx title="features/posts/AddPostForm.js"
import React, { useState } from "react";

export const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);

  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
        <button type="button">Save Post</button>
      </form>
    </section>
  );
};
```

Import that component into `App.js`, and add it right above the `<PostsList />` component:

```jsx title="App.js"
<Route
  exact
  path="/"
  render={() => (
    <React.Fragment>
      // highlight-next-line
      <AddPostForm />
      <PostsList />
    </React.Fragment>
  )}
/>
```

You should see the form show up in the page right below the header.

#### Saving Post Entries

Now, let's update our posts slice to add new post entries to the Redux store.

Our posts slice is responsible for handling all updates to the posts data. Inside of the `createSlice` call, there's an object called `reducers`. Right now, it's empty. We need to add a reducer function inside of there to handle the case of a post being added.

Inside of `reducers`, add a function named `postAdded`, which will receive two arguments: the current `state` value, and the `action` object that was dispatched. Since the posts slice _only_ knows about the data it's responsible for, the `state` argument will be the array of posts by itself, and not the entire Redux state object.

The `action` object will have our new post entry as the `action.payload` field, and we'll put that new post object into the `state` array.

When we write the `postAdded` reducer function, `createSlice` will automatically generate an "action creator" function with the same name. We can export that action creator and use it in our UI components to dispatch the action when the user clicks "Save Post".

```js title="features/posts/postsSlice.js"
const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    // highlight-start
    postAdded(state, action) {
      state.push(action.payload);
    },
    // highlight-end
  },
});

// highlight-next-line
export const { postAdded } = postsSlice.actions;

export default postsSlice.reducer;
```

:::warning

Remember: **reducer functions must _always_ create new state values immutably, by making copies!** It's safe to call mutating functions like `Array.push()` or modify object fields like `state.someField = someValue` inside of `createSlice()`, because it converts those mutations into safe immutable updates internally using the Immer library, but **don't try to mutate any data outside of `createSlice`!**

:::

#### Dispatching the "Post Added" Action

Our `AddPostForm` has text inputs and a "Save Post" button, but the button doesn't do anything yet. We need to add a click handler that will dispatch the `postAdded` action creator and pass in a new post object containing the title and content the user wrote.

Our post objects also need to have an `id` field. Right now, our initial test posts are using some fake numbers for their IDs. We could write some code that would figure out what the next incrementing ID number should be, but it would be better if we generated a random unique ID instead. Redux Toolkit has a `nanoid` function we can use for that.

:::info

We'll talk more about generating IDs and dispatching actions in [Part 4: Using Redux Data](./part-4-using-data.md).

:::

In order to dispatch actions from a component, we need access to the store's `dispatch` function. We get this by calling the `useDispatch` hook from React-Redux. We also need to import the `postAdded` action creator into this file.

Once we have the `dispatch` function available in our component, we can call `dispatch(postAdded())` in a click handler. We can take the title and content values from our React component `useState` hooks, generate a new ID, and put them together into a new post object that we pass to `postAdded()`.

```jsx title="features/posts/AddPostForm"
import React, { useState } from "react";
// highlight-start
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

import { postAdded } from "./postsSlice";
// highlight-end

export const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // highlight-next-line
  const dispatch = useDispatch();

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);

  // highlight-start
  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(
        postAdded({
          id: nanoid(),
          title,
          content,
        })
      );

      setTitle("");
      setContent("");
    }
  };
  // highlight-end

  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        {/* omit form inputs */}
        // highlight-next-line
        <button type="button" onClick={onSavePostClicked}>
          Save Post
        </button>
      </form>
    </section>
  );
};
```

Now, try typing in a title and some text, and click "Save Post". You should see a new item for that post show up in the posts list.

**Congratulations! You've just built your first working React + Redux app!**

This shows the complete Redux data flow cycle:

- Our posts list read the initial set of posts from the store with `useSelector` and rendered the initial UI
- We dispatched the `postAdded` action containing the data for the new post entry
- The posts reducer saw the `postAdded` action, and updated the posts array with the new entry
- The Redux store told the UI that some data had changed
- The posts list read the updated posts array, and re-rendered itself to show the new post

All the new features we'll add after this will follow the same basic patterns you've seen here: adding slices of state, writing reducer functions, dispatching actions, and rendering the UI based on data from the Redux store.

We can check the Redux DevTools Extension to see the action we dispatched, and look at how the Redux state was updated in response to that action. If we click the `"posts/postAdded"` entry in the actions list, the "Action" tab should look like this:

![postAdded action contents](/img/tutorials/essentials/example-postAdded-action.png)

The "Diff" tab should also show us that `state.posts` had one new item added, which is at index 2.

Notice that our `AddPostForm` component has some React `useState` hooks inside, to keep track of the title and content values the user is typing in. Remember, **the Redux store should only contain data that's considered "global" for the application!** In this case, only the `AddPostForm` will need to know about the latest values for the input fields, so we want to keep that data in React component state instead of trying to keep the temporary data in the Redux store. When the user is done with the form, we dispatch a Redux action to update the store with the final values based on the user input.

## What You've Learned

Let's recap what you've learned in this section:

:::tip Summary

- **Redux state is updated by "reducer functions"**:
  - Reducers always calculate a new state _immutably_, by copying existing state values and modifying the copies with the new data
  - The Redux Toolkit `createSlice` function generates "slice reducer" functions for you, and lets you write "mutating" code that is turned into safe immutable updates
  - Those slice reducer functions are added to the `reducer` field in `configureStore`, and that defines the data and state field names inside the Redux store
- **React components read data from the store with the `useSelector` hook**
  - Selector functions receive the whole `state` object, and should return a value
  - Selectors will re-run whenever the Redux store is updated, and if the data they return has changed, the component will re-render
- **React components dispatch actions to update the store using the `useDispatch` hook**
  - `createSlice` will generate action creator functions for each reducer we add to a slice
  - Call `dispatch(someActionCreator())` in a component to dispatch an action
  - Reducers will run, check to see if this action is relevant, and return new state if appropriate
  - Temporary data like form input values should be kept as React component state. Dispatch a Redux action to update the store when the user is done with the form.

:::

Here's what the app looks like so far:

<iframe
  class="codesandbox"
  src="https://codesandbox.io/embed/github/reduxjs/redux-essentials-example-app/tree/checkpoint-1-postAdded/?fontsize=14&hidenavigation=1&theme=dark&runonclick=1"
  title="redux-quick-start-example-app"
  allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
  sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
></iframe>

## What's Next?

Now that you know the basic Redux data flow, move on to [Part 4: Using Redux Data](./part-4-using-data.md), where we'll add some additional functionality to our app and see examples of how to work with the data that's already in the store.

---

id: part-4-using-data
title: 'Redux Essentials, Part 4: Using Redux Data'
sidebar_label: 'Using Redux Data'
description: 'The official Redux Essentials tutorial: learn how to work with complex Redux state in React components'

---

import { DetailedExplanation } from '../../components/DetailedExplanation'

:::tip What You'll Learn

- Using Redux data in multiple React components
- Organizing logic that dispatches actions
- Writing more complex update logic in reducers

:::

:::info Prerequisites

- Understanding the [Redux data flow and React-Redux APIs from Part 3](./part-3-data-flow.md)
- Familiarity with [the React Router `<Link>` and `<Route>` components for page routing](https://reacttraining.com/react-router/web/api)

:::

## Introduction

In [Part 3: Basic Redux Data Flow](./part-3-data-flow.md), we saw how to start from an empty Redux+React project setup, add a new slice of state, and create React components that can read data from the Redux store and dispatch actions to update that data. We also looked at how data flows through the application, with components dispatching actions, reducers processing actions and returning new state, and components reading the new state and rerendering the UI.

Now that you know the core steps to write Redux logic, we're going to use those same steps to add some new features to our social media feed that will make it more useful: viewing a single post, editing existing posts, showing post author details, post timestamps, and reaction buttons.

:::info

As a reminder, the code examples focus on the key concepts and changes for each section. See the CodeSandbox projects and the [`tutorial-steps` branch in the project repo](https://github.com/reduxjs/redux-essentials-example-app/tree/tutorial-steps) for the complete changes in the application.

:::

## Showing Single Posts

Since we have the ability to add new posts to the Redux store, we can add some more features that use the post data in different ways.

Currently, our post entries are being shown in the main feed page, but if the text is too long, we only show an excerpt of the content. It would be helpful to have the ability to view a single post entry on its own page.

### Creating a Single Post Page

First, we need to add a new `SinglePostPage` component to our `posts` feature folder. We'll use React Router to show this component when the page URL looks like `/posts/123`, where the `123` part should be the ID of the post we want to show.

```jsx title="features/posts/SinglePostPage.js"
import React from "react";
import { useSelector } from "react-redux";

export const SinglePostPage = ({ match }) => {
  const { postId } = match.params;

  const post = useSelector((state) =>
    state.posts.find((post) => post.id === postId)
  );

  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    );
  }

  return (
    <section>
      <article className="post">
        <h2>{post.title}</h2>
        <p className="post-content">{post.content}</p>
      </article>
    </section>
  );
};
```

React Router will pass in a `match` object as a prop that contains the URL information we're looking for. When we set up the route to render this component, we're going to tell it to parse the second part of the URL as a variable named `postId`, and we can read that value from `match.params`.

Once we have that `postId` value, we can use it inside a selector function to find the right post object from the Redux store. We know that `state.posts` should be an array of all post objects, so we can use the `Array.find()` function to loop through the array and return the post entry with the ID we're looking for.

It's important to note that **the component will re-render any time the value returned from `useSelector` changes to a new reference**. Components should always try to select the smallest possible amount of data they need from the store, which will help ensure that it only renders when it actually needs to.

It's possible that we might not have a matching post entry in the store - maybe the user tried to type in the URL directly, or we don't have the right data loaded. If that happens, the `find()` function will return `undefined` instead of an actual post object. Our component needs to check for that and handle it by showing a "Post not found!" message in the page.

Assuming we do have the right post object in the store, `useSelector` will return that, and we can use it to render the title and content of the post in the page.

You might notice that this looks fairly similar to the logic we have in the body of our `<PostsList>` component, where we loop over the whole `posts` array to show post excerpts on the main feed. We _could_ try to extract a `Post` component that could be used in both places, but there are already some differences in how we're showing a post excerpt and the whole post. It's usually better to keep writing things separately for a while even if there's some duplication, and then we can decide later if the different sections of code are similar enough that we can really extract a reusable component.

### Adding the Single Post Route

Now that we have a `<SinglePostPage>` component, we can define a route to show it, and add links to each post in the front page feed.

We'll import `SinglePostPage` in `App.js`, and add the route:

```jsx title="App.js"
import { PostsList } from "./features/posts/PostsList";
import { AddPostForm } from "./features/posts/AddPostForm";
// highlight-next-line
import { SinglePostPage } from "./features/posts/SinglePostPage";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <React.Fragment>
                <AddPostForm />
                <PostsList />
              </React.Fragment>
            )}
          />
          // highlight-next-line
          <Route exact path="/posts/:postId" component={SinglePostPage} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}
```

Then, in `<PostsList>`, we'll update the list rendering logic to include a `<Link>` that routes to that specific post:

```jsx title="features/posts/PostsList.js"
import React from "react";
import { useSelector } from "react-redux";
// highlight-next-line
import { Link } from "react-router-dom";

export const PostsList = () => {
  const posts = useSelector((state) => state.posts);

  const renderedPosts = posts.map((post) => (
    <article className="post-excerpt" key={post.id}>
      <h3>{post.title}</h3>
      <p className="post-content">{post.content.substring(0, 100)}</p>
      // highlight-start
      <Link to={`/posts/${post.id}`} className="button muted-button">
        View Post
      </Link>
      // highlight-end
    </article>
  ));

  return (
    <section className="posts-list">
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
};
```

And since we can now click through to a different page, it would also be helpful to have a link back to the main posts page in the `<Navbar>` component as well:

```jsx title="app/Navbar.js"
import React from "react";

// highlight-next-line
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
      <section>
        <h1>Redux Essentials Example</h1>

        <div className="navContent">
          // highlight-start
          <div className="navLinks">
            <Link to="/">Posts</Link>
          </div>
          // highlight-end
        </div>
      </section>
    </nav>
  );
};
```

## Editing Posts

As a user, it's really annoying to finish writing a post, save it, and realize you made a mistake somewhere. Having the ability to edit a post after we created it would be useful.

Let's add a new `<EditPostForm>` component that has the ability to take an existing post ID, read that post from the store, lets the user edit the title and post content, and then save the changes to update the post in the store.

### Updating Post Entries

First, we need to update our `postsSlice` to create a new reducer function and an action so that the store knows how to actually update posts.

Inside of the `createSlice()` call, we should add a new function into the `reducers` object. Remember that the name of this reducer should be a good description of what's happening, because we're going to see the reducer name show up as part of the action type string in the Redux DevTools whenever this action is dispatched. Our first reducer was called `postAdded`, so let's call this one `postUpdated`.

In order to update a post object, we need to know:

- The ID of the post being updated, so that we can find the right post object in the state
- The new `title` and `content` fields that the user typed in

Redux action objects are required to have a `type` field, which is normally a descriptive string, and may also contain other fields with more information about what happened. By convention, we normally put the additional info in a field called `action.payload`, but it's up to us to decide what the `payload` field contains - it could be a string, a number, an object, an array, or something else. In this case, since we have three pieces of information we need, let's plan on having the `payload` field be an object with the three fields inside of it. That means the action object will look like `{type: 'posts/postUpdated', payload: {id, title, content}}`.

By default, the action creators generated by `createSlice` expect you to pass in one argument, and that value will be put into the action object as `action.payload`. So, we can pass an object containing those fields as the argument to the `postUpdated` action creator.

We also know that the reducer is responsible for determining how the state should actually be updated when an action is dispatched. Given that, we should have the reducer find the right post object based on the ID, and specifically update the `title` and `content` fields in that post.

Finally, we'll need to export the action creator function that `createSlice` generated for us, so that the UI can dispatch the new `postUpdated` action when the user saves the post.

Given all those requirements, here's how our `postsSlice` definition should look after we're done:

```js title="features/posts/postsSlice.js"
const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded(state, action) {
      state.push(action.payload);
    },
    // highlight-start
    postUpdated(state, action) {
      const { id, title, content } = action.payload;
      const existingPost = state.find((post) => post.id === id);
      if (existingPost) {
        existingPost.title = title;
        existingPost.content = content;
      }
    },
    // highlight-end
  },
});

// highlight-next-line
export const { postAdded, postUpdated } = postsSlice.actions;

export default postsSlice.reducer;
```

### Creating an Edit Post Form

Our new `<EditPostForm>` component will look similar to the `<AddPostForm>`, but the logic needs to be a bit different. We need to retrieve the right `post` object from the store, then use that to initialize the state fields in the component so the user can make changes. We'll save the changed title and content values back to the store after the user is done. We'll also use React Router's history API to switch over to the single post page and show that post.

```jsx title="features/posts/EditPostForm.js"
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { postUpdated } from "./postsSlice";

export const EditPostForm = ({ match }) => {
  const { postId } = match.params;

  const post = useSelector((state) =>
    state.posts.find((post) => post.id === postId)
  );

  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);

  const dispatch = useDispatch();
  const history = useHistory();

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postUpdated({ id: postId, title, content }));
      history.push(`/posts/${postId}`);
    }
  };

  return (
    <section>
      <h2>Edit Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          placeholder="What's on your mind?"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
      </form>
      <button type="button" onClick={onSavePostClicked}>
        Save Post
      </button>
    </section>
  );
};
```

Like with `SinglePostPage`, we'll need to import it into `App.js` and add a route that will render this component with the `postId` as a route parameter.

```jsx title="App.js"
import { PostsList } from "./features/posts/PostsList";
import { AddPostForm } from "./features/posts/AddPostForm";
import { SinglePostPage } from "./features/posts/SinglePostPage";
// highlight-next-line
import { EditPostForm } from "./features/posts/EditPostForm";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <React.Fragment>
                <AddPostForm />
                <PostsList />
              </React.Fragment>
            )}
          />
          <Route exact path="/posts/:postId" component={SinglePostPage} />
          // highlight-next-line
          <Route exact path="/editPost/:postId" component={EditPostForm} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}
```

We should also add a new link to our `SinglePostPage` that will route to `EditPostForm`, like:

```jsx title="features/post/SinglePostPage.js"
// highlight-next-line
import { Link } from 'react-router-dom'

export const SinglePostPage = ({ match }) => {

        // omit other contents

        <p  className="post-content">{post.content}</p>
        // highlight-start
        <Link to={`/editPost/${post.id}`} className="button">
          Edit Post
        </Link>
        // highlight-end
```

### Preparing Action Payloads

We just saw that the action creators from `createSlice` normally expect one argument, which becomes `action.payload`. This simplifies the most common usage pattern, but sometimes we need to do more work to prepare the contents of an action object. In the case of our `postAdded` action, we need to generate a unique ID for the new post, and we also need to make sure that the payload is an object that looks like `{id, title, content}`.

Right now, we're generating the ID and creating the payload object in our React component, and passing the payload object into `postAdded`. But, what if we needed to dispatch the same action from different components, or the logic for preparing the payload is complicated? We'd have to duplicate that logic every time we wanted to dispatch the action, and we're forcing the component to know exactly what the payload for this action should look like.

:::caution

If an action needs to contain a unique ID or some other random value, always generate that first and put it in the action object. **Reducers should never calculate random values**, because that makes the results unpredictable.

:::

If we were writing the `postAdded` action creator by hand, we could have put the setup logic inside of it ourselves:

```js
// hand-written action creator
function postAdded(title, content) {
  const id = nanoid();
  return {
    type: "posts/postAdded",
    payload: { id, title, content },
  };
}
```

But, Redux Toolkit's `createSlice` is generating these action creators for us. That makes the code shorter because we don't have to write them ourselves, but we still need a way to customize the contents of `action.payload`.

Fortunately, `createSlice` lets us define a "prepare callback" function when we write a reducer. The "prepare callback" function can take multiple arguments, generate random values like unique IDs, and run whatever other synchronous logic is needed to decide what values go into the action object. It should then return an object with the `payload` field inside. (The return object may also contain a `meta` field, which can be used to add extra descriptive values to the action, and an `error` field, which should be a boolean indicating whether this action represents some kind of an error.)

Inside of the `reducers` field in `createSlice`, we can define one of the fields as an object that looks like `{reducer, prepare}`:

```js title="features/posts/postsSlice.js"
const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    // highlight-start
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
          },
        };
      },
    },
    // highlight-end
    // other reducers here
  },
});
```

Now our component doesn't have to worry about what the payload object looks like - the action creator will take care of putting it together the right way. So, we can update the component so that it passes in `title` and `content` as arguments when it dispatches `postAdded`:

```jsx title="features/posts/AddPostForm.js"
const onSavePostClicked = () => {
  if (title && content) {
    // highlight-next-line
    dispatch(postAdded(title, content));
    setTitle("");
    setContent("");
  }
};
```

## Users and Posts

So far, we only have one slice of state. The logic is defined in `postsSlice.js`, the data is stored in `state.posts`, and all of our components have been related to the posts feature. Real applications will probably have many different slices of state, and several different "feature folders" for the Redux logic and React components.

You can't have a "social media" app if there aren't any other people involved. Let's add the ability to keep track of a list of users in our app, and update the post-related functionality to make use of that data.

### Adding a Users Slice

Since the concept of "users" is different than the concept of "posts", we want to keep the code and data for the users separated from the code and data for posts. We'll add a new `features/users` folder, and put a `usersSlice` file in there. Like with the posts slice, for now we'll add some initial entries so that we have data to work with.

```js title="features/users/usersSlice.js"
import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "Tianna Jenkins" },
  { id: "1", name: "Kevin Grant" },
  { id: "2", name: "Madison Price" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export default usersSlice.reducer;
```

For now, we don't need to actually update the data, so we'll leave the `reducers` field as an empty object. (We'll come back to this in a later section.)

As before, we'll import the `usersReducer` into our store file and add it to the store setup:

```js title="app/store.js"
import { configureStore } from "@reduxjs/toolkit";

import postsReducer from "../features/posts/postsSlice";
// highlight-next-line
import usersReducer from "../features/users/usersSlice";

export default configureStore({
  reducer: {
    posts: postsReducer,
    // highlight-next-line
    users: usersReducer,
  },
});
```

### Adding Authors for Posts

Every post in our app was written by one of our users, and every time we add a new post, we should keep track of which user wrote that post. In a real app, we'd have some sort of a `state.currentUser` field that keeps track of the current logged-in user, and use that information whenever they add a post.

To keep things simpler for this example, we'll update our `<AddPostForm>` component so that we can select a user from a dropdown list, and we'll include that user's ID as part of the post. Once our post objects have a user ID in them, we can use that to look up the user's name and show it in each individual post in the UI.

First, we need to update our `postAdded` action creator to accept a user ID as an argument, and include that in the action. (We'll also update the existing post entries in `initialState` to have a `post.user` field with one of the example user IDs.)

```js title="features/posts/postsSlice.js"
const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      // highlight-next-line
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            // highlight-next-line
            user: userId,
          },
        };
      },
    },
    // other reducers
  },
});
```

Now, in our `<AddPostForm>`, we can read the list of users from the store with `useSelector` and show them as a dropdown. We'll then take the ID of the selected user and pass that to the `postAdded` action creator. While we're at it, we can add a bit of validation logic to our form so that the user can only click the "Save Post" button if the title and content inputs have some actual text in them:

```jsx title="features/posts/AddPostForm.js"
import React, { useState } from "react";
// highlight-next-line
import { useDispatch, useSelector } from "react-redux";

import { postAdded } from "./postsSlice";

export const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  // highlight-next-line
  const [userId, setUserId] = useState("");

  const dispatch = useDispatch();

  // highlight-next-line
  const users = useSelector((state) => state.users);

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  // highlight-next-line
  const onAuthorChanged = (e) => setUserId(e.target.value);

  const onSavePostClicked = () => {
    if (title && content) {
      // highlight-next-line
      dispatch(postAdded(title, content, userId));
      setTitle("");
      setContent("");
    }
  };

  // highlight-start
  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

  const usersOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));
  // highlight-end

  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          placeholder="What's on your mind?"
          value={title}
          onChange={onTitleChanged}
        />
        // highlight-start
        <label htmlFor="postAuthor">Author:</label>
        <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
          <option value=""></option>
          {usersOptions}
        </select>
        // highlight-end
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
        // highlight-next-line
        <button type="button" onClick={onSavePostClicked} disabled={!canSave}>
          Save Post
        </button>
      </form>
    </section>
  );
};
```

Now, we need a way to show the name of the post's author inside of our post list items and `<SinglePostPage>`. Since we want to show this same kind of info in more than one place, we can make a `PostAuthor` component that takes a user ID as a prop, looks up the right user object, and formats the user's name:

```jsx title="features/posts/PostAuthor.js"
import React from "react";
import { useSelector } from "react-redux";

export const PostAuthor = ({ userId }) => {
  const author = useSelector((state) =>
    state.users.find((user) => user.id === userId)
  );

  return <span>by {author ? author.name : "Unknown author"}</span>;
};
```

Notice that we're following the same pattern in each of our components as we go. Any component that needs to read data from the Redux store can use the `useSelector` hook, and extract the specific pieces of data that it needs. Also, many components can access the same data in the Redux store at the same time.

We can now import the `PostAuthor` component into both `PostsList.js` and `SinglePostPage.js`, and render it as `<PostAuthor userId={post.user} />`, and every time we add a post entry, the selected user's name should show up inside of the rendered post.

## More Post Features

At this point, we can create and edit posts. Let's add some additional logic to make our posts feed more useful.

### Storing Dates for Posts

Social media feeds are typically sorted by when the post was created, and show us the post creation time as a relative description like "5 hours ago". In order to do that, we need to start tracking a `date` field for our post entries.

Like with the `post.user` field, we'll update our `postAdded` prepare callback to make sure that `post.date` is always included when the action is dispatched. However, it's not another parameter that will be passed in. We want to always use the exact timestamp from when the action is dispatched, so we'll let the prepare callback handle that itself.

:::caution

**Redux actions and state should only contain plain JS values like objects, arrays, and primitives. Don't put class instances, functions, or other non-serializable values into Redux!**.

:::

Since we can't just put a `Date` class instance into the Redux store, we'll track the `post.date` value as a timestamp string:

```js title="features/posts/postsSlice.js"
    postAdded: {
      reducer(state, action) {
        state.push(action.payload)
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            // highlight-next-line
            date: new Date().toISOString(),
            title,
            content,
            user: userId,
          },
        }
      },
    },
```

Like with post authors, we need to show the relative timestamp description in both our `<PostsList>` and `<SinglePostPage>` components. We'll add a `<TimeAgo>` component to handle formatting a timestamp string as a relative description. Libraries like `date-fns` have some useful utility functions for parsing and formatting dates, which we can use here:

```jsx title="features/posts/TimeAgo.js"
import React from "react";
import { parseISO, formatDistanceToNow } from "date-fns";

export const TimeAgo = ({ timestamp }) => {
  let timeAgo = "";
  if (timestamp) {
    const date = parseISO(timestamp);
    const timePeriod = formatDistanceToNow(date);
    timeAgo = `${timePeriod} ago`;
  }

  return (
    <span title={timestamp}>
      &nbsp; <i>{timeAgo}</i>
    </span>
  );
};
```

### Sorting the Posts List

Our `<PostsList>` is currently showing all the posts in the same order the posts are kept in the Redux store. Our example has the oldest post first, and any time we add a new post, it gets added to the end of the posts array. That means the newest post is always at the bottom of the page.

Typically, social media feeds show the newest posts first, and you scroll down to see older posts. Even though the data is being kept oldest-first in the store, we can reorder the data in our `<PostsList>` component so that the newest post is first. In theory, since we know that the `state.posts` array is already sorted, we _could_ just reverse the list. But, it's better to go ahead and sort it ourselves just to be sure.

Since `array.sort()` mutates the existing array, we need to make a copy of `state.posts` and sort that copy. We know that our `post.date` fields are being kept as date timestamp strings, and we can directly compare those to sort the posts in the right order:

```jsx title="features/posts/PostsList.js"
// Sort posts in reverse chronological order by datetime string
//highlight-start
const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date));

const renderedPosts = orderedPosts.map((post) => {
  //highlight-end
  return (
    <article className="post-excerpt" key={post.id}>
      <h3>{post.title}</h3>
      <div>
        <PostAuthor userId={post.user} />
        <TimeAgo timestamp={post.date} />
      </div>
      <p className="post-content">{post.content.substring(0, 100)}</p>
      <Link to={`/posts/${post.id}`} className="button muted-button">
        View Post
      </Link>
    </article>
  );
});
```

We also need to add the `date` field to `initialState` in `postsSlice.js`. We'll use `date-fns` here again to subtract minutes from the current date/time so they differ from each other.

```jsx title="features/posts/postsSlice.js"
import { createSlice, nanoid } from "@reduxjs/toolkit";
// highlight-next-line
import { sub } from "date-fns";

const initialState = [
  {
    // omitted fields
    content: "Hello!",
    // highlight-next-line
    date: sub(new Date(), { minutes: 10 }).toISOString(),
  },
  {
    // omitted fields
    content: "More text",
    // highlight-next-line
    date: sub(new Date(), { minutes: 5 }).toISOString(),
  },
];
```

### Post Reaction Buttons

We have one more new feature to add for this section. Right now, our posts are kind of boring. We need to make them more exciting, and what better way to do that than letting our friends add reaction emoji to our posts?

We'll add a row of emoji reaction buttons at the bottom of each post in `<PostsList>` and `<SinglePostPage>`. Every time a user clicks one of the reaction buttons, we'll need to update a matching counter field for that post in the Redux store. Since the reaction counter data is in the Redux store, switching between different parts of the app should consistently show the same values in any component that uses that data.

Like with post authors and timestamps, we want to use this everywhere we show posts, so we'll create a `<ReactionButtons>` component that takes a `post` as a prop. We'll start by just showing the buttons inside, with the current reaction counts for each button:

```jsx title="features/posts/ReactionButtons.js"
import React from "react";

const reactionEmoji = {
  thumbsUp: "👍",
  hooray: "🎉",
  heart: "❤️",
  rocket: "🚀",
  eyes: "👀",
};

export const ReactionButtons = ({ post }) => {
  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button key={name} type="button" className="muted-button reaction-button">
        {emoji} {post.reactions[name]}
      </button>
    );
  });

  return <div>{reactionButtons}</div>;
};
```

We don't yet have a `post.reactions` field in our data, so we'll need to update the `initialState` post objects and our `postAdded` prepare callback function to make sure that every post has that data inside, like `reactions: {thumbsUp: 0, hooray: 0}`.

Now, we can define a new reducer that will handle updating the reaction count for a post when a user clicks the reaction button.

Like with editing posts, we need to know the ID of the post, and which reaction button the user clicked on. We'll have our `action.payload` be an object that looks like `{id, reaction}`. The reducer can then find the right post object, and update the correct reactions field.

```js
const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    // highlight-start
    reactionAdded(state, action) {
      const { postId, reaction } = action.payload;
      const existingPost = state.find((post) => post.id === postId);
      if (existingPost) {
        existingPost.reactions[reaction]++;
      }
    },
    // highlight-end
    // other reducers
  },
});

// highlight-next-line
export const { postAdded, postUpdated, reactionAdded } = postsSlice.actions;
```

As we've seen already, `createSlice` lets us write "mutating" logic in our reducers. If we weren't using `createSlice` and the Immer library, the line `existingPost.reactions[reaction]++` would indeed mutate the existing `post.reactions` object, and this would probably cause bugs elsewhere in our app because we didn't follow the rules of reducers. But, since we _are_ using `createSlice`, we can write this more complex update logic in a simpler way, and let Immer do the work of turning this code into a safe immutable update.

Notice that **our action object just contains the minimum amount of information needed to describe what happened**. We know which post we need to update, and which reaction name was clicked on. We _could_ have calculated the new reaction counter value and put that in the action, but **it's always better to keep the action objects as small as possible, and do the state update calculations in the reducer**. This also means that **reducers can contain as much logic as necessary to calculate the new state**.

:::info

When using Immer, you can either "mutate" an existing state object, or return a new state value yourself, but not both at the same time. See the Immer docs guides on [Pitfalls](https://immerjs.github.io/immer/pitfalls) and [Returning New Data](https://immerjs.github.io/immer/return) for more details.

:::

Our last step is to update the `<ReactionButtons>` component to dispatch the `reactionAdded` action when the user clicks a button:

```jsx title="features/posts/ReactionButtons.jsx"
import React from "react";
// highlight-start
import { useDispatch } from "react-redux";

import { reactionAdded } from "./postsSlice";
// highlight-end

const reactionEmoji = {
  thumbsUp: "👍",
  hooray: "🎉",
  heart: "❤️",
  rocket: "🚀",
  eyes: "👀",
};

export const ReactionButtons = ({ post }) => {
  // highlight-next-line
  const dispatch = useDispatch();

  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button
        key={name}
        type="button"
        className="muted-button reaction-button"
        // highlight-start
        onClick={() =>
          dispatch(reactionAdded({ postId: post.id, reaction: name }))
        }
        // highlight-end
      >
        {emoji} {post.reactions[name]}
      </button>
    );
  });

  return <div>{reactionButtons}</div>;
};
```

Now, every time we click a reaction button, the counter should increment. If we browse around to different parts of the app, we should see the correct counter values displayed any time we look at this post, even if we click a reaction button in the `<PostsList>` and then look at the post by itself on the `<SinglePostPage>`.

## What You've Learned

Here's what our app looks like after all these changes:

<iframe
  class="codesandbox"
  src="https://codesandbox.io/embed/github/reduxjs/redux-essentials-example-app/tree/checkpoint-2-reactionButtons/?fontsize=14&hidenavigation=1&theme=dark&runonclick=1"
  title="redux-essentials-example-app"
  allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
  sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
></iframe>

It's actually starting to look more useful and interesting!

We've covered a lot of information and concepts in this section. Let's recap the important things to remember:

:::tip Summary

- **Any React component can use data from the Redux store as needed**
  - Any component can read any data that is in the Redux store
  - Multiple components can read the same data, even at the same time
  - Components should extract the smallest amount of data they need to render themselves
  - Components can combine values from props, state, and the Redux store to determine what UI they need to render. They can read multiple pieces of data from the store, and reshape the data as needed for display.
  - Any component can dispatch actions to cause state updates
- **Redux action creators can prepare action objects with the right contents**
  - `createSlice` and `createAction` can accept a "prepare callback" that returns the action payload
  - Unique IDs and other random values should be put in the action, not calculated in the reducer
- **Reducers should contain the actual state update logic**
  - Reducers can contain whatever logic is needed to calculate the next state
  - Action objects should contain just enough info to describe what happened

:::

## What's Next?

By now you should be comfortable working with data in the Redux store and React components. So far we've just used data that was in the initial state or added by the user. In [Part 5: Async Logic and Data Fetching](./part-5-async-logic.md), we'll see how to work with data that comes from a server API.

---

id: part-5-async-logic
title: 'Redux Essentials, Part 5: Async Logic and Data Fetching'
sidebar_label: 'Async Logic and Data Fetching'
description: 'The official Redux Essentials tutorial: learn how async logic works in Redux apps'

---

import { DetailedExplanation } from '../../components/DetailedExplanation'

:::tip What You'll Learn

- How to use the Redux "thunk" middleware for async logic
- Patterns for handling async request state
- How to use the Redux Toolkit `createAsyncThunk` API to simplify async calls

:::

:::info Prerequisites

- Familiarity with using AJAX requests to fetch and update data from a server

:::

## Introduction

In [Part 4: Using Redux Data](./part-4-using-data.md), we saw how to use multiple pieces of data from the Redux store inside of React components, customize the contents of action objects before they're dispatched, and handle more complex update logic in our reducers.

So far, all the data we've worked with has been directly inside of our React client application. However, most real applications need to work with data from a server, by making HTTP API calls to fetch and save items.

In this section, we'll convert our social media app to fetch the posts and users data from an API, and add new posts by saving them to the API.

### Example REST API and Client

To keep the example project isolated but realistic, the initial project setup already included a fake in-memory REST API for our data (configured using [the Mock Service Worker mock API tool](https://mswjs.io/)). The API uses `/fakeApi` as the base URL for the endpoints, and supports the typical `GET/POST/PUT/DELETE` HTTP methods for `/fakeApi/posts`, `/fakeApi/users`, and `fakeApi/notifications`. It's defined in `src/api/server.js`.

The project also includes a small HTTP API client object that exposes `client.get()` and `client.post()` methods, similar to popular HTTP libraries like `axios`. It's defined in `src/api/client.js`.

We'll use the `client` object to make HTTP calls to our in-memory fake REST API for this section.

Also, the mock server has been set up to reuse the same random seed each time the page is loaded, so that it will generate the same list of fake users and fake posts. If you want to reset that, delete the `'randomTimestampSeed'` value in your browser's Local Storage and reload the page, or you can turn that off by editing `src/api/server.js` and setting `useSeededRNG` to `false`.

:::info

As a reminder, the code examples focus on the key concepts and changes for each section. See the CodeSandbox projects and the [`tutorial-steps` branch in the project repo](https://github.com/reduxjs/redux-essentials-example-app/tree/tutorial-steps) for the complete changes in the application.

:::

## Thunks and Async Logic

### Using Middleware to Enable Async Logic

By itself, a Redux store doesn't know anything about async logic. It only knows how to synchronously dispatch actions, update the state by calling the root reducer function, and notify the UI that something has changed. Any asynchronicity has to happen outside the store.

But, what if you want to have async logic interact with the store by dispatching or checking the current store state? That's where [Redux middleware](../fundamentals/part-4-store.md#middleware) come in. They extend the store, and allow you to:

- Execute extra logic when any action is dispatched (such as logging the action and state)
- Pause, modify, delay, replace, or halt dispatched actions
- Write extra code that has access to `dispatch` and `getState`
- Teach `dispatch` how to accept other values besides plain action objects, such as functions and promises, by intercepting them and dispatching real action objects instead

[The most common reason to use middleware is to allow different kinds of async logic to interact with the store](../../faq/Actions.md#how-can-i-represent-side-effects-such-as-ajax-calls-why-do-we-need-things-like-action-creators-thunks-and-middleware-to-do-async-behavior). This allows you to write code that can dispatch actions and check the store state, while keeping that logic separate from your UI.

There are many kinds of async middleware for Redux, and each lets you write your logic using different syntax. The most common async middleware is [`redux-thunk`](https://github.com/reduxjs/redux-thunk), which lets you write plain functions that may contain async logic directly. Redux Toolkit's `configureStore` function [automatically sets up the thunk middleware by default](https://redux-toolkit.js.org/api/getDefaultMiddleware#included-default-middleware), and [we recommend using thunks as the standard approach for writing async logic with Redux](../../style-guide/style-guide.md#use-thunks-for-async-logic).

Earlier, we saw [what the synchronous data flow for Redux looks like](part-1-overview-concepts.md#redux-application-data-flow). When we introduce asynchronous logic, we add an extra step where middleware can run logic like AJAX requests, then dispatch actions. That makes the async data flow look like this:

![Redux async data flow diagram](/img/tutorials/essentials/ReduxAsyncDataFlowDiagram.gif)

### Thunk Functions

Once the thunk middleware has been added to the Redux store, it allows you to pass _thunk functions_ directly to `store.dispatch`. A thunk function will always be called with `(dispatch, getState)` as its arguments, and you can use them inside the thunk as needed.

Thunks typically dispatch plain actions using action creators, like `dispatch(increment())`:

```js
const store = configureStore({ reducer: counterReducer });

const exampleThunkFunction = (dispatch, getState) => {
  const stateBefore = getState();
  console.log(`Counter before: ${stateBefore.counter}`);
  dispatch(increment());
  const stateAfter = getState();
  console.log(`Counter after: ${stateAfter.counter}`);
};

store.dispatch(exampleThunkFunction);
```

For consistency with dispatching normal action objects, we typically write these as _thunk action creators_, which return the thunk function. These action creators can take arguments that can be used inside the thunk.

```js
const logAndAdd = (amount) => {
  return (dispatch, getState) => {
    const stateBefore = getState();
    console.log(`Counter before: ${stateBefore.counter}`);
    dispatch(incrementByAmount(amount));
    const stateAfter = getState();
    console.log(`Counter after: ${stateAfter.counter}`);
  };
};

store.dispatch(logAndAdd(5));
```

Thunks are typically written in "slice" files. `createSlice` itself does not have any special support for defining thunks, so you should write them as separate functions in the same slice file. That way, they have access to the plain action creators for that slice, and it's easy to find where the thunk lives.

:::info

The word "thunk" is a programming term that means ["a piece of code that does some delayed work"](https://en.wikipedia.org/wiki/Thunk). For more details on how to use thunks, see the thunk usage guide page:

- [Using Redux: Writing Logic with Thunks](../../usage/writing-logic-thunks.mdx)

as well as these posts:

- [What the heck is a thunk?](https://daveceddia.com/what-is-a-thunk/)
- [Thunks in Redux: the basics](https://medium.com/fullstack-academy/thunks-in-redux-the-basics-85e538a3fe60)

:::

### Writing Async Thunks

Thunks may have async logic inside of them, such as `setTimeout`, `Promise`s, and `async/await`. This makes them a good place to put AJAX calls to a server API.

Data fetching logic for Redux typically follows a predictable pattern:

- A "start" action is dispatched before the request, to indicate that the request is in progress. This may be used to track loading state to allow skipping duplicate requests or show loading indicators in the UI.
- The async request is made
- Depending on the request result, the async logic dispatches either a "success" action containing the result data, or a "failure" action containing error details. The reducer logic clears the loading state in both cases, and either processes the result data from the success case, or stores the error value for potential display.

These steps are not _required_, but are commonly used. (If all you care about is a successful result, you can just dispatch a single "success" action when the request finishes, and skip the "start" and "failure" actions.)

Redux Toolkit provides a `createAsyncThunk` API to implement the creation and dispatching of these actions, and we'll look at how to use it shortly.

<DetailedExplanation title="Detailed Explanation: Dispatching Request Status Actions in Thunks">

If we were to write out the code for a typical async thunk by hand, it might look like this:

```js
const getRepoDetailsStarted = () => ({
  type: "repoDetails/fetchStarted",
});
const getRepoDetailsSuccess = (repoDetails) => ({
  type: "repoDetails/fetchSucceeded",
  payload: repoDetails,
});
const getRepoDetailsFailed = (error) => ({
  type: "repoDetails/fetchFailed",
  error,
});
const fetchIssuesCount = (org, repo) => async (dispatch) => {
  dispatch(getRepoDetailsStarted());
  try {
    const repoDetails = await getRepoDetails(org, repo);
    dispatch(getRepoDetailsSuccess(repoDetails));
  } catch (err) {
    dispatch(getRepoDetailsFailed(err.toString()));
  }
};
```

However, writing code using this approach is tedious. Each separate type of request needs repeated similar implementation:

- Unique action types need to be defined for the three different cases
- Each of those action types usually has a corresponding action creator function
- A thunk has to be written that dispatches the correct actions in the right sequence

`createAsyncThunk` abstracts this pattern by generating the action types and action creators, and generating a thunk that dispatches those actions automatically. You provide a callback function that makes the async call and returns a Promise with the result.

</DetailedExplanation>

<br />

:::tip

Redux Toolkit has a new [**RTK Query data fetching API**](https://redux-toolkit.js.org/rtk-query/overview). RTK Query is a purpose built data fetching and caching solution for Redux apps, and **can eliminate the need to write _any_ thunks or reducers to manage data fetching**. We encourage you to try it out and see if it can help simplify the data fetching code in your own apps!

We'll cover how to use RTK Query starting in [Part 7: RTK Query Basics](./part-7-rtk-query-basics.md).

:::

## Loading Posts

So far, our `postsSlice` has used some hardcoded sample data as its initial state. We're going to switch that to start with an empty array of posts instead, and then fetch a list of posts from the server.

In order to do that, we're going to have to change the structure of the state in our `postsSlice`, so that we can keep track of the current state of the API request.

### Extracting Posts Selectors

Right now, the `postsSlice` state is a single array of `posts`. We need to change that to be an object that has the `posts` array, plus the loading state fields.

Meanwhile, the UI components like `<PostsList>` are trying to read posts from `state.posts` in their `useSelector` hooks, assuming that that field is an array. We need to change those locations also to match the new data.

It would be nice if we didn't have to keep rewriting our components every time we made a change to the data format in our reducers. One way to avoid this is to define reusable selector functions in the slice files, and have the components use those selectors to extract the data they need instead of repeating the selector logic in each component. That way, if we do change our state structure again, we only need to update the code in the slice file.

The `<PostsList>` component needs to read a list of all the posts, and the `<SinglePostPage>` and `<EditPostForm>` components need to look up a single post by its ID. Let's export two small selector functions from `postsSlice.js` to cover those cases:

```js title="features/posts/postsSlice.js"
const postsSlice = createSlice(/* omit slice code*/);

export const { postAdded, postUpdated, reactionAdded } = postsSlice.actions;

export default postsSlice.reducer;

// highlight-start
export const selectAllPosts = (state) => state.posts;

export const selectPostById = (state, postId) =>
  state.posts.find((post) => post.id === postId);
//highlight-end
```

Note that the `state` parameter for these selector functions is the root Redux state object, as it was for the inlined anonymous selectors we wrote directly inside of `useSelector`.

We can then use them in the components:

```js title="features/posts/PostsList.js"
// omit imports
// highlight-next-line
import { selectAllPosts } from "./postsSlice";

export const PostsList = () => {
  // highlight-next-line
  const posts = useSelector(selectAllPosts);
  // omit component contents
};
```

```js title="features/posts/SinglePostPage.js"
// omit imports
//highlight-next-line
import { selectPostById } from "./postsSlice";

export const SinglePostPage = ({ match }) => {
  const { postId } = match.params;

  // highlight-next-line
  const post = useSelector((state) => selectPostById(state, postId));
  // omit component logic
};
```

```js title="features/posts/EditPostForm.js"
// omit imports
//highlight-next-line
import { postUpdated, selectPostById } from "./postsSlice";

export const EditPostForm = ({ match }) => {
  const { postId } = match.params;

  // highlight-next-line
  const post = useSelector((state) => selectPostById(state, postId));
  // omit component logic
};
```

It's often a good idea to encapsulate data lookups by writing reusable selectors. You can also create "memoized" selectors that can help improve performance, which we'll look at in a later part of this tutorial.

But, like any abstraction, it's not something you should do _all_ the time, everywhere. Writing selectors means more code to understand and maintain. **Don't feel like you need to write selectors for every single field of your state**. Try starting without any selectors, and add some later when you find yourself looking up the same values in many parts of your application code.

### Loading State for Requests

When we make an API call, we can view its progress as a small state machine that can be in one of four possible states:

- The request hasn't started yet
- The request is in progress
- The request succeeded, and we now have the data we need
- The request failed, and there's probably an error message

We _could_ track that information using some booleans, like `isLoading: true`, but it's better to track these states as a single enum value. A good pattern for this is to have a state section that looks like this (using TypeScript type notation):

```ts
{
  // Multiple possible status enum values
  status: 'idle' | 'loading' | 'succeeded' | 'failed',
  error: string | null
}
```

These fields would exist alongside whatever actual data is being stored. These specific string state names aren't required - feel free to use other names if you want, like `'pending'` instead of `'loading'`, or `'complete'` instead of `'succeeded'`.

We can use this information to decide what to show in our UI as the request progresses, and also add logic in our reducers to prevent cases like loading data twice.

Let's update our `postsSlice` to use this pattern to track loading state for a "fetch posts" request. We'll switch our state from being an array of posts by itself, to look like `{posts, status, error}`. We'll also remove the old sample post entries from our initial state. As part of this change, we also need to change any uses of `state` as an array to be `state.posts` instead, because the array is now one level deeper:

```js title="features/posts/postsSlice.js"
import { createSlice, nanoid } from "@reduxjs/toolkit";

// highlight-start
const initialState = {
  posts: [],
  status: "idle",
  error: null,
};
//highlight-end

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        // highlight-next-line
        state.posts.push(action.payload);
      },
      prepare(title, content, userId) {
        // omit prepare logic
      },
    },
    reactionAdded(state, action) {
      const { postId, reaction } = action.payload;
      // highlight-next-line
      const existingPost = state.posts.find((post) => post.id === postId);
      if (existingPost) {
        existingPost.reactions[reaction]++;
      }
    },
    postUpdated(state, action) {
      const { id, title, content } = action.payload;
      // highlight-next-line
      const existingPost = state.posts.find((post) => post.id === id);
      if (existingPost) {
        existingPost.title = title;
        existingPost.content = content;
      }
    },
  },
});

export const { postAdded, postUpdated, reactionAdded } = postsSlice.actions;

export default postsSlice.reducer;

// highlight-start
export const selectAllPosts = (state) => state.posts.posts;

export const selectPostById = (state, postId) =>
  state.posts.posts.find((post) => post.id === postId);
// highlight-end
```

Yes, this _does_ mean that we now have a nested object path that looks like `state.posts.posts`, which is somewhat repetitive and silly :) We _could_ change the nested array name to be `items` or `data` or something if we wanted to avoid that, but we'll leave it as-is for now.

### Fetching Data with `createAsyncThunk`

Redux Toolkit's `createAsyncThunk` API generates thunks that automatically dispatch those "start/success/failure" actions for you.

Let's start by adding a thunk that will make an AJAX call to retrieve a list of posts. We'll import the `client` utility from the `src/api` folder, and use that to make a request to `'/fakeApi/posts'`.

```js title="features/posts/postsSlice"
// highlight-next-line
import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
// highlight-next-line
import { client } from "../../api/client";

const initialState = {
  posts: [],
  status: "idle",
  error: null,
};

// highlight-start
export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await client.get("/fakeApi/posts");
  return response.data;
});
// highlight-end
```

`createAsyncThunk` accepts two arguments:

- A string that will be used as the prefix for the generated action types
- A "payload creator" callback function that should return a `Promise` containing some data, or a rejected `Promise` with an error

The payload creator will usually make an AJAX call of some kind, and can either return the `Promise` from the AJAX call directly, or extract some data from the API response and return that. We typically write this using the JS `async/await` syntax, which lets us write functions that use `Promise`s while using standard `try/catch` logic instead of `somePromise.then()` chains.

In this case, we pass in `'posts/fetchPosts'` as the action type prefix. Our payload creation callback waits for the API call to return a response. The response object looks like `{data: []}`, and we want our dispatched Redux action to have a payload that is _just_ the array of posts. So, we extract `response.data`, and return that from the callback.

If we try calling `dispatch(fetchPosts())`, the `fetchPosts` thunk will first dispatch an action type of `'posts/fetchPosts/pending'`:

![`createAsyncThunk`: posts pending action](/img/tutorials/essentials/devtools-posts-pending.png)

We can listen for this action in our reducer and mark the request status as `'loading'`.

Once the `Promise` resolves, the `fetchPosts` thunk takes the `response.data` array we returned from the callback, and dispatches a `'posts/fetchPosts/fulfilled'` action containing the posts array as `action.payload`:

![`createAsyncThunk`: posts pending action](/img/tutorials/essentials/devtools-posts-fulfilled.png)

#### Dispatching Thunks from Components

So, let's update our `<PostsList>` component to actually fetch this data automatically for us.

We'll import the `fetchPosts` thunk into the component. Like all of our other action creators, we have to dispatch it, so we'll also need to add the `useDispatch` hook. Since we want to fetch this data when `<PostsList>` mounts, we need to import the React `useEffect` hook:

```js title="features/posts/PostsList.js"
// highlight-start
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// omit other imports
// highlight-end
//highlight-next-line
import { selectAllPosts, fetchPosts } from "./postsSlice";

export const PostsList = () => {
  // highlight-next-line
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);

  // highlight-start
  const postStatus = useSelector((state) => state.posts.status);

  useEffect(() => {
    if (postStatus === "idle") {
      dispatch(fetchPosts());
    }
  }, [postStatus, dispatch]);
  // highlight-end

  // omit rendering logic
};
```

It's important that we only try to fetch the list of posts once. If we do it every time the `<PostsList>` component renders, or is re-created because we've switched between views, we might end up fetching the posts several times. We can use the `posts.status` enum to help decide if we need to actually start fetching, by selecting that into the component and only starting the fetch if the status is `'idle'`.

### Reducers and Loading Actions

Next up, we need to handle both these actions in our reducers. This requires a bit deeper look at the `createSlice` API we've been using.

We've already seen that `createSlice` will generate an action creator for every reducer function we define in the `reducers` field, and that the generated action types include the name of the slice, like:

```js
console.log(
  postUpdated({ id: "123", title: "First Post", content: "Some text here" })
);
/*
{
  type: 'posts/postUpdated',
  payload: {
    id: '123',
    title: 'First Post',
    content: 'Some text here'
  }
}
*/
```

However, there are times when a slice reducer needs to respond to _other_ actions that weren't defined as part of this slice's `reducers` field. We can do that using the slice `extraReducers` field instead.

The `extraReducers` option should be a function that receives a parameter called `builder`. The `builder` object provides methods that let us define additional case reducers that will run in response to actions defined outside of the slice. We'll use `builder.addCase(actionCreator, reducer)` to handle each of the actions dispatched by our async thunks.

<DetailedExplanation title="Detailed Explanation: Adding Extra Reducers to Slices">

The `builder` object in `extraReducers` provides methods that let us define additional case reducers that will run in response to actions defined outside of the slice:

- `builder.addCase(actionCreator, reducer)`: defines a case reducer that handles a single known action type based on either an RTK action creator or a plain action type string
- `builder.addMatcher(matcher, reducer)`: defines a case reducer that can run in response to any action where the `matcher` function returns `true`
- `builder.addDefaultCase(reducer)`: defines a case reducer that will run if no other case reducers were executed for this action.

You can chain these together, like `builder.addCase().addCase().addMatcher().addDefault()`. If multiple matchers match the action, they will run in the order they were defined.

```js
import { increment } from "../features/counter/counterSlice";

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    // slice-specific reducers here
  },
  // highlight-start
  extraReducers: (builder) => {
    builder
      .addCase("counter/decrement", (state, action) => {})
      .addCase(increment, (state, action) => {});
  },
  // highlight-end
});
```

If you're using TypeScript, you should use the builder callback form of `extraReducers`.

Alternately, `extraReducers` can also be an object. **This is a legacy syntax - it's still supported, but we recommend the "builder callback" syntax as it works better with TypeScript.**

The keys in the `extraReducers` object should be Redux action type strings, like `'counter/increment'`. We _could_ write those by hand ourselves, although we'd have to quote the keys if they contain any characters like '/':

```js
const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    // slice-specific reducers here
  },
  extraReducers: {
    "counter/increment": (state, action) => {
      // normal reducer logic to update the posts slice
    },
  },
});
```

However, action creators generated by Redux Toolkit automatically return their action type string if you call `actionCreator.toString()`. This means we can pass them as ES6 object literal computed properties, and the action types will become the keys of the object:

```js
import { increment } from "../features/counter/counterSlice";
const object = {
  [increment]: () => {},
};
console.log(object);
// { "counter/increment": Function}
```

This works for the `extraReducers` field when used as an object:

```js
import { increment } from "../features/counter/counterSlice";

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    // slice-specific reducers here
  },
  extraReducers: {
    // highlight-next-line
    [increment]: (state, action) => {
      // normal reducer logic to update the posts slice
    },
  },
});
```

Unfortunately, TypeScript fails to recognize this will work correctly, so you have to use `increment.type` here to pass the type string. It also will not correctly infer the type of `action` inside the reducer.

</DetailedExplanation>

In this case, we need to listen for the "pending" and "fulfilled" action types dispatched by our `fetchPosts` thunk. Those action creators are attached to our actual `fetchPost` function, and we can pass those to `extraReducers` to listen for those actions:

```js
export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await client.get("/fakeApi/posts");
  return response.data;
});

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    // omit existing reducers here
  },
  // highlight-start
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Add any fetched posts to the array
        state.posts = state.posts.concat(action.payload);
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
  // highlight-end
});
```

We'll handle all three action types that could be dispatched by the thunk, based on the `Promise` we returned:

- When the request starts, we'll set the `status` enum to `'loading'`
- If the request succeeds, we mark the `status` as `'succeeded'`, and add the fetched posts to `state.posts`
- If the request fails, we'll mark the `status` as `'failed'`, and save any error message into the state so we can display it

### Displaying Loading State

Our `<PostsList>` component is already checking for any updates to the posts that are stored in Redux, and rerendering itself any time that list changes. So, if we refresh the page, we should see a random set of posts from our fake API show up on screen:

The fake API we're using returns data immediately. However, a real API call will probably take some time to return a response. It's usually a good idea to show some kind of "loading..." indicator in the UI so the user knows we're waiting for data.

We can update our `<PostsList>` to show a different bit of UI based on the `state.posts.status` enum: a spinner if we're loading, an error message if it failed, or the actual posts list if we have the data. While we're at it, this is probably a good time to extract a `<PostExcerpt>` component to encapsulate the rendering for one item in the list as well.

The result might look like this:

```jsx title="features/posts/PostsList.js"
// highlight-next-line
import { Spinner } from "../../components/Spinner";
import { PostAuthor } from "./PostAuthor";
import { TimeAgo } from "./TimeAgo";
import { ReactionButtons } from "./ReactionButtons";
import { selectAllPosts, fetchPosts } from "./postsSlice";

// highlight-start
const PostExcerpt = ({ post }) => {
  return (
    <article className="post-excerpt" key={post.id}>
      <h3>{post.title}</h3>
      <div>
        <PostAuthor userId={post.user} />
        <TimeAgo timestamp={post.date} />
      </div>
      <p className="post-content">{post.content.substring(0, 100)}</p>

      <ReactionButtons post={post} />
      <Link to={`/posts/${post.id}`} className="button muted-button">
        View Post
      </Link>
    </article>
  );
};
// highlight-end

export const PostsList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);

  const postStatus = useSelector((state) => state.posts.status);
  // highlight-next-line
  const error = useSelector((state) => state.posts.error);

  useEffect(() => {
    if (postStatus === "idle") {
      dispatch(fetchPosts());
    }
  }, [postStatus, dispatch]);

  // highlight-start
  let content;

  if (postStatus === "loading") {
    content = <Spinner text="Loading..." />;
  } else if (postStatus === "succeeded") {
    // Sort posts in reverse chronological order by datetime string
    const orderedPosts = posts
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date));

    content = orderedPosts.map((post) => (
      <PostExcerpt key={post.id} post={post} />
    ));
  } else if (postStatus === "failed") {
    content = <div>{error}</div>;
  }
  // highlight-end

  return (
    <section className="posts-list">
      <h2>Posts</h2>
      {content}
    </section>
  );
};
```

You might notice that the API calls are taking a while to complete, and that the loading spinner is staying on screen for a couple seconds. Our mock API server is configured to add a 2-second delay to all responses, specifically to help visualize times when there's a loading spinner visible. If you want to change this behavior, you can open up `api/server.js`, and alter this line:

```js title="api/server.js"
// Add an extra delay to all endpoints, so loading spinners show up.
const ARTIFICIAL_DELAY_MS = 2000;
```

Feel free to turn that on and off as we go if you want the API calls to complete faster.

## Loading Users

We're now fetching and displaying our list of posts. But, if we look at the posts, there's a problem: they all now say "Unknown author" as the authors:

![Unknown post authors](/img/tutorials/essentials/posts-unknownAuthor.png)

This is because the post entries are being randomly generated by the fake API server, which also randomly generates a set of fake users every time we reload the page. We need to update our users slice to fetch those users when the application starts.

Like last time, we'll create another async thunk to get the users from the API and return them, then handle the `fulfilled` action in the `extraReducers` slice field. We'll skip worrying about loading state for now:

```js title="features/users/usersSlice.js"
// highlight-start
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "../../api/client";
// highlight-end

const initialState = [];

// highlight-start
export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await client.get("/fakeApi/users");
  return response.data;
});
// highlight-end

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  // highlight-start
  extraReducers(builder) {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      return action.payload;
    });
  },
  // highlight-end
});

export default usersSlice.reducer;
```

We only need to fetch the list of users once, and we want to do it right when the application starts. We can do that in our `index.js` file, and directly dispatch the `fetchUsers` thunk because we have the `store` right there:

```js title="index.js"
// omit imports

// highlight-next-line
import { fetchUsers } from "./features/users/usersSlice";

import { worker } from "./api/server";

// Start our mock API server
worker.start({ onUnhandledRequest: "bypass" });

// highlight-next-line
store.dispatch(fetchUsers());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
```

Now, each of the posts should be showing a username again, and we should also have that same list of users shown in the "Author" dropdown in our `<AddPostForm>`.

## Adding New Posts

We have one more step for this section. When we add a new post from the `<AddPostForm>`, that post is only getting added to the Redux store inside our app. We need to actually make an API call that will create the new post entry in our fake API server instead, so that it's "saved". (Since this is a fake API, the new post won't persist if we reload the page, but if we had a real backend server it would be available next time we reload.)

### Sending Data with Thunks

We can use `createAsyncThunk` to help with sending data, not just fetching it. We'll create a thunk that accepts the values from our `<AddPostForm>` as an argument, and makes an HTTP POST call to the fake API to save the data.

In the process, we're going to change how we work with the new post object in our reducers. Currently, our `postsSlice` is creating a new post object in the `prepare` callback for `postAdded`, and generating a new unique ID for that post. In most apps that save data to a server, the server will take care of generating unique IDs and filling out any extra fields, and will usually return the completed data in its response. So, we can send a request body like `{ title, content, user: userId }` to the server, and then take the complete post object it sends back and add it to our `postsSlice` state.

```js title="features/posts/postsSlice.js"
// highlight-start
export const addNewPost = createAsyncThunk(
  "posts/addNewPost",
  // The payload creator receives the partial `{title, content, user}` object
  async (initialPost) => {
    // We send the initial data to the fake API server
    const response = await client.post("/fakeApi/posts", initialPost);
    // The response includes the complete post object, including unique ID
    return response.data;
  }
);
// highlight-end

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    // The existing `postAdded` reducer and prepare callback were deleted
    reactionAdded(state, action) {}, // omit logic
    postUpdated(state, action) {}, // omit logic
  },
  extraReducers(builder) {
    // omit posts loading reducers
    // highlight-start
    builder.addCase(addNewPost.fulfilled, (state, action) => {
      // We can directly add the new post object to our posts array
      state.posts.push(action.payload);
    });
    // highlight-end
  },
});
```

### Checking Thunk Results in Components

Finally, we'll update `<AddPostForm>` to dispatch the `addNewPost` thunk instead of the old `postAdded` action. Since this is another API call to the server, it will take some time and _could_ fail. The `addNewPost()` thunk will automatically dispatch its `pending/fulfilled/rejected` actions to the Redux store, which we're already handling. We _could_ track the request status in `postsSlice` using a second loading enum if we wanted to, but for this example let's keep the loading state tracking limited to the component.

It would be good if we can at least disable the "Save Post" button while we're waiting for the request, so the user can't accidentally try to save a post twice. If the request fails, we might also want to show an error message here in the form, or perhaps just log it to the console.

We can have our component logic wait for the async thunk to finish, and check the result when it's done:

```js title="features/posts/AddPostForm.js"
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// highlight-next-line
import { addNewPost } from "./postsSlice";

export const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");
  // highlight-next-line
  const [addRequestStatus, setAddRequestStatus] = useState("idle");

  // omit useSelectors and change handlers

  // highlight-start
  const canSave =
    [title, content, userId].every(Boolean) && addRequestStatus === "idle";

  const onSavePostClicked = async () => {
    if (canSave) {
      try {
        setAddRequestStatus("pending");
        await dispatch(addNewPost({ title, content, user: userId })).unwrap();
        setTitle("");
        setContent("");
        setUserId("");
      } catch (err) {
        console.error("Failed to save the post: ", err);
      } finally {
        setAddRequestStatus("idle");
      }
    }
  };
  // highlight-end

  // omit rendering logic
};
```

We can add a loading status enum field as a React `useState` hook, similar to how we're tracking loading state in `postsSlice` for fetching posts. In this case, we just want to know if the request is in progress or not.

When we call `dispatch(addNewPost())`, the async thunk returns a `Promise` from `dispatch`. We can `await` that promise here to know when the thunk has finished its request. But, we don't yet know if that request succeeded or failed.

`createAsyncThunk` handles any errors internally, so that we don't see any messages about "rejected Promises" in our logs. It then returns the final action it dispatched: either the `fulfilled` action if it succeeded, or the `rejected` action if it failed.

However, it's common to want to write logic that looks at the success or failure of the actual request that was made. Redux Toolkit adds a `.unwrap()` function to the returned `Promise`, which will return a new `Promise` that either has the actual `action.payload` value from a `fulfilled` action, or throws an error if it's the `rejected` action. This lets us handle success and failure in the component using normal `try/catch` logic. So, we'll clear out the input fields to reset the form if the post was successfully created, and log the error to the console if it failed.

If you want to see what happens when the `addNewPost` API call fails, try creating a new post where the "Content" field only has the word "error" (without quotes). The server will see that and send back a failed response, so you should see a message logged to the console.

## What You've Learned

Async logic and data fetching are always a complex topic. As you've seen, Redux Toolkit includes some tools to automate the typical Redux data fetching patterns.

Here's what our app looks like now that we're fetching data from that fake API:

<iframe
  class="codesandbox"
  src="https://codesandbox.io/embed/github/reduxjs/redux-essentials-example-app/tree/checkpoint-3-postRequests/?fontsize=14&hidenavigation=1&theme=dark&runonclick=1"
  title="redux-essentials-example-app"
  allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
  sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
></iframe>

As a reminder, here's what we covered in this section:

:::tip Summary

- **You can write reusable "selector" functions to encapsulate reading values from the Redux state**
  - Selectors are functions that get the Redux `state` as an argument, and return some data
- **Redux uses plugins called "middleware" to enable async logic**
  - The standard async middleware is called `redux-thunk`, which is included in Redux Toolkit
  - Thunk functions receive `dispatch` and `getState` as arguments, and can use those as part of async logic
- **You can dispatch additional actions to help track the loading status of an API call**
  - The typical pattern is dispatching a "pending" action before the call, then either a "success" containing the data or a "failure" action containing the error
  - Loading state should usually be stored as an enum, like `'idle' | 'loading' | 'succeeded' | 'failed'`
- **Redux Toolkit has a `createAsyncThunk` API that dispatches these actions for you**
  - `createAsyncThunk` accepts a "payload creator" callback that should return a `Promise`, and generates `pending/fulfilled/rejected` action types automatically
  - Generated action creators like `fetchPosts` dispatch those actions based on the `Promise` you return
  - You can listen for these action types in `createSlice` using the `extraReducers` field, and update the state in reducers based on those actions.
  - Action creators can be used to automatically fill in the keys of the `extraReducers` object so the slice knows what actions to listen for.
  - Thunks can return promises. For `createAsyncThunk` specifically, you can `await dispatch(someThunk()).unwrap()` to handle the request success or failure at the component level.

:::

## What's Next?

We've got one more set of topics to cover the core Redux Toolkit APIs and usage patterns. In [Part 6: Performance and Normalizing Data](./part-6-performance-normalization.md), we'll look at how Redux usage affects React performance, and some ways we can optimize our application for improved performance.

---

id: part-6-performance-normalization
title: 'Redux Essentials, Part 6: Performance and Normalizing Data'
sidebar_label: 'Performance and Normalizing Data'
description: 'The official Redux Essentials tutorial: learn how to improve app performance and structure data correctly'

---

import { DetailedExplanation } from '../../components/DetailedExplanation'

:::tip What You'll Learn

- How to create memoized selector functions with `createSelector`
- Patterns for optimizing component rendering performance
- How to use `createEntityAdapter` to store and update normalized data

:::

:::info Prerequisites

- Completion of [Part 5](./part-5-async-logic.md) to understand data fetching flow

:::

## Introduction

In [Part 5: Async Logic and Data Fetching](./part-5-async-logic.md), we saw how to write async thunks to fetch data from a server API, patterns for handling async request loading state, and use of selector functions for encapsulating lookups of data from the Redux state.

In this section, we'll look at optimized patterns for ensuring good performance in our application, and techniques for automatically handling common updates of data in the store.

So far, most of our functionality has been centered around the `posts` feature. We're going to add a couple new sections of the app. After those are added, we'll look at some specific details of how we've built things, and talk about some weaknesses with what we've built so far and how we can improve the implementation.

## Adding User Pages

We're fetching a list of users from our fake API, and we can choose a user as the author when we add a new post. But, a social media app needs the ability to look at the page for a specific user and see all the posts they've made. Let's add a page to show the list of all users, and another to show all posts by a specific user.

We'll start by adding a new `<UsersList>` component. It follows the usual pattern of reading some data from the store with `useSelector`, and mapping over the array to show a list of users with links to their individual pages:

```jsx title="features/users/UsersList.js"
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectAllUsers } from "./usersSlice";

export const UsersList = () => {
  const users = useSelector(selectAllUsers);

  const renderedUsers = users.map((user) => (
    <li key={user.id}>
      <Link to={`/users/${user.id}`}>{user.name}</Link>
    </li>
  ));

  return (
    <section>
      <h2>Users</h2>

      <ul>{renderedUsers}</ul>
    </section>
  );
};
```

We don't yet have a `selectAllUsers` selector, so we'll need to add that to `usersSlice.js` along with a `selectUserById` selector:

```js title="features/users/usersSlice.js"
export default usersSlice.reducer;

// highlight-start
export const selectAllUsers = (state) => state.users;

export const selectUserById = (state, userId) =>
  state.users.find((user) => user.id === userId);
// highlight-end
```

And we'll add a `<UserPage>`, which is similar to our `<SinglePostPage>` in taking a `userId` parameter from the router:

```jsx title="features/users/UserPage.js"
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { selectUserById } from "../users/usersSlice";
import { selectAllPosts } from "../posts/postsSlice";

export const UserPage = ({ match }) => {
  const { userId } = match.params;

  const user = useSelector((state) => selectUserById(state, userId));

  const postsForUser = useSelector((state) => {
    const allPosts = selectAllPosts(state);
    return allPosts.filter((post) => post.user === userId);
  });

  const postTitles = postsForUser.map((post) => (
    <li key={post.id}>
      <Link to={`/posts/${post.id}`}>{post.title}</Link>
    </li>
  ));

  return (
    <section>
      <h2>{user.name}</h2>

      <ul>{postTitles}</ul>
    </section>
  );
};
```

As we've seen before, we can take data from one `useSelector` call, or from props, and use that to help decide what to read from the store in another `useSelector` call.

As usual, we will add routes for these components in `<App>`:

```jsx title="App.js"
          <Route exact path="/posts/:postId" component={SinglePostPage} />
          <Route exact path="/editPost/:postId" component={EditPostForm} />
          // highlight-start
          <Route exact path="/users" component={UsersList} />
          <Route exact path="/users/:userId" component={UserPage} />
          // highlight-end
          <Redirect to="/" />
```

We'll also add another tab in `<Navbar>` that links to `/users` so that we can click and go to `<UsersList>`:

```jsx title="app/Navbar.js"
export const Navbar = () => {
  return (
    <nav>
      <section>
        <h1>Redux Essentials Example</h1>

        <div className="navContent">
          <div className="navLinks">
            <Link to="/">Posts</Link>
            // highlight-next-line
            <Link to="/users">Users</Link>
          </div>
        </div>
      </section>
    </nav>
  );
};
```

## Adding Notifications

No social media app would be complete without some notifications popping up to tell us that someone has sent a message, left a comment, or reacted to one of our posts.

In a real application, our app client would be in constant communication with the backend server, and the server would push an update to the client every time something happens. Since this is a small example app, we're going to mimic that process by adding a button to actually fetch some notification entries from our fake API. We also don't have any other _real_ users sending messages or reacting to posts, so the fake API will just create some random notification entries every time we make a request. (Remember, the goal here is to see how to use Redux itself.)

### Notifications Slice

Since this is a new part of our app, the first step is to create a new slice for our notifications, and an async thunk to fetch some notification entries from the API. In order to create some realistic notifications, we'll include the timestamp of the latest notification we have in state. That will let our mock server generate notifications newer than that timestamp.

```js title="features/notifications/notificationsSlice.js"
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { client } from "../../api/client";

export const fetchNotifications = createAsyncThunk(
  "notifications/fetchNotifications",
  async (_, { getState }) => {
    const allNotifications = selectAllNotifications(getState());
    const [latestNotification] = allNotifications;
    const latestTimestamp = latestNotification ? latestNotification.date : "";
    const response = await client.get(
      `/fakeApi/notifications?since=${latestTimestamp}`
    );
    return response.data;
  }
);

const notificationsSlice = createSlice({
  name: "notifications",
  initialState: [],
  reducers: {},
  extraReducers: {
    [fetchNotifications.fulfilled]: (state, action) => {
      state.push(...action.payload);
      // Sort with newest first
      state.sort((a, b) => b.date.localeCompare(a.date));
    },
  },
});

export default notificationsSlice.reducer;

export const selectAllNotifications = (state) => state.notifications;
```

As with the other slices, import `notificationsReducer` into `store.js` and add it to the `configureStore()` call.

We've written an async thunk called `fetchNotifications`, which will retrieve a list of new notifications from the server. As part of that, we want to use the creation timestamp of the most recent notification as part of our request, so that the server knows it should only send back notifications that are actually new.

We know that we will be getting back an array of notifications, so we can pass them as separate arguments to `state.push()`, and the array will add each item. We also want to make sure that they're sorted so that the most recent notification is last in the array, just in case the server were to send them out of order. (As a reminder, `array.sort()` always mutates the existing array - this is only safe because we're using `createSlice` and Immer inside.)

### Thunk Arguments

If you look at our `fetchNotifications` thunk, it has something new that we haven't seen before. Let's talk about thunk arguments for a minute.

We've already seen that we can pass an argument into a thunk action creator when we dispatch it, like `dispatch(addPost(newPost))`. For `createAsyncThunk` specifically, you can only pass in one argument, and whatever we pass in becomes the first argument of the payload creation callback.

The second argument to our payload creator is a `thunkAPI` object containing several useful functions and pieces of information:

- `dispatch` and `getState`: the actual `dispatch` and `getState` methods from our Redux store. You can use these inside the thunk to dispatch more actions, or get the latest Redux store state (such as reading an updated value after another action is dispatched).
- `extra`: the "extra argument" that can be passed into the thunk middleware when creating the store. This is typically some kind of API wrapper, such as a set of functions that know how to make API calls to your application's server and return data, so that your thunks don't have to have all the URLs and query logic directly inside.
- `requestId`: a unique random ID value for this thunk call. Useful for tracking status of an individual request.
- `signal`: An `AbortController.signal` function that can be used to cancel an in-progress request.
- `rejectWithValue`: a utility that helps customize the contents of a `rejected` action if the thunk receives an error.

(If you're writing a thunk by hand instead of using `createAsyncThunk`, the thunk function will get`(dispatch, getState)` as separate arguments, instead of putting them together in one object.)

:::info

For more details on these arguments and how to handle canceling thunks and requests, see [the `createAsyncThunk` API reference page](https://redux-toolkit.js.org/api/createAsyncThunk).

:::

In this case, we know that the list of notifications is in our Redux store state, and that the latest notification should be first in the array. We can destructure the `getState` function out of the `thunkAPI` object, call it to read the state value, and use the `selectAllNotifications` selector to give us just the array of notifications. Since the array of notifications is sorted newest first, we can grab the latest one using array destructuring.

### Adding the Notifications List

With that slice created, we can add a `<NotificationsList>` component:

```jsx title="features/notifications/NotificationsList.js"
import React from "react";
import { useSelector } from "react-redux";
import { formatDistanceToNow, parseISO } from "date-fns";

import { selectAllUsers } from "../users/usersSlice";

import { selectAllNotifications } from "./notificationsSlice";

export const NotificationsList = () => {
  const notifications = useSelector(selectAllNotifications);
  const users = useSelector(selectAllUsers);

  const renderedNotifications = notifications.map((notification) => {
    const date = parseISO(notification.date);
    const timeAgo = formatDistanceToNow(date);
    const user = users.find((user) => user.id === notification.user) || {
      name: "Unknown User",
    };

    return (
      <div key={notification.id} className="notification">
        <div>
          <b>{user.name}</b> {notification.message}
        </div>
        <div title={notification.date}>
          <i>{timeAgo} ago</i>
        </div>
      </div>
    );
  });

  return (
    <section className="notificationsList">
      <h2>Notifications</h2>
      {renderedNotifications}
    </section>
  );
};
```

Once again, we're reading a list of items from the Redux state, mapping over them, and rendering content for each item.

We also need to update the `<Navbar>` to add a "Notifications" tab, and a new button to fetch some notifications:

```jsx title="app/Navbar.js"
import React from "react";
// highlight-next-line
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

// highlight-next-line
import { fetchNotifications } from "../features/notifications/notificationsSlice";

export const Navbar = () => {
  // highlight-start
  const dispatch = useDispatch();

  const fetchNewNotifications = () => {
    dispatch(fetchNotifications());
  };
  // highlight-end

  return (
    <nav>
      <section>
        <h1>Redux Essentials Example</h1>

        <div className="navContent">
          <div className="navLinks">
            <Link to="/">Posts</Link>
            <Link to="/users">Users</Link>
            // highlight-next-line
            <Link to="/notifications">Notifications</Link>
          </div>
          // highlight-start
          <button className="button" onClick={fetchNewNotifications}>
            Refresh Notifications
          </button>
          // highlight-end
        </div>
      </section>
    </nav>
  );
};
```

Lastly, we need to update `App.js` with the "Notifications" route so we can navigate to it:

```js title="App.js"
// omit imports
// highlight-next-line
import { NotificationsList } from "./features/notifications/NotificationsList";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          // highlight-next-line
          <Route exact path="/notifications" component={NotificationsList} />
          // omit existing routes
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}
```

Here's what the "Notifications" tab looks like so far:

![Initial Notifications tab](/img/tutorials/essentials/notifications-initial.png)

### Showing New Notifications

Each time we click "Refresh Notifications", a few more notification entries will be added to our list. In a real app, those could be coming from the server while we're looking at other parts of the UI. We can do something similar by clicking "Refresh Notifications" while we're looking at the `<PostsList>` or `<UserPage>`. But, right now we have no idea how many notifications just arrived, and if we keep clicking the button, there could be many notifications we haven't read yet. Let's add some logic to keep track of which notifications have been read and which of them are "new". That will let us show the count of "Unread" notifications as a badge on our "Notifications" tab in the navbar, and display new notifications in a different color.

Our fake API is already sending back the notification entries with `isNew` and `read` fields, so we can use those in our code.

First, we'll update `notificationsSlice` to have a reducer that marks all notifications as read, and some logic to handle marking existing notifications as "not new":

```js title="features/notifications/notificationsSlice.js"
const notificationsSlice = createSlice({
  name: "notifications",
  initialState: [],
  reducers: {
    // highlight-start
    allNotificationsRead(state, action) {
      state.forEach((notification) => {
        notification.read = true;
      });
    },
    // highlight-end
  },
  extraReducers(builder) {
    builder.addCase(fetchNotifications.fulfilled, (state, action) => {
      state.push(...action.payload);
      // highlight-start
      state.forEach((notification) => {
        // Any notifications we've read are no longer new
        notification.isNew = !notification.read;
      });
      // highlight-end
      // Sort with newest first
      state.sort((a, b) => b.date.localeCompare(a.date));
    });
  },
});

// highlight-next-line
export const { allNotificationsRead } = notificationsSlice.actions;

export default notificationsSlice.reducer;
```

We want to mark these notifications as read whenever our `<NotificationsList>` component renders, either because we clicked on the tab to view the notifications, or because we already have it open and we just received some additional notifications. We can do this by dispatching `allNotificationsRead` any time this component re-renders. In order to avoid flashing of old data as this updates, we'll dispatch the action in a `useLayoutEffect` hook. We also want to add an additional classname to any notification list entries in the page, to highlight them:

```jsx title="features/notifications/NotificationsList.js"
import React, { useLayoutEffect } from "react";
// highlight-next-line
import { useSelector, useDispatch } from "react-redux";
import { formatDistanceToNow, parseISO } from "date-fns";
// highlight-next-line
import classnames from "classnames";

import { selectAllUsers } from "../users/usersSlice";

// highlight-start
import {
  selectAllNotifications,
  allNotificationsRead,
} from "./notificationsSlice";
// highlight-end

export const NotificationsList = () => {
  // highlight-next-line
  const dispatch = useDispatch();
  const notifications = useSelector(selectAllNotifications);
  const users = useSelector(selectAllUsers);

  // highlight-start
  useLayoutEffect(() => {
    dispatch(allNotificationsRead());
  });
  // highlight-end

  const renderedNotifications = notifications.map((notification) => {
    const date = parseISO(notification.date);
    const timeAgo = formatDistanceToNow(date);
    const user = users.find((user) => user.id === notification.user) || {
      name: "Unknown User",
    };

    // highlight-start
    const notificationClassname = classnames("notification", {
      new: notification.isNew,
    });

    return (
      <div key={notification.id} className={notificationClassname}>
        // highlight-end
        <div>
          <b>{user.name}</b> {notification.message}
        </div>
        <div title={notification.date}>
          <i>{timeAgo} ago</i>
        </div>
      </div>
    );
  });

  return (
    <section className="notificationsList">
      <h2>Notifications</h2>
      {renderedNotifications}
    </section>
  );
};
```

This works, but actually has a slightly surprising bit of behavior. Any time there are new notifications (either because we've just switched to this tab, or we've fetched some new notifications from the API), you'll actually see _two_ `"notifications/allNotificationsRead"` actions dispatched. Why is that?

Let's say we have fetched some notifications while looking at the `<PostsList>`, and then click the "Notifications" tab. The `<NotificationsList>` component will mount, and the `useLayoutEffect` callback will run after that first render and dispatch `allNotificationsRead`. Our `notificationsSlice` will handle that by updating the notification entries in the store. This creates a new `state.notifications` array containing the immutably-updated entries, which forces our component to render again because it sees a new array returned from the `useSelector`, and the `useLayoutEffect` hook runs again and dispatches `allNotificationsRead` a second time. The reducer runs again, but this time no data changes, so the component doesn't re-render.

There's a couple ways we could potentially avoid that second dispatch, like splitting the logic to dispatch once when the component mounts, and only dispatch again if the size of the notifications array changes. But, this isn't actually hurting anything, so we can leave it alone.

This does actually show that **it's possible to dispatch an action and not have _any_ state changes happen at all**. Remember, **it's always up to your reducers to decide _if_ any state actually needs to be updated, and "nothing needs to happen" is a valid decision for a reducer to make**.

Here's how the notifications tab looks now that we've got the "new/read" behavior working:

![New notifications](/img/tutorials/essentials/notifications-new.png)

The last thing we need to do before we move on is to add the badge on our "Notifications" tab in the navbar. This will show us the count of "Unread" notifications when we are in other tabs:

```jsx title="app/Navbar.js"
// omit imports
// highlight-next-line
import { useDispatch, useSelector } from "react-redux";

// highlight-start
import {
  fetchNotifications,
  selectAllNotifications,
} from "../features/notifications/notificationsSlice";
// highlight-end

export const Navbar = () => {
  const dispatch = useDispatch();
  // highlight-start
  const notifications = useSelector(selectAllNotifications);
  const numUnreadNotifications = notifications.filter((n) => !n.read).length;
  // highlight-end
  // omit component contents
  // highlight-start
  let unreadNotificationsBadge;

  if (numUnreadNotifications > 0) {
    unreadNotificationsBadge = (
      <span className="badge">{numUnreadNotifications}</span>
    );
  }
  // highlight-end
  return (
    <nav>
      // omit component contents
      <div className="navLinks">
        <Link to="/">Posts</Link>
        <Link to="/users">Users</Link>
        // highlight-start
        <Link to="/notifications">
          Notifications {unreadNotificationsBadge}
        </Link>
        // highlight-end
      </div>
      // omit component contents
    </nav>
  );
};
```

## Improving Render Performance

Our application is looking useful, but we've actually got a couple flaws in when and how our components re-render. Let's look at those problems, and talk about some ways to improve the performance.

### Investigating Render Behavior

We can use the React DevTools Profiler to view some graphs of what components re-render when state is updated. Try clicking over to the `<UserPage>` for a single user. Open up your browser's DevTools, and in the React "Profiler" tab, click the circle "Record" button in the upper-left. Then, click the "Refresh Notifications" button in our app, and stop the recording in the React DevTools Profiler. You should see a chart that looks like this:

![React DevTools Profiler render capture - <UserPage>](/img/tutorials/essentials/userpage-rerender.png)

We can see that the `<Navbar>` re-rendered, which makes sense because it had to show the updated "unread notifications" badge in the tab. But, why did our `<UserPage>` re-render?

If we inspect the last couple dispatched actions in the Redux DevTools, we can see that only the notifications state updated. Since the `<UserPage>` doesn't read any notifications, it shouldn't have re-rendered. Something must be wrong with the component.

If we look at `<UserPage>` carefully, there's a specific problem:

```jsx title="features/UserPage.js
export const UserPage = ({ match }) => {
  const { userId } = match.params;

  const user = useSelector((state) => selectUserById(state, userId));

  // highlight-start
  const postsForUser = useSelector((state) => {
    const allPosts = selectAllPosts(state);
    return allPosts.filter((post) => post.user === userId);
  });
  // highlight-end

  // omit rendering logic
};
```

We know that `useSelector` will re-run every time an action is dispatched, and that it forces the component to re-render if we return a new reference value.

We're calling `filter()` inside of our `useSelector` hook, so that we only return the list of posts that belong to this user. Unfortunately, **this means that `useSelector` _always_ returns a new array reference, and so our component will re-render after _every_ action even if the posts data hasn't changed!**.

### Memoizing Selector Functions

What we really need is a way to only calculate the new filtered array if either `state.posts` or `userId` have changed. If they _haven't_ changed, we want to return the same filtered array reference as the last time.

This idea is called "memoization". We want to save a previous set of inputs and the calculated result, and if the inputs are the same, return the previous result instead of recalculating it again.

So far, we've been writing selector functions by ourselves, and just so that we don't have to copy and paste the code for reading data from the store. It would be great if there was a way to make our selector functions memoized.

**[Reselect](https://github.com/reduxjs/reselect) is a library for creating memoized selector functions**, and was specifically designed to be used with Redux. It has a `createSelector` function that generates memoized selectors that will only recalculate results when the inputs change. Redux Toolkit [exports the `createSelector` function](https://redux-toolkit.js.org/api/createSelector), so we already have it available.

Let's make a new `selectPostsByUser` selector function, using Reselect, and use it here.

```js title="features/posts/postsSlice.js"
// highlight-next-line
import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from "@reduxjs/toolkit";

// omit slice logic

export const selectAllPosts = (state) => state.posts.posts;

export const selectPostById = (state, postId) =>
  state.posts.posts.find((post) => post.id === postId);

// highlight-start
export const selectPostsByUser = createSelector(
  [selectAllPosts, (state, userId) => userId],
  (posts, userId) => posts.filter((post) => post.user === userId)
);
// highlight-end
```

`createSelector` takes one or more "input selector" functions as argument, plus an "output selector" function. When we call `selectPostsByUser(state, userId)`, `createSelector` will pass all of the arguments into each of our input selectors. Whatever those input selectors return becomes the arguments for the output selector.

In this case, we know that we need the array of all posts and the user ID as the two arguments for our output selector. We can reuse our existing `selectAllPosts` selector to extract the posts array. Since the user ID is the second argument we're passing into `selectPostsByUser`, we can write a small selector that just returns `userId`.

Our output selector then takes `posts` and `userId`, and returns the filtered array of posts for just that user.

If we try calling `selectPostsByUser` multiple times, it will only re-run the output selector if either `posts` or `userId` has changed:

```js
const state1 = getState();
// Output selector runs, because it's the first call
selectPostsByUser(state1, "user1");
// Output selector does _not_ run, because the arguments haven't changed
selectPostsByUser(state1, "user1");
// Output selector runs, because `userId` changed
selectPostsByUser(state1, "user2");

dispatch(reactionAdded());
const state2 = getState();
// Output selector does not run, because `posts` and `userId` are the same
selectPostsByUser(state2, "user2");

// Add some more posts
dispatch(addNewPost());
const state3 = getState();
// Output selector runs, because `posts` has changed
selectPostsByUser(state3, "user2");
```

If we call this selector in `<UserPage>` and re-run the React profiler while fetching notifications, we should see that `<UserPage>` doesn't re-render this time:

```jsx
export const UserPage = ({ match }) => {
  const { userId } = match.params;

  const user = useSelector((state) => selectUserById(state, userId));

  // highlight-start
  const postsForUser = useSelector((state) => selectPostsByUser(state, userId));
  // highlight-end

  // omit rendering logic
};
```

Memoized selectors are a valuable tool for improving performance in a React+Redux application, because they can help us avoid unnecessary re-renders, and also avoid doing potentially complex or expensive calculations if the input data hasn't changed.

:::info

For more details on why we use selector functions and how to write memoized selectors with Reselect, see:

- [Using Redux: Deriving Data with Selectors](../../usage/deriving-data-selectors.md)

:::

### Investigating the Posts List

If we go back to our `<PostsList>` and try clicking a reaction button on one of the posts while capturing a React profiler trace, we'll see that not only did the `<PostsList>` and the updated `<PostExcerpt>` instance render, _all_ of the `<PostExcerpt>` components rendered:

![React DevTools Profiler render capture - <PostsList>](/img/tutorials/essentials/postslist-rerender.png)

Why is that? None of the other posts changed, so why would they need to re-render?

[**React's default behavior is that when a parent component renders, React will recursively render all child components inside of it!**](https://blog.isquaredsoftware.com/2020/05/blogged-answers-a-mostly-complete-guide-to-react-rendering-behavior/). The immutable update of one post object also created a new `posts` array. Our `<PostsList>` had to re-render because the `posts` array was a new reference, so after it rendered, React continued downwards and re-rendered all of the `<PostExcerpt>` components too.

This isn't a serious problem for our small example app, but in a larger real-world app, we might have some very long lists or very large component trees, and having all those extra components re-render might slow things down.

There's a few different ways we could optimize this behavior in `<PostsList>`.

First, we could wrap the `<PostExcerpt>` component in [`React.memo()`](https://reactjs.org/docs/react-api.html#reactmemo), which will ensure that the component inside of it only re-renders if the props have actually changed. This will actually work quite well - try it out and see what happens:

```jsx title="features/posts/PostsList.js
// highlight-next-line
let PostExcerpt = ({ post }) => {
  // omit logic
};

// highlight-next-line
PostExcerpt = React.memo(PostExcerpt);
```

Another option is to rewrite `<PostsList>` so that it only selects a list of post IDs from the store instead of the entire `posts` array, and rewrite `<PostExcerpt>` so that it receives a `postId` prop and calls `useSelector` to read the post object it needs. If `<PostsList>` gets the same list of IDs as before, it won't need to re-render, and so only our one changed `<PostExcerpt>` component should have to render.

Unfortunately, this gets tricky because we also need to have all our posts sorted by date and rendered in the right order. We could update our `postsSlice` to keep the array sorted at all times, so we don't have to sort it in the component, and use a memoized selector to extract just the list of post IDs. We could also [customize the comparison function that `useSelector` runs to check the results](https://react-redux.js.org/api/hooks#equality-comparisons-and-updates), like `useSelector(selectPostIds, shallowEqual)`, so that will skip re-rendering if the _contents_ of the IDs array haven't changed.

The last option is to find some way to have our reducer keep a separate array of IDs for all the posts, and only modify that array when posts are added or removed, and do the same rewrite of `<PostsList>` and `<PostExcerpt>`. This way, `<PostsList>` only needs to re-render when that IDs array changes.

Conveniently, Redux Toolkit has a `createEntityAdapter` function that will help us do just that.

## Normalizing Data

You've seen that a lot of our logic has been looking up items by their ID field. Since we've been storing our data in arrays, that means we have to loop over all the items in the array using `array.find()` until we find the item with the ID we're looking for.

Realistically, this doesn't take very long, but if we had arrays with hundreds or thousands of items inside, looking through the entire array to find one item becomes wasted effort. What we need is a way to look up a single item based on its ID, directly, without having to check all the other items. This process is known as "normalization".

### Normalized State Structure

"Normalized state" means that:

- We only have one copy of each particular piece of data in our state, so there's no duplication
- Data that has been normalized is kept in a lookup table, where the item IDs are the keys, and the items themselves are the values.
- There may also be an array of all of the IDs for a particular item type

JavaScript objects can be used as lookup tables, similar to "maps" or "dictionaries" in other languages. Here's what the normalized state for a group of `user` objects might look like:

```js
{
  users: {
    ids: ["user1", "user2", "user3"],
    entities: {
      "user1": {id: "user1", firstName, lastName},
      "user2": {id: "user2", firstName, lastName},
      "user3": {id: "user3", firstName, lastName},
    }
  }
}
```

This makes it easy to find a particular `user` object by its ID, without having to loop through all the other user objects in an array:

```js
const userId = "user2";
const userObject = state.users.entities[userId];
```

:::info

For more details on why normalizing state is useful, see [Normalizing State Shape](../../usage/structuring-reducers/NormalizingStateShape.md) and the Redux Toolkit Usage Guide section on [Managing Normalized Data](https://redux-toolkit.js.org/usage/usage-guide#managing-normalized-data).

:::

### Managing Normalized State with `createEntityAdapter`

Redux Toolkit's `createEntityAdapter` API provides a standardized way to store your data in a slice by taking a collection of items and putting them into the shape of `{ ids: [], entities: {} }`. Along with this predefined state shape, it generates a set of reducer functions and selectors that know how to work with that data.

This has several benefits:

- We don't have to write the code to manage the normalization ourselves
- `createEntityAdapter`'s pre-built reducer functions handle common cases like "add all these items", "update one item", or "remove multiple items"
- `createEntityAdapter` can keep the ID array in a sorted order based on the contents of the items, and will only update that array if items are added / removed or the sorting order changes.

`createEntityAdapter` accepts an options object that may include a `sortComparer` function, which will be used to keep the item IDs array in sorted order by comparing two items (and works the same way as `Array.sort()`).

It returns an object that contains [a set of generated reducer functions for adding, updating, and removing items from an entity state object](https://redux-toolkit.js.org/api/createEntityAdapter#crud-functions). These reducer functions can either be used as a case reducer for a specific action type, or as a "mutating" utility function within another reducer in `createSlice`.

The adapter object also has a `getSelectors` function. You can pass in a selector that returns this particular slice of state from the Redux root state, and it will generate selectors like `selectAll` and `selectById`.

Finally, the adapter object has a `getInitialState` function that generates an empty `{ids: [], entities: {}}` object. You can pass in more fields to `getInitialState`, and those will be merged in.

### Updating the Posts Slice

With that in mind, let's update our `postsSlice` to use `createEntityAdapter`:

```js title="features/posts/postsSlice.js"
import {
  // highlight-next-line
  createEntityAdapter,
  // omit other imports
} from "@reduxjs/toolkit";

// highlight-start
const postsAdapter = createEntityAdapter({
  sortComparer: (a, b) => b.date.localeCompare(a.date),
});

const initialState = postsAdapter.getInitialState({
  status: "idle",
  error: null,
});
// highlight-end

// omit thunks

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    reactionAdded(state, action) {
      const { postId, reaction } = action.payload;
      // highlight-next-line
      const existingPost = state.entities[postId];
      if (existingPost) {
        existingPost.reactions[reaction]++;
      }
    },
    postUpdated(state, action) {
      const { id, title, content } = action.payload;
      // highlight-next-line
      const existingPost = state.entities[id];
      if (existingPost) {
        existingPost.title = title;
        existingPost.content = content;
      }
    },
  },
  extraReducers(builder) {
    // omit other reducers

    builder
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Add any fetched posts to the array
        // highlight-start
        // Use the `upsertMany` reducer as a mutating update utility
        postsAdapter.upsertMany(state, action.payload);
        // highlight-end
      })
      // highlight-start
      // Use the `addOne` reducer for the fulfilled case
      .addCase(addNewPost.fulfilled, postsAdapter.addOne);
    // highlight-end
  },
});

export const { postAdded, postUpdated, reactionAdded } = postsSlice.actions;

export default postsSlice.reducer;

// highlight-start
// Export the customized selectors for this adapter using `getSelectors`
export const {
  selectAll: selectAllPosts,
  selectById: selectPostById,
  selectIds: selectPostIds,
  // Pass in a selector that returns the posts slice of state
} = postsAdapter.getSelectors((state) => state.posts);
// highlight-end

export const selectPostsByUser = createSelector(
  [selectAllPosts, (state, userId) => userId],
  (posts, userId) => posts.filter((post) => post.user === userId)
);
```

There's a lot going on there! Let's break it down.

First, we import `createEntityAdapter`, and call it to create our `postsAdapter` object. We know that we want to keep an array of all post IDs sorted with the newest post first, so we pass in a `sortComparer` function that will sort newer items to the front based on the `post.date` field.

`getInitialState()` returns an empty `{ids: [], entities: {}}` normalized state object. Our `postsSlice` needs to keep the `status` and `error` fields for loading state too, so we pass those in to `getInitialState()`.

Now that our posts are being kept as a lookup table in `state.entities`, we can change our `reactionAdded` and `postUpdated` reducers to directly look up the right posts by their IDs, instead of having to loop over the old `posts` array.

When we receive the `fetchPosts.fulfilled` action, we can use the `postsAdapter.upsertMany` function to add all of the incoming posts to the state, by passing in the draft `state` and the array of posts in `action.payload`. If there's any items in `action.payload` that already existing in our state, the `upsertMany` function will merge them together based on matching IDs.

When we receive the `addNewPost.fulfilled` action, we know we need to add that one new post object to our state. We can use the adapter functions as reducers directly, so we'll pass `postsAdapter.addOne` as the reducer function to use to handle that action.

Finally, we can replace the old hand-written `selectAllPosts` and `selectPostById` selector functions with the ones generated by `postsAdapter.getSelectors`. Since the selectors are called with the root Redux state object, they need to know where to find our posts data in the Redux state, so we pass in a small selector that returns `state.posts`. The generated selector functions are always called `selectAll` and `selectById`, so we can use ES6 destructuring syntax to rename them as we export them and match the old selector names. We'll also export `selectPostIds` the same way, since we want to read the list of sorted post IDs in our `<PostsList>` component.

### Optimizing the Posts List

Now that our posts slice is using `createEntityAdapter`, we can update `<PostsList>` to optimize its rendering behavior.

We'll update `<PostsList>` to read just the sorted array of post IDs, and pass `postId` to each `<PostExcerpt>`:

```jsx title="features/posts/PostsList.js"
// omit other imports

// highlight-start
import {
  selectAllPosts,
  fetchPosts,
  selectPostIds,
  selectPostById,
} from "./postsSlice";

let PostExcerpt = ({ postId }) => {
  const post = useSelector((state) => selectPostById(state, postId));
  // highlight-end
  // omit rendering logic
};

export const PostsList = () => {
  const dispatch = useDispatch();
  // highlight-next-line
  const orderedPostIds = useSelector(selectPostIds);

  // omit other selections and effects

  if (postStatus === "loading") {
    content = <Spinner text="Loading..." />;
  } else if (postStatus === "succeeded") {
    // highlight-start
    content = orderedPostIds.map((postId) => (
      <PostExcerpt key={postId} postId={postId} />
    ));
    // highlight-end
  } else if (postStatus === "error") {
    content = <div>{error}</div>;
  }

  // omit other rendering
};
```

Now, if we try clicking a reaction button on one of the posts while capturing a React component performance profile, we should see that _only_ that one component re-rendered:

![React DevTools Profiler render capture - optimized <PostsList>](/img/tutorials/essentials/postslist-optimized.png)

## Converting Other Slices

We're almost done. As a final cleanup step, we'll update our other two slices to use `createEntityAdapter` as well.

### Converting the Users Slice

The `usersSlice` is fairly small, so we've only got a few things to change:

```js title="features/users/usersSlice.js"
import {
  createSlice,
  createAsyncThunk,
  // highlight-next-line
  createEntityAdapter,
} from "@reduxjs/toolkit";
import { client } from "../../api/client";

// highlight-start
const usersAdapter = createEntityAdapter();

const initialState = usersAdapter.getInitialState();
// highlight-end

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await client.get("/fakeApi/users");
  return response.users;
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers(builder) {
    // highlight-next-line
    builder.addCase(fetchUsers.fulfilled, usersAdapter.setAll);
  },
});

export default usersSlice.reducer;

// highlight-start
export const { selectAll: selectAllUsers, selectById: selectUserById } =
  usersAdapter.getSelectors((state) => state.users);
// highlight-end
```

The only action we're handling here always replaces the entire list of users with the array we fetched from the server. We can use `usersAdapter.setAll` to implement that instead.

Our `<AddPostForm>` is still trying to read `state.users` as an array, as is `<PostAuthor>`. Update them to use `selectAllUsers` and `selectUserById`, respectively.

### Converting the Notifications Slice

Last but not least, we'll update `notificationsSlice` as well:

```js title="features/notifications/notificationsSlice.js"
import {
  createSlice,
  createAsyncThunk,
  // highlight-next-line
  createEntityAdapter,
} from "@reduxjs/toolkit";

import { client } from "../../api/client";

// highlight-start
const notificationsAdapter = createEntityAdapter({
  sortComparer: (a, b) => b.date.localeCompare(a.date),
});
// highlight-end

// omit fetchNotifications thunk

const notificationsSlice = createSlice({
  name: "notifications",
  // highlight-next-line
  initialState: notificationsAdapter.getInitialState(),
  reducers: {
    allNotificationsRead(state, action) {
      // highlight-start
      Object.values(state.entities).forEach((notification) => {
        notification.read = true;
      });
      // highlight-end
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchNotifications.fulfilled, (state, action) => {
      // highlight-start
      Object.values(state.entities).forEach((notification) => {
        // Any notifications we've read are no longer new
        notification.isNew = !notification.read;
      });
      notificationsAdapter.upsertMany(state, action.payload);
      // highlight-end
    });
  },
});

export const { allNotificationsRead } = notificationsSlice.actions;

export default notificationsSlice.reducer;

// highlight-start
export const { selectAll: selectAllNotifications } =
  notificationsAdapter.getSelectors((state) => state.notifications);
// highlight-end
```

We again import `createEntityAdapter`, call it, and call `notificationsAdapter.getInitialState()` to help set up the slice.

Ironically, we do have a couple places in here where we need to loop over all notification objects and update them. Since those are no longer being kept in an array, we have to use `Object.values(state.entities)` to get an array of those notifications and loop over that. On the other hand, we can replace the previous fetch update logic with `notificationsAdapter.upsertMany`.

And with that... we're done learning the core concepts and functionality of Redux Toolkit!

## What You've Learned

We've built a lot of new behavior in this section. Let's see what how the app looks with all those changes:

<iframe
  class="codesandbox"
  src="https://codesandbox.io/embed/github/reduxjs/redux-essentials-example-app/tree/checkpoint-4-entitySlices/?fontsize=14&hidenavigation=1&theme=dark&runonclick=1"
  title="redux-essentials-example-app"
  allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
  sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
></iframe>

Here's what we covered in this section:

:::tip Summary

- **Memoized selector functions can be used to optimize performance**
  - Redux Toolkit re-exports the `createSelector` function from Reselect, which generates memoized selectors
  - Memoized selectors will only recalculate the results if the input selectors return new values
  - Memoization can skip expensive calculations, and ensure the same result references are returned
- **There are multiple patterns you can use to optimize React component rendering with Redux**
  - Avoid creating new object/array references inside of `useSelector` - those will cause unnecessary re-renders
  - Memoized selector functions can be passed to `useSelector` to optimize rendering
  - `useSelector` can accept an alternate comparison function like `shallowEqual` instead of reference equality
  - Components can be wrapped in `React.memo()` to only re-render if their props change
  - List rendering can be optimized by having list parent components read just an array of item IDs, passing the IDs to list item children, and retrieving items by ID in the children
- **Normalized state structure is a recommended approach for storing items**
  - "Normalization" means no duplication of data, and keeping items stored in a lookup table by item ID
  - Normalized state shape usually looks like `{ids: [], entities: {}}`
- **Redux Toolkit's `createEntityAdapter` API helps manage normalized data in a slice**
  - Item IDs can be kept in sorted order by passing in a `sortComparer` option
  - The adapter object includes:
    - `adapter.getInitialState`, which can accept additional state fields like loading state
    - Prebuilt reducers for common cases, like `setAll`, `addMany`, `upsertOne`, and `removeMany`
    - `adapter.getSelectors`, which generates selectors like `selectAll` and `selectById`

:::

## What's Next?

There's a couple more sections in the Redux Essentials tutorial, but this is a good spot to pause and put what you've learned into practice.

The concepts we've covered in this tutorial so far should be enough to get you started building your own applications using React and Redux. Now's a great time to try working on a project yourself to solidify these concepts and see how they work in practice. If you're not sure what kind of a project to build, see [this list of app project ideas](https://github.com/florinpop17/app-ideas) for some inspiration.

**Redux Toolkit also includes a powerful data fetching and caching API called "RTK Query"**. RTK Query is an optional addon that can completely eliminate the need to write any data fetching logic yourself. In [Part 7: RTK Query Basics](./part-7-rtk-query-basics.md), you'll learn what RTK Query is, what problems it solves, and how to use it to fetch and use cached data in your application.

The Redux Essentials tutorial focused on "how to use Redux correctly", rather than "how it works" or "why it works this way". In particular, Redux Toolkit is a higher-level set of abstractions and utilities, and it's helpful to understand what the abstractions in RTK are actually doing for you. Reading through the ["Redux Fundamentals" tutorial](../fundamentals/part-1-overview.md) will help you understand how to write Redux code "by hand", and why we recommend Redux Toolkit as the default way to write Redux logic.

The [Using Redux](../../usage/index.md) section has information on a number of important concepts, like [how to structure your reducers](../../usage/structuring-reducers/StructuringReducers.md), and [our Style Guide page](../../style-guide/style-guide) has important information on our recommended patterns and best practices.

If you'd like to know more about _why_ Redux exists, what problems it tries to solve, and how it's meant to be used, see Redux maintainer Mark Erikson's posts on [The Tao of Redux, Part 1: Implementation and Intent](https://blog.isquaredsoftware.com/2017/05/idiomatic-redux-tao-of-redux-part-1/) and [The Tao of Redux, Part 2: Practice and Philosophy](https://blog.isquaredsoftware.com/2017/05/idiomatic-redux-tao-of-redux-part-2/).

If you're looking for help with Redux questions, come join [the `#redux` channel in the Reactiflux server on Discord](https://www.reactiflux.com).

**Thanks for reading through this tutorial, and we hope you enjoy building applications with Redux!**

---

id: part-7-rtk-query-basics
title: 'Redux Essentials, Part 7: RTK Query Basics'
sidebar_label: 'RTK Query Basics'
description: 'The official Redux Essentials tutorial: learn how to use RTK Query for data fetching'

---

import { DetailedExplanation } from '../../components/DetailedExplanation'

:::tip What You'll Learn

- How RTK Query simplifies data fetching for Redux apps
- How to set up RTK Query
- How to use RTK Query for basic data fetching and update requests

:::

:::info Prerequisites

- Completion of the previous sections of this tutorial to understand Redux Toolkit usage patterns

:::

## Introduction

in [Part 5: Async Logic and Data Fetching](./part-5-async-logic.md) and [Part 6: Performance and Normalization](./part-6-performance-normalization.md), we saw the standard patterns used for data fetching and caching with Redux. Those patterns include using async thunks to fetch data, dispatching actions with the results, managing request loading state in the store, and normalizing the cached data to enable easier lookups and updates of individual items by ID.

In this section, we'll look at how to use RTK Query, a data fetching and caching solution designed for Redux applications, and see how it simplifies the process of fetching data and using it in our components.

## RTK Query Overview

**RTK Query** is a powerful data fetching and caching tool. It is designed to simplify common cases for loading data in a web application, **eliminating the need to hand-write data fetching & caching logic yourself**.

RTK Query is **an optional addon included in the Redux Toolkit package**, and its functionality is built on top of the other APIs in Redux Toolkit.

### Motivation

Web applications normally need to fetch data from a server in order to display it. They also usually need to make updates to that data, send those updates to the server, and keep the cached data on the client in sync with the data on the server. This is made more complicated by the need to implement other behaviors used in today's applications:

- Tracking loading state in order to show UI spinners
- Avoiding duplicate requests for the same data
- Optimistic updates to make the UI feel faster
- Managing cache lifetimes as the user interacts with the UI

We've already seen how we can implement these behaviors using Redux Toolkit.

However, historically Redux has never included anything built in to help _completely_ solve these use cases. Even when we use `createAsyncThunk` together with `createSlice`, there's still a fair amount of manual work involved in making requests and managing loading state. We have to create the async thunk, make the actual request, pull relevant fields out of the response, add loading state fields, add handlers in `extraReducers` to handle the `pending/fulfilled/rejected` cases, and actually write the proper state updates.

Over the last couple years, the React community has come to realize that **"data fetching and caching" is really a different set of concerns than "state management"**. While you can use a state management library like Redux to cache data, the use cases are different enough that it's worth using tools that are purpose-built for the data fetching use case.

RTK Query takes inspiration from other tools that have pioneered solutions for data fetching, like Apollo Client, React Query, Urql, and SWR, but adds a unique approach to its API design:

- The data fetching and caching logic is built on top of Redux Toolkit's `createSlice` and `createAsyncThunk` APIs
- Because Redux Toolkit is UI-agnostic, RTK Query's functionality can be used with any UI layer
- API endpoints are defined ahead of time, including how to generate query parameters from arguments and transform responses for caching
- RTK Query can also generate React hooks that encapsulate the entire data fetching process, provide `data` and `isFetching` fields to components, and manage the lifetime of cached data as components mount and unmount
- RTK Query provides "cache entry lifecycle" options that enable use cases like streaming cache updates via websocket messages after fetching the initial data
- We have early working examples of code generation of API slices from OpenAPI and GraphQL schemas
- Finally, RTK Query is completely written in TypeScript, and is designed to provide an excellent TS usage experience

### What's included

#### APIs

RTK Query is included within the installation of the core Redux Toolkit package. It is available via either of the two entry points below:

```ts no-transpile
import { createApi } from "@reduxjs/toolkit/query";

/* React-specific entry point that automatically generates
   hooks corresponding to the defined endpoints */
import { createApi } from "@reduxjs/toolkit/query/react";
```

RTK Query primarily consists of two APIs:

- [`createApi()`](https://redux-toolkit.js.org/rtk-query/api/createApi): The core of RTK Query's functionality. It allows you to define a set of endpoints describe how to retrieve data from a series of endpoints, including configuration of how to fetch and transform that data. In most cases, you should use this once per app, with "one API slice per base URL" as a rule of thumb.
- [`fetchBaseQuery()`](https://redux-toolkit.js.org/rtk-query/api/fetchBaseQuery): A small wrapper around [`fetch`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) that aims to simplify requests. Intended as the recommended `baseQuery` to be used in `createApi` for the majority of users.

#### Bundle Size

RTK Query adds a fixed one-time amount to your app's bundle size. Since RTK Query builds on top of Redux Toolkit and React-Redux, the added size varies depending on whether you are already using those in your app. The estimated min+gzip bundle sizes are:

- If you are using RTK already: ~9kb for RTK Query and ~2kb for the hooks.
- If you are not using RTK already:
  - Without React: 17 kB for RTK+dependencies+RTK Query
  - With React: 19kB + React-Redux, which is a peer dependency

Adding additional endpoint definitions should only increase size based on the actual code inside the `endpoints` definitions, which will typically be just a few bytes.

The functionality included in RTK Query quickly pays for the added bundle size, and the elimination of hand-written data fetching logic should be a net improvement in size for most meaningful applications.

### Thinking in RTK Query Caching

Redux has always had an emphasis on predictability and explicit behavior. There's no "magic" involved in Redux - you should be able to understand what's happening in the application because **all Redux logic follows the same basic patterns of dispatching actions and updating state via reducers**. This does mean that sometimes you have to write more code to make things happen, but the tradeoff is that should be very clear what the data flow and behavior is.

**The Redux Toolkit core APIs do not change any of the basic data flow in a Redux app** You're still dispatching actions and writing reducers, just with less code than writing all of that logic by hand. **RTK Query is the same way**. It's an additional level of abstraction, but **internally it's still doing the exact same steps we've already seen for managing async requests and their results**.

However, when you use RTK Query, there _is_ a mindset shift that happens. We're no longer thinking about "managing state" per se. Instead, **we now think about "managing _cached data_"**. Rather than trying to write reducers ourselves, we're now going to focus on defining **"where is this data coming from?", "how should this update be sent?", "when should this cached data be re-fetched?", and "how should the cached data be updated?"**. How that data gets fetched, stored, and retrieved becomes implementation details we no longer have to worry about.

We'll see how this mindset shift applies as we continue.

## Setting Up RTK Query

Our example application already works, but now it's time to migrate all of the async logic over to use RTK Query. As we go through, we'll see how to use all the major features of RTK Query, as well as how to migrate existing uses of `createAsyncThunk` and `createSlice` over to use the RTK Query APIs.

### Defining an API Slice

Previously, we've defined separate "slices" for each of our different data types like Posts, Users, and Notifications. Each slice had its own reducer, defined its own actions and thunks, and cached the entries for that data type separately.

With RTK Query, **the logic for managing cached data is centralized into a single "API slice" per application**. In much the same way that you have a single Redux store per app, we now have a single slice for _all_ our cached data.

We'll start by defining a new `apiSlice.js` file. Since this isn't specific to any of the other "features" we've already written, we'll add a new `features/api/` folder and put `apiSlice.js` in there. Let's fill out the API slice file, and then break down the code inside to see what it's doing:

```js title="features/api/apiSlice.js"
// Import the RTK Query methods from the React-specific entry point
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define our single API slice object
export const apiSlice = createApi({
  // The cache reducer expects to be added at `state.api` (already default - this is optional)
  reducerPath: "api",
  // All of our requests will have URLs starting with '/fakeApi'
  baseQuery: fetchBaseQuery({ baseUrl: "/fakeApi" }),
  // The "endpoints" represent operations and requests for this server
  endpoints: (builder) => ({
    // The `getPosts` endpoint is a "query" operation that returns data
    getPosts: builder.query({
      // The URL for the request is '/fakeApi/posts'
      query: () => "/posts",
    }),
  }),
});

// Export the auto-generated hook for the `getPost` query endpoint
export const { useGetPostsQuery } = apiSlice;
```

RTK Query's functionality is based on a single method, called `createApi`. All of the Redux Toolkit APIs we've seen so far are UI-agnostic, and could be used with _any_ UI layer. The RTK Query core logic is the same way. However, RTK Query also includes a React-specific version of `createApi`, and since we're using RTK and React together, we need to use that to take advantage of RTK's React integration. So, we import from `'@reduxjs/toolkit/query/react'` specifically.

#### API Slice Parameters

When we call `createApi`, there are two fields that are required:

- `baseQuery`: a function that knows how to fetch data from the server. RTK Query includes `fetchBaseQuery`, a small wrapper around the standard `fetch()` function that handles typical processing of requests and responses. When we create a `fetchBaseQuery` instance, we can pass in the base URL of all future requests, as well as override behavior such as modifying request headers.
- `endpoints`: a set of operations that we've defined for interacting with this server. Endpoints can be **_queries_**, which return data for caching, or **_mutations_**, which send an update to the server. The endpoints are defined using a callback function that accepts a `builder` parameter and returns an object containing endpoint definitions created with `builder.query()` and `builder.mutation()`.

`createApi` also accepts a `reducerPath` field, which defines the expected top-level state slice field for the generated reducer. For our other slices like `postsSlice`, there's no guarantee that it will be used to update `state.posts` - we _could_ have attached the reducer anywhere in the root state, like `someOtherField: postsReducer`. Here, `createApi` expects us to tell it where the cache state will exist when we add the cache reducer to the store. If you don't provide a `reducerPath` option, it defaults to `'api'`, so all your RTKQ cache data will be stored under `state.api`.

If you forget to add the reducer to the store, or attach it at a different key than what is specified in `reducerPath`, RTKQ will log an error to let you know this needs to be fixed.

#### Defining Endpoints

The first part of the URL for all requests is defined as `'/fakeApi'` in the `fetchBaseQuery` definition.

For our first step, we want to add an endpoint that will return the entire list of posts from the fake API server. We'll include an endpoint called `getPosts`, and define it as a **query endpoint** using `builder.query()`. This method accepts many options for configuring how to make the request and process the response. For now, all we need to do is supply the remaining piece of the URL path by defining a `query` option, with a callback that returns the URL string: `() => '/posts'`.

By default, query endpoints will use a `GET` HTTP request, but you can override that by returning an object like `{url: '/posts', method: 'POST', body: newPost}` instead of just the URL string itself. You can also define several other options for the request this way, such as setting headers.

#### Exporting API Slices and Hooks

In our earlier slice files, we just exported the action creators and the slice reducers, because those are all that's needed in other files. With RTK Query, we typically export the entire "API slice" object itself, because it has several fields that may be useful.

Finally, look carefully at the last line of this file. Where's this `useGetPostsQuery` value coming from?

**RTK Query's React integration will automatically generate React hooks for _every_ endpoint we define!** Those hooks encapsulate the process of triggering a request when a component mounts, and re-rendering the component as the request is processed and data is available. We can export those hooks out of this API slice file for use in our React components.

The hooks are automatically named based on a standard convention:

- `use`, the normal prefix for any React hook
- The name of the endpoint, capitalized
- The type of the endpoint, `Query` or `Mutation`

In this case, our endpoint is `getPosts` and it's a query endpoint, so the generated hook is `useGetPostsQuery`.

### Configuring the Store

We now need to hook up the API slice to our Redux store. We can modify the existing `store.js` file to add the API slice's cache reducer to the state. Also, the API slice generates a custom middleware that needs to be added to the store. This middleware _must_ be added as well - it manages cache lifetimes and expiration.

```js title="app/store.js"
import postsReducer from "../features/posts/postsSlice";
import usersReducer from "../features/users/usersSlice";
import notificationsReducer from "../features/notifications/notificationsSlice";
// highlight-next-line
import { apiSlice } from "../features/api/apiSlice";

export default configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
    notifications: notificationsReducer,
    // highlight-next-line
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  // highlight-start
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  // highlight-end
});
```

We can reuse the `apiSlice.reducerPath` field as a computed key in the `reducer` parameter, to ensure that the caching reducer is added in the right place.

We need to keep all of the existing standard middleware like `redux-thunk` in the store setup, and the API slice's middleware typically goes after those. We can do that by supplying the `middleware` argument to `configureStore`, calling the provided `getDefaultMiddleware()` method, and adding `apiSlice.middleware` at the end of the returned middleware array.

## Displaying Posts with Queries

### Using Query Hooks in Components

Now that we have the API slice defined and added to the store, we can import the generated `useGetPostsQuery` hook into our `<PostsList>` component and use it there.

Currently, `<PostsList>` is specifically importing `useSelector`, `useDispatch`, and `useEffect`, reading posts data and loading state from the store, and dispatching the `fetchPosts()` thunk on mount to trigger the data fetch. **The `useGetPostsQueryHook` replaces all of that!**

Let's see how `<PostsList>` looks when we use this hook:

```jsx title="features/posts/PostsList.js"
import React from "react";
import { Link } from "react-router-dom";

import { Spinner } from "../../components/Spinner";
import { PostAuthor } from "./PostAuthor";
import { TimeAgo } from "./TimeAgo";
import { ReactionButtons } from "./ReactionButtons";

// highlight-next-line
import { useGetPostsQuery } from "../api/apiSlice";

// highlight-next-line
let PostExcerpt = ({ post }) => {
  return (
    <article className="post-excerpt" key={post.id}>
      <h3>{post.title}</h3>
      <div>
        <PostAuthor userId={post.user} />
        <TimeAgo timestamp={post.date} />
      </div>
      <p className="post-content">{post.content.substring(0, 100)}</p>

      <ReactionButtons post={post} />
      <Link to={`/posts/${post.id}`} className="button muted-button">
        View Post
      </Link>
    </article>
  );
};

export const PostsList = () => {
  // highlight-start
  const {
    data: posts,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetPostsQuery();
  // highlight-end

  let content;

  // highlight-next-line
  if (isLoading) {
    content = <Spinner text="Loading..." />;
    // highlight-next-line
  } else if (isSuccess) {
    content = posts.map((post) => <PostExcerpt key={post.id} post={post} />);
    // highlight-next-line
  } else if (isError) {
    content = <div>{error.toString()}</div>;
  }

  return (
    <section className="posts-list">
      <h2>Posts</h2>
      {content}
    </section>
  );
};
```

Conceptually, `<PostsList>` is still doing all the same work it was before, but we were able to replace the multiple `useSelector` calls and the `useEffect` dispatch with a single call to `useGetPostsQuery()`.

Each generated query hook returns a "result" object containing several fields, including:

- `data`: the actual response contents from the server. **This field will be `undefined` until the response is received**.
- `isLoading`: a boolean indicating if this hook is currently making the _first_ request to the server. (Note that if the parameters change to request different data, `isLoading` will remain false.)
- `isFetching`: a boolean indicating if the hook is currently making _any_ request to the server
- `isSuccess`: a boolean indicating if the hook has made a successful request and has cached data available (ie, `data` should be defined now)
- `isError`: a boolean indicating if the last request had an error
- `error`: a serialized error object

It's common to destructure fields from the result object, and possibly rename `data` to a more specific variable like `posts` to describe what it contains. We can then use the status booleans and the `data/error` fields to render the UI that we want. However, if you're using TypeScript, you may need to keep the original object as-is and refer to flags as `result.isSuccess` in your conditional checks, so that TS can correctly infer that `data` is valid.

Previously, we were selecting a list of post IDs from the store, passing a post ID to each `<PostExcerpt>` component, and selecting each individual `Post` object from the store separately. Since the `posts` array already has all of the post objects, we've switched back to passing the post objects themselves down as props.

### Sorting Posts

Unfortunately, the posts are now being displayed out of order. Previously, we were sorting them by date at the reducer level with `createEntityAdapter`'s sorting option. Since the API slice is just caching the exact array returned from the server, there's no specific sorting happening - whatever order the server sent back is what we've got.

There's a few different options for how to handle this. For now, we'll do the sorting inside of `<PostsList>` itself, and we'll talk about the other options and their tradeoffs later.

We can't just call `posts.sort()` directly, because `Array.sort()` mutates the existing array, so we'll need to make a copy of it first. To avoid re-sorting on every rerender, we can do the sorting in a `useMemo()` hook. We'll also want to give `posts` a default empty array in case it's `undefined`, so that we always have an array to sort on.

```jsx title="features/posts/PostsList.js"
// omit setup

export const PostsList = () => {
  const {
    // highlight-next-line
    data: posts = [],
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetPostsQuery();

  // highlight-start
  const sortedPosts = useMemo(() => {
    const sortedPosts = posts.slice();
    // Sort posts in descending chronological order
    sortedPosts.sort((a, b) => b.date.localeCompare(a.date));
    return sortedPosts;
  }, [posts]);
  // highlight-end

  let content;

  if (isLoading) {
    content = <Spinner text="Loading..." />;
  } else if (isSuccess) {
    // highlight-next-line
    content = sortedPosts.map((post) => (
      <PostExcerpt key={post.id} post={post} />
    ));
  } else if (isError) {
    content = <div>{error.toString()}</div>;
  }

  return (
    <section className="posts-list">
      <h2>Posts</h2>
      {content}
    </section>
  );
};
```

## Displaying Individual Posts

We've updated `<PostsList>` to fetch a list of _all_ posts, and we're showing pieces of each `Post` inside the list. But, if we click on "View Post" for any of them, our `<SinglePostPage>` component will fail to find a post in the old `state.posts` slice and show us a "Post not found!" error. We need to update `<SinglePostPage>` to use RTK Query as well.

There's a couple ways we could do this. One would be to have `<SinglePostPage>` call the same `useGetPostsQuery()` hook, get the _entire_ array of posts, and find just the one `Post` object it needs to display. Query hooks also have a `selectFromResult` option that would allow us to do that same lookup earlier, inside the hook itself - we'll see this in action later.

Instead, we're going to try adding another endpoint definition that will let us request a single post from the server based on its ID. This is somewhat redundant, but it will allow us to see how RTK Query can be used to customize query requests based on arguments.

### Adding the Single Post Query Endpoint

In `apiSlice.js`, we're going to add another query endpoint definition, called `getPost` (no 's' this time):

```js title="features/api/apiSlice.js"
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "/fakeApi" }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "/posts",
    }),
    // highlight-start
    getPost: builder.query({
      query: (postId) => `/posts/${postId}`,
    }),
    // highlight-end
  }),
});

// highlight-next-line
export const { useGetPostsQuery, useGetPostQuery } = apiSlice;
```

The `getPost` endpoint looks much like the existing `getPosts` endpoint, but the `query` parameter is different. Here, `query` takes an argument called `postId`, and we're using that `postId` to construct the server URL. That way we can make a server request for just one specific `Post` object.

This also generates a new `useGetPostQuery` hook, so we export that as well.

### Query Arguments and Cache Keys

Our `<SinglePostPage>` is currently reading one `Post` entry from `state.posts` based on ID. We need to update it to call the new `useGetPostQuery` hook, and use similar loading state as the main list.

```jsx title="features/posts/SinglePostPage.js"
import React from "react";
import { Link } from "react-router-dom";

// highlight-start
import { Spinner } from "../../components/Spinner";
import { useGetPostQuery } from "../api/apiSlice";
// highlight-end

import { PostAuthor } from "./PostAuthor";
import { TimeAgo } from "./TimeAgo";
import { ReactionButtons } from "./ReactionButtons";

export const SinglePostPage = ({ match }) => {
  const { postId } = match.params;

  // highlight-next-line
  const { data: post, isFetching, isSuccess } = useGetPostQuery(postId);

  let content;
  // highlight-start
  if (isFetching) {
    content = <Spinner text="Loading..." />;
  } else if (isSuccess) {
    // highlight-end
    content = (
      <article className="post">
        <h2>{post.title}</h2>
        <div>
          <PostAuthor userId={post.user} />
          <TimeAgo timestamp={post.date} />
        </div>
        <p className="post-content">{post.content}</p>
        <ReactionButtons post={post} />
        <Link to={`/editPost/${post.id}`} className="button">
          Edit Post
        </Link>
      </article>
    );
  }

  return <section>{content}</section>;
};
```

Notice that we're taking the `postId` we've read from the router match, and passing it as an argument to `useGetPostQuery`. The query hook will then use that to construct the request URL, and fetch this specific `Post` object.

So how is all this data being cached, anyway? Let's click "View Post" for one of our post entries, then take a look at what's inside the Redux store at this point.

![RTK Query data cached in the store state](/img/tutorials/essentials/devtools-rtkq-cache.png)

We can see that we have a top-level `state.api` slice, as expected from the store setup. Inside of there is a section called `queries`, and it currently has two items. The key `getPosts(undefined)` represents the metadata and response contents for the request we made with the `getPosts` endpoint. Similarly, the key `getPost('abcd1234')` is for the specific request we just made for this one post.

RTK Query creates a "cache key" for each unique endpoint + argument combination, and stores the results for each cache key separately. That means that **you can use the same query hook multiple times, pass it different query parameters, and each result will be cached separately in the Redux store**.

It's also important to note that **the query parameter must be a _single_ value!** If you need to pass through multiple parameters, you must pass an object containing multiple fields (exactly the same as with `createAsyncThunk`). RTK Query will do a "shallow stable" comparison of the fields, and re-fetch the data if any of them have changed.

Notice that the names of the actions in the left-hand list are much more generic and less descriptive: `api/executeQuery/fulfilled`, instead of `posts/fetchPosts/fulfilled`. This is a tradeoff of using an additional abstraction layer. The individual actions do contain the specific endpoint name under `action.meta.arg.endpointName`, but it's not as easily viewable in the action history list.

:::tip

The Redux team is working on a new RTK Query view for the Redux DevTools that will specifically show RTK Query data in a more usable format. This includes info on each endpoint and cache result, stats on query timing, and much more. This will be added to the DevTools Extension in the near future. For a preview, see:

- [Redux DevTools #750: Add RTK Query-Inspector monitor](https://github.com/reduxjs/redux-devtools/pull/750)
- [RTK Query Monitor preview demo](https://rtk-query-monitor-demo.netlify.app/)

:::

## Creating Posts with Mutations

We've seen how we can fetch data from the server by defining "query" endpoints, but what about sending updates to the server?

RTK Query lets us define **mutation endpoints** that update data on the server. Let's add a mutation that will let us add a new post.

### Adding the New Post Mutation Endpoint

Adding a mutation endpoint is very similar to adding a query endpoint. The biggest difference is that we define the endpoint using `builder.mutation()` instead of `builder.query()`. Also, we now need to change the HTTP method to be a `'POST'` request, and we have to provide the body of the request as well.

```js title="features/api/apiSlice.js"
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "/fakeApi" }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "/posts",
    }),
    getPost: builder.query({
      query: (postId) => `/posts/${postId}`,
    }),
    // highlight-start
    addNewPost: builder.mutation({
      query: (initialPost) => ({
        url: "/posts",
        method: "POST",
        // Include the entire post object as the body of the request
        body: initialPost,
      }),
    }),
    // highlight-end
  }),
});

export const {
  useGetPostsQuery,
  useGetPostQuery,
  // highlight-next-line
  useAddNewPostMutation,
} = apiSlice;
```

Here our `query` option returns an object containing `{url, method, body}`. Since we're using `fetchBaseQuery` to make the requests, the `body` field will automatically be JSON-serialized for us.

Like with query endpoints, the API slice automatically generates a React hook for the mutation endpoint - in this case, `useAddNewPostMutation`.

### Using Mutation Hooks in Components

Our `<AddNewPostForm>` is already dispatching an async thunk to add a post whenever we click the "Save Post" button. To do that, it has to import `useDispatch` and the `addNewPost` thunk. The mutation hooks replace both of those, and the usage pattern is very similar.

```js title="features/posts/AddNewPostForm"
import React, { useState } from "react";
import { useSelector } from "react-redux";

import { Spinner } from "../../components/Spinner";
import { useAddNewPostMutation } from "../api/apiSlice";
import { selectAllUsers } from "../users/usersSlice";

export const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");

  // highlight-next-line
  const [addNewPost, { isLoading }] = useAddNewPostMutation();
  const users = useSelector(selectAllUsers);

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  const onAuthorChanged = (e) => setUserId(e.target.value);

  // highlight-next-line
  const canSave = [title, content, userId].every(Boolean) && !isLoading;

  const onSavePostClicked = async () => {
    if (canSave) {
      try {
        // highlight-next-line
        await addNewPost({ title, content, user: userId }).unwrap();
        setTitle("");
        setContent("");
        setUserId("");
      } catch (err) {
        console.error("Failed to save the post: ", err);
      }
    }
  };

  // omit rendering logic
};
```

Mutation hooks return an array with two values:

- The first value is a "trigger function". When called, it makes the request to the server, with whatever argument you provide. This is effectively like a thunk that has already been wrapped to immediately dispatch itself.
- The second value is an object with metadata about the current in-progress request, if any. This includes an `isLoading` flag to indicate if a request is in-progress.

We can replace the existing thunk dispatch and component loading state with the trigger function and `isLoading` flag from the `useAddNewPostMutation` hook, and the rest of the component stays the same.

As with the thunk dispatch, we call `addNewPost` with the initial post object. This returns a special `Promise` with a `.unwrap()` method, and we can `await addNewPost().unwrap()` to handle any potential errors with a standard `try/catch` block.

## Refreshing Cached Data

When we click "Save Post", we can view the Network tab in the browser DevTools and confirm that the HTTP `POST` request succeeded. But, the new post isn't showing up in our `<PostsList>` if we go back there. We still have the same cached data in memory.

We need to tell RTK Query to refresh its cached list of posts so that we can see the new post we just added.

### Refetching Posts Manually

The first option is to manually force RTK Query to refetch data for a given endpoint. Query hook result objects include a `refetch` function that we can call to force a refetch. We can temporarily add a "Refetch Posts" button to `<PostsList>` and click that after adding a new post.

Also, earlier we saw that query hooks have both an `isLoading` flag, which is `true` if this is the _first_ request for data, and an `isFetching` flag, which is `true` while _any_ request for data is in progress. We could look at the `isFetching` flag, and replace the entire list of posts with a loading spinner again while the refetch is in progress. But, that could be a bit annoying, and besides - we already have all these posts, why should we completely hide them?

Instead, we could make the existing list of posts partially transparent to indicate the data is stale, but keep them visible while the refetch is happening. As soon as the request completes, we can return to showing the posts list as normal.

```jsx title="features/posts/PostsList.js"
import React, { useMemo } from "react";
import { Link } from "react-router-dom";
// highlight-next-line
import classnames from "classnames";

// omit other imports and PostExcerpt

export const PostsList = () => {
  const {
    data: posts = [],
    isLoading,
    isFetching,
    isSuccess,
    isError,
    error,
    // highlight-next-line
    refetch,
  } = useGetPostsQuery();

  const sortedPosts = useMemo(() => {
    const sortedPosts = posts.slice();
    sortedPosts.sort((a, b) => b.date.localeCompare(a.date));
    return sortedPosts;
  }, [posts]);

  let content;

  if (isLoading) {
    content = <Spinner text="Loading..." />;
  } else if (isSuccess) {
    // highlight-start
    const renderedPosts = sortedPosts.map((post) => (
      <PostExcerpt key={post.id} post={post} />
    ));

    const containerClassname = classnames("posts-container", {
      disabled: isFetching,
    });

    content = <div className={containerClassname}>{renderedPosts}</div>;
    // highlight-end
  } else if (isError) {
    content = <div>{error.toString()}</div>;
  }

  return (
    <section className="posts-list">
      <h2>Posts</h2>
      // highlight-next-line
      <button onClick={refetch}>Refetch Posts</button>
      {content}
    </section>
  );
};
```

If we add a new post and then click "Refetch Posts", we should now see the posts list go semi-transparent for a couple seconds, then re-render with the new post added at the top.

### Automatic Refreshing with Cache Invalidation

Having users manually click to refetch data is occasionally necessary, but definitely not a good solution for normal usage.

We know that our "server" has a complete list of all posts, including the one we just added. Ideally, we want to have our app automatically refetch the updated list of posts as soon as the mutation request has completed. That way we know our client-side cached data is in sync with what the server has.

**RTK Query lets us define relationships between queries and mutations to enable automatic data refetching, using "tags"**. A "tag" is a string or small object that lets you name certain types of data, and _invalidate_ portions of the cache. When a cache tag is invalidated, RTK Query will automatically refetch the endpoints that were marked with that tag.

Basic tag usage requires adding three pieces of information to our API slice:

- A root `tagTypes` field in the API slice object, declaring an array of string tag names for data types such as `'Post'`
- A `providesTags` array in query endpoints, listing a set of tags describing the data in that query
- An `invalidatesTags` array in mutation endpoints, listing a set of tags that are invalidated every time that mutation runs

We can add a single tag called `'Post'` to our API slice that will let us automatically refetch our `getPosts` endpoint any time we add a new post:

```js title="features/api/apiSlice.js"
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "/fakeApi" }),
  // highlight-next-line
  tagTypes: ["Post"],
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "/posts",
      // highlight-next-line
      providesTags: ["Post"],
    }),
    getPost: builder.query({
      query: (postId) => `/posts/${postId}`,
    }),
    addNewPost: builder.mutation({
      query: (initialPost) => ({
        url: "/posts",
        method: "POST",
        body: initialPost,
      }),
      // highlight-next-line
      invalidatesTags: ["Post"],
    }),
  }),
});
```

That's all we need! Now, if we click "Save Post", you should see the `<PostsList>` component automatically gray out after a couple seconds, and then rerender with the newly added post at the top.

Note that there's nothing special about the literal string `'Post'` here. We could have called it `'Fred'`, `'qwerty'`, or anything else. It just needs to be the same string in each field, so that RTK Query knows "when this mutation happens, invalidate all endpoints that have that same tag string listed".

## What You've Learned

With RTK Query, the actual details of how to manage data fetching, caching, and loading state are abstracted away. This simplifies application code considerably, and lets us focus on higher-level concerns about intended app behavior instead. Since RTK Query is implemented using the same Redux Toolkit APIs we've already seen, we can still use the Redux DevTools to view the changes in our state over time.

<iframe
  class="codesandbox"
  src="https://codesandbox.io/embed/github/reduxjs/redux-essentials-example-app/tree/checkpoint-5-createApi/?fontsize=14&hidenavigation=1&theme=dark&runonclick=1"
  title="redux-essentials-example-app"
  allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
  sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
></iframe>

:::tip Summary

- **RTK Query is a data fetching and caching solution included in Redux Toolkit**
  - RTK Query abstracts the process of managing cached server data for you, and eliminates the need to write logic for loading state, storing results, and making requests
  - RTK Query builds on top of the same patterns used in Redux, like async thunks
- **RTK Query uses a single "API slice" per application, defined using `createApi`**
  - RTK Query provides UI-agnostic and React-specific versions of `createApi`
  - API slices define multiple "endpoints" for different server operations
  - The API slice includes auto-generated React hooks if using the React integration
- **Query endpoints allow fetching and caching data from the server**
  - Query hooks return a `data` value, plus loading status flags
  - The query can be re-fetched manually, or automatically using "tags" for cache invalidation
- **Mutation endpoints allow updating data on the server**
  - Mutation hooks return a "trigger" function that sends an update request, plus loading status
  - The trigger function returns a Promise that can be "unwrapped" and awaited

:::

## What's Next?

RTK Query provides solid default behavior, but also includes many options for customizing how requests are managed and working with cached data. In [Part 8: RTK Query Advanced Patterns](./part-8-rtk-query-advanced.md), we'll see how to use these options to implement useful features like optimistic updates.

---

id: part-8-rtk-query-advanced
title: 'Redux Essentials, Part 8: RTK Query Advanced Patterns'
sidebar_label: 'RTK Query Advanced Patterns'
description: 'The official Redux Essentials tutorial: learn advanced patterns for fetching data with RTK Query'

---

import { DetailedExplanation } from '../../components/DetailedExplanation'

:::tip What You'll Learn

- How to use tags with IDs to manage cache invalidation and refetching
- How to work with the RTK Query cache outside of React
- Techniques for manipulating response data
- Implementing optimistic updates and streaming updates

:::

:::info Prerequisites

- Completion of [Part 7](./part-7-rtk-query-basics.md) to understand RTK Query setup and basic usage

:::

## Introduction

In [Part 7: RTK Query Basics](./part-7-rtk-query-basics.md), we saw how to set up and use the RTK Query API to handle data fetching and caching in our application. We added an "API slice" to our Redux store, defined "query" endpoints to fetch posts data, and a "mutation" endpoint to add a new post.

In this section, we'll continue migrating our example app to use RTK Query for the other data types, and see how to use some of its advanced features to simplify the codebase and improve user experience.

:::info

Some of the changes in this section aren't strictly necessary - they're included to demonstrate RTK Query's features and show some of the things you _can_ do, so you can see how to use these features if you need them.

:::

## Editing Posts

We've already added a mutation endpoint to save new Post entries to the server, and used that in our `<AddNewPostForm>`. Next, we need to handle updating the `<EditPostForm>` to let us edit an existing post.

### Updating the Edit Post Form

As with adding posts, the first step is to define a new mutation endpoint in our API slice. This will look much like the mutation for adding a post, but the endpoint needs to include the post ID in the URL and use an HTTP `PATCH` request to indicate that it's updating some of the fields.

```js title="features/api/apiSlice.js"
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "/fakeApi" }),
  tagTypes: ["Post"],
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "/posts",
      providesTags: ["Post"],
    }),
    getPost: builder.query({
      query: (postId) => `/posts/${postId}`,
    }),
    addNewPost: builder.mutation({
      query: (initialPost) => ({
        url: "/posts",
        method: "POST",
        body: initialPost,
      }),
      invalidatesTags: ["Post"],
    }),
    // highlight-start
    editPost: builder.mutation({
      query: (post) => ({
        url: `/posts/${post.id}`,
        method: "PATCH",
        body: post,
      }),
    }),
    // highlight-end
  }),
});

export const {
  useGetPostsQuery,
  useGetPostQuery,
  useAddNewPostMutation,
  // highlight-next-line
  useEditPostMutation,
} = apiSlice;
```

Once that's added, we can update the `<EditPostForm>`. It needs to read the original `Post` entry from the store, use that to initialize the component state to edit the fields, and then send the updated changes to the server. Currently, we're reading the `Post` entry with `selectPostById`, and manually dispatching a `postUpdated` thunk for the request.

We can use the same `useGetPostQuery` hook that we used in `<SinglePostPage>` to read the `Post` entry from the cache in the store, and we'll use the new `useEditPostMutation` hook to handle saving the changes.

```jsx title="features/posts/EditPostForm.js"
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { Spinner } from "../../components/Spinner";
// highlight-next-line
import { useGetPostQuery, useEditPostMutation } from "../api/apiSlice";

export const EditPostForm = ({ match }) => {
  const { postId } = match.params;

  // highlight-next-line
  const { data: post } = useGetPostQuery(postId);
  // highlight-next-line
  const [updatePost, { isLoading }] = useEditPostMutation();

  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);

  const history = useHistory();

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);

  const onSavePostClicked = async () => {
    if (title && content) {
      // highlight-next-line
      await updatePost({ id: postId, title, content });
      history.push(`/posts/${postId}`);
    }
  };

  // omit rendering logic
};
```

### Cache Data Subscription Lifetimes

Let's try this out and see what happens. Open up your browser's DevTools, go to the Network tab, and refresh the main page. You should see a `GET` request to `/posts` as we fetch the initial data. When you click on a "View Post" button, you should see a second request to `/posts/:postId` that returns that single post entry.

Now click "Edit Post" inside the single post page. The UI switches over to show `<EditPostForm>`, but this time there's no network request for the individual post. Why not?

![RTK Query network requests](/img/tutorials/essentials/devtools-cached-requests.png)

**RTK Query allows multiple components to subscribe to the same data, and will ensure that each unique set of data is only fetched once.** Internally, RTK Query keeps a reference counter of active "subscriptions" to each endpoint + cache key combination. If Component A calls `useGetPostQuery(42)`, that data will be fetched. If Component B then mounts and also calls `useGetPostQuery(42)`, it's the exact same data being requested. The two hook usages will return the exact same results, including fetched `data` and loading status flags.

When the number of active subscriptions goes down to 0, RTK Query starts an internal timer. **If the timer expires before any new subscriptions for the data are added, RTK Query will remove that data from the cache automatically**, because the app no longer needs the data. However, if a new subscription _is_ added before the timer expires, the timer is canceled, and the already-cached data is used without needing to refetch it.

In this case, our `<SinglePostPage>` mounted and requested that individual `Post` by ID. When we clicked on "Edit Post", the `<SinglePostPage>` component was unmounted by the router, and the active subscription was removed due to unmounting. RTK Query immediately started a "remove this post data" timer. But, the `<EditPostPage>` component mounted right away and subscribed to the same `Post` data with the same cache key. So, RTK Query canceled the timer and kept using the same cached data instead of fetching it from the server.

By default, **unused data is removed from the cache after 60 seconds**, but this can be configured in either the root API slice definition or overridden in the individual endpoint definitions using the `keepUnusedDataFor` flag, which specifies a cache lifetime in seconds.

### Invalidating Specific Items

Our `<EditPostForm>` component can now save the edited post to the server, but we have a problem. If we click "Save Post" while editing, it returns us to the `<SinglePostPage>`, but it's still showing the old data without the edits. The `<SinglePostPage>` is still using the cached `Post` entry that was fetched earlier. For that matter, if we return to the main page and look at the `<PostsList>`, it's also showing the old data. **We need a way to force a refetch of _both_ the individual `Post` entry, and the entire list of posts**.

Earlier, we saw how we can use "tags" to invalidate parts of our cached data. We declared that the `getPosts` query endpoint _provides_ a `'Post'` tag, and that the `addNewPost` mutation endpoint _invalidates_ that same `'Post'` tag. That way, every time we add a new post, we force RTK Query to refetch the entire list of posts from the `getQuery` endpoint.

We could add a `'Post'` tag to both the `getPost` query and the `editPost` mutation, but that would force all the other individual posts to be refetched as well. Fortunately, **RTK Query lets us define specific tags, which let us be more selective in invalidating data**. These specific tags look like `{type: 'Post', id: 123}`.

Our `getPosts` query defines a `providesTags` field that is an array of strings. The `providesTags` field can also accept a callback function that receives the `result` and `arg`, and returns an array. This allows us to create tag entries based on IDs of data that is being fetched. Similarly, `invalidatesTags` can be a callback as well.

In order to get the right behavior, we need to set up each endpoint with the right tags:

- `getPosts`: provides a general `'Post'` tag for the whole list, as well as a specific `{type: 'Post', id}` tag for each received post object
- `getPost`: provides a specific `{type: 'Post', id}` object for the individual post object
- `addNewPost`: invalidates the general `'Post'` tag, to refetch the whole list
- `editPost`: invalidates the specific `{type: 'Post', id}` tag. This will force a refetch of both the _individual_ post from `getPost`, as well as the _entire_ list of posts from `getPosts`, because they both provide a tag that matches that `{type, id}` value.

```js title="features/api/apiSlice.js"
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "/fakeApi" }),
  tagTypes: ["Post"],
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "/posts",
      // highlight-start
      providesTags: (result = [], error, arg) => [
        "Post",
        ...result.map(({ id }) => ({ type: "Post", id })),
      ],
      // highlight-end
    }),
    getPost: builder.query({
      query: (postId) => `/posts/${postId}`,
      // highlight-start
      providesTags: (result, error, arg) => [{ type: "Post", id: arg }],
      // highlight-end
    }),
    addNewPost: builder.mutation({
      query: (initialPost) => ({
        url: "/posts",
        method: "POST",
        body: initialPost,
      }),
      // highlight-next-line
      invalidatesTags: ["Post"],
    }),
    editPost: builder.mutation({
      query: (post) => ({
        url: `posts/${post.id}`,
        method: "PATCH",
        body: post,
      }),
      // highlight-next-line
      invalidatesTags: (result, error, arg) => [{ type: "Post", id: arg.id }],
    }),
  }),
});
```

It's possible for the `result` argument in these callbacks to be undefined if the response has no data or there's an error, so we have to handle that safely. For `getPosts` we can do that by using a default argument array value to map over, and for `getPost` we're already returning a single-item array based on the argument ID. For `editPost`, we know the ID of the post from the partial post object that was passed into the trigger function, so we can read it from there.

With those changes in place, let's go back and try editing a post again, with the Network tab open in the browser DevTools.

![RTK Query invalidation and refetching](/img/tutorials/essentials/devtools-cached-invalidation-refetching.png)

When we save the edited post this time, we should see two requests happen back-to-back:

- The `PATCH /posts/:postId` from the `editPost` mutation
- A `GET /posts/:postId` as the `getPost` query is refetched

Then, if we click back to the main "Posts" tab, we should also see:

- A `GET /posts` as the `getPosts` query is refetched

Because we provided the relationships between the endpoints using tags, **RTK Query knew that it needed to refetch the individual post and the list of posts when we made that edit and the specific tag with that ID was invalidated** - no further changes needed! Meanwhile, as we were editing the post, the cache removal timer for the `getPosts` data expired, so it was removed from the cache. When we opened the `<PostsList>` component again, RTK Query saw that it did not have the data in cache and refetched it.

There is one caveat here. By specifying a plain `'Post'` tag in `getPosts` and invalidating it in `addNewPost`, we actually end up forcing a refetch of all _individual_ posts as well. If we really want to just refetch the list of posts for the `getPost` endpoint, you can include an additional tag with an arbitrary ID, like `{type: 'Post', id: 'LIST'}`, and invalidate that tag instead. The RTK Query docs have [a table that describes what will happen if certain general/specific tag combinations are invalidated](https://redux-toolkit.js.org/rtk-query/usage/automated-refetching#tag-invalidation-behavior).

:::info

RTK Query has many other options for controlling when and how to refetch data, including "conditional fetching", "lazy queries", and "prefetching", and query definitions can be customized in a variety of ways. See the RTK Query usage guide docs for more details on using these features:

- [RTK Query: Automated Re-Fetching](https://redux-toolkit.js.org/rtk-query/usage/automated-refetching)
- [RTK Query: Conditional Fetching](https://redux-toolkit.js.org/rtk-query/usage/conditional-fetching)
- [RTK Query: Prefetching](https://redux-toolkit.js.org/rtk-query/usage/prefetching)
- [RTK Query: Customizing Queries](https://redux-toolkit.js.org/rtk-query/usage/customizing-queries)
- [RTK Query: `useLazyQuery`](https://redux-toolkit.js.org/rtk-query/api/created-api/hooks#uselazyquery)

:::

## Managing Users Data

We've finished converting our posts data management over to use RTK Query. Next up, we'll convert the list of users.

Since we've already seen how to use the RTK Query hooks for fetching and reading data, for this section we're going to try a different approach. RTK Query's core API is UI-agnostic and can be used with any UI layer, not just React. Normally you should stick with using the hooks, but here we're going to work with the user data using _just_ the RTK Query core API so you can see how to use it.

### Fetching Users Manually

We're currently defining a `fetchUsers` async thunk in `usersSlice.js`, and dispatching that thunk manually in `index.js` so that the list of users is available as soon as possible. We can do that same process using RTK Query.

We'll start by defining a `getUsers` query endpoint in `apiSlice.js`, similar to our existing endpoints. We'll export the `useGetUsersQuery` hook just for consistency, but for now we're not going to use it.

```js title="features/api/apiSlice.js"
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "/fakeApi" }),
  tagTypes: ["Post"],
  endpoints: (builder) => ({
    // omit other endpoints

    // highlight-start
    getUsers: builder.query({
      query: () => "/users",
    }),
    // highlight-end
  }),
});

export const {
  useGetPostsQuery,
  useGetPostQuery,
  // highlight-next-line
  useGetUsersQuery,
  useAddNewPostMutation,
  useEditPostMutation,
} = apiSlice;
```

If we inspect the API slice object, it includes an `endpoints` field, with one endpoint object inside for each endpoint we've defined.

![API slice endpoint contents](/img/tutorials/essentials/api-slice-contents.png)

Each endpoint object contains:

- The same primary query/mutation hook that we exported from the root API slice object, but named as `useQuery` or `useMutation`
- For query endpoints, an additional set of query hooks for scenarios like "lazy queries" or partial subscriptions
- A set of ["matcher" utilities](https://redux-toolkit.js.org/api/matching-utilities) to check for the `pending/fulfilled/rejected` actions dispatched by requests for this endpoint
- An `initiate` thunk that triggers a request for this endpoint
- A `select` function that creates [memoized selectors](../../usage/deriving-data-selectors.md) that can retrieve the cached result data + status entries for this endpoint

If we want to fetch the list of users outside of React, we can dispatch the `getUsers.initiate()` thunk in our index file:

```jsx title="index.js"
// omit other imports
// highlight-next-line
import { apiSlice } from "./features/api/apiSlice";

// Start our mock API server
worker.start({ onUnhandledRequest: "bypass" });

// highlight-next-line
store.dispatch(apiSlice.endpoints.getUsers.initiate());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
```

This dispatch happens automatically inside the query hooks, but we can start it manually if needed.

:::caution

Manually dispatching an RTKQ request thunk will create a subscription entry, but it's then up to you to [unsubscribe from that data later](https://redux-toolkit.js.org/rtk-query/usage/usage-without-react-hooks#removing-a-subscription) - otherwise the data stays in the cache permanently. In this case, we always need user data, so we can skip unsubscribing.

:::

### Selecting Users Data

We currently have selectors like `selectAllUsers` and `selectUserById` that are generated by our `createEntityAdapter` users adapter, and are reading from `state.users`. If we reload the page, all of our user-related display is broken because the `state.users` slice has no data. Now that we're fetching data for RTK Query's cache, we should replace those selectors with equivalents that read from the cache instead.

The `endpoint.select()` function in the API slice endpoints will create a new memoized selector function _every_ time we call it. `select()` takes a cache key as its argument, and this must be the _same_ cache key that you pass as an argument to either the query hooks or the `initiate()` thunk. The generated selector uses that cache key to know exactly which cached result it should return from the cache state in the store.

In this case, our `getUsers` endpoint doesn't need any parameters - we always fetch the entire list of users. So, we can create a cache selector with no argument, and the cache key becomes `undefined`.

```js title="features/users/usersSlice.js"
import {
  createSlice,
  createEntityAdapter,
  createSelector,
} from "@reduxjs/toolkit";

// highlight-next-line
import { apiSlice } from "../api/apiSlice";

/* Temporarily ignore adapter - we'll use this again shortly
const usersAdapter = createEntityAdapter()

const initialState = usersAdapter.getInitialState()
*/

// highlight-start
// Calling `someEndpoint.select(someArg)` generates a new selector that will return
// the query result object for a query with those parameters.
// To generate a selector for a specific query argument, call `select(theQueryArg)`.
// In this case, the users query has no params, so we don't pass anything to select()
export const selectUsersResult = apiSlice.endpoints.getUsers.select();

const emptyUsers = [];

export const selectAllUsers = createSelector(
  selectUsersResult,
  (usersResult) => usersResult?.data ?? emptyUsers
);

export const selectUserById = createSelector(
  selectAllUsers,
  (state, userId) => userId,
  (users, userId) => users.find((user) => user.id === userId)
);
// highlight-end

/* Temporarily ignore selectors - we'll come back to this later
export const {
  selectAll: selectAllUsers,
  selectById: selectUserById,
} = usersAdapter.getSelectors((state) => state.users)
*/
```

Once we have that initial `selectUsersResult` selector, we can replace the existing `selectAllUsers` selector with one that returns the array of users from the cache result, and then replace `selectUserById` with one that finds the right user from that array.

For now we're going to comment out those selectors from the `usersAdapter` - we're going to make another change later that switches back to using those.

Our components are already importing `selectAllUsers` and `selectUserById`, so this change should just work! Try refreshing the page and clicking through the posts list and single post view. The correct user names should appear in each displayed post, and in the dropdown in the `<AddPostForm>`.

Since the `usersSlice` is no longer even being used at all, we can go ahead and delete the `createSlice` call from this file, and remove `users: usersReducer` from our store setup. We've still got a couple bits of code that reference `postsSlice`, so we can't quite remove that yet - we'll get to that shortly.

### Injecting Endpoints

It's common for larger applications to "code-split" features into separate bundles, and then "lazy load" them on demand as the feature is used for the first time. We said that RTK Query normally has a single "API slice" per application, and so far we've defined all of our endpoints directly in `apiSlice.js`. What happens if we want to code-split some of our endpoint definitions, or move them into another file to keep the API slice file from getting too big?

**RTK Query supports splitting out endpoint definitions with `apiSlice.injectEndpoints()`**. That way, we can still have a single API slice with a single middleware and cache reducer, but we can move the definition of some endpoints to other files. This enables code-splitting scenarios, as well as co-locating some endpoints alongside feature folders if desired.

To illustrate this process, let's switch the `getUsers` endpoint to be injected in `usersSlice.js`, instead of defined in `apiSlice.js`.

We're already importing `apiSlice` into `usersSlice.js` so that we can access the `getUsers` endpoint, so we can switch to calling `apiSlice.injectEndpoints()` here instead.

```js title="features/users/usersSlice.js"
import { apiSlice } from "../api/apiSlice";

// highlight-start
export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/users",
    }),
  }),
});

export const { useGetUsersQuery } = extendedApiSlice;

export const selectUsersResult = extendedApiSlice.endpoints.getUsers.select();
// highlight-end
```

`injectEndpoints()` **mutates the original API slice object to add the additional endpoint definitions, and then returns it**. The actual caching reducer and middleware that we originally added to the store still work okay as-is. At this point, `apiSlice` and `extendedApiSlice` are the same object, but it can be helpful to refer to the `extendedApiSlice` object instead of `apiSlice` here as a reminder to ourselves. (This is more important if you're using TypeScript, because only the `extendedApiSlice` value has the added types for the new endpoints.)

At the moment, the only file that references the `getUsers` endpoint is our index file, which is dispatching the `initiate` thunk. We need to update that to import the extended API slice instead:

```js title="index.js"
// highlight-next-line
import { extendedApiSlice } from "./features/users/usersSlice";

// Start our mock API server
worker.start({ onUnhandledRequest: "bypass" });

// highlight-next-line
store.dispatch(extendedApiSlice.endpoints.getUsers.initiate());
```

Alternately, you could just export the specific endpoints themselves from the slice file.

## Manipulating Response Data

So far, all of our query endpoints have simply stored the response data from the server exactly as it was received in the body. `getPosts` and `getUsers` both expect the server to return an array, and `getPost` expects the individual `Post` object as the body.

It's common for clients to need to extract pieces of data from the server response, or to transform the data in some way before caching it. For example, what if the `/getPost` request returns a body like `{post: {id}}`, with the data nested?

There's a couple ways that we _could_ handle this conceptually. One option would be to extract the `responseData.post` field and store that in the cache, instead of the entire body. Another would be to store the entire response data in the cache, but have our components specify just a specific piece of that cached data that they need.

### Transforming Responses

**Endpoints can define a `transformResponse` handler that can extract or modify the data received from the server before it's cached**. For the `getPost` example, we could have `transformResponse: (responseData) => responseData.post`, and it would cache just the actual `Post` object instead of the entire body of the response.

In [Part 6: Performance and Normalization](./part-6-performance-normalization.md), we discussed reasons why it's useful to store data in a normalized structure. In particular, it lets us look up and update items based on an ID, rather than having to loop over an array to find the right item.

Our `selectUserById` selector currently has to loop over the cached array of users to find the right `User` object. If we were to transform the response data to be stored using a normalized approach, we could simplify that to directly find the user by ID.

We were previously using `createEntityAdapter` in `usersSlice` to manage normalized users data. We can integrate `createEntityAdapter` into our `extendedApiSlice`, and actually use `createEntityAdapter` to transform the data before it's cached. We'll uncomment the `usersAdapter` lines we originally had, and use its update functions and selectors again.

```js title="features/users/usersSlice.js"
import { apiSlice } from "../api/apiSlice";

// highlight-start
const usersAdapter = createEntityAdapter();

const initialState = usersAdapter.getInitialState();
// highlight-end

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/users",
      // highlight-start
      transformResponse: (responseData) => {
        return usersAdapter.setAll(initialState, responseData);
      },
      // highlight-end
    }),
  }),
});

export const { useGetUsersQuery } = extendedApiSlice;

// Calling `someEndpoint.select(someArg)` generates a new selector that will return
// the query result object for a query with those parameters.
// To generate a selector for a specific query argument, call `select(theQueryArg)`.
// In this case, the users query has no params, so we don't pass anything to select()
export const selectUsersResult = extendedApiSlice.endpoints.getUsers.select();

const selectUsersData = createSelector(
  selectUsersResult,
  (usersResult) => usersResult.data
);

// highlight-start
export const { selectAll: selectAllUsers, selectById: selectUserById } =
  usersAdapter.getSelectors((state) => selectUsersData(state) ?? initialState);
// highlight-end
```

We've added a `transformResponse` option to the `getUsers` endpoint. It receives the entire response data body as its argument, and should return the actual data to be cached. By calling `usersAdapter.setAll(initialState, responseData)`, it will return the standard `{ids: [], entities: {}}` normalized data structure containing all of the received items.

The `adapter.getSelectors()` function needs to be given an "input selector" so it knows where to find that normalized data. In this case, the data is nested down inside the RTK Query cache reducer, so we select the right field out of the cache state.

### Normalized vs Document Caches

It's worth stepping back for a minute to discuss what we just did further.

You may have heard the term "normalized cache" in relation to other data fetching libraries like Apollo. It's important to understand that **RTK Query uses a "document cache" approach, not a "normalized cache"**.

A fully normalized cache tries to deduplicate similar items across _all_ queries, based on item type and ID. As an example, say that we have an API slice with `getTodos` and `getTodo` endpoints, and our components make the following queries:

- `getTodos()`
- `getTodos({filter: 'odd'})`
- `getTodo({id: 1})`

Each of these query results would include a Todo object that looks like `{id: 1}`.

In a fully normalized de-duplicating cache, only a single copy of this Todo object would be stored. However, **RTK Query saves each query result independently in the cache**. So, this would result in three separate copies of this Todo being cached in the Redux store. However, if all the endpoints are consistently providing the same tags (such as `{type: 'Todo', id: 1}`), then invalidating that tag will force all the matching endpoints to refetch their data for consistency.

RTK Query deliberately **does _not_ implement a cache that would deduplicate identical items across multiple requests**. There are several reasons for this:

- A fully normalized shared-across-queries cache is a _hard_ problem to solve
- We don't have the time, resources, or interest in trying to solve that right now
- In many cases, simply re-fetching data when it's invalidated works well and is easier to understand
- At a minimum, RTKQ can help solve the general use case of "fetch some data", which is a big pain point for a lot of people

In comparison, we just normalized the response data for the `getUsers` endpoint, in that it's being stored as an `{[id]: value}` lookup table. However, **this is _not_ the same thing as a "normalized cache" - we only transformed _how this one response is stored_** rather than deduplicating results across endpoints or requests.

### Selecting Values from Results

The last component that is reading from the old `postsSlice` is `<UserPage>`, which filters the list of posts based on the current user. We've already seen that we can get the entire list of posts with `useGetPostsQuery()` and then transform it in the component, such as sorting inside of a `useMemo`. The query hooks also give us the ability to select pieces of the cached state by providing a `selectFromResult` option, and only re-render when the selected pieces change.

We can use `selectFromResult` to have `<UserPage>` read just a filtered list of posts from the cache. However, in order for `selectFromResult` to avoid unnecessary re-renders, we need to ensure that whatever data we extract is memoized correctly. To do this, we should create a new selector instance that the `<UsersPage>` component can reuse every time it renders, so that the selector memoizes the result based on its inputs.

```jsx title="features/users/UsersPage.js"
// highlight-next-line
import { createSelector } from "@reduxjs/toolkit";

import { selectUserById } from "../users/usersSlice";
// highlight-next-line
import { useGetPostsQuery } from "../api/apiSlice";

export const UserPage = ({ match }) => {
  const { userId } = match.params;

  const user = useSelector((state) => selectUserById(state, userId));

  // highlight-start
  const selectPostsForUser = useMemo(() => {
    // Return a unique selector instance for this page so that
    // the filtered results are correctly memoized
    return createSelector(
      (res) => res.data,
      (res, userId) => userId,
      (data, userId) => data.filter((post) => post.user === userId)
    );
  }, []);
  // highlight-end

  // Use the same posts query, but extract only part of its data
  const { postsForUser } = useGetPostsQuery(undefined, {
    // highlight-start
    selectFromResult: (result) => ({
      // We can optionally include the other metadata fields from the result here
      ...result,
      // Include a field called `postsForUser` in the hook result object,
      // which will be a filtered list of posts
      postsForUser: selectPostsForUser(result, userId),
    }),
    // highlight-end
  });

  // omit rendering logic
};
```

There's a key difference with the memoized selector function we've created here. Normally, [selectors expect the entire Redux `state` as their first argument](../../usage/deriving-data-selectors.md), and extract or derive a value from `state`. However, in this case we're only dealing with the "result" value that is kept in the cache. The result object has a `data` field inside with the actual values we need, as well as some of the request metadata fields.

Our `selectFromResult` callback receives the `result` object containing the original request metadata and the `data` from the server, and should return some extracted or derived values. Because query hooks add an additional `refetch` method to whatever is returned here, it's preferably to always return an object from `selectFromResult` with the fields inside that you need.

Since `result` is being kept in the Redux store, we can't mutate it - we need to return a new object. The query hook will do a "shallow" comparison on this returned object, and only re-render the component if one of the fields has changed. We can optimize re-renders by only returning the specific fields needed by this component - if we don't need the rest of the metadata flags, we could omit them entirely. If you do need them, you can spread the original `result` value to include them in the output.

In this case, we'll call the field `postsForUser`, and we can destructure that new field from the hook result. By calling `selectPostsForUser(result, userId)` every time, it will memoize the filtered array and only recalculate it if the fetched data or the user ID changes.

### Comparing Transformation Approaches

We've now seen three different ways that we can manage transforming responses:

- Keep original response in cache, read full result in component and derive values
- Keep original response in cache, read derived result with `selectFromResponse`
- Transform response before storing in cache

Each of these approaches can be useful in different situations. Here's some suggestions for when you should consider using them:

- `transformResponse`: all consumers of the endpoint want a specific format, such as normalizing the response to enable faster lookups by ID
- `selectFromResult`: some consumers of the endpoint only need partial data, such as a filtered list
- per-component / `useMemo`: when only some specific components need to transform the cached data

## Advanced Cache Updates

We've completed updating our posts and users data, so all that's left is working with reactions and notifications. Switching these to use RTK Query will give us a chance to try out some of the advanced techniques available for working with RTK Query's cached data, and allow us to provide a better experience for our users.

### Persisting Reactions

Originally, we only tracked reactions on the client side and did not persist them to the server. Let's add a new `addReaction` mutation and use that to update the corresponding `Post` on the server every time the user clicks a reaction button.

```js title="features/api/apiSlice.js"
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "/fakeApi" }),
  tagTypes: ["Post"],
  endpoints: (builder) => ({
    // omit other endpoints
    // highlight-start
    addReaction: builder.mutation({
      query: ({ postId, reaction }) => ({
        url: `posts/${postId}/reactions`,
        method: "POST",
        // In a real app, we'd probably need to base this on user ID somehow
        // so that a user can't do the same reaction more than once
        body: { reaction },
      }),
      invalidatesTags: (result, error, arg) => [
        { type: "Post", id: arg.postId },
      ],
    }),
    // highlight-end
  }),
});

export const {
  useGetPostsQuery,
  useGetPostQuery,
  useAddNewPostMutation,
  useEditPostMutation,
  // highlight-next-line
  useAddReactionMutation,
} = apiSlice;
```

Similar to our other mutations, we take some parameters and make a request to the server, with some data in the body of the request. Since this example app is small, we'll just give the name of the reaction, and let the server increment the counter for that reaction type on this post.

We already know that we need to refetch this post in order to see any of the data change on the client, so we can invalidate this specific `Post` entry based on its ID.

With that in place, let's update `<ReactionButtons>` to use this mutation.

```jsx title="features/posts/ReactionButtons.js"
import React from "react";

// highlight-next-line
import { useAddReactionMutation } from "../api/apiSlice";

const reactionEmoji = {
  thumbsUp: "👍",
  hooray: "🎉",
  heart: "❤️",
  rocket: "🚀",
  eyes: "👀",
};

export const ReactionButtons = ({ post }) => {
  // highlight-next-line
  const [addReaction] = useAddReactionMutation();

  const reactionButtons = Object.entries(reactionEmoji).map(
    ([reactionName, emoji]) => {
      return (
        <button
          key={reactionName}
          type="button"
          className="muted-button reaction-button"
          onClick={() => {
            // highlight-next-line
            addReaction({ postId: post.id, reaction: reactionName });
          }}
        >
          {emoji} {post.reactions[reactionName]}
        </button>
      );
    }
  );

  return <div>{reactionButtons}</div>;
};
```

Let's see this in action! Go to the main `<PostsList>`, and click one of the reactions to see what happens.

![PostsList disabled while fetching](/img/tutorials/essentials/disabled-posts-fetching.png)

Uh-oh. The entire `<PostsList>` component was grayed out, because we just refetched the _entire_ list of posts in response to that one post being updated. This is deliberately more visible because our mock API server is set to have a 2-second delay before responding, but even if the response is faster, this still isn't a good user experience.

### Implementing Optimistic Updates

For a small update like adding a reaction, we probably don't need to re-fetch the entire list of posts. Instead, we could try just updating the already-cached data on the client to match what we expect to have happen on the server. Also, if we update the cache immediately, the user gets instant feedback when the click the button instead of having to wait for the response to come back. **This approach of updating client state right away is called an "optimistic update"**, and it's a common pattern in web apps.

**RTK Query lets you implement optimistic updates by modifying the client-side cache based on "request lifecycle" handlers**. Endpoints can define an `onQueryStarted` function that will be called when a request starts, and we can run additional logic in that handler.

```js title="features/api/apiSlice.js"
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "/fakeApi" }),
  tagTypes: ["Post"],
  endpoints: (builder) => ({
    // omit other endpoints

    addReaction: builder.mutation({
      query: ({ postId, reaction }) => ({
        url: `posts/${postId}/reactions`,
        method: "POST",
        // In a real app, we'd probably need to base this on user ID somehow
        // so that a user can't do the same reaction more than once
        body: { reaction },
      }),
      // highlight-start
      async onQueryStarted({ postId, reaction }, { dispatch, queryFulfilled }) {
        // `updateQueryData` requires the endpoint name and cache key arguments,
        // so it knows which piece of cache state to update
        const patchResult = dispatch(
          apiSlice.util.updateQueryData("getPosts", undefined, (draft) => {
            // The `draft` is Immer-wrapped and can be "mutated" like in createSlice
            const post = draft.find((post) => post.id === postId);
            if (post) {
              post.reactions[reaction]++;
            }
          })
        );
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
      // highlight-end
    }),
  }),
});
```

The `onQueryStarted` handler receives two parameters. The first is the cache key `arg` that was passed when the request started. The second is an object that contains some of the same fields as the `thunkApi` in `createAsyncThunk` ( `{dispatch, getState, extra, requestId}`), but also a `Promise` called `queryFulfilled`. This `Promise` will resolve when the request returns, and either fulfill or reject based on the request.

The API slice object includes a `updateQueryData` util function that lets us update cached values. It takes three arguments: the name of the endpoint to update, the same cache key value used to identify the specific cached data, and a callback that updates the cached data. **`updateQueryData` uses Immer, so you can "mutate" the drafted cache data the same way you would in `createSlice`**.

We can implement the optimistic update by finding the specific `Post` entry in the `getPosts` cache, and "mutating" it to increment the reaction counter.

`updateQueryData` generates an action object with a patch diff of the changes we made. When we dispatch that action, the return value is a `patchResult` object. If we call `patchResult.undo()`, it automatically dispatches an action that reverses the patch diff changes.

By default, we expect that the request will succeed. In case the request fails, we can `await queryFulfilled`, catch a failure, and undo the patch changes to revert the optimistic update.

For this case, we've also removed the `invalidatesTags` line we'd just added, since we _don't_ want to refetch the posts when we click a reaction button.

Now, if we click several times on a reaction button quickly, we should see the number increment in the UI each time. If we look at the Network tab, we'll also see each individual request go out to the server as well.

### Streaming Cache Updates

Our final feature is the notifications tab. When we originally built this feature in [Part 6](./part-6-performance-normalization.md#adding-notifications), we said that "in a real app, the server would push updates to our client every time something happens". We initially faked that feature by adding a "Refresh Notifications" button, and having it make an HTTP `GET` request for more notifications entries.

It's common for apps to make an _initial_ request to fetch data from the server, and then open up a Websocket connection to receive additional updates over time. **RTK Query provides an `onCacheEntryAdded` endpoint lifecycle handler that lets us implement "streaming updates" to cached data**. We'll use that capability to implement a more realistic approach to managing notifications.

Our `src/api/server.js` file has a mock Websocket server already configured, similar to the mock HTTP server. We'll write a new `getNotifications` endpoint that fetches the initial list of notifications, and then establishes the Websocket connection to listen for future updates. We still need to manually tell the mock server _when_ to send new notifications, so we'll continue faking that by having a button we click to force the update.

We'll inject the `getNotifications` endpoint in `notificationsSlice` like we did with `getUsers`, just to show it's possible.

```js title="features/notifications/notificationsSlice.js"
import { forceGenerateNotifications } from "../../api/server";
import { apiSlice } from "../api/apiSlice";

export const extendedApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getNotifications: builder.query({
      query: () => "/notifications",
      transformResponse: (res) => res.notifications,
      async onCacheEntryAdded(
        arg,
        { updateCachedData, cacheDataLoaded, cacheEntryRemoved }
      ) {
        // create a websocket connection when the cache subscription starts
        const ws = new WebSocket("ws://localhost");
        try {
          // wait for the initial query to resolve before proceeding
          await cacheDataLoaded;

          // when data is received from the socket connection to the server,
          // update our query result with the received message
          const listener = (event) => {
            const message = JSON.parse(event.data);
            switch (message.type) {
              case "notifications": {
                updateCachedData((draft) => {
                  // Insert all received notifications from the websocket
                  // into the existing RTKQ cache array
                  draft.push(...message.payload);
                  draft.sort((a, b) => b.date.localeCompare(a.date));
                });
                break;
              }
              default:
                break;
            }
          };

          ws.addEventListener("message", listener);
        } catch {
          // no-op in case `cacheEntryRemoved` resolves before `cacheDataLoaded`,
          // in which case `cacheDataLoaded` will throw
        }
        // cacheEntryRemoved will resolve when the cache subscription is no longer active
        await cacheEntryRemoved;
        // perform cleanup steps once the `cacheEntryRemoved` promise resolves
        ws.close();
      },
    }),
  }),
});

export const { useGetNotificationsQuery } = extendedApi;

const emptyNotifications = [];

export const selectNotificationsResult =
  extendedApi.endpoints.getNotifications.select();

const selectNotificationsData = createSelector(
  selectNotificationsResult,
  (notificationsResult) => notificationsResult.data ?? emptyNotifications
);

export const fetchNotificationsWebsocket = () => (dispatch, getState) => {
  const allNotifications = selectNotificationsData(getState());
  const [latestNotification] = allNotifications;
  const latestTimestamp = latestNotification?.date ?? "";
  // Hardcode a call to the mock server to simulate a server push scenario over websockets
  forceGenerateNotifications(latestTimestamp);
};

// omit existing slice code
```

Like with `onQueryStarted`, the `onCacheEntryAdded` lifecycle handler receives the `arg` cache key as its first parameter, and an options object with the `thunkApi` values as the second parameter. The options object also contains an `updateCachedData` util function, and two lifecycle `Promise`s - `cacheDataLoaded` and `cacheEntryRemoved`. `cacheDataLoaded` resolves when the _initial_ data for this subscription is added to the store. This happens when the first subscription for this endpoint + cache key is added. As long as 1+ subscribers for the data are still active, the cache entry is kept alive. When the number of subscribers goes to 0 and the cache lifetime timer expires, the cache entry will be removed, and `cacheEntryRemoved` will resolve. Typically, the usage pattern is:

- `await cacheDataLoaded` right away
- Create a server-side data subscription like a Websocket
- When an update is received, use `updateCachedData` to "mutate" the cached values based on the update
- `await cacheEntryRemoved` at the end
- Clean up subscriptions afterwwards

Our mock Websocket server file exposes a `forceGenerateNotifications` method to mimic pushing data out to the client. That depends on knowing the most recent notification timestamp, so we add a thunk we can dispatch that reads the latest timestamp from the cache state and tells the mock server to generate newer notifications.

Inside of `onCacheEntryAdded`, we create a real `Websocket` connection to `localhost`. In a real app, this could be any kind of external subscription or polling connection you need to receive ongoing updates. Whenever the mock server sends us an update, we push all of the received notifications into the cache and re-sort it.

When the cache entry is removed, we clean up the Websocket subscription. In this app, the notifications cache entry will never be removed because we never unsubscribe from the data, but it's important to see how the cleanup would work for a real app.

### Tracking Client-Side State

We need to make one final set of updates. Our `<Navbar>` component has to initiate the fetching of notifications, and `<NotificationsList>` needs to show the notification entries with the correct read/unread status. However, we were previously adding the read/unread fields on the client side in our `notificationsSlice` reducer when we received the entries, and now the notification entries are being kept in the RTK Query cache.

We can rewrite `notificationsSlice` so that it listens for any received notifications, and tracks some additional state on the client side for each notification entry.

There's two cases when new notification entries are received: when we fetch the initial list over HTTP, and when we receive an update pushed over the Websocket connection. Ideally, we want to use the same logic in response to both cases. We can use RTK's ["matching utilities"](https://redux-toolkit.js.org/api/matching-utilities) to write one case reducer that runs in response to multiple action types.

Let' see what `notificationsSlice` looks like after we add this logic.

```js title="features/notifications/notificationsSlice.js"
import {
  // highlight-next-line
  createAction,
  createSlice,
  createEntityAdapter,
  createSelector,
  // highlight-next-line
  isAnyOf,
} from "@reduxjs/toolkit";

import { forceGenerateNotifications } from "../../api/server";
import { apiSlice } from "../api/apiSlice";

// highlight-start
const notificationsReceived = createAction(
  "notifications/notificationsReceived"
);
// highlight-end

export const extendedApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getNotifications: builder.query({
      query: () => "/notifications",
      async onCacheEntryAdded(
        arg,
        // highlight-next-line
        { updateCachedData, cacheDataLoaded, cacheEntryRemoved, dispatch }
      ) {
        // create a websocket connection when the cache subscription starts
        const ws = new WebSocket("ws://localhost");
        try {
          // wait for the initial query to resolve before proceeding
          await cacheDataLoaded;

          // when data is received from the socket connection to the server,
          // update our query result with the received message
          const listener = (event) => {
            const message = JSON.parse(event.data);
            switch (message.type) {
              case "notifications": {
                updateCachedData((draft) => {
                  // Insert all received notifications from the websocket
                  // into the existing RTKQ cache array
                  draft.push(...message.payload);
                  draft.sort((a, b) => b.date.localeCompare(a.date));
                });
                // highlight-start
                // Dispatch an additional action so we can track "read" state
                dispatch(notificationsReceived(message.payload));
                // highlight-end
                break;
              }
              default:
                break;
            }
          };

          ws.addEventListener("message", listener);
        } catch {
          // no-op in case `cacheEntryRemoved` resolves before `cacheDataLoaded`,
          // in which case `cacheDataLoaded` will throw
        }
        // cacheEntryRemoved will resolve when the cache subscription is no longer active
        await cacheEntryRemoved;
        // perform cleanup steps once the `cacheEntryRemoved` promise resolves
        ws.close();
      },
    }),
  }),
});

export const { useGetNotificationsQuery } = extendedApi;

// omit selectors and websocket thunk

// highlight-start
const notificationsAdapter = createEntityAdapter();

const matchNotificationsReceived = isAnyOf(
  notificationsReceived,
  extendedApi.endpoints.getNotifications.matchFulfilled
);
// highlight-end

const notificationsSlice = createSlice({
  name: "notifications",
  initialState: notificationsAdapter.getInitialState(),
  reducers: {
    allNotificationsRead(state, action) {
      Object.values(state.entities).forEach((notification) => {
        notification.read = true;
      });
    },
  },
  extraReducers(builder) {
    // highlight-start
    builder.addMatcher(matchNotificationsReceived, (state, action) => {
      // Add client-side metadata for tracking new notifications
      const notificationsMetadata = action.payload.map((notification) => ({
        id: notification.id,
        read: false,
        isNew: true,
      }));

      Object.values(state.entities).forEach((notification) => {
        // Any notifications we've read are no longer new
        notification.isNew = !notification.read;
      });

      notificationsAdapter.upsertMany(state, notificationsMetadata);
    });
    // highlight-end
  },
});

// omit slice exports
```

There's a lot going on, but let's break down the changes one at a time.

There isn't currently a good way for the `notificationsSlice` reducer to know when we've received an updated list of new notifications via the Websocket. So, we'll import `createAction`, define a new action type specifically for the "received some notifications" case, and dispatch that action after updating the cache state.

We want to run the same "add read/new metadata" logic for _both_ the "fulfilled `getNotifications`" action _and_ the "received from Websocket" action. We can create a new "matcher" function by calling `isAnyOf()` and passing in each of those action creators. The `matchNotificationsReceived` matcher function will return true if the current action matches either of those types.

Finally, we can use the `builder.addMatcher()` API inside of `extraReducers` to add a case reducer that runs whenever we match one of those two action types. Inside of there, we add a new "read/isNew" metadata entry that corresponds to each notification by ID, and store that inside of `notificationsSlice`.

With those changes in place, we can update our UI components to fetch and display notifications.

```jsx title="app/Navbar.js"
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
  // highlight-start
  fetchNotificationsWebsocket,
  selectNotificationsMetadata,
  useGetNotificationsQuery,
  // highlight-end
} from "../features/notifications/notificationsSlice";

export const Navbar = () => {
  const dispatch = useDispatch();

  // highlight-start
  // Trigger initial fetch of notifications and keep the websocket open to receive updates
  useGetNotificationsQuery();

  const notificationsMetadata = useSelector(selectNotificationsMetadata);
  const numUnreadNotifications = notificationsMetadata.filter(
    (n) => !n.read
  ).length;

  const fetchNewNotifications = () => {
    dispatch(fetchNotificationsWebsocket());
  };
  // highlight-end

  let unreadNotificationsBadge;

  if (numUnreadNotifications > 0) {
    unreadNotificationsBadge = (
      <span className="badge">{numUnreadNotifications}</span>
    );
  }

  // omit rendering logic
};
```

In `<NavBar>`, we trigger the initial notifications fetch with `useGetNotificationsQuery()`, and switch to reading the metadata objects from `state.notificationsSlice`. Clicking the "Refresh" button now triggers the mock Websocket server to push out another set of notifications.

Our `<NotificationsList>` similarly switches over to reading the cached data and metadata.

```jsx title="features/notifications/NotificationsList.js"
import {
  // highlight-start
  useGetNotificationsQuery,
  allNotificationsRead,
  selectMetadataEntities,
  // highlight-end
} from './notificationsSlice'

export const NotificationsList = () => {
  const dispatch = useDispatch()
  // highlight-start
  const { data: notifications = [] } = useGetNotificationsQuery()
  const notificationsMetadata = useSelector(selectMetadataEntities)
  // highlight-end
  const users = useSelector(selectAllUsers)

  useLayoutEffect(() => {
    dispatch(allNotificationsRead())
  })

  const renderedNotifications = notifications.map((notification) => {
    const date = parseISO(notification.date)
    const timeAgo = formatDistanceToNow(date)
    const user = users.find((user) => user.id === notification.user) || {
      name: 'Unknown User',
    }

    // highlight-next-line
    const metadata = notificationsMetadata[notification.id]

    const notificationClassname = classnames('notification', {
      // highlight-next-line
      new: metadata.isNew,
    })

  // omit rendering logic
}
```

We read the list of notifications from cache and the new metadata entries from the notificationsSlice, and continue displaying them the same way as before.

As a final step, we can do some additional cleanup here - the `postsSlice` is no longer being used, so that can be removed entirely.

With that, we've finished converting our application over to use RTK Query! All of the data fetching has been switched over to use RTKQ, and we've improved the user experience by adding optimistic updates and streaming updates.

## What You've Learned

As we've seen, RTK Query includes some powerful options for controlling how we manage cached data. While you may not need all of these options right away, they provide flexibility and key capabilities to help implement specific application behaviors.

Let's take one last look at the whole application in action:

<iframe
  class="codesandbox"
  src="https://codesandbox.io/embed/github/reduxjs/redux-essentials-example-app/tree/checkpoint-6-rtkqConversion/?fontsize=14&hidenavigation=1&theme=dark&runonclick=1"
  title="redux-essentials-example-app"
  allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
  sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
></iframe>

:::tip Summary

- **Specific cache tags can be used for finer-grained cache invalidation**
  - Cache tags can be either `'Post'` or `{type: 'Post', id}`
  - Endpoints can provide or invalidate cache tags based on results and arg cache keys
- **RTK Query's APIs are UI-agnostic and can be used outside of React**
  - Endpoint objects include functions for initating requests, generating result selectors, and matching request action objects
- **Responses can be transformed in different ways as needed**
  - Endpoints can define a `transformResponse` callback to modify the data before caching
  - Hooks can be given a `selectFromResponse` option to extract/transform data
  - Components can read an entire value and transform with `useMemo`
- **RTK Query has advanced options for manipulating cached data for better user experience**
  - The `onQueryStarted` lifecycle can be used for optimistic updates by updating cache immediately before a request returns
  - The `onCacheEntryAdded` lifecycle can be used for streaming updates by updating cache over time based on server push connections

:::

## What's Next?

Congratulations, **you've completed the Redux Essentials tutorial!** You should now have a solid understanding of what Redux Toolkit and React-Redux are, how to write and organize Redux logic, Redux data flow and usage with React, and how to use APIs like `configureStore` and `createSlice`. You should also see how RTK Query can simplify the process of fetching and using cached data.

The ["What's Next?" section in Part 6](./part-6-performance-normalization.md) has links to additional resources for app ideas, tutorials, and documentation.

For more details on using RTK Query, see [the RTK Query usage guide docs](https://redux-toolkit.js.org/rtk-query/usage/queries) and [API reference](https://redux-toolkit.js.org/rtk-query/api/createApi).

If you're looking for help with Redux questions, come join [the `#redux` channel in the Reactiflux server on Discord](https://www.reactiflux.com).

**Thanks for reading through this tutorial, and we hope you enjoy building applications with Redux!**
