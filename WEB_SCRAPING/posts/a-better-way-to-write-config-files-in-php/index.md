<a href="../../index.html" class="header-link"><img src="../../images/logos/wordmark.svg" alt="A Beautiful Site" class="wordmark" /></a> <a href="../../index.html" class="nav-item">Home</a> <a href="../../tags/index.html" class="nav-item">Tags</a> <a href="../index.html" class="nav-item">Archive</a> <a href="../../about/index.html" class="nav-item">About</a>

------------------------------------------------------------------------

A better way to write config files in PHP
=========================================

May 02, 2016 • 1 min read

How many times have you seen something like this in a config file?

    $db_host = 'localhost';
    $db_name = 'somedb';
    $db_user = 'someuser';
    $db_pass = 'somepass';

Then, of course, it gets included and the variables are referenced as globals:

    include('config.php');
    echo $db_host; // 'localhost'

A better way <a href="#a-better-way" class="direct-link">#</a>
--------------------------------------------------------------

I'm not a fan of using global variables when they can be avoided, so here's an alternative that gives you much more flexibility with your config files.

    return [
      'host' => 'localhost',
      'name' => 'somedb',
      'user' => 'someuser',
      'pass' => 'somepass'
    ];

Simply returning the array allows you to include it into any variable you choose, which is much nicer than cluttering the global namespace with your config.

    $database = include('config.php');
    echo $database['host']; // 'localhost'

Of course, you can return any data you want with this approach — even a multidimensional array.

    return [
      'database' => [
        'host' => 'localhost',
        'name' => 'somedb',
        'user' => 'someuser',
        'pass' => 'somepass'
      ],
      'other-stuff' => ...
    ];

This is by far my favorite way to write config files in PHP.

<a href="../../tags/tips/index.html" class="post-tag">tips</a> <a href="../../tags/php/index.html" class="post-tag">php</a>

------------------------------------------------------------------------

<img src="http://0.gravatar.com/avatar/bf1b3b95fd5b096a3592247c29667b33?s=512" alt="Photo of Cory" class="avatar avatar-small" />

Written by [Cory LaViska](../../index-4.html), a software engineer and UX architect responsible for [Shoelace.style](https://shoelace.style/), [Surreal CMS](https://www.surrealcms.com/), and other [open source things](https://github.com/claviska).

You can follow Cory on [Twitter](https://twitter.com/claviska) and [GitHub](https://github.com/claviska).

------------------------------------------------------------------------

<a href="../how-to-upgrade-or-downgrade-nodejs-using-npm/index.html" class="post-nav-previous"><span class="small">Previous post</span> How to upgrade or downgrade Node.js using npm</a> <a href="../code-can-change/index.html" class="post-nav-next"><span class="small">Up next</span> Code can change</a>
