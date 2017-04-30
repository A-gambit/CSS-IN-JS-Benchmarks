#!/usr/bin/env node
const webpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');

const webpackConfig = require('./webpack.config.js');
const compiler = webpack(webpackConfig);

const server = new webpackDevServer(compiler, {
  quiet: true,
  stats: 'errors-only',
});

server.listen(3000);
