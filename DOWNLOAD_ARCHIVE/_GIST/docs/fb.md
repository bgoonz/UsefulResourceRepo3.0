# Facebook for Web Developers

Drive traffic and engagement for your desktop and mobile web apps.

Integrating your website or web app with Facebook makes it more social. From simple features such as the [Like button](https://developers.facebook.com/docs/plugins/like-button) and other [social plugins](https://developers.facebook.com/docs/plugins), to real identity through [Facebook Login](https://developers.facebook.com/docs/facebook-login), the Facebook platform provides the tools you need to get people to your website and keep them coming back.

# Quickstart: Facebook SDK for JavaScript

The Facebook SDK for JavaScript provides a rich set of client-side functionality that:

- Enables you to use the [Like Button](https://developers.facebook.com/docs/reference/plugins/like) and other [Social Plugins](https://developers.facebook.com/docs/plugins) on your site.
- Enables you to use [Facebook Login](https://developers.facebook.com/docs/concepts/login) to lower the barrier for people to sign up on your site.
- Makes it easy to call into Facebook's [Graph API](https://developers.facebook.com/docs/reference/api).
- Launch Dialogs that let people perform various actions like sharing stories.
- Facilitates communication when you're building a [game](https://developers.facebook.com/docs/guides/canvas) or an [app tab](https://developers.facebook.com/docs/appsonfacebook/pagetabs) on Facebook.

This quickstart will show you how to setup the SDK and get it to make some basic Graph API calls. If you don't want to setup just yet, you can use our [JavaScript Test Console](https://developers.facebook.com/tools/console/) to use all of the SDK methods, and explore some examples (you can skip the setup steps, but the rest of this quickstart can be tested in the console).

Supported Browsers

The Facebook SDK for JavaScript supports the latest two versions of the most popular browsers: Chrome, Firefox, Edge, Safari (including iOS), and Internet Explorer (version 11 only).

## Basic Setup

The Facebook SDK for JavaScript doesn't have any standalone files that need to be downloaded or installed, instead you simply need to include a short piece of regular JavaScript in your HTML that will asynchronously load the SDK into your pages. The async load means that it does not block loading other elements of your page.

The following snippet of code will give the basic version of the SDK where the options are set to their most common defaults. You should insert it directly after the opening `<body>` tag on each page you want to load it:

<script> window.fbAsyncInit =  function()  { FB.init({ appId :  'your-app-id', autoLogAppEvents :  true, xfbml :  true, version :  '`v12.0`'  });  };  </script>  <script  async  defer  crossorigin="anonymous"  src="https://connect.facebook.net/en_US/sdk.js"></script>

This code will load and initialize the SDK. You must replace the value in `your-app-id` with the ID of your own Facebook App. You can find this ID using the [App Dashboard](https://developers.facebook.com/apps).

# JavaScript SDK - Examples

Read our [quickstart](https://developers.facebook.com/docs/javascript/quickstart) guide to learn how to load and initialize the Facebook SDK for JavaScript and our [advanced setup](https://developers.facebook.com/docs/javascript/advanced-setup) guide to customize your implementation. Next try our examples for using the SDK:

- [Trigger a Share dialog](https://developers.facebook.com/docs/javascript/examples#dialogs)
- [Facebook Login](https://developers.facebook.com/docs/javascript/examples#login)

Supported Browsers

The Facebook SDK for JavaScript supports the latest two versions of the most popular browsers: Chrome, Firefox, Edge, Safari (including iOS), and Internet Explorer (version 11 only).

## Trigger a Share dialog

The [Share Dialog](https://developers.facebook.com/docs/sharing/reference/share-dialog) allows someone using a page to post a link to their timeline, or create an Open Graph story. Dialogs displayed using the JavaScript SDK are automatically formatted for the context in which they are loaded - mobile web, or desktop web.

Here we'll show you how the [`FB.ui()`](https://developers.facebook.com/docs/reference/javascript/FB.ui) method of the SDK can be used to invoke a really basic Share dialog. Add this snippet after the `FB.init()` call in the basic setup code:

[](https://developers.facebook.com/docs/javascript/examples#)Share Dialog

```

FB.ui({
  method: 'share',
  href: 'https://developers.facebook.com/docs/'
}, function(response){});

```

Now when you reload your page, you'll see a Share dialog appear over the top of the page. Once the dialog has been closed, either by posting the story or by cancelling, the response function will be triggered.

Read the [`FB.ui` reference doc](https://developers.facebook.com/docs/reference/javascript/FB.ui/) to see a full list of parameters that can be used, and the structure of the response object.

[Read `FB.ui` Reference Documentation](https://developers.facebook.com/docs/reference/javascript/FB.ui/)

## Facebook Login

[Facebook Login](https://developers.facebook.com/docs/facebook-login/) allows users to register or sign in to your app with their Facebook identity.

We have a full guide on how to [use the JS SDK to implement Facebook Login](https://developers.facebook.com/docs/facebook-login/login-flow-for-web). But for now, let's just use some basic sample code, so you can see how it works. Insert the following after your original `FB.init` call:

[](https://developers.facebook.com/docs/javascript/examples#)Login Dialog

```

FB.login(function(response) {
    if (response.authResponse) {
     console.log('Welcome!  Fetching your information.... ');
     FB.api('/me', function(response) {
       console.log('Good to see you, ' + response.name + '.');
     });
    } else {
     console.log('User cancelled login or did not fully authorize.');
    }
});

```

Read the [Login guide](https://developers.facebook.com/docs/facebook-login/login-flow-for-web) to learn exactly what is happening here, but when you reload your page you should be prompted with the Login dialog for you app, if you haven't already granted it permission.

[Learn more about Facebook Login](https://developers.facebook.com/docs/facebook-login)

[Web SDKs](https://developers.facebook.com/docs/web)

- [JavaScript SDK](https://developers.facebook.com/docs/javascript)

  - [Quickstart](https://developers.facebook.com/docs/javascript/quickstart)
  - [Advanced Setup](https://developers.facebook.com/docs/javascript/advanced-setup)
  - [Examples](https://developers.facebook.com/docs/javascript/examples)
  - [Frameworks](https://developers.facebook.com/docs/javascript/frameworks)
  - [Reference](https://developers.facebook.com/docs/javascript/reference)

# Quickstart: Facebook SDK for JavaScript

The Facebook SDK for JavaScript provides a rich set of client-side functionality that:

- Enables you to use the [Like Button](https://developers.facebook.com/docs/reference/plugins/like) and other [Social Plugins](https://developers.facebook.com/docs/plugins) on your site.
- Enables you to use [Facebook Login](https://developers.facebook.com/docs/concepts/login) to lower the barrier for people to sign up on your site.
- Makes it easy to call into Facebook's [Graph API](https://developers.facebook.com/docs/reference/api).
- Launch Dialogs that let people perform various actions like sharing stories.
- Facilitates communication when you're building a [game](https://developers.facebook.com/docs/guides/canvas) or an [app tab](https://developers.facebook.com/docs/appsonfacebook/pagetabs) on Facebook.

This quickstart will show you how to setup the SDK and get it to make some basic Graph API calls. If you don't want to setup just yet, you can use our [JavaScript Test Console](https://developers.facebook.com/tools/console/) to use all of the SDK methods, and explore some examples (you can skip the setup steps, but the rest of this quickstart can be tested in the console).

Supported Browsers

The Facebook SDK for JavaScript supports the latest two versions of the most popular browsers: Chrome, Firefox, Edge, Safari (including iOS), and Internet Explorer (version 11 only).

## Basic Setup

The Facebook SDK for JavaScript doesn't have any standalone files that need to be downloaded or installed, instead you simply need to include a short piece of regular JavaScript in your HTML that will asynchronously load the SDK into your pages. The async load means that it does not block loading other elements of your page.

The following snippet of code will give the basic version of the SDK where the options are set to their most common defaults. You should insert it directly after the opening `<body>` tag on each page you want to load it:

<script>
  window.fbAsyncInit = function() {
    FB.init({
      appId            : 'your-app-id',
      autoLogAppEvents : true,
      xfbml            : true,
      version          : '`v12.0`'
    });
  };
</script>
<script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js"></script>

This code will load and initialize the SDK. You must replace the value in `your-app-id` with the ID of your own Facebook App. You can find this ID using the [App Dashboard](https://developers.facebook.com/apps).

## Next Steps

[Advanced Setup](https://developers.facebook.com/docs/javascript/advanced-setup)[Usage Examples](https://developers.facebook.com/docs/javascript/examples)
