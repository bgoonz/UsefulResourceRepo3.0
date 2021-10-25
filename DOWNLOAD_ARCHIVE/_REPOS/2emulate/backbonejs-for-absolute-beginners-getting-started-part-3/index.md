<a href="/categories/coding/" class="category-link">Coding</a> &gt; <a href="/categories/coding/web-development/" class="category-link">Web Development</a> &gt; <a href="/categories/coding/web-development/backbone/" class="category-link">Backbone</a>

# Backbone.js for absolute beginners - getting started (part 3: CRUD)

<span title="Last time this post was updated"> Last updated September 13th 2012 </span> <span class="m-x-2" title="Pageviews"> 96.3k </span> <span class="m-x-2" title="Click to go to the comments section"> [ <span class="disqus-comment-count" data-disqus-url="https://master--bgoonz-blog.netlify.app/backbonejs-for-absolute-beginners-getting-started-part-3/">0</span>](#disqus_thread) </span>

- <a href="/tags/backbonejs/" class="tag-list-link">backbonejs</a><span class="tag-list-count">4</span>
- <a href="/tags/tutorial-backbonejs/" class="tag-list-link">tutorial_backbonejs</a><span class="tag-list-count">4</span>

![Backbone.js for absolute beginners - getting started (part 3: CRUD)](/images/BackbonesforBeginners_large.png)

In tutorial we are going to continue learning about BackboneJS: CRUD.

<span id="more"></span>

BackboneJS Tutorial series:

1.  [Backbone.js for Absolute Beginners - Getting started (Part 1: Intro)](/backbone-dot-js-for-absolute-beginners-getting-started/)
2.  [Backbone.js for absolute beginners - getting started (part 2: Models, Collections and Views)](/backbone-js-for-absolute-beginners-getting-started-part-2/)
3.  Backbone.js for absolute beginners - getting started (part 3: CRUD) **👈 you are here**
4.  [Backbone.js for absolute beginners - getting started (part 4: Routers)](/backbone-js-for-absolute-beginners-getting-started-part-4/)

## <a href="#Todo-item-list-CRUD" class="headerlink" title="Todo item list CRUD"></a>Todo item list CRUD

There are a couple of features that we could improve. Let’s implement the CRUD (Create-Read-Update-Delete) for the item list.

### <a href="#C-reate" class="headerlink" title="C-reate"></a>C-reate

We are already can create item list from the console (2.3) and also from the UI (2.4.3). So, it’s done.

### <a href="#U-pdate" class="headerlink" title="U-pdate"></a>U-pdate

What if you make a mistake and want to change the text on some of your to-do list. Furthermore, you can notice that the checkboxes states are not persistent when you reload the pages. Let’s fix both problems.

1.- You want to respond to a double click event showing up a text box, where the user can change the text. First, let’s add the HTML in the `item-template` template below the label tag.

`<input class="edit" value="<%- title %>">`

2.- If you refresh, you will notice that there are both displaying at the same time. So, you can hide them properly with the following CSS.

CSS[Full Code](https://raw.github.com/amejiarosario/Backbone-tutorial/3840dc802d6f311528298639150a5f52364c1975/backbone-tutorial.html)

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
11</code></pre></td><td><pre><code>#todo-list input.edit {
  display: none; /* Hides input box*/
}
#todo-list .editing label {
  display: none; /* Hides label text when .editing*/
}
#todo-list .editing input.edit {
  display: inline; /* Shows input text box when .editing*/
}
</code></pre></td></tr></tbody></table>

3.- Then, we need to add the events to the TodoView class to respond to the changes.

