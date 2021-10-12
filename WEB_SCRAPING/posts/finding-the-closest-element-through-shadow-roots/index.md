<a href="../../index.html" class="header-link"><img src="../../images/logos/wordmark.svg" alt="A Beautiful Site" class="wordmark" /></a> <a href="../../index.html" class="nav-item">Home</a> <a href="../../tags/index.html" class="nav-item">Tags</a> <a href="../index.html" class="nav-item">Archive</a> <a href="../../about/index.html" class="nav-item">About</a>

------------------------------------------------------------------------

Finding the Closest Element Through Shadow Roots
================================================

September 13, 2021 • 1 min read

A great trick to find the closest element in the DOM that matches an arbitrary selector is [`Element.closest()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/closest).

    // Starts at el and walks the DOM until it finds a parent element
    // that matches the selector. In this case, it will return the
    // <body> element.
    el.closest('body');

But what happens if you do this from inside a custom element's [shadow root](https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot)?

    someElementInShadowRoot.closest('body');

By design, `Element.closest()` will not break out of the shadow root, so `null` is returned.

In my case, I needed to determine the [`lang`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang) of the closest element, even if the element was outside of a shadow root. Time for some recursive magic! ✨

Here's a TypeScript function that will do just that, even if the root is buried in multiple layers of shadow roots.

    function closest(selector: string, root: Element = this) {
      function getNext(el: Element | HTMLElement, next = el && el.closest(selector)): Element | null {
        if (el instanceof Window || el instanceof Document || !el) {
          return null;
        }

        return next ? next : getNext((el.getRootNode() as ShadowRoot).host);
      }

      return getNext(root);
    }

You can use it like this:

    // Matches the closest element with a lang attribute, even if
    // it's outside of the shadow root
    const closestEl = closest('[lang]', el);

<a href="../../tags/development/index.html" class="post-tag">development</a> <a href="../../tags/javascript/index.html" class="post-tag">javascript</a> <a href="../../tags/typescript/index.html" class="post-tag">typescript</a> <a href="../../tags/web%20components/index.html" class="post-tag">web components</a>

------------------------------------------------------------------------

<img src="http://0.gravatar.com/avatar/bf1b3b95fd5b096a3592247c29667b33?s=512" alt="Photo of Cory" class="avatar avatar-small" />

Written by [Cory LaViska](../../index-4.html), a software engineer and UX architect responsible for [Shoelace.style](https://shoelace.style/), [Surreal CMS](https://www.surrealcms.com/), and other [open source things](https://github.com/claviska).

You can follow Cory on [Twitter](https://twitter.com/claviska) and [GitHub](https://github.com/claviska).

------------------------------------------------------------------------

<a href="../testing-support-for-focus-visible/index.html" class="post-nav-previous"><span class="small">Previous post</span> Testing Support for :focus-visible</a> <a href="../on-using-web-component-libraries/index.html" class="post-nav-next"><span class="small">Up next</span> On Using Web Component Libraries</a>
