/**
 * 测试 commonjs 的注释
 * @module js/commonjs
 * @see module:js/mode
*/

// @see 是链接到另一个 jsdoc 文档的

/** 获取按钮 */
exports.button = function() {

};


// 如果 exports 前面，有一个临时变量，会导致 jsdoc 导出失败
// 这时候，应该通过 @alias，告诉 jsdoc 来正确解析

/**
 * 期望去干什么
 * @alias module:js/commonjs.wish
 * @param {*} todo - 想干的事情
*/
const wish = exports.wish = function(todo)　{

}
