var path = require('path');
var _root = path.resolve(__dirname, '..');

function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [_root].concat(args));
}

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

var plugins = [
  new webpack.optimize.OccurenceOrderPlugin(true),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor'
  }),
  new HtmlWebpackPlugin({
    template: 'src/index.html'
  }),
  new ExtractTextPlugin("[name].css")
]
var minimize = process.argv.indexOf('--minimize') !== -1;
if (minimize) {
  plugins.push(new webpack.optimize.UglifyJsPlugin());
}

module.exports = {
  entry: {
    vendor: './src/vendors.js',
    main: './src/client.js'
  },
  devtool: 'source-map',
  output: {
    path: 'dist/',
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].map',
    chunkFilename: '[id].chunk.js'
  },
  resolve: {
    extensions: ['', '.js'],
    root: root('src'),
    modulesDirectories: ['node_modules']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      },
      { test: /\.png$/, loader: "url-loader?limit=100000" },
      { test: /\.jpg$/, loader: "file-loader" }
    ]
  },
  plugins: plugins,
  node: {
    global: 'window',
    crypto: 'empty',
    module: false,
    clearImmediate: false,
    setImmediate: false
  }
}
