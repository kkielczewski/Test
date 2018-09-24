const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const rules = require('./webpack.rules');

module.exports = {
  entry: {
    app:
    [
      'babel-polyfill',
      'react-hot-loader/patch',
      'whatwg-fetch',
      './source/index.jsx'
    ]
  },
  output: {
    publicPath: '/',
    path: path.join(__dirname, '../dist'),
    filename: 'js/[name].bundle.[hash].js',
    chunkFilename: 'js/[name].[hash].[chunkhash].chunk.js',
    crossOriginLoading: 'anonymous'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      path.resolve('./source'),
      './node_modules'
    ]
  },
  module: {
    rules
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new ExtractTextPlugin({
      disable: process.env.NODE_ENV === 'development',
      filename: 'css/[name].[hash].css',
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      template: './source/index.html',
      favicon: './source/assets/images/favicon.ico',
      minify: {
        collapseWhitespace: true,
        preserveLineBreaks: false
      }
    })
  ]
};
