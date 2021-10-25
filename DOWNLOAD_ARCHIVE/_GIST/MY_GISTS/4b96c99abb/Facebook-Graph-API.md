# Overview

The Graph API is the primary way to get data into and out of the Facebook platform. It's an HTTP-based API that apps can use to programmatically query data, post new stories, manage ads, upload photos, and perform a wide variety of other tasks.

The Graph API is named after the idea of a "social graph" --- a representation of the information on Facebook. It's composed of nodes, edges, and fields. Typically you use nodes to get data about a specific object, use edges to get collections of objects on a single object, and use fields to get data about a single object or each object in a collection. Throughout our documentation, we may refer to both a node and edge as an "endpoint". For example, "send a `GET` request to the User endpoint".

## HTTP

All data transfers conform to HTTP/1.1, and all endpoints require HTTPS. Because the Graph API is HTTP-based, it works with any language that has an HTTP library, such as cURL and urllib. This means you can use the Graph API directly in your browser. For example, requesting this URL in your browser...

<https://graph.facebook.com/facebook/picture?redirect=false>

... is equivalent to performing this cURL request:

curl -i -X GET "https://graph.facebook.com/facebook/picture?redirect=false"

We have also enabled the `includeSubdomains` HSTS directive on `facebook.com`, but this should not adversely affect your Graph API calls.

