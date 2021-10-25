<a href="/categories/coding/" class="category-link">Coding</a> &gt; <a href="/categories/coding/web-development/" class="category-link">Web Development</a> &gt; <a href="/categories/coding/web-development/angular/" class="category-link">Angular</a>

# Creating RESTful APIs with NodeJS and MongoDB Tutorial (Part II)

<span title="Last time this post was updated"> Last updated October 14th 2016 </span> <span class="m-x-2" title="Pageviews"> 574.4k </span> <span class="m-x-2" title="Click to go to the comments section"> [ <span class="disqus-comment-count" data-disqus-url="https://master--bgoonz-blog.netlify.app/creating-a-restful-api-tutorial-with-nodejs-and-mongodb/">0</span>](#disqus_thread) </span>

- <a href="/tags/express/" class="tag-list-link">express</a><span class="tag-list-count">2</span>
- <a href="/tags/mongodb/" class="tag-list-link">mongodb</a><span class="tag-list-count">3</span>
- <a href="/tags/nodejs/" class="tag-list-link">nodejs</a><span class="tag-list-count">12</span>
- <a href="/tags/tutorial-mean-stack/" class="tag-list-link">tutorial_mean-stack</a><span class="tag-list-count">3</span>

![Creating RESTful APIs with NodeJS and MongoDB Tutorial (Part II)](/images/RESTfulAPIs_NodeJS__mongodb_large.png)

Welcome to this tutorial about RESTful API using Node.js (Express.js) and MongoDB (mongoose)! We are going to learn how to install and use each component individually and then proceed to create a RESTful API.

<span id="more"></span>

> Check out the updated version of this post with Angular 9+, Node.js 12+ in here: [Modern MEAN Stack Tutorial with Docker](/angular-todo-mean-stack-node-mongodb-typescript-tutorial/)

MEAN Stack tutorial series:

1.  [AngularJS tutorial for beginners (Part I)](/blog/2014/09/28/angularjs-tutorial-for-beginners-with-nodejs-expressjs-and-mongodb/)
2.  Creating RESTful APIs with NodeJS and MongoDB Tutorial (Part II) **👈 you are here**
3.  [MEAN Stack Tutorial: MongoDB, ExpressJS, AngularJS and NodeJS (Part III)](/blog/2014/10/03/mean-stack-tutorial-mongodb-expressjs-angularjs-nodejs/)

## <a href="#What-is-a-RESTful-API" class="headerlink" title="What is a RESTful API?"></a>What is a RESTful API?

REST stands for Representational State Transfer. It is an architecture that allows `client-server` communication through a uniform interface. REST is `stateless`, `cachable` and has property called `idempotence`. It means that the side effect of identical requests have the same side-effect as a single request.

HTTP RESTful API’s are compose of:

- HTTP methods, e.g. GET, PUT, DELETE, PATCH, POST, …
- Base URI, e.g. `http://adrianmejia.com`
- URL path, e.g. `/blog/2014/10/01/creating-a-restful-api-tutorial-with-nodejs-and-mongodb/`
- Media type, e.g. `html`, `JSON`, `XML`, `Microformats`, `Atom`, `Images`…

Here is a summary what we want to implement:

<table><thead><tr class="header"><th>Resource (URI)</th><th>POST (create)</th><th>GET (read)</th><th>PUT (update)</th><th>DELETE (destroy)</th></tr></thead><tbody><tr class="odd"><td>/todos</td><td>create new task</td><td>list tasks</td><td>N/A (update all)</td><td>N/A (destroy all)</td></tr><tr class="even"><td>/todos/1</td><td>error</td><td>show task ID 1</td><td>update task ID 1</td><td>destroy task ID 1</td></tr></tbody></table>

**NOTE** for this tutorial:

- Format will be JSON.
- Bulk updates and bulk destroys are not safe, so we will not be implementing those.
- **CRUD** functionality: POST == **C**REATE, GET == **R**EAD, PUT == **U**PDATE, DELETE == **D**ELETE.

## <a href="#Installing-the-MEAN-Stack-Backend" class="headerlink" title="Installing the MEAN Stack Backend"></a>Installing the MEAN Stack Backend

In this section, we are going to install the backend components of the MEAN stack: MongoDB, NodeJS and ExpressJS. If you already are familiar with them, then jump to [wiring the stack](#wiring-up-the-mean-stack). Otherwise, enjoy the ride!

### <a href="#Installing-MongoDB" class="headerlink" title="Installing MongoDB"></a>Installing MongoDB

MongoDB is a document-oriented NoSQL database (Big Data ready). It stores data in JSON-like format and allows users to perform SQL-like queries against it.

You can install MongoDB following the [instructions here](http://docs.mongodb.org/manual/installation/).

If you have a **Mac** and [brew](http://brew.sh/) it’s just:

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1</code></pre></td><td><pre><code>brew install mongodb &amp;&amp; mongod</code></pre></td></tr></tbody></table>

In **Ubuntu**:

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1</code></pre></td><td><pre><code>sudo apt-get -y install mongodb</code></pre></td></tr></tbody></table>

After you have them installed, check version as follows:

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7
8
9</code></pre></td><td><pre><code>## Mac
mongod --version
## =&gt; db version v2.6.4
## =&gt; 2014-10-01T19:07:26.649-0400 git version: nogitversion

## Ubuntu

mongod --version

## =&gt; db version v2.0.4, pdfile version 4.5

## =&gt; Wed Oct 1 23:06:54 git version: nogitversion</code></pre></td></tr></tbody></table>

### <a href="#Installing-NodeJS" class="headerlink" title="Installing NodeJS"></a>Installing NodeJS

The Node official definition is:

> Node.js® is a JavaScript runtime built on Chrome’s V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js’ package ecosystem, npm, is the largest ecosystem of open source libraries in the world.
>
> **Node.js Website**[nodejs.org](https://nodejs.org)

In short, NodeJS allows you to run Javascript outside the browser, in this case, on the web server. NPM allows you to install/publish node packages with ease.

To install it, you can go to the [NodeJS Website](http://nodejs.org/).

Since Node versions changes very often. You can use the NVM (Node Version Manager) on **Ubuntu** and Mac with:

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7
8
9</code></pre></td><td><pre><code>## download NPM
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.4/install.sh | bash

## load NPM

export NVM_DIR=&quot;$HOME/.nvm&quot;
[ -s &quot;$NVM_DIR/nvm.sh&quot; ] &amp;&amp; . &quot;$NVM_DIR/nvm.sh&quot; # This loads nvm

## Install latest stable version

nvm install stable</code></pre></td></tr></tbody></table>

Check out <https://github.com/creationix/nvm> for more details.

Also, on **Mac** and [brew](http://brew.sh) you can do:

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1</code></pre></td><td><pre><code>brew install nodejs</code></pre></td></tr></tbody></table>

After you got it installed, check node version and npm (node package manager) version:

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5</code></pre></td><td><pre><code>node -v
## =&gt; v6.2.2

npm -v

## =&gt; 3.9.5</code></pre></td></tr></tbody></table>

### <a href="#Installing-ExpressJS" class="headerlink" title="Installing ExpressJS"></a>Installing ExpressJS

ExpressJS is a web application framework that runs on NodeJS. It allows you to build web applications and API endpoints. (more details on this later).

We are going to create a project folder first, and then add `express` as a dependency. Let’s use NPM init command to get us started.

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7
8
9</code></pre></td><td><pre><code>## create project folder
mkdir todo-app

## move to the folder and initialize the project

cd todo-app
npm init . # press enter multiple times to accept all defaults

## install express v4.14 and save it as dependency

npm install express@4.14 --save</code></pre></td></tr></tbody></table>

Notice that after the last command, `express` should be added to package.json with the version `4.14.x`.

## <a href="#Using-MongoDB-with-Mongoose" class="headerlink" title="Using MongoDB with Mongoose"></a>Using MongoDB with Mongoose

Mongoose is an NPM package that allows you to interact with MongoDB. You can install it as follows:

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1</code></pre></td><td><pre><code>npm install mongoose@4.5.8 --save</code></pre></td></tr></tbody></table>

If you followed the previous steps, you should have all you need to complete this tutorial. We are going to build an API that allow users to CRUD (Create-Read-Update-Delete) Todo tasks from database.

### <a href="#Mongoose-CRUD" class="headerlink" title="Mongoose CRUD"></a>Mongoose CRUD

CRUD == **C**reate-**R**ead-**U**pdate-**D**elete

We are going to create, read, update and delete data from MongoDB using Mongoose/Node. First, you need to have mongodb up and running:

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2</code></pre></td><td><pre><code>## run mongo daemon
mongod</code></pre></td></tr></tbody></table>

Keep mongo running in a terminal window and while in the folder `todoApp` type `node` to enter the node CLI. Then:

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16</code></pre></td><td><pre><code>// Load mongoose package
var mongoose = require(&#39;mongoose&#39;);

// Connect to MongoDB and create/use database called todoAppTest
mongoose.connect(&#39;mongodb://localhost/todoAppTest&#39;);

// Create a schema
var TodoSchema = new mongoose.Schema({
name: String,
completed: Boolean,
note: String,
updated_at: { type: Date, default: Date.now },
});

// Create a model based on the schema
var Todo = mongoose.model(&#39;Todo&#39;, TodoSchema);</code></pre></td></tr></tbody></table>

Great! Now, let’s test that we can save and edit data.

### <a href="#Mongoose-Create" class="headerlink" title="Mongoose Create"></a>Mongoose Create

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7
8
9
10
11</code></pre></td><td><pre><code>// Create a todo in memory
var todo = new Todo({name: &#39;Master NodeJS&#39;, completed: false, note: &#39;Getting there...&#39;});

// Save it to database
todo.save(function(err){
if(err)
console.log(err);
else
console.log(todo);
});</code></pre></td></tr></tbody></table>

If you take a look to Mongo you will notice that we just created an entry. You can easily visualize data using [Robomongo](https://robomongo.org/):

![](https://i.imgur.com/DI6Vxwq.png "Viewing data with Robomongo")

You can also build the object and save it in one step using `create`:

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4</code></pre></td><td><pre><code>Todo.create({name: &#39;Create something with Mongoose&#39;, completed: true, note: &#39;this is one&#39;}, function(err, todo){
  if(err) console.log(err);
  else console.log(todo);
});</code></pre></td></tr></tbody></table>

### <a href="#Mongoose-Read-and-Query" class="headerlink" title="Mongoose Read and Query"></a>Mongoose Read and Query

So far we have been able to save data, now we are going explore how to query the information. There are multiple options for reading/querying data:

- Model.find(conditions, \[fields\], \[options\], \[callback\])
- Model.findById(id, \[fields\], \[options\], \[callback\])
- Model.findOne(conditions, \[fields\], \[options\], \[callback\])

Some examples:

Find all

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5</code></pre></td><td><pre><code>// Find all data in the Todo collection
Todo.find(function (err, todos) {
  if (err) return console.error(err);
  console.log(todos)
});</code></pre></td></tr></tbody></table>

The result is something like this:

results

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7
8
9
10
11
12</code></pre></td><td><pre><code>[ { _id: 57a6116427f107adef36c2f2,
    name: &#39;Master NodeJS&#39;,
    completed: false,
    note: &#39;Getting there...&#39;,
    __v: 0,
    updated_at: 2016-08-06T16:33:40.606Z },
  { _id: 57a6142127f107adef36c2f3,
    name: &#39;Create something with Mongoose&#39;,
    completed: true,
    note: &#39;this is one&#39;,
    __v: 0,
    updated_at: 2016-08-06T16:45:21.143Z } ]</code></pre></td></tr></tbody></table>

You can also add queries

Find with queries

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7
8
9
10
11</code></pre></td><td><pre><code>// callback function to avoid duplicating it all over
var callback = function (err, data) {
  if (err) { return console.error(err); }
  else { console.log(data); }
}

// Get ONLY completed tasks
Todo.find({completed: true }, callback);

// Get all tasks ending with `JS`
Todo.find({name: /JS$/ }, callback);</code></pre></td></tr></tbody></table>

You can chain multiple queries, e.g.:

Chaining queries

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7
8</code></pre></td><td><pre><code>var oneYearAgo = new Date();
oneYearAgo.setYear(oneYearAgo.getFullYear() - 1);

// Get all tasks staring with `Master`, completed
Todo.find({name: /^Master/, completed: true }, callback);

// Get all tasks staring with `Master`, not completed and created from year ago to now...
Todo.find({name: /^Master/, completed: false }).where(&#39;updated_at&#39;).gt(oneYearAgo).exec(callback);</code></pre></td></tr></tbody></table>

MongoDB query language is very powerful. We can combine regular expressions, date comparison and more!

### <a href="#Mongoose-Update" class="headerlink" title="Mongoose Update"></a>Mongoose Update

Moving on, we are now going to explore how to update data.

Each model has an `update` method which accepts multiple updates (for batch updates, because it doesn’t return an array with data).

- Model.update(conditions, update, \[options\], \[callback\])
- Model.findByIdAndUpdate(id, \[update\], \[options\], \[callback\])
- Model.findOneAndUpdate(\[conditions\], \[update\], \[options\], \[callback\])

Alternatively, the method `findOneAndUpdate` could be used to update just one and return an object.

Todo.update and Todo.findOneAndUpdate

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7
8</code></pre></td><td><pre><code>// Model.update(conditions, update, [options], [callback])
// update `multi`ple tasks from complete false to true

Todo.update({ name: /master/i }, { completed: true }, { multi: true }, callback);

//Model.findOneAndUpdate([conditions], [update], [options], [callback])
Todo.findOneAndUpdate({name: /JS$/ }, {completed: false}, callback);</code></pre></td></tr></tbody></table>

As you might noticed the batch updates (`multi: true`) doesn’t show the data, rather shows the number of fields that were modified.

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1</code></pre></td><td><pre><code>{ ok: 1, nModified: 1, n: 1 }</code></pre></td></tr></tbody></table>

Here is what they mean:

- `n` means the number of records that matches the query
- `nModified` represents the number of documents that were modified with update query.

### <a href="#Mongoose-Delete" class="headerlink" title="Mongoose Delete"></a>Mongoose Delete

`update` and `remove` mongoose API are identical, the only difference it is that no elements are returned. Try it on your own ;)

- Model.remove(conditions, \[callback\])
- Model.findByIdAndRemove(id, \[options\], \[callback\])
- Model.findOneAndRemove(conditions, \[options\], \[callback\])

## <a href="#ExpressJS-and-Middlewares" class="headerlink" title="ExpressJS and Middlewares"></a>ExpressJS and Middlewares

ExpressJS is a complete web framework solution. It has HTML template solutions (jade, ejs, handlebars, hogan.js) and CSS precompilers (less, stylus, compass). Through middlewares layers, it handles: cookies, sessions, caching, CSRF, compression and many more.

**Middlewares** are pluggable processors that runs on each request made to the server. You can have any number of middlewares that will process the request one by one in a serial fashion. Some middlewares might alter the request input. Others, might create log outputs, add data and pass it to the `next()` middleware in the chain.

We can use the middlewares using `app.use`. That will apply for all request. If you want to be more specific, you can use `app.verb`. For instance: app.get, app.delete, app.post, app.update, …

![ExpressJS Middlewares](/images/express-middlewares.png)

Let’s give some examples of middlewares to drive the point home.

Say you want to log the IP of the client on each request:

Log the client IP on every request

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5</code></pre></td><td><pre><code>app.use(function (req, res, next) {
  var ip = req.headers[&#39;x-forwarded-for&#39;] || req.connection.remoteAddress;
  console.log(&#39;Client IP:&#39;, ip);
  next();
});</code></pre></td></tr></tbody></table>

Notice that each middleware has 3 parameters:

- `req`: contain all the requests objects like URLs, path, …
- `res`: is the response object where we can send the reply back to the client.
- `next`: continue with the next middleware in the chain.

You can also specify a path that you want the middleware to activate on.

Middleware mounted on "/todos/:id" and log the request method

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4</code></pre></td><td><pre><code>app.use(&#39;/todos/:id&#39;, function (req, res, next) {
  console.log(&#39;Request Type:&#39;, req.method);
  next();
});</code></pre></td></tr></tbody></table>

And finally you can use `app.get` to catch GET requests with matching routes, reply the request with a `response.send` and end the middleware chain. Let’s use what we learned on [mongoose read](#mongoose-read-and-query) to reply with the user’s data that matches the `id`.

Middleware mounted on "/todos/:id" and returns

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6</code></pre></td><td><pre><code>app.get(&#39;/todos/:id&#39;, function (req, res, next) {
  Todo.findById(req.params.id, function(err, todo){
    if(err) res.send(err);
    res.json(todo);
  });
});</code></pre></td></tr></tbody></table>

Notice that all previous middlewares called `next()` except this last one, because it sends a response (in JSON) to the client with the requested `todo` data.

Hopefully, you don’t have to develop a bunch of middlewares besides routes, since ExpressJS has a bunch of middlewares available.

### <a href="#Default-Express-4-0-middlewares" class="headerlink" title="Default Express 4.0 middlewares"></a>Default Express 4.0 middlewares

- [morgan](https://github.com/expressjs/morgan): logger

- [body-parser](https://github.com/expressjs/body-parser): parse the body so you can access parameters in requests in `req.body`. e.g. `req.body.name`.

- [cookie-parser](https://github.com/expressjs/cookie-parser): parse the cookies so you can access parameters in cookies `req.cookies`. e.g. `req.cookies.name`.

- [serve-favicon](https://github.com/expressjs/serve-favicon): exactly that, serve favicon from route `/favicon.ico`. Should be call on the top before any other routing/middleware takes place to avoids unnecessary parsing.

### <a href="#Other-ExpressJS-Middlewares" class="headerlink" title="Other ExpressJS Middlewares"></a>Other ExpressJS Middlewares

The following middlewares are not added by default, but it’s nice to know they exist at least:

- [compression](https://github.com/expressjs/compression): compress all request. e.g. `app.use(compression())`

- [session](https://github.com/expressjs/session): create sessions. e.g. `app.use(session({secret: 'Secr3t'}))`

- [method-override](https://github.com/expressjs/method-override): `app.use(methodOverride('_method'))` Override methods to the one specified on the `_method` param. e.g. `GET /resource/1?_method=DELETE` will become `DELETE /resource/1`.

- [response-time](https://github.com/expressjs/response-time): `app.use(responseTime())` adds `X-Response-Time` header to responses.

- [errorhandler](https://github.com/expressjs/errorhandler): Aid development, by sending full error stack traces to the client when an error occurs. `app.use(errorhandler())`. It is good practice to surround it with an if statement to check `process.env.NODE_ENV === 'development'`.

- [vhost](https://github.com/expressjs/vhost): Allows you to use different stack of middlewares depending on the request `hostname`. e.g. `app.use(vhost('*.user.local', userapp))` and `app.use(vhost('assets-*.example.com', staticapp))` where `userapp` and `staticapp` are different express instances with different middlewares.

- [csurf](https://github.com/expressjs/csurf): Adds a **C**ross-**s**ite **r**equest **f**orgery (CSRF) protection by adding a token to responds either via `session` or `cookie-parser` middleware. `app.use(csrf());`

- [timeout](https://github.com/expressjs/timeout): halt execution if it takes more that a given time. e.g. `app.use(timeout('5s'));`. However you need to check by yourself under every request with a middleware that checks `if (!req.timedout) next();`.

## <a href="#Wiring-up-the-MEAN-Stack" class="headerlink" title="Wiring up the MEAN Stack"></a>Wiring up the MEAN Stack

In the next sections, we are going to put together everything that we learn from and build an API. They can be consume by browsers, mobile apps and even other servers.

![](/images/api_uses.png "API Consumers")

### <a href="#Bootstrapping-ExpressJS" class="headerlink" title="Bootstrapping ExpressJS"></a>Bootstrapping ExpressJS

After a detour in the land of Node, MongoDB, Mongoose, and middlewares, we are back to our express todoApp. This time to create the routes and finalize our RESTful API.

Express has a separate package called `express-generator`, which can help us to get started with out API.

Install and run "express-generator"

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32</code></pre></td><td><pre><code>## install it globally using -g
npm install express-generator -g

## create todo-app API with EJS views (instead the default Jade)

express todo-api -e

## create : todo-api

## create : todo-api/package.json

## create : todo-api/app.js

## create : todo-api/public

## create : todo-api/public/javascripts

## create : todo-api/routes

## create : todo-api/routes/index.js

## create : todo-api/routes/users.js

## create : todo-api/public/stylesheets

## create : todo-api/public/stylesheets/style.css

## create : todo-api/views

## create : todo-api/views/index.ejs

## create : todo-api/views/layout.ejs

## create : todo-api/views/error.ejs

## create : todo-api/public/images

## create : todo-api/bin

## create : todo-api/bin/www

##

## install dependencies:

## $ cd todo-api &amp;&amp; npm install

##

## run the app on Linux/Mac:

## $ DEBUG=todo-app:\* npm start

##

## run the app on Windows:

## $ SET DEBUG=todo-api:\* &amp; npm start</code></pre></td></tr></tbody></table>

This will create a new folder called `todo-api`. Let’s go ahead and install the dependencies and run the app:

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7
8</code></pre></td><td><pre><code>## install dependencies
cd todo-api &amp;&amp; npm install

## run the app on Linux/Mac

PORT=4000 npm start

## run the app on Windows

SET PORT=4000 &amp; npm start</code></pre></td></tr></tbody></table>

Use your browser to go to [http://0.0.0.0:4000](http://0.0.0.0:4000/), and you should see a message “Welcome to Express”

### <a href="#Connect-ExpressJS-to-MongoDB" class="headerlink" title="Connect ExpressJS to MongoDB"></a>Connect ExpressJS to MongoDB

In this section we are going to access MongoDB using our newly created express app. Hopefully, you have installed MongoDB in the [setup section](#mongodb), and you can start it by typing (if you haven’t yet):

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1</code></pre></td><td><pre><code>mongod</code></pre></td></tr></tbody></table>

Install the MongoDB driver for NodeJS called mongoose:

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1</code></pre></td><td><pre><code>npm install mongoose --save</code></pre></td></tr></tbody></table>

Notice `--save`. It will add it to the `todo-api/package.json`

Next, you need to require mongoose in the `todo-api/app.js`

Add to app.js

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7
8
9
10</code></pre></td><td><pre><code>// load mongoose package
var mongoose = require(&#39;mongoose&#39;);

// Use native Node promises
mongoose.Promise = global.Promise;

// connect to MongoDB
mongoose.connect(&#39;mongodb://localhost/todo-api&#39;)
.then(() =&gt; console.log(&#39;connection succesful&#39;))
.catch((err) =&gt; console.error(err));</code></pre></td></tr></tbody></table>

Now, When you run `npm start` or `./bin/www`, you will notice the message `connection successful`. Great!

You can find the repository [here](https://github.com/amejiarosario/todoAPIjs) and the diff code at this point: [diff](https://github.com/amejiarosario/todoAPIjs/commit/948a32391d208dd1303d67b443456a377e93fb8d)

### <a href="#Creating-the-Todo-model-with-Mongoose" class="headerlink" title="Creating the Todo model with Mongoose"></a>Creating the Todo model with Mongoose

It’s show time! All the above was setup and preparation for this moment. Let bring the API to life.

Create a `models` directory and a `Todo.js` model:

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2</code></pre></td><td><pre><code>mkdir models
touch models/Todo.js</code></pre></td></tr></tbody></table>

In the `models/Todo.js`:

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7
8
9
10</code></pre></td><td><pre><code>var mongoose = require(&#39;mongoose&#39;);

var TodoSchema = new mongoose.Schema({
name: String,
completed: Boolean,
note: String,
updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model(&#39;Todo&#39;, TodoSchema);</code></pre></td></tr></tbody></table>

[diff](https://github.com/amejiarosario/todoAPIjs/commit/afc908027339b22f10de3b77518ac0728668d470)

What’s going on up there? Isn’t MongoDB suppose to be schemaless? Well, it is schemaless and very flexible indeed. However, very often we want bring sanity to our API/WebApp through validations and enforcing a schema to keep a consistent structure. Mongoose does that for us, which is nice.

You can use the following types:

- String
- Boolean
- Date
- Array
- Number
- ObjectId
- Mixed
- Buffer

## <a href="#API-clients-Browser-Postman-and-curl" class="headerlink" title="API clients (Browser, Postman and curl)"></a>API clients (Browser, Postman and curl)

I know you have not created any route yet. However, in the next sections you will. These are just three ways to retrieve, change and delete data from your future API.

### <a href="#Curl" class="headerlink" title="Curl"></a>Curl

Create tasks

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5</code></pre></td><td><pre><code>## Create task
curl -XPOST http://localhost:3000/todos -d &#39;name=Master%20Routes&amp;completed=false&amp;note=soon...&#39;

## List tasks

curl -XGET http://localhost:3000/todos</code></pre></td></tr></tbody></table>

### <a href="#Browser-and-Postman" class="headerlink" title="Browser and Postman"></a>Browser and Postman

If you open your browser and type `localhost:3000/todos` you will see all the tasks (when you implement it). However, you cannot do post commands by default. For further testing let’s use a Chrome plugin called [Postman](https://chrome.google.com/webstore/detail/postman-rest-client/fdmmgilgnpjigdojojpjoooidkmcomcm?hl=en). It allows you to use all the HTTP VERBS easily and check `x-www-form-urlencoded` for adding parameters.

![](/images/postman_post.png "Postman POST example")

> Don’t forget to check `x-www-form-urlencoded` or it won’t work ;)

### <a href="#Websites-and-Mobile-Apps" class="headerlink" title="Websites and Mobile Apps"></a>Websites and Mobile Apps

Probably these are the main consumers of APIs. You can interact with RESTful APIs using jQuery’s `$ajax` and its wrappers, BackboneJS’s Collections/models, AngularJS’s `$http` or `$resource`, among many other libraries/frameworks and mobile clients.

In the end, we are going to explain how to use AngularJS to interact with this API.

## <a href="#ExpressJS-Routes" class="headerlink" title="ExpressJS Routes"></a>ExpressJS Routes

To sum up we want to achieve the following:

<table><thead><tr class="header"><th>Resource (URI)</th><th>POST (create)</th><th>GET (read)</th><th>PUT (update)</th><th>DELETE (destroy)</th></tr></thead><tbody><tr class="odd"><td>/todos</td><td>create new task</td><td>list tasks</td><td>error</td><td>error</td></tr><tr class="even"><td>/todos/:id</td><td>error</td><td>show task :id</td><td>update task :id</td><td>destroy task ID 1</td></tr></tbody></table>

Let’s setup the routes

\`\`\`bash Create a new route called `todos.js` in the `routes` folder or rename `users.js` mv routes/users.js routes/todos.js

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6</code></pre></td><td><pre><code>In `app.js` add new `todos` route, or just replace `./routes/users` for `./routes/todos`

```javascript Adding todos routes
var todos = require(&#39;./routes/todos&#39;);
app.use(&#39;/todos&#39;, todos);</code></pre></td></tr></tbody></table>

All set! Now, let’s go back and edit our `routes/todos.js`.

### <a href="#List-GET-todos" class="headerlink" title="List: GET /todos"></a>List: GET /todos

Remember [mongoose query api](#mongoose-read-and-query)? Here’s how to use it in this context:

routes/todos.js

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7
8
9
10
11
12
13
14
15</code></pre></td><td><pre><code>var express = require(&#39;express&#39;);
var router = express.Router();

var mongoose = require(&#39;mongoose&#39;);
var Todo = require(&#39;../models/Todo.js&#39;);

/* GET /todos listing. */
router.get(&#39;/&#39;, function(req, res, next) {
  Todo.find(function (err, todos) {
    if (err) return next(err);
    res.json(todos);
  });
});

module.exports = router;</code></pre></td></tr></tbody></table>

Harvest time! We don’t have any task in database but at least we verify it is working:

Testing all together

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7
8
9</code></pre></td><td><pre><code>## Start database
mongod

## Start Webserver (in other terminal tab)
npm start

## Test API (in other terminal tab)
curl localhost:3000/todos
## =&gt; []%</code></pre></td></tr></tbody></table>

[diff](https://github.com/amejiarosario/todoAPIjs/commit/54ab912ea9aa2b6633ae12816beb6e6c3d2702e6)

If it returns an empty array `[]` you are all set. If you get errors, try going back and making sure you didn’t forget anything, or you can comment at the end of the post for help.

### <a href="#Create-POST-todos" class="headerlink" title="Create: POST /todos"></a>Create: POST /todos

Back in `routes/todos.js`, we are going to add the ability to create using [mongoose create](#mongoose-create). Can you make it work before looking at the next example?

routes/todos.js (showing just create route)

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7
8</code></pre></td><td><pre><code>/* POST /todos */
router.post(&#39;/&#39;, function(req, res, next) {
  Todo.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});</code></pre></td></tr></tbody></table>

[diff](https://github.com/amejiarosario/todoAPIjs/commit/28b60c4bf9c6d8b08c3351f725e17c7f40a077be)

A few things:

-   We are using the `router.post` instead of `router.get`.
-   You have to stop and run the server again: `npm start`.

Everytime you change a file you have to stop and start the web server. Let’s fix that using `nodemon` to refresh automatically:

Nodemon

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5</code></pre></td><td><pre><code>## install nodemon globally
npm install nodemon -g

## Run web server with nodemon
nodemon</code></pre></td></tr></tbody></table>

### <a href="#Show-GET-todos-id" class="headerlink" title="Show: GET /todos/:id"></a>Show: GET /todos/:id

This is a snap with [`Todo.findById`](#mongoose-read-and-query) and `req.params`. Notice that `params` matches the placeholder name we set while defining the route. `:id` in this case.

routes/todos.js (showing just show route)

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7</code></pre></td><td><pre><code>/* GET /todos/id */
router.get(&#39;/:id&#39;, function(req, res, next) {
  Todo.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});</code></pre></td></tr></tbody></table>

[diff](https://github.com/amejiarosario/todoAPIjs/commit/7d8bc67178a4f162858395845c076d9223926bf8)

Let’s test what we have so far!

Testing the API with Curl

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7
8
9
10
11
12
13
14</code></pre></td><td><pre><code>## Start Web Server on port 4000 (default is 3000)
PORT=4000 nodemon

## Create a todo using the API
curl -XPOST http://localhost:4000/todos -d &#39;name=Master%20Routes&amp;completed=false&amp;note=soon...&#39;
## =&gt; {&quot;__v&quot;:0,&quot;name&quot;:&quot;Master Routes&quot;,&quot;completed&quot;:false,&quot;note&quot;:&quot;soon...&quot;,&quot;_id&quot;:&quot;57a655997d2241695585ecf8&quot;}%

## Get todo by ID (use the _id from the previous request, in my case &quot;57a655997d2241695585ecf8&quot;)
curl -XGET http://localhost:4000/todos/57a655997d2241695585ecf8
{&quot;_id&quot;:&quot;57a655997d2241695585ecf8&quot;,&quot;name&quot;:&quot;Master Routes&quot;,&quot;completed&quot;:false,&quot;note&quot;:&quot;soon...&quot;,&quot;__v&quot;:0}%

## Get all elements (notice it is an array)
curl -XGET http://localhost:4000/todos
[{&quot;_id&quot;:&quot;57a655997d2241695585ecf8&quot;,&quot;name&quot;:&quot;Master Routes&quot;,&quot;completed&quot;:false,&quot;note&quot;:&quot;soon...&quot;,&quot;__v&quot;:0}]%</code></pre></td></tr></tbody></table>

### <a href="#Update-PUT-todos-id" class="headerlink" title="Update: PUT /todos/:id"></a>Update: PUT /todos/:id

Back in `routes/todos.js`, we are going to update tasks. This one you can do without looking at the example below, review [findByIdAndUpdate](#mongoose-update) and give it a try!

routes/todos.js (showing just update route)

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7</code></pre></td><td><pre><code>/* PUT /todos/:id */
router.put(&#39;/:id&#39;, function(req, res, next) {
  Todo.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});</code></pre></td></tr></tbody></table>

[diff](https://github.com/amejiarosario/todoAPIjs/commit/00dafe491e0d0b59fa53e86d8c187c42d7824200)

curl update

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3</code></pre></td><td><pre><code>## Use the ID from the todo, in my case 57a655997d2241695585ecf8
curl -XPUT http://localhost:4000/todos/57a655997d2241695585ecf8 -d &quot;note=hola&quot;
## =&gt; {&quot;_id&quot;:&quot;57a655997d2241695585ecf8&quot;,&quot;name&quot;:&quot;Master Routes&quot;,&quot;completed&quot;:true,&quot;note&quot;:&quot;hola&quot;,&quot;__v&quot;:0}%</code></pre></td></tr></tbody></table>

### <a href="#Destroy-DELETE-todos-id" class="headerlink" title="Destroy: DELETE /todos/:id"></a>Destroy: DELETE /todos/:id

Finally, the last one! Almost identical to `update`, use [`findByIdAndRemove`](#mongoose-delete).

routes/todos.js (showing just update route)

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7</code></pre></td><td><pre><code>/* DELETE /todos/:id */
router.delete(&#39;/:id&#39;, function(req, res, next) {
  Todo.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});</code></pre></td></tr></tbody></table>

[diff](https://github.com/amejiarosario/todoAPIjs/commit/cbf5366e2b4e1a683ed50d2148ed6a548616d3f8)

Is it working? Cool, you are done then! Is NOT working? take a look at the [full repository](https://github.com/amejiarosario/todoAPIjs).

<a href="#What’s-next" class="headerlink" title="What’s next?"></a>What’s next?
-------------------------------------------------------------------------------

Connecting AngularJS with this endpoint. Check out the [third](/blog/2014/10/03/mean-stack-tutorial-mongodb-expressjs-angularjs-nodejs) tutorial in this series.

### Now, your turn!

Thanks for reading this far. Here are some things you can do next:

-   Found a typo? [Edit this post](https://github.com/amejiarosario/amejiarosario.github.io/edit/source/source/_posts/2014-10-01-creating-a-restful-api-tutorial-with-nodejs-and-mongodb.markdown).
-   Got questions? [comment](#comments-section) below.
-   Was it useful? Show your support and share it.



<a href="/mean-stack-tutorial-mongodb-expressjs-angularjs-nodejs/" class="article-nav-newer"><strong><em></em> newer</strong></a>

MEAN Stack Tutorial MongoDB ExpressJS AngularJS NodeJS (Part III)

<a href="/angularjs-tutorial-for-beginners-with-nodejs-expressjs-and-mongodb/" class="article-nav-older"><strong>older <em></em></strong></a>

AngularJS tutorial for beginners with NodeJS ExpressJS and MongoDB (Part I)

Subscribe & stay up to date!

 









tutorial mean stack Series
==========================

[<img src="/images/AngularJSTutorial_small.png" width="300" height="250" />](/angularjs-tutorial-for-beginners-with-nodejs-expressjs-and-mongodb/)

### AngularJS tutorial for beginners with NodeJS ExpressJS and MongoDB (Part I)

[<img src="/images/RESTfulAPIs_NodeJS__mongodb_small.png" width="300" height="250" />](/creating-a-restful-api-tutorial-with-nodejs-and-mongodb/)

### Creating RESTful APIs with NodeJS and MongoDB Tutorial (Part II)

[<img src="/images/mean_small.png" width="300" height="250" />](/mean-stack-tutorial-mongodb-expressjs-angularjs-nodejs/)

### MEAN Stack Tutorial MongoDB ExpressJS AngularJS NodeJS (Part III)

[<span id="back-to-top" title="Go back to the top of this page"> Top </span>](#) <a href="#" class="p-x-3" title="Improve this post"><em></em> Edit this post</a>

### Contents

1.  <a href="#What-is-a-RESTful-API" class="toc-link"><span class="toc-number">1.</span> <span class="toc-text">What is a RESTful API?</span></a>
2.  <a href="#Installing-the-MEAN-Stack-Backend" class="toc-link"><span class="toc-number">2.</span> <span class="toc-text">Installing the MEAN Stack Backend</span></a>
    1.  <a href="#Installing-MongoDB" class="toc-link"><span class="toc-number">2.1.</span> <span class="toc-text">Installing MongoDB</span></a>
    2.  <a href="#Installing-NodeJS" class="toc-link"><span class="toc-number">2.2.</span> <span class="toc-text">Installing NodeJS</span></a>
    3.  <a href="#Installing-ExpressJS" class="toc-link"><span class="toc-number">2.3.</span> <span class="toc-text">Installing ExpressJS</span></a>
3.  <a href="#Using-MongoDB-with-Mongoose" class="toc-link"><span class="toc-number">3.</span> <span class="toc-text">Using MongoDB with Mongoose</span></a>
    1.  <a href="#Mongoose-CRUD" class="toc-link"><span class="toc-number">3.1.</span> <span class="toc-text">Mongoose CRUD</span></a>
    2.  <a href="#Mongoose-Create" class="toc-link"><span class="toc-number">3.2.</span> <span class="toc-text">Mongoose Create</span></a>
    3.  <a href="#Mongoose-Read-and-Query" class="toc-link"><span class="toc-number">3.3.</span> <span class="toc-text">Mongoose Read and Query</span></a>
    4.  <a href="#Mongoose-Update" class="toc-link"><span class="toc-number">3.4.</span> <span class="toc-text">Mongoose Update</span></a>
    5.  <a href="#Mongoose-Delete" class="toc-link"><span class="toc-number">3.5.</span> <span class="toc-text">Mongoose Delete</span></a>
4.  <a href="#ExpressJS-and-Middlewares" class="toc-link"><span class="toc-number">4.</span> <span class="toc-text">ExpressJS and Middlewares</span></a>
    1.  <a href="#Default-Express-4-0-middlewares" class="toc-link"><span class="toc-number">4.1.</span> <span class="toc-text">Default Express 4.0 middlewares</span></a>
    2.  <a href="#Other-ExpressJS-Middlewares" class="toc-link"><span class="toc-number">4.2.</span> <span class="toc-text">Other ExpressJS Middlewares</span></a>
5.  <a href="#Wiring-up-the-MEAN-Stack" class="toc-link"><span class="toc-number">5.</span> <span class="toc-text">Wiring up the MEAN Stack</span></a>
    1.  <a href="#Bootstrapping-ExpressJS" class="toc-link"><span class="toc-number">5.1.</span> <span class="toc-text">Bootstrapping ExpressJS</span></a>
    2.  <a href="#Connect-ExpressJS-to-MongoDB" class="toc-link"><span class="toc-number">5.2.</span> <span class="toc-text">Connect ExpressJS to MongoDB</span></a>
    3.  <a href="#Creating-the-Todo-model-with-Mongoose" class="toc-link"><span class="toc-number">5.3.</span> <span class="toc-text">Creating the Todo model with Mongoose</span></a>
6.  <a href="#API-clients-Browser-Postman-and-curl" class="toc-link"><span class="toc-number">6.</span> <span class="toc-text">API clients (Browser, Postman and curl)</span></a>
    1.  <a href="#Curl" class="toc-link"><span class="toc-number">6.1.</span> <span class="toc-text">Curl</span></a>
    2.  <a href="#Browser-and-Postman" class="toc-link"><span class="toc-number">6.2.</span> <span class="toc-text">Browser and Postman</span></a>
    3.  <a href="#Websites-and-Mobile-Apps" class="toc-link"><span class="toc-number">6.3.</span> <span class="toc-text">Websites and Mobile Apps</span></a>
7.  <a href="#ExpressJS-Routes" class="toc-link"><span class="toc-number">7.</span> <span class="toc-text">ExpressJS Routes</span></a>
    1.  <a href="#List-GET-todos" class="toc-link"><span class="toc-number">7.1.</span> <span class="toc-text">List: GET /todos</span></a>
    2.  <a href="#Create-POST-todos" class="toc-link"><span class="toc-number">7.2.</span> <span class="toc-text">Create: POST /todos</span></a>
    3.  <a href="#Show-GET-todos-id" class="toc-link"><span class="toc-number">7.3.</span> <span class="toc-text">Show: GET /todos/:id</span></a>
    4.  <a href="#Update-PUT-todos-id" class="toc-link"><span class="toc-number">7.4.</span> <span class="toc-text">Update: PUT /todos/:id</span></a>
    5.  <a href="#Destroy-DELETE-todos-id" class="toc-link"><span class="toc-number">7.5.</span> <span class="toc-text">Destroy: DELETE /todos/:id</span></a>
8.  <a href="#What%E2%80%99s-next" class="toc-link"><span class="toc-number">8.</span> <span class="toc-text">What’s next?</span></a>




```
