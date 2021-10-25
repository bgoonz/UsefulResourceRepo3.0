<a href="/categories/coding/" class="category-link">Coding</a>

# Building a Node.js static file server (files over HTTP) using ES6+

<span title="Last time this post was updated"> Last updated August 24th 2016 </span> <span class="m-x-2" title="Pageviews"> 50.7k </span> <span class="m-x-2" title="Click to go to the comments section"> [ <span class="disqus-comment-count" data-disqus-url="https://master--bgoonz-blog.netlify.app/Building-a-Node-js-static-file-server-files-over-HTTP-using-ES6/">0</span>](#disqus_thread) </span>

- <a href="/tags/nodejs/" class="tag-list-link">nodejs</a><span class="tag-list-count">12</span>

![Building a Node.js static file server (files over HTTP) using ES6+](/images/node-web-server-large.png)

We are going to do a **static file server** in Node.js. This web server is going to respond with the content of the file in a given path. While we are doing this exercise we are going to cover more about `http` module. Also, use some utilities from other core modules such as `path`, `url` and `fs`.

<span id="more"></span>

## <a href="#HTTP-Web-Servers" class="headerlink" title="HTTP Web Servers"></a>HTTP Web Servers

Node’s HTTP module is versatile. You can use it as a client, to grab content from websites or as a server. We are going to use it server files from our file system.

If you are familiar with Ruby or Python or http-server package. It’s the equivalent of this:

Existing HTTP Servers Implementations

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7
8</code></pre></td><td><pre><code>## python HTTP server
python -m SimpleHTTPServer 9000

## ruby HTTP server

ruby -run -e httpd . -p 9000

## Node HTTP server (npm install http-server)

http-server . -p 9000</code></pre></td></tr></tbody></table>

Let’s do our own. It’s not that hard.

## <a href="#Simple-HTTP-Server" class="headerlink" title="Simple HTTP Server"></a>Simple HTTP Server

One of the simplest servers that you can create in Node, looks like this:

Simple server.js

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7
8
9</code></pre></td><td><pre><code>const http = require(&#39;http&#39;);

http.createServer(function (req, res) {
// server code
console.log(`${req.method} ${req.url}`);
res.end(&#39;hello world!&#39;);
}).listen(9000);

console.log(&#39;Server listening on port 9000&#39;);</code></pre></td></tr></tbody></table>

To test it out, save the code in a file called `server.js` and run:

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1</code></pre></td><td><pre><code>node server.js</code></pre></td></tr></tbody></table>

Then open the browser on `http://localhost:9000` and you will see the “hello world!” message.

Let’s explain what’s going on in the code. We are using the function `http.createServer` with a callback. This callback function is going to be called every time a client connects to the server. You can see that it takes two parameters: `req`uest and `res`ponse.

The request contains the client’s information. For instance: requested URL, path, headers, HTTP method, and so forth.

The response object is used to reply to the client. You can set what you want to send back to the client. For instance, data, headers, etc.

Finally, the listening part. It allows you to set the port that you want your server to run on. In this case, we are using `9000`.

## <a href="#Node-js-HTTP-static-file-server-with-ES6" class="headerlink" title="Node.js HTTP static file server with ES6+"></a>Node.js HTTP static file server with ES6+

Let’s now proceed to do the static web server. We want to parse the URL path and get the file matching that path. For instance, if we get a request like `localhost:9000/example/server.js`. We want to look for a file in `./example/server.js`.

Browsers don’t rely on the extension to render a file. Instead, they use the header `Content-type`. For instance, if we serve an HTML file with a content type `text/plain` it will show the HTML code (plain text). But, if you use a content type `text/html` then it will render the HTML as such.

For now, we can infer the file content type based on the file extension. The content types are represented in MIME formmat. MIME stands for Multipurpose Internet Mail Extensions. You can see the MIME types according to file extentions in the following code:

static_server.js

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
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
67
68
69
70
71
72</code></pre></td><td><pre><code>const http = require(&#39;http&#39;);
const url = require(&#39;url&#39;);
const fs = require(&#39;fs&#39;);
const path = require(&#39;path&#39;);
// you can pass the parameter in the command line. e.g. node static_server.js 3000
const port = process.argv[2] || 9000;

// maps file extention to MIME types
// full list can be found here: https://www.freeformatter.com/mime-types-list.html
const mimeType = {
&#39;.ico&#39;: &#39;image/x-icon&#39;,
&#39;.html&#39;: &#39;text/html&#39;,
&#39;.js&#39;: &#39;text/javascript&#39;,
&#39;.json&#39;: &#39;application/json&#39;,
&#39;.css&#39;: &#39;text/css&#39;,
&#39;.png&#39;: &#39;image/png&#39;,
&#39;.jpg&#39;: &#39;image/jpeg&#39;,
&#39;.wav&#39;: &#39;audio/wav&#39;,
&#39;.mp3&#39;: &#39;audio/mpeg&#39;,
&#39;.svg&#39;: &#39;image/svg+xml&#39;,
&#39;.pdf&#39;: &#39;application/pdf&#39;,
&#39;.zip&#39;: &#39;application/zip&#39;,
&#39;.doc&#39;: &#39;application/msword&#39;,
&#39;.eot&#39;: &#39;application/vnd.ms-fontobject&#39;,
&#39;.ttf&#39;: &#39;application/x-font-ttf&#39;,
};

http.createServer(function (req, res) {
console.log(`${req.method} ${req.url}`);

// parse URL
const parsedUrl = url.parse(req.url);

// extract URL path
// Avoid https://en.wikipedia.org/wiki/Directory_traversal_attack
// e.g curl --path-as-is http://localhost:9000/../fileInDanger.txt
// by limiting the path to current directory only
const sanitizePath = path.normalize(parsedUrl.pathname).replace(/^(\.\.[\/\\])+/, &#39;&#39;);
let pathname = path.join(\_\_dirname, sanitizePath);

fs.exists(pathname, function (exist) {
if(!exist) {
// if the file is not found, return 404
res.statusCode = 404;
res.end(`File ${pathname} not found!`);
return;
}

    // if is a directory, then look for index.html
    if (fs.statSync(pathname).isDirectory()) {
      pathname += &#39;/index.html&#39;;
    }

    // read file from file system
    fs.readFile(pathname, function(err, data){
      if(err){
        res.statusCode = 500;
        res.end(`Error getting the file: ${err}.`);
      } else {
        // based on the URL path, extract the file extention. e.g. .js, .doc, ...
        const ext = path.parse(pathname).ext;
        // if the file is found, set Content-type and send data
        res.setHeader(&#39;Content-type&#39;, mimeType[ext] || &#39;text/plain&#39; );
        res.end(data);
      }
    });

});

}).listen(parseInt(port));

console.log(`Server listening on port ${port}`);</code></pre></td></tr></tbody></table>

We are using Node.js core `path.parse` libraries to get the extensions from the URL path. Similarly, we are using `url.parse` to break down the `request.url` into its components. Then, we extract the extension from the file. Finally, we use `fs.readFile` to get the content from the file system. If any error occurs related to the file path, we return a 404 and otherwise return the file content.

Give it a try with:

Command lines to test the server

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7
8</code></pre></td><td><pre><code>## run server
node server.js

## get the javascript file with

curl -i localhost:9000/server.js

## testing with non-existing file

curl -i localhost:9000/invalid-file.doc</code></pre></td></tr></tbody></table>

For the first one, you will get a 200 OK response, while for the 2nd one you will get a 404 not found error, as expected.

You can also download the code from this repo and try out with the test files:

Testing with different file types

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
13</code></pre></td><td><pre><code>## Get Repository
git clone https://github.com/amejiarosario/meanshop.git
cd meanshop
## Load the specific version
git checkout static-server

## start the server (requires Node 4+)

npm start

## test it in your browser with the following paths:

open http://localhost:9000/
open http://localhost:9000/index.html
open http://localhost:9000/test/meanshop-book.png</code></pre></td></tr></tbody></table>

## <a href="#Summary" class="headerlink" title="Summary"></a>Summary

In this post, we went through the basics about `http` module to create a server. We talk about the MIME types and how the help the browser to render properly. Finally, we put all together to accomplish our static file server with Node.js!

### Now, your turn!

Thanks for reading this far. Here are some things you can do next:

- Found a typo? [Edit this post](https://github.com/amejiarosario/amejiarosario.github.io/edit/source/source/_posts/2016-08-24-Building-a-Node-js-static-file-server-files-over-HTTP-using-ES6.md).
- Got questions? [comment](#comments-section) below.
- Was it useful? Show your support and share it.

<a href="/Angular-2-Tutorial-Create-a-CRUD-App-with-Angular-CLI-and-TypeScript/" class="article-nav-newer"><strong><em></em> newer</strong></a>

Angular Tutorial: Create a CRUD App with Angular CLI and TypeScript

<a href="/Node-Package-Manager-NPM-Tutorial/" class="article-nav-older"><strong>older <em></em></strong></a>

Node Package Manager (NPM) Tutorial

Subscribe & stay up to date!



[<span id="back-to-top" title="Go back to the top of this page"> Top </span>](#) <a href="#" class="p-x-3" title="Improve this post"><em></em> Edit this post</a>

### Contents

1.  <a href="#HTTP-Web-Servers" class="toc-link"><span class="toc-number">1.</span> <span class="toc-text">HTTP Web Servers</span></a>
2.  <a href="#Simple-HTTP-Server" class="toc-link"><span class="toc-number">2.</span> <span class="toc-text">Simple HTTP Server</span></a>
3.  <a href="#Node-js-HTTP-static-file-server-with-ES6" class="toc-link"><span class="toc-number">3.</span> <span class="toc-text">Node.js HTTP static file server with ES6+</span></a>
4.  <a href="#Summary" class="toc-link"><span class="toc-number">4.</span> <span class="toc-text">Summary</span></a>
