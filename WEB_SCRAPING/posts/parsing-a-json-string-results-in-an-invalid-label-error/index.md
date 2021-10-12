<a href="../../index.html" class="header-link"><img src="../../images/logos/wordmark.svg" alt="A Beautiful Site" class="wordmark" /></a> <a href="../../index.html" class="nav-item">Home</a> <a href="../../tags/index.html" class="nav-item">Tags</a> <a href="../index.html" class="nav-item">Archive</a> <a href="../../about/index.html" class="nav-item">About</a>

------------------------------------------------------------------------

Parsing a JSON string results in an 'Invalid Label' error
=========================================================

July 17, 2008 • 1 min read

![A drawing of a cartoon man pointing upwards](../../images/artwork/pointer.gif)

Heads up! This post was written in 2008, so it may contain information that is no longer accurate. I keep posts like this around for historical purposes and to prevent link rot, so please keep this in mind as you're reading.

— Cory

Whenever I work with AJAX, jQuery is my preferred JavaScript library and PHP is my preferred server-side language. I use JSON whenever I can to pass data between JavaScript and PHP. After all, `$.get` and `$.post` both process JSON easily, so it's my data type of choice.

Sometimes, however, I can't rely on `$.get` and `$.post` to do the dirty work for me. One example is when I'm using a hidden `iframe` to upload a file via "AJAX". To do this, the form posts the file to a server-side script. The script loads in the hidden `iframe`, so users don't see what's happening behind the scene. Once the upload is complete, the script outputs some information about the file to the `iframe` (filename, location, size, etc.). You can then use JavaScript to capture that information.

For the sake of consistency, my server-side script always outputs a valid JSON string. I rely on this data, which gets scooped out of the `iframe`, to tell me if the file got uploaded successfully and, if not, what the error was. If so, I need to know the filename, size, and location. What ends up in the `iframe` usually looks something like this:

    {"filename":"file.ext","size":"2516582","location":"/path/to/file/file.ext"}

To parse the JSON string into a JavaScript object, I use `eval()`. (Some people prefer to use a [JSON parser](http://www.json.org/), but since the output of the script is controlled, I've never found it necessary for this application.) Alas, when JavaScript evaluates the string it results in an `invalid label` error.

The error is the result of `eval()` interpreting the first item in the string as a label. This gets me everytime, but it's extremely easy to fix. Simply wrap the JSON string in parenthesis within `eval()`:

    var response = eval('(' + jsonString + ')');

This is one of those JavaScript ""gotchas", so I hope I can save people (and myself) a lot of time by documenting it.

<a href="../../tags/javascript/index.html" class="post-tag">javascript</a> <a href="../../tags/gotchas/index.html" class="post-tag">gotchas</a>

------------------------------------------------------------------------

<img src="http://0.gravatar.com/avatar/bf1b3b95fd5b096a3592247c29667b33?s=512" alt="Photo of Cory" class="avatar avatar-small" />

Written by [Cory LaViska](../../index-4.html), a software engineer and UX architect responsible for [Shoelace.style](https://shoelace.style/), [Surreal CMS](https://www.surrealcms.com/), and other [open source things](https://github.com/claviska).

You can follow Cory on [Twitter](https://twitter.com/bgooonz) and [GitHub](https://github.com/claviska).

------------------------------------------------------------------------

<a href="../postjson-for-jquery/index.html" class="post-nav-previous"><span class="small">Previous post</span> $.postJSON() for jQuery</a> <a href="../import-restore-mysql-files-from-the-command-line/index.html" class="post-nav-next"><span class="small">Up next</span> Import/restore MySQL files from the command line</a>
