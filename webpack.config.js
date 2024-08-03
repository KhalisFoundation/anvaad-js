const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'anvaad-js',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        options: {
          presets: ['@babel/preset-env'],
        }
      },
    ],
  },
};
