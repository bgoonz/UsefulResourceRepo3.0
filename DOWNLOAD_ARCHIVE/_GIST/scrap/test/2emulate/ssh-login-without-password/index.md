<a href="/categories/coding/" class="category-link">Coding</a>

# SSH login without password

<span title="Last time this post was updated"> Last updated January 19th 2012 </span> <span class="m-x-2" title="Pageviews"> 0.7k </span> <span class="m-x-2" title="Click to go to the comments section"> [ <span class="disqus-comment-count" data-disqus-url="https://master--bgoonz-blog.netlify.app/ssh-login-without-password/">0</span>](#disqus_thread) </span>

- <a href="/tags/productivity/" class="tag-list-link">productivity</a><span class="tag-list-count">4</span>

If you want to login to a remote server using SSH and don't have to type the password again and again, here is a little trick

<span id="more"></span>

$ cat ~/.ssh/id_rsa.pub | ssh &lt;user&gt;@&lt;server.domain&gt; 'cat &gt;&gt; .ssh/authorized_keys'

After you run this and enter your password (for the last time), you can login to your server just typing:

$ ssh &lt;user&gt;@&lt;server.domain&gt;

You are all set.

### Now, your turn!

Thanks for reading this far. Here are some things you can do next:

- Found a typo? [Edit this post](https://github.com/amejiarosario/amejiarosario.github.io/edit/source/source/_posts/2012-01-19-ssh-login-without-password.md).
- Got questions? [comment](#comments-section) below.
- Was it useful? Show your support and share it.

<a href="/get-started-with-the-web-crawler-apache-nutch-1-x/" class="article-nav-newer"><strong><em></em> newer</strong></a>

Get Started with the web crawler Apache Nutch 1.x

<a href="/concentration-problems-procastination-youre-not-the-only-one/" class="article-nav-older"><strong>older <em></em></strong></a>

Concentration problems? Procastination? You're not the only one.

Subscribe & stay up to date!



[<span id="back-to-top" title="Go back to the top of this page"> Top </span>](#) <a href="#" class="p-x-3" title="Improve this post"><em></em> Edit this post</a>
