<a href="../../index.html" class="header-link"><img src="../../images/logos/wordmark.svg" alt="A Beautiful Site" class="wordmark" /></a> <a href="../../index.html" class="nav-item">Home</a> <a href="../../tags/index.html" class="nav-item">Tags</a> <a href="../index.html" class="nav-item">Archive</a> <a href="../../about/index.html" class="nav-item">About</a>

------------------------------------------------------------------------

$.postJSON() for jQuery
=======================

May 31, 2008 • 1 min read

![A drawing of a cartoon man pointing upwards](../../images/artwork/pointer.gif)

Heads up! This post was written in 2008, so it may contain information that is no longer accurate. I keep posts like this around for historical purposes and to prevent link rot, so please keep this in mind as you're reading.

— Cory

`$.getJSON()` is pretty handy for sending an AJAX request and getting back JSON data as a response. Alas, the jQuery documentation lacks a sister function that should be named `$.postJSON()`. Why not just use `$.getJSON()` and be done with it? Well, perhaps you want to send a large amount of data or, in my case, IE7 just doesn't want to work properly with a GET request.

It is true, there is currently no `$.postJSON()` method, but you can accomplish the same thing by specifying a fourth parameter (`type`) in the `$.post()` function:

    // Send the request
    $.post('script.php', data, function(response) {
      // Do something with the request
    }, 'json');

This works for `$.get()` as well, which means `$.getJSON()` is basically a call to `$.get()` with `'json'` as the fourth parameter.

<a href="../../tags/javascript/index.html" class="post-tag">javascript</a> <a href="../../tags/jquery/index.html" class="post-tag">jquery</a> <a href="../../tags/tips/index.html" class="post-tag">tips</a>

------------------------------------------------------------------------

<img src="http://0.gravatar.com/avatar/bf1b3b95fd5b096a3592247c29667b33?s=512" alt="Photo of Cory" class="avatar avatar-small" />

Written by [Cory LaViska](../../index-4.html), a software engineer and UX architect responsible for [Shoelace.style](https://shoelace.style/), [Surreal CMS](https://www.surrealcms.com/), and other [open source things](https://github.com/claviska).

You can follow Cory on [Twitter](https://twitter.com/claviska) and [GitHub](https://github.com/claviska).

------------------------------------------------------------------------

<a href="../generate-random-passwords-in-php/index.html" class="post-nav-previous"><span class="small">Previous post</span> Generate random passwords in PHP</a> <a href="../parsing-a-json-string-results-in-an-invalid-label-error/index.html" class="post-nav-next"><span class="small">Up next</span> Parsing a JSON string results in an 'Invalid Label' error</a>
