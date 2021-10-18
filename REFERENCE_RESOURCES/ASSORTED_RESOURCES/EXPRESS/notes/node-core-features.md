## Overview

Traditionally, developers only used the JavaScript language in web browsers. But, in 2009, **Node.js** was unveiled, and with it, the developer tool kit expanded greatly. Node.js gave developers the chance to use JavaScript to write software that, up to that point, could only be written using C, C++, Java, Python, Ruby, C#, and the like.

We will use Node to write server code. Specifically, **web services** that can communicate with clients using the **J**ava**S**cript **O**bject **N**otation (JSON) format for data interchange.

Some of the advantages of using Node.js for writing server-side code are:

-   Uses the same programming language (JavaScript) and paradigm for both client and server. Using the same language, we minimize context switching and make it easy to share code between the client and the server.
-   JavaScript is single-threaded, which removes the complexity involved in handling multiple threads.
-   JavaScript is asynchronous, which allows us to take full advantage of the processor it's running on. Taking full advantage of the processor is crucial because the node process will be running on a single CPU.
-   Using JavaScript gives us access to the npm repository. This repository is the largest ecosystem of useful libraries (most of them free to use) in **npm modules**.

Some of the disadvantages of using Node.js for writing server-side code are:

-   By strictly using JavaScript on the server, we lose the ability to use the right tool (a particular language) for the job.
-   Because JavaScript is single-threaded, we can't take advantage of servers with multiple cores/processors.
-   Because JavaScript is asynchronous, it is harder to learn for developers that have only worked with languages that default to synchronous operations that block the execution thread.
-   In the npm repository, there are often too many packages that do the same thing. This excess of packages makes it harder to choose one and, in some cases, may introduce vulnerabilities into our code.

To write a simple web server with `Node.js`:

1.  Use Node's `HTTP` module to abstract away complex network-related operations.
2.  Write the single **_request handler_** function to handle all requests to the server.

The request handler is a function that takes the `request` coming from the client and produces the `response`. The function takes two arguments: 1) an object representing the `request` and 2) an object representing the `response`.

This process works, but the resulting code is verbose, even for the simplest of servers. Also, note that when using only Node.js to build a server, we use a single request handler function for all requests.

## Follow Along

Using only Node.js, let's write a simple web server that returns a message. Create a folder for the server and add an `index.js` file inside.

Next, add the following code to the `index.js` file:

```
const http = require("http"); 

const hostname = "127.0.0.1"; 
const port = 3000; 

const server = http.createServer((req, res) => {
    
    res.statusCode = 200; 
    res.setHeader("Content-Type", "text/plain"); 
    res.end("Hello World from Node\n"); 
});

server.listen(port, hostname, () => {
    
    console.log(`Server running at http://${hostname}:${port}/`);
});
```

Now navigate to the folder in a terminal/console window and type: `node index.js` to execute your file. A message that reads "_Server running at http://127.0.0.1:3000_" should be displayed, and the server is now waiting for connections.

Open a browser and visit: `http://localhost:3000`. `localhost` and the IP address `127.0.0.1` point to the same thing: your local computer. The browser should show the message: "_Hello World from Node_". There you have it, your first web server, built from scratch using nothing but `Node.js`.

## Challenge

Write a paragraph about what `Node.js` is and explain at least 3 of its core features.