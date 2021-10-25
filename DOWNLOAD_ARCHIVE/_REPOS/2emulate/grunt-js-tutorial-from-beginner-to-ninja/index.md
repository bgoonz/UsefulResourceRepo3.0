<a href="/categories/coding/" class="category-link">Coding</a>

# Grunt JS tutorial from Beginner to Ninja

<span title="Last time this post was updated"> Last updated October 7th 2014 </span> <span class="m-x-2" title="Pageviews"> 54.6k </span> <span class="m-x-2" title="Click to go to the comments section"> [ <span class="disqus-comment-count" data-disqus-url="https://master--bgoonz-blog.netlify.app/grunt-js-tutorial-from-beginner-to-ninja/">0</span>](#disqus_thread) </span>

- <a href="/tags/gruntjs/" class="tag-list-link">gruntjs</a><span class="tag-list-count">2</span>
- <a href="/tags/nodejs/" class="tag-list-link">nodejs</a><span class="tag-list-count">12</span>

![Grunt JS tutorial from Beginner to Ninja](/images/gruntjs_large.png)

Sometimes you find yourself doing the same tasks again and again, especially during web development. It is time to automate repetitive tasks and use that time in more creative activities. This is where Grunt comes in. Grunt is a popular task runner that runs on NodeJS. It can minify CSS/JavaScript, run linting tools (JSHint, JSlint, CSSlint), deploy to server, and run test cases when you change a file to name a few. All the information I found about Grunt and similar Javascript test runners were too verbose and not very helpful to get started quickly. So, I decided to make this tutorial.

<span id="more"></span>

## <a href="#Beginner-Grunt-js-101" class="headerlink" title="Beginner: Grunt.js 101"></a>Beginner: Grunt.js 101

Grunt.js is a Javascript task runner. At its bare core it does file manipulation (mkdir, reads, write, copy), print messages and helper methods to organize and configure multiple tasks. It takes care of differences among Operating Systems for you. However, the real power comes in with the number of available plugins ready to use. Usually named `grunt-contrib-*`. Let’s start from scratch!

## <a href="#Hello-Wold-from-GruntJS" class="headerlink" title="Hello Wold from GruntJS"></a>Hello Wold from GruntJS

You need to [install Node.js and NPM](/blog/2014/10/01/creating-a-restful-api-tutorial-with-nodejs-and-mongodb/#nodejs) to follow along with this example.

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7</code></pre></td><td><pre><code>mkdir grunt101 &amp;&amp; cd grunt101

## start Node.js project and answer the questions (or leave it in blank)

npm init

## add Grunt as a dependency

npm install grunt --save-dev</code></pre></td></tr></tbody></table>

If you run the grunt command you will get a message like this:

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3</code></pre></td><td><pre><code>grunt
## A valid Gruntfile could not be found. Please see the getting started guide for more information on how to configure grunt: http://gruntjs.com/getting-started
## Fatal error: Unable to find Gruntfile.</code></pre></td></tr></tbody></table>

So, let’s create the `Gruntfile.js` file:

Gruntfile.js

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5</code></pre></td><td><pre><code>var grunt = require(&#39;grunt&#39;);

grunt.registerTask(&#39;default&#39;, &#39;default task description&#39;, function(){
console.log(&#39;hello world&#39;);
});</code></pre></td></tr></tbody></table>

If you run `grunt` again, you will see a message. The default task is run when nothing else it is specified. We are going to create a 2nd task called ‘hello’ and it is going to accept a parameter that we can pass along with the task name separated with a colon. As follows: `grunt hello:adrian`. We can handle errors using `grunt.warn`. Every time a `grunt.warn` is found the task will stop executing, and it will give its warning message.. You can override using `--force`. Try all this commands and noticed the different effects: `grunt`, `grunt hello`, `grunt hello --force`, `grunt hello:adrian`.

Gruntfile.js

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
12</code></pre></td><td><pre><code>var grunt = require(&#39;grunt&#39;);

grunt.registerTask(&#39;default&#39;, &#39;default task description&#39;, function(){
console.log(&#39;hello world&#39;);
});

grunt.registerTask(&#39;hello&#39;, &#39;say hello&#39;, function(name){
if(!name || !name.length)
grunt.warn(&#39;you need to provide a name.&#39;);

console.log(&#39;hello &#39; + name);
});</code></pre></td></tr></tbody></table>

We can chain multiple grunt tasks by using and array. Change the `Gruntfile.js` for the following and see what will happen when you type `grunt`.

Gruntfile.js

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
14</code></pre></td><td><pre><code>var grunt = require(&#39;grunt&#39;);

grunt.registerTask(&#39;world&#39;, &#39;world task description&#39;, function(){
console.log(&#39;hello world&#39;);
});

grunt.registerTask(&#39;hello&#39;, &#39;say hello&#39;, function(name){
if(!name || !name.length)
grunt.warn(&#39;you need to provide a name.&#39;);

console.log(&#39;hello &#39; + name);
});

grunt.registerTask(&#39;default&#39;, [&#39;world&#39;, &#39;hello:adrian&#39;]);</code></pre></td></tr></tbody></table>

## <a href="#Reference-1-Grunt-tasks-config-and-warnings" class="headerlink" title="Reference 1: Grunt tasks, config and warnings"></a>Reference 1: Grunt tasks, config and warnings

Here are some of the methods that we have used so far and some more that we will use in the next examples:

### <a href="#Grunt-config" class="headerlink" title="Grunt config"></a>Grunt config

- [grunt.initConfig(configObject)](http://gruntjs.com/api/grunt.config#grunt.config.init): Initialize a configuration object. It can be accessed by `grunt.config.get`.

- [grunt.config.get(\[prop\])](http://gruntjs.com/api/grunt.config#grunt.config.get): get the prop value from the `grunt.initConfig`. The property could be deeply nested (e.g. `concat.options.dest`) and the values inside `<% %>` are expanded.

### <a href="#Grunt-tasks" class="headerlink" title="Grunt tasks"></a>Grunt tasks

- [grunt.registerTask(taskName\[, description\], taskFunction)](http://gruntjs.com/api/grunt.task#grunt.task.registertask): register a task.
  - **taskName**: required to register the task and it allows the task to be e executed with `grunt taskName` or called by other grunt task.
  - **description**: (optional) string describing task.
  - **taskFunction**: function which can accept parameters separated by colons (:). E.g. `grunt taskName:arg1:arg2`

<!-- -->

- [grunt.task.registerTask(taskName, taskList)](http://gruntjs.com/api/grunt.task#grunt.task.registertask): register task.
  - **taskName**: required to register the task and it allows the task to be e executed with `grunt taskName` or called by other grunt task.
  - **taskList**: array of taskNames to be executed, in the order specified, when the taskName is called. E.g.: `grunt.registerTask('concatAll', ['concat:templates', 'concat:javascripts', 'concat:stylesheets']);`

<!-- -->

- [grunt.registerMultiTask(taskName\[, description\], taskFunction)](http://gruntjs.com/api/grunt.task#grunt.task.registermultitask): multi-tasks accepts the same parameters as `grunt.registerTask`. However, it reads `grunt.initConfig` parameters differently:
  1.  Grunt looks for a config that matches the taskName.
  2.  MultiTask can have multiple configurations referred as `this.target` and the value as `this.data`.
  3.  All the “targets” are run if it is not specified otherwise.

registerMultiTask Example

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
11</code></pre></td><td><pre><code>grunt.initConfig({
  print: {
    target1: [&#39;index.html&#39;, &#39;src/styles.css&#39;, 2],
    target2: &#39;data&#39;,
    hello: &#39;world&#39;
  }
});

grunt.registerMultiTask(&#39;print&#39;, &#39;print targets&#39;, function() {
grunt.log.writeln(this.target + &#39;: &#39; + this.data);
});</code></pre></td></tr></tbody></table>

You can specify one target `grunt print:hello` or run all them `grunt print` which will produce this output:

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7
8</code></pre></td><td><pre><code>Running &quot;print:target1&quot; (print) task
target1: index.html,src/styles.css,2

Running &quot;print:target2&quot; (print) task
target2: data

Running &quot;print:hello&quot; (print) task
hello: world</code></pre></td></tr></tbody></table>

### <a href="#Grunt-Errors-and-Warnings" class="headerlink" title="Grunt Errors and Warnings"></a>Grunt Errors and Warnings

- [grunt.fail.warn(error \[, errorcode\])](http://gruntjs.com/api/grunt.fail#grunt.fail.warn): prints to STDOUT a message and abort grunt executions. It can be override using `--force` and it can show the stack trace if `--stack` is given. e.g. `grunt taskName --force --stack`.

- [grunt.fail.fatal(error \[, errorcode\])](http://gruntjs.com/api/grunt.fail#grunt.fail.fatal): similar to `warn`, displays message to STDOUT and terminate Grunt. Cannot be `--force`ed and it emits a beep unless `--no-color` parameter is passed. It also accepts `--stack`. E.g. `grunt taskName --no-color --stack`.

## <a href="#Example-Forex-and-grunt-multiple-async-calls-handling" class="headerlink" title="Example: Forex and grunt multiple async calls handling"></a>Example: Forex and grunt multiple async calls handling

The idea is get conversion rates from a base currency (e.g. USD) to a target currency (e.g. EUR). We are using a `registerMultiTask`, so the taskName ‘currency’ matches its property in the `config.init`. Notice that we can has additional arbitrary data such as endpoint URL.

Async calls can be a little tricky in Javascript. We are going to do multiple HTTP request. Since `http.get` is async Grunt will finish the task before even receiving any response. `this.async()` solves the issue, we just need to call it when we are done.

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
47
48
49</code></pre></td><td><pre><code>module.exports = function(grunt){
  grunt.config.init({
    currency: {
      USD: [&#39;EUR&#39;, &#39;GBP&#39;, &#39;DOP&#39;],
      DOP: [&#39;USD&#39;]
    },

    endpoint: {
      host: &#39;http://www.freecurrencyconverter3api.com&#39;,
      path: &#39;/api/v2/convert?compact=y&amp;q=&#39;
    }

});

grunt.registerMultiTask(&#39;currency&#39;, &#39;Fetches currency exchange rates&#39;, function() {
var http = require(&#39;http&#39;),
done = this.async(),
responses = 0;

    var baseCurrency = this.target;
    var targetCurrencies = this.data;

    grunt.config.requires(&#39;endpoint&#39;);

    targetCurrencies.forEach(function(targetCurrency, i, arr){
      var convertTo = baseCurrency + &#39;_&#39; + targetCurrency,
        body = [];
        url = grunt.config.get(&#39;endpoint.host&#39;);

      url += grunt.config.get(&#39;endpoint.path&#39;) + convertTo;

      http.get(url, function(res) {
        res.on(&#39;data&#39;, function(data){
          body.push(data);
        });

        res.on(&#39;end&#39;, function () {
          var conversion = JSON.parse(body.join());
          grunt.log.ok(baseCurrency + &#39;/&#39; + targetCurrency + &#39; =&gt; &#39; + conversion[convertTo].val);
          // if got all responses: done!
          if(responses++ == arr.length - 1)
            done();
        });
      }).on(&#39;error&#39;, function (err) {
        grunt.warn(&#39;Please verify endpoint host and path: &lt;&#39;+ url +&#39;&gt;. It might be incorrect or down.&#39;);
        done(err);
      });
    });

});
}</code></pre></td></tr></tbody></table>

## <a href="#Reference-2-Grunt-Files-and-logs" class="headerlink" title="Reference 2: Grunt Files and logs"></a>Reference 2: Grunt Files and logs

### <a href="#Grunt-logs" class="headerlink" title="Grunt logs"></a>Grunt logs

All them stars with the prefix `grunt.log` and accepts a `msg` which is displayed to STDOUT (usually the screen). Here are the differences between them:

- [writeln(\[msg\]), write(msg) and subhead(msg)](http://gruntjs.com/api/grunt.log#grunt.log.writeln-grunt.verbose.writeln): writes message to STDOUT. `grunt.log.writeln` will do the same as `grunt.log.write` but without trailing newline. `subhead(msg)` will print the message in bold and proceeded by a newline and a trailing newline as well.

The following methods adds a “&gt;&gt;” before the message in the screen which could be of different colors depending on the method:

- `grunt.log.error([msg])`: print message prefixed with a RED “&gt;&gt;”.
- `grunt.log.ok([msg])`: print message prefixed with a GREEN “&gt;&gt;”.

### <a href="#Grunt-files" class="headerlink" title="Grunt files"></a>Grunt files

**Files**

All has an optional attributes `options` that could be `encoding` among others.

- [grunt.file.write(filepath, contents \[, options\])](http://gruntjs.com/api/grunt.file#grunt.file.write): writes contents to file, creates path if necessary.
- [grunt.file.read(filepath \[, options\])](http://gruntjs.com/api/grunt.file#grunt.file.read): returns file content.
- [grunt.file.readJSON(filepath \[, options\])](http://gruntjs.com/api/grunt.file#grunt.file.readjson): reads file content and parse it to JSON.
- [grunt.file.delete(filepath \[, options\])](http://gruntjs.com/api/grunt.file#grunt.file.delete): deletes files recursively.
- [grunt.file.copy(srcpath, destpath \[, options\])](http://gruntjs.com/api/grunt.file#grunt.file.copy): copy file from `srcpath` to `destpath`.

**Directories**

- [grunt.file.mkdir(dirpath \[, mode\])](http://gruntjs.com/api/grunt.file#grunt.file.mkdir): creates directory and any intermediary. Like `mkdir -p`.
- [grunt.file.expand(\[options, \] patterns)](http://gruntjs.com/api/grunt.file#grunt.file.expand): returns an array with all the files matching a pattern. It can also accept and array of patterns. Preceding a patter with `!` will negate them. E.g. `['**/*.js', !**/*spec.js]` =&gt; get all javascript (including subdirectories) but NOT the ones that ends with spec.js.
- [grunt.file.recurse(rootdir, callback)](http://gruntjs.com/api/grunt.file#grunt.file.recurse): expand path and return a callback function with the following signature `callback(abspath, rootdir, subdir, filename)`.

## <a href="#Example-2-Gruntfile-for-files-manipulation" class="headerlink" title="Example 2: Gruntfile for files manipulation"></a>Example 2: Gruntfile for files manipulation

GruntJS comes with built-in functions for basic [file system handling](https://github.com/gruntjs/grunt/blob/master/lib/grunt/file.js). To see the function in action. Create four directories: `stylesheets`, `javascripts`, `templates` and put files on first three. The idea is to concatenate all the files into one index.html and placed it a newly created `public` folder.

Here’s the grunt file that will copy and concatenate all the files for us:

Gruntfile.js

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
41</code></pre></td><td><pre><code>module.exports = function(grunt){
  grunt.config.init({
    concat: {
      options: {
        dest: &#39;tmp&#39;,
        templates: [&#39;templates/header.html&#39;, &#39;templates/footer.html&#39;],
        javascripts: [&#39;javascripts/*.js&#39;],
        stylesheets: [&#39;stylesheets&#39;]
      }
    }
  });

var recursiveConcat = function(source, result){
grunt.file.expand(source).forEach(function(file){
if(grunt.file.isDir(file)){
grunt.file.recurse(file, function(f){
result = recursiveConcat(f, result);
});
} else {
grunt.log.writeln(&#39;Concatenating &#39; + file + &#39; to other &#39; + result.length + &#39; characters.&#39;);
result += grunt.file.read(file);
}
});
return result;
};

grunt.registerTask(&#39;concat&#39;, &#39;concatenates files&#39;, function(type){
grunt.config.requires(&#39;concat.options.&#39; + type); // fail the task if this propary is missing.
grunt.config.requires(&#39;concat.options.dest&#39;);

    var files = grunt.config.get(&#39;concat.options.&#39; + type),
      dest = grunt.config.get(&#39;concat.options.dest&#39;),
      concatenated = recursiveConcat(files, &#39;&#39;);

    grunt.log.writeln(&#39;Writing &#39; + concatenated.length + &#39; chars to &#39; + &#39;tmp/&#39; + type);
    grunt.file.write(dest + &#39;/&#39; + type, concatenated);

});

grunt.registerTask(&#39;concatAll&#39;, [&#39;concat:templates&#39;, &#39;concat:javascripts&#39;, &#39;concat:stylesheets&#39;]);
grunt.registerTask(&#39;default&#39;, [&#39;concatAll&#39;]);
}</code></pre></td></tr></tbody></table>

A more complete example can be found in the repository where we have the join and open function as well.

### <a href="#Reference-3-Inside-Grunt-tasks" class="headerlink" title="Reference 3: Inside Grunt tasks"></a>Reference 3: Inside Grunt tasks

Inside all Grunt task there are number of functions available through `this`:

- [this.async](http://gruntjs.com/inside-tasks#this.async): designed for async tasks. Grunt will normally end the task without waiting for the callback to be executed. If you need Grunt to wait use `done()`.

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7
8
9
10</code></pre></td><td><pre><code>var done = this.async();

http.get(&#39;http://adrianmejia.com&#39;, function(res){
res.on(&#39;data&#39;, function(data){
// ... process data ...
done(); // forces Grunt to wait until data is received.
})
}).on(function(err){
done(err); // or an error is received.
});</code></pre></td></tr></tbody></table>

- [this.requires](http://gruntjs.com/inside-tasks#this.requires): list of taskNames that should executed successfully first. E.g. `this.requires(['concat', 'jshint'])`.

- [this.name](http://gruntjs.com/inside-tasks#this.name): this is the name of the task. E.g. `grunt hello`, then `this.name === 'name'`.

- [this.args](http://gruntjs.com/inside-tasks#this.args): returns an array with the parameters. E.g. `grunt hello:crazy:world`, then `this.args` will return `['crazy', 'world']`.

- [this.options(\[defaultsObj\])](http://gruntjs.com/inside-tasks#this.options): it gets options values from the `config.init`, optionally you can also pass an object containing the default values. Notice in the example below that even though console.log has a `this.options({gzip: true})` it gets override by the options parameters. If not one it is specified in the `config.init` then it will use the default gzip: true.

**Inside MultiTasks**

Consider this `grunt.config.init` example:

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
26</code></pre></td><td><pre><code>module.exports = function(grunt){
  grunt.config.init({
    multiTaskName: {
      options: {
        gzip: false
      },
      target1: {
        src: &#39;stylesheets/*.css&#39;,
        dest: &#39;public&#39;,
        ext: &#39;.min.css&#39;
      },
      target2: {
        src: &#39;*.js&#39;,
        dest: &#39;public&#39;,
        ext: &#39;.min.js&#39;
      }
    }
  });

grunt.registerMultiTask(&#39;multiTaskName&#39;, &#39;example&#39;, function(){
console.log(&#39;this.options&#39;, this.options({gzip: true}));
console.log(&#39;this.data&#39;, this.data);
console.log(&#39;this.files&#39;, this.files);
console.log(&#39;this.filesSrc&#39;, this.filesSrc);
});
}</code></pre></td></tr></tbody></table>

Output example

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
18</code></pre></td><td><pre><code>grunt multiTaskName
## Running &quot;multiTaskName:target1&quot; (multiTaskName) task
## this.options { gzip: false }
## this.data { src: &#39;stylesheets/*.css&#39;, dest: &#39;public&#39;, ext: &#39;.min.css&#39; }
## this.files [ { src: [Getter],
##     dest: &#39;public&#39;,
##     ext: &#39;.min.css&#39;,
##     orig: { src: [Object], dest: &#39;public&#39;, ext: &#39;.min.css&#39; } } ]
## this.filesSrc [ &#39;stylesheets/h1.css&#39;, &#39;stylesheets/h2.css&#39; ]
##
## Running &quot;multiTaskName:target2&quot; (multiTaskName) task
## this.options { gzip: false }
## this.data { src: &#39;*.js&#39;, dest: &#39;public&#39;, ext: &#39;.min.js&#39; }
## this.files [ { src: [Getter],
##     dest: &#39;public&#39;,
##     ext: &#39;.min.js&#39;,
##     orig: { src: [Object], dest: &#39;public&#39;, ext: &#39;.min.js&#39; } } ]
## this.filesSrc [ &#39;Gruntfile.js&#39; ]</code></pre></td></tr></tbody></table>

- [this.target](http://gruntjs.com/inside-tasks#this.target): name of the target current target. If you call it `grunt multiTaskName`, it will run like multiple tasks calling each target one at a time. `this.target` will be equal to `target1` and then `target2`.

- [this.files](http://gruntjs.com/inside-tasks#this.files): return a (single) array that has all the properties for the current target. Take a look the the output above.

- [this.filesSrc](http://gruntjs.com/inside-tasks#this.filessrc): it expands files and paths against `src` and return an array with them.

- [this.data](http://gruntjs.com/inside-tasks#this.data): contains the raw data of the target parameters.

## <a href="#Intermediate-Using-Grunt-js-plugins" class="headerlink" title="Intermediate: Using Grunt.js plugins"></a>Intermediate: Using Grunt.js plugins

Chances are that there is a plugin for most of your needs. Last time I checked there were 3,638 plugins for grunt. This are the 10 most popular:

### <a href="#Installing-a-grunt-plugin" class="headerlink" title="Installing a grunt plugin"></a>Installing a grunt plugin

Let’s say we want to install jshint.

1.  Get the plugin module

Download it from npm:

`npm install grunt-contrib-jshint --save-dev`

or from github:

`npm install https://github.com/YOUR_USERNAME/grunt-contrib-YOUR-PLUGIN --save-dev`

1.  Load it in your Gruntfile

`grunt.loadNpmTasks('grunt-contrib-jshint');`

or

`grunt.loadNpmTasks('grunt-contrib-YOUR-PLUGIN');`

### <a href="#10-most-popular-grunt-plugins" class="headerlink" title="10 most popular grunt plugins"></a>10 most popular grunt plugins

1- [jshint](https://github.com/gruntjs/grunt-contrib-jshint): Validate files with JSHint. Uses `.jshintrc` to settings.

.jshintrc (example)

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7
8
9</code></pre></td><td><pre><code>{
  &quot;curly&quot;: true,
  &quot;eqnull&quot;: true,
  &quot;eqeqeq&quot;: true,
  &quot;undef&quot;: true,
  &quot;globals&quot;: {
    &quot;jQuery&quot;: true
  }
}</code></pre></td></tr></tbody></table>

2- [watch](https://github.com/gruntjs/grunt-contrib-watch): Run predefined tasks whenever watched file patterns are added, changed or deleted. Spawn runs task in a child process but having set to `spawn: false` is faster.

grunt.config.init (example)

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7
8
9</code></pre></td><td><pre><code>watch: {
  scripts: {
    files: [&#39;**/*.js&#39;],
    tasks: [&#39;jshint&#39;],
    options: {
      spawn: false,
    },
  },
},</code></pre></td></tr></tbody></table>

3- [uglify](https://github.com/gruntjs/grunt-contrib-uglify): minifies javascript files.

grunt.config.init (example)

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7</code></pre></td><td><pre><code>uglify: {
  my_target: {
    files: {
      &#39;dest/output.min.js&#39;: [&#39;src/input1.js&#39;, &#39;src/input2.js&#39;]
    }
  }
}</code></pre></td></tr></tbody></table>

4- [clean](https://github.com/gruntjs/grunt-contrib-clean): Clean files and folders.

grunt.config.init (example)

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7</code></pre></td><td><pre><code>clean: {
  // Deletes all .js files, but skips min.js files
  js: [&quot;path/to/dir/*.js&quot;, &quot;!path/to/dir/*.min.js&quot;]

// delete all files and directories here
build: [&quot;path/to/dir/one&quot;, &quot;path/to/dir/two&quot;],
}</code></pre></td></tr></tbody></table>

5- [concat](https://github.com/gruntjs/grunt-contrib-concat): Concatenate files.

grunt.config.init (example simple)

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7
8
9</code></pre></td><td><pre><code>concat: {
  options: {
    separator: &#39;;&#39;,
  },
  dist: {
    src: [&#39;src/intro.js&#39;, &#39;src/project.js&#39;, &#39;src/outro.js&#39;],
    dest: &#39;dist/built.js&#39;,
  },
}</code></pre></td></tr></tbody></table>

grunt.config.init (adding banners and multiple targets)

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
11</code></pre></td><td><pre><code>pkg: grunt.file.readJSON(&#39;package.json&#39;),
concat: {
  options: {
    stripBanners: true,
    banner: &#39;/*! &lt;%= pkg.name %&gt; - v&lt;%= pkg.version %&gt; - &#39; +
      &#39;&lt;%= grunt.template.today(&quot;yyyy-mm-dd&quot;) %&gt; */&#39;,
  },
  dist: {
    &#39;dist/with_extras.js&#39;: [&#39;src/main.js&#39;, &#39;src/extras.js&#39;],
  },
},</code></pre></td></tr></tbody></table>

6- [cssmin](https://github.com/gruntjs/grunt-contrib-cssmin): Compress CSS files.

grunt.config.init (example)

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7</code></pre></td><td><pre><code>cssmin: {
  combine: {
    files: {
      &#39;path/to/output.css&#39;: [&#39;path/to/input_one.css&#39;, &#39;path/to/input_two.css&#39;]
    }
  }
}</code></pre></td></tr></tbody></table>

grunt.config.init (example with banner and adding .min.css extension)

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
14</code></pre></td><td><pre><code>cssmin: {
  add_banner: {
    options: {
      banner: &#39;/* My minified css file */&#39;
    },
    files: [{
      expand: true,
      cwd: &#39;release/css/&#39;,
      src: [&#39;*.css&#39;, &#39;!*.min.css&#39;],
      dest: &#39;release/css/&#39;,
      ext: &#39;.min.css&#39;
    }]
  }
}</code></pre></td></tr></tbody></table>

7- [connect](https://github.com/gruntjs/grunt-contrib-connect): runs server as long as Grunt is running. It can be persistent passing `keepalive` like this `grunt connect:keepalive`.

grunt.config.init (example)

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7
8</code></pre></td><td><pre><code>connect: {
  server: {
    options: {
      port: 9001,
      base: &#39;www-root&#39;
    }
  }
}</code></pre></td></tr></tbody></table>

8- [karma](https://github.com/karma-runner/grunt-karma): runs karma testing tool.

grunt.config.init (example)

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7</code></pre></td><td><pre><code>karma: {
  unit: {
    options: {
      files: [&#39;test/**/*.js&#39;]
    }
  }
}</code></pre></td></tr></tbody></table>

grunt.config.init (example referencing karma.conf and overriding parameters)

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7
8
9</code></pre></td><td><pre><code>karma: {
  unit: {
    configFile: &#39;karma.conf.js&#39;,
    runnerPort: 9999,
    singleRun: true,
    browsers: [&#39;PhantomJS&#39;],
    logLevel: &#39;ERROR&#39;
  }
}</code></pre></td></tr></tbody></table>

9- [less](https://github.com/gruntjs/grunt-contrib-less): Compile LESS files to CSS.

grunt.config.init (example)

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
23</code></pre></td><td><pre><code>less: {
  development: {
    options: {
      paths: [&quot;assets/css&quot;]
    },
    files: {
      &quot;path/to/result.css&quot;: &quot;path/to/source.less&quot;
    }
  },
  production: {
    options: {
      paths: [&quot;assets/css&quot;],
      cleancss: true,
      modifyVars: {
        imgPath: &#39;&quot;http://mycdn.com/path/to/images&quot;&#39;,
        bgColor: &#39;red&#39;
      }
    },
    files: {
      &quot;path/to/result.css&quot;: &quot;path/to/source.less&quot;
    }
  }
}</code></pre></td></tr></tbody></table>

10- [concurrent](https://github.com/sindresorhus/grunt-concurrent): Run grunt tasks concurrently.

grunt.config.init (example)

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7
8
9
10</code></pre></td><td><pre><code>concurrent: {
  target1: [&#39;coffee&#39;, &#39;sass&#39;],
  target2: [&#39;jshint&#39;, &#39;mocha&#39;],
  target3: {
    tasks: [&#39;nodemon&#39;, &#39;watch&#39;],
    options: {
      logConcurrentOutput: true
    }
  }
}</code></pre></td></tr></tbody></table>

In the next blog post, we will continue the tutorial with using GruntJS in a web application, making your own plugins and a comparison between other task runners tools such as Gulp, Gulp, Brunch, Rake::Pipeline and Broccoli.

### Now, your turn!

Thanks for reading this far. Here are some things you can do next:

- Found a typo? [Edit this post](https://github.com/amejiarosario/amejiarosario.github.io/edit/source/source/_posts/2014-10-07-grunt-js-tutorial-from-beginner-to-ninja.markdown).
- Got questions? [comment](#comments-section) below.
- Was it useful? Show your support and share it.

<a href="/how-to-build-scalable-apps/" class="article-nav-newer"><strong><em></em> newer</strong></a>

How to build scalable apps?

<a href="/mean-stack-tutorial-mongodb-expressjs-angularjs-nodejs/" class="article-nav-older"><strong>older <em></em></strong></a>

MEAN Stack Tutorial MongoDB ExpressJS AngularJS NodeJS (Part III)

Subscribe & stay up to date!



[<span id="back-to-top" title="Go back to the top of this page"> Top </span>](#) <a href="#" class="p-x-3" title="Improve this post"><em></em> Edit this post</a>

### Contents

1.  <a href="#Beginner-Grunt-js-101" class="toc-link"><span class="toc-number">1.</span> <span class="toc-text">Beginner: Grunt.js 101</span></a>
2.  <a href="#Hello-Wold-from-GruntJS" class="toc-link"><span class="toc-number">2.</span> <span class="toc-text">Hello Wold from GruntJS</span></a>
3.  <a href="#Reference-1-Grunt-tasks-config-and-warnings" class="toc-link"><span class="toc-number">3.</span> <span class="toc-text">Reference 1: Grunt tasks, config and warnings</span></a>
    1.  <a href="#Grunt-config" class="toc-link"><span class="toc-number">3.1.</span> <span class="toc-text">Grunt config</span></a>
    2.  <a href="#Grunt-tasks" class="toc-link"><span class="toc-number">3.2.</span> <span class="toc-text">Grunt tasks</span></a>
    3.  <a href="#Grunt-Errors-and-Warnings" class="toc-link"><span class="toc-number">3.3.</span> <span class="toc-text">Grunt Errors and Warnings</span></a>
4.  <a href="#Example-Forex-and-grunt-multiple-async-calls-handling" class="toc-link"><span class="toc-number">4.</span> <span class="toc-text">Example: Forex and grunt multiple async calls handling</span></a>
5.  <a href="#Reference-2-Grunt-Files-and-logs" class="toc-link"><span class="toc-number">5.</span> <span class="toc-text">Reference 2: Grunt Files and logs</span></a>
    1.  <a href="#Grunt-logs" class="toc-link"><span class="toc-number">5.1.</span> <span class="toc-text">Grunt logs</span></a>
    2.  <a href="#Grunt-files" class="toc-link"><span class="toc-number">5.2.</span> <span class="toc-text">Grunt files</span></a>
6.  <a href="#Example-2-Gruntfile-for-files-manipulation" class="toc-link"><span class="toc-number">6.</span> <span class="toc-text">Example 2: Gruntfile for files manipulation</span></a>
    1.  <a href="#Reference-3-Inside-Grunt-tasks" class="toc-link"><span class="toc-number">6.1.</span> <span class="toc-text">Reference 3: Inside Grunt tasks</span></a>
7.  <a href="#Intermediate-Using-Grunt-js-plugins" class="toc-link"><span class="toc-number">7.</span> <span class="toc-text">Intermediate: Using Grunt.js plugins</span></a>
    1.  <a href="#Installing-a-grunt-plugin" class="toc-link"><span class="toc-number">7.1.</span> <span class="toc-text">Installing a grunt plugin</span></a>
    2.  <a href="#10-most-popular-grunt-plugins" class="toc-link"><span class="toc-number">7.2.</span> <span class="toc-text">10 most popular grunt plugins</span></a>
