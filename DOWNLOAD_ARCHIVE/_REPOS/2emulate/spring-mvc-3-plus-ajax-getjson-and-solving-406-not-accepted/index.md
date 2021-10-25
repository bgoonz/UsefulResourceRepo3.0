<a href="/categories/coding/" class="category-link">Coding</a> &gt; <a href="/categories/coding/web-development/" class="category-link">Web Development</a>

# Spring MVC 3 + AJAX (getJSON) and solving 406 Not Accepted

<span title="Last time this post was updated"> Last updated April 27th 2012 </span> <span class="m-x-2" title="Pageviews"> 18.7k </span> <span class="m-x-2" title="Click to go to the comments section"> [ <span class="disqus-comment-count" data-disqus-url="https://master--bgoonz-blog.netlify.app/spring-mvc-3-plus-ajax-getjson-and-solving-406-not-accepted/">0</span>](#disqus_thread) </span>

- <a href="/tags/java/" class="tag-list-link">java</a><span class="tag-list-count">1</span>
- <a href="/tags/spring-mvc/" class="tag-list-link">spring mvc</a><span class="tag-list-count">1</span>

I wanted to add AJAX to Spring MVC application. So, I did what most us do, go through the documentation or blog of the Spring Source. But, after playing around I didn't get it to work properly so here are some details that might save you some time.

<span id="more"></span>

After I follow the instructions in [AJAX in Spring 3.0](http://blog.springsource.org/2010/01/25/ajax-simplifications-in-spring-3-0/%20) I got some error "406 Not Accepted", so let's explain how to make it work:

## <a href="#Server-Side" class="headerlink" title="Server Side"></a>Server Side

First you need to setup the actions/methods that the ajax client will call and provide that data in a request. In the server side we are going to use Spring MVC and reply using a JSON format.

1. You need the annotation **&lt;mvc:annotation-driven /&gt;** in your spring.xml or servelet-web-context.xml
2. Then, you need to create your controller action that will reply to the AJAX invocation. Let's see the following example. E.g. ProductController.java

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5</code></pre></td><td><pre><code>@RequestMapping (value=&quot;/itemdescription&quot;, method=RequestMethod.GET, headers=&quot;Accept=application/json&quot;)
public @ResponseBody Product getItemDescription(@RequestParam String id){
  // code…
  return yourProduct;
}</code></pre></td></tr></tbody></table>

There are a couple of things to point out here. Notice the return @ResponseBody Product type. So, you need to create create a POJO (Plain java class with the data that you want to send along with it's getters and setters). E.g. Product.java.

Also, notice the @ResponseBody annotation. This annotation allow you to translate the Product object into a JSON representation. But, this is not magic! and you need a couple of JARs to make it work (additionally to the annotation metined in step (1):

1.  http://mvnrepository.com/artifact/org.codehaus.jackson/jackson-core-asl
2.  http://mvnrepository.com/artifact/org.codehaus.jackson/jackson-mapper-asl

Use maven or download and place this JARs in the lib manually.

## <a href="#Client-Side" class="headerlink" title="Client Side"></a>Client Side

On the client side, I'm using jQuery and the code looks like this:

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20</code></pre></td><td><pre><code>var jqxhr = $.getJSON(&quot;/&lt;your-servlet-name&gt;/itemdescription?id=&quot; + itemId, function(result) {
    //res=jQuery.stringify(result);

    if (result != null) {
      $.each(result, function(key, value) {
        if (key === &quot;descr&quot;) {
          descr.val(value);
          userdescr.val(value);
        }
      });
    } else {
      descr.val(&quot;&quot;);
      userdescr.val(&quot;&quot;);
    }

})
// .success(function() { console.log(&quot;2nd function second success&quot;); })
.error(function(XMLHttpRequest, textStatus, errorThrown) {
console.log(&quot;error &quot; + textStatus + &quot;: &quot; + errorThrown);
})
// .complete(function() { console.log(&quot;complete&quot;); });</code></pre></td></tr></tbody></table>

There are some function there that are useful for debugging like printing out errors to the console and complete function. Notice also that $.getJSON is expenting the reponse in of a appplication/json type. So be sure that you have the "Accept=application/json" in your controller on the server side.

Finally you can customize the javascript fragment shown above and place it in your webpage (JSP, HTML,...) in a ready document. (Also, It was also useful for me to add a delay after the document ready function because otherwise it conflicted with dojo framework apply to the same component. But remove the timeout if you want to)

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7
8
9
10
11</code></pre></td><td><pre><code>$(document).ready(function() {
  console.log(&quot;document.ready&quot;);
  setTimeout(function() {
    $(_itemId).keyup(function() {
      checkItemId($(_itemId).val(), $(_descr), $(_userdescr));
    });
    $(_itemId).blur(function() {
      checkItemId($(_itemId).val(), $(_descr), $(_userdescr));
    });
  }, 100);
});</code></pre></td></tr></tbody></table>



That's all you need.

## <a href="#Troubleshooting" class="headerlink" title="Troubleshooting"></a>Troubleshooting

As mentioned before the spring mvc blog explain more in details each of the steps but lack some minor details that are key to make it work. I was getting "406 Not Accepted" because I didn't have the jackson jars that the @ResponseBody needs to convert java objects to JSON. And also you need to add the Accept Request header in the controller.

Using Firebug in Firefox is very tab Net &gt; XHR you can see all your ajax request and reponses. Very useful for debugging. Hope this save you some time and frustration. Any question or suggestion fee free to comment below or contact me.

### Now, your turn!

Thanks for reading this far. Here are some things you can do next:

- Found a typo? [Edit this post](https://github.com/amejiarosario/amejiarosario.github.io/edit/source/source/_posts/2012-04-27-spring-mvc-3-plus-ajax-getjson-and-solving-406-not-accepted.markdown).
- Got questions? [comment](#comments-section) below.
- Was it useful? Show your support and share it.

<a href="/blog-migration-explained-drupal-7-to-jekyll/" class="article-nav-newer"><strong><em></em> newer</strong></a>

Blog migration explained: Drupal 7 to Jekyll

<a href="/adding-subversion-svn-properties-to-your-code/" class="article-nav-older"><strong>older <em></em></strong></a>

Adding Subversion (SVN) Properties to your code

Subscribe & stay up to date!



[<span id="back-to-top" title="Go back to the top of this page"> Top </span>](#) <a href="#" class="p-x-3" title="Improve this post"><em></em> Edit this post</a>

### Contents

1.  <a href="#Server-Side" class="toc-link"><span class="toc-number">1.</span> <span class="toc-text">Server Side</span></a>
2.  <a href="#Client-Side" class="toc-link"><span class="toc-number">2.</span> <span class="toc-text">Client Side</span></a>
3.  <a href="#Troubleshooting" class="toc-link"><span class="toc-number">3.</span> <span class="toc-text">Troubleshooting</span></a>
