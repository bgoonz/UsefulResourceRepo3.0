<a href="../../index.html" class="header-link"><img src="../../images/logos/wordmark.svg" alt="A Beautiful Site" class="wordmark" /></a> <a href="../../index.html" class="nav-item">Home</a> <a href="../../tags/index.html" class="nav-item">Tags</a> <a href="../index.html" class="nav-item">Archive</a> <a href="../../about/index.html" class="nav-item">About</a>

---

# Using the classList API

August 15, 2014 • 1 min read

jQuery makes it easy to add, remove, and toggle classes on various elements. It's too bad this stuff wasn't built into JavaScript. But wait — it is now!

What your looking for didn't exist until IE10, but it's been in Firefox, Chrome, Safari, and Opera for some time now. It's called the `classList` API, and it makes working with classes a breeze, even without a library.

For these examples, assume that `el` is a reference to an element on your page.

    // Adding a class
    el.classList.add('your-class-name');

    // Removing a class
    el.classList.remove('some-class-name');

    // Toggling a class on/off
    el.classList.toggle('some-class-name');

    // Checking for a class
    if (el.classList.contains('some-class-name')) {
      // has the class
    } else {
      // doesn't have the class
    }

This is just as easy as any library out there, and you can use it today if you're not worried about IE9 and below. (Actually, you can still use it with [a shim](../../../github.com/eligrey/classList.html).)

<a href="../../tags/development/index.html" class="post-tag">development</a> <a href="../../tags/css/index.html" class="post-tag">css</a> <a href="../../tags/javascript/index.html" class="post-tag">javascript</a> <a href="../../tags/tips/index.html" class="post-tag">tips</a>

---

<img src="http://0.gravatar.com/avatar/bf1b3b95fd5b096a3592247c29667b33?s=512" alt="Photo of Cory" class="avatar avatar-small" />

Written by [Cory LaViska](../../index-4.html), a software engineer and UX architect responsible for [Shoelace.style](https://shoelace.style/), [Surreal CMS](https://www.surrealcms.com/), and other [open source things](https://github.com/claviska).

You can follow Cory on [Twitter](https://twitter.com/claviska) and [GitHub](https://github.com/claviska).

---

<a href="../tinypng-a-better-way-to-compress-png-images/index.html" class="post-nav-previous"><span class="small">Previous post</span> TinyPNG: A better way to compress PNG images</a> <a href="../five-things-ive-learned-about-taking-risks/index.html" class="post-nav-next"><span class="small">Up next</span> Five things I've learned about taking risks</a>
