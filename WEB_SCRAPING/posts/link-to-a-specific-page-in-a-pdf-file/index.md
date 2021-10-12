<a href="../../index.html" class="header-link"><img src="../../images/logos/wordmark.svg" alt="A Beautiful Site" class="wordmark" /></a> <a href="../../index.html" class="nav-item">Home</a> <a href="../../tags/index.html" class="nav-item">Tags</a> <a href="../index.html" class="nav-item">Archive</a> <a href="../../about/index.html" class="nav-item">About</a>

---

# Link to a specific page in a PDF file

August 13, 2014 • 1 min read

Both Chrome and Firefox render PDF files in the browser, making them easier for users to view. Today I wanted to send someone a link to a certain page in a PDF user's manual. Here's how I did it.

In HTML, you can link to a specific part of the page this using anchors. For example:

    <!-- page.html -->
    <h2 id="anchor-name">Deep Linking Rocks!</h2>

    <!-- another-page.html -->
    <a href="page.html#anchor-name">Go to it!</a>

When you click the link, your browser will take you to the correct location in `page.html`, no matter how far down it is.

But how do you do that with a PDF file? Well, we don't have access to any IDs so the best we can do is pick a page and link to that instead. Try this:

    <a href="document.pdf#page=10">

[Per Adobe](http://helpx.adobe.com/acrobat/kb/link-html-pdf-page-acrobat.html), this will link the user to page 10 of `document.pdf` in Chrome and Firefox. Note that we're using a hash instead of a question mark—it's not actually query string even though it looks a lot like one.

Alas, not all browsers open PDFs, so it's best to tell users which page they should look for in case they're using an unsupportive browser.

As of this writing, Chrome and Firefox both handle this beautifully. Although Safari opens PDFs, it doesn't seem to acknowledge the hash. Of course, this will also work if the user has the Adobe Reader plugin installed.

<a href="../../tags/development/index.html" class="post-tag">development</a> <a href="../../tags/html/index.html" class="post-tag">html</a> <a href="../../tags/pdf/index.html" class="post-tag">pdf</a> <a href="../../tags/tips/index.html" class="post-tag">tips</a>

---

<img src="http://0.gravatar.com/avatar/bf1b3b95fd5b096a3592247c29667b33?s=512" alt="Photo of Cory" class="avatar avatar-small" />

Written by [Cory LaViska](../../index-4.html), a software engineer and UX architect responsible for [Shoelace.style](https://shoelace.style/), [Surreal CMS](https://www.surrealcms.com/), and other [open source things](https://github.com/claviska).

You can follow Cory on [Twitter](https://twitter.com/claviska) and [GitHub](https://github.com/claviska).

---

<a href="../lessons-from-my-20s-a-presentation-by-ryan-allis/index.html" class="post-nav-previous"><span class="small">Previous post</span> Lessons from my 20s: a presentation by Ryan Allis</a> <a href="../smaller-volume-increments-in-os-x/index.html" class="post-nav-next"><span class="small">Up next</span> Smaller volume increments in macOS</a>
