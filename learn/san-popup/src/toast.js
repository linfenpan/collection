'use strict';
import { extend, Dispatcher } from './util';
import PopupBase from './base.san';

const dispatcher = new Dispatcher();
let RandomId = new Date/1;

class Toast {
  position = '80%';

  constructor(msg, options) {
    const ctx = this;
    ctx.$pt = document.body || document.getElementsByTagName('body')[0];
    ctx.id = RandomId++;
    ctx.options = extend({
      time: 3000,
      autoDestroy: true,
    }, options || {});

    ctx.app = new PopupBase({
      data: {
        className: 'zt-toast',
        content: '<div class="zt-toast-content">' + msg + '</div>',
        position: ctx.position,
        lock: false,
        autoDestroy: true,
        effect: 'fade',
      }
    });
    ctx.app.attach(ctx.$pt);
    ctx.app.show(function(elContent) {
      ctx.$content = elContent;
      dispatcher.fire('newToast', [ctx.$el, elContent]);
      ctx.bindUI();
    });
    ctx.$el = ctx.app.el;
  }
  
  bindUI() {
    const ctx = this;
    const options = ctx.options;

    // 如果有其它 toast 生成，简单的把自己往上挪动
    ctx.fnToastFix = ctx.movePosition.bind(ctx);
    dispatcher.on(`newToast.${ctx.id}`, ctx.fnToastFix);

    if (options.autoDestroy) {
      ctx._timer = setTimeout(function() {
        ctx.destroy();
      }, options.time);
    }
  }

  movePosition(newToastEl, newToastContentEl) {
    // @notice 如果 toast 的时间不一致，容易出现bug
    // 如果没法解决，可以选择把当前的 toast 隐藏掉
    const $content = this.$content;
    const height = newToastContentEl.clientHeight;
    $content.style.top = (parseInt($content.style.top) || 0) - height - 5 + 'px';
    // this.destroy();
  }

  destroy() {
    var ctx = this;
    ctx.app.fire('close');
    ctx.app.hide();
    clearTimeout(ctx._timer);
    dispatcher.off(`newToast.${ctx.id}`);
    ctx._timer = ctx.$pt = ctx.$el = ctx.app = ctx.options = null;
  }
}

export default Toast;