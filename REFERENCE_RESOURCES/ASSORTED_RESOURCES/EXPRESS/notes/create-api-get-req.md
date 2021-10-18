## Overview

In this overview, we're walking through the steps necessary to build a simple Web API that returns the string "Hello World" on every incoming `GET` request. The program should return the string every time a request comes into the root route ("/"). For now, you don't need to code along, just read through the steps.

To make things easier, we'll use an existing repository as the base for our API. Later in the week, as we learn more about Node.js and Express, we'll create an API from scratch.

To build our first API, we will:

1.  clone the [node-express-mini repository (Links to an external site.)](https://github.com/LambdaSchool/node-express-mini) to a folder on our computer.
2.  Navigate into the folder using `cd`.
3.  Use `npm install` to download all dependencies.
4.  Add a file called `index.js` at the folder's root, next to the `package.json` file.
5.  Open the `index.js` file using our favorite code editor.
6.  Add the following code:

```

const express = require('express');


const server = express();




server.get('/', (req, res) => {
  
  
  res.send('Hello World');
});



server.listen(8000, () => console.log('API running on port 8000'));
```

**make sure to save your changes to `index.js`.**

We are using the `express` npm module in our code, so we need to add it as a dependency to our project. To do this:

-   Open a terminal/console/command prompt window and navigate to the root of our project.
-   Add express to our `package.json` file by typing `npm install express`.

Now we're ready to test our API!

In the terminal, still at the root of our project:

-   Type: `npm run server` to run our API. The message _"Api running on port 8000"_ should appear on the terminal.
-   Open a web browser and navigate to "http://localhost:8000".

There we have it, our first API!

A lot is going on in those few lines of code (only six lines if we remove the comments and white space). We will cover every piece of it in detail over the following modules, but here is a quick rundown of the most important concepts.

First, we used `require()` to **import** the `express module` and make it available to our application. `require()` is similar to the `import` keyword we have used before. The line `const express = require('express');` is equivalent to `import express from 'express';` if we were using ES2015 syntax.

The following line creates our Express application. The return of calling `express()` is an instance of an Express application that we can use to configure our **server** and, eventually, start listening for and responding to requests. Notice we use the word server, not API. An Express application is generic, which means we can use it to serve static content (HTML, CSS, audio, video, PDFs, and more). We can also use an Express application to serve dynamically generated web pages, build real-time communications servers, and more. We will use it statically to accept requests from clients and respond with data in JSON format.

An Express application publishes a set of methods we can use to configure functions. We are using the `.get()` method to set up a **route handler** function that will run on every `GET` request. As a part of this handler function, we specify the URL which will trigger the request. In this case, the URL is the site's root (represented by a `/`). There are also methods to handle the `POST`, `PUT`, and `DELETE` HTTP verbs.

The first two arguments passed by `express` to a route handler function are 1) an object representing the `request` and 2) an object representing the `response`. Express expands those objects with a set of useful properties and methods. Our example uses the `.send()` method of the response object to specify the data we will send to the client as the response body. You can call the first two arguments anything you want, but it is prevalent to see them dubbed `req` and `res`. We at Lambda call them **the homies** as they always hang out together.

That's all the configuring we need to do for this first example. We'll see other ways of configuring our server as we go forward.

After configuring the server, it's time to turn it on. We use the `.listen()` method to monitor a port on the computer for any incoming connections and respond to those we have configured. Our server will only respond to `GET` requests made to the `/` route on port `8000`.

That's it for our first Web API, and now it's time for you to follow along as we add a new **endpoint** to our server that returns JSON data!

## Follow Along

Let's try returning JSON instead of just a simple string.

Please follow the steps outlined on the overview, but, to save time, copy and paste the content of `index.js` instead of typing it. Then run your API through a browser to make sure it works.

Now follow along as we code a new _endpoint_ that returns an array of movie characters in JSON format.

The first step is to define a new _route handler_ to respond to `GET` requests at the `/hobbits` endpoint.

```
server.get('/hobbits', (req, res) => {
  
});
```

Next, we define the return data that our endpoint will send back to the client. We do this inside the newly defined route handler function.

```
const hobbits = [
  {
    id: 1,
    name: 'Samwise Gamgee',
  },
  {
    id: 2,
    name: 'Frodo Baggins',
  },
];
```

Now we can return the `hobbits` array. We could use `.send(hobbits)` as we did for the string on the `/` endpoint, but this time we'll learn about two other useful methods we find in the response object.

```
res.status(200).json(hobbits);
```

We should provide as much useful information as possible to the clients using our API. One such piece of data is the `HTTP status code` that reflects the client's operation outcome. In this case, the client is trying to get a list of a particular `resource`, a `hobbits` list. Sending back a `200 OK` status code communicates to the client that the operation was successful.

We will see other status codes as we continue to build new endpoints during this week. You can see a list by following [this link to the documentation about HTTP Response Codes on the Mozilla Developer Network site (Links to an external site.)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status).

We can use the `.status()` method of the response object to send any valid `HTTP status code`.

We are also chaining the `.json()` method of the response object. We do this to communicate to both the client making the request and the next developer working with this code that we intend to send the data in `JSON format`.

The complete code for `index.js` should now look like so:

```
const express = require('express');

const server = express();

server.get('/', (req, res) => {
  res.send('Hello World');
});

server.get('/hobbits', (req, res) => {
  const hobbits = [
    {
      id: 1,
      name: 'Samwise Gamgee',
    },
    {
      id: 2,
      name: 'Frodo Baggins',
    },
  ];

  res.status(200).json(hobbits);
});

server.listen(8000, () => console.log('API running on port 8000'));
```

Now we can visit `http://localhost:8000/hobbits` in our browser, and we should get back our JSON array.

If you are using the Google Chrome browser, [this extension (Links to an external site.)](https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc) can format the JSON data in a more readable fashion.

Congratulations! You just built an API that can return data in JSON format.

## Challenge

Write an endpoint that returns a list of users stored in a database—return data in `JSON` format.

Production APIs return data from a data store or external source, not from an in-memory array like we have done so far.

Your job is to create a new `/users` endpoint that returns the list of users contained in the provided database. To get the list of users, **require** the `/data/db.js` file into `index.js` and use its `.find()` method to get the data. The `.find()` method returns a promise. Make sure to send the response after that promise has been resolved. In case of failure, return a status code of 500 and an error message to the client.

Good luck!