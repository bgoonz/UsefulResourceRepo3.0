<a href="../../index.html" class="header-link"><img src="../../images/logos/wordmark.svg" alt="A Beautiful Site" class="wordmark" /></a> <a href="../../index.html" class="nav-item">Home</a> <a href="../../tags/index.html" class="nav-item">Tags</a> <a href="../index.html" class="nav-item">Archive</a> <a href="../../about/index.html" class="nav-item">About</a>

---

# SimpleImage 3.0

January 10, 2017 • 1 min read

[Back in 2011](../index-3.html), I released the first version of SimpleImage for PHP — an open source project for working with images.

Today, version 3.0 has landed, and there's a lot to love about it.

## Overview <a href="#overview" class="direct-link">#</a>

Here's how it works at a glance:

    try {
     // Create a new SimpleImage object
     $image = new claviska\SimpleImage();

     // Magic! ✨
     $image
      ->fromFile('image.jpg') // load image.png
      ->autoOrient() // adjust orientation based on exif data
      ->resize(320, 200) // resize to 320x200 pixels
      ->flip('x') // flip horizontally
      ->colorize('DarkBlue') // tint dark blue
      ->border('black', 10) // add a 10 pixel black border
      ->overlay('watermark.png', 'bottom right') // add a watermark image
      ->toFile('new-image.png', 'image/png') // convert to PNG and save a copy to new-image.png
      ->toScreen(); // output to the screen

     // And much more! 💪
    } catch(Exception $err) {
     // Handle errors
     echo $err->getMessage();
    }

## Requirements <a href="#requirements" class="direct-link">#</a>

- PHP 5.6+
- GD extension

## Features <a href="#features" class="direct-link">#</a>

- Supports reading, writing, and converting GIF, JPEG, PNG, WEBP formats.
- Reads and writes files and data URIs.
- Manipulation: crop, resize, overlay/watermark, adding TTF text
- Drawing: arc, border, dot, ellipse, line, polygon, rectangle, rounded rectangle
- Filters: blur, brighten, colorize, contrast, darken, desaturate, edge detect, emboss, invert, pixelate, sepia, sketch
- Utility methods: color adjustment, darken/lighten color, exif data, height/width, mime type, orientation
- Color arguments can be passed in as any CSS color (e.g. \`LightBlue\`), a hex color, or an RGB(A) array.
- Support for alpha-transparency (GIF, PNG, WEBP)
- Chainable methods
- Uses exceptions
- Load with Composer or manually (just one file)

[The readme](https://github.com/claviska/SimpleImage#differences-from-simpleimage-2x) has a list of changes from the 2.x version of SimpleImage.

## Download <a href="#download" class="direct-link">#</a>

[Download the latest version on GitHub.](https://github.com/claviska/SimpleImage)

<a href="../../tags/php/index.html" class="post-tag">php</a> <a href="../../tags/development/index.html" class="post-tag">development</a> <a href="../../tags/images/index.html" class="post-tag">images</a>

---

<img src="http://0.gravatar.com/avatar/bf1b3b95fd5b096a3592247c29667b33?s=512" alt="Photo of Cory" class="avatar avatar-small" />

Written by [Cory LaViska](../../index-4.html), a software engineer and UX architect responsible for [Shoelace.style](https://shoelace.style/), [Surreal CMS](https://www.surrealcms.com/), and other [open source things](https://github.com/claviska).

You can follow Cory on [Twitter](https://twitter.com/claviska) and [GitHub](https://github.com/claviska).

---

<a href="../dont-hate-on-php/index.html" class="post-nav-previous"><span class="small">Previous post</span> Don't hate on PHP</a> <a href="../getting-it-right/index.html" class="post-nav-next"><span class="small">Up next</span> Getting it right</a>
