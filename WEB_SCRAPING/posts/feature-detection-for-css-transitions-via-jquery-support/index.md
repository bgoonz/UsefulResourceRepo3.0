<a href="../../index.html" class="header-link"><img src="../../images/logos/wordmark.svg" alt="A Beautiful Site" class="wordmark" /></a> <a href="../../index.html" class="nav-item">Home</a> <a href="../../tags/index.html" class="nav-item">Tags</a> <a href="../index.html" class="nav-item">Archive</a> <a href="../../about/index.html" class="nav-item">About</a>

---

# Feature detection for CSS transitions via jQuery $.support

December 09, 2012 • 1 min read

![A drawing of a cartoon man pointing upwards](../../images/artwork/pointer.gif)

Heads up! This post was written in 2012, so it may contain information that is no longer accurate. I keep posts like this around for historical purposes and to prevent link rot, so please keep this in mind as you're reading.

— Cory

When working with CSS transitions, the need to detect whether or not the browser supports them may arise.  It can be of particular use when working with the [`transitionend`](https://developer.mozilla.org/en-US/docs/CSS/Using_CSS_transitions#Detecting_the_completion_of_a_transition) event, which won't fire in unsupportive browsers.

After finding a number of questionable solutions, I came across this [gist](https://gist.github.com/373874) that extends jQuery's `$.support` nicely.

    $.support.transition = (function(){
      var thisBody = document.body || document.documentElement,
        thisStyle = thisBody.style,
        support = thisStyle.transition !== undefined || thisStyle.WebkitTransition !== undefined || thisStyle.MozTransition !== undefined || thisStyle.MsTransition !== undefined || thisStyle.OTransition !== undefined;
      return support;
    })();

The value of `$.support.transition` will be `true` or `false` depending on the browser's capabilities.

<a href="../../tags/javascript/index.html" class="post-tag">javascript</a> <a href="../../tags/jquery/index.html" class="post-tag">jquery</a> <a href="../../tags/tips/index.html" class="post-tag">tips</a>

---

<img src="http://0.gravatar.com/avatar/bf1b3b95fd5b096a3592247c29667b33?s=512" alt="Photo of Cory" class="avatar avatar-small" />

Written by [Cory LaViska](../../index-4.html), a software engineer and UX architect responsible for [Shoelace.style](https://shoelace.style/), [Surreal CMS](https://www.surrealcms.com/), and other [open source things](https://github.com/claviska).

You can follow Cory on [Twitter](https://twitter.com/claviska) and [GitHub](https://github.com/claviska).

---

<a href="../access-pages-without-the-php-extension-using-htaccess/index.html" class="post-nav-previous"><span class="small">Previous post</span> Access pages without the php extension using .htaccess</a> <a href="../down-with-the-share-widget/index.html" class="post-nav-next"><span class="small">Up next</span> Down with the share widget!</a>
