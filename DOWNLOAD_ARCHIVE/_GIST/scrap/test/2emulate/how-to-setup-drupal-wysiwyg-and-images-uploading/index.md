<a href="/categories/coding/" class="category-link">Coding</a>

# How to setup Drupal WYSIWYG and Images uploading?

<span title="Last time this post was updated"> Last updated November 9th 2011 </span> <span class="m-x-2" title="Pageviews"> 0.8k </span> <span class="m-x-2" title="Click to go to the comments section"> [ <span class="disqus-comment-count" data-disqus-url="https://master--bgoonz-blog.netlify.app/how-to-setup-drupal-wysiwyg-and-images-uploading/">0</span>](#disqus_thread) </span>

- <a href="/tags/troubleshooting/" class="tag-list-link">troubleshooting</a><span class="tag-list-count">5</span>

It have been a pain for me to upload images and deal with tons of WYSIWYG editors... After many trials in this post I recompiled my experiences and the best method that I have found so far. If you have any suggestion I'm willing to hear it, too.

<span id="more"></span>

**1. Install and enable the following modules:**



http://drupal.org/project/ckeditor (disable the WYSIWYG module if you have it install it)

http://drupal.org/project/imce -or- http://drupal.org/project/elfinder



\- optional -

http://drupal.org/project/ckeditor\_link



How to setup Drupal WYSIWYG and Images uploading?



It have been a pain for me to upload images and deal with tons of WYSIWYG editors... After many trials in this post I recompiled my experiences and the best method that I have found so far. If you have any suggestion I'm willing to hear it, too.





**1. Install and enable the following modules:**



http://drupal.org/project/ckeditor (disable the WYSIWYG module if you have it install it)

http://drupal.org/project/imce -or- http://drupal.org/project/elfinder



\- optional -

http://drupal.org/project/ckeditor\_link



**2. Setting up IMCE**

a. Install and enable the IMCE module at module administration page.

b. Create configuration profiles and assign them to user roles at /?q=/admin/config/media/imce **-or-** Menu: Configuration » Media » IMCE

c. Test it at /imce.



**3. Setup text formats.** You can create two new ones to be used by the ckeditor (basic and full):

a. Menu: Configuration » Content authoring » Text formats

b. Click "+ Add text format" and add two new formats "ckeditor-basic" and "ckeditor-full" with the "administrator" and "authenticated users" check boxes marked. Everything else could remain in their default values.

c. Back to Configuration » Content authoring, you can rearrange the order, the top most one will be the default.



**4. Setup CKEditor**

After you install the CKEditor module, download the latest version of ckeditor from http://ckeditor.com/download

a. "Create a new profile" link

b. Setup the name in the "Basic Setup" section and choose one of Input format that you created in step (3)

c. In "Editor Appearance" you can setup the toolbar load (basic, full, advance)

d. In "FILE BROWSER SETTINGS" select "IMCE" as the "File browser type"

e. Save and you can repeated this steps for full and basic.



**5. You are all set. **When you add new content your Textbox and imaging uploading should look like this:





### Now, your turn!

Thanks for reading this far. Here are some things you can do next:

- Found a typo? [Edit this post](https://github.com/amejiarosario/amejiarosario.github.io/edit/source/source/_posts/2011-11-09-how-to-setup-drupal-wysiwyg-and-images-uploading.md).
- Got questions? [comment](#comments-section) below.
- Was it useful? Show your support and share it.

<a href="/how-to-execute-sql-statements-on-ms-access/" class="article-nav-newer"><strong><em></em> newer</strong></a>

How to execute SQL statements on MS Access?

<a href="/git-auto-commit-with-crontab/" class="article-nav-older"><strong>older <em></em></strong></a>

Git auto-commit with Crontab

Subscribe & stay up to date!



[<span id="back-to-top" title="Go back to the top of this page"> Top </span>](#) <a href="#" class="p-x-3" title="Improve this post"><em></em> Edit this post</a>
