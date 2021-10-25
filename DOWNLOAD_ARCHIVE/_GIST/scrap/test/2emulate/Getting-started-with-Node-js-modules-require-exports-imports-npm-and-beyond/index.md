<a href="/categories/coding/" class="category-link">Coding</a>

# Getting started with Node.js modules: require, exports, imports and beyond

<span title="Last time this post was updated"> Last updated June 28th 2019 </span> <span class="m-x-2" title="Pageviews"> 321.0k </span> <span class="m-x-2" title="Click to go to the comments section"> [ <span class="disqus-comment-count" data-disqus-url="https://master--bgoonz-blog.netlify.app/Getting-started-with-Node-js-modules-require-exports-imports-npm-and-beyond/">0</span>](#disqus_thread) </span>

- <a href="/tags/nodejs/" class="tag-list-link">nodejs</a><span class="tag-list-count">12</span>

![Getting started with Node.js modules: require, exports, imports and beyond](/images/node-modules-large.png)

Getting started with Node.js modules: `require`, `exports`, `imports`, and beyond.

Modules are a crucial concept to understand Node.js projects. In this post, we cover Node modules: `require`, `exports` and, the future `import`.

<span id="more"></span>

Node modules allow you to write reusable code. You can nest them one inside another. Using the Node Package Manager (NPM), you can publish your modules and make them available to the community. Also, NPM enables you to reuse modules created by other developers.

> We are using Node 12.x for the examples and ES6+ syntax. However, the concepts are valid for any version.

In this section, we are going to cover how to create Node modules and each one of its components:

- Require
- Exports
- Module (module.exports vs. export)
- Import

## <a href="#Require" class="headerlink" title="Require"></a>Require

`require` are used to consume modules. It allows you to include modules in your programs. You can add built-in core Node.js modules, community-based modules (`node_modules`), and local modules.

Let’s say we want to read a file from the filesystem. Node has a core module called ‘fs’:

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6</code></pre></td><td><pre><code>const fs = require(&#39;fs&#39;);

fs.readFile(&#39;./file.txt&#39;, &#39;utf-8&#39;, (err, data) =&gt; {
if(err) { throw err; }
console.log(&#39;data: &#39;, data);
});</code></pre></td></tr></tbody></table>

As you can see, we imported the “fs” module into our code. It allows us to use any function attached to it, like “readFile” and many others.

The `require` function will look for files in the following order:

1.  **Built-in** core Node.js modules (like `fs`)
2.  **NPM Modules**. It will look in the `node_modules` folder.
3.  **Local Modules**. If the module name has a `./`, `/` or `../`, it will look for the directory/file in the given path. It matches the file extensions: `*.js`, `*.json`, `*.mjs`, `*.cjs`, `*.wasm` and `*.node`.

Let’s now explain each in little more details with

### <a href="#Built-in-Modules" class="headerlink" title="Built-in Modules"></a>Built-in Modules

When you install node, it comes with many built-in modules. Node comes with batteries included ;)

Some of the most used core modules are:

- [fs](https://nodejs.org/api/fs.html): Allows you to manipulate (create/read/write) files and directories.
- [path](https://nodejs.org/api/path.html): utilities to work with files and directories paths.
- [http](https://nodejs.org/api/http.html): create HTTP servers and clients for web development.
- [url](https://nodejs.org/api/url.html): utilities for parsing URLs and extracting elements from it.

These you don’t have to install it, you can import them and use them in your programs.

### <a href="#NPM-Modules" class="headerlink" title="NPM Modules"></a>NPM Modules

NPM modules are 3rd-party modules that you can use after you install them. To name a few:

- [lodash](https://www.npmjs.com/package/lodash): a collection of utility functions for manipulating arrays, objects, and strings.
- [request](https://www.npmjs.com/package/request): HTTP client simpler to use than the built-in `http` module.
- [express](https://www.npmjs.com/package/express): HTTP server for building websites and API. Again, simpler to use than the built-in `http` module.

These you have to install them first, like this:

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1</code></pre></td><td><pre><code>npm install express</code></pre></td></tr></tbody></table>

and then you can reference them like built-in modules, but this time they are going to be served from the `node_modules` folder that contains all the 3rd-party libraries.

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1</code></pre></td><td><pre><code>const express = require(&#39;express&#39;);</code></pre></td></tr></tbody></table>

### <a href="#Creating-your-own-Nodejs-modules" class="headerlink" title="Creating your own Nodejs modules"></a>Creating your own Nodejs modules

If you can’t find a built-in or 3rd-party library that does what you want, you will have to develop it yourself. In the following sections, you are going to learn how to do that using `exports`.

## <a href="#Exports" class="headerlink" title="Exports"></a>Exports

The `exports` keyword gives you the chance to “export” your objects and methods. Let’s do an example:

circle.js

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4</code></pre></td><td><pre><code>const PI = 3.14159265359;

exports.area = radius =&gt; (radius \*_ 2) _ PI;
exports.circumference = radius =&gt; 2 _ radius _ PI;</code></pre></td></tr></tbody></table>

In the code below, we are exporting the `area` and `circumference` functions. We defined the `PI` constant, but this is only accessible within the module. Only the elements associated with `exports` are available outside the module.

So, we can consume it using `require` in another file like follows:

main.js

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6</code></pre></td><td><pre><code>const circle = require(&#39;./circle&#39;);

const r = 3;
console.log(`Circle with radius ${r} has area: ${circle.area(r)}; circumference: ${circle.circumference(r)}`);</code></pre></td></tr></tbody></table>

Noticed that this time we prefix the module name with `./`. That indicates that the module is a local file.

## <a href="#Module-Wrapper" class="headerlink" title="Module Wrapper"></a>Module Wrapper

You can think of each Node.js module as a self-contained function like the following one:

Module Wrapper

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6</code></pre></td><td><pre><code>(function (exports, require, module, __filename, __dirname) {
  module.exports = exports = {};

// Your module code ...

});</code></pre></td></tr></tbody></table>

We have already covered `exports` and `require`. Notice the relationship between `module.exports` and `exports`. They point to the same reference. But, if you assign something directly to `exports` you will break its link to `module.exports` — more on that in the next section.

For our convenience `__filename` and `__dirname` are defined. They provide the full path to the current file and directory. The latter excludes the filename and prints out the directory path.

For instance, for our `./circle.js` module, it would be something like this:

- `__filename`: `/User/adrian/code/circle.js`

- `__dirname`: `/User/adrian/code`

Ok, we have covered `exports`, `require`, `__filename`, and `__dirname`. The only one we haven’t covered is `module`. Let’s go for it!

## <a href="#Module-exports-vs-Exports" class="headerlink" title="Module.exports vs. Exports"></a>Module.exports vs. Exports

The `module` is not global; it is local for each module. It contains metadata about a module like id, exports, parent, children, and so on.

`exports` is an alias of `module.exports`. Consequently, whatever you assign to `exports` is also available on `module.exports`. However, if you assign something directly to exports, then you lose the shortcut to `module.exports`. E.g.

cat.js

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7
8
9</code></pre></td><td><pre><code>class Cat {
  makeSound() {
    return `${this.constructor.name}: Meowww`;
  }
}

// exports = Cat; // It will not work with `new Cat();`
// exports.Cat = Cat; // It will require `new Cat.Cat();` to work (yuck!)
module.exports = Cat;</code></pre></td></tr></tbody></table>

Try the following case with `exports` and then with `module.exports`.

main.js

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4</code></pre></td><td><pre><code>const Cat = require(&#39;./cat&#39;);

const cat = new Cat();
console.log(cat.makeSound());</code></pre></td></tr></tbody></table>

To sum up, when to use `module.exports` vs `exports`:

Use `exports` to:

- Export named function. e.g. `exports.area`, `exports.circumference`.

Use `module.exports` to:

1.  If you want to export an object, class, function at the root level (e.g. `module.exports = Cat`)

2.  If you prefer to return a single object that exposes multiple assignments. e.g.`module.exports = {area, circumference};`

## <a href="#Imports" class="headerlink" title="Imports"></a>Imports

Starting with version 8.5.0+, Node.js supports ES modules natively with a feature flag and new file extension `*.mjs`.

For instance, our previous `circle.js` can be rewritten as `circle.mjs` as follows:

circle.mjs

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7
8
9</code></pre></td><td><pre><code>const PI = 3.14159265359;

export function area(radius) {
return (radius \*_ 2) _ PI;
}

export function circumference(radius) {
return 2 _ radius _ PI;
}</code></pre></td></tr></tbody></table>

Then, we can use import:

main.mjs

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7</code></pre></td><td><pre><code>import { area, circumference } from &#39;./circle.mjs&#39;;

const r = 3;

console.log(`Circle with radius ${r} has area: ${area(r)}; circunference: ${circumference(r)}`);</code></pre></td></tr></tbody></table>

And, finally you can run it using the experimental module feature flag:

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1</code></pre></td><td><pre><code>node --experimental-modules main.mjs</code></pre></td></tr></tbody></table>

If you don’t like experimental modules, another alternative is to use a transpiler. That converts modern JavaScript to older versions for you. Good options are [TypeScript](https://www.typescriptlang.org/docs/handbook/modules.html), [Babel](https://babeljs.io/docs/en/babel-plugin-transform-modules-commonjs), and [Rollup](https://rollupjs.org/guide/en#importing).

### <a href="#Troubleshooting-import-and-require-issues" class="headerlink" title="Troubleshooting import and require issues"></a>Troubleshooting `import` and `require` issues

#### <a href="#Experimental-Flag" class="headerlink" title="Experimental Flag"></a>Experimental Flag

If you don’t use the experimental flag `node --experimental-modules` and you try to use `import` you will get an error like this:

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5</code></pre></td><td><pre><code>internal/modules/cjs/loader.js:819
  throw new ERR_REQUIRE_ESM(filename);
  ^

Error [ERR_REQUIRE_ESM]: Must use import to load ES Module: bla bla blah</code></pre></td></tr></tbody></table>

#### <a href="#File-extension-mjs-vs-js-or-cjs" class="headerlink" title="File extension .mjs vs .js (or .cjs)"></a>File extension .mjs vs .js (or .cjs)

If you have a `*.mjs` file you cannot use `require` or it will throw an error (`ReferenceError: require is not defined`). `.mjs` is for `import` ECMAScript Modules and `.js` is for regular `require` modules.

However, with `*.mjs` you can load both kinds of modules!

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7
8
9
10</code></pre></td><td><pre><code>import { area, circumference } from &#39;./circle.mjs&#39;;
import Cat from &#39;./cat.js&#39;;

const r = 3;
console.log(`Circle with radius ${r} has area: ${area(r)}; circumference: ${circumference(r)}`);

const cat = new Cat();
console.log(cat.makeSound());</code></pre></td></tr></tbody></table>

Notice that `cat.js` is using commonJS modules.

## <a href="#Summary" class="headerlink" title="Summary"></a>Summary

We learned about how to create Node.js modules and used it in our code. Modules allow us to reuse code easily. They provide functionality that is isolated from other modules. The `require` function is used to load modules. The `exports` and `module.exports` allow us to define what parts of our code we want to expose. We also explored the difference between `module.exports` and `exports`. Finally, we took a quick pick about what’s coming up for modules using `imports`.

### Now, your turn!

Thanks for reading this far. Here are some things you can do next:

- Found a typo? [Edit this post](https://github.com/amejiarosario/amejiarosario.github.io/edit/source/source/_posts/2016-08-12-Getting-started-with-Node-js-modules-require-exports-imports-npm-and-beyond.md).
- Got questions? [comment](#comments-section) below.
- Was it useful? Show your support and share it.

<a href="/Node-Package-Manager-NPM-Tutorial/" class="article-nav-newer"><strong><em></em> newer</strong></a>

Node Package Manager (NPM) Tutorial

<a href="/List-tasks-in-npm-grunt-gulp-and-rake/" class="article-nav-older"><strong>older <em></em></strong></a>

List tasks in NPM, Yarn, Grunt, Gulp and Rake

Subscribe & stay up to date!



[<span id="back-to-top" title="Go back to the top of this page"> Top </span>](#) <a href="#" class="p-x-3" title="Improve this post"><em></em> Edit this post</a>

### Contents

1.  <a href="#Require" class="toc-link"><span class="toc-number">1.</span> <span class="toc-text">Require</span></a>
    1.  <a href="#Built-in-Modules" class="toc-link"><span class="toc-number">1.1.</span> <span class="toc-text">Built-in Modules</span></a>
    2.  <a href="#NPM-Modules" class="toc-link"><span class="toc-number">1.2.</span> <span class="toc-text">NPM Modules</span></a>
    3.  <a href="#Creating-your-own-Nodejs-modules" class="toc-link"><span class="toc-number">1.3.</span> <span class="toc-text">Creating your own Nodejs modules</span></a>
2.  <a href="#Exports" class="toc-link"><span class="toc-number">2.</span> <span class="toc-text">Exports</span></a>
3.  <a href="#Module-Wrapper" class="toc-link"><span class="toc-number">3.</span> <span class="toc-text">Module Wrapper</span></a>
4.  <a href="#Module-exports-vs-Exports" class="toc-link"><span class="toc-number">4.</span> <span class="toc-text">Module.exports vs. Exports</span></a>
5.  <a href="#Imports" class="toc-link"><span class="toc-number">5.</span> <span class="toc-text">Imports</span></a>
    1.  <a href="#Troubleshooting-import-and-require-issues" class="toc-link"><span class="toc-number">5.1.</span> <span class="toc-text">Troubleshooting import and require issues</span></a>
        1.  <a href="#Experimental-Flag" class="toc-link"><span class="toc-number">5.1.1.</span> <span class="toc-text">Experimental Flag</span></a>
        2.  <a href="#File-extension-mjs-vs-js-or-cjs" class="toc-link"><span class="toc-number">5.1.2.</span> <span class="toc-text">File extension .mjs vs .js (or .cjs)</span></a>
6.  <a href="#Summary" class="toc-link"><span class="toc-number">6.</span> <span class="toc-text">Summary</span></a>
