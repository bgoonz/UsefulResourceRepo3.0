module.exports = webpack => [
    require('postcss-import')({
        addDependencyTo: webpack
    }),
    require('postcss-nesting')(),
    require('postcss-cssnext')(),
    require('postcss-calc')()
];
