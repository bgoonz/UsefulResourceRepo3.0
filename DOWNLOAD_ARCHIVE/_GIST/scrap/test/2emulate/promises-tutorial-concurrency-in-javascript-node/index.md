<a href="/categories/coding/" class="category-link">Coding</a>

# The JavaScript Promise Tutorial

<span title="Last time this post was updated"> Last updated August 6th 2020 </span> <span class="m-x-2" title="Pageviews"> 7.0k </span> <span class="m-x-2" title="Click to go to the comments section"> [ <span class="disqus-comment-count" data-disqus-url="https://master--bgoonz-blog.netlify.app/promises-tutorial-concurrency-in-javascript-node/">0</span>](#disqus_thread) </span>

- <a href="/tags/javascript/" class="tag-list-link">javascript</a><span class="tag-list-count">5</span>
- <a href="/tags/nodejs/" class="tag-list-link">nodejs</a><span class="tag-list-count">12</span>
- <a href="/tags/tutorial-async-javascript/" class="tag-list-link">tutorial_async-javascript</a><span class="tag-list-count">3</span>

![The JavaScript Promise Tutorial](/images/promises-concurrency-in-javascript-large.png)

This post is intended to be the ultimate JavaScript Promises tutorial: recipes and examples for everyday situations (or that’s the goal 😉). We cover all the necessary methods like `then`, `catch`, and `finally`. Also, we go over more complex situations like executing promises in parallel with `Promise.all`, timing out APIs with `Promise.race`, promise chaining and some best practices and gotchas.

<span id="more"></span>

_NOTE: I’d like this post to be up-to-date with the most common use cases for promises. If you have a question about promises and it’s not answered here. Please, comment below or reach out to me directly [@iAmAdrianMejia](https://twitter.com/iAmAdrianMejia). I’ll look into it and update this post._

---

**Related Posts:**

1.  [Async vs Sync in JavaScript](/asynchronous-vs-synchronous-handling-concurrency-in-javascript/)
2.  [JavaScript Callbacks](/callbacks-concurrency-in-javascript-node/)
3.  [JavaScript Promises](/promises-tutorial-concurrency-in-javascript-node/) (this one)

---

## <a href="#JavaScript-Promises" class="headerlink" title="JavaScript Promises"></a>JavaScript Promises

A promise is an object that allows you to handle asynchronous operations. It’s an alternative to plain old callbacks.

Promises have many advantages over callbacks. To name a few:

- Make the async code easier to read.
- Provide combined error handling.
- Better control flow. You can have async actions execute in parallel or series.

Callbacks tend to form deeply nested structures (a.k.a. Callback hell). Like the following:

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7
8
9</code></pre></td><td><pre><code>a(() =&gt; {
  b(() =&gt; {
    c(() =&gt; {
      d(() =&gt; {
        // and so on ...
      });
    });
  });
});</code></pre></td></tr></tbody></table>

If you convert those functions to promises, they can be chained producing more maintainable code. Something like this:

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6</code></pre></td><td><pre><code>Promise.resolve()
  .then(a)
  .then(b)
  .then(c)
  .then(d)
  .catch(console.error);</code></pre></td></tr></tbody></table>

As you can see, in the example above, the promise object exposes the methods `.then` and `.catch`. We are going to explore these methods later.

## <a href="#How-do-I-convert-an-existing-callback-API-to-promises" class="headerlink" title="How do I convert an existing callback API to promises?"></a>How do I convert an existing callback API to promises?

We can convert callbacks into promises using the Promise constructor.

The Promise constructor takes a callback with two arguments `resolve` and `reject`.

- **Resolve**: is a callback that should be invoked when the async operation is completed.
- **Reject**: is a callback function to be invoked when an error occurs.

The constructor returns an object immediately, the promise instance. You can get notified when the promise is “done” using the method `.then` in the promise instance. Let’s see an example.

### <a href="#Wait-aren’t-promises-just-callbacks" class="headerlink" title="Wait, aren’t promises just callbacks?"></a>Wait, aren’t promises just callbacks?

Yes and no. Promises are not “just” callbacks, but they do use asynchronous callbacks on the `.then` and `.catch` methods. Promises are an abstraction on top of callbacks that allows you to chain multiple async operations and handle errors more elegantly. Let’s see it in action.

#### <a href="#Promises-anti-pattern-promise-hell" class="headerlink" title="Promises anti-pattern (promise hell)"></a>Promises anti-pattern (promise hell)

Before jumping into how to convert callbacks to promises, let’s see how NOT to it.

Please don’t convert callbacks to promises from this:

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7
8
9</code></pre></td><td><pre><code>a(() =&gt; {
  b(() =&gt; {
    c(() =&gt; {
      d(() =&gt; {
        // and so on ...
      });
    });
  });
});</code></pre></td></tr></tbody></table>

To this:

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7
8
9</code></pre></td><td><pre><code>a().then(() =&gt; {
  return b().then(() =&gt; {
    return c().then(() =&gt; {
      return d().then(() =&gt;{
        // ⚠️ Please never ever do to this! ⚠️
      });
    });
  });
});</code></pre></td></tr></tbody></table>

Always keep your promises as flat as you can.

It’s better to do this:

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4</code></pre></td><td><pre><code>a()
  .then(b)
  .then(c)
  .then(d)</code></pre></td></tr></tbody></table>

Let’s do some real-life examples! 💪

### <a href="#Promesifying-Timeouts" class="headerlink" title="Promesifying Timeouts"></a>Promesifying Timeouts

Let’s see an example. What do you think will be the output of the following program?

    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('time is up ⏰');
      }, 1e3);

      setTimeout(() => {
        reject('Oops 🔥');
      }, 2e3);
    });

    promise
      .then(console.log)
      .catch(console.error);

