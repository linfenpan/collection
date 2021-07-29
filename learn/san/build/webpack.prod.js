'use strict';
const merge = require('webpack-merge');
const common = require('./webpack.common');
const Webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

// @notice 如果服务端能控制 source-map 的访问权限，那完全可以扔 sourceMap 到线上的
module.exports = merge(common, {
  mode: 'production',
  // devtool: 'source-map',
  plugins: [
    new Webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('production') }),
    new UglifyJSPlugin({ /* sourceMap: true */ })
  ]
});
