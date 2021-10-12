<a href="../../index.html" class="header-link"><img src="../../images/logos/wordmark.svg" alt="A Beautiful Site" class="wordmark" /></a> <a href="../../index.html" class="nav-item">Home</a> <a href="../../tags/index.html" class="nav-item">Tags</a> <a href="../index.html" class="nav-item">Archive</a> <a href="../../about/index.html" class="nav-item">About</a>

------------------------------------------------------------------------

Parsing URLs in JavaScript
==========================

October 24, 2013 • 1 min read

There's an excellent trick to [parsing URLs in JavaScript](https://gist.github.com/jlong/2428561), which was introduced last year by John Long over on GitHub. This technique works great, but the resulting `search` property will be a raw query string. This isn't very useful if you need to access certain variables in said query string. Thus, the following function expands on this paradigm, providing an additional property that contains an object based on the original query string.

    function parseURL(url) {
        const parser = document.createElement('a');
        const searchObject = {};

        // Let the browser do the work
        parser.href = url;

        // Convert query string to object for convenience
        const queries = parser.search.replace(/^\?/, '').split('&');
        for (let i = 0; i < queries.length; i++) {
            const split = queries[i].split('=');
            searchObject[split[0]] = split[1];
        }

        return {
            protocol: parser.protocol,
            host: parser.host,
            hostname: parser.hostname,
            port: parser.port,
            pathname: parser.pathname,
            search: parser.search,
            searchObject: searchObject,
            hash: parser.hash
        };
    }

Let's try it!

    const url = parseURL('https://example.com/index.html?q=test');

    console.log(url);

And here's the result:

    {
        protocol: 'https:',
        host: 'example.com',
        hostname: 'example.com',
        port: '',
        pathname: '/index.html',
        search: '?q=test',
        searchObject: {
        q: 'test'
      },
        hash: ''
    }

<a href="../../tags/development/index.html" class="post-tag">development</a> <a href="../../tags/javascript/index.html" class="post-tag">javascript</a> <a href="../../tags/tips/index.html" class="post-tag">tips</a>

------------------------------------------------------------------------

<img src="http://0.gravatar.com/avatar/bf1b3b95fd5b096a3592247c29667b33?s=512" alt="Photo of Cory" class="avatar avatar-small" />

Written by [Cory LaViska](../../index-4.html), a software engineer and UX architect responsible for [Shoelace.style](https://shoelace.style/), [Surreal CMS](https://www.surrealcms.com/), and other [open source things](https://github.com/claviska).

You can follow Cory on [Twitter](https://twitter.com/bgooonz) and [GitHub](https://github.com/claviska).

------------------------------------------------------------------------

<a href="../an-icon-converter-that-supports-multiple-sizes-and-transparency/index.html" class="post-nav-previous"><span class="small">Previous post</span> An icon converter that supports multiple sizes and transparency</a> <a href="../a-user-interface-is-like-a-joke/index.html" class="post-nav-next"><span class="small">Up next</span> A user interface is like a joke</a>
