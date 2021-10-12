<a href="../../index.html" class="header-link"><img src="../../images/logos/wordmark.svg" alt="A Beautiful Site" class="wordmark" /></a> <a href="../../index.html" class="nav-item">Home</a> <a href="../../tags/index.html" class="nav-item">Tags</a> <a href="../index.html" class="nav-item">Archive</a> <a href="../../about/index.html" class="nav-item">About</a>

------------------------------------------------------------------------

Testing Support for :focus-visible
==================================

August 24, 2021 • 1 min read

The new [`:focus-visible`](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible) CSS selector lets us remove unsightly focus rings that often result in developers adding this to their stylesheets:

    /* Please don't do this */
    button:focus {
      outline: none;
    }

While unsightly to mouse users, a clear focus indicator is essential for proper accessibility. How else will keyboard users, for example, know which element has focus?

Fortunately, `:focus-visible` gives us a way to make everyone happy by only applying focus styles when the user is interacting with a keyboard.

    button:focus-visible {
      outline: dashed 2px orange;
    }

It's [currently available in all browsers *except* Safari](https://caniuse.com/mdn-css_selectors_focus-visible). Well, it *is* available in Safari Technology Preview, but it's buried under the experimental features menu and it's not clear when it will land in mainstream Safari.

[There's a polyfill](https://github.com/WICG/focus-visible) you can use in the meantime but, since you can't polyfill pseudo selectors, it applies a `focus-visible` class instead. It's still useful if you really want this behavior, though!

Detecting Support <a href="#detecting-support" class="direct-link">#</a>
------------------------------------------------------------------------

If you're trying to figure out how to feature detect `:focus-visible`, you might be surprised to learn that there isn't an obvious way to do it — but there is a way!

    function hasFocusVisible() {
      const style = document.createElement('style');
      let isSupported;

      try {
        document.head.appendChild(style);
        style.sheet.insertRule(':focus-visible { color: inherit }');
        isSupported = true;
      } catch {
        isSupported = false;
      } finally {
        style.remove();
      }

      return isSupported;
    }

The secret sauce is in [`CSSStyleSheet.insertRule()`](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleSheet/insertRule), which will throw an error if you pass in a style it doesn't understand.

You can use it like this.

    if (hasFocusVisible()) {
      // Supported!
    } else {
      // Not supported
    }

This can be pretty helpful if you're building something and you want to provide different behaviors depending on the browser's support for `:focus-visible`.

<a href="../../tags/accessibility/index.html" class="post-tag">accessibility</a> <a href="../../tags/development/index.html" class="post-tag">development</a> <a href="../../tags/css/index.html" class="post-tag">css</a> <a href="../../tags/javascript/index.html" class="post-tag">javascript</a>

------------------------------------------------------------------------

<img src="http://0.gravatar.com/avatar/bf1b3b95fd5b096a3592247c29667b33?s=512" alt="Photo of Cory" class="avatar avatar-small" />

Written by [Cory LaViska](../../index-4.html), a software engineer and UX architect responsible for [Shoelace.style](https://shoelace.style/), [Surreal CMS](https://www.surrealcms.com/), and other [open source things](https://github.com/claviska).

You can follow Cory on [Twitter](https://twitter.com/claviska) and [GitHub](https://github.com/claviska).

------------------------------------------------------------------------

<a href="../querying-through-shadow-roots/index.html" class="post-nav-previous"><span class="small">Previous post</span> Querying through shadow roots</a> <a href="../finding-the-closest-element-through-shadow-roots/index.html" class="post-nav-next"><span class="small">Up next</span> Finding the Closest Element Through Shadow Roots</a>
