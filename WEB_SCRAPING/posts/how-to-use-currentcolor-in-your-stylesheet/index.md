<a href="../../index.html" class="header-link"><img src="../../images/logos/wordmark.svg" alt="A Beautiful Site" class="wordmark" /></a> <a href="../../index.html" class="nav-item">Home</a> <a href="../../tags/index.html" class="nav-item">Tags</a> <a href="../index.html" class="nav-item">Archive</a> <a href="../../about/index.html" class="nav-item">About</a>

---

# How to use currentColor in your stylesheet

December 04, 2014 • 1 min read

I've had my head buried so deep in code that I hadn't even noticed this existed. It's a simple way to reference the current text color when writing CSS. Works in modern browsers, including IE9+.

If you use Less or Sass then you probably already use something like `@text-color`. Alas, CSS doesn't have variables yet, but `currentColor` will come in handy if you're tired of repeating the same hex codes over and over again. Here's how it works:

    div {
      color: #00f;
      border: solid 2px currentColor;
    }

That will produce a `<div>` with blue text and a matching blue border around it. If you need to change it later on, you only need to change it in one place.

Of course, you can use currentColor for other properties too. Box shadows, background colors—pretty much anything. You can even use `currentColor` with pseudo elements:

    div {
      color: #00f;
    }

    div::after {
      /*
         Styles for CSS triangles or anything else
         you'd use a pseudo element for go here
      */
      border-color: currentColor;
    }

The resulting `border-color` will be taken from the `<div>`, which in this case is `#00f`.

<a href="../../tags/design/index.html" class="post-tag">design</a> <a href="../../tags/css/index.html" class="post-tag">css</a> <a href="../../tags/tips/index.html" class="post-tag">tips</a>

---

<img src="http://0.gravatar.com/avatar/bf1b3b95fd5b096a3592247c29667b33?s=512" alt="Photo of Cory" class="avatar avatar-small" />

Written by [Cory LaViska](../../index-4.html), a software engineer and UX architect responsible for [Shoelace.style](https://shoelace.style/), [Surreal CMS](https://www.surrealcms.com/), and other [open source things](https://github.com/claviska).

You can follow Cory on [Twitter](https://twitter.com/claviska) and [GitHub](https://github.com/claviska).

---

<a href="../i-switched-from-tabs-to-spaces-and-havent-looked-back/index.html" class="post-nav-previous"><span class="small">Previous post</span> I switched from tabs to spaces and haven't looked back</a> <a href="../social-sharing-buttons-are-ineffective/index.html" class="post-nav-next"><span class="small">Up next</span> Social sharing buttons are ineffective</a>
