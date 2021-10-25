const { isDevelopment } = require('./env');

const entry = {
    app: [
        './css/app.css',
        './js/index'
    ],
    root: [
        './css/root.css'
    ]
};

if (isDevelopment) {
    entry.app.unshift('webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true');
}

module.exports = entry;
