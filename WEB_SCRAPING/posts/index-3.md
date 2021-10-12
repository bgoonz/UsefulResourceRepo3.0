<a href="../index.html" class="header-link"><img src="../images/logos/wordmark.svg" alt="A Beautiful Site" class="wordmark" /></a> <a href="../index.html" class="nav-item">Home</a> <a href="../tags/index.html" class="nav-item">Tags</a> <a href="index.html" class="nav-item">Archive</a> <a href="../about/index.html" class="nav-item">About</a>

------------------------------------------------------------------------

The SimpleImage library for PHP
===============================

November 16, 2011 • 1 min read

![A drawing of a cartoon man pointing upwards](../images/artwork/pointer.gif)

Heads up! This post was written in 2011, so it may contain information that is no longer accurate. I keep posts like this around for historical purposes and to prevent link rot, so please keep this in mind as you're reading.

— Cory

If you love working with PHP but hate the GD library, you'll love the Simple Image PHP class I'm releasing today. This class takes the headache out of dealing with images and features over 25 useful methods.

The class is incredibly simple to use.  The following two lines will load **image.jpg**, flip it horizontally, rotate it 90 degrees, shrink it to fit within a 320x200 box, apply a sepia effect, convert it to a GIF, and save it to `result.gif`:

    $img = new SimpleImage('image.jpg');
    $img->flip('x')->rotate(90)->best_fit(320, 200)->sepia()->save('result.gif');

Here's a list of the supported methods:

-   `flip()` - flips an image vertically or horizontally
-   `rotate()` - rotates an image at the specified angle
-   `auto_orient()` - adjusts the orientation based on the image's EXIF data
-   `resize()` - resizes an image to the specified width/height
-   `fit_to_width()` - proportionally resizes an image to the specified width
-   `fit_to_height()` - proportionally resizes an image to the specified height
-   `best_fit()` - proportionally resizes an image to fit within the specified width/height
-   `crop()` - crop an image from x1/y1 to x2/y2
-   `square_crop()` - trim the image to a square and resize to the specified size
-   `desaturate()` - convert the image to grayscale
-   `invert()` - invert the image
-   `brightness()` - adjust the image's brightness
-   `contrast()` - adjust the image's contrast
-   `colorize()` - apply the colorize filter
-   `edges()` - apply the edges filter
-   `emboss()` - apply the emboss filter
-   `mean_remove()` - apply the mean removal filter
-   `blur()` - apply selective or gaussian blur to the image
-   `sketch()` - apply the sketch filter
-   `smooth()` - apply the smooth filter
-   `pixelate()` - pixelate the image to blocks of the specified size
-   `sepia()` - apply a simulated sepia effect
-   `overlay()` - overlay one image onto another to create a watermark effect
-   `text()` - Add text to the image

Download <a href="#download" class="direct-link">#</a>
------------------------------------------------------

This project is actively maintained on GitHub. Please submit all issues and contributions to the project page. Licensed under the MIT license.

[Download the latest version from GitHub](https://github.com/claviska/SimpleImage)

*January 10, 2017: SimpleImage 3.0 has been released. Please refer to [the repo](https://github.com/claviska/SimpleImage) for API changes and the latest features.*

<a href="../tags/development/index.html" class="post-tag">development</a> <a href="../tags/php/index.html" class="post-tag">php</a> <a href="../tags/images/index.html" class="post-tag">images</a>

------------------------------------------------------------------------

<img src="http://0.gravatar.com/avatar/bf1b3b95fd5b096a3592247c29667b33?s=512" alt="Photo of Cory" class="avatar avatar-small" />

Written by [Cory LaViska](../index-4.html), a software engineer and UX architect responsible for [Shoelace.style](https://shoelace.style/), [Surreal CMS](https://www.surrealcms.com/), and other [open source things](https://github.com/claviska).

You can follow Cory on [Twitter](https://twitter.com/claviska) and [GitHub](https://github.com/claviska).

------------------------------------------------------------------------

<a href="how-to-delete-a-tag-on-github/index.html" class="post-nav-previous"><span class="small">Previous post</span> How to delete a tag on GitHub</a> <a href="redirecting-to-and-from-the-www-subdomain-with-htaccess/index.html" class="post-nav-next"><span class="small">Up next</span> Redirecting to and from the www subdomain with .htaccess</a>
