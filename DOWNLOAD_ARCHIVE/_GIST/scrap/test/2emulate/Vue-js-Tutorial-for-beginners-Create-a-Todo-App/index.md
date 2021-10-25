<a href="/categories/coding/" class="category-link">Coding</a> &gt; <a href="/categories/coding/web-development/" class="category-link">Web Development</a> &gt; <a href="/categories/coding/web-development/vue/" class="category-link">Vue</a>

# Vue.js Tutorial for beginners

<span title="Last time this post was updated"> Last updated August 4th 2018 </span> <span class="m-x-2" title="Pageviews"> 17.9k </span> <span class="m-x-2" title="Click to go to the comments section"> [ <span class="disqus-comment-count" data-disqus-url="https://master--bgoonz-blog.netlify.app/Vue-js-Tutorial-for-beginners-Create-a-Todo-App/">0</span>](#disqus_thread) </span>

- <a href="/tags/javascript/" class="tag-list-link">javascript</a><span class="tag-list-count">5</span>
- <a href="/tags/todo-app/" class="tag-list-link">todo app</a><span class="tag-list-count">5</span>
- <a href="/tags/vuejs/" class="tag-list-link">vuejs</a><span class="tag-list-count">1</span>

![Vue.js Tutorial for beginners](/images/vuejs-vuerouter-tutorial-todo-app-large.jpg)

In this tutorial, you are going to learn the basics of Vue.js. While we learn, we are going to build a Todo app that will help us to put in practice what we learn.

<span id="more"></span>

A good way to learn a new framework, It’s by doing a Todo app. It’s an excellent way to compare framework features. It’s quick to implement and easy to understand. However, don’t be fooled by the simplicity, we are going to take it to the next level. We are going to explore advanced topics as well such as Vue Routing, Components, directives and many more!

Let’s first setup the dev environment, so we can focus on Vue! 🖖

## <a href="#Setup" class="headerlink" title="Setup"></a>Setup

We are going to start with essential HTML elements and CSS files and no JavaScript. You will learn how to add all the JavaScript functionality using Vue.js.

To get started quickly, clone the following repo and check out the `start-here` branch:

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6</code></pre></td><td><pre><code>git clone https://github.com/amejiarosario/vue-todo-app.git
cd vue-todo-app
git checkout start-here

npm install
npm start</code></pre></td></tr></tbody></table>

After running `npm start`, your browser should open on port `http://127.0.0.1:8080` and show the todo app.

![todo-app](/images/todo-app.jpg)

Try to interact with it. You cannot create a new Todos, nor can you delete them or edit them. We are going to implement that!

Open your favorite code editor (I recommend [Code](https://code.visualstudio.com/)) on `vue-todo-app` directory.

### <a href="#Package-json" class="headerlink" title="Package.json"></a>Package.json

Take a look at the `package.json` dependencies:

package.json (fragment)

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7
8</code></pre></td><td><pre><code>&quot;dependencies&quot;: {
  &quot;todomvc-app-css&quot;: &quot;2.1.2&quot;,
  &quot;vue&quot;: &quot;2.5.17&quot;,
  &quot;vue-router&quot;: &quot;3.0.1&quot;
},
&quot;devDependencies&quot;: {
  &quot;live-server&quot;: &quot;1.2.0&quot;
}</code></pre></td></tr></tbody></table>

We installed `Vue` and `VueRouter` dependencies. Also, we have the nice CSS library for Todo apps and `live-server` to serve and reload the page when we make changes. That’s all we would need for this tutorial.

### <a href="#index-html" class="headerlink" title="index.html"></a>index.html

Open the `index.html` file. There we have the basic HTML structure for the Todo app that we are going to build upon:

- Line 9: Loads the CSS from NPM module `node_modules/todomvc-app-css/index.css`.
- Line 24: We have the `ul` and some hard-coded todo lists. We are going to change this in a bit.
- Line 75: we have multiple script files that load Vue, VueRouter and an empty `app.js`.

Now, you know the basic structure where we are going to work on. Let’s get started with Vue! 🖖

## <a href="#Getting-started-with-Vue" class="headerlink" title="Getting started with Vue"></a>Getting started with Vue

As you might know…

> Vue.js is a _reactive_ JavaScript framework to build UI components.

It’s reactive because the data and the DOM are linked. That means, that when data changes, it automatically updates the DOM. Let’s try that!

### <a href="#Vue-Data-amp-v-text" class="headerlink" title="Vue Data &amp; v-text"></a>Vue Data & v-text

Go to `app.js` and type the following:

app.js

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6</code></pre></td><td><pre><code>const todoApp = new Vue({
  el: &#39;.todoapp&#39;,
  data: {
    title: &#39;Hello Vue!&#39;
  }
});</code></pre></td></tr></tbody></table>

Notice the 2nd line with `el: '.todoapp'`. The `el` is the element where Vue is going to be mounted.

If you notice in the `index.html` that’s the section part. As shown in the fragment below.

index.html (fragment)

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3</code></pre></td><td><pre><code>&lt;body&gt;

&lt;section class=&quot;todoapp&quot;&gt;</code></pre></td></tr></tbody></table>

Going back to the `app.js` file, let’s now take a look into the `data` attribute, that binds the title. The `data` object is reactive. It keeps track of changes and re-render the DOM if needed. Go to the index.html page and change `<h1>todos</h1>` for `<h1>{{ title }}</h1>`. The rest remains the same:

index.html (fragment)

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6</code></pre></td><td><pre><code>&lt;section class=&quot;todoapp&quot;&gt;
  &lt;header class=&quot;header&quot;&gt;
    &lt;h1&gt;{{ title }}&lt;/h1&gt;
    &lt;input class=&quot;new-todo&quot; placeholder=&quot;What needs to be done?&quot; autofocus&gt;
  &lt;/header&gt;
  &lt;!--  ...  --&gt;</code></pre></td></tr></tbody></table>

If you have `npm start` running you will see that the title changed!

You can also go to the console and change it `todoApp.title = "Bucket List"` and see that it updates the DOM.

![vue](/images/vue-reactive.gif)

Note: besides the curly braces you can also use `v-text`:

index.html (fragment)

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1</code></pre></td><td><pre><code>&lt;h1 v-text=&quot;title&quot;&gt;&lt;/h1&gt;</code></pre></td></tr></tbody></table>

Let’s go back to `app.js` and do something useful inside the `data` object. Let’s put an initial todo list:

app.js (fragment)

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
11</code></pre></td><td><pre><code>const todoApp = new Vue({
  el: &#39;.todoapp&#39;,
  data: {
    title: &#39;Todos&#39;,
    todos: [
      { text: &#39;Learn JavaScript ES6+ goodies&#39;, isDone: true },
      { text: &#39;Learn Vue&#39;, isDone: false },
      { text: &#39;Build something awesome&#39;, isDone: false },
    ],
  }
});</code></pre></td></tr></tbody></table>

Now that we have the list on the data, we need to replace the `<li>` elements in `index.html` with each of the elements in the `data.todos` array.

Let’s do the CRUD (Create-Read-Update-Delete) of a Todo application.

[review diff](https://github.com/amejiarosario/vue-todo-app/commit/2d1f2e5)

### <a href="#READ-List-rendering-with-v-for" class="headerlink" title="READ: List rendering with v-for"></a>READ: List rendering with `v-for`

As you can see everything starting with `v-` is defined by the Vue library.

We can iterate through elements using `v-for` as follows:

index.html (fragment)

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7
8</code></pre></td><td><pre><code>&lt;li v-for=&quot;todo in todos&quot;&gt;
  &lt;div class=&quot;view&quot;&gt;
    &lt;input class=&quot;toggle&quot; type=&quot;checkbox&quot;&gt;
    &lt;label&gt;{{todo.text}}&lt;/label&gt;
    &lt;button class=&quot;destroy&quot;&gt;&lt;/button&gt;
  &lt;/div&gt;
  &lt;input class=&quot;edit&quot; value=&quot;Rule the web&quot;&gt;
&lt;/li&gt;</code></pre></td></tr></tbody></table>

You can remove the other `<li>` tag that was just a placeholder.

[review diff](https://github.com/amejiarosario/vue-todo-app/commit/3dc4871)

### <a href="#CREATE-Todo-and-event-directives" class="headerlink" title="CREATE Todo and event directives"></a>CREATE Todo and event directives

We are going to implement the create functionality. We have a textbox, and when we press enter, we would like to add whatever we typed to the list.

In Vue, we can listen to an event using `v-on:EVENT_NAME`. E.g.:

- v-on:click
- v-on:dbclick
- v-on:keyup
- v-on:keyup.enter

**Protip**: since `v-on:` is used a lot, there’s a shortcut `@`. E.g. Instead of `v-on:keyup.enter` it can be `@keyup.enter`.

Let’s use the `keyup.enter` to create a todo:

index.html (fragment)

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3</code></pre></td><td><pre><code>&lt;input class=&quot;new-todo&quot; placeholder=&quot;What needs to be done?&quot;
  v-on:keyup.enter=&quot;createTodo&quot;
  autofocus&gt;</code></pre></td></tr></tbody></table>

On `enter` we are calling `createTodo` method, but it’s not defined yet. Let’s define it on `app.js` as follows:

app.js (fragment)

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7</code></pre></td><td><pre><code>methods: {
  createTodo(event) {
    const textbox = event.target;
    this.todos.push({ text: textbox.value, isDone: false });
    textbox.value = &#39;&#39;;
  }
}</code></pre></td></tr></tbody></table>

[review diff](https://github.com/amejiarosario/vue-todo-app/commit/fcd305c)

### <a href="#Applying-classes-dynamically-amp-Vue-v-bind" class="headerlink" title="Applying classes dynamically &amp; Vue v-bind"></a>Applying classes dynamically & Vue `v-bind`

If you click the checkbox (or checkcirlcle) we would like the class `completed` to be applied to the element. We can accomplish this by using the `v-bind` directive.

`v-bind` can be applied to any HTML attribute such as `class`, `title` and so forth. Since `v-bind` is used a lot we can have a shortcut `:`, so instead of `v-bind:class` it becomes `:class`.

index.html (fragment)

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1</code></pre></td><td><pre><code>&lt;li v-for=&quot;todo in todos&quot; :class=&quot;{ completed: todo.isDone }&quot;&gt;</code></pre></td></tr></tbody></table>

Now if a Todo list is completed, it will become cross out. However, if we click on the checkbox, it doesn’t update the `isDone` property. Let’s fix that next.

[review diff](https://github.com/amejiarosario/vue-todo-app/commit/2145c36)

### <a href="#Keep-DOM-and-data-in-sync-with-Vue-v-model" class="headerlink" title="Keep DOM and data in sync with Vue v-model"></a>Keep DOM and data in sync with Vue v-model

The todos have a property called `isDone` if it’s true we want the checkbox to be marked. That’s data -&gt; DOM. We also want if we change the DOM (click the checkbox) we want to update the data (DOM -&gt; data). This bi-directional communication is easy to do using `v-model`, it will keep it in sync for you!

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1</code></pre></td><td><pre><code>&lt;input class=&quot;toggle&quot; type=&quot;checkbox&quot; v-model=&quot;todo.isDone&quot;&gt;</code></pre></td></tr></tbody></table>

If you test the app now, you can see when you click the checkbox; also the text gets cross out. Yay!

You can also go to the console and verify that if you change the data directly, it will immediately update the HTML. Type the following in the browser console where you todo app is running:

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1</code></pre></td><td><pre><code>todoApp.todos[2].isDone = true</code></pre></td></tr></tbody></table>

You should see the update. Cool!

### <a href="#UPDATE-todo-list-with-a-double-click" class="headerlink" title="UPDATE todo list with a double-click"></a>UPDATE todo list with a double-click

We want to double click on any list and that it automatically becomes a checkbox. We have some CSS magic to do that, the only thing we need to do is to apply the `editing` class.

index.html (fragment)

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7
8
9</code></pre></td><td><pre><code>&lt;!-- List items should get the class `editing` when editing and `completed` when marked as completed --&gt;
&lt;li v-for=&quot;todo in todos&quot; :class=&quot;{ completed: todo.isDone }&quot;&gt;
  &lt;div class=&quot;view&quot;&gt;
    &lt;input class=&quot;toggle&quot; type=&quot;checkbox&quot; v-model=&quot;todo.isDone&quot;&gt;
    &lt;label&gt;{{todo.text}}&lt;/label&gt;
    &lt;button class=&quot;destroy&quot;&gt;&lt;/button&gt;
  &lt;/div&gt;
  &lt;input class=&quot;edit&quot; value=&quot;Rule the web&quot;&gt;
&lt;/li&gt;</code></pre></td></tr></tbody></table>

Similar to what we did with the `completed` class, we need to add a condition when we start editing.

Starting with the label, we want to start editing when we double-click on it. Vue provides `v-on:dblclick` or shorthand `@dblclick`:

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1</code></pre></td><td><pre><code>&lt;label @dblclick=&quot;startEditing(todo)&quot;&gt;{{todo.text}}&lt;/label&gt;</code></pre></td></tr></tbody></table>

In the `app.js` we can define start editing as follows:

app.js

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
22</code></pre></td><td><pre><code>const todoApp = new Vue({
  el: &#39;.todoapp&#39;,
  data: {
    title: &#39;Todos&#39;,
    todos: [
      { text: &#39;Learn JavaScript ES6+ goodies&#39;, isDone: true },
      { text: &#39;Learn Vue&#39;, isDone: false },
      { text: &#39;Build something awesome&#39;, isDone: false },
    ],
    editing: null,
  },
  methods: {
    createTodo(event) {
      const textbox = event.target;
      this.todos.push({ text: textbox.value, isDone: false });
      textbox.value = &#39;&#39;;
    },
    startEditing(todo) {
      this.editing = todo;
    },
  }
});</code></pre></td></tr></tbody></table>

We created a new variable `editing` in data. We just set whatever todo we are currently editing. We want only to edit one at a time, so this works perfectly. When you double-click the label, the `startEditing` function is called and set the `editing` variable to the current todo element.

Next, we need to apply the `editing` class:

index.html (fragment)

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1</code></pre></td><td><pre><code>&lt;li v-for=&quot;todo in todos&quot; :class=&quot;{ completed: todo.isDone, editing: todo === editing }&quot;&gt;</code></pre></td></tr></tbody></table>

When `data.editing` matches the `todo` , then we apply the CSS class. Try it out!

If you try it out, you will notice you can enter on edit mode, but there’s no way to exit from it (yet). Let’s fix that.

index.html (fragment)

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5</code></pre></td><td><pre><code>&lt;input class=&quot;edit&quot;
  @keyup.esc=&quot;cancelEditing&quot;
  @keyup.enter=&quot;finishEditing&quot;
  @blur=&quot;finishEditing&quot;
  :value=&quot;todo.text&quot;&gt;</code></pre></td></tr></tbody></table>

First, we want the input textbox to have the `value` of the `todo.text` when we enter to the editing mode. We can accomplish this using `:value="todo.text"`. Remember that colon `:` is a shorthand for `v-bind`.

Before, we implemented the `startEditing` function. Now, we need to complete the edit functionality with these two more methods:

- `finishEditing`: applies changes to the `todo.text`. This is triggered by pressing enter or clicking elsewhere (blur).
- `cancelEditing`: discard the changes and leave `todos` list untouched. This happens when you press the esc key.

Let’s go to the `app.js` and define these two functions.

app.js (fragment)

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7
8
9</code></pre></td><td><pre><code>finishEditing(event) {
  if (!this.editing) { return; }
  const textbox = event.target;
  this.editing.text = textbox.value;
  this.editing = null;
},
cancelEditing() {
  this.editing = null;
}</code></pre></td></tr></tbody></table>

Cancel is pretty straightforward. It just set editing to null.

`finishEditing` will take the input current’s value (event.target.value) and copy over the todo element that is currently being edited. That’s it!

[review diff](https://github.com/amejiarosario/vue-todo-app/commit/4af7d31)

### <a href="#DELETE-todo-list-on-click-event" class="headerlink" title="DELETE todo list on @click event"></a>DELETE todo list on @click event

Finally, the last step to complete the CRUD operations is deleting. We are going to listen for click events on the destroy icon:

index.html (fragment)

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1</code></pre></td><td><pre><code>&lt;button class=&quot;destroy&quot; @click=&quot;destroyTodo(todo)&quot;&gt;&lt;/button&gt;</code></pre></td></tr></tbody></table>

also, `destroyTodo` implementation is as follows:

app.js (fragment)

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4</code></pre></td><td><pre><code>destroyTodo(todo) {
  const index = this.todos.indexOf(todo);
  this.todos.splice(index, 1);
},</code></pre></td></tr></tbody></table>

[review diff](https://github.com/amejiarosario/vue-todo-app/commit/a73e058)

### <a href="#Trimming-inputs" class="headerlink" title="Trimming inputs"></a>Trimming inputs

It’s always a good idea to `trim` user inputs, so any accidental whitespace doesn’t get in the way with `textbox.value.trim()`.

[review diff](https://github.com/amejiarosario/vue-todo-app/commit/45b4eed44abd9a4cfec3b3977b61fe7031ff6c4e)

### <a href="#Items-left-count-with-computed-properties" class="headerlink" title="Items left count with  computed properties"></a>Items left count with `computed` properties

Right now the `item left` count is always 0. We want the number of remaining tasks. We could do something like this:

anti-example

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1</code></pre></td><td><pre><code>&lt;strong&gt;{{ todos.filter(t =&gt; !t.isDone).length }}&lt;/strong&gt; item(s) left&lt;/span&gt;</code></pre></td></tr></tbody></table>

That’s a little ugly to stick out all that logic into the template. That’s why Vue has the `computed` section!

app.js (fragment)

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5</code></pre></td><td><pre><code>computed: {
  activeTodos() {
    return this.todos.filter(t =&gt; !t.isDone);
  }
}</code></pre></td></tr></tbody></table>

Now the template is cleaner:

index.html (fragment)

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1</code></pre></td><td><pre><code>&lt;strong&gt;{{ activeTodos.length }}&lt;/strong&gt; item(s) left&lt;/span&gt;</code></pre></td></tr></tbody></table>

You might ask, why use a computed property when we can create a method instead?

> Computed vs. Methods. Computed properties are **cached** and updated when their dependencies changes. The computed property would return immediately without having to evaluate the function if no changes happened. On the other hand, Methods will **always** run the function.

Try completing other tasks and verify that the count gets updated.

![items-left](/images/items-left.gif)

[review diff](https://github.com/amejiarosario/vue-todo-app/commit/24ae5a0f74c226325d88a2aaecad9e40b35760fb)

### <a href="#Clearing-completed-tasks-amp-conditional-rendering-with-v-show" class="headerlink" title="Clearing completed tasks &amp; conditional rendering with v-show"></a>Clearing completed tasks & conditional rendering with `v-show`

We want to show `clear completed` button only if there are any completed task. We can accomplish this with the `v-show` directive:

index.html (fragment)

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1</code></pre></td><td><pre><code>&lt;button class=&quot;clear-completed&quot; @click=&quot;clearCompleted&quot; v-show=&quot;completedTodos.length&quot;&gt;Clear completed&lt;/button&gt;</code></pre></td></tr></tbody></table>

The v-show will hide the element if the expression evaluates to false or 0.

One way to clearing out completed tasks is by assigning the `activeTodos` property to the `todos`:

app.js (fragment)

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3</code></pre></td><td><pre><code>clearCompleted() {
  this.todos = this.activeTodos;
}</code></pre></td></tr></tbody></table>

Also, we have to add the computed property `completedTodos` that we use in the v-show

app.js (fragment)

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3</code></pre></td><td><pre><code>completedTodos() {
  return this.todos.filter(t =&gt; t.isDone);
}</code></pre></td></tr></tbody></table>

[review diff](https://github.com/amejiarosario/vue-todo-app/commit/dd7dd90)

## <a href="#Vue-Conditional-Rendering-v-show-vs-v-if" class="headerlink" title="Vue Conditional Rendering: v-show vs v-if"></a>Vue Conditional Rendering: `v-show` vs `v-if`

`v-show` and `v-if` looks very similar, but they work differently. `v-if` removes the element from the DOM and disable events, while `v-show` hides it with the CSS `display: none;`. So, `v-if` is more expensive than `v-show`.

> If you foresee the element being toggling visibility very often then you should use `v-show`. If not, then use `v-if`.

We can hide the footer and central section if there’s no todo list.

index.html (fragment)

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2</code></pre></td><td><pre><code>&lt;section class=&quot;main&quot; v-if=&quot;todos.length&quot;&gt;... &lt;/section&gt;
&lt;footer class=&quot;footer&quot; v-if=&quot;todos.length&quot;&gt;...&lt;/footer&gt;</code></pre></td></tr></tbody></table>

[review diff](https://github.com/amejiarosario/vue-todo-app/commit/790b241)

## <a href="#Local-Storage" class="headerlink" title="Local Storage"></a>Local Storage

On every refresh, our list gets reset. This is useful for dev but not for users. Let’s persist our Todos in the local storage.

> Local storage vs. Session storage. **Session** data goes away when you close the window or expire after a specific time. **Local storage** doesn’t have an expiration time.

The way `localStorage` works is straightforward. It is global variable and has only 4 methods:

- `localStorage.setItem(key, value)`: key/value storage. `key` and `value` are coerced into a string.
- `localStorage.getItem(key)`: get the item by key.
- `localStorage.removeItem(key)`: remove item matching the key.
- `localStorage.clear()`: clear all items for the current hostname.

We are going to use `getItem` and `setItem`. First we need to define a storage key:

app.js (fragment)

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1</code></pre></td><td><pre><code>const LOCAL_STORAGE_KEY = &#39;todo-app-vue&#39;;</code></pre></td></tr></tbody></table>

Then we replace `data.todos` to get items (if any) from the local storage:

app.js (fragment)

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7
8
9</code></pre></td><td><pre><code>data: {
  title: &#39;Todos&#39;,
  todos: JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [
    { text: &#39;Learn JavaScript ES6+ goodies&#39;, isDone: true },
    { text: &#39;Learn Vue&#39;, isDone: false },
    { text: &#39;Build something awesome&#39;, isDone: false },
  ],
  editing: null,
},</code></pre></td></tr></tbody></table>

We have to use `JSON.parse` because everything gets stored as a string and we need to convert it to an object.

`getItem` will retrieve the saved todos from the `localstorage`. However, we are saying it yet. Let’s see how we can do that.

## <a href="#Vue-Watchers" class="headerlink" title="Vue Watchers"></a>Vue Watchers

For saving, we are going to use the Vue watchers.

> Vue watchers vs. Computed properties. Computed properties are usually used to “compute” and cache the value of 2 or more properties. Watchers are more low level than computed properties. Watchers allow you to “watch” for changes on a single property. This is useful for performing expensive operations like saving to DB, API calls and so on.

app.js (fragment)

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7
8</code></pre></td><td><pre><code>watch: {
  todos: {
    deep: true,
    handler(newValue) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newValue));
    }
  }
},</code></pre></td></tr></tbody></table>

This expression watches for changes in our `todos` data. Deep means that it recursively watches for changes in the values inside arrays and objects. If there’s a change, we save them to the local storage.

[review diff](https://github.com/amejiarosario/vue-todo-app/commit/579da19)

Once you change some todos, you will see they are stored in the local storage. You can access them using the browser’s dev tools:

![local storage](/images/local-storage-devtools.jpg)

The last part to implement is the routing! However, for that, we need to explain some more concepts and will do that in the next post.

---

In the next tutorial, we are going to switch gears a little bit and go deeper into Vue Components, Routing, and Local Storage. Stay tuned!

## <a href="#Summary-Vue-cheatsheet" class="headerlink" title="Summary: Vue cheatsheet"></a>Summary: Vue cheatsheet

We learned a lot! Here is a summary:

Binders

Name

Description

Examples

Mustache

Variable that is replaced with variable's value

    <h1>{{ title }}</h1>

v-bind

Bind to HTML attribute

    <span v-bind:title="tooltip"></span>
    <div v-bind:id="dynamicId"></div>
    <button v-bind:disabled="isButtonDisabled">Button</button>



:

Shortcut for v-bind

    <span :title="tooltip"></span>
    <li v-bind:class="{completed: todo.isDone }"></li>



v-text

Inject text into the element

    <h1 v-text="title"></h1>



v-html

Inject raw HTML into the element

    <blog-post v-html="content"></blog-post>



List Rendering

Name

Description

Examples

v-for

Iterate over elements

    <li v-for="todo in todos"> {{todo.text}}</li>



v-for

Iterate with index

    <li v-for="(item, index) in items">
      {{ parentMessage }} - {{ index }} - {{ item.message }}
    </li>



v-for

Iterate over object's values

    <li v-for="value in object">
      {{ value }}
    </li>



v-for

Iterate over object's keys/values

    <li v-for="(value, key) in object">
      {{ key }}: {{ value }}
    </li>



v-for

Iterate with keys, values and index

    <li v-for="(value, key, index) in object">
      {{index}}.{{ key }}: {{ value }}
    </li>



Events

Name

Description

Examples

v-on:click

Invoke callback on click

    <button class="destroy" v-on:click="destroyTodo(todo)"></button>



@

\`@\` is shorcut for \`v-on:\`

    <input class="edit"
        @keyup.esc="cancelEditing"
        @keyup.enter="finishEditing"
        @blur="finishEditing">



v-on:dblclick

Invoke callback on double-click

    <label @dblclick="startEditing(todo)">{{todo.text}}</label>



@keyup.enter

Invoke callback on keyup enter

    <input @keyup.enter="createTodo">



@keyup.esc

Invoke callback on keyup esc

    <input @keyup.esc="cancelEditing">



Conditional Rendering

Name

Description

Examples

v-show

Show or hide the element if the expression evaluates to truthy

    <button v-show="completedTodos.length">Clear completed</button>



v-if

Remove or add the element if the expression evaluates to truthy

    <footer v-if="todos.length">...</footer>



Automatic Data&lt;-&gt;DOM Sync

Name

Description

Examples

v-model

Keep data and DOM in sync automatially

    <input class="toggle" type="checkbox" v-model="todo.isDone">



Vue instance

Example with all attributes

    // Vue Instance
    const todoApp = new Vue({
      // element matcher
      el: '.todoapp',

      // Reactive data, when something changes here it gets updated on the templates
      // data should be a function so every instance get’s a different data
      data() {
        return {
          title: ‘Todos’,
          editing: null,
        }
      },
      // invoke this functions on event handlers, etc.
      methods: {
        createTodo(event) {
          const textbox = event.target;
          this.todos.push({ text: textbox.value.trim(), isDone: false });
          textbox.value = ‘’;
        },
      },
      // cached methods (only get invokes when data changes)
      computed: {
        activeTodos() {
          return this.todos.filter(t => !t.isDone);
        },
      },
      // watch for changes on the data
      watch: {
        todos: {
          deep: true,
          handler(newValue, oldValue) {
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newValue));
          }
        }
      },
    });



### Now, your turn!

Thanks for reading this far. Here are some things you can do next:

- Found a typo? [Edit this post](https://github.com/amejiarosario/amejiarosario.github.io/edit/source/source/_posts/2018-08-14-Vue-js-Tutorial-for-beginners-Create-a-Todo-App.md).
- Got questions? [comment](#comments-section) below.
- Was it useful? Show your support and share it.

<a href="/How-can-developers-reduce-stress/" class="article-nav-newer"><strong><em></em> newer</strong></a>

How can developers reduce stress

<a href="/Self-balanced-Binary-Search-Trees-with-AVL-tree-Data-Structure-for-beginners/" class="article-nav-older"><strong>older <em></em></strong></a>

Self-balanced Binary Search Trees with AVL in JavaScript

Subscribe & stay up to date!



[<span id="back-to-top" title="Go back to the top of this page"> Top </span>](#) <a href="#" class="p-x-3" title="Improve this post"><em></em> Edit this post</a>

### Contents

1.  <a href="#Setup" class="toc-link"><span class="toc-number">1.</span> <span class="toc-text">Setup</span></a>
    1.  <a href="#Package-json" class="toc-link"><span class="toc-number">1.1.</span> <span class="toc-text">Package.json</span></a>
    2.  <a href="#index-html" class="toc-link"><span class="toc-number">1.2.</span> <span class="toc-text">index.html</span></a>
2.  <a href="#Getting-started-with-Vue" class="toc-link"><span class="toc-number">2.</span> <span class="toc-text">Getting started with Vue</span></a>
    1.  <a href="#Vue-Data-amp-v-text" class="toc-link"><span class="toc-number">2.1.</span> <span class="toc-text">Vue Data &amp; v-text</span></a>
    2.  <a href="#READ-List-rendering-with-v-for" class="toc-link"><span class="toc-number">2.2.</span> <span class="toc-text">READ: List rendering with v-for</span></a>
    3.  <a href="#CREATE-Todo-and-event-directives" class="toc-link"><span class="toc-number">2.3.</span> <span class="toc-text">CREATE Todo and event directives</span></a>
    4.  <a href="#Applying-classes-dynamically-amp-Vue-v-bind" class="toc-link"><span class="toc-number">2.4.</span> <span class="toc-text">Applying classes dynamically &amp; Vue v-bind</span></a>
    5.  <a href="#Keep-DOM-and-data-in-sync-with-Vue-v-model" class="toc-link"><span class="toc-number">2.5.</span> <span class="toc-text">Keep DOM and data in sync with Vue v-model</span></a>
    6.  <a href="#UPDATE-todo-list-with-a-double-click" class="toc-link"><span class="toc-number">2.6.</span> <span class="toc-text">UPDATE todo list with a double-click</span></a>
    7.  <a href="#DELETE-todo-list-on-click-event" class="toc-link"><span class="toc-number">2.7.</span> <span class="toc-text">DELETE todo list on @click event</span></a>
    8.  <a href="#Trimming-inputs" class="toc-link"><span class="toc-number">2.8.</span> <span class="toc-text">Trimming inputs</span></a>
    9.  <a href="#Items-left-count-with-computed-properties" class="toc-link"><span class="toc-number">2.9.</span> <span class="toc-text">Items left count with computed properties</span></a>
    10. <a href="#Clearing-completed-tasks-amp-conditional-rendering-with-v-show" class="toc-link"><span class="toc-number">2.10.</span> <span class="toc-text">Clearing completed tasks &amp; conditional rendering with v-show</span></a>
3.  <a href="#Vue-Conditional-Rendering-v-show-vs-v-if" class="toc-link"><span class="toc-number">3.</span> <span class="toc-text">Vue Conditional Rendering: v-show vs v-if</span></a>
4.  <a href="#Local-Storage" class="toc-link"><span class="toc-number">4.</span> <span class="toc-text">Local Storage</span></a>
5.  <a href="#Vue-Watchers" class="toc-link"><span class="toc-number">5.</span> <span class="toc-text">Vue Watchers</span></a>
6.  <a href="#Summary-Vue-cheatsheet" class="toc-link"><span class="toc-number">6.</span> <span class="toc-text">Summary: Vue cheatsheet</span></a>
