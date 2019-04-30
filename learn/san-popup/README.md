# 说明
整理了以往用到的几个弹窗，日后使用时，就从这里拷贝，非常便捷。注意，IE浏览器是没有弹窗动画的。

# 使用
## 方式1
从 `dist` 目录，拷贝 `popup.js` 和 `popup.css` 进行使用。重新编译，可安装依赖后，运行 `npm run build` 即可

## 方式2
拷贝`var.less`和`src`目录，到自己的webpack项目下，`import Popup from 'src/index.js';` 即可。

1. 需要预装`less`、`less-loader`、`url-loader`、`file-loader`
2. webpack 的 provider 中，提供 `san` 的访问，具体可参考 `webpack.config.js` 中 `plugins` 的设置


## 浏览器的引入
```html
<link rel="stylesheet" href="./dist/popup.css">
<script src="./dist/popup.js"></script>
<script>
  console.log(Popup);
</script>
```
因为 `dist/popup.js` 是通过 `umd` 规范导出的，所以也适用于 `require.js`，`sea.js` 等场景。

## 在webpack相关的编译文件中引入
```javascript
import Popup from './src/index';
console.log(Popup);
```

## API
### `Popup.modal`
```javascript
/**
 * 弹窗
 * 结构如下:
 * <popup>
 *    <componentParent>
 *      内容  或者是  内容组件[可通过 getContentComponent() 获取内容组件]
 *    </componentParent>
 * </popup>
 * @class
 * @param {object} options 参数
 * @property {string} [options.title=''] 标题
 * @property {string} [options.content=''] 内容
 * @property {array} [options.buttons] 按钮列表
 * @property {string} options.buttons[].text 按钮文案
 * @property {boolean} options.buttons[].close 点击后，是否关闭
 * @property {string} options.buttons[].event 点击后，触发的事件
 * @property {string} options.buttons[].cls 添加到按钮上的类名
 * 
 * @example
 *   var modal = new Modal({ title: '测试' });
 *   modal.show(); // 显示
 *   modal.app.on('close', function() { console.log(this); });  // 监控关闭
 */
modal(opts)
```

### `Popup.alert`
```javascript
/**
 * alert 弹窗
 * @param {string} msg 弹窗内容
 * @param {object} [opts] 配置，具体参考 Popup.modal
 * @property {string} [opts.buttonOkText] 确认按钮文案
 * @property {object} [opts.buttonOk] 确认按钮配置，覆盖 buttonOkText
 */
alert(msg, opts);
```

### `Popup.confirm`
```javascript
/**
 * 确认弹窗
 * @fires cancel 选择了取消
 * @fires confirm 选择了确认
 * @fires close 关闭了弹窗
 * @param {object} opts 详情请参考 Modal 类
 * @property {string} [opts.buttonCancelText] 取消按钮的文案
 * @property {object} [opts.buttonCancel] 取消按钮的配置，覆盖 buttonCancelText
 * @property {string} [opts.buttonOkText] 确认按钮的文案
 * @property {object} [opts.buttonOk] 确认按钮的配置，覆盖 buttonOkText
*/
Popup.confirm(opts)
```

### `Popup.toast`
```javascript
/**
 * toast 提示
 * @param {string} msg 提示消息
 * @param {number} time 提示存在的时间
 * @param {object} [opts] 配置，具体参考 class Toast
 */
Popup.toast(msg, time, opts)
```

### `Popup.showLoading` 和 `Popup.hideLoading`
```javascript
/**
 * 显示 Loading 示意图
*/
Popup.showLoading()

/**
 * 隐藏 Loading 示意图
*/
Popup.hideLoading()
```

### `Popup.setupModal`
```javascript
/**
 * 全弹窗，默认的参数设置；可支持参数，参考 Popup.modal
 * @param {object} opts 
 */
Popup.setupModal(opts)
```