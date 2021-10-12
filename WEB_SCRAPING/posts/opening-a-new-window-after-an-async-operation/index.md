<a href="../../index.html" class="header-link"><img src="../../images/logos/wordmark.svg" alt="A Beautiful Site" class="wordmark" /></a> <a href="../../index.html" class="nav-item">Home</a> <a href="../../tags/index.html" class="nav-item">Tags</a> <a href="../index.html" class="nav-item">Archive</a> <a href="../../about/index.html" class="nav-item">About</a>

------------------------------------------------------------------------

Opening a new window after an async operation
=============================================

August 28, 2018 • 1 min read

I was working on an OAuth implementation the other day and needed to open a third-party auth page in a new window.

However, I needed to fetch the target URL from the server first, then open the window. Kinda like this:

    const button = document.getElementById('auth-button');
    button.addEventListener('click', () => {
      getAuthUrl().then(url => {
        window.open(url);
      });
    });

Of course, this doesn't work in most browsers — the popup gets blocked because the window wasn't opened immediately after the click.

To work around this, we need to open the window immediately after the click, so let's use the well-supported about:blank URL to our advantage.

    const button = document.getElementById('auth-button');
    button.addEventListener('click', () => {
      const win = window.open('about:blank');

      getAuthUrl().then(url => {
        win.location = url;
      });
    });

Now the window opens and redirects to the appropriate URL after the async function executes!

You can take it a step further by opening a special page that shows a loader instead. Just swap out about:blank with your own page.

<a href="../../tags/development/index.html" class="post-tag">development</a>

------------------------------------------------------------------------

<img src="http://0.gravatar.com/avatar/bf1b3b95fd5b096a3592247c29667b33?s=512" alt="Photo of Cory" class="avatar avatar-small" />

Written by [Cory LaViska](../../index-4.html), a software engineer and UX architect responsible for [Shoelace.style](https://shoelace.style/), [Surreal CMS](https://www.surrealcms.com/), and other [open source things](https://github.com/claviska).

You can follow Cory on [Twitter](https://twitter.com/claviska) and [GitHub](https://github.com/claviska).

------------------------------------------------------------------------

<a href="../zipping-multiple-folders-into-separate-zip-files/index.html" class="post-nav-previous"><span class="small">Previous post</span> Zipping multiple folders into separate zip files</a> <a href="../a-clever-way-to-style-the-mark-element/index.html" class="post-nav-next"><span class="small">Up next</span> A clever way to style the &lt;mark&gt; element</a>
