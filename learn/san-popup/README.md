# 说明
整理了以往用到的几个弹窗，日后使用时，就从这里拷贝，非常便捷。

# 使用
## 方式1
从 `dist` 目录，拷贝 `popup.js` 和 `popup.css` 进行使用

## 方式2
拷贝`var.less`和`src`目录，到自己的webpack项目下，`import Popup from 'src/index.js';` 即可。

1. 需要预装`less`、`less-loader`、`url-loader`、`file-loader`
2. webpack 的 provider 中，提供 `san` 的访问，具体可参考 `webpack.config.js` 中 `plugins` 的设置


# API
具体查看 `src/index.js`