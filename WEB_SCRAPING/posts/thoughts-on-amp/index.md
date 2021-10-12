<a href="../../index.html" class="header-link"><img src="../../images/logos/wordmark.svg" alt="A Beautiful Site" class="wordmark" /></a> <a href="../../index.html" class="nav-item">Home</a> <a href="../../tags/index.html" class="nav-item">Tags</a> <a href="../index.html" class="nav-item">Archive</a> <a href="../../about/index.html" class="nav-item">About</a>

------------------------------------------------------------------------

Thoughts on AMP
===============

May 23, 2017 • 4 min read

Some time ago, a user asked about [Google AMP](https://www.ampproject.org/) support. At the time, I didn't know much about AMP aside from it made pages load faster on mobile devices. It sounded neat.

A couple weeks ago, I decided to dive in and integrate AMP with Postleaf. But the deeper I got, the more I realized exactly how it works and why it's terrible for the web.

[I went on a Twitter rant](https://twitter.com/postleafapp/status/863123916126081029) about some of the issues I encountered, but I think it will be better to highlight *why* it's such a bad idea and why I ultimately chose not to add AMP in Postleaf. I'm sure I'll be linking people to this post in the future.

**TL;DR** – AMP is parading around as an open-source initiative that makes the web faster for mobile users, but it's really just Google's way of locking users into their own ecosystem.

The spec <a href="#the-spec" class="direct-link">#</a>
------------------------------------------------------

First off, the AMP spec is way too strict:

-   You must include [this exact style block](https://www.ampproject.org/docs/tutorials/create/basic_markup) on every page
-   The first child element in your `<head>` tag must be a meta tag specifying UTF-8 encoding
-   The second child element must be the AMP script
-   You must include a viewport tag with a specific value
-   You must put all your custom styles on the page using a `<style>` block
-   You must not use [restricted CSS properties](https://www.ampproject.org/docs/guides/responsive/style_pages#disallowed-styles)
-   You must not use scripts
-   You must convert certain HTML tags (such as `<img>` and `<video>`) to AMP-compatible tags
-   You must convert embedded content to AMP compatible components in order for them to render
-   [The list goes on](https://www.ampproject.org/docs/tutorials/create/basic_markup)

I understand the reason behind some of these requirements, but I disagree with many of them and the overall implementation. As a web developer and publisher, I find it inconvenient and unnecessarily restrictive. This isn't how the web is supposed to be.

Components <a href="#components" class="direct-link">#</a>
----------------------------------------------------------

While experimenting, I couldn't get a single `<amp-iframe>` to load without an error. For all embed providers I tested, the iframe rendered as an empty box. Turns out, the correct way to embed third-party content is with [custom AMP components](https://ampbyexample.com/#components).

But guess what? If your content incorporates HTML from a third-party website (e.g. via copy & paste or oEmbed), there's virtually no way to convert it to an AMP-compatible component. The spec seems to assume your CMS will be aware of the embedded content's provider, but that isn't always true.

Furthermore, AMP doesn't have components for all content providers. You're stuck using [the ones they want you to use](https://ampbyexample.com/#components). I'll say it again: this isn't how the web is supposed to be.

No scripts <a href="#no-scripts" class="direct-link">#</a>
----------------------------------------------------------

This isn't necessarily a bad thing, but it has a terrible side effect. On one hand, you'll never seeing those annoying popover ads on an AMP page. On the other, you're not allowed to use any scripts. At all.

Want a custom nav menu? Sorry, you have to use the [AMP sidebar](https://ampbyexample.com/components/amp-sidebar/). Want to build a carousel? Nope, you have to use the [AMP carousel](https://ampbyexample.com/components/amp-carousel/). Want a custom widget that AMP doesn't support? Nope, too bad.

If it hasn't become clear by now, AMP is about more than making your pages load faster. It's about locking users into Google's ecosystem.

A closed portal <a href="#a-closed-portal" class="direct-link">#</a>
--------------------------------------------------------------------

It may sound like a conspiracy theory, but I'm not the only one who feels this way. [Daniel Miessler writes:](https://danielmiessler.com/blog/google-amp-not-good-thing/)

> \[AMP is\] a technology that makes mobile page results load very quickly on Google, it displays the content in a more uniform fashion. But there’s a problem.
>
> **The content loads off of Google’s own server, not from the website itself.**

Think about that. By creating an AMP version of your content, you're effectively publishing it to Google's server and giving them permission to do pretty much whatever they want with it.

Daniel continues:

> It’s poisonous to the underlying concept of an open internet.
>
> If this were to become widely adopted, you’d search for something, get results, consume the content, and you’d never leave Google.
>
> They want to be a portal, in other words. A portal that you never leave. And this is coming from the most successful and profitable advertising company in the world.
>
> Who (other than Google) can possibly see this as a good thing?

Exactly. [Their homepage](https://www.ampproject.org/) claims that AMP is "an open-source initiative aiming to make the web better for all," but AMP isn't a good thing for anyone except Google. [According to Scott Gilbertson](https://www.theregister.co.uk/2017/05/19/open_source_insider_google_amp_bad_bad_bad/):

> So it's not really about speed. As with anything that eschews standards for its own modified version thereof, it's about lock-in. Tons of pages in Google AMP markup mean tons of pages that are optimized specifically for Google and indexed primarily by Google and shown primarily to Google users. It's Google's attempt to match Facebook's platform. And yes, Facebook is far worse than AMP, but that doesn't make Google AMP a good idea. At least Facebook doesn't try to pretend like it's open.

That's perhaps the worst part. Google has gone out of its way to make AMP seem like an open-source initiative, but the intention is anything but.

Also concerning is [this post by Kyle Schreiber](https://80x24.net/post/the-problem-with-amp/) that discusses Google's governance policy over AMP:

> Google has the ability to further change the AMP HTML specification to keep publishers in their ecosystem. Google already makes deleting AMP pages difficult. Despite touting AMP HTML as an open standard, every one of the AMP Project’s core developers appears to be a Google employee.

That doesn't sound nearly as open as their homepage claims.

Decentralized Publishing <a href="#decentralized-publishing" class="direct-link">#</a>
--------------------------------------------------------------------------------------

One of Postleaf's founding principles revolves around a decentralized publishing experience. I believe this software should be open and free, just like the web is. *Just like the web was intended.*

You and only you should own and control your content. It's that simple.

Supporting Google AMP would go against this fundamental belief. It's something I feel very strongly about and it's something I've worked hard to instill into Postleaf.

The truth is, if you really want your pages to load fast, you don't need AMP. Take it from [John Gruber](https://daringfireball.net/linked/2017/05/20/gilbertson-amp):

> Yes, AMP pages load fast, but you don’t need AMP for fast-loading web pages. If you are a publisher and your web pages don’t load fast, the sane solution is to [fix your fucking website so that pages load fast](http://idlewords.com/amp_static.html), not to throw your hands up in the air and implement AMP.

Or, summed up in a tweet by yours truly:

> Problem: your website doesn't load fast.
>
> Solution: optimize, remove cruft, ditch 20+ analytics scripts, don't serve page-blocking ads.
>
> — Postleaf (@postleafapp) [May 21, 2017](https://twitter.com/postleafapp/status/866086420703784960)

That said, I think it's pretty obvious I won't be adding support for AMP in Postleaf anytime soon.

<a href="../../tags/rants/index.html" class="post-tag">rants</a> <a href="../../tags/postleaf/index.html" class="post-tag">postleaf</a>

------------------------------------------------------------------------

<img src="http://0.gravatar.com/avatar/bf1b3b95fd5b096a3592247c29667b33?s=512" alt="Photo of Cory" class="avatar avatar-small" />

Written by [Cory LaViska](../../index-4.html), a software engineer and UX architect responsible for [Shoelace.style](https://shoelace.style/), [Surreal CMS](https://www.surrealcms.com/), and other [open source things](https://github.com/claviska).

You can follow Cory on [Twitter](https://twitter.com/claviska) and [GitHub](https://github.com/claviska).

------------------------------------------------------------------------

<a href="../json-feed/index.html" class="post-nav-previous"><span class="small">Previous post</span> JSON Feed</a> <a href="../rebuilding-your-spotlight-index-in-macos/index.html" class="post-nav-next"><span class="small">Up next</span> Rebuilding your Spotlight index in macOS</a>
