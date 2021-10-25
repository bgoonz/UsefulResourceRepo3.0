const path = require('path');
const merge = require('webpack-merge');

module.exports = function (config) {
  const getCommon = require('./common');

  const cwd = process.cwd();

  config.buildDev = config.buildDev || 0; // eslint-disable-line no-param-reassign

  return getCommon(config).then(function (commonConfig) {
    const buildConfig = {
      node: {
        fs: 'empty'
      },
      name: 'server',
      target: 'node',
      entry: {
        bundleStaticPage: path.join(__dirname, '../build/render_page.js'),
        paths: path.join(__dirname, '../build/export_paths.js')
      },
      output: {
        path: path.join(cwd, './.antwar/build'),
        filename: '[name].js',
        publicPath: path.join(cwd, './.antwar/build'),
        libraryTarget: 'commonjs2'
      }
    };

    return merge(commonConfig, buildConfig, config.webpack);
  });
};
