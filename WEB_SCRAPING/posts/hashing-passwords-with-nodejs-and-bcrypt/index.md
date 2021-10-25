<a href="../../index.html" class="header-link"><img src="../../images/logos/wordmark.svg" alt="A Beautiful Site" class="wordmark" /></a> <a href="../../index.html" class="nav-item">Home</a> <a href="../../tags/index.html" class="nav-item">Tags</a> <a href="../index.html" class="nav-item">Archive</a> <a href="../../about/index.html" class="nav-item">About</a>

---

# Hashing Passwords with Node.js and bcrypt

February 08, 2017 • 1 min read

The [bcrypt library on NPM](https://www.npmjs.com/package/bcrypt) makes it really easy to hash and compare passwords in Node. If you're coming from a PHP background, these are roughly equivalent to [password_hash()](http://php.net/manual/en/function.password-hash.php) and [password_verify()](http://php.net/manual/en/function.password-verify.php).

Bcrypt is the de facto way to hash and store passwords. For a brief explanation of why we use one-way hashes instead of encryption, check out [this answer](http://stackoverflow.com/a/326706) on StackOverflow.

## Installing <a href="#installing" class="direct-link">#</a>

To use the library, simply install with NPM:

    npm install --save bcrypt

Then include it like this:

    const bcrypt = require('bcrypt');

## Creating and verifying a password hash <a href="#creating-and-verifying-a-password-hash" class="direct-link">#</a>

Bcrypt supports both sync and async methods. The asynchronous approach is recommended because hashing is CPU intensive, and the synchronous version will block the event loop and prevent your app from handling other requests until it finishes.

Thus, while the sync version is more convenient, it's best to stick with async if you're concerned about performance.

### Asynchronous version <a href="#asynchronous-version" class="direct-link">#</a>

Hashing a password is as simple as this. The second argument is the number of rounds to use when generating a salt.

    bcrypt.hash('myPassword', 10, function(err, hash) {
      // Store hash
    });

To verify the password later on:

    bcrypt.compare('somePassword', hash, function(err, res) {
      if (res) {
       // Passwords match
      } else {
       // Passwords don't match
      }
    });

### Synchronous version <a href="#synchronous-version" class="direct-link">#</a>

If you prefer a synchronous approach, you can do this instead:

    let hash = bcrypt.hashSync('myPassword', 10);

    // Store hash

To verify the password later on:

    if (bcrypt.compareSync('somePassword', hash)) {
     // Passwords match
    } else {
     // Passwords don't match
    }

That's it! You've just hashed and verified your first password using Node.js and bcrypt!

<a href="../../tags/development/index.html" class="post-tag">development</a> <a href="../../tags/javascript/index.html" class="post-tag">javascript</a> <a href="../../tags/node.js/index.html" class="post-tag">node.js</a>

---

<img src="http://0.gravatar.com/avatar/bf1b3b95fd5b096a3592247c29667b33?s=512" alt="Photo of Cory" class="avatar avatar-small" />

Written by [Cory LaViska](../../index-4.html), a software engineer and UX architect responsible for [Shoelace.style](https://shoelace.style/), [Surreal CMS](https://www.surrealcms.com/), and other [open source things](https://github.com/claviska).

You can follow Cory on [Twitter](https://twitter.com/bgooonz) and [GitHub](https://github.com/claviska).

---

<a href="../using-an-orm/index.html" class="post-nav-previous"><span class="small">Previous post</span> Using an ORM</a> <a href="../determining-your-apps-base-directory-in-nodejs/index.html" class="post-nav-next"><span class="small">Up next</span> Determining your app's base directory in Node.js</a>
