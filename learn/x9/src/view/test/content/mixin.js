'use strict';
import { extend } from '../utils/index';

export default {
  methods: {
    parseInt: window.parseInt.bind(window),
    
    /**
     * 是定位样式吗
     * @param {object} style 样式对象
     * @return {boolean}
    */ 
    isAbsoluteStyle(style) {
      const position = (style || {}).position;
      return position == 'absolute' || position == 'fixed';
    },

    /**
     * 复制新的元素配置
     * @param {object} elementData 元素的创建数据
     * @return {object}
     */
    cloneElementData(elementData) {
      return extend(true, elementData || {});
    },
  }
};