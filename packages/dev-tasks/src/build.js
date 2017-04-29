#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const { argv } = require('yargs');

const webpackConfig = require('./webpack.config.js');

const packageName = argv.package;
const compiler = webpack(webpackConfig);

compiler.run((err, stats) => {
  if (err || stats.hasErrors()) {
    console.log(`Error at ${packageName}`);

    const info = stats.toJson();
    const space = '    ';

    info.errors.map(err => {
      console.log('');
      console.log(space + err.split('\n').slice(0, 3).join('\n' + space));
      console.log('');

      process.exit(1);
    });
  }
});
