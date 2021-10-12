<a href="../../index.html" class="header-link"><img src="../../images/logos/wordmark.svg" alt="A Beautiful Site" class="wordmark" /></a> <a href="../../index.html" class="nav-item">Home</a> <a href="../../tags/index.html" class="nav-item">Tags</a> <a href="../index.html" class="nav-item">Archive</a> <a href="../../about/index.html" class="nav-item">About</a>

------------------------------------------------------------------------

Importing plain CSS files with Sass
===================================

February 10, 2017 • 1 min read

When I first started using Sass, there was one thing that drove me crazy about it compared to Less. For some reason, including a plain CSS file just wasn't something the compiler wanted to do:

    /* Uncaught, unspecified "error" event. (Ignoring local @import of "animate.min.css" as resource is missing.) */
    @import 'animate.css';

But, annoyingly, the resource *is* there. So why does the compiler report it missing?

I may never understand the logic behind this design decision, but the solution is to simply omit the `.css` extension:

    /* Imports animate.css */
    @import 'animate';

This works as of version 3.2. And for those using Less, here's the equivalent syntax:

    /* Import CSS file using Less */
    @import (css) "animate.css";

<a href="../../tags/design/index.html" class="post-tag">design</a> <a href="../../tags/css/index.html" class="post-tag">css</a> <a href="../../tags/sass/index.html" class="post-tag">sass</a> <a href="../../tags/less/index.html" class="post-tag">less</a> <a href="../../tags/tips/index.html" class="post-tag">tips</a>

------------------------------------------------------------------------

<img src="http://0.gravatar.com/avatar/bf1b3b95fd5b096a3592247c29667b33?s=512" alt="Photo of Cory" class="avatar avatar-small" />

Written by [Cory LaViska](../../index-4.html), a software engineer and UX architect responsible for [Shoelace.style](https://shoelace.style/), [Surreal CMS](https://www.surrealcms.com/), and other [open source things](https://github.com/claviska).

You can follow Cory on [Twitter](https://twitter.com/claviska) and [GitHub](https://github.com/claviska).

------------------------------------------------------------------------

<a href="../determining-your-apps-base-directory-in-nodejs/index.html" class="post-nav-previous"><span class="small">Previous post</span> Determining your app's base directory in Node.js</a> <a href="../thoughts-on-uploads/index.html" class="post-nav-next"><span class="small">Up next</span> Thoughts on uploads</a>
