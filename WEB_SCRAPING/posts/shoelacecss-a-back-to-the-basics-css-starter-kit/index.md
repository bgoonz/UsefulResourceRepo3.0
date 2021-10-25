<a href="../../index.html" class="header-link"><img src="../../images/logos/wordmark.svg" alt="A Beautiful Site" class="wordmark" /></a> <a href="../../index.html" class="nav-item">Home</a> <a href="../../tags/index.html" class="nav-item">Tags</a> <a href="../index.html" class="nav-item">Archive</a> <a href="../../about/index.html" class="nav-item">About</a>

---

# Shoelace.style — A back to the basics CSS starter kit

July 27, 2017 • 1 min read

I spent some time last week working on a free CSS boilerplate I'm calling [Shoelace.css](https://shoelace.style/). It's kinda like Bootstrap, but a lot leaner and pure CSS. You don't need a preprocessor like Sass or Less to use it, but it's still highly customizable with [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables).

I'm calling Shoelace a "starter kit", not a framework. The goal was to create a lightweight, fully customizable, and extensible boilerplate for building websites and web apps.

What makes Shoelace really awesome is that you can `<link>` to it with just one line of code and start using it. Customizations can be made in your own stylesheet by simply overriding variables:

    :root {
      --body-bg-color: black;
      --body-color: white;
    }

Shoelace is only ~31KB minified and comes in at about 7.9KB gzipped. For comparison, Bootstrap 4 alpha 6 is 192KB CSS + 47KB JavaScript. And, starting today, you can use Shoelace via CDN courtesy of [KeyCDN](https://www.keycdn.com/).

For more info and to grab the source, head over to [shoelace.style](https://shoelace.style/).

_July 24, 2020: Shoelace 2.0 has been released. The library has become a collection of professionally-designed web components and is much different than the original version._

<a href="../../tags/css/index.html" class="post-tag">css</a> <a href="../../tags/projects/index.html" class="post-tag">projects</a> <a href="../../tags/design/index.html" class="post-tag">design</a> <a href="../../tags/development/index.html" class="post-tag">development</a>

---

<img src="http://0.gravatar.com/avatar/bf1b3b95fd5b096a3592247c29667b33?s=512" alt="Photo of Cory" class="avatar avatar-small" />

Written by [Cory LaViska](../../index-4.html), a software engineer and UX architect responsible for [Shoelace.style](https://shoelace.style/), [Surreal CMS](https://www.surrealcms.com/), and other [open source things](https://github.com/claviska).

You can follow Cory on [Twitter](https://twitter.com/bgooonz) and [GitHub](https://github.com/claviska).

---

<a href="../downloading-a-list-of-urls-automatically/index.html" class="post-nav-previous"><span class="small">Previous post</span> Downloading a list of URLs automatically</a> <a href="../zipping-multiple-folders-into-separate-zip-files/index.html" class="post-nav-next"><span class="small">Up next</span> Zipping multiple folders into separate zip files</a>
