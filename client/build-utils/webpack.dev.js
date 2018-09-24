const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const rules = require('./webpack.rules');

const HOST = process.env.HOST || '127.0.0.1';
const PORT = process.env.PORT || '8080';

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
    filename: 'js/[name].bundle.js',
    chunkFilename: 'js/[name].chunk.js'
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
  devServer: {
    contentBase: './dist',
    noInfo: true,
    hot: true,
    inline: true,
    historyApiFallback: true,
    port: PORT,
    host: HOST
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
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
        preserveLineBreaks: true
      }
    })
  ]
};
