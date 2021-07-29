'use strict';
/**
 * @file 一个测试jsdoc的文件
 * @copyright fenpan.lfp 2018
*/

/**
* 攻击某人 （内容的简介）
* @param {Someone|number} someone - Someone 类，或者是 Someone#id
* @param {Object} options - 必填参数
* @property {number} options.extraAttack - 额外攻击
* @property {boolean} options.isGodMode - 是否上帝模式
* @return {boolean}
*/
function attack(someone, options) {

}

/**
* fnAgain 的回调函数
* @callback fnAgainCallback
* @param {number} id - 回调id
* @param {function} next - 继续执行的回调
*/

/**
* 再次执行指定函数
* @function
* @param {fnAgainCallback} fn - 回调函数
*/
var fnAgain = function again(fn) { }

/**
 * 类，物种
 * @author da宗熊 <xxx@163.com>
 * @constructor
 * @classdesc 此类为抽象类，应该实现 canFly/canSwim 等方法
 * @param {*} type - 物种类型
*/
function Species(type) {
  // @access 可选 private, protected, public 三种类型，用于指定类的属性、函数的访问权限
  // 或者使用快捷方式 @private, @protected, @public
  /**
   *物种的类型
   * @access protected
  */
  this.type = type;

  /**
   * 技能列表
   * @access public
  */
  this.skills = [];
}

/**
 * 获取物种的类型
 * @return {*}
*/
Species.prototype.getType = function() {
  return this.type
};

// @abstract 代表是抽象方法，或者抽象类，一般要子类中实现
/**
 * 当前物种，能否飞行
 * @abstract
 * @return {boolean}
*/
Species.prototype.canFly = function() {
  return false;
};

/**
 * 当前物种，能否游泳
 * @abstract
 * @return {boolean}
*/
Species.prototype.canSwim = function() {
  return false;
};


// 假设使用了 jquery，给原型链编写内容
// @alias 可以指定当前内容，属于哪里，Object#xx 原型链的，Object.xx 是静态的
$.extend(Species.prototype, {
  /**
   * 获取技能列表
   * @alias Species#getSkills
   * @return {array}
  */
  getSkills: function() {
    return this.skills;
  }
});

// 在外层指定后面的内容，都属于 Species.prototype
$.extend(Species.prototype, /** @alias Species# */{
  /**
   * 遍历技能列表
   * @param {Species~eachcallback} fn - 处理函数
  */
  eachSkills: function(fn) {

  }
});

// 使用 @callback，给回调函数，添加描述
/**
 * 遍历技能的回调
 * @callback Species~eachcallback
 * @param {number} id 技能的id值
 * @param {number} index 当前技能的索引
*/


// 测试一下继承

/**
 * 动物
 * @constructor
 * @extends Species
*/
function Animal() {
  Species.call(this, '动物');
}
$.extend(Animal.prototype, Species.prototype);

/** 动物吼叫 */
Animal.prototype.speak = function() {

};


const Person = $.extend(Animal.prototype, /** @lends Persion.prototype */{
  // @constructs 用于指定类的构造函数
  // @extends 和 @constructs 应该一起玩
  // @override 是重写父层的方法
  /**
   * 类，人类
   * @constructs
   * @extends Animal
  */
  initialize: function() {
    Animal.call(this, '人类');
    /**
     * 血量
     * @default
    */
    this.hp = 100;

    /**
     * 魔法值
     * @default
    */
    this.mp = 100;
  },

  /**
   * 人类不会飞
   * @override
  */
  canFly: function() {
    return false;
  },

  /**
   * 人类会有用
   * @override
  */
  canSwim: function() {
    return true;
  },

  /**
   * 攻击某人
   * @fires Persion#attack
  */
  attack: function(someone) {
    /**
     * 攻击事件
     * @event Persion#attack
     * @type {Persion}
    */
    this.fire('attack', someone);
  }
});


/**
 * 删除字符串的前后空格
 * @param {string} str - 加工的字符
 * @return {string} - 加工后的字符
*/
function trstr(str) {

}

// @borrows 将会告诉jsdoc，trim方法，将引用trstr函数
// @const 和 @constant 都代表当前内容，是静态的，不该被修改的
/**
 * 工具集合
 * @namespace
 * @borrows trstr as trim
*/
const util = {
  trim: trstr,

  /** 红色
   * @constant
  */
  RED: '#f00',

  /**
   * 尝试去干什么
   * @deprecated 最新版本，已经费用，请用 xxx 代替
  */
  tryToDoSomething: function() {

  },

  // @enum 用于指定枚举的类型
  /**
   * 通用状态
   * @readonly
   * @enum {number}
  */
  State: {
    /** true 值 */
    TRUE: 1,
    /** false 值 */
    FALSE: 0,
    /** @type {string} 可能 */
    MAYBE: 'maybe'
  }
};

// @default 标注，当前变量，是一个默认值，如果没有写入，则获取当前实例的值
/**
 * 蓝色
 * @constant
 * @default red
*/
const BLUE = 'blue';
