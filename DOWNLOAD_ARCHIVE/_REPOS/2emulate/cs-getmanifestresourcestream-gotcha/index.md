<a href="/categories/coding/" class="category-link">Coding</a>

# C\#'s GetManifestResourceStream Gotcha

<span title="Last time this post was updated"> Last updated July 18th 2011 </span> <span class="m-x-2" title="Pageviews"> 38.8k </span> <span class="m-x-2" title="Click to go to the comments section"> [ <span class="disqus-comment-count" data-disqus-url="https://master--bgoonz-blog.netlify.app/cs-getmanifestresourcestream-gotcha/">0</span>](#disqus_thread) </span>

- <a href="/tags/troubleshooting/" class="tag-list-link">troubleshooting</a><span class="tag-list-count">5</span>

In the .NET framework, the method Assembly -&gt; Get Manifest Resource Stream has a gotcha that could take some time to figure out why is not working as intented. I was working in a piece of code (show below), and the GetManifestResourceStream always returned NULL exception error. Even though the file was there...

<span id="more"></span>

C\# example:

    public XmlTextReader GetSyntaxModeFile(SyntaxMode syntaxMode)
    {
        Assembly assembly = typeof(SyntaxMode).Assembly;
        var stream = assembly.GetManifestResourceStream("ICSharpCode.TextEditor.Resources." + syntaxMode.FileName);
        if(stream == null)
            throw new Exception("The resource "+syntaxMode.FileName+" was not loaded properly.");
        return new XmlTextReader(stream);
    }

**Solution:**

The GetManifestResourceStream method will always returns NULL if the resource '**built action**' property is not set to '**embedded resource**'

After setting this property with all the needed files assembly.<span class="underline">**GetManifestResourceStream**</span> starts returning the corrent stream instead of NULL

### Now, your turn!

Thanks for reading this far. Here are some things you can do next:

- Found a typo? [Edit this post](https://github.com/amejiarosario/amejiarosario.github.io/edit/source/source/_posts/2011-07-18-cs-getmanifestresourcestream-gotcha.md).
- Got questions? [comment](#comments-section) below.
- Was it useful? Show your support and share it.

<a href="/php-dom-explained-and-exemplified/" class="article-nav-newer"><strong><em></em> newer</strong></a>

PHP DOM: explained and exemplified

<a href="/faster-windows-xp-removing-msmpeng-exe-and-other-programs/" class="article-nav-older"><strong>older <em></em></strong></a>

Faster Windows XP removing Msmpeng.Exe and other programs

Subscribe & stay up to date!



[<span id="back-to-top" title="Go back to the top of this page"> Top </span>](#) <a href="#" class="p-x-3" title="Improve this post"><em></em> Edit this post</a>
