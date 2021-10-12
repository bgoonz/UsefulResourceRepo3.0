<a href="../../index.html" class="header-link"><img src="../../images/logos/wordmark.svg" alt="A Beautiful Site" class="wordmark" /></a> <a href="../../index.html" class="nav-item">Home</a> <a href="../../tags/index.html" class="nav-item">Tags</a> <a href="../index.html" class="nav-item">Archive</a> <a href="../../about/index.html" class="nav-item">About</a>

------------------------------------------------------------------------

Determining your app's base directory in Node.js
================================================

February 09, 2017 • 1 min read

Determining your app's base dir (or *document root* if you're from a PHP background) isn't as straight forward as you'd think in Node. Here's a little trick to get a globally available reference to your app's root directory.

Add this somewhere towards the start of your main app file (e.g. `app.js`):

    global.__basedir = __dirname;

This sets a global variable that will always be equivalent to your app's base dir. Use it just like any other variable:

    const yourModule = require(__basedir + '/path/to/module.js');

I know what you're thinking: oh no a global! 😫

And I would normally agree, but I think this technique is a fair exception if you're developing an app. Here's why:

-   There [really isn't](http://stackoverflow.com/a/18721515/567486) a consistent way to references the base dir without it.
-   It's a fair requirement to set if you're worried about reusing modules.
-   It's a lot easier and more stable than using `../../../file.js` all the time.
-   It shares the same naming convention as `__dirname` and `__filename`.

There are, of course, other techniques that may or may not be more appropriate depending on your app. However, in my opinion, this approach is the most elegant.

<a href="../../tags/development/index.html" class="post-tag">development</a> <a href="../../tags/javascript/index.html" class="post-tag">javascript</a> <a href="../../tags/node.js/index.html" class="post-tag">node.js</a>

------------------------------------------------------------------------

<img src="http://0.gravatar.com/avatar/bf1b3b95fd5b096a3592247c29667b33?s=512" alt="Photo of Cory" class="avatar avatar-small" />

Written by [Cory LaViska](../../index-4.html), a software engineer and UX architect responsible for [Shoelace.style](https://shoelace.style/), [Surreal CMS](https://www.surrealcms.com/), and other [open source things](https://github.com/claviska).

You can follow Cory on [Twitter](https://twitter.com/bgooonz) and [GitHub](https://github.com/claviska).

------------------------------------------------------------------------

<a href="../hashing-passwords-with-nodejs-and-bcrypt/index.html" class="post-nav-previous"><span class="small">Previous post</span> Hashing Passwords with Node.js and bcrypt</a> <a href="../importing-plain-css-files-with-sass/index.html" class="post-nav-next"><span class="small">Up next</span> Importing plain CSS files with Sass</a>
