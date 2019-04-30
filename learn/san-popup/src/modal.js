'use strict';
import { extend } from './util';
import PopupBase from './base.san';

// 弹窗默认参数
let ModalDefaultOptions = { };

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
class Modal {
  constructor(options) {
    const ctx = this;
    ctx.options = extend({
      title: '',
      content: '',
      autoDestroy: true,
      buttons: []
    }, ModalDefaultOptions, options || {});

    ctx._buildContent();
  }

  _buildContent() {
    const ctx = this;

    ctx.$pt = document.body || document.getElementsByTagName('body')[0];

    // 弹窗内容模板
    let content = ctx._buildHTML();
    // 内容组件
    let contentComponent = ctx.options.component;
    // 内容组件的参数
    let contentComponentOptions = ctx.options.componentOptions || {};

    let comp = san.defineComponent({
      template: content,
      btnClick(eventName, close) {
        ctx.app.fire(eventName);
        if (close) {
          ctx.hide();
        }
      },
      attached() {
        // 在内容的 div 里，插入组件
        if (contentComponent) {
          const el = this.ref('content');
          if (el) {
            const cmp = this.cmp = new contentComponent(contentComponentOptions);
            cmp.attach(el);
          }
        }
      },
      disposed() {
        this.cmp && this.cmp.dispose();
        this.cmp = null;
      },
      /**
       * 如果有内容组件，则返回之
      */
      getContentComponent() {
        return this.cmp;
      },
    });

    delete ctx.options.content;
    delete ctx.options.component;
    delete ctx.options.componentOptions;

    const data = extend({
      className: 'zt-modal',
      content: '',
      component: comp,
      position: 'center',
      lock: true,
      autoDestroy: true,
      effect: 'fadescale',
    }, ctx.options);

    // 是否存在额外的 className
    data.extClassName && (data.className += ' ' + data.extClassName);

    ctx.app = new PopupBase({
      data   
    });
    ctx.app.attach(ctx.$pt);

    if (ctx.options.autoDestroy) {
      ctx.app.on('close', function() {
        ctx.destroy();
      });
    }
  }

  /**
   * 返回内容真正所在的组件
  */
  getContentComponent() {
    return this.app.getContentComponent().getContentComponent();
  }

  _buildHTML() {
    const ctx = this;
    const options = ctx.options;

    var html = [];
    if (options.title) {
      html.push('<div class="zt-modal-title">' + options.title);
        if (options.close) {
          html.push('<a class="zt-modal-close" data-event="close" href="javascript:;" title="关闭">&times;</a>');
        }
      html.push('</div>');
    }

    html.push('<div class="zt-modal-main">');
      // if (options.content) {
      html.push('<div class="zt-modal-content" s-ref="content">');
      html.push(options.content || '');
      html.push('</div>');
      // }

      if (options.buttons.length) {
        html.push('<div class="zt-modal-operation">');
        for (var i = 0, max = options.buttons.length; i < max; i++) {
          // button = { text, event, cls, close: true }
          var button = options.buttons[i];
          html.push(`<a href="javascript:;" class="zt-modal-button ${ i == max - 1 ? 'zt-modal-button-last' : '' } ${button.cls}" on-click="btnClick('${ button.event || '' }', ${ button.close ? 'true' : 'false' })" style="width: ${ Math.floor(1000/max)/10 }%;">${button.text}</a>`);
        }
        html.push('</div>');
      }
    html.push('</div>');

    return '<div class="zt-modal-container">' + html.join('') + '</div>';
  }

  show() {
    this.app.show();
    return this;
  }

  hide() {
    this.app.hide();
    return this;
  }

  destroy() {
    const ctx = this;
    if (!ctx.app) { return; }
    
    ctx.app.destroy();
    ctx.options = ctx.app = null;
  }
}

Modal.setup = function(options) {
  extend(ModalDefaultOptions, options || {});
  return Modal;
};

export default Modal;