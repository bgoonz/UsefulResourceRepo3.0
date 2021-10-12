<a href="../../index.html" class="header-link"><img src="../../images/logos/wordmark.svg" alt="A Beautiful Site" class="wordmark" /></a> <a href="../../index.html" class="nav-item">Home</a> <a href="../../tags/index.html" class="nav-item">Tags</a> <a href="../index.html" class="nav-item">Archive</a> <a href="../../about/index.html" class="nav-item">About</a>

------------------------------------------------------------------------

Using JavaScript to prevent comment spam
========================================

May 05, 2007 • 3 min read

![A drawing of a cartoon man pointing upwards](../../images/artwork/pointer.gif)

Heads up! This post was written in 2007, so it may contain information that is no longer accurate. I keep posts like this around for historical purposes and to prevent link rot, so please keep this in mind as you're reading.

— Cory

Comment spam (also known as 'link spam', 'blog spam', and 'wikispam') occurs when people or spam bots post comments on someones blog, guestbook, or wiki for the sole purpose of boosting traffic and promoting better search engine rankings for their site. Like email spam, it can be particularly annoying and troublesome to deal with.

Common Solutions <a href="#common-solutions" class="direct-link">#</a>
----------------------------------------------------------------------

Many companies and organizations have put forth efforts to prevent comment spam. The well-known search engine [Google](http://google.com/), who owns the popular blog site [Blogger](http://blogger.com/), [announced back in 2005](http://googleblog.blogspot.com/2005/01/preventing-comment-spam.html) that it would no longer index anchor tags with the `rel="nofollow"` attribute in them. Web developers were encouraged to make their software automatically add this attribute to all user-contributed hyperlinks. Although this method will discourage a lot of spammers from wasting their time, it doesn't actually prevent them from posting spam comments.

Other efforts to combat comment spam focus on the fact that most spammers use automated scripts to submit their messages. These scripts work very much like traditional spam bots but, rather than harvesting email addresses, they target comment forms. Once spammers have a list of comment forms and know the fields that each one asks for, they can use programs like [curl](http://curl.haxx.se/) to forge comment submissions. This is an effective way to spam many blogs in a short period of time, so it's used quite commonly.

A reasonably good method of preventing this type of spam is called [CAPTCHA](http://www.captcha.net/). CAPTCHA typically displays an image of a word or phrase with obscured lettering that OCR scanners can't read. This means that, to successfully submit a comment, the user has to provide the correct response to the CAPTCHA test. Since a human is typically required to pass the test, spam bots can't post bogus comments to sites that use this technology. Unfortunately, this method requires users to take additional steps in order to post comments.

Of course, you could require that all comments be approved before they are posted, but that requires a lot of extra time and effort, especially for busy sites.

A Better Method? <a href="#a-better-method%3F" class="direct-link">#</a>
------------------------------------------------------------------------

I've decided to share a method that I've been using on [my personal site](http://laviska.com/) for a few years now. I used to get lots of guestbook and comment spam on a daily basis when my forms were left wide open. Since I've applied this technique, I haven't recieved any comment spam at all. That's right, *not one*. Of course, once I post this there will be nothing stopping spammers from tweaking their bots to work around this solution. At least, for now, it works extremely well.

### How it works <a href="#how-it-works" class="direct-link">#</a>

It's really quite simple. You start with a basic comment form:

    <form id="comment-form" action="add-comment.php" method="post">
      [other input fields here]
      <input type="submit" value="Post Comment" />
    </form>

Now, to prevent comment spammers, we make a few basic adjustments:

    <form id="comment-form" action="NO-BLOG-SPAM.PHP" method="post">
      [other input fields here]
      <input type="button" value="Post Comment" onclick="submitCommentForm();" />
    </form>

Notice I changed the form `action` to `NO-BLOG-SPAM.PHP`. This could be anything, really, as long as it's not a valid page. Next, I changed the submit button to a regular button and added a JavaScript `onclick` event. I'll show you the `submitCommentForm()` function in a minute. First, I want to explain my reasoning for doing all this.

It makes sense to me to have a bogus `action` so that, when a spam bot indexes the form information, it is indexing a submission page that doesn't exist. If the spammer was trying to use curl to submit the comment, they would receive a 'Page Does Not Exist' error.

It also makes sense to me to change the submit button to a regular button. If the spam bot is trying to submit the form from the within the page, it won't know which field triggers the submission. In fact, it would have to be smart enough to follow the JavaScript events for every form element that has one (which, in our case, is only one).

Now, here's the `submitCommentForm()` function. Note that I am including this function from a separate file, which means the spam bot would not only have to be able to follow the JavaScript, but also support including scripts from other parts of the page.

    function submitCommentForm() {
      // Change the form action to the real submission page
      document.getElementById('comment-form').action = "add-comment.php";

      // Submit the form
      document.getElementById('comment-form').submit();
    }

As you can see, the when the user clicks on the button labeled 'Post Comment', the `submitCommentForm()` function is triggered. This changes the form `action` to the real submission page, allowing the user's submission to post. Of course, this still won't prevent a real human from submitting comment spam, but humans aren't usually into wasting countless hours of their time typing in comment spam. As I stated before, this method has prevented automated comment spam on my personal site for well over two years.

### Pros <a href="#pros" class="direct-link">#</a>

-   A lot less comment spam — possibly none
-   Users aren't required to take any extra steps in order to post a comment

### Cons <a href="#cons" class="direct-link">#</a>

-   Requires JavaScript, otherwise users won't be able to post comments

<a href="../../tags/development/index.html" class="post-tag">development</a> <a href="../../tags/javascript/index.html" class="post-tag">javascript</a>

------------------------------------------------------------------------

<img src="http://0.gravatar.com/avatar/bf1b3b95fd5b096a3592247c29667b33?s=512" alt="Photo of Cory" class="avatar avatar-small" />

Written by [Cory LaViska](../../index-4.html), a software engineer and UX architect responsible for [Shoelace.style](https://shoelace.style/), [Surreal CMS](https://www.surrealcms.com/), and other [open source things](https://github.com/claviska).

You can follow Cory on [Twitter](https://twitter.com/claviska) and [GitHub](https://github.com/claviska).

------------------------------------------------------------------------

<a href="../password-protection-using-htaccess-and-htpasswd/index.html" class="post-nav-previous"><span class="small">Previous post</span> Password protection using .htaccess and .htpasswd</a> <a href="../what-are-favicons/index.html" class="post-nav-next"><span class="small">Up next</span> What are favicons?</a>
