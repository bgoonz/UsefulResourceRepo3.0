<a href="../../index.html" class="header-link"><img src="../../images/logos/wordmark.svg" alt="A Beautiful Site" class="wordmark" /></a> <a href="../../index.html" class="nav-item">Home</a> <a href="../../tags/index.html" class="nav-item">Tags</a> <a href="../index.html" class="nav-item">Archive</a> <a href="../../about/index.html" class="nav-item">About</a>

---

# Prefers Reduced Motion

May 19, 2021 • 1 min read

By now, most devs are familiar with the [`prefers-reduced-motion`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion) media query that tells whether or not a user prefers, well, reduced motion. You can use this to tone down (or turn off) transitions and animations in your stylesheet to accommodate users with vestibular motion disorders.

    .animation {
      /* normal animation */
    }

    @media (prefers-reduced-motion) {
      .animation {
        /* subtle or no animation */
      }
    }

That's pretty useful, but if you're using the [Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API), you may want to check for this with JavaScript instead. Thanks to `window.matchMedia`, it's pretty easy to do. I like to wrap it up in a small function that returns a boolean: `true` if the users prefers reduced motion or `false` if they have no preference.

    function prefersReducedMotion() {
      const query = window.matchMedia('(prefers-reduced-motion: reduce)');
      return query?.matches;
    }

Usage looks something like this:

    if (prefersReducedMotion()) {
      // subtle or no animation
    } else {
      // normal animation
      document.querySelector('.my-element').animate(...);
    }

<a href="../../tags/css/index.html" class="post-tag">css</a> <a href="../../tags/javascript/index.html" class="post-tag">javascript</a> <a href="../../tags/accessibility/index.html" class="post-tag">accessibility</a>

---

<img src="http://0.gravatar.com/avatar/bf1b3b95fd5b096a3592247c29667b33?s=512" alt="Photo of Cory" class="avatar avatar-small" />

Written by [Cory LaViska](../../index-4.html), a software engineer and UX architect responsible for [Shoelace.style](https://shoelace.style/), [Surreal CMS](https://www.surrealcms.com/), and other [open source things](https://github.com/claviska).

You can follow Cory on [Twitter](https://twitter.com/claviska) and [GitHub](https://github.com/claviska).

---

<a href="../finding-the-active-element-in-a-shadow-root/index.html" class="post-nav-previous"><span class="small">Previous post</span> Finding the active element in a shadow root</a> <a href="../querying-through-shadow-roots/index.html" class="post-nav-next"><span class="small">Up next</span> Querying through shadow roots</a>
