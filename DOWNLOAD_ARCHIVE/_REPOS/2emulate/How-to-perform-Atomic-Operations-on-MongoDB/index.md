<a href="/categories/coding/" class="category-link">Coding</a>

# How to perform Atomic Operations on MongoDB?

<span title="Last time this post was updated"> Last updated March 14th 2019 </span> <span class="m-x-2" title="Pageviews"> 5.8k </span> <span class="m-x-2" title="Click to go to the comments section"> [ <span class="disqus-comment-count" data-disqus-url="https://master--bgoonz-blog.netlify.app/How-to-perform-Atomic-Operations-on-MongoDB/">0</span>](#disqus_thread) </span>

- <a href="/tags/mongodb/" class="tag-list-link">mongodb</a><span class="tag-list-count">3</span>

![How to perform Atomic Operations on MongoDB?](/images/atomic-operations-mongodb-large.png)

The NoSQL database system has been able to gain momentum in the past few years due to its flexibility and other benefits. Mongo is the leader when it comes to NoSQL. There are plenty of amazing features of MongoDB, and one of them are atomic operations. In the upcoming sections of this article, we will go deep into atomic operations, its use, and how you can apply it to your projects.

<span id="more"></span>

Before moving forward to checking out how we can apply atomic operations in MongoDB, we will be looking at some of the critical points that you need to keep in your mind in regards to MongoDB:

- MongoDB does not support atomicity for multi-document transactions. However, version 4.0 onwards will support multi-document transactions in several cases.
- It is only possible to use the atomicity feature of MongoDB in a single document (not in case of version 4.0). Suppose, there is a document that consists of 35 fields. In that document, there will either be updates in all 35 fields or none.
- The atomicity feature is only limited to the document level.

---

If you want to jump into the NoSQL database, you should consider [MongoDB certification](https://www.simplilearn.com/big-data-and-analytics/mongodb-certification-training). It will give you a strong foundation and skills to use MongoDB to solve real-world problems. There is a considerable job demand for MongoDB professionals.

---

## <a href="#Introduction-to-Atomic-Operations" class="headerlink" title="Introduction to Atomic Operations"></a>Introduction to Atomic Operations

The atomic operations in database terminology is a chained and sophisticated database operations series. In this series, either all aspects of the series will be affected, or nothing will be altered. In atomic operations, there is no such thing as a partial database change.

In atomic operations, there is only a room for complete database updates and changes. In case of any partial updates, the whole database will roll back.

We use atomic operations in a case where the partial update will create more harm in comparison to rolling back. There are some instances in the real world where we need to maintain our database in this manner. In the latter part of this article, we will discuss more in depth about it.

We can explain atomic operations in MongoDB clearly with the use of ACID, a.k.a. Atomicity, Consistency, Isolation, and Durability.

- Here is a simple rule of _atomicity_ for every single operation, “either all or none.”
- The _consistency_ property will play a crucial role in atomicity. It will ensure that each transaction will ultimately lead to a valid state of some kind.
- The _isolation_ property of the database will play a part in guaranteeing the systematic process of the concurrent transaction, which means one by one.
- Finally, the _durability_ property will come into play. This property ensures the permanency of the database after each database transaction regardless of errors, crashes, and power loss.

## <a href="#Modeling-e-Commerce-Products-in-MongoDB" class="headerlink" title="Modeling e-Commerce Products in MongoDB"></a>Modeling e-Commerce Products in MongoDB

We should maintain atomicity in MongoDB by compiling all the related information in a single document, which will update consistently. We can create such type of consistency via embedded documents. The embedded is for ensuring that every single update that takes place in the document is atomic.

Here is how the document looks like for representing item purchase information.

### <a href="#Creating-a-new-product" class="headerlink" title="Creating a new product"></a>Creating a new product

Let’s say we have an e-Commerce app and we want to model a product on MongoDB with atomic operations. We can do something like this:

creating a product on MongoDB

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36</code></pre></td><td><pre><code>use AtomicMongoDB;
// =&gt; switched to db AtomicMongoDB

// create an iPhone product with embedded buyers
db.AtominMongoDB.save({
&quot;\_id&quot;: 1111,
&quot;item_name&quot;: &quot;Apple iPhone Xs Max 512GB&quot;,
&quot;price&quot;: 1450,
&quot;category&quot;: &quot;handset&quot;,
&quot;warranty_period&quot;: 5,
&quot;city&quot;: &quot;Toronto&quot;,
&quot;country&quot;: &quot;Canada&quot;,
&quot;item_total&quot;: 10,
&quot;item_available&quot;: 6,
&quot;item_bought_by&quot;: [{
&quot;customer&quot;: &quot;Bob&quot;,
&quot;date&quot;: &quot;6-Feb-2019&quot;
},
{
&quot;customer&quot;: &quot;Alice&quot;,
&quot;date&quot;: &quot;5-Jan-2019&quot;
},
{
&quot;customer&quot;: &quot;Anita&quot;,
&quot;date&quot;: &quot;4-Dec-2018&quot;
},
{
&quot;customer&quot;: &quot;Abhishek&quot;,
&quot;date&quot;: &quot;10-Dec-2018&quot;
}
]
});
// =&gt; WriteResult({ &quot;nMatched&quot; : 0, &quot;nUpserted&quot; : 1, &quot;nModified&quot; : 0, &quot;\_id&quot; : 1111 })

// Verify the document was saved
db.AtominMongoDB.find().pretty();</code></pre></td></tr></tbody></table>

In the above document, we have created a model, embedded document. We have produced a report from the purchase in the item_bought_by field. This single document will manage everything about the purchase and the stock. In this document, it will see whether the item that the customer orders are in the stock or not. The customer’s order processes through the item_available field.

### <a href="#Decreasing-count-on-a-purchase" class="headerlink" title="Decreasing count on a purchase"></a>Decreasing count on a purchase

In the case of availability, we will subtract the `item_available` field by 1. After we complete that part, we will record the information of the customer, and, i.e., name and the purchase date, in the item_bought_by field. We will again look at another document where we will be using the `findAndmodify` statement to fulfill this purpose. By using `findAndmodify` statement, the document will perform search and update activity simultaneously in the report.

buying a product

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56</code></pre></td><td><pre><code>db.AtominMongoDB.findAndModify({
  query: {
    _id: 1111,
    item_available: {
      $gt: 0
    }
  },
  update: {
    $inc: {
      item_available: -1
    },
    $push: {
      item_bought_by: {
        customer: &quot;Adrian&quot;,
        date: &quot;14-Mar-2019&quot;
      }
    }
  }
});

// =&gt; returns found document

// Verify new customer was added and stock number decreased
db.AtominMongoDB.find().pretty();
// {
// &quot;\_id&quot;: 1111,
// &quot;item_name&quot;: &quot;Apple iPhone Xs Max 512GB&quot;,
// &quot;price&quot;: 1450,
// &quot;category&quot;: &quot;handset&quot;,
// &quot;warranty_period&quot;: 5,
// &quot;city&quot;: &quot;Toronto&quot;,
// &quot;country&quot;: &quot;Canada&quot;,
// &quot;item_total&quot;: 10,
// &quot;item_available&quot;: 5,
// &quot;item_bought_by&quot;: [{
// &quot;customer&quot;: &quot;Bob&quot;,
// &quot;date&quot;: &quot;6-Feb-2019&quot;
// },
// {
// &quot;customer&quot;: &quot;Alice&quot;,
// &quot;date&quot;: &quot;5-Jan-2019&quot;
// },
// {
// &quot;customer&quot;: &quot;Anita&quot;,
// &quot;date&quot;: &quot;4-Dec-2018&quot;
// },
// {
// &quot;customer&quot;: &quot;Abhishek&quot;,
// &quot;date&quot;: &quot;10-Dec-2018&quot;
// },
// {
// &quot;customer&quot;: &quot;Adrian&quot;,
// &quot;date&quot;: &quot;14-Mar-2019&quot;
// }
// ]
// }</code></pre></td></tr></tbody></table>

In the above document, we searched for the item, setting the ID as 1111. If the system finds such a thing, we activate the subtraction function and deduct 1 in the item_available field. We will also update the field `item_bought_by` in which we insert the name of the customer along with the purchase date.

Finally, we print the full information with the function, find and pretty method. We can see that the item_available field will come down from 6 to 5 while adding the customer name and the purchase date in the `item_bought_by` field.

One more example to make you more precise about the use of atomic operations in MongoDB

### <a href="#Modeling-books-on-MongoDB-and-performing-atomic-operations" class="headerlink" title="Modeling books on MongoDB and performing atomic operations"></a>Modeling books on MongoDB and performing atomic operations

In the above case, we dealt mainly with the product order and the record keeping of customers. In this example, we will be using the function of the simple book store and make it work out in MongoDB via atomic operations.

Let’s suppose in that book store, and we need to maintain the record of books along with the number of copies available for checkout, including crucial details about checkout.

We should sync the number of copies available, and checkout information must for the program to work. We will be embedding the checkout and the `available` field for ensuring that the two areas will be updated atomically.

create a book on mongo

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7
8
9
10
11
12
13</code></pre></td><td><pre><code>// create a new book
db.books.save({
  _id: 222222,
  title: &quot;Data Structures &amp; Algorithms in JavaScript&quot;,
  author: [ &quot;&quot; ],
  published_date: ISODate(&quot;2019-02-15&quot;),
  pages: 216,
  language: &quot;English&quot;,
  publisher_id: &quot;Independent&quot;,
  available: 156,
  checkout: [ { by: &quot;Ivan&quot;, date: ISODate(&quot;2019-04-14&quot;) } ]
})
</code></pre></td></tr></tbody></table>

Updating the checkout field with new information is essential. We will be using `db.collection.updateOne()` method for atomically updating available and checkout field.

Purchasing a book

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7
8
9
10
11
12</code></pre></td><td><pre><code>db.books.updateOne({
  _id: 222222,
  available: { $gt: 0 }
}, {
  $inc: { available: -1 },
  $push: {
    checkout: {
      by: &quot;Abby&quot;,
      date: new Date()
    }
  }
});</code></pre></td></tr></tbody></table>

The above command will return the following:

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1</code></pre></td><td><pre><code>{ &quot;acknowledged&quot; : true, &quot;matchedCount&quot; : 1, &quot;modifiedCount&quot; : 1 }</code></pre></td></tr></tbody></table>

The `matchedCount` field is responsible for comparing the condition for updates. We can see that 1 document fulfilled the requirements due to which the operation updated 1 document (`modifiedCount`).

There could also be the case where no documents are matched, according to the update condition. In that situation, both the `matchedCount` and `modifiedCount` field would be 0. What this means is that you will not be able to purchase the book and continue with a checkout process.

## <a href="#Final-Say" class="headerlink" title="Final Say"></a>Final Say

Finally, we have finished the topic of how you can use atomic operations via MongoDB. It was not that difficult, was it? Although it is not possible to work out with multi-document tasks, but using atomic operations in MongoDB is simple. With that said, MongoDB starting from version 4.0 will be supporting atomic operations in numerous scenarios.

There are plenty of real-world issues where we can use an atomic operation like in purchase record. It will prevent mutual exclusions; hence, it will stop the corruption of data in many ways.

Take a close look at the source codes in the article and follow it as you see fit. After practicing for a few times, you can naturally apply the atomic operation in the real-world problems where needed.

Do you have any confusions? If yes, feel free to leave a comment below. We will reply to your comment for clearing out your difficulties. In case you want to add more insights, you can put forward your opinion in the comment below.

### Now, your turn!

Thanks for reading this far. Here are some things you can do next:

- Found a typo? [Edit this post](https://github.com/amejiarosario/amejiarosario.github.io/edit/source/source/_posts/2019-03-14-How-to-perform-Atomic-Operations-on-MongoDB.md).
- Got questions? [comment](#comments-section) below.
- Was it useful? Show your support and share it.

<a href="/How-to-build-a-Node-js-eCommerce-website-for-free/" class="article-nav-newer"><strong><em></em> newer</strong></a>

How to build a Node.js eCommerce website for free

<a href="/I-got-hacked-and-It-changed-my-life-on-security-tips/" class="article-nav-older"><strong>older <em></em></strong></a>

45 Security Tips to Avoid Hacking

Subscribe & stay up to date!



<img src="/images/DanishWadhwa.png" class="m-a-1 not-scaled" />

Danish Wadhwa is a HubSpot certified marketing expert and IT pro. With a handful of experience in the web, he has served a number of clients across the world. As a techno-savvy person, he believes in experimenting with new tools and techniques.

[<span id="back-to-top" title="Go back to the top of this page"> Top </span>](#) <a href="#" class="p-x-3" title="Improve this post"><em></em> Edit this post</a>

### Contents

1.  <a href="#Introduction-to-Atomic-Operations" class="toc-link"><span class="toc-number">1.</span> <span class="toc-text">Introduction to Atomic Operations</span></a>
2.  <a href="#Modeling-e-Commerce-Products-in-MongoDB" class="toc-link"><span class="toc-number">2.</span> <span class="toc-text">Modeling e-Commerce Products in MongoDB</span></a>
    1.  <a href="#Creating-a-new-product" class="toc-link"><span class="toc-number">2.1.</span> <span class="toc-text">Creating a new product</span></a>
    2.  <a href="#Decreasing-count-on-a-purchase" class="toc-link"><span class="toc-number">2.2.</span> <span class="toc-text">Decreasing count on a purchase</span></a>
    3.  <a href="#Modeling-books-on-MongoDB-and-performing-atomic-operations" class="toc-link"><span class="toc-number">2.3.</span> <span class="toc-text">Modeling books on MongoDB and performing atomic operations</span></a>
3.  <a href="#Final-Say" class="toc-link"><span class="toc-number">3.</span> <span class="toc-text">Final Say</span></a>
