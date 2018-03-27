'use strict';
/**
 * amd 测试
 * @module js/amd
*/

define(function() {
  /**
   * 测试函数
   * @class
  */
  function Test() {

  }

  /** 执行测试 */
  Test.prototype.run = function() {

  }

  return /** @alias module:js/amd */ {
    /** 颜色 */
    color: 'black',
    Test: Test
  };
});
