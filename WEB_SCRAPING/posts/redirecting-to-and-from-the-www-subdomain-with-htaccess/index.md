<a href="../../index.html" class="header-link"><img src="../../images/logos/wordmark.svg" alt="A Beautiful Site" class="wordmark" /></a> <a href="../../index.html" class="nav-item">Home</a> <a href="../../tags/index.html" class="nav-item">Tags</a> <a href="../index.html" class="nav-item">Archive</a> <a href="../../about/index.html" class="nav-item">About</a>

---

# Redirecting to and from the www subdomain with .htaccess

November 17, 2011 • 1 min read

![A drawing of a cartoon man pointing upwards](../../images/artwork/pointer.gif)

Heads up! This post was written in 2011, so it may contain information that is no longer accurate. I keep posts like this around for historical purposes and to prevent link rot, so please keep this in mind as you're reading.

— Cory

Here are a few snippets that will come in handy if you ever need to redirect [www.example.com](http://www.example.com/) to [example.com](http://example.com/) or vice versa.  There are a number of similar methods out there, but I prefer these as you don't need to modify anything between development and production.

    # www.domain.com → domain.com
    <IfModule mod_rewrite.c>
      RewriteCond %{HTTPS} !=on
      RewriteCond %{HTTP_HOST} ^www.(.+)$ [NC]
      RewriteRule ^ http://%1%{REQUEST_URI} [R=301,L]
    </IfModule>

    # domain.com → www.domain.com
    <IfModule mod_rewrite.c>
      RewriteEngine On
      RewriteCond %{HTTPS} !=on
      RewriteCond %{HTTP_HOST} !^www..+$ [NC]
      RewriteRule ^ http://www.%{HTTP_HOST}%{REQUEST_URI} [R=301,L]
    </IfModule>

If you plan on using these, you'll need to make sure you have the [mod_rewrite module](http://httpd.apache.org/docs/current/mod/mod_rewrite.html) enabled on your server.

<a href="../../tags/apache/index.html" class="post-tag">apache</a> <a href="../../tags/tips/index.html" class="post-tag">tips</a>

---

<img src="http://0.gravatar.com/avatar/bf1b3b95fd5b096a3592247c29667b33?s=512" alt="Photo of Cory" class="avatar avatar-small" />

Written by [Cory LaViska](../../index-4.html), a software engineer and UX architect responsible for [Shoelace.style](https://shoelace.style/), [Surreal CMS](https://www.surrealcms.com/), and other [open source things](https://github.com/claviska).

You can follow Cory on [Twitter](https://twitter.com/claviska) and [GitHub](https://github.com/claviska).

---

<a href="../the-simple-image-library-for-php/index.html" class="post-nav-previous"><span class="small">Previous post</span> The SimpleImage library for PHP</a> <a href="../detecting-mobile-devices-with-javascript/index.html" class="post-nav-next"><span class="small">Up next</span> Detecting mobile devices with JavaScript</a>
