'use strict';
// http://www.itboth.com/d/u6vYZf/webpack
const Path = require('path');
const Webpack = require('webpack');

// 此插件，会在 output 目录下，生成一个 index.html 文件
// 所有 entry 指定的入口文件，都会被扔到这个新建的 index.html 文件内
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 清空插件，指定编译后，清空那些文件
const CleanWebpackPlugin = require('clean-webpack-plugin');

const ExtractTextPlugin = require("extract-text-webpack-plugin");

// module.exports = env => {
//   // --env.xxx 其中的 xxx 值随便定义的，如果有等号，就是等于固定的值，没有等号，就是 true 值
//   // --env.NODE_ENV=local
//   console.log('Node_ENV:', env.NODE_ENV); // local
//   // --env.production
//   console.log('Production:', env.production); // true
module.exports = {
  entry: {
    main: './src/main.js'
  },

  output: {
    path: Path.resolve(__dirname, './dist'),
    // 入口文件
    filename: '[name].js',
    // 非入口文件
    chunkFilename: '[name].js',
  },

  resolve: {
    extensions: ['.js', '.san'],
    alias: {
      '@': Path.resolve(__dirname, './src')
    }
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.less/,
        use: [ 'style-loader', 'css-loader', 'less-loader' ]
      },
      {
        test: /\.san$/,
        use: [
          {
            loader: 'san-loader',
            options: {
              loaders: {
                css: ['style-loader', 'css-loader'],
                less: ['style-loader', 'css-loader', 'less-loader']
              }
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 1024 * 10,
            name: '[name].[ext]'
          }
        }],
      }
    ]
  },

  plugins: [
    // 每次都清空 dist 目录
    new CleanWebpackPlugin(['dist']),
    // 额外的样式，以 entry 自己的名字命名
    new ExtractTextPlugin({ filename: '[name].css', allChunks: true }),
    // 生成静态的 html 文件
    new HtmlWebpackPlugin({ template: Path.resolve('./template/index.ejs') }),
  ],

  optimization: {
    // 公用板块，都扔到 common.js 内
    splitChunks: {
      chunks: 'initial',
      minSize: 0,
      minChunks: 1,
      name: 'common'
    }
  },

  devtool: 'source-map',

  watchOptions: {
    ignored: /node_modules/
  },
};
