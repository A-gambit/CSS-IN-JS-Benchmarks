#!/usr/bin/env node
const { argv } = require('yargs');
const webpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');

const webpackConfig = require('./webpack.config.js');

const packageName = argv.package;

process.NODE_ENV = 'production';

const compiler = webpack(webpackConfig);

var server = new webpackDevServer(compiler, {
  quiet: true,
  stats: 'errors-only',
});

server.listen(3000);
