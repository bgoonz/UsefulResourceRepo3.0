<a href="../../index.html" class="header-link"><img src="../../images/logos/wordmark.svg" alt="A Beautiful Site" class="wordmark" /></a> <a href="../../index.html" class="nav-item">Home</a> <a href="../../tags/index.html" class="nav-item">Tags</a> <a href="../index.html" class="nav-item">Archive</a> <a href="../../about/index.html" class="nav-item">About</a>

---

# SSH failing on macOS Sierra

January 15, 2017 • 1 min read

For me, upgrading to MacOS Sierra broke a lot of things that use SSH, including Transmit, Sequel Pro, and a handful of other apps. In fact, it seems to break any app that uses an SSH key with a passphrase. 🤔

The solution I found was to tell SSH to use the MacOS keychain. Simply edit `~/.ssh/config` and add the following (you can safely create the file if it doesn't exist):

    Host *
        UseKeychain yes

That's it! I didn't even have to restart SSH and everything is connecting fine again. 💪

<a href="../../tags/macOS/index-2.html" class="post-tag">macOS</a> <a href="../../tags/ssh/index.html" class="post-tag">ssh</a>

---

<img src="http://0.gravatar.com/avatar/bf1b3b95fd5b096a3592247c29667b33?s=512" alt="Photo of Cory" class="avatar avatar-small" />

Written by [Cory LaViska](../../index-4.html), a software engineer and UX architect responsible for [Shoelace.style](https://shoelace.style/), [Surreal CMS](https://www.surrealcms.com/), and other [open source things](https://github.com/claviska).

You can follow Cory on [Twitter](https://twitter.com/bgooonz) and [GitHub](https://github.com/claviska).

---

<a href="../getting-it-right/index.html" class="post-nav-previous"><span class="small">Previous post</span> Getting it right</a> <a href="../moving-to-nodejs/index.html" class="post-nav-next"><span class="small">Up next</span> Moving to Node.js</a>
