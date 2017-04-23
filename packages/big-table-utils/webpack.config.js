const webpack = require('webpack');
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
const path = require('path');
const env  = require('yargs').argv.env; // use --env with webpack 2


const sourcePath = path.join(__dirname, './src');
const libraryName = 'index';

let plugins = [],
 outputFile = libraryName + '.js';

plugins.push(new UglifyJsPlugin({ minimize: true }));

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
  },
  plugins: plugins
};

module.exports = config;
