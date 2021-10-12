<a href="../../index.html" class="header-link"><img src="../../images/logos/wordmark.svg" alt="A Beautiful Site" class="wordmark" /></a> <a href="../../index.html" class="nav-item">Home</a> <a href="../../tags/index.html" class="nav-item">Tags</a> <a href="../index.html" class="nav-item">Archive</a> <a href="../../about/index.html" class="nav-item">About</a>

---

# How to use the PHP ternary operator

August 18, 2014 • 1 min read

When I learned how to use the ternary operator years ago, I fell in love with it. What a cool way to simplify assignments based on a condition. If you're not sure what the ternary operator is or how it works, you're missing out on a really cool piece of programming knowledge.

Let's start out with an example and I'll explain how it works below. I'll use PHP, but the syntax is exactly the same for JavaScript. Let's say we want to assign one of two values to `$x` based on a certain condition. Using a conditional (if/then/else), it would look like this:

    if ($valid) {
      $x = 'yes';
    } else {
      $x = 'no';
    }

That should be pretty easy to read. If `$valid` is `true` set `$x` to _yes_, otherwise set it to _no_. But this example is rather long for such a simple assignment. Let's do it in one line with ternary logic:

    $x = $valid ? 'yes' : 'no';

This produces the same result as before, but it's much shorter. Read it out loud like this:

> If *x* is valid set it to _yes_; otherwise set it to _no_.

It's not that intimidating once you wrap your head around it. You can even nest them if you feel like being dangerous:

    $valid = true;
    $lang = 'french';

    $x = $valid ? ($lang === 'french' ? 'oui' : 'yes') : ($lang === 'french' ? 'non' : 'no');

    echo $x; // outputs 'oui'

Try running this script in your dev environment and playing with the values to better understand how it works.

I will, however, caution you to not go crazy with these. Overusing and nesting ternary logic can make your code really hard to read. A good rule of thumb is, if you have to re-read it multiple times to understand it, you should probably use a conditional or a switch statement instead.

## Ternary shorthand <a href="#ternary-shorthand" class="direct-link">#</a>

This trick only works in PHP 5.3+ and can sometimes make your logic even shorter. Consider this:

    if ($start) {
      $start = $start;
    } else {
      $start = 1;
    }

Granted, you probably wouldn't do that in your code. You'd probably do something like this instead:

    if (!$start) {
      $start = 1;
    }

But that's still three lines of code. Let's try with the shorthand ternary operator now:

    $start = $start ?: 1;

Much better. Just remember that this shorthand trick won't work in JavaScript!

<a href="../../tags/development/index.html" class="post-tag">development</a> <a href="../../tags/php/index.html" class="post-tag">php</a> <a href="../../tags/tips/index.html" class="post-tag">tips</a>

---

<img src="http://0.gravatar.com/avatar/bf1b3b95fd5b096a3592247c29667b33?s=512" alt="Photo of Cory" class="avatar avatar-small" />

Written by [Cory LaViska](../../index-4.html), a software engineer and UX architect responsible for [Shoelace.style](https://shoelace.style/), [Surreal CMS](https://www.surrealcms.com/), and other [open source things](https://github.com/claviska).

You can follow Cory on [Twitter](https://twitter.com/claviska) and [GitHub](https://github.com/claviska).

---

<a href="../five-things-ive-learned-about-taking-risks/index.html" class="post-nav-previous"><span class="small">Previous post</span> Five things I've learned about taking risks</a> <a href="../is-it-possible-to-be-an-introverted-entrepreneur/index.html" class="post-nav-next"><span class="small">Up next</span> Is it possible to be an introverted entrepreneur?</a>
