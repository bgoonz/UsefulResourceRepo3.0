<a href="/categories/coding/" class="category-link">Coding</a> &gt; <a href="/categories/coding/web-development/" class="category-link">Web Development</a> &gt; <a href="/categories/coding/web-development/backbone/" class="category-link">Backbone</a>

# Backbone.js for absolute beginners - getting started (part 4: Routers)

<span title="Last time this post was updated"> Last updated September 13th 2012 </span> <span class="m-x-2" title="Pageviews"> 71.6k </span> <span class="m-x-2" title="Click to go to the comments section"> [ <span class="disqus-comment-count" data-disqus-url="https://master--bgoonz-blog.netlify.app/backbone-js-for-absolute-beginners-getting-started-part-4/">0</span>](#disqus_thread) </span>

- <a href="/tags/backbonejs/" class="tag-list-link">backbonejs</a><span class="tag-list-count">4</span>
- <a href="/tags/todo-app/" class="tag-list-link">todo app</a><span class="tag-list-count">5</span>
- <a href="/tags/tutorial-backbonejs/" class="tag-list-link">tutorial_backbonejs</a><span class="tag-list-count">4</span>

![Backbone.js for absolute beginners - getting started (part 4: Routers)](/images/BackbonesforBeginners_large.png)

This tutorial is about BackboneJS Routes.

<span id="more"></span>

BackboneJS Tutorial series:

1.  [Backbone.js for Absolute Beginners - Getting started (Part 1: Intro)](/backbone-dot-js-for-absolute-beginners-getting-started/)
2.  [Backbone.js for absolute beginners - getting started (part 2: Models, Collections and Views)](/backbone-js-for-absolute-beginners-getting-started-part-2/)
3.  [Backbone.js for absolute beginners - getting started (part 3: CRUD)](/backbonejs-for-absolute-beginners-getting-started-part-3/)
4.  Backbone.js for absolute beginners - getting started (part 4: Routers) **👈 you are here**

## <a href="#Backbone-Router" class="headerlink" title="Backbone.Router"></a>Backbone.Router

You could build web application without using the routers. However, if you want to make reference to certain ‘state’ or location of the web application, you need a reference (link/URL) to it. This is where routers come to rescue.

Routing in most of JS application are achieved by hash-tags. E.g. If you take a look of Gmail URL you will see something like:

` https://mail.google.com/mail/u/0/#inbox/139c0d48e11d986b`

where the `#inbox/139c0d48e11d986b ` is the hash-tag which reference some email location.

In backbone, routes are hash maps that match URL patterns to functions. You can use parameter parts, such as `todos/:id`, or using splats `file/*path` you will match all the parameters from the splat on. For that reason, the splat parameter should be always the last matcher.

### <a href="#Initializing-the-Router" class="headerlink" title="Initializing the Router"></a>Initializing the Router

In our Todo app, we are going to use routers to filter between the tasks that are pending and the ones that have been completed. So, let’s initialize the routes this way:

Define Router[Full Code](https://raw.github.com/amejiarosario/Backbone-tutorial/327ac4fc4657e73fdf7157e230b1ed7cd1519667/backbone-tutorial.html)

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
12</code></pre></td><td><pre><code>app.Router = Backbone.Router.extend({
  routes: {
    &#39;*filter&#39; : &#39;setFilter&#39;
  },
  setFilter: function(params) {
    console.log(&#39;app.router.params = &#39; + params); // just for didactical purposes.
    window.filter = params.trim() || &#39;&#39;;
    app.todoList.trigger(&#39;reset&#39;);
  }
});
</code></pre></td></tr></tbody></table>

Now, you need to initialize it, adding this lines:

Initialize router[Full Code](https://raw.github.com/amejiarosario/Backbone-tutorial/327ac4fc4657e73fdf7157e230b1ed7cd1519667/backbone-tutorial.html)

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7
8
9</code></pre></td><td><pre><code>     //--------------
     // Initializers
     //--------------

- app.router = new app.Router();
- Backbone.history.start();
  app.appView = new app.AppView();
  </code></pre></td></tr></tbody></table>

You can test that you router is working just typing `#anything/that/you/want` and seeing the parameter in you browser’s console.

### <a href="#2-6-1-Processing-the-routes" class="headerlink" title="2.6.1 Processing the routes"></a>2.6.1 Processing the routes

Before rendering the list of items, you need to check the parameters to wether show only the pending ones, or the completed or show them all. As shown in the code snipet below.

Processing the routes in app.AppView[Full Code](https://raw.github.com/amejiarosario/Backbone-tutorial/327ac4fc4657e73fdf7157e230b1ed7cd1519667/backbone-tutorial.html)

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
20
21
22
23</code></pre></td><td><pre><code>@@ -164,7 +177,18 @@
       },
       addAll: function(){
         this.$(&#39;#todo-list&#39;).html(&#39;&#39;); // clean the todo list
-        app.todoList.each(this.addOne, this);
+        // filter todo item list
+        switch(window.filter){
+          case &#39;pending&#39;:
+            _.each(app.todoList.remaining(), this.addOne);
+            break;
+          case &#39;completed&#39;:
+            _.each(app.todoList.completed(), this.addOne);
+            break;
+          default:
+            app.todoList.each(this.addOne, this);
+            break;
+        }
       },
       newAttributes: function(){
         return {

</code></pre></td></tr></tbody></table>

If you try adding the words `#/pending` or `#/completed` at the end of the URL you’ll get an error!. That’s a good sign, it means the routes are working, but we haven’t implemented the `app.todoList.remaining()` and `app.todoList.completed()`. So, that’s next:

Defining completed and remaining functions in app.TodoList[Full Code](https://raw.github.com/amejiarosario/Backbone-tutorial/327ac4fc4657e73fdf7157e230b1ed7cd1519667/backbone-tutorial.html)

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
17</code></pre></td><td><pre><code>@@ -85,7 +90,15 @@
     //--------------
     app.TodoList = Backbone.Collection.extend({
       model: app.Todo,
-      localStorage: new Store(&quot;backbone-todo&quot;)
+      localStorage: new Store(&quot;backbone-todo&quot;),
+      completed: function() {
+        return this.filter(function( todo ) {
+          return todo.get(&#39;completed&#39;);
+        });
+      },
+      remaining: function() {
+        return this.without.apply( this, this.completed() );
+      }
     });
</code></pre></td></tr></tbody></table>

Now, if you try again adding the hash-tags it will work! But, it will be better if the user can have links to that instead of typing URLs. So, let’s add them.

Show routes' links[Full Code](https://raw.github.com/amejiarosario/Backbone-tutorial/327ac4fc4657e73fdf7157e230b1ed7cd1519667/backbone-tutorial.html)

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
15</code></pre></td><td><pre><code>@@ -32,6 +32,11 @@
     &lt;header id=&quot;header&quot;&gt;
       &lt;h1&gt;Todos&lt;/h1&gt;
       &lt;input id=&quot;new-todo&quot; placeholder=&quot;What needs to be done?&quot; autofocus&gt;
+      &lt;div&gt;
+        &lt;a href=&quot;#/&quot;&gt;show all&lt;/a&gt; |
+        &lt;a href=&quot;#/pending&quot;&gt;show pending&lt;/a&gt; |
+        &lt;a href=&quot;#/completed&quot;&gt;show completed&lt;/a&gt;
+      &lt;/div&gt;
     &lt;/header&gt;
     &lt;section id=&quot;main&quot;&gt;
       &lt;ul id=&quot;todo-list&quot;&gt;&lt;/ul&gt;

</code></pre></td></tr></tbody></table>

Well, that’s all! If completed these 4 parts tutorial you will be familiar with the main Backbone modules (Models, Collections, Views, Events, and Routes). To increase you knowledge you can follow the following resources:

- [Backbone’s Source code - it’s the ultimate source of true](https://github.com/documentcloud/backbone/blob/master/backbone.js)
- [Official documentation](http://backbonejs.org/?utm_source=adrianmejia.com)

## <a href="#What’s-next" class="headerlink" title="What’s next?"></a>What’s next?

Write a server API in NodeJS to apply the learned here:

- [Creating a RESTful API with NodeJS and MongoDB](/blog/2014/10/01/creating-a-restful-api-tutorial-with-nodejs-and-mongodb/)

Now, do a Todo app in AngularJS:

- [AngularJS tutorial for beginners with NodeJS ExpressJS and MongoDB](/blog/2014/09/28/angularjs-tutorial-for-beginners-with-nodejs-expressjs-and-mongodb/)

Hope it was helpful!

### Now, your turn!

Thanks for reading this far. Here are some things you can do next:

- Found a typo? [Edit this post](https://github.com/amejiarosario/amejiarosario.github.io/edit/source/source/_posts/2012-09-13-backbone-js-for-absolute-beginners-getting-started-part-4.markdown).
- Got questions? [comment](#comments-section) below.
- Was it useful? Show your support and share it.

<a href="/algorithms-for-dummies-part-1-sorting/" class="article-nav-newer"><strong><em></em> newer</strong></a>

Algorithms for dummies (Part 1): Big-O Notation and Sorting

<a href="/backbonejs-for-absolute-beginners-getting-started-part-3/" class="article-nav-older"><strong>older <em></em></strong></a>

Backbone.js for absolute beginners - getting started (part 3: CRUD)

Subscribe & stay up to date!



# tutorial backbonejs Series

[<img src="/images/Backbonesforbeginners_small.png" width="300" height="250" />](/backbone-dot-js-for-absolute-beginners-getting-started/)

### Backbone.js for Absolute Beginners - Getting started (Part 1: Intro)

[<img src="/images/Backbone_for_beginners_part2_small.png" width="300" height="250" />](/backbone-js-for-absolute-beginners-getting-started-part-2/)

### Backbone.js for absolute beginners - getting started (part 2: Models, Collections and Views)

[<img src="/images/Backbone_for_beginners_part3_small.png" width="300" height="250" />](/backbonejs-for-absolute-beginners-getting-started-part-3/)

### Backbone.js for absolute beginners - getting started (part 3: CRUD)

[<img src="/images/Backbone_for_beginners_part4_small.png" width="300" height="250" />](/backbone-js-for-absolute-beginners-getting-started-part-4/)

### Backbone.js for absolute beginners - getting started (part 4: Routers)

[<span id="back-to-top" title="Go back to the top of this page"> Top </span>](#) <a href="#" class="p-x-3" title="Improve this post"><em></em> Edit this post</a>

### Contents

1.  <a href="#Backbone-Router" class="toc-link"><span class="toc-number">1.</span> <span class="toc-text">Backbone.Router</span></a>
    1.  <a href="#Initializing-the-Router" class="toc-link"><span class="toc-number">1.1.</span> <span class="toc-text">Initializing the Router</span></a>
    2.  <a href="#2-6-1-Processing-the-routes" class="toc-link"><span class="toc-number">1.2.</span> <span class="toc-text">2.6.1 Processing the routes</span></a>
2.  <a href="#What%E2%80%99s-next" class="toc-link"><span class="toc-number">2.</span> <span class="toc-text">What’s next?</span></a>
