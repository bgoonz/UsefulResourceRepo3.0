<a href="../../index.html" class="header-link"><img src="../../images/logos/wordmark.svg" alt="A Beautiful Site" class="wordmark" /></a> <a href="../../index.html" class="nav-item">Home</a> <a href="../../tags/index.html" class="nav-item">Tags</a> <a href="../index.html" class="nav-item">Archive</a> <a href="../../about/index.html" class="nav-item">About</a>

---

# Let's Encrypt renews but browsers still seeing old/expired SSL certificate

May 10, 2019 • 1 min read

This morning was frustrating. I recently upgraded my VPS from the deprecated `letsencrypt` client to the newer `cerbot` client and generated new certificates for all my personal domains. I thought everything was fine — until I kept seeing intermittent SSL errors.

I figured I did something wrong, so I triple checked my Apache configs, made sure each website was pointing to the correct certificate, and restarted Apache...things seemed to work in Chrome, but not Firefox.

Ok, obviously Firefox was caching the certificate, right? I cleared everything. Same error. I reinstalled Firefox. Same error. Then I noticed that, when I refreshed Chrome, I would _occasionally_ see images blocked, then a moment later they would load.

I ran some SSL tests with mixed results. They were seeing both certs intermittently too. 🤔

So I disabled the server with `sudo service apache2 stop`. To my surprise, my websites were online, but this time the SSL was consistently invalid.

It turns out, when I upgraded to `certbot`, I somehow launched a second instance Apache that wasn't responding to reloads, so there were two instances handling HTTPS traffic — one serving up the cached certificate from memory.

To solve the problem, I ran:

    sudo killall apache2
    sudo service apache2 start

Evidently, Chrome is more resilient to this than Firefox. Perhaps when Chrome sees a valid certificate from at least one HTTPS request, it retries any that fail until it gets a valid one.

Either way, mystery solved. 🕵🏻‍♂️

<a href="../../tags/browsers/index.html" class="post-tag">browsers</a> <a href="../../tags/ssl/index.html" class="post-tag">ssl</a> <a href="../../tags/gotchas/index.html" class="post-tag">gotchas</a>

---

<img src="http://0.gravatar.com/avatar/bf1b3b95fd5b096a3592247c29667b33?s=512" alt="Photo of Cory" class="avatar avatar-small" />

Written by [Cory LaViska](../../index-4.html), a software engineer and UX architect responsible for [Shoelace.style](https://shoelace.style/), [Surreal CMS](https://www.surrealcms.com/), and other [open source things](https://github.com/claviska).

You can follow Cory on [Twitter](https://twitter.com/bgooonz) and [GitHub](https://github.com/claviska).

---

<a href="../introducing-surreal-cms-7/index.html" class="post-nav-previous"><span class="small">Previous post</span> Introducing Surreal CMS 7</a> <a href="../a-free-html-css-and-js-beautifier/index.html" class="post-nav-next"><span class="small">Up next</span> A free HTML, CSS, and JavaScript beautifier</a>
