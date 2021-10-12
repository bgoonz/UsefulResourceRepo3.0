<a href="../../index.html" class="header-link"><img src="../../images/logos/wordmark.svg" alt="A Beautiful Site" class="wordmark" /></a> <a href="../../index.html" class="nav-item">Home</a> <a href="../../tags/index.html" class="nav-item">Tags</a> <a href="../index.html" class="nav-item">Archive</a> <a href="../../about/index.html" class="nav-item">About</a>

------------------------------------------------------------------------

Office 2007 files downloading as ZIP files in Internet Explorer
===============================================================

March 18, 2010 • 2 min read

![A drawing of a cartoon man pointing upwards](../../images/artwork/pointer.gif)

Heads up! This post was written in 2010, so it may contain information that is no longer accurate. I keep posts like this around for historical purposes and to prevent link rot, so please keep this in mind as you're reading.

— Cory

Today I learned that Microsoft Office 2007 files (you know, the new ones that end in DOCX, XLSX, and PPTX) don't always download properly in Internet Explorer. In fact, IE tends to see them as ZIP files and forces their extension to change to `.zip` when you select `download`. This is because IE is checking for the MIME type instead of blindly going by file extensions. Ironically, since it doesn't recognize the new Office 2007 files for what they are, IE renames their extensions to **.zip** upon downloading.

If you're wondering why the extensions get changed to `.zip`, it's because the new Office 2007 formats are nothing more than a series of XML documents zipped up with their own special file extensions. Java `.jar` files and Mozilla Firefox `.xpi` files do mostly the same thing, so this isn't a new concept, but it does seem to introduce a bit of a problem for Internet Explorer users.

There seem to be a number of "solutions" out there, but many of them involve telling the end user to change a setting in their browser or something like that — definitely not the best solution. Another option is to simply rename the affected file(s) to the appropriate extension(s) and open them up in Office as usual. Although this works, it's still not a great solution since most users won't know to do that.

The best solution I found was on a [forum](http://www.webdeveloper.com/forum/showthread.php?threadid=162526), where a user suggested setting the MIME types manually on the server. This is obviously a better solution, since end users get the expected behavior and are able to download files with the proper extension. For Apache servers, simply add the following to your config file or create an `.htaccess` file in the root directory of your website:

    AddType application/vnd.ms-word.document.macroEnabled.12 .docm
    AddType application/vnd.openxmlformats-officedocument.wordprocessingml.document docx
    AddType application/vnd.openxmlformats-officedocument.wordprocessingml.template dotx
    AddType application/vnd.ms-powerpoint.template.macroEnabled.12 potm
    AddType application/vnd.openxmlformats-officedocument.presentationml.template potx
    AddType application/vnd.ms-powerpoint.addin.macroEnabled.12 ppam
    AddType application/vnd.ms-powerpoint.slideshow.macroEnabled.12 ppsm
    AddType application/vnd.openxmlformats-officedocument.presentationml.slideshow ppsx
    AddType application/vnd.ms-powerpoint.presentation.macroEnabled.12 pptm
    AddType application/vnd.openxmlformats-officedocument.presentationml.presentation pptx
    AddType application/vnd.ms-excel.addin.macroEnabled.12 xlam
    AddType application/vnd.ms-excel.sheet.binary.macroEnabled.12 xlsb
    AddType application/vnd.ms-excel.sheet.macroEnabled.12 xlsm
    AddType application/vnd.openxmlformats-officedocument.spreadsheetml.sheet xlsx
    AddType application/vnd.ms-excel.template.macroEnabled.12 xltm
    AddType application/vnd.openxmlformats-officedocument.spreadsheetml.template xltx

Note that, if you're updating your main config file, you'll have to restart Apache before the changes will take affect. With `.htaccess` files you shouldn't need to restart the server.

Now your users will be able to download Office 2007 files from your server without any problems.  If you've discovered another method for solving this problem, please share it in the comments!

<a href="../../tags/ie/index.html" class="post-tag">ie</a> <a href="../../tags/apache/index.html" class="post-tag">apache</a> <a href="../../tags/tips/index.html" class="post-tag">tips</a>

------------------------------------------------------------------------

<img src="http://0.gravatar.com/avatar/bf1b3b95fd5b096a3592247c29667b33?s=512" alt="Photo of Cory" class="avatar avatar-small" />

Written by [Cory LaViska](../../index-4.html), a software engineer and UX architect responsible for [Shoelace.style](https://shoelace.style/), [Surreal CMS](https://www.surrealcms.com/), and other [open source things](https://github.com/claviska).

You can follow Cory on [Twitter](https://twitter.com/bgooonz) and [GitHub](https://github.com/claviska).

------------------------------------------------------------------------

<a href="../smoothly-scroll-to-an-element-without-a-jquery-plugin-2/index.html" class="post-nav-previous"><span class="small">Previous post</span> Smoothly scroll to an element without a jQuery plugin</a> <a href="../how-to-delete-a-tag-on-github/index.html" class="post-nav-next"><span class="small">Up next</span> How to delete a tag on GitHub</a>
