<a href="../../index.html" class="header-link"><img src="../../images/logos/wordmark.svg" alt="A Beautiful Site" class="wordmark" /></a> <a href="../../index.html" class="nav-item">Home</a> <a href="../../tags/index.html" class="nav-item">Tags</a> <a href="../index.html" class="nav-item">Archive</a> <a href="../../about/index.html" class="nav-item">About</a>

---

# Flushing DNS cache on macOS

March 02, 2016 • 1 min read

Here's the best way to flush DNS cache on macOS:

    sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder; say cache flushed

Notice that last part — that's why this is the best method. You get an audible "cache flushed" almost instantaneously, and the whole process becomes that much more satisfying.

Another fun variation:

    sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder; say booyah!

Have at it. It may be silly, but it's the little things in life. Now, go flush that DNS!

<a href="../../tags/macos/index.html" class="post-tag">macos</a> <a href="../../tags/tips/index.html" class="post-tag">tips</a>

---

<img src="http://0.gravatar.com/avatar/bf1b3b95fd5b096a3592247c29667b33?s=512" alt="Photo of Cory" class="avatar avatar-small" />

Written by [Cory LaViska](../../index-4.html), a software engineer and UX architect responsible for [Shoelace.style](https://shoelace.style/), [Surreal CMS](https://www.surrealcms.com/), and other [open source things](https://github.com/claviska).

You can follow Cory on [Twitter](https://twitter.com/bgooonz) and [GitHub](https://github.com/claviska).

---

<a href="../a-clean-fade-in-effect-for-webpages/index.html" class="post-nav-previous"><span class="small">Previous post</span> A clean fade-in effect for webpages</a> <a href="../animated-css-hamburger-icons/index.html" class="post-nav-next"><span class="small">Up next</span> Animated CSS hamburger icons</a>
