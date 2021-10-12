<a href="../../index.html" class="header-link"><img src="../../images/logos/wordmark.svg" alt="A Beautiful Site" class="wordmark" /></a> <a href="../../index.html" class="nav-item">Home</a> <a href="../../tags/index.html" class="nav-item">Tags</a> <a href="../index.html" class="nav-item">Archive</a> <a href="../../about/index.html" class="nav-item">About</a>

------------------------------------------------------------------------

Moving from Stencil to LitElement
=================================

March 02, 2021 • 7 min read

Over the weekend, I finished migrating [Shoelace](https://shoelace.style/) from [Stencil](https://stenciljs.com/) to [LitElement](#). Even though consumers of the library won't see much of a difference, this was a major overhaul of Shoelace's internals.

Naturally, such a big change brings questions from the community, such as ["what were the reasons behind shifting away from Stencil?"](https://twitter.com/bitflowertweets/status/1365644475087941635?s=20) These are valid questions, so I wanted to take the time to answer them here.

But before I jump in, it's worth mentioning that Stencil is a great project that played a significant role in getting me into web components. Being able to type `npm init stencil` and have an entire project ready to go is really something special.

Let it also be clear that this isn't a jab at Stencil, nor is it advice for or against using Stencil to build your own projects. This is why *I* chose to move on based on *my* experience, *my* observations, and *my* desire to own as much of my own code as possible.

Less is more <a href="#less-is-more" class="direct-link">#</a>
--------------------------------------------------------------

When you're managing a software project, dependencies can quickly become liabilities. Despite its many niceties, Stencil can be a box of mystery at times. As a contributor, it was difficult for me to dive into its codebase and figure things out. There's little documentation on its internals, so everything requires digging. A lot of digging. Even as a member of the Stencil team, I found it hard to get the information I needed to make useful contributions to the project.

Why does this matter? Well, when code is complex and lacks documentation, the barrier of entry is higher and people are less apt to make contributions. Despite a tight-knit community of talented Stencil users, many bugs continue to go unpatched. Even worse, a bot [closes issues](https://github.com/ionic-team/stencil/issues?q=is%3Aissue+label%3A%22ionitron%3A+stale+issue%22+) after 30 days of inactivity, so many of the bugs that do get reported are [closed without feedback or resolution](https://github.com/ionic-team/stencil/issues/2802). In my opinion, valid, reproducible bugs should remain open until they're resolved to provide transparency and accountability.

One might surmise that the maintainers are overwhelmed by the number of bugs that get filed, but garbage collecting valid issues is disingenuous and a disservice to the community. I appreciate that Stencil is open source and its maintainers have zero responsibility to fix bugs for free, but I fundamentally disagree with this aspect of how the project is maintained.

And what happens when I have an issue that I can't resolve myself? Will someone point me in the right direction? Will it ever get fixed? [Probably not.](https://github.com/ionic-team/stencil/issues/2198) (That was submitted a year ago, before issues were automatically closed.)

Build & distribution <a href="#build-%26-distribution" class="direct-link">#</a>
--------------------------------------------------------------------------------

Stencil is a compiler that generates components using any number of possible [output targets](https://stenciljs.com/docs/output-targets). In theory, this is really convenient because it can produce multiple distributions from a single source. In practice, I found that having two separate distributions made my project harder to document and left users confused.

These output targets are also limited in terms of configuration. Since last year, Shoelace was plagued with a [tree shaking problem](https://github.com/shoelace-style/shoelace/issues/180) I couldn't fix because of this. Moving away from Stencil, I was able to gain full control over how my build works and the tooling used to power it. I leaned on standards and went with a single collection of [ES modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) that work in both browsers and bundlers. Best of all, having full control over the build let me finally resolve that pesky tree shaking issue.

Less Magic <a href="#less-magic" class="direct-link">#</a>
----------------------------------------------------------

Speaking of distributions, one thing I'm losing by leaving Stencil is its [lazy loading dist](https://stenciljs.com/docs/distribution). At first, I wondered how I could reproduce this outside of Stencil. It's a very convenient feature for users.

Lazy loading works by registering every component as an empty custom element. Then, when you insert a component into the DOM, its source is fetched and its internals are swapped out. This is necessary because [you can't reregister custom elements](https://github.com/WICG/webcomponents/issues/829), so you have to resort to a bit of magic. It's a clever trick, but it does lead to a form of [FOUC](https://en.wikipedia.org/wiki/Flash_of_unstyled_content), especially when components are added after the initial page load.

I believe it was also the source of some strange Shoelace + React/Svelte timing bugs and a very annoying error I kept seeing on the documentation website:

> Uncaught (in promise) DOMException: Failed to set the 'adoptedStyleSheets' property on 'ShadowRoot': Sharing constructed stylesheets in multiple documents is not allowed

I'm pretty sure this was a combination of how Docsify loads pages and Stencil's lazy loading, but I was never able to pinpoint it. Regardless, it's no longer an issue with the new version.

Considering all this, I thought long and hard about the benefits and drawbacks of lazy loading. Ultimately, I decided it wasn't worth the effort. With the latest version of Shoelace, users can load the [entire library](https://shoelace.style/getting-started/installation) or [cherry pick](https://shoelace.style/getting-started/installation?id=cherry-picking) components — something that wasn't possible before. I think that's a fair tradeoff to avoid all the weird issues it seemed to be causing.

Native templates <a href="#native-templates" class="direct-link">#</a>
----------------------------------------------------------------------

I prefer to stick to the platform when possible. Although I like JSX, I like [template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) even better because they're simple and they don't require transpilation. Now that the platform has a built-in for templating, we should utilize it.

The syntax is similar, but not identical. Here's the original render function from Shoelace's badge component.

    // JSX
    render() {
      return (
        <span
          part="base"
          class={({
            badge: true,
            'badge--primary': this.type === 'primary',
            'badge--success': this.type === 'success',
            'badge--info': this.type === 'info',
            'badge--warning': this.type === 'warning',
            'badge--danger': this.type === 'danger',
            'badge--pill': this.pill,
            'badge--pulse': this.pulse
          })}
          role="status"
        >
          <slot />
        </span>
      );
    }

Compare that to the native equivalent.

    // Template literals
    render() {
      return html`
        <span
          part="base"
          class=${classMap({
            badge: true,
            'badge--primary': this.type === 'primary',
            'badge--success': this.type === 'success',
            'badge--info': this.type === 'info',
            'badge--warning': this.type === 'warning',
            'badge--danger': this.type === 'danger',
            'badge--pill': this.pill,
            'badge--pulse': this.pulse
          })}
          role="status"
        >
          <slot />
        </span>
      `;
    }

They're so similar. I just don't see why I should run the code through another layer of transpilation when template literals suffice. This is what they were designed to do.

A special syntax is no longer necessary.

Virtual DOM <a href="#virtual-dom" class="direct-link">#</a>
------------------------------------------------------------

Like React and other popular frameworks, Stencil uses a virtual DOM ("VDOM") to render things faster than working directly with the real DOM. However, it's a common misconception that VDOMs are actually faster. [Rich Harris writes:](https://svelte.dev/blog/virtual-dom-is-pure-overhead)

> But hang on a minute! The virtual DOM operations are **in addition to** the eventual operations on the real DOM. The only way it could be faster is if we were comparing it to a less efficient framework (there were plenty to go around back in 2013!), or arguing against a straw man — that the alternative is to do something no-one actually does.

It's an outdated meme. You can write poor performing components with or without a virtual DOM. Consider [lit-html](https://lit-html.polymer-project.org/) and [µhtml](https://github.com/WebReflection/uhtml), both of which leverage direct DOM diffing for fast, efficient rendering.

There's no need for an extra layer here, either.

A long time coming <a href="#a-long-time-coming" class="direct-link">#</a>
--------------------------------------------------------------------------

The move away from Stencil was inevitable. As part of my never-ending quest for simplicity, I've been experimenting with other libraries for a long time. One of the first I explored was [Hybrids](https://hybrids.js.org/#/), which is great if you want to go with a more functional approach. Ultimately, I decided that class-based made the most sense because, well, that's how you create custom elements. You can't do it without extending `HTMLElement`.

    class SlButton extends HTMLElement {
      // build something awesome
    }

I also dove into [Microsoft FAST](https://www.fast.design/) and I like what they're doing. The API is very sensible, but its templates feel a bit strange since you have to use `attr=${x => x.prop}` instead of `attr=${this.prop}`. I believe they do this to provide a faster alternative to DOM-diffing during render, but this would mean a lot more work for me. I also found it confusing that contexts can be nested, which makes larger templates harder to maintain.

I experimented with my own base class called [Shoemaker](https://github.com/shoelace-style/shoemaker). I wanted to make the thinnest possible abstraction around the features I needed, but the more the project evolved the more I realized I was recreating [LitElement](https://lit-element.polymer-project.org/). Between that and feedback from the community, I decided it didn't make sense to reinvent the wheel.

I do have a few \[opinionated\] DX concerns that I'll be sending over to the LitElement team for consideration. However, I've alleviated most of them with a handful of custom decorators.

I guess that's the nice thing about decorators — you can customize them to your liking.

Moving forward <a href="#moving-forward" class="direct-link">#</a>
------------------------------------------------------------------

Consumers of Shoelace won't notice much of a difference in this release. I've simply replaced the old engine with a new one that does the same thing except with a leaner, simpler codebase with less magic. I have a responsibility to my users, so I need to be able to fix problems when they arise. I wasn't always able to do that before. Now I can.

I'm tired of rebuilding buttons. I designed Shoelace for longevity, taking advantage of the best parts of the platform — the stuff that doesn't change on us every few years. It only makes sense to bring its code closer to the platform as well.

With LitElement, I'm getting all the features I want with the smallest possible footprint. Now I can get back to building components again.

*March 8, 2021 - updated to reflect the latest changes to the library.*

<a href="../../tags/news/index.html" class="post-tag">news</a> <a href="../../tags/shoelace/index.html" class="post-tag">shoelace</a> <a href="../../tags/design/index.html" class="post-tag">design</a> <a href="../../tags/development/index.html" class="post-tag">development</a> <a href="../../tags/web%20components/index.html" class="post-tag">web components</a>

------------------------------------------------------------------------

<img src="http://0.gravatar.com/avatar/bf1b3b95fd5b096a3592247c29667b33?s=512" alt="Photo of Cory" class="avatar avatar-small" />

Written by [Cory LaViska](../../index-4.html), a software engineer and UX architect responsible for [Shoelace.style](https://shoelace.style/), [Surreal CMS](https://www.surrealcms.com/), and other [open source things](https://github.com/claviska).

You can follow Cory on [Twitter](https://twitter.com/claviska) and [GitHub](https://github.com/claviska).

------------------------------------------------------------------------

<a href="../svg-repo/index.html" class="post-nav-previous"><span class="small">Previous post</span> SVG Repo</a> <a href="../finding-the-active-element-in-a-shadow-root/index.html" class="post-nav-next"><span class="small">Up next</span> Finding the active element in a shadow root</a>
