<a href="../../index.html" class="header-link"><img src="../../images/logos/wordmark.svg" alt="A Beautiful Site" class="wordmark" /></a> <a href="../../index.html" class="nav-item">Home</a> <a href="../../tags/index.html" class="nav-item">Tags</a> <a href="../index.html" class="nav-item">Archive</a> <a href="../../about/index.html" class="nav-item">About</a>

---

# GIF, JPEG or PNG? Using images on the web

April 29, 2007 • 2 min read

![A drawing of a cartoon man pointing upwards](../../images/artwork/pointer.gif)

Heads up! This post was written in 2007, so it may contain information that is no longer accurate. I keep posts like this around for historical purposes and to prevent link rot, so please keep this in mind as you're reading.

— Cory

This article aims to describe the difference between the three most popular types of images used on the Web, and how to use them effectively in your websites.

## JPEG <a href="#jpeg" class="direct-link">#</a>

JPEG files are compressed images that maintain a balance of size versus quality. For example: _More compression = less image quality = smaller file size_. In contrast, _less compression = more image quality = larger file size_. Since JPEG files do not maintain 100% of the original image's pixel data, it is not considered a lossless image format.

### Usage <a href="#usage" class="direct-link">#</a>

Due to this sensitive balance, JPEGs are best suited for photographs where slightly depreciated quality is not very noticeable. JPEG is not typically a good format for logos, icons, and other simple images.

## GIF <a href="#gif" class="direct-link">#</a>

The GIF format was developed by CompuServe specifically for use online. GIF, sometimes pronounced "GIFF", is a lossless, 8-bit image format. Lossless means that 100% of the original pixel data is maintained. The term 8-bit refers to color depth — an 8-bit image can only have up to 256 colors.

### Usage <a href="#usage-2" class="direct-link">#</a>

Because of these limitations, GIFs _should not_ be used for photographic images. Instead, use them for things like:

- Logos
- Icons
- Layout images (such as corners, borders, etc.)
- Any other small, simple image with only a few colors

### Transparency <a href="#transparency" class="direct-link">#</a>

GIF supports basic transparency, which means that certain pixels in the image can be "invisible", so you can see whatever lies behind them. This is especially useful for making icons that are intended to sit on top of a varying background.

### Compression <a href="#compression" class="direct-link">#</a>

The GIF format uses the LZW compression algorithm, which is patented by Unisys. For a time, this meant that the authors of image-editing programs were forced to pay Unisys for the rights to include GIF support in their programs. The patent, however, expired on June 20, 2003 in the United States.

### Interlacing <a href="#interlacing" class="direct-link">#</a>

GIF also supports interlacing, which makes the image appear to load faster in web browsers. This could be helpful for people browsing your site on a slow dial-up connection.

### Animated GIFs <a href="#animated-gifs" class="direct-link">#</a>

An animated GIF is a single file that contains multiple variations (frames) of an image. These frames are drawn over and over again to create the illusion of animation. When used appropriately, animated GIFs can be catchy and impressive. Unfortunately, many people tend to overuse them on the web, creating a very annoying experience for their users.

## PNG <a href="#png" class="direct-link">#</a>

PNG files, pronounced "PING", were developed as a freeware alternative to GIF files which, at the time, used a patented compression algorithm. The PNG format is also lossless but, unlike GIF, PNG can support 8-bit and 24-bit images.

### 8-bit PNGs <a href="#8-bit-pngs" class="direct-link">#</a>

An 8-bit PNG can have up to 256-colors with basic transparency. This format is very similar to that of GIFs, except for the compression method.

### Usage <a href="#usage-3" class="direct-link">#</a>

8-bit PNGs should be used the same way as GIFs:

- Logos
- Icons
- Layout images (such as corners, borders, etc.)
- Any other small, simple image with only a few colors

### 24-bit PNGs <a href="#24-bit-pngs" class="direct-link">#</a>

24-bit PNGs can have up to 16 million colors and can support alpha-transparency. This means that a partially transparent image with anti-aliasing can blend smoothly into the background.

### PNG support <a href="#png-support" class="direct-link">#</a>

PNG support is becoming more widespread as browser developers become more conscious of [Web Standards](http://www.w3.org/). Fortunately, PNGs are currently supported by all popular web browsers including, IE\*, Firefox, Safari, Opera, and Konqueror.

\*Unfortunately, IE6 messes up alpha-transparency in 24-bit PNGs and displays a grayish-blue background color instead. IE6 has also been known to render some 8-bit PNG colors slightly off-hue (a gamma correction error). Although the alpha-transparency issue has been resolved in IE7 beta 2, Microsoft hasn't addressed gamma correction yet.

<a href="../../tags/design/index.html" class="post-tag">design</a> <a href="../../tags/images/index.html" class="post-tag">images</a>

---

<img src="http://0.gravatar.com/avatar/bf1b3b95fd5b096a3592247c29667b33?s=512" alt="Photo of Cory" class="avatar avatar-small" />

Written by [Cory LaViska](../../index-4.html), a software engineer and UX architect responsible for [Shoelace.style](https://shoelace.style/), [Surreal CMS](https://www.surrealcms.com/), and other [open source things](https://github.com/claviska).

You can follow Cory on [Twitter](https://twitter.com/bgooonz) and [GitHub](https://github.com/claviska).

---

<a href="../business-cards/index.html" class="post-nav-previous"><span class="small">Previous post</span> Business cards</a> <a href="../password-protection-using-htaccess-and-htpasswd/index.html" class="post-nav-next"><span class="small">Up next</span> Password protection using .htaccess and .htpasswd</a>
