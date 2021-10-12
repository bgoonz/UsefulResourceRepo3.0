<a href="../../index.html" class="header-link"><img src="../../images/logos/wordmark.svg" alt="A Beautiful Site" class="wordmark" /></a> <a href="../../index.html" class="nav-item">Home</a> <a href="../../tags/index.html" class="nav-item">Tags</a> <a href="../index.html" class="nav-item">Archive</a> <a href="../../about/index.html" class="nav-item">About</a>

------------------------------------------------------------------------

The HTML5 download attribute
============================

February 19, 2015 • 1 min read

Years ago I showed you how to [force a file to download with PHP](../index-4.html). Now with HTML5, you \[almost\] don't have to do that anymore.

The HTML5 [download attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#Attributes) is intended to tell the browser that a certain link should force a certain file to download, optionally with a certain name that might be different than that on the server. Here's what it looks like:

    <a href="/path/to/file.txt" download="any-name-you-want.txt">Download</a>

This will tell your browser to download `file.txt` and prefill the name to `any-name-you-want.txt`. No fancy server-side code required. As Mozilla notes, you can also use this technique with data URLs.

Now, of course, the caveat. [Internet Explorer doesn't support it](http://caniuse.com/#feat=download), and creating a polyfill [isn't really possible](http://stackoverflow.com/questions/18652750/any-fallback-client-side-solutions-for-the-html5-download-attribute). Although you could probably use a combination of feature detection and a proxy server to force the download, but that's really more effort than it's worth.

<a href="../../tags/development/index.html" class="post-tag">development</a> <a href="../../tags/html/index.html" class="post-tag">html</a> <a href="../../tags/tips/index.html" class="post-tag">tips</a>

------------------------------------------------------------------------

<img src="http://0.gravatar.com/avatar/bf1b3b95fd5b096a3592247c29667b33?s=512" alt="Photo of Cory" class="avatar avatar-small" />

Written by [Cory LaViska](../../index-4.html), a software engineer and UX architect responsible for [Shoelace.style](https://shoelace.style/), [Surreal CMS](https://www.surrealcms.com/), and other [open source things](https://github.com/claviska).

You can follow Cory on [Twitter](https://twitter.com/bgooonz) and [GitHub](https://github.com/claviska).

------------------------------------------------------------------------

<a href="../get-comfortable-with-abstraction/index.html" class="post-nav-previous"><span class="small">Previous post</span> Get comfortable with abstraction</a> <a href="../passing-data-from-php-to-javascript/index.html" class="post-nav-next"><span class="small">Up next</span> Passing data from PHP to JavaScript</a>
