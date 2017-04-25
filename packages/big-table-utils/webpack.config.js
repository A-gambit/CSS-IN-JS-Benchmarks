const webpack = require('webpack');
const path = require('path');

const sourcePath = path.join(__dirname, './src');
const libraryName = 'index';

let outputFile = libraryName + '.js';

const config = {
  entry: __dirname + '/src/index.js',
  devtool: 'source-map',
  output: {
    path: __dirname + '/lib',
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  resolve: {
    modules: [
      path.resolve(__dirname, 'node_modules'),
      sourcePath
    ],
    extensions: ['.json', '.js']
  }
};

module.exports = config;
