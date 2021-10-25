## [Autopolyfiller](https://github.com/azproduction/autopolyfiller) loader for [webpack](https://webpack.github.io/)

[![npm](http://img.shields.io/npm/v/autopolyfiller-loader.svg?style=flat-square)](https://www.npmjs.org/package/autopolyfiller-loader)
[![travis](http://img.shields.io/travis/deepsweet/autopolyfiller-loader.svg?style=flat-square)](https://travis-ci.org/deepsweet/autopolyfiller-loader)
[![climate](http://img.shields.io/codeclimate/github/deepsweet/autopolyfiller-loader.svg?style=flat-square)](https://codeclimate.com/github/deepsweet/autopolyfiller-loader/code)
[![deps](http://img.shields.io/david/deepsweet/autopolyfiller-loader.svg?style=flat-square)](https://david-dm.org/deepsweet/autopolyfiller-loader)
[![gratipay](http://img.shields.io/gratipay/deepsweet.svg?style=flat-square)](https://gratipay.com/deepsweet/)

> This is like [Autoprefixer](https://github.com/ai/autoprefixer), but for JavaScript polyfills. It scans your code and applies only required polyfills.

### Install

```sh
$ npm i -S autopolyfiller-loader
```

### Usage

```javascript
module: {
    postLoaders: [ {
        test: /\.js$/,
        exclude: /\/(node_modules|bower_components)\//,
        loader: 'autopolyfiller?{ browsers: [ "last 2 versions", "ie >= 9" ] }'
    } ]
}
```

[Documentation: Using loaders](https://webpack.github.io/docs/using-loaders.html).

### License
[WTFPL](http://www.wtfpl.net/wp-content/uploads/2012/12/wtfpl-strip.jpg)
