<a href="/categories/coding/" class="category-link">Coding</a>

# How to execute SQL statements on MS Access?

<span title="Last time this post was updated"> Last updated November 9th 2011 </span> <span class="m-x-2" title="Pageviews"> 4.0k </span> <span class="m-x-2" title="Click to go to the comments section"> [ <span class="disqus-comment-count" data-disqus-url="https://master--bgoonz-blog.netlify.app/how-to-execute-sql-statements-on-ms-access/">0</span>](#disqus_thread) </span>

- <a href="/tags/troubleshooting/" class="tag-list-link">troubleshooting</a><span class="tag-list-count">5</span>

Sometimes is quicker to use SQL statements than create tables using the MS Access Visual Designer. For instance, if you already have the SQL code from other databases this could be useful.

<span id="more"></span>

Here are the steps of how to create a new table programmatically in Access (2007):

1.  Open/create your database on MS Access
2.  Menu: ‘Databases Tools’ &gt; ‘Visual Basic’ (this will open the visual basic editor
3.  in the Visual Basic Editor, Menu: Run
4.  Insert the name of your macro and click ‘create’ button
5.  Insert a code similar to the shown below. Replace the path in ‘OpenDatabase’ with your database path; and fill ‘dbs.Execute’ with your own SQL statements

Sub createdb() Dim dbs As Database

    ' Modify this line to include the path to Northwind
    ' on your computer.
    Set dbs = OpenDatabase("C:\\amr\\projects\\sites\\files\\tf_pledge_reminder_email.accdb")

    ' Create a table with two text fields.
    dbs.Execute "create table RIT_TF_PLG_REM_EMAIL_TEST2 (   pref_mail_name  VARCHAR(60), pd_to_date      NUMBER,   this_payment    NUMBER )"

    dbs.Close

End Sub

1.  Menu: Run
2.  You are all set.

If you have any questions you can contact me or write a comment

### Now, your turn!

Thanks for reading this far. Here are some things you can do next:

- Found a typo? [Edit this post](https://github.com/amejiarosario/amejiarosario.github.io/edit/source/source/_posts/2011-11-09-how-to-execute-sql-statements-on-ms-access.md).
- Got questions? [comment](#comments-section) below.
- Was it useful? Show your support and share it.

<a href="/gitftp-publish-git-repository-over-ftp/" class="article-nav-newer"><strong><em></em> newer</strong></a>

git+ftp: Publish Git repository over FTP

<a href="/how-to-setup-drupal-wysiwyg-and-images-uploading/" class="article-nav-older"><strong>older <em></em></strong></a>

How to setup Drupal WYSIWYG and Images uploading?

Subscribe & stay up to date!



[<span id="back-to-top" title="Go back to the top of this page"> Top </span>](#) <a href="#" class="p-x-3" title="Improve this post"><em></em> Edit this post</a>
