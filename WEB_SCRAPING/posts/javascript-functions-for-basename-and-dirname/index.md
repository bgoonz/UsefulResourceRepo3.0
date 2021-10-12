<a href="../../index.html" class="header-link"><img src="../../images/logos/wordmark.svg" alt="A Beautiful Site" class="wordmark" /></a> <a href="../../index.html" class="nav-item">Home</a> <a href="../../tags/index.html" class="nav-item">Tags</a> <a href="../index.html" class="nav-item">Archive</a> <a href="../../about/index.html" class="nav-item">About</a>

---

# JavaScript functions for basename and dirname

September 16, 2007 • 1 min read

![A drawing of a cartoon man pointing upwards](../../images/artwork/pointer.gif)

Heads up! This post was written in 2007, so it may contain information that is no longer accurate. I keep posts like this around for historical purposes and to prevent link rot, so please keep this in mind as you're reading.

— Cory

Here are two JavaScript functions that mimic their PHP cousins.

## basename() <a href="#basename()" class="direct-link">#</a>

    function basename(path) {
      return path.replace(/.*\//, '');
    }

## dirname() <a href="#dirname()" class="direct-link">#</a>

    function dirname(path) {
      return path.match(/.*\//);
    }

Unlike their PHP cousins, these functions _do not_ support paths separated with backslashes.

<a href="../../tags/javascript/index.html" class="post-tag">javascript</a> <a href="../../tags/tips/index.html" class="post-tag">tips</a>

---

<img src="http://0.gravatar.com/avatar/bf1b3b95fd5b096a3592247c29667b33?s=512" alt="Photo of Cory" class="avatar avatar-small" />

Written by [Cory LaViska](../../index-4.html), a software engineer and UX architect responsible for [Shoelace.style](https://shoelace.style/), [Surreal CMS](https://www.surrealcms.com/), and other [open source things](https://github.com/claviska).

You can follow Cory on [Twitter](https://twitter.com/claviska) and [GitHub](https://github.com/claviska).

---

<a href="../avoiding-timestamp-errors-when-calculating-dates-in-php/index.html" class="post-nav-previous"><span class="small">Previous post</span> Avoiding timestamp errors when calculating dates in php</a> <a href="../getting-proportionally-resized-dimensions-of-an-image/index.html" class="post-nav-next"><span class="small">Up next</span> Getting proportionally-resized dimensions of an image</a>
