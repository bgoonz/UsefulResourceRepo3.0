<a href="../../index.html" class="header-link"><img src="../../images/logos/wordmark.svg" alt="A Beautiful Site" class="wordmark" /></a> <a href="../../index.html" class="nav-item">Home</a> <a href="../../tags/index.html" class="nav-item">Tags</a> <a href="../index.html" class="nav-item">Archive</a> <a href="../../about/index.html" class="nav-item">About</a>

---

# Password protection using .htaccess and .htpasswd

April 29, 2007 • 2 min read

![A drawing of a cartoon man pointing upwards](../../images/artwork/pointer.gif)

Heads up! This post was written in 2007, so it may contain information that is no longer accurate. I keep posts like this around for historical purposes and to prevent link rot, so please keep this in mind as you're reading.

— Cory

The simplest way I know to password protect files and directories using Apache's `.htaccess` and `.htpasswd` files.

## .htpasswd <a href="#.htpasswd" class="direct-link">#</a>

Create a text file with the following text:

    username:password

The usernames and passwords are stored in this file, one per line, separated by a colon. To allow multiple users:

    firstUser:password
    secondUser:password
    thirdUser:password
    ...

Now, for each password, you have to encrypt it using the `htpasswd` program (included with Apache). If you don't have this program, you should be able to find a [tool on the web](http://www.google.com/search?q=htpasswd+generator) that can do it. If you have Apache installed on your local system, I strongly recommend using it (You can also generate the entire file with this program, saving you the hassle of creating it in a text editor. Visit [Apache's website](http://httpd.apache.org/docs/2.0/programs/htpasswd.html) to learn how).

### Windows users <a href="#windows-users" class="direct-link">#</a>

1.  Open a command prompt (Start | Run | [command.com](http://command.com/))
2.  type `htpasswd -nb username password`, replacing username and password with the appropriate values

If you get an error message, you'll have to navigate to the directory containing htpasswd.exe (usually Apache\[version\]bin). If you're not sure where it is, do a search on your system to find it. Once you're in the right directory, try the command again.

### Linux users <a href="#linux-users" class="direct-link">#</a>

1.  Open a terminal
2.  type `htpasswd -nb username password`, replacing username and password with the appropriate values

The program will output something like: `username:password`. Copy this into your `.htpasswd` file and save it as `.htpasswd` (windows users will have to save it as `htpasswd.txt` and rename it to `.htpasswd` after uploading).

## .htaccess <a href="#.htaccess" class="direct-link">#</a>

Now you're ready to write your `.htaccess` file. This will let Apache know that you want it to use your `.htpasswd` file for authentication. You can protect one or more directories and/or files this way. To create your `.htaccess` file, create a new text file:

### Protecting an entire directory <a href="#protecting-an-entire-directory" class="direct-link">#</a>

    AuthUserFile /[path]/.htpasswd
    AuthType Basic
    AuthName "Login to access this folder"
    require valid-user

### Protecting a single file <a href="#protecting-a-single-file" class="direct-link">#</a>

    AuthUserFile /[path]/.htpasswd
    AuthType Basic
    AuthName "Login to access this file"
    Allow From All
    require valid-user

`AuthUserFile` is the server location of the `.htpasswd` file you have just created. You will need to adjust the path according to your directory structure so that it points to the correct location. **THIS IS VERY IMPORTANT!**

Save it as `.htaccess` (windows users will have to save it as `htaccess.txt` and rename it to `.htaccess` after uploading).

## Uploading <a href="#uploading" class="direct-link">#</a>

Upload both of the files to the appropriate directories on your webserver. Open a browser and navigate to the respective URL. You should get a login dialog that prompts you for a username and password.

## Troubleshooting <a href="#troubleshooting" class="direct-link">#</a>

If the authentication doesn't work, I would suggest:

1.  Checking the path you set after `AuthUserFile`in `.htaccess`
2.  Verifying that `AllowOverride None`is not present in the section of your Apache config file (usually called httpd.conf) that corresponds to the correct host. In some cases, you may have to specify `AllowOverride All` before it will work (even though this is default setting).
3.  If you used a web-based password encryptor instead of the `htpasswd` program, **try another one**. I found that many would return encrypted strings that Apache could not authenticate for some reason.

Good luck!

<a href="../../tags/apache/index.html" class="post-tag">apache</a> <a href="../../tags/development/index.html" class="post-tag">development</a>

---

<img src="http://0.gravatar.com/avatar/bf1b3b95fd5b096a3592247c29667b33?s=512" alt="Photo of Cory" class="avatar avatar-small" />

Written by [Cory LaViska](../../index-4.html), a software engineer and UX architect responsible for [Shoelace.style](https://shoelace.style/), [Surreal CMS](https://www.surrealcms.com/), and other [open source things](https://github.com/claviska).

You can follow Cory on [Twitter](https://twitter.com/bgooonz) and [GitHub](https://github.com/claviska).

---

<a href="../gif-jpeg-or-png-using-images-on-the-web/index.html" class="post-nav-previous"><span class="small">Previous post</span> GIF, JPEG or PNG? Using images on the web</a> <a href="../using-javascript-to-prevent-comment-spam/index.html" class="post-nav-next"><span class="small">Up next</span> Using JavaScript to prevent comment spam</a>
