<a href="/categories/coding/" class="category-link">Coding</a>

# Understanding JavaScript Callbacks and best practices

<span title="Last time this post was updated"> Last updated July 3rd 2019 </span> <span class="m-x-2" title="Pageviews"> 6.3k </span> <span class="m-x-2" title="Click to go to the comments section"> [ <span class="disqus-comment-count" data-disqus-url="https://master--bgoonz-blog.netlify.app/callbacks-concurrency-in-javascript-node/">0</span>](#disqus_thread) </span>

- <a href="/tags/javascript/" class="tag-list-link">javascript</a><span class="tag-list-count">5</span>
- <a href="/tags/nodejs/" class="tag-list-link">nodejs</a><span class="tag-list-count">12</span>
- <a href="/tags/tutorial-async-javascript/" class="tag-list-link">tutorial_async-javascript</a><span class="tag-list-count">3</span>

![Understanding JavaScript Callbacks and best practices](/images/callbacks-concurrency-in-javascript-large.png)

Callbacks are one of the critical elements to understand JavaScript and Node.js. Nearly, all the asynchronous functions use a callback (or promises). In this post, we are going to cover callbacks in-depth and best practices.

<span id="more"></span>

This post assumes you know the [difference between synchronous and asynchronous code](/asynchronous-vs-synchronous-handling-concurrency-in-javascript).

JavaScript is an event-driven language. Instead of waiting for things to happen, it executes while listening for events. The way you respond to an event is using callbacks.

---

**Related Posts:**

1.  [Async vs Sync in JavaScript](/asynchronous-vs-synchronous-handling-concurrency-in-javascript/)
2.  [JavaScript Callbacks](/callbacks-concurrency-in-javascript-node/) (this one)
3.  [JavaScript Promises](/promises-tutorial-concurrency-in-javascript-node/)

---

## <a href="#JavaScript-callbacks" class="headerlink" title="JavaScript callbacks"></a>JavaScript callbacks

> A callback is a function that is passed as an argument to another function.

Callbacks are also known as **higher-order function**.

An example of a callback is the following:

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6</code></pre></td><td><pre><code>const compute = (n1, n2, callback) =&gt; callback(n1, n2);
const sum = (n1, n2) =&gt; n1 + n2;
const product = (n1, n2) =&gt; n1 * n2;

console.log(compute(5, 3, sum)); // ↪️ 8
console.log(compute(5, 3, product)); // ↪️ 15</code></pre></td></tr></tbody></table>

As you can see the function `compute` takes two numbers and a callback function. This `callback` function can be `sum`, `product` and any other that you develop that operates two numbers.

## <a href="#Callback-Advantages" class="headerlink" title="Callback Advantages"></a>Callback Advantages

Callbacks can help to make your code more maintainable if you use them well. They will also help you to:

- Keep your code DRY (Do Not Repeat Yourself)
- Implement better abstraction where you can have more generic functions like `compute` that can handle all sorts of functionalities (e.g., `sum`, `product`)
- Improve code readability and maintainability.

So far, we have only seen callbacks that are executed immediately; however, most of the callbacks in JavaScript are tied to an event like a timer, API request or reading a file.

## <a href="#Asynchronous-callbacks" class="headerlink" title="Asynchronous callbacks"></a>Asynchronous callbacks

> An asynchronous callback is a function that is passed as an argument to another function _and gets invoke zero or multiple times after certain events happens_.

It’s like when your friends tell you to call them back when you arrive at the restaurant. You coming to the restaurant is the “event” that _triggers_ the callback. Something similar happens in the programming world. The event could be you click a button, a file is loaded into memory, and request to a server API, and so on.

Let’s see an example with two callbacks:

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2</code></pre></td><td><pre><code>const id = setInterval(() =&gt; console.log(&#39;tick ⏰&#39;), 1e3);
setTimeout(() =&gt; clearInterval(id), 5e3);</code></pre></td></tr></tbody></table>

First, you notice that we are using anonymous functions (in the previous example, we were passing the named functions such as `sum` and `product`). The callback passed to `setInterval` is triggered every second, and it prints `tick`. The second callback is called one after 5 seconds. It cancels the interval, so it just writes `tick` five times.

> Callbacks are a way to make sure a particular code doesn’t execute until another has already finished.

The `console.log('tick')` only gets executed when a second has passed.

The functions `setInterval` and `setTimeout` callbacks are very simple. They don’t provide any parameters on the callback functions. But, if we are reading from the file system or network, we can get the response as a callback parameter.

## <a href="#Callback-Parameters" class="headerlink" title="Callback Parameters"></a>Callback Parameters

The callback parameters allow you to get messages into your functions when they are available. Let’s say we are going to create a vanilla server on Node.js.

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
13</code></pre></td><td><pre><code>const http = require(&#39;http&#39;);

const port = 1777;
const host = &#39;127.0.0.1&#39;;

const proxy = http.createServer((req, res) =&gt; {
res.writeHead(200, { &#39;Content-Type&#39;: &#39;text/plain&#39; });
res.end(`Hello World from Node! You used url &quot;${req.url}&quot;\r\n`);
});

proxy.listen(port, host, () =&gt; {
console.log(`Server running on http://${host}:${port}`);
});</code></pre></td></tr></tbody></table>

We have two callbacks here. The `http.createServer`‘s callback sends the parameters (`req`)uest and (`res`)ponse every time somebody connects to the server.

You can test this server using curl (or browser)

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1</code></pre></td><td><pre><code>curl 127.0.0.1:1777/this/is/cool</code></pre></td></tr></tbody></table>

There you have it! An HTTP server that replies to everyone that connects to it using a callback. But, What would happen if there’s an error? Let’s see how to handle that next.

## <a href="#Handling-errors-with-Node-js-callbacks" class="headerlink" title="Handling errors with Node.js callbacks"></a>Handling errors with Node.js callbacks

Some callbacks send errors on the first parameter and then the data (`callback(error, data)`). That’s very common in Node.js API. Let’s say we want to see all the directories on a given folder:

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6</code></pre></td><td><pre><code>const fs = require(&#39;fs&#39;);

fs.readdir(&#39;/Users/adrian/Code&#39;, (error, files) =&gt; {
if (error) { console.error(error); }
console.log(files);
});</code></pre></td></tr></tbody></table>

As you notice, the first parameter will have an error message. If you run it, you would probably have the error message (unless you have the same name and directory).

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6</code></pre></td><td><pre><code>{ [Error: ENOENT: no such file or directory, scandir &#39;/Users/noAdrian/Code&#39;]
  errno: -2,
  code: &#39;ENOENT&#39;,
  syscall: &#39;scandir&#39;,
  path: &#39;/Users/noAdrian/Code&#39; }
undefined</code></pre></td></tr></tbody></table>

So that’s how you handle errors, you check for that parameter. But (there’s always a but) what if I need to do multiple async operations. The easiest way (but not the best) is to have a callback inside a callback:

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
24</code></pre></td><td><pre><code>const fs = require(&#39;fs&#39;);

const dir = &#39;/Users/adrian/Code&#39;;

function printFilesSize(basePath) {
fs.readdir(basePath, (err, files) =&gt; {
if (err) {
console.log(`Error finding files: ${err}`);
} else {
files.forEach((filename) =&gt; {
const filePath = `${basePath}/${filename}`;

        fs.lstat(filePath, (err, stat) =&gt; {
          if (err) { console.error(err); }
          if (stat.isFile()) {
            console.log(filePath, stat.size.toLocaleString());
          }
        });
      });
    }

});
}

printFilesSize(dir);</code></pre></td></tr></tbody></table>

As you can see, this program will first read files in a directory and then check the file size of each file, and if it’s a directory, it will be omitted.

When callbacks are nested too many levels deep, we call this callback hell! 🔥 Or the pyramid of doom ⚠️

![callback hell](/images/callback-hell.gif)

Because they are hard to maintain, how do we fix the callback hell? Read on!

## <a href="#Callback-Hell-problem-and-solutions" class="headerlink" title="Callback Hell problem and solutions"></a>Callback Hell problem and solutions

Callback hell is when you have too many nested callbacks.

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7</code></pre></td><td><pre><code>a(() =&gt; {
  b(() =&gt; {
    c(() =&gt; {
      d();
    });
  });
});</code></pre></td></tr></tbody></table>

To make your code better, you should:

1.  Keep you code shallow (avoid too many nested functions): keep your code at 1-3 indentation levels.
2.  Modularize: convert your anonymous callbacks into named functions.
3.  Use promises and async/await.

Let’s fix the callback hell from `printFilesSize` keeping our code shallow and modularizing it.

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
32</code></pre></td><td><pre><code>const fs = require(&#39;fs&#39;);

const dir = &#39;/Users/adrian/Code&#39;;

function printFileSize(filePath) {
fs.lstat(filePath, (err, stat) =&gt; {
if (err) { console.error(err); }
if (stat.isFile()) {
console.log(filePath, stat.size.toLocaleString());
}
});
}

function printFilesSize(files, basePath) {
files.forEach((filename) =&gt; {
const filePath = `${basePath}/${filename}`;

    printFileSize(filePath);

});
}

function printFilesSizeFromDirectory(basePath) {
fs.readdir(basePath, (err, files) =&gt; {
if (err) {
console.log(`Error finding files: ${err}`);
} else {
printFilesSize(files, basePath);
}
});
}

printFilesSizeFromDirectory(dir);</code></pre></td></tr></tbody></table>

The original implement had five levels of indentation, now that we modularized it is 1-2 levels.

Callbacks are not the only way to deal with asynchronous code. In the following post we are going to cover:

- Promises
- Async/Await
- Generators

Stay tuned!

---

**Related Posts:**

1.  [Async vs Sync in JavaScript](/asynchronous-vs-synchronous-handling-concurrency-in-javascript/)
2.  [JavaScript Callbacks](/callbacks-concurrency-in-javascript-node/) (this one)
3.  [JavaScript Promises](/promises-tutorial-concurrency-in-javascript-node/)

---

### Now, your turn!

Thanks for reading this far. Here are some things you can do next:

- Found a typo? [Edit this post](https://github.com/amejiarosario/amejiarosario.github.io/edit/source/source/_posts/2019-07-03-callbacks-concurrency-in-javascript-node.md).
- Got questions? [comment](#comments-section) below.
- Was it useful? Show your support and share it.

<a href="/promises-tutorial-concurrency-in-javascript-node/" class="article-nav-newer"><strong><em></em> newer</strong></a>

The JavaScript Promise Tutorial

<a href="/asynchronous-vs-synchronous-handling-concurrency-in-javascript/" class="article-nav-older"><strong>older <em></em></strong></a>

What every programmer should know about Synchronous vs. Asynchronous Code

Subscribe & stay up to date!



# tutorial async javascript Series

[<img src="/images/async-vs-sync-concurrency-in-javascript-small.png" width="300" height="250" />](/asynchronous-vs-synchronous-handling-concurrency-in-javascript/)

### What every programmer should know about Synchronous vs. Asynchronous Code

[<img src="/images/callbacks-concurrency-in-javascript-small.png" width="300" height="250" />](/callbacks-concurrency-in-javascript-node/)

### Understanding JavaScript Callbacks and best practices

[<img src="/images/promises-concurrency-in-javascript-small.png" width="300" height="250" />](/promises-tutorial-concurrency-in-javascript-node/)

### The JavaScript Promise Tutorial

[<span id="back-to-top" title="Go back to the top of this page"> Top </span>](#) <a href="#" class="p-x-3" title="Improve this post"><em></em> Edit this post</a>

### Contents

1.  <a href="#JavaScript-callbacks" class="toc-link"><span class="toc-number">1.</span> <span class="toc-text">JavaScript callbacks</span></a>
2.  <a href="#Callback-Advantages" class="toc-link"><span class="toc-number">2.</span> <span class="toc-text">Callback Advantages</span></a>
3.  <a href="#Asynchronous-callbacks" class="toc-link"><span class="toc-number">3.</span> <span class="toc-text">Asynchronous callbacks</span></a>
4.  <a href="#Callback-Parameters" class="toc-link"><span class="toc-number">4.</span> <span class="toc-text">Callback Parameters</span></a>
5.  <a href="#Handling-errors-with-Node-js-callbacks" class="toc-link"><span class="toc-number">5.</span> <span class="toc-text">Handling errors with Node.js callbacks</span></a>
6.  <a href="#Callback-Hell-problem-and-solutions" class="toc-link"><span class="toc-number">6.</span> <span class="toc-text">Callback Hell problem and solutions</span></a>