Is the output:

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2</code></pre></td><td><pre><code>time is up ⏰
Oops! 🔥</code></pre></td></tr></tbody></table>

or is it

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1</code></pre></td><td><pre><code>time is up ⏰</code></pre></td></tr></tbody></table>

?

It’s the latter, because

> When a promise it’s `resolve`d, it can no longer be `reject`ed.

Once you call one method (`resolve` or `reject`) the other is invalidated since the promise in a _settled_ state. Let’s explore all the different states of a promise.

## <a href="#Promise-states" class="headerlink" title="Promise states"></a>Promise states

There are four states in which the promises can be:

- ⏳ **Pending**: initial state. Async operation is still in process.
- ✅ **Fulfilled**: the operation was successful. It invokes `.then` callback. E.g., `.then(onSuccess)`.
- ⛔️ **Rejected**: the operation failed. It invokes the `.catch` or `.then` ‘s second argument (if any). E.g., `.catch(onError)` or `.then(..., onError)`
- 😵 **Settled**: it’s the promise final state. The promise is dead. Nothing else can be resolved or rejected anymore. The `.finally` method is invoked.

![Promises four states](/images/promises-states.png)

## <a href="#Promise-instance-methods" class="headerlink" title="Promise instance methods"></a>Promise instance methods

The Promise API exposes three main methods: `then`, `catch` and `finally`. Let’s explore each one and provide examples.

### <a href="#Promise-then" class="headerlink" title="Promise then"></a>Promise then

The `then` method allows you to get notified when the asynchronous operation is done, either succeeded or failed. It takes two arguments, one for the successful execution and the other one if an error happens.

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1</code></pre></td><td><pre><code>promise.then(onSuccess, onError);</code></pre></td></tr></tbody></table>

You can also use catch to handle errors:

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1</code></pre></td><td><pre><code>promise.then(onSuccess).catch(onError);</code></pre></td></tr></tbody></table>

**Promise chaining**

