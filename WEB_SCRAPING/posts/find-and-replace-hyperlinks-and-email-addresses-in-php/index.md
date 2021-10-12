<a href="../../index.html" class="header-link"><img src="../../images/logos/wordmark.svg" alt="A Beautiful Site" class="wordmark" /></a> <a href="../../index.html" class="nav-item">Home</a> <a href="../../tags/index.html" class="nav-item">Tags</a> <a href="../index.html" class="nav-item">Archive</a> <a href="../../about/index.html" class="nav-item">About</a>

------------------------------------------------------------------------

Find and replace hyperlinks and email addresses in PHP
======================================================

May 15, 2007 • 1 min read

![A drawing of a cartoon man pointing upwards](../../images/artwork/pointer.gif)

Heads up! This post was written in 2007, so it may contain information that is no longer accurate. I keep posts like this around for historical purposes and to prevent link rot, so please keep this in mind as you're reading.

— Cory

These two PHP functions use regular expressions to add the appropriate HTML anchor tags around hyperlinks and email addresses in `$string`.

PHP code <a href="#php-code" class="direct-link">#</a>
------------------------------------------------------

    function parseHyperlinks($string) {
      // Add  tags around all hyperlinks in $string
      return ereg_replace("[[:alpha:]]+://[^<>[:space:]]+[[:alnum:]/]", "\0", $string);
    }

    function parseEmails($string) {
      // Add  tags around all email addresses in $string
      return ereg_replace("[_A-Za-z0-9-]+(.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(.[A-Za-z0-9-]+)*(.[A-Za-z]{2,3})", "\0", $string);
    }

Output <a href="#output" class="direct-link">#</a>
--------------------------------------------------

Using `parseHyperlinks()`, `http://domain.com/index.htm` becomes:

    <a href="http://domain.com/index.htm">http://domain.com/index.htm</a>

And using `parseEmails()`, `email@domain.com` becomes:

    <a href="mailto:email@domain.com">email@domain.com></a>

<a href="../../tags/development/index.html" class="post-tag">development</a> <a href="../../tags/php/index.html" class="post-tag">php</a> <a href="../../tags/tips/index.html" class="post-tag">tips</a>

------------------------------------------------------------------------

<img src="http://0.gravatar.com/avatar/bf1b3b95fd5b096a3592247c29667b33?s=512" alt="Photo of Cory" class="avatar avatar-small" />

Written by [Cory LaViska](../../index-4.html), a software engineer and UX architect responsible for [Shoelace.style](https://shoelace.style/), [Surreal CMS](https://www.surrealcms.com/), and other [open source things](https://github.com/claviska).

You can follow Cory on [Twitter](https://twitter.com/bgooonz) and [GitHub](https://github.com/claviska).

------------------------------------------------------------------------

<a href="../what-are-favicons/index.html" class="post-nav-previous"><span class="small">Previous post</span> What are favicons?</a> <a href="../css-drop-caps/index.html" class="post-nav-next"><span class="small">Up next</span> CSS drop caps</a>
