<a href="../../index.html" class="header-link"><img src="../../images/logos/wordmark.svg" alt="A Beautiful Site" class="wordmark" /></a> <a href="../../index.html" class="nav-item">Home</a> <a href="../../tags/index.html" class="nav-item">Tags</a> <a href="../index.html" class="nav-item">Archive</a> <a href="../../about/index.html" class="nav-item">About</a>

------------------------------------------------------------------------

Prevent white noise from appearing in images after fading
=========================================================

January 10, 2009 • 1 min read

![A drawing of a cartoon man pointing upwards](../../images/artwork/pointer.gif)

Heads up! This post was written in 2009, so it may contain information that is no longer accurate. I keep posts like this around for historical purposes and to prevent link rot, so please keep this in mind as you're reading.

— Cory

The first time I ever saw this alleged bug was in Internet Explorer 7 yesterday. Images were rotating on a page in the form of a slideshow, fading in and out for a nice, smooth transition. One problem, though: in Internet Explorer 7 (and 6, as it turned out), one of the images would appear with a small cluster of white pixels around the black areas.

To make sure the image wasn't corrupt, I saved it again using PhotoShop. No luck. Even after saving the image as a GIF instead of a JPEG, the white noise persisted in IE.

Luckily, some research resulted in finding [Alex Judd's post](http://www.alexjudd.com/?p=5), which provided a relatively simple solution to the problem.

To summarize, the white noise occurs in both IE6 and IE7 on some (but not all) images when they fade in or out. This is especially true when you're using a JavaScript library such as [jQuery](http://jquery.com/) or [script.aculo.us](http://script.aculo.us/).

Evidently, IE mistakes some of the true-black pixels for transparent pixels, which causes the "white" noise (which may not necessarily be white, depending on the underlying background). One work around, as Alex points out, is to adjust the levels of the image in Photoshop very slightly—just enough to eliminate the true-black pixels.

To do this, open the image up in PhotoShop and perform the following steps:

1.  Select `Image`, `Adjustments`, `Levels`
2.  Move the `Output Levels` slider a few pixels to the right (or type in a small number, like 5)
3.  Save the image

In most cases, there won't be a noticeable difference in color. Alas, this work around does solve the display problem in IE, but not without tampering with the original image. We'll have to keep our fingers crossed in that IE8 finally addresses this issue.

<a href="../../tags/design/index.html" class="post-tag">design</a> <a href="../../tags/ie/index.html" class="post-tag">ie</a>

------------------------------------------------------------------------

<img src="http://0.gravatar.com/avatar/bf1b3b95fd5b096a3592247c29667b33?s=512" alt="Photo of Cory" class="avatar avatar-small" />

Written by [Cory LaViska](../../index-4.html), a software engineer and UX architect responsible for [Shoelace.style](https://shoelace.style/), [Surreal CMS](https://www.surrealcms.com/), and other [open source things](https://github.com/claviska).

You can follow Cory on [Twitter](https://twitter.com/claviska) and [GitHub](https://github.com/claviska).

------------------------------------------------------------------------

<a href="../abs-becomes-abs-llc/index.html" class="post-nav-previous"><span class="small">Previous post</span> A Beautiful Site becomes "A Beautiful Site, LLC"</a> <a href="../php-functions-to-get-and-remove-the-file-extension-from-a-string/index.html" class="post-nav-next"><span class="small">Up next</span> PHP functions to get and remove the file extension from a string</a>
