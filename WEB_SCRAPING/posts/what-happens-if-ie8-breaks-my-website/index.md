<a href="../../index.html" class="header-link"><img src="../../images/logos/wordmark.svg" alt="A Beautiful Site" class="wordmark" /></a> <a href="../../index.html" class="nav-item">Home</a> <a href="../../tags/index.html" class="nav-item">Tags</a> <a href="../index.html" class="nav-item">Archive</a> <a href="../../about/index.html" class="nav-item">About</a>

------------------------------------------------------------------------

What happens if IE8 "breaks" my website?
========================================

June 27, 2009 • 1 min read

![A drawing of a cartoon man pointing upwards](../../images/artwork/pointer.gif)

Heads up! This post was written in 2009, so it may contain information that is no longer accurate. I keep posts like this around for historical purposes and to prevent link rot, so please keep this in mind as you're reading.

— Cory

Last year all of the hype was about IE8 and [Microsoft's decision](http://blogs.msdn.com/ie/archive/2008/01/21/compatibility-and-ie8.aspx) to default the browsers version targeting to "quirks mode" rather than standards mode. This essentially meant that developers would have to opt-in to IE8's standards mode using a proprietary `<meta>` tag that tells the browser which mode you want it to render your website in.

Needless to say, this was a very frustrating proposal for developers worldwide. At the same time, Microsoft's obligation to not "break" the web was very understandable. It was a catch 22 for the company, but the issue had to be tended to promptly. After much discussion and some encouragement from the community, [Microsoft officially reversed their decision](http://www.zeldman.com/2008/03/04/microsoft-reverses-version-targeting-default/) to handle version targeting this way.

Now that IE8 has been officially released, one problem still remains for many legacy sites. What if IE8 "breaks" your website? The short-term solution is actually [very simple](http://msdn.microsoft.com/en-us/library/cc817574.aspx):

> Windows Internet Explorer 8 introduces document compatibility modes that allow Web developers to tell the browser to render their pages in the same way as older versions would, thereby allowing the developer to choose when to update.

In short, add this tag inside the `<head>` of each of your webpages and call it a day:

    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE7" />

Wait! Don't actually call it a day and forget about it! Although I'm sure a lot of folks will do just that, the fact is that you really should treat this as the temporary fix that it is and make an honest effort to get those legacy websites and applications up to date. The reality is, however, that many developers will be confronted with compatibility issues as IE8 gets pushed out to millions of users via [Windows Automatic Update](http://www.microsoft.com/windows/downloads/windowsupdate/automaticupdate.mspx). Of course, many won't have the time or resources it takes to redevelop or modify all those old sites so, in a pinch, you can at least get by.

<a href="../../tags/design/index.html" class="post-tag">design</a> <a href="../../tags/ie/index.html" class="post-tag">ie</a>

------------------------------------------------------------------------

<img src="http://0.gravatar.com/avatar/bf1b3b95fd5b096a3592247c29667b33?s=512" alt="Photo of Cory" class="avatar avatar-small" />

Written by [Cory LaViska](../../index-4.html), a software engineer and UX architect responsible for [Shoelace.style](https://shoelace.style/), [Surreal CMS](https://www.surrealcms.com/), and other [open source things](https://github.com/claviska).

You can follow Cory on [Twitter](https://twitter.com/claviska) and [GitHub](https://github.com/claviska).

------------------------------------------------------------------------

<a href="../images-display-in-firefox-and-safari-but-not-in-internet-explorer/index.html" class="post-nav-previous"><span class="small">Previous post</span> Images display in Firefox and Safari, but not in Internet Explorer</a> <a href="../browser-makers-wheres-the-new-tab-homepage-option/index.html" class="post-nav-next"><span class="small">Up next</span> Browser makers: where’s the new tab + homepage option?</a>
