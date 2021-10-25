const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const { isDevelopment, isProduction } = require('./env');

const plugins = [
    new webpack.EnvironmentPlugin(['NODE_ENV']),
    new HtmlWebpackPlugin({
        template: 'app.html',
        filename: 'app.html',
        chunks: ['app']
    }),
    new HtmlWebpackPlugin({
        template: 'root.html',
        filename: 'root.html',
        chunks: ['root']
    })
];

if (isDevelopment) {
    plugins.push(
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin()
    );
}

if (isProduction) {
    plugins.push(
        new ExtractTextPlugin('css/[name].css', {
            allChunks: true
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    );
}

module.exports = plugins;
