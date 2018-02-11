const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackShellPlugin = require('webpack-shell-plugin');

module.exports = {
  devtool: 'source-map',
  entry: {
    'bundle': [
      'babel-polyfill',
      'react-hot-loader/patch',
      './src/index'
    ]
  },
  devServer: {
    historyApiFallback: true,
    port: 3000,
    hot: true,
    watchContentBase: true,
    proxy: {
      "/graphql": "http://localhost:8080",
    }
  },
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new WebpackShellPlugin({
      onBuildEnd: ['yarn run compile-relay --watch'],
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: 'public/index.html',
    }),
    new webpack.DefinePlugin({
      ENV: JSON.stringify('dev'),
    }),
  ]
}
