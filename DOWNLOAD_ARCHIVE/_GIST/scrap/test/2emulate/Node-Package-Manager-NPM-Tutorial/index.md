<a href="/categories/coding/" class="category-link">Coding</a>

# Node Package Manager (NPM) Tutorial

<span title="Last time this post was updated"> Last updated August 19th 2016 </span> <span class="m-x-2" title="Pageviews"> 3.2k </span> <span class="m-x-2" title="Click to go to the comments section"> [ <span class="disqus-comment-count" data-disqus-url="https://master--bgoonz-blog.netlify.app/Node-Package-Manager-NPM-Tutorial/">0</span>](#disqus_thread) </span>

- <a href="/tags/nodejs/" class="tag-list-link">nodejs</a><span class="tag-list-count">12</span>

![Node Package Manager (NPM) Tutorial](/images/node-package-manager-large.png)

This tutorial goes from how to install NPM to manage packages dependencies. While we are doing this, we will use practical examples to drive the concepts home.

<span id="more"></span>

Node Package Manager (NPM) is a CLI tool to manage dependencies. It also allows you to publish packages to the NPM website and find new modules.

In this section, we are going to get hands-on NPM. We will cover how to install it to how to download, uninstall, and manage packages. While we are doing this, we will use practical examples to drive the concepts home.

## <a href="#How-to-install-update-NPM" class="headerlink" title="How to install/update NPM?"></a>How to install/update NPM?

NPM is bundle into the Node installation. So, if you have Node, then you have NPM already. But, NPM gets updated more often than Node. So, from time to time you need to get the latest version.

You can check the NPM version and install latest by running:

Installing NPM

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5</code></pre></td><td><pre><code>## get version
npm -v

## update NPM to latest and greatest

npm install -g npm</code></pre></td></tr></tbody></table>

You can also use the shortcut for `npm install` like `npm i`.

## <a href="#How-to-start-a-NodeJs-project" class="headerlink" title="How to start a NodeJs project?"></a>How to start a NodeJs project?

Node projects and packages use a particular file called `package.json`. It contains dependencies and more information to run the project. Let’s start by creating that using the `npm init` command. We are going to call our project `meanshop2`, but call it whatever you want ;)

initializing a Node project/package

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2</code></pre></td><td><pre><code>mkdir meanshop2 &amp;&amp; cd meanshop2
npm init --yes</code></pre></td></tr></tbody></table>

This set of commands created a new folder called `meanshop2`. The `init` command will create `package.json` file for us. The `--yes` option go with the defaults. Otherwise, it will ask us to fill out every property in package.json.

package.json

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
12</code></pre></td><td><pre><code>{
  &quot;name&quot;: &quot;meanshop2&quot;,
  &quot;version&quot;: &quot;1.0.0&quot;,
  &quot;description&quot;: &quot;&quot;,
  &quot;main&quot;: &quot;index.js&quot;,
  &quot;scripts&quot;: {
    &quot;test&quot;: &quot;echo \&quot;Error: no test specified\&quot; &amp;&amp; exit 1&quot;
  },
  &quot;keywords&quot;: [],
  &quot;author&quot;: &quot;&quot;,
  &quot;license&quot;: &quot;ISC&quot;
}</code></pre></td></tr></tbody></table>

Feel free to edit any of the properties values, such as author, description. Note that the version starts with `1.0.0`. We are going to talk more about versioning later on this tutorial.

## <a href="#How-to-download-NPM-packages" class="headerlink" title="How to download NPM packages?"></a>How to download NPM packages?

You can download NPM packages using `npm install <package_name>`. By default, npm will grab the latest version, but you can also specify an exact version.

Let’s install two packages `lodash` and `express` as follows:

Installing NPM packages

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5</code></pre></td><td><pre><code>## install latest and save on package.json
npm install lodash --save

## install specific version and save dep on package.json

npm install express@4.14.0 --save</code></pre></td></tr></tbody></table>

`npm install` is going to create a new folder called `node_modules`, where all the dependencies live.

Notice that for the second package we are specifying the exact version. You can use the `@` symbol and then the version number.

Go to your `package.json` and verify that they both are listed as dependencies. You can install all the dependencies by running this command:

Install all dependencies from a package.json

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2</code></pre></td><td><pre><code>npm install
</code></pre></td></tr></tbody></table>

NPM will add packages to dependencies if you use the `--save` flag. Otherwise, `npm` won’t include it. To automate the process, you can run:

Smarter NPM's defaults

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2</code></pre></td><td><pre><code>npm config set save=true
npm config set save-exact=true</code></pre></td></tr></tbody></table>

The `save=true` will make that the packages get auto-installed. `save-exact=true` will lock the current version and prevent automatic updates and break the project.

To sum up, here are the commands:

NPM install commands

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
14</code></pre></td><td><pre><code>## install a package globally
npm install -g &lt;package_name&gt;

## install a package locally (node_modules)

npm install &lt;package_name&gt;

## install a package locally and save it as dependency (package.json)

npm install &lt;package_name&gt; --save-dev

## install package locally, save it as a dependency with the exact version

npm install &lt;package_name&gt; --save --save-exact

## install all dependencies listed in package.json

npm install</code></pre></td></tr></tbody></table>

