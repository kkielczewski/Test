const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = [
  {
    test: /\.(js|jsx)$/,
    exclude: /(node_modules|dist\/)/,
    loader: 'babel-loader'
  },
  {
    test: /\.css$/,
    exclude: ['node_modules'],
    loaders: ['style-loader', 'css-loader?importLoaders=1']
  },
  {
    test: /\.scss$/,
    loader: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: 'css-loader?sourceMap&minimize!postcss-loader!sass-loader?outputStyle=expanded'
    }),
    exclude: /(node_modules)/,
    include: [
      path.resolve(__dirname, '../source/styles')
    ]
  },
  {
    test: /\.(woff|woff2|eot|ttf)$/,
    exclude: /(node_modules)/,
    loader: 'url-loader?prefix=font/&limit=5000'
  },
  {
    test: /\.(jpe?g|png|gif|pdf|ico|svg)$/,
    exclude: /(node_modules)/,
    use: {
      loader: 'file-loader',
      options: {
        name: '[path][name]-[hash:8].[ext]'
      }
    }
  }
];
