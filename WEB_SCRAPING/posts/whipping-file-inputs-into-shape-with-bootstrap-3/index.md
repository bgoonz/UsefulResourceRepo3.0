<a href="../../index.html" class="header-link"><img src="../../images/logos/wordmark.svg" alt="A Beautiful Site" class="wordmark" /></a> <a href="../../index.html" class="nav-item">Home</a> <a href="../../tags/index.html" class="nav-item">Tags</a> <a href="../index.html" class="nav-item">Archive</a> <a href="../../about/index.html" class="nav-item">About</a>

---

# Whipping file inputs into shape with Bootstrap

August 08, 2013 • 2 min read

There are [many](http://www.quirksmode.org/dom/inputfile.html), [many](https://coderwall.com/p/4etjja), [many](http://viget.com/inspire/custom-file-inputs-with-a-bit-of-jquery) ways to hack a file input so it looks and behaves consistently across all browsers. There's even a pretty [slick plugin](http://markusslima.github.io/bootstrap-filestyle/) to help get the job done. Unfortunately, most of these solutions are cumbersome, prone to cross-browser issues, and require JavaScript.

Today, I would like to propose a more fundamental approach for file inputs in Bootstrap 3 and 4.

## Modern approach (IE9+) <a href="#modern-approach-(ie9%2B)" class="direct-link">#</a>

Let's start by nesting a button inside a `<label>`, adding the appropriate button classes to style it as we want:

    <label class="btn btn-default btn-file">
      Browse <input type="file" style="display: none;">
    </label>

## Legacy approach (IE8 and below) <a href="#legacy-approach-(ie8-and-below)" class="direct-link">#</a>

If you need support for old IE, you can use this legacy approach. Instead of a `<label>`, wrap your button in a `<span>`:

    <span class="btn btn-default btn-file">
      Browse <input type="file">
    </span>

And then apply the following CSS:

    .btn-file {
      position: relative;
      overflow: hidden;
    }

    .btn-file input[type=file] {
      position: absolute;
      top: 0;
      right: 0;
      min-width: 100%;
      min-height: 100%;
      font-size: 100px;
      text-align: right;
      filter: alpha(opacity=0);
      opacity: 0;
      outline: none;
      background: white;
      cursor: inherit;
      display: block;
    }

## Customizing the button's appearance <a href="#customizing-the-button&#39;s-appearance" class="direct-link">#</a>

So far so good. Whether you're using the modern approach or the legacy approach, clicking on the "button" will trigger the file input. As a bonus, it will also acquire the `:hover` and `:active` pseudo classes so it behaves like a real button too.

You can use these buttons like you normally would…by themselves, in a button group, or even in an input group.

![](../../images/bootstrap-file-input-example.png)

## Providing feedback <a href="#providing-feedback" class="direct-link">#</a>

Now with the hard part out of the way, it's a good practice to provide users with a bit of feedback about their selection. A touch of jQuery magic will keep an eye on your file inputs and fire an event called `fileselect` when a file is chosen:

    $(document).on('change', ':file', function() {
      var input = $(this);
      var numFiles = input.get(0).files ? input.get(0).files.length : 1;
      var label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
      input.trigger('fileselect', [numFiles, label]);
    });

Here's an example to demonstrate the event:

    $(document).ready(function() {
      $(':file').on('fileselect', function(event, numFiles, label) {
        console.log(numFiles);
        console.log(label);
      });
    });

You can use the `numFiles` or `label` parameter to show users the name of the file that was selected and, if applicable, how many. Alternatively, you could elect to use the standard **change** event and handle the label yourself.

This method was tested to work in IE8–IE11 and recent versions of Chrome, Safari, Firefox, and Opera.

## See it in action <a href="#see-it-in-action" class="direct-link">#</a>

For a live demo that you can tinker with, [view the demo CodePen](http://codepen.io/claviska/pen/vAgmd/).

_May 20, 2016: added the modern approach and updated the demo._

<a href="../../tags/development/index.html" class="post-tag">development</a> <a href="../../tags/bootstrap/index.html" class="post-tag">bootstrap</a> <a href="../../tags/javascript/index.html" class="post-tag">javascript</a> <a href="../../tags/jquery/index.html" class="post-tag">jquery</a>

---

<img src="http://0.gravatar.com/avatar/bf1b3b95fd5b096a3592247c29667b33?s=512" alt="Photo of Cory" class="avatar avatar-small" />

Written by [Cory LaViska](../../index-4.html), a software engineer and UX architect responsible for [Shoelace.style](https://shoelace.style/), [Surreal CMS](https://www.surrealcms.com/), and other [open source things](https://github.com/claviska).

You can follow Cory on [Twitter](https://twitter.com/claviska) and [GitHub](https://github.com/claviska).

---

<a href="../tips-for-the-aspiring-web-developer/index.html" class="post-nav-previous"><span class="small">Previous post</span> Tips for the aspiring web developer</a> <a href="../theres-a-reason-that-bootstrap-3-has-ugly-buttons/index.html" class="post-nav-next"><span class="small">Up next</span> There's a reason that Bootstrap 3 has ugly buttons</a>
