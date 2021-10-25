<a href="/categories/coding/" class="category-link">Coding</a> &gt; <a href="/categories/coding/web-development/" class="category-link">Web Development</a> &gt; <a href="/categories/coding/web-development/backbone/" class="category-link">Backbone</a>

# Backbone.js for Absolute Beginners - Getting started (Part 1: Intro)

<span title="Last time this post was updated"> Last updated April 14th 2021 </span> <span class="m-x-2" title="Pageviews"> 359.7k </span> <span class="m-x-2" title="Click to go to the comments section"> [ <span class="disqus-comment-count" data-disqus-url="https://master--bgoonz-blog.netlify.app/backbone-dot-js-for-absolute-beginners-getting-started/">0</span>](#disqus_thread) </span>

- <a href="/tags/backbonejs/" class="tag-list-link">backbonejs</a><span class="tag-list-count">4</span>
- <a href="/tags/tutorial-backbonejs/" class="tag-list-link">tutorial_backbonejs</a><span class="tag-list-count">4</span>

![Backbone.js for Absolute Beginners - Getting started (Part 1: Intro)](/images/BackbonesforBeginners_large.png)

Backbone.js is a JavaScript library, among many others, that is gaining special attention in the web development community because of its ease of use and the structure that it provides to JavaScript applications.

Notice that BackboneJS is not a framework but a library. The difference is who is in control. Using a library, YOU are in control, but there is an inversion of control using a framework: the framework calls you. Libraries give you a lot of flexibility, while frameworks have opinionated ways of doing things but can save you from writing boilerplate code. Follow my [AngularJS](/tags/angularjs/) tutorial series for a framework solution.

Let’s dive into BackboneJS! And see how this flexible library can bring order to your Javascript!

<span id="more"></span>

BackboneJS Tutorial series:

1.  Backbone.js for Absolute Beginners - Getting started (Part 1: Intro) **👈 you are here**
2.  [Backbone.js for absolute beginners - getting started (part 2: Models, Collections and Views)](/backbone-js-for-absolute-beginners-getting-started-part-2/)
3.  [Backbone.js for absolute beginners - getting started (part 3: CRUD)](/backbonejs-for-absolute-beginners-getting-started-part-3/)
4.  [Backbone.js for absolute beginners - getting started (part 4: Routers)](/backbone-js-for-absolute-beginners-getting-started-part-4/)

## <a href="#Brief-Background" class="headerlink" title="Brief Background"></a>Brief Background

[TL; DR](#start): You need to use JavaScript heavily in order to make responsive and interactive web applications. [Jump to this and get started.](#start)

The web application development process has been evolving over the years. In the beginning, web applications were just static HTML pages, which required programmers to change the code (HTML, CSS, JS) to change the content. Later, in web 2.0, developers started using server-side programming languages (like PHP, Ruby, Java, …) to generate HTML pages dynamically based on user input and data stored in a database. That was a considerable improvement, and most of the pages served today use this approach. However, providing the website with even more responsiveness, speed, and enhanced user interaction requires bringing the page generation closer to the users (in the browser rather than a remote server). A couple of languages can run in the browsers besides JS, using Web Assembly techniques or using deprecated Java Applets or Flash. However, these require extra plugins and are not as ubiquitous as JavaScript.

Web applications nowadays require heavy use of JavaScript to generate content on the fly. The user doesn’t need to wait between requests and page refreshes. Many of the logic/code that used to be on the server-side is now on the client-side. JS allows websites to render only content that changes without reloading the entire page on every request (e.g., AJAX). Examples of this kind of web application are Gmail, Pandora, Pinterest, Nokia Maps 3D, etc.

A common problem with extensive JS web applications developed is that they can become pretty messy quickly. The lack of structure makes the code hard to maintain. Enters Backbone.js! It provides structure to organize the code and increase maintainability. Backbone is not the only framework like this; in fact, many JS frameworks offer similar benefits, like Ember.js, Angular.js, RectJS, etc. However, I chose (in 2012) Backbone because it’s one of the most widely used frameworks in its category. It has a vibrant community. It’s also fully used in production for many big companies like Wal-Mart mobile, Groupon, Khan Academy, Pandora, WordPress, Foursquare, etc.

Edit 2021: ReactJS, [Vue.js](/tags/vuejs/) and [Angular](/tags/angular/) are very popular nowadays.

<span id="start"></span>

## <a href="#BackboneJS-Overview" class="headerlink" title="BackboneJS Overview"></a>BackboneJS Overview

**Just enough to get started with Backbone.js**

Backbone.js has a hard dependency on underscore.js and a soft dependency on jQuery. It’s made up of the following modules:

- Views
- Events
- Models
- Collections
- Routers

**Shut up and show me the code!**

Alright! the way we are going to explore all of these modules is through examples. This is a practical tutorial that I wished I had it when I started learning. This is a fat-free walkthrough of Backbone.js, as simple as possible, with all the code in one file for didactical purposes (no hidden magic tricks, all cards are on the table).

The first example is a ‘Hello World’ app in Backbone, and the second is a ‘to do’ app. After working through these two example apps, you’ll see every Backbone module and have a practical understanding of them.

## <a href="#Hello-World-in-Backbone-js" class="headerlink" title="Hello World in Backbone.js"></a>Hello World in Backbone.js

You can follow along with this tutorial’s code in this [repository](https://github.com/amejiarosario/Backbone-tutorial/commits/). Each feature implemented is a new commit, so you can easily see what changed in every step.

**Simple HTML5 and Backbone boilerplate**

To get started, download [this simple HTML file](https://raw.github.com/amejiarosario/Backbone-tutorial/439ff34409dfc01adca7f9f96efcd726295f1aac/backbone-tutorial.html). This file contains the libraries that you’ll need (jQuery, Underscore.js, Backbone.js, and Backbone-localStorage.js) and the placeholders for your HTML and JS code. Don’t worry about the libraries. We are going to explain to them as we need them.

After downloading the file mentioned above, notice the HTML where your entire page will be built using Backbone.Views!

Your entire js app will be loaded here:

`<div id="container">Loading...</div>`

### <a href="#Backbone’s-Views" class="headerlink" title="Backbone’s Views"></a>Backbone’s Views

Backbone’s Views are the equivalent of ‘controllers’ in MVC frameworks (like [Ruby on Rails](/ruby-on-rails-architectural-design/)). If you are not familiar with MVC frameworks, that’s okay. Backbone’s Views glue together user events (clicks, pressed keys, etc.), rendering HTML views and templates, and interact with models that contain the application’s data.

Here is an example of a Backbone.View: READ THE CODE AND COMMENTS, then insert this code in the javascript block of the HTML file you downloaded.

Simple Backbone.View[Full Code](https://raw.github.com/amejiarosario/Backbone-tutorial/0bf69185f4463a75cb2d5553f8d1ea197323ccff/backbone-tutorial.html)

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

### <a href="#Test-the-app" class="headerlink" title="Test the app"></a>Test the app

After copying the code, open the HTML file by typing this in terminal: `open <your file name>.html`, refresh the browser, and you should see the ‘Hello World’ message, right? Wait, if you only see ‘Loading…’, it’s because you need to initialize the view first.

`var appView = new AppView();`

Yay! You have your “Hello Wold” in Backbone and an introduction to the View module. (Full code is [here](https://raw.github.com/amejiarosario/Backbone-tutorial/0bf69185f4463a75cb2d5553f8d1ea197323ccff/backbone-tutorial.html))

### <a href="#Backbone’s-Templates" class="headerlink" title="Backbone’s Templates"></a>Backbone’s Templates

Backbone has a utility/helper library called [underscore.js](http://underscorejs.org/?utm_source=adrianmejia.com), and you can use their template solution out of the box. You can also use any other template solution that you want, like [mustache](https://github.com/janl/mustache.js) or [handlebars](https://github.com/wycats/handlebars.js). Let’s stick with \_.js for simplicity’s sake.

\_.js templates have the following syntax,

`_.template(templateString, [data], [settings])`

In the `templateString`, you use the place holder `<%= %>` and `<%- %>` to dynamically insert data. The latter allows for HTML escape while the former doesn’t. Moreover, you can use `<% %>` to run any javascript code.

Let’s see it in action and rewrite our “Hello World” using a \_.js template instead.

Simple Backbone.View and Templates[Full Code](https://raw.github.com/amejiarosario/Backbone-tutorial/c5b131278ecde92f33882c9a2c22ee4119e57d77/backbone-tutorial.html)

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
15</code></pre></td><td><pre><code>var AppView = Backbone.View.extend({
  el: $(&#39;#container&#39;),
  // template which has the placeholder &#39;who&#39; to be substitute later
  template: _.template(&quot;&lt;h3&gt;Hello &lt;%= who %&gt;&lt;/h3&gt;&quot;),
  initialize: function(){
    this.render();
  },
  render: function(){
    // render the function using substituting the varible &#39;who&#39; for &#39;world!&#39;.
    this.$el.html(this.template({who: &#39;world!&#39;}));
    //***Try putting your name instead of world.
  }
});

var appView = new AppView();</code></pre></td></tr></tbody></table>

Rerun the app and verify that it’s working with the template.

## <a href="#What’s-next" class="headerlink" title="What’s next?"></a>What’s next?

Continue with the [2nd part](/backbone-js-for-absolute-beginners-getting-started-part-2/) and learn more about Backbone’s Models, Collections, View and Events!

### Now, your turn!

Thanks for reading this far. Here are some things you can do next:

- Found a typo? [Edit this post](https://github.com/amejiarosario/amejiarosario.github.io/edit/source/source/_posts/2012-09-11-backbone-dot-js-for-absolute-beginners-getting-started.markdown).
- Got questions? [comment](#comments-section) below.
- Was it useful? Show your support and share it.

<a href="/backbone-js-for-absolute-beginners-getting-started-part-2/" class="article-nav-newer"><strong><em></em> newer</strong></a>

Backbone.js for absolute beginners - getting started (part 2: Models, Collections and Views)

<a href="/instagram-mobile-design-secrets-revealed/" class="article-nav-older"><strong>older <em></em></strong></a>

Instagram mobile design secrets revealed

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

1.  <a href="#Brief-Background" class="toc-link"><span class="toc-number">1.</span> <span class="toc-text">Brief Background</span></a>
2.  <a href="#BackboneJS-Overview" class="toc-link"><span class="toc-number">2.</span> <span class="toc-text">BackboneJS Overview</span></a>
3.  <a href="#Hello-World-in-Backbone-js" class="toc-link"><span class="toc-number">3.</span> <span class="toc-text">Hello World in Backbone.js</span></a>
    1.  <a href="#Backbone%E2%80%99s-Views" class="toc-link"><span class="toc-number">3.1.</span> <span class="toc-text">Backbone’s Views</span></a>
    2.  <a href="#Test-the-app" class="toc-link"><span class="toc-number">3.2.</span> <span class="toc-text">Test the app</span></a>
    3.  <a href="#Backbone%E2%80%99s-Templates" class="toc-link"><span class="toc-number">3.3.</span> <span class="toc-text">Backbone’s Templates</span></a>
4.  <a href="#What%E2%80%99s-next" class="toc-link"><span class="toc-number">4.</span> <span class="toc-text">What’s next?</span></a>
