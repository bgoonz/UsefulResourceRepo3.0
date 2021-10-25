<a href="../../index.html" class="header-link"><img src="../../images/logos/wordmark.svg" alt="A Beautiful Site" class="wordmark" /></a> <a href="../../index.html" class="nav-item">Home</a> <a href="../../tags/index.html" class="nav-item">Tags</a> <a href="../index.html" class="nav-item">Archive</a> <a href="../../about/index.html" class="nav-item">About</a>

---

# Swapping variables with JavaScript

August 04, 2014 • 1 min read

Swapping the value of two variables normally takes three lines and a temporary variable. What if I told you there was an easier way to do this with JavaScript?

## Traditional method <a href="#traditional-method" class="direct-link">#</a>

The goal is to swap the values of `a` and `b`. The textbook method for doing this looks something like this:

    var a = 1;
    var b = 2;
    var c;

    c = a;
    a = b;
    b = c;

Of course, we've introduced another variable called `c` to temporarily store the original value of `a` during the swap. But can we do it without `c`?

## One-line method <a href="#one-line-method" class="direct-link">#</a>

This trick uses an array to perform the swap. Take a second to wrap your head around it:

    b = [a, a = b][0];

There are a few things happening here, so if you're still having trouble understanding how or why this works, I'll explain:

1.  We're utilizing an array where the first index is the value of `a` and the second index is the value of  `b`
2.  `a` is set to the value of `b` when the array is created
3.  `b` is set to the first index of the array, which is  a
4.  MAGIC

While this trick definitely saves you a few lines of code and a temp variable, be cautious when using it. It's doesn't help that whole code clarity thing.

Want to learn another cool way to swap variables? If you're a math buff, you'll like the [xor trick](http://chris-taylor.github.io/blog/2013/02/25/xor-trick/).

<a href="../../tags/development/index.html" class="post-tag">development</a> <a href="../../tags/javascript/index.html" class="post-tag">javascript</a> <a href="../../tags/tips/index.html" class="post-tag">tips</a>

---

<img src="http://0.gravatar.com/avatar/bf1b3b95fd5b096a3592247c29667b33?s=512" alt="Photo of Cory" class="avatar avatar-small" />

Written by [Cory LaViska](../../index-4.html), a software engineer and UX architect responsible for [Shoelace.style](https://shoelace.style/), [Surreal CMS](https://www.surrealcms.com/), and other [open source things](https://github.com/claviska).

You can follow Cory on [Twitter](https://twitter.com/bgooonz) and [GitHub](https://github.com/claviska).

---

<a href="../the-next-version-of-php-may-very-well-be-7/index.html" class="post-nav-previous"><span class="small">Previous post</span> The next version of PHP may very well be 7</a> <a href="../how-to-get-faster-and-better-help-from-support/index.html" class="post-nav-next"><span class="small">Up next</span> How to get faster and better help from support</a>
