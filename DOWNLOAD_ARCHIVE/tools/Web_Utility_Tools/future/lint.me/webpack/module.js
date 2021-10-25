const ExtractTextPlugin = require('extract-text-webpack-plugin');
const { isDevelopment } = require('./env');

module.exports = {
    loaders: [{
        test: /\.js$/,
        loader: 'babel'
    }, {
        test: /\.css$/,
        loader: isDevelopment ? 'style!css!postcss' : ExtractTextPlugin.extract('style', 'css!postcss')
    }, {
        test: /\.html$/,
        loader: 'text'
    }]
};
