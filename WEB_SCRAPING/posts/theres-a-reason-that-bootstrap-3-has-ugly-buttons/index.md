<a href="../../index.html" class="header-link"><img src="../../images/logos/wordmark.svg" alt="A Beautiful Site" class="wordmark" /></a> <a href="../../index.html" class="nav-item">Home</a> <a href="../../tags/index.html" class="nav-item">Tags</a> <a href="../index.html" class="nav-item">Archive</a> <a href="../../about/index.html" class="nav-item">About</a>

---

# There's a reason that Bootstrap 3 has ugly buttons

August 20, 2013 • 1 min read

It's true. Everyone loves Bootstrap's buttons...at least they did until [3.0 came out](http://blog.getbootstrap.com/2013/08/19/bootstrap-3-released/).

But before you get upset at [@mdo](https://twitter.com/mdo) and [@fat](https://twitter.com/fat) for what many mistake to be a move towards the anti-skeuomorphic design trend, you should realize there's more than meets the eye behind the decision to make buttons flat and "ugly" in Bootstrap 3.

![Bootstrap 3 default buttons](../../images/bootstrap-buttons.png)

As Mark Otto [stated](https://github.com/twbs/bootstrap/pull/6342#issuecomment-12332378) on GitHub while Bootstrap 3 was under development:

> Gradients and other embellishments have temporarily been removed while I focus on other things. It has nothing to do with skeuomorphism or anything like that.

There were plenty of follow ups, both for and against the flat, gradient-less buttons. Unfortunately, what a lot of folks don't realize is that Bootstrap is intended to be a _starting point_ for their projects, not an end-all solution for front-end development. In other words, Bootstrap is _supposed_ to be customized, and adding gradients and other arbitrary styles to the core simply makes that harder to do.

Aside from that, when things look too good out-of-the-box, people tend to leave them that way. We saw that so much with Bootstrap 2.x that it spawned blog posts imploring people to [stop using Bootstrap](http://css.dzone.com/articles/please-stop-using-twitter) (or at least [start using it right](http://peteschuster.com/2013/06/stop-using-bootstrap-and-start-using-bootstrap/)).

Ultimately, Bootstrap 3 encourages people to customize their implementation, and that's a good thing.

## A Less Mixin' for Prettier Buttons <a href="#a-less-mixin&#39;-for-prettier-buttons" class="direct-link">#</a>

If you long for the good ol' days of beautiful Bootstrap buttons, I may have a solution that you'll like. It's a [Less mixin' for buttons](https://gist.github.com/claviska/6117193), designed specifically for Bootstrap 3. It's easy to use and customize. Use it in conjunction with Bootstrap's Less files and you'll have nice, customized buttons with minimal effort. Here's a sample:

![Bootstrap 3 pretty buttons](../../images/bootstrap-buttons-mixin.png)

This mixin' works in conjunction with default Bootstrap 3 styles, so you can change pretty much anything with ease. Consider this Gist a public domain offering, and use it however you like.

<a href="../../tags/bootstrap/index.html" class="post-tag">bootstrap</a> <a href="../../tags/design/index.html" class="post-tag">design</a>

---

<img src="http://0.gravatar.com/avatar/bf1b3b95fd5b096a3592247c29667b33?s=512" alt="Photo of Cory" class="avatar avatar-small" />

Written by [Cory LaViska](../../index-4.html), a software engineer and UX architect responsible for [Shoelace.style](https://shoelace.style/), [Surreal CMS](https://www.surrealcms.com/), and other [open source things](https://github.com/claviska).

You can follow Cory on [Twitter](https://twitter.com/claviska) and [GitHub](https://github.com/claviska).

---

<a href="../whipping-file-inputs-into-shape-with-bootstrap-3/index.html" class="post-nav-previous"><span class="small">Previous post</span> Whipping file inputs into shape with Bootstrap</a> <a href="../semantic-version-numbers/index.html" class="post-nav-next"><span class="small">Up next</span> Semantic version numbers</a>
