<a href="../../index.html" class="header-link"><img src="../../images/logos/wordmark.svg" alt="A Beautiful Site" class="wordmark" /></a> <a href="../../index.html" class="nav-item">Home</a> <a href="../../tags/index.html" class="nav-item">Tags</a> <a href="../index.html" class="nav-item">Archive</a> <a href="../../about/index.html" class="nav-item">About</a>

------------------------------------------------------------------------

Working with HTML5 data attributes
==================================

August 21, 2014 • 3 min read

Before HTML5, working with arbitrary data sucked. To keep things valid, you had to stuff things into `rel` or `class` attributes. Some developers even created their own custom attributes. Boy, was it a mess.

But that all changed with the introduction of HTML5 custom data attributes. Now you can store arbitrary data in an easy, standards-compliant way.

How do data attributes work? <a href="#how-do-data-attributes-work%3F" class="direct-link">#</a>
------------------------------------------------------------------------------------------------

A data attribute is exactly that: a custom attribute that stores data. They are always prefixed with `data-` followed by something descriptive (according to [the spec](http://www.w3.org/html/wg/drafts/html/master/dom.html#custom-data-attribute), only lower case letters and hyphens are allowed). An element can have any number of data attributes you want.

Here's an example using a list item to store data for a user:

    <li data-id="1234" data-email="calvin@example.com" data-age="21">Calvin</li>

Of course, this data isn't very useful to a visitor because they can't actually see it, but it's wildly useful for building web applications. Imagine a delete button in your app:

    <button type="button" data-cmd="delete" data-id="1234">Delete</button>

All the data you need is right there to send to your backend script. No more `rel` stuffing or parsing IDs and actions out of other attributes. Data URLs make your life easier.

What can you store? <a href="#what-can-you-store%3F" class="direct-link">#</a>
------------------------------------------------------------------------------

One thing to remember when working with data attributes is that you can't store objects in them. Well, you can if you serialize them, but we'll save that for another post.

For now, just know that you're pretty much limited to storing strings.

Reading/writing data attributes with JavaScript <a href="#reading%2Fwriting-data-attributes-with-javascript" class="direct-link">#</a>
--------------------------------------------------------------------------------------------------------------------------------------

Using the delete button as an example, let's look at how we can access this data with JavaScript.

    // Here's our button
    var button = document.getElementById('your-button-id');

    // Get the values
    var cmd = button.getAttribute('data-cmd');
    var id = button.getAttribute('data-id');

    // Change the values
    button.setAttribute('data-cmd', yourNewCmd);
    button.setAttribute('data-id', yourNewId);

Pretty simple, right? Now you can pass `cmd` and `id` to your app in an AJAX request or do whatever else you need to do with it.

Reading/writing data attributes with jQuery <a href="#reading%2Fwriting-data-attributes-with-jquery" class="direct-link">#</a>
------------------------------------------------------------------------------------------------------------------------------

Here's the same thing using jQuery's [`.attr()`](http://api.jquery.com/attr/) method:

    // Get the values
    var cmd = $('#your-button-id').attr('data-cmd');
    var id = $('#your-button-id').attr('data-id');

    // Change the values
    $('#your-button-id')
        .attr('data-cmd', yourNewCmd)
        .attr('data-id', yourNewId);

Don't get this confused with jQuery's [`.data()`](http://api.jquery.com/data/) method. Although there is some overlap in how data attributes and `.data()` work, they're two totally different things. If you're not familiar with it, just stick with `.attr()`.

Using the dataset API <a href="#using-the-dataset-api" class="direct-link">#</a>
--------------------------------------------------------------------------------

HTML5 actually has an API just for working with this type of data. Alas, [IE10 and below](http://caniuse.com/#feat=dataset) don't fully support it, but it's still worth mentioning.

Using the button example again, here's how to get and set data attributes using the dataset API:

    // Here's our button
    var button = document.getElementById('your-button-id');

    // Get the values
    var cmd = button.dataset.cmd;
    var id = button.dataset.id;

    // Change the values
    button.dataset.cmd = yourNewCmd;
    button.dataset.id = yourNewId;

Note how there's no `data` prefix or dashes here. Similar to the way CSS properties work in JavaScript, you'll need to use camel case notation. The dataset API converts each one so you'll always have `data-some-attribute-name` in your HTML and `dataset.someAttributeName` in your JavaScript. Magic!

Things you can do with data attributes <a href="#things-you-can-do-with-data-attributes" class="direct-link">#</a>
------------------------------------------------------------------------------------------------------------------

The examples above are very basic, but you can do so much with custom data attributes. Here are a few examples off the top of my head.

### Filtering <a href="#filtering" class="direct-link">#</a>

Say you have a list of things and you want to filter them by keyword. Just put the keywords into a data attribute and write a short script to loop through and show/hide them accordingly.

    <input type="text" id="filter">

    <ul class="cars">
        <li data-models="mustang, f150, 500, fusion">Ford</li>
        <li data-models="corvette, silverado, impala, cavalier">Chevrolet</li>
        ...
    </ul>

Here's a quick and dirty filter using jQuery:

    $('#filter').on('keyup', function() {
      var keyword = $(this).val().toLowerCase();
      $('.cars > li').each(function() {
        $(this).toggle(keyword.length < 1 || $(this).attr('data-models').indexOf(keyword) > -1);
      });
    });

### Styling <a href="#styling" class="direct-link">#</a>

It's arguably better to use classes, but you can style things against data attributes too. Here's how to apply a style if the element has a certain data attribute (regardless of its value). First, the HTML:

    <span class="label" data-warning>

Now the CSS:

    [data-warning] {
      background: red;
    }

But what if we wanted to style it based on the data attribute's value? This will work for any `data-warning` attribute that contains the word *error*:

    [data-warning*=error] {
        color: red;
    }

### Configuring <a href="#configuring" class="direct-link">#</a>

[Bootstrap](http://getbootstrap.com/) uses data attributes as an HTML alternative to configuring plugins via JavaScript. Here's an example of a [popover](http://getbootstrap.com/javascript/#popovers):

    <button type="button" class="btn btn-default" data-container="body" data-toggle="popover" data-placement="top" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
      Popover on top
    </button>

A better way to store data <a href="#a-better-way-to-store-data" class="direct-link">#</a>
------------------------------------------------------------------------------------------

Custom data attributes are widely used all over the web. The nice thing is that they work fine in older browsers, and they adhere to web standards moving forward. That means you can start using them today knowing that they won't stop working tomorrow.

I've shown you a few common ways to use custom data attributes. What other uses can you think of? Have you used them before? Let me know by commenting below!

<a href="../../tags/development/index.html" class="post-tag">development</a> <a href="../../tags/html/index.html" class="post-tag">html</a>

------------------------------------------------------------------------

<img src="http://0.gravatar.com/avatar/bf1b3b95fd5b096a3592247c29667b33?s=512" alt="Photo of Cory" class="avatar avatar-small" />

Written by [Cory LaViska](../../index-4.html), a software engineer and UX architect responsible for [Shoelace.style](https://shoelace.style/), [Surreal CMS](https://www.surrealcms.com/), and other [open source things](https://github.com/claviska).

You can follow Cory on [Twitter](https://twitter.com/claviska) and [GitHub](https://github.com/claviska).

------------------------------------------------------------------------

<a href="../is-it-possible-to-be-an-introverted-entrepreneur/index.html" class="post-nav-previous"><span class="small">Previous post</span> Is it possible to be an introverted entrepreneur?</a> <a href="../find-a-name-for-almost-any-hex-color/index.html" class="post-nav-next"><span class="small">Up next</span> Find a name for almost any hex color</a>
