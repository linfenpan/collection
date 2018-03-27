'use strict';

/**
 * 添加任务
 *
 * @param {String} name - 名字
 * @param {Function} task - 任务
 * @return {void}
*/
function addTask(name, task) {

}




// @constructor 代表是构造函数
/**
 * Book 类，代表一本书
 * @constructor
 * @param {string} title - 书本标题
 * @param {string} author[da宗熊] - 书本作者
*/
function Book(title, author) {
  /**
   * 给大家说 hello
  */
  this.sayHi = function() {

  };
}

Book.prototype = {
  /**
   * 获取书本的标题
   * @returns {string|undefined}
  */
  getTitle: function() {
    return this.title;
  },

  /**
   * 设置书本的总页数
   * @param {number} num 页码
  */
  setPageNum: function(num) {

  }
}

/**
 * 获取书籍的详情
 * @return {object}
*/
Book.info = function() {
  return {}
}
