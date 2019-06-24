'use strict';
const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { babelLoader, cssLoader, lessLoader, urlLoader, htmlLoader, vueLoader } = require('./config/loaders');

module.exports = function(env, argv) {
  const mode = argv.mode;
  // 开发模式走 vue-style-loader，允许走hmr模式更新
  const extractLoader = mode != 'production' ? ['vue-style-loader'] : [MiniCssExtractPlugin.loader];

  return {
    entry: {
      app: './src/index.js',
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist')
    },
  
    devtool: 'inline-source-map',
    devServer: {
      contentBase: './dist',
      hot: true,
    },
  
    plugins: [
      new CleanWebpackPlugin(),
      new VueLoaderPlugin(),
      new webpack.ProvidePlugin({
        Vue: ['vue', 'default'],
        Vuex: ['vuex', 'default']
      }),
      // ... 忽略 vue-loader 插件
      new MiniCssExtractPlugin({
        filename: 'style.css'
      }),
      new HtmlWebpackPlugin({
        title: 'Development'
      }),
    ],
  
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: [ babelLoader ]
        },
        {
          test: /\.css$/,
          exclude: /(node_modules|bower_components)/,
          use: extractLoader.concat([ cssLoader ])
        },
        {
          test: /\.less$/,
          exclude: /(node_modules|bower_components)/,
          use: extractLoader.concat([ cssLoader, lessLoader ])
        },
        {
          test: /\.vue$/,
          use: [ vueLoader ]
        },
        {
          test: /\.san$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'san-loader',
              options: {
                loaders: {
                  html: [ htmlLoader ],
                  less: [ MiniCssExtractPlugin.loader, cssLoader, lessLoader ],
                  css: [ MiniCssExtractPlugin.loader, cssLoader ],
                  js: [ babelLoader ],
                },
              }
            }
          ]
        },
        {
          test: /\.(jpe?g|png|gif||svg)(\?v=\d+\.\d+\.\d+)?$/,
          use: [ urlLoader ]
        },
      ],
    },
  };
}