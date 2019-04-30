'use strict';
import PopupBase from './base.san';
import Loading from './loading.san';

export default {
  app: null,

  _init() {
    if (this.app) { return; }

    this.app = new PopupBase({
      data: {
        className: 'zt-popup-loading',
        component: Loading,
        componentOptions: {
          data: { white: true }
        },
        effect: 'fadescale',
        closeOutside: false,
        autoDestroy: false,
      }
    });
    this.app.attach(document.getElementsByTagName('body')[0]);
  },

  show() {
    this._init();
    this.app.show();
  },

  hide() {
    const app = this.app;
    if (!app) { return; }

    app.hide();
  }
};