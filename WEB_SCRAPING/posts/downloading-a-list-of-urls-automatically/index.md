<a href="../../index.html" class="header-link"><img src="../../images/logos/wordmark.svg" alt="A Beautiful Site" class="wordmark" /></a> <a href="../../index.html" class="nav-item">Home</a> <a href="../../tags/index.html" class="nav-item">Tags</a> <a href="../index.html" class="nav-item">Archive</a> <a href="../../about/index.html" class="nav-item">About</a>

------------------------------------------------------------------------

Downloading a list of URLs automatically
========================================

July 21, 2017 • 1 min read

I recently needed to download a bunch of files from Amazon S3, but I didn't have direct access to the bucket — I only had a list of URLs.

There were too many to fetch one by one, so I wanted to fetch them automatically. Here are a couple ways I found to do that.

Using curl <a href="#using-curl" class="direct-link">#</a>
----------------------------------------------------------

Curl comes installed on every Mac and just about every Linux distro, so it was my first choice for this task. Turns out it's pretty easy.

Create a new file called `files.txt` and paste the URLs one per line. Then run the following command.

    xargs -n 1 curl -O < files.txt

Curl will download each and every file into the current directory.

Using wget <a href="#using-wget" class="direct-link">#</a>
----------------------------------------------------------

If you're on Linux or curl isn't available for some reason, you can do the same thing with wget.

Create a new file called `files.txt` and paste the URLs one per line. Then run the following command:

    wget -i files.txt

Wget will download each and every file into the current directory.

**Tip for macOS users:** If you want to use wget on macOS, you can install it via [Homebrew](https://brew.sh/) using `homebrew install wget`.

<a href="../../tags/tips/index.html" class="post-tag">tips</a> <a href="../../tags/bash/index.html" class="post-tag">bash</a>

------------------------------------------------------------------------

<img src="http://0.gravatar.com/avatar/bf1b3b95fd5b096a3592247c29667b33?s=512" alt="Photo of Cory" class="avatar avatar-small" />

Written by [Cory LaViska](../../index-4.html), a software engineer and UX architect responsible for [Shoelace.style](https://shoelace.style/), [Surreal CMS](https://www.surrealcms.com/), and other [open source things](https://github.com/claviska).

You can follow Cory on [Twitter](https://twitter.com/claviska) and [GitHub](https://github.com/claviska).

------------------------------------------------------------------------

<a href="../surreal-cms-acquires-pagelime/index.html" class="post-nav-previous"><span class="small">Previous post</span> Surreal CMS acquires PageLime</a> <a href="../shoelacecss-a-back-to-the-basics-css-starter-kit/index.html" class="post-nav-next"><span class="small">Up next</span> Shoelace.style — A back to the basics CSS starter kit</a>
