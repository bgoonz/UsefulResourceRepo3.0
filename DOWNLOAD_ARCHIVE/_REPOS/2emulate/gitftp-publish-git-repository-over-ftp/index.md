<a href="/categories/coding/" class="category-link">Coding</a>

# git+ftp: Publish Git repository over FTP

<span title="Last time this post was updated"> Last updated November 9th 2011 </span> <span class="m-x-2" title="Pageviews"> 2.8k </span> <span class="m-x-2" title="Click to go to the comments section"> [ <span class="disqus-comment-count" data-disqus-url="https://master--bgoonz-blog.netlify.app/gitftp-publish-git-repository-over-ftp/">0</span>](#disqus_thread) </span>

- <a href="/tags/troubleshooting/" class="tag-list-link">troubleshooting</a><span class="tag-list-count">5</span>

I have been working with websites for a while and also with different web hosts. The default way to upload content is through FTP but it takes a lot of time because upload the entire site each time. Some web hosts  have ssh and git, which is great for deployement because you can keep track of the versions and also upload only the files that changes.

<span id="more"></span>



In order to use git for local development and ftp (for hosting that doesn't support git/ssh) there are some options:



<https://github.com/resmo/git-ftp> - Git powered FTP client written as shell script.

<https://github.com/ezyang/git-ftp> - A quick and efficient way of pushing changed files to a website via FTP using python.



I have use ezyang/git-ftp to deploy my drupal websites with good results.



1. Install 'git-python' first from <http://gitorious.org/git-python> -or- using \`easy_install gitpython\`

2. git clone <https://github.com/ezyang/git-ftp.git>

3. You can create an alias for easy access in \`~/.bash_profile\` such as \`alias git-ftp="python ~/git-ftp/git-ftp.py "\`

4. Just run the command \`python ~/git-ftp/git-ftp.py \` where is your git repository that you want to upload. I will prompt all the ftp details and also will create the config file for you.



You might want to setup files to ignore. If you are using drupal you should create a .gitignore file with a content similar to this:



    .DS_Store*


    Ignore configuration files that may contain sensitive information.sites//settings.php
    Ignore paths that contain user-generated content.sites/*/files
    sites/*/private



### Now, your turn!

Thanks for reading this far. Here are some things you can do next:

- Found a typo? [Edit this post](https://github.com/amejiarosario/amejiarosario.github.io/edit/source/source/_posts/2011-11-09-gitftp-publish-git-repository-over-ftp.md).
- Got questions? [comment](#comments-section) below.
- Was it useful? Show your support and share it.

<a href="/regular-expressions-in-c-and-java-csv-example/" class="article-nav-newer"><strong><em></em> newer</strong></a>

Regular Expressions in C\# and Java - CSV Example

<a href="/how-to-execute-sql-statements-on-ms-access/" class="article-nav-older"><strong>older <em></em></strong></a>

How to execute SQL statements on MS Access?

Subscribe & stay up to date!



[<span id="back-to-top" title="Go back to the top of this page"> Top </span>](#) <a href="#" class="p-x-3" title="Improve this post"><em></em> Edit this post</a>
