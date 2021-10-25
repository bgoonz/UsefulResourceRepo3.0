<a href="/categories/coding/" class="category-link">Coding</a> &gt; <a href="/categories/coding/web-development/" class="category-link">Web Development</a> &gt; <a href="/categories/coding/web-development/backbone/" class="category-link">Backbone</a>

# Backbone.js for absolute beginners - getting started (part 2: Models, Collections and Views)

<span title="Last time this post was updated"> Last updated September 13th 2012 </span> <span class="m-x-2" title="Pageviews"> 204.8k </span> <span class="m-x-2" title="Click to go to the comments section"> [ <span class="disqus-comment-count" data-disqus-url="https://master--bgoonz-blog.netlify.app/backbone-js-for-absolute-beginners-getting-started-part-2/">0</span>](#disqus_thread) </span>

- <a href="/tags/backbonejs/" class="tag-list-link">backbonejs</a><span class="tag-list-count">4</span>
- <a href="/tags/todo-app/" class="tag-list-link">todo app</a><span class="tag-list-count">5</span>
- <a href="/tags/tutorial-backbonejs/" class="tag-list-link">tutorial_backbonejs</a><span class="tag-list-count">4</span>

![Backbone.js for absolute beginners - getting started (part 2: Models, Collections and Views)](/images/BackbonesforBeginners_large.png)

This tutorial builds on top of the [first part](/backbone-dot-js-for-absolute-beginners-getting-started/) and continue with BacboneJS’s Models, Collections and Views.

<span id="more"></span>

BackboneJS Tutorial series:

1.  [Backbone.js for Absolute Beginners - Getting started (Part 1: Intro)](/backbone-dot-js-for-absolute-beginners-getting-started/)
2.  Backbone.js for absolute beginners - getting started (part 2: Models, Collections and Views) **👈 you are here**
3.  [Backbone.js for absolute beginners - getting started (part 3: CRUD)](/backbonejs-for-absolute-beginners-getting-started-part-3/)
4.  [Backbone.js for absolute beginners - getting started (part 4: Routers)](/backbone-js-for-absolute-beginners-getting-started-part-4/)

## <a href="#Todo-App-in-Backbone" class="headerlink" title="Todo App in Backbone"></a>Todo App in Backbone

After completing this example app, you will have experience and a basic understanding of Backbone modules!

(Updated: 2013-02-02, 2013-11-24) _Notice_: This tutorial was written using Backbone v.0.9.x, now version 1.1.x or later are out. However, all the principles explained here apply to both.

**Todo app Boilerplate**

Let’s start again with the initial [HTML file](https://raw.github.com/amejiarosario/Backbone-tutorial/439ff34409dfc01adca7f9f96efcd726295f1aac/backbone-tutorial.html) used on 1.1. Now, instead of div\#container let’s add the following HTML code:

HTML Structure[Full Code](https://raw.github.com/amejiarosario/Backbone-tutorial/fe0efb0fd0c4c3c4cb5fd61e9917165082f9a562/backbone-tutorial.html)

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
11</code></pre></td><td><pre><code>&lt;section id=&quot;todoapp&quot;&gt;
  &lt;header id=&quot;header&quot;&gt;
    &lt;h1&gt;Todos&lt;/h1&gt;
    &lt;input id=&quot;new-todo&quot; placeholder=&quot;What needs to be done?&quot;&gt;
  &lt;/header&gt;
  &lt;section id=&quot;main&quot;&gt;
    &lt;ul id=&quot;todo-list&quot;&gt;&lt;/ul&gt;
  &lt;/section&gt;
&lt;/section&gt;
</code></pre></td></tr></tbody></table>

We will implement a Todo list, basically an unordered list (ul) of elements with checkboxes.

## <a href="#Backbone-Model" class="headerlink" title="Backbone.Model"></a>Backbone.Model

Models are the heart of every application. It contains the interactive data and the logic surrounding it, such as data validation, getters and setters, default values, data initialization, conversions, etc. For our example, we are going to create a model called `Todo`, which will store a string of text (title) and whether the task has been completed or not.

Todo Model[Full Code](https://raw.github.com/amejiarosario/Backbone-tutorial/fe0efb0fd0c4c3c4cb5fd61e9917165082f9a562/backbone-tutorial.html)

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7
8
9
10</code></pre></td><td><pre><code>var app = {}; // create namespace for our app

app.Todo = Backbone.Model.extend({
defaults: {
title: &#39;&#39;,
completed: false
}
});
</code></pre></td></tr></tbody></table>

Notice that by convention, class names are capitalized, while instance variables and objects are not. Another important aspect of models is that their properties are dynamic; they can be created on the fly and don’t have any specific types associated with them.

**Test what you just coded!**

After you completed the code snippet above you can open your browser console (chrome’s console: ctrl+shift+i -or- ⌘+alt+i) and try this out, to get familiar with the models:

Practice in your Browser\\'s console

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6</code></pre></td><td><pre><code>var todo = new app.Todo({title: &#39;Learn Backbone.js&#39;, completed: false}); // create object with the attributes specified.
todo.get(&#39;title&#39;); // &quot;Learn Backbone.js&quot;
todo.get(&#39;completed&#39;); // false
todo.get(&#39;created_at&#39;); // undefined
todo.set(&#39;created_at&#39;, Date());
todo.get(&#39;created_at&#39;); // &quot;Wed Sep 12 2012 12:51:17 GMT-0400 (EDT)&quot;</code></pre></td></tr></tbody></table>

## <a href="#Backbone-Collection" class="headerlink" title="Backbone.Collection"></a>Backbone.Collection

As its name indicates, collections are ordered sets of models. You can get and set models in the collection, listen for events when any element in the array changes, and fetch for model’s data from the server.

E.g.: `todoList.fetch();`

Collections allow to save data (in database, file, memory), and it requires a reference to it. Therefore, you need to specify the `url` parameter with a relative URL, where the model’s resource would be located on the server. Otherwise, you will get errors like:

`A "url" property or function must be specified`

We are not going to use a backend server for simplicity (I will do a new post for that); instead, we will use HTML5’s local storage for persistence through a Backbone’s plugin. So, we need to define the localStorage property instead of the URL. You need to include the backbone-localstorage.js with the rest of your libs as [shown in the full code](https://raw.github.com/amejiarosario/Backbone-tutorial/fe0efb0fd0c4c3c4cb5fd61e9917165082f9a562/backbone-tutorial.html):

`<script src="http://cdnjs.cloudflare.com/ajax/libs/backbone-localstorage.js/1.0/backbone.localStorage-min.js" type="text/javascript">`

Todo list Collection[Full Code](https://raw.github.com/amejiarosario/Backbone-tutorial/fe0efb0fd0c4c3c4cb5fd61e9917165082f9a562/backbone-tutorial.html)

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7
8
9</code></pre></td><td><pre><code>app.TodoList = Backbone.Collection.extend({
  model: app.Todo,
  localStorage: new Store(&quot;backbone-todo&quot;)
});

// instance of the Collection
app.todoList = new app.TodoList();
</code></pre></td></tr></tbody></table>

**Test what you just coded!**

(Google’s Chrome console shortcuts: ctrl+shift+i -or- ⌘+alt+i)

Practice in your Browser\\'s console

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7</code></pre></td><td><pre><code>var todoList = new app.TodoList()
todoList.create({title: &#39;Learn Backbone\&#39;s Collection&#39;}); // notice: that `completed` will be set to false by default.
var lmodel = new app.Todo({title: &#39;Learn Models&#39;, completed: true});
todoList.add(lmodel);
todoList.pluck(&#39;title&#39;);     // [&quot;Learn Backbone&#39;s Collection&quot;, &quot;Learn Models&quot;]
todoList.pluck(&#39;completed&#39;); // [false, true]
JSON.stringify(todoList);    // &quot;[{&quot;title&quot;:&quot;Learn Backbone&#39;s Collection&quot;,&quot;completed&quot;:false,&quot;id&quot;:&quot;d9763e99-2267-75f5-62c3-9d7e40742aa6&quot;},{&quot;title&quot;:&quot;Learn Models&quot;,&quot;completed&quot;:true}]&quot;</code></pre></td></tr></tbody></table>

## <a href="#Backbone-View" class="headerlink" title="Backbone.View"></a>Backbone.View

As mentioned in [1.2](/backbone-dot-js-for-absolute-beginners-getting-started/#1.2), Views doesn’t have the HTML markups for our application, but instead (It’s like the controller in MVC frameworks) process data and link it to templates. It finally render HTML based on events or data changes.

### <a href="#Basic-Properties" class="headerlink" title="Basic Properties"></a>Basic Properties

There are four basic properties in a view: el, initialize, render, and events.

We have already seen the first three and will see later the fourth one. Do you remember the Hello World View from [1.2](/backbone-dot-js-for-absolute-beginners-getting-started/#1.2)?

Example of a Backbone.View

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
14</code></pre></td><td><pre><code>var AppView = Backbone.View.extend({
  // el - stands for element. Every view has a element associate in with HTML
  //      content will be rendered.
  el: &#39;#container&#39;,
  // It&#39;s the first function called when this view it&#39;s instantiated.
  initialize: function(){
    this.render();
  },
  // $el - it&#39;s a cached jQuery object (el), in which you can use jQuery functions
  //       to push content. Like the Hello World in this case.
  render: function(){
    this.$el.html(&quot;Hello World&quot;);
  }
});</code></pre></td></tr></tbody></table>

### <a href="#view-el" class="headerlink" title="view.el"></a>`view.el`

Every view needs to reference a DOM at all times. Therefore, the view will inject content into this element. This is the `el` property. `this.el` is created from view’s `el`,`tagName`, `className`, `id` or `attributes` properties. If none of these are specified, then this.el is an empty `div`. The `view.$el` it’s a cached jQuery object of the view’s element (view.el).

### <a href="#Initialize-constructor" class="headerlink" title="Initialize/constructor"></a>Initialize/constructor

Here you can pass parameters that will be attached to a model, collection, or view.el.

### <a href="#render" class="headerlink" title="render"></a>`render`

This function injects the markup into the elements. Not all views require having a render function. As you are going to see in the sample code, they can call other view’s render functions.

### <a href="#delegated-events" class="headerlink" title="delegated events"></a>delegated events

Events are written in the following format:

`{"<EVENT_TYPE> <ELEMENT_ID>": "<CALLBACK_FUNTION>"}`

E.g.

`events: {'keypress #new-todo': 'createTodoOnEnter'}`

in jQuery it would be something like:

`$('#new-todo').keypress(createTodoOnEnter);`

## <a href="#Todo-View" class="headerlink" title="Todo View"></a>Todo View

Now back to our Todo application: We need a view that renders each of the todo model objects into the page. The `item-template` and `app.TodoView` will generate each todo item.

item-template[Full Code](https://raw.github.com/amejiarosario/Backbone-tutorial/fe0efb0fd0c4c3c4cb5fd61e9917165082f9a562/backbone-tutorial.html)

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7
8</code></pre></td><td><pre><code>&lt;script type=&quot;text/template&quot; id=&quot;item-template&quot;&gt;
  &lt;div class=&quot;view&quot;&gt;
    &lt;input class=&quot;toggle&quot; type=&quot;checkbox&quot;&gt;
    &lt;label&gt;&lt;%- title %&gt;&lt;/label&gt;
  &lt;/div&gt;
&lt;/script&gt;
</code></pre></td></tr></tbody></table>

In the following block of code, we have the Backbone.View which uses the above template (`#item-template`) to fill out the title from the `model` we pass along.

Todo View[Full Code](https://raw.github.com/amejiarosario/Backbone-tutorial/fe0efb0fd0c4c3c4cb5fd61e9917165082f9a562/backbone-tutorial.html)

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
11</code></pre></td><td><pre><code>// renders individual todo items list (li)
app.TodoView = Backbone.View.extend({
  tagName: &#39;li&#39;,
  template: _.template($(&#39;#item-template&#39;).html()),
  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
    return this; // enable chained calls
  }
});
</code></pre></td></tr></tbody></table>

When we instantiate a Backbone View, it can receive any parameter that we need. In this case, since we call the parameter `model` let’s instantiate it with a Backbone Model (e.g. todo):

`var view = new app.TodoView({model: todo});`

Also, notice that our view uses a `tagName: li` instead of just `el` from before. This means that the new rendered elements will be wrapped around a `<li></li>`

## <a href="#Backbone-Events" class="headerlink" title="Backbone.Events"></a>Backbone.Events

This module can be mixed with any object and give it the pub/sub (observer pattern) behavior. Events provide a couple of methods from which we will discuss: `on`, `off` and `trigger`. (If this you are familiar with, then in jQuery, they will work the same way + some excellent built-in features)

**Subscribing to Events with on** `object.on(event, callback, [context])`

Also called bind. It binds an object to an event and a callback. When that event it’s triggered, it executes the callback.

E.g. `todoList.on('add', this.addAll, this);`

Every time a new item is `add`ed to a Backbone.Collection the built-in event `add` ([docs for add](http://backbonejs.org/#Collection-add) is triggered. In the example above, after the custom event is triggered, the todoList’s callback `addAll()` is executed. Also, the current object is passed with `this` as a `context`.

Events can also be set on arbitrary objects using underscore.js `extend` function:

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7
8</code></pre></td><td><pre><code>var object = {},
    callback = function(msg) { console.log(&quot;Triggered &quot; + msg); };

\_.extend(object, Backbone.Events);

object.on(&quot;my_event&quot;, callback);

object.trigger(&quot;my_event&quot;, &quot;my custom event&quot;);</code></pre></td></tr></tbody></table>

## <a href="#App-View" class="headerlink" title="App View"></a>App View

Now, we need another view that takes a collection and renders each of the individual items. We are going to call it ‘AppView’. This is a new large chunk of code so read it closely. Please take a look through this code and identify each of the elements.

Todo View[Full Code](https://raw.github.com/amejiarosario/Backbone-tutorial/fe0efb0fd0c4c3c4cb5fd61e9917165082f9a562/backbone-tutorial.html)

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
36
37
38
39
40
41
42
43
44
45
46
47</code></pre></td><td><pre><code>// renders the full list of todo items calling TodoView for each one.
app.AppView = Backbone.View.extend({
  el: &#39;#todoapp&#39;,
  initialize: function () {
    this.input = this.$(&#39;#new-todo&#39;);

    // instance of the Collection
    app.todoList = new app.TodoList();

    // when new elements are added to the collection render then with addOne
    app.todoList.on(&#39;add&#39;, this.addOne, this);
    app.todoList.on(&#39;reset&#39;, this.addAll, this);
    app.todoList.fetch(); // Loads list from local storage

},
events: {
&#39;keypress #new-todo&#39;: &#39;createTodoOnEnter&#39;
},
createTodoOnEnter: function(e){
if ( e.which !== 13 || !this.input.val().trim() ) { // ENTER_KEY = 13
return;
}
app.todoList.create(this.newAttributes());
this.input.val(&#39;&#39;); // clean input box
},
addOne: function(todo){
var view = new app.TodoView({model: todo});
$(&#39;#todo-list&#39;).append(view.render().el);
  },
  addAll: function(){
    this.$(&#39;#todo-list&#39;).html(&#39;&#39;); // clean the todo list
app.todoList.each(this.addOne, this);
},
newAttributes: function(){
return {
title: this.input.val().trim(),
completed: false
}
}
});

//--------------
// Initializers
//--------------

app.appView = new app.AppView();
</code></pre></td></tr></tbody></table>

## <a href="#What’s-next" class="headerlink" title="What’s next?"></a>What’s next?

Continue with the [3rd part](/backbonejs-for-absolute-beginners-getting-started-part-3/) and learn how to make CRUD for your models!

### Now, your turn!

Thanks for reading this far. Here are some things you can do next:

- Found a typo? [Edit this post](https://github.com/amejiarosario/amejiarosario.github.io/edit/source/source/_posts/2012-09-13-backbone-js-for-absolute-beginners-getting-started-part-2.md).
- Got questions? [comment](#comments-section) below.
- Was it useful? Show your support and share it.

<a href="/backbonejs-for-absolute-beginners-getting-started-part-3/" class="article-nav-newer"><strong><em></em> newer</strong></a>

Backbone.js for absolute beginners - getting started (part 3: CRUD)

<a href="/backbone-dot-js-for-absolute-beginners-getting-started/" class="article-nav-older"><strong>older <em></em></strong></a>

Backbone.js for Absolute Beginners - Getting started (Part 1: Intro)

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

1.  <a href="#Todo-App-in-Backbone" class="toc-link"><span class="toc-number">1.</span> <span class="toc-text">Todo App in Backbone</span></a>
2.  <a href="#Backbone-Model" class="toc-link"><span class="toc-number">2.</span> <span class="toc-text">Backbone.Model</span></a>
3.  <a href="#Backbone-Collection" class="toc-link"><span class="toc-number">3.</span> <span class="toc-text">Backbone.Collection</span></a>
4.  <a href="#Backbone-View" class="toc-link"><span class="toc-number">4.</span> <span class="toc-text">Backbone.View</span></a>
    1.  <a href="#Basic-Properties" class="toc-link"><span class="toc-number">4.1.</span> <span class="toc-text">Basic Properties</span></a>
    2.  <a href="#view-el" class="toc-link"><span class="toc-number">4.2.</span> <span class="toc-text">view.el</span></a>
    3.  <a href="#Initialize-constructor" class="toc-link"><span class="toc-number">4.3.</span> <span class="toc-text">Initialize/constructor</span></a>
    4.  <a href="#render" class="toc-link"><span class="toc-number">4.4.</span> <span class="toc-text">render</span></a>
    5.  <a href="#delegated-events" class="toc-link"><span class="toc-number">4.5.</span> <span class="toc-text">delegated events</span></a>
5.  <a href="#Todo-View" class="toc-link"><span class="toc-number">5.</span> <span class="toc-text">Todo View</span></a>
6.  <a href="#Backbone-Events" class="toc-link"><span class="toc-number">6.</span> <span class="toc-text">Backbone.Events</span></a>
7.  <a href="#App-View" class="toc-link"><span class="toc-number">7.</span> <span class="toc-text">App View</span></a>
8.  <a href="#What%E2%80%99s-next" class="toc-link"><span class="toc-number">8.</span> <span class="toc-text">What’s next?</span></a>
