const path = require('path');

/* eslint-disable global-require */
module.exports = {
    context: path.resolve(__dirname, '..', 'packages/frontend'),
    entry: require('./entry'),
    devtool: require('./devtool'),
    plugins: require('./plugins'),
    output: require('./output'),
    module: require('./module'),
    postcss: require('./postcss')
};
