<a href="/categories/coding/" class="category-link">Coding</a>

# Blog migration explained: Drupal 7 to Jekyll

<span title="Last time this post was updated"> Last updated April 27th 2012 </span> <span class="m-x-2" title="Pageviews"> 0.5k </span> <span class="m-x-2" title="Click to go to the comments section"> [ <span class="disqus-comment-count" data-disqus-url="https://master--bgoonz-blog.netlify.app/blog-migration-explained-drupal-7-to-jekyll/">0</span>](#disqus_thread) </span>

- <a href="/tags/drupal/" class="tag-list-link">drupal</a><span class="tag-list-count">1</span>
- <a href="/tags/php/" class="tag-list-link">php</a><span class="tag-list-count">2</span>

This post is a guide on how to extract your blog posts information from Drupal 7 to other systems. And also automatically create a redirect files from the old blog to the new one. In this case, I migrated to Jerkyll/Octopress blog but from the data extracted in with my script you can migrate any other blog system. Hopefully, this will save you a lot of time if you need to do the same task. If you run into troubles go to last section of the post it has some suggestions.

<span id="more"></span>

## <a href="#Extract-data-from-Drupal-7-site" class="headerlink" title="Extract data from Drupal 7 site"></a>Extract data from Drupal 7 site

### <a href="#SQL-extraction" class="headerlink" title="SQL extraction"></a>SQL extraction

You need to extract the data from your Drupal 7, there are several ways. You can connect to your web host via ssh and generate SQL dump.

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1</code></pre></td><td><pre><code>mysqldump –uUSERNAME –pPASSWORD DATABASE &gt; FILENAME.sql</code></pre></td></tr></tbody></table>

(replace the UPPERCASE letters with your settings)

You can download the file \*.sql to your computer and run the following command to install to upload the data in your local database.

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1</code></pre></td><td><pre><code>mysql –uUSERNAME –pPASSWORD DATABASE &lt; FILENAME.sql</code></pre></td></tr></tbody></table>

If you have a access to you phpmyadmin in your host server you can download your sql dump file through that also. Other method is to use a local port fordwarding using SSH… anyways, get access to your database.

### <a href="#Run-the-script" class="headerlink" title="Run the script"></a>Run the script

The 2nd and final step is to run the script that does all the magic. Below I will explain how it works in case that you want to customize.

Replace the place holders with your actual values:

- OLD_DOMAIN
- NEW_DOMAIN
- ENV\[‘DRUPAL_DATABASE’\]
- ENV\[‘DB_USER’\]
- ENV\[‘DB_PASSWORD’\]

After you run it, it will generate 3 folders:

- \_post: has all your post in the Jekyll style (categories and tags and everything)
- \_draft: not published posts if any
- drupal_redirect: for each url of your posts it has a folder with a redirect index.php file to your new domain.

Copy each of this folder to their respective places. Copy the content to your drupal_redirect to the root of your old blog and that’s it. It will redirect all your all blog URLs to your new site.

### <a href="#Behind-the-scenes…" class="headerlink" title="Behind the scenes…"></a>Behind the scenes…

First, you need to extract the data from your Drupal site. I reversed engineer the database in order to extract the post, title, url alias (slug), tags, publish info, format and the last version of the post. The query that does all the magic is the following one:

Drupal 7 Query to extract all the post info

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
22</code></pre></td><td><pre><code>SELECT
n.nid,
n.title,
n.created,
n.changed,
b.body_value AS &#39;body&#39;,
b.body_summary,
b.body_format,
n.status,
l.alias AS &#39;slug&#39;,
GROUP_CONCAT( d.name SEPARATOR &#39;, &#39; ) AS &#39;tags&#39;

FROM url_alias l, node n
JOIN field_data_body b ON b.entity_id = n.nid
JOIN taxonomy_index t ON t.nid = n.nid
JOIN taxonomy_term_data d ON t.tid = d.tid

WHERE n.type = &#39;blog&#39;
AND b.revision_id = n.vid
AND l.source = CONCAT( &#39;node/&#39;, n.nid )

GROUP BY n.nid</code></pre></td></tr></tbody></table>

As might notice, it concatenates all the tags separated by comma and also finds the alias of the url if is called node. Also you can also find the url alias for other pages such as terms or taxonomies. But let’s keep it simple and get the posts urls.

Finally, the script will use the data from this query to generate the new posts files and also to create the redirect files.

As might notice, it concatenates all the tags separated by comma and also finds the alias of the url if is called node. Also you can also find the url alias for other pages such as terms or taxonomies. But let’s keep it simple and get the posts urls.

Finally, the script will use the data from this query to generate the new posts files and also to create the redirect files.

### <a href="#Troubleshooting" class="headerlink" title="Troubleshooting"></a>Troubleshooting

I had a hard time having the mysql gem work with seqel in my Mac OS X 10.7 (Lion) and ruby 1.9.2.

I got the following errors:

- Library not loaded: libmysqlclient.18.dylib (LoadError) Sequel::DatabaseConnectionError: Mysql::ClientError::ServerGoneError: The MySQL server has gone away mysql2 ruby
- “LoadError: require ‘mysql’ did not define Mysql::CLIENT_MULTI_RESULTS!”
- “You are probably using the pure ruby mysql.rb driver, which Sequel does not support. You need to install the C based adapter, and make sure that the mysql.so file is loaded instead of the mysql.rb file.”
- Sequel::AdapterNotFound: LoadError: require ‘mysql’ did not define Mysql::CLIENT_MULTI_RESULTS! You are probably using the pure ruby mysql.rb driver, which Sequel does not support. You need to install the C based adapter, and make sure that the mysql.so file is loaded instead of the mysql.rb file.
- And others…

#### <a href="#Solution" class="headerlink" title="Solution:"></a>Solution:

The mysql gem have been abandoned, so you also need mysql2 to work propery with sequel

bash Install MySQL gems

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3</code></pre></td><td><pre><code>$ sudo gem install sequel
$ sudo gem install mysql -- --with-mysql-config=/usr/local/mysql/bin/mysql_config
$ sudo gem install mysql2 -- --with-mysql-config=/usr/local/mysql/bin/mysql_config</code></pre></td></tr></tbody></table>

also you need to copy the following lib:

Reference needed libs

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1</code></pre></td><td><pre><code>$ sudo ln -s /usr/local/mysql/lib/libmysqlclient.18.dylib /usr/lib/libmysqlclient.18.dylib</code></pre></td></tr></tbody></table>

That should work.

Just if you are courious there is another gem called ruby-mysql, with which you can connect to mysql. But it doesn’t work with sequel

Alternative gem to connect to mysql (ruby-mysql)

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4</code></pre></td><td><pre><code>$ gem install ruby-mysql -- --with-mysql-config=/usr/local/mysql/bin/mysql_config
$ irb
&gt; require &#39;mysql&#39;
&gt; db = Mysql.real_connect(&quot;SERVER&quot;,&quot;USER&quot;,&quot;PASSWORD&quot;,&quot;DATABASE&quot;)</code></pre></td></tr></tbody></table>

### Now, your turn!

Thanks for reading this far. Here are some things you can do next:

- Found a typo? [Edit this post](https://github.com/amejiarosario/amejiarosario.github.io/edit/source/source/_posts/2012-04-27-blog-migration-explained-drupal-7-to-jekyll.markdown).
- Got questions? [comment](#comments-section) below.
- Was it useful? Show your support and share it.

<a href="/instagram-mobile-design-secrets-revealed/" class="article-nav-newer"><strong><em></em> newer</strong></a>

Instagram mobile design secrets revealed

<a href="/spring-mvc-3-plus-ajax-getjson-and-solving-406-not-accepted/" class="article-nav-older"><strong>older <em></em></strong></a>

Spring MVC 3 + AJAX (getJSON) and solving 406 Not Accepted

Subscribe & stay up to date!



[<span id="back-to-top" title="Go back to the top of this page"> Top </span>](#) <a href="#" class="p-x-3" title="Improve this post"><em></em> Edit this post</a>