`then` returns a new promise so you can chain multiple promises together. Like in the example below:

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4</code></pre></td><td><pre><code>Promise.resolve()
  .then(() =&gt; console.log(&#39;then#1&#39;))
  .then(() =&gt; console.log(&#39;then#2&#39;))
  .then(() =&gt; console.log(&#39;then#3&#39;));</code></pre></td></tr></tbody></table>

`Promise.resolve` immediately resolves the promise as successful. So all the following `then` are called. The output would be

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3</code></pre></td><td><pre><code>then#1
then#2
then#3</code></pre></td></tr></tbody></table>

Let’s see how to handle errors on promises with `then` and `catch`.

### <a href="#Promise-catch" class="headerlink" title="Promise catch"></a>Promise catch

Promise `.catch` the method takes a function as an argument that handles errors if they occur. If everything goes well, the catch method is never called.

Let’s say we have the following promises: one resolves or rejects after 1 second and prints out their letter.

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4</code></pre></td><td><pre><code>const a = () =&gt; new Promise((resolve) =&gt; setTimeout(() =&gt; { console.log(&#39;a&#39;), resolve() }, 1e3));
const b = () =&gt; new Promise((resolve) =&gt; setTimeout(() =&gt; { console.log(&#39;b&#39;), resolve() }, 1e3));
const c = () =&gt; new Promise((resolve, reject) =&gt; setTimeout(() =&gt; { console.log(&#39;c&#39;), reject(&#39;Oops!&#39;) }, 1e3));
const d = () =&gt; new Promise((resolve) =&gt; setTimeout(() =&gt; { console.log(&#39;d&#39;), resolve() }, 1e3));</code></pre></td></tr></tbody></table>

Notice that `c` simulates a rejection with `reject('Oops!')`

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6</code></pre></td><td><pre><code>Promise.resolve()
  .then(a)
  .then(b)
  .then(c)
  .then(d)
  .catch(console.error)</code></pre></td></tr></tbody></table>

The output is the following:

![promise catch](/images/promise-catch.gif)

In this case, you will see `a`, `b`, and the error message on `c`. The function\` will never get executed because the error broke the sequence.

Also, you can handle the error using the 2nd argument of the `then` function. However, be aware that `catch` will not execute anymore.

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6</code></pre></td><td><pre><code>Promise.resolve()
  .then(a)
  .then(b)
  .then(c)
  .then(d, () =&gt; console.log(&#39;c errored out but no big deal&#39;))
  .catch(console.error)</code></pre></td></tr></tbody></table>

![promise then error handling](/images/promise-then-on-error.gif)

As you can see the catch doesn’t get called because we are handling the error on the `.then(..., onError)` part. `d` is not being called regardless. If you want to ignore the error and continue with the execution of the promise chain, you can add a `catch` on `c`. Something like this:

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6</code></pre></td><td><pre><code>Promise.resolve()
  .then(a)
  .then(b)
  .then(() =&gt; c().catch(() =&gt; console.log(&#39;error ignored&#39;)))
  .then(d)
  .catch(console.error)</code></pre></td></tr></tbody></table>

![promise then error handling](/images/promise-catch-ignored.gif)

Now’d`gets executed!! In all the other cases, it didn't. This early`catch\` is not desired in most cases; it can lead to things falling silently and make your async operations harder to debug.

### <a href="#Promise-finally" class="headerlink" title="Promise finally"></a>Promise finally

The `finally` method is called only when the promise is settled.

You can use a `.then` after the `.catch`, in case you want a piece of code to execute always, even after a failure.

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7</code></pre></td><td><pre><code>Promise.resolve()
  .then(a)
  .then(b)
  .then(c)
  .then(d)
  .catch(console.error)
  .then(() =&gt; console.log(&#39;always called&#39;));</code></pre></td></tr></tbody></table>

or you can use the `.finally` keyword:

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7</code></pre></td><td><pre><code>Promise.resolve()
  .then(a)
  .then(b)
  .then(c)
  .then(d)
  .catch(console.error)
  .finally(() =&gt; console.log(&#39;always called&#39;));</code></pre></td></tr></tbody></table>

## <a href="#Promise-class-Methods" class="headerlink" title="Promise class Methods"></a>Promise class Methods

There are four static methods that you can use directly from the `Promise` object.

- Promise.all
- Promise.reject
- Promise.resolve
- Promise.race

Let’s see each one and provide examples.

### <a href="#Promise-resolve-and-Promise-reject" class="headerlink" title="Promise.resolve and Promise.reject"></a>Promise.resolve and Promise.reject

These two are helper functions that resolve or reject immediately. You can pass a `reason` that will be passed on the next `.then`.

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3</code></pre></td><td><pre><code>Promise.resolve(&#39;Yay!!!&#39;)
  .then(console.log)
  .catch(console.error)</code></pre></td></tr></tbody></table>

This code will output `Yay!!!` as expected.

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3</code></pre></td><td><pre><code>Promise.reject(&#39;Oops 🔥&#39;)
  .then(console.log)
  .catch(console.error)</code></pre></td></tr></tbody></table>

The output will be a console error with the error reason of `Oops 🔥`.

### <a href="#Executing-promises-in-Parallel-with-Promise-all" class="headerlink" title="Executing promises in Parallel with Promise.all"></a>Executing promises in Parallel with Promise.all

Usually, promises are executed in series, one after another, but you can use them in parallel as well.

Let’s say are polling data from 2 different APIs. If they are not related, we can do trigger both requests at once with `Promise.all()`.

For this example, we will pull the Bitcoin price in USD and convert it to EUR. For that, we have two independent API calls. One for BTC/USD and other to get EUR/USD. As you imagine, both API calls can be called in parallel. However, we need a way to know when both are done to calculate the final price. We can use `Promise.all`. When all promises are done, a new promise will be returning will the results.

    const axios = require('axios');

    const bitcoinPromise = axios.get('https://api.coinpaprika.com/v1/coins/btc-bitcoin/markets');
    const dollarPromise = axios.get('https://api.exchangeratesapi.io/latest?base=USD');
    const currency = 'EUR';

    // Get the price of bitcoins on
    Promise.all([bitcoinPromise, dollarPromise])
      .then(([bitcoinMarkets, dollarExchanges]) => {
        const byCoinbaseBtc = d => d.exchange_id === 'coinbase-pro' && d.pair === 'BTC/USD';
        const coinbaseBtc = bitcoinMarkets.data.find(byCoinbaseBtc)
        const coinbaseBtcInUsd = coinbaseBtc.quotes.USD.price;
        const rate = dollarExchanges.data.rates[currency];
        return rate * coinbaseBtcInUsd;
      })
      .then(price => console.log(`The Bitcoin in ${currency} is ${price.toLocaleString()}`))
      .catch(console.log);

As you can see, `Promise.all` accepts an array of promises. When the request for both requests are completed, then we can proceed to calculate the price.

Let’s do another example and time it:

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7
8
9
10</code></pre></td><td><pre><code>const a = () =&gt; new Promise((resolve) =&gt; setTimeout(() =&gt; resolve(&#39;a&#39;), 2000));
const b = () =&gt; new Promise((resolve) =&gt; setTimeout(() =&gt; resolve(&#39;b&#39;), 1000));
const c = () =&gt; new Promise((resolve) =&gt; setTimeout(() =&gt; resolve(&#39;c&#39;), 1000));
const d = () =&gt; new Promise((resolve) =&gt; setTimeout(() =&gt; resolve(&#39;d&#39;), 1000));

console.time(&#39;promise.all&#39;);
Promise.all([a(), b(), c(), d()])
.then(results =&gt; console.log(`Done! ${results}`))
.catch(console.error)
.finally(() =&gt; console.timeEnd(&#39;promise.all&#39;));</code></pre></td></tr></tbody></table>

How long is it going to take to solve each of these promises? 5 seconds? 1 second? Or 2 seconds?

You can experiment with the dev tools and report back your results ;)

### <a href="#Promise-race" class="headerlink" title="Promise race"></a>Promise race

The `Promise.race(iterable)` takes a collection of promises and resolves as soon as the first promise settles.

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7
8
9
10</code></pre></td><td><pre><code>const a = () =&gt; new Promise((resolve) =&gt; setTimeout(() =&gt; resolve(&#39;a&#39;), 2000));
const b = () =&gt; new Promise((resolve) =&gt; setTimeout(() =&gt; resolve(&#39;b&#39;), 1000));
const c = () =&gt; new Promise((resolve) =&gt; setTimeout(() =&gt; resolve(&#39;c&#39;), 1000));
const d = () =&gt; new Promise((resolve) =&gt; setTimeout(() =&gt; resolve(&#39;d&#39;), 1000));

console.time(&#39;promise.race&#39;);
Promise.race([a(), b(), c(), d()])
.then(results =&gt; console.log(`Done! ${results}`))
.catch(console.error)
.finally(() =&gt; console.timeEnd(&#39;promise.race&#39;));</code></pre></td></tr></tbody></table>

What’s the output?

It’s `b`! With `Promise.race` only the fastest gets to be part of the result. 🏁

You might wonder: \_ What’s the usage of the Promise race?\_

I haven’t used it as often as the others. But, it can come handy in some cases like timing out promises and [batching array of requests](#How-to-limit-parallel-promises).

#### <a href="#Timing-out-requests-with-Promise-race" class="headerlink" title="Timing out requests with Promise race"></a>Timing out requests with Promise race

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6</code></pre></td><td><pre><code>Promise.race([
  fetch(&#39;http://slowwly.robertomurray.co.uk/delay/3000/url/https://api.jsonbin.io/b/5d1fb4dd138da811182c69af&#39;),
  new Promise((resolve, reject) =&gt; setTimeout(() =&gt; reject(new Error(&#39;request timeout&#39;)), 1000))
])
.then(console.log)
.catch(console.error);</code></pre></td></tr></tbody></table>

![Promise race timeout](/images/promise-race-fail.gif)

If the request is fast enough, then you have the result.

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6</code></pre></td><td><pre><code>Promise.race([
  fetch(&#39;http://slowwly.robertomurray.co.uk/delay/1/url/https://api.jsonbin.io/b/5d1fb4dd138da811182c69af&#39;),
  new Promise((resolve, reject) =&gt; setTimeout(() =&gt; reject(new Error(&#39;request timeout&#39;)), 1000))
])
.then(console.log)
.catch(console.error);</code></pre></td></tr></tbody></table>

![Promise race](/images/promise-race-pass.gif)

## <a href="#Promises-FAQ" class="headerlink" title="Promises FAQ"></a>Promises FAQ

This section covers tricks and tips using all the promises methods that we explained before.

### <a href="#Executing-promises-in-series-and-passing-arguments" class="headerlink" title="Executing promises in series and passing arguments"></a>Executing promises in series and passing arguments

This time we are going to use the promises API for Node’s `fs` and we are going to concatenate two files:

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7</code></pre></td><td><pre><code>const fs = require(&#39;fs&#39;).promises; // requires node v8+

fs.readFile(&#39;file.txt&#39;, &#39;utf8&#39;)
.then(content1 =&gt; fs.writeFile(&#39;output.txt&#39;, content1))
.then(() =&gt; fs.readFile(&#39;file2.txt&#39;, &#39;utf8&#39;))
.then(content2 =&gt; fs.writeFile(&#39;output.txt&#39;, content2, { flag: &#39;a+&#39; }))
.catch(error =&gt; console.log(error));</code></pre></td></tr></tbody></table>

In this example, we read file 1 and write it to the output file. Later, we read file 2 and append it to the output file again. As you can see, `writeFile` promise returns the content of the file, and you can use it in the next `then` clause.

### <a href="#How-do-I-chain-multiple-conditional-promises" class="headerlink" title="How do I chain multiple conditional promises?"></a>How do I chain multiple conditional promises?

You might have a case where you want to skip specific steps on a promise chain. You can do that in two ways.

    const a = () => new Promise((resolve) => setTimeout(() => { console.log('a'), resolve() }, 1e3));
    const b = () => new Promise((resolve) => setTimeout(() => { console.log('b'), resolve() }, 2e3));
    const c = () => new Promise((resolve) => setTimeout(() => { console.log('c'), resolve() }, 3e3));
    const d = () => new Promise((resolve) => setTimeout(() => { console.log('d'), resolve() }, 4e3));

    const shouldExecA = true;
    const shouldExecB = false;
    const shouldExecC = false;
    const shouldExecD = true;

    Promise.resolve()
      .then(() => shouldExecA && a())
      .then(() => shouldExecB && b())
      .then(() => shouldExecC && c())
      .then(() => shouldExecD && d())
      .then(() => console.log('done'))

If you run the code example, you will notice that only `a` and `d` are executed as expected.

An alternative way is creating a chain and then only add them if

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7
8</code></pre></td><td><pre><code>const chain = Promise.resolve();
if (shouldExecA) chain = chain.then(a);
if (shouldExecB) chain = chain.then(b);
if (shouldExecC) chain = chain.then(c);
if (shouldExecD) chain = chain.then(d);

chain
.then(() =&gt; console.log(&#39;done&#39;));</code></pre></td></tr></tbody></table>

### <a href="#How-to-limit-parallel-promises" class="headerlink" title="How to limit parallel promises?"></a>How to limit parallel promises?

To accomplish this, we have to throttle `Promise.all` somehow.

Let’s say you have many concurrent requests to do. If you use a `Promise.all` that won’t be good (especially when the API is rate limited). So, we need to develop and function that does that for us. Let’s call it `promiseAllThrottled`.

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7
8</code></pre></td><td><pre><code>// simulate 10 async tasks that takes 5 seconds to complete.
const requests = Array(10)
  .fill()
  .map((_, i) =&gt; () =&gt; new Promise((resolve =&gt; setTimeout(() =&gt; { console.log(`exec&#39;ing task #${i}`), resolve(`task #${i}`); }, 5000))));

promiseAllThrottled(requests, { concurrency: 3 })
.then(console.log)
.catch(error =&gt; console.error(&#39;Oops something went wrong&#39;, error));</code></pre></td></tr></tbody></table>

The output should be something like this:

![promise throttle](/images/promise-throttle.gif)

So, the code above will limit the concurrency to 3 tasks executing in parallel. This is one possible implementation of `promiseAllThrottled` using `Promise.race` to throttle the number of active tasks at a given time:

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
32
33</code></pre></td><td><pre><code>/**
 * Similar to Promise.all but a concurrency limit
 *
 * @param {Array} iterable Array of functions that returns a promise
 * @param {Object} concurrency max number of parallel promises running
 */
function promiseAllThrottled(iterable, { concurrency = 3 } = {}) {
  const promises = [];

function enqueue(current = 0, queue = []) {
// return if done
if (current === iterable.length) { return Promise.resolve(); }
// take one promise from collection
const promise = iterable[current];
const activatedPromise = promise();
// add promise to the final result array
promises.push(activatedPromise);
// add current activated promise to queue and remove it when done
const autoRemovePromise = activatedPromise.then(() =&gt; {
// remove promise from the queue when done
return queue.splice(queue.indexOf(autoRemovePromise), 1);
});
// add promise to the queue
queue.push(autoRemovePromise);

    // if queue length &gt;= concurrency, wait for one promise to finish before adding more.
    const readyForMore = queue.length &lt; concurrency ? Promise.resolve() : Promise.race(queue);
    return readyForMore.then(() =&gt; enqueue(current + 1, queue));

}

return enqueue()
.then(() =&gt; Promise.all(promises));
}</code></pre></td></tr></tbody></table>

The `promiseAllThrottled` takes promises one by one. It executes the promises and adds it to the queue. If the queue is less than the concurrency limit, it keeps adding to the queue. Once the limit is reached, we use `Promise.race` to wait for one promise to finish so we can replace it with a new one. The trick here is that the promise auto removes itself from the queue when it is done. Also, we use race to detect when a promise has finished, and it adds a new one.

---

**Related Posts:**

1.  [Async vs Sync in JavaScript](/asynchronous-vs-synchronous-handling-concurrency-in-javascript/)
2.  [JavaScript Callbacks](/callbacks-concurrency-in-javascript-node/)
3.  [JavaScript Promises](/promises-tutorial-concurrency-in-javascript-node/) (this one)

---

### Now, your turn!

Thanks for reading this far. Here are some things you can do next:

- Found a typo? [Edit this post](https://github.com/amejiarosario/amejiarosario.github.io/edit/source/source/_posts/2019-07-05-promises-tutorial-concurrency-in-javascript-node.md).
- Got questions? [comment](#comments-section) below.
- Was it useful? Show your support and share it.

<a href="/angular-todo-mean-stack-node-mongodb-typescript-tutorial/" class="article-nav-newer"><strong><em></em> newer</strong></a>

Modern MEAN Stack Tutorial with Docker (Angular, Node, Typescript and Mongodb)

<a href="/callbacks-concurrency-in-javascript-node/" class="article-nav-older"><strong>older <em></em></strong></a>

Understanding JavaScript Callbacks and best practices

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

1.  <a href="#JavaScript-Promises" class="toc-link"><span class="toc-number">1.</span> <span class="toc-text">JavaScript Promises</span></a>
2.  <a href="#How-do-I-convert-an-existing-callback-API-to-promises" class="toc-link"><span class="toc-number">2.</span> <span class="toc-text">How do I convert an existing callback API to promises?</span></a>
    1.  <a href="#Wait-aren%E2%80%99t-promises-just-callbacks" class="toc-link"><span class="toc-number">2.1.</span> <span class="toc-text">Wait, aren’t promises just callbacks?</span></a>
        1.  <a href="#Promises-anti-pattern-promise-hell" class="toc-link"><span class="toc-number">2.1.1.</span> <span class="toc-text">Promises anti-pattern (promise hell)</span></a>
    2.  <a href="#Promesifying-Timeouts" class="toc-link"><span class="toc-number">2.2.</span> <span class="toc-text">Promesifying Timeouts</span></a>
3.  <a href="#Promise-states" class="toc-link"><span class="toc-number">3.</span> <span class="toc-text">Promise states</span></a>
4.  <a href="#Promise-instance-methods" class="toc-link"><span class="toc-number">4.</span> <span class="toc-text">Promise instance methods</span></a>
    1.  <a href="#Promise-then" class="toc-link"><span class="toc-number">4.1.</span> <span class="toc-text">Promise then</span></a>
    2.  <a href="#Promise-catch" class="toc-link"><span class="toc-number">4.2.</span> <span class="toc-text">Promise catch</span></a>
    3.  <a href="#Promise-finally" class="toc-link"><span class="toc-number">4.3.</span> <span class="toc-text">Promise finally</span></a>
5.  <a href="#Promise-class-Methods" class="toc-link"><span class="toc-number">5.</span> <span class="toc-text">Promise class Methods</span></a>
    1.  <a href="#Promise-resolve-and-Promise-reject" class="toc-link"><span class="toc-number">5.1.</span> <span class="toc-text">Promise.resolve and Promise.reject</span></a>
    2.  <a href="#Executing-promises-in-Parallel-with-Promise-all" class="toc-link"><span class="toc-number">5.2.</span> <span class="toc-text">Executing promises in Parallel with Promise.all</span></a>
    3.  <a href="#Promise-race" class="toc-link"><span class="toc-number">5.3.</span> <span class="toc-text">Promise race</span></a>
        1.  <a href="#Timing-out-requests-with-Promise-race" class="toc-link"><span class="toc-number">5.3.1.</span> <span class="toc-text">Timing out requests with Promise race</span></a>
6.  <a href="#Promises-FAQ" class="toc-link"><span class="toc-number">6.</span> <span class="toc-text">Promises FAQ</span></a>
    1.  <a href="#Executing-promises-in-series-and-passing-arguments" class="toc-link"><span class="toc-number">6.1.</span> <span class="toc-text">Executing promises in series and passing arguments</span></a>
    2.  <a href="#How-do-I-chain-multiple-conditional-promises" class="toc-link"><span class="toc-number">6.2.</span> <span class="toc-text">How do I chain multiple conditional promises?</span></a>
    3.  <a href="#How-to-limit-parallel-promises" class="toc-link"><span class="toc-number">6.3.</span> <span class="toc-text">How to limit parallel promises?</span></a>
