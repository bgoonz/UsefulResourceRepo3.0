<a href="../../index.html" class="header-link"><img src="../../images/logos/wordmark.svg" alt="A Beautiful Site" class="wordmark" /></a> <a href="../../index.html" class="nav-item">Home</a> <a href="../../tags/index.html" class="nav-item">Tags</a> <a href="../index.html" class="nav-item">Archive</a> <a href="../../about/index.html" class="nav-item">About</a>

---

# How to remove box shadows from input controls on iOS

September 16, 2015 • 1 min read

Those default box shadows that appear inside of your input elements on iOS can be pretty annoying, especially if you're going for a flat or subtle look. Here's how to remove them.

Unfortunately, it's not as simple as setting the `box-shadow` property to `none`. Instead, you have to alter the `-webkit-appearance` property:

    input[type=text],
    input[type=email],
    input[type=password],
    textarea {
      -webkit-appearance: none;
    }

That gets rid of the shadow but, for best results, you'll probably want to set your own border, background, and — perhaps ironically — your own box shadow.

<a href="../../tags/css/index.html" class="post-tag">css</a> <a href="../../tags/tips/index.html" class="post-tag">tips</a>

---

<img src="http://0.gravatar.com/avatar/bf1b3b95fd5b096a3592247c29667b33?s=512" alt="Photo of Cory" class="avatar avatar-small" />

Written by [Cory LaViska](../../index-4.html), a software engineer and UX architect responsible for [Shoelace.style](https://shoelace.style/), [Surreal CMS](https://www.surrealcms.com/), and other [open source things](https://github.com/claviska).

You can follow Cory on [Twitter](https://twitter.com/bgooonz) and [GitHub](https://github.com/claviska).

---

<a href="../passing-data-from-php-to-javascript/index.html" class="post-nav-previous"><span class="small">Previous post</span> Passing data from PHP to JavaScript</a> <a href="../a-clean-fade-in-effect-for-webpages/index.html" class="post-nav-next"><span class="small">Up next</span> A clean fade-in effect for webpages</a>
