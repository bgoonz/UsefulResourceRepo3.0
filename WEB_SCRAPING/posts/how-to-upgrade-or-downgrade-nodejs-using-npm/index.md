<a href="../../index.html" class="header-link"><img src="../../images/logos/wordmark.svg" alt="A Beautiful Site" class="wordmark" /></a> <a href="../../index.html" class="nav-item">Home</a> <a href="../../tags/index.html" class="nav-item">Tags</a> <a href="../index.html" class="nav-item">Archive</a> <a href="../../about/index.html" class="nav-item">About</a>

------------------------------------------------------------------------

How to upgrade or downgrade Node.js using npm
=============================================

April 05, 2016 • 1 min read

Need to update your version of [Node.js](https://nodejs.org/)? Here's how you can upgrade or downgrade from the command line using npm.

Upgrading to the latest stable version <a href="#upgrading-to-the-latest-stable-version" class="direct-link">#</a>
------------------------------------------------------------------------------------------------------------------

This will update you to the latest available stable version:

    sudo npm cache clean -f
    sudo npm install -g n
    sudo n stable

Upgrading to the latest LTS version <a href="#upgrading-to-the-latest-lts-version" class="direct-link">#</a>
------------------------------------------------------------------------------------------------------------

Node also offers a [long-term support (LTS) version](https://github.com/nodejs/LTS/). If you need that version (or any other), simply specify the version number you want:

    sudo npm cache clean -f
    sudo npm install -g n
    sudo n 4.4.2

Checking your Node version <a href="#checking-your-node-version" class="direct-link">#</a>
------------------------------------------------------------------------------------------

To see which version of Node is currently installed, simply run:

    node -v

The version number displayed is the one that's currently active on your machine.

<a href="../../tags/development/index.html" class="post-tag">development</a> <a href="../../tags/node.js/index.html" class="post-tag">node.js</a> <a href="../../tags/tips/index.html" class="post-tag">tips</a>

------------------------------------------------------------------------

<img src="http://0.gravatar.com/avatar/bf1b3b95fd5b096a3592247c29667b33?s=512" alt="Photo of Cory" class="avatar avatar-small" />

Written by [Cory LaViska](../../index-4.html), a software engineer and UX architect responsible for [Shoelace.style](https://shoelace.style/), [Surreal CMS](https://www.surrealcms.com/), and other [open source things](https://github.com/claviska).

You can follow Cory on [Twitter](https://twitter.com/bgooonz) and [GitHub](https://github.com/claviska).

------------------------------------------------------------------------

<a href="../adding-and-removing-virtual-hosts-on-ubuntu-1404/index.html" class="post-nav-previous"><span class="small">Previous post</span> Adding and removing virtual hosts on Ubuntu 14.04</a> <a href="../a-better-way-to-write-config-files-in-php/index.html" class="post-nav-next"><span class="small">Up next</span> A better way to write config files in PHP</a>
