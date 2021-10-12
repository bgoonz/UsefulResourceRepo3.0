<a href="index.html" class="header-link"><img src="images/logos/wordmark.svg" alt="A Beautiful Site" class="wordmark" /></a> <a href="index.html" class="nav-item nav-item-active">Home</a> <a href="tags/index.html" class="nav-item">Tags</a> <a href="posts/index.html" class="nav-item">Archive</a> <a href="about/index.html" class="nav-item">About</a>

------------------------------------------------------------------------

*A collection of thoughts about HTML, CSS, JavaScript, UX, a11y, web standards, and related things. Posts by [Cory LaViska](https://twitter.com/claviska).*

------------------------------------------------------------------------

<a href="posts/know-when-to-draw-the-line/index.html" class="post-roll-item-link">Know When To Draw The Line</a>
----------------------------------------------------------------------------------------------------------------

Written on October 11, 2021

One-off variations aren't uncommon, but they don't belong in your design system. You're design system isn't solving for every possible use case — it's encouraging visual consistency and efficient development. Use custom styles for one-offs.

<a href="tags/design%20systems/index.html" class="post-tag">design systems</a> <a href="tags/web%20components/index.html" class="post-tag">web components</a>

<a href="posts/dont-do-magic/index.html" class="post-roll-item-link">Don't Do Magic</a>
---------------------------------------------------------------------------------------

Written on October 11, 2021

We recently had a design for an "alert" component with an `actions` slot. In the spec, only secondary buttons were allowed in it.

<a href="tags/design%20systems/index.html" class="post-tag">design systems</a> <a href="tags/web%20components/index.html" class="post-tag">web components</a> <a href="tags/html/index.html" class="post-tag">html</a> <a href="tags/css/index.html" class="post-tag">css</a> <a href="tags/javascript/index.html" class="post-tag">javascript</a>

<a href="posts/on-buttons-and-links/index.html" class="post-roll-item-link">On Buttons and Links</a>
----------------------------------------------------------------------------------------------------

Written on October 06, 2021

I posted a tweet yesterday that was met with some controversy, so I thought it would be a good idea to unravel it.

<a href="tags/accessibility/index.html" class="post-tag">accessibility</a> <a href="tags/css/index.html" class="post-tag">css</a> <a href="tags/javascript/index.html" class="post-tag">javascript</a> <a href="tags/design%20systems/index.html" class="post-tag">design systems</a>

<a href="posts/on-using-web-component-libraries/index.html" class="post-roll-item-link">On Using Web Component Libraries</a>
----------------------------------------------------------------------------------------------------------------------------

Written on September 20, 2021

We tend to think of components as things that belong to a framework. After all, React has components, Vue has components, Angular has components…it's just how we've always used them.

<a href="tags/web%20components/index.html" class="post-tag">web components</a> <a href="tags/html/index.html" class="post-tag">html</a> <a href="tags/javascript/index.html" class="post-tag">javascript</a>

<a href="posts/finding-the-closest-element-through-shadow-roots/index.html" class="post-roll-item-link">Finding the Closest Element Through Shadow Roots</a>
------------------------------------------------------------------------------------------------------------------------------------------------------------

Written on September 13, 2021

A great trick to find the closest element in the DOM that matches an arbitrary selector is [`Element.closest()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/closest).

<a href="tags/development/index.html" class="post-tag">development</a> <a href="tags/javascript/index.html" class="post-tag">javascript</a> <a href="tags/typescript/index.html" class="post-tag">typescript</a> <a href="tags/web%20components/index.html" class="post-tag">web components</a>

<a href="posts/testing-support-for-focus-visible/index.html" class="post-roll-item-link">Testing Support for :focus-visible</a>
-------------------------------------------------------------------------------------------------------------------------------

Written on August 24, 2021

The new [`:focus-visible`](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible) CSS selector lets us remove unsightly focus rings that often result in developers adding this to their stylesheets:

<a href="tags/accessibility/index.html" class="post-tag">accessibility</a> <a href="tags/development/index.html" class="post-tag">development</a> <a href="tags/css/index.html" class="post-tag">css</a> <a href="tags/javascript/index.html" class="post-tag">javascript</a>

<a href="posts/querying-through-shadow-roots/index.html" class="post-roll-item-link">Querying through shadow roots</a>
----------------------------------------------------------------------------------------------------------------------

Written on August 04, 2021

Let's say I have a web component with an open shadow root, like this one from [Shoelace](https://shoelace.style/).

<a href="tags/development/index.html" class="post-tag">development</a> <a href="tags/javascript/index.html" class="post-tag">javascript</a> <a href="tags/web%20components/index.html" class="post-tag">web components</a>

<a href="posts/prefers-reduced-motion/index.html" class="post-roll-item-link">Prefers Reduced Motion</a>
--------------------------------------------------------------------------------------------------------

Written on May 19, 2021

By now, most devs are familiar with the [`prefers-reduced-motion`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion) media query that tells whether or not a user prefers, well, reduced motion. You can use this to tone down (or turn off) transitions and animations in your stylesheet to accommodate users with vestibular motion disorders.

<a href="tags/css/index.html" class="post-tag">css</a> <a href="tags/javascript/index.html" class="post-tag">javascript</a> <a href="tags/accessibility/index.html" class="post-tag">accessibility</a>

<a href="posts/finding-the-active-element-in-a-shadow-root/index.html" class="post-roll-item-link">Finding the active element in a shadow root</a>
--------------------------------------------------------------------------------------------------------------------------------------------------

Written on March 22, 2021

You can get the focused element with `document.activeElement` but, if it's inside a shadow root, this will be the *host element*. This happens because of retargeting, but sometimes you might need access to the internal element that actually has focus.

<a href="tags/development/index.html" class="post-tag">development</a> <a href="tags/web%20components/index.html" class="post-tag">web components</a> <a href="tags/tips/index.html" class="post-tag">tips</a>

<a href="posts/moving-from-stencil-to-lit-element/index.html" class="post-roll-item-link">Moving from Stencil to LitElement</a>
-------------------------------------------------------------------------------------------------------------------------------

Written on March 02, 2021

Over the weekend, I finished migrating [Shoelace](https://shoelace.style/) from [Stencil](https://stenciljs.com/) to [LitElement](#). Even though consumers of the library won't see much of a difference, this was a major overhaul of Shoelace's internals.

<a href="tags/news/index.html" class="post-tag">news</a> <a href="tags/shoelace/index.html" class="post-tag">shoelace</a> <a href="tags/design/index.html" class="post-tag">design</a> <a href="tags/development/index.html" class="post-tag">development</a> <a href="tags/web%20components/index.html" class="post-tag">web components</a>

*Feeds available in [Atom](feed/feed.xml) & [JSON](feed/feed.json)*

------------------------------------------------------------------------

Explore [the archive](posts/index.html) for additional posts or press / to search.
