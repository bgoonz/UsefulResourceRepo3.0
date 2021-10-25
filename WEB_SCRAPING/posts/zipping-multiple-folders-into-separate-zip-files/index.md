<a href="../../index.html" class="header-link"><img src="../../images/logos/wordmark.svg" alt="A Beautiful Site" class="wordmark" /></a> <a href="../../index.html" class="nav-item">Home</a> <a href="../../tags/index.html" class="nav-item">Tags</a> <a href="../index.html" class="nav-item">Archive</a> <a href="../../about/index.html" class="nav-item">About</a>

---

# Zipping multiple folders into separate zip files

July 31, 2017 • 1 min read

Here's a bash script that will zip all folders in the current directory into separate `.zip` files:

    for i in */; do zip -r "${i%/}.zip" "$i"; done

I had to do this to 75+ folders today and this definitely saved me some time. It works on macOS too!

<a href="../../tags/tips/index.html" class="post-tag">tips</a>

---

<img src="http://0.gravatar.com/avatar/bf1b3b95fd5b096a3592247c29667b33?s=512" alt="Photo of Cory" class="avatar avatar-small" />

Written by [Cory LaViska](../../index-4.html), a software engineer and UX architect responsible for [Shoelace.style](https://shoelace.style/), [Surreal CMS](https://www.surrealcms.com/), and other [open source things](https://github.com/claviska).

You can follow Cory on [Twitter](https://twitter.com/bgooonz) and [GitHub](https://github.com/claviska).

---

<a href="../shoelacecss-a-back-to-the-basics-css-starter-kit/index.html" class="post-nav-previous"><span class="small">Previous post</span> Shoelace.style — A back to the basics CSS starter kit</a> <a href="../opening-a-new-window-after-an-async-operation/index.html" class="post-nav-next"><span class="small">Up next</span> Opening a new window after an async operation</a>
