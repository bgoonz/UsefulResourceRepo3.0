## Overview

Node's built-in `HTTP` module provides a powerful way to build web applications and services. However, it requires a lot of code for everyday tasks like sending an HTML page to the browser.

Introducing Express, a light and unopinionated framework that **sits on top of Node.js**, making it easier to create web applications and services. Sending an HTML file or image is now a one-line task with the `sendFile` helper method in `Express`.

Ultimately, Express is **just a Node.js module** like any other module.

What can we do with Express? So many things! For example:

- Build web applications.
- Serve _Single Page Applications_ (SPAs).
- Build RESTful web services that work with JSON.
- Serve static content, like HTML files, images, audio files, PDFs, and more.
- Power real-time applications using technologies like **Web Sockets** or **WebRTC**.

Some of the benefits of using Express are that it is:

- Simple
- Unopinionated
- Extensible
- Light-weight
- Compatible with [connect middleware (Links to an external site.)](https://www.npmjs.com/package/connect). This compatibility means we can tap into an extensive collection of modules written for `connect`.
- All packaged into a clean, intuitive, and easy-to-use API.
- Abstracts away common tasks (writing web applications can be verbose, hence the need for a library like this).

Some of the drawbacks of Express are:

- It's not a one-stop solution. Because of its simplicity, it does very little out of the box. Especially when compared to frameworks like **Ruby on Rails** and **Django**.
- We are forced to make more decisions due to the flexibility and control it provides.

### Main Features of Express

#### Middleware

Middleware functions can get the request and response objects, operate on them, and (when specified) trigger some action. Examples are logging or security.

Express's middleware stack is an array of functions.

Middleware _can_ change the request or response, but it doesn't have to.

#### Routing

Routing is a way to select which request handler function is executed. It does so based on the URL visited and the HTTP method used. Routing provides a way to break an application into smaller parts.

#### Routers for Application Modularity

We can break up applications into **routers**. We could have a router to serve our SPA and another router for our API. Each router can have its own middleware and routing. This combination provides improved functionality.

#### Convenience Helpers

Express has many helpers that provide out of the box functionality to make writing web applications and API servers easier.

A lot of those helpers are extension methods added to the request and response objects.

Examples [from the Api Reference (Links to an external site.)](https://expressjs.com/en/4x/api.html) include: `response.redirect()`, `response.status()`, `response.send()`, and `request.ip`.

#### Views

Views provide a way to dynamically render HTML on the server and even generate it using other languages.

## Follow Along

Let's write our first server using Express:

- Create a new file called `server.js` to host our server code.
- Type `npm init -y` to generate a `package.json`.
- Install the `express` npm module using: `npm install express`.

Inside `server.js` add the following code:

```
const express = require('express');

const server = express();


server.get('/', (req, res) => {
  res.send('Hello from Express');
});


server.listen(5000, () =>
  console.log('Server running on http://localhost:5000')
);
```

Run the server by typing: `node server.js` and visit `http://localhost:5000` in the browser.

To stop the server, type `Ctrl + c` at the terminal window.

## Challenge

On your own: Write a paragraph about what Express is and explain how it is used in modern web application development.
