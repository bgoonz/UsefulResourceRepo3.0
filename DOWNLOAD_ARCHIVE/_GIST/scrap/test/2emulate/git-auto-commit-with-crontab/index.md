<a href="/categories/coding/" class="category-link">Coding</a>

# Git auto-commit with Crontab

<span title="Last time this post was updated"> Last updated August 15th 2011 </span> <span class="m-x-2" title="Pageviews"> 13.0k </span> <span class="m-x-2" title="Click to go to the comments section"> [ <span class="disqus-comment-count" data-disqus-url="https://master--bgoonz-blog.netlify.app/git-auto-commit-with-crontab/">0</span>](#disqus_thread) </span>

- <a href="/tags/git/" class="tag-list-link">git</a><span class="tag-list-count">1</span>

You might want to commit from a git repository from time to time for several purposes (backup, control version, continuous integration, etc). One way to accomplish that is using the CronTab (Cron is used to run periodic task in Unix-like systems).

<span id="more"></span>

Here is an example.

1.- Create an script. e.g. baskitup.sh with:

    # MySQL-dump: save a copy of the actual content in the database. (this is for a Drupal site, the backup is done using drupal's drush)
    php -c ~/www/php.ini  ~/drush/drush.php -r /home/adrimej0/www -u 1 sql-dump --result-file=latest.sql

    # Git: add and commit changes
    cd /home/adrimej0/www && /home/adrimej0/opt/bin/git commit -a -m "weekly crontab backup `date`"

    # send data to Git server
    cd /home/adrimej0/www && /home/adrimej0/opt/bin/git push origin master

2.- Set up the cron. In the shell write the following

    $ crontab -e

add the following command line for weekly auto-commits:

    MAILTO="youremail@domain.com"
    0 0 * * 0 /home/adrimej0/www/backitup.sh

Done. Now your (drupal) site will be backed up every week automatically (every Sunday at midnight).

### Now, your turn!

Thanks for reading this far. Here are some things you can do next:

- Found a typo? [Edit this post](https://github.com/amejiarosario/amejiarosario.github.io/edit/source/source/_posts/2011-08-15-git-auto-commit-with-crontab.md).
- Got questions? [comment](#comments-section) below.
- Was it useful? Show your support and share it.

<a href="/how-to-setup-drupal-wysiwyg-and-images-uploading/" class="article-nav-newer"><strong><em></em> newer</strong></a>

How to setup Drupal WYSIWYG and Images uploading?

<a href="/ruby-on-rails-architectural-design/" class="article-nav-older"><strong>older <em></em></strong></a>

Ruby on Rails Architectural Design

Subscribe & stay up to date!



[<span id="back-to-top" title="Go back to the top of this page"> Top </span>](#) <a href="#" class="p-x-3" title="Improve this post"><em></em> Edit this post</a>
