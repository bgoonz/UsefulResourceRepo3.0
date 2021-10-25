<a href="../../index.html" class="header-link"><img src="../../images/logos/wordmark.svg" alt="A Beautiful Site" class="wordmark" /></a> <a href="../../index.html" class="nav-item">Home</a> <a href="../../tags/index.html" class="nav-item">Tags</a> <a href="../index.html" class="nav-item">Archive</a> <a href="../../about/index.html" class="nav-item">About</a>

---

# External popup links using jQuery

November 15, 2007 • 1 min read

![A drawing of a cartoon man pointing upwards](../../images/artwork/pointer.gif)

Heads up! This post was written in 2007, so it may contain information that is no longer accurate. I keep posts like this around for historical purposes and to prevent link rot, so please keep this in mind as you're reading.

— Cory

With the deprecation of the `target` attribute in XHTML Strict, opening links in new windows has become a bit trivial, if not annoying, to standardize. I always look for a consistent, unobtrusive approach that degrades gracefully; and since I use jQuery quite frequently, this is how I usually handle them.

The solution is a small piece of jQuery code in your `$(document).ready()` section:

    $(document).ready(function() {
      $(document).on('click', 'A[rel="external"]', function(event) {
        event.preventDefault();
        window.open($(this).attr('href'));
      });
    });

Now, add `rel="external"` to all of the links that you want to open in a new window:

    <a href="http://domain.com/" rel="external">Domain.com</a>

From here on out, users that have JavaScript enabled will receive external pages in new windows, while those without JavaScript will still be directed to the appropriate location.

I use `rel="external"` because it's generally a good practice to limit popup links to external websites only. You could very well use `rel="popup"` instead, but I prefer the former for semantics.

<a href="../../tags/development/index.html" class="post-tag">development</a> <a href="../../tags/javascript/index.html" class="post-tag">javascript</a> <a href="../../tags/jquery/index.html" class="post-tag">jquery</a>

---

<img src="http://0.gravatar.com/avatar/bf1b3b95fd5b096a3592247c29667b33?s=512" alt="Photo of Cory" class="avatar avatar-small" />

Written by [Cory LaViska](../../index-4.html), a software engineer and UX architect responsible for [Shoelace.style](https://shoelace.style/), [Surreal CMS](https://www.surrealcms.com/), and other [open source things](https://github.com/claviska).

You can follow Cory on [Twitter](https://twitter.com/bgooonz) and [GitHub](https://github.com/claviska).

---

<a href="../convert-arrays-to-csv-with-php/index.html" class="post-nav-previous"><span class="small">Previous post</span> Convert arrays to CSV with PHP</a> <a href="../jquery-checkboxes-select-all-select-none-and-invert-selection/index.html" class="post-nav-next"><span class="small">Up next</span> Select all, select none, and invert selection with jQuery</a>
