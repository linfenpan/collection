'use strict';
const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { babelLoader, cssLoader, lessLoader, urlLoader, htmlLoader, vueLoader } = require('./config/loaders');


module.exports = {
  entry: {
    app: './src/index.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },

  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },

  plugins: [
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    new webpack.ProvidePlugin({
      Vue: ['vue', 'default'],
      Vuex: ['vuex', 'default']
    }),
    new HtmlWebpackPlugin({
      title: 'Development'
    })
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
        use: [ MiniCssExtractPlugin.loader, cssLoader ]
      },
      {
        test: /\.less$/,
        exclude: /(node_modules|bower_components)/,
        use: [ MiniCssExtractPlugin.loader, cssLoader, lessLoader ]
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
}