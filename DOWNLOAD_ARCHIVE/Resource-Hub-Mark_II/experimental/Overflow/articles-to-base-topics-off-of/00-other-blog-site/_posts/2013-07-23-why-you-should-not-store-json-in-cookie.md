<!--


---
 "Why you should not store JSON in cookie"
excerpt: "Why you should not store JSON in cookie"
date: 2014-07-23 00:00:00 IST
updated: 2014-07-23 00:00:00 IST
categories: webapps, performance
tags: webapps, performance
---

> Storing JSON in cookies will increase the size of cookie unnecessarly, which effects your web apps performance.

After a long time I fired up Firebug, which lead to a realization of mistake we done by storing JSON in cookies. I think Firebug is best to check cookie more than Chrome Devtools. Unfortunately Firefox devtools cookie panel is still not ready.

Firebug shows you two types of cookie size.

- Raw Size
- Size

**Size** is the actual content size before encoding the content.

**Raw size** is the size of cookie after encoding the content, the actual size when they send to server. When we store JSON, the `{`, `:`, `"`, `}` and `,` are encoded and converted to `%7B`, `%3A`, `%22`, `%7D` and `%2C` respectively.

![Raw size](http://i653.photobucket.com/albums/uu253/revathskumar/Coderepo/2014/07/firebug-cookie_zps27ccc4b4.png)

So if you use JSON, the characters like `{}:",` etc will be a unnecessary weight for the cookie. In the above image you can see that the difference of Raw size and size is around 48 Bytes which means this cookie's ~40 Bytes are unnessary.

We can avoid this unnessary weight, by choosing plain text in the cookie and writing our own parser to extract the multiple values we stored in cookie.

For example, instead of storing

```json
{
  "city": "kochi",
  "id": 1,
  "place": "kakkanad"
}
```

we can store it as `kochi|1|kakkanad` and parse this ourselves which will reduce alot of weight.

## Why you should care about cookie size?

Size of the cookie have effect on web performance.

As per the [google best practice](https://developers.google.com/speed/docs/best-practices/request#MinimizeRequestSize)

> the average size of cookies served off any domain be less than 400 bytes.

also [Yahoo](https://developer.yahoo.com/performance/rules.html#cookie_size) recommends to reduce the cookie's size.
