<a href="../../index.html" class="header-link"><img src="../../images/logos/wordmark.svg" alt="A Beautiful Site" class="wordmark" /></a> <a href="../../index.html" class="nav-item">Home</a> <a href="../../tags/index.html" class="nav-item">Tags</a> <a href="../index.html" class="nav-item">Archive</a> <a href="../../about/index.html" class="nav-item">About</a>

------------------------------------------------------------------------

Images display in Firefox and Safari, but not in Internet Explorer
==================================================================

April 24, 2009 • 1 min read

![A drawing of a cartoon man pointing upwards](../../images/artwork/pointer.gif)

Heads up! This post was written in 2009, so it may contain information that is no longer accurate. I keep posts like this around for historical purposes and to prevent link rot, so please keep this in mind as you're reading.

— Cory

I ran into a little "gotcha" today where an image was displaying properly in Firefox and Safari, but not in Internet Explorer. The weird thing is that it wasn't showing up as a broken link (no missing image icon with the infamous red 'X'). Instead, it wasn't showing up at all:

    <img src="image.jpg" width="" height="">

As it turns out, if you have the `width` and `height` attributes set to an empty string, IE seems to interpret the width and height as zero, which makes the image not appear. All other browsers, of course, seem to discard the empty attributes.

The solution? Simply remove the empty attributes or plug in the appropriate values.

<a href="../../tags/design/index.html" class="post-tag">design</a> <a href="../../tags/gotchas/index.html" class="post-tag">gotchas</a> <a href="../../tags/ie/index.html" class="post-tag">ie</a>

------------------------------------------------------------------------

<img src="http://0.gravatar.com/avatar/bf1b3b95fd5b096a3592247c29667b33?s=512" alt="Photo of Cory" class="avatar avatar-small" />

Written by [Cory LaViska](../../index-4.html), a software engineer and UX architect responsible for [Shoelace.style](https://shoelace.style/), [Surreal CMS](https://www.surrealcms.com/), and other [open source things](https://github.com/claviska).

You can follow Cory on [Twitter](https://twitter.com/claviska) and [GitHub](https://github.com/claviska).

------------------------------------------------------------------------

<a href="../php-functions-to-get-and-remove-the-file-extension-from-a-string/index.html" class="post-nav-previous"><span class="small">Previous post</span> PHP functions to get and remove the file extension from a string</a> <a href="../what-happens-if-ie8-breaks-my-website/index.html" class="post-nav-next"><span class="small">Up next</span> What happens if IE8 "breaks" my website?</a>
