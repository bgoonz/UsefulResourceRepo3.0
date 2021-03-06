<a href="/categories/coding/" class="category-link">Coding</a>

# What every programmer should know about Synchronous vs. Asynchronous Code

<span title="Last time this post was updated"> Last updated July 1st 2019 </span> <span class="m-x-2" title="Pageviews"> 11.1k </span> <span class="m-x-2" title="Click to go to the comments section"> [ <span class="disqus-comment-count" data-disqus-url="https://master--bgoonz-blog.netlify.app/asynchronous-vs-synchronous-handling-concurrency-in-javascript/">0</span>](#disqus_thread) </span>

- <a href="/tags/javascript/" class="tag-list-link">javascript</a><span class="tag-list-count">5</span>
- <a href="/tags/nodejs/" class="tag-list-link">nodejs</a><span class="tag-list-count">12</span>
- <a href="/tags/tutorial-async-javascript/" class="tag-list-link">tutorial_async-javascript</a><span class="tag-list-count">3</span>

![What every programmer should know about Synchronous vs. Asynchronous Code](/images/async-vs-sync-concurrency-in-javascript-large.png)

There are multiple ways of handling concurrency on programming languages. Some languages use various threads, while others use the asynchronous model. We are going to explore the latter in detail and provide examples to distinguish between synchronous vs. asynchronous. Btw, What do you think your CPU does most of the time?

<span id="more"></span>

Is it working? Nope; It’s idle!

Your computer’s processor waits for a network request to come out. It idles for the hard drive to spin out the requested data, and it pauses for external events (I/O).

Take a look at the following graph to see the average time this system event takes (in nanoseconds)

![Latency Access Time by I/O](/images/Latency-vs-System-Event.png)

As you can see in the chart above, one CPU can execute an instruction every one ns (approx.). However, if are in NYC and you make a request to a website in San Francisco, the CPU will “waste” 157 million cycles waiting for it to come back!

But not everything is lost! You can use that time to perform other tasks if you use a non-blocking (asynchronous) code in your programs! That’s exactly what you are going to learn in this post.

**⚠️ NOTE**: Most programs on your operating system are non-blocking so a single CPU can perform many tasks while it waits for others to complete. Also, modern processors have multiple cores to increase the parallelism.

---

**Related Posts:**

1.  [Async vs Sync in JavaScript](/asynchronous-vs-synchronous-handling-concurrency-in-javascript/) (this one)
2.  [JavaScript Callbacks](/callbacks-concurrency-in-javascript-node/)
3.  [JavaScript Promises](/promises-tutorial-concurrency-in-javascript-node/)

---

## <a href="#Synchronous-vs-Asynchronous-in-Node-js" class="headerlink" title="Synchronous vs. Asynchronous in Node.js"></a>Synchronous vs. Asynchronous in Node.js

Let’s see how we can develop non-blocking code that squeezes out the performance to the maximum. Synchronous code is also called “blocking” because it halts the program until all the resources are available. However, asynchronous code is also known as “non-blocking” because the program continues executing and doesn’t wait for external resources (I/O) to be available.

> 💡 In computing, input/output or `I/O` (or `io` or `IO`) is the communication between a program and the outside world (file system, databases, network requests, and so on).

We are going to compare two different ways of reading files using a blocking I/O model and then using a non-blocking I/O model.

First, consider the following blocking code.

### <a href="#Synchronous-code-for-reading-from-a-file-in-Node-js" class="headerlink" title="Synchronous code for reading from a file in Node.js"></a>Synchronous code for reading from a file in Node.js

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7
8</code></pre></td><td><pre><code>const fs = require(&#39;fs&#39;);

console.log(&#39;start&#39;);

const data = fs.readFileSync(&#39;./file.txt&#39;, &#39;utf-8&#39;); // blocks here until file is read
console.log(&#39;data: &#39;, data.trim());

console.log(&#39;end&#39;);</code></pre></td></tr></tbody></table>

**What’s the output of this program?**

We are using Node’s `readFileSync`.

> `Sync` = Synchronous = Blocking I/O model

> `Async` = Asynchronous = Non-blocking I/O model

That means that the program is going to wait around 23M CPU cycles for your HDD to come back with the content of the `file.txt`, which is the original message `Hello World!`.

The output would be:

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3</code></pre></td><td><pre><code>start
data:  Hello World! 👋 🌍
end</code></pre></td></tr></tbody></table>

**How can make this code non-blocking?**

I’m glad you asked. Luckily most Node.js functions are non-blocking (asynchronous) by default.

Actually, Ryan Dahl created Node because he was not happy with the limitations of the Apache HTTP server. Apache creates a thread for each connection which consumes more resources. On the other hand, Node.js combines JavaScript engine, an event loop, and an I/O layer to handle multiple requests efficiently.

![blocking vs. non-blocking API](/images/blocking-vs-non-blocking-api.png)

As you can see, asynchronous functions can handle more operations while it waits for IO resources to be ready.

Let’s see an example of reading from a file using the asynchronous code.

### <a href="#Asynchronous-code-for-reading-from-a-file-in-Node-js" class="headerlink" title="Asynchronous code for reading from a file in Node.js"></a>Asynchronous code for reading from a file in Node.js

We can read from the file without blocking the rest of the code like this:

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7
8
9
10</code></pre></td><td><pre><code>const fs = require(&#39;fs&#39;);

console.log(&#39;start&#39;);

fs.readFile(&#39;./file.txt&#39;, &#39;utf-8&#39;, (err, data) =&gt; {
if (err) throw err;
console.log(&#39;file.txt data: &#39;, data.trim());
});

console.log(&#39;end&#39;);</code></pre></td></tr></tbody></table>

What’s the output of this program?

See the answer

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3</code></pre></td><td><pre><code>start
end
file.txt data:  Hello World! 👋 🌍</code></pre></td></tr></tbody></table>

Many people get surprised by the fact that `start` and `end` comes before the `data` output. 👀

The `end` comes before the file output because the program doesn’t halt and continue executing whatever is next.

That’s cool, but does it make a lot of difference? It does, let’s bigger files and time it!

### <a href="#Blocking-vs-Non-Blocking-I-O-model-Benchmark" class="headerlink" title="Blocking vs. Non-Blocking I/O model Benchmark"></a>Blocking vs. Non-Blocking I/O model Benchmark

For this benchmark, let’s read a big file. I just went to my downloads and took the heaviest. (You can try this experiment at home and comment your results)

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
13</code></pre></td><td><pre><code>const fs = require(&#39;fs&#39;);

console.time(&#39;readFileSync&#39;);

for (let x = 0; x &lt; 10; x++) {
const largeFile = fs.readFileSync(&#39;/users/admejiar/Downloads/Docker.dmg&#39;);
console.log(`File size#${x}: ${Math.round(largeFile.length / 1e6)} MB`);
}

const data = fs.readFileSync(&#39;./file.txt&#39;, &#39;utf-8&#39;); // blocks here until file is read
console.log(&#39;file.txt data: &#39;, data.trim());

console.timeEnd(&#39;readFileSync&#39;);</code></pre></td></tr></tbody></table>

Notice that we are using `console.time` which is very nice for benchmarking since it calculates how many milliseconds it took. The output is the following:

    File size#0: 523 MB
    File size#1: 523 MB
    File size#2: 523 MB
    File size#3: 523 MB
    File size#4: 523 MB
    File size#5: 523 MB
    File size#6: 523 MB
    File size#7: 523 MB
    File size#8: 523 MB
    File size#9: 523 MB
    file.txt data:  Hello World! 👋 🌍
    readFileSync: 2572.060ms

It took 2.5 seconds to read all ten files and the `file.txt`.

Let’s try now the same with non-blocking:

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
17</code></pre></td><td><pre><code>const fs = require(&#39;fs&#39;);

console.time(&#39;readFile&#39;);

for (let x = 0; x &lt; 10; x++) {
fs.readFile(&#39;/users/admejiar/Downloads/Docker.dmg&#39;, (err, data) =&gt; {
if (err) throw err;
console.log(`File size#${x}: ${Math.round(data.length / 1e6)} MB`);
});
}

fs.readFile(&#39;./file.txt&#39;, &#39;utf-8&#39;, (err, data) =&gt; {
if (err) throw err;
console.log(&#39;file.txt data: &#39;, data.trim());
});

console.timeEnd(&#39;readFile&#39;);</code></pre></td></tr></tbody></table>

And here is the output:

    readFile: 0.731ms
    file.txt data:  Hello World! 👋 🌍
    File size#7: 523 MB
    File size#9: 523 MB
    File size#4: 523 MB
    File size#2: 523 MB
    File size#6: 523 MB
    File size#5: 523 MB
    File size#1: 523 MB
    File size#8: 523 MB
    File size#0: 523 MB
    File size#3: 523 MB

Wow! Totally random! 🤯

It got to the `console.timeEnd` in less than a millisecond! The small `file.txt` came later, and then the large files all in a different order. As you can see non-blocking waits for nobody. Whoever is ready will come out first. Even though it is not deterministic, it has many advantages.

Benchmarking asynchronous code is not as straight forward since we have to wait for all the operations to finish (which `console.timeEnd` is not doing). We are going to provide a better benchmark when we cover `Promise`s.

Take a look at this picture:

![synchronous vs. asynchronous javascript](/images/synchronous-asynchronous-javascript.png)

That async programs will take as long the most time-consuming task. It executes tasks in parallel while the blocking model does it in sequence.

## <a href="#Advantages-of-non-blocking-code" class="headerlink" title="Advantages of non-blocking code"></a>Advantages of non-blocking code

Non-blocking code is much more performant. Blocking code waste around 90% of CPU cycles waiting for the network or disk to get the data. Using non-blocking code is a more straightforward way to have concurrency without having to deal with multiple execution threads.

For instance, let’s say you have an API server. In the image below, you can see how much more requests you can handle using non-blocking vs. using the blocking code.

![blocking vs. non-blocking API](/images/blocking-vs-non-blocking-api.png)

As you saw earlier, the blocking API server, attend one request at a time. It serves the request \#1, and it idles for the database and then is free to serve the other requests. However, the non-blocking API can take multiple requests while it waits for the database to come back.

Now that you are (hopefully) convinced why writing non-blocking code is necessary, let’s see different ways we can manage it. So far, we used callbacks, but there are other ways to handle it.

In JavaScript, we can handle asynchronous code using:

- [Callbacks](/callbacks-concurrency-in-javascript-node)
- [Promises](/promises-tutorial-concurrency-in-javascript-node)
- Async/Await functions
- Generators

I’m going to cover each one in a separate post. Stay tuned!

### Now, your turn!

Thanks for reading this far. Here are some things you can do next:

- Found a typo? [Edit this post](https://github.com/amejiarosario/amejiarosario.github.io/edit/source/source/_posts/2019-06-28-asynchronous-vs-synchronous-handling-concurrency-in-javascript.md).
- Got questions? [comment](#comments-section) below.
- Was it useful? Show your support and share it.

<a href="/callbacks-concurrency-in-javascript-node/" class="article-nav-newer"><strong><em></em> newer</strong></a>

Understanding JavaScript Callbacks and best practices

<a href="/How-to-build-a-Node-js-eCommerce-website-for-free/" class="article-nav-older"><strong>older <em></em></strong></a>

How to build a Node.js eCommerce website for free

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

1.  <a href="#Synchronous-vs-Asynchronous-in-Node-js" class="toc-link"><span class="toc-number">1.</span> <span class="toc-text">Synchronous vs. Asynchronous in Node.js</span></a>
    1.  <a href="#Synchronous-code-for-reading-from-a-file-in-Node-js" class="toc-link"><span class="toc-number">1.1.</span> <span class="toc-text">Synchronous code for reading from a file in Node.js</span></a>
    2.  <a href="#Asynchronous-code-for-reading-from-a-file-in-Node-js" class="toc-link"><span class="toc-number">1.2.</span> <span class="toc-text">Asynchronous code for reading from a file in Node.js</span></a>
    3.  <a href="#Blocking-vs-Non-Blocking-I-O-model-Benchmark" class="toc-link"><span class="toc-number">1.3.</span> <span class="toc-text">Blocking vs. Non-Blocking I/O model Benchmark</span></a>
2.  <a href="#Advantages-of-non-blocking-code" class="toc-link"><span class="toc-number">2.</span> <span class="toc-text">Advantages of non-blocking code</span></a>
