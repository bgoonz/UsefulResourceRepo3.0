<a href="../../index.html" class="header-link"><img src="../../images/logos/wordmark.svg" alt="A Beautiful Site" class="wordmark" /></a> <a href="../../index.html" class="nav-item">Home</a> <a href="../../tags/index.html" class="nav-item">Tags</a> <a href="../index.html" class="nav-item">Archive</a> <a href="../../about/index.html" class="nav-item">About</a>

------------------------------------------------------------------------

Select all, select none, and invert selection with jQuery
=========================================================

December 09, 2007 • 1 min read

![A drawing of a cartoon man pointing upwards](../../images/artwork/pointer.gif)

Heads up! This post was written in 2007, so it may contain information that is no longer accurate. I keep posts like this around for historical purposes and to prevent link rot, so please keep this in mind as you're reading.

— Cory

A demonstration of selecting checkboxes using jQuery.We start off with a bunch of checkboxes:

    <fieldset id="group_1">
      <input type="checkbox" name="numbers[]" value="0" />
      <input type="checkbox" name="numbers[]" value="1" />
      <input type="checkbox" name="numbers[]" value="2" />
      <input type="checkbox" name="numbers[]" value="3" />
      <input type="checkbox" name="numbers[]" value="4" />
      <input type="checkbox" name="numbers[]" value="5" />
      <input type="checkbox" name="numbers[]" value="6" />
      <input type="checkbox" name="numbers[]" value="7" />
      <input type="checkbox" name="numbers[]" value="8" />
      <input type="checkbox" name="numbers[]" value="9" />
    </fieldset>

Now, we add some links:

    <a rel="group_1" href="#select_all">Select All</a>
    <a rel="group_1" href="#select_none">Select None</a>
    <a rel="group_1" href="#invert_selection">Invert Selection</a>

The `rel` attribute is equal to the ID of the containing element of the checkbox group. In this example the containing element is a `fieldset`, but it could be a `DIV`, `P`, `UL`, etc.

Now, we add behaviors using jQuery:

    <script type="text/javascript">
      $(document).ready(function() {
        // Select all
        $("a[href='#select_all']").click(function() {
          $("#" + $(this).attr('rel') + " input[type='checkbox']").attr('checked', true);
          return false;
        });

        // Select none
        $("a[href='#select_none']").click(function() {
          $("#" + $(this).attr('rel') + " input[type='checkbox']").attr('checked', false);
          return false;
        });

        // Invert selection
        $("a[href='#invert_selection']").click(function() {
          $("#" + $(this).attr('rel') + " input[type='checkbox']").each(function() {
            $(this).attr('checked', !$(this).attr('checked'));
          });
          return false;
        });
      });
    </script>

To add the same functionality to another group of checkboxes, create more links and adjust the `rel` attribute accordingly:

    <a rel="group_2" href="#select_all">Select All</a>
    <a rel="group_2" href="#select_none">Select None</a>
    <a rel="group_2" href="#invert_selection">Invert Selection</a>

    <a rel="group_3" href="#select_all">Select All</a>
    <a rel="group_3" href="#select_none">Select None</a>
    <a rel="group_3" href="#invert_selection">Invert Selection</a>

<a href="../../tags/development/index.html" class="post-tag">development</a> <a href="../../tags/javascript/index.html" class="post-tag">javascript</a> <a href="../../tags/jquery/index.html" class="post-tag">jquery</a> <a href="../../tags/tips/index.html" class="post-tag">tips</a>

------------------------------------------------------------------------

<img src="http://0.gravatar.com/avatar/bf1b3b95fd5b096a3592247c29667b33?s=512" alt="Photo of Cory" class="avatar avatar-small" />

Written by [Cory LaViska](../../index-4.html), a software engineer and UX architect responsible for [Shoelace.style](https://shoelace.style/), [Surreal CMS](https://www.surrealcms.com/), and other [open source things](https://github.com/claviska).

You can follow Cory on [Twitter](https://twitter.com/bgooonz) and [GitHub](https://github.com/claviska).

------------------------------------------------------------------------

<a href="../external-popup-links-using-jquery/index.html" class="post-nav-previous"><span class="small">Previous post</span> External popup links using jQuery</a> <a href="../ie8-burns-the-acid-2-test/index.html" class="post-nav-next"><span class="small">Up next</span> IE8 burns the Acid 2 test</a>
