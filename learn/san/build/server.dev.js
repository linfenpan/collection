'use strict';
const Express = require('express');
const Webpack = require('webpack');
const merge = require('webpack-merge');
const WebpackHotMiddleware = require('webpack-hot-middleware');
const WebpackDevMiddleware = require('webpack-dev-middleware');

const app = Express();
const config = merge(require('./webpack.dev.js'), {
  output: { publicPath: '/' },
  plugins: [
    // 热更新需要的插件
    new Webpack.HotModuleReplacementPlugin()
  ]
});

// 添加热更新插件配置
Object.keys(config.entry).forEach(function(key) {
  config.entry[key] = ['webpack-hot-middleware/client?reload=true'].concat(config.entry[key]);
});

const compiler = Webpack(config);

// 添加开发中间件
// 此中间件，在开发过程中，不会生成最终代码
app.use(WebpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));

// 添加热更新中间件
app.use(WebpackHotMiddleware(compiler));

app.listen(3011, function() {
  console.log('正在监控端口: 3011');
});
