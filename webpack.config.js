const path = require('path');
const webpack = require("webpack");

const defaults = {
  entry: path.resolve(__dirname, './src/main/js/Taxi.js'),
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js']
  },
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
  },
  optimization: {
    minimize: false,
  },
  mode: "production"
};

const webConfig = {
  ...defaults,
  target: 'web',
  output: {
    path: path.resolve(__dirname, './dist/web/js'),
    filename: 'Taxi.js',
  },
};

const nodeConfig = {
  ...defaults,
  target: 'node',
  output: {
    path: path.resolve(__dirname, './dist/node/js'),
    filename: 'Taxi.js',
  },
};

module.exports = [webConfig, nodeConfig]; 