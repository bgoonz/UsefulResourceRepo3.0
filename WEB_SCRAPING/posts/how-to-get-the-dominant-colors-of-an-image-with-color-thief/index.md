<a href="../../index.html" class="header-link"><img src="../../images/logos/wordmark.svg" alt="A Beautiful Site" class="wordmark" /></a> <a href="../../index.html" class="nav-item">Home</a> <a href="../../tags/index.html" class="nav-item">Tags</a> <a href="../index.html" class="nav-item">Archive</a> <a href="../../about/index.html" class="nav-item">About</a>

------------------------------------------------------------------------

How to get the dominant colors of an image with Color Thief
===========================================================

August 12, 2014 • 1 min read

You know how [Dribbble](https://dribbble.com/) shows a color palette for each shot users upload? They always look perfect right? Here's a tool that can give you the same quality results using pure JavaScript.

I played with [Color Thief](http://lokeshdhakar.com/projects/color-thief/) a few months ago but surprisingly never posted about it. For me, something that's easy to use and has consistently great results is pure gold. Here's how it works.

Getting the dominant color of an image <a href="#getting-the-dominant-color-of-an-image" class="direct-link">#</a>
------------------------------------------------------------------------------------------------------------------

    var colorThief = new ColorThief();
    colorThief.getColor(sourceImage);

    // { r: num, g: num, b: num }

Generating a color palette from an image <a href="#generating-a-color-palette-from-an-image" class="direct-link">#</a>
----------------------------------------------------------------------------------------------------------------------

    var colorThief = new ColorThief();
    colorThief.getPalette(sourceImage, 8);

    // [[num, num, num], [num, num, num], ...]

Learn more about [how Color Thief works](http://lokeshdhakar.com/projects/color-thief/) and try it out with your own photo. The project was created by [Lokesh Dhakar](https://twitter.com/lokesh) and licensed under the MIT license.

What about a PHP version? <a href="#what-about-a-php-version%3F" class="direct-link">#</a>
------------------------------------------------------------------------------------------

It's amazing that JavaScript can do all these great things, but if you're running PHP on the backend then you're out of luck. In that case, there's a [PHP port of Color Thief](https://github.com/ksubileau/color-thief-php) that you can use for similar results.

<a href="../../tags/design/index.html" class="post-tag">design</a> <a href="../../tags/development/index.html" class="post-tag">development</a> <a href="../../tags/javascript/index.html" class="post-tag">javascript</a> <a href="../../tags/php/index.html" class="post-tag">php</a>

------------------------------------------------------------------------

<img src="http://0.gravatar.com/avatar/bf1b3b95fd5b096a3592247c29667b33?s=512" alt="Photo of Cory" class="avatar avatar-small" />

Written by [Cory LaViska](../../index-4.html), a software engineer and UX architect responsible for [Shoelace.style](https://shoelace.style/), [Surreal CMS](https://www.surrealcms.com/), and other [open source things](https://github.com/claviska).

You can follow Cory on [Twitter](https://twitter.com/claviska) and [GitHub](https://github.com/claviska).

------------------------------------------------------------------------

<a href="../playcanvas-an-easy-open-source-webgl-game-engine/index.html" class="post-nav-previous"><span class="small">Previous post</span> PlayCanvas: an easy, open source WebGL game engine</a> <a href="../lessons-from-my-20s-a-presentation-by-ryan-allis/index.html" class="post-nav-next"><span class="small">Up next</span> Lessons from my 20s: a presentation by Ryan Allis</a>
