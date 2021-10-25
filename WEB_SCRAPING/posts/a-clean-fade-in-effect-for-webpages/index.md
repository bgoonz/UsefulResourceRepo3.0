<a href="../../index.html" class="header-link"><img src="../../images/logos/wordmark.svg" alt="A Beautiful Site" class="wordmark" /></a> <a href="../../index.html" class="nav-item">Home</a> <a href="../../tags/index.html" class="nav-item">Tags</a> <a href="../index.html" class="nav-item">Archive</a> <a href="../../about/index.html" class="nav-item">About</a>

---

# A clean fade-in effect for webpages

September 23, 2015 • 1 min read

Here's a nice way to fade your pages in using CSS and a bit of JavaScript. The solution is clean and smooth, with no flickering on load. If JavaScript is disabled, the page will still load but the fade effect will not occur.

## How it works <a href="#how-it-works" class="direct-link">#</a>

This trick works by adding the `fade-out` class to your `body` with a script, then removing it when the page is done loading. The fade effect is handled completely with CSS. We're only using JavaScript to add/remove the class, which will ensure the page still displays if scripts are disabled.

## The CSS <a href="#the-css" class="direct-link">#</a>

We start with two very simple styles for the body:

    body {
      opacity: 1;
      transition: 1s opacity;
    }

    body.fade-out {
      opacity: 0;
      transition: none;
    }

## The JavaScript <a href="#the-javascript" class="direct-link">#</a>

Now we need to add the `fade-out` class to the body as soon as the page loads. We can do this with an inline script right after the opening `<body>` tag:

    <script>
      document.body.classList.add('fade-out');
    </script>

The inline script is necessary (as opposed to a script loaded from a separate file) to prevent flickering, as the body would otherwise be briefly visible until the extra script is downloaded by the browser.

Now we just need to remove the `fade-out` class from the body once the page is loaded.

    window.addEventListener('DOMContentLoaded', () => {
      document.body.classList.remove('fade-out');
    });

## Changing the fade color <a href="#changing-the-fade-color" class="direct-link">#</a>

By default, the user will see a blank white screen until the page fades in. This is customizable through the `html` selector:

    html {
      background-color: black;
    }

## Tips <a href="#tips" class="direct-link">#</a>

Don't get too carried away with this. It's a useful effect for loading something like a homepage, but it can quickly get annoying if you apply it to every page. Keep it subtle. Users shouldn't actually notice it—it should simply be a pleasant part of their experience.

This is a really helpful trick if you need to wait for an image or video to load. However, in that case you'll probably want to add a loader. To achieve this, simply add a wrapper element around everything except the loader and apply the `fade-out` class to that instead of the body.

<a href="../../tags/css/index.html" class="post-tag">css</a> <a href="../../tags/design/index.html" class="post-tag">design</a>

---

<img src="http://0.gravatar.com/avatar/bf1b3b95fd5b096a3592247c29667b33?s=512" alt="Photo of Cory" class="avatar avatar-small" />

Written by [Cory LaViska](../../index-4.html), a software engineer and UX architect responsible for [Shoelace.style](https://shoelace.style/), [Surreal CMS](https://www.surrealcms.com/), and other [open source things](https://github.com/claviska).

You can follow Cory on [Twitter](https://twitter.com/bgooonz) and [GitHub](https://github.com/claviska).

---

<a href="../how-to-remove-box-shadows-from-input-controls-on-ios/index.html" class="post-nav-previous"><span class="small">Previous post</span> How to remove box shadows from input controls on iOS</a> <a href="../flush-dns-cache-on-os-x/index.html" class="post-nav-next"><span class="small">Up next</span> Flushing DNS cache on macOS</a>