[](https://developers.facebook.com/docs/graph-api/overview#)

## Host URL

Almost all requests are passed to the `graph.facebook.com` host URL. The single exception is video uploads, which use `graph-video.facebook.com`.

[](https://developers.facebook.com/docs/graph-api/overview#)

## Access Tokens

Access tokens allow your app to access the Graph API. Almost all Graph API endpoints require an access token of some kind, so each time you access an endpoint, your request may require one. They typically perform two functions:

- They allow your app to access a User's information without requiring the User's password. For example, your app needs a User's email to perform a function. If the User agrees to allow your app to retrieve their email address from Facebook, the User will not need to enter their Facebook password for your app to get their email address.
- They allow us to identify your app, the User who is using your app, and the type of data the User has permitted your app to access.

Visit our [access token documentation](https://developers.facebook.com/docs/facebook-login/access-tokens) to learn more.

[](https://developers.facebook.com/docs/graph-api/overview#)

## Nodes

A node is an individual object with a unique ID. For example, there are many User node objects, each with a unique ID representing a person on Facebook. Pages, Groups, Posts, Photos, and Comments are just some of the nodes of the Facebook Social Graph.

The following cURL example represents a call to the User node.

curl -i -X GET \ "https://graph.facebook.com/USER-ID?access_token=ACCESS-TOKEN"

This request would return the following data by default, formatted using JSON:

{ "name": "Your Name", "id": "YOUR-USER-ID" }

### Node Metadata

You can get a list of all fields, including the field name, description, and data type, of a node object, such as a User, Page, or Photo. Send a `GET` request to an object ID and include the `metadata=1` parameter:

curl -i -X GET \ "https://graph.facebook.com/USER-ID?
metadata=1&access_token=ACCESS-TOKEN"

The resulting JSON response will include the `metadata` property that lists all the supported fields for the given node:

{ "name": "Jane Smith", "metadata": { "fields": [ { "name": "id", "description": "The app user's App-Scoped User ID. This ID is unique to the app and cannot be used by other apps.", "type": "numeric string" }, { "name": "age_range", "description": "The age segment for this person expressed as a minimum and maximum age. For example, more than 18, less than 21.", "type": "agerange" }, { "name": "birthday", "description": "The person's birthday. This is a fixed format string, like `MM/DD/YYYY`. However, people can control who can see the year they were born separately from the month and day so this string can be only the year (YYYY) or the month + day (MM/DD)", "type": "string" }, ...

[](https://developers.facebook.com/docs/graph-api/overview#)

## /me

The `/me` node is a special endpoint that translates to the object ID of the person or Page whose access token is currently being used to make the API calls. If you had a User access token, you could retrieve a User's name and ID by using:

curl -i -X GET \ "https://graph.facebook.com/me?access_token=ACCESS-TOKEN"

[](https://developers.facebook.com/docs/graph-api/overview#)

## Edges

An edge is a connection between two nodes. For example, a User node can have photos connected to it, and a Photo node can have comments connected to it. The following cURL example will return a list of photos a person has published to Facebook.

curl -i -X GET \ "https://graph.facebook.com/USER-ID/photos?access_token=ACCESS-TOKEN"

Each ID returned represents a Photo node and when it was uploaded to Facebook.

{ "data": [ { "created_time": "2017-06-06T18:04:10+0000", "id": "1353272134728652" }, { "created_time": "2017-06-06T18:01:13+0000", "id": "1353269908062208" } ], }

[](https://developers.facebook.com/docs/graph-api/overview#)

## Fields

Fields are node properties. When you query a node, or an edge, it returns a set of fields by default, as the examples above show. However, you can specify which fields you want returned by using the `fields` parameter and listing each field. This overrides the defaults and returns only the fields you specify, and the ID of the object, which is always returned.

The following cURL request includes the `fields` parameter and the User's name, email, and profile picture.

curl -i -X GET \ "https://graph.facebook.com/USER-ID?fields=id,name,email,picture&access_token=ACCESS-TOKEN"

#### Data Returned

{ "id": "USER-ID", "name": "EXAMPLE NAME", "email": "EXAMPLE@EMAIL.COM", "picture": { "data": { "height": 50, "is_silhouette": false, "url": "URL-FOR-USER-PROFILE-PICTURE", "width": 50 } } }

### Complex Parameters

Most parameter types are straightforward primitives such as `bool`, `string` and `int`, but there are also `list` and `object` types that can be specified in the request.

The `list` type is specified in JSON syntax, for example: `["firstitem", "seconditem", "thirditem"]`

The `object` type is also specified in JSON syntax, for example: `{"firstkey": "firstvalue", "secondKey": 123}`

[](https://developers.facebook.com/docs/graph-api/overview#)

## Publishing, Updating, and Deleting

Visit our [Facebook Sharing guide](https://developers.facebook.com/docs/sharing) to learn how to publish to a User's Facebook or our [Pages API documentation](https://developers.facebook.com/docs/pages) to publish to a Page's Facebook feed.

Some nodes allow you to update fields with `POST` operations. For example, you could update your `email` field like this:

curl -i -X POST \ "https://graph.facebook.com/USER-ID?email=YOURNEW@EMAILADDRESS.COM&access_token=ACCESS-TOKEN"

### Read-After-Write

For create and update endpoints, the Graph API can immediately read a successfully published or updated object and return any fields supported by the corresponding read endpoint.

By default, an ID of the object created or updated will be returned. To include more information in the response, include the `fields` parameter in your request and list the fields you want returned. For example, to publish the message "Hello" to a Page's feed, you could make the following request:

curl -i - X POST "https://graph.facebook.com/PAGE-ID/feed?message=Hello&
fields=created_time,from,id,message&access_token=ACCESS-TOKEN"

_The above code example is formatted for readability._

This would return the specified fields as a JSON-formatted response, like this:

{ "created_time": "2017-04-06T22:04:21+0000", "from": { "name": "My Facebook Page", "id": "PAGE-ID" }, "id": "POST_ID", "message": "Hello", }

Refer to each endpoint's [reference documentation](https://developers.facebook.com/docs/graph-api/reference) to see if it supports read-after-write and what fields are available.

#### Errors

If the read fails for any reason (for example, requesting a non-existent field), the Graph API will respond with a standard error response. Visit our [Handling Errors guide](https://developers.facebook.com/docs/graph-api/guides/error-handling) for more information.

You can usually delete a node, such as a Post or Photo node, by performing a DELETE operation on the object ID:

curl -i -X DELETE \ "https://graph.facebook.com/PHOTO-ID?access_token=ACCESSS-TOKEN"

Usually you can only delete nodes that you created, but check each node's reference guide to see requirements for delete operations.

[](https://developers.facebook.com/docs/graph-api/overview#)

## Versions

The Graph API has multiple versions with quarterly releases. You can specify the version in your calls by adding "v" and the version number to the start of the request path. For example, here's a call to version 4.0:

curl -i -X GET \ "https://graph.facebook.com/v4.0/USER-ID/photos
?access_token=ACCESS-TOKEN"

If you do not include a version number we will default to the oldest available version, so it's recommended to include the version number in your requests.

You can read more about versions in our [Versioning guide](https://developers.facebook.com/docs/graph-api/guides/versioning) and learn about all available versions in the [Graph API Changelog](https://developers.facebook.com/docs/graph-api/changelog).

[](https://developers.facebook.com/docs/graph-api/overview#)

## Facebook APIs, SDKs, and Platforms

Connect interfaces and develop across platforms using Facebook's various [APIs, SDKs, and platforms](https://developers.facebook.com/docs#apis-and-sdks).

# Get Started

This guide explains how to get started with receiving data from the Facebook Social Graph.

## Before You Start

You will need:

- [Register as a Facebook Developer](https://developers.facebook.com/docs/development/register)

- A [Facebook App](https://developers.facebook.com/docs/development/create-an-app) -- This app will be for testing so there is no need to involve your app code when creating this Facebook App.

- The [Graph Explorer tool](https://developers.facebook.com/tools/explorer) open in a separate browser window

- A brief understanding of the structure of the Facebook Social Graph from our [Graph API Overview](https://developers.facebook.com/docs/graph-api/overview#nodes) guide

[](https://developers.facebook.com/docs/graph-api/get-started#)

## Your First Request

### Step 1: Open the Graph Explorer tool

[Open the Graph Explorer in a new browser window.](https://developers.facebook.com/tools/explorer) This allows you to execute the examples as you read this tutorial.

The explorer loads with a default query with the `GET` method, the lastest version of the Graph API, the `/me` node and the `id` and `name` fields in the [Query String Field](https://developers.facebook.com/docs/graph-api/guides/explorer#query-string-field), and your Facebook App.

![](https://scontent.fewr1-6.fna.fbcdn.net/v/t39.2365-6/232068365_563091814813799_6070357364579520404_n.png?_nc_cat=100&ccb=1-5&_nc_sid=ad8a9d&_nc_ohc=LeGOQH-Fi5EAX_PSnoM&_nc_ht=scontent.fewr1-6.fna&oh=90887cac90b5d438e9099cecf113976c&oe=616AB224)

### Step 2. Generate an Access Token

Click the Generate Access Token button. A Log in With Facebook window will pop up. This popup is your app asking for your permission to get your name and profile picture from Facebook.

|

This flow is our [Facebook Login](https://developers.facebook.com/docs/facebook-login) product that allows a person to log into an app using their Facebook credentials. Facebook Login allows an app to ask a person to access the person's Facebook data, and for the person to accept or decline access. Your name and profile picture are public, to allow people to find you on Facebook, so no additional requirements are needed to run this request.

Click Continue as...

A User Access Token is created. This token contains information such as the app making the request, the person using the app to make a request, if the access token is still valid (it expires in about an hour), the expiration time, and the scope of data the app can request. In this request the scope is `public_profile` which includes your name and profile picture.

| ![](https://scontent.fewr1-5.fna.fbcdn.net/v/t39.2365-6/231956490_308313234407833_1605768375436620205_n.png?_nc_cat=106&ccb=1-5&_nc_sid=ad8a9d&_nc_ohc=wbJl3ifp11sAX8pNI_U&_nc_ht=scontent.fewr1-5.fna&oh=de2beb6022a4f4810c2258fefa3ac67f&oe=616BB02E) |

| ![](https://scontent.fewr1-6.fna.fbcdn.net/v/t39.2365-6/232991718_592378688435455_3147910228443606263_n.png?_nc_cat=109&ccb=1-5&_nc_sid=ad8a9d&_nc_ohc=9AGMZtvC2yEAX8fnsst&_nc_ht=scontent.fewr1-6.fna&oh=85d6aaa3458dcfe4034ef2c56dec7110&oe=616BB4B4) |

Click the information circle icon next to the acces token to view the token's information.

|

### Step 3. Submit the Request

Click the Submit button in the upper right corner.

#### What You Should See

In the [Response Window](https://developers.facebook.com/docs/graph-api/guides/explorer#response-window), you will see a JSON response with your Facebook User ID and your name.

![](https://scontent.fewr1-5.fna.fbcdn.net/v/t39.2365-6/232902382_904467853476103_7217229934737479641_n.png?_nc_cat=105&ccb=1-5&_nc_sid=ad8a9d&_nc_ohc=q7qe0M2KnVoAX8-oJ9i&_nc_ht=scontent.fewr1-5.fna&oh=ee1d55704082e24d925d4c7dc9922cac&oe=616A5663)

If you remove `?fields=id,name` from the query string field and click Submit, you will see the same result since `name` and `id` are the User node fields returned by default.

[](https://developers.facebook.com/docs/graph-api/get-started#)

## Your Second Request

### Step 1. Let's Add a Field

Let's make the First Request a little more complex by adding another field, `email`. There are two ways to add fields:

- Click the search dropdown menu in the [Node Field Viewer](https://developers.facebook.com/docs/graph-api/guides/explorer#node-field-viewer) to the left of the response window
- Start typing in the query string field.

Let's add the `email` field and click Submit.

#### What You Should See

While the call did not fail, only the `name` and `id` fields were returned along with a debug message. Click the (Show) link to debug the request.

![](https://scontent.fewr1-5.fna.fbcdn.net/v/t39.2365-6/233410295_959323958245691_7180707304587023135_n.png?_nc_cat=104&ccb=1-5&_nc_sid=ad8a9d&_nc_ohc=covZokCvVZ4AX85cKe2&_nc_ht=scontent.fewr1-5.fna&oh=6c8d32e8a2c1176359c339f2ef374e5e&oe=616AC4D6)

Almost all nodes and fields need a specific permission to access them. The debug message is telling you that you need to give your app permission to access the email address that you have associated with your Facebook account.

### Step 2. Add a Permission

|

In the right side panel, under Permissions, click the Add a Permission dropdown menu. Click User Data Permissions and select email.

#### Generate A New User Access Token

Because you are changing the scope of the access token, you need to create a new one. Click Generate Access Token. Just like your first request, you must give your app permission to access your email in the Facebook Login dialog.

Once the new token has been created, click Submit. Now all fields in your request will be returned.

| ![](https://scontent.fewr1-5.fna.fbcdn.net/v/t39.2365-6/234580746_367949518031866_340317674627083357_n.png?_nc_cat=104&ccb=1-5&_nc_sid=ad8a9d&_nc_ohc=WtFXqzgRhToAX_uymtl&_nc_ht=scontent.fewr1-5.fna&oh=b16bb437c1fb0d22fa4280db4bcbe00d&oe=616B1D9E) |

Try getting your Facebook posts.

[See the steps.](https://developers.facebook.com/docs/graph-api/get-started#)

#### Links in the Response

Notice that `id` values returned in the response window are links. These links can represent nodes, such as User, Page, or Post. If you click on a link, the ID will replace the contents of the query string field. Now you can run requests on that node. Because this node is connected to the parent node, a Post of a User, you may not need to add permissions. You can click on a Post ID now since we will be using it in the next example.

Notice: Some IDs are a combination of the parent ID and a new ID string. For example, a User's Post will have a Post ID that looks something like this: `1028223264288_102224043055529` where `1028223264288` is the User ID.

[](https://developers.facebook.com/docs/graph-api/get-started#)

## Let's Look at an Edge

The User node does not have many edges that can return data. Access to User objects can only be given by the User who owns the object. In most cases, a User owns an object if they created it.

For example, if you publish a post you can see information about the post such as when it was created, text, photos, and links shared in the post, and the number of reactions the post received. If you comment on your post, you will be able to get that comment, but if another person publishes a comment on your post, you will not be able to see the comment or who published it.

Try getting the number of reactions for one of your posts. You will want to take a look at the

[Post Reactions Edge reference.](https://developers.facebook.com/docs/graph-api/reference/post/reactions/#fields)

[See the steps.](https://developers.facebook.com/docs/graph-api/get-started#)

[](https://developers.facebook.com/docs/graph-api/get-started#)

## Get the Code for your Request

The explorer tool lets you test requests and once you have a successful response, you can get the code to insert into your app code. At the bottom of the response window, click Get Code. The explorer offers Android, iOS, JavaScript, PHP, and cURL code. The code is pre-selected so you can just copy and paste.

![](https://scontent.fewr1-6.fna.fbcdn.net/v/t39.2365-6/231948896_1065545040645743_5920314088559660186_n.png?_nc_cat=101&ccb=1-5&_nc_sid=ad8a9d&_nc_ohc=omvpM-CP0D0AX9sffm6&_nc_ht=scontent.fewr1-6.fna&oh=0a2b3e4d7a8647b5a0fa3025fc1a7ff5&oe=616B5B6C)

We recommend that you implement the Facebook SDK for your app. This SDK will include Facebook Login which allows your app to ask for permissions and get access tokens.

[](https://developers.facebook.com/docs/graph-api/get-started#)

## Learn More

You can use the Graph Explorer to test any request for Users, Pages, Groups, and more. Visit the [reference](https://developers.facebook.com/docs/graph-api/reference) for each node or edge to determine the permission and access token type required.

|

- [Access Token](https://developers.facebook.com/docs/facebook-login/access-tokens)
- [Facebook Login](https://developers.facebook.com/docs/facebook-login)
- [Facebook SDKs](https://developers.facebook.com/docs#apis-and-sdks)

|

- [Graph API References](https://developers.facebook.com/docs/graph-api/reference)
- [Graph Explorer Guide](https://developers.facebook.com/docs/graph-api/guides/explorer)
- [Permissions Reference](https://developers.facebook.com/docs/permissions/reference)

|
