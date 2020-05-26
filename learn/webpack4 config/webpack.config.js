'use strict';

const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProcessArgvParser = require('process-argv-parser');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


/** 当前命令行的全部参数 */
const processArgv = (function() {
  const res = (new ProcessArgvParser()).parse();
  return Object.assign(res.inner, res.outer);
})();


module.exports = function(env, argv) {
  if (!processArgv.dirname) {
    throw new Error(`缺少参数 --dirname=xxx`);
  }
  const mode = argv.mode;
  const dirname = path.resolve(__dirname, processArgv.dirname);

  /** 各个文件夹的自定义配置 */
  let customConf = [{}];

  const customConfFilepath = path.resolve(dirname, 'webpack.config.js');
  if (fs.existsSync(customConfFilepath)) {
    customConf = require(customConfFilepath)(env, argv, processArgv);
    if (Array.isArray(customConf) === false) {
      customConf = [customConf];
    }
  }

  return customConf.map(function(wconf) {
    const cssExtractLoader = mode != 'production' ? 
      ['vue-style-loader'] : [MiniCssExtractPlugin.loader];

    const px2remLoader = { 
      loader: 'px2rem-loader',
      options: {
        // 以 40 为基准
        remUnit: 40,
        // 保留小数位
        remPrecision: 4
      }
    };

    const cssModuleLoader = {
      loader: 'css-loader',
      options: {
        // 开启 CSS Modules
        // @see https://github.com/css-modules/css-modules
        modules: {
          localIdentName: '[local]_[hash:base64:5]'
        },
      },
    };

    const lessLoader = {
      loader: 'less-loader',
      options: {
        javascriptEnabled: true,
        multiple: true,
        useFileCache: false,
        compress: false,
      }
    };

    const postCssLoader = {
      loader: 'postcss-loader',
      options: {
        plugins: [
          require('autoprefixer')({})
        ]
      }
    };

    return webpackMerge({
      // entry: {
      //   main: path.resolve(dirname, './index.js'),
      // }

      output: {
        filename: '[name].js',
        library: '[name]',
        libraryTarget: 'umd',
        path: path.resolve(dirname, './dist')
      },

      devtool: mode == 'production' ? false : 'inline-source-map',
      devServer: {
        hot: true,
        open: !!processArgv.open,
        openPage: processArgv.open || '',
        host: '0.0.0.0',
        useLocalIp: true,
        // 开发浏览器打开时，资源的路径
        publicPath: '/',
        // 开发浏览器打开时，静态资源的路径
        contentBase: [ dirname, __dirname ],
      },

      plugins: (function() {
        let plugins = [];
        if (mode == 'production') {
          plugins.push(
            new CleanWebpackPlugin()
          );
          plugins.push(
            new OptimizeCssAssetsPlugin({
              cssProcessor: require('cssnano'),
              cssProcessorPluginOptions: {
                preset: ['default', { discardComments: { removeAll: true } }],
              }
            })
          );
        } else {
          plugins.push(
            new HtmlWebpackPlugin({
              title: `${processArgv.dirname}`,
              filename: 'index.html',
              template: '_/index.html'
            })
          );
        }
        return plugins.concat([
          // 定义全局变量
          new webpack.DefinePlugin({
            // 开发模式 （用于做一些初始化、测试之类的）
            IS_DEV: mode == 'development',
          }),
          // 全局定义这些板块，不用去 import
          new webpack.ProvidePlugin({
            Vue: ['vue', 'default'],
          }),
          new MiniCssExtractPlugin(),
          new VueLoaderPlugin(),
        ]);
      })(),

      module: {
        noParse: /\.min\.js$/,

        rules: [
          {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: [
              {
                loader: 'babel-loader',
                options: {
                  presets: [
                    [ 
                      "@babel/preset-env", {
                        "targets": {
                          // "esmodules": true, // 不想编出ie不识别的文件，就不要开此选项
                          "browsers":[">= 99%", "not ie <= 8"],
                        } 
                      } 
                    ]
                  ],
                  plugins: [
                    '@babel/plugin-proposal-class-properties',
                    // 因为 _core/src/index.js 入口文件，已经引入了 es6-shim 了
                    // ['@babel/plugin-transform-runtime', { "useESModules": true, "corejs": 3 }],
                  ]
                }
              }
            ]
          },

          {
            test: /\.(le|c)ss$/,
            exclude: /(node_modules|bower_components)/,
            oneOf: [
              {
                // 匹配 `<style module>`
                resourceQuery: /module/,
                use: cssExtractLoader.concat([
                  cssModuleLoader,
                  px2remLoader,
                  postCssLoader,
                  lessLoader,
                ])
              },
              {
                // 匹配 <style> 和 <style scoped> 的
                use: cssExtractLoader.concat([
                  'css-loader',
                  px2remLoader,
                  postCssLoader,
                  lessLoader,
                ])
              }
            ],
          },

          {
            test: /\.vue$/,
            loader: 'vue-loader',
            exclude: /node_modules/,
            options: {
              hotReload: mode == 'development',
              compilerOptions: {
                preserveWhitespace: false
              }
            },
          },

          {
            test: /\.(jpe?g|png|gif||svg)(\?v=\d+\.\d+\.\d+)?$/,
            use: [
              {
                loader: 'url-loader',
                options: {
                  limit: 1024 * 20,
                  quality: 85,
                  name: '[name].[ext]'
                }
              }
            ]
          },
        ]
      },

    }, wconf);
  });
};