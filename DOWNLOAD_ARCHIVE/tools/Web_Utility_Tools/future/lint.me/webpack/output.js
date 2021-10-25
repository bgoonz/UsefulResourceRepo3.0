const path = require('path');
const { isDevelopment } = require('./env');

let filename;
let chunkFilename;

if (isDevelopment) {
    filename = 'js/[name].js';
    chunkFilename = 'js/[id].[name].chunk.js';
} else {
    filename = 'js/[name]-[hash].js';
    chunkFilename = 'js/[id]-[chunkhash].[name].chunk.js';
}

module.exports = {
    filename,
    chunkFilename,
    path: path.resolve(__dirname, '..', 'packages/backend/public'),
    library: 'app',
    libraryTarget: 'var'
};
