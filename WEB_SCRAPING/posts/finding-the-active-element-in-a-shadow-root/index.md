<a href="../../index.html" class="header-link"><img src="../../images/logos/wordmark.svg" alt="A Beautiful Site" class="wordmark" /></a> <a href="../../index.html" class="nav-item">Home</a> <a href="../../tags/index.html" class="nav-item">Tags</a> <a href="../index.html" class="nav-item">Archive</a> <a href="../../about/index.html" class="nav-item">About</a>

------------------------------------------------------------------------

Finding the active element in a shadow root
===========================================

March 22, 2021 • 1 min read

You can get the focused element with `document.activeElement` but, if it's inside a shadow root, this will be the *host element*. This happens because of retargeting, but sometimes you might need access to the internal element that actually has focus.

Here's a recursive function that will return the internal element that has focus, even if it's inside a shadow root.

    function getActiveElement(root: Document | ShadowRoot = document): Element | null {
      const activeEl = root.activeElement;

      if (!activeEl) {
        return null;
      }

      if (activeEl.shadowRoot) {
        return getActiveElement(activeEl.shadowRoot);
      } else {
        return activeEl;
      }
    }

Usage:

    const activeEl = getActiveElement();

<a href="../../tags/development/index.html" class="post-tag">development</a> <a href="../../tags/web%20components/index.html" class="post-tag">web components</a> <a href="../../tags/tips/index.html" class="post-tag">tips</a>

------------------------------------------------------------------------

<img src="http://0.gravatar.com/avatar/bf1b3b95fd5b096a3592247c29667b33?s=512" alt="Photo of Cory" class="avatar avatar-small" />

Written by [Cory LaViska](../../index-4.html), a software engineer and UX architect responsible for [Shoelace.style](https://shoelace.style/), [Surreal CMS](https://www.surrealcms.com/), and other [open source things](https://github.com/claviska).

You can follow Cory on [Twitter](https://twitter.com/claviska) and [GitHub](https://github.com/claviska).

------------------------------------------------------------------------

<a href="../moving-from-stencil-to-lit-element/index.html" class="post-nav-previous"><span class="small">Previous post</span> Moving from Stencil to LitElement</a> <a href="../prefers-reduced-motion/index.html" class="post-nav-next"><span class="small">Up next</span> Prefers Reduced Motion</a>
