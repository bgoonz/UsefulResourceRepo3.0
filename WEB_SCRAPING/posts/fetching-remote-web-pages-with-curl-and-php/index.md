<a href="../../index.html" class="header-link"><img src="../../images/logos/wordmark.svg" alt="A Beautiful Site" class="wordmark" /></a> <a href="../../index.html" class="nav-item">Home</a> <a href="../../tags/index.html" class="nav-item">Tags</a> <a href="../index.html" class="nav-item">Archive</a> <a href="../../about/index.html" class="nav-item">About</a>

---

# Fetching remote web pages with curl and PHP

April 08, 2008 • 1 min read

![A drawing of a cartoon man pointing upwards](../../images/artwork/pointer.gif)

Heads up! This post was written in 2008, so it may contain information that is no longer accurate. I keep posts like this around for historical purposes and to prevent link rot, so please keep this in mind as you're reading.

— Cory

This is a very brief example of how to use PHP's [curl Library](http://php.net/curl) to retrieve the source of a remote webpage.

    $c = curl_init();
    curl_setopt($c, CURLOPT_URL, "http://example.com/");
    curl_setopt($c, CURLOPT_RETURNTRANSFER, 1);
    $data = curl_exec($c);
    curl_close($c);

`CURLOPT_RETURNTRANSFER` is a predefined constant that tells curl to return the output to a variable instead of displaying it in the browser. Visit the [PHP Manual](http://php.net/) for a list of all [CURL predefined constants](http://php.net/manual/en/curl.constants.php) and their uses.

The source of the remote file will be stored as a string in `$data`.

<a href="../../tags/php/index.html" class="post-tag">php</a> <a href="../../tags/curl/index.html" class="post-tag">curl</a> <a href="../../tags/tips/index.html" class="post-tag">tips</a>

---

<img src="http://0.gravatar.com/avatar/bf1b3b95fd5b096a3592247c29667b33?s=512" alt="Photo of Cory" class="avatar avatar-small" />

Written by [Cory LaViska](../../index-4.html), a software engineer and UX architect responsible for [Shoelace.style](https://shoelace.style/), [Surreal CMS](https://www.surrealcms.com/), and other [open source things](https://github.com/claviska).

You can follow Cory on [Twitter](https://twitter.com/claviska) and [GitHub](https://github.com/claviska).

---

<a href="../determine-file-extensions-using-javascript/index.html" class="post-nav-previous"><span class="small">Previous post</span> Determine file extensions using JavaScript</a> <a href="../generate-random-passwords-in-php/index.html" class="post-nav-next"><span class="small">Up next</span> Generate random passwords in PHP</a>
