<a href="../../index.html" class="header-link"><img src="../../images/logos/wordmark.svg" alt="A Beautiful Site" class="wordmark" /></a> <a href="../../index.html" class="nav-item">Home</a> <a href="../../tags/index.html" class="nav-item">Tags</a> <a href="../index.html" class="nav-item">Archive</a> <a href="../../about/index.html" class="nav-item">About</a>

------------------------------------------------------------------------

Generate random passwords in PHP
================================

May 17, 2008 • 1 min read

![A drawing of a cartoon man pointing upwards](../../images/artwork/pointer.gif)

Heads up! This post was written in 2008, so it may contain information that is no longer accurate. I keep posts like this around for historical purposes and to prevent link rot, so please keep this in mind as you're reading.

— Cory

Here is a function I wrote to generate a random string in PHP. It is probably most useful for generating passwords. You can specify the length of the resulting string, as well as what characters are allowed. The default length is eight and the default character set is alphanumeric.

    function random_string($length = 8, $chars = null) {
      if (empty($chars)) $chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      while (strlen($s) < $length) {
        $s .= substr($chars, rand(0, strlen($chars) - 1), 1);
      }
      return $s;
    }

    // Usage
    echo random_string(10);

<a href="../../tags/development/index.html" class="post-tag">development</a> <a href="../../tags/php/index.html" class="post-tag">php</a> <a href="../../tags/tips/index.html" class="post-tag">tips</a>

------------------------------------------------------------------------

<img src="http://0.gravatar.com/avatar/bf1b3b95fd5b096a3592247c29667b33?s=512" alt="Photo of Cory" class="avatar avatar-small" />

Written by [Cory LaViska](../../index-4.html), a software engineer and UX architect responsible for [Shoelace.style](https://shoelace.style/), [Surreal CMS](https://www.surrealcms.com/), and other [open source things](https://github.com/claviska).

You can follow Cory on [Twitter](https://twitter.com/bgooonz) and [GitHub](https://github.com/claviska).

------------------------------------------------------------------------

<a href="../fetching-remote-web-pages-with-curl-and-php/index.html" class="post-nav-previous"><span class="small">Previous post</span> Fetching remote web pages with curl and PHP</a> <a href="../postjson-for-jquery/index.html" class="post-nav-next"><span class="small">Up next</span> $.postJSON() for jQuery</a>
