'use strict';

const Path = require('path');
const Webpack = require('webpack');

const projectRoot = Path.resolve(__dirname, '../');

// 清空插件，指定编译后，清空那些文件
const CleanWebpackPlugin = require('clean-webpack-plugin');
// 额外文本插件
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    main: Path.resolve(projectRoot, './src/main.js')
  },

  output: {
    path: Path.resolve(projectRoot, './dist'),
    // 入口输出的文件名
    filename: '[name].js',
    // 系统自动分串的名字
    chunkFilename: 'chunk/[name].js',
    publicPath: '/'
  },

  resolve: {
    extensions: ['.js', '.san'],
    alias: {
      '@': Path.resolve(__dirname, '../src')
    }
  },

  module: {
    // 对以下板块，不进行任何转换处理
    // 类似 jquery/vue 等，就不该进行再次编译
    noParse: function(content) {
      // content 是绝对路径
      return [
        Path.resolve(projectRoot, './src/global.js')
      ].indexOf(content) >= 0;
    },
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              // 优化 babel 的打包策略，并且不用在引用 babel-polyfills
              // @see https://github.com/babel/babel/tree/master/packages/babel-plugin-transform-runtime
              presets: ['@babel/preset-env'],
              plugins: [
                ['@babel/plugin-transform-runtime', { moduleName: '@babel/runtime' }]
              ]
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader', 'postcss-loader' ]
      },
      {
        test: /\.less/,
        use: [ 'style-loader', 'css-loader', 'postcss-loader', 'less-loader' ]
      },
      {
        test: /\.san$/,
        use: [
          {
            loader: 'san-loader',
            options: {
              loaders: {
                css: ['style-loader', 'css-loader', 'postcss-loader'],
                less: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader']
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
      },
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        use: [{
          loader: 'vue-loader',
          options: {
            loaders: {
              css: ['style-loader', 'css-loader', 'postcss-loader'],
              less: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader']
            }
          }
        }]
      }
    ]
  },

  plugins: [
    // 每次都清空 dist 目录
    new CleanWebpackPlugin(['dist']),
    // 额外的样式，以 entry 自己的名字命名
    new ExtractTextPlugin({ filename: '[name].css', allChunks: true })
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
};
