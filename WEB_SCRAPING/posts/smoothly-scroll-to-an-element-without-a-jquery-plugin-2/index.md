<a href="../../index.html" class="header-link"><img src="../../images/logos/wordmark.svg" alt="A Beautiful Site" class="wordmark" /></a> <a href="../../index.html" class="nav-item">Home</a> <a href="../../tags/index.html" class="nav-item">Tags</a> <a href="../index.html" class="nav-item">Archive</a> <a href="../../about/index.html" class="nav-item">About</a>

---

# Smoothly scroll to an element without a jQuery plugin

January 22, 2010 • 1 min read

![A drawing of a cartoon man pointing upwards](../../images/artwork/pointer.gif)

Heads up! This post was written in 2010, so it may contain information that is no longer accurate. I keep posts like this around for historical purposes and to prevent link rot, so please keep this in mind as you're reading.

— Cory

You know that special effect where you click on a link and your browser smoothly scrolls down to the appropriate section of the page? Pretty slick, right? Here are a couple snippets so you can do the same thing on your own website.

## Scroll to a specific element <a href="#scroll-to-a-specific-element" class="direct-link">#</a>

Here's how to programmatically scroll to any [element](404.html) on the page. If you're using jQuery, you don't need a plugin. It's very simple:

    $('html, body').animate({
      scrollTop: $("#target-element").offset().top
    }, 1000);

This will scroll the page down to `#target-element` over a period of one second (1,000 milliseconds = 1 second).

## Scroll to the selected anchor <a href="#scroll-to-the-selected-anchor" class="direct-link">#</a>

You can take things a bit further and animate scrolling for all anchors on your page. The following snippet will watch for clicks on any link that points to an anchor and smoothly scroll down to it:

    $('a[href^="#"]').on('click', function(event) {

      var target = $(this.getAttribute('href'));

      if (target.length) {
        event.preventDefault();
        $('html, body').stop().animate({
          scrollTop: target.offset().top
        }, 1000);
      }
    });

## See it in action <a href="#see-it-in-action" class="direct-link">#</a>

See the Pen [cybdG](http://codepen.io/claviska/pen/cybdG/) by Cory LaViska ([@claviska](http://codepen.io/claviska)) on [CodePen](http://codepen.io/).

<a href="../../tags/development/index.html" class="post-tag">development</a> <a href="../../tags/javascript/index.html" class="post-tag">javascript</a> <a href="../../tags/jquery/index.html" class="post-tag">jquery</a>

---

<img src="http://0.gravatar.com/avatar/bf1b3b95fd5b096a3592247c29667b33?s=512" alt="Photo of Cory" class="avatar avatar-small" />

Written by [Cory LaViska](../../index-4.html), a software engineer and UX architect responsible for [Shoelace.style](https://shoelace.style/), [Surreal CMS](https://www.surrealcms.com/), and other [open source things](https://github.com/claviska).

You can follow Cory on [Twitter](https://twitter.com/claviska) and [GitHub](https://github.com/claviska).

---

<a href="../the-difference-between-web-designers-and-web-developers/index.html" class="post-nav-previous"><span class="small">Previous post</span> The difference between web designers and web developers</a> <a href="../office-2007-files-downloading-as-zip-in-internet-explorer/index.html" class="post-nav-next"><span class="small">Up next</span> Office 2007 files downloading as ZIP files in Internet Explorer</a>
