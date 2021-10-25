### jQuery: The Basics

This is a basic tutorial, designed to help you get started using jQuery. If you don't have a test page setup yet, start by creating the following HTML page:

```js
<!doctype html>
<html>
<head>
	<meta charset="utf-8">
	<title>Demo</title>
</head>
<body>
	<a href="http://jquery.com/">jQuery</a>
	<script src="jquery.js"></script>
	<script>

	// Your code goes here.

	</script>
</body>
</html>
```

The `src` attribute in the `<script>` element must point to a copy of jQuery. Download a copy of jQuery from the [Downloading jQuery](http://jquery.com/download/) page and store the `jquery.js` file in the same directory as your HTML file.

<div class="warning">**Note**: When you download jQuery, the file name may contain a version number, e.g., `jquery-x.y.z.js`. Make sure to either rename this file to `jquery.js` or update the `src` attribute of the \<script\> element to match the file name.</div>

### Launching Code on Document Ready

To ensure that their code runs after the browser finishes loading the document, many JavaScript programmers wrap their code in an `onload` function:

```js
window.onload = function () {
  alert("welcome");
};
```

Unfortunately, the code doesn't run until all images are finished downloading, including banner ads. To run code as soon as the document is ready to be manipulated, jQuery has a statement known as the [ready event](http://api.jquery.com/ready/):

```js
$(document).ready(function () {
  // Your code here.
});
```

<div class="warning">**Note**: The jQuery library exposes its methods and properties via two properties of the <code>window</code> object called <code>jQuery</code> and <code>$</code>. <code>$</code> is simply an alias for <code>jQuery</code> and it's often employed because it's shorter and faster to write.</div>

For example, inside the `ready` event, you can add a click handler to the link:

```js
$(document).ready(function () {
  $("a").click(function (event) {
    alert("Thanks for visiting!");
  });
});
```

Copy the above jQuery code into your HTML file where it says `// Your code goes here`. Then, save your HTML file and reload the test page in your browser. Clicking the link should now first display an alert pop-up, then continue with the default behavior of navigating to http://jquery.com.

For `click` and most other [events](http://api.jquery.com/category/events/), you can prevent the default behavior by calling `event.preventDefault()` in the event handler:

```js
$(document).ready(function () {
  $("a").click(function (event) {
    alert("As you can see, the link no longer took you to jquery.com");

    event.preventDefault();
  });
});
```

Try replacing your first snippet of jQuery code, which you previously copied in to your HTML file, with the one above. Save the HTML file again and reload to try it out.

### Complete Example

The following example illustrates the click handling code discussed above, embedded directly in the HTML `<body>`. Note that in practice, it is usually better to place your code in a separate JS file and load it on the page with a `<script>` element's `src` attribute.

```js
<!doctype html>
<html>
<head>
	<meta charset="utf-8">
	<title>Demo</title>
</head>
<body>
	<a href="http://jquery.com/">jQuery</a>
	<script src="jquery.js"></script>
	<script>

	$( document ).ready(function() {
		$( "a" ).click(function( event ) {
			alert( "The link will no longer take you to jquery.com" );
			event.preventDefault();
		});
	});

	</script>
</body>
</html>
```

### Adding and Removing an HTML Class

<div class="warning">**Important:** You must place the remaining jQuery examples inside the `ready` event so that your code executes when the document is ready to be worked on.</div>

Another common task is adding or removing a class.

First, add some style information into the `<head>` of the document, like this:

```js
<style>
a.test {
	font-weight: bold;
}
</style>
```

Next, add the [.addClass()](http://api.jquery.com/addClass/) call to the script:

```js
$("a").addClass("test");
```

All `<a>` elements are now bold.

To remove an existing class, use [.removeClass()](http://api.jquery.com/removeClass/):

```js
$("a").removeClass("test");
```

### Special Effects

jQuery also provides some handy [effects](http://api.jquery.com/category/effects/) to help you make your web sites stand out. For example, if you create a click handler of:

```js
$("a").click(function (event) {
  event.preventDefault();

  $(this).hide("slow");
});
```

Then the link slowly disappears when clicked.

## Callbacks and Functions

Unlike many other programming languages, JavaScript enables you to freely pass functions around to be executed at a later time. A _callback_ is a function that is passed as an argument to another function and is executed after its parent function has completed. Callbacks are special because they patiently wait to execute until their parent finishes. Meanwhile, the browser can be executing other functions or doing all sorts of other work.

To use callbacks, it is important to know how to pass them into their parent function.

### Callback _without_ Arguments

If a callback has no arguments, you can pass it in like this:

```js
$.get("myhtmlpage.html", myCallBack);
```

When [$.get()](http://api.jquery.com/jQuery.get/) finishes getting the page `myhtmlpage.html`, it executes the `myCallBack()` function.

- **Note:** The second parameter here is simply the function name (but _not_ as a string, and without parentheses).

### Callback _with_ Arguments

Executing callbacks with arguments can be tricky.

#### Wrong

This code example will **_not_** work:

```js
$.get("myhtmlpage.html", myCallBack(param1, param2));
```

The reason this fails is that the code executes `myCallBack( param1, param2 )` immediately and then passes `myCallBack()`'s _return value_ as the second parameter to `$.get()`. We actually want to pass the function `myCallBack()`, not `myCallBack( param1, param2 )`'s return value (which might or might not be a function). So, how to pass in `myCallBack()` _and_ include its arguments?

#### Right

To defer executing `myCallBack()` with its parameters, you can use an anonymous function as a wrapper. Note the use of `function() {`. The anonymous function does exactly one thing: calls `myCallBack()`, with the values of `param1` and `param2`.

```js
$.get("myhtmlpage.html", function () {
  myCallBack(param1, param2);
});
```

When `$.get()` finishes getting the page `myhtmlpage.html`, it executes the anonymous function, which executes `myCallBack( param1, param2 )`.

jQuery's ajax capabilities can be especially useful when dealing with forms. There are several advantages, which can range from serialization, to simple client-side validation (e.g. "Sorry, that username is taken"), to [prefilters](http://api.jquery.com/jQuery.ajaxPrefilter/) (explained below), and even more!

### Serialization

Serializing form inputs in jQuery is extremely easy. Two methods come supported natively: `.serialize()` and `.serializeArray()`. While the names are fairly self-explanatory, there are many advantages to using them.

The `.serialize()` method serializes a form's data into a query string. For the element's value to be serialized, it **must** have a `name` attribute. Please note that values from inputs with a type of `checkbox` or `radio` are included only if they are checked.

```js
// Turning form data into a query string
$("#myForm").serialize();

// Creates a query string like this:
// field_1=something&field2=somethingElse
```

While plain old serialization is great, sometimes your application would work better if you sent over an array of objects, instead of just the query string. For that, jQuery has the `.serializeArray()` method. It's very similar to the `.serialize()` method listed above, except it produces an array of objects, instead of a string.

```js
// Creating an array of objects containing form data
$("#myForm").serializeArray();

// Creates a structure like this:
// [
//   {
//     name : "field_1",
//     value : "something"
//   },
//   {
//     name : "field_2",
//     value : "somethingElse"
//   }
// ]
```

### Client-side validation

Client-side validation is, much like many other things, extremely easy using jQuery. While there are several cases developers can test for, some of the most common ones are: presence of a required input, valid usernames/emails/phone numbers/etc&hellip;, or checking an "I agree&hellip;" box.

Please note that it is advisable that you also perform server-side validation for your inputs. However, it typically makes for a better user experience to be able to validate some things without submitting the form.

With that being said, let's jump on in to some examples! First, we'll see how easy it is to check if a required field doesn't have anything in it. If it doesn't, then we'll `return false`, and prevent the form from processing.

```js
// Using validation to check for the presence of an input
$("#form").submit(function (event) {
  // If .required's value's length is zero
  if ($(".required").val().length === 0) {
    // Usually show some kind of error message here

    // Prevent the form from submitting
    event.preventDefault();
  } else {
    // Run $.ajax() here
  }
});
```

Let's see how easy it is to check for invalid characters in a phone number:

```js
// Validate a phone number field
$("#form").submit(function (event) {
  var inputtedPhoneNumber = $("#phone").val();

  // Match only numbers
  var phoneNumberRegex = /^\d*$/;

  // If the phone number doesn't match the regex
  if (!phoneNumberRegex.test(inputtedPhoneNumber)) {
    // Usually show some kind of error message here

    // Prevent the form from submitting
    event.preventDefault();
  } else {
    // Run $.ajax() here
  }
});
```

### Prefiltering

A prefilter is a way to modify the ajax options before each request is sent (hence, the name `prefilter`).

For example, say we would like to modify all cross-domain requests through a proxy. To do so with a prefilter is quite simple:

```js
// Using a proxy with a prefilter
$.ajaxPrefilter(function (options, originalOptions, jqXHR) {
  if (options.crossDomain) {
    options.url =
      "http://mydomain.net/proxy/" + encodeURIComponent(options.url);
    options.crossDomain = false;
  }
});
```

You can pass in an optional argument before the callback function that specifies which `dataTypes` you'd like the prefilter to be applied to. For example, if we want our prefilter to only apply to `JSON` and `script` requests, we'd do:

```js
// Using the optional dataTypes argument
$.ajaxPrefilter("json script", function (options, originalOptions, jqXHR) {
  // Do all of the prefiltering here, but only for
  // requests that indicate a dataType of "JSON" or "script"
});
```

Often, you'll want to perform an operation whenever an Ajax request starts or stops, such as showing or hiding a loading indicator. Rather than defining this behavior inside every Ajax request, you can bind Ajax events to elements just like you'd bind other events. For a complete list of Ajax events, visit [Ajax Events documentation on docs.jquery.com](http://docs.jquery.com/Ajax_Events).

```js
// Setting up a loading indicator using Ajax Events
$("#loading_indicator")
  .ajaxStart(function () {
    $(this).show();
  })
  .ajaxStop(function () {
    $(this).hide();
  });
```

---

# Jquery-AJAX-Methods:

While jQuery does offer many Ajax-related convenience methods, the core `$.ajax()` method is at the heart of all of them, and understanding it is imperative. We'll review it first, and then touch briefly on the convenience methods.

It's often considered good practice to use the `$.ajax()` method over the jQuery provided [convenience methods](#convenience-methods). As you'll see, it offers features that the convenience methods do not, and its syntax allows for the ease of readability.

### `$.ajax()`

jQuery’s core `$.ajax()` method is a powerful and straightforward way of creating Ajax requests. It takes a configuration object that contains all the instructions jQuery requires to complete the request. The `$.ajax()` method is particularly valuable because it offers the ability to specify both success and failure callbacks. Also, its ability to take a configuration object that can be defined separately makes it easier to write reusable code. For complete documentation of the configuration options, visit [http://api.jquery.com/jQuery.ajax/](http://api.jquery.com/jQuery.ajax/).

```js
// Using the core $.ajax() method
$.ajax({
  // The URL for the request
  url: "post.php",

  // The data to send (will be converted to a query string)
  data: {
    id: 123,
  },

  // Whether this is a POST or GET request
  type: "GET",

  // The type of data we expect back
  dataType: "json",
})
  // Code to run if the request succeeds (is done);
  // The response is passed to the function
  .done(function (json) {
    $("<h1>").text(json.title).appendTo("body");
    $('<div class="content">').html(json.html).appendTo("body");
  })
  // Code to run if the request fails; the raw request and
  // status codes are passed to the function
  .fail(function (xhr, status, errorThrown) {
    alert("Sorry, there was a problem!");
    console.log("Error: " + errorThrown);
    console.log("Status: " + status);
    console.dir(xhr);
  })
  // Code to run regardless of success or failure;
  .always(function (xhr, status) {
    alert("The request is complete!");
  });
```

**Note:** Regarding the `dataType` setting, if the server sends back data that is in a different format than you specify, your code may fail, and the reason will not always be clear, because the HTTP response code will not show an error. When working with Ajax requests, make sure your server is sending back the data type you're asking for, and verify that the `Content-type` header is accurate for the data type. For example, for JSON data, the `Content-type` header should be `application/json`.

### `$.ajax()` Options

There are many, many options for the `$.ajax()` method, which is part of its power. For a complete list of options, visit [http://api.jquery.com/jQuery.ajax/](http://api.jquery.com/jQuery.ajax/); here are several that you will use frequently:

#### async

Set to `false` if the request should be sent synchronously. Defaults to `true`. Note that if you set this option to `false`, your request will block execution of other code until the response is received.

#### cache

Whether to use a cached response if available. Defaults to `true` for all `dataType`s except "script" and "jsonp". When set to `false`, the URL will simply have a cachebusting parameter appended to it.

#### done

A callback function to run if the request succeeds. The function receives the response data (converted to a JavaScript object if the `dataType` was JSON), as well as the text status of the request and the raw request object.

#### fail

A callback function to run if the request results in an error. The function receives the raw request object and the text status of the request.

#### always

A callback function to run when the request is complete, regardless of success or failure. The function receives the raw request object and the text status of the request.

#### context

The scope in which the callback function(s) should run (i.e. what `this` will mean inside the callback function(s)). By default, `this` inside the callback function(s) refers to the object originally passed to `$.ajax()`.

#### data

The data to be sent to the server. This can either be an object or a query string, such as `foo=bar&amp;baz=bim`.

#### dataType

The type of data you expect back from the server. By default, jQuery will look at the MIME type of the response if no `dataType` is specified.

#### jsonp

The callback name to send in a query string when making a JSONP request. Defaults to "callback".

#### timeout

The time in milliseconds to wait before considering the request a failure.

#### traditional

Set to `true` to use the param serialization style in use prior to jQuery 1.4. For details, see [http://api.jquery.com/jQuery.param/](http://api.jquery.com/jQuery.param/).

#### type

The type of the request, "POST" or "GET". Defaults to "GET". Other request types, such as "PUT" and "DELETE" can be used, but they may not be supported by all browsers.

#### url

The URL for the request.

The `url` option is the only required property of the `$.ajax()` configuration object; all other properties are optional. This can also be passed as the first argument to `$.ajax()`, and the options object as the second argument.

### Convenience Methods

If you don't need the extensive configurability of `$.ajax()`, and you don't care about handling errors, the Ajax convenience functions provided by jQuery can be useful, terse ways to accomplish Ajax requests. These methods are just "wrappers" around the core `$.ajax()` method, and simply pre-set some of the options on the `$.ajax()` method.

The convenience methods provided by jQuery are:

#### $.get

Perform a GET request to the provided URL.

#### $.post

Perform a POST request to the provided URL.

#### $.getScript

Add a script to the page.

#### $.getJSON

Perform a GET request, and expect JSON to be returned.

In each case, the methods take the following arguments, in order:

#### url

The URL for the request. Required.

#### data

The data to be sent to the server. Optional. This can either be an object or a query string, such as `foo=bar&amp;baz=bim`.

**Note:** This option is not valid for `$.getScript`.

#### success callback

A callback function to run if the request succeeds. Optional. The function receives the response data (converted to a JavaScript object if the data type was JSON), as well as the text status of the request and the raw request object.

#### data type

The type of data you expect back from the server. Optional.

**Note:** This option is only applicable for methods that don't already specify the data type in their name.

```js
// Using jQuery's Ajax convenience methods

// Get plain text or HTML
$.get(
  "/users.php",
  {
    userId: 1234,
  },
  function (resp) {
    console.log(resp); // server response
  }
);

// Add a script to the page, then run a function defined in it
$.getScript("/static/js/myScript.js", function () {
  functionFromMyScript();
});

// Get JSON-formatted data from the server
$.getJSON("/details.php", function (resp) {
  // Log each key in the response data
  $.each(resp, function (key, value) {
    console.log(key + " : " + value);
  });
});
```

### `$.fn.load`

The `.load()` method is unique among jQuery’s Ajax methods in that it is called on a selection. The `.load()` method fetches HTML from a URL, and uses the returned HTML to populate the selected element(s). In addition to providing a URL to the method, you can optionally provide a selector; jQuery will fetch only the matching content from the returned HTML.

```js
// Using .load() to populate an element
$("#newContent").load("/foo.html");
```

```js
// Using .load() to populate an element based on a selector
$("#newContent").load("/foo.html #myDiv h1:first", function (html) {
  alert("Content updated!");
});
```

---

# Key Concepts:

---

Proper use of Ajax-related jQuery methods requires understanding some key concepts first.

### GET vs. POST

The two most common "methods" for sending a request to a server are GET and POST. It's important to understand the proper application of each.

The GET method should be used for non-destructive operations — that is, operations where you are only "getting" data from the server, not changing data on the server. For example, a query to a search service might be a GET request. GET requests may be cached by the browser, which can lead to unpredictable behavior if you are not expecting it. GET requests generally send all of their data in a query string.

The POST method should be used for destructive operations — that is, operations where you are changing data on the server. For example, a user saving a blog post should be a POST request. POST requests are generally not cached by the browser; a query string can be part of the URL, but the data tends to be sent separately as post data.

### Data Types

jQuery generally requires some instruction as to the type of data you expect to get back from an Ajax request; in some cases the data type is specified by the method name, and in other cases it is provided as part of a configuration object. There are several options:

#### text

For transporting simple strings.

#### html

For transporting blocks of HTML to be placed on the page.

#### script

For adding a new script to the page.

#### json

For transporting JSON-formatted data, which can include strings, arrays, and objects.

**Note:** As of jQuery 1.4, if the JSON data sent by your server isn't properly formatted, the request may fail silently. See [http://json.org](http://json.org) for details on properly formatting JSON, but as a general rule, use built-in language methods for generating JSON on the server to avoid syntax issues.

#### jsonp

For transporting JSON data from another domain.

#### xml

For transporting data in a custom XML schema.

Consider using the JSON format in most cases, as it provides the most flexibility. It is especially useful for sending both HTML and data at the same time.

### A is for Asynchronous

The asynchronicity of Ajax catches many new jQuery users off guard. Because Ajax calls are asynchronous by default, the response is not immediately available. Responses can only be handled using a callback. So, for example, the following code will not work:

```
var response;

$.get( "foo.php", function( r ) {
	response = r;
});

console.log( response ); // undefined
```

Instead, we need to pass a callback function to our request; this callback will run when the request succeeds, at which point we can access the data that it returned, if any.

```
$.get( "foo.php", function( response ) {
	console.log( response ); // server response
});
```

### Same-Origin Policy and JSONP

In general, Ajax requests are limited to the same protocol (http or https), the same port, and the same domain as the page making the request. This limitation does not apply to scripts that are loaded via jQuery's Ajax methods.

Note: Versions of Internet Explorer less than 10 do not support cross-domain AJAX requests.

The other exception is requests targeted at a JSONP service on another domain. In the case of JSONP, the provider of the service has agreed to respond to your request with a script that can be loaded into the page using a `<script>` tag, thus avoiding the same-origin limitation; that script will include the data you requested, wrapped in a callback function you provide.

### Ajax and Firebug

Firebug (or the Webkit Inspector in Chrome or Safari) is an invaluable tool for working with Ajax requests. You can see Ajax requests as they happen in the Console tab of Firebug (and in the Resources > XHR panel of Webkit Inspector), and you can click on a request to expand it and see details such as the request headers, response headers, response content, and more. If something isn't going as expected with an Ajax request, this is the first place to look to track down what's wrong.

---

# Working W JSON:

---

The advent of JSONP — essentially a consensual cross-site scripting hack — has opened the door to powerful mashups of content. Many prominent sites provide JSONP services, allowing you access to their content via a predefined API. A particularly great source of JSONP-formatted data is the [Yahoo! Query Language](http://developer.yahoo.com/yql/console/), which we'll use in the following example to fetch news about cats.

```
// Using YQL and JSONP
$.ajax({
	url: "http://query.yahooapis.com/v1/public/yql",

	// The name of the callback parameter, as specified by the YQL service
	jsonp: "callback",

	// Tell jQuery we're expecting JSONP
	dataType: "jsonp",

	// Tell YQL what we want and that we want JSON
	data: {
		q: "select title,abstract,url from search.news where query=\"cat\"",
		format: "json"
	},

	// Work with the response
	success: function( response ) {
		console.log( response ); // server response
	}
});
```

jQuery handles all the complex aspects of JSONP behind-the-scenes — all we have to do is tell jQuery the name of the JSONP callback parameter specified by YQL ("callback" in this case), and otherwise the whole process looks and feels like a normal Ajax request.
