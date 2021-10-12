<a href="../../index.html" class="header-link"><img src="../../images/logos/wordmark.svg" alt="A Beautiful Site" class="wordmark" /></a> <a href="../../index.html" class="nav-item">Home</a> <a href="../../tags/index.html" class="nav-item">Tags</a> <a href="../index.html" class="nav-item">Archive</a> <a href="../../about/index.html" class="nav-item">About</a>

---

# Passing data from PHP to JavaScript

March 05, 2015 • 1 min read

Have you ever needed to send a PHP variable, array, or object to JavaScript? It can get complicated trying to escape the output properly. Here's a way that always works—no escaping necessary.

Let's say we have the following variable in PHP:

    $name = 'Bob Marley';

And we want to pass it to a JavaScript variable called `name`. Here's the trick:

    echo '<script>';
    echo 'var name = ' . json_encode($name) . ';';
    echo '</script>';

Using `json_encode()`, you'll always get a properly formatted JavaScript object.

The same trick can be applied to other data types (e.g. integers, arrays, objects, etc.). The following passes an entire array from PHP to JavaScript:

    $shirt = array(
      'color' => 'blue',
      'number' => 23,
      'size' => 'XL'
    );

    echo '<script>';
    echo 'var shirt = ' . json_encode($shirt) . ';';
    echo '</script>';

The output looks like this:

    <script>var shirt = {"color":"blue","number":23,"size":"XL"}</script>

Don't want it all on one line? Try this instead:

    echo "<script>\n";
    echo 'var shirt = ' . json_encode($shirt, JSON_PRETTY_PRINT) . ';';
    echo "\n</script>";

The output is a bit easier to read:

    <script>
    var shirt = {
      "color": "blue",
      "number": 1000,
      "size": "XL"
    };
    </script>

A simple trick, but nevertheless useful.

<a href="../../tags/tips/index.html" class="post-tag">tips</a> <a href="../../tags/javascript/index.html" class="post-tag">javascript</a> <a href="../../tags/php/index.html" class="post-tag">php</a>

---

<img src="http://0.gravatar.com/avatar/bf1b3b95fd5b096a3592247c29667b33?s=512" alt="Photo of Cory" class="avatar avatar-small" />

Written by [Cory LaViska](../../index-4.html), a software engineer and UX architect responsible for [Shoelace.style](https://shoelace.style/), [Surreal CMS](https://www.surrealcms.com/), and other [open source things](https://github.com/claviska).

You can follow Cory on [Twitter](https://twitter.com/claviska) and [GitHub](https://github.com/claviska).

---

<a href="../the-html5-download-attribute/index.html" class="post-nav-previous"><span class="small">Previous post</span> The HTML5 download attribute</a> <a href="../how-to-remove-box-shadows-from-input-controls-on-ios/index.html" class="post-nav-next"><span class="small">Up next</span> How to remove box shadows from input controls on iOS</a>
