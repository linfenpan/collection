'use strict';
const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const LessPluginAutoPrefixer = require('less-plugin-autoprefixer');

const babelLoader = {
  loader: 'babel-loader',
  options: {
    presets: ['@babel/preset-env'],
    plugins: [
      "syntax-dynamic-import",
      'transform-class-properties',
      "@babel/plugin-transform-runtime"
    ]
  }
};
const lessLoader = {
  loader: 'less-loader',
  options: {
    javascriptEnabled: true,
    multiple: true,
    useFileCache: false,
    compress: true,
    plugins: [
      new LessPluginAutoPrefixer({
        add: true,
        browsers: ['> 0%', 'ie >= 8', 'op_mini > 0', 'op_mob > 0', 'and_qq > 0', 'and_uc > 0', 'Samsung > 0'],
      }),
    ]
  }
};

const htmlLoader = {
  loader: 'html-loader',
  options: {
    minimize: true,
    removeComments: true,
    collapseWhitespace: true,
    conservativeCollapse: false,
    collapseInlineTagWhitespace: true,
    removeTagWhitespace: false,
    removeAttributeQuotes: false,
    removeEmptyAttributes: false,
    removeRedundantAttributes: false,
    // sortAttributes: false,
    // trimCustomFragments: false,
    minifyJS: false,
    minifyCSS: false
  }
};

module.exports = {
  entry: {
    popup: path.resolve(__dirname, './src/index.js')
  },
  output: {
    chunkFilename: '[name].js?[hash:6]',
    filename: '[name].js',
    path: path.resolve(__dirname, './dist'),
    library: 'Popup',
    libraryTarget: 'umd',
    libraryExport: ['default'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: [ babelLoader ]
      },
      {
        test: /\.less$/,
        exclude: /(node_modules|bower_components)/,
        use: [ MiniCssExtractPlugin.loader, { loader: 'css-loader' }, lessLoader ]
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
                less: [ MiniCssExtractPlugin.loader, { loader: 'css-loader' }, lessLoader ],
                css: [ MiniCssExtractPlugin.loader, { loader: 'css-loader' } ],
                js: [ babelLoader ],
              },
            }
          }
        ]
      },
      {
        test: /\.(jpe?g|png|gif||svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024 * 20,
              quality: 85,
            }
          },
        ]
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      san: 'san'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ]
};