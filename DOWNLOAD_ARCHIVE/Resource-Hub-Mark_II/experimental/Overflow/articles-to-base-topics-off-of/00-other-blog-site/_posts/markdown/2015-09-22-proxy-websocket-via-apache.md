<!--


---
 "Proxy websocket connection via apache"
excerpt: "Proxy websocket connection via apache"
date: 2015-09-22 00:00:00 IST
updated: 2015-09-22 00:00:00 IST
categories: apache, websockets, proxy
tags: apache, websockets
---

-->
<!DOCTYPE html>
<html>

<head>
  <title>basic-git-workflow</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">


  <link rel="stylesheet" href="./css/bootstrap.css">
  <link rel="stylesheet" href="./css/bootstrap.grid.css">
  <link rel="stylesheet" href="./css/bootstrap.min.css">
  <link rel="stylesheet" href="./css/bootstrap-reboot.min.css">
  <link rel="stylesheet" href="./css/bootstrap.css.map">
  <link rel="stylesheet" href="./css/blog-home.css">
  <link rel="stylesheet" href="./css/prism.css">
  <script async defer src="./css/prism.js"></script>
</head>

<body>

When I connect the websocket from my PHP application, I always wanted to use the same URL of webapp for the websocket connection. I was not happy with seperate url with a port to connect with websockets.

Recently I figured out how to proxy my websocket connection with apache. In order to proxy it, I need to enable `mod_proxy_wstunnel` module in apache.

```sh
sudo a2enmod mod_proxy_wstunnel
```

Next is to specify the endpoint which the websocket will connect, so we can proxy it to our websocket server. This needs to be specified in virtual host using `ProxyPass` directive.

```
ProxyRequests Off
ProxyPass "/ws/"  "ws://localhost:9030/"
ProxyPass "/wss/"  "wss://localhost:9030/"
```

This configuration in my virtual host will proxy my websocket connection to websocket server through apache.

Now I can connect my websocket to the same URL as my webapp.

```js
var connection = new WebSocket("ws://localhost/ws");
```

Now I don't need to specify the port which websocket is running, instead I specify the endpoint.
