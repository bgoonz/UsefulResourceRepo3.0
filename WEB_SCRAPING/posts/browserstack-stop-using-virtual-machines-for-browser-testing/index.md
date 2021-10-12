<a href="../../index.html" class="header-link"><img src="../../images/logos/wordmark.svg" alt="A Beautiful Site" class="wordmark" /></a> <a href="../../index.html" class="nav-item">Home</a> <a href="../../tags/index.html" class="nav-item">Tags</a> <a href="../index.html" class="nav-item">Archive</a> <a href="../../about/index.html" class="nav-item">About</a>

---

# BrowserStack: stop using virtual machines for browser testing

August 29, 2014 • 1 min read

Sick of booting up an entire virtual machine (VM) just to test something in IE? With [BrowserStack](http://www.browserstack.com/), you don't need VMware or VirtualBox. Just enter a URL and instantly test on just about any browser you can think of.

This is legit. It's not just another screenshot service or emulator. You have real-time access to an actual machine running your browser of choice. So how does it work? A BrowserStack engineer [explains](http://www.quora.com/Web-Browsers/How-is-browserstack-com-implemented-How-does-it-emulate-various-browsers-within-a-single-browser):

> [BrowserStack.com](http://browserstack.com/) works by connecting you with a real machine (let us call it server) running somewhere in one of our geographically distributed datacenters via RFB protocol.
>
> We use certain open source tools, modified to suit our needs, running on server side. Client browser runs a flash based client application which receives the input from the users and send it across the server. Server gets this input, does the required operation and sends the changes back to the client.

In other words, it's a clever way of remoting into a machine running the target browser, but you don't have to worry about VMs, memory, OS licensing, software updates, or even launching a browser.

Sound too good to be true? I've used it and it works really well. My biggest concern is that, even with a broadband connection, the remote screen gets a bit choppy (but this can also happen when you run a VM without enough memory). My other concern is the price. At [$39 a month](https://www.browserstack.com/pricing) for a solo plan, you need to be doing some serious browser testing to make it worth your while.

Either way, it's worth checking out. They offer a free trial that gives you 30 minutes of live testing and 100 screenshots. I think you'll be impressed by what they've built over at BrowserStack.

<a href="../../tags/browsers/index.html" class="post-tag">browsers</a> <a href="../../tags/development/index.html" class="post-tag">development</a>

---

<img src="http://0.gravatar.com/avatar/bf1b3b95fd5b096a3592247c29667b33?s=512" alt="Photo of Cory" class="avatar avatar-small" />

Written by [Cory LaViska](../../index-4.html), a software engineer and UX architect responsible for [Shoelace.style](https://shoelace.style/), [Surreal CMS](https://www.surrealcms.com/), and other [open source things](https://github.com/claviska).

You can follow Cory on [Twitter](https://twitter.com/claviska) and [GitHub](https://github.com/claviska).

---

<a href="../im-taking-startup-back/index.html" class="post-nav-previous"><span class="small">Previous post</span> I'm taking "startup" back</a> <a href="../stop-trying-to-build-the-next-unicorn/index.html" class="post-nav-next"><span class="small">Up next</span> Stop trying to build the next unicorn</a>
