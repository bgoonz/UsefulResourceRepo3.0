# HTTP/AJAX

Topics:

* `axios` package
* AJAX
* Promises

## Instructions

1.  Run `yarn install or npm install` inside the root directory of this project1Run `yarn start or npm start` to start the server.
1.  The provided server returns a list of friends when a `GET` request is made to [`http://localhost:5000/friends`](http://localhost:5000/friends).
1.  In a separate terminal window, run `create-react-app friends` or if you didn't install it globally `npx create-react-app friends` to create your starter React application.
1.  CD into `friends` and run `yarn add axios react-router-dom` or `npm install --save axios react-router-dom` to include those dependencies in your project. _You'll need react router for the stretch problems_
1.  CD into `friends` and run `yarn start or npm start` to fire up your React Dev Server.
1.  Inside your React application, create a component to display the list of friends coming from the server.
1.  Add a form to gather information about a new friend.
1.  Add a button to save the new friend by making a `POST` request to the same endpoint listed above.
1.  Each `friend` should have the following properties:

```js
{
  name: should be a string,
  age: should be a number,
  email: should be a string,
}
```

---

## Stretch Problems

1.  Separate the list of friends and the new friend form into different components, and use the appropriate React Router to build routes for the proper aspects of your components to be revealed separately.
1.  Implement `Update` and `Delete` functionality.
    * for `update` pass the friend id as a URL parameter, including the information about the friend inside the body.
    * for `delete` pass the friend id as a URL parameter.
1.  Style the friends list, the input field, and make everything look nice.
1.  Expand the number of properties that you put on each friend object.
1.  Feel free to remove the dummy data on the server or modify it in any way.
