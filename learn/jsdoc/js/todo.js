'use strict';

// es 2015 的里定义，不需要 @constructor 的声明
class Todo  {
  /**
   * 创建 Todo 列表
  */
  constructor() {
    this.list = [];
  }

  /**
   * 添加事件
   * @param {*} e - 添加的事件
  */
  add(e) {
    this.list.push(e);
  }
}
