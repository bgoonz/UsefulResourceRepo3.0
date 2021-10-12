<a href="../../index.html" class="header-link"><img src="../../images/logos/wordmark.svg" alt="A Beautiful Site" class="wordmark" /></a> <a href="../../index.html" class="nav-item">Home</a> <a href="../../tags/index.html" class="nav-item">Tags</a> <a href="../index.html" class="nav-item">Archive</a> <a href="../../about/index.html" class="nav-item">About</a>

---

# Using an ORM

February 06, 2017 • 2 min read

I've never really bothered with [ORMs](https://en.wikipedia.org/wiki/Object-relational_mapping) before, as feelings for them tend to be mixed. I've heard that you can spend twice as long learning an ORM as you can coding raw SQL. 🤷🏻‍♂️

I figured it was time to see for myself. For the Postleaf rebuild, I decided to try out [Sequelize](http://docs.sequelizejs.com/en/v3/). I discovered it some time ago and really liked what I saw, but never had a chance to use it. I'm glad I finally did.

The previous version of Postleaf required MySQL. All the models were written from scratch, including CRUD methods (create, read, update, delete) and validation. Believe me when I say that you can waste _a lot of time_ writing your own CRUD methods.

To make matters worse, some of the queries were proprietary, meaning they'd only work with MySQL. I've wanted to remove that requirement for a long time.

An ORM can alleviate these pain points. Sequelize, for example, lets you define models and validation using a simple JSON object. It even creates the database schema and models for you, after which you can query the database without writing any SQL at all.

For example:

    // Find the user named Joe
    User.findOne({
      where: {
        name: 'Joe'
      }
    }).then((user) => {
      console.log(user.name); // "Joe"
    });

That's roughly the same as this:

    SELECT id, name, email FROM users WHERE name = 'Joe'

It may seem a bit more verbose for simple queries, but once you start associating models the benefits are more easily understood. With just one additional line of code, I can fetch the user along with all of his posts:

    // Find Joe and fetch all of his posts
    User.findOne({
      where: {
        name: 'Joe'
      },
      include: Post
    }).then((user) => {
      console.log(user.name); // "Joe"
      console.log(user.posts); // Posts authored by Joe
    });

It gets even more exciting when you realize that Sequelize doesn't just return the raw data, it returns the data as a series of model objects. That means you can do things like this:

    // Find Joe and change his name to Bob
    User.findOne({
      where: {
        name: 'Joe'
      }
    }).then((user) => {
      user.name = 'Bob';
      user.save(); // commit to database
    });

Since raw SQL queries are abstracted into code, I don't have to worry about database-specific quirks — Sequelize does all that in the background. As long as I stick to their API (and avoid database-specific features), Postleaf will be able to run on top of any database that Sequelize supports. (Currently SQLite, MySQL, MariaDB, MSSQL, and PostgreSQL.)

For now, I've decided to develop with SQLite. It's fast, and I love having a single database file in a known location that you can quickly duplicate or replace. It's great for testing, but I'm definitely trying to support all five platforms for release!

<a href="../../tags/postleaf/index.html" class="post-tag">postleaf</a> <a href="../../tags/databases/index.html" class="post-tag">databases</a> <a href="../../tags/development/index.html" class="post-tag">development</a>

---

<img src="http://0.gravatar.com/avatar/bf1b3b95fd5b096a3592247c29667b33?s=512" alt="Photo of Cory" class="avatar avatar-small" />

Written by [Cory LaViska](../../index-4.html), a software engineer and UX architect responsible for [Shoelace.style](https://shoelace.style/), [Surreal CMS](https://www.surrealcms.com/), and other [open source things](https://github.com/claviska).

You can follow Cory on [Twitter](https://twitter.com/claviska) and [GitHub](https://github.com/claviska).

---

<a href="../solving-the-search-problem/index.html" class="post-nav-previous"><span class="small">Previous post</span> Solving the search problem</a> <a href="../hashing-passwords-with-nodejs-and-bcrypt/index.html" class="post-nav-next"><span class="small">Up next</span> Hashing Passwords with Node.js and bcrypt</a>
