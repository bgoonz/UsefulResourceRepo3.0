<a href="../../index.html" class="header-link"><img src="../../images/logos/wordmark.svg" alt="A Beautiful Site" class="wordmark" /></a> <a href="../../index.html" class="nav-item">Home</a> <a href="../../tags/index.html" class="nav-item">Tags</a> <a href="../index.html" class="nav-item">Archive</a> <a href="../../about/index.html" class="nav-item">About</a>

------------------------------------------------------------------------

Convert arrays to CSV with PHP
==============================

October 03, 2007 • 1 min read

![A drawing of a cartoon man pointing upwards](../../images/artwork/pointer.gif)

Heads up! This post was written in 2007, so it may contain information that is no longer accurate. I keep posts like this around for historical purposes and to prevent link rot, so please keep this in mind as you're reading.

— Cory

The following snippet will convert a simple PHP array into CSV (comma-separated values) format.

    function csv($array) {
      $csv = "";
      for ($i = 0; $i < count($array); $i++) {
        $csv .= '"' . str_replace('"', '""', $array[$i]) . '"';
        if ($i < count($array) - 1) $csv .= ",";
      }
      return $csv;
    }

Output <a href="#output" class="direct-link">#</a>
--------------------------------------------------

    $a = array("item 1", "item 2", "item 3");

    echo csv($a); // "item 1","item 2","item 3"

<a href="../../tags/development/index.html" class="post-tag">development</a> <a href="../../tags/php/index.html" class="post-tag">php</a>

------------------------------------------------------------------------

<img src="http://0.gravatar.com/avatar/bf1b3b95fd5b096a3592247c29667b33?s=512" alt="Photo of Cory" class="avatar avatar-small" />

Written by [Cory LaViska](../../index-4.html), a software engineer and UX architect responsible for [Shoelace.style](https://shoelace.style/), [Surreal CMS](https://www.surrealcms.com/), and other [open source things](https://github.com/claviska).

You can follow Cory on [Twitter](https://twitter.com/bgooonz) and [GitHub](https://github.com/claviska).

------------------------------------------------------------------------

<a href="../getting-proportionally-resized-dimensions-of-an-image/index.html" class="post-nav-previous"><span class="small">Previous post</span> Getting proportionally-resized dimensions of an image</a> <a href="../external-popup-links-using-jquery/index.html" class="post-nav-next"><span class="small">Up next</span> External popup links using jQuery</a>
