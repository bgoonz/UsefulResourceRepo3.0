<a href="../../index.html" class="header-link"><img src="../../images/logos/wordmark.svg" alt="A Beautiful Site" class="wordmark" /></a> <a href="../../index.html" class="nav-item">Home</a> <a href="../../tags/index.html" class="nav-item">Tags</a> <a href="../index.html" class="nav-item">Archive</a> <a href="../../about/index.html" class="nav-item">About</a>

------------------------------------------------------------------------

Access pages without the php extension using .htaccess
======================================================

February 03, 2012 • 1 min read

![A drawing of a cartoon man pointing upwards](../../images/artwork/pointer.gif)

Heads up! This post was written in 2012, so it may contain information that is no longer accurate. I keep posts like this around for historical purposes and to prevent link rot, so please keep this in mind as you're reading.

— Cory

There are a number of ways to make "clean URLs" work on your site, but this one is pretty straight forward.  It allows you to access `/any-page.php` by simply going to `/any-page`.  Just place the following into your `.htaccess` file (and make sure that `mod_rewrite` is enabled):

    RewriteEngine On
    RewriteCond %{SCRIPT\_FILENAME} !-d
    RewriteRule ^(\[^.\]+)$ $1.php \[NC,L\]

The nice thing about this is that it doesn't affect querystrings.  With this solution, both of these URLs are effectively the same:

    http://example.com/page.php?id=123

    http://example.com/page?id=123

Of course, the caveat is that you don't have "clean querystrings", but it's a reasonable trade-off between "clean" and configuration.

<a href="../../tags/php/index.html" class="post-tag">php</a> <a href="../../tags/tips/index.html" class="post-tag">tips</a>

------------------------------------------------------------------------

<img src="http://0.gravatar.com/avatar/bf1b3b95fd5b096a3592247c29667b33?s=512" alt="Photo of Cory" class="avatar avatar-small" />

Written by [Cory LaViska](../../index-4.html), a software engineer and UX architect responsible for [Shoelace.style](https://shoelace.style/), [Surreal CMS](https://www.surrealcms.com/), and other [open source things](https://github.com/claviska).

You can follow Cory on [Twitter](https://twitter.com/bgooonz) and [GitHub](https://github.com/claviska).

------------------------------------------------------------------------

<a href="../detecting-mobile-devices-with-javascript/index.html" class="post-nav-previous"><span class="small">Previous post</span> Detecting mobile devices with JavaScript</a> <a href="../feature-detection-for-css-transitions-via-jquery-support/index.html" class="post-nav-next"><span class="small">Up next</span> Feature detection for CSS transitions via jQuery $.support</a>
