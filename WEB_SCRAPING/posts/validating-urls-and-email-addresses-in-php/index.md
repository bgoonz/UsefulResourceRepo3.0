<a href="../../index.html" class="header-link"><img src="../../images/logos/wordmark.svg" alt="A Beautiful Site" class="wordmark" /></a> <a href="../../index.html" class="nav-item">Home</a> <a href="../../tags/index.html" class="nav-item">Tags</a> <a href="../index.html" class="nav-item">Archive</a> <a href="../../about/index.html" class="nav-item">About</a>

---

# Validating URLs and email addresses in PHP

September 18, 2013 • 1 min read

This is a simple method for validating both email addresses and URLs. Using PHP's `filter_var()` function, it's actually very easy and doesn't require regular expressions. The following wrapper functions force a true boolean response, so you can use them safely in your logic.

## Email addresses <a href="#email-addresses" class="direct-link">#</a>

    function is_email($email) {
      return filter_var($email, FILTER_VALIDATE_EMAIL) !== false;
    }

## URLs <a href="#urls" class="direct-link">#</a>

    function is_url($url) {
      return filter_var($url, FILTER_VALIDATE_URL) !== false;
    }

If you choose to not use the wrappers, just remember that `filter_var()` doesn't always return a boolean value. It will return the original string on success, and `false` on failure..

<a href="../../tags/tips/index.html" class="post-tag">tips</a> <a href="../../tags/development/index.html" class="post-tag">development</a>

---

<img src="http://0.gravatar.com/avatar/bf1b3b95fd5b096a3592247c29667b33?s=512" alt="Photo of Cory" class="avatar avatar-small" />

Written by [Cory LaViska](../../index-4.html), a software engineer and UX architect responsible for [Shoelace.style](https://shoelace.style/), [Surreal CMS](https://www.surrealcms.com/), and other [open source things](https://github.com/claviska).

You can follow Cory on [Twitter](https://twitter.com/claviska) and [GitHub](https://github.com/claviska).

---

<a href="../semantic-version-numbers/index.html" class="post-nav-previous"><span class="small">Previous post</span> Semantic version numbers</a> <a href="../an-icon-converter-that-supports-multiple-sizes-and-transparency/index.html" class="post-nav-next"><span class="small">Up next</span> An icon converter that supports multiple sizes and transparency</a>
