<a href="../../index.html" class="header-link"><img src="../../images/logos/wordmark.svg" alt="A Beautiful Site" class="wordmark" /></a> <a href="../../index.html" class="nav-item">Home</a> <a href="../../tags/index.html" class="nav-item">Tags</a> <a href="../index.html" class="nav-item">Archive</a> <a href="../../about/index.html" class="nav-item">About</a>

------------------------------------------------------------------------

Querying through shadow roots
=============================

August 04, 2021 • 1 min read

Let's say I have a web component with an open shadow root, like this one from [Shoelace](https://shoelace.style/).

    <sl-button>Click me</sl-button>

Inside the shadow root is a `<button>` that I want to target with JavaScript.\* Alas, `Element.querySelector()` doesn't offer a shortcut for traversing shadow roots so we have to do this.

    const button = document.querySelector('sl-button').shadowRoot.querySelector('button');

That's pretty verbose! It's nice that we can chain the selectors, but it would be even nicer if we could poke through shadow roots *right in* the selector.

    // This doesn't work, but we can dream
    const button = document.querySelector('sl-button >>> button');

Well, here's a function that gets us pretty close to that.

    function shadowQuery(selector, rootNode = document) {
      const selectors = String(selector).split('>>>');
      let currentNode = rootNode;

      selectors.find((selector, index) => {
        if (index === 0) {
          currentNode = rootNode.querySelector(selectors[index]);
        } else {
          currentNode = currentNode?.shadowRoot?.querySelector(selectors[index]);
        }

        return currentNode === null;
      });

      return currentNode;
    }

This let's you use `>>>` in your selector instead of splitting it into multiple queries, resulting in a much simpler syntax.

    const button = shadowQuery('sl-button >>> button');

Querying starts on `document` by default, but you can pass a node as the second argument to change that.

    const container = document.querySelector('.your-root-node');
    const button = shadowQuery('sl-button >>> button', container);

Finally, you can even traverse multiple shadow roots in one query.

    shadowQuery('my-element >>> my-second-element >>> my-third-element');

\*It's worth noting that you probably *shouldn't* be targeting shadow roots — they're encapsulated for a reason! Nevertheless, this can be very useful in exceptional situations.

<a href="../../tags/development/index.html" class="post-tag">development</a> <a href="../../tags/javascript/index.html" class="post-tag">javascript</a> <a href="../../tags/web%20components/index.html" class="post-tag">web components</a>

------------------------------------------------------------------------

<img src="http://0.gravatar.com/avatar/bf1b3b95fd5b096a3592247c29667b33?s=512" alt="Photo of Cory" class="avatar avatar-small" />

Written by [Cory LaViska](../../index-4.html), a software engineer and UX architect responsible for [Shoelace.style](https://shoelace.style/), [Surreal CMS](https://www.surrealcms.com/), and other [open source things](https://github.com/claviska).

You can follow Cory on [Twitter](https://twitter.com/claviska) and [GitHub](https://github.com/claviska).

------------------------------------------------------------------------

<a href="../prefers-reduced-motion/index.html" class="post-nav-previous"><span class="small">Previous post</span> Prefers Reduced Motion</a> <a href="../testing-support-for-focus-visible/index.html" class="post-nav-next"><span class="small">Up next</span> Testing Support for :focus-visible</a>
