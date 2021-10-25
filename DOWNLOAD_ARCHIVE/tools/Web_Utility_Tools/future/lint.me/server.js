const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const app = require('./packages/backend');
const config = require('./webpack.config');

const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
    headers: { 'X-Served-By': 'Webpack' },
    filename: 'js/app.js',
    publicPath: '/',
    stats: {
        colors: true
    },
    noInfo: true
}));

app.use(webpackHotMiddleware(compiler));
