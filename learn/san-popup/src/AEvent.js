/**
 * 抽象类
 * 含 show/hide/on/off/one 等方法的实现
 */
'use strict';
import { Dispatcher } from './util';

export default class AEvent extends san.Component {
  constructor(options) {
    // @notice 如果是 xxx.san 文件继承过去的，请务必传入 options 参数
    super(options);
    this.dispatcher = new Dispatcher(this);
  }

  show() {
    this.app && this.app.show();
    return this;
  }

  hide() {
    this.app && this.app.hide();
    return this;
  }

  fire(event, args) {
    this.dispatcher.fire(event, args);
    return this;
  }

  on(event, fn) {
    this.dispatcher.on(event, fn);
    return this;
  }

  one(event, fn) {
    this.dispatcher.one(event, fn);
    return this;
  }

  off(event, fn) {
    this.dispatcher.off(event, fn);
    return this;
  }

  destroy() {
    this.dispatcher.destroy();
    this.dispatcher = null;
  }
}