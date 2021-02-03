const path = require('path');
 
module.exports = {
  entry: path.resolve(__dirname, './src/js/Taxi.js'),
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
  output: {
    path: path.resolve(__dirname, './dist/js'),
    filename: 'Taxi.js',
  },
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
  },
  optimization: {
    minimize: false,
  },
  mode: "production"
};