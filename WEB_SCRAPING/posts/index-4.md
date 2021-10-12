<a href="../index.html" class="header-link"><img src="../images/logos/wordmark.svg" alt="A Beautiful Site" class="wordmark" /></a> <a href="../index.html" class="nav-item">Home</a> <a href="../tags/index.html" class="nav-item">Tags</a> <a href="index.html" class="nav-item">Archive</a> <a href="../about/index.html" class="nav-item">About</a>

---

# Forcing file downloads in PHP

July 08, 2007 • 3 min read

![A drawing of a cartoon man pointing upwards](../images/artwork/pointer.gif)

Heads up! This post was written in 2007, so it may contain information that is no longer accurate. I keep posts like this around for historical purposes and to prevent link rot, so please keep this in mind as you're reading.

— Cory

I've seen a number of methods to force file downloads using the PHP `header()` function which, essentially, sends a raw HTTP header to the browser. Depending on your browser, some files won't be downloaded automatically. Instead, they will be handled by the browser itself or a corresponding plug-in. This is often an issue with PDF files, TXT files, CSV files, LOG files, multimedia files (MP3, WAV, MOV, MPEG, AVI, etc.), and, for many users, Microsoft Office files. As a developer, being able to force the download of any type of file is extremely useful.

## To force, or not to force? <a href="#to-force%2C-or-not-to-force%3F" class="direct-link">#</a>

The argument of whether or not it is considered "good practice" to force users to download files rather than letting their browser handle them as exepected does not really have a place in this article. In some cases it is appropriate while in others it is probably not.

It has been a convenience the many times I have used it to push CSV files out to end users who wouldn't know enough to copy and paste the data from the browser window into a file and then save it.

It is also handy for when you generate PDF files and want to push them to the user as a download rather than have it open up inside the browser window. Not only does this make the PDF easier for the user to download, it also provides consistency for the way downloads are handled regardless of what browser plug-ins the user has installed.

Again, in some cases it is appropriate to force a download, in others it is not.

## The force download script <a href="#the-force-download-script" class="direct-link">#</a>

After rigorous browser testing and code tweaking, here is the script I ended up with. All of the unnecessary stuff has been stripped out and it has been simplified as much as possible.

    $file = "filename.ext";

    // Quick check to verify that the file exists
    if (!file_exists($file)) die("File not found");

    // Force the download
    header("Content-Disposition: attachment; filename="" . basename($file) . """);
    header("Content-Length: " . filesize($file));
    header("Content-Type: application/octet-stream;");
    readfile($file);

### Using the script <a href="#using-the-script" class="direct-link">#</a>

Although you can implement this script practically anywhere you want, it is easiest to copy the code into a file named something like `force_download.php` and pass an identifier via query string, POST form data, or session variable. Users who are directed to the script will be prompted to download the appropriate file regardless of their browser and plug-in settings.

The PHP `readfile()` function reads files verbatim, including PHP files. This opens up a major security hole if you are passing the actual filename using GET or POST form data (or anything else that the user can spoof). A curious user could easily gain access to sensitive database connection information or other system data by entering something like `?file=../includes/db_connection.php`. You should always use some kind of identifier to prevent unauthorized access to sensitive information.

### Compatibility <a href="#compatibility" class="direct-link">#</a>

This script has been tested to work in IE6/7, Firefox 2, Opera 9, and Safari 3.

## Browser issues <a href="#browser-issues" class="direct-link">#</a>

### Safari & filenames <a href="#safari-%26-filenames" class="direct-link">#</a>

Surprisingly, all of the force-download scripts I researched online failed to work properly in Safari. The download occurred, but the resulting file was named after the script (i.e. `force_download.php`). If I renamed the downloaded file to its correct name, it would open just fine. This, however, was a terrible inconvenience. A bit of testing revealed the culprit. Most of the scripts had a line similar to this:

    header("Content-Disposition: attachment");

Others went a step further and had something like this:

    header("Content-Disposition: attachment; filename=" . basename($file));

But the correct way to specify the filename requires that you put double quotes around the filename attribute:

    header("Content-Disposition: attachment; filename="" . basename($file) . """);

By simply adding quotes around the filename, Safari correctly names the resulting download.

### Caching problems <a href="#caching-problems" class="direct-link">#</a>

Many of the scripts I found included header calls to tell the browser not to use a cached version of the file. Caching wasn't an issue with any of the browsers I tested, but if it becomes problematic, add the following lines to the script (above the call to `readfile()`).

    header("Cache-Control: no-cache, must-revalidate");
    header("Expires: Mon, 26 Jul 1997 05:00:00 GMT");

The above lines are from the [PHP Manual](http://php.net/header) and are expected to work in most browsers.

### Internet explorer & https <a href="#internet-explorer-%26-https" class="direct-link">#</a>

Certain versions of Internet Explorer will generate the following error message when downloads are forced using this technique:

Internet Explorer cannot download file from server. Internet Explorer was not able to open this Internet site. The requested site is either unavailable or cannot be found. Please try again later.

To get around this, whenever you are forcing a download over HTTPS append the following two lines of code to the force download script (above the call to `readfile()`).

    // IE fix (for HTTPS only) header('Cache-Control: private');
    header('Pragma: private');

You can find more information about this bug on the [MSDN Help & Support](http://support.microsoft.com/kb/316431) website.

<a href="../tags/development/index.html" class="post-tag">development</a> <a href="../tags/php/index.html" class="post-tag">php</a>

---

<img src="http://0.gravatar.com/avatar/bf1b3b95fd5b096a3592247c29667b33?s=512" alt="Photo of Cory" class="avatar avatar-small" />

Written by [Cory LaViska](../index-4.html), a software engineer and UX architect responsible for [Shoelace.style](https://shoelace.style/), [Surreal CMS](https://www.surrealcms.com/), and other [open source things](https://github.com/claviska).

You can follow Cory on [Twitter](https://twitter.com/claviska) and [GitHub](https://github.com/claviska).

---

<a href="web-standards-are-just-minor-details/index.html" class="post-nav-previous"><span class="small">Previous post</span> Web standards are just "minor details"</a> <a href="an-excellent-free-font-resource/index.html" class="post-nav-next"><span class="small">Up next</span> DaFont: an excellent free font resource</a>
