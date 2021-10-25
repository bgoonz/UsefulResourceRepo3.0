<a href="/categories/coding/" class="category-link">Coding</a>

# Adding Subversion (SVN) Properties to your code

<span title="Last time this post was updated"> Last updated February 11th 2012 </span> <span class="m-x-2" title="Pageviews"> 2.4k </span> <span class="m-x-2" title="Click to go to the comments section"> [ <span class="disqus-comment-count" data-disqus-url="https://master--bgoonz-blog.netlify.app/adding-subversion-svn-properties-to-your-code/">0</span>](#disqus_thread) </span>

When you are coding in a team enviroment it's good to have the subversion properties in your files, that way any other developer can see quickly who made the last changes and when.

You can add the following lines at the bottom of your code:

<span id="more"></span>

//-----------------------------------------------------------------------------

//  REVISION HISTORY

//  $LastChangedDate: $

//  $Revision: $

//  $LastChangedBy: $

//  $Id: $

//-----------------------------------------------------------------------------



And when you perform your svn commit will be automatically populated something like this:

//-----------------------------------------------------------------------------

//  REVISION HISTORY

//  $LastChangedDate: 2012-02-11 18:24:39 -0500 (Sat, 11 Feb 2012) $

//  $Revision: 61 $

//  $LastChangedBy: adriansky $

//  $Id: Heap.java 61 2012-02-11 23:24:39Z adriansky $

//-----------------------------------------------------------------------------



Also you need to set the SVN properties for that file. The Properties that you need are the following:

- svn:eol-style  ---&gt; LF
- svn:keywords ---&gt; LastChangedDate Revision LastChangedBy Id

If you are using Eclipse you can edit it following this steps:

1.  right click file you want to add svn properties
2.  Menu team &gt; set properties (image below)
3.  Select the Property name from the combobox (image below)
4.  Add the text property in the text box (image below)
5.  You can also use files to avoid all the typing every time. right click and 'save as...' to &lt;[svn-keywords](http://adrianmejiarosario.com/sites/default/files/svn-keywords.txt)&gt; and &lt;[svn-eol-property](http://adrianmejiarosario.com/sites/default/files/svn-eol-style.txt)&gt;.
6.  Commit and you are all set.

Eclipse Menu to add svn properties

Adding SVN properties typing

Adding SVN property from file

### Now, your turn!

Thanks for reading this far. Here are some things you can do next:

- Found a typo? [Edit this post](https://github.com/amejiarosario/amejiarosario.github.io/edit/source/source/_posts/2012-02-11-adding-subversion-svn-properties-to-your-code.md).
- Got questions? [comment](#comments-section) below.
- Was it useful? Show your support and share it.

<a href="/spring-mvc-3-plus-ajax-getjson-and-solving-406-not-accepted/" class="article-nav-newer"><strong><em></em> newer</strong></a>

Spring MVC 3 + AJAX (getJSON) and solving 406 Not Accepted

<a href="/get-started-with-the-web-crawler-apache-nutch-1-x/" class="article-nav-older"><strong>older <em></em></strong></a>

Get Started with the web crawler Apache Nutch 1.x

Subscribe & stay up to date!



[<span id="back-to-top" title="Go back to the top of this page"> Top </span>](#) <a href="#" class="p-x-3" title="Improve this post"><em></em> Edit this post</a>