Usually, you use `--save-dev` vs. `--save` when you need use package that is not part of the project. For instance, testing libraries, building assets tools, etc.

You can search for all NPM modules on [npmjs.com](https://www.npmjs.com/browse/star)

## <a href="#How-to-view-my-installed-NPM-packages" class="headerlink" title="How to view my installed NPM packages?"></a>How to view my installed NPM packages?

Sometimes it is useful to see the list of packages that you have installed on your system. You can do that with the following commands:

List packages

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5</code></pre></td><td><pre><code>## list all installed dependencies
npm ls --depth=0

## list all installed globally dependencies

npm ls -g --depth=0</code></pre></td></tr></tbody></table>

You can use `--depth=0` to prevent listing the dependencies’ dependencies.

## <a href="#What-is-SemVer" class="headerlink" title="What is SemVer?"></a>What is SemVer?

Semantic Versioning (SemVer) is versioning convention composed of three numbers: `Major.Minor.Patch` or also `Breaking.Feature.Patch`:

- **Major releases: breaking changes.** Major changes that change (breaks) how the API worked before. For instance, removed functions.
- **Minor releases: new features**. Changes that keeps the API working as before and adds new functionality.
- **Patch releases: bug fixes**. Patches don’t add functionality nor remove/changes functionality. It’s scope only to bug fixes.

You can specify in the `package.json` how packages can be updated. You can use `~` for updating patches. `^` for upgrading minor releases and `*` for major releases.

![SemVer Breaking.Feature.Fix](/images/semver-major-minor-patch-breaking-feature-fix.png)

Like this:

- Patch releases: `~1.0.7`, or `1.0.x` or just `1.0`.
- Minor releases: `^1.0.7`, or `1.x` or just `1`.
- Major releases: `*` or `x`.

As you could imagine, not all developers respect the Semantic Version rules. Try to follow the rules yourself, but don’t trust that all will do. You can have your project working well with a `1.0.8` version and all in a sudden it breaks with `1.0.9`. It happened to me before, so I prefer to use: `--save-exact`, when it makes sense.

## <a href="#How-to-uninstall-NPM-packages" class="headerlink" title="How to uninstall NPM packages?"></a>How to uninstall NPM packages?

You can uninstall NPM packages using the following commands:

Uninstalling NPM packages

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
11</code></pre></td><td><pre><code>## uninstall the package and leave it listed as dep
npm uninstall lodash

## uninstall and remove from dependencies

npm uninstall --save lodash

## uninstall global package

npm uninstall -g &lt;package_name&gt;

## remove uninstalled packages from node_modules

npm prune # remove extraneous</code></pre></td></tr></tbody></table>

## <a href="#Summary" class="headerlink" title="Summary"></a>Summary

NPM is a powerful tool. It helps us to create Node projects/modules, manage its dependencies, and much more. In this section, we covered the main commands that you would most often.

Furthermore, we cover SemVer. It is used in many systems (Ruby Gems, etc.) not just in the Node community. SemVer is a three-part number versioning system: Major.Minor.Patch. You can also think as Breaking.Feature.Patch.

### Now, your turn!

Thanks for reading this far. Here are some things you can do next:

- Found a typo? [Edit this post](https://github.com/amejiarosario/amejiarosario.github.io/edit/source/source/_posts/2016-08-19-Node-Package-Manager-NPM-Tutorial.md).
- Got questions? [comment](#comments-section) below.
- Was it useful? Show your support and share it.

<a href="/Building-a-Node-js-static-file-server-files-over-HTTP-using-ES6/" class="article-nav-newer"><strong><em></em> newer</strong></a>

Building a Node.js static file server (files over HTTP) using ES6+

<a href="/Getting-started-with-Node-js-modules-require-exports-imports-npm-and-beyond/" class="article-nav-older"><strong>older <em></em></strong></a>

Getting started with Node.js modules: require, exports, imports and beyond

Subscribe & stay up to date!



[<span id="back-to-top" title="Go back to the top of this page"> Top </span>](#) <a href="#" class="p-x-3" title="Improve this post"><em></em> Edit this post</a>

### Contents

1.  <a href="#How-to-install-update-NPM" class="toc-link"><span class="toc-number">1.</span> <span class="toc-text">How to install/update NPM?</span></a>
2.  <a href="#How-to-start-a-NodeJs-project" class="toc-link"><span class="toc-number">2.</span> <span class="toc-text">How to start a NodeJs project?</span></a>
3.  <a href="#How-to-download-NPM-packages" class="toc-link"><span class="toc-number">3.</span> <span class="toc-text">How to download NPM packages?</span></a>
4.  <a href="#How-to-view-my-installed-NPM-packages" class="toc-link"><span class="toc-number">4.</span> <span class="toc-text">How to view my installed NPM packages?</span></a>
5.  <a href="#What-is-SemVer" class="toc-link"><span class="toc-number">5.</span> <span class="toc-text">What is SemVer?</span></a>
6.  <a href="#How-to-uninstall-NPM-packages" class="toc-link"><span class="toc-number">6.</span> <span class="toc-text">How to uninstall NPM packages?</span></a>
7.  <a href="#Summary" class="toc-link"><span class="toc-number">7.</span> <span class="toc-text">Summary</span></a>
