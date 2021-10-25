// @ts-check
/* eslint-disable */
import webpack from "webpack";

import UglifyJsPlugin from "uglifyjs-webpack-plugin";
import path from "path";
const env = require("yargs").argv.env;

let libraryName = "PacktDataStructuresAlgorithms";

let plugins = [];
let outputFile;

if (env === "build") {
  // plugins.push(new UglifyJsPlugin({ minimize: true }));
  outputFile = `${libraryName}.min.js`;
} else {
  outputFile = `${libraryName}.js`;
}

const config = {
  entry: `${__dirname}/src/js/index.js`,
  devtool: "source-map",
  output: {
    path: `${__dirname}/examples`,
    filename: outputFile,
    library: libraryName,
    libraryTarget: "umd",
    umdNamedDefine: true,
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        loader: "babel-loader",
        exclude: /(node_modules|bower_components)/,
      },
    ],
  },
  resolve: {
    modules: [path.resolve("./node_modules"), path.resolve("./src/js")],
    extensions: [".json", ".js"],
  },
  optimization: {
    minimizer: [
      // we specify a custom UglifyJsPlugin here to get source maps in production
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
      }),
    ],
  },
  // plugins: plugins
};

export default config;
