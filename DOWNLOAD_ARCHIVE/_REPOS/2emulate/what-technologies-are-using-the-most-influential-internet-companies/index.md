<a href="/categories/learnings/" class="category-link">Learnings</a>

# What technologies are using the most influential Internet companies?

<span title="Last time this post was updated"> Last updated July 12th 2011 </span> <span class="m-x-2" title="Pageviews"> 0.3k </span> <span class="m-x-2" title="Click to go to the comments section"> [ <span class="disqus-comment-count" data-disqus-url="https://master--bgoonz-blog.netlify.app/what-technologies-are-using-the-most-influential-internet-companies/">0</span>](#disqus_thread) </span>

- <a href="/tags/startups/" class="tag-list-link">startups</a><span class="tag-list-count">2</span>

Google, Facebook, YouTube, Yahoo, Wikipedia, Hotmail (Windows Live), Twitter, LinkedIn, Amazon.com, WordPress.com, eBay, Bing... You may know probably all these companies; we use some on our daily basis. They bring services to around 2 billion people! And influence our lives everyday. The most influential Internet companies are in the search engine and social media category, so I will focus the analysis in these two.



<span id="more"></span>

<span class="underline">**Search Engines**</span>

1.  Google -&gt; **1,000**,000,000 = 1 billion unique visitors /month

2.  Yahoo! Sites -&gt; **689**,000,000 unique visitors /month

3.  Bing/Microsoft Sites -&gt; **905**,000,000 unique visitors /month



<span class="underline">**Social Media**</span>

1.  Facebook: **750**,000,000+ users

2.  Twitter: **200**,000,000 users

3.  Gmail: **193**,000,000 users

4.  LinkedIn: **100**,000,000+ users

5.  Flickr: **32**,000,000 users

6.  Google+: unknown yet, but growing quickly!



All these websites have something in common: huge amount of traffic! So, there technologies should scale, support high concurrency and easy to maintain. All these features are a good measure to know what programming language you should focus next. Learn from what is already working. All right! Now comes the interesting part! Let see what is happening behind the scenes!



**![facebook logo](https://t1.gstatic.com/images?q=tbn:ANd9GcSsGcRk_O0ncOMinYTG4K1Lle--Ot4ShY4Oc1fDtw5pd_i6qxkoXg)**

**Facebook  **

Technologies used:

- PHP (main programming language)

- HipHop for PHP (translate PHP to C++)

- MySQL (database)

- Cassandra (distributed database management system)

- Memcached (distributed memory cache)

- Thrift (integration between many programming languages)

- Other languages: Java, Erlang, C++, …

- A lot of tweaks for optimization, custom extensions. For instance, they used modified a Linux distribution to optimized it for Memcached.



Who else uses PHP as main language?

Facebook, Wikipedia, Digg, CMS, and many more…

Who else uses Memcached?

YouTube, Facebook, Twitter, Reddit, Zynga. CMS (Drupal, Joomla, WordPress)



![Twitter](https://t0.gstatic.com/images?q=tbn:ANd9GcQkxJl0nu584FrSblIknohzw0tAMtmGSSs9hAnxRS6kFOpzPYmvXQ)

**Twitter**

Technologies used:

(Be aware that Twitter keeps changing their technologies as they scale. So the list will be kinda chronologically)



- Ruby (initially 2006). Ruby on Rails for the web interface and an enhanced Ruby Enterprise Edition.

- Memcached (distributed memory cache)

- MySQL  (database)

- Starling (2007-2008): lightweight persistent message queue server written in Ruby.

- Outages: (it’s not a technology, duh. But, gives an idea why they make some changes later) In 2007, Twitter had been down 2% (equivalent to 6 full days). Especially in big events.

- Scala (in 2009): is multi-paradigm object-oriented programming language. In April 2009, Twitter changes large portions of their backend from Ruby to Scala.

- Lucene (in 2011): for their real-time search engine they are change it from MySQL to Lucene.

- Java (In 2011): They are replacing Ruby on Rails for Java in their search infrastructure. They announce performance improvements in their search engine 3x and 10x throughput.

- What’s the next change? …Stay tune ;)

Who else use Scala?

Foursquare, Twitter, …



![Google Logo](https://t1.gstatic.com/images?q=tbn:ANd9GcTWsBtMltVQT9FqsL9zNTKIu-8-7uazpjrnb_6AWnsQ8p8xsbiRYQ)

**Google**

It’s a mystery what they really use, but here are some hints:

- C++: for high-performance applications and search engine capabilities.

- They use a lot of Java and Python.

- Python: is an interpreted, general-purpose high-level programming language whose design philosophy emphasizes code readability (wikipedia).

- Big Table: is a compressed, high performance, and proprietary database system.

- Google File System: Google’s distributed file system to access data efficiently using large clusters.

- Google Closure Tools: JavaScript tool for rich web applications. It’s used in Gmail, Google Maps and Google Docs.

- Google Web Toolkit:  used to create complex JavaScript front-end in Java. The Java code is “compiled” in JavaScript it’s the general idea.

- Ajax (Asynchronous JavaScript and XML).  It’s used in Google Maps, Google.com and many other Google apps.

Who else use Python?

YouTube, BitTorrent client, Google, Yahoo, NASA… Used for Artificial Intelligence too…



In a next post, I’ll continue with the other ones…

### Now, your turn!

Thanks for reading this far. Here are some things you can do next:

- Found a typo? [Edit this post](https://github.com/amejiarosario/amejiarosario.github.io/edit/source/source/_posts/2011-07-12-what-technologies-are-using-the-most-influential-internet-companies.md).
- Got questions? [comment](#comments-section) below.
- Was it useful? Show your support and share it.

<a href="/how-to-set-up-samba-in-ubuntu-linux-and-access-it-in-mac-os-and-windows/" class="article-nav-newer"><strong><em></em> newer</strong></a>

How to set up Samba in Ubuntu/Linux, and access it in Mac OS and Windows

Subscribe & stay up to date!



[<span id="back-to-top" title="Go back to the top of this page"> Top </span>](#) <a href="#" class="p-x-3" title="Improve this post"><em></em> Edit this post</a>
