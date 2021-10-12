<a href="../../index.html" class="header-link"><img src="../../images/logos/wordmark.svg" alt="A Beautiful Site" class="wordmark" /></a> <a href="../../index.html" class="nav-item">Home</a> <a href="../../tags/index.html" class="nav-item">Tags</a> <a href="../index.html" class="nav-item">Archive</a> <a href="../../about/index.html" class="nav-item">About</a>

------------------------------------------------------------------------

CSS reset with box-sizing fix
=============================

October 14, 2014 • 1 min read

For ultra lightweight projects where a framework is overkill, I tend to use [Eric Meyers' CSS reset](http://meyerweb.com/eric/tools/css/reset/). And since I'm not a glutton for punishment, I also throw in the tried and tested [box-sizing fix](http://www.paulirish.com/2012/box-sizing-border-box-ftw/) popularized by Paul Irish. Instead of searching for and combining these snippets every time I need them, here's a paste-ready version for convenience.

    /* CSS reset with box-sizing fix */
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
     margin: 0;
     padding: 0;
     border: 0;
     font-size: 100%;
     font: inherit;
     vertical-align: baseline;
    }
    article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section {
     display: block;
    }
    html {
     box-sizing: border-box;
    }
    *, *:before, *:after {
     box-sizing: inherit;
    }
    body {
     line-height: 1;
    }
    ol, ul {
     list-style: none;
    }
    blockquote, q {
     quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
     content: '';
     content: none;
    }
    table {
     border-collapse: collapse;
     border-spacing: 0;
    }

No attribution necessary, as this code is considered public domain. Just copy and paste it into your new stylesheet and start designing!

<a href="../../tags/design/index.html" class="post-tag">design</a> <a href="../../tags/css/index.html" class="post-tag">css</a>

------------------------------------------------------------------------

<img src="http://0.gravatar.com/avatar/bf1b3b95fd5b096a3592247c29667b33?s=512" alt="Photo of Cory" class="avatar avatar-small" />

Written by [Cory LaViska](../../index-4.html), a software engineer and UX architect responsible for [Shoelace.style](https://shoelace.style/), [Surreal CMS](https://www.surrealcms.com/), and other [open source things](https://github.com/claviska).

You can follow Cory on [Twitter](https://twitter.com/claviska) and [GitHub](https://github.com/claviska).

------------------------------------------------------------------------

<a href="../what-can-you-do-with-a-single-div/index.html" class="post-nav-previous"><span class="small">Previous post</span> What can you do with a single &lt;div&gt;?</a> <a href="../css-shapes-are-here/index.html" class="post-nav-next"><span class="small">Up next</span> CSS shapes are here</a>
