<a href="../../index.html" class="header-link"><img src="../../images/logos/wordmark.svg" alt="A Beautiful Site" class="wordmark" /></a> <a href="../../index.html" class="nav-item">Home</a> <a href="../../tags/index.html" class="nav-item">Tags</a> <a href="../index.html" class="nav-item">Archive</a> <a href="../../about/index.html" class="nav-item">About</a>

------------------------------------------------------------------------

Detecting mobile devices with JavaScript
========================================

November 23, 2011 • 1 min read

![A drawing of a cartoon man pointing upwards](../../images/artwork/pointer.gif)

Heads up! This post was written in 2011, so it may contain information that is no longer accurate. I keep posts like this around for historical purposes and to prevent link rot, so please keep this in mind as you're reading.

— Cory

While I understand and value the concept of feature detection over browser detection, sometimes the need for knowing whether or not we're dealing with a mobile device arises. For in-depth device checking, you can rely on a complex library such as [The MobileESP Project](http://blog.mobileesp.com/). But for simpler applications, the following snippet can be useful.

    var isMobile = {
      Android: function() {
        return navigator.userAgent.match(/Android/i);
      },
      BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
      },
      iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
      },
      Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
      },
      Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
      },
      any: function() {
        return (
          isMobile.Android() ||
          isMobile.BlackBerry() ||
          isMobile.iOS() ||
          isMobile.Opera() ||
          isMobile.Windows()
        );
      }
    };

While this doesn't account for *all* mobile platforms, it will pick up the most popular ones out there.

Examples <a href="#examples" class="direct-link">#</a>
------------------------------------------------------

To check to see if the user is on any of the supported mobile devices:

    if (isMobile.any()) {
      alert('Mobile');
    }

To check to see if the user is on a specific mobile device:

    if (isMobile.iOS()) {
      alert('iOS');
    }

<a href="../../tags/development/index.html" class="post-tag">development</a> <a href="../../tags/javascript/index.html" class="post-tag">javascript</a>

------------------------------------------------------------------------

<img src="http://0.gravatar.com/avatar/bf1b3b95fd5b096a3592247c29667b33?s=512" alt="Photo of Cory" class="avatar avatar-small" />

Written by [Cory LaViska](../../index-4.html), a software engineer and UX architect responsible for [Shoelace.style](https://shoelace.style/), [Surreal CMS](https://www.surrealcms.com/), and other [open source things](https://github.com/claviska).

You can follow Cory on [Twitter](https://twitter.com/claviska) and [GitHub](https://github.com/claviska).

------------------------------------------------------------------------

<a href="../redirecting-to-and-from-the-www-subdomain-with-htaccess/index.html" class="post-nav-previous"><span class="small">Previous post</span> Redirecting to and from the www subdomain with .htaccess</a> <a href="../access-pages-without-the-php-extension-using-htaccess/index.html" class="post-nav-next"><span class="small">Up next</span> Access pages without the php extension using .htaccess</a>
