<a href="../../index.html" class="header-link"><img src="../../images/logos/wordmark.svg" alt="A Beautiful Site" class="wordmark" /></a> <a href="../../index.html" class="nav-item">Home</a> <a href="../../tags/index.html" class="nav-item">Tags</a> <a href="../index.html" class="nav-item">Archive</a> <a href="../../about/index.html" class="nav-item">About</a>

---

# Semantic version numbers

August 21, 2013 • 1 min read

Gone are the days of arbitrarily assigning version numbers to every new software release. With [semantic versioning](http://semver.org/), the question of how and when to bump versions is made simple.

According to [semver.org](http://semver.org/), the syntax for version numbers should go like this: `MAJOR.MINOR.PATCH`

When you release a new version, it's easy to determine which numbers to increment:

1.  `MAJOR` version when you make incompatible API changes,
2.  `MINOR` version when you add functionality in a backwards-compatible manner, and
3.  `PATCH` version when you make backwards-compatible bug fixes.

The entire spec is actually quite short and simple (for a spec), but the concepts therein will \[hopefully\] change the way developers version their software in the future. While many projects already follow similar conventions, there are still many that don't. This is especially true in the case of smaller projects, where developers seem to arbitrarily bump version numbers without considering the impact such changes may have on their users.

If you don't have an existing standard for versioning your software, help make the world a better place and consider adopting SemVer in your next project!

<a href="../../tags/development/index.html" class="post-tag">development</a>

---

<img src="http://0.gravatar.com/avatar/bf1b3b95fd5b096a3592247c29667b33?s=512" alt="Photo of Cory" class="avatar avatar-small" />

Written by [Cory LaViska](../../index-4.html), a software engineer and UX architect responsible for [Shoelace.style](https://shoelace.style/), [Surreal CMS](https://www.surrealcms.com/), and other [open source things](https://github.com/claviska).

You can follow Cory on [Twitter](https://twitter.com/bgooonz) and [GitHub](https://github.com/claviska).

---

<a href="../theres-a-reason-that-bootstrap-3-has-ugly-buttons/index.html" class="post-nav-previous"><span class="small">Previous post</span> There's a reason that Bootstrap 3 has ugly buttons</a> <a href="../validating-urls-and-email-addresses-in-php/index.html" class="post-nav-next"><span class="small">Up next</span> Validating URLs and email addresses in PHP</a>
