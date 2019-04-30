'use strict';
require('./less/index.less');

import Toast from './toast';
import Modal from './modal';
import Loading from './loading';
import { extend } from './util';

export default {
  /**
   * toast 提示
   * @param {string} msg 提示消息
   * @param {number} time 提示存在的时间
   * @param {object} [opts] 配置，具体参考 class Toast
   */
  toast(msg, time, opts) {
    opts = opts || {};
    if (typeof time === 'object') {
      opts = time;
      time = null;
    }
    if (time) {
      opts.time = time;
    }
    return new Toast(msg, opts);
  },

  /**
   * alert 弹窗
   * @param {string} msg 弹窗内容
   * @param {object} [opts] 配置，具体参考 class Modal
   * @property {string} [opts.buttonOkText] 确认按钮文案
   * @property {object} [opts.buttonOk] 确认按钮配置，覆盖 buttonOkText
   */
  alert(msg, opts) {
    opts = opts || {};
    if (typeof msg === 'object') {
      opts = msg;
      msg = null;
    }
    if (msg) {
      opts.content = `<div style="text-align: center;">${msg}</div>`;
    }
    opts = extend({
      className: 'zt-modal zt-modal-alert',
      buttons: [
        extend({ text: opts.buttonOkText || '确定', close: true }, opts.buttonOk || {})
      ]
    }, opts);
    return new Modal(opts).show();
  },

  /**
   * 显示 Loading 示意图
  */
  showLoading() {
    Loading.show();
  },

  /**
   * 隐藏 Loading 示意图
  */
  hideLoading() {
    Loading.hide();
  },

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
  confirm(opts) {
    opts = opts || {};

    opts = extend({
      className: 'zt-modal zt-modal-confirm',
      // 不需要自动销毁，销毁操作，由这里的 .on('close') 执行
      autoDestroy: false,
      buttons: [
        extend({ text: opts.buttonCancelText || '取消', cls: 'zt-modal-button-cancel', close: true }, opts.buttonCancel || {}),
        extend({ text: opts.buttonOkText || '确定', cls: 'zt-modal-button-confirm', event: 'confirm' }, opts.buttonOk || {}),
      ]
    }, opts);

    const modal = new Modal(opts);
    let isConfirm = false;
    modal.app.on('confirm', function() {
      isConfirm = true;
    });
    modal.app.on('close', function() {
      if (!isConfirm) {
        modal.app.fire('cancel');
      }
      modal.destroy();
    });

    return modal.show();
  },

  /**
   * 自定义弹窗
   * @param {object} opts 参数，具体参考 class Modal
   */
  modal(opts) {
    return new Modal(opts || {}).show();
  },

  /**
   * 全弹窗，默认的参数设置；可支持参数，参考 Popup.modal
   * @param {object} opts 
   */
  setupModal(opts) {
    return Modal.setup(opts);
  }
}