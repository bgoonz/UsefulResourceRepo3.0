<a href="../../index.html" class="header-link"><img src="../../images/logos/wordmark.svg" alt="A Beautiful Site" class="wordmark" /></a> <a href="../../index.html" class="nav-item">Home</a> <a href="../../tags/index.html" class="nav-item">Tags</a> <a href="../index.html" class="nav-item">Archive</a> <a href="../../about/index.html" class="nav-item">About</a>

---

# Know When To Draw The Line

October 11, 2021 • 1 min read

One-off variations aren't uncommon, but they don't belong in your design system. You're design system isn't solving for every possible use case — it's encouraging visual consistency and efficient development. Use custom styles for one-offs.

This came up recently on my team.

We have a button component that supports prefix icons. By default, the icon color matches the text. In one design, the same button was used but the icon color was the primary color instead. The question came up:

> "Should we make a new button variant?"

The answer, of course, was no. Because the button should only look like that in a specific toolbar, the solution was something like:

    my-toolbar my-button::part(icon) {
      color: var(--primary);
    }

Know when to draw the line.

<a href="../../tags/design%20systems/index.html" class="post-tag">design systems</a> <a href="../../tags/web%20components/index.html" class="post-tag">web components</a>

---

<img src="http://0.gravatar.com/avatar/bf1b3b95fd5b096a3592247c29667b33?s=512" alt="Photo of Cory" class="avatar avatar-small" />

Written by [Cory LaViska](../../index-4.html), a software engineer and UX architect responsible for [Shoelace.style](https://shoelace.style/), [Surreal CMS](https://www.surrealcms.com/), and other [open source things](https://github.com/claviska).

You can follow Cory on [Twitter](https://twitter.com/claviska) and [GitHub](https://github.com/claviska).

---

<a href="../dont-do-magic/index.html" class="post-nav-previous"><span class="small">Previous post</span> Don't Do Magic</a>
