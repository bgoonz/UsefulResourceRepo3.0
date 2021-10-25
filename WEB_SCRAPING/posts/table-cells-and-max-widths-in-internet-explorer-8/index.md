<a href="../../index.html" class="header-link"><img src="../../images/logos/wordmark.svg" alt="A Beautiful Site" class="wordmark" /></a> <a href="../../index.html" class="nav-item">Home</a> <a href="../../tags/index.html" class="nav-item">Tags</a> <a href="../index.html" class="nav-item">Archive</a> <a href="../../about/index.html" class="nav-item">About</a>

---

# Table cells and max-widths in Internet Explorer 8

September 30, 2009 • 1 min read

![A drawing of a cartoon man pointing upwards](../../images/artwork/pointer.gif)

Heads up! This post was written in 2009, so it may contain information that is no longer accurate. I keep posts like this around for historical purposes and to prevent link rot, so please keep this in mind as you're reading.

— Cory

I recently came across a [little issue](https://connect.microsoft.com/IE/feedback/ViewFeedback.aspx?FeedbackID=425785) with Internet Explorer 8 and `max-width`. I had an image inside of a table cell and, for some reason, IE8 completely neglected the corresponding CSS `max-width` property. The result was the image rendering at full size rather than scaled down to the assigned width, as expected.

After a [little searching](http://bytes.com/topic/html-css/answers/870359-ie8-display-table-cell-max-width-bug), I found that you can usually resolve this by assigning this to the affected table:

    table-layout: fixed;

I'm not a huge fan of quick-fixes like this, but in the case of a blatent browser bug there isn't much you can do without going too far out of your way. I'm sure it will be fixed in an IE8 update soon.

<a href="../../tags/ie/index.html" class="post-tag">ie</a> <a href="../../tags/css/index.html" class="post-tag">css</a>

---

<img src="http://0.gravatar.com/avatar/bf1b3b95fd5b096a3592247c29667b33?s=512" alt="Photo of Cory" class="avatar avatar-small" />

Written by [Cory LaViska](../../index-4.html), a software engineer and UX architect responsible for [Shoelace.style](https://shoelace.style/), [Surreal CMS](https://www.surrealcms.com/), and other [open source things](https://github.com/claviska).

You can follow Cory on [Twitter](https://twitter.com/bgooonz) and [GitHub](https://github.com/claviska).

---

<a href="../browser-makers-wheres-the-new-tab-homepage-option/index.html" class="post-nav-previous"><span class="small">Previous post</span> Browser makers: where’s the new tab + homepage option?</a> <a href="../jsnes-a-nintendo-emulator-built-in-javascript/index.html" class="post-nav-next"><span class="small">Up next</span> JSNES: a Nintendo emulator built in JavaScript</a>
