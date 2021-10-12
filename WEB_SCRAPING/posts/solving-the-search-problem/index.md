<a href="../../index.html" class="header-link"><img src="../../images/logos/wordmark.svg" alt="A Beautiful Site" class="wordmark" /></a> <a href="../../index.html" class="nav-item">Home</a> <a href="../../tags/index.html" class="nav-item">Tags</a> <a href="../index.html" class="nav-item">Archive</a> <a href="../../about/index.html" class="nav-item">About</a>

---

# Solving the search problem

February 06, 2017 • 3 min read

I recently wrote about [using an ORM](../index-2.html) and how it allowed me to support five different database platforms with minimal effort. There is, however, one feature that even Sequelize couldn't tackle for me: _full-text search_

A full-text search is typically a database feature that lets you locate content just like you would in a search engine. Ideally, the results are ranked by some sort of relevancy score.

The problem is that not all databases support full-text search out of the box, and the ones that do don't necessarily rank results the same way.

## Searching with SQLite <a href="#searching-with-sqlite" class="direct-link">#</a>

I'm using SQLite at the moment for development, and while it supports full-text search, you have to use one of three possible extensions (FTS3, FTS4, FTS5) that must be compiled along with SQLite.

Having three extensions is confusing enough, much less making users compile their own version of SQLite just to run Postleaf. And none of this accounts for the four other database dialects that I'd like to support.

## Searching with MySQL <a href="#searching-with-mysql" class="direct-link">#</a>

The previous version of Postleaf ran on top of MySQL, which has a built-in full-text search. Once you create an index, you can search against content with relative ease. Results are reasonably relevant, but not amazing.

Some quirks — it ignores any term that's three letters or less. So a search for "cat" will always yield zero results. And if you want to rank a post's title higher than its content (a weighted search), you have to do the math and write the raw SQL yourself. Lame.

## Solving Search is hard! <a href="#solving-search-is-hard!" class="direct-link">#</a>

It's true, search is hard, but this problem is much bigger than Postleaf. Ghost has a [two year old issue](https://github.com/TryGhost/Ghost/issues/5321) about it and a lot of people complain that WordPress searches [lack relevance](http://www.noupe.com/wordpress/improving-the-default-search-experience-in-wordpress-75862.html).

Sure, if you focus on one particular database or avoid full-text altogether, you can achieve a search that will yield somewhat usable results. It will work, but it won't be amazing. I think that's because databases really weren't meant to do this type of thing.

A more effective way to solve this problem is with a dedicated search engine such as [Elasticsearch](https://www.elastic.co/products/elasticsearch). Elasticsearch delivers fast, relevant results which is just what we're looking for! Except, of course, it's written in Java and can be somewhat difficult to setup.

Making a complex third-party app a dependency of Postleaf was simply not going to happen. And while there are other options out there, they tend to be more complicated than they're worth for the simple search that I needed for Postleaf.

## Experimenting with Lunr <a href="#experimenting-with-lunr" class="direct-link">#</a>

After some searching around, I began experimenting with a JavaScript library called [Lunr](http://lunrjs.com/). Lunr can be used with Node.js apps or directly in the browser.

Essentially, you define an index with the fields you want to search. You can weight a field using the boost option:

    var index = lunr(function() {
      this.field('title', { boost: 10 });
      this.field('content');
      this.ref('id');
    });

Then you add items to the index:

    index.add({
      id: 1,
      title: 'Lorem Ipsum',
      content: 'Lorem ipsum dolor...'
    });

And then you can search quite easily:

    index.search('lorem ipsum');

Lunr is fast, lightweight, and JavaScript. And it's results are spot on! I immediately knew it would be a key component to my full-text search solution, but some challenges still remained.

## Implementing Lunr in Postleaf <a href="#implementing-lunr-in-postleaf" class="direct-link">#</a>

My initial approach to implementing Lunr turned out to be expensive. I wanted to see how fast fetching, indexing, and searching would be on the fly. It looked something like this:

1.  Fetch id, title, and content of all posts when a request comes in.
2.  Create a Lunr index.
3.  Add each post to the index.
4.  Search the index for the user's query.
5.  eturn all posts that matched the IDs that Lunr had returned.
6.  DesTroy the Lunr index.

This happened on every single request requiring a search. Obviously it wasn't ideal, but I was surprised at how well it performed even for 1,000 posts. At some point after that, the delay became somewhat noticeable (I think it was 2-3 seconds or so per query).

I ended up optimizing my approach so the search index is only built once when the app starts. The index persists in memory and, using [Sequelize hooks](http://docs.sequelizejs.com/en/latest/docs/hooks/), it stays up to date when you add, update, or delete posts.

Since the search happens 100% in memory, it's incredibly fast.

The biggest drawback to this approach is, of course, keeping the search index in memory. However, for 10,000 posts I extrapolated a footprint of just under 30MB. If you have that many posts, I hope your VPS is strong enough to handle it. 😆

Needless to say, the Postleaf rebuild is shipping with a fast, relevant, database-agnostic full-text search thanks to Lunr and a very clever Node.js implementation.

<a href="../../tags/postleaf/index.html" class="post-tag">postleaf</a> <a href="../../tags/lunr/index.html" class="post-tag">lunr</a>

---

<img src="http://0.gravatar.com/avatar/bf1b3b95fd5b096a3592247c29667b33?s=512" alt="Photo of Cory" class="avatar avatar-small" />

Written by [Cory LaViska](../../index-4.html), a software engineer and UX architect responsible for [Shoelace.style](https://shoelace.style/), [Surreal CMS](https://www.surrealcms.com/), and other [open source things](https://github.com/claviska).

You can follow Cory on [Twitter](https://twitter.com/claviska) and [GitHub](https://github.com/claviska).

---

<a href="../moving-to-nodejs/index.html" class="post-nav-previous"><span class="small">Previous post</span> Moving to Node.js</a> <a href="../using-an-orm/index.html" class="post-nav-next"><span class="small">Up next</span> Using an ORM</a>
