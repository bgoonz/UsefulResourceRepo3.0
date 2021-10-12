<a href="../../index.html" class="header-link"><img src="../../images/logos/wordmark.svg" alt="A Beautiful Site" class="wordmark" /></a> <a href="../../index.html" class="nav-item">Home</a> <a href="../../tags/index.html" class="nav-item">Tags</a> <a href="../index.html" class="nav-item">Archive</a> <a href="../../about/index.html" class="nav-item">About</a>

------------------------------------------------------------------------

Shoelace 2.0: a forward-thinking library of web components
==========================================================

July 24, 2020 • 2 min read

I've been having a lot of fun with [Stencil](https://stenciljs.com/) and web components lately. Back in January, I decided to use it to completely redesign [Shoelace](https://shoelace.style/), an open source project I created a few years ago.

![Screenshot of the Shoelace 2 logo](../../images/shoelace-2-splash.png)

I recently published [Shoelace 2.0](https://shoelace.style/) — a collection of professionally-designed, accessible web components.

One really nice feature of web components is that **you can use them with any framework**. This is an amazing concept, especially for low-level building block components.

Let me explain why this is so amazing with an example.

Imagine you're on one of three teams in an organization, all tasked with building a different product. Team 1 wants to use React, Team 2 wants to use Vue, and Team 3 wants to use vanilla HTML+JS. The one requirement you have from your organization is that the UX must be consistent across all three products.

Obviously, sharing a library of UI components between the projects is the most efficient way to meet that requirement. But if you build your components in Framework A, you can't reuse them in Framework B or Framework C.

Web components solve this problem. They're [supported by all modern browsers](https://caniuse.com/#feat=custom-elementsv1), they're framework-agnostic, and they're [built into the standard](https://developer.mozilla.org/en-US/docs/Web/Web_Components), so we know they'll be supported for many years to come.

This is the technology that Shoelace is built on.

"But I only use \[insert your favorite framework here\]!" <a href="#%22but-i-only-use-%5Binsert-your-favorite-framework-here%5D!%22" class="direct-link">#</a>
--------------------------------------------------------------------------------------------------------------------------------------------------------------

I hear you. You *only* use React/Vue/Angular/whatever, so why should you care if your components work in other frameworks?

The fact is, at some point your beloved framework will ship a new version with breaking changes, and when that happens, you'll be reworking every button, input, dialog, dropdown, tab group, etc. That's just how software works.

And further down the road, your framework of choice won't be as ubiquitous as it is today. Things change and, like it or not, you will eventually move on or get left behind.

Since Shoelace is built on standardized browser APIs, it will be around long after today's most popular frameworks become obsolete.

TL;DR <a href="#tl%3Bdr" class="direct-link">#</a>
--------------------------------------------------

I love building UI components, but it really sucks to rebuild them for every new framework (and new framework version). With Shoelace, I'm harnessing the power of web components to bring you a reusable, customizable component library that works with whatever framework you're using today and whatever framework you'll be using tomorrow.

[Check it out at shoelace.style](https://shoelace.style/)

<a href="../../tags/design/index.html" class="post-tag">design</a> <a href="../../tags/development/index.html" class="post-tag">development</a> <a href="../../tags/news/index.html" class="post-tag">news</a>

------------------------------------------------------------------------

<img src="http://0.gravatar.com/avatar/bf1b3b95fd5b096a3592247c29667b33?s=512" alt="Photo of Cory" class="avatar avatar-small" />

Written by [Cory LaViska](../../index-4.html), a software engineer and UX architect responsible for [Shoelace.style](https://shoelace.style/), [Surreal CMS](https://www.surrealcms.com/), and other [open source things](https://github.com/claviska).

You can follow Cory on [Twitter](https://twitter.com/claviska) and [GitHub](https://github.com/claviska).

------------------------------------------------------------------------

<a href="../corys-amazing-dot-paper/index.html" class="post-nav-previous"><span class="small">Previous post</span> Cory's amazing dot paper</a> <a href="../getting-localized-month-and-day-names-in-the-browser/index.html" class="post-nav-next"><span class="small">Up next</span> Getting localized month and day names in the browser</a>
