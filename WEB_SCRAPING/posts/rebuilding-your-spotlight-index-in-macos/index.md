<a href="../../index.html" class="header-link"><img src="../../images/logos/wordmark.svg" alt="A Beautiful Site" class="wordmark" /></a> <a href="../../index.html" class="nav-item">Home</a> <a href="../../tags/index.html" class="nav-item">Tags</a> <a href="../index.html" class="nav-item">Archive</a> <a href="../../about/index.html" class="nav-item">About</a>

------------------------------------------------------------------------

Rebuilding your Spotlight index in macOS
========================================

July 14, 2017 • 1 min read

I use Spotlight more than I like to admit, usually for launching apps. Recently, some of my apps and files stopped appearing — even ones I access frequently.

After sifting through numerous posts online, I finally discovered one that seems to work. Running this command in the terminal seems to do the trick:

    sudo mdutil -E /

If you're having problem with just a certain disk, you can replace `/` with the appropriate device name (tip: drag the device into the terminal and let macOS input it for you).

Finally, my Spotlight is back to normal!

<a href="../../tags/macOS/index-2.html" class="post-tag">macOS</a> <a href="../../tags/tips/index.html" class="post-tag">tips</a>

------------------------------------------------------------------------

<img src="http://0.gravatar.com/avatar/bf1b3b95fd5b096a3592247c29667b33?s=512" alt="Photo of Cory" class="avatar avatar-small" />

Written by [Cory LaViska](../../index-4.html), a software engineer and UX architect responsible for [Shoelace.style](https://shoelace.style/), [Surreal CMS](https://www.surrealcms.com/), and other [open source things](https://github.com/claviska).

You can follow Cory on [Twitter](https://twitter.com/claviska) and [GitHub](https://github.com/claviska).

------------------------------------------------------------------------

<a href="../thoughts-on-amp/index.html" class="post-nav-previous"><span class="small">Previous post</span> Thoughts on AMP</a> <a href="../surreal-cms-acquires-pagelime/index.html" class="post-nav-next"><span class="small">Up next</span> Surreal CMS acquires PageLime</a>