Todo Model[Full Code](https://raw.github.com/amejiarosario/Backbone-tutorial/3840dc802d6f311528298639150a5f52364c1975/backbone-tutorial.html)

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
23
24
25
26
27
28
29
30
31
32
33
34
35
36</code></pre></td><td><pre><code>// renders individual todo items list (li)
app.TodoView = Backbone.View.extend({
  tagName: &#39;li&#39;,
  template: _.template($(&#39;#item-template&#39;).html()),
  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
    this.input = this.$(&#39;.edit&#39;);
    return this; // enable chained calls
  },
  initialize: function(){
    this.model.on(&#39;change&#39;, this.render, this);
  },
  events: {
    &#39;dblclick label&#39; : &#39;edit&#39;,
    &#39;keypress .edit&#39; : &#39;updateOnEnter&#39;,
    &#39;blur .edit&#39; : &#39;close&#39;
  },
  edit: function(){
    this.$el.addClass(&#39;editing&#39;);
    this.input.focus();
  },
  close: function(){
    var value = this.input.val().trim();
    if(value) {
      this.model.save({title: value});
    }
    this.$el.removeClass(&#39;editing&#39;);
  },
  updateOnEnter: function(e){
    if(e.which == 13){
      this.close();
    }
   }
});
</code></pre></td></tr></tbody></table>

You can find the [diff](https://github.com/amejiarosario/Backbone-tutorial/commit/3840dc802d6f311528298639150a5f52364c1975) that were added to implement the update feature.

[Here](https://github.com/amejiarosario/Backbone-tutorial/commit/19fa69e654ae5d370385675e4ffed615532b9934) are the changes to fix the update for the checkboxes.

### <a href="#D-elete" class="headerlink" title="D-elete"></a>D-elete

To be able to remove to-do items, we need to add a remove button in each item and listen to the click event on it, which will trigger the destroy function in the selected todo object.

1.- Add the HTML markup for the remove button.

Remove Button into item template[Full Code](https://raw.github.com/amejiarosario/Backbone-tutorial/1267e531ae3ef508eb32e5308c2cc965f02d1b45/backbone-tutorial.html)

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7
8
9</code></pre></td><td><pre><code>@@ -47,6 +47,7 @@
       &lt;input class=&quot;toggle&quot; type=&quot;checkbox&quot; &lt;%= completed ? &#39;checked&#39; : &#39;&#39; %&gt;&gt;
       &lt;label&gt;&lt;%- title %&gt;&lt;/label&gt;
       &lt;input class=&quot;edit&quot; value=&quot;&lt;%- title %&gt;&quot;&gt;
+      &lt;button class=&quot;destroy&quot;&gt;remove&lt;/button&gt;
     &lt;/div&gt;
   &lt;/script&gt;
</code></pre></td></tr></tbody></table>

2.- Listen for the click event in the button that you just created.

Add event listeners for the Remove Button in app.TodoView[Full Code](https://raw.github.com/amejiarosario/Backbone-tutorial/1267e531ae3ef508eb32e5308c2cc965f02d1b45/backbone-tutorial.html)

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
18</code></pre></td><td><pre><code>@@ -105,12 +106,14 @@
       },
       initialize: function(){
         this.model.on(&#39;change&#39;, this.render, this);
+        this.model.on(&#39;destroy&#39;, this.remove, this); // remove: Convenience Backbone&#39;
       },
       events: {
         &#39;dblclick label&#39; : &#39;edit&#39;,
         &#39;keypress .edit&#39; : &#39;updateOnEnter&#39;,
         &#39;blur .edit&#39; : &#39;close&#39;,
-        &#39;click .toggle&#39;: &#39;toggleCompleted&#39;
+        &#39;click .toggle&#39;: &#39;toggleCompleted&#39;,
+        &#39;click .destroy&#39;: &#39;destroy&#39;
       },
       edit: function(){
         this.$el.addClass(&#39;editing&#39;);
</code></pre></td></tr></tbody></table>

3.- Add the destroy method to the TodoView.

Add the destroy method to app.TodoView[Full Code](https://raw.github.com/amejiarosario/Backbone-tutorial/1267e531ae3ef508eb32e5308c2cc965f02d1b45/backbone-tutorial.html)

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
12</code></pre></td><td><pre><code>@@ -130,7 +133,10 @@
       },
       toggleCompleted: function(){
         this.model.toggle();
-      }
+      },
+      destroy: function(){
+        this.model.destroy();
+      }
     });
</code></pre></td></tr></tbody></table>

You can download the full working code so far in [here](https://raw.github.com/amejiarosario/Backbone-tutorial/1267e531ae3ef508eb32e5308c2cc965f02d1b45/backbone-tutorial.html) and you can visualize the changes needed to implement the delete feature in [here](https://github.com/amejiarosario/Backbone-tutorial/commit/1267e531ae3ef508eb32e5308c2cc965f02d1b45)

## <a href="#What’s-next" class="headerlink" title="What’s next?"></a>What’s next?

Continue with the [4th part](/backbone-js-for-absolute-beginners-getting-started-part-4/) and learn about Backbone’s Routes!

### Now, your turn!

Thanks for reading this far. Here are some things you can do next:

- Found a typo? [Edit this post](https://github.com/amejiarosario/amejiarosario.github.io/edit/source/source/_posts/2012-09-13-backbonejs-for-absolute-beginners-getting-started-part-3.markdown).
- Got questions? [comment](#comments-section) below.
- Was it useful? Show your support and share it.

<a href="/backbone-js-for-absolute-beginners-getting-started-part-4/" class="article-nav-newer"><strong><em></em> newer</strong></a>

Backbone.js for absolute beginners - getting started (part 4: Routers)

<a href="/backbone-js-for-absolute-beginners-getting-started-part-2/" class="article-nav-older"><strong>older <em></em></strong></a>

Backbone.js for absolute beginners - getting started (part 2: Models, Collections and Views)

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

1.  <a href="#Todo-item-list-CRUD" class="toc-link"><span class="toc-number">1.</span> <span class="toc-text">Todo item list CRUD</span></a>
    1.  <a href="#C-reate" class="toc-link"><span class="toc-number">1.1.</span> <span class="toc-text">C-reate</span></a>
    2.  <a href="#U-pdate" class="toc-link"><span class="toc-number">1.2.</span> <span class="toc-text">U-pdate</span></a>
    3.  <a href="#D-elete" class="toc-link"><span class="toc-number">1.3.</span> <span class="toc-text">D-elete</span></a>
2.  <a href="#What%E2%80%99s-next" class="toc-link"><span class="toc-number">2.</span> <span class="toc-text">What’s next?</span></a>
