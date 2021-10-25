<a href="/categories/coding/" class="category-link">Coding</a>

# Get Started with the web crawler Apache Nutch 1.x

<span title="Last time this post was updated"> Last updated February 4th 2012 </span> <span class="m-x-2" title="Pageviews"> 9.9k </span> <span class="m-x-2" title="Click to go to the comments section"> [ <span class="disqus-comment-count" data-disqus-url="https://master--bgoonz-blog.netlify.app/get-started-with-the-web-crawler-apache-nutch-1-x/">0</span>](#disqus_thread) </span>

![Get Started with the web crawler Apache Nutch 1.x ](/images/apache_nutch_web_crawler_large.png)

Apache Nutch is an open source **scalable** Web crawler written in Java and based on Lucene/Solr for the indexing and search part. It has a highly modular architecture, allowing developers to create plug-ins for media-type parsing, data retrieval, querying and clustering. \[[\*](http://en.wikipedia.org/wiki/Nutch)\]

<span id="more"></span>

## <a href="#Motivation" class="headerlink" title="Motivation"></a>Motivation

By using Nutch, we can find web page hyperlinks in an automated manner, reduce lots of maintenance work, for example checking broken links, and create a copy of all the visited pages for searching over. That’s where Apache Solr comes in. Solr is an open source full text search framework, with Solr we can search the visited pages from Nutch. Luckily, integration between Nutch and Solr is pretty straightforward.



Whole-web crawling is designed to handle very large crawls which may take weeks to complete, running on multiple machines. This also permits more control over the crawl process, and incremental crawling. It is important to note that whole web crawling does not necessarily mean crawling the entire world wide web. We can limit a whole web crawl to just a list of the URLs we want to crawl. This is done by using a filter just like we the one we used when we did the crawl command. \[[\*](http://wiki.apache.org/nutch/NutchTutorial)\]



Some of the advantages of Nutch, when compared to a simple Fetcher

- highly scalable and relatively feature rich crawler
- features like politeness which obeys robots.txt rules
- robust and scalable - you can run Nutch on a cluster of 100 machines
- quality - you can bias the crawling to fetch “important” pages first

### <a href="#Basics-about-Nutch" class="headerlink" title="Basics about Nutch"></a>Basics about Nutch

First you need to know that, Nutch data is composed of:

- The crawl database, or **crawldb**. This contains information about every url known to Nutch, including whether it was fetched, and, if so, when.
- The link database, or **linkdb**. This contains the list of known links to each url, including both the source url and anchor text of the link.
- A set of **segments**. Each segment is a set of urls that are fetched as a unit. Segments are directories with the following subdirectories:

1.  **crawl_generate** names a set of urls to be fetche
2.  **crawl_fetch** contains the status of fetching each url
3.  **content** contains the raw content retrieved from each url
4.  **parse_text** contains the parsed text of each url
5.  **parse_data** contains outlinks and metadata parsed from each url
6.  **crawl_parse** contains the outlink urls, used to update the crawldb

### <a href="#Nutch-and-Hadoop" class="headerlink" title="Nutch and Hadoop"></a>Nutch and Hadoop

As of the official Nutch 1.3 release the source code architecture has been greatly simplified to allow us to run Nutch in one of two modes; namely local and deploy. By default, Nutch no longer comes with a Hadoop distribution, however when run in local mode e.g. running Nutch in a single process on one machine, then we use Hadoop as a dependency. This may suit you fine if you have a small site to crawl and index, but most people choose Nutch because of its capability to run on in deploy mode, within a Hadoop cluster. This gives you the benefit of a distributed file system (HDFS) and MapReduce processing style.  If you are interested in deployed mode [read here](http://wiki.apache.org/nutch/NutchHadoopTutorial).

## <a href="#Getting-hands-dirt-with-Nutch" class="headerlink" title="Getting hands dirt with Nutch"></a>Getting hands dirt with Nutch

### <a href="#Setup-Nutch-from-binary-distribution" class="headerlink" title="Setup Nutch from binary distribution"></a>Setup Nutch from binary distribution

1.  Unzip your binary Nutch package to $HOME/nutch-1.3
2.  cd $HOME/nutch-1.3/runtime/local
3.  From now on, we are going to use ${NUTCH_RUNTIME_HOME} to refer to the current directory.



### <a href="#Verify-your-Nutch-installation" class="headerlink" title="Verify your Nutch installation"></a>Verify your Nutch installation

1.  run "bin/nutch"
2.  You can confirm a correct installation if you seeing the following:  Usage: nutch \[-core\] COMMAND

<span class="underline">Some troubleshooting tips:</span>

Run the following command if you are seeing "Permission denied":

chmod +x bin/nutch

Setup JAVA_HOME if you are seeing JAVA_HOME not set. On Mac, you can run the following command or add it to ~/.bashrc:

export JAVA_HOME=/System/Library/Frameworks/JavaVM.framework/Versions/1.6/Home \#mac

Ubuntu:

export JAVA_HOME=/usr/lib/jvm/java-1.6.0-openjdk

export NUTCH_HOME=/var/www/nutch-1.3/runtime/local



<span class="underline">Example of using Nutch to crawl wikipedia pages:</span>

Here we are try to crawl <span class="s2"><http://en.wikipedia.org/wiki/Collective_intelligence> and sublinks in the same domain.</span>

1.  $ cd NUTCH_HOME/runtime/local
2.  <span class="s1">$ echo "[<span class="s2">http://en.wikipedia.org/wiki/Collective_intelligence</span>](http://en.wikipedia.org/wiki/Collective_intelligence)" &gt; urls</span>
3.  add: \`+^http://(\[a-z0-9\]\*\\.)\*wikipedia.org/\` in conf/regex-urlfilter.txt
4.  $ bin/nutch crawl urls -dir crawl-wiki-ci -depth 2
5.  **statistics associated with the crawldb**
    1.  $ nutch readdb crawl-wiki-ci/crawldb/ -stats
        1.  CrawlDb statistics start: crawl-wiki-ci/crawldb/Statistics for CrawlDb: crawl-wiki-ci/crawldb/  
            TOTAL urls:     2727  
            retry 0:     2727  
            min score:     0.0  
            avg score:     8.107811E-4  
            max score:     1.341  
            status 1 (db_unfetched):     2665  
            status 2 (db_fetched):     61  
            status 3 (db_gone):     1  
            CrawlDb statistics: done
6.  **Dump of the URLs from the crawldb**
    1.  $ nutch readdb crawl-wiki-ci/crawldb/ -dump crawl-wiki-ci/stats
        1.  <span class="s3">[<span class="s2">http://en.wikipedia.org/wiki/Special:RecentChangesLinked/MIT_Center_for_Collective_Intelligence</span>](http://en.wikipedia.org/wiki/Special:RecentChangesLinked/MIT_Center_for_Collective_Intelligence)</span>     Version: 7Status: 1 (db_unfetched)  
            Fetch time: Sat Feb 04 00:50:50 EST 2012  
            Modified time: Wed Dec 31 19:00:00 EST 1969  
            Retries since fetch: 0  
            Retry interval: 2592000 seconds (30 days)  
            Score: 1.9607843E-4  
            Signature: null  
            Metadata:  
            ….
7.  **Top 10 highest rate links**
    1.  $ nutch readdb crawl-wiki-ci/crawldb/ -topN 10 crawl-wiki-ci/stats/top10/
        1.  <span class="s1">1.3416613     [<span class="s2">http://en.wikipedia.org/wiki/Collective_intelligence</span>](http://en.wikipedia.org/wiki/Collective_intelligence)0.030499997     [<span class="s2">http://en.wikipedia.org/wiki/Howard_Bloom</span>](http://en.wikipedia.org/wiki/Howard_Bloom)  
            0.02763889     [<span class="s2">http://en.wikipedia.org/wiki/Groupthink</span>](http://en.wikipedia.org/wiki/Groupthink)  
            0.02591739     [<span class="s2">http://en.wikipedia.org/wiki/Wikipedia</span>](http://en.wikipedia.org/wiki/Wikipedia)  
            0.024347823     [<span class="s2">http://en.wikipedia.org/wiki/Pierre_L%C3%A9vy\_(philosopher)</span>](<http://en.wikipedia.org/wiki/Pierre_L%C3%A9vy_(philosopher)>)  
            0.023733648     [<span class="s2">http://en.wikipedia.org/wiki/Wikipedia:Citation_needed</span>](http://en.wikipedia.org/wiki/Wikipedia:Citation_needed)  
            0.017142152     [<span class="s2">http://en.wikipedia.org/w/opensearch_desc.php</span>](http://en.wikipedia.org/w/opensearch_desc.php)  
            0.016599996     [<span class="s2">http://en.wikipedia.org/wiki/Artificial_intelligence</span>](http://en.wikipedia.org/wiki/Artificial_intelligence)  
            0.016499996     [<span class="s2">http://en.wikipedia.org/wiki/Consensus_decision_making</span>](http://en.wikipedia.org/wiki/Consensus_decision_making)  
            0.015199998     [<span class="s2">http://en.wikipedia.org/wiki/Group_selection</span>](http://en.wikipedia.org/wiki/Group_selection)</span>
8.  **Dump of a Nutch segment**
    1.  $ nutch readseg -dump crawl-wiki-ci/segments/20120204004509/ crawl-wiki-ci/stats/segments
        1.  CrawlDatum::Version: 7  
            Status: 1 (db_unfetched)  
            Fetch time: Sat Feb 04 00:45:03 EST 2012  
            Modified time: Wed Dec 31 19:00:00 EST 1969  
            Retries since fetch: 0  
            Retry interval: 2592000 seconds (30 days)  
            Score: 1.0  
            Signature: null  
            Metadata: \_ngt\_: 1328334307529
        2.  Content::  
            Version: -1  
            url: [<span class="s4">http://en.wikipedia.org/wiki/Collective_intelligence</span>](http://en.wikipedia.org/wiki/Collective_intelligence)  
            base: [<span class="s4">http://en.wikipedia.org/wiki/Collective_intelligence</span>](http://en.wikipedia.org/wiki/Collective_intelligence)  
            contentType: application/xhtml+xml  
            metadata: Content-Language=en Age=52614 Content-Length=29341 Last-Modified=Sat, 28 Jan 2012 17:27:22 GMT \_fst\_=33 nutch.segment.name=20120204004509 Connection=close X-Cache-Lookup=MISS from [<span class="s4">sq72.wikimedia.org:80</span>](http://sq72.wikimedia.org/) Server=Apache X-Cache=MISS from [<span class="s4">sq72.wikimedia.org</span>](http://sq72.wikimedia.org/) X-Content-Type-Options=nosniff Cache-Control=private, s-maxage=0, max-age=0, must-revalidate Vary=Accept-Encoding,Cookie Date=Fri, 03 Feb 2012 15:08:18 GMT Content-Encoding=gzip nutch.crawl.score=1.0 Content-Type=text/html; charset=UTF-8  
            Content:  
            &lt;!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "[<span class="s4">http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd</span>](http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd)"&gt;  
            &lt;html lang="en" dir="ltr" class="client-nojs" xmlns="[<span class="s4">http://www.w3.org/1999/xhtml</span>](http://www.w3.org/1999/xhtml)"&gt;  
            &lt;head&gt;  
            &lt;title&gt;Collective intelligence - Wikipedia, the free encyclopedia&lt;/title&gt;  
            &lt;meta ….\*\* \*\*



**References:**

- http://wiki.apache.org/nutch/NutchTutorial
- http://en.wikipedia.org/wiki/Nutch

### Now, your turn!

Thanks for reading this far. Here are some things you can do next:

- Found a typo? [Edit this post](https://github.com/amejiarosario/amejiarosario.github.io/edit/source/source/_posts/2012-02-04-get-started-with-the-web-crawler-apache-nutch-1-x.md).
- Got questions? [comment](#comments-section) below.
- Was it useful? Show your support and share it.

<a href="/adding-subversion-svn-properties-to-your-code/" class="article-nav-newer"><strong><em></em> newer</strong></a>

Adding Subversion (SVN) Properties to your code

<a href="/ssh-login-without-password/" class="article-nav-older"><strong>older <em></em></strong></a>

SSH login without password

Subscribe & stay up to date!



[<span id="back-to-top" title="Go back to the top of this page"> Top </span>](#) <a href="#" class="p-x-3" title="Improve this post"><em></em> Edit this post</a>

### Contents

1.  <a href="#Motivation" class="toc-link"><span class="toc-number">1.</span> <span class="toc-text">Motivation</span></a>
    1.  <a href="#Basics-about-Nutch" class="toc-link"><span class="toc-number">1.1.</span> <span class="toc-text">Basics about Nutch</span></a>
    2.  <a href="#Nutch-and-Hadoop" class="toc-link"><span class="toc-number">1.2.</span> <span class="toc-text">Nutch and Hadoop</span></a>
2.  <a href="#Getting-hands-dirt-with-Nutch" class="toc-link"><span class="toc-number">2.</span> <span class="toc-text">Getting hands dirt with Nutch</span></a>
    1.  <a href="#Setup-Nutch-from-binary-distribution" class="toc-link"><span class="toc-number">2.1.</span> <span class="toc-text">Setup Nutch from binary distribution</span></a>
    2.  <a href="#Verify-your-Nutch-installation" class="toc-link"><span class="toc-number">2.2.</span> <span class="toc-text">Verify your Nutch installation</span></a>
