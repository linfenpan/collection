'use strict';

import elementDiv from './element/element-div.vue';
import elementContainer from './element/element-container.vue';
// 生成元素的组件map，允许动态改写
export const ElementMap = {
  'div': elementDiv,
  'container': elementContainer,
};

import elementEmpty from './element/element-empty.vue';
// 缺省元素
export const EmptyElement = elementEmpty;