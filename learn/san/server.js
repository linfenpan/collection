'use strict'
// 临时服务器
const Express = require('express');
const Webpack = require('webpack');
const WebpackHotMiddleware = require('webpack-hot-middleware');
const WebpackDevMiddleware = require('webpack-dev-middleware');

const app = Express();
const config = require('./webpack.config.js');

config.output.publicPath = '/';
config.mode = 'development';

// 给所有 entry 添加热更新的策略
Object.keys(config.entry).forEach(function(key) {
  config.entry = ['webpack-hot-middleware/client?reload=true'].concat(config.entry[key]);
});
// 在 plugins 里，必须有 Webpack.HotModuleReplacementPlugin 才能自动刷新
config.plugins = (config.plugins || []);
config.plugins.unshift(new Webpack.HotModuleReplacementPlugin());

const compiler = Webpack(config);


// 与 webpack 开发中间件链接
// 这个中间件，是不会产生最终文件，除非有特定的参数
app.use(WebpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));
// 添加热更新策略
app.use(WebpackHotMiddleware(compiler));


app.listen(3000, function() {
  console.log('开发服务器启动中，监听端口: 3000');
});
