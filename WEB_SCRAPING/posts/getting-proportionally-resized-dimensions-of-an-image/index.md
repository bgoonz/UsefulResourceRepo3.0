<a href="../../index.html" class="header-link"><img src="../../images/logos/wordmark.svg" alt="A Beautiful Site" class="wordmark" /></a> <a href="../../index.html" class="nav-item">Home</a> <a href="../../tags/index.html" class="nav-item">Tags</a> <a href="../index.html" class="nav-item">Archive</a> <a href="../../about/index.html" class="nav-item">About</a>

---

# Getting proportionally-resized dimensions of an image

September 17, 2007 • 1 min read

![A drawing of a cartoon man pointing upwards](../../images/artwork/pointer.gif)

Heads up! This post was written in 2007, so it may contain information that is no longer accurate. I keep posts like this around for historical purposes and to prevent link rot, so please keep this in mind as you're reading.

— Cory

This is extremely useful when you need to scale down an image within a certain pair of dimensions.

## get_resized_dimensions() <a href="#get_resized_dimensions()" class="direct-link">#</a>

### Parameters <a href="#parameters" class="direct-link">#</a>

- `$width` - The width of the image to be resized
- `$height` - The height of the image to be resized
- `$max_width` - The maximum allowed width of the resized image
- `$max_height` - The maximum allowed height of the resized image

### Return values <a href="#return-values" class="direct-link">#</a>

The function outputs an array containing two elements: `width` and `height`

    $new_dimensions = get_resized_dimensions(640, 480, 200, 200)
    echo $new_dimensions['width'] . ', ' . $new_dimensions['height'];

The output for the above code will be: `200, 150`

### Code <a href="#code" class="direct-link">#</a>

    function get_resized_dimensions($width, $height, $max_width, $max_height) {
      // Check for bad values
      if ($width <= 0 || $height <= 0) return false;

      // Determine aspect ratio
      $aspect_ratio = $height / $width;

      // First check width
      if ($width > $max_width) {
        $new_width = $max_width;
        $new_height = $new_width * $aspect_ratio;
      } else {
        $new_width = $width;
        $new_height = $height;
      }

      // Now check height
      if ($new_height > $max_height) {
        $new_height = $max_height;
        $new_width = $new_height / $aspect_ratio;
      }

      return array('width' => $new_width, 'height' => $new_height);
    }

<a href="../../tags/development/index.html" class="post-tag">development</a> <a href="../../tags/php/index.html" class="post-tag">php</a> <a href="../../tags/tips/index.html" class="post-tag">tips</a>

---

<img src="http://0.gravatar.com/avatar/bf1b3b95fd5b096a3592247c29667b33?s=512" alt="Photo of Cory" class="avatar avatar-small" />

Written by [Cory LaViska](../../index-4.html), a software engineer and UX architect responsible for [Shoelace.style](https://shoelace.style/), [Surreal CMS](https://www.surrealcms.com/), and other [open source things](https://github.com/claviska).

You can follow Cory on [Twitter](https://twitter.com/claviska) and [GitHub](https://github.com/claviska).

---

<a href="../javascript-functions-for-basename-and-dirname/index.html" class="post-nav-previous"><span class="small">Previous post</span> JavaScript functions for basename and dirname</a> <a href="../convert-arrays-to-csv-with-php/index.html" class="post-nav-next"><span class="small">Up next</span> Convert arrays to CSV with PHP</a>
