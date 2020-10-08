const path = require('path')
require('@babel/polyfill');

module.exports = {
  entry: ['@babel/polyfill', './src/mod.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'mod.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        loader: 'babel-loader'
      }
    ]
  }
}