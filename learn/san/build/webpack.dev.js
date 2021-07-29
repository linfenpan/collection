'use strict';
const Path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common');
const Webpack = require('webpack');

// 此插件，会在 output 目录下，生成一个 index.html 文件
// 所有 entry 指定的入口文件，都会被扔到这个新建的 index.html 文件内
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  output: { publicPath: './' },
  devtool: 'inline-source-map',
  plugins: [
    new Webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('development') }),
    new HtmlWebpackPlugin({ template: Path.resolve(__dirname, './template/index.ejs') }),
  ]
});
