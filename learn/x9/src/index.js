'use strict';
// // 参考资料: http://sortablejs.github.io/Sortable/
// import Sortable from 'sortablejs';
import App from './view/test2/index.vue';
import store from './js/store';

/**
 * 创建内容
 * @param {*} opts 
 * @property {*} opts.el 插入内容的元素
 */
export function setup(opts) {
  const app = new Vue({
    // el: '#app',
    store,
    render: h => h(App),
    ...opts
  });
  return app;
}

if (process.env.NODE_ENV == 'development') {
  require('./less/test.less');
  const elRoot = document.createElement('div');
  elRoot.setAttribute('id', 'app');
  document.body.appendChild(elRoot);
  window.app = setup({ el: '#app' });
}