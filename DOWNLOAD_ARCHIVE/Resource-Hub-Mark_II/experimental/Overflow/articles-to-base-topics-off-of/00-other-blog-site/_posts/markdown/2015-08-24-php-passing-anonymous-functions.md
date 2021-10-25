<!--


---
 "PHP : Passing Anonymous functions (Closures)"
excerpt: "PHP : Passing Anonymous functions (Closures)"
date: 2015-08-24 00:00:00 IST
updated: 2015-08-24 00:00:00 IST
categories: php
tags: php, closure
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

Recently when I was writing a PHP API wrapper for a external service, I thought of writing it as independent module which can be plugged into any PHP application. Everything went nice but when I need to do some logging I was forced to depended on application.

So I thought of plug in a logger. Then I came to know about [PHP Anonymous functions (Closures)](http://www.php.net/manual/en/functions.anonymous.php) which can be used to pass a function as a callback to another function like in JavaScript.

So I modified my Api wrapper like

```php
<?php
Class Api {
    private static $log;

    public static function setLogger($func) {
        self::$log = &$func;
    }

    public static function errorLog($st) {
        $func = &self::$log;
        $func($st);
    }

    public function doSth() {
        self::errorLog('In doSth');
    }
}

?>
```

Now when we use it, I can set my logger to application logger without any issues and still my wrapper is totally independent of my application.

```php
<?php
Class Logger {
    public static function log($statement) {
        printf("%s \r\n", $statement);
    }
}

Api::setLogger(function($statement){
    Logger::log($statement);
});

$api = new Api;
$api->doSth();

?>
```

So now in my Api wrapper, when I call `self::errorLog` the error will be logged into the application log itself.

If you have a better suggestion, please drop a comment.
Thank You.
