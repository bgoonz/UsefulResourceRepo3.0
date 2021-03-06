# http.cookies \-\-- HTTP Cookies

::: {.module synopsis="Server-side HTTP cookie tools"} http.cookies :::

Purpose

: Defines classes for parsing and creating HTTP cookie headers.

The `http.cookies` module implements a parser for cookies that is mostly `2109`{.interpreted-text role="rfc"} compliant. The implementation is a little less strict than the standard because MSIE 3.0x does not support the entire standard.

## Creating and Setting a Cookie

Cookies are used as state management for browser-based application, and as such are usually set by the server to be stored and returned by the client. The most trivial example of creating a cookie sets a single name-value pair.

::: {.literalinclude caption="" start-after="#end_pymotw_header"} http_cookies_setheaders.py :::

The output is a valid `Set-Cookie` header ready to be passed to the client as part of the HTTP response.

```{.sourceCode .none}
$ python3 http_cookies_setheaders.py

Set-Cookie: mycookie=cookie_value
```

## Morsels

It is also possible to control the other aspects of a cookie, such as the expiration, path, and domain. In fact, all of the RFC attributes for cookies can be managed through the `Morsel` object representing the cookie value.

::: {.literalinclude caption="" start-after="#end_pymotw_header"} http_cookies_Morsel.py :::

This example includes two different methods for setting stored cookies that expire. One sets the `max-age` to a number of seconds, the other sets `expires` to a date and time when the cookie should be discarded.

```{.sourceCode .none}
$ python3 http_cookies_Morsel.py

Set-Cookie: encoded_value_cookie="\"cookie\054value\073\"";
Comment="Has escaped punctuation"
Set-Cookie: expires_at_time=cookie_value; expires=Sat, 14 Feb
2009 19:30:14
Set-Cookie: restricted_cookie=cookie_value; Domain=PyMOTW;
Path=/sub/path; Secure
Set-Cookie: with_max_age="expires in 5 minutes"; Max-Age=300

key = encoded_value_cookie
  value = "cookie,value;"
  coded_value = "\"cookie\054value\073\""
  comment = Has escaped punctuation

key = restricted_cookie
  value = cookie_value
  coded_value = cookie_value
  path = /sub/path
  domain = PyMOTW
  secure = True

key = with_max_age
  value = expires in 5 minutes
  coded_value = "expires in 5 minutes"
  max-age = 300

key = expires_at_time
  value = cookie_value
  coded_value = cookie_value
  expires = Sat, 14 Feb 2009 19:30:14
```

Both the `Cookie` and `Morsel` objects act like dictionaries. A `Morsel` responds to a fixed set of keys:

- expires
- path
- comment
- domain
- max-age
- secure
- version

The keys for a `Cookie` instance are the names of the individual cookies being stored. That information is also available from the key attribute of the `Morsel`.

## Encoded Values

The cookie header needs values to be encoded so they can be parsed properly.

::: {.literalinclude caption="" start-after="#end_pymotw_header"} http_cookies_coded_value.py :::

`Morsel.value`{.interpreted-text role="attr"} is always the decoded value of the cookie, while `Morsel.coded_value`{.interpreted-text role="attr"} is always the representation to be used for transmitting the value to the client. Both values are always strings. Values saved to a cookie that are not strings are converted automatically.

```{.sourceCode .none}
$ python3 http_cookies_coded_value.py

integer
  Set-Cookie: integer=5
  value='5'
  coded_value='5'

with_quotes
  Set-Cookie: with_quotes="He said\054 \"Hello\054 World!\""
  value='He said, "Hello, World!"'
  coded_value='"He said\\054 \\"Hello\\054 World!\\""'
```

## Receiving and Parsing Cookie Headers

Once the `Set-Cookie` headers are received by the client, it will return those cookies to the server on subsequent requests using a `Cookie` header. An incoming `Cookie` header string may contain several cookie values, separated by semicolons (`;`).

```{.sourceCode .none}
Cookie: integer=5; with_quotes="He said, \"Hello, World!\""
```

Depending on the web server and framework, cookies are either available directly from the headers or the `HTTP_COOKIE` environment variable.

::: {.literalinclude caption="" start-after="#end_pymotw_header"} http_cookies_parse.py :::

To decode them, pass the string without the header prefix to `SimpleCookie` when instantiating it, or use the `load()` method.

```{.sourceCode .none}
$ python3 http_cookies_parse.py

From constructor:
Set-Cookie: integer=5
Set-Cookie: with_quotes="He said, \"Hello, World!\""

From load():
Set-Cookie: integer=5
Set-Cookie: with_quotes="He said, \"Hello, World!\""
```

## Alternative Output Formats

Besides using the `Set-Cookie` header, servers may deliver JavaScript that adds cookies to a client. `SimpleCookie` and `Morsel` provide JavaScript output via the `js_output()` method.

::: {.literalinclude caption="" start-after="#end_pymotw_header"} http_cookies_js_output.py :::

The result is a complete `script` tag with statements to set the cookies.

```{.sourceCode .none}
$ python3 http_cookies_js_output.py

<script type="text/javascript">
<!-- begin hiding
document.cookie = "another_cookie=\"second value\"";
// end hiding -->
</script>

<script type="text/javascript">
<!-- begin hiding
document.cookie = "mycookie=cookie_value";
// end hiding -->
</script>
```

::: {.seealso}

- `http.cookies`{.interpreted-text role="pydoc"}
- `http.cookiejar`{.interpreted-text role="mod"} \-- The `cookielib` module, for working with cookies on the client-side.
- `2109`{.interpreted-text role="rfc"} \-- HTTP State Management Mechanism :::
