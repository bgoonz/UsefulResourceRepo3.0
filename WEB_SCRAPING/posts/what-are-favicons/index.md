<a href="../../index.html" class="header-link"><img src="../../images/logos/wordmark.svg" alt="A Beautiful Site" class="wordmark" /></a> <a href="../../index.html" class="nav-item">Home</a> <a href="../../tags/index.html" class="nav-item">Tags</a> <a href="../index.html" class="nav-item">Archive</a> <a href="../../about/index.html" class="nav-item">About</a>

------------------------------------------------------------------------

What are favicons?
==================

May 11, 2007 • 2 min read

![A drawing of a cartoon man pointing upwards](../../images/artwork/pointer.gif)

Heads up! This post was written in 2007, so it may contain information that is no longer accurate. I keep posts like this around for historical purposes and to prevent link rot, so please keep this in mind as you're reading.

— Cory

A favicon (pronounced "fave-icon") is a small, iconic image that represents your website. Favicons are most often found in the address bar of your web browser, but they can also be used in lists of bookmarks in web browsers and feed aggregators.

Well-designed favicons are styled to match the logo or theme of your website, that way users have a quick and easy way to recognize your website at a glance.

Here is our favicon, displayed in the Firefox address bar:

[![Example of a favicon](../../images/favicon_example.png)](../../images/favicon_example.png)

What type of image is a favicon? <a href="#what-type-of-image-is-a-favicon%3F" class="direct-link">#</a>
--------------------------------------------------------------------------------------------------------

Although most modern browsers will recognize PNG, GIF, and JPG formats for favicons, Internet Explorer currently does not. It is recommended to use the Microsoft ICO format, which works in all browsers.

What size should my favicon be? <a href="#what-size-should-my-favicon-be%3F" class="direct-link">#</a>
------------------------------------------------------------------------------------------------------

Another good reason to use the ICO format is because it can contain multiple favicons of different sizes in one ICO file. It is best to have, at minimum, a 16x16 pixel version. I usually include 32x32 and 48x48 versions as well. That way, if users drag the bookmark to their desktop they will see a nicely scaled version of the icon instead of the 16x16 version stretched out. To learn how to create a favicon with multiple sizes, see [How to create a favicon](#how-to-create-a-favicon) below.

*Below: 16x16, 32x32, and 48x48 versions of A Beautiful Site's favicon. Each image is embedded in one favicon.ico file.*

[![A favicon in multiple sizes](../../images/favicon_mult_sizes.png)](../../images/favicon_mult_sizes.png)

The most common sizes for favicons are:

-   16x16
-   32x32
-   48x48
-   64x64
-   128x128

How to create a favicon <a href="#how-to-create-a-favicon" class="direct-link">#</a>
------------------------------------------------------------------------------------

Although there are many ways to create favicons, the easiest is to use an online tool.  We happen to have a [favicon generator](http://favikon.com/) that's entirely free.  It's called [Favikon](http://favikon.com/).  To create your favicon using Favikon, simply upload an image, crop it, and then download the resulting icon.

How to link to your favicon <a href="#how-to-link-to-your-favicon" class="direct-link">#</a>
--------------------------------------------------------------------------------------------

Now that you've created a nice little favicon, you need to tell web browsers and other applications where to find it. Adding this line to the `<head>` section of your HTML will ensure that your favicon will be found:

    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />

The location of the favicon isn't really important, as long as the `href` attribute is accurate. Most favicons, however, are placed in the root directory (the directory that contains the homepage). Keep in mind that it is not necessary to have multiple instances of the same favicon on one website.

If you add a favicon without linking to it within your HTML, you may notice that some browsers will still find and display it. This only occurs if the favicon is in the root directory. It isn't good to rely on this method, so if you want to make sure that applications will see your favicon, `<link>` to it!

<a href="../../tags/design/index.html" class="post-tag">design</a> <a href="../../tags/favicons/index.html" class="post-tag">favicons</a>

------------------------------------------------------------------------

<img src="http://0.gravatar.com/avatar/bf1b3b95fd5b096a3592247c29667b33?s=512" alt="Photo of Cory" class="avatar avatar-small" />

Written by [Cory LaViska](../../index-4.html), a software engineer and UX architect responsible for [Shoelace.style](https://shoelace.style/), [Surreal CMS](https://www.surrealcms.com/), and other [open source things](https://github.com/claviska).

You can follow Cory on [Twitter](https://twitter.com/bgooonz) and [GitHub](https://github.com/claviska).

------------------------------------------------------------------------

<a href="../using-javascript-to-prevent-comment-spam/index.html" class="post-nav-previous"><span class="small">Previous post</span> Using JavaScript to prevent comment spam</a> <a href="../find-and-replace-hyperlinks-and-email-addresses-in-php/index.html" class="post-nav-next"><span class="small">Up next</span> Find and replace hyperlinks and email addresses in PHP</a>
