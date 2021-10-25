<a href="../../index.html" class="header-link"><img src="../../images/logos/wordmark.svg" alt="A Beautiful Site" class="wordmark" /></a> <a href="../../index.html" class="nav-item">Home</a> <a href="../../tags/index.html" class="nav-item">Tags</a> <a href="../index.html" class="nav-item">Archive</a> <a href="../../about/index.html" class="nav-item">About</a>

---

# How to delete a tag on GitHub

November 16, 2011 • 1 min read

![A drawing of a cartoon man pointing upwards](../../images/artwork/pointer.gif)

Heads up! This post was written in 2011, so it may contain information that is no longer accurate. I keep posts like this around for historical purposes and to prevent link rot, so please keep this in mind as you're reading.

— Cory

In the world of Git, tags are very useful for keeping track of your project's version history. A lot of folks will argue that you shouldn't delete tags, but there are real-world examples in which tags need to be deleted.  That said, it's both a good and a bad thing that [GitHub](http://github.com/) hasn't built the ability to delete tags into it's web app.

It can be frustrating, however, if you ever come across that need.  If you're one of those individuals, open up a terminal window and navigate to your local Git repository.  Once there, simply run these commands, replacing **\[tag\]** with the tag name:

    git tag -d [tag];
    git push origin :[tag]

And if your tag has the same name as one of your branches, use this instead:

    git tag -d [tag]
    git push origin :refs/tags/[tag]

Of course, these steps assume that you have Git running on your local machine.

*August 8, 2016:* GitHub now lets you delete *releases* from its website, but this will not delete the tag. As of right now, to delete the actual tag, you still need to use the command line.

<a href="../../tags/development/index.html" class="post-tag">development</a> <a href="../../tags/git/index.html" class="post-tag">git</a> <a href="../../tags/tips/index.html" class="post-tag">tips</a>

---

<img src="http://0.gravatar.com/avatar/bf1b3b95fd5b096a3592247c29667b33?s=512" alt="Photo of Cory" class="avatar avatar-small" />

Written by [Cory LaViska](../../index-4.html), a software engineer and UX architect responsible for [Shoelace.style](https://shoelace.style/), [Surreal CMS](https://www.surrealcms.com/), and other [open source things](https://github.com/claviska).

You can follow Cory on [Twitter](https://twitter.com/bgooonz) and [GitHub](https://github.com/claviska).

---

<a href="../office-2007-files-downloading-as-zip-in-internet-explorer/index.html" class="post-nav-previous"><span class="small">Previous post</span> Office 2007 files downloading as ZIP files in Internet Explorer</a> <a href="../the-simple-image-library-for-php/index.html" class="post-nav-next"><span class="small">Up next</span> The SimpleImage library for PHP</a>
