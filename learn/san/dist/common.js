(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/css-loader/lib/url/escape.js":
/*!***************************************************!*\
  !*** ./node_modules/css-loader/lib/url/escape.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/san/dist/san.dev.js":
/*!******************************************!*\
  !*** ./node_modules/san/dist/san.dev.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(setImmediate) {/**
 * San
 * Copyright 2016 Baidu Inc. All rights reserved.
 *
 * @file 主文件
 * @author errorrik(errorrik@gmail.com)
 *         otakustay(otakustay@gmail.com)
 *         junmer(junmer@foxmail.com)
 */

(function (root) {
    // 人工调整打包代码顺序，通过注释手工写一些依赖
//     // require('./util/guid');
//     // require('./util/empty');
//     // require('./util/extend');
//     // require('./util/inherits');
//     // require('./util/each');
//     // require('./util/contains');
//     // require('./util/bind');
//     // require('./browser/on');
//     // require('./browser/un');
//     // require('./browser/svg-tags');
//     // require('./browser/create-el');
//     // require('./browser/remove-el');
//     // require('./util/next-tick');
//     // require('./browser/ie');
//     // require('./browser/ie-old-than-9');
//     // require('./browser/input-event-compatible');
//     // require('./browser/auto-close-tags');
//     // require('./util/data-types.js');
//     // require('./util/create-data-types-checker.js');
//     // require('./parser/walker');
//     // require('./parser/create-a-node');
//     // require('./parser/parse-template');
//     // require('./runtime/change-expr-compare');
//     // require('./runtime/data-change-type');
//     // require('./runtime/data');
//     // require('./runtime/escape-html');
//     // require('./runtime/default-filters');
//     // require('./runtime/eval-expr');
//     // require('./view/life-cycle');
//     // require('./view/node-type');
//     // require('./view/get-prop-handler');
//     // require('./view/is-data-change-by-element');
//     // require('./view/event-declaration-listener');
//     // require('./view/gen-element-children-html');
//     // require('./view/create-node');


    /**
 * @file 生成唯一id
 * @author errorrik(errorrik@gmail.com)
 */


/**
 * 唯一id的起始值
 *
 * @inner
 * @type {number}
 */
var guidIndex = 1;

/**
 * 唯一id的前缀
 *
 * @inner
 * @type {string}
 */
var guidPrefix = (new Date()).getTime().toString(16).slice(8);

/**
 * 获取唯一id
 *
 * @inner
 * @return {string} 唯一id
 */
function guid() {
    return '_' + guidPrefix + (guidIndex++);
}

// exports = module.exports = guid;


/**
 * @file 空函数
 * @author errorrik(errorrik@gmail.com)
 */


/**
 * 啥都不干
 */
function empty() {}

// exports = module.exports = empty;


/**
 * @file 属性拷贝
 * @author errorrik(errorrik@gmail.com)
 */

/**
 * 对象属性拷贝
 *
 * @param {Object} target 目标对象
 * @param {Object} source 源对象
 * @return {Object} 返回目标对象
 */
function extend(target, source) {
    for (var key in source) {
        if (source.hasOwnProperty(key)) {
            var value = source[key];
            if (typeof value !== 'undefined') {
                target[key] = value;
            }
        }
    }

    return target;
}

// exports = module.exports = extend;


/**
 * @file 构建类之间的继承关系
 * @author errorrik(errorrik@gmail.com)
 */

// var extend = require('./extend');

/**
 * 构建类之间的继承关系
 *
 * @param {Function} subClass 子类函数
 * @param {Function} superClass 父类函数
 */
function inherits(subClass, superClass) {
    /* jshint -W054 */
    var subClassProto = subClass.prototype;
    var F = new Function();
    F.prototype = superClass.prototype;
    subClass.prototype = new F();
    subClass.prototype.constructor = subClass;
    extend(subClass.prototype, subClassProto);
    /* jshint +W054 */
}

// exports = module.exports = inherits;


/**
 * @file 遍历数组
 * @author errorrik(errorrik@gmail.com)
 */


/**
 * 遍历数组集合
 *
 * @param {Array} array 数组源
 * @param {function(Any,number):boolean} iterator 遍历函数
 */
function each(array, iterator) {
    if (array && array.length > 0) {
        for (var i = 0, l = array.length; i < l; i++) {
            if (iterator(array[i], i) === false) {
                break;
            }
        }
    }
}

// exports = module.exports = each;


/**
 * @file 判断数组中是否包含某项
 * @author errorrik(errorrik@gmail.com)
 */

// var each = require('./each');

/**
 * 判断数组中是否包含某项
 *
 * @param {Array} array 数组
 * @param {*} value 包含的项
 * @return {boolean}
 */
function contains(array, value) {
    var result = false;
    each(array, function (item) {
        result = item === value;
        return !result;
    });

    return result;
}

// exports = module.exports = contains;


/**
 * @file bind函数
 * @author errorrik(errorrik@gmail.com)
 */

/**
 * Function.prototype.bind 方法的兼容性封装
 *
 * @param {Function} func 要bind的函数
 * @param {Object} thisArg this指向对象
 * @param {...*} args 预设的初始参数
 * @return {Function}
 */
function bind(func, thisArg) {
    var nativeBind = Function.prototype.bind;
    var slice = Array.prototype.slice;
    // #[begin] allua
    if (nativeBind && func.bind === nativeBind) {
    // #[end]
        return nativeBind.apply(func, slice.call(arguments, 1));
    // #[begin] allua
    }

    var args = slice.call(arguments, 2);
    return function () {
        return func.apply(thisArg, args.concat(slice.call(arguments)));
    };
    // #[end]
}

// exports = module.exports = bind;


/**
 * @file DOM 事件挂载
 * @author errorrik(errorrik@gmail.com)
 */

/**
 * DOM 事件挂载
 *
 * @inner
 * @param {HTMLElement} el DOM元素
 * @param {string} eventName 事件名
 * @param {Function} listener 监听函数
 * @param {boolean} capture 是否是捕获阶段
 */
function on(el, eventName, listener, capture) {
    // #[begin] allua
    if (el.addEventListener) {
    // #[end]
        el.addEventListener(eventName, listener, capture);
    // #[begin] allua
    }
    else {
        el.attachEvent('on' + eventName, listener);
    }
    // #[end]
}

// exports = module.exports = on;


/**
 * @file DOM 事件卸载
 * @author errorrik(errorrik@gmail.com)
 */

/**
 * DOM 事件卸载
 *
 * @inner
 * @param {HTMLElement} el DOM元素
 * @param {string} eventName 事件名
 * @param {Function} listener 监听函数
 * @param {boolean} capture 是否是捕获阶段
 */
function un(el, eventName, listener, capture) {
    // #[begin] allua
    if (el.addEventListener) {
    // #[end]
        el.removeEventListener(eventName, listener, capture);
    // #[begin] allua
    }
    else {
        el.detachEvent('on' + eventName, listener);
    }
    // #[end]
}

// exports = module.exports = un;


/**
 * @file 将字符串逗号切分返回对象
 * @author errorrik(errorrik@gmail.com)
 */

// var each = require('../util/each');

/**
 * 将字符串逗号切分返回对象
 *
 * @param {string} source 源字符串
 * @return {Object}
 */
function splitStr2Obj(source) {
    var result = {};
    each(
        source.split(','),
        function (key) {
            result[key] = 1;
        }
    );
    return result;
}

// exports = module.exports = splitStr2Obj;


/**
 * @file SVG标签表
 * @author errorrik(errorrik@gmail.com)
 */

// var splitStr2Obj = require('../util/split-str-2-obj');

/**
 * svgTags
 *
 * @see https://www.w3.org/TR/SVG/svgdtd.html 只取常用
 * @type {Object}
 */
var svgTags = splitStr2Obj(''
    // structure
    + 'svg,g,defs,desc,metadata,symbol,use,'
    // image & shape
    + 'image,path,rect,circle,line,ellipse,polyline,polygon,'
    // text
    + 'text,tspan,tref,textpath,'
    // other
    + 'marker,pattern,clippath,mask,filter,cursor,view,animate,'
    // font
    + 'font,font-face,glyph,missing-glyph');

// exports = module.exports = svgTags;


/**
 * @file DOM创建
 * @author errorrik(errorrik@gmail.com)
 */

// var svgTags = require('./svg-tags');

/**
 * 创建 DOM 元素
 *
 * @param  {string} tagName tagName
 * @return {HTMLElement}
 */
function createEl(tagName) {
    if (svgTags[tagName]) {
        return document.createElementNS('http://www.w3.org/2000/svg', tagName);
    }

    return document.createElement(tagName);
}

// exports = module.exports = createEl;


/**
 * @file 移除DOM
 * @author errorrik(errorrik@gmail.com)
 */

/**
 * 将 DOM 从页面中移除
 *
 * @param {HTMLElement} el DOM元素
 */
function removeEl(el) {
    if (el && el.parentNode) {
        el.parentNode.removeChild(el);
    }
}

// exports = module.exports = removeEl;


/**
 * @file 在下一个时间周期运行任务
 * @author errorrik(errorrik@gmail.com)
 */

// 该方法参照了vue2.5.0的实现，感谢vue团队
// SEE: https://github.com/vuejs/vue/blob/0948d999f2fddf9f90991956493f976273c5da1f/src/core/util/env.js#L68


// var bind = require('./bind');

/**
 * 下一个周期要执行的任务列表
 *
 * @inner
 * @type {Array}
 */
var nextTasks = [];

/**
 * 执行下一个周期任务的函数
 *
 * @inner
 * @type {Function}
 */
var nextHandler;

/**
 * 浏览器是否支持原生Promise
 * 对Promise做判断，是为了禁用一些不严谨的Promise的polyfill
 *
 * @inner
 * @type {boolean}
 */
var isNativePromise = typeof Promise === 'function' && /native code/.test(Promise);

/**
 * 在下一个时间周期运行任务
 *
 * @inner
 * @param {Function} fn 要运行的任务函数
 * @param {Object=} thisArg this指向对象
 */
function nextTick(fn, thisArg) {
    if (thisArg) {
        fn = bind(fn, thisArg);
    }
    nextTasks.push(fn);

    if (nextHandler) {
        return;
    }

    nextHandler = function () {
        var tasks = nextTasks.slice(0);
        nextTasks = [];
        nextHandler = null;

        for (var i = 0, l = tasks.length; i < l; i++) {
            tasks[i]();
        }
    };

    // 非标准方法，但是此方法非常吻合要求。
    if (typeof setImmediate === 'function') {
        setImmediate(nextHandler);
    }
    // 用MessageChannel去做setImmediate的polyfill
    // 原理是将新的message事件加入到原有的dom events之后
    else if (typeof MessageChannel === 'function') {
        var channel = new MessageChannel();
        var port = channel.port2;
        channel.port1.onmessage = nextHandler;
        port.postMessage(1);
    }
    // for native app
    else if (isNativePromise) {
        Promise.resolve().then(nextHandler);
    }
    else {
        setTimeout(nextHandler, 0);
    }
}

// exports = module.exports = nextTick;


/**
 * @file ie版本号
 * @author errorrik(errorrik@gmail.com)
 */

/**
 * 从userAgent中ie版本号的匹配信息
 *
 * @type {Array}
 */
var ieVersionMatch = typeof navigator !== 'undefined'
    && navigator.userAgent.match(/msie\s*([0-9]+)/i);

/**
 * ie版本号，非ie时为0
 *
 * @type {number}
 */
var ie = ieVersionMatch ? ieVersionMatch[1] - 0 : 0;

// exports = module.exports = ie;


/**
 * @file 是否 IE 并且小于 9
 * @author errorrik(errorrik@gmail.com)
 */

// var ie = require('./ie');

// HACK:
// 1. IE8下，设置innerHTML时如果以html comment开头，comment会被自动滤掉
//    为了保证stump存在，需要设置完html后，createComment并appendChild/insertBefore
// 2. IE8下，innerHTML还不支持custom element，所以需要用div替代，不用createElement
// 3. 虽然IE8已经优化了字符串+连接，碎片化连接性能不再退化
//    但是由于上面多个兼容场景都用 < 9 判断，所以字符串连接也沿用
//    所以结果是IE8下字符串连接用的是数组join的方式

// #[begin] allua
/**
 * 是否 IE 并且小于 9
 */
var ieOldThan9 = ie && ie < 9;
// #[end]

// exports = module.exports = ieOldThan9;


/**
 * @file DOM 事件挂载
 * @author dafrok(o.o@mug.dog)
 */

/**
 * DOM 事件挂载
 *
 * @inner
 * @param {HTMLElement} el DOM元素
 * @param {string} eventName 事件名
 */
function trigger(el, eventName) {
    var event = document.createEvent('HTMLEvents');
    event.initEvent(eventName, true, true);
    el.dispatchEvent(event);
}

// exports = module.exports = trigger;


/**
 * @file 解决 IE9 在表单元素中删除字符时不触发事件的问题
 * @author dafrok(o.o@mug.dog)
 */

// var ie = require('./ie');
// var on = require('./on');
// var trigger = require('./trigger');

// #[begin] allua
if (ie === 9) {
    on(document, 'selectionchange', function () {
        var el = document.activeElement;
        if (el.tagName === 'TEXTAREA' || el.tagName === 'INPUT') {
            trigger(el, 'input');
        }
    });
}
// #[end]


/**
 * @file 自闭合标签表
 * @author errorrik(errorrik@gmail.com)
 */

// var splitStr2Obj = require('../util/split-str-2-obj');

/**
 * 自闭合标签列表
 *
 * @type {Object}
 */
var autoCloseTags = splitStr2Obj('area,base,br,col,embed,hr,img,input,keygen,param,source,track,wbr');

// exports = module.exports = autoCloseTags;


/**
 * @file data types
 * @author leon <ludafa@outlook.com>
 */

// var bind = require('./bind');
// var empty = require('./empty');
// var extend = require('./extend');

// #[begin] error
var ANONYMOUS_CLASS_NAME = '<<anonymous>>';

/**
 * 获取精确的类型
 *
 * @NOTE 如果 obj 是一个 DOMElement，我们会返回 `element`；
 *
 * @param  {*} obj 目标
 * @return {string}
 */
function getDataType(obj) {

    if (obj && obj.nodeType === 1) {
        return 'element';
    }

    return Object.prototype.toString
        .call(obj)
        .slice(8, -1)
        .toLowerCase();
}
// #[end]

/**
 * 创建链式的数据类型校验器
 *
 * @param  {Function} validate 真正的校验器
 * @return {Function}
 */
function createChainableChecker(validate) {
    var chainedChecker = function () {};
    chainedChecker.isRequired = empty;

    // 只在 error 功能启用时才有实际上的 dataTypes 检测
    // #[begin] error
    var checkType = function (isRequired, data, dataName, componentName, fullDataName) {

        var dataValue = data[dataName];
        var dataType = getDataType(dataValue);

        componentName = componentName || ANONYMOUS_CLASS_NAME;

        // 如果是 null 或 undefined，那么要提前返回啦
        if (dataValue == null) {
            // 是 required 就报错
            if (isRequired) {
                throw new Error('[SAN ERROR] '
                    + 'The `' + dataName + '` '
                    + 'is marked as required in `' + componentName + '`, '
                    + 'but its value is ' + dataType
                );
            }
            // 不是 required，那就是 ok 的
            return;
        }

        validate(data, dataName, componentName, fullDataName);

    };

    chainedChecker = bind(checkType, null, false);
    chainedChecker.isRequired = bind(checkType, null, true);
    // #[end]



    return chainedChecker;

}

// #[begin] error
/**
 * 生成主要类型数据校验器
 *
 * @param  {string} type 主类型
 * @return {Function}
 */
function createPrimaryTypeChecker(type) {

    return createChainableChecker(function (data, dataName, componentName, fullDataName) {

        var dataValue = data[dataName];
        var dataType = getDataType(dataValue);

        if (dataType !== type) {
            throw new Error('[SAN ERROR] '
                + 'Invalid ' + componentName + ' data `' + fullDataName + '` of type'
                + '(' + dataType + ' supplied to ' + componentName + ', '
                + 'expected ' + type + ')'
            );
        }

    });

}



/**
 * 生成 arrayOf 校验器
 *
 * @param  {Function} arrayItemChecker 数组中每项数据的校验器
 * @return {Function}
 */
function createArrayOfChecker(arrayItemChecker) {

    return createChainableChecker(function (data, dataName, componentName, fullDataName) {

        if (typeof arrayItemChecker !== 'function') {
            throw new Error('[SAN ERROR] '
                + 'Data `' + dataName + '` of `' + componentName + '` has invalid '
                + 'DataType notation inside `arrayOf`, expected `function`'
            );
        }

        var dataValue = data[dataName];
        var dataType = getDataType(dataValue);

        if (dataType !== 'array') {
            throw new Error('[SAN ERROR] '
                + 'Invalid ' + componentName + ' data `' + fullDataName + '` of type'
                + '(' + dataType + ' supplied to ' + componentName + ', '
                + 'expected array)'
            );
        }

        for (var i = 0, len = dataValue.length; i < len; i++) {
            arrayItemChecker(dataValue, i, componentName, fullDataName + '[' + i + ']');
        }

    });

}

/**
 * 生成 instanceOf 检测器
 *
 * @param  {Function|Class} expectedClass 期待的类
 * @return {Function}
 */
function createInstanceOfChecker(expectedClass) {

    return createChainableChecker(function (data, dataName, componentName, fullDataName) {

        var dataValue = data[dataName];

        if (dataValue instanceof expectedClass) {
            return;
        }

        var dataValueClassName = dataValue.constructor && dataValue.constructor.name
            ? dataValue.constructor.name
            : ANONYMOUS_CLASS_NAME;

        var expectedClassName = expectedClass.name || ANONYMOUS_CLASS_NAME;

        throw new Error('[SAN ERROR] '
            + 'Invalid ' + componentName + ' data `' + fullDataName + '` of type'
            + '(' + dataValueClassName + ' supplied to ' + componentName + ', '
            + 'expected instance of ' + expectedClassName + ')'
        );


    });

}

/**
 * 生成 shape 校验器
 *
 * @param  {Object} shapeTypes shape 校验规则
 * @return {Function}
 */
function createShapeChecker(shapeTypes) {

    return createChainableChecker(function (data, dataName, componentName, fullDataName) {

        if (getDataType(shapeTypes) !== 'object') {
            throw new Error('[SAN ERROR] '
                + 'Data `' + fullDataName + '` of `' + componentName + '` has invalid '
                + 'DataType notation inside `shape`, expected `object`'
            );
        }

        var dataValue = data[dataName];
        var dataType = getDataType(dataValue);

        if (dataType !== 'object') {
            throw new Error('[SAN ERROR] '
                + 'Invalid ' + componentName + ' data `' + fullDataName + '` of type'
                + '(' + dataType + ' supplied to ' + componentName + ', '
                + 'expected object)'
            );
        }

        for (var shapeKeyName in shapeTypes) {
            if (shapeTypes.hasOwnProperty(shapeKeyName)) {
                var checker = shapeTypes[shapeKeyName];
                if (typeof checker === 'function') {
                    checker(dataValue, shapeKeyName, componentName, fullDataName + '.' + shapeKeyName);
                }
            }
        }

    });

}

/**
 * 生成 oneOf 校验器
 *
 * @param  {Array} expectedEnumValues 期待的枚举值
 * @return {Function}
 */
function createOneOfChecker(expectedEnumValues) {

    return createChainableChecker(function (data, dataName, componentName, fullDataName) {

        if (getDataType(expectedEnumValues) !== 'array') {
            throw new Error('[SAN ERROR] '
                + 'Data `' + fullDataName + '` of `' + componentName + '` has invalid '
                + 'DataType notation inside `oneOf`, array is expected.'
            );
        }

        var dataValue = data[dataName];

        for (var i = 0, len = expectedEnumValues.length; i < len; i++) {
            if (dataValue === expectedEnumValues[i]) {
                return;
            }
        }

        throw new Error('[SAN ERROR] '
            + 'Invalid ' + componentName + ' data `' + fullDataName + '` of value'
            + '(`' + dataValue + '` supplied to ' + componentName + ', '
            + 'expected one of ' + expectedEnumValues.join(',') + ')'
        );

    });

}

/**
 * 生成 oneOfType 校验器
 *
 * @param  {Array<Function>} expectedEnumOfTypeValues 期待的枚举类型
 * @return {Function}
 */
function createOneOfTypeChecker(expectedEnumOfTypeValues) {

    return createChainableChecker(function (data, dataName, componentName, fullDataName) {

        if (getDataType(expectedEnumOfTypeValues) !== 'array') {
            throw new Error('[SAN ERROR] '
                + 'Data `' + dataName + '` of `' + componentName + '` has invalid '
                + 'DataType notation inside `oneOf`, array is expected.'
            );
        }

        var dataValue = data[dataName];

        for (var i = 0, len = expectedEnumOfTypeValues.length; i < len; i++) {

            var checker = expectedEnumOfTypeValues[i];

            if (typeof checker !== 'function') {
                continue;
            }

            try {
                checker(data, dataName, componentName, fullDataName);
                // 如果 checker 完成校验没报错，那就返回了
                return;
            }
            catch (e) {
                // 如果有错误，那么应该把错误吞掉
            }

        }

        // 所有的可接受 type 都失败了，才丢一个异常
        throw new Error('[SAN ERROR] '
            + 'Invalid ' + componentName + ' data `' + dataName + '` of value'
            + '(`' + dataValue + '` supplied to ' + componentName + ')'
        );

    });

}

/**
 * 生成 objectOf 校验器
 *
 * @param  {Function} typeChecker 对象属性值校验器
 * @return {Function}
 */
function createObjectOfChecker(typeChecker) {

    return createChainableChecker(function (data, dataName, componentName, fullDataName) {

        if (typeof typeChecker !== 'function') {
            throw new Error('[SAN ERROR] '
                + 'Data `' + dataName + '` of `' + componentName + '` has invalid '
                + 'DataType notation inside `objectOf`, expected function'
            );
        }

        var dataValue = data[dataName];
        var dataType = getDataType(dataValue);

        if (dataType !== 'object') {
            throw new Error('[SAN ERROR] '
                + 'Invalid ' + componentName + ' data `' + dataName + '` of type'
                + '(' + dataType + ' supplied to ' + componentName + ', '
                + 'expected object)'
            );
        }

        for (var dataKeyName in dataValue) {
            if (dataValue.hasOwnProperty(dataKeyName)) {
                typeChecker(
                    dataValue,
                    dataKeyName,
                    componentName,
                    fullDataName + '.' + dataKeyName
                );
            }
        }


    });

}

/**
 * 生成 exact 校验器
 *
 * @param  {Object} shapeTypes object 形态定义
 * @return {Function}
 */
function createExactChecker(shapeTypes) {

    return createChainableChecker(function (data, dataName, componentName, fullDataName, secret) {

        if (getDataType(shapeTypes) !== 'object') {
            throw new Error('[SAN ERROR] '
                + 'Data `' + dataName + '` of `' + componentName + '` has invalid '
                + 'DataType notation inside `exact`'
            );
        }

        var dataValue = data[dataName];
        var dataValueType = getDataType(dataValue);

        if (dataValueType !== 'object') {
            throw new Error('[SAN ERROR] '
                + 'Invalid data `' + fullDataName + '` of type `' + dataValueType + '`'
                + '(supplied to ' + componentName + ', expected `object`)'
            );
        }

        var allKeys = {};

        // 先合入 shapeTypes
        extend(allKeys, shapeTypes);
        // 再合入 dataValue
        extend(allKeys, dataValue);
        // 保证 allKeys 的类型正确

        for (var key in allKeys) {
            if (allKeys.hasOwnProperty(key)) {
                var checker = shapeTypes[key];

                // dataValue 中有一个多余的数据项
                if (!checker) {
                    throw new Error('[SAN ERROR] '
                        + 'Invalid data `' + fullDataName + '` key `' + key + '` '
                        + 'supplied to `' + componentName + '`. '
                        + '(`' + key + '` is not defined in `DataTypes.exact`)'
                    );
                }

                if (!(key in dataValue)) {
                    throw new Error('[SAN ERROR] '
                        + 'Invalid data `' + fullDataName + '` key `' + key + '` '
                        + 'supplied to `' + componentName + '`. '
                        + '(`' + key + '` is marked `required` in `DataTypes.exact`)'
                    );
                }

                checker(
                    dataValue,
                    key,
                    componentName,
                    fullDataName + '.' + key,
                    secret
                );

            }
        }

    });

}
// #[end]



/* eslint-disable fecs-valid-var-jsdoc */
var DataTypes = {
    array: createChainableChecker(empty),
    object: createChainableChecker(empty),
    func: createChainableChecker(empty),
    string: createChainableChecker(empty),
    number: createChainableChecker(empty),
    bool: createChainableChecker(empty),
    symbol: createChainableChecker(empty),
    any: createChainableChecker,
    arrayOf: createChainableChecker,
    instanceOf: createChainableChecker,
    shape: createChainableChecker,
    oneOf: createChainableChecker,
    oneOfType: createChainableChecker,
    objectOf: createChainableChecker,
    exact: createChainableChecker
};

// #[begin] error
DataTypes = {

    any: createChainableChecker(empty),

    // 类型检测
    array: createPrimaryTypeChecker('array'),
    object: createPrimaryTypeChecker('object'),
    func: createPrimaryTypeChecker('function'),
    string: createPrimaryTypeChecker('string'),
    number: createPrimaryTypeChecker('number'),
    bool: createPrimaryTypeChecker('boolean'),
    symbol: createPrimaryTypeChecker('symbol'),

    // 复合类型检测
    arrayOf: createArrayOfChecker,
    instanceOf: createInstanceOfChecker,
    shape: createShapeChecker,
    oneOf: createOneOfChecker,
    oneOfType: createOneOfTypeChecker,
    objectOf: createObjectOfChecker,
    exact: createExactChecker

};
/* eslint-enable fecs-valid-var-jsdoc */
// #[end]


// module.exports = DataTypes;


/**
 * @file 创建数据检测函数
 * @author leon<ludafa@outlook.com>
 */


// #[begin] error

/**
 * 创建数据检测函数
 *
 * @param  {Object} dataTypes     数据格式
 * @param  {string} componentName 组件名
 * @return {Function}
 */
function createDataTypesChecker(dataTypes, componentName) {

    /**
     * 校验 data 是否满足 data types 的格式
     *
     * @param  {*} data 数据
     */
    return function (data) {

        for (var dataTypeName in dataTypes) {

            if (dataTypes.hasOwnProperty(dataTypeName)) {

                var dataTypeChecker = dataTypes[dataTypeName];

                if (typeof dataTypeChecker !== 'function') {
                    throw new Error('[SAN ERROR] '
                        + componentName + ':' + dataTypeName + ' is invalid; '
                        + 'it must be a function, usually from san.DataTypes'
                    );
                }

                dataTypeChecker(
                    data,
                    dataTypeName,
                    componentName,
                    dataTypeName
                );


            }
        }

    };

}

// #[end]

// module.exports = createDataTypesChecker;


/**
 * @file 字符串源码读取类
 * @author errorrik(errorrik@gmail.com)
 */


/**
 * 字符串源码读取类，用于模板字符串解析过程
 *
 * @class
 * @param {string} source 要读取的字符串
 */
function Walker(source) {
    this.source = source;
    this.len = this.source.length;
    this.index = 0;
}

/**
 * 获取当前字符码
 *
 * @return {number}
 */
Walker.prototype.currentCode = function () {
    return this.charCode(this.index);
};

/**
 * 截取字符串片段
 *
 * @param {number} start 起始位置
 * @param {number} end 结束位置
 * @return {string}
 */
Walker.prototype.cut = function (start, end) {
    return this.source.slice(start, end);
};

/**
 * 向前读取字符
 *
 * @param {number} distance 读取字符数
 */
Walker.prototype.go = function (distance) {
    this.index += distance;
};

/**
 * 读取下一个字符，返回下一个字符的 code
 *
 * @return {number}
 */
Walker.prototype.nextCode = function () {
    this.go(1);
    return this.currentCode();
};

/**
 * 获取相应位置字符的 code
 *
 * @param {number} index 字符位置
 * @return {number}
 */
Walker.prototype.charCode = function (index) {
    return this.source.charCodeAt(index);
};

/**
 * 向前读取字符，直到遇到指定字符再停止
 *
 * @param {number=} charCode 指定字符的code
 * @return {boolean} 当指定字符时，返回是否碰到指定的字符
 */
Walker.prototype.goUntil = function (charCode) {
    var code;
    while (this.index < this.len && (code = this.currentCode())) {
        switch (code) {
            case 32:
            case 9:
                this.index++;
                break;
            default:
                if (code === charCode) {
                    this.index++;
                    return 1;
                }
                return;
        }
    }
};

/**
 * 向前读取符合规则的字符片段，并返回规则匹配结果
 *
 * @param {RegExp} reg 字符片段的正则表达式
 * @return {Array}
 */
Walker.prototype.match = function (reg) {
    reg.lastIndex = this.index;

    var match = reg.exec(this.source);
    if (match) {
        this.index = reg.lastIndex;
    }

    return match;
};

// exports = module.exports = Walker;



/**
 * @file 模板解析生成的抽象节点
 * @author errorrik(errorrik@gmail.com)
 */

/**
 * 创建模板解析生成的抽象节点
 *
 * @param {Object=} options 节点参数
 * @param {string=} options.tagName 标签名
 * @param {ANode=} options.parent 父节点
 * @param {boolean=} options.textExpr 文本节点表达式对象
 * @return {Object}
 */
function createANode(options) {
    options = options || {};

    if (!options.textExpr) {
        options.directives = options.directives || {};
        options.props = options.props || [];
        options.events = options.events || [];
        options.children = options.children || [];
    }

    return options;
}

// exports = module.exports = createANode;


/**
 * @file 把 kebab case 字符串转换成 camel case
 * @author errorrik(errorrik@gmail.com)
 */

/**
 * 把 kebab case 字符串转换成 camel case
 *
 * @param {string} source 源字符串
 * @return {string}
 */
function kebab2camel(source) {
    return source.replace(/-([a-z])/g, function (match, alpha) {
        return alpha.toUpperCase();
    });
}

// exports = module.exports = kebab2camel;


/**
 * @file 表达式类型
 * @author errorrik(errorrik@gmail.com)
 */

/**
 * 表达式类型
 *
 * @const
 * @type {Object}
 */
var ExprType = {
    STRING: 1,
    NUMBER: 2,
    BOOL: 3,
    ACCESSOR: 4,
    INTERP: 5,
    CALL: 6,
    TEXT: 7,
    BINARY: 8,
    UNARY: 9,
    TERTIARY: 10
};

// exports = module.exports = ExprType;


/**
 * @file 创建访问表达式对象
 * @author errorrik(errorrik@gmail.com)
 */

// var ExprType = require('./expr-type');

/**
 * 创建访问表达式对象
 *
 * @param {Array} paths 访问路径
 * @return {Object}
 */
function createAccessor(paths) {
    return {
        type: ExprType.ACCESSOR,
        paths: paths
    };
}

// exports = module.exports = createAccessor;


/**
 * @file 读取字符串
 * @author errorrik(errorrik@gmail.com)
 */


// var ExprType = require('./expr-type');

/**
 * 读取字符串
 *
 * @param {Walker} walker 源码读取对象
 * @return {Object}
 */
function readString(walker) {
    var startCode = walker.currentCode();
    var startIndex = walker.index;
    var charCode;

    walkLoop: while ((charCode = walker.nextCode())) {
        switch (charCode) {
            case 92: // \
                walker.go(1);
                break;
            case startCode:
                walker.go(1);
                break walkLoop;
        }
    }

    var literal = walker.cut(startIndex, walker.index);
    return {
        type: ExprType.STRING,
        value: (new Function('return ' + literal))()
    };
}

// exports = module.exports = readString;


/**
 * @file 读取数字
 * @author errorrik(errorrik@gmail.com)
 */


// var ExprType = require('./expr-type');

/**
 * 读取数字
 *
 * @inner
 * @param {Walker} walker 源码读取对象
 * @return {Object}
 */
function readNumber(walker) {
    var match = walker.match(/\s*(-?[0-9]+(.[0-9]+)?)/g);

    return {
        type: ExprType.NUMBER,
        value: match[1] - 0
    };
}

// exports = module.exports = readNumber;


/**
 * @file 读取ident
 * @author errorrik(errorrik@gmail.com)
 */

/**
 * 读取ident
 *
 * @inner
 * @param {Walker} walker 源码读取对象
 * @return {string}
 */
function readIdent(walker) {
    var match = walker.match(/\s*([\$0-9a-z_]+)/ig);
    return match[1];
}

// exports = module.exports = readIdent;


/**
 * @file 读取三元表达式
 * @author errorrik(errorrik@gmail.com)
 */

// var ExprType = require('./expr-type');
// var readLogicalORExpr = require('./read-logical-or-expr');

/**
 * 读取三元表达式
 *
 * @param {Walker} walker 源码读取对象
 * @return {Object}
 */
function readTertiaryExpr(walker) {
    var conditional = readLogicalORExpr(walker);
    walker.goUntil();

    if (walker.currentCode() === 63) { // ?
        walker.go(1);
        var yesExpr = readTertiaryExpr(walker);
        walker.goUntil();

        if (walker.currentCode() === 58) { // :
            walker.go(1);
            return {
                type: ExprType.TERTIARY,
                segs: [
                    conditional,
                    yesExpr,
                    readTertiaryExpr(walker)
                ]
            };
        }
    }

    return conditional;
}

// exports = module.exports = readTertiaryExpr;


/**
 * @file 读取访问表达式
 * @author errorrik(errorrik@gmail.com)
 */

// var ExprType = require('./expr-type');
// var createAccessor = require('./create-accessor');
// var readIdent = require('./read-ident');
// var readTertiaryExpr = require('./read-tertiary-expr');

/**
 * 读取访问表达式
 *
 * @param {Walker} walker 源码读取对象
 * @return {Object}
 */
function readAccessor(walker) {
    var firstSeg = readIdent(walker);
    switch (firstSeg) {
        case 'true':
        case 'false':
            return {
                type: ExprType.BOOL,
                value: firstSeg === 'true'
            };
    }

    var result = createAccessor([
        {
            type: ExprType.STRING,
            value: firstSeg
        }
    ]);

    /* eslint-disable no-constant-condition */
    accessorLoop: while (1) {
    /* eslint-enable no-constant-condition */

        switch (walker.currentCode()) {
            case 46: // .
                walker.go(1);

                // ident as string
                result.paths.push({
                    type: ExprType.STRING,
                    value: readIdent(walker)
                });
                break;

            case 91: // [
                walker.go(1);
                result.paths.push(readTertiaryExpr(walker));
                walker.goUntil(93); // ]
                break;

            default:
                break accessorLoop;
        }
    }

    return result;
}

// exports = module.exports = readAccessor;


/**
 * @file 读取括号表达式
 * @author errorrik(errorrik@gmail.com)
 */

// var readTertiaryExpr = require('./read-tertiary-expr');

/**
 * 读取括号表达式
 *
 * @param {Walker} walker 源码读取对象
 * @return {Object}
 */
function readParenthesizedExpr(walker) {
    walker.go(1);
    var expr = readTertiaryExpr(walker);
    walker.goUntil(41); // )

    return expr;
}

// exports = module.exports = readParenthesizedExpr;


/**
 * @file 读取一元表达式
 * @author errorrik(errorrik@gmail.com)
 */

// var ExprType = require('./expr-type');
// var readString = require('./read-string');
// var readNumber = require('./read-number');
// var readAccessor = require('./read-accessor');
// var readParenthesizedExpr = require('./read-parenthesized-expr');


/**
 * 读取一元表达式
 *
 * @param {Walker} walker 源码读取对象
 * @return {Object}
 */
function readUnaryExpr(walker) {
    walker.goUntil();

    switch (walker.currentCode()) {
        case 33: // !
            walker.go(1);
            return {
                type: ExprType.UNARY,
                expr: readUnaryExpr(walker)
            };
        case 34: // "
        case 39: // '
            return readString(walker);
        case 45: // number
        case 48:
        case 49:
        case 50:
        case 51:
        case 52:
        case 53:
        case 54:
        case 55:
        case 56:
        case 57:
            return readNumber(walker);
        case 40: // (
            return readParenthesizedExpr(walker);
    }

    return readAccessor(walker);
}

// exports = module.exports = readUnaryExpr;


/**
 * @file 读取乘法表达式
 * @author errorrik(errorrik@gmail.com)
 */

// var ExprType = require('./expr-type');
// var readUnaryExpr = require('./read-unary-expr');

/**
 * 读取乘法表达式
 *
 * @param {Walker} walker 源码读取对象
 * @return {Object}
 */
function readMultiplicativeExpr(walker) {
    var expr = readUnaryExpr(walker);
    walker.goUntil();

    var code = walker.currentCode();
    switch (code) {
        case 37: // %
        case 42: // *
        case 47: // /
            walker.go(1);
            return {
                type: ExprType.BINARY,
                operator: code,
                segs: [expr, readMultiplicativeExpr(walker)]
            };
    }

    return expr;
}

// exports = module.exports = readMultiplicativeExpr;


/**
 * @file 读取加法表达式
 * @author errorrik(errorrik@gmail.com)
 */

// var ExprType = require('./expr-type');
// var readMultiplicativeExpr = require('./read-multiplicative-expr');


/**
 * 读取加法表达式
 *
 * @param {Walker} walker 源码读取对象
 * @return {Object}
 */
function readAdditiveExpr(walker) {
    var expr = readMultiplicativeExpr(walker);
    walker.goUntil();

    var code = walker.currentCode();
    switch (code) {
        case 43: // +
        case 45: // -
            walker.go(1);
            return {
                type: ExprType.BINARY,
                operator: code,
                segs: [expr, readAdditiveExpr(walker)]
            };
    }

    return expr;
}

// exports = module.exports = readAdditiveExpr;


/**
 * @file 读取关系判断表达式
 * @author errorrik(errorrik@gmail.com)
 */

// var ExprType = require('./expr-type');
// var readAdditiveExpr = require('./read-additive-expr');

/**
 * 读取关系判断表达式
 *
 * @param {Walker} walker 源码读取对象
 * @return {Object}
 */
function readRelationalExpr(walker) {
    var expr = readAdditiveExpr(walker);
    walker.goUntil();

    var code = walker.currentCode();
    switch (code) {
        case 60: // <
        case 62: // >
            if (walker.nextCode() === 61) {
                code += 61;
                walker.go(1);
            }

            return {
                type: ExprType.BINARY,
                operator: code,
                segs: [expr, readRelationalExpr(walker)]
            };
    }

    return expr;
}

// exports = module.exports = readRelationalExpr;


/**
 * @file 读取相等比对表达式
 * @author errorrik(errorrik@gmail.com)
 */

// var ExprType = require('./expr-type');
// var readRelationalExpr = require('./read-relational-expr');

/**
 * 读取相等比对表达式
 *
 * @param {Walker} walker 源码读取对象
 * @return {Object}
 */
function readEqualityExpr(walker) {
    var expr = readRelationalExpr(walker);
    walker.goUntil();

    var code = walker.currentCode();
    switch (code) {
        case 61: // =
        case 33: // !
            if (walker.nextCode() === 61) {
                code += 61;
                if (walker.nextCode() === 61) {
                    code += 61;
                    walker.go(1);
                }

                return {
                    type: ExprType.BINARY,
                    operator: code,
                    segs: [expr, readEqualityExpr(walker)]
                };
            }

            walker.go(-1);
    }

    return expr;
}

// exports = module.exports = readEqualityExpr;


/**
 * @file 读取逻辑与表达式
 * @author errorrik(errorrik@gmail.com)
 */

// var ExprType = require('./expr-type');
// var readEqualityExpr = require('./read-equality-expr');

/**
 * 读取逻辑与表达式
 *
 * @param {Walker} walker 源码读取对象
 * @return {Object}
 */
function readLogicalANDExpr(walker) {
    var expr = readEqualityExpr(walker);
    walker.goUntil();

    if (walker.currentCode() === 38) { // &
        if (walker.nextCode() === 38) {
            walker.go(1);
            return {
                type: ExprType.BINARY,
                operator: 76,
                segs: [expr, readLogicalANDExpr(walker)]
            };
        }

        walker.go(-1);
    }

    return expr;
}

// exports = module.exports = readLogicalANDExpr;


/**
 * @file 读取逻辑或表达式
 * @author errorrik(errorrik@gmail.com)
 */

// var ExprType = require('./expr-type');
// var readLogicalANDExpr = require('./read-logical-and-expr');

/**
 * 读取逻辑或表达式
 *
 * @param {Walker} walker 源码读取对象
 * @return {Object}
 */
function readLogicalORExpr(walker) {
    var expr = readLogicalANDExpr(walker);
    walker.goUntil();

    if (walker.currentCode() === 124) { // |
        if (walker.nextCode() === 124) {
            walker.go(1);
            return {
                type: ExprType.BINARY,
                operator: 248,
                segs: [expr, readLogicalORExpr(walker)]
            };
        }

        walker.go(-1);
    }

    return expr;
}

// exports = module.exports = readLogicalORExpr;


/**
 * @file 解析表达式
 * @author errorrik(errorrik@gmail.com)
 */

// var Walker = require('./walker');
// var readTertiaryExpr = require('./read-tertiary-expr');

/**
 * 解析表达式
 *
 * @param {string} source 源码
 * @return {Object}
 */
function parseExpr(source) {
    if (typeof source === 'object' && source.type) {
        return source;
    }

    var expr = readTertiaryExpr(new Walker(source));
    expr.raw = source;
    return expr;
}

// exports = module.exports = parseExpr;


/**
 * @file 读取调用
 * @author errorrik(errorrik@gmail.com)
 */

// var ExprType = require('./expr-type');
// var readAccessor = require('./read-accessor');
// var readTertiaryExpr = require('./read-tertiary-expr');

/**
 * 读取调用
 *
 * @param {Walker} walker 源码读取对象
 * @param {Array=} defaultArgs 默认参数
 * @return {Object}
 */
function readCall(walker, defaultArgs) {
    walker.goUntil();
    var ident = readAccessor(walker);
    var args = [];

    if (walker.goUntil(40)) { // (
        while (!walker.goUntil(41)) { // )
            args.push(readTertiaryExpr(walker));
            walker.goUntil(44); // ,
        }
    }
    else if (defaultArgs) {
        args = defaultArgs;
    }

    return {
        type: ExprType.CALL,
        name: ident,
        args: args
    };
}

// exports = module.exports = readCall;


/**
 * @file 解析调用
 * @author errorrik(errorrik@gmail.com)
 */


// var Walker = require('./walker');
// var readCall = require('./read-call');

/**
 * 解析调用
 *
 * @param {string} source 源码
 * @param {Array=} defaultArgs 默认参数
 * @return {Object}
 */
function parseCall(source, defaultArgs) {
    var expr = readCall(new Walker(source), defaultArgs);
    expr.raw = source;
    return expr;
}

// exports = module.exports = parseCall;


/**
 * @file 解析插值替换
 * @author errorrik(errorrik@gmail.com)
 */

// var Walker = require('./walker');
// var readTertiaryExpr = require('./read-tertiary-expr');
// var ExprType = require('./expr-type');
// var readCall = require('./read-call');

/**
 * 解析插值替换
 *
 * @param {string} source 源码
 * @return {Object}
 */
function parseInterp(source) {
    var walker = new Walker(source);

    var interp = {
        type: ExprType.INTERP,
        expr: readTertiaryExpr(walker),
        filters: [],
        raw: source
    };

    while (walker.goUntil(124)) { // |
        var callExpr = readCall(walker);
        switch (callExpr.name.paths[0].value) {
            case 'html':
                break;
            case 'raw':
                interp.original = 1;
                break;
            default:
                interp.filters.push(callExpr);
        }
    }

    return interp;
}

// exports = module.exports = parseInterp;


/**
 * @file 解析文本
 * @author errorrik(errorrik@gmail.com)
 */

// var Walker = require('./walker');
// var ExprType = require('./expr-type');
// var parseInterp = require('./parse-interp');

/**
 * 对字符串进行可用于new RegExp的字面化
 *
 * @inner
 * @param {string} source 需要字面化的字符串
 * @return {string} 字符串字面化结果
 */
function regexpLiteral(source) {
    return source.replace(/[\^\[\]\$\(\)\{\}\?\*\.\+\\]/g, function (c) {
        return '\\' + c;
    });
}

/**
 * 解析文本
 *
 * @param {string} source 源码
 * @param {Array?} delimiters 分隔符。默认为 ['{{', '}}']
 * @return {Object}
 */
function parseText(source, delimiters) {
    delimiters = delimiters || ['{{', '}}'];
    var exprStartReg = new RegExp(
        regexpLiteral(delimiters[0]) + '\\s*([\\s\\S]+?)\\s*' + regexpLiteral(delimiters[1]),
        'ig'
    );

    var exprMatch;

    var walker = new Walker(source);
    var beforeIndex = 0;

    var expr = {
        type: ExprType.TEXT,
        segs: []
    };

    function pushStringToSeg(text) {
        text && expr.segs.push({
            type: ExprType.STRING,
            value: text
        });
    }

    while ((exprMatch = walker.match(exprStartReg)) != null) {
        pushStringToSeg(walker.cut(
            beforeIndex,
            walker.index - exprMatch[0].length
        ));

        var interp = parseInterp(exprMatch[1]);
        expr.original = expr.original || interp.original;

        expr.segs.push(interp);
        beforeIndex = walker.index;
    }

    pushStringToSeg(walker.cut(beforeIndex));



    if (expr.segs.length === 1 && expr.segs[0].type === ExprType.STRING) {
        expr.value = expr.segs[0].value;
    }

    return expr;
}

// exports = module.exports = parseText;


/**
 * @file 解析指令
 * @author errorrik(errorrik@gmail.com)
 */


// var Walker = require('./walker');
// var parseExpr = require('./parse-expr');
// var parseCall = require('./parse-call');
// var parseText = require('./parse-text');
// var readAccessor = require('./read-accessor');

/**
 * 指令解析器
 *
 * @inner
 * @type {Object}
 */
var directiveParsers = {
    'for': function (value) {
        var walker = new Walker(value);
        var match = walker.match(/^\s*([\$0-9a-z_]+)(\s*,\s*([\$0-9a-z_]+))?\s+in\s+/ig);

        if (match) {
            return {
                item: parseExpr(match[1]),
                index: parseExpr(match[3] || '$index'),
                value: readAccessor(walker)
            };
        }

        // #[begin] error
        throw new Error('[SAN FATAL] for syntax error: ' + value);
        // #[end]
    },

    'ref': function (value, options) {
        return {
            value: parseText(value, options.delimiters)
        };
    },

    'if': function (value) {
        return {
            value: parseExpr(value.replace(/(^\{\{|\}\}$)/g, ''))
        };
    },

    'elif': function (value) {
        return {
            value: parseExpr(value.replace(/(^\{\{|\}\}$)/g, ''))
        };
    },

    'else': function (value) {
        return {
            value: {}
        };
    },

    'html': function (value) {
        return {
            value: parseExpr(value.replace(/(^\{\{|\}\}$)/g, ''))
        };
    },

    'transition': function (value) {
        return {
            value: parseCall(value)
        };
    }
};

/**
 * 解析指令
 *
 * @param {ANode} aNode 抽象节点
 * @param {string} name 指令名称
 * @param {string} value 指令值
 * @param {Object} options 解析参数
 * @param {Array?} options.delimiters 插值分隔符列表
 */
function parseDirective(aNode, name, value, options) {
    var parser = directiveParsers[name];

    if (parser) {
        (aNode.directives[name] = parser(value, options)).raw = value;
    }
}

// exports = module.exports = parseDirective;


/**
 * @file 对属性信息进行处理
 * @author errorrik(errorrik@gmail.com)
 */

// var ExprType = require('../parser/expr-type');

/**
 * 对属性信息进行处理
 * 对组件的 binds 或者特殊的属性（比如 input 的 checked）需要处理
 *
 * 扁平化：
 * 当 text 解析只有一项时，要么就是 string，要么就是 interp
 * interp 有可能是绑定到组件属性的表达式，不希望被 eval text 成 string
 * 所以这里做个处理，只有一项时直接抽出来
 *
 * bool属性：
 * 当绑定项没有值时，默认为true
 *
 * @param {Object} prop 属性对象
 */
function postProp(prop) {
    var expr = prop.expr;

    if (expr.type === ExprType.TEXT) {
        switch (expr.segs.length) {
            case 0:
                prop.expr = {
                    type: ExprType.BOOL,
                    value: true
                };
                break;

            case 1:
                expr = prop.expr = expr.segs[0];
                if (expr.type === ExprType.INTERP && expr.filters.length === 0) {
                    prop.expr = expr.expr;
                }
        }
    }
}

// exports = module.exports = postProp;


/**
 * @file 解析抽象节点属性
 * @author errorrik(errorrik@gmail.com)
 */

// var each = require('../util/each');
// var kebab2camel = require('../util/kebab2camel');
// var ExprType = require('./expr-type');
// var createAccessor = require('./create-accessor');
// var parseExpr = require('./parse-expr');
// var parseCall = require('./parse-call');
// var parseText = require('./parse-text');
// var parseDirective = require('./parse-directive');
// var postProp = require('./post-prop');

var DEFAULT_EVENT_ARGS = [
    createAccessor([
        {type: ExprType.STRING, value: '$event'}
    ])
];

/**
 * 解析抽象节点属性
 *
 * @param {ANode} aNode 抽象节点
 * @param {string} name 属性名称
 * @param {string} value 属性值
 * @param {Object} options 解析参数
 * @param {Array?} options.delimiters 插值分隔符列表
 */
function integrateAttr(aNode, name, value, options) {
    var prefixIndex = name.indexOf('-');
    var realName;
    var prefix;

    if (prefixIndex > 0) {
        prefix = name.slice(0, prefixIndex);
        realName = name.slice(prefixIndex + 1);
    }

    switch (prefix) {
        case 'on':
            var event = {
                name: realName,
                modifier: {}
            };
            aNode.events.push(event);

            var colonIndex;
            while ((colonIndex = value.indexOf(':')) > 0) {
                var modifier = value.slice(0, colonIndex);

                // eventHandler("dd:aa") 这种情况不能算modifier，需要辨识
                if (!/^[a-z]+$/i.test(modifier)) {
                    break;
                }

                event.modifier[modifier] = true;
                value = value.slice(colonIndex + 1);
            }

            event.expr = parseCall(value, DEFAULT_EVENT_ARGS);
            break;

        case 'san':
        case 's':
            parseDirective(aNode, realName, value, options);
            break;

        case 'prop':
            integrateProp(aNode, realName, value, options);
            break;

        case 'var':
            if (!aNode.vars) {
                aNode.vars = [];
            }

            realName = kebab2camel(realName);
            aNode.vars.push({
                name: realName,
                expr: parseExpr(value.replace(/(^\{\{|\}\}$)/g, ''))
            });
            break;

        default:
            integrateProp(aNode, name, value, options);
    }
}

/**
 * 解析抽象节点绑定属性
 *
 * @inner
 * @param {ANode} aNode 抽象节点
 * @param {string} name 属性名称
 * @param {string} value 属性值
 * @param {Object} options 解析参数
 * @param {Array?} options.delimiters 插值分隔符列表
 */
function integrateProp(aNode, name, value, options) {
    // parse two way binding, e.g. value="{=ident=}"
    var xMatch = value.match(/^\{=\s*(.*?)\s*=\}$/);

    if (xMatch) {
        aNode.props.push({
            name: name,
            expr: parseExpr(xMatch[1]),
            x: 1,
            raw: value
        });

        return;
    }

    // parse normal prop
    var prop = {
        name: name,
        expr: parseText(value, options.delimiters),
        raw: value
    };

    // 这里不能把只有一个插值的属性抽取
    // 因为插值里的值可能是html片段，容易被注入
    // 组件的数据绑定在组件init时做抽取
    switch (name) {
        case 'class':
        case 'style':
            each(prop.expr.segs, function (seg) {
                if (seg.type === ExprType.INTERP) {
                    seg.filters.push({
                        type: ExprType.CALL,
                        name: createAccessor([
                            {
                                type: ExprType.STRING,
                                value: '_' + prop.name
                            }
                        ]),
                        args: []
                    });
                }
            });
            break;

        case 'checked':
            if (aNode.tagName === 'input') {
                postProp(prop);
            }
            break;
    }

    aNode.props.push(prop);
}


// exports = module.exports = integrateAttr;


/**
 * @file 解析模板
 * @author errorrik(errorrik@gmail.com)
 */


// var createANode = require('./create-a-node');
// var Walker = require('./walker');
// var integrateAttr = require('./integrate-attr');
// var parseText = require('./parse-text');
// var autoCloseTags = require('../browser/auto-close-tags');

// #[begin] error
function getXPath(stack, currentTagName) {
    var path = ['ROOT'];
    for (var i = 1, len = stack.length; i < len; i++) {
        path.push(stack[i].tagName);
    }
    if (currentTagName) {
        path.push(currentTagName);
    }
    return path.join('>');
}
// #[end]

/* eslint-disable fecs-max-statements */

/**
 * 解析 template
 *
 * @param {string} source template源码
 * @param {Object?} options 解析参数
 * @param {string?} options.trimWhitespace 空白文本的处理策略。none|blank|all
 * @param {Array?} options.delimiters 插值分隔符列表
 * @return {ANode}
 */
function parseTemplate(source, options) {
    options = options || {};
    options.trimWhitespace = options.trimWhitespace || 'none';

    var rootNode = createANode();

    if (typeof source !== 'string') {
        return rootNode;
    }

    source = source.replace(/<!--([\s\S]*?)-->/mg, '').replace(/(^\s+|\s+$)/g, '');
    var walker = new Walker(source);

    var tagReg = /<(\/)?([a-z0-9-]+)\s*/ig;
    var attrReg = /([-:0-9a-z\(\)\[\]]+)(\s*=\s*(['"])([^\3]*?)\3)?\s*/ig;

    var tagMatch;
    var currentNode = rootNode;
    var stack = [rootNode];
    var stackIndex = 0;
    var beforeLastIndex = 0;

    while ((tagMatch = walker.match(tagReg)) != null) {
        var tagEnd = tagMatch[1];
        var tagName = tagMatch[2].toLowerCase();

        pushTextNode(source.slice(
            beforeLastIndex,
            walker.index - tagMatch[0].length
        ));

        // 62: >
        // 47: /
        // 处理 </xxxx >
        if (tagEnd && walker.currentCode() === 62) {
            // 满足关闭标签的条件时，关闭标签
            // 向上查找到对应标签，找不到时忽略关闭
            var closeIndex = stackIndex;

            // #[begin] error
            // 如果正在闭合一个自闭合的标签，例如 </input>，报错
            if (autoCloseTags[tagName]) {
                throw new Error(''
                    + '[SAN ERROR] ' + getXPath(stack, tagName) + ' is a `auto closed` tag, '
                    + 'so it cannot be closed with </' + tagName + '>'
                );
            }

            // 如果关闭的 tag 和当前打开的不一致，报错
            if (
                stack[closeIndex].tagName !== tagName
                // 这里要把 table 自动添加 tbody 的情况给去掉
                && !(tagName === 'table' && stack[closeIndex].tagName === 'tbody')
            ) {
                throw new Error('[SAN ERROR] ' + getXPath(stack) + ' is closed with ' + tagName);
            }
            // #[end]

            while (closeIndex > 0 && stack[closeIndex].tagName !== tagName) {
                closeIndex--;
            }

            if (closeIndex > 0) {
                stack.length = closeIndex;
                stackIndex = closeIndex - 1;
                currentNode = stack[stackIndex];
            }
            walker.go(1);
        }

        // #[begin] error
        // 处理 </xxx 非正常闭合标签
        else if (tagEnd) {

            // 如果闭合标签时，匹配后的下一个字符是 <，即下一个标签的开始，那么当前闭合标签未闭合
            if (walker.currentCode() === 60) {
                throw new Error(''
                    + '[SAN ERROR] ' + getXPath(stack)
                    + '\'s close tag not closed'
                );
            }

            // 闭合标签有属性
            throw new Error(''
                + '[SAN ERROR] ' + getXPath(stack)
                + '\'s close tag has attributes'
            );

        }
        // #[end]

        else if (!tagEnd) {
            var aElement = createANode({
                tagName: tagName
            });
            var tagClose = autoCloseTags[tagName];

            // 解析 attributes

            /* eslint-disable no-constant-condition */
            while (1) {
            /* eslint-enable no-constant-condition */

                var nextCharCode = walker.currentCode();

                // 标签结束时跳出 attributes 读取
                // 标签可能直接结束或闭合结束
                if (nextCharCode === 62) {
                    walker.go(1);
                    break;
                }
                // 遇到 /> 按闭合处理
                else if (nextCharCode === 47
                    && walker.charCode(walker.index + 1) === 62
                ) {
                    walker.go(2);
                    tagClose = 1;
                    break;
                }

                // #[begin] error
                // 在处理一个 open 标签时，如果遇到了 <， 即下一个标签的开始，则当前标签未能正常闭合，报错
                if (nextCharCode === 60) {
                    throw new Error('[SAN ERROR] ' + getXPath(stack, tagName) + ' is not closed');
                }
                // #[end]

                // 读取 attribute
                var attrMatch = walker.match(attrReg);
                if (attrMatch) {

                    // #[begin] error
                    // 如果属性有 =，但没取到 value，报错
                    if (
                        walker.charCode(attrMatch.index + attrMatch[1].length) === 61
                        && !attrMatch[2]
                    ) {
                        throw new Error(''
                            + '[SAN ERROR] ' + getXPath(stack, tagName) + ' attribute `'
                            + attrMatch[1] + '` is not wrapped with ""'
                        );
                    }
                    // #[end]

                    integrateAttr(
                        aElement,
                        attrMatch[1],
                        attrMatch[2] ? attrMatch[4] : '',
                        options
                    );
                }

            }

            // match if directive for else/elif directive
            var elseDirective = aElement.directives['else'] || aElement.directives.elif; // eslint-disable-line dot-notation
            if (elseDirective) {
                var parentChildrenLen = currentNode.children.length;

                while (parentChildrenLen--) {
                    var parentChild = currentNode.children[parentChildrenLen];
                    if (parentChild.textExpr) {
                        currentNode.children.splice(parentChildrenLen, 1);
                        continue;
                    }

                    // #[begin] error
                    if (!parentChild.directives['if']) { // eslint-disable-line dot-notation
                        throw new Error('[SAN FATEL] else not match if.');
                    }
                    // #[end]

                    parentChild.elses = parentChild.elses || [];
                    parentChild.elses.push(aElement);

                    break;
                }
            }
            else {
                if (aElement.tagName === 'tr' && currentNode.tagName === 'table') {
                    var tbodyNode = createANode({
                        tagName: 'tbody'
                    });
                    currentNode.children.push(tbodyNode);
                    currentNode = tbodyNode;
                    stack[++stackIndex] = tbodyNode;
                }

                currentNode.children.push(aElement);
            }

            if (!tagClose) {
                currentNode = aElement;
                stack[++stackIndex] = aElement;
            }
        }

        beforeLastIndex = walker.index;
    }

    pushTextNode(walker.cut(beforeLastIndex));

    return rootNode;

    /**
     * 在读取栈中添加文本节点
     *
     * @inner
     * @param {string} text 文本内容
     */
    function pushTextNode(text) {
        switch (options.trimWhitespace) {
            case 'blank':
                if (/^\s+$/.test(text)) {
                    text = null;
                }
                break;

            case 'all':
                text = text.replace(/(^\s+|\s+$)/g, '');
                break;
        }

        if (text) {
            currentNode.children.push(createANode({
                textExpr: parseText(text, options.delimiters)
            }));
        }
    }
}

/* eslint-enable fecs-max-statements */

// exports = module.exports = parseTemplate;


/**
 * @file 默认filter
 * @author errorrik(errorrik@gmail.com)
 */


/* eslint-disable fecs-camelcase */
/* eslint-disable guard-for-in */

/**
 * 默认filter
 *
 * @const
 * @type {Object}
 */
var DEFAULT_FILTERS = {

    /**
     * URL编码filter
     *
     * @param {string} source 源串
     * @return {string} 替换结果串
     */
    url: encodeURIComponent,

    _class: function (source) {
        if (source instanceof Array) {
            return source.join(' ');
        }

        return source;
    },

    _style: function (source) {
        if (typeof source === 'object') {
            var result = '';
            for (var key in source) {
                result += key + ':' + source[key] + ';';
            }

            return result;
        }

        return source;
    },

    _sep: function (source, sep) {
        return source ? sep + source : source;
    }
};
/* eslint-enable fecs-camelcase */

// exports = module.exports = DEFAULT_FILTERS;


/**
 * @file HTML转义
 * @author errorrik(errorrik@gmail.com)
 */

/**
 * HTML Filter替换的字符实体表
 *
 * @const
 * @inner
 * @type {Object}
 */
var HTML_ENTITY = {
    /* jshint ignore:start */
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    /* eslint-disable quotes */
    "'": '&#39;'
    /* eslint-enable quotes */
    /* jshint ignore:end */
};

/**
 * HTML Filter的替换函数
 *
 * @inner
 * @param {string} c 替换字符
 * @return {string} 替换后的HTML字符实体
 */
function htmlFilterReplacer(c) {
    return HTML_ENTITY[c];
}

/**
 * HTML转义
 *
 * @param {string} source 源串
 * @return {string} 替换结果串
 */
function escapeHTML(source) {
    return source != null
        ? ('' + source).replace(/[&<>"']/g, htmlFilterReplacer)
        : '';
}

// exports = module.exports = escapeHTML;


/**
 * @file 表达式计算
 * @author errorrik(errorrik@gmail.com)
 */

// var ExprType = require('../parser/expr-type');
// var DEFAULT_FILTERS = require('./default-filters');
// var escapeHTML = require('./escape-html');
// var evalArgs = require('./eval-args');
// var dataCache = require('./data-cache');

/**
 * 计算表达式的值
 *
 * @param {Object} expr 表达式对象
 * @param {Data} data 数据容器对象
 * @param {Component=} owner 所属组件环境
 * @param {boolean?} escapeInterpHtml 是否对插值进行html转义
 * @return {*}
 */
function evalExpr(expr, data, owner, escapeInterpHtml) {
    if (expr.value != null) {
        return expr.value;
    }

    var value = dataCache.get(data, expr);

    if (value == null) {
        switch (expr.type) {
            case ExprType.UNARY:
                value = !evalExpr(expr.expr, data, owner);
                break;

            case ExprType.BINARY:
                var leftValue = evalExpr(expr.segs[0], data, owner);
                var rightValue = evalExpr(expr.segs[1], data, owner);

                /* eslint-disable eqeqeq */
                switch (expr.operator) {
                    case 37:
                        value = leftValue % rightValue;
                        break;
                    case 43:
                        value = leftValue + rightValue;
                        break;
                    case 45:
                        value = leftValue - rightValue;
                        break;
                    case 42:
                        value = leftValue * rightValue;
                        break;
                    case 47:
                        value = leftValue / rightValue;
                        break;
                    case 60:
                        value = leftValue < rightValue;
                        break;
                    case 62:
                        value = leftValue > rightValue;
                        break;
                    case 76:
                        value = leftValue && rightValue;
                        break;
                    case 94:
                        value = leftValue != rightValue;
                        break;
                    case 121:
                        value = leftValue <= rightValue;
                        break;
                    case 122:
                        value = leftValue == rightValue;
                        break;
                    case 123:
                        value = leftValue >= rightValue;
                        break;
                    case 155:
                        value = leftValue !== rightValue;
                        break;
                    case 183:
                        value = leftValue === rightValue;
                        break;
                    case 248:
                        value = leftValue || rightValue;
                        break;
                }
                /* eslint-enable eqeqeq */
                break;

            case ExprType.TERTIARY:
                value = evalExpr(
                    expr.segs[evalExpr(expr.segs[0], data, owner) ? 1 : 2],
                    data,
                    owner
                );
                break;

            case ExprType.ACCESSOR:
                value = data.get(expr);
                break;

            case ExprType.INTERP:
                value = evalExpr(expr.expr, data, owner);

                if (owner) {
                    for (var i = 0, l = expr.filters.length; i < l; i++) {
                        var filter = expr.filters[i];
                        var filterName = filter.name.paths[0].value;

                        if (owner.filters[filterName]) {
                            value = owner.filters[filterName].apply(
                                owner,
                                [value].concat(evalArgs(filter.args, data, owner))
                            );
                        }
                        else if (DEFAULT_FILTERS[filterName]) {
                            value = DEFAULT_FILTERS[filterName](
                                value,
                                filter.args[0] ? filter.args[0].value : ''
                            );
                        }
                    }
                }

                if (value == null) {
                    value = '';
                }

                break;

            /* eslint-disable no-redeclare */
            case ExprType.TEXT:
                var buf = '';
                for (var i = 0, l = expr.segs.length; i < l; i++) {
                    var seg = expr.segs[i];
                    buf += seg.value || evalExpr(seg, data, owner, escapeInterpHtml);
                }
                return buf;
        }

        dataCache.set(data, expr, value);
    }

    if (expr.type === ExprType.INTERP && escapeInterpHtml && !expr.original) {
        value = escapeHTML(value);
    }

    return value;
}

// exports = module.exports = evalExpr;


/**
 * @file 为函数调用计算参数数组的值
 * @author errorrik(errorrik@gmail.com)
 */


// var evalExpr = require('../runtime/eval-expr');

/**
 * 为函数调用计算参数数组的值
 *
 * @param {Array} args 参数表达式列表
 * @param {Data} data 数据环境
 * @param {Component} owner 组件环境
 * @return {Array}
 */
function evalArgs(args, data, owner) {
    var result = [];
    for (var i = 0; i < args.length; i++) {
        result.push(evalExpr(args[i], data, owner));
    }

    return result;
}

// exports = module.exports = evalArgs;


/**
 * @file 数据缓存管理器
 * @author errorrik(errorrik@gmail.com)
 */



var dataCacheSource = {};
var dataCacheClearly = 1;

/**
 * 数据缓存管理器
 *
 * @const
 * @type {Object}
 */
var dataCache = {
    clear: function () {
        if (!dataCacheClearly) {
            dataCacheClearly = 1;
            dataCacheSource = {};
        }
    },

    set: function (data, expr, value) {
        if (expr.raw) {
            dataCacheClearly = 0;
            (dataCacheSource[data.id] = dataCacheSource[data.id] || {})[expr.raw] = value;
        }
    },

    get: function (data, expr) {
        if (expr.raw && dataCacheSource[data.id]) {
            return dataCacheSource[data.id][expr.raw];
        }
    }
};


// exports = module.exports = dataCache;


/**
 * @file 比较变更表达式与目标表达式之间的关系
 * @author errorrik(errorrik@gmail.com)
 */

// var ExprType = require('../parser/expr-type');
// var evalExpr = require('./eval-expr');
// var each = require('../util/each');

/**
 * 判断变更表达式与多个表达式之间的关系，0为完全没关系，1为有关系
 *
 * @inner
 * @param {Object} changeExpr 目标表达式
 * @param {Array} exprs 多个源表达式
 * @param {Data} data 表达式所属数据环境
 * @return {number}
 */
function changeExprCompareExprs(changeExpr, exprs, data) {
    for (var i = 0, l = exprs.length; i < l; i++) {
        if (changeExprCompare(changeExpr, exprs[i], data)) {
            return 1;
        }
    }

    return 0;
}

/**
 * 比较变更表达式与目标表达式之间的关系，用于视图更新判断
 * 视图更新需要根据其关系，做出相应的更新行为
 *
 * 0: 完全没关系
 * 1: 变更表达式是目标表达式的母项(如a与a.b) 或 表示需要完全变化
 * 2: 变更表达式是目标表达式相等
 * >2: 变更表达式是目标表达式的子项，如a.b.c与a.b
 *
 * @param {Object} changeExpr 变更表达式
 * @param {Object} expr 要比较的目标表达式
 * @param {Data} data 表达式所属数据环境
 * @return {number}
 */
function changeExprCompare(changeExpr, expr, data) {
    switch (expr.type) {
        case ExprType.ACCESSOR:
            var paths = expr.paths;
            var len = paths.length;
            var changePaths = changeExpr.paths;
            var changeLen = changePaths.length;

            var result = 1;
            for (var i = 0; i < len; i++) {
                var pathExpr = paths[i];

                if (pathExpr.type === ExprType.ACCESSOR
                    && changeExprCompare(changeExpr, pathExpr, data)
                ) {
                    return 1;
                }

                if (result && i < changeLen
                    /* eslint-disable eqeqeq */
                    && evalExpr(pathExpr, data) != evalExpr(changePaths[i], data)
                    /* eslint-enable eqeqeq */
                ) {
                    result = 0;
                }
            }

            if (result) {
                result = Math.max(1, changeLen - len + 2);
            }
            return result;

        case ExprType.UNARY:
            return changeExprCompare(changeExpr, expr.expr, data) ? 1 : 0;


        case ExprType.TEXT:
        case ExprType.BINARY:
        case ExprType.TERTIARY:
            return changeExprCompareExprs(changeExpr, expr.segs, data);

        case ExprType.INTERP:
            if (!changeExprCompare(changeExpr, expr.expr, data)) {
                var filterResult;
                each(expr.filters, function (filter) {
                    filterResult = changeExprCompareExprs(changeExpr, filter.args, data);
                    return !filterResult;
                });

                return filterResult ? 1 : 0;
            }

            return 1;
    }

    return 0;
}

// exports = module.exports = changeExprCompare;


/**
 * @file 数据变更类型枚举
 * @author errorrik(errorrik@gmail.com)
 */

/**
 * 数据变更类型枚举
 *
 * @const
 * @type {Object}
 */
var DataChangeType = {
    SET: 1,
    SPLICE: 2
};

// exports = module.exports = DataChangeType;


/**
 * @file 数据类
 * @author errorrik(errorrik@gmail.com)
 */

// var ExprType = require('../parser/expr-type');
// var evalExpr = require('./eval-expr');
// var DataChangeType = require('./data-change-type');
// var createAccessor = require('../parser/create-accessor');
// var parseExpr = require('../parser/parse-expr');
// var guid = require('../util/guid');
// var dataCache = require('./data-cache');

/**
 * 数据类
 *
 * @class
 * @param {Object?} data 初始数据
 * @param {Model?} parent 父级数据容器
 */
function Data(data, parent) {
    this.id = guid();
    this.parent = parent;
    this.raw = data || {};
    this.listeners = [];
}

// #[begin] error
// 以下两个函数只在开发模式下可用，在生产模式下不存在
/**
 * DataTypes 检测
 */
Data.prototype.checkDataTypes = function () {
    if (this.typeChecker) {
        this.typeChecker(this.raw);
    }
};

/**
 * 设置 type checker
 *
 * @param  {Function} typeChecker 类型校验器
 */
Data.prototype.setTypeChecker = function (typeChecker) {
    this.typeChecker = typeChecker;
};

// #[end]

/**
 * 添加数据变更的事件监听器
 *
 * @param {Function} listener 监听函数
 */
Data.prototype.listen = function (listener) {
    if (typeof listener === 'function') {
        this.listeners.push(listener);
    }
};

/**
 * 移除数据变更的事件监听器
 *
 * @param {Function} listener 监听函数
 */
Data.prototype.unlisten = function (listener) {
    var len = this.listeners.length;
    while (len--) {
        if (!listener || this.listeners[len] === listener) {
            this.listeners.splice(len, 1);
        }
    }
};

/**
 * 触发数据变更
 *
 * @param {Object} change 变更信息对象
 */
Data.prototype.fire = function (change) {
    if (change.option.silent || change.option.silence || change.option.quiet) {
        return;
    }

    for (var i = 0; i < this.listeners.length; i++) {
        this.listeners[i].call(this, change);
    }
};

/**
 * 获取数据项
 *
 * @param {string|Object?} expr 数据项路径
 * @param {Data?} callee 当前数据获取的调用环境
 * @return {*}
 */
Data.prototype.get = function (expr, callee) {
    var value = this.raw;
    if (!expr) {
        return value;
    }

    expr = parseExpr(expr);

    var paths = expr.paths;
    callee = callee || this;

    value = value[paths[0].value];

    if (value == null && this.parent) {
        value = this.parent.get(expr, callee);
    }
    else {
        for (var i = 1, l = paths.length; value != null && i < l; i++) {
            value = value[paths[i].value || evalExpr(paths[i], callee)];
        }
    }

    return value;
};


/**
 * 数据对象变更操作
 *
 * @inner
 * @param {Object|Array} source 要变更的源数据
 * @param {Array} exprPaths 属性路径
 * @param {*} value 变更属性值
 * @param {Data} data 对应的Data对象
 * @return {*} 变更后的新数据
 */
function immutableSet(source, exprPaths, value, data) {
    if (exprPaths.length === 0) {
        return value;
    }

    var prop = evalExpr(exprPaths[0], data);
    var result;

    if (source instanceof Array) {
        var index = +prop;

        result = source.slice(0);
        result[isNaN(index) ? prop : index] = immutableSet(source[index], exprPaths.slice(1), value, data);

        return result;
    }
    else if (typeof source === 'object') {
        result = {};

        for (var key in source) {
            if (key !== prop) {
                result[key] = source[key];
            }
        }

        result[prop] = immutableSet(source[prop] || {}, exprPaths.slice(1), value, data);

        return result;
    }

    return source;
}

/**
 * 设置数据项
 *
 * @param {string|Object} expr 数据项路径
 * @param {*} value 数据值
 * @param {Object=} option 设置参数
 * @param {boolean} option.silent 静默设置，不触发变更事件
 */
Data.prototype.set = function (expr, value, option) {
    option = option || {};

    // #[begin] error
    var exprRaw = expr;
    // #[end]

    expr = parseExpr(expr);

    // #[begin] error
    if (expr.type !== ExprType.ACCESSOR) {
        throw new Error('[SAN ERROR] Invalid Expression in Data set: ' + exprRaw);
    }
    // #[end]

    if (this.get(expr) === value) {
        return;
    }

    dataCache.clear();
    this.raw = immutableSet(this.raw, expr.paths, value, this);
    this.fire({
        type: DataChangeType.SET,
        expr: expr,
        value: value,
        option: option
    });

    // #[begin] error
    this.checkDataTypes();
    // #[end]

};

/**
 * 合并更新数据项
 *
 * @param {string|Object} expr 数据项路径
 * @param {Object} source 待合并的数据值
 * @param {Object=} option 设置参数
 * @param {boolean} option.silent 静默设置，不触发变更事件
 */
Data.prototype.merge = function (expr, source, option) {
    option = option || {};

    // #[begin] error
    var exprRaw = expr;
    // #[end]

    expr = parseExpr(expr);

    // #[begin] error
    if (expr.type !== ExprType.ACCESSOR) {
        throw new Error('[SAN ERROR] Invalid Expression in Data merge: ' + exprRaw);
    }

    if (typeof this.get(expr) !== 'object') {
        throw new Error('[SAN ERROR] Merge Expects a Target of Type \'object\'; got ' + typeof oldValue);
    }

    if (typeof source !== 'object') {
        throw new Error('[SAN ERROR] Merge Expects a Source of Type \'object\'; got ' + typeof source);
    }
    // #[end]

    for (var key in source) {
        this.set(
            createAccessor(
                expr.paths.concat(
                    [
                        {
                            type: ExprType.STRING,
                            value: key
                        }
                    ]
                )
            ),
            source[key],
            option
        );
    }
};

/**
 * 基于更新函数更新数据项
 *
 * @param {string|Object} expr 数据项路径
 * @param {Function} fn 数据处理函数
 * @param {Object=} option 设置参数
 * @param {boolean} option.silent 静默设置，不触发变更事件
 */
Data.prototype.apply = function (expr, fn, option) {
    option = option || {};

    // #[begin] error
    var exprRaw = expr;
    // #[end]

    expr = parseExpr(expr);

    // #[begin] error
    if (expr.type !== ExprType.ACCESSOR) {
        throw new Error('[SAN ERROR] Invalid Expression in Data apply: ' + exprRaw);
    }
    // #[end]

    var oldValue = this.get(expr);

    // #[begin] error
    if (typeof fn !== 'function') {
        throw new Error(
            '[SAN ERROR] Invalid Argument\'s Type in Data apply: '
            + 'Expected Function but got ' + typeof fn
        );
    }
    // #[end]

    var value = fn(oldValue);

    if (oldValue === value) {
        return;
    }

    this.set(expr, value, option);
};

/**
 * 数组数据项splice操作
 *
 * @param {string|Object} expr 数据项路径
 * @param {Array} args splice 接受的参数列表，数组项与Array.prototype.splice的参数一致
 * @param {Object=} option 设置参数
 * @param {boolean} option.silent 静默设置，不触发变更事件
 * @return {Array} 新数组
 */
Data.prototype.splice = function (expr, args, option) {
    option = option || {};
    // #[begin] error
    var exprRaw = expr;
    // #[end]

    expr = parseExpr(expr);

    // #[begin] error
    if (expr.type !== ExprType.ACCESSOR) {
        throw new Error('[SAN ERROR] Invalid Expression in Data splice: ' + exprRaw);
    }
    // #[end]

    var target = this.get(expr);
    var returnValue = [];

    if (target instanceof Array) {
        var index = args[0];
        if (index < 0 || index > target.length) {
            return;
        }

        var newArray = target.slice(0);
        returnValue = newArray.splice.apply(newArray, args);
        dataCache.clear();
        this.raw = immutableSet(this.raw, expr.paths, newArray, this);

        this.fire({
            expr: expr,
            type: DataChangeType.SPLICE,
            index: index,
            deleteCount: returnValue.length,
            value: returnValue,
            insertions: args.slice(2),
            option: option
        });
    }

    // #[begin] error
    this.checkDataTypes();
    // #[end]

    return returnValue;
};

/**
 * 数组数据项push操作
 *
 * @param {string|Object} expr 数据项路径
 * @param {*} item 要push的值
 * @param {Object=} option 设置参数
 * @param {boolean} option.silent 静默设置，不触发变更事件
 * @return {number} 新数组的length属性
 */
Data.prototype.push = function (expr, item, option) {
    var target = this.get(expr);

    if (target instanceof Array) {
        this.splice(expr, [target.length, 0, item], option);
        return target.length + 1;
    }
};

/**
 * 数组数据项pop操作
 *
 * @param {string|Object} expr 数据项路径
 * @param {Object=} option 设置参数
 * @param {boolean} option.silent 静默设置，不触发变更事件
 * @return {*}
 */
Data.prototype.pop = function (expr, option) {
    var target = this.get(expr);

    if (target instanceof Array) {
        var len = target.length;
        if (len) {
            return this.splice(expr, [len - 1, 1], option)[0];
        }
    }
};

/**
 * 数组数据项shift操作
 *
 * @param {string|Object} expr 数据项路径
 * @param {Object=} option 设置参数
 * @param {boolean} option.silent 静默设置，不触发变更事件
 * @return {*}
 */
Data.prototype.shift = function (expr, option) {
    return this.splice(expr, [0, 1], option)[0];
};

/**
 * 数组数据项unshift操作
 *
 * @param {string|Object} expr 数据项路径
 * @param {*} item 要unshift的值
 * @param {Object=} option 设置参数
 * @param {boolean} option.silent 静默设置，不触发变更事件
 * @return {number} 新数组的length属性
 */
Data.prototype.unshift = function (expr, item, option) {
    var target = this.get(expr);

    if (target instanceof Array) {
        this.splice(expr, [0, 0, item], option);
        return target.length + 1;
    }
};

/**
 * 数组数据项移除操作
 *
 * @param {string|Object} expr 数据项路径
 * @param {number} index 要移除项的索引
 * @param {Object=} option 设置参数
 * @param {boolean} option.silent 静默设置，不触发变更事件
 */
Data.prototype.removeAt = function (expr, index, option) {
    this.splice(expr, [index, 1], option);
};

/**
 * 数组数据项移除操作
 *
 * @param {string|Object} expr 数据项路径
 * @param {*} value 要移除的项
 * @param {Object=} option 设置参数
 * @param {boolean} option.silent 静默设置，不触发变更事件
 */
Data.prototype.remove = function (expr, value, option) {
    var target = this.get(expr);

    if (target instanceof Array) {
        var len = target.length;
        while (len--) {
            if (target[len] === value) {
                this.splice(expr, [len, 1], option);
                break;
            }
        }
    }
};

// exports = module.exports = Data;


/**
 * @file 生命周期类
 * @author errorrik(errorrik@gmail.com)
 */

function lifeCycleOwnIs(name) {
    return this[name];
}

/* eslint-disable fecs-valid-var-jsdoc */
/**
 * 节点生命周期信息
 *
 * @inner
 * @type {Object}
 */
var LifeCycle = {
    start: {},

    compiled: {
        is: lifeCycleOwnIs,
        compiled: true
    },

    inited: {
        is: lifeCycleOwnIs,
        compiled: true,
        inited: true
    },

    painting: {
        is: lifeCycleOwnIs,
        compiled: true,
        inited: true,
        painting: true
    },

    created: {
        is: lifeCycleOwnIs,
        compiled: true,
        inited: true,
        created: true
    },

    attached: {
        is: lifeCycleOwnIs,
        compiled: true,
        inited: true,
        created: true,
        attached: true
    },

    leaving: {
        is: lifeCycleOwnIs,
        compiled: true,
        inited: true,
        created: true,
        attached: true,
        leaving: true
    },

    detached: {
        is: lifeCycleOwnIs,
        compiled: true,
        inited: true,
        created: true,
        detached: true
    },

    disposed: {
        is: lifeCycleOwnIs,
        disposed: true
    }
};
/* eslint-enable fecs-valid-var-jsdoc */


// exports = module.exports = LifeCycle;


/**
 * @file 节点类型
 * @author errorrik(errorrik@gmail.com)
 */

/**
 * 节点类型
 *
 * @const
 * @type {Object}
 */
var NodeType = {
    TEXT: 1,
    IF: 2,
    FOR: 3,
    ELEM: 4,
    CMPT: 5,
    SLOT: 6,
    TPL: 7
};

// exports = module.exports = NodeType;


/**
 * @file 获取 ANode props 数组中相应 name 的项
 * @author errorrik(errorrik@gmail.com)
 */

/**
 * 获取 ANode props 数组中相应 name 的项
 *
 * @param {Object} aNode ANode对象
 * @param {string} name name属性匹配串
 * @return {Object}
 */
function getANodeProp(aNode, name) {
    var index = aNode.hotspot.props[name];
    if (index != null) {
        return aNode.props[index];
    }
}

// exports = module.exports = getANodeProp;


/**
 * @file 获取属性处理对象
 * @author errorrik(errorrik@gmail.com)
 */

// var contains = require('../util/contains');
// var empty = require('../util/empty');
// var svgTags = require('../browser/svg-tags');
// var evalExpr = require('../runtime/eval-expr');
// var getANodeProp = require('./get-a-node-prop');
// var NodeType = require('./node-type');


/**
 * HTML 属性和 DOM 操作属性的对照表
 *
 * @inner
 * @const
 * @type {Object}
 */
var HTML_ATTR_PROP_MAP = {
    'readonly': 'readOnly',
    'cellpadding': 'cellPadding',
    'cellspacing': 'cellSpacing',
    'colspan': 'colSpan',
    'rowspan': 'rowSpan',
    'valign': 'vAlign',
    'usemap': 'useMap',
    'frameborder': 'frameBorder',
    'for': 'htmlFor'
};

/**
 * 默认的元素的属性设置的变换方法
 *
 * @inner
 * @type {Object}
 */
var defaultElementPropHandler = {
    attr: function (element, name, value) {
        if (value != null) {
            return ' ' + name + '="' + value + '"';
        }
    },

    prop: function (element, name, value) {
        var propName = HTML_ATTR_PROP_MAP[name] || name;
        var el = element.el;

        // input 的 type 是个特殊属性，其实也应该用 setAttribute
        // 但是 type 不应该运行时动态改变，否则会有兼容性问题
        // 所以这里直接就不管了
        if (svgTags[element.tagName] || !(propName in el)) {
            el.setAttribute(name, value);
        }
        else {
            el[propName] = value == null ? '' : value;
        }

        // attribute 绑定的是 text，所以不会出现 null 的情况，这里无需处理
        // 换句话来说，san 是做不到 attribute 时有时无的
        // if (value == null) {
        //     el.removeAttribute(name);
        // }
    },

    output: function (element, bindInfo, data) {
        data.set(bindInfo.expr, element.el[bindInfo.name], {
            target: {
                id: element.id,
                prop: bindInfo.name
            }
        });
    }
};

/* eslint-disable fecs-properties-quote */
/**
 * 默认的属性设置变换方法
 *
 * @inner
 * @type {Object}
 */
var defaultElementPropHandlers = {
    style: {
        attr: function (element, name, value) {
            if (value) {
                return ' style="' + value + '"';
            }
        },

        prop: function (element, name, value) {
            element.el.style.cssText = value;
        }
    },

    'class': { // eslint-disable-line
        attr: function (element, name, value) {
            if (value) {
                return ' class="' + value + '"';
            }
        },

        prop: function (element, name, value) {
            element.el.className = value;
        }
    },

    slot: {
        attr: empty,
        prop: empty
    },

    readonly: genBoolPropHandler('readonly'),
    disabled: genBoolPropHandler('disabled'),
    autofocus: genBoolPropHandler('autofocus'),
    required: genBoolPropHandler('required'),
    draggable: genBoolPropHandler('draggable')
};
/* eslint-enable fecs-properties-quote */

// draggable attribute 是枚举类型，但 property 接受 boolean
// 所以这里声明 bool prop，然后 attr 置回来
defaultElementPropHandlers.draggable.attr = defaultElementPropHandler.attr;

var checkedPropHandler = genBoolPropHandler('checked');
var analInputChecker = {
    checkbox: contains,
    radio: function (a, b) {
        return a === b;
    }
};

function analInputCheckedState(element, value, oper) {
    var bindValue = getANodeProp(element.aNode, 'value');
    var bindType = getANodeProp(element.aNode, 'type');

    if (bindValue && bindType) {
        var type = evalExpr(bindType.expr, element.scope, element.owner);

        if (analInputChecker[type]) {
            var bindChecked = getANodeProp(element.aNode, 'checked');
            if (!bindChecked.hintExpr) {
                bindChecked.hintExpr = bindValue.expr;
            }

            var checkedState = analInputChecker[type](
                value,
                evalExpr(bindValue.expr, element.scope, element.owner)
            );

            switch (oper) {
                case 'attr':
                    return checkedState ? ' checked="checked"' : '';

                case 'prop':
                    element.el.checked = checkedState;
                    return;
            }
        }
    }

    return checkedPropHandler[oper](element, 'checked', value);
}

var elementPropHandlers = {
    input: {
        multiple: genBoolPropHandler('multiple'),
        checked: {
            attr: function (element, name, value) {
                return analInputCheckedState(element, value, 'attr');
            },

            prop: function (element, name, value) {
                analInputCheckedState(element, value, 'prop');
            },

            output: function (element, bindInfo, data) {
                var el = element.el;
                var bindValue = getANodeProp(element.aNode, 'value');
                var bindType = getANodeProp(element.aNode, 'type') || {};

                if (bindValue && bindType) {
                    switch (bindType.raw) {
                        case 'checkbox':
                            data[el.checked ? 'push' : 'remove'](bindInfo.expr, el.value);
                            return;

                        case 'radio':
                            el.checked && data.set(bindInfo.expr, el.value, {
                                target: {
                                    id: element.id,
                                    prop: bindInfo.name
                                }
                            });
                            return;
                    }
                }

                defaultElementPropHandler.output(element, bindInfo, data);
            }
        }
    },

    textarea: {
        value: {
            attr: empty,
            prop: defaultElementPropHandler.prop,
            output: defaultElementPropHandler.output
        }
    },

    option: {
        value: {
            attr: function (element, name, value) {
                return ' value="' + (value || '') + '"'
                    + (isOptionSelected(element, value) ? 'selected' : '');
            },

            prop: function (element, name, value) {
                defaultElementPropHandler.prop(element, name, value);

                if (isOptionSelected(element, value)) {
                    element.el.selected = true;
                }
            }
        }
    },

    select: {
        value: {
            attr: empty,
            prop: function (element, name, value) {
                element.el.value = value || '';
            },

            output: defaultElementPropHandler.output
        }
    }
};

function isOptionSelected(element, value) {
    var parentSelect = element.parent;
    while (parentSelect) {
        if (parentSelect.tagName === 'select') {
            break;
        }

        parentSelect = parentSelect.parent;
    }


    if (parentSelect) {
        var selectValue = null;
        var prop;
        var expr;

        if ((prop = getANodeProp(parentSelect.aNode, 'value'))
            && (expr = prop.expr)
        ) {
            selectValue = parentSelect.nodeType === NodeType.CMPT
                ? evalExpr(expr, parentSelect.data, parentSelect)
                : evalExpr(expr, parentSelect.scope, parentSelect.owner)
                || '';
        }

        if (selectValue === value) {
            return 1;
        }
    }
}

/**
 * 生成 bool 类型属性绑定操作的变换方法
 *
 * @inner
 * @param {string} attrName 属性名
 * @return {Object}
 */
function genBoolPropHandler(attrName) {
    return {
        attr: function (element, name, value) {
            // 因为元素的attr值必须经过html escape，否则可能有漏洞
            // 所以这里直接对假值字符串形式进行处理
            // NaN之类非主流的就先不考虑了
            var prop = getANodeProp(element.aNode, name);
            if (prop && prop.raw === ''
                || value && value !== 'false' && value !== '0'
            ) {
                return ' ' + attrName;
            }
        },

        prop: function (element, name, value) {
            var propName = HTML_ATTR_PROP_MAP[attrName] || attrName;
            element.el[propName] = !!(value && value !== 'false' && value !== '0');
        }
    };
}


/**
 * 获取属性处理对象
 *
 * @param {Element} element 元素实例
 * @param {string} name 属性名
 * @return {Object}
 */
function getPropHandler(element, name) {
    var tagPropHandlers = elementPropHandlers[element.tagName];
    if (!tagPropHandlers) {
        tagPropHandlers = elementPropHandlers[element.tagName] = {};
    }

    var propHandler = tagPropHandlers[name];
    if (!propHandler) {
        propHandler = defaultElementPropHandlers[name] || defaultElementPropHandler;
        tagPropHandlers[name] = propHandler;
    }

    return propHandler;
}

// exports = module.exports = getPropHandler;


/**
 * @file 判断变更是否来源于元素
 * @author errorrik(errorrik@gmail.com)
 */

/**
 * 判断变更是否来源于元素，来源于元素时，视图更新需要阻断
 *
 * @param {Object} change 变更对象
 * @param {Element} element 元素
 * @param {string?} propName 属性名，可选。需要精确判断是否来源于此属性时传入
 * @return {boolean}
 */
function isDataChangeByElement(change, element, propName) {
    var changeTarget = change.option.target;
    return changeTarget && changeTarget.id === element.id
        && (!propName || changeTarget.prop === propName);
}

// exports = module.exports = isDataChangeByElement;


/**
 * @file 在对象上使用accessor表达式查找方法
 * @author errorrik(errorrik@gmail.com)
 */

// var evalExpr = require('../runtime/eval-expr');

/**
 * 在对象上使用accessor表达式查找方法
 *
 * @param {Object} source 源对象
 * @param {Object} nameExpr 表达式
 * @param {Data} data 所属数据环境
 * @return {Function}
 */
function findMethod(source, nameExpr, data) {
    var method = source;

    for (var i = 0; method != null && i < nameExpr.paths.length; i++) {
        method = method[evalExpr(nameExpr.paths[i], data)];
    }

    return method;
}

// exports = module.exports = findMethod;


/**
 * @file 声明式事件的监听函数
 * @author errorrik(errorrik@gmail.com)
 */


// var evalArgs = require('../runtime/eval-args');
// var findMethod = require('../runtime/find-method');
// var Data = require('../runtime/data');

/**
 * 声明式事件的监听函数
 *
 * @param {Object} eventBind 绑定信息对象
 * @param {boolean} isComponentEvent 是否组件自定义事件
 * @param {Data} data 数据环境
 * @param {Event} e 事件对象
 */
function eventDeclarationListener(eventBind, isComponentEvent, data, e) {
    var method = findMethod(this, eventBind.expr.name, data);

    if (typeof method === 'function') {
        var scope = new Data(
            {$event: isComponentEvent ? e : e || window.event},
            data
        );
        method.apply(this, evalArgs(eventBind.expr.args, scope, this));
    }
}

// exports = module.exports = eventDeclarationListener;


/**
 * @file 往字符串连接对象中添加字符串
 * @author errorrik(errorrik@gmail.com)
 */

// var ieOldThan9 = require('../browser/ie-old-than-9');

/**
 * 往字符串连接对象中添加字符串
 *
 * @param {Object} buf 字符串连接对象
 * @param {string} str 要添加的字符串
 */
var htmlBufferPush =
    // #[begin] allua
    ieOldThan9
        ?
        function (buf, str) {
            buf.raw[buf.length++] = str;
            buf.tagStart = 0;
        }
        :
    // #[end]
        function (buf, str) {
            buf.raw += str;
        };

// exports = module.exports = htmlBufferPush;


/**
 * @file 自闭合标签表
 * @author errorrik(errorrik@gmail.com)
 */

// var splitStr2Obj = require('../util/split-str-2-obj');

/**
 * 自闭合标签列表
 *
 * @type {Object}
 */
var hotTags = splitStr2Obj('div,span,input,button,textarea,form,label,dl,dt,dd,ul,ol,li,a,b,u,h1,h2,h3,h4,h5,h6');

// exports = module.exports = hotTags;


/**
 * @file 是否浏览器环境
 * @author errorrik(errorrik@gmail.com)
 */

var isBrowser = typeof window !== 'undefined';

// exports = module.exports = isBrowser;


/**
 * @file insertBefore 方法的兼容性封装
 * @author errorrik(errorrik@gmail.com)
 */

/**
 * insertBefore 方法的兼容性封装
 *
 * @param {HTMLNode} targetEl 要插入的节点
 * @param {HTMLElement} parentEl 父元素
 * @param {HTMLElement?} beforeEl 在此元素之前插入
 */
function insertBefore(targetEl, parentEl, beforeEl) {
    if (parentEl) {
        if (beforeEl) {
            parentEl.insertBefore(targetEl, beforeEl);
        }
        else {
            parentEl.appendChild(targetEl);
        }
    }
}

// exports = module.exports = insertBefore;


/**
 * @file 创建字符串连接对象，用于跨平台提高性能的字符串连接，万一不小心支持老式浏览器了呢
 * @author errorrik(errorrik@gmail.com)
 */

// var ieOldThan9 = require('../browser/ie-old-than-9');

/**
 * 创建字符串连接对象
 *
 * @return {Object}
 */
function createHTMLBuffer() {
    return {
        raw:
            // #[begin] allua
            ieOldThan9
                ? []
                :
            // #[end]
                '',
        length: 0,
        tagStart: 1,
        insertComments: []
    };
}

// exports = module.exports = createHTMLBuffer;


/**
 * @file 往html字符串连接对象中添加注释
 * @author errorrik(errorrik@gmail.com)
 */

// var ieOldThan9 = require('../browser/ie-old-than-9');

/**
 * 往html字符串连接对象中添加注释
 *
 * @param {Object} buf 字符串连接对象
 * @param {string} str 要添加的字符串
 */
var htmlBufferComment =
    // #[begin] allua
    ieOldThan9
        ?
        function (buf, str) {
            buf.raw[buf.length++] = '<!--' + str + '-->';
            if (buf.tagStart) {
                buf.insertComments.push([str, buf.tagId]);
            }
        }
        :
    // #[end]
        function (buf, str) {
            buf.raw += '<!--' + str + '-->';
        }
;

// exports = module.exports = htmlBufferComment;


/**
 * @file 输出 HTML buffer 内容到 DOM 上
 * @author errorrik(errorrik@gmail.com)
 */

// var ieOldThan9 = require('../browser/ie-old-than-9');
// var insertBefore = require('../browser/insert-before');

/**
 * 输出 HTML buffer 内容到 DOM 上
 *
 * @param {Object} buf html字符串连接对象
 * @param {HTMLElement} target 目标DOM元素
 * @param {string?} pos 相对target的位置
 */
function outputHTMLBuffer(buf, target, pos) {
    // html 没内容就不要设置 innerHTML了
    // 这里还能避免在 IE 下 component root 为 input 等元素时设置 innerHTML 报错的问题
    var html =
        // #[begin] allua
        ieOldThan9
            ? buf.raw.join('')
            :

        // #[end]
            buf.raw;

    if (!html) {
        return;
    }

    if (pos) {
        target.insertAdjacentHTML(pos, html);
    }
    else {
        target.innerHTML = html;
    }

    // 处理 ie 低版本下自动过滤 comment 的问题
    // #[begin] allua
    if (ieOldThan9) {
        var insertComments = buf.insertComments;
        var len = insertComments.length;

        while (len--) {
            var insertComment = insertComments[len];
            var commentNode = document.createComment(insertComment[0]);
            var insertParentEl = insertComment[1] ? document.getElementById(insertComment[1]) : null;
            var insertBeforeEl = null;

            if (insertParentEl) {
                insertBeforeEl = insertParentEl.firstChild;
            }
            else {
                switch (pos) {
                    case 'afterend':
                        insertParentEl = target.parentNode;
                        insertBeforeEl = target.nextSibling;
                        break;

                    case 'beforebegin':
                        insertParentEl = target.parentNode;
                        insertBeforeEl = target;
                        break;

                    case 'beforeend':
                        insertParentEl = target;
                        insertBeforeEl = null;
                        break;

                    default:
                        insertParentEl = target;
                        insertBeforeEl = insertParentEl.firstChild;
                }
            }

            insertBefore(commentNode, insertParentEl, insertBeforeEl);
        }
    }
    // #[end]
}

// exports = module.exports = outputHTMLBuffer;


/**
 * @file 输出 HTML buffer 内容到 DOM 上
 * @author errorrik(errorrik@gmail.com)
 */

// var outputHTMLBuffer = require('./output-html-buffer');

/**
 * 将 HTML buffer 内容插入到 DOM 节点之前
 *
 * @param {Object} buf html字符串连接对象
 * @param {HTMLElement} parentEl 父元素
 * @param {HTMLNode?} beforeEl 在此节点之前插入
 */
function outputHTMLBufferBefore(buf, parentEl, beforeEl) {
    if (beforeEl) {
        if (beforeEl.nodeType === 1) {
            outputHTMLBuffer(buf, beforeEl, 'beforebegin');
        }
        else {
            var tempFlag = document.createElement('script');
            parentEl.insertBefore(tempFlag, beforeEl);
            outputHTMLBuffer(buf, tempFlag, 'beforebegin');
            parentEl.removeChild(tempFlag);
        }
    }
    else {
        outputHTMLBuffer(buf, parentEl, 'beforeend');
    }
}

// exports = module.exports = outputHTMLBufferBefore;


/**
 * @file  获取节点 stump 的父元素
 * @author errorrik(errorrik@gmail.com)
 */

/**
 * 获取节点 stump 的父元素
 * if、for 节点的 el stump 是 comment node，在 IE 下还可能不存在
 * 获取其父元素通常用于 el 的查找，以及视图变更的插入操作
 *
 * @param {Node} node 节点对象
 * @return {HTMLElement}
 */
function getNodeStumpParent(node) {
    if (node.el) {
        return node.el.parentNode;
    }

    node = node.parent;
    var parentNode;
    while (node) {
        parentNode = node._getEl();
        if (parentNode) {
            while (parentNode && parentNode.nodeType !== 1) {
                parentNode = parentNode.parentNode;
            }
            break;
        }

        node = node.parent;
    }

    return parentNode;
}

// exports = module.exports = getNodeStumpParent;


/**
 * @file  获取节点 stump 的 comment
 * @author errorrik(errorrik@gmail.com)
 */


// var getNodeStumpParent = require('./get-node-stump-parent');

/**
 * 获取节点 stump 的 comment
 *
 * @param {Node} node 节点对象
 * @return {Comment}
 */
function getNodeStump(node) {
    if (typeof node.el === 'undefined') {
        var parentNode = getNodeStumpParent(node);
        var el = parentNode.firstChild;

        while (el) {
            if (el.nodeType === 8
                && el.data.indexOf(node.id) === 0
            ) {
                if (node.el) {
                    node.sel = node.el;
                }

                node.el = el;
            }

            el = el.nextSibling;
        }
    }

    return node.el;
}

// exports = module.exports = getNodeStump;


/**
 * @file 判断元素是否不允许设置HTML
 * @author errorrik(errorrik@gmail.com)
 */

// some html elements cannot set innerHTML in old ie
// see: https://msdn.microsoft.com/en-us/library/ms533897(VS.85).aspx

/**
 * 判断元素是否不允许设置HTML
 *
 * @param {HTMLElement} el 要判断的元素
 * @return {boolean}
 */
function noSetHTML(el) {
    return /^(col|colgroup|frameset|style|table|tbody|tfoot|thead|tr|select)$/i.test(el.tagName)
}

// exports = module.exports = noSetHTML;


/**
 * @file  获取节点 stump 的 comment
 * @author errorrik(errorrik@gmail.com)
 */

// var noSetHTML = require('../browser/no-set-html');

// #[begin] error
/**
 * 获取节点 stump 的 comment
 *
 * @param {HTMLElement} el HTML元素
 */
function warnSetHTML(el) {
    // dont warn if not in browser runtime
    if (!(typeof window !== 'undefined' && typeof navigator !== 'undefined' && window.document)) {
        return;
    }

    // some html elements cannot set innerHTML in old ie
    // see: https://msdn.microsoft.com/en-us/library/ms533897(VS.85).aspx
    if (noSetHTML(el)) {
        var message = '[SAN WARNING] set html for element "' + el.tagName
            + '" may cause an error in old IE';
        /* eslint-disable no-console */
        if (typeof console === 'object' && console.warn) {
            console.warn(message);
        }
        else {
            throw new Error(message);
        }
        /* eslint-enable no-console */
    }
}
// #[end]

// exports = module.exports = warnSetHTML;


/**
 * @file 判断是否结束桩
 * @author errorrik(errorrik@gmail.com)
 */

// #[begin] reverse
/**
 * 判断是否结束桩
 *
 * @param {HTMLElement|HTMLComment} target 要判断的元素
 * @param {string} type 桩类型
 * @return {boolean}
 */
function isEndStump(target, type) {
    return target.nodeType === 8 && target.data === '/s-' + type;
}
// #[end]

// exports = module.exports = isEndStump;


/**
 * @file 获取节点在组件树中的路径
 * @author errorrik(errorrik@gmail.com)
 */


// var NodeType = require('./node-type');

// #[begin] reverse
/**
 * 获取节点在组件树中的路径
 *
 * @param {Node} node 节点对象
 * @return {Array}
 */
function getNodePath(node) {
    var nodePaths = [];
    var nodeParent = node;
    while (nodeParent) {
        switch (nodeParent.nodeType) {
            case NodeType.ELEM:
                nodePaths.unshift(nodeParent.tagName);
                break;

            case NodeType.IF:
                nodePaths.unshift('if');
                break;

            case NodeType.FOR:
                nodePaths.unshift('for[' + nodeParent.anode.directives['for'].raw + ']'); // eslint-disable-line dot-notation
                break;

            case NodeType.SLOT:
                nodePaths.unshift('slot[' + (nodeParent.name || 'default') + ']');
                break;

            case NodeType.TPL:
                nodePaths.unshift('template');
                break;

            case NodeType.CMPT:
                nodePaths.unshift('component[' + (nodeParent.subTag || 'root') + ']');
                break;

            case NodeType.TEXT:
                nodePaths.unshift('text');
                break;
        }

        nodeParent = nodeParent.parent;
    }

    return nodePaths;
}
// #[end]

// exports = module.exports = getNodePath;


/**
 * @file text 节点类
 * @author errorrik(errorrik@gmail.com)
 */

// var each = require('../util/each');
// var isBrowser = require('../browser/is-browser');
// var removeEl = require('../browser/remove-el');
// var insertBefore = require('../browser/insert-before');
// var createHTMLBuffer = require('../runtime/create-html-buffer');
// var htmlBufferPush = require('../runtime/html-buffer-push');
// var htmlBufferComment = require('../runtime/html-buffer-comment');
// var outputHTMLBufferBefore = require('../runtime/output-html-buffer-before');
// var changeExprCompare = require('../runtime/change-expr-compare');
// var evalExpr = require('../runtime/eval-expr');
// var NodeType = require('./node-type');
// var getNodeStump = require('./get-node-stump');
// var warnSetHTML = require('./warn-set-html');
// var isEndStump = require('./is-end-stump');
// var getNodePath = require('./get-node-path');


/**
 * text 节点类
 *
 * @param {Object} aNode 抽象节点
 * @param {Component} owner 所属组件环境
 * @param {Model=} scope 所属数据环境
 * @param {Node} parent 父亲节点
 * @param {DOMChildrenWalker?} reverseWalker 子元素遍历对象
 */
function TextNode(aNode, owner, scope, parent, reverseWalker) {
    this.aNode = aNode;
    this.owner = owner;
    this.scope = scope;
    this.parent = parent;

    // #[begin] reverse
    if (reverseWalker) {
        var currentNode = reverseWalker.current;
        if (currentNode) {
            switch (currentNode.nodeType) {
                case 8:
                    if (currentNode.data === 's-text') {
                        currentNode.data = this.id;
                        reverseWalker.goNext();

                        while (1) { // eslint-disable-line
                            currentNode = reverseWalker.current;
                            if (!currentNode) {
                                throw new Error('[SAN REVERSE ERROR] Text end flag not found. \nPaths: '
                                    + getNodePath(this).join(' > '));
                            }

                            if (isEndStump(currentNode, 'text')) {
                                reverseWalker.goNext();
                                currentNode.data = this.id;
                                break;
                            }

                            reverseWalker.goNext();
                        }
                    }
                    break;

                case 3:
                    reverseWalker.goNext();
                    if (!this.aNode.textExpr.original) {
                        this.el = currentNode;
                    }
                    break;
            }
        }
    }
    // #[end]
}

TextNode.prototype.nodeType = NodeType.TEXT;

/**
 * 将text attach到页面
 *
 * @param {HTMLElement} parentEl 要添加到的父元素
 * @param {HTMLElement＝} beforeEl 要添加到哪个元素之前
 */
TextNode.prototype.attach = function (parentEl, beforeEl) {
    var buf = createHTMLBuffer();
    this._attachHTML(buf);
    outputHTMLBufferBefore(buf, parentEl, beforeEl);
};

/**
 * 销毁 text 节点
 */
TextNode.prototype.dispose = function () {
    this._prev = null;
    this.el = null;
};

/**
 * 获取文本节点对应的主元素
 *
 * @return {HTMLComment|HTMLTextNode}
 */
TextNode.prototype._getEl = function () {
    if (this.el) {
        return this.el;
    }

    if (!this.aNode.textExpr.original) {
        var parent = this.parent;
        var prev;

        var me = this;
        each(parent.children, function (child, i) {
            if (child === me) {
                return false;
            }

            prev = child;
        });

        var parentEl = parent._getEl();
        if (parentEl.nodeType !== 1) {
            parentEl = parentEl.parentNode;
        }

        var prevEl = prev && prev._getEl() && prev.el.nextSibling;
        if (!prevEl) {
            switch (parent.nodeType) {
                case NodeType.TPL:
                case NodeType.SLOT:
                    prevEl = parent.sel.nextSibling;
                    break;
                default:
                    prevEl = parentEl.firstChild;
            }
        }


        if (this.content) {
            this.el = prevEl;
        }
        else {
            this.el = document.createTextNode('');
            insertBefore(this.el, parentEl, prevEl);
        }
    }

    return getNodeStump(this);
},

/**
 * attach text 节点的 html
 *
 * @param {Object} buf html串存储对象
 */
TextNode.prototype._attachHTML = function (buf) {
    this.content = evalExpr(this.aNode.textExpr, this.scope, this.owner, 1);

    if (this.aNode.textExpr.original) {
        htmlBufferComment(buf, this.id);
    }

    htmlBufferPush(buf, this.content);

    if (this.aNode.textExpr.original) {
        htmlBufferComment(buf, this.id);
    }
};

var textUpdateProp = isBrowser
    && (typeof document.createTextNode('').textContent === 'string'
        ? 'textContent'
        : 'data');

/**
 * 更新 text 节点的视图
 *
 * @param {Array} changes 数据变化信息
 */
TextNode.prototype._update = function (changes) {
    if (this.aNode.textExpr.value) {
        return;
    }

    var el = this._getEl();

    var len = changes ? changes.length : 0;
    while (len--) {
        if (changeExprCompare(changes[len].expr, this.aNode.textExpr, this.scope)) {
            var text = evalExpr(this.aNode.textExpr, this.scope, this.owner, 1);

            if (text !== this.content) {
                this.content = text;
                var rawText = evalExpr(this.aNode.textExpr, this.scope, this.owner);

                if (this.aNode.textExpr.original) {
                    var startRemoveEl = this.sel.nextSibling;
                    var parentEl = el.parentNode;

                    while (startRemoveEl !== el) {
                        var removeTarget = startRemoveEl;
                        startRemoveEl = startRemoveEl.nextSibling;
                        removeEl(removeTarget);
                    }

                    // #[begin] error
                    warnSetHTML(parentEl);
                    // #[end]

                    var tempFlag = document.createElement('script');
                    parentEl.insertBefore(tempFlag, el);
                    tempFlag.insertAdjacentHTML('beforebegin', text);
                    parentEl.removeChild(tempFlag);
                }
                else {
                    el[textUpdateProp] = rawText;
                }
            }

            return;
        }
    }
};

// exports = module.exports = TextNode;


/**
 * @file 判断变更数组是否影响到数据引用摘要
 * @author errorrik(errorrik@gmail.com)
 */

// var each = require('../util/each');

/**
 * 判断变更数组是否影响到数据引用摘要
 *
 * @param {Array} changes 变更数组
 * @param {Object} dataRef 数据引用摘要
 * @return {boolean}
 */
function changesIsInDataRef(changes, dataRef) {
    var result;

    each(changes, function (change) {
        if (!change.overview) {
            var paths = change.expr.paths;
            change.overview = paths[0].value;

            if (paths.length > 1) {
                change.extOverview = paths[0].value + '.' + paths[1].value;
                change.wildOverview = paths[0].value + '.*';
            }
        }

        result = dataRef[change.overview]
            || change.wildOverview && dataRef[change.wildOverview]
            || change.extOverview && dataRef[change.extOverview];

        return !result;
    });

    return result;
}

// exports = module.exports = changesIsInDataRef;


/**
 * @file attaching 的 element 和 component 池
         完成 html fill 后执行 attached 操作，进行事件绑定等后续行为
 * @author errorrik(errorrik@gmail.com)
 */


/**
 * attaching 的 element 和 component 集合
 *
 * @inner
 * @type {Array}
 */
var attachingNodes = [];

/**
 * attaching 操作对象
 *
 * @type {Object}
 */
var attachings = {

    /**
     * 添加 attaching 的 element 或 component
     *
     * @param {Object|Component} node attaching的node
     */
    add: function (node) {
        attachingNodes.push(node);
    },

    /**
     * 执行 attaching 完成行为
     */
    done: function () {
        var nodes = attachingNodes.slice(0);
        attachingNodes = [];

        for (var i = 0, l = nodes.length; i < l; i++) {
            nodes[i]._attached();
        }
    }
};

// exports = module.exports = attachings;


/**
 * @file 元素子节点遍历操作类
 * @author errorrik(errorrik@gmail.com)
 */

// var removeEl = require('../browser/remove-el');

// #[begin] reverse
/**
 * 元素子节点遍历操作类
 *
 * @inner
 * @class
 * @param {HTMLElement} el 要遍历的元素
 */
function DOMChildrenWalker(el) {
    this.raw = [];
    this.index = 0;
    this.target = el;

    var child = el.firstChild;
    var next;
    while (child) {
        next = child.nextSibling;

        switch (child.nodeType) {
            case 3:
                if (/^\s*$/.test(child.data || child.textContent)) {
                    removeEl(child);
                }
                else {
                    this.raw.push(child);
                }
                break;

            case 1:
            case 8:
                this.raw.push(child);
        }

        child = next;
    }

    this.current = this.raw[this.index];
    this.next = this.raw[this.index + 1];
}

/**
 * 往下走一个元素
 */
DOMChildrenWalker.prototype.goNext = function () {
    this.current = this.raw[++this.index];
    this.next = this.raw[this.index + 1];
};
// #[end]

// exports = module.exports = DOMChildrenWalker;


/**
 * @file 元素节点类
 * @author errorrik(errorrik@gmail.com)
 */


// var each = require('../util/each');
// var guid = require('../util/guid');
// var removeEl = require('../browser/remove-el');
// var changeExprCompare = require('../runtime/change-expr-compare');
// var changesIsInDataRef = require('../runtime/changes-is-in-data-ref');
// var evalExpr = require('../runtime/eval-expr');
// var attachings = require('./attachings');
// var LifeCycle = require('./life-cycle');
// var NodeType = require('./node-type');
// var reverseElementChildren = require('./reverse-element-children');
// var isDataChangeByElement = require('./is-data-change-by-element');
// var elementUpdateChildren = require('./element-update-children');
// var elementOwnAttachHTML = require('./element-own-attach-html');
// var elementOwnCreate = require('./element-own-create');
// var elementOwnAttach = require('./element-own-attach');
// var elementOwnDetach = require('./element-own-detach');
// var elementOwnDispose = require('./element-own-dispose');
// var elementOwnGetEl = require('./element-own-get-el');
// var elementOwnGetElId = require('./element-own-get-el-id');
// var elementOwnOnEl = require('./element-own-on-el');
// var elementOwnToPhase = require('./element-own-to-phase');
// var elementAttached = require('./element-attached');
// var elementDispose = require('./element-dispose');
// var elementInitTagName = require('./element-init-tag-name');
// var handleProp = require('./handle-prop');
// var warnSetHTML = require('./warn-set-html');
// var getNodePath = require('./get-node-path');

/**
 * 元素节点类
 *
 * @param {Object} aNode 抽象节点
 * @param {Component} owner 所属组件环境
 * @param {Model=} scope 所属数据环境
 * @param {Node} parent 父亲节点
 * @param {DOMChildrenWalker?} reverseWalker 子元素遍历对象
 */
function Element(aNode, owner, scope, parent, reverseWalker) {
    this.aNode = aNode;
    this.owner = owner;
    this.scope = scope;
    this.parent = parent;

    this.lifeCycle = LifeCycle.start;
    this.children = [];
    this._elFns = [];
    this.parentComponent = parent.nodeType === NodeType.CMPT
        ? parent
        : parent.parentComponent;

    this.id = guid();

    elementInitTagName(this);

    this._toPhase('inited');

    // #[begin] reverse
    if (reverseWalker) {
        var currentNode = reverseWalker.current;

        if (!currentNode) {
            throw new Error('[SAN REVERSE ERROR] Element not found. \nPaths: '
                + getNodePath(this).join(' > '));
        }

        if (currentNode.nodeType !== 1) {
            throw new Error('[SAN REVERSE ERROR] Element type not match, expect 1 but '
                + currentNode.nodeType + '.\nPaths: '
                + getNodePath(this).join(' > '));
        }

        if (currentNode.tagName.toLowerCase() !== this.tagName) {
            throw new Error('[SAN REVERSE ERROR] Element tagName not match, expect '
                + this.tagName + ' but meat ' + currentNode.tagName.toLowerCase() + '.\nPaths: '
                + getNodePath(this).join(' > '));
        }

        this.el = currentNode;
        this.el.id = this._getElId();
        reverseWalker.goNext();

        reverseElementChildren(this);

        attachings.add(this);
    }
    // #[end]
}



Element.prototype.nodeType = NodeType.ELEM;


Element.prototype.attach = elementOwnAttach;
Element.prototype.detach = elementOwnDetach;
Element.prototype.dispose = elementOwnDispose;
Element.prototype._attachHTML = elementOwnAttachHTML;
Element.prototype._create = elementOwnCreate;
Element.prototype._getEl = elementOwnGetEl;
Element.prototype._getElId = elementOwnGetElId;
Element.prototype._toPhase = elementOwnToPhase;
Element.prototype._onEl = elementOwnOnEl;

Element.prototype._doneLeave = function () {
    if (this.leaveDispose) {
        if (!this.lifeCycle.disposed) {
            elementDispose(
                this,
                this.disposeNoDetach,
                this.disposeNoTransition
            );
        }
    }
    else if (this.lifeCycle.attached) {
        removeEl(this._getEl());
        this._toPhase('detached');
    }
};

/**
 * 视图更新
 *
 * @param {Array} changes 数据变化信息
 */
Element.prototype._update = function (changes) {
    if (!changesIsInDataRef(changes, this.aNode.hotspot.data)) {
        return;
    }

    this._getEl();
    var me = this;

    var dynamicProps = this.aNode.hotspot.dynamicProps;
    for (var i = 0, l = dynamicProps.length; i < l; i++) {
        var prop = dynamicProps[i];

        for (var j = 0, changeLen = changes.length; j < changeLen; j++) {
            var change = changes[j];

            if (!isDataChangeByElement(change, this, prop.name)
                && (
                    changeExprCompare(change.expr, prop.expr, this.scope)
                    || prop.hintExpr && changeExprCompare(change.expr, prop.hintExpr, this.scope)
                )
            ) {
                handleProp.prop(this, prop.name, evalExpr(prop.expr, this.scope, this.owner));
                break;
            }
        }
    }

    var htmlDirective = this.aNode.directives.html;
    if (htmlDirective) {
        each(changes, function (change) {
            if (changeExprCompare(change.expr, htmlDirective.value, me.scope)) {
                // #[begin] error
                warnSetHTML(me.el);
                // #[end]
                me.el.innerHTML = evalExpr(htmlDirective.value, me.scope, me.owner);
                return false;
            }
        });
    }
    else {
        elementUpdateChildren(this, changes);
    }
};

/**
 * 执行完成attached状态的行为
 */
Element.prototype._attached = function () {
    elementAttached(this);
};

// exports = module.exports = Element;


/**
 * @file 生成子元素html
 * @author errorrik(errorrik@gmail.com)
 */

// var escapeHTML = require('../runtime/escape-html');
// var htmlBufferPush = require('../runtime/html-buffer-push');
// var evalExpr = require('../runtime/eval-expr');
// var getANodeProp = require('./get-a-node-prop');
// var createNode = require('./create-node');

/**
 * 生成子元素html
 *
 * @param {Element} element 元素
 * @param {Object} buf html串存储对象
 */
function genElementChildrenHTML(element, buf) {
    if (element.tagName === 'textarea') {
        var valueProp = getANodeProp(element.aNode, 'value');
        if (valueProp) {
            htmlBufferPush(buf, escapeHTML(evalExpr(valueProp.expr, element.scope, element.owner)));
        }
    }
    else {
        var htmlDirective = element.aNode.directives.html;

        if (htmlDirective) {
            htmlBufferPush(buf, evalExpr(htmlDirective.value, element.scope, element.owner));
        }
        else {
            var aNodeChildren = element.aNode.children;
            for (var i = 0, l = aNodeChildren.length; i < l; i++) {
                var child = createNode(aNodeChildren[i], element);
                element.children.push(child);
                child._attachHTML(buf);
            }
        }
    }
}

// exports = module.exports = genElementChildrenHTML;


/**
 * @file 销毁节点，清空节点上的无用成员
 * @author errorrik(errorrik@gmail.com)
 */


/**
 * 销毁节点
 *
 * @param {Object} node 节点对象
 */
function nodeDispose(node) {
    node.el = null;
    node.owner = null;
    node.scope = null;
    node.aNode = null;
    node.parent = null;
    node.parentComponent = null;
    node.children = null;

    if (node._toPhase) {
        node._toPhase('disposed');
    }

    if (node._ondisposed) {
        node._ondisposed();
    }
}

// exports = module.exports = nodeDispose;


/**
 * @file 通过组件反解创建节点的工厂方法
 * @author errorrik(errorrik@gmail.com)
 */

// var hotTags = require('../browser/hot-tags');
// var NodeType = require('./node-type');
// var TextNode = require('./text-node');
// var Element = require('./element');
// var SlotNode = require('./slot-node');
// var ForNode = require('./for-node');
// var IfNode = require('./if-node');
// var TemplateNode = require('./template-node');

// #[begin] reverse
/**
 * 通过组件反解创建节点
 *
 * @param {ANode} aNode 抽象节点
 * @param {DOMChildrenWalker} reverseWalker 子元素遍历对象
 * @param {Node} parent 父亲节点
 * @param {Model=} scope 所属数据环境
 * @return {Node}
 */
function createReverseNode(aNode, reverseWalker, parent, scope) {
    var parentIsComponent = parent.nodeType === NodeType.CMPT;
    var owner = parentIsComponent ? parent : (parent.childOwner || parent.owner);
    scope = scope || (parentIsComponent ? parent.data : (parent.childScope || parent.scope));

    if (aNode.textExpr) {
        return new TextNode(aNode, owner, scope, parent, reverseWalker);
    }

    if (aNode.directives['if']) { // eslint-disable-line dot-notation
        return new IfNode(aNode, owner, scope, parent, reverseWalker);
    }

    if (aNode.directives['for']) { // eslint-disable-line dot-notation
        return new ForNode(aNode, owner, scope, parent, reverseWalker);
    }

    if (hotTags[aNode.tagName]) {
        return new Element(aNode, owner, scope, parent, reverseWalker);
    }

    switch (aNode.tagName) {
        case 'slot':
            return new SlotNode(aNode, owner, scope, parent, reverseWalker);

        case 'template':
            return new TemplateNode(aNode, owner, scope, parent, reverseWalker);

        default:
            var ComponentType = owner.getComponentType(aNode);
            if (ComponentType) {
                return new ComponentType({
                    aNode: aNode,
                    owner: owner,
                    scope: scope,
                    parent: parent,
                    subTag: aNode.tagName,
                    reverseWalker: reverseWalker
                });
            }
    }

    return new Element(aNode, owner, scope, parent, reverseWalker);
}
// #[end]

// exports = module.exports = createReverseNode;


/**
 * @file 销毁释放元素的子元素
 * @author errorrik(errorrik@gmail.com)
 */

/**
 * 销毁释放元素的子元素
 *
 * @param {Object} element 元素节点
 * @param {boolean=} noDetach 是否不要把节点从dom移除
 * @param {boolean=} noTransition 是否不显示过渡动画效果
 */
function elementDisposeChildren(element, noDetach, noTransition) {
    var children = element.children;
    var len = children && children.length;
    while (len--) {
        children[len].dispose(noDetach, noTransition);
    }
}

// exports = module.exports = elementDisposeChildren;


/**
 * @file 更新元素的子元素视图
 * @author errorrik(errorrik@gmail.com)
 */


/**
 * 更新元素的子元素视图
 *
 * @param {Object} element 要更新的元素
 * @param {Array} changes 数据变化信息
 */
function elementUpdateChildren(element, changes) {
    for (var i = 0, l = element.children.length; i < l; i++) {
        element.children[i]._update(changes);
    }
}

// exports = module.exports = elementUpdateChildren;


/**
 * @file 使元素节点到达相应的生命周期
 * @author errorrik(errorrik@gmail.com)
 */


// var LifeCycle = require('./life-cycle');

/**
 * 使元素节点到达相应的生命周期
 *
 * @param {string} name 生命周期名称
 */
function elementOwnToPhase(name) {
    this.lifeCycle = LifeCycle[name] || this.lifeCycle;
}

// exports = module.exports = elementOwnToPhase;


/**
 * @file 执行完成attached状态的行为
 * @author errorrik(errorrik@gmail.com)
 */


/**
 * 执行完成attached状态的行为
 */
function nodeOwnSimpleAttached() {
    this._toPhase('attached');
}

// exports = module.exports = nodeOwnSimpleAttached;


/**
 * @file 创建节点的工厂方法
 * @author errorrik(errorrik@gmail.com)
 */

// var hotTags = require('../browser/hot-tags');
// var NodeType = require('./node-type');
// var TextNode = require('./text-node');
// var Element = require('./element');
// var SlotNode = require('./slot-node');
// var ForNode = require('./for-node');
// var IfNode = require('./if-node');
// var TemplateNode = require('./template-node');


/**
 * 创建节点
 *
 * @param {ANode} aNode 抽象节点
 * @param {Node} parent 父亲节点
 * @param {Model=} scope 所属数据环境
 * @return {Node}
 */
function createNode(aNode, parent, scope) {
    var parentIsComponent = parent.nodeType === NodeType.CMPT;
    var owner = parentIsComponent ? parent : (parent.childOwner || parent.owner);
    scope = scope || (parentIsComponent ? parent.data : (parent.childScope || parent.scope));


    if (aNode.textExpr) {
        return new TextNode(aNode, owner, scope, parent);
    }

    if (aNode.directives['if']) { // eslint-disable-line dot-notation
        return new IfNode(aNode, owner, scope, parent);
    }

    if (aNode.directives['for']) { // eslint-disable-line dot-notation
        return new ForNode(aNode, owner, scope, parent);
    }

    if (hotTags[aNode.tagName]) {
        return new Element(aNode, owner, scope, parent);
    }



    switch (aNode.tagName) {
        case 'slot':
            return new SlotNode(aNode, owner, scope, parent);

        case 'template':
            return new TemplateNode(aNode, owner, scope, parent);

        default:
            var ComponentType = owner.getComponentType(aNode);
            if (ComponentType) {
                return new ComponentType({
                    aNode: aNode,
                    owner: owner,
                    scope: scope,
                    parent: parent,
                    subTag: aNode.tagName
                });
            }
    }

    return new Element(aNode, owner, scope, parent);
}

// exports = module.exports = createNode;


/**
 * @file 生成子元素
 * @author errorrik(errorrik@gmail.com)
 */

// var each = require('../util/each');
// var createNode = require('./create-node');

/**
 * 生成子元素
 *
 * @param {Element} element 元素
 * @param {Object} buf html串存储对象
 */
function genElementChildren(element, parentEl, beforeEl) {
    parentEl = parentEl || element._getEl();
    each(element.aNode.children, function (aNodeChild) {
        var child = createNode(aNodeChild, element);
        element.children.push(child);
        child.attach(parentEl, beforeEl);
    });
}

// exports = module.exports = genElementChildren;


/**
 * @file 将没有 root 只有 children 的元素 attach 到页面
 * @author errorrik(errorrik@gmail.com)
 */


// var each = require('../util/each');
// var insertBefore = require('../browser/insert-before');
// var createNode = require('./create-node');
// var genElementChildren = require('./gen-element-children');
// var attachings = require('./attachings');


/**
 * 将没有 root 只有 children 的元素 attach 到页面
 * 主要用于 slot 和 template
 *
 * @param {HTMLElement} parentEl 要添加到的父元素
 * @param {HTMLElement＝} beforeEl 要添加到哪个元素之前
 */
function nodeOwnOnlyChildrenAttach(parentEl, beforeEl) {
    this.sel = document.createComment(this.id);
    insertBefore(this.sel, parentEl, beforeEl);

    genElementChildren(this, parentEl, beforeEl);

    this.el = document.createComment(this.id);
    insertBefore(this.el, parentEl, beforeEl);

    attachings.done();
}

// exports = module.exports = nodeOwnOnlyChildrenAttach;


/**
 * @file 获取节点对应的 stump 主元素
 * @author errorrik(errorrik@gmail.com)
 */

// var getNodeStump = require('./get-node-stump');

/**
 * 获取节点对应的 stump 主元素
 *
 * @return {Comment}
 */
function nodeOwnGetStumpEl() {
    return getNodeStump(this);
}

// exports = module.exports = nodeOwnGetStumpEl;


/**
 * @file slot 节点类
 * @author errorrik(errorrik@gmail.com)
 */

// var each = require('../util/each');
// var guid = require('../util/guid');
// var createANode = require('../parser/create-a-node');
// var ExprType = require('../parser/expr-type');
// var createAccessor = require('../parser/create-accessor');
// var evalExpr = require('../runtime/eval-expr');
// var Data = require('../runtime/data');
// var DataChangeType = require('../runtime/data-change-type');
// var changeExprCompare = require('../runtime/change-expr-compare');
// var htmlBufferComment = require('../runtime/html-buffer-comment');
// var insertBefore = require('../browser/insert-before');
// var NodeType = require('./node-type');
// var attachings = require('./attachings');
// var LifeCycle = require('./life-cycle');
// var getANodeProp = require('./get-a-node-prop');
// var genElementChildrenHTML = require('./gen-element-children-html');
// var nodeDispose = require('./node-dispose');
// var createReverseNode = require('./create-reverse-node');
// var elementDisposeChildren = require('./element-dispose-children');
// var elementUpdateChildren = require('./element-update-children');
// var elementOwnToPhase = require('./element-own-to-phase');
// var nodeOwnSimpleAttached = require('./node-own-simple-attached');
// var nodeOwnOnlyChildrenAttach = require('./node-own-only-children-attach');
// var nodeOwnGetStumpEl = require('./node-own-get-stump-el');


/**
 * slot 节点类
 *
 * @param {Object} aNode 抽象节点
 * @param {Component} owner 所属组件环境
 * @param {Model=} scope 所属数据环境
 * @param {Node} parent 父亲节点
 * @param {DOMChildrenWalker?} reverseWalker 子元素遍历对象
 */
function SlotNode(aNode, owner, scope, parent, reverseWalker) {
    var realANode = createANode();
    this.aNode = realANode;
    this.owner = owner;
    this.scope = scope;
    this.parent = parent;
    this.parentComponent = parent.nodeType === NodeType.CMPT
        ? parent
        : parent.parentComponent;

    this.id = guid();

    this.lifeCycle = LifeCycle.start;
    this.children = [];

    // calc slot name
    this.nameBind = getANodeProp(aNode, 'name');
    if (this.nameBind) {
        this.isNamed = true;
        this.name = evalExpr(this.nameBind.expr, this.scope, this.owner);
    }

    // calc aNode children
    var givenSlots = owner.givenSlots;
    var givenChildren;
    if (givenSlots) {
        givenChildren = this.isNamed ? givenSlots.named[this.name] : givenSlots.noname;
    }

    if (givenChildren) {
        this.isInserted = true;
    }

    realANode.children = givenChildren || aNode.children.slice(0);

    var me = this;

    // calc scoped slot vars
    realANode.vars = aNode.vars;
    var initData = {};
    each(realANode.vars, function (varItem) {
        me.isScoped = true;
        initData[varItem.name] = evalExpr(varItem.expr, scope, owner);
    });

    // child owner & child scope
    if (this.isInserted) {
        this.childOwner = owner.owner;
        this.childScope = owner.scope;
    }

    if (this.isScoped) {
        this.childScope = new Data(initData, this.childScope || this.scope);
    }


    owner.slotChildren.push(this);

    // #[begin] reverse
    if (reverseWalker) {

        this.sel = document.createComment(this.id);
        insertBefore(this.sel, reverseWalker.target, reverseWalker.current);

        each(this.aNode.children, function (aNodeChild) {
            me.children.push(createReverseNode(aNodeChild, reverseWalker, me));
        });

        this.el = document.createComment(this.id);
        insertBefore(this.el, reverseWalker.target, reverseWalker.current);

        attachings.add(this);
    }
    // #[end]
}

SlotNode.prototype.nodeType = NodeType.SLOT;

/**
 * 销毁释放 slot
 *
 * @param {boolean=} noDetach 是否不要把节点从dom移除
 * @param {boolean=} noTransition 是否不显示过渡动画效果
 */
SlotNode.prototype.dispose = function (noDetach, noTransition) {
    this.childOwner = null;
    this.childScope = null;

    elementDisposeChildren(this, noDetach, noTransition);
    nodeDispose(this);
};

SlotNode.prototype.attach = nodeOwnOnlyChildrenAttach;
SlotNode.prototype._toPhase = elementOwnToPhase;
SlotNode.prototype._getEl = nodeOwnGetStumpEl;
SlotNode.prototype._attached = nodeOwnSimpleAttached;

/**
 * attach元素的html
 *
 * @param {Object} buf html串存储对象
 */
SlotNode.prototype._attachHTML = function (buf) {
    htmlBufferComment(buf, this.id);
    genElementChildrenHTML(this, buf);
    htmlBufferComment(buf, this.id);

    attachings.add(this);
};

/**
 * 视图更新函数
 *
 * @param {Array} changes 数据变化信息
 * @param {boolean=} isFromOuter 变化信息是否来源于父组件之外的组件
 * @return {boolean}
 */
SlotNode.prototype._update = function (changes, isFromOuter) {
    var me = this;

    if (this.nameBind && evalExpr(this.nameBind.expr, this.scope, this.owner) !== me.name) {
        this.owner._notifyNeedReload();
        return false;
    }

    if (isFromOuter) {
        if (this.isInserted) {
            elementUpdateChildren(this, changes);
        }
    }
    else {
        if (this.isScoped) {
            each(this.aNode.vars, function (varItem) {
                me.childScope.set(varItem.name, evalExpr(varItem.expr, me.scope, me.owner));
            });


            var scopedChanges = [];
            each(changes, function (change) {
                if (!me.isInserted) {
                    scopedChanges.push(change);
                }

                each(me.aNode.vars, function (varItem) {
                    var name = varItem.name;
                    var relation = changeExprCompare(change.expr, varItem.expr, me.scope);

                    if (relation < 1) {
                        return;
                    }

                    if (change.type === DataChangeType.SET) {
                        scopedChanges.push({
                            type: DataChangeType.SET,
                            expr: createAccessor([
                                {type: ExprType.STRING, value: name}
                            ]),
                            value: me.childScope.get(name),
                            option: change.option
                        });
                    }
                    else if (relation === 2) {
                        scopedChanges.push({
                            expr: createAccessor([
                                {type: ExprType.STRING, value: name}
                            ]),
                            type: DataChangeType.SPLICE,
                            index: change.index,
                            deleteCount: change.deleteCount,
                            value: change.value,
                            insertions: change.insertions,
                            option: change.option
                        });
                    }
                });
            });

            elementUpdateChildren(this, scopedChanges);
        }
        else if (!this.isInserted) {
            elementUpdateChildren(this, changes);
        }
    }
};

// exports = module.exports = SlotNode;


/**
 * @file 复制指令集合对象
 * @author errorrik(errorrik@gmail.com)
 */

/**
 * 复制指令集合对象
 *
 * @param {Object} source 要复制的指令集合对象
 * @param {Object=} excludes 需要排除的key集合
 * @return {Object}
 */
function cloneDirectives(source, excludes) {
    var result = {};
    excludes = excludes || {};

    for (var key in source) {
        if (!excludes[key]) {
            result[key] = source[key];
        }
    }

    return result;
}

// exports = module.exports = cloneDirectives;


/**
 * @file 简单执行销毁节点的行为
 * @author errorrik(errorrik@gmail.com)
 */

// var removeEl = require('../browser/remove-el');
// var nodeDispose = require('./node-dispose');
// var elementDisposeChildren = require('./element-dispose-children');

/**
 * 简单执行销毁节点的行为
 *
 * @param {boolean=} noDetach 是否不要把节点从dom移除
 */
function nodeOwnSimpleDispose(noDetach) {
    elementDisposeChildren(this, noDetach, 1);

    if (!noDetach) {
        removeEl(this._getEl());
    }

    nodeDispose(this);
}

// exports = module.exports = nodeOwnSimpleDispose;


/**
 * @file 创建节点对应的 stump comment 元素
 * @author errorrik(errorrik@gmail.com)
 */



/**
 * 创建节点对应的 stump comment 主元素
 */
function nodeOwnCreateStump() {
    this.el = this.el || document.createComment(this.id);
}

// exports = module.exports = nodeOwnCreateStump;




// #[begin] allua
function isSetHTMLNotAllow(node) {
    node = node.parent;
    while (node) {
        switch (node.nodeType) {
            case NodeType.ELEM:
            case NodeType.CMPT:
                return node.aNode.hotspot.noSetHTML;
        }

        node = node.parent;
    }
}
// #[end]

// exports = module.exports = isSetHTMLNotAllow;


/**
 * @file for 指令节点类
 * @author errorrik(errorrik@gmail.com)
 */

// var extend = require('../util/extend');
// var inherits = require('../util/inherits');
// var each = require('../util/each');
// var guid = require('../util/guid');
// var createANode = require('../parser/create-a-node');
// var ExprType = require('../parser/expr-type');
// var parseExpr = require('../parser/parse-expr');
// var createAccessor = require('../parser/create-accessor');
// var cloneDirectives = require('../parser/clone-directives');
// var Data = require('../runtime/data');
// var DataChangeType = require('../runtime/data-change-type');
// var changeExprCompare = require('../runtime/change-expr-compare');
// var createHTMLBuffer = require('../runtime/create-html-buffer');
// var htmlBufferComment = require('../runtime/html-buffer-comment');
// var outputHTMLBuffer = require('../runtime/output-html-buffer');
// var outputHTMLBufferBefore = require('../runtime/output-html-buffer-before');
// var evalExpr = require('../runtime/eval-expr');
// var changesIsInDataRef = require('../runtime/changes-is-in-data-ref');
// var removeEl = require('../browser/remove-el');
// var insertBefore = require('../browser/insert-before');
// var LifeCycle = require('./life-cycle');
// var attachings = require('./attachings');
// var NodeType = require('./node-type');
// var createNode = require('./create-node');
// var createReverseNode = require('./create-reverse-node');
// var getNodeStumpParent = require('./get-node-stump-parent');
// var nodeOwnSimpleDispose = require('./node-own-simple-dispose');
// var nodeOwnCreateStump = require('./node-own-create-stump');
// var nodeOwnGetStumpEl = require('./node-own-get-stump-el');
// var elementDisposeChildren = require('./element-dispose-children');
// var warnSetHTML = require('./warn-set-html');
// var isSetHTMLNotAllow = require('./is-set-html-not-allow');
// var dataCache = require('../runtime/data-cache');


/**
 * 循环项的数据容器类
 *
 * @inner
 * @class
 * @param {Object} forElement for元素对象
 * @param {*} item 当前项的数据
 * @param {number} index 当前项的索引
 */
function ForItemData(forElement, item, index) {
    this.id = guid();
    this.parent = forElement.scope;
    this.raw = {};
    this.listeners = [];

    this.directive = forElement.aNode.directives['for']; // eslint-disable-line dot-notation
    this.raw[this.directive.item.raw] = item;
    this.raw[this.directive.index.raw] = index;
}

/**
 * 将数据操作的表达式，转换成为对parent数据操作的表达式
 * 主要是对item和index进行处理
 *
 * @param {Object} expr 表达式
 * @return {Object}
 */
ForItemData.prototype.exprResolve = function (expr) {
    var directive = this.directive;
    var me = this;

    function resolveItem(expr) {
        if (expr.type === ExprType.ACCESSOR
            && expr.paths[0].value === directive.item.paths[0].value
        ) {
            return createAccessor(
                directive.value.paths.concat(
                    {
                        type: ExprType.NUMBER,
                        value: me.get(directive.index)
                    },
                    expr.paths.slice(1)
                )
            );
        }

        return expr;
    }

    expr = resolveItem(expr);

    var resolvedPaths = [];

    each(expr.paths, function (item) {
        resolvedPaths.push(
            item.type === ExprType.ACCESSOR
                && item.paths[0].value === directive.index.paths[0].value
            ? {
                type: ExprType.NUMBER,
                value: me.get(directive.index)
            }
            : resolveItem(item)
        );
    });

    return createAccessor(resolvedPaths);
};

// 代理数据操作方法
inherits(ForItemData, Data);
each(
    ['set', 'remove', 'unshift', 'shift', 'push', 'pop', 'splice'],
    function (method) {
        ForItemData.prototype['_' + method] = Data.prototype[method];
        ForItemData.prototype[method] = function (expr) {
            expr = this.exprResolve(parseExpr(expr));
            dataCache.clear();
            this.parent[method].apply(
                this.parent,
                [expr].concat(Array.prototype.slice.call(arguments, 1))
            );
        };
    }
);

/**
 * 创建 for 指令元素的子元素
 *
 * @inner
 * @param {ForDirective} forElement for 指令元素对象
 * @param {*} item 子元素对应数据
 * @param {number} index 子元素对应序号
 * @return {Element}
 */
function createForDirectiveChild(forElement, item, index) {
    var itemScope = new ForItemData(forElement, item, index);
    return createNode(forElement.itemANode, forElement, itemScope);
}

/**
 * for 指令节点类
 *
 * @param {Object} aNode 抽象节点
 * @param {Component} owner 所属组件环境
 * @param {Model=} scope 所属数据环境
 * @param {Node} parent 父亲节点
 * @param {DOMChildrenWalker?} reverseWalker 子元素遍历对象
 */
function ForNode(aNode, owner, scope, parent, reverseWalker) {
    this.aNode = aNode;
    this.owner = owner;
    this.scope = scope;
    this.parent = parent;
    this.parentComponent = parent.nodeType === NodeType.CMPT
        ? parent
        : parent.parentComponent;

    this.id = guid();
    this.children = [];

    this.itemANode = createANode({
        children: aNode.children,
        props: aNode.props,
        events: aNode.events,
        tagName: aNode.tagName,
        vars: aNode.vars,
        hotspot: aNode.hotspot,
        directives: cloneDirectives(aNode.directives, {
            'for': 1
        })
    });

    this.param = aNode.directives['for']; // eslint-disable-line dot-notation

    // #[begin] reverse
    if (reverseWalker) {
        var me = this;
        each(
            evalExpr(this.param.value, this.scope, this.owner),
            function (item, i) {
                var itemScope = new ForItemData(me, item, i);
                var child = createReverseNode(me.itemANode, reverseWalker, me, itemScope);
                me.children.push(child);
            }
        );

        this._create();
        insertBefore(this.el, reverseWalker.target, reverseWalker.current);
    }
    // #[end]
}


ForNode.prototype.nodeType = NodeType.FOR;
ForNode.prototype._create = nodeOwnCreateStump;
ForNode.prototype._getEl = nodeOwnGetStumpEl;
ForNode.prototype.dispose = nodeOwnSimpleDispose;

/**
 * 将元素attach到页面的行为
 *
 * @param {HTMLElement} parentEl 要添加到的父元素
 * @param {HTMLElement＝} beforeEl 要添加到哪个元素之前
 */
ForNode.prototype.attach = function (parentEl, beforeEl) {
    this._create();
    insertBefore(this.el, parentEl, beforeEl);

    // paint list
    var el = this.el || parentEl.firstChild;
    var prevEl = el && el.previousSibling;
    var buf = createHTMLBuffer();

    prev: while (prevEl) {
        var nextPrev = prevEl.previousSibling;
        switch (prevEl.nodeType) {
            case 1:
                break prev;

            case 3:
                if (!/^\s*$/.test(prevEl.textContent)) {
                    break prev;
                }

                removeEl(prevEl);
                break;

        }

        prevEl = nextPrev;
    }

    if (
        // #[begin] allua
        isSetHTMLNotAllow(this)
        ||
        // #[end]
        prevEl && prevEl.nodeType !== 1
    ) {
        var me = this;
        each(
            evalExpr(this.param.value, this.scope, this.owner),
            function (item, i) {
                var child = createForDirectiveChild(me, item, i);
                me.children.push(child);
                child.attach(parentEl, el);
            }
        );
    }
    else if (!prevEl) {
        this._attachHTML(buf, 1);
        outputHTMLBuffer(buf, parentEl, 'afterbegin');
    }
    else {
        this._attachHTML(buf, 1);
        outputHTMLBuffer(buf, prevEl, 'afterend');
    }

    attachings.done();
};

/**
 * 将元素从页面上移除的行为
 */
ForNode.prototype.detach = function () {
    if (this.lifeCycle.attached) {
        elementDisposeChildren(this);
        this.children = [];
        removeEl(this._getEl());
        this.lifeCycle = LifeCycle.detached;
    }
};


/**
 * attach元素的html
 *
 * @param {Object} buf html串存储对象
 * @param {boolean} onlyChildren 是否只attach列表本身html，不包括stump部分
 */
ForNode.prototype._attachHTML = function (buf, onlyChildren) {
    var me = this;
    each(
        evalExpr(this.param.value, this.scope, this.owner),
        function (item, i) {
            var child = createForDirectiveChild(me, item, i);
            me.children.push(child);
            child._attachHTML(buf);
        }
    );

    if (!onlyChildren) {
        htmlBufferComment(buf, me.id);
    }
};

/* eslint-disable fecs-max-statements */

/**
 * 视图更新函数
 *
 * @param {Array} changes 数据变化信息
 */
ForNode.prototype._update = function (changes) {

    var me = this;
    // 控制列表更新策略是否原样更新的变量
    var originalUpdate = this.aNode.directives.transition;


    var oldChildrenLen = this.children.length;
    var childrenChanges = new Array(oldChildrenLen);

    function pushToChildrenChanges(change) {
        for (var i = 0, l = childrenChanges.length; i < l; i++) {
            (childrenChanges[i] = childrenChanges[i] || []).push(change);
        }
    }

    var disposeChildren = [];

    this._getEl();

    // 判断列表是否父元素下唯一的元素
    // 如果是的话，可以做一些更新优化
    var parentEl = getNodeStumpParent(this);
    var parentFirstChild = parentEl.firstChild;
    var parentLastChild = parentEl.lastChild;
    var isOnlyParentChild = oldChildrenLen > 0 // 有孩子时
            && parentFirstChild === this.children[0]._getEl()
            && (parentLastChild === this.el || parentLastChild === this.children[oldChildrenLen - 1]._getEl())
        || oldChildrenLen === 0 // 无孩子时
            && parentFirstChild === this.el
            && parentLastChild === this.el;

    // 控制列表是否整体更新的变量
    var isChildrenRebuild;

    var newList = evalExpr(this.param.value, this.scope, this.owner);
    var newLen = newList && newList.length || 0;

    /* eslint-disable no-redeclare */
    for (var cIndex = 0, cLen = changes.length; cIndex < cLen; cIndex++) {
        var change = changes[cIndex];
        var relation = changeExprCompare(change.expr, this.param.value, this.scope);

        if (!relation) {
            // 无关时，直接传递给子元素更新，列表本身不需要动
            pushToChildrenChanges(change);
        }
        else if (relation > 2) {
            // 变更表达式是list绑定表达式的子项
            // 只需要对相应的子项进行更新
            var changePaths = change.expr.paths;
            var forLen = this.param.value.paths.length;
            var changeIndex = +evalExpr(changePaths[forLen], this.scope, this.owner);

            if (isNaN(changeIndex)) {
                pushToChildrenChanges(change);
            }
            else {
                change = {
                    type: change.type,
                    expr: createAccessor(
                        this.param.item.paths.concat(changePaths.slice(forLen + 1))
                    ),
                    value: change.value,
                    index: change.index,
                    deleteCount: change.deleteCount,
                    insertions: change.insertions,
                    option: change.option
                };

                (childrenChanges[changeIndex] = childrenChanges[changeIndex] || [])
                    .push(change);

                if (this.children[changeIndex]) {
                    switch (change.type) {
                        case DataChangeType.SET:
                            this.children[changeIndex].scope._set(
                                change.expr,
                                change.value,
                                {silent: 1}
                            );
                            break;


                        case DataChangeType.SPLICE:
                            this.children[changeIndex].scope._splice(
                                change.expr,
                                [].concat(change.index, change.deleteCount, change.insertions),
                                {silent: 1}
                            );
                            break;
                    }
                }
            }
        }
        else if (change.type === DataChangeType.SET) {
            // 变更表达式是list绑定表达式本身或母项的重新设值
            // 此时需要更新整个列表


            // 老的比新的多的部分，标记需要dispose
            if (oldChildrenLen > newLen) {
                disposeChildren = disposeChildren.concat(this.children.slice(newLen));

                childrenChanges = childrenChanges.slice(0, newLen);
                this.children = this.children.slice(0, newLen);
            }

            // 整项变更
            for (var i = 0; i < newLen; i++) {
                (childrenChanges[i] = childrenChanges[i] || []).push({
                    type: DataChangeType.SET,
                    option: change.option,
                    expr: createAccessor(this.param.item.paths.slice(0)),
                    value: newList[i]
                });

                // 对list更上级数据的直接设置
                if (relation < 2) {
                    childrenChanges[i].push(change);
                }

                if (this.children[i]) {
                    this.children[i].scope._set(
                        this.param.item,
                        newList[i],
                        {silent: 1}
                    );
                }
                else {
                    this.children[i] = 0;
                }
            }

            isChildrenRebuild = 1;
        }
        else if (relation === 2 && change.type === DataChangeType.SPLICE && !isChildrenRebuild) {
            // 变更表达式是list绑定表达式本身数组的splice操作
            // 此时需要删除部分项，创建部分项
            var changeStart = change.index;
            var deleteCount = change.deleteCount;
            var insertionsLen = change.insertions.length;
            var newCount = insertionsLen - deleteCount;

            if (newCount) {
                var indexChange = {
                    type: DataChangeType.SET,
                    option: change.option,
                    expr: this.param.index
                };

                for (var i = changeStart + deleteCount; i < this.children.length; i++) {
                    (childrenChanges[i] = childrenChanges[i] || []).push(indexChange);
                    this.children[i] && this.children[i].scope._set(
                        indexChange.expr,
                        i - deleteCount + insertionsLen,
                        { silent: 1 }
                    );
                }
            }

            var deleteLen = deleteCount;
            while (deleteLen--) {
                if (deleteLen < insertionsLen) {
                    var i = changeStart + deleteLen;
                    // update
                    (childrenChanges[i] = childrenChanges[i] || []).push({
                        type: DataChangeType.SET,
                        option: change.option,
                        expr: createAccessor(this.param.item.paths.slice(0)),
                        value: newList[i]
                    });
                    if (this.children[i]) {
                        this.children[i].scope._set(
                            this.param.item,
                            newList[i],
                            { silent: 1 }
                        );
                    }
                }
            }

            if (newCount < 0) {
                disposeChildren = disposeChildren.concat(this.children.splice(changeStart + insertionsLen, -newCount));
                childrenChanges.splice(changeStart + insertionsLen, -newCount);
            }
            else if (newCount > 0) {
                var spliceArgs = [changeStart + deleteCount, 0].concat(new Array(newCount));
                this.children.splice.apply(this.children, spliceArgs);
                childrenChanges.splice.apply(childrenChanges, spliceArgs);
            }
        }
    }

    var newChildrenLen = this.children.length;

    // 标记 length 是否发生变化
    if (newChildrenLen !== oldChildrenLen) {
        var lengthChange = {
            type: DataChangeType.SET,
            option: {},
            expr: createAccessor(
                this.param.value.paths.concat({
                    type: ExprType.STRING,
                    value: 'length'
                })
            )
        };

        if (changesIsInDataRef([lengthChange], this.aNode.hotspot.data)) {
            pushToChildrenChanges(lengthChange);
        }
    }

    // 清除应该干掉的 child
    this._doCreateAndUpdate = doCreateAndUpdate;

    // 这里不用getTransition，getTransition和scope相关，for和forItem的scope是不同的
    // 所以getTransition结果本身也是不一致的。不如直接判断指令是否存在，如果存在就不进入暴力清除模式
    // var violentClear = isOnlyParentChild && newChildrenLen === 0 && !elementGetTransition(me);
    var violentClear = !originalUpdate && isOnlyParentChild && newChildrenLen === 0;

    var disposedChildCount = 0;
    for (var i = 0; i < disposeChildren.length; i++) {
        var disposeChild = disposeChildren[i];
        if (disposeChild) {
            disposeChild._ondisposed = childDisposed;
            disposeChild.dispose(violentClear, violentClear);
        }
        else {
            childDisposed();
        }
    }

    if (violentClear) {
        // cloneNode + replaceChild is faster
        // parentEl.innerHTML = '';
        var replaceNode = parentEl.cloneNode(false);
        parentEl.parentNode.replaceChild(replaceNode, parentEl);
        this.el = document.createComment(this.id);
        replaceNode.appendChild(this.el);
    }

    if (disposeChildren.length === 0) {
        doCreateAndUpdate();
    }


    function childDisposed() {
        disposedChildCount++;
        if (disposedChildCount === disposeChildren.length
            && doCreateAndUpdate === me._doCreateAndUpdate
        ) {
            doCreateAndUpdate();
        }
    }

    function doCreateAndUpdate() {
        me._doCreateAndUpdate = null;
        if (violentClear) {
            return;
        }


        var newChildBuf = createHTMLBuffer();

        // 对相应的项进行更新
        if (oldChildrenLen === 0 && isOnlyParentChild) {
            for (var i = 0; i < newChildrenLen; i++) {
                (me.children[i] = createForDirectiveChild(me, newList[i], i))._attachHTML(newChildBuf);
            }
            outputHTMLBuffer(newChildBuf, parentEl);
            me.el = document.createComment(me.id);
            parentEl.appendChild(me.el);
        }
        else {
            // 如果不attached则直接创建，如果存在则调用更新函数

            // var attachStump = this;

            // while (newChildrenLen--) {
            //     var child = me.children[newChildrenLen];
            //     if (child.lifeCycle.attached) {
            //         childrenChanges[newChildrenLen].length && child._update(childrenChanges[newChildrenLen]);
            //     }
            //     else {
            //         child.attach(parentEl, attachStump._getEl() || parentEl.firstChild);
            //     }

            //     attachStump = child;
            // }

            // #[begin] allua
            var setHTMLNotAllow = isSetHTMLNotAllow(me);
            // #[end]

            for (var i = 0; i < newChildrenLen; i++) {
                var child = me.children[i];

                if (child) {
                    childrenChanges[i] && child._update(childrenChanges[i]);
                }
                else {
                    me.children[i] = createForDirectiveChild(me, newList[i], i);
                    newChildBuf = newChildBuf || createHTMLBuffer();

                    // #[begin] allua
                    if (setHTMLNotAllow) {
                        var newChildStart = i;
                    }
                    else {
                    // #[end]

                        me.children[i]._attachHTML(newChildBuf);

                    // #[begin] allua
                    }
                    // #[end]


                    // flush new children html
                    var nextChild = me.children[i + 1];
                    if (i === newChildrenLen - 1 || nextChild) {
                        var beforeEl = nextChild && nextChild._getEl() && (nextChild.sel || nextChild.el)
                            || me.el;

                        // #[begin] allua
                        if (setHTMLNotAllow) {
                            for (; newChildStart <= i; newChildStart++) {
                                me.children[newChildStart].attach(parentEl, beforeEl);
                            }
                        }
                        else {
                        // #[end]

                            outputHTMLBufferBefore(
                                newChildBuf,
                                parentEl,
                                beforeEl
                            );

                        // #[begin] allua
                        }
                        // #[end]

                        newChildBuf = null;
                    }
                }
            }
        }

        attachings.done();
    }
};


// exports = module.exports = ForNode;


/**
 * @file 清洗条件 aNode
 * @author errorrik(errorrik@gmail.com)
 */


// var createANode = require('../parser/create-a-node');
// var cloneDirectives = require('../parser/clone-directives');


/**
 * 清洗条件 aNode，返回纯净无条件指令的 aNode
 *
 * @param {ANode} aNode 条件节点对象
 * @return {ANode}
 */
function rinseCondANode(aNode) {
    var clearANode = createANode({
        children: aNode.children,
        props: aNode.props,
        events: aNode.events,
        tagName: aNode.tagName,
        vars: aNode.vars,
        hotspot: aNode.hotspot,
        directives: cloneDirectives(aNode.directives, {
            'if': 1,
            'else': 1,
            'elif': 1
        })
    });

    return clearANode;
}

// exports = module.exports = rinseCondANode;


/**
 * @file if 指令节点类
 * @author errorrik(errorrik@gmail.com)
 */

// var each = require('../util/each');
// var guid = require('../util/guid');
// var htmlBufferComment = require('../runtime/html-buffer-comment');
// var evalExpr = require('../runtime/eval-expr');
// var NodeType = require('./node-type');
// var rinseCondANode = require('./rinse-cond-anode');
// var createNode = require('./create-node');
// var createReverseNode = require('./create-reverse-node');
// var getNodeStumpParent = require('./get-node-stump-parent');
// var elementUpdateChildren = require('./element-update-children');
// var nodeOwnSimpleDispose = require('./node-own-simple-dispose');
// var nodeOwnGetStumpEl = require('./node-own-get-stump-el');

/**
 * if 指令节点类
 *
 * @param {Object} aNode 抽象节点
 * @param {Component} owner 所属组件环境
 * @param {Model=} scope 所属数据环境
 * @param {Node} parent 父亲节点
 * @param {DOMChildrenWalker?} reverseWalker 子元素遍历对象
 */
function IfNode(aNode, owner, scope, parent, reverseWalker) {
    this.aNode = aNode;
    this.owner = owner;
    this.scope = scope;
    this.parent = parent;
    this.parentComponent = parent.nodeType === NodeType.CMPT
        ? parent
        : parent.parentComponent;

    this.id = guid();
    this.children = [];

    this.cond = this.aNode.directives['if'].value; // eslint-disable-line dot-notation

    // #[begin] reverse
    if (reverseWalker) {
        if (evalExpr(this.cond, this.scope, this.owner)) {
            this.elseIndex = -1;
            this.children[0] = createReverseNode(
                rinseCondANode(aNode),
                reverseWalker,
                this
            );
        }
        else {
            var me = this;
            each(aNode.elses, function (elseANode, index) {
                var elif = elseANode.directives.elif;

                if (!elif || elif && evalExpr(elif.value, me.scope, me.owner)) {
                    me.elseIndex = index;
                    me.children[0] = createReverseNode(
                        rinseCondANode(elseANode),
                        reverseWalker,
                        me
                    );
                    return false;
                }
            });
        }
    }
    // #[end]
}

IfNode.prototype.nodeType = NodeType.IF;
IfNode.prototype._getEl = nodeOwnGetStumpEl;
IfNode.prototype.dispose = nodeOwnSimpleDispose;


/**
 * attach元素的html
 *
 * @param {Object} buf html串存储对象
 */
IfNode.prototype._attachHTML = function (buf) {
    var me = this;
    var elseIndex;
    var child;

    if (evalExpr(this.cond, this.scope, this.owner)) {
        child = createNode(rinseCondANode(me.aNode), me);
        elseIndex = -1;
    }
    else {
        each(me.aNode.elses, function (elseANode, index) {
            var elif = elseANode.directives.elif;

            if (!elif || elif && evalExpr(elif.value, me.scope, me.owner)) {
                child = createNode(rinseCondANode(elseANode), me);
                elseIndex = index;
                return false;
            }
        });
    }

    if (child) {
        me.children[0] = child;
        child._attachHTML(buf);
        me.elseIndex = elseIndex;
    }

    htmlBufferComment(buf, this.id);
};

/**
 * 视图更新函数
 *
 * @param {Array} changes 数据变化信息
 */
IfNode.prototype._update = function (changes) {
    var me = this;
    var childANode = me.aNode;
    var elseIndex;

    if (evalExpr(this.cond, this.scope, this.owner)) {
        elseIndex = -1;
    }
    else {
        each(me.aNode.elses, function (elseANode, index) {
            var elif = elseANode.directives.elif;

            if (elif && evalExpr(elif.value, me.scope, me.owner) || !elif) {
                elseIndex = index;
                childANode = elseANode;
                return false;
            }
        });
    }

    if (elseIndex === me.elseIndex) {
        elementUpdateChildren(me, changes);
    }
    else {
        var child = me.children[0];
        me.children = [];
        if (child) {
            child._ondisposed = newChild;
            child.dispose();
        }
        else {
            newChild();
        }

        me.elseIndex = elseIndex;
    }

    function newChild() {
        if (typeof elseIndex !== 'undefined') {
            var child = createNode(rinseCondANode(childANode), me);
            var parentEl = getNodeStumpParent(me);
            child.attach(parentEl, me._getEl() || parentEl.firstChild);

            me.children[0] = child;
        }
    }
};

// exports = module.exports = IfNode;


/**
 * @file template 节点类
 * @author errorrik(errorrik@gmail.com)
 */

// var each = require('../util/each');
// var guid = require('../util/guid');
// var insertBefore = require('../browser/insert-before');
// var htmlBufferComment = require('../runtime/html-buffer-comment');
// var NodeType = require('./node-type');
// var LifeCycle = require('./life-cycle');
// var genElementChildrenHTML = require('./gen-element-children-html');
// var nodeDispose = require('./node-dispose');
// var createReverseNode = require('./create-reverse-node');
// var elementDisposeChildren = require('./element-dispose-children');
// var elementOwnToPhase = require('./element-own-to-phase');
// var attachings = require('./attachings');
// var elementUpdateChildren = require('./element-update-children');
// var nodeOwnSimpleAttached = require('./node-own-simple-attached');
// var nodeOwnOnlyChildrenAttach = require('./node-own-only-children-attach');
// var nodeOwnGetStumpEl = require('./node-own-get-stump-el');

/**
 * template 节点类
 *
 * @param {Object} aNode 抽象节点
 * @param {Component} owner 所属组件环境
 * @param {Model=} scope 所属数据环境
 * @param {Node} parent 父亲节点
 * @param {DOMChildrenWalker?} reverseWalker 子元素遍历对象
 */
function TemplateNode(aNode, owner, scope, parent, reverseWalker) {
    this.aNode = aNode;
    this.owner = owner;
    this.scope = scope;
    this.parent = parent;
    this.parentComponent = parent.nodeType === NodeType.CMPT
        ? parent
        : parent.parentComponent;

    this.id = guid();
    this.lifeCycle = LifeCycle.start;
    this.children = [];

    // #[begin] reverse
    if (reverseWalker) {
        this.sel = document.createComment(this.id);
        insertBefore(this.sel, reverseWalker.target, reverseWalker.current);

        var me = this;
        each(this.aNode.children, function (aNodeChild) {
            me.children.push(createReverseNode(aNodeChild, reverseWalker, me));
        });

        this.el = document.createComment(this.id);
        insertBefore(this.el, reverseWalker.target, reverseWalker.current);

        attachings.add(this);
    }
    // #[end]
}



TemplateNode.prototype.nodeType = NodeType.TPL;

TemplateNode.prototype.attach = nodeOwnOnlyChildrenAttach;

/**
 * 销毁释放
 *
 * @param {boolean=} noDetach 是否不要把节点从dom移除
 * @param {boolean=} noTransition 是否不显示过渡动画效果
 */
TemplateNode.prototype.dispose = function (noDetach, noTransition) {
    elementDisposeChildren(this, noDetach, noTransition);
    nodeDispose(this);
};


TemplateNode.prototype._toPhase = elementOwnToPhase;
TemplateNode.prototype._getEl = nodeOwnGetStumpEl;

/**
 * attach 元素的 html
 *
 * @param {Object} buf html串存储对象
 */
TemplateNode.prototype._attachHTML = function (buf) {
    htmlBufferComment(buf, this.id);
    genElementChildrenHTML(this, buf);
    htmlBufferComment(buf, this.id);

    attachings.add(this);
};

TemplateNode.prototype._attached = nodeOwnSimpleAttached;

/**
 * 视图更新函数
 *
 * @param {Array} changes 数据变化信息
 */
TemplateNode.prototype._update = function (changes) {
    elementUpdateChildren(this, changes);
};

// exports = module.exports = TemplateNode;


/**
 * @file 对元素的子节点进行反解
 * @author errorrik(errorrik@gmail.com)
 */


// var each = require('../util/each');
// var DOMChildrenWalker = require('./dom-children-walker');
// var createReverseNode = require('./create-reverse-node');

// #[begin] reverse

/**
 * 对元素的子节点进行反解
 *
 * @param {Object} element 元素
 */
function reverseElementChildren(element) {
    var htmlDirective = element.aNode.directives.html;

    if (!htmlDirective) {
        var reverseWalker = new DOMChildrenWalker(element.el);

        each(element.aNode.children, function (aNodeChild) {
            element.children.push(createReverseNode(aNodeChild, reverseWalker, element));
        });
    }
}
// #[end]

// exports = module.exports = reverseElementChildren;


/**
 * @file 标记 HTML 字符串连接对象当前为 tag 起始位置
 * @author errorrik(errorrik@gmail.com)
 */

// var ieOldThan9 = require('../browser/ie-old-than-9');
// var empty = require('../util/empty');

/**
 * 标记 HTML 字符串连接对象当前为 tag 起始位置
 *
 * @param {Object} buf 字符串连接对象
 * @param {string} id 起始tag的id
 */
var htmlBufferTagStart =
    // #[begin] allua
    ieOldThan9
    ? function (buf, id) {
        buf.tagId = id;
        buf.tagStart = 1;
    }
    :
    // #[end]
    empty;

// exports = module.exports = htmlBufferTagStart;


/**
 * @file 处理元素的属性操作
 * @author errorrik(errorrik@gmail.com)
 */

// var getPropHandler = require('./get-prop-handler');

/**
 * 处理元素属性操作
 */
var handleProp = {
    attr: function (element, name, value) {
        return getPropHandler(element, name).attr(element, name, value);
    },

    prop: function (element, name, value) {
        getPropHandler(element, name).prop(element, name, value);
    }
};

// exports = module.exports = handleProp;


/**
 * @file bool属性表
 * @author errorrik(errorrik@gmail.com)
 */


// var splitStr2Obj = require('../util/split-str-2-obj');

/**
 * bool属性表
 *
 * @type {Object}
 */
var boolAttrs = splitStr2Obj('checked,readonly,selected,multiple,disabled');

// exports = module.exports = boolAttrs;


/**
 * @file attach 元素的 HTML
 * @author errorrik(errorrik@gmail.com)
 */

// var htmlBufferPush = require('../runtime/html-buffer-push');
// var htmlBufferTagStart = require('../runtime/html-buffer-tag-start');
// var escapeHTML = require('../runtime/escape-html');
// var evalExpr = require('../runtime/eval-expr');
// var autoCloseTags = require('../browser/auto-close-tags');
// var getANodeProp = require('./get-a-node-prop');
// var NodeType = require('./node-type');
// var handleProp = require('./handle-prop');
// var genElementChildrenHTML = require('./gen-element-children-html');
// var attachings = require('./attachings');
// var LifeCycle = require('./life-cycle');
// var boolAttrs = require('../browser/bool-attrs');



/**
 * attach 元素的 HTML
 *
 * @param {Object} buf html串存储对象
 */
function elementOwnAttachHTML(buf) {
    this.lifeCycle = LifeCycle.painting;
    var tagName = this.tagName;

    // tag start
    if (!tagName) {
        return;
    }

    var elementIsComponent = this.nodeType === NodeType.CMPT;
    htmlBufferPush(buf, '<' + tagName + this.aNode.hotspot.staticAttr);

    var props = this.aNode.hotspot.dynamicProps;
    for (var i = 0, l = props.length; i < l; i++) {
        var prop = props[i];
        if (!prop.id) {
            var value = elementIsComponent
                ? evalExpr(prop.expr, this.data, this)
                : evalExpr(prop.expr, this.scope, this.owner, 1);

            if (prop.x && !boolAttrs[prop.name]) {
                value = escapeHTML(value);
            }

            htmlBufferPush(buf, handleProp.attr(this, prop.name, value) || '');
        }
    }

    var id = this._getElId();
    htmlBufferPush(buf, ' id="' + id + '"' + '>');
    if (!autoCloseTags[tagName]) {
        htmlBufferTagStart(buf, id);
    }

    // gen children
    genElementChildrenHTML(this, buf);

    // tag close
    if (!autoCloseTags[tagName]) {
        htmlBufferPush(buf, '</' + tagName + '>');
    }

    attachings.add(this);
}

// exports = module.exports = elementOwnAttachHTML;


/**
 * @file 创建节点对应的 HTMLElement 主元素
 * @author errorrik(errorrik@gmail.com)
 */


// var each = require('../util/each');
// var evalExpr = require('../runtime/eval-expr');
// var createEl = require('../browser/create-el');
// var handleProp = require('./handle-prop');
// var LifeCycle = require('./life-cycle');
// var NodeType = require('./node-type');

/**
 * 创建节点对应的 HTMLElement 主元素
 */
function elementOwnCreate() {
    if (!this.lifeCycle.created) {
        this.lifeCycle = LifeCycle.painting;
        this.el = createEl(this.tagName);
        var isComponent = this.nodeType === NodeType.CMPT;

        var me = this;
        each(this.aNode.props, function (prop) {
            var value = isComponent
                ? evalExpr(prop.expr, me.data, me)
                : evalExpr(prop.expr, me.scope, me.owner);

            handleProp.prop(me, prop.name, value);

            if (prop.name === 'id') {
                return;
            }
        });

        this.el.id = this._getElId();

        this._toPhase('created');
    }
}

// exports = module.exports = elementOwnCreate;


/**
 * @file 将元素attach到页面
 * @author errorrik(errorrik@gmail.com)
 */

// var createHTMLBuffer = require('../runtime/create-html-buffer');
// var outputHTMLBuffer = require('../runtime/output-html-buffer');
// var insertBefore = require('../browser/insert-before');
// var genElementChildrenHTML = require('./gen-element-children-html');
// var genElementChildren = require('./gen-element-children');

/**
 * 将元素attach到页面
 *
 * @param {Object} element 元素节点
 * @param {HTMLElement} parentEl 要添加到的父元素
 * @param {HTMLElement＝} beforeEl 要添加到哪个元素之前
 */
function elementAttach(element, parentEl, beforeEl) {
    element._create();
    insertBefore(element.el, parentEl, beforeEl);

    if (!element._contentReady) {
        // #[begin] allua
        if (element.aNode.hotspot.noSetHTML) {
            genElementChildren(element);
        }
        else {
        // #[end]
            var buf = createHTMLBuffer();
            genElementChildrenHTML(element, buf);
            outputHTMLBuffer(buf, element.el);
        // #[begin] allua
        }
        // #[end]

        element._contentReady = 1;
    }
}


// exports = module.exports = elementAttach;


/**
 * @file 将元素attach到页面
 * @author errorrik(errorrik@gmail.com)
 */


// var elementAttach = require('./element-attach');
// var attachings = require('./attachings');

/**
 * 将元素attach到页面
 *
 * @param {HTMLElement} parentEl 要添加到的父元素
 * @param {HTMLElement＝} beforeEl 要添加到哪个元素之前
 */
function elementOwnAttach(parentEl, beforeEl) {
    if (!this.lifeCycle.attached) {
        elementAttach(this, parentEl, beforeEl);
        attachings.add(this);
        attachings.done();

        this._toPhase('attached');
    }
}

// exports = module.exports = elementOwnAttach;


/**
 * @file 获取 element 的 transition 控制对象
 * @author errorrik(errorrik@gmail.com)
 */

// var evalArgs = require('../runtime/eval-args');
// var findMethod = require('../runtime/find-method');
// var NodeType = require('./node-type');

/**
 * 获取 element 的 transition 控制对象
 *
 * @param {Object} element 元素
 * @return {Object?}
 */
function elementGetTransition(element) {
    var aNode = element.nodeType === NodeType.CMPT ? element.givenANode : element.aNode;
    var directive = aNode && aNode.directives.transition;
    var owner = element.owner;

    var transition;
    if (directive && owner) {
        transition = findMethod(owner, directive.value.name);

        if (typeof transition === 'function') {
            transition = transition.apply(
                owner,
                evalArgs(directive.value.args, element.scope, owner)
            );
        }
    }

    return transition || element.transition;
}

// exports = module.exports = elementGetTransition;


/**
 * @file 元素节点执行leave行为
 * @author errorrik(errorrik@gmail.com)
 */

// var elementGetTransition = require('./element-get-transition');


/**
 * 元素节点执行leave行为
 *
 * @param {Object} element 元素
 */
function elementLeave(element) {
    var lifeCycle = element.lifeCycle;
    if (lifeCycle.leaving || !lifeCycle.attached) {
        return;
    }

    if (element.disposeNoTransition) {
        element._doneLeave();
    }
    else {
        var transition = elementGetTransition(element);

        if (transition && transition.leave) {
            element._toPhase('leaving');
            transition.leave(element._getEl(), function () {
                element._doneLeave();
            });
        }
        else {
            element._doneLeave();
        }
    }
}

// exports = module.exports = elementLeave;


/**
 * @file 将元素从页面上移除
 * @author errorrik(errorrik@gmail.com)
 */

// var elementLeave = require('./element-leave');

/**
 * 将元素从页面上移除
 */
function elementOwnDetach() {
    elementLeave(this);
}


// exports = module.exports = elementOwnDetach;


/**
 * @file 销毁释放元素
 * @author errorrik(errorrik@gmail.com)
 */

// var elementLeave = require('./element-leave');

/**
 * 销毁释放元素
 *
 * @param {boolean=} noDetach 是否不要把节点从dom移除
 * @param {boolean=} noTransition 是否不显示过渡动画效果
 */
function elementOwnDispose(noDetach, noTransition) {
    this.leaveDispose = 1;
    this.disposeNoDetach = noDetach;
    this.disposeNoTransition = noTransition;

    elementLeave(this);
}

// exports = module.exports = elementOwnDispose;


/**
 * @file 获取节点对应的主元素
 * @author errorrik(errorrik@gmail.com)
 */

/**
 * 获取节点对应的主元素
 *
 * @return {HTMLElement}
 */
function elementOwnGetEl() {
    if (!this.el) {
        this.el = document.getElementById(this._elId);
    }

    return this.el;
}

// exports = module.exports = elementOwnGetEl;


/**
 * @file 获取节点对应的主元素id
 * @author errorrik(errorrik@gmail.com)
 */

/**
 * 获取节点对应的主元素id
 *
 * @return {string}
 */
function elementOwnGetElId() {
    var id;
    if (this.aNode.hotspot.idProp) {
        id = this.nodeType === NodeType.CMPT
            ? evalExpr(this.aNode.hotspot.idProp.expr, this.data, this)
            : evalExpr(this.aNode.hotspot.idProp.expr, this.scope, this.owner, 1);
    }

    return (this._elId = id || this.id);
}


// exports = module.exports = elementOwnGetElId;


/**
 * @file 为元素的 el 绑定事件
 * @author errorrik(errorrik@gmail.com)
 */

// var on = require('../browser/on');

/**
 * 为元素的 el 绑定事件
 *
 * @param {string} name 事件名
 * @param {Function} listener 监听器
 * @param {boolean} capture 是否是捕获阶段触发
 */
function elementOwnOnEl(name, listener, capture) {
    if (typeof listener === 'function') {
        capture = !!capture;
        this._elFns.push([name, listener, capture]);
        on(this._getEl(), name, listener, capture);
    }
}

// exports = module.exports = elementOwnOnEl;


/**
 * @file  事件绑定不存在的 warning
 * @author varsha(wangshuonpu@gmail.com)
 */

// var each = require('../util/each');

// #[begin] error
/**
 * 事件绑定不存在的 warning
 *
 * @param {Object} eventBind 事件绑定对象
 * @param {Component} owner 所属的组件对象
 */
function warnEventListenMethod(eventBind, owner) {
    var valid = true;
    var method = owner;
    each(eventBind.expr.name.paths, function (path) {
        if (!path.value) {
            return false;
        }

        method = method[path.value];
        valid = !!method;
        return valid;
    });

    if (!valid) {
        var paths = [];
        each(eventBind.expr.name.paths, function (path) {
            paths.push(path.value);
        });
        var message = '[SAN WARNING] ' + eventBind.name + ' listen fail,"' + paths.join('.') + '" not exist';

        /* eslint-disable no-console */
        if (typeof console === 'object' && console.warn) {
            console.warn(message);
        }
        else {
            throw new Error(message);
        }
        /* eslint-enable no-console */
    }
}
// #[end]

// exports = module.exports = warnEventListenMethod;


/**
 * @file 完成元素 attached 后的行为
 * @author errorrik(errorrik@gmail.com)
 */


// var bind = require('../util/bind');
// var empty = require('../util/empty');
// var isBrowser = require('../browser/is-browser');
// var trigger = require('../browser/trigger');
// var NodeType = require('./node-type');
// var elementGetTransition = require('./element-get-transition');
// var eventDeclarationListener = require('./event-declaration-listener');
// var getPropHandler = require('./get-prop-handler');
// var warnEventListenMethod = require('./warn-event-listen-method');

/**
 * 双绑输入框CompositionEnd事件监听函数
 *
 * @inner
 */
function inputOnCompositionEnd() {
    if (!this.composing) {
        return;
    }

    this.composing = 0;

    trigger(this, 'input');
}

/**
 * 双绑输入框CompositionStart事件监听函数
 *
 * @inner
 */
function inputOnCompositionStart() {
    this.composing = 1;
}

function xPropOutputer(xProp, data) {
    getPropHandler(this, xProp.name).output(this, xProp, data);
}

function inputXPropOutputer(element, xProp, data) {
    var outputer = bind(xPropOutputer, element, xProp, data);
    return function (e) {
        if (!this.composing) {
            outputer(e);
        }
    };
}

/**
 * 完成元素 attached 后的行为
 *
 * @param {Object} element 元素节点
 */
function elementAttached(element) {
    element._toPhase('created');

    var elementIsComponent = element.nodeType === NodeType.CMPT;
    var data = elementIsComponent ? element.data : element.scope;

    /* eslint-disable no-redeclare */

    // 处理自身变化时双向绑定的逻辑
    var xProps = element.aNode.hotspot.xProps;
    for (var i = 0, l = xProps.length; i < l; i++) {
        var el = element._getEl();
        var xProp = xProps[i];

        switch (xProp.name) {
            case 'value':
                switch (element.tagName) {
                    case 'input':
                    case 'textarea':
                        if (isBrowser && window.CompositionEvent) {
                            element._onEl('change', inputOnCompositionEnd);
                            element._onEl('compositionstart', inputOnCompositionStart);
                            element._onEl('compositionend', inputOnCompositionEnd);
                        }

                        element._onEl(
                            ('oninput' in el) ? 'input' : 'propertychange',
                            inputXPropOutputer(element, xProp, data)
                        );

                        break;

                    case 'select':
                        element._onEl('change', bind(xPropOutputer, element, xProp, data));
                        break;
                }
                break;

            case 'checked':
                switch (element.tagName) {
                    case 'input':
                        switch (el.type) {
                            case 'checkbox':
                            case 'radio':
                                element._onEl('click', bind(xPropOutputer, element, xProp, data));
                        }
                }
                break;
        }
    }

    // bind events
    var events = elementIsComponent
        ? element.aNode.events.concat(element.nativeEvents)
        : element.aNode.events;

    for (var i = 0, l = events.length; i < l; i++) {
        var eventBind = events[i];
        var owner = elementIsComponent ? element : element.owner;

        // 判断是否是nativeEvent，下面的warn方法和事件绑定都需要
        // 依此指定eventBind.expr.name位于owner还是owner.owner上
        if (eventBind.modifier.native) {
            owner = owner.owner;
            data = element.scope || owner.data;
        }

        // #[begin] error
        warnEventListenMethod(eventBind, owner);
        // #[end]

        element._onEl(
            eventBind.name,
            bind(
                eventDeclarationListener,
                owner,
                eventBind,
                0,
                data
            ),
            eventBind.modifier.capture
        );
    }

    element._toPhase('attached');


    if (element._isInitFromEl) {
        element._isInitFromEl = false;
    }
    else {
        var transition = elementGetTransition(element);
        if (transition && transition.enter) {
            transition.enter(element._getEl(), empty);
        }
    }
}

// exports = module.exports = elementAttached;


/**
 * @file 销毁元素节点
 * @author errorrik(errorrik@gmail.com)
 */


// var un = require('../browser/un');
// var removeEl = require('../browser/remove-el');
// var elementDisposeChildren = require('./element-dispose-children');
// var nodeDispose = require('./node-dispose');

/**
 * 销毁元素节点
 *
 * @param {Object} element 要销毁的元素节点
 * @param {Object=} options 销毁行为的参数
 */
function elementDispose(element) {
    elementDisposeChildren(element, 1, 1);

    // el 事件解绑
    var len = element._elFns.length;
    while (len--) {
        var fn = element._elFns[len];
        un(element._getEl(), fn[0], fn[1], fn[2]);
    }
    element._elFns = null;


    // 如果没有parent，说明是一个root component，一定要从dom树中remove
    if (!element.disposeNoDetach || !element.parent) {
        removeEl(element._getEl());
    }

    if (element._toPhase) {
        element._toPhase('detached');
    }

    nodeDispose(element);
}


// exports = module.exports = elementDispose;


/**
 * @file 初始化 element 节点的 tagName 处理
 * @author errorrik(errorrik@gmail.com)
 */

// var ieOldThan9 = require('../browser/ie-old-than-9');

/**
 * 初始化 element 节点的 tagName 处理
 *
 * @param {Object} node 节点对象
 */
function elementInitTagName(node) {
    node.tagName = node.tagName || node.aNode.tagName || 'div';

    // #[begin] allua
    // ie8- 不支持innerHTML输出自定义标签
    if (ieOldThan9 && node.tagName.indexOf('-') > 0) {
        node.tagName = 'div';
    }
    // #[end]
}


// exports = module.exports = elementInitTagName;


/**
 * @file 给 devtool 发通知消息
 * @author errorrik(errorrik@gmail.com)
 */

// var isBrowser = require('../browser/is-browser');

// #[begin] devtool
var san4devtool;

/**
 * 给 devtool 发通知消息
 *
 * @param {string} name 消息名称
 * @param {*} arg 消息参数
 */
function emitDevtool(name, arg) {
    if (isBrowser && san4devtool && san4devtool.debug && window.__san_devtool__) {
        window.__san_devtool__.emit(name, arg);
    }
}

emitDevtool.start = function (main) {
    san4devtool = main;
    emitDevtool('san', main);
};
// #[end]

// exports = module.exports = emitDevtool;


/**
 * @file 组件类
 * @author errorrik(errorrik@gmail.com)
 */

// var bind = require('../util/bind');
// var each = require('../util/each');
// var guid = require('../util/guid');
// var extend = require('../util/extend');
// var nextTick = require('../util/next-tick');
// var emitDevtool = require('../util/emit-devtool');
// var ExprType = require('../parser/expr-type');
// var parseExpr = require('../parser/parse-expr');
// var createAccessor = require('../parser/create-accessor');
// var postProp = require('../parser/post-prop');
// var removeEl = require('../browser/remove-el');
// var Data = require('../runtime/data');
// var evalExpr = require('../runtime/eval-expr');
// var changeExprCompare = require('../runtime/change-expr-compare');
// var compileComponent = require('./compile-component');
// var componentPreheat = require('./component-preheat');
// var LifeCycle = require('./life-cycle');
// var attachings = require('./attachings');
// var getANodeProp = require('./get-a-node-prop');
// var isDataChangeByElement = require('./is-data-change-by-element');
// var eventDeclarationListener = require('./event-declaration-listener');
// var reverseElementChildren = require('./reverse-element-children');
// var camelComponentBinds = require('./camel-component-binds');
// var NodeType = require('./node-type');
// var elementInitTagName = require('./element-init-tag-name');
// var elementAttached = require('./element-attached');
// var elementDispose = require('./element-dispose');
// var elementUpdateChildren = require('./element-update-children');
// var elementOwnGetEl = require('./element-own-get-el');
// var elementOwnGetElId = require('./element-own-get-el-id');
// var elementOwnOnEl = require('./element-own-on-el');
// var elementOwnCreate = require('./element-own-create');
// var elementOwnAttach = require('./element-own-attach');
// var elementOwnDetach = require('./element-own-detach');
// var elementOwnDispose = require('./element-own-dispose');
// var elementOwnAttachHTML = require('./element-own-attach-html');
// var warnEventListenMethod = require('./warn-event-listen-method');
// var elementDisposeChildren = require('./element-dispose-children');
// var elementAttach = require('./element-attach');
// var handleProp = require('./handle-prop');
// var createDataTypesChecker = require('../util/create-data-types-checker');



/**
 * 组件类
 *
 * @class
 * @param {Object} options 初始化参数
 */
function Component(options) { // eslint-disable-line
    options = options || {};

    this.lifeCycle = LifeCycle.start;
    this.children = [];
    this._elFns = [];
    this.listeners = {};
    this.slotChildren = [];

    var clazz = this.constructor;

    this.filters = this.filters || clazz.filters || {};
    this.computed = this.computed || clazz.computed || {};
    this.messages = this.messages || clazz.messages || {};
    this.subTag = options.subTag;

    // compile
    compileComponent(clazz);
    componentPreheat(clazz);

    var me = this;
    var protoANode = clazz.prototype.aNode;

    me.givenANode = options.aNode;
    me.givenNamedSlotBinds = [];
    me.givenSlots = {
        named: {}
    };

    this.owner = options.owner;
    this.scope = options.scope;
    this.el = options.el;

    var parent = options.parent;
    if (parent) {
        this.parent = parent;
        this.parentComponent = parent.nodeType === NodeType.CMPT
            ? parent
            : parent && parent.parentComponent;
    }

    this.id = guid();

    // #[begin] reverse
    if (this.el) {
        var firstChild = this.el.firstChild;
        if (firstChild && firstChild.nodeType === 8) {
            var stumpMatch = firstChild.data.match(/^\s*s-data:([\s\S]+)?$/);
            if (stumpMatch) {
                var stumpText = stumpMatch[1];

                // fill component data
                options.data = (new Function(
                    'return ' + stumpText.replace(/^[\s\n]*/, '')
                ))();

                removeEl(firstChild);
            }
        }
    }
    // #[end]

    // native事件数组
    this.nativeEvents = [];

    if (this.givenANode) {
        // 组件运行时传入的结构，做slot解析
        this._createGivenSlots();

        each(this.givenANode.events, function (eventBind) {
            // 保存当前实例的native事件，下面创建aNode时候做合并
            if (eventBind.modifier.native) {
                me.nativeEvents.push(eventBind);
                return;
            }

            // #[begin] error
            warnEventListenMethod(eventBind, options.owner);
            // #[end]

            me.on(
                eventBind.name,
                bind(eventDeclarationListener, options.owner, eventBind, 1, options.scope),
                eventBind
            );
        });

        this.tagName = protoANode.tagName || me.givenANode.tagName;
        this.binds = camelComponentBinds(this.givenANode.props);
    }

    this._toPhase('compiled');

    // init data
    this.data = new Data(
        extend(
            typeof this.initData === 'function' && this.initData() || {},
            options.data
        )
    );

    elementInitTagName(this);

    each(this.binds, function (bind) {
        postProp(bind);

        if (me.scope) {
            var value = evalExpr(bind.expr, me.scope, me.owner);
            if (typeof value !== 'undefined') {
                // See: https://github.com/ecomfe/san/issues/191
                me.data.set(bind.name, value);
            }
        }
    });

    // #[begin] error
    // 在初始化 + 数据绑定后，开始数据校验
    // NOTE: 只在开发版本中进行属性校验
    var dataTypes = this.dataTypes || clazz.dataTypes;
    if (dataTypes) {
        var dataTypeChecker = createDataTypesChecker(
            dataTypes,
            this.subTag || this.name || clazz.name
        );
        this.data.setTypeChecker(dataTypeChecker);
        this.data.checkDataTypes();
    }
    // #[end]

    this.computedDeps = {};
    /* eslint-disable guard-for-in */
    for (var expr in this.computed) {
        if (!this.computedDeps[expr]) {
            this._calcComputed(expr);
        }
    }
    /* eslint-enable guard-for-in */

    if (!this.dataChanger) {
        this.dataChanger = bind(this._dataChanger, this);
        this.data.listen(this.dataChanger);
    }
    this._toPhase('inited');

    // #[begin] reverse
    if (this.el) {
        attachings.add(this);
        reverseElementChildren(this);
        attachings.done();
    }

    var walker = options.reverseWalker;
    if (walker) {
        var currentNode = walker.current;
        if (currentNode && currentNode.nodeType === 1) {
            this.el = currentNode;
            this.el.id = this._getElId();
            walker.goNext();
        }

        reverseElementChildren(this);

        attachings.add(me);
    }
    // #[end]
}



Component.prototype.getComponentType = function (aNode) {
    return this.components[aNode.tagName];
};

/**
 * 初始化创建组件外部传入的插槽对象
 *
 * @protected
 */
Component.prototype._createGivenSlots = function () {
    var me = this;
    me.givenSlots.named = {};

    // 组件运行时传入的结构，做slot解析
    me.givenANode && me.scope && each(me.givenANode.children, function (child) {
        var target;

        var slotBind = !child.textExpr && getANodeProp(child, 'slot');
        if (slotBind) {
            !me.givenSlotInited && me.givenNamedSlotBinds.push(slotBind);

            var slotName = evalExpr(slotBind.expr, me.scope, me.owner);
            target = me.givenSlots.named[slotName];
            if (!target) {
                target = me.givenSlots.named[slotName] = [];
            }
        }
        else if (!me.givenSlotInited) {
            target = me.givenSlots.noname;
            if (!target) {
                target = me.givenSlots.noname = [];
            }
        }

        target && target.push(child);
    });

    me.givenSlotInited = true;
};

/**
 * 类型标识
 *
 * @type {string}
 */
Component.prototype.nodeType = NodeType.CMPT;

/**
 * 在下一个更新周期运行函数
 *
 * @param {Function} fn 要运行的函数
 */
Component.prototype.nextTick = nextTick;

/* eslint-disable operator-linebreak */
/**
 * 使节点到达相应的生命周期
 *
 * @protected
 * @param {string} name 生命周期名称
 */
Component.prototype._callHook =
Component.prototype._toPhase = function (name) {
    if (!this.lifeCycle[name]) {
        this.lifeCycle = LifeCycle[name] || this.lifeCycle;
        if (typeof this[name] === 'function') {
            this[name]();
        }

        // 通知devtool
        // #[begin] devtool
        emitDevtool('comp-' + name, this);
        // #[end]
    }
};
/* eslint-enable operator-linebreak */


/**
 * 添加事件监听器
 *
 * @param {string} name 事件名
 * @param {Function} listener 监听器
 * @param {string?} declaration 声明式
 */
Component.prototype.on = function (name, listener, declaration) {
    if (typeof listener === 'function') {
        if (!this.listeners[name]) {
            this.listeners[name] = [];
        }
        this.listeners[name].push({fn: listener, declaration: declaration});
    }
};

/**
 * 移除事件监听器
 *
 * @param {string} name 事件名
 * @param {Function=} listener 监听器
 */
Component.prototype.un = function (name, listener) {
    var nameListeners = this.listeners[name];
    var len = nameListeners && nameListeners.length;

    while (len--) {
        if (!listener || listener === nameListeners[len].fn) {
            nameListeners.splice(len, 1);
        }
    }
};


/**
 * 派发事件
 *
 * @param {string} name 事件名
 * @param {Object} event 事件对象
 */
Component.prototype.fire = function (name, event) {
    var me = this;
    each(this.listeners[name], function (listener) {
        listener.fn.call(me, event);
    });
};

/**
 * 计算 computed 属性的值
 *
 * @private
 * @param {string} computedExpr computed表达式串
 */
Component.prototype._calcComputed = function (computedExpr) {
    var computedDeps = this.computedDeps[computedExpr];
    if (!computedDeps) {
        computedDeps = this.computedDeps[computedExpr] = {};
    }

    this.data.set(computedExpr, this.computed[computedExpr].call({
        data: {
            get: bind(function (expr) {
                // #[begin] error
                if (!expr) {
                    throw new Error('[SAN ERROR] call get method in computed need argument');
                }
                // #[end]

                if (!computedDeps[expr]) {
                    computedDeps[expr] = 1;

                    if (this.computed[expr]) {
                        this._calcComputed(expr);
                    }

                    this.watch(expr, function () {
                        this._calcComputed(computedExpr);
                    });
                }

                return this.data.get(expr);
            }, this)
        }
    }));
};

/**
 * 派发消息
 * 组件可以派发消息，消息将沿着组件树向上传递，直到遇上第一个处理消息的组件
 *
 * @param {string} name 消息名称
 * @param {*?} value 消息值
 */
Component.prototype.dispatch = function (name, value) {
    var parentComponent = this.parentComponent;

    while (parentComponent) {
        var receiver = parentComponent.messages[name] || parentComponent.messages['*'];
        if (typeof receiver === 'function') {
            receiver.call(
                parentComponent,
                {target: this, value: value, name: name}
            );
            break;
        }

        parentComponent = parentComponent.parentComponent;
    }
};

/**
 * 获取组件内部的 slot
 *
 * @param {string=} name slot名称，空为default slot
 * @return {Array}
 */
Component.prototype.slot = function (name) {
    var result = [];
    var me = this;

    function childrenTraversal(children) {
        each(children, function (child) {
            if (child.nodeType === NodeType.SLOT && child.owner === me) {
                if (child.isNamed && child.name === name
                    || !child.isNamed && !name
                ) {
                    result.push(child);
                }
            }
            else {
                childrenTraversal(child.children);
            }
        });
    }

    childrenTraversal(this.children);
    return result;
};

/**
 * 获取带有 san-ref 指令的子组件引用
 *
 * @param {string} name 子组件的引用名
 * @return {Component}
 */
Component.prototype.ref = function (name) {
    var refTarget;
    var owner = this;

    function childrenTraversal(children) {
        each(children, function (child) {
            elementTraversal(child);
            return !refTarget;
        });
    }

    function elementTraversal(element) {
        var nodeType = element.nodeType;
        if (nodeType === NodeType.TEXT) {
            return;
        }

        if (element.owner === owner) {
            var ref;
            switch (element.nodeType) {
                case NodeType.ELEM:
                    ref = element.aNode.directives.ref;
                    if (ref && evalExpr(ref.value, element.scope, owner) === name) {
                        refTarget = element._getEl();
                    }
                    break;

                case NodeType.CMPT:
                    ref = element.givenANode.directives.ref;
                    if (ref && evalExpr(ref.value, element.scope, owner) === name) {
                        refTarget = element;
                    }
            }

            !refTarget && childrenTraversal(element.slotChildren);
        }

        !refTarget && childrenTraversal(element.children);
    }

    childrenTraversal(this.children);

    return refTarget;
};


/**
 * 视图更新函数
 *
 * @param {Array?} changes 数据变化信息
 */
Component.prototype._update = function (changes) {
    if (this.lifeCycle.disposed) {
        return;
    }

    var me = this;


    var needReloadForSlot = false;
    this._notifyNeedReload = function () {
        needReloadForSlot = true;
    };

    if (changes) {
        each(changes, function (change) {
            var changeExpr = change.expr;

            each(me.binds, function (bindItem) {
                var relation;
                var setExpr = bindItem.name;
                var updateExpr = bindItem.expr;

                if (!isDataChangeByElement(change, me, setExpr)
                    && (relation = changeExprCompare(changeExpr, updateExpr, me.scope))
                ) {
                    if (relation > 2) {
                        setExpr = createAccessor(
                            [
                                {
                                    type: ExprType.STRING,
                                    value: setExpr
                                }
                            ].concat(changeExpr.paths.slice(updateExpr.paths.length))
                        );

                        updateExpr = changeExpr;
                    }

                    me.data.set(setExpr, evalExpr(updateExpr, me.scope, me.owner), {
                        target: {
                            id: me.owner.id
                        }
                    });
                }
            });

            each(me.givenNamedSlotBinds, function (bindItem) {
                needReloadForSlot = needReloadForSlot || changeExprCompare(changeExpr, bindItem.expr, me.scope);
                return !needReloadForSlot;
            });
        });

        if (needReloadForSlot) {
            this._createGivenSlots();
            this._repaintChildren();
        }
        else {
            var slotChildrenLen = this.slotChildren.length;
            while (slotChildrenLen--) {
                var slotChild = this.slotChildren[slotChildrenLen];

                if (slotChild.lifeCycle.disposed) {
                    this.slotChildren.splice(slotChildrenLen, 1);
                }
                else if (slotChild.isInserted) {
                    slotChild._update(changes, 1);
                }
            }
        }
    }

    var dataChanges = this.dataChanges;
    if (dataChanges) {
        this.dataChanges = null;
        each(this.aNode.hotspot.dynamicProps, function (prop) {
            each(dataChanges, function (change) {
                if (changeExprCompare(change.expr, prop.expr, me.data)
                    || prop.hintExpr && changeExprCompare(change.expr, prop.hintExpr, me.data)
                ) {
                    handleProp.prop(
                        me,
                        prop.name,
                        evalExpr(prop.expr, me.data, me)
                    );

                    return false;
                }
            });
        });

        elementUpdateChildren(this, dataChanges);
        if (needReloadForSlot) {
            this._createGivenSlots();
            this._repaintChildren();
        }

        this._toPhase('updated');

        if (this.owner) {
            this._updateBindxOwner(dataChanges);
            this.owner._update();
        }
    }

    this._notifyNeedReload = null;
};

Component.prototype._updateBindxOwner = function (dataChanges) {
    var me = this;

    if (this.owner) {
        each(dataChanges, function (change) {
            each(me.binds, function (bindItem) {
                var changeExpr = change.expr;
                if (bindItem.x
                    && !isDataChangeByElement(change, me.owner)
                    && changeExprCompare(changeExpr, parseExpr(bindItem.name), me.data)
                ) {
                    var updateScopeExpr = bindItem.expr;
                    if (changeExpr.paths.length > 1) {
                        updateScopeExpr = createAccessor(
                            bindItem.expr.paths.concat(changeExpr.paths.slice(1))
                        );
                    }

                    me.scope.set(
                        updateScopeExpr,
                        evalExpr(changeExpr, me.data, me),
                        {
                            target: {
                                id: me.id,
                                prop: bindItem.name
                            }
                        }
                    );
                }
            });
        });
    }
};

/**
 * 重新绘制组件的内容
 * 当 dynamic slot name 发生变更或 slot 匹配发生变化时，重新绘制
 * 在组件级别重绘有点粗暴，但是能保证视图结果正确性
 */
Component.prototype._repaintChildren = function () {
    elementDisposeChildren(this, 1, 1);
    this.children = [];

    this._contentReady = 0;
    this.slotChildren = [];
    elementAttach(this);
    attachings.done();
};


/**
 * 组件内部监听数据变化的函数
 *
 * @private
 * @param {Object} change 数据变化信息
 */
Component.prototype._dataChanger = function (change) {
    if (this.lifeCycle.painting || this.lifeCycle.created) {
        if (!this.dataChanges) {
            nextTick(this._update, this);
            this.dataChanges = [];
        }

        this.dataChanges.push(change);
    }
    else if (this.lifeCycle.inited && this.owner) {
        this._updateBindxOwner([change]);
    }
};


/**
 * 监听组件的数据变化
 *
 * @param {string} dataName 变化的数据项
 * @param {Function} listener 监听函数
 */
Component.prototype.watch = function (dataName, listener) {
    var dataExpr = parseExpr(dataName);

    this.data.listen(bind(function (change) {
        if (changeExprCompare(change.expr, dataExpr, this.data)) {
            listener.call(this, evalExpr(dataExpr, this.data, this), change);
        }
    }, this));
};

/**
 * 组件销毁的行为
 *
 * @param {Object} options 销毁行为的参数
 */
Component.prototype.dispose = elementOwnDispose;

Component.prototype._doneLeave = function () {
    if (this.leaveDispose) {
        if (!this.lifeCycle.disposed) {
            // 这里不用挨个调用 dispose 了，因为 children 释放链会调用的
            this.slotChildren = null;

            this.data.unlisten();
            this.dataChanger = null;
            this.dataChanges = null;

            elementDispose(
                this,
                this.disposeNoDetach,
                this.disposeNoTransition
            );
            this.listeners = null;

            this.givenANode = null;
            this.givenSlots = null;
            this.givenNamedSlotBinds = null;
        }
    }
    else if (this.lifeCycle.attached) {
        removeEl(this._getEl());
        this._toPhase('detached');
    }
};

/**
 * 完成组件 attached 后的行为
 *
 * @param {Object} element 元素节点
 */
Component.prototype._attached = function () {
    this._getEl();
    elementAttached(this);
};

Component.prototype.attach = elementOwnAttach;
Component.prototype.detach = elementOwnDetach;
Component.prototype._attachHTML = elementOwnAttachHTML;
Component.prototype._create = elementOwnCreate;
Component.prototype._getEl = elementOwnGetEl;
Component.prototype._getElId = elementOwnGetElId;
Component.prototype._onEl = elementOwnOnEl;


// exports = module.exports = Component;


/**
 * @file 创建组件类
 * @author errorrik(errorrik@gmail.com)
 */

// var Component = require('./component');
// var inherits = require('../util/inherits');

/**
 * 创建组件类
 *
 * @param {Object} proto 组件类的方法表
 * @return {Function}
 */
function defineComponent(proto) {
    // 如果传入一个不是 san component 的 constructor，直接返回不是组件构造函数
    // 这种场景导致的错误 san 不予考虑
    if (typeof proto === 'function') {
        return proto;
    }

    // #[begin] error
    if (typeof proto !== 'object') {
        throw new Error('[SAN FATAL] param must be a plain object.');
    }
    // #[end]

    function ComponentClass(option) { // eslint-disable-line
        Component.call(this, option);
    }

    ComponentClass.prototype = proto;
    inherits(ComponentClass, Component);

    return ComponentClass;
}

// exports = module.exports = defineComponent;


/**
 * @file 编译组件类
 * @author errorrik(errorrik@gmail.com)
 */


// var createANode = require('../parser/create-a-node');
// var parseTemplate = require('../parser/parse-template');
// var parseText = require('../parser/parse-text');
// var defineComponent = require('./define-component');


/**
 * 编译组件类。预解析template和components
 *
 * @param {Function} ComponentClass 组件类
 */
function compileComponent(ComponentClass) {
    var proto = ComponentClass.prototype;

    // pre define components class
    if (!proto.hasOwnProperty('_cmptReady')) {
        proto.components = ComponentClass.components || proto.components || {};
        var components = proto.components;

        for (var key in components) { // eslint-disable-line
            var componentClass = components[key];

            if (typeof componentClass === 'object') {
                components[key] = defineComponent(componentClass);
            }
            else if (componentClass === 'self') {
                components[key] = ComponentClass;
            }
        }

        proto._cmptReady = 1;
    }


    // pre compile template
    if (!proto.hasOwnProperty('aNode')) {
        proto.aNode = createANode();

        var tpl = ComponentClass.template || proto.template;
        if (tpl) {
            var aNode = parseTemplate(tpl, {
                trimWhitespace: proto.trimWhitespace || ComponentClass.trimWhitespace,
                delimiters: proto.delimiters || ComponentClass.delimiters
            });
            var firstChild = aNode.children[0];

            // #[begin] error
            if (aNode.children.length !== 1 || firstChild.isText) {
                throw new Error('[SAN FATAL] template must have a root element.');
            }
            // #[end]

            proto.aNode = firstChild;
            if (firstChild.tagName === 'template') {
                firstChild.tagName = null;
            }

            var componentPropExtra = {
                'class': {name: 'class', expr: parseText('{{class | _class | _sep(" ")}}')},
                'style': {name: 'style', expr: parseText('{{style | _style | _sep(";")}}')},
                'id': {name: 'id', expr: parseText('{{id}}')}
            };

            var len = firstChild.props.length;
            while (len--) {
                var prop = firstChild.props[len];
                var extra = componentPropExtra[prop.name];

                if (extra) {
                    firstChild.props.splice(len, 1);
                    componentPropExtra[prop.name] = prop;

                    if (prop.name !== 'id') {
                        prop.expr.segs.push(extra.expr.segs[0]);
                        prop.expr.value = null;
                    }
                }
            }

            firstChild.props.push(
                componentPropExtra['class'], // eslint-disable-line dot-notation
                componentPropExtra.style,
                componentPropExtra.id
            );
        }
    }
}

// exports = module.exports = compileComponent;


/**
 * @file 组件预热
 * @author errorrik(errorrik@gmail.com)
 */

// var ExprType = require('../parser/expr-type');
// var each = require('../util/each');
// var handleProp = require('./handle-prop');
// var getANodeProp = require('./get-a-node-prop');
// var noSetHTML = require('../browser/no-set-html');
// var ie = require('../browser/ie');

/**
 * 组件预热，分析组件aNode的数据引用等信息
 *
 * @param {Function} ComponentClass 组件类
 */
function componentPreheat(ComponentClass) {
    var stack = [];

    function recordHotspotData(refs, notContentData) {
        var len = stack.length;
        each(stack, function (aNode, index) {
            if (!notContentData || index !== len - 1) {
                each(refs, function (ref) {
                    aNode.hotspot.data[ref] = 1;
                });
            }
        });
    }


    function analyseANodeHotspot(aNode) {
        if (!aNode.hotspot) {
            stack.push(aNode);


            if (aNode.textExpr) {
                aNode.hotspot = {data: {}};
                recordHotspotData(analyseExprDataHotspot(aNode.textExpr));
            }
            else {
                aNode.hotspot = {
                    data: {},
                    // #[begin] allua
                    noSetHTML: ie && noSetHTML(aNode),
                    // #[end]
                    dynamicProps: [],
                    xProps: [],
                    staticAttr: '',
                    props: {}
                };

                // === analyse hotspot data: start
                each(aNode.vars, function (varItem) {
                    recordHotspotData(analyseExprDataHotspot(varItem.expr));
                });

                each(aNode.props, function (prop) {
                    recordHotspotData(analyseExprDataHotspot(prop.expr));
                });

                /* eslint-disable guard-for-in */
                for (var key in aNode.directives) {
                    var directive = aNode.directives[key];
                    recordHotspotData(analyseExprDataHotspot(directive.value), key !== 'html');
                }
                /* eslint-enable guard-for-in */

                each(aNode.elses, function (child) {
                    analyseANodeHotspot(child);
                });

                each(aNode.children, function (child) {
                    analyseANodeHotspot(child);
                });
                // === analyse hotspot data: end


                // === analyse hotspot props: start
                each(aNode.props, function (prop, index) {
                    aNode.hotspot.props[prop.name] = index;

                    if (prop.name === 'id') {
                        prop.id = true;
                        aNode.hotspot.idProp = prop;
                        aNode.hotspot.dynamicProps.push(prop);
                    }
                    else if (prop.expr.value != null
                        && !/^(template|input|textarea|select|option)$/.test(aNode.tagName)
                    ) {
                        aNode.hotspot.staticAttr += handleProp.attr(aNode, prop.name, prop.expr.value) || '';
                    }
                    else {
                        if (prop.x) {
                            aNode.hotspot.xProps.push(prop);
                        }
                        aNode.hotspot.dynamicProps.push(prop);
                    }
                });

                // ie 下，如果 option 没有 value 属性，select.value = xx 操作不会选中 option
                // 所以没有设置 value 时，默认把 option 的内容作为 value
                if (aNode.tagName === 'option'
                    && !getANodeProp(aNode, 'value')
                    && aNode.children[0]
                ) {
                    var valueProp = {
                        name: 'value',
                        expr: aNode.children[0].textExpr
                    };
                    aNode.props.push(valueProp);
                    aNode.hotspot.dynamicProps.push(valueProp);
                    aNode.hotspot.props.value = aNode.props.length - 1;
                }
                // === analyse hotspot props: end
            }

            stack.pop();
        }
    }



    analyseANodeHotspot(ComponentClass.prototype.aNode);
}

/**
 * 分析表达式的数据引用
 *
 * @param {Object} expr 要分析的表达式
 * @return {Array}
 */
function analyseExprDataHotspot(expr) {
    var refs = [];

    function analyseExprs(exprs) {
        each(exprs, function (expr) {
            refs = refs.concat(analyseExprDataHotspot(expr));
        });
    }

    switch (expr.type) {
        case ExprType.ACCESSOR:
            var paths = expr.paths;
            refs.push(paths[0].value);

            if (paths.length > 1) {
                refs.push(paths[0].value + '.' + (paths[1].value || '*'));
            }

            analyseExprs(paths.slice(1));
            break;

        case ExprType.UNARY:
            return analyseExprDataHotspot(expr.expr);

        case ExprType.TEXT:
        case ExprType.BINARY:
        case ExprType.TERTIARY:
            analyseExprs(expr.segs);
            break;

        case ExprType.INTERP:
            refs = analyseExprDataHotspot(expr.expr);

            each(expr.filters, function (filter) {
                analyseExprs(filter.name.paths);
                analyseExprs(filter.args);
            });

            break;

    }

    return refs;
}

// exports = module.exports = componentPreheat;


/**
 * @file 将 binds 的 name 从 kebabcase 转换成 camelcase
 * @author errorrik(errorrik@gmail.com)
 */

// var kebab2camel = require('../util/kebab2camel');
// var each = require('../util/each');

/**
 * 将 binds 的 name 从 kebabcase 转换成 camelcase
 *
 * @param {Array} binds binds集合
 * @return {Array}
 */
function camelComponentBinds(binds) {
    var result = [];
    each(binds, function (bind) {
        result.push({
            name: kebab2camel(bind.name),
            expr: bind.expr,
            x: bind.x,
            raw: bind.raw
        });
    });

    return result;
}

// exports = module.exports = camelComponentBinds;


/**
 * @file 编译源码的 helper 方法集合
 * @author errorrik(errorrik@gmail.com)
 */

// var each = require('../util/each');
// var ExprType = require('../parser/expr-type');

// #[begin] ssr
// 
// /**
//  * 编译源码的 helper 方法集合对象
//  */
// var compileExprSource = {
// 
//     /**
//      * 字符串字面化
//      *
//      * @param {string} source 需要字面化的字符串
//      * @return {string} 字符串字面化结果
//      */
//     stringLiteralize: function (source) {
//         return '"'
//             + source
//                 .replace(/\x5C/g, '\\\\')
//                 .replace(/"/g, '\\"')
//                 .replace(/\x0A/g, '\\n')
//                 .replace(/\x09/g, '\\t')
//                 .replace(/\x0D/g, '\\r')
//                 // .replace( /\x08/g, '\\b' )
//                 // .replace( /\x0C/g, '\\f' )
//             + '"';
//     },
// 
//     /**
//      * 生成数据访问表达式代码
//      *
//      * @param {Object?} accessorExpr accessor表达式对象
//      * @return {string}
//      */
//     dataAccess: function (accessorExpr) {
//         var code = 'componentCtx.data';
//         if (accessorExpr) {
//             each(accessorExpr.paths, function (path) {
//                 if (path.type === ExprType.ACCESSOR) {
//                     code += '[' + compileExprSource.dataAccess(path) + ']';
//                     return;
//                 }
// 
//                 switch (typeof path.value) {
//                     case 'string':
//                         code += '.' + path.value;
//                         break;
// 
//                     case 'number':
//                         code += '[' + path.value + ']';
//                         break;
//                 }
//             });
//         }
// 
//         return code;
//     },
// 
//     /**
//      * 生成插值代码
//      *
//      * @param {Object} interpExpr 插值表达式对象
//      * @return {string}
//      */
//     interp: function (interpExpr) {
//         var code = compileExprSource.expr(interpExpr.expr);
// 
// 
//         each(interpExpr.filters, function (filter) {
//             code = 'componentCtx.callFilter("' + filter.name.paths[0].value + '", [' + code;
//             each(filter.args, function (arg) {
//                 code += ', ' + compileExprSource.expr(arg);
//             });
//             code += '])';
//         });
// 
//         if (!interpExpr.original) {
//             return 'escapeHTML(' + code + ')';
//         }
// 
//         return code;
//     },
// 
//     /**
//      * 生成文本片段代码
//      *
//      * @param {Object} textExpr 文本片段表达式对象
//      * @return {string}
//      */
//     text: function (textExpr) {
//         if (textExpr.segs.length === 0) {
//             return '""';
//         }
// 
//         var code = '';
// 
//         each(textExpr.segs, function (seg) {
//             var segCode = compileExprSource.expr(seg);
//             code += code ? ' + ' + segCode : segCode;
//         });
// 
//         return code;
//     },
// 
//     /**
//      * 二元表达式操作符映射表
//      *
//      * @type {Object}
//      */
//     binaryOp: {
//         /* eslint-disable */
//         43: '+',
//         45: '-',
//         42: '*',
//         47: '/',
//         60: '<',
//         62: '>',
//         76: '&&',
//         94: '!=',
//         121: '<=',
//         122: '==',
//         123: '>=',
//         155: '!==',
//         183: '===',
//         248: '||'
//         /* eslint-enable */
//     },
// 
//     /**
//      * 生成表达式代码
//      *
//      * @param {Object} expr 表达式对象
//      * @return {string}
//      */
//     expr: function (expr) {
//         switch (expr.type) {
//             case ExprType.UNARY:
//                 return '!' + compileExprSource.expr(expr.expr);
// 
//             case ExprType.BINARY:
//                 return compileExprSource.expr(expr.segs[0])
//                     + compileExprSource.binaryOp[expr.operator]
//                     + compileExprSource.expr(expr.segs[1]);
// 
//             case ExprType.TERTIARY:
//                 return compileExprSource.expr(expr.segs[0])
//                     + '?' + compileExprSource.expr(expr.segs[1])
//                     + ':' + compileExprSource.expr(expr.segs[2]);
// 
//             case ExprType.STRING:
//                 return compileExprSource.stringLiteralize(expr.value);
// 
//             case ExprType.NUMBER:
//                 return expr.value;
// 
//             case ExprType.BOOL:
//                 return expr.value ? 'true' : 'false';
// 
//             case ExprType.ACCESSOR:
//                 return compileExprSource.dataAccess(expr);
// 
//             case ExprType.INTERP:
//                 return compileExprSource.interp(expr);
// 
//             case ExprType.TEXT:
//                 return compileExprSource.text(expr);
//         }
//     }
// };
// #[end]

// exports = module.exports = compileExprSource;


/**
 * @file 编译源码的中间buffer类
 * @author errorrik(errorrik@gmail.com)
 */

// var each = require('../util/each');
// var compileExprSource = require('./compile-expr-source');


// #[begin] ssr
// /**
//  * 编译源码的中间buffer类
//  *
//  * @class
//  */
// function CompileSourceBuffer() {
//     this.segs = [];
// }
// 
// /**
//  * 添加原始代码，将原封不动输出
//  *
//  * @param {string} code 原始代码
//  */
// CompileSourceBuffer.prototype.addRaw = function (code) {
//     this.segs.push({
//         type: 'RAW',
//         code: code
//     });
// };
// 
// /**
//  * 添加被拼接为html的原始代码
//  *
//  * @param {string} code 原始代码
//  */
// CompileSourceBuffer.prototype.joinRaw = function (code) {
//     this.segs.push({
//         type: 'JOIN_RAW',
//         code: code
//     });
// };
// 
// /**
//  * 添加renderer方法的起始源码
//  */
// CompileSourceBuffer.prototype.addRendererStart = function () {
//     this.addRaw('function (data, parentCtx, givenSlots) {');
//     this.addRaw('var html = "";');
// };
// 
// /**
//  * 添加renderer方法的结束源码
//  */
// CompileSourceBuffer.prototype.addRendererEnd = function () {
//     this.addRaw('return html;');
//     this.addRaw('}');
// };
// 
// /**
//  * 添加被拼接为html的静态字符串
//  *
//  * @param {string} str 被拼接的字符串
//  */
// CompileSourceBuffer.prototype.joinString = function (str) {
//     this.segs.push({
//         str: str,
//         type: 'JOIN_STRING'
//     });
// };
// 
// /**
//  * 添加被拼接为html的数据访问
//  *
//  * @param {Object?} accessor 数据访问表达式对象
//  */
// CompileSourceBuffer.prototype.joinDataStringify = function () {
//     this.segs.push({
//         type: 'JOIN_DATA_STRINGIFY'
//     });
// };
// 
// /**
//  * 添加被拼接为html的表达式
//  *
//  * @param {Object} expr 表达式对象
//  */
// CompileSourceBuffer.prototype.joinExpr = function (expr) {
//     this.segs.push({
//         expr: expr,
//         type: 'JOIN_EXPR'
//     });
// };
// 
// /**
//  * 生成编译后代码
//  *
//  * @return {string}
//  */
// CompileSourceBuffer.prototype.toCode = function () {
//     var code = [];
//     var temp = '';
// 
//     function genStrLiteral() {
//         if (temp) {
//             code.push('html += ' + compileExprSource.stringLiteralize(temp) + ';');
//         }
// 
//         temp = '';
//     }
// 
//     each(this.segs, function (seg) {
//         if (seg.type === 'JOIN_STRING') {
//             temp += seg.str;
//             return;
//         }
// 
//         genStrLiteral();
//         switch (seg.type) {
//             case 'JOIN_DATA_STRINGIFY':
//                 code.push('html += stringifier.any(' + compileExprSource.dataAccess() + ');');
//                 break;
// 
//             case 'JOIN_EXPR':
//                 code.push('html += ' + compileExprSource.expr(seg.expr) + ';');
//                 break;
// 
//             case 'JOIN_RAW':
//                 code.push('html += ' + seg.code + ';');
//                 break;
// 
//             case 'RAW':
//                 code.push(seg.code);
//                 break;
// 
//         }
//     });
// 
//     genStrLiteral();
// 
//     return code.join('\n');
// };
// 
// #[end]

// exports = module.exports = CompileSourceBuffer;


/**
 * @file 将组件编译成 render 方法的 js 源码
 * @author errorrik(errorrik@gmail.com)
 */


// var each = require('../util/each');
// var guid = require('../util/guid');
// var parseExpr = require('../parser/parse-expr');
// var createANode = require('../parser/create-a-node');
// var cloneDirectives = require('../parser/clone-directives');
// var autoCloseTags = require('../browser/auto-close-tags');
// var CompileSourceBuffer = require('./compile-source-buffer');
// var compileExprSource = require('./compile-expr-source');
// var rinseCondANode = require('./rinse-cond-anode');
// var getANodeProp = require('./get-a-node-prop');

// #[begin] ssr
// 
// /**
//  * 生成序列化时起始桩的html
//  *
//  * @param {string} type 桩类型标识
//  * @param {string?} content 桩内的内容
//  * @return {string}
//  */
// function serializeStump(type, content) {
//     return '<!--s-' + type + (content ? ':' + content : '') + '-->';
// }
// 
// /**
//  * 生成序列化时结束桩的html
//  *
//  * @param {string} type 桩类型标识
//  * @return {string}
//  */
// function serializeStumpEnd(type) {
//     return '<!--/s-' + type + '-->';
// }
// 
// /**
//  * element 的编译方法集合对象
//  *
//  * @inner
//  */
// var elementSourceCompiler = {
// 
//     /* eslint-disable max-params */
//     /**
//      * 编译元素标签头
//      *
//      * @param {CompileSourceBuffer} sourceBuffer 编译源码的中间buffer
//      * @param {string} tagName 标签名
//      * @param {Array} props 属性列表
//      * @param {string?} extraProp 额外的属性串
//      * @param {boolean?} isClose 是否闭合
//      */
//     tagStart: function (sourceBuffer, tagName, props, extraProp, isClose) {
//         sourceBuffer.joinString('<' + tagName);
//         sourceBuffer.joinString(extraProp || '');
// 
//         // index list
//         var propsIndex = {};
//         each(props, function (prop) {
//             propsIndex[prop.name] = prop;
//         });
// 
//         each(props, function (prop) {
//             if (prop.name === 'slot') {
//                 return;
//             }
// 
//             if (prop.name === 'value') {
//                 switch (tagName) {
//                     case 'textarea':
//                         return;
// 
//                     case 'select':
//                         sourceBuffer.addRaw('$selectValue = '
//                             + compileExprSource.expr(prop.expr)
//                             + ' || "";'
//                         );
//                         return;
// 
//                     case 'option':
//                         sourceBuffer.addRaw('$optionValue = '
//                             + compileExprSource.expr(prop.expr)
//                             + ';'
//                         );
//                         // value
//                         sourceBuffer.addRaw('if ($optionValue != null) {');
//                         sourceBuffer.joinRaw('" value=\\"" + $optionValue + "\\""');
//                         sourceBuffer.addRaw('}');
// 
//                         // selected
//                         sourceBuffer.addRaw('if ($optionValue === $selectValue) {');
//                         sourceBuffer.joinString(' selected');
//                         sourceBuffer.addRaw('}');
//                         return;
//                 }
//             }
// 
//             switch (prop.name) {
//                 case 'readonly':
//                 case 'disabled':
//                 case 'multiple':
//                     if (prop.raw === '') {
//                         sourceBuffer.joinString(' ' + prop.name);
//                     }
//                     else {
//                         sourceBuffer.joinRaw('boolAttrFilter("' + prop.name + '", '
//                             + compileExprSource.expr(prop.expr)
//                             + ')'
//                         );
//                     }
//                     break;
// 
//                 case 'checked':
//                     if (tagName === 'input') {
//                         var valueProp = propsIndex.value;
//                         var valueCode = compileExprSource.expr(valueProp.expr);
// 
//                         if (valueProp) {
//                             switch (propsIndex.type.raw) {
//                                 case 'checkbox':
//                                     sourceBuffer.addRaw('if (contains('
//                                         + compileExprSource.expr(prop.expr)
//                                         + ', '
//                                         + valueCode
//                                         + ')) {'
//                                     );
//                                     sourceBuffer.joinString(' checked');
//                                     sourceBuffer.addRaw('}');
//                                     break;
// 
//                                 case 'radio':
//                                     sourceBuffer.addRaw('if ('
//                                         + compileExprSource.expr(prop.expr)
//                                         + ' === '
//                                         + valueCode
//                                         + ') {'
//                                     );
//                                     sourceBuffer.joinString(' checked');
//                                     sourceBuffer.addRaw('}');
//                                     break;
//                             }
//                         }
//                     }
//                     break;
// 
//                 default:
//                     if (prop.attr) {
//                         sourceBuffer.joinString(' ' + prop.attr);
//                     }
//                     else {
//                         sourceBuffer.joinRaw('attrFilter("' + prop.name + '", '
//                             + (prop.x ? 'escapeHTML(' : '')
//                             + compileExprSource.expr(prop.expr)
//                             + (prop.x ? ')' : '')
//                             + ')'
//                         );
//                     }
//                     break;
//             }
//         });
// 
//         sourceBuffer.joinString(isClose ? '/>' : '>');
//     },
//     /* eslint-enable max-params */
// 
//     /**
//      * 编译元素闭合
//      *
//      * @param {CompileSourceBuffer} sourceBuffer 编译源码的中间buffer
//      * @param {string} tagName 标签名
//      */
//     tagEnd: function (sourceBuffer, tagName) {
//         if (!autoCloseTags[tagName]) {
//             sourceBuffer.joinString('</' + tagName + '>');
//         }
// 
//         if (tagName === 'select') {
//             sourceBuffer.addRaw('$selectValue = null;');
//         }
// 
//         if (tagName === 'option') {
//             sourceBuffer.addRaw('$optionValue = null;');
//         }
//     },
// 
//     /**
//      * 编译元素内容
//      *
//      * @param {CompileSourceBuffer} sourceBuffer 编译源码的中间buffer
//      * @param {ANode} aNode 元素的抽象节点信息
//      * @param {Component} owner 所属组件实例环境
//      */
//     inner: function (sourceBuffer, aNode, owner) {
//         // inner content
//         if (aNode.tagName === 'textarea') {
//             var valueProp = getANodeProp(aNode, 'value');
//             if (valueProp) {
//                 sourceBuffer.joinRaw('escapeHTML('
//                     + compileExprSource.expr(valueProp.expr)
//                     + ')'
//                 );
//             }
// 
//             return;
//         }
// 
//         var htmlDirective = aNode.directives.html;
//         if (htmlDirective) {
//             sourceBuffer.joinExpr(htmlDirective.value);
//         }
//         else {
//             /* eslint-disable no-use-before-define */
//             each(aNode.children, function (aNodeChild) {
//                 sourceBuffer.addRaw(aNodeCompiler.compile(aNodeChild, sourceBuffer, owner));
//             });
//             /* eslint-enable no-use-before-define */
//         }
//     }
// };
// 
// /**
//  * ANode 的编译方法集合对象
//  *
//  * @inner
//  */
// var aNodeCompiler = {
// 
//     /**
//      * 编译节点
//      *
//      * @param {ANode} aNode 抽象节点
//      * @param {CompileSourceBuffer} sourceBuffer 编译源码的中间buffer
//      * @param {Component} owner 所属组件实例环境
//      * @param {Object} extra 编译所需的一些额外信息
//      */
//     compile: function (aNode, sourceBuffer, owner, extra) {
//         extra = extra || {};
//         var compileMethod = 'compileElement';
// 
//         if (aNode.textExpr) {
//             compileMethod = 'compileText';
//         }
//         else if (aNode.directives['if']) { // eslint-disable-line dot-notation
//             compileMethod = 'compileIf';
//         }
//         else if (aNode.directives['for']) { // eslint-disable-line dot-notation
//             compileMethod = 'compileFor';
//         }
//         else if (aNode.tagName === 'slot') {
//             compileMethod = 'compileSlot';
//         }
//         else if (aNode.tagName === 'template') {
//             compileMethod = 'compileTemplate';
//         }
//         else {
//             var ComponentType = owner.getComponentType(aNode);
//             if (ComponentType) {
//                 compileMethod = 'compileComponent';
//                 extra.ComponentClass = ComponentType;
//             }
//         }
// 
//         aNodeCompiler[compileMethod](aNode, sourceBuffer, owner, extra);
//     },
// 
//     /**
//      * 编译文本节点
//      *
//      * @param {ANode} aNode 节点对象
//      * @param {CompileSourceBuffer} sourceBuffer 编译源码的中间buffer
//      */
//     compileText: function (aNode, sourceBuffer) {
//         if (aNode.textExpr.original) {
//             sourceBuffer.joinString(serializeStump('text'));
//         }
// 
//         var value = aNode.textExpr.value;
//         if (value == null) {
//             sourceBuffer.joinExpr(aNode.textExpr);
//         }
//         else {
//             sourceBuffer.joinString(value);
//         }
// 
//         if (aNode.textExpr.original) {
//             sourceBuffer.joinString(serializeStumpEnd('text'));
//         }
//     },
// 
//     /**
//      * 编译template节点
//      *
//      * @param {ANode} aNode 节点对象
//      * @param {CompileSourceBuffer} sourceBuffer 编译源码的中间buffer
//      * @param {Component} owner 所属组件实例环境
//      */
//     compileTemplate: function (aNode, sourceBuffer, owner) {
//         elementSourceCompiler.inner(sourceBuffer, aNode, owner);
//     },
// 
//     /**
//      * 编译 if 节点
//      *
//      * @param {ANode} aNode 节点对象
//      * @param {CompileSourceBuffer} sourceBuffer 编译源码的中间buffer
//      * @param {Component} owner 所属组件实例环境
//      */
//     compileIf: function (aNode, sourceBuffer, owner) {
//         sourceBuffer.addRaw('(function () {');
// 
//         sourceBuffer.addRaw('var ifIndex = null;');
// 
//         // output main if
//         var ifDirective = aNode.directives['if']; // eslint-disable-line dot-notation
//         sourceBuffer.addRaw('if (' + compileExprSource.expr(ifDirective.value) + ') {');
//         sourceBuffer.addRaw(
//             aNodeCompiler.compile(
//                 rinseCondANode(aNode),
//                 sourceBuffer,
//                 owner
//             )
//         );
//         sourceBuffer.addRaw('}');
// 
//         // output elif and else
//         each(aNode.elses, function (elseANode, index) {
//             var elifDirective = elseANode.directives.elif;
//             if (elifDirective) {
//                 sourceBuffer.addRaw('else if (' + compileExprSource.expr(elifDirective.value) + ') {');
//             }
//             else {
//                 sourceBuffer.addRaw('else {');
//             }
// 
//             sourceBuffer.addRaw(
//                 aNodeCompiler.compile(
//                     rinseCondANode(elseANode),
//                     sourceBuffer,
//                     owner
//                 )
//             );
//             sourceBuffer.addRaw('}');
//         });
// 
//         sourceBuffer.addRaw('})();');
//     },
// 
//     /**
//      * 编译 for 节点
//      *
//      * @param {ANode} aNode 节点对象
//      * @param {CompileSourceBuffer} sourceBuffer 编译源码的中间buffer
//      * @param {Component} owner 所属组件实例环境
//      */
//     compileFor: function (aNode, sourceBuffer, owner) {
//         var forElementANode = createANode({
//             children: aNode.children,
//             props: aNode.props,
//             events: aNode.events,
//             tagName: aNode.tagName,
//             directives: cloneDirectives(aNode.directives, {
//                 'for': 1
//             }),
//             hotspot: aNode.hotspot
//         });
// 
//         var forDirective = aNode.directives['for']; // eslint-disable-line dot-notation
//         var itemName = forDirective.item.raw;
//         var indexName = forDirective.index.raw;
//         var listName = compileExprSource.dataAccess(forDirective.value);
// 
//         if (indexName === '$index') {
//             indexName = guid();
//         }
// 
//         sourceBuffer.addRaw('for ('
//             + 'var ' + indexName + ' = 0; '
//             + indexName + ' < ' + listName + '.length; '
//             + indexName + '++) {'
//         );
//         sourceBuffer.addRaw('componentCtx.data.' + indexName + '=' + indexName + ';');
//         sourceBuffer.addRaw('componentCtx.data.' + itemName + '= ' + listName + '[' + indexName + '];');
//         sourceBuffer.addRaw(
//             aNodeCompiler.compile(
//                 forElementANode,
//                 sourceBuffer,
//                 owner
//             )
//         );
//         sourceBuffer.addRaw('}');
//     },
// 
//     /**
//      * 编译 slot 节点
//      *
//      * @param {ANode} aNode 节点对象
//      * @param {CompileSourceBuffer} sourceBuffer 编译源码的中间buffer
//      * @param {Component} owner 所属组件实例环境
//      */
//     compileSlot: function (aNode, sourceBuffer, owner) {
//         sourceBuffer.addRaw('(function () {');
// 
//         sourceBuffer.addRaw('function $defaultSlotRender(componentCtx) {');
//         sourceBuffer.addRaw('  var html = "";');
//         each(aNode.children, function (aNodeChild) {
//             sourceBuffer.addRaw(aNodeCompiler.compile(aNodeChild, sourceBuffer, owner));
//         });
//         sourceBuffer.addRaw('  return html;');
//         sourceBuffer.addRaw('}');
// 
//         sourceBuffer.addRaw('  var $givenSlot = [];');
// 
//         var nameProp = getANodeProp(aNode, 'name');
//         if (nameProp) {
//             sourceBuffer.addRaw('var $slotName = ' + compileExprSource.expr(nameProp.expr) + ';');
//         }
//         else {
//             sourceBuffer.addRaw('var $slotName = null;');
//         }
// 
//         sourceBuffer.addRaw('var $ctxGivenSlots = componentCtx.givenSlots;');
//         sourceBuffer.addRaw('for (var $i = 0; $i < $ctxGivenSlots.length; $i++) {');
//         sourceBuffer.addRaw('  if ($ctxGivenSlots[$i][1] == $slotName) {');
//         sourceBuffer.addRaw('    $givenSlot.push($ctxGivenSlots[$i][0]);');
//         sourceBuffer.addRaw('  }');
//         sourceBuffer.addRaw('}');
// 
// 
//         sourceBuffer.addRaw('var $isInserted = $givenSlot.length > 0;');
//         sourceBuffer.addRaw('if (!$isInserted) { $givenSlot.push($defaultSlotRender); }');
// 
//         sourceBuffer.addRaw('var $slotCtx = $isInserted ? componentCtx.owner : componentCtx;');
//         if (aNode.vars) {
//             sourceBuffer.addRaw('$slotCtx = {data: extend({}, $slotCtx.data), filters: $slotCtx.filters, callFilter: $slotCtx.callFilter};'); // eslint-disable-line
//             each(aNode.vars, function (varItem) {
//                 sourceBuffer.addRaw(
//                     '$slotCtx.data["' + varItem.name + '"] = '
//                     + compileExprSource.expr(varItem.expr)
//                     + ';'
//                 );
//             });
//         }
// 
//         sourceBuffer.addRaw('for (var $renderIndex = 0; $renderIndex < $givenSlot.length; $renderIndex++) {');
//         sourceBuffer.addRaw('  html += $givenSlot[$renderIndex]($slotCtx);');
//         sourceBuffer.addRaw('}');
// 
//         sourceBuffer.addRaw('})();');
//     },
// 
//     /**
//      * 编译普通节点
//      *
//      * @param {ANode} aNode 节点对象
//      * @param {CompileSourceBuffer} sourceBuffer 编译源码的中间buffer
//      * @param {Component} owner 所属组件实例环境
//      * @param {Object} extra 编译所需的一些额外信息
//      */
//     compileElement: function (aNode, sourceBuffer, owner, extra) {
//         extra = extra || {};
//         // if (aNode.tagName === 'option'
//         //     && !getANodeProp(aNode, 'value')
//         //     && aNode.children[0]
//         // ) {
//         //     aNode.props.push({
//         //         name: 'value',
//         //         expr: aNode.children[0].textExpr
//         //     });
//         // }
// 
//         elementSourceCompiler.tagStart(
//             sourceBuffer,
//             aNode.tagName,
//             aNode.props,
//             extra.prop
//         );
// 
//         elementSourceCompiler.inner(sourceBuffer, aNode, owner);
//         elementSourceCompiler.tagEnd(sourceBuffer, aNode.tagName);
//     },
// 
//     /**
//      * 编译组件节点
//      *
//      * @param {ANode} aNode 节点对象
//      * @param {CompileSourceBuffer} sourceBuffer 编译源码的中间buffer
//      * @param {Component} owner 所属组件实例环境
//      * @param {Object} extra 编译所需的一些额外信息
//      * @param {Function} extra.ComponentClass 对应组件类
//      */
//     compileComponent: function (aNode, sourceBuffer, owner, extra) {
//         if (aNode) {
//             sourceBuffer.addRaw('var $slotName = null;');
//             sourceBuffer.addRaw('var $givenSlots = [];');
//             each(aNode.children, function (child) {
//                 var slotBind = !child.textExpr && getANodeProp(child, 'slot');
//                 if (slotBind) {
//                     sourceBuffer.addRaw('$slotName = ' + compileExprSource.expr(slotBind.expr) + ';');
//                     sourceBuffer.addRaw('$givenSlots.push([function (componentCtx) {');
//                     sourceBuffer.addRaw('  var html = "";');
//                     sourceBuffer.addRaw(aNodeCompiler.compile(child, sourceBuffer, owner));
//                     sourceBuffer.addRaw('  return html;');
//                     sourceBuffer.addRaw('}, $slotName]);');
//                 }
//                 else {
//                     sourceBuffer.addRaw('$givenSlots.push([function (componentCtx) {');
//                     sourceBuffer.addRaw('  var html = "";');
//                     sourceBuffer.addRaw(aNodeCompiler.compile(child, sourceBuffer, owner));
//                     sourceBuffer.addRaw('  return html;');
//                     sourceBuffer.addRaw('}]);');
//                 }
//             });
//         }
// 
//         var ComponentClass = extra.ComponentClass;
//         var component = new ComponentClass({
//             aNode: aNode,
//             owner: owner,
//             subTag: aNode.tagName
//         });
// 
//         var givenData = [];
// 
//         each(component.binds, function (prop) {
//             givenData.push(
//                 compileExprSource.stringLiteralize(prop.name)
//                 + ':'
//                 + compileExprSource.expr(prop.expr)
//             );
//         });
// 
//         sourceBuffer.addRaw('html += (');
//         sourceBuffer.addRendererStart();
//         compileComponentSource(sourceBuffer, component, extra && extra.prop);
//         sourceBuffer.addRendererEnd();
//         sourceBuffer.addRaw(')({' + givenData.join(',\n') + '}, componentCtx, $givenSlots);');
//         sourceBuffer.addRaw('$givenSlots = null;');
//     }
// };
// /* eslint-disable guard-for-in */
// 
// /**
//  * 生成组件 renderer 时 ctx 对象构建的代码
//  *
//  * @inner
//  * @param {CompileSourceBuffer} sourceBuffer 编译源码的中间buffer
//  * @param {Object} component 组件实例
//  * @param {string?} extraProp 额外的属性串
//  */
// function compileComponentSource(sourceBuffer, component, extraProp) {
//     sourceBuffer.addRaw(genComponentContextCode(component));
//     sourceBuffer.addRaw('componentCtx.owner = parentCtx;');
//     sourceBuffer.addRaw('componentCtx.givenSlots = givenSlots;');
// 
// 
//     sourceBuffer.addRaw('data = extend(componentCtx.data, data);');
//     sourceBuffer.addRaw('for (var $i = 0; $i < componentCtx.computedNames.length; $i++) {');
//     sourceBuffer.addRaw('  var $computedName = componentCtx.computedNames[$i];');
//     sourceBuffer.addRaw('  data[$computedName] = componentCtx.computed[$computedName]();');
//     sourceBuffer.addRaw('}');
// 
//     extraProp = extraProp || '';
// 
//     var eventDeclarations = [];
//     for (var key in component.listeners) {
//         each(component.listeners[key], function (listener) {
//             if (listener.declaration) {
//                 eventDeclarations.push(listener.declaration);
//             }
//         });
//     }
// 
//     elementSourceCompiler.tagStart(
//         sourceBuffer,
//         component.tagName,
//         component.aNode.props,
//         extraProp
//     );
// 
//     if (!component.owner) {
//         sourceBuffer.joinString('<!--s-data:');
//         sourceBuffer.joinDataStringify();
//         sourceBuffer.joinString('-->');
//     }
// 
// 
// 
//     elementSourceCompiler.inner(sourceBuffer, component.aNode, component);
//     elementSourceCompiler.tagEnd(sourceBuffer, component.tagName);
// }
// 
// var stringifier = {
//     obj: function (source) {
//         var prefixComma;
//         var result = '{';
// 
//         for (var key in source) {
//             if (typeof source[key] === 'undefined') {
//                 continue;
//             }
// 
//             if (prefixComma) {
//                 result += ',';
//             }
//             prefixComma = 1;
// 
//             result += compileExprSource.stringLiteralize(key) + ':' + stringifier.any(source[key]);
//         }
// 
//         return result + '}';
//     },
// 
//     arr: function (source) {
//         var prefixComma;
//         var result = '[';
// 
//         each(source, function (value) {
//             if (prefixComma) {
//                 result += ',';
//             }
//             prefixComma = 1;
// 
//             result += stringifier.any(value);
//         });
// 
//         return result + ']';
//     },
// 
//     str: function (source) {
//         return compileExprSource.stringLiteralize(source);
//     },
// 
//     date: function (source) {
//         return 'new Date(' + source.getTime() + ')';
//     },
// 
//     any: function (source) {
//         switch (typeof source) {
//             case 'string':
//                 return stringifier.str(source);
// 
//             case 'number':
//                 return '' + source;
// 
//             case 'boolean':
//                 return source ? 'true' : 'false';
// 
//             case 'object':
//                 if (!source) {
//                     return null;
//                 }
// 
//                 if (source instanceof Array) {
//                     return stringifier.arr(source);
//                 }
// 
//                 if (source instanceof Date) {
//                     return stringifier.date(source);
//                 }
// 
//                 return stringifier.obj(source);
//         }
// 
//         throw new Error('Cannot Stringify:' + source);
//     }
// };
// 
// /**
//  * 生成组件 renderer 时 ctx 对象构建的代码
//  *
//  * @inner
//  * @param {Object} component 组件实例
//  * @return {string}
//  */
// function genComponentContextCode(component) {
//     var code = ['var componentCtx = {'];
// 
//     // given anode
//     code.push('givenSlots: [],');
// 
//     // filters
//     code.push('filters: {');
//     var filterCode = [];
//     for (var key in component.filters) {
//         var filter = component.filters[key];
// 
//         if (typeof filter === 'function') {
//             filterCode.push(key + ': ' + filter.toString());
//         }
//     }
//     code.push(filterCode.join(','));
//     code.push('},');
// 
//     code.push(
//         'callFilter: function (name, args) {',
//         '    var filter = this.filters[name] || DEFAULT_FILTERS[name];',
//         '    if (typeof filter === "function") {',
//         '        return filter.apply(this, args);',
//         '    }',
//         '},'
//     );
// 
//     /* eslint-disable no-redeclare */
//     // computed obj
//     code.push('computed: {');
//     var computedCode = [];
//     for (var key in component.computed) {
//         var computed = component.computed[key];
// 
//         if (typeof computed === 'function') {
//             computedCode.push(key + ': '
//                 + computed.toString().replace(
//                     /this.data.get\(([^\)]+)\)/g,
//                     function (match, exprLiteral) {
//                         var exprStr = (new Function('return ' + exprLiteral))();
//                         var expr = parseExpr(exprStr);
// 
//                         return compileExprSource.expr(expr);
//                     })
//             );
//         }
//     }
//     code.push(computedCode.join(','));
//     code.push('},');
// 
//     // computed names
//     code.push('computedNames: [');
//     computedCode = [];
//     for (var key in component.computed) {
//         var computed = component.computed[key];
// 
//         if (typeof computed === 'function') {
//             computedCode.push('"' + key + '"');
//         }
//     }
//     code.push(computedCode.join(','));
//     code.push('],');
//     /* eslint-enable no-redeclare */
// 
//     // data
//     code.push('data: ' + stringifier.any(component.data.get()) + ',');
// 
//     // tagName
//     code.push('tagName: "' + component.tagName + '"');
//     code.push('};');
// 
//     return code.join('\n');
// }
// 
// /* eslint-enable guard-for-in */
// 
// /* eslint-disable no-unused-vars */
// /* eslint-disable fecs-camelcase */
// 
// /**
//  * 组件编译的模板函数
//  *
//  * @inner
//  */
// function componentCompilePreCode() {
//     var $version = '3.5.1';
// 
//     function extend(target, source) {
//         if (source) {
//             Object.keys(source).forEach(function (key) {
//                 let value = source[key];
//                 if (typeof value !== 'undefined') {
//                     target[key] = value;
//                 }
//             });
//         }
// 
//         return target;
//     }
// 
//     function each(array, iterator) {
//         if (array && array.length > 0) {
//             for (var i = 0, l = array.length; i < l; i++) {
//                 if (iterator(array[i], i) === false) {
//                     break;
//                 }
//             }
//         }
//     }
// 
//     function contains(array, value) {
//         var result;
//         each(array, function (item) {
//             result = item === value;
//             return !result;
//         });
// 
//         return result;
//     }
// 
//     var HTML_ENTITY = {
//         /* jshint ignore:start */
//         '&': '&amp;',
//         '<': '&lt;',
//         '>': '&gt;',
//         '"': '&quot;',
//         /* eslint-disable quotes */
//         "'": '&#39;'
//         /* eslint-enable quotes */
//         /* jshint ignore:end */
//     };
// 
//     function htmlFilterReplacer(c) {
//         return HTML_ENTITY[c];
//     }
// 
//     function escapeHTML(source) {
//         if (source == null) {
//             return '';
//         }
// 
//         return String(source).replace(/[&<>"']/g, htmlFilterReplacer);
//     }
// 
//     var DEFAULT_FILTERS = {
//         url: encodeURIComponent,
//         _class: function (source) {
//             if (source instanceof Array) {
//                 return source.join(' ');
//             }
// 
//             return source;
//         },
//         _style: function (source) {
//             if (typeof source === 'object') {
//                 var result = '';
//                 if (source) {
//                     Object.keys(source).forEach(function (key) {
//                         result += key + ':' + source[key] + ';';
//                     });
//                 }
// 
//                 return result;
//             }
// 
//             return source || '';
//         },
//         _sep: function (source, sep) {
//             return source ? sep + source : '';
//         }
//     };
// 
//     function attrFilter(name, value) {
//         if (value) {
//             return ' ' + name + '="' + value + '"';
//         }
// 
//         return '';
//     }
// 
//     function boolAttrFilter(name, value) {
//         if (value && value !== 'false' && value !== '0') {
//             return ' ' + name;
//         }
// 
//         return '';
//     }
// 
//     function stringLiteralize(source) {
//         return '"'
//             + source
//                 .replace(/\x5C/g, '\\\\')
//                 .replace(/"/g, '\\"')
//                 .replace(/\x0A/g, '\\n')
//                 .replace(/\x09/g, '\\t')
//                 .replace(/\x0D/g, '\\r')
//             + '"';
//     }
// 
//     var stringifier = {
//         obj: function (source) {
//             var prefixComma;
//             var result = '{';
// 
//             Object.keys(source).forEach(function (key) {
//                 if (typeof source[key] === 'undefined') {
//                     return;
//                 }
// 
//                 if (prefixComma) {
//                     result += ',';
//                 }
//                 prefixComma = 1;
// 
//                 result += stringLiteralize(key) + ':' + stringifier.any(source[key]);
//             });
// 
//             return result + '}';
//         },
// 
//         arr: function (source) {
//             var prefixComma;
//             var result = '[';
// 
//             each(source, function (value) {
//                 if (prefixComma) {
//                     result += ',';
//                 }
//                 prefixComma = 1;
// 
//                 result += stringifier.any(value);
//             });
// 
//             return result + ']';
//         },
// 
//         str: function (source) {
//             return stringLiteralize(source);
//         },
// 
//         date: function (source) {
//             return 'new Date(' + source.getTime() + ')';
//         },
// 
//         any: function (source) {
//             switch (typeof source) {
//                 case 'string':
//                     return stringifier.str(source);
// 
//                 case 'number':
//                     return '' + source;
// 
//                 case 'boolean':
//                     return source ? 'true' : 'false';
// 
//                 case 'object':
//                     if (!source) {
//                         return null;
//                     }
// 
//                     if (source instanceof Array) {
//                         return stringifier.arr(source);
//                     }
// 
//                     if (source instanceof Date) {
//                         return stringifier.date(source);
//                     }
// 
//                     return stringifier.obj(source);
//             }
// 
//             throw new Error('Cannot Stringify:' + source);
//         }
//     };
// }
// /* eslint-enable no-unused-vars */
// /* eslint-enable fecs-camelcase */
// 
// /**
//  * 将组件编译成 render 方法的 js 源码
//  *
//  * @param {Function} ComponentClass 组件类
//  * @return {string}
//  */
// function compileJSSource(ComponentClass) {
//     var sourceBuffer = new CompileSourceBuffer();
// 
//     sourceBuffer.addRendererStart();
//     sourceBuffer.addRaw(
//         componentCompilePreCode.toString()
//             .split('\n')
//             .slice(1)
//             .join('\n')
//             .replace(/\}\s*$/, '')
//     );
// 
//     // 先初始化个实例，让模板编译成 ANode，并且能获得初始化数据
//     var component = new ComponentClass();
// 
//     compileComponentSource(sourceBuffer, component);
//     sourceBuffer.addRendererEnd();
//     return sourceBuffer.toCode();
// }
// #[end]

// exports = module.exports = compileJSSource;

    /* eslint-disable no-unused-vars */
//     var nextTick = require('./util/next-tick');
//     var inherits = require('./util/inherits');
//     var parseTemplate = require('./parser/parse-template');
//     var parseExpr = require('./parser/parse-expr');
//     var ExprType = require('./parser/expr-type');
//     var LifeCycle = require('./view/life-cycle');
//     var NodeType = require('./view/node-type');
//     var Component = require('./view/component');
//     var compileComponent = require('./view/compile-component');
//     var defineComponent = require('./view/define-component');
//     var emitDevtool = require('./util/emit-devtool');
//     var compileJSSource = require('./view/compile-js-source');
//     var DataTypes = require('./util/data-types');


    var san = {
        /**
         * san版本号
         *
         * @type {string}
         */
        version: '3.5.1',

        // #[begin] devtool
        /**
         * 是否开启调试。开启调试时 devtool 会工作
         *
         * @type {boolean}
         */
        debug: true,
        // #[end]

        // #[begin] ssr
//         /**
//          * 将组件类编译成 renderer 方法
//          *
//          * @param {Function} ComponentClass 组件类
//          * @return {function(Object):string}
//          */
//         compileToRenderer: function (ComponentClass) {
//             var renderer = ComponentClass.__ssrRenderer;
// 
//             if (!renderer) {
//                 var code = compileJSSource(ComponentClass);
//                 renderer = (new Function('return ' + code))();
//                 ComponentClass.__ssrRenderer = renderer;
//             }
// 
//             return renderer;
//         },
// 
//         /**
//          * 将组件类编译成 renderer 方法的源文件
//          *
//          * @param {Function} ComponentClass 组件类
//          * @return {string}
//          */
//         compileToSource: compileJSSource,
        // #[end]

        /**
         * 组件基类
         *
         * @type {Function}
         */
        Component: Component,

        /**
         * 创建组件类
         *
         * @param {Object} proto 组件类的方法表
         * @return {Function}
         */
        defineComponent: defineComponent,

        /**
         * 编译组件类。预解析template和components
         *
         * @param {Function} ComponentClass 组件类
         */
        compileComponent: compileComponent,

        /**
         * 解析 template
         *
         * @inner
         * @param {string} source template 源码
         * @return {ANode}
         */
        parseTemplate: parseTemplate,

        /**
         * 解析表达式
         *
         * @param {string} source 源码
         * @return {Object}
         */
        parseExpr: parseExpr,

        /**
         * 表达式类型枚举
         *
         * @const
         * @type {Object}
         */
        ExprType: ExprType,

        /**
         * 生命周期
         */
        LifeCycle: LifeCycle,

        /**
         * 节点类型
         *
         * @const
         * @type {Object}
         */
        NodeType: NodeType,

        /**
         * 在下一个更新周期运行函数
         *
         * @param {Function} fn 要运行的函数
         */
        nextTick: nextTick,

        /**
         * 构建类之间的继承关系
         *
         * @param {Function} subClass 子类函数
         * @param {Function} superClass 父类函数
         */
        inherits: inherits,

        /**
         * DataTypes
         *
         * @type {Object}
         */
        DataTypes: DataTypes
    };

    // export
    if (true) {
        // For CommonJS
        exports = module.exports = san;
    }
    else {}

    // #[begin] devtool
    emitDevtool.start(san);
    // #[end]
})(this);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(window, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmeidate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL3VybC9lc2NhcGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2FuL2Rpc3Qvc2FuLmRldi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2V0aW1tZWRpYXRlL3NldEltbWVkaWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdGltZXJzLWJyb3dzZXJpZnkvbWFpbi5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsZ0JBQWdCO0FBQ25ELElBQUk7QUFDSjtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsaUJBQWlCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxvQkFBb0I7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELGNBQWM7O0FBRWxFO0FBQ0E7Ozs7Ozs7Ozs7OztBQzNFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNmQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FB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QUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFlBQVk7QUFDdkIsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxFQUFFO0FBQ2QsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLFNBQVM7QUFDckIsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7OztBQUlBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CLFlBQVk7QUFDWjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSzs7QUFFTDs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBLFlBQVksU0FBUztBQUNyQixZQUFZO0FBQ1o7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwrQ0FBK0MsU0FBUztBQUN4RDtBQUNBOztBQUVBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWSxlQUFlO0FBQzNCLFlBQVk7QUFDWjtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLE9BQU87QUFDbkIsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVksTUFBTTtBQUNsQixZQUFZO0FBQ1o7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsd0RBQXdELFNBQVM7QUFDakU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVksZ0JBQWdCO0FBQzVCLFlBQVk7QUFDWjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSw4REFBOEQsU0FBUzs7QUFFdkU7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVksU0FBUztBQUNyQixZQUFZO0FBQ1o7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLE9BQU87QUFDbkIsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxLQUFLOztBQUVMO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVksT0FBTztBQUNuQixZQUFZLE9BQU87QUFDbkIsWUFBWTtBQUNaO0FBQ0E7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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsU0FBUztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsT0FBTztBQUNsQixZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSx3RkFBd0Y7QUFDeEY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3REFBd0Q7QUFDeEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixnQkFBZ0IsT0FBTztBQUN2QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRDtBQUN0RDs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZixjQUFjO0FBQ2QsY0FBYztB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QTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUwsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFB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bUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxZQUFZO0FBQ3ZCLFdBQVcsYUFBYTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakIsV0FBVyxPQUFPO0FBQ2xCLFlBQVk7QUFDWjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxpQkFBaUI7QUFDaEM7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEseUNBQXlDLE9BQU87QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsWUFBWTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLFVBQVU7QUFDckIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsS0FBSztBQUNoQixXQUFXLG1CQUFtQjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDRDQUE0QyxPQUFPO0FBQ25EOztBQUVBLG1EQUFtRCxlQUFlO0FBQ2xFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFELE9BQU87QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxVQUFVO0FBQ3JCLFdBQVcsT0FBTztBQUNsQixXQUFXLEtBQUs7QUFDaEIsV0FBVyxtQkFBbUI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEIsV0FBVyxTQUFTO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsWUFBWTtBQUN2QixXQUFXLGFBQWE7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxZQUFZO0FBQ3ZCLFdBQVcsYUFBYTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsU0FBUztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLFVBQVU7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLHNDQUFzQyxPQUFPO0FBQzdDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0NBQXNDLE9BQU87QUFDN0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxFQUFFO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBLDZCQUE2QjtBQUM3Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0VBQXdFO0FBQ3hFO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFF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QSxxQkFBcUI7QUFDckI7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsU0FBUztBQUNwQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUNBQXFDO0FBQ3JDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUNBQXFDO0FBQ3JDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEIsa0NBQWtDLDRCQUE0QixHQUFHO0FBQzNGLDBCQUEwQixrQ0FBa0Msd0JBQXdCLElBQUksR0FBRztBQUMzRix1QkFBdUIsK0JBQStCLElBQUk7QUFDMUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxTQUFTO0FBQ1Q7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFlBQVk7QUFDWjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakIsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBDQUEwQyxzQkFBc0IsRUFBRTtBQUNsRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ3pMRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUIsbUJBQW1CO0FBQ3BDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixzQkFBc0I7QUFDdkM7O0FBRUE7QUFDQSxtQkFBbUIsMkJBQTJCOztBQUU5QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLG1CQUFtQjtBQUNuQztBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLDJCQUEyQjtBQUM1QztBQUNBOztBQUVBLFFBQVEsdUJBQXVCO0FBQy9CO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsaUJBQWlCLHVCQUF1QjtBQUN4QztBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGdCQUFnQixpQkFBaUI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7O0FBRWQsa0RBQWtELHNCQUFzQjtBQUN4RTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDs7QUFFQSw2QkFBNkIsbUJBQW1COztBQUVoRDs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdFhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxXQUFXLEVBQUU7QUFDckQsd0NBQXdDLFdBQVcsRUFBRTs7QUFFckQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxzQ0FBc0M7QUFDdEMsR0FBRztBQUNIO0FBQ0EsOERBQThEO0FBQzlEOztBQUVBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDeEZBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzNEQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUE0Qzs7QUFFNUMiLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgbGlzdCA9IFtdO1xuXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuXHRcdHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuXHRcdFx0dmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cdFx0XHRpZihpdGVtWzJdKSB7XG5cdFx0XHRcdHJldHVybiBcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGNvbnRlbnQgKyBcIn1cIjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBjb250ZW50O1xuXHRcdFx0fVxuXHRcdH0pLmpvaW4oXCJcIik7XG5cdH07XG5cblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3Rcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcblx0XHR9XG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRyZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG5cdHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcblx0dmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXHRpZiAoIWNzc01hcHBpbmcpIHtcblx0XHRyZXR1cm4gY29udGVudDtcblx0fVxuXG5cdGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcblx0XHR2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcblx0XHR2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuXHRcdFx0cmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJ1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG5cdH1cblxuXHRyZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufVxuXG4vLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuXHR2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcblx0dmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcblxuXHRyZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBlc2NhcGUodXJsKSB7XG4gICAgaWYgKHR5cGVvZiB1cmwgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiB1cmxcbiAgICB9XG4gICAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gICAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gICAgfVxuICAgIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICAgIGlmICgvW1wiJygpIFxcdFxcbl0vLnRlc3QodXJsKSkge1xuICAgICAgICByZXR1cm4gJ1wiJyArIHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csICdcXFxcbicpICsgJ1wiJ1xuICAgIH1cblxuICAgIHJldHVybiB1cmxcbn1cbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCIvKipcbiAqIFNhblxuICogQ29weXJpZ2h0IDIwMTYgQmFpZHUgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIEBmaWxlIOS4u+aWh+S7tlxuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKiAgICAgICAgIG90YWt1c3RheShvdGFrdXN0YXlAZ21haWwuY29tKVxuICogICAgICAgICBqdW5tZXIoanVubWVyQGZveG1haWwuY29tKVxuICovXG5cbihmdW5jdGlvbiAocm9vdCkge1xuICAgIC8vIOS6uuW3peiwg+aVtOaJk+WMheS7o+eggemhuuW6j++8jOmAmui/h+azqOmHiuaJi+W3peWGmeS4gOS6m+S+nei1llxuLy8gICAgIC8vIHJlcXVpcmUoJy4vdXRpbC9ndWlkJyk7XG4vLyAgICAgLy8gcmVxdWlyZSgnLi91dGlsL2VtcHR5Jyk7XG4vLyAgICAgLy8gcmVxdWlyZSgnLi91dGlsL2V4dGVuZCcpO1xuLy8gICAgIC8vIHJlcXVpcmUoJy4vdXRpbC9pbmhlcml0cycpO1xuLy8gICAgIC8vIHJlcXVpcmUoJy4vdXRpbC9lYWNoJyk7XG4vLyAgICAgLy8gcmVxdWlyZSgnLi91dGlsL2NvbnRhaW5zJyk7XG4vLyAgICAgLy8gcmVxdWlyZSgnLi91dGlsL2JpbmQnKTtcbi8vICAgICAvLyByZXF1aXJlKCcuL2Jyb3dzZXIvb24nKTtcbi8vICAgICAvLyByZXF1aXJlKCcuL2Jyb3dzZXIvdW4nKTtcbi8vICAgICAvLyByZXF1aXJlKCcuL2Jyb3dzZXIvc3ZnLXRhZ3MnKTtcbi8vICAgICAvLyByZXF1aXJlKCcuL2Jyb3dzZXIvY3JlYXRlLWVsJyk7XG4vLyAgICAgLy8gcmVxdWlyZSgnLi9icm93c2VyL3JlbW92ZS1lbCcpO1xuLy8gICAgIC8vIHJlcXVpcmUoJy4vdXRpbC9uZXh0LXRpY2snKTtcbi8vICAgICAvLyByZXF1aXJlKCcuL2Jyb3dzZXIvaWUnKTtcbi8vICAgICAvLyByZXF1aXJlKCcuL2Jyb3dzZXIvaWUtb2xkLXRoYW4tOScpO1xuLy8gICAgIC8vIHJlcXVpcmUoJy4vYnJvd3Nlci9pbnB1dC1ldmVudC1jb21wYXRpYmxlJyk7XG4vLyAgICAgLy8gcmVxdWlyZSgnLi9icm93c2VyL2F1dG8tY2xvc2UtdGFncycpO1xuLy8gICAgIC8vIHJlcXVpcmUoJy4vdXRpbC9kYXRhLXR5cGVzLmpzJyk7XG4vLyAgICAgLy8gcmVxdWlyZSgnLi91dGlsL2NyZWF0ZS1kYXRhLXR5cGVzLWNoZWNrZXIuanMnKTtcbi8vICAgICAvLyByZXF1aXJlKCcuL3BhcnNlci93YWxrZXInKTtcbi8vICAgICAvLyByZXF1aXJlKCcuL3BhcnNlci9jcmVhdGUtYS1ub2RlJyk7XG4vLyAgICAgLy8gcmVxdWlyZSgnLi9wYXJzZXIvcGFyc2UtdGVtcGxhdGUnKTtcbi8vICAgICAvLyByZXF1aXJlKCcuL3J1bnRpbWUvY2hhbmdlLWV4cHItY29tcGFyZScpO1xuLy8gICAgIC8vIHJlcXVpcmUoJy4vcnVudGltZS9kYXRhLWNoYW5nZS10eXBlJyk7XG4vLyAgICAgLy8gcmVxdWlyZSgnLi9ydW50aW1lL2RhdGEnKTtcbi8vICAgICAvLyByZXF1aXJlKCcuL3J1bnRpbWUvZXNjYXBlLWh0bWwnKTtcbi8vICAgICAvLyByZXF1aXJlKCcuL3J1bnRpbWUvZGVmYXVsdC1maWx0ZXJzJyk7XG4vLyAgICAgLy8gcmVxdWlyZSgnLi9ydW50aW1lL2V2YWwtZXhwcicpO1xuLy8gICAgIC8vIHJlcXVpcmUoJy4vdmlldy9saWZlLWN5Y2xlJyk7XG4vLyAgICAgLy8gcmVxdWlyZSgnLi92aWV3L25vZGUtdHlwZScpO1xuLy8gICAgIC8vIHJlcXVpcmUoJy4vdmlldy9nZXQtcHJvcC1oYW5kbGVyJyk7XG4vLyAgICAgLy8gcmVxdWlyZSgnLi92aWV3L2lzLWRhdGEtY2hhbmdlLWJ5LWVsZW1lbnQnKTtcbi8vICAgICAvLyByZXF1aXJlKCcuL3ZpZXcvZXZlbnQtZGVjbGFyYXRpb24tbGlzdGVuZXInKTtcbi8vICAgICAvLyByZXF1aXJlKCcuL3ZpZXcvZ2VuLWVsZW1lbnQtY2hpbGRyZW4taHRtbCcpO1xuLy8gICAgIC8vIHJlcXVpcmUoJy4vdmlldy9jcmVhdGUtbm9kZScpO1xuXG5cbiAgICAvKipcbiAqIEBmaWxlIOeUn+aIkOWUr+S4gGlkXG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG5cbi8qKlxuICog5ZSv5LiAaWTnmoTotbflp4vlgLxcbiAqXG4gKiBAaW5uZXJcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKi9cbnZhciBndWlkSW5kZXggPSAxO1xuXG4vKipcbiAqIOWUr+S4gGlk55qE5YmN57yAXG4gKlxuICogQGlubmVyXG4gKiBAdHlwZSB7c3RyaW5nfVxuICovXG52YXIgZ3VpZFByZWZpeCA9IChuZXcgRGF0ZSgpKS5nZXRUaW1lKCkudG9TdHJpbmcoMTYpLnNsaWNlKDgpO1xuXG4vKipcbiAqIOiOt+WPluWUr+S4gGlkXG4gKlxuICogQGlubmVyXG4gKiBAcmV0dXJuIHtzdHJpbmd9IOWUr+S4gGlkXG4gKi9cbmZ1bmN0aW9uIGd1aWQoKSB7XG4gICAgcmV0dXJuICdfJyArIGd1aWRQcmVmaXggKyAoZ3VpZEluZGV4KyspO1xufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBndWlkO1xuXG5cbi8qKlxuICogQGZpbGUg56m65Ye95pWwXG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG5cbi8qKlxuICog5ZWl6YO95LiN5bmyXG4gKi9cbmZ1bmN0aW9uIGVtcHR5KCkge31cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZW1wdHk7XG5cblxuLyoqXG4gKiBAZmlsZSDlsZ7mgKfmi7fotJ1cbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cbi8qKlxuICog5a+56LGh5bGe5oCn5ou36LSdXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHRhcmdldCDnm67moIflr7nosaFcbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2Ug5rqQ5a+56LGhXG4gKiBAcmV0dXJuIHtPYmplY3R9IOi/lOWbnuebruagh+WvueixoVxuICovXG5mdW5jdGlvbiBleHRlbmQodGFyZ2V0LCBzb3VyY2UpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChzb3VyY2UuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gc291cmNlW2tleV07XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBleHRlbmQ7XG5cblxuLyoqXG4gKiBAZmlsZSDmnoTlu7rnsbvkuYvpl7TnmoTnu6fmib/lhbPns7tcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cbi8vIHZhciBleHRlbmQgPSByZXF1aXJlKCcuL2V4dGVuZCcpO1xuXG4vKipcbiAqIOaehOW7uuexu+S5i+mXtOeahOe7p+aJv+WFs+ezu1xuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHN1YkNsYXNzIOWtkOexu+WHveaVsFxuICogQHBhcmFtIHtGdW5jdGlvbn0gc3VwZXJDbGFzcyDniLbnsbvlh73mlbBcbiAqL1xuZnVuY3Rpb24gaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgICAvKiBqc2hpbnQgLVcwNTQgKi9cbiAgICB2YXIgc3ViQ2xhc3NQcm90byA9IHN1YkNsYXNzLnByb3RvdHlwZTtcbiAgICB2YXIgRiA9IG5ldyBGdW5jdGlvbigpO1xuICAgIEYucHJvdG90eXBlID0gc3VwZXJDbGFzcy5wcm90b3R5cGU7XG4gICAgc3ViQ2xhc3MucHJvdG90eXBlID0gbmV3IEYoKTtcbiAgICBzdWJDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBzdWJDbGFzcztcbiAgICBleHRlbmQoc3ViQ2xhc3MucHJvdG90eXBlLCBzdWJDbGFzc1Byb3RvKTtcbiAgICAvKiBqc2hpbnQgK1cwNTQgKi9cbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gaW5oZXJpdHM7XG5cblxuLyoqXG4gKiBAZmlsZSDpgY3ljobmlbDnu4RcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cblxuLyoqXG4gKiDpgY3ljobmlbDnu4Tpm4blkIhcbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSDmlbDnu4TmupBcbiAqIEBwYXJhbSB7ZnVuY3Rpb24oQW55LG51bWJlcik6Ym9vbGVhbn0gaXRlcmF0b3Ig6YGN5Y6G5Ye95pWwXG4gKi9cbmZ1bmN0aW9uIGVhY2goYXJyYXksIGl0ZXJhdG9yKSB7XG4gICAgaWYgKGFycmF5ICYmIGFycmF5Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBhcnJheS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChpdGVyYXRvcihhcnJheVtpXSwgaSkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGVhY2g7XG5cblxuLyoqXG4gKiBAZmlsZSDliKTmlq3mlbDnu4TkuK3mmK/lkKbljIXlkKvmn5DpoblcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cbi8vIHZhciBlYWNoID0gcmVxdWlyZSgnLi9lYWNoJyk7XG5cbi8qKlxuICog5Yik5pat5pWw57uE5Lit5piv5ZCm5YyF5ZCr5p+Q6aG5XG4gKlxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkg5pWw57uEXG4gKiBAcGFyYW0geyp9IHZhbHVlIOWMheWQq+eahOmhuVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gY29udGFpbnMoYXJyYXksIHZhbHVlKSB7XG4gICAgdmFyIHJlc3VsdCA9IGZhbHNlO1xuICAgIGVhY2goYXJyYXksIGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIHJlc3VsdCA9IGl0ZW0gPT09IHZhbHVlO1xuICAgICAgICByZXR1cm4gIXJlc3VsdDtcbiAgICB9KTtcblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRhaW5zO1xuXG5cbi8qKlxuICogQGZpbGUgYmluZOWHveaVsFxuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuLyoqXG4gKiBGdW5jdGlvbi5wcm90b3R5cGUuYmluZCDmlrnms5XnmoTlhbzlrrnmgKflsIHoo4VcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIOimgWJpbmTnmoTlh73mlbBcbiAqIEBwYXJhbSB7T2JqZWN0fSB0aGlzQXJnIHRoaXPmjIflkJHlr7nosaFcbiAqIEBwYXJhbSB7Li4uKn0gYXJncyDpooTorr7nmoTliJ3lp4vlj4LmlbBcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICovXG5mdW5jdGlvbiBiaW5kKGZ1bmMsIHRoaXNBcmcpIHtcbiAgICB2YXIgbmF0aXZlQmluZCA9IEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kO1xuICAgIHZhciBzbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZTtcbiAgICAvLyAjW2JlZ2luXSBhbGx1YVxuICAgIGlmIChuYXRpdmVCaW5kICYmIGZ1bmMuYmluZCA9PT0gbmF0aXZlQmluZCkge1xuICAgIC8vICNbZW5kXVxuICAgICAgICByZXR1cm4gbmF0aXZlQmluZC5hcHBseShmdW5jLCBzbGljZS5jYWxsKGFyZ3VtZW50cywgMSkpO1xuICAgIC8vICNbYmVnaW5dIGFsbHVhXG4gICAgfVxuXG4gICAgdmFyIGFyZ3MgPSBzbGljZS5jYWxsKGFyZ3VtZW50cywgMik7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmMuYXBwbHkodGhpc0FyZywgYXJncy5jb25jYXQoc2xpY2UuY2FsbChhcmd1bWVudHMpKSk7XG4gICAgfTtcbiAgICAvLyAjW2VuZF1cbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gYmluZDtcblxuXG4vKipcbiAqIEBmaWxlIERPTSDkuovku7bmjILovb1cbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cbi8qKlxuICogRE9NIOS6i+S7tuaMgui9vVxuICpcbiAqIEBpbm5lclxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWwgRE9N5YWD57SgXG4gKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lIOS6i+S7tuWQjVxuICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXIg55uR5ZCs5Ye95pWwXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGNhcHR1cmUg5piv5ZCm5piv5o2V6I636Zi25q61XG4gKi9cbmZ1bmN0aW9uIG9uKGVsLCBldmVudE5hbWUsIGxpc3RlbmVyLCBjYXB0dXJlKSB7XG4gICAgLy8gI1tiZWdpbl0gYWxsdWFcbiAgICBpZiAoZWwuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgIC8vICNbZW5kXVxuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgbGlzdGVuZXIsIGNhcHR1cmUpO1xuICAgIC8vICNbYmVnaW5dIGFsbHVhXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBlbC5hdHRhY2hFdmVudCgnb24nICsgZXZlbnROYW1lLCBsaXN0ZW5lcik7XG4gICAgfVxuICAgIC8vICNbZW5kXVxufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBvbjtcblxuXG4vKipcbiAqIEBmaWxlIERPTSDkuovku7bljbjovb1cbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cbi8qKlxuICogRE9NIOS6i+S7tuWNuOi9vVxuICpcbiAqIEBpbm5lclxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWwgRE9N5YWD57SgXG4gKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lIOS6i+S7tuWQjVxuICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXIg55uR5ZCs5Ye95pWwXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGNhcHR1cmUg5piv5ZCm5piv5o2V6I636Zi25q61XG4gKi9cbmZ1bmN0aW9uIHVuKGVsLCBldmVudE5hbWUsIGxpc3RlbmVyLCBjYXB0dXJlKSB7XG4gICAgLy8gI1tiZWdpbl0gYWxsdWFcbiAgICBpZiAoZWwuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgIC8vICNbZW5kXVxuICAgICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgbGlzdGVuZXIsIGNhcHR1cmUpO1xuICAgIC8vICNbYmVnaW5dIGFsbHVhXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBlbC5kZXRhY2hFdmVudCgnb24nICsgZXZlbnROYW1lLCBsaXN0ZW5lcik7XG4gICAgfVxuICAgIC8vICNbZW5kXVxufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSB1bjtcblxuXG4vKipcbiAqIEBmaWxlIOWwhuWtl+espuS4sumAl+WPt+WIh+WIhui/lOWbnuWvueixoVxuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuLy8gdmFyIGVhY2ggPSByZXF1aXJlKCcuLi91dGlsL2VhY2gnKTtcblxuLyoqXG4gKiDlsIblrZfnrKbkuLLpgJflj7fliIfliIbov5Tlm57lr7nosaFcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc291cmNlIOa6kOWtl+espuS4slxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiBzcGxpdFN0cjJPYmooc291cmNlKSB7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIGVhY2goXG4gICAgICAgIHNvdXJjZS5zcGxpdCgnLCcpLFxuICAgICAgICBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICByZXN1bHRba2V5XSA9IDE7XG4gICAgICAgIH1cbiAgICApO1xuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHNwbGl0U3RyMk9iajtcblxuXG4vKipcbiAqIEBmaWxlIFNWR+agh+etvuihqFxuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuLy8gdmFyIHNwbGl0U3RyMk9iaiA9IHJlcXVpcmUoJy4uL3V0aWwvc3BsaXQtc3RyLTItb2JqJyk7XG5cbi8qKlxuICogc3ZnVGFnc1xuICpcbiAqIEBzZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL1NWRy9zdmdkdGQuaHRtbCDlj6rlj5bluLjnlKhcbiAqIEB0eXBlIHtPYmplY3R9XG4gKi9cbnZhciBzdmdUYWdzID0gc3BsaXRTdHIyT2JqKCcnXG4gICAgLy8gc3RydWN0dXJlXG4gICAgKyAnc3ZnLGcsZGVmcyxkZXNjLG1ldGFkYXRhLHN5bWJvbCx1c2UsJ1xuICAgIC8vIGltYWdlICYgc2hhcGVcbiAgICArICdpbWFnZSxwYXRoLHJlY3QsY2lyY2xlLGxpbmUsZWxsaXBzZSxwb2x5bGluZSxwb2x5Z29uLCdcbiAgICAvLyB0ZXh0XG4gICAgKyAndGV4dCx0c3Bhbix0cmVmLHRleHRwYXRoLCdcbiAgICAvLyBvdGhlclxuICAgICsgJ21hcmtlcixwYXR0ZXJuLGNsaXBwYXRoLG1hc2ssZmlsdGVyLGN1cnNvcix2aWV3LGFuaW1hdGUsJ1xuICAgIC8vIGZvbnRcbiAgICArICdmb250LGZvbnQtZmFjZSxnbHlwaCxtaXNzaW5nLWdseXBoJyk7XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHN2Z1RhZ3M7XG5cblxuLyoqXG4gKiBAZmlsZSBET03liJvlu7pcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cbi8vIHZhciBzdmdUYWdzID0gcmVxdWlyZSgnLi9zdmctdGFncycpO1xuXG4vKipcbiAqIOWIm+W7uiBET00g5YWD57SgXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSB0YWdOYW1lIHRhZ05hbWVcbiAqIEByZXR1cm4ge0hUTUxFbGVtZW50fVxuICovXG5mdW5jdGlvbiBjcmVhdGVFbCh0YWdOYW1lKSB7XG4gICAgaWYgKHN2Z1RhZ3NbdGFnTmFtZV0pIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCB0YWdOYW1lKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gY3JlYXRlRWw7XG5cblxuLyoqXG4gKiBAZmlsZSDnp7vpmaRET01cbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cbi8qKlxuICog5bCGIERPTSDku47pobXpnaLkuK3np7vpmaRcbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbCBET03lhYPntKBcbiAqL1xuZnVuY3Rpb24gcmVtb3ZlRWwoZWwpIHtcbiAgICBpZiAoZWwgJiYgZWwucGFyZW50Tm9kZSkge1xuICAgICAgICBlbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsKTtcbiAgICB9XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlbW92ZUVsO1xuXG5cbi8qKlxuICogQGZpbGUg5Zyo5LiL5LiA5Liq5pe26Ze05ZGo5pyf6L+Q6KGM5Lu75YqhXG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG4vLyDor6Xmlrnms5Xlj4LnhafkuoZ2dWUyLjUuMOeahOWunueOsO+8jOaEn+iwonZ1ZeWboumYn1xuLy8gU0VFOiBodHRwczovL2dpdGh1Yi5jb20vdnVlanMvdnVlL2Jsb2IvMDk0OGQ5OTlmMmZkZGY5ZjkwOTkxOTU2NDkzZjk3NjI3M2M1ZGExZi9zcmMvY29yZS91dGlsL2Vudi5qcyNMNjhcblxuXG4vLyB2YXIgYmluZCA9IHJlcXVpcmUoJy4vYmluZCcpO1xuXG4vKipcbiAqIOS4i+S4gOS4quWRqOacn+imgeaJp+ihjOeahOS7u+WKoeWIl+ihqFxuICpcbiAqIEBpbm5lclxuICogQHR5cGUge0FycmF5fVxuICovXG52YXIgbmV4dFRhc2tzID0gW107XG5cbi8qKlxuICog5omn6KGM5LiL5LiA5Liq5ZGo5pyf5Lu75Yqh55qE5Ye95pWwXG4gKlxuICogQGlubmVyXG4gKiBAdHlwZSB7RnVuY3Rpb259XG4gKi9cbnZhciBuZXh0SGFuZGxlcjtcblxuLyoqXG4gKiDmtY/op4jlmajmmK/lkKbmlK/mjIHljp/nlJ9Qcm9taXNlXG4gKiDlr7lQcm9taXNl5YGa5Yik5pat77yM5piv5Li65LqG56aB55So5LiA5Lqb5LiN5Lil6LCo55qEUHJvbWlzZeeahHBvbHlmaWxsXG4gKlxuICogQGlubmVyXG4gKiBAdHlwZSB7Ym9vbGVhbn1cbiAqL1xudmFyIGlzTmF0aXZlUHJvbWlzZSA9IHR5cGVvZiBQcm9taXNlID09PSAnZnVuY3Rpb24nICYmIC9uYXRpdmUgY29kZS8udGVzdChQcm9taXNlKTtcblxuLyoqXG4gKiDlnKjkuIvkuIDkuKrml7bpl7TlkajmnJ/ov5DooYzku7vliqFcbiAqXG4gKiBAaW5uZXJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIOimgei/kOihjOeahOS7u+WKoeWHveaVsFxuICogQHBhcmFtIHtPYmplY3Q9fSB0aGlzQXJnIHRoaXPmjIflkJHlr7nosaFcbiAqL1xuZnVuY3Rpb24gbmV4dFRpY2soZm4sIHRoaXNBcmcpIHtcbiAgICBpZiAodGhpc0FyZykge1xuICAgICAgICBmbiA9IGJpbmQoZm4sIHRoaXNBcmcpO1xuICAgIH1cbiAgICBuZXh0VGFza3MucHVzaChmbik7XG5cbiAgICBpZiAobmV4dEhhbmRsZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG5leHRIYW5kbGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdGFza3MgPSBuZXh0VGFza3Muc2xpY2UoMCk7XG4gICAgICAgIG5leHRUYXNrcyA9IFtdO1xuICAgICAgICBuZXh0SGFuZGxlciA9IG51bGw7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSB0YXNrcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIHRhc2tzW2ldKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8g6Z2e5qCH5YeG5pa55rOV77yM5L2G5piv5q2k5pa55rOV6Z2e5bi45ZC75ZCI6KaB5rGC44CCXG4gICAgaWYgKHR5cGVvZiBzZXRJbW1lZGlhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgc2V0SW1tZWRpYXRlKG5leHRIYW5kbGVyKTtcbiAgICB9XG4gICAgLy8g55SoTWVzc2FnZUNoYW5uZWzljrvlgZpzZXRJbW1lZGlhdGXnmoRwb2x5ZmlsbFxuICAgIC8vIOWOn+eQhuaYr+WwhuaWsOeahG1lc3NhZ2Xkuovku7bliqDlhaXliLDljp/mnInnmoRkb20gZXZlbnRz5LmL5ZCOXG4gICAgZWxzZSBpZiAodHlwZW9mIE1lc3NhZ2VDaGFubmVsID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHZhciBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG4gICAgICAgIHZhciBwb3J0ID0gY2hhbm5lbC5wb3J0MjtcbiAgICAgICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBuZXh0SGFuZGxlcjtcbiAgICAgICAgcG9ydC5wb3N0TWVzc2FnZSgxKTtcbiAgICB9XG4gICAgLy8gZm9yIG5hdGl2ZSBhcHBcbiAgICBlbHNlIGlmIChpc05hdGl2ZVByb21pc2UpIHtcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbihuZXh0SGFuZGxlcik7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBzZXRUaW1lb3V0KG5leHRIYW5kbGVyLCAwKTtcbiAgICB9XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IG5leHRUaWNrO1xuXG5cbi8qKlxuICogQGZpbGUgaWXniYjmnKzlj7dcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cbi8qKlxuICog5LuOdXNlckFnZW505LitaWXniYjmnKzlj7fnmoTljLnphY3kv6Hmga9cbiAqXG4gKiBAdHlwZSB7QXJyYXl9XG4gKi9cbnZhciBpZVZlcnNpb25NYXRjaCA9IHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnXG4gICAgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvbXNpZVxccyooWzAtOV0rKS9pKTtcblxuLyoqXG4gKiBpZeeJiOacrOWPt++8jOmdnmll5pe25Li6MFxuICpcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKi9cbnZhciBpZSA9IGllVmVyc2lvbk1hdGNoID8gaWVWZXJzaW9uTWF0Y2hbMV0gLSAwIDogMDtcblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gaWU7XG5cblxuLyoqXG4gKiBAZmlsZSDmmK/lkKYgSUUg5bm25LiU5bCP5LqOIDlcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cbi8vIHZhciBpZSA9IHJlcXVpcmUoJy4vaWUnKTtcblxuLy8gSEFDSzpcbi8vIDEuIElFOOS4i++8jOiuvue9rmlubmVySFRNTOaXtuWmguaenOS7pWh0bWwgY29tbWVudOW8gOWktO+8jGNvbW1lbnTkvJrooqvoh6rliqjmu6Tmjolcbi8vICAgIOS4uuS6huS/neivgXN0dW1w5a2Y5Zyo77yM6ZyA6KaB6K6+572u5a6MaHRtbOWQju+8jGNyZWF0ZUNvbW1lbnTlubZhcHBlbmRDaGlsZC9pbnNlcnRCZWZvcmVcbi8vIDIuIElFOOS4i++8jGlubmVySFRNTOi/mOS4jeaUr+aMgWN1c3RvbSBlbGVtZW5077yM5omA5Lul6ZyA6KaB55SoZGl25pu/5Luj77yM5LiN55SoY3JlYXRlRWxlbWVudFxuLy8gMy4g6Jm954S2SUU45bey57uP5LyY5YyW5LqG5a2X56ym5LiyK+i/nuaOpe+8jOeijueJh+WMlui/nuaOpeaAp+iDveS4jeWGjemAgOWMllxuLy8gICAg5L2G5piv55Sx5LqO5LiK6Z2i5aSa5Liq5YW85a655Zy65pmv6YO955SoIDwgOSDliKTmlq3vvIzmiYDku6XlrZfnrKbkuLLov57mjqXkuZ/msr/nlKhcbi8vICAgIOaJgOS7pee7k+aenOaYr0lFOOS4i+Wtl+espuS4sui/nuaOpeeUqOeahOaYr+aVsOe7hGpvaW7nmoTmlrnlvI9cblxuLy8gI1tiZWdpbl0gYWxsdWFcbi8qKlxuICog5piv5ZCmIElFIOW5tuS4lOWwj+S6jiA5XG4gKi9cbnZhciBpZU9sZFRoYW45ID0gaWUgJiYgaWUgPCA5O1xuLy8gI1tlbmRdXG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGllT2xkVGhhbjk7XG5cblxuLyoqXG4gKiBAZmlsZSBET00g5LqL5Lu25oyC6L29XG4gKiBAYXV0aG9yIGRhZnJvayhvLm9AbXVnLmRvZylcbiAqL1xuXG4vKipcbiAqIERPTSDkuovku7bmjILovb1cbiAqXG4gKiBAaW5uZXJcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsIERPTeWFg+e0oFxuICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZSDkuovku7blkI1cbiAqL1xuZnVuY3Rpb24gdHJpZ2dlcihlbCwgZXZlbnROYW1lKSB7XG4gICAgdmFyIGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0hUTUxFdmVudHMnKTtcbiAgICBldmVudC5pbml0RXZlbnQoZXZlbnROYW1lLCB0cnVlLCB0cnVlKTtcbiAgICBlbC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gdHJpZ2dlcjtcblxuXG4vKipcbiAqIEBmaWxlIOino+WGsyBJRTkg5Zyo6KGo5Y2V5YWD57Sg5Lit5Yig6Zmk5a2X56ym5pe25LiN6Kem5Y+R5LqL5Lu255qE6Zeu6aKYXG4gKiBAYXV0aG9yIGRhZnJvayhvLm9AbXVnLmRvZylcbiAqL1xuXG4vLyB2YXIgaWUgPSByZXF1aXJlKCcuL2llJyk7XG4vLyB2YXIgb24gPSByZXF1aXJlKCcuL29uJyk7XG4vLyB2YXIgdHJpZ2dlciA9IHJlcXVpcmUoJy4vdHJpZ2dlcicpO1xuXG4vLyAjW2JlZ2luXSBhbGx1YVxuaWYgKGllID09PSA5KSB7XG4gICAgb24oZG9jdW1lbnQsICdzZWxlY3Rpb25jaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBlbCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gICAgICAgIGlmIChlbC50YWdOYW1lID09PSAnVEVYVEFSRUEnIHx8IGVsLnRhZ05hbWUgPT09ICdJTlBVVCcpIHtcbiAgICAgICAgICAgIHRyaWdnZXIoZWwsICdpbnB1dCcpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4vLyAjW2VuZF1cblxuXG4vKipcbiAqIEBmaWxlIOiHqumXreWQiOagh+etvuihqFxuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuLy8gdmFyIHNwbGl0U3RyMk9iaiA9IHJlcXVpcmUoJy4uL3V0aWwvc3BsaXQtc3RyLTItb2JqJyk7XG5cbi8qKlxuICog6Ieq6Zet5ZCI5qCH562+5YiX6KGoXG4gKlxuICogQHR5cGUge09iamVjdH1cbiAqL1xudmFyIGF1dG9DbG9zZVRhZ3MgPSBzcGxpdFN0cjJPYmooJ2FyZWEsYmFzZSxicixjb2wsZW1iZWQsaHIsaW1nLGlucHV0LGtleWdlbixwYXJhbSxzb3VyY2UsdHJhY2ssd2JyJyk7XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGF1dG9DbG9zZVRhZ3M7XG5cblxuLyoqXG4gKiBAZmlsZSBkYXRhIHR5cGVzXG4gKiBAYXV0aG9yIGxlb24gPGx1ZGFmYUBvdXRsb29rLmNvbT5cbiAqL1xuXG4vLyB2YXIgYmluZCA9IHJlcXVpcmUoJy4vYmluZCcpO1xuLy8gdmFyIGVtcHR5ID0gcmVxdWlyZSgnLi9lbXB0eScpO1xuLy8gdmFyIGV4dGVuZCA9IHJlcXVpcmUoJy4vZXh0ZW5kJyk7XG5cbi8vICNbYmVnaW5dIGVycm9yXG52YXIgQU5PTllNT1VTX0NMQVNTX05BTUUgPSAnPDxhbm9ueW1vdXM+Pic7XG5cbi8qKlxuICog6I635Y+W57K+56Gu55qE57G75Z6LXG4gKlxuICogQE5PVEUg5aaC5p6cIG9iaiDmmK/kuIDkuKogRE9NRWxlbWVudO+8jOaIkeS7rOS8mui/lOWbniBgZWxlbWVudGDvvJtcbiAqXG4gKiBAcGFyYW0gIHsqfSBvYmog55uu5qCHXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGdldERhdGFUeXBlKG9iaikge1xuXG4gICAgaWYgKG9iaiAmJiBvYmoubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgICAgcmV0dXJuICdlbGVtZW50JztcbiAgICB9XG5cbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ1xuICAgICAgICAuY2FsbChvYmopXG4gICAgICAgIC5zbGljZSg4LCAtMSlcbiAgICAgICAgLnRvTG93ZXJDYXNlKCk7XG59XG4vLyAjW2VuZF1cblxuLyoqXG4gKiDliJvlu7rpk77lvI/nmoTmlbDmja7nsbvlnovmoKHpqozlmahcbiAqXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gdmFsaWRhdGUg55yf5q2j55qE5qCh6aqM5ZmoXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqL1xuZnVuY3Rpb24gY3JlYXRlQ2hhaW5hYmxlQ2hlY2tlcih2YWxpZGF0ZSkge1xuICAgIHZhciBjaGFpbmVkQ2hlY2tlciA9IGZ1bmN0aW9uICgpIHt9O1xuICAgIGNoYWluZWRDaGVja2VyLmlzUmVxdWlyZWQgPSBlbXB0eTtcblxuICAgIC8vIOWPquWcqCBlcnJvciDlip/og73lkK/nlKjml7bmiY3mnInlrp7pmYXkuIrnmoQgZGF0YVR5cGVzIOajgOa1i1xuICAgIC8vICNbYmVnaW5dIGVycm9yXG4gICAgdmFyIGNoZWNrVHlwZSA9IGZ1bmN0aW9uIChpc1JlcXVpcmVkLCBkYXRhLCBkYXRhTmFtZSwgY29tcG9uZW50TmFtZSwgZnVsbERhdGFOYW1lKSB7XG5cbiAgICAgICAgdmFyIGRhdGFWYWx1ZSA9IGRhdGFbZGF0YU5hbWVdO1xuICAgICAgICB2YXIgZGF0YVR5cGUgPSBnZXREYXRhVHlwZShkYXRhVmFsdWUpO1xuXG4gICAgICAgIGNvbXBvbmVudE5hbWUgPSBjb21wb25lbnROYW1lIHx8IEFOT05ZTU9VU19DTEFTU19OQU1FO1xuXG4gICAgICAgIC8vIOWmguaenOaYryBudWxsIOaIliB1bmRlZmluZWTvvIzpgqPkuYjopoHmj5DliY3ov5Tlm57llaZcbiAgICAgICAgaWYgKGRhdGFWYWx1ZSA9PSBudWxsKSB7XG4gICAgICAgICAgICAvLyDmmK8gcmVxdWlyZWQg5bCx5oql6ZSZXG4gICAgICAgICAgICBpZiAoaXNSZXF1aXJlZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignW1NBTiBFUlJPUl0gJ1xuICAgICAgICAgICAgICAgICAgICArICdUaGUgYCcgKyBkYXRhTmFtZSArICdgICdcbiAgICAgICAgICAgICAgICAgICAgKyAnaXMgbWFya2VkIGFzIHJlcXVpcmVkIGluIGAnICsgY29tcG9uZW50TmFtZSArICdgLCAnXG4gICAgICAgICAgICAgICAgICAgICsgJ2J1dCBpdHMgdmFsdWUgaXMgJyArIGRhdGFUeXBlXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIOS4jeaYryByZXF1aXJlZO+8jOmCo+WwseaYryBvayDnmoRcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhbGlkYXRlKGRhdGEsIGRhdGFOYW1lLCBjb21wb25lbnROYW1lLCBmdWxsRGF0YU5hbWUpO1xuXG4gICAgfTtcblxuICAgIGNoYWluZWRDaGVja2VyID0gYmluZChjaGVja1R5cGUsIG51bGwsIGZhbHNlKTtcbiAgICBjaGFpbmVkQ2hlY2tlci5pc1JlcXVpcmVkID0gYmluZChjaGVja1R5cGUsIG51bGwsIHRydWUpO1xuICAgIC8vICNbZW5kXVxuXG5cblxuICAgIHJldHVybiBjaGFpbmVkQ2hlY2tlcjtcblxufVxuXG4vLyAjW2JlZ2luXSBlcnJvclxuLyoqXG4gKiDnlJ/miJDkuLvopoHnsbvlnovmlbDmja7moKHpqozlmahcbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHR5cGUg5Li757G75Z6LXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqL1xuZnVuY3Rpb24gY3JlYXRlUHJpbWFyeVR5cGVDaGVja2VyKHR5cGUpIHtcblxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVDaGVja2VyKGZ1bmN0aW9uIChkYXRhLCBkYXRhTmFtZSwgY29tcG9uZW50TmFtZSwgZnVsbERhdGFOYW1lKSB7XG5cbiAgICAgICAgdmFyIGRhdGFWYWx1ZSA9IGRhdGFbZGF0YU5hbWVdO1xuICAgICAgICB2YXIgZGF0YVR5cGUgPSBnZXREYXRhVHlwZShkYXRhVmFsdWUpO1xuXG4gICAgICAgIGlmIChkYXRhVHlwZSAhPT0gdHlwZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbU0FOIEVSUk9SXSAnXG4gICAgICAgICAgICAgICAgKyAnSW52YWxpZCAnICsgY29tcG9uZW50TmFtZSArICcgZGF0YSBgJyArIGZ1bGxEYXRhTmFtZSArICdgIG9mIHR5cGUnXG4gICAgICAgICAgICAgICAgKyAnKCcgKyBkYXRhVHlwZSArICcgc3VwcGxpZWQgdG8gJyArIGNvbXBvbmVudE5hbWUgKyAnLCAnXG4gICAgICAgICAgICAgICAgKyAnZXhwZWN0ZWQgJyArIHR5cGUgKyAnKSdcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgIH0pO1xuXG59XG5cblxuXG4vKipcbiAqIOeUn+aIkCBhcnJheU9mIOagoemqjOWZqFxuICpcbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSBhcnJheUl0ZW1DaGVja2VyIOaVsOe7hOS4reavj+mhueaVsOaNrueahOagoemqjOWZqFxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUFycmF5T2ZDaGVja2VyKGFycmF5SXRlbUNoZWNrZXIpIHtcblxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVDaGVja2VyKGZ1bmN0aW9uIChkYXRhLCBkYXRhTmFtZSwgY29tcG9uZW50TmFtZSwgZnVsbERhdGFOYW1lKSB7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBhcnJheUl0ZW1DaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tTQU4gRVJST1JdICdcbiAgICAgICAgICAgICAgICArICdEYXRhIGAnICsgZGF0YU5hbWUgKyAnYCBvZiBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCBoYXMgaW52YWxpZCAnXG4gICAgICAgICAgICAgICAgKyAnRGF0YVR5cGUgbm90YXRpb24gaW5zaWRlIGBhcnJheU9mYCwgZXhwZWN0ZWQgYGZ1bmN0aW9uYCdcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZGF0YVZhbHVlID0gZGF0YVtkYXRhTmFtZV07XG4gICAgICAgIHZhciBkYXRhVHlwZSA9IGdldERhdGFUeXBlKGRhdGFWYWx1ZSk7XG5cbiAgICAgICAgaWYgKGRhdGFUeXBlICE9PSAnYXJyYXknKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tTQU4gRVJST1JdICdcbiAgICAgICAgICAgICAgICArICdJbnZhbGlkICcgKyBjb21wb25lbnROYW1lICsgJyBkYXRhIGAnICsgZnVsbERhdGFOYW1lICsgJ2Agb2YgdHlwZSdcbiAgICAgICAgICAgICAgICArICcoJyArIGRhdGFUeXBlICsgJyBzdXBwbGllZCB0byAnICsgY29tcG9uZW50TmFtZSArICcsICdcbiAgICAgICAgICAgICAgICArICdleHBlY3RlZCBhcnJheSknXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGRhdGFWYWx1ZS5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgYXJyYXlJdGVtQ2hlY2tlcihkYXRhVmFsdWUsIGksIGNvbXBvbmVudE5hbWUsIGZ1bGxEYXRhTmFtZSArICdbJyArIGkgKyAnXScpO1xuICAgICAgICB9XG5cbiAgICB9KTtcblxufVxuXG4vKipcbiAqIOeUn+aIkCBpbnN0YW5jZU9mIOajgOa1i+WZqFxuICpcbiAqIEBwYXJhbSAge0Z1bmN0aW9ufENsYXNzfSBleHBlY3RlZENsYXNzIOacn+W+heeahOexu1xuICogQHJldHVybiB7RnVuY3Rpb259XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUluc3RhbmNlT2ZDaGVja2VyKGV4cGVjdGVkQ2xhc3MpIHtcblxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVDaGVja2VyKGZ1bmN0aW9uIChkYXRhLCBkYXRhTmFtZSwgY29tcG9uZW50TmFtZSwgZnVsbERhdGFOYW1lKSB7XG5cbiAgICAgICAgdmFyIGRhdGFWYWx1ZSA9IGRhdGFbZGF0YU5hbWVdO1xuXG4gICAgICAgIGlmIChkYXRhVmFsdWUgaW5zdGFuY2VvZiBleHBlY3RlZENsYXNzKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZGF0YVZhbHVlQ2xhc3NOYW1lID0gZGF0YVZhbHVlLmNvbnN0cnVjdG9yICYmIGRhdGFWYWx1ZS5jb25zdHJ1Y3Rvci5uYW1lXG4gICAgICAgICAgICA/IGRhdGFWYWx1ZS5jb25zdHJ1Y3Rvci5uYW1lXG4gICAgICAgICAgICA6IEFOT05ZTU9VU19DTEFTU19OQU1FO1xuXG4gICAgICAgIHZhciBleHBlY3RlZENsYXNzTmFtZSA9IGV4cGVjdGVkQ2xhc3MubmFtZSB8fCBBTk9OWU1PVVNfQ0xBU1NfTkFNRTtcblxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tTQU4gRVJST1JdICdcbiAgICAgICAgICAgICsgJ0ludmFsaWQgJyArIGNvbXBvbmVudE5hbWUgKyAnIGRhdGEgYCcgKyBmdWxsRGF0YU5hbWUgKyAnYCBvZiB0eXBlJ1xuICAgICAgICAgICAgKyAnKCcgKyBkYXRhVmFsdWVDbGFzc05hbWUgKyAnIHN1cHBsaWVkIHRvICcgKyBjb21wb25lbnROYW1lICsgJywgJ1xuICAgICAgICAgICAgKyAnZXhwZWN0ZWQgaW5zdGFuY2Ugb2YgJyArIGV4cGVjdGVkQ2xhc3NOYW1lICsgJyknXG4gICAgICAgICk7XG5cblxuICAgIH0pO1xuXG59XG5cbi8qKlxuICog55Sf5oiQIHNoYXBlIOagoemqjOWZqFxuICpcbiAqIEBwYXJhbSAge09iamVjdH0gc2hhcGVUeXBlcyBzaGFwZSDmoKHpqozop4TliJlcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICovXG5mdW5jdGlvbiBjcmVhdGVTaGFwZUNoZWNrZXIoc2hhcGVUeXBlcykge1xuXG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZUNoZWNrZXIoZnVuY3Rpb24gKGRhdGEsIGRhdGFOYW1lLCBjb21wb25lbnROYW1lLCBmdWxsRGF0YU5hbWUpIHtcblxuICAgICAgICBpZiAoZ2V0RGF0YVR5cGUoc2hhcGVUeXBlcykgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tTQU4gRVJST1JdICdcbiAgICAgICAgICAgICAgICArICdEYXRhIGAnICsgZnVsbERhdGFOYW1lICsgJ2Agb2YgYCcgKyBjb21wb25lbnROYW1lICsgJ2AgaGFzIGludmFsaWQgJ1xuICAgICAgICAgICAgICAgICsgJ0RhdGFUeXBlIG5vdGF0aW9uIGluc2lkZSBgc2hhcGVgLCBleHBlY3RlZCBgb2JqZWN0YCdcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZGF0YVZhbHVlID0gZGF0YVtkYXRhTmFtZV07XG4gICAgICAgIHZhciBkYXRhVHlwZSA9IGdldERhdGFUeXBlKGRhdGFWYWx1ZSk7XG5cbiAgICAgICAgaWYgKGRhdGFUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbU0FOIEVSUk9SXSAnXG4gICAgICAgICAgICAgICAgKyAnSW52YWxpZCAnICsgY29tcG9uZW50TmFtZSArICcgZGF0YSBgJyArIGZ1bGxEYXRhTmFtZSArICdgIG9mIHR5cGUnXG4gICAgICAgICAgICAgICAgKyAnKCcgKyBkYXRhVHlwZSArICcgc3VwcGxpZWQgdG8gJyArIGNvbXBvbmVudE5hbWUgKyAnLCAnXG4gICAgICAgICAgICAgICAgKyAnZXhwZWN0ZWQgb2JqZWN0KSdcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBzaGFwZUtleU5hbWUgaW4gc2hhcGVUeXBlcykge1xuICAgICAgICAgICAgaWYgKHNoYXBlVHlwZXMuaGFzT3duUHJvcGVydHkoc2hhcGVLZXlOYW1lKSkge1xuICAgICAgICAgICAgICAgIHZhciBjaGVja2VyID0gc2hhcGVUeXBlc1tzaGFwZUtleU5hbWVdO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY2hlY2tlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBjaGVja2VyKGRhdGFWYWx1ZSwgc2hhcGVLZXlOYW1lLCBjb21wb25lbnROYW1lLCBmdWxsRGF0YU5hbWUgKyAnLicgKyBzaGFwZUtleU5hbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfSk7XG5cbn1cblxuLyoqXG4gKiDnlJ/miJAgb25lT2Yg5qCh6aqM5ZmoXG4gKlxuICogQHBhcmFtICB7QXJyYXl9IGV4cGVjdGVkRW51bVZhbHVlcyDmnJ/lvoXnmoTmnprkuL7lgLxcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICovXG5mdW5jdGlvbiBjcmVhdGVPbmVPZkNoZWNrZXIoZXhwZWN0ZWRFbnVtVmFsdWVzKSB7XG5cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlQ2hlY2tlcihmdW5jdGlvbiAoZGF0YSwgZGF0YU5hbWUsIGNvbXBvbmVudE5hbWUsIGZ1bGxEYXRhTmFtZSkge1xuXG4gICAgICAgIGlmIChnZXREYXRhVHlwZShleHBlY3RlZEVudW1WYWx1ZXMpICE9PSAnYXJyYXknKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tTQU4gRVJST1JdICdcbiAgICAgICAgICAgICAgICArICdEYXRhIGAnICsgZnVsbERhdGFOYW1lICsgJ2Agb2YgYCcgKyBjb21wb25lbnROYW1lICsgJ2AgaGFzIGludmFsaWQgJ1xuICAgICAgICAgICAgICAgICsgJ0RhdGFUeXBlIG5vdGF0aW9uIGluc2lkZSBgb25lT2ZgLCBhcnJheSBpcyBleHBlY3RlZC4nXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGRhdGFWYWx1ZSA9IGRhdGFbZGF0YU5hbWVdO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBleHBlY3RlZEVudW1WYWx1ZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChkYXRhVmFsdWUgPT09IGV4cGVjdGVkRW51bVZhbHVlc1tpXSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignW1NBTiBFUlJPUl0gJ1xuICAgICAgICAgICAgKyAnSW52YWxpZCAnICsgY29tcG9uZW50TmFtZSArICcgZGF0YSBgJyArIGZ1bGxEYXRhTmFtZSArICdgIG9mIHZhbHVlJ1xuICAgICAgICAgICAgKyAnKGAnICsgZGF0YVZhbHVlICsgJ2Agc3VwcGxpZWQgdG8gJyArIGNvbXBvbmVudE5hbWUgKyAnLCAnXG4gICAgICAgICAgICArICdleHBlY3RlZCBvbmUgb2YgJyArIGV4cGVjdGVkRW51bVZhbHVlcy5qb2luKCcsJykgKyAnKSdcbiAgICAgICAgKTtcblxuICAgIH0pO1xuXG59XG5cbi8qKlxuICog55Sf5oiQIG9uZU9mVHlwZSDmoKHpqozlmahcbiAqXG4gKiBAcGFyYW0gIHtBcnJheTxGdW5jdGlvbj59IGV4cGVjdGVkRW51bU9mVHlwZVZhbHVlcyDmnJ/lvoXnmoTmnprkuL7nsbvlnotcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICovXG5mdW5jdGlvbiBjcmVhdGVPbmVPZlR5cGVDaGVja2VyKGV4cGVjdGVkRW51bU9mVHlwZVZhbHVlcykge1xuXG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZUNoZWNrZXIoZnVuY3Rpb24gKGRhdGEsIGRhdGFOYW1lLCBjb21wb25lbnROYW1lLCBmdWxsRGF0YU5hbWUpIHtcblxuICAgICAgICBpZiAoZ2V0RGF0YVR5cGUoZXhwZWN0ZWRFbnVtT2ZUeXBlVmFsdWVzKSAhPT0gJ2FycmF5Jykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbU0FOIEVSUk9SXSAnXG4gICAgICAgICAgICAgICAgKyAnRGF0YSBgJyArIGRhdGFOYW1lICsgJ2Agb2YgYCcgKyBjb21wb25lbnROYW1lICsgJ2AgaGFzIGludmFsaWQgJ1xuICAgICAgICAgICAgICAgICsgJ0RhdGFUeXBlIG5vdGF0aW9uIGluc2lkZSBgb25lT2ZgLCBhcnJheSBpcyBleHBlY3RlZC4nXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGRhdGFWYWx1ZSA9IGRhdGFbZGF0YU5hbWVdO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBleHBlY3RlZEVudW1PZlR5cGVWYWx1ZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcblxuICAgICAgICAgICAgdmFyIGNoZWNrZXIgPSBleHBlY3RlZEVudW1PZlR5cGVWYWx1ZXNbaV07XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNoZWNrZXIoZGF0YSwgZGF0YU5hbWUsIGNvbXBvbmVudE5hbWUsIGZ1bGxEYXRhTmFtZSk7XG4gICAgICAgICAgICAgICAgLy8g5aaC5p6cIGNoZWNrZXIg5a6M5oiQ5qCh6aqM5rKh5oql6ZSZ77yM6YKj5bCx6L+U5Zue5LqGXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAvLyDlpoLmnpzmnInplJnor6/vvIzpgqPkuYjlupTor6XmiorplJnor6/lkJ7mjolcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgLy8g5omA5pyJ55qE5Y+v5o6l5Y+XIHR5cGUg6YO95aSx6LSl5LqG77yM5omN5Lii5LiA5Liq5byC5bi4XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignW1NBTiBFUlJPUl0gJ1xuICAgICAgICAgICAgKyAnSW52YWxpZCAnICsgY29tcG9uZW50TmFtZSArICcgZGF0YSBgJyArIGRhdGFOYW1lICsgJ2Agb2YgdmFsdWUnXG4gICAgICAgICAgICArICcoYCcgKyBkYXRhVmFsdWUgKyAnYCBzdXBwbGllZCB0byAnICsgY29tcG9uZW50TmFtZSArICcpJ1xuICAgICAgICApO1xuXG4gICAgfSk7XG5cbn1cblxuLyoqXG4gKiDnlJ/miJAgb2JqZWN0T2Yg5qCh6aqM5ZmoXG4gKlxuICogQHBhcmFtICB7RnVuY3Rpb259IHR5cGVDaGVja2VyIOWvueixoeWxnuaAp+WAvOagoemqjOWZqFxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZU9iamVjdE9mQ2hlY2tlcih0eXBlQ2hlY2tlcikge1xuXG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZUNoZWNrZXIoZnVuY3Rpb24gKGRhdGEsIGRhdGFOYW1lLCBjb21wb25lbnROYW1lLCBmdWxsRGF0YU5hbWUpIHtcblxuICAgICAgICBpZiAodHlwZW9mIHR5cGVDaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tTQU4gRVJST1JdICdcbiAgICAgICAgICAgICAgICArICdEYXRhIGAnICsgZGF0YU5hbWUgKyAnYCBvZiBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCBoYXMgaW52YWxpZCAnXG4gICAgICAgICAgICAgICAgKyAnRGF0YVR5cGUgbm90YXRpb24gaW5zaWRlIGBvYmplY3RPZmAsIGV4cGVjdGVkIGZ1bmN0aW9uJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBkYXRhVmFsdWUgPSBkYXRhW2RhdGFOYW1lXTtcbiAgICAgICAgdmFyIGRhdGFUeXBlID0gZ2V0RGF0YVR5cGUoZGF0YVZhbHVlKTtcblxuICAgICAgICBpZiAoZGF0YVR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tTQU4gRVJST1JdICdcbiAgICAgICAgICAgICAgICArICdJbnZhbGlkICcgKyBjb21wb25lbnROYW1lICsgJyBkYXRhIGAnICsgZGF0YU5hbWUgKyAnYCBvZiB0eXBlJ1xuICAgICAgICAgICAgICAgICsgJygnICsgZGF0YVR5cGUgKyAnIHN1cHBsaWVkIHRvICcgKyBjb21wb25lbnROYW1lICsgJywgJ1xuICAgICAgICAgICAgICAgICsgJ2V4cGVjdGVkIG9iamVjdCknXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2YXIgZGF0YUtleU5hbWUgaW4gZGF0YVZhbHVlKSB7XG4gICAgICAgICAgICBpZiAoZGF0YVZhbHVlLmhhc093blByb3BlcnR5KGRhdGFLZXlOYW1lKSkge1xuICAgICAgICAgICAgICAgIHR5cGVDaGVja2VyKFxuICAgICAgICAgICAgICAgICAgICBkYXRhVmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIGRhdGFLZXlOYW1lLFxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnROYW1lLFxuICAgICAgICAgICAgICAgICAgICBmdWxsRGF0YU5hbWUgKyAnLicgKyBkYXRhS2V5TmFtZVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgfSk7XG5cbn1cblxuLyoqXG4gKiDnlJ/miJAgZXhhY3Qg5qCh6aqM5ZmoXG4gKlxuICogQHBhcmFtICB7T2JqZWN0fSBzaGFwZVR5cGVzIG9iamVjdCDlvaLmgIHlrprkuYlcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICovXG5mdW5jdGlvbiBjcmVhdGVFeGFjdENoZWNrZXIoc2hhcGVUeXBlcykge1xuXG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZUNoZWNrZXIoZnVuY3Rpb24gKGRhdGEsIGRhdGFOYW1lLCBjb21wb25lbnROYW1lLCBmdWxsRGF0YU5hbWUsIHNlY3JldCkge1xuXG4gICAgICAgIGlmIChnZXREYXRhVHlwZShzaGFwZVR5cGVzKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignW1NBTiBFUlJPUl0gJ1xuICAgICAgICAgICAgICAgICsgJ0RhdGEgYCcgKyBkYXRhTmFtZSArICdgIG9mIGAnICsgY29tcG9uZW50TmFtZSArICdgIGhhcyBpbnZhbGlkICdcbiAgICAgICAgICAgICAgICArICdEYXRhVHlwZSBub3RhdGlvbiBpbnNpZGUgYGV4YWN0YCdcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZGF0YVZhbHVlID0gZGF0YVtkYXRhTmFtZV07XG4gICAgICAgIHZhciBkYXRhVmFsdWVUeXBlID0gZ2V0RGF0YVR5cGUoZGF0YVZhbHVlKTtcblxuICAgICAgICBpZiAoZGF0YVZhbHVlVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignW1NBTiBFUlJPUl0gJ1xuICAgICAgICAgICAgICAgICsgJ0ludmFsaWQgZGF0YSBgJyArIGZ1bGxEYXRhTmFtZSArICdgIG9mIHR5cGUgYCcgKyBkYXRhVmFsdWVUeXBlICsgJ2AnXG4gICAgICAgICAgICAgICAgKyAnKHN1cHBsaWVkIHRvICcgKyBjb21wb25lbnROYW1lICsgJywgZXhwZWN0ZWQgYG9iamVjdGApJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBhbGxLZXlzID0ge307XG5cbiAgICAgICAgLy8g5YWI5ZCI5YWlIHNoYXBlVHlwZXNcbiAgICAgICAgZXh0ZW5kKGFsbEtleXMsIHNoYXBlVHlwZXMpO1xuICAgICAgICAvLyDlho3lkIjlhaUgZGF0YVZhbHVlXG4gICAgICAgIGV4dGVuZChhbGxLZXlzLCBkYXRhVmFsdWUpO1xuICAgICAgICAvLyDkv53or4EgYWxsS2V5cyDnmoTnsbvlnovmraPnoa5cblxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gYWxsS2V5cykge1xuICAgICAgICAgICAgaWYgKGFsbEtleXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIHZhciBjaGVja2VyID0gc2hhcGVUeXBlc1trZXldO1xuXG4gICAgICAgICAgICAgICAgLy8gZGF0YVZhbHVlIOS4reacieS4gOS4quWkmuS9meeahOaVsOaNrumhuVxuICAgICAgICAgICAgICAgIGlmICghY2hlY2tlcikge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tTQU4gRVJST1JdICdcbiAgICAgICAgICAgICAgICAgICAgICAgICsgJ0ludmFsaWQgZGF0YSBgJyArIGZ1bGxEYXRhTmFtZSArICdgIGtleSBgJyArIGtleSArICdgICdcbiAgICAgICAgICAgICAgICAgICAgICAgICsgJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLiAnXG4gICAgICAgICAgICAgICAgICAgICAgICArICcoYCcgKyBrZXkgKyAnYCBpcyBub3QgZGVmaW5lZCBpbiBgRGF0YVR5cGVzLmV4YWN0YCknXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCEoa2V5IGluIGRhdGFWYWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbU0FOIEVSUk9SXSAnXG4gICAgICAgICAgICAgICAgICAgICAgICArICdJbnZhbGlkIGRhdGEgYCcgKyBmdWxsRGF0YU5hbWUgKyAnYCBrZXkgYCcgKyBrZXkgKyAnYCAnXG4gICAgICAgICAgICAgICAgICAgICAgICArICdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYC4gJ1xuICAgICAgICAgICAgICAgICAgICAgICAgKyAnKGAnICsga2V5ICsgJ2AgaXMgbWFya2VkIGByZXF1aXJlZGAgaW4gYERhdGFUeXBlcy5leGFjdGApJ1xuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNoZWNrZXIoXG4gICAgICAgICAgICAgICAgICAgIGRhdGFWYWx1ZSxcbiAgICAgICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnROYW1lLFxuICAgICAgICAgICAgICAgICAgICBmdWxsRGF0YU5hbWUgKyAnLicgKyBrZXksXG4gICAgICAgICAgICAgICAgICAgIHNlY3JldFxuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfSk7XG5cbn1cbi8vICNbZW5kXVxuXG5cblxuLyogZXNsaW50LWRpc2FibGUgZmVjcy12YWxpZC12YXItanNkb2MgKi9cbnZhciBEYXRhVHlwZXMgPSB7XG4gICAgYXJyYXk6IGNyZWF0ZUNoYWluYWJsZUNoZWNrZXIoZW1wdHkpLFxuICAgIG9iamVjdDogY3JlYXRlQ2hhaW5hYmxlQ2hlY2tlcihlbXB0eSksXG4gICAgZnVuYzogY3JlYXRlQ2hhaW5hYmxlQ2hlY2tlcihlbXB0eSksXG4gICAgc3RyaW5nOiBjcmVhdGVDaGFpbmFibGVDaGVja2VyKGVtcHR5KSxcbiAgICBudW1iZXI6IGNyZWF0ZUNoYWluYWJsZUNoZWNrZXIoZW1wdHkpLFxuICAgIGJvb2w6IGNyZWF0ZUNoYWluYWJsZUNoZWNrZXIoZW1wdHkpLFxuICAgIHN5bWJvbDogY3JlYXRlQ2hhaW5hYmxlQ2hlY2tlcihlbXB0eSksXG4gICAgYW55OiBjcmVhdGVDaGFpbmFibGVDaGVja2VyLFxuICAgIGFycmF5T2Y6IGNyZWF0ZUNoYWluYWJsZUNoZWNrZXIsXG4gICAgaW5zdGFuY2VPZjogY3JlYXRlQ2hhaW5hYmxlQ2hlY2tlcixcbiAgICBzaGFwZTogY3JlYXRlQ2hhaW5hYmxlQ2hlY2tlcixcbiAgICBvbmVPZjogY3JlYXRlQ2hhaW5hYmxlQ2hlY2tlcixcbiAgICBvbmVPZlR5cGU6IGNyZWF0ZUNoYWluYWJsZUNoZWNrZXIsXG4gICAgb2JqZWN0T2Y6IGNyZWF0ZUNoYWluYWJsZUNoZWNrZXIsXG4gICAgZXhhY3Q6IGNyZWF0ZUNoYWluYWJsZUNoZWNrZXJcbn07XG5cbi8vICNbYmVnaW5dIGVycm9yXG5EYXRhVHlwZXMgPSB7XG5cbiAgICBhbnk6IGNyZWF0ZUNoYWluYWJsZUNoZWNrZXIoZW1wdHkpLFxuXG4gICAgLy8g57G75Z6L5qOA5rWLXG4gICAgYXJyYXk6IGNyZWF0ZVByaW1hcnlUeXBlQ2hlY2tlcignYXJyYXknKSxcbiAgICBvYmplY3Q6IGNyZWF0ZVByaW1hcnlUeXBlQ2hlY2tlcignb2JqZWN0JyksXG4gICAgZnVuYzogY3JlYXRlUHJpbWFyeVR5cGVDaGVja2VyKCdmdW5jdGlvbicpLFxuICAgIHN0cmluZzogY3JlYXRlUHJpbWFyeVR5cGVDaGVja2VyKCdzdHJpbmcnKSxcbiAgICBudW1iZXI6IGNyZWF0ZVByaW1hcnlUeXBlQ2hlY2tlcignbnVtYmVyJyksXG4gICAgYm9vbDogY3JlYXRlUHJpbWFyeVR5cGVDaGVja2VyKCdib29sZWFuJyksXG4gICAgc3ltYm9sOiBjcmVhdGVQcmltYXJ5VHlwZUNoZWNrZXIoJ3N5bWJvbCcpLFxuXG4gICAgLy8g5aSN5ZCI57G75Z6L5qOA5rWLXG4gICAgYXJyYXlPZjogY3JlYXRlQXJyYXlPZkNoZWNrZXIsXG4gICAgaW5zdGFuY2VPZjogY3JlYXRlSW5zdGFuY2VPZkNoZWNrZXIsXG4gICAgc2hhcGU6IGNyZWF0ZVNoYXBlQ2hlY2tlcixcbiAgICBvbmVPZjogY3JlYXRlT25lT2ZDaGVja2VyLFxuICAgIG9uZU9mVHlwZTogY3JlYXRlT25lT2ZUeXBlQ2hlY2tlcixcbiAgICBvYmplY3RPZjogY3JlYXRlT2JqZWN0T2ZDaGVja2VyLFxuICAgIGV4YWN0OiBjcmVhdGVFeGFjdENoZWNrZXJcblxufTtcbi8qIGVzbGludC1lbmFibGUgZmVjcy12YWxpZC12YXItanNkb2MgKi9cbi8vICNbZW5kXVxuXG5cbi8vIG1vZHVsZS5leHBvcnRzID0gRGF0YVR5cGVzO1xuXG5cbi8qKlxuICogQGZpbGUg5Yib5bu65pWw5o2u5qOA5rWL5Ye95pWwXG4gKiBAYXV0aG9yIGxlb248bHVkYWZhQG91dGxvb2suY29tPlxuICovXG5cblxuLy8gI1tiZWdpbl0gZXJyb3JcblxuLyoqXG4gKiDliJvlu7rmlbDmja7mo4DmtYvlh73mlbBcbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9IGRhdGFUeXBlcyAgICAg5pWw5o2u5qC85byPXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGNvbXBvbmVudE5hbWUg57uE5Lu25ZCNXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqL1xuZnVuY3Rpb24gY3JlYXRlRGF0YVR5cGVzQ2hlY2tlcihkYXRhVHlwZXMsIGNvbXBvbmVudE5hbWUpIHtcblxuICAgIC8qKlxuICAgICAqIOagoemqjCBkYXRhIOaYr+WQpua7oei2syBkYXRhIHR5cGVzIOeahOagvOW8j1xuICAgICAqXG4gICAgICogQHBhcmFtICB7Kn0gZGF0YSDmlbDmja5cbiAgICAgKi9cbiAgICByZXR1cm4gZnVuY3Rpb24gKGRhdGEpIHtcblxuICAgICAgICBmb3IgKHZhciBkYXRhVHlwZU5hbWUgaW4gZGF0YVR5cGVzKSB7XG5cbiAgICAgICAgICAgIGlmIChkYXRhVHlwZXMuaGFzT3duUHJvcGVydHkoZGF0YVR5cGVOYW1lKSkge1xuXG4gICAgICAgICAgICAgICAgdmFyIGRhdGFUeXBlQ2hlY2tlciA9IGRhdGFUeXBlc1tkYXRhVHlwZU5hbWVdO1xuXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBkYXRhVHlwZUNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbU0FOIEVSUk9SXSAnXG4gICAgICAgICAgICAgICAgICAgICAgICArIGNvbXBvbmVudE5hbWUgKyAnOicgKyBkYXRhVHlwZU5hbWUgKyAnIGlzIGludmFsaWQ7ICdcbiAgICAgICAgICAgICAgICAgICAgICAgICsgJ2l0IG11c3QgYmUgYSBmdW5jdGlvbiwgdXN1YWxseSBmcm9tIHNhbi5EYXRhVHlwZXMnXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZGF0YVR5cGVDaGVja2VyKFxuICAgICAgICAgICAgICAgICAgICBkYXRhLFxuICAgICAgICAgICAgICAgICAgICBkYXRhVHlwZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudE5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGRhdGFUeXBlTmFtZVxuICAgICAgICAgICAgICAgICk7XG5cblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9O1xuXG59XG5cbi8vICNbZW5kXVxuXG4vLyBtb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZURhdGFUeXBlc0NoZWNrZXI7XG5cblxuLyoqXG4gKiBAZmlsZSDlrZfnrKbkuLLmupDnoIHor7vlj5bnsbtcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cblxuLyoqXG4gKiDlrZfnrKbkuLLmupDnoIHor7vlj5bnsbvvvIznlKjkuo7mqKHmnb/lrZfnrKbkuLLop6PmnpDov4fnqItcbiAqXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7c3RyaW5nfSBzb3VyY2Ug6KaB6K+75Y+W55qE5a2X56ym5LiyXG4gKi9cbmZ1bmN0aW9uIFdhbGtlcihzb3VyY2UpIHtcbiAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcbiAgICB0aGlzLmxlbiA9IHRoaXMuc291cmNlLmxlbmd0aDtcbiAgICB0aGlzLmluZGV4ID0gMDtcbn1cblxuLyoqXG4gKiDojrflj5blvZPliY3lrZfnrKbnoIFcbiAqXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbldhbGtlci5wcm90b3R5cGUuY3VycmVudENvZGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hhckNvZGUodGhpcy5pbmRleCk7XG59O1xuXG4vKipcbiAqIOaIquWPluWtl+espuS4sueJh+autVxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBzdGFydCDotbflp4vkvY3nva5cbiAqIEBwYXJhbSB7bnVtYmVyfSBlbmQg57uT5p2f5L2N572uXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbldhbGtlci5wcm90b3R5cGUuY3V0ID0gZnVuY3Rpb24gKHN0YXJ0LCBlbmQpIHtcbiAgICByZXR1cm4gdGhpcy5zb3VyY2Uuc2xpY2Uoc3RhcnQsIGVuZCk7XG59O1xuXG4vKipcbiAqIOWQkeWJjeivu+WPluWtl+esplxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBkaXN0YW5jZSDor7vlj5blrZfnrKbmlbBcbiAqL1xuV2Fsa2VyLnByb3RvdHlwZS5nbyA9IGZ1bmN0aW9uIChkaXN0YW5jZSkge1xuICAgIHRoaXMuaW5kZXggKz0gZGlzdGFuY2U7XG59O1xuXG4vKipcbiAqIOivu+WPluS4i+S4gOS4quWtl+espu+8jOi/lOWbnuS4i+S4gOS4quWtl+espueahCBjb2RlXG4gKlxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5XYWxrZXIucHJvdG90eXBlLm5leHRDb2RlID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZ28oMSk7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudENvZGUoKTtcbn07XG5cbi8qKlxuICog6I635Y+W55u45bqU5L2N572u5a2X56ym55qEIGNvZGVcbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXgg5a2X56ym5L2N572uXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbldhbGtlci5wcm90b3R5cGUuY2hhckNvZGUgPSBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICByZXR1cm4gdGhpcy5zb3VyY2UuY2hhckNvZGVBdChpbmRleCk7XG59O1xuXG4vKipcbiAqIOWQkeWJjeivu+WPluWtl+espu+8jOebtOWIsOmBh+WIsOaMh+WumuWtl+espuWGjeWBnOatolxuICpcbiAqIEBwYXJhbSB7bnVtYmVyPX0gY2hhckNvZGUg5oyH5a6a5a2X56ym55qEY29kZVxuICogQHJldHVybiB7Ym9vbGVhbn0g5b2T5oyH5a6a5a2X56ym5pe277yM6L+U5Zue5piv5ZCm56Kw5Yiw5oyH5a6a55qE5a2X56ymXG4gKi9cbldhbGtlci5wcm90b3R5cGUuZ29VbnRpbCA9IGZ1bmN0aW9uIChjaGFyQ29kZSkge1xuICAgIHZhciBjb2RlO1xuICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy5sZW4gJiYgKGNvZGUgPSB0aGlzLmN1cnJlbnRDb2RlKCkpKSB7XG4gICAgICAgIHN3aXRjaCAoY29kZSkge1xuICAgICAgICAgICAgY2FzZSAzMjpcbiAgICAgICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgICAgICB0aGlzLmluZGV4Kys7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGlmIChjb2RlID09PSBjaGFyQ29kZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluZGV4Kys7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG4vKipcbiAqIOWQkeWJjeivu+WPluespuWQiOinhOWImeeahOWtl+espueJh+aute+8jOW5tui/lOWbnuinhOWImeWMuemFjee7k+aenFxuICpcbiAqIEBwYXJhbSB7UmVnRXhwfSByZWcg5a2X56ym54mH5q6155qE5q2j5YiZ6KGo6L6+5byPXG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqL1xuV2Fsa2VyLnByb3RvdHlwZS5tYXRjaCA9IGZ1bmN0aW9uIChyZWcpIHtcbiAgICByZWcubGFzdEluZGV4ID0gdGhpcy5pbmRleDtcblxuICAgIHZhciBtYXRjaCA9IHJlZy5leGVjKHRoaXMuc291cmNlKTtcbiAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgdGhpcy5pbmRleCA9IHJlZy5sYXN0SW5kZXg7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1hdGNoO1xufTtcblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gV2Fsa2VyO1xuXG5cblxuLyoqXG4gKiBAZmlsZSDmqKHmnb/op6PmnpDnlJ/miJDnmoTmir3osaHoioLngrlcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cbi8qKlxuICog5Yib5bu65qih5p2/6Kej5p6Q55Sf5oiQ55qE5oq96LGh6IqC54K5XG4gKlxuICogQHBhcmFtIHtPYmplY3Q9fSBvcHRpb25zIOiKgueCueWPguaVsFxuICogQHBhcmFtIHtzdHJpbmc9fSBvcHRpb25zLnRhZ05hbWUg5qCH562+5ZCNXG4gKiBAcGFyYW0ge0FOb2RlPX0gb3B0aW9ucy5wYXJlbnQg54i26IqC54K5XG4gKiBAcGFyYW0ge2Jvb2xlYW49fSBvcHRpb25zLnRleHRFeHByIOaWh+acrOiKgueCueihqOi+vuW8j+WvueixoVxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiBjcmVhdGVBTm9kZShvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgICBpZiAoIW9wdGlvbnMudGV4dEV4cHIpIHtcbiAgICAgICAgb3B0aW9ucy5kaXJlY3RpdmVzID0gb3B0aW9ucy5kaXJlY3RpdmVzIHx8IHt9O1xuICAgICAgICBvcHRpb25zLnByb3BzID0gb3B0aW9ucy5wcm9wcyB8fCBbXTtcbiAgICAgICAgb3B0aW9ucy5ldmVudHMgPSBvcHRpb25zLmV2ZW50cyB8fCBbXTtcbiAgICAgICAgb3B0aW9ucy5jaGlsZHJlbiA9IG9wdGlvbnMuY2hpbGRyZW4gfHwgW107XG4gICAgfVxuXG4gICAgcmV0dXJuIG9wdGlvbnM7XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZUFOb2RlO1xuXG5cbi8qKlxuICogQGZpbGUg5oqKIGtlYmFiIGNhc2Ug5a2X56ym5Liy6L2s5o2i5oiQIGNhbWVsIGNhc2VcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cbi8qKlxuICog5oqKIGtlYmFiIGNhc2Ug5a2X56ym5Liy6L2s5o2i5oiQIGNhbWVsIGNhc2VcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc291cmNlIOa6kOWtl+espuS4slxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBrZWJhYjJjYW1lbChzb3VyY2UpIHtcbiAgICByZXR1cm4gc291cmNlLnJlcGxhY2UoLy0oW2Etel0pL2csIGZ1bmN0aW9uIChtYXRjaCwgYWxwaGEpIHtcbiAgICAgICAgcmV0dXJuIGFscGhhLnRvVXBwZXJDYXNlKCk7XG4gICAgfSk7XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGtlYmFiMmNhbWVsO1xuXG5cbi8qKlxuICogQGZpbGUg6KGo6L6+5byP57G75Z6LXG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG4vKipcbiAqIOihqOi+vuW8j+exu+Wei1xuICpcbiAqIEBjb25zdFxuICogQHR5cGUge09iamVjdH1cbiAqL1xudmFyIEV4cHJUeXBlID0ge1xuICAgIFNUUklORzogMSxcbiAgICBOVU1CRVI6IDIsXG4gICAgQk9PTDogMyxcbiAgICBBQ0NFU1NPUjogNCxcbiAgICBJTlRFUlA6IDUsXG4gICAgQ0FMTDogNixcbiAgICBURVhUOiA3LFxuICAgIEJJTkFSWTogOCxcbiAgICBVTkFSWTogOSxcbiAgICBURVJUSUFSWTogMTBcbn07XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IEV4cHJUeXBlO1xuXG5cbi8qKlxuICogQGZpbGUg5Yib5bu66K6/6Zeu6KGo6L6+5byP5a+56LGhXG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG4vLyB2YXIgRXhwclR5cGUgPSByZXF1aXJlKCcuL2V4cHItdHlwZScpO1xuXG4vKipcbiAqIOWIm+W7uuiuv+mXruihqOi+vuW8j+WvueixoVxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IHBhdGhzIOiuv+mXrui3r+W+hFxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiBjcmVhdGVBY2Nlc3NvcihwYXRocykge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IEV4cHJUeXBlLkFDQ0VTU09SLFxuICAgICAgICBwYXRoczogcGF0aHNcbiAgICB9O1xufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVBY2Nlc3NvcjtcblxuXG4vKipcbiAqIEBmaWxlIOivu+WPluWtl+espuS4slxuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuXG4vLyB2YXIgRXhwclR5cGUgPSByZXF1aXJlKCcuL2V4cHItdHlwZScpO1xuXG4vKipcbiAqIOivu+WPluWtl+espuS4slxuICpcbiAqIEBwYXJhbSB7V2Fsa2VyfSB3YWxrZXIg5rqQ56CB6K+75Y+W5a+56LGhXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIHJlYWRTdHJpbmcod2Fsa2VyKSB7XG4gICAgdmFyIHN0YXJ0Q29kZSA9IHdhbGtlci5jdXJyZW50Q29kZSgpO1xuICAgIHZhciBzdGFydEluZGV4ID0gd2Fsa2VyLmluZGV4O1xuICAgIHZhciBjaGFyQ29kZTtcblxuICAgIHdhbGtMb29wOiB3aGlsZSAoKGNoYXJDb2RlID0gd2Fsa2VyLm5leHRDb2RlKCkpKSB7XG4gICAgICAgIHN3aXRjaCAoY2hhckNvZGUpIHtcbiAgICAgICAgICAgIGNhc2UgOTI6IC8vIFxcXG4gICAgICAgICAgICAgICAgd2Fsa2VyLmdvKDEpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBzdGFydENvZGU6XG4gICAgICAgICAgICAgICAgd2Fsa2VyLmdvKDEpO1xuICAgICAgICAgICAgICAgIGJyZWFrIHdhbGtMb29wO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGxpdGVyYWwgPSB3YWxrZXIuY3V0KHN0YXJ0SW5kZXgsIHdhbGtlci5pbmRleCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogRXhwclR5cGUuU1RSSU5HLFxuICAgICAgICB2YWx1ZTogKG5ldyBGdW5jdGlvbigncmV0dXJuICcgKyBsaXRlcmFsKSkoKVxuICAgIH07XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlYWRTdHJpbmc7XG5cblxuLyoqXG4gKiBAZmlsZSDor7vlj5bmlbDlrZdcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cblxuLy8gdmFyIEV4cHJUeXBlID0gcmVxdWlyZSgnLi9leHByLXR5cGUnKTtcblxuLyoqXG4gKiDor7vlj5bmlbDlrZdcbiAqXG4gKiBAaW5uZXJcbiAqIEBwYXJhbSB7V2Fsa2VyfSB3YWxrZXIg5rqQ56CB6K+75Y+W5a+56LGhXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIHJlYWROdW1iZXIod2Fsa2VyKSB7XG4gICAgdmFyIG1hdGNoID0gd2Fsa2VyLm1hdGNoKC9cXHMqKC0/WzAtOV0rKC5bMC05XSspPykvZyk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBFeHByVHlwZS5OVU1CRVIsXG4gICAgICAgIHZhbHVlOiBtYXRjaFsxXSAtIDBcbiAgICB9O1xufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZWFkTnVtYmVyO1xuXG5cbi8qKlxuICogQGZpbGUg6K+75Y+WaWRlbnRcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cbi8qKlxuICog6K+75Y+WaWRlbnRcbiAqXG4gKiBAaW5uZXJcbiAqIEBwYXJhbSB7V2Fsa2VyfSB3YWxrZXIg5rqQ56CB6K+75Y+W5a+56LGhXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIHJlYWRJZGVudCh3YWxrZXIpIHtcbiAgICB2YXIgbWF0Y2ggPSB3YWxrZXIubWF0Y2goL1xccyooW1xcJDAtOWEtel9dKykvaWcpO1xuICAgIHJldHVybiBtYXRjaFsxXTtcbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVhZElkZW50O1xuXG5cbi8qKlxuICogQGZpbGUg6K+75Y+W5LiJ5YWD6KGo6L6+5byPXG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG4vLyB2YXIgRXhwclR5cGUgPSByZXF1aXJlKCcuL2V4cHItdHlwZScpO1xuLy8gdmFyIHJlYWRMb2dpY2FsT1JFeHByID0gcmVxdWlyZSgnLi9yZWFkLWxvZ2ljYWwtb3ItZXhwcicpO1xuXG4vKipcbiAqIOivu+WPluS4ieWFg+ihqOi+vuW8j1xuICpcbiAqIEBwYXJhbSB7V2Fsa2VyfSB3YWxrZXIg5rqQ56CB6K+75Y+W5a+56LGhXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIHJlYWRUZXJ0aWFyeUV4cHIod2Fsa2VyKSB7XG4gICAgdmFyIGNvbmRpdGlvbmFsID0gcmVhZExvZ2ljYWxPUkV4cHIod2Fsa2VyKTtcbiAgICB3YWxrZXIuZ29VbnRpbCgpO1xuXG4gICAgaWYgKHdhbGtlci5jdXJyZW50Q29kZSgpID09PSA2MykgeyAvLyA/XG4gICAgICAgIHdhbGtlci5nbygxKTtcbiAgICAgICAgdmFyIHllc0V4cHIgPSByZWFkVGVydGlhcnlFeHByKHdhbGtlcik7XG4gICAgICAgIHdhbGtlci5nb1VudGlsKCk7XG5cbiAgICAgICAgaWYgKHdhbGtlci5jdXJyZW50Q29kZSgpID09PSA1OCkgeyAvLyA6XG4gICAgICAgICAgICB3YWxrZXIuZ28oMSk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHR5cGU6IEV4cHJUeXBlLlRFUlRJQVJZLFxuICAgICAgICAgICAgICAgIHNlZ3M6IFtcbiAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9uYWwsXG4gICAgICAgICAgICAgICAgICAgIHllc0V4cHIsXG4gICAgICAgICAgICAgICAgICAgIHJlYWRUZXJ0aWFyeUV4cHIod2Fsa2VyKVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY29uZGl0aW9uYWw7XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlYWRUZXJ0aWFyeUV4cHI7XG5cblxuLyoqXG4gKiBAZmlsZSDor7vlj5borr/pl67ooajovr7lvI9cbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cbi8vIHZhciBFeHByVHlwZSA9IHJlcXVpcmUoJy4vZXhwci10eXBlJyk7XG4vLyB2YXIgY3JlYXRlQWNjZXNzb3IgPSByZXF1aXJlKCcuL2NyZWF0ZS1hY2Nlc3NvcicpO1xuLy8gdmFyIHJlYWRJZGVudCA9IHJlcXVpcmUoJy4vcmVhZC1pZGVudCcpO1xuLy8gdmFyIHJlYWRUZXJ0aWFyeUV4cHIgPSByZXF1aXJlKCcuL3JlYWQtdGVydGlhcnktZXhwcicpO1xuXG4vKipcbiAqIOivu+WPluiuv+mXruihqOi+vuW8j1xuICpcbiAqIEBwYXJhbSB7V2Fsa2VyfSB3YWxrZXIg5rqQ56CB6K+75Y+W5a+56LGhXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIHJlYWRBY2Nlc3Nvcih3YWxrZXIpIHtcbiAgICB2YXIgZmlyc3RTZWcgPSByZWFkSWRlbnQod2Fsa2VyKTtcbiAgICBzd2l0Y2ggKGZpcnN0U2VnKSB7XG4gICAgICAgIGNhc2UgJ3RydWUnOlxuICAgICAgICBjYXNlICdmYWxzZSc6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHR5cGU6IEV4cHJUeXBlLkJPT0wsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZpcnN0U2VnID09PSAndHJ1ZSdcbiAgICAgICAgICAgIH07XG4gICAgfVxuXG4gICAgdmFyIHJlc3VsdCA9IGNyZWF0ZUFjY2Vzc29yKFtcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogRXhwclR5cGUuU1RSSU5HLFxuICAgICAgICAgICAgdmFsdWU6IGZpcnN0U2VnXG4gICAgICAgIH1cbiAgICBdKTtcblxuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnN0YW50LWNvbmRpdGlvbiAqL1xuICAgIGFjY2Vzc29yTG9vcDogd2hpbGUgKDEpIHtcbiAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLWNvbnN0YW50LWNvbmRpdGlvbiAqL1xuXG4gICAgICAgIHN3aXRjaCAod2Fsa2VyLmN1cnJlbnRDb2RlKCkpIHtcbiAgICAgICAgICAgIGNhc2UgNDY6IC8vIC5cbiAgICAgICAgICAgICAgICB3YWxrZXIuZ28oMSk7XG5cbiAgICAgICAgICAgICAgICAvLyBpZGVudCBhcyBzdHJpbmdcbiAgICAgICAgICAgICAgICByZXN1bHQucGF0aHMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IEV4cHJUeXBlLlNUUklORyxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHJlYWRJZGVudCh3YWxrZXIpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgOTE6IC8vIFtcbiAgICAgICAgICAgICAgICB3YWxrZXIuZ28oMSk7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnBhdGhzLnB1c2gocmVhZFRlcnRpYXJ5RXhwcih3YWxrZXIpKTtcbiAgICAgICAgICAgICAgICB3YWxrZXIuZ29VbnRpbCg5Myk7IC8vIF1cbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhayBhY2Nlc3Nvckxvb3A7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZWFkQWNjZXNzb3I7XG5cblxuLyoqXG4gKiBAZmlsZSDor7vlj5bmi6zlj7fooajovr7lvI9cbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cbi8vIHZhciByZWFkVGVydGlhcnlFeHByID0gcmVxdWlyZSgnLi9yZWFkLXRlcnRpYXJ5LWV4cHInKTtcblxuLyoqXG4gKiDor7vlj5bmi6zlj7fooajovr7lvI9cbiAqXG4gKiBAcGFyYW0ge1dhbGtlcn0gd2Fsa2VyIOa6kOeggeivu+WPluWvueixoVxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiByZWFkUGFyZW50aGVzaXplZEV4cHIod2Fsa2VyKSB7XG4gICAgd2Fsa2VyLmdvKDEpO1xuICAgIHZhciBleHByID0gcmVhZFRlcnRpYXJ5RXhwcih3YWxrZXIpO1xuICAgIHdhbGtlci5nb1VudGlsKDQxKTsgLy8gKVxuXG4gICAgcmV0dXJuIGV4cHI7XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlYWRQYXJlbnRoZXNpemVkRXhwcjtcblxuXG4vKipcbiAqIEBmaWxlIOivu+WPluS4gOWFg+ihqOi+vuW8j1xuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuLy8gdmFyIEV4cHJUeXBlID0gcmVxdWlyZSgnLi9leHByLXR5cGUnKTtcbi8vIHZhciByZWFkU3RyaW5nID0gcmVxdWlyZSgnLi9yZWFkLXN0cmluZycpO1xuLy8gdmFyIHJlYWROdW1iZXIgPSByZXF1aXJlKCcuL3JlYWQtbnVtYmVyJyk7XG4vLyB2YXIgcmVhZEFjY2Vzc29yID0gcmVxdWlyZSgnLi9yZWFkLWFjY2Vzc29yJyk7XG4vLyB2YXIgcmVhZFBhcmVudGhlc2l6ZWRFeHByID0gcmVxdWlyZSgnLi9yZWFkLXBhcmVudGhlc2l6ZWQtZXhwcicpO1xuXG5cbi8qKlxuICog6K+75Y+W5LiA5YWD6KGo6L6+5byPXG4gKlxuICogQHBhcmFtIHtXYWxrZXJ9IHdhbGtlciDmupDnoIHor7vlj5blr7nosaFcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gcmVhZFVuYXJ5RXhwcih3YWxrZXIpIHtcbiAgICB3YWxrZXIuZ29VbnRpbCgpO1xuXG4gICAgc3dpdGNoICh3YWxrZXIuY3VycmVudENvZGUoKSkge1xuICAgICAgICBjYXNlIDMzOiAvLyAhXG4gICAgICAgICAgICB3YWxrZXIuZ28oMSk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHR5cGU6IEV4cHJUeXBlLlVOQVJZLFxuICAgICAgICAgICAgICAgIGV4cHI6IHJlYWRVbmFyeUV4cHIod2Fsa2VyKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSAzNDogLy8gXCJcbiAgICAgICAgY2FzZSAzOTogLy8gJ1xuICAgICAgICAgICAgcmV0dXJuIHJlYWRTdHJpbmcod2Fsa2VyKTtcbiAgICAgICAgY2FzZSA0NTogLy8gbnVtYmVyXG4gICAgICAgIGNhc2UgNDg6XG4gICAgICAgIGNhc2UgNDk6XG4gICAgICAgIGNhc2UgNTA6XG4gICAgICAgIGNhc2UgNTE6XG4gICAgICAgIGNhc2UgNTI6XG4gICAgICAgIGNhc2UgNTM6XG4gICAgICAgIGNhc2UgNTQ6XG4gICAgICAgIGNhc2UgNTU6XG4gICAgICAgIGNhc2UgNTY6XG4gICAgICAgIGNhc2UgNTc6XG4gICAgICAgICAgICByZXR1cm4gcmVhZE51bWJlcih3YWxrZXIpO1xuICAgICAgICBjYXNlIDQwOiAvLyAoXG4gICAgICAgICAgICByZXR1cm4gcmVhZFBhcmVudGhlc2l6ZWRFeHByKHdhbGtlcik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlYWRBY2Nlc3Nvcih3YWxrZXIpO1xufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZWFkVW5hcnlFeHByO1xuXG5cbi8qKlxuICogQGZpbGUg6K+75Y+W5LmY5rOV6KGo6L6+5byPXG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG4vLyB2YXIgRXhwclR5cGUgPSByZXF1aXJlKCcuL2V4cHItdHlwZScpO1xuLy8gdmFyIHJlYWRVbmFyeUV4cHIgPSByZXF1aXJlKCcuL3JlYWQtdW5hcnktZXhwcicpO1xuXG4vKipcbiAqIOivu+WPluS5mOazleihqOi+vuW8j1xuICpcbiAqIEBwYXJhbSB7V2Fsa2VyfSB3YWxrZXIg5rqQ56CB6K+75Y+W5a+56LGhXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIHJlYWRNdWx0aXBsaWNhdGl2ZUV4cHIod2Fsa2VyKSB7XG4gICAgdmFyIGV4cHIgPSByZWFkVW5hcnlFeHByKHdhbGtlcik7XG4gICAgd2Fsa2VyLmdvVW50aWwoKTtcblxuICAgIHZhciBjb2RlID0gd2Fsa2VyLmN1cnJlbnRDb2RlKCk7XG4gICAgc3dpdGNoIChjb2RlKSB7XG4gICAgICAgIGNhc2UgMzc6IC8vICVcbiAgICAgICAgY2FzZSA0MjogLy8gKlxuICAgICAgICBjYXNlIDQ3OiAvLyAvXG4gICAgICAgICAgICB3YWxrZXIuZ28oMSk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHR5cGU6IEV4cHJUeXBlLkJJTkFSWSxcbiAgICAgICAgICAgICAgICBvcGVyYXRvcjogY29kZSxcbiAgICAgICAgICAgICAgICBzZWdzOiBbZXhwciwgcmVhZE11bHRpcGxpY2F0aXZlRXhwcih3YWxrZXIpXVxuICAgICAgICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gZXhwcjtcbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVhZE11bHRpcGxpY2F0aXZlRXhwcjtcblxuXG4vKipcbiAqIEBmaWxlIOivu+WPluWKoOazleihqOi+vuW8j1xuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuLy8gdmFyIEV4cHJUeXBlID0gcmVxdWlyZSgnLi9leHByLXR5cGUnKTtcbi8vIHZhciByZWFkTXVsdGlwbGljYXRpdmVFeHByID0gcmVxdWlyZSgnLi9yZWFkLW11bHRpcGxpY2F0aXZlLWV4cHInKTtcblxuXG4vKipcbiAqIOivu+WPluWKoOazleihqOi+vuW8j1xuICpcbiAqIEBwYXJhbSB7V2Fsa2VyfSB3YWxrZXIg5rqQ56CB6K+75Y+W5a+56LGhXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIHJlYWRBZGRpdGl2ZUV4cHIod2Fsa2VyKSB7XG4gICAgdmFyIGV4cHIgPSByZWFkTXVsdGlwbGljYXRpdmVFeHByKHdhbGtlcik7XG4gICAgd2Fsa2VyLmdvVW50aWwoKTtcblxuICAgIHZhciBjb2RlID0gd2Fsa2VyLmN1cnJlbnRDb2RlKCk7XG4gICAgc3dpdGNoIChjb2RlKSB7XG4gICAgICAgIGNhc2UgNDM6IC8vICtcbiAgICAgICAgY2FzZSA0NTogLy8gLVxuICAgICAgICAgICAgd2Fsa2VyLmdvKDEpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0eXBlOiBFeHByVHlwZS5CSU5BUlksXG4gICAgICAgICAgICAgICAgb3BlcmF0b3I6IGNvZGUsXG4gICAgICAgICAgICAgICAgc2VnczogW2V4cHIsIHJlYWRBZGRpdGl2ZUV4cHIod2Fsa2VyKV1cbiAgICAgICAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIGV4cHI7XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlYWRBZGRpdGl2ZUV4cHI7XG5cblxuLyoqXG4gKiBAZmlsZSDor7vlj5blhbPns7vliKTmlq3ooajovr7lvI9cbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cbi8vIHZhciBFeHByVHlwZSA9IHJlcXVpcmUoJy4vZXhwci10eXBlJyk7XG4vLyB2YXIgcmVhZEFkZGl0aXZlRXhwciA9IHJlcXVpcmUoJy4vcmVhZC1hZGRpdGl2ZS1leHByJyk7XG5cbi8qKlxuICog6K+75Y+W5YWz57O75Yik5pat6KGo6L6+5byPXG4gKlxuICogQHBhcmFtIHtXYWxrZXJ9IHdhbGtlciDmupDnoIHor7vlj5blr7nosaFcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gcmVhZFJlbGF0aW9uYWxFeHByKHdhbGtlcikge1xuICAgIHZhciBleHByID0gcmVhZEFkZGl0aXZlRXhwcih3YWxrZXIpO1xuICAgIHdhbGtlci5nb1VudGlsKCk7XG5cbiAgICB2YXIgY29kZSA9IHdhbGtlci5jdXJyZW50Q29kZSgpO1xuICAgIHN3aXRjaCAoY29kZSkge1xuICAgICAgICBjYXNlIDYwOiAvLyA8XG4gICAgICAgIGNhc2UgNjI6IC8vID5cbiAgICAgICAgICAgIGlmICh3YWxrZXIubmV4dENvZGUoKSA9PT0gNjEpIHtcbiAgICAgICAgICAgICAgICBjb2RlICs9IDYxO1xuICAgICAgICAgICAgICAgIHdhbGtlci5nbygxKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0eXBlOiBFeHByVHlwZS5CSU5BUlksXG4gICAgICAgICAgICAgICAgb3BlcmF0b3I6IGNvZGUsXG4gICAgICAgICAgICAgICAgc2VnczogW2V4cHIsIHJlYWRSZWxhdGlvbmFsRXhwcih3YWxrZXIpXVxuICAgICAgICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gZXhwcjtcbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVhZFJlbGF0aW9uYWxFeHByO1xuXG5cbi8qKlxuICogQGZpbGUg6K+75Y+W55u4562J5q+U5a+56KGo6L6+5byPXG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG4vLyB2YXIgRXhwclR5cGUgPSByZXF1aXJlKCcuL2V4cHItdHlwZScpO1xuLy8gdmFyIHJlYWRSZWxhdGlvbmFsRXhwciA9IHJlcXVpcmUoJy4vcmVhZC1yZWxhdGlvbmFsLWV4cHInKTtcblxuLyoqXG4gKiDor7vlj5bnm7jnrYnmr5Tlr7nooajovr7lvI9cbiAqXG4gKiBAcGFyYW0ge1dhbGtlcn0gd2Fsa2VyIOa6kOeggeivu+WPluWvueixoVxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiByZWFkRXF1YWxpdHlFeHByKHdhbGtlcikge1xuICAgIHZhciBleHByID0gcmVhZFJlbGF0aW9uYWxFeHByKHdhbGtlcik7XG4gICAgd2Fsa2VyLmdvVW50aWwoKTtcblxuICAgIHZhciBjb2RlID0gd2Fsa2VyLmN1cnJlbnRDb2RlKCk7XG4gICAgc3dpdGNoIChjb2RlKSB7XG4gICAgICAgIGNhc2UgNjE6IC8vID1cbiAgICAgICAgY2FzZSAzMzogLy8gIVxuICAgICAgICAgICAgaWYgKHdhbGtlci5uZXh0Q29kZSgpID09PSA2MSkge1xuICAgICAgICAgICAgICAgIGNvZGUgKz0gNjE7XG4gICAgICAgICAgICAgICAgaWYgKHdhbGtlci5uZXh0Q29kZSgpID09PSA2MSkge1xuICAgICAgICAgICAgICAgICAgICBjb2RlICs9IDYxO1xuICAgICAgICAgICAgICAgICAgICB3YWxrZXIuZ28oMSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogRXhwclR5cGUuQklOQVJZLFxuICAgICAgICAgICAgICAgICAgICBvcGVyYXRvcjogY29kZSxcbiAgICAgICAgICAgICAgICAgICAgc2VnczogW2V4cHIsIHJlYWRFcXVhbGl0eUV4cHIod2Fsa2VyKV1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB3YWxrZXIuZ28oLTEpO1xuICAgIH1cblxuICAgIHJldHVybiBleHByO1xufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZWFkRXF1YWxpdHlFeHByO1xuXG5cbi8qKlxuICogQGZpbGUg6K+75Y+W6YC76L6R5LiO6KGo6L6+5byPXG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG4vLyB2YXIgRXhwclR5cGUgPSByZXF1aXJlKCcuL2V4cHItdHlwZScpO1xuLy8gdmFyIHJlYWRFcXVhbGl0eUV4cHIgPSByZXF1aXJlKCcuL3JlYWQtZXF1YWxpdHktZXhwcicpO1xuXG4vKipcbiAqIOivu+WPlumAu+i+keS4juihqOi+vuW8j1xuICpcbiAqIEBwYXJhbSB7V2Fsa2VyfSB3YWxrZXIg5rqQ56CB6K+75Y+W5a+56LGhXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIHJlYWRMb2dpY2FsQU5ERXhwcih3YWxrZXIpIHtcbiAgICB2YXIgZXhwciA9IHJlYWRFcXVhbGl0eUV4cHIod2Fsa2VyKTtcbiAgICB3YWxrZXIuZ29VbnRpbCgpO1xuXG4gICAgaWYgKHdhbGtlci5jdXJyZW50Q29kZSgpID09PSAzOCkgeyAvLyAmXG4gICAgICAgIGlmICh3YWxrZXIubmV4dENvZGUoKSA9PT0gMzgpIHtcbiAgICAgICAgICAgIHdhbGtlci5nbygxKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdHlwZTogRXhwclR5cGUuQklOQVJZLFxuICAgICAgICAgICAgICAgIG9wZXJhdG9yOiA3NixcbiAgICAgICAgICAgICAgICBzZWdzOiBbZXhwciwgcmVhZExvZ2ljYWxBTkRFeHByKHdhbGtlcildXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgd2Fsa2VyLmdvKC0xKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZXhwcjtcbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVhZExvZ2ljYWxBTkRFeHByO1xuXG5cbi8qKlxuICogQGZpbGUg6K+75Y+W6YC76L6R5oiW6KGo6L6+5byPXG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG4vLyB2YXIgRXhwclR5cGUgPSByZXF1aXJlKCcuL2V4cHItdHlwZScpO1xuLy8gdmFyIHJlYWRMb2dpY2FsQU5ERXhwciA9IHJlcXVpcmUoJy4vcmVhZC1sb2dpY2FsLWFuZC1leHByJyk7XG5cbi8qKlxuICog6K+75Y+W6YC76L6R5oiW6KGo6L6+5byPXG4gKlxuICogQHBhcmFtIHtXYWxrZXJ9IHdhbGtlciDmupDnoIHor7vlj5blr7nosaFcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gcmVhZExvZ2ljYWxPUkV4cHIod2Fsa2VyKSB7XG4gICAgdmFyIGV4cHIgPSByZWFkTG9naWNhbEFOREV4cHIod2Fsa2VyKTtcbiAgICB3YWxrZXIuZ29VbnRpbCgpO1xuXG4gICAgaWYgKHdhbGtlci5jdXJyZW50Q29kZSgpID09PSAxMjQpIHsgLy8gfFxuICAgICAgICBpZiAod2Fsa2VyLm5leHRDb2RlKCkgPT09IDEyNCkge1xuICAgICAgICAgICAgd2Fsa2VyLmdvKDEpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0eXBlOiBFeHByVHlwZS5CSU5BUlksXG4gICAgICAgICAgICAgICAgb3BlcmF0b3I6IDI0OCxcbiAgICAgICAgICAgICAgICBzZWdzOiBbZXhwciwgcmVhZExvZ2ljYWxPUkV4cHIod2Fsa2VyKV1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICB3YWxrZXIuZ28oLTEpO1xuICAgIH1cblxuICAgIHJldHVybiBleHByO1xufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZWFkTG9naWNhbE9SRXhwcjtcblxuXG4vKipcbiAqIEBmaWxlIOino+aekOihqOi+vuW8j1xuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuLy8gdmFyIFdhbGtlciA9IHJlcXVpcmUoJy4vd2Fsa2VyJyk7XG4vLyB2YXIgcmVhZFRlcnRpYXJ5RXhwciA9IHJlcXVpcmUoJy4vcmVhZC10ZXJ0aWFyeS1leHByJyk7XG5cbi8qKlxuICog6Kej5p6Q6KGo6L6+5byPXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHNvdXJjZSDmupDnoIFcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gcGFyc2VFeHByKHNvdXJjZSkge1xuICAgIGlmICh0eXBlb2Ygc291cmNlID09PSAnb2JqZWN0JyAmJiBzb3VyY2UudHlwZSkge1xuICAgICAgICByZXR1cm4gc291cmNlO1xuICAgIH1cblxuICAgIHZhciBleHByID0gcmVhZFRlcnRpYXJ5RXhwcihuZXcgV2Fsa2VyKHNvdXJjZSkpO1xuICAgIGV4cHIucmF3ID0gc291cmNlO1xuICAgIHJldHVybiBleHByO1xufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBwYXJzZUV4cHI7XG5cblxuLyoqXG4gKiBAZmlsZSDor7vlj5bosIPnlKhcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cbi8vIHZhciBFeHByVHlwZSA9IHJlcXVpcmUoJy4vZXhwci10eXBlJyk7XG4vLyB2YXIgcmVhZEFjY2Vzc29yID0gcmVxdWlyZSgnLi9yZWFkLWFjY2Vzc29yJyk7XG4vLyB2YXIgcmVhZFRlcnRpYXJ5RXhwciA9IHJlcXVpcmUoJy4vcmVhZC10ZXJ0aWFyeS1leHByJyk7XG5cbi8qKlxuICog6K+75Y+W6LCD55SoXG4gKlxuICogQHBhcmFtIHtXYWxrZXJ9IHdhbGtlciDmupDnoIHor7vlj5blr7nosaFcbiAqIEBwYXJhbSB7QXJyYXk9fSBkZWZhdWx0QXJncyDpu5jorqTlj4LmlbBcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gcmVhZENhbGwod2Fsa2VyLCBkZWZhdWx0QXJncykge1xuICAgIHdhbGtlci5nb1VudGlsKCk7XG4gICAgdmFyIGlkZW50ID0gcmVhZEFjY2Vzc29yKHdhbGtlcik7XG4gICAgdmFyIGFyZ3MgPSBbXTtcblxuICAgIGlmICh3YWxrZXIuZ29VbnRpbCg0MCkpIHsgLy8gKFxuICAgICAgICB3aGlsZSAoIXdhbGtlci5nb1VudGlsKDQxKSkgeyAvLyApXG4gICAgICAgICAgICBhcmdzLnB1c2gocmVhZFRlcnRpYXJ5RXhwcih3YWxrZXIpKTtcbiAgICAgICAgICAgIHdhbGtlci5nb1VudGlsKDQ0KTsgLy8gLFxuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGRlZmF1bHRBcmdzKSB7XG4gICAgICAgIGFyZ3MgPSBkZWZhdWx0QXJncztcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBFeHByVHlwZS5DQUxMLFxuICAgICAgICBuYW1lOiBpZGVudCxcbiAgICAgICAgYXJnczogYXJnc1xuICAgIH07XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlYWRDYWxsO1xuXG5cbi8qKlxuICogQGZpbGUg6Kej5p6Q6LCD55SoXG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG5cbi8vIHZhciBXYWxrZXIgPSByZXF1aXJlKCcuL3dhbGtlcicpO1xuLy8gdmFyIHJlYWRDYWxsID0gcmVxdWlyZSgnLi9yZWFkLWNhbGwnKTtcblxuLyoqXG4gKiDop6PmnpDosIPnlKhcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc291cmNlIOa6kOeggVxuICogQHBhcmFtIHtBcnJheT19IGRlZmF1bHRBcmdzIOm7mOiupOWPguaVsFxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiBwYXJzZUNhbGwoc291cmNlLCBkZWZhdWx0QXJncykge1xuICAgIHZhciBleHByID0gcmVhZENhbGwobmV3IFdhbGtlcihzb3VyY2UpLCBkZWZhdWx0QXJncyk7XG4gICAgZXhwci5yYXcgPSBzb3VyY2U7XG4gICAgcmV0dXJuIGV4cHI7XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHBhcnNlQ2FsbDtcblxuXG4vKipcbiAqIEBmaWxlIOino+aekOaPkuWAvOabv+aNolxuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuLy8gdmFyIFdhbGtlciA9IHJlcXVpcmUoJy4vd2Fsa2VyJyk7XG4vLyB2YXIgcmVhZFRlcnRpYXJ5RXhwciA9IHJlcXVpcmUoJy4vcmVhZC10ZXJ0aWFyeS1leHByJyk7XG4vLyB2YXIgRXhwclR5cGUgPSByZXF1aXJlKCcuL2V4cHItdHlwZScpO1xuLy8gdmFyIHJlYWRDYWxsID0gcmVxdWlyZSgnLi9yZWFkLWNhbGwnKTtcblxuLyoqXG4gKiDop6PmnpDmj5LlgLzmm7/mjaJcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc291cmNlIOa6kOeggVxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiBwYXJzZUludGVycChzb3VyY2UpIHtcbiAgICB2YXIgd2Fsa2VyID0gbmV3IFdhbGtlcihzb3VyY2UpO1xuXG4gICAgdmFyIGludGVycCA9IHtcbiAgICAgICAgdHlwZTogRXhwclR5cGUuSU5URVJQLFxuICAgICAgICBleHByOiByZWFkVGVydGlhcnlFeHByKHdhbGtlciksXG4gICAgICAgIGZpbHRlcnM6IFtdLFxuICAgICAgICByYXc6IHNvdXJjZVxuICAgIH07XG5cbiAgICB3aGlsZSAod2Fsa2VyLmdvVW50aWwoMTI0KSkgeyAvLyB8XG4gICAgICAgIHZhciBjYWxsRXhwciA9IHJlYWRDYWxsKHdhbGtlcik7XG4gICAgICAgIHN3aXRjaCAoY2FsbEV4cHIubmFtZS5wYXRoc1swXS52YWx1ZSkge1xuICAgICAgICAgICAgY2FzZSAnaHRtbCc6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdyYXcnOlxuICAgICAgICAgICAgICAgIGludGVycC5vcmlnaW5hbCA9IDE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGludGVycC5maWx0ZXJzLnB1c2goY2FsbEV4cHIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGludGVycDtcbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcGFyc2VJbnRlcnA7XG5cblxuLyoqXG4gKiBAZmlsZSDop6PmnpDmlofmnKxcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cbi8vIHZhciBXYWxrZXIgPSByZXF1aXJlKCcuL3dhbGtlcicpO1xuLy8gdmFyIEV4cHJUeXBlID0gcmVxdWlyZSgnLi9leHByLXR5cGUnKTtcbi8vIHZhciBwYXJzZUludGVycCA9IHJlcXVpcmUoJy4vcGFyc2UtaW50ZXJwJyk7XG5cbi8qKlxuICog5a+55a2X56ym5Liy6L+b6KGM5Y+v55So5LqObmV3IFJlZ0V4cOeahOWtl+mdouWMllxuICpcbiAqIEBpbm5lclxuICogQHBhcmFtIHtzdHJpbmd9IHNvdXJjZSDpnIDopoHlrZfpnaLljJbnmoTlrZfnrKbkuLJcbiAqIEByZXR1cm4ge3N0cmluZ30g5a2X56ym5Liy5a2X6Z2i5YyW57uT5p6cXG4gKi9cbmZ1bmN0aW9uIHJlZ2V4cExpdGVyYWwoc291cmNlKSB7XG4gICAgcmV0dXJuIHNvdXJjZS5yZXBsYWNlKC9bXFxeXFxbXFxdXFwkXFwoXFwpXFx7XFx9XFw/XFwqXFwuXFwrXFxcXF0vZywgZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgcmV0dXJuICdcXFxcJyArIGM7XG4gICAgfSk7XG59XG5cbi8qKlxuICog6Kej5p6Q5paH5pysXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHNvdXJjZSDmupDnoIFcbiAqIEBwYXJhbSB7QXJyYXk/fSBkZWxpbWl0ZXJzIOWIhumalOespuOAgum7mOiupOS4uiBbJ3t7JywgJ319J11cbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gcGFyc2VUZXh0KHNvdXJjZSwgZGVsaW1pdGVycykge1xuICAgIGRlbGltaXRlcnMgPSBkZWxpbWl0ZXJzIHx8IFsne3snLCAnfX0nXTtcbiAgICB2YXIgZXhwclN0YXJ0UmVnID0gbmV3IFJlZ0V4cChcbiAgICAgICAgcmVnZXhwTGl0ZXJhbChkZWxpbWl0ZXJzWzBdKSArICdcXFxccyooW1xcXFxzXFxcXFNdKz8pXFxcXHMqJyArIHJlZ2V4cExpdGVyYWwoZGVsaW1pdGVyc1sxXSksXG4gICAgICAgICdpZydcbiAgICApO1xuXG4gICAgdmFyIGV4cHJNYXRjaDtcblxuICAgIHZhciB3YWxrZXIgPSBuZXcgV2Fsa2VyKHNvdXJjZSk7XG4gICAgdmFyIGJlZm9yZUluZGV4ID0gMDtcblxuICAgIHZhciBleHByID0ge1xuICAgICAgICB0eXBlOiBFeHByVHlwZS5URVhULFxuICAgICAgICBzZWdzOiBbXVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBwdXNoU3RyaW5nVG9TZWcodGV4dCkge1xuICAgICAgICB0ZXh0ICYmIGV4cHIuc2Vncy5wdXNoKHtcbiAgICAgICAgICAgIHR5cGU6IEV4cHJUeXBlLlNUUklORyxcbiAgICAgICAgICAgIHZhbHVlOiB0ZXh0XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHdoaWxlICgoZXhwck1hdGNoID0gd2Fsa2VyLm1hdGNoKGV4cHJTdGFydFJlZykpICE9IG51bGwpIHtcbiAgICAgICAgcHVzaFN0cmluZ1RvU2VnKHdhbGtlci5jdXQoXG4gICAgICAgICAgICBiZWZvcmVJbmRleCxcbiAgICAgICAgICAgIHdhbGtlci5pbmRleCAtIGV4cHJNYXRjaFswXS5sZW5ndGhcbiAgICAgICAgKSk7XG5cbiAgICAgICAgdmFyIGludGVycCA9IHBhcnNlSW50ZXJwKGV4cHJNYXRjaFsxXSk7XG4gICAgICAgIGV4cHIub3JpZ2luYWwgPSBleHByLm9yaWdpbmFsIHx8IGludGVycC5vcmlnaW5hbDtcblxuICAgICAgICBleHByLnNlZ3MucHVzaChpbnRlcnApO1xuICAgICAgICBiZWZvcmVJbmRleCA9IHdhbGtlci5pbmRleDtcbiAgICB9XG5cbiAgICBwdXNoU3RyaW5nVG9TZWcod2Fsa2VyLmN1dChiZWZvcmVJbmRleCkpO1xuXG5cblxuICAgIGlmIChleHByLnNlZ3MubGVuZ3RoID09PSAxICYmIGV4cHIuc2Vnc1swXS50eXBlID09PSBFeHByVHlwZS5TVFJJTkcpIHtcbiAgICAgICAgZXhwci52YWx1ZSA9IGV4cHIuc2Vnc1swXS52YWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZXhwcjtcbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcGFyc2VUZXh0O1xuXG5cbi8qKlxuICogQGZpbGUg6Kej5p6Q5oyH5LukXG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG5cbi8vIHZhciBXYWxrZXIgPSByZXF1aXJlKCcuL3dhbGtlcicpO1xuLy8gdmFyIHBhcnNlRXhwciA9IHJlcXVpcmUoJy4vcGFyc2UtZXhwcicpO1xuLy8gdmFyIHBhcnNlQ2FsbCA9IHJlcXVpcmUoJy4vcGFyc2UtY2FsbCcpO1xuLy8gdmFyIHBhcnNlVGV4dCA9IHJlcXVpcmUoJy4vcGFyc2UtdGV4dCcpO1xuLy8gdmFyIHJlYWRBY2Nlc3NvciA9IHJlcXVpcmUoJy4vcmVhZC1hY2Nlc3NvcicpO1xuXG4vKipcbiAqIOaMh+S7pOino+aekOWZqFxuICpcbiAqIEBpbm5lclxuICogQHR5cGUge09iamVjdH1cbiAqL1xudmFyIGRpcmVjdGl2ZVBhcnNlcnMgPSB7XG4gICAgJ2Zvcic6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgd2Fsa2VyID0gbmV3IFdhbGtlcih2YWx1ZSk7XG4gICAgICAgIHZhciBtYXRjaCA9IHdhbGtlci5tYXRjaCgvXlxccyooW1xcJDAtOWEtel9dKykoXFxzKixcXHMqKFtcXCQwLTlhLXpfXSspKT9cXHMraW5cXHMrL2lnKTtcblxuICAgICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaXRlbTogcGFyc2VFeHByKG1hdGNoWzFdKSxcbiAgICAgICAgICAgICAgICBpbmRleDogcGFyc2VFeHByKG1hdGNoWzNdIHx8ICckaW5kZXgnKSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogcmVhZEFjY2Vzc29yKHdhbGtlcilcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICAvLyAjW2JlZ2luXSBlcnJvclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tTQU4gRkFUQUxdIGZvciBzeW50YXggZXJyb3I6ICcgKyB2YWx1ZSk7XG4gICAgICAgIC8vICNbZW5kXVxuICAgIH0sXG5cbiAgICAncmVmJzogZnVuY3Rpb24gKHZhbHVlLCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcGFyc2VUZXh0KHZhbHVlLCBvcHRpb25zLmRlbGltaXRlcnMpXG4gICAgICAgIH07XG4gICAgfSxcblxuICAgICdpZic6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHBhcnNlRXhwcih2YWx1ZS5yZXBsYWNlKC8oXlxce1xce3xcXH1cXH0kKS9nLCAnJykpXG4gICAgICAgIH07XG4gICAgfSxcblxuICAgICdlbGlmJzogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcGFyc2VFeHByKHZhbHVlLnJlcGxhY2UoLyheXFx7XFx7fFxcfVxcfSQpL2csICcnKSlcbiAgICAgICAgfTtcbiAgICB9LFxuXG4gICAgJ2Vsc2UnOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiB7fVxuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICAnaHRtbCc6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHBhcnNlRXhwcih2YWx1ZS5yZXBsYWNlKC8oXlxce1xce3xcXH1cXH0kKS9nLCAnJykpXG4gICAgICAgIH07XG4gICAgfSxcblxuICAgICd0cmFuc2l0aW9uJzogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcGFyc2VDYWxsKHZhbHVlKVxuICAgICAgICB9O1xuICAgIH1cbn07XG5cbi8qKlxuICog6Kej5p6Q5oyH5LukXG4gKlxuICogQHBhcmFtIHtBTm9kZX0gYU5vZGUg5oq96LGh6IqC54K5XG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSDmjIfku6TlkI3np7BcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSDmjIfku6TlgLxcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIOino+aekOWPguaVsFxuICogQHBhcmFtIHtBcnJheT99IG9wdGlvbnMuZGVsaW1pdGVycyDmj5LlgLzliIbpmpTnrKbliJfooahcbiAqL1xuZnVuY3Rpb24gcGFyc2VEaXJlY3RpdmUoYU5vZGUsIG5hbWUsIHZhbHVlLCBvcHRpb25zKSB7XG4gICAgdmFyIHBhcnNlciA9IGRpcmVjdGl2ZVBhcnNlcnNbbmFtZV07XG5cbiAgICBpZiAocGFyc2VyKSB7XG4gICAgICAgIChhTm9kZS5kaXJlY3RpdmVzW25hbWVdID0gcGFyc2VyKHZhbHVlLCBvcHRpb25zKSkucmF3ID0gdmFsdWU7XG4gICAgfVxufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBwYXJzZURpcmVjdGl2ZTtcblxuXG4vKipcbiAqIEBmaWxlIOWvueWxnuaAp+S/oeaBr+i/m+ihjOWkhOeQhlxuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuLy8gdmFyIEV4cHJUeXBlID0gcmVxdWlyZSgnLi4vcGFyc2VyL2V4cHItdHlwZScpO1xuXG4vKipcbiAqIOWvueWxnuaAp+S/oeaBr+i/m+ihjOWkhOeQhlxuICog5a+557uE5Lu255qEIGJpbmRzIOaIluiAheeJueauiueahOWxnuaAp++8iOavlOWmgiBpbnB1dCDnmoQgY2hlY2tlZO+8iemcgOimgeWkhOeQhlxuICpcbiAqIOaJgeW5s+WMlu+8mlxuICog5b2TIHRleHQg6Kej5p6Q5Y+q5pyJ5LiA6aG55pe277yM6KaB5LmI5bCx5pivIHN0cmluZ++8jOimgeS5iOWwseaYryBpbnRlcnBcbiAqIGludGVycCDmnInlj6/og73mmK/nu5HlrprliLDnu4Tku7blsZ7mgKfnmoTooajovr7lvI/vvIzkuI3luIzmnJvooqsgZXZhbCB0ZXh0IOaIkCBzdHJpbmdcbiAqIOaJgOS7pei/memHjOWBmuS4quWkhOeQhu+8jOWPquacieS4gOmhueaXtuebtOaOpeaKveWHuuadpVxuICpcbiAqIGJvb2zlsZ7mgKfvvJpcbiAqIOW9k+e7keWumumhueayoeacieWAvOaXtu+8jOm7mOiupOS4unRydWVcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcCDlsZ7mgKflr7nosaFcbiAqL1xuZnVuY3Rpb24gcG9zdFByb3AocHJvcCkge1xuICAgIHZhciBleHByID0gcHJvcC5leHByO1xuXG4gICAgaWYgKGV4cHIudHlwZSA9PT0gRXhwclR5cGUuVEVYVCkge1xuICAgICAgICBzd2l0Y2ggKGV4cHIuc2Vncy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBwcm9wLmV4cHIgPSB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IEV4cHJUeXBlLkJPT0wsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiB0cnVlXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIGV4cHIgPSBwcm9wLmV4cHIgPSBleHByLnNlZ3NbMF07XG4gICAgICAgICAgICAgICAgaWYgKGV4cHIudHlwZSA9PT0gRXhwclR5cGUuSU5URVJQICYmIGV4cHIuZmlsdGVycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvcC5leHByID0gZXhwci5leHByO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcG9zdFByb3A7XG5cblxuLyoqXG4gKiBAZmlsZSDop6PmnpDmir3osaHoioLngrnlsZ7mgKdcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cbi8vIHZhciBlYWNoID0gcmVxdWlyZSgnLi4vdXRpbC9lYWNoJyk7XG4vLyB2YXIga2ViYWIyY2FtZWwgPSByZXF1aXJlKCcuLi91dGlsL2tlYmFiMmNhbWVsJyk7XG4vLyB2YXIgRXhwclR5cGUgPSByZXF1aXJlKCcuL2V4cHItdHlwZScpO1xuLy8gdmFyIGNyZWF0ZUFjY2Vzc29yID0gcmVxdWlyZSgnLi9jcmVhdGUtYWNjZXNzb3InKTtcbi8vIHZhciBwYXJzZUV4cHIgPSByZXF1aXJlKCcuL3BhcnNlLWV4cHInKTtcbi8vIHZhciBwYXJzZUNhbGwgPSByZXF1aXJlKCcuL3BhcnNlLWNhbGwnKTtcbi8vIHZhciBwYXJzZVRleHQgPSByZXF1aXJlKCcuL3BhcnNlLXRleHQnKTtcbi8vIHZhciBwYXJzZURpcmVjdGl2ZSA9IHJlcXVpcmUoJy4vcGFyc2UtZGlyZWN0aXZlJyk7XG4vLyB2YXIgcG9zdFByb3AgPSByZXF1aXJlKCcuL3Bvc3QtcHJvcCcpO1xuXG52YXIgREVGQVVMVF9FVkVOVF9BUkdTID0gW1xuICAgIGNyZWF0ZUFjY2Vzc29yKFtcbiAgICAgICAge3R5cGU6IEV4cHJUeXBlLlNUUklORywgdmFsdWU6ICckZXZlbnQnfVxuICAgIF0pXG5dO1xuXG4vKipcbiAqIOino+aekOaKveixoeiKgueCueWxnuaAp1xuICpcbiAqIEBwYXJhbSB7QU5vZGV9IGFOb2RlIOaKveixoeiKgueCuVxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUg5bGe5oCn5ZCN56ewXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUg5bGe5oCn5YC8XG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyDop6PmnpDlj4LmlbBcbiAqIEBwYXJhbSB7QXJyYXk/fSBvcHRpb25zLmRlbGltaXRlcnMg5o+S5YC85YiG6ZqU56ym5YiX6KGoXG4gKi9cbmZ1bmN0aW9uIGludGVncmF0ZUF0dHIoYU5vZGUsIG5hbWUsIHZhbHVlLCBvcHRpb25zKSB7XG4gICAgdmFyIHByZWZpeEluZGV4ID0gbmFtZS5pbmRleE9mKCctJyk7XG4gICAgdmFyIHJlYWxOYW1lO1xuICAgIHZhciBwcmVmaXg7XG5cbiAgICBpZiAocHJlZml4SW5kZXggPiAwKSB7XG4gICAgICAgIHByZWZpeCA9IG5hbWUuc2xpY2UoMCwgcHJlZml4SW5kZXgpO1xuICAgICAgICByZWFsTmFtZSA9IG5hbWUuc2xpY2UocHJlZml4SW5kZXggKyAxKTtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHByZWZpeCkge1xuICAgICAgICBjYXNlICdvbic6XG4gICAgICAgICAgICB2YXIgZXZlbnQgPSB7XG4gICAgICAgICAgICAgICAgbmFtZTogcmVhbE5hbWUsXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IHt9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgYU5vZGUuZXZlbnRzLnB1c2goZXZlbnQpO1xuXG4gICAgICAgICAgICB2YXIgY29sb25JbmRleDtcbiAgICAgICAgICAgIHdoaWxlICgoY29sb25JbmRleCA9IHZhbHVlLmluZGV4T2YoJzonKSkgPiAwKSB7XG4gICAgICAgICAgICAgICAgdmFyIG1vZGlmaWVyID0gdmFsdWUuc2xpY2UoMCwgY29sb25JbmRleCk7XG5cbiAgICAgICAgICAgICAgICAvLyBldmVudEhhbmRsZXIoXCJkZDphYVwiKSDov5nnp43mg4XlhrXkuI3og73nrpdtb2RpZmllcu+8jOmcgOimgei+qOivhlxuICAgICAgICAgICAgICAgIGlmICghL15bYS16XSskL2kudGVzdChtb2RpZmllcikpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZXZlbnQubW9kaWZpZXJbbW9kaWZpZXJdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnNsaWNlKGNvbG9uSW5kZXggKyAxKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZXZlbnQuZXhwciA9IHBhcnNlQ2FsbCh2YWx1ZSwgREVGQVVMVF9FVkVOVF9BUkdTKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ3Nhbic6XG4gICAgICAgIGNhc2UgJ3MnOlxuICAgICAgICAgICAgcGFyc2VEaXJlY3RpdmUoYU5vZGUsIHJlYWxOYW1lLCB2YWx1ZSwgb3B0aW9ucyk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdwcm9wJzpcbiAgICAgICAgICAgIGludGVncmF0ZVByb3AoYU5vZGUsIHJlYWxOYW1lLCB2YWx1ZSwgb3B0aW9ucyk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICd2YXInOlxuICAgICAgICAgICAgaWYgKCFhTm9kZS52YXJzKSB7XG4gICAgICAgICAgICAgICAgYU5vZGUudmFycyA9IFtdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZWFsTmFtZSA9IGtlYmFiMmNhbWVsKHJlYWxOYW1lKTtcbiAgICAgICAgICAgIGFOb2RlLnZhcnMucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogcmVhbE5hbWUsXG4gICAgICAgICAgICAgICAgZXhwcjogcGFyc2VFeHByKHZhbHVlLnJlcGxhY2UoLyheXFx7XFx7fFxcfVxcfSQpL2csICcnKSlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGludGVncmF0ZVByb3AoYU5vZGUsIG5hbWUsIHZhbHVlLCBvcHRpb25zKTtcbiAgICB9XG59XG5cbi8qKlxuICog6Kej5p6Q5oq96LGh6IqC54K557uR5a6a5bGe5oCnXG4gKlxuICogQGlubmVyXG4gKiBAcGFyYW0ge0FOb2RlfSBhTm9kZSDmir3osaHoioLngrlcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIOWxnuaAp+WQjeensFxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIOWxnuaAp+WAvFxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMg6Kej5p6Q5Y+C5pWwXG4gKiBAcGFyYW0ge0FycmF5P30gb3B0aW9ucy5kZWxpbWl0ZXJzIOaPkuWAvOWIhumalOespuWIl+ihqFxuICovXG5mdW5jdGlvbiBpbnRlZ3JhdGVQcm9wKGFOb2RlLCBuYW1lLCB2YWx1ZSwgb3B0aW9ucykge1xuICAgIC8vIHBhcnNlIHR3byB3YXkgYmluZGluZywgZS5nLiB2YWx1ZT1cIns9aWRlbnQ9fVwiXG4gICAgdmFyIHhNYXRjaCA9IHZhbHVlLm1hdGNoKC9eXFx7PVxccyooLio/KVxccyo9XFx9JC8pO1xuXG4gICAgaWYgKHhNYXRjaCkge1xuICAgICAgICBhTm9kZS5wcm9wcy5wdXNoKHtcbiAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICBleHByOiBwYXJzZUV4cHIoeE1hdGNoWzFdKSxcbiAgICAgICAgICAgIHg6IDEsXG4gICAgICAgICAgICByYXc6IHZhbHVlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBwYXJzZSBub3JtYWwgcHJvcFxuICAgIHZhciBwcm9wID0ge1xuICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICBleHByOiBwYXJzZVRleHQodmFsdWUsIG9wdGlvbnMuZGVsaW1pdGVycyksXG4gICAgICAgIHJhdzogdmFsdWVcbiAgICB9O1xuXG4gICAgLy8g6L+Z6YeM5LiN6IO95oqK5Y+q5pyJ5LiA5Liq5o+S5YC855qE5bGe5oCn5oq95Y+WXG4gICAgLy8g5Zug5Li65o+S5YC86YeM55qE5YC85Y+v6IO95pivaHRtbOeJh+aute+8jOWuueaYk+iiq+azqOWFpVxuICAgIC8vIOe7hOS7tueahOaVsOaNrue7keWumuWcqOe7hOS7tmluaXTml7blgZrmir3lj5ZcbiAgICBzd2l0Y2ggKG5hbWUpIHtcbiAgICAgICAgY2FzZSAnY2xhc3MnOlxuICAgICAgICBjYXNlICdzdHlsZSc6XG4gICAgICAgICAgICBlYWNoKHByb3AuZXhwci5zZWdzLCBmdW5jdGlvbiAoc2VnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNlZy50eXBlID09PSBFeHByVHlwZS5JTlRFUlApIHtcbiAgICAgICAgICAgICAgICAgICAgc2VnLmZpbHRlcnMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBFeHByVHlwZS5DQUxMLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogY3JlYXRlQWNjZXNzb3IoW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogRXhwclR5cGUuU1RSSU5HLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ18nICsgcHJvcC5uYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmdzOiBbXVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ2NoZWNrZWQnOlxuICAgICAgICAgICAgaWYgKGFOb2RlLnRhZ05hbWUgPT09ICdpbnB1dCcpIHtcbiAgICAgICAgICAgICAgICBwb3N0UHJvcChwcm9wKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGFOb2RlLnByb3BzLnB1c2gocHJvcCk7XG59XG5cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gaW50ZWdyYXRlQXR0cjtcblxuXG4vKipcbiAqIEBmaWxlIOino+aekOaooeadv1xuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuXG4vLyB2YXIgY3JlYXRlQU5vZGUgPSByZXF1aXJlKCcuL2NyZWF0ZS1hLW5vZGUnKTtcbi8vIHZhciBXYWxrZXIgPSByZXF1aXJlKCcuL3dhbGtlcicpO1xuLy8gdmFyIGludGVncmF0ZUF0dHIgPSByZXF1aXJlKCcuL2ludGVncmF0ZS1hdHRyJyk7XG4vLyB2YXIgcGFyc2VUZXh0ID0gcmVxdWlyZSgnLi9wYXJzZS10ZXh0Jyk7XG4vLyB2YXIgYXV0b0Nsb3NlVGFncyA9IHJlcXVpcmUoJy4uL2Jyb3dzZXIvYXV0by1jbG9zZS10YWdzJyk7XG5cbi8vICNbYmVnaW5dIGVycm9yXG5mdW5jdGlvbiBnZXRYUGF0aChzdGFjaywgY3VycmVudFRhZ05hbWUpIHtcbiAgICB2YXIgcGF0aCA9IFsnUk9PVCddO1xuICAgIGZvciAodmFyIGkgPSAxLCBsZW4gPSBzdGFjay5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBwYXRoLnB1c2goc3RhY2tbaV0udGFnTmFtZSk7XG4gICAgfVxuICAgIGlmIChjdXJyZW50VGFnTmFtZSkge1xuICAgICAgICBwYXRoLnB1c2goY3VycmVudFRhZ05hbWUpO1xuICAgIH1cbiAgICByZXR1cm4gcGF0aC5qb2luKCc+Jyk7XG59XG4vLyAjW2VuZF1cblxuLyogZXNsaW50LWRpc2FibGUgZmVjcy1tYXgtc3RhdGVtZW50cyAqL1xuXG4vKipcbiAqIOino+aekCB0ZW1wbGF0ZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzb3VyY2UgdGVtcGxhdGXmupDnoIFcbiAqIEBwYXJhbSB7T2JqZWN0P30gb3B0aW9ucyDop6PmnpDlj4LmlbBcbiAqIEBwYXJhbSB7c3RyaW5nP30gb3B0aW9ucy50cmltV2hpdGVzcGFjZSDnqbrnmb3mlofmnKznmoTlpITnkIbnrZbnlaXjgIJub25lfGJsYW5rfGFsbFxuICogQHBhcmFtIHtBcnJheT99IG9wdGlvbnMuZGVsaW1pdGVycyDmj5LlgLzliIbpmpTnrKbliJfooahcbiAqIEByZXR1cm4ge0FOb2RlfVxuICovXG5mdW5jdGlvbiBwYXJzZVRlbXBsYXRlKHNvdXJjZSwgb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIG9wdGlvbnMudHJpbVdoaXRlc3BhY2UgPSBvcHRpb25zLnRyaW1XaGl0ZXNwYWNlIHx8ICdub25lJztcblxuICAgIHZhciByb290Tm9kZSA9IGNyZWF0ZUFOb2RlKCk7XG5cbiAgICBpZiAodHlwZW9mIHNvdXJjZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIHJvb3ROb2RlO1xuICAgIH1cblxuICAgIHNvdXJjZSA9IHNvdXJjZS5yZXBsYWNlKC88IS0tKFtcXHNcXFNdKj8pLS0+L21nLCAnJykucmVwbGFjZSgvKF5cXHMrfFxccyskKS9nLCAnJyk7XG4gICAgdmFyIHdhbGtlciA9IG5ldyBXYWxrZXIoc291cmNlKTtcblxuICAgIHZhciB0YWdSZWcgPSAvPChcXC8pPyhbYS16MC05LV0rKVxccyovaWc7XG4gICAgdmFyIGF0dHJSZWcgPSAvKFstOjAtOWEtelxcKFxcKVxcW1xcXV0rKShcXHMqPVxccyooWydcIl0pKFteXFwzXSo/KVxcMyk/XFxzKi9pZztcblxuICAgIHZhciB0YWdNYXRjaDtcbiAgICB2YXIgY3VycmVudE5vZGUgPSByb290Tm9kZTtcbiAgICB2YXIgc3RhY2sgPSBbcm9vdE5vZGVdO1xuICAgIHZhciBzdGFja0luZGV4ID0gMDtcbiAgICB2YXIgYmVmb3JlTGFzdEluZGV4ID0gMDtcblxuICAgIHdoaWxlICgodGFnTWF0Y2ggPSB3YWxrZXIubWF0Y2godGFnUmVnKSkgIT0gbnVsbCkge1xuICAgICAgICB2YXIgdGFnRW5kID0gdGFnTWF0Y2hbMV07XG4gICAgICAgIHZhciB0YWdOYW1lID0gdGFnTWF0Y2hbMl0udG9Mb3dlckNhc2UoKTtcblxuICAgICAgICBwdXNoVGV4dE5vZGUoc291cmNlLnNsaWNlKFxuICAgICAgICAgICAgYmVmb3JlTGFzdEluZGV4LFxuICAgICAgICAgICAgd2Fsa2VyLmluZGV4IC0gdGFnTWF0Y2hbMF0ubGVuZ3RoXG4gICAgICAgICkpO1xuXG4gICAgICAgIC8vIDYyOiA+XG4gICAgICAgIC8vIDQ3OiAvXG4gICAgICAgIC8vIOWkhOeQhiA8L3h4eHggPlxuICAgICAgICBpZiAodGFnRW5kICYmIHdhbGtlci5jdXJyZW50Q29kZSgpID09PSA2Mikge1xuICAgICAgICAgICAgLy8g5ruh6Laz5YWz6Zet5qCH562+55qE5p2h5Lu25pe277yM5YWz6Zet5qCH562+XG4gICAgICAgICAgICAvLyDlkJHkuIrmn6Xmib7liLDlr7nlupTmoIfnrb7vvIzmib7kuI3liLDml7blv73nlaXlhbPpl61cbiAgICAgICAgICAgIHZhciBjbG9zZUluZGV4ID0gc3RhY2tJbmRleDtcblxuICAgICAgICAgICAgLy8gI1tiZWdpbl0gZXJyb3JcbiAgICAgICAgICAgIC8vIOWmguaenOato+WcqOmXreWQiOS4gOS4quiHqumXreWQiOeahOagh+etvu+8jOS+i+WmgiA8L2lucHV0Pu+8jOaKpemUmVxuICAgICAgICAgICAgaWYgKGF1dG9DbG9zZVRhZ3NbdGFnTmFtZV0pIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJydcbiAgICAgICAgICAgICAgICAgICAgKyAnW1NBTiBFUlJPUl0gJyArIGdldFhQYXRoKHN0YWNrLCB0YWdOYW1lKSArICcgaXMgYSBgYXV0byBjbG9zZWRgIHRhZywgJ1xuICAgICAgICAgICAgICAgICAgICArICdzbyBpdCBjYW5ub3QgYmUgY2xvc2VkIHdpdGggPC8nICsgdGFnTmFtZSArICc+J1xuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIOWmguaenOWFs+mXreeahCB0YWcg5ZKM5b2T5YmN5omT5byA55qE5LiN5LiA6Ie077yM5oql6ZSZXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgc3RhY2tbY2xvc2VJbmRleF0udGFnTmFtZSAhPT0gdGFnTmFtZVxuICAgICAgICAgICAgICAgIC8vIOi/memHjOimgeaKiiB0YWJsZSDoh6rliqjmt7vliqAgdGJvZHkg55qE5oOF5Ya157uZ5Y675o6JXG4gICAgICAgICAgICAgICAgJiYgISh0YWdOYW1lID09PSAndGFibGUnICYmIHN0YWNrW2Nsb3NlSW5kZXhdLnRhZ05hbWUgPT09ICd0Ym9keScpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tTQU4gRVJST1JdICcgKyBnZXRYUGF0aChzdGFjaykgKyAnIGlzIGNsb3NlZCB3aXRoICcgKyB0YWdOYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vICNbZW5kXVxuXG4gICAgICAgICAgICB3aGlsZSAoY2xvc2VJbmRleCA+IDAgJiYgc3RhY2tbY2xvc2VJbmRleF0udGFnTmFtZSAhPT0gdGFnTmFtZSkge1xuICAgICAgICAgICAgICAgIGNsb3NlSW5kZXgtLTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGNsb3NlSW5kZXggPiAwKSB7XG4gICAgICAgICAgICAgICAgc3RhY2subGVuZ3RoID0gY2xvc2VJbmRleDtcbiAgICAgICAgICAgICAgICBzdGFja0luZGV4ID0gY2xvc2VJbmRleCAtIDE7XG4gICAgICAgICAgICAgICAgY3VycmVudE5vZGUgPSBzdGFja1tzdGFja0luZGV4XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdhbGtlci5nbygxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vICNbYmVnaW5dIGVycm9yXG4gICAgICAgIC8vIOWkhOeQhiA8L3h4eCDpnZ7mraPluLjpl63lkIjmoIfnrb5cbiAgICAgICAgZWxzZSBpZiAodGFnRW5kKSB7XG5cbiAgICAgICAgICAgIC8vIOWmguaenOmXreWQiOagh+etvuaXtu+8jOWMuemFjeWQjueahOS4i+S4gOS4quWtl+espuaYryA877yM5Y2z5LiL5LiA5Liq5qCH562+55qE5byA5aeL77yM6YKj5LmI5b2T5YmN6Zet5ZCI5qCH562+5pyq6Zet5ZCIXG4gICAgICAgICAgICBpZiAod2Fsa2VyLmN1cnJlbnRDb2RlKCkgPT09IDYwKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCcnXG4gICAgICAgICAgICAgICAgICAgICsgJ1tTQU4gRVJST1JdICcgKyBnZXRYUGF0aChzdGFjaylcbiAgICAgICAgICAgICAgICAgICAgKyAnXFwncyBjbG9zZSB0YWcgbm90IGNsb3NlZCdcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyDpl63lkIjmoIfnrb7mnInlsZ7mgKdcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignJ1xuICAgICAgICAgICAgICAgICsgJ1tTQU4gRVJST1JdICcgKyBnZXRYUGF0aChzdGFjaylcbiAgICAgICAgICAgICAgICArICdcXCdzIGNsb3NlIHRhZyBoYXMgYXR0cmlidXRlcydcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgfVxuICAgICAgICAvLyAjW2VuZF1cblxuICAgICAgICBlbHNlIGlmICghdGFnRW5kKSB7XG4gICAgICAgICAgICB2YXIgYUVsZW1lbnQgPSBjcmVhdGVBTm9kZSh7XG4gICAgICAgICAgICAgICAgdGFnTmFtZTogdGFnTmFtZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YXIgdGFnQ2xvc2UgPSBhdXRvQ2xvc2VUYWdzW3RhZ05hbWVdO1xuXG4gICAgICAgICAgICAvLyDop6PmnpAgYXR0cmlidXRlc1xuXG4gICAgICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zdGFudC1jb25kaXRpb24gKi9cbiAgICAgICAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgICAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLWNvbnN0YW50LWNvbmRpdGlvbiAqL1xuXG4gICAgICAgICAgICAgICAgdmFyIG5leHRDaGFyQ29kZSA9IHdhbGtlci5jdXJyZW50Q29kZSgpO1xuXG4gICAgICAgICAgICAgICAgLy8g5qCH562+57uT5p2f5pe26Lez5Ye6IGF0dHJpYnV0ZXMg6K+75Y+WXG4gICAgICAgICAgICAgICAgLy8g5qCH562+5Y+v6IO955u05o6l57uT5p2f5oiW6Zet5ZCI57uT5p2fXG4gICAgICAgICAgICAgICAgaWYgKG5leHRDaGFyQ29kZSA9PT0gNjIpIHtcbiAgICAgICAgICAgICAgICAgICAgd2Fsa2VyLmdvKDEpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8g6YGH5YiwIC8+IOaMiemXreWQiOWkhOeQhlxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKG5leHRDaGFyQ29kZSA9PT0gNDdcbiAgICAgICAgICAgICAgICAgICAgJiYgd2Fsa2VyLmNoYXJDb2RlKHdhbGtlci5pbmRleCArIDEpID09PSA2MlxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICB3YWxrZXIuZ28oMik7XG4gICAgICAgICAgICAgICAgICAgIHRhZ0Nsb3NlID0gMTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gI1tiZWdpbl0gZXJyb3JcbiAgICAgICAgICAgICAgICAvLyDlnKjlpITnkIbkuIDkuKogb3BlbiDmoIfnrb7ml7bvvIzlpoLmnpzpgYfliLDkuoYgPO+8jCDljbPkuIvkuIDkuKrmoIfnrb7nmoTlvIDlp4vvvIzliJnlvZPliY3moIfnrb7mnKrog73mraPluLjpl63lkIjvvIzmiqXplJlcbiAgICAgICAgICAgICAgICBpZiAobmV4dENoYXJDb2RlID09PSA2MCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tTQU4gRVJST1JdICcgKyBnZXRYUGF0aChzdGFjaywgdGFnTmFtZSkgKyAnIGlzIG5vdCBjbG9zZWQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gI1tlbmRdXG5cbiAgICAgICAgICAgICAgICAvLyDor7vlj5YgYXR0cmlidXRlXG4gICAgICAgICAgICAgICAgdmFyIGF0dHJNYXRjaCA9IHdhbGtlci5tYXRjaChhdHRyUmVnKTtcbiAgICAgICAgICAgICAgICBpZiAoYXR0ck1hdGNoKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gI1tiZWdpbl0gZXJyb3JcbiAgICAgICAgICAgICAgICAgICAgLy8g5aaC5p6c5bGe5oCn5pyJID3vvIzkvYbmsqHlj5bliLAgdmFsdWXvvIzmiqXplJlcbiAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgd2Fsa2VyLmNoYXJDb2RlKGF0dHJNYXRjaC5pbmRleCArIGF0dHJNYXRjaFsxXS5sZW5ndGgpID09PSA2MVxuICAgICAgICAgICAgICAgICAgICAgICAgJiYgIWF0dHJNYXRjaFsyXVxuICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgJ1tTQU4gRVJST1JdICcgKyBnZXRYUGF0aChzdGFjaywgdGFnTmFtZSkgKyAnIGF0dHJpYnV0ZSBgJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgYXR0ck1hdGNoWzFdICsgJ2AgaXMgbm90IHdyYXBwZWQgd2l0aCBcIlwiJ1xuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyAjW2VuZF1cblxuICAgICAgICAgICAgICAgICAgICBpbnRlZ3JhdGVBdHRyKFxuICAgICAgICAgICAgICAgICAgICAgICAgYUVsZW1lbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyTWF0Y2hbMV0sXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyTWF0Y2hbMl0gPyBhdHRyTWF0Y2hbNF0gOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gbWF0Y2ggaWYgZGlyZWN0aXZlIGZvciBlbHNlL2VsaWYgZGlyZWN0aXZlXG4gICAgICAgICAgICB2YXIgZWxzZURpcmVjdGl2ZSA9IGFFbGVtZW50LmRpcmVjdGl2ZXNbJ2Vsc2UnXSB8fCBhRWxlbWVudC5kaXJlY3RpdmVzLmVsaWY7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZG90LW5vdGF0aW9uXG4gICAgICAgICAgICBpZiAoZWxzZURpcmVjdGl2ZSkge1xuICAgICAgICAgICAgICAgIHZhciBwYXJlbnRDaGlsZHJlbkxlbiA9IGN1cnJlbnROb2RlLmNoaWxkcmVuLmxlbmd0aDtcblxuICAgICAgICAgICAgICAgIHdoaWxlIChwYXJlbnRDaGlsZHJlbkxlbi0tKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwYXJlbnRDaGlsZCA9IGN1cnJlbnROb2RlLmNoaWxkcmVuW3BhcmVudENoaWxkcmVuTGVuXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmVudENoaWxkLnRleHRFeHByKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50Tm9kZS5jaGlsZHJlbi5zcGxpY2UocGFyZW50Q2hpbGRyZW5MZW4sIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyAjW2JlZ2luXSBlcnJvclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXBhcmVudENoaWxkLmRpcmVjdGl2ZXNbJ2lmJ10pIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBkb3Qtbm90YXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignW1NBTiBGQVRFTF0gZWxzZSBub3QgbWF0Y2ggaWYuJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gI1tlbmRdXG5cbiAgICAgICAgICAgICAgICAgICAgcGFyZW50Q2hpbGQuZWxzZXMgPSBwYXJlbnRDaGlsZC5lbHNlcyB8fCBbXTtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50Q2hpbGQuZWxzZXMucHVzaChhRWxlbWVudCk7XG5cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGFFbGVtZW50LnRhZ05hbWUgPT09ICd0cicgJiYgY3VycmVudE5vZGUudGFnTmFtZSA9PT0gJ3RhYmxlJykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdGJvZHlOb2RlID0gY3JlYXRlQU5vZGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFnTmFtZTogJ3Rib2R5J1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudE5vZGUuY2hpbGRyZW4ucHVzaCh0Ym9keU5vZGUpO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50Tm9kZSA9IHRib2R5Tm9kZTtcbiAgICAgICAgICAgICAgICAgICAgc3RhY2tbKytzdGFja0luZGV4XSA9IHRib2R5Tm9kZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjdXJyZW50Tm9kZS5jaGlsZHJlbi5wdXNoKGFFbGVtZW50KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCF0YWdDbG9zZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnROb2RlID0gYUVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgc3RhY2tbKytzdGFja0luZGV4XSA9IGFFbGVtZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgYmVmb3JlTGFzdEluZGV4ID0gd2Fsa2VyLmluZGV4O1xuICAgIH1cblxuICAgIHB1c2hUZXh0Tm9kZSh3YWxrZXIuY3V0KGJlZm9yZUxhc3RJbmRleCkpO1xuXG4gICAgcmV0dXJuIHJvb3ROb2RlO1xuXG4gICAgLyoqXG4gICAgICog5Zyo6K+75Y+W5qCI5Lit5re75Yqg5paH5pys6IqC54K5XG4gICAgICpcbiAgICAgKiBAaW5uZXJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCDmlofmnKzlhoXlrrlcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBwdXNoVGV4dE5vZGUodGV4dCkge1xuICAgICAgICBzd2l0Y2ggKG9wdGlvbnMudHJpbVdoaXRlc3BhY2UpIHtcbiAgICAgICAgICAgIGNhc2UgJ2JsYW5rJzpcbiAgICAgICAgICAgICAgICBpZiAoL15cXHMrJC8udGVzdCh0ZXh0KSkge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0ID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ2FsbCc6XG4gICAgICAgICAgICAgICAgdGV4dCA9IHRleHQucmVwbGFjZSgvKF5cXHMrfFxccyskKS9nLCAnJyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGV4dCkge1xuICAgICAgICAgICAgY3VycmVudE5vZGUuY2hpbGRyZW4ucHVzaChjcmVhdGVBTm9kZSh7XG4gICAgICAgICAgICAgICAgdGV4dEV4cHI6IHBhcnNlVGV4dCh0ZXh0LCBvcHRpb25zLmRlbGltaXRlcnMpXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qIGVzbGludC1lbmFibGUgZmVjcy1tYXgtc3RhdGVtZW50cyAqL1xuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBwYXJzZVRlbXBsYXRlO1xuXG5cbi8qKlxuICogQGZpbGUg6buY6K6kZmlsdGVyXG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG5cbi8qIGVzbGludC1kaXNhYmxlIGZlY3MtY2FtZWxjYXNlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBndWFyZC1mb3ItaW4gKi9cblxuLyoqXG4gKiDpu5jorqRmaWx0ZXJcbiAqXG4gKiBAY29uc3RcbiAqIEB0eXBlIHtPYmplY3R9XG4gKi9cbnZhciBERUZBVUxUX0ZJTFRFUlMgPSB7XG5cbiAgICAvKipcbiAgICAgKiBVUkznvJbnoIFmaWx0ZXJcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzb3VyY2Ug5rqQ5LiyXG4gICAgICogQHJldHVybiB7c3RyaW5nfSDmm7/mjaLnu5PmnpzkuLJcbiAgICAgKi9cbiAgICB1cmw6IGVuY29kZVVSSUNvbXBvbmVudCxcblxuICAgIF9jbGFzczogZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgICBpZiAoc291cmNlIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgIHJldHVybiBzb3VyY2Uuam9pbignICcpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHNvdXJjZTtcbiAgICB9LFxuXG4gICAgX3N0eWxlOiBmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc291cmNlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9ICcnO1xuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCArPSBrZXkgKyAnOicgKyBzb3VyY2Vba2V5XSArICc7JztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzb3VyY2U7XG4gICAgfSxcblxuICAgIF9zZXA6IGZ1bmN0aW9uIChzb3VyY2UsIHNlcCkge1xuICAgICAgICByZXR1cm4gc291cmNlID8gc2VwICsgc291cmNlIDogc291cmNlO1xuICAgIH1cbn07XG4vKiBlc2xpbnQtZW5hYmxlIGZlY3MtY2FtZWxjYXNlICovXG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IERFRkFVTFRfRklMVEVSUztcblxuXG4vKipcbiAqIEBmaWxlIEhUTUzovazkuYlcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cbi8qKlxuICogSFRNTCBGaWx0ZXLmm7/mjaLnmoTlrZfnrKblrp7kvZPooahcbiAqXG4gKiBAY29uc3RcbiAqIEBpbm5lclxuICogQHR5cGUge09iamVjdH1cbiAqL1xudmFyIEhUTUxfRU5USVRZID0ge1xuICAgIC8qIGpzaGludCBpZ25vcmU6c3RhcnQgKi9cbiAgICAnJic6ICcmYW1wOycsXG4gICAgJzwnOiAnJmx0OycsXG4gICAgJz4nOiAnJmd0OycsXG4gICAgJ1wiJzogJyZxdW90OycsXG4gICAgLyogZXNsaW50LWRpc2FibGUgcXVvdGVzICovXG4gICAgXCInXCI6ICcmIzM5OydcbiAgICAvKiBlc2xpbnQtZW5hYmxlIHF1b3RlcyAqL1xuICAgIC8qIGpzaGludCBpZ25vcmU6ZW5kICovXG59O1xuXG4vKipcbiAqIEhUTUwgRmlsdGVy55qE5pu/5o2i5Ye95pWwXG4gKlxuICogQGlubmVyXG4gKiBAcGFyYW0ge3N0cmluZ30gYyDmm7/mjaLlrZfnrKZcbiAqIEByZXR1cm4ge3N0cmluZ30g5pu/5o2i5ZCO55qESFRNTOWtl+espuWunuS9k1xuICovXG5mdW5jdGlvbiBodG1sRmlsdGVyUmVwbGFjZXIoYykge1xuICAgIHJldHVybiBIVE1MX0VOVElUWVtjXTtcbn1cblxuLyoqXG4gKiBIVE1M6L2s5LmJXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHNvdXJjZSDmupDkuLJcbiAqIEByZXR1cm4ge3N0cmluZ30g5pu/5o2i57uT5p6c5LiyXG4gKi9cbmZ1bmN0aW9uIGVzY2FwZUhUTUwoc291cmNlKSB7XG4gICAgcmV0dXJuIHNvdXJjZSAhPSBudWxsXG4gICAgICAgID8gKCcnICsgc291cmNlKS5yZXBsYWNlKC9bJjw+XCInXS9nLCBodG1sRmlsdGVyUmVwbGFjZXIpXG4gICAgICAgIDogJyc7XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGVzY2FwZUhUTUw7XG5cblxuLyoqXG4gKiBAZmlsZSDooajovr7lvI/orqHnrpdcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cbi8vIHZhciBFeHByVHlwZSA9IHJlcXVpcmUoJy4uL3BhcnNlci9leHByLXR5cGUnKTtcbi8vIHZhciBERUZBVUxUX0ZJTFRFUlMgPSByZXF1aXJlKCcuL2RlZmF1bHQtZmlsdGVycycpO1xuLy8gdmFyIGVzY2FwZUhUTUwgPSByZXF1aXJlKCcuL2VzY2FwZS1odG1sJyk7XG4vLyB2YXIgZXZhbEFyZ3MgPSByZXF1aXJlKCcuL2V2YWwtYXJncycpO1xuLy8gdmFyIGRhdGFDYWNoZSA9IHJlcXVpcmUoJy4vZGF0YS1jYWNoZScpO1xuXG4vKipcbiAqIOiuoeeul+ihqOi+vuW8j+eahOWAvFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBleHByIOihqOi+vuW8j+WvueixoVxuICogQHBhcmFtIHtEYXRhfSBkYXRhIOaVsOaNruWuueWZqOWvueixoVxuICogQHBhcmFtIHtDb21wb25lbnQ9fSBvd25lciDmiYDlsZ7nu4Tku7bnjq/looNcbiAqIEBwYXJhbSB7Ym9vbGVhbj99IGVzY2FwZUludGVycEh0bWwg5piv5ZCm5a+55o+S5YC86L+b6KGMaHRtbOi9rOS5iVxuICogQHJldHVybiB7Kn1cbiAqL1xuZnVuY3Rpb24gZXZhbEV4cHIoZXhwciwgZGF0YSwgb3duZXIsIGVzY2FwZUludGVycEh0bWwpIHtcbiAgICBpZiAoZXhwci52YWx1ZSAhPSBudWxsKSB7XG4gICAgICAgIHJldHVybiBleHByLnZhbHVlO1xuICAgIH1cblxuICAgIHZhciB2YWx1ZSA9IGRhdGFDYWNoZS5nZXQoZGF0YSwgZXhwcik7XG5cbiAgICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgICAgICBzd2l0Y2ggKGV4cHIudHlwZSkge1xuICAgICAgICAgICAgY2FzZSBFeHByVHlwZS5VTkFSWTpcbiAgICAgICAgICAgICAgICB2YWx1ZSA9ICFldmFsRXhwcihleHByLmV4cHIsIGRhdGEsIG93bmVyKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBFeHByVHlwZS5CSU5BUlk6XG4gICAgICAgICAgICAgICAgdmFyIGxlZnRWYWx1ZSA9IGV2YWxFeHByKGV4cHIuc2Vnc1swXSwgZGF0YSwgb3duZXIpO1xuICAgICAgICAgICAgICAgIHZhciByaWdodFZhbHVlID0gZXZhbEV4cHIoZXhwci5zZWdzWzFdLCBkYXRhLCBvd25lcik7XG5cbiAgICAgICAgICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBlcWVxZXEgKi9cbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGV4cHIub3BlcmF0b3IpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzNzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gbGVmdFZhbHVlICUgcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQzOlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBsZWZ0VmFsdWUgKyByaWdodFZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDU6XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IGxlZnRWYWx1ZSAtIHJpZ2h0VmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0MjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gbGVmdFZhbHVlICogcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ3OlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBsZWZ0VmFsdWUgLyByaWdodFZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNjA6XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IGxlZnRWYWx1ZSA8IHJpZ2h0VmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA2MjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gbGVmdFZhbHVlID4gcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDc2OlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBsZWZ0VmFsdWUgJiYgcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDk0OlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBsZWZ0VmFsdWUgIT0gcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDEyMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gbGVmdFZhbHVlIDw9IHJpZ2h0VmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxMjI6XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IGxlZnRWYWx1ZSA9PSByaWdodFZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTIzOlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBsZWZ0VmFsdWUgPj0gcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE1NTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gbGVmdFZhbHVlICE9PSByaWdodFZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTgzOlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBsZWZ0VmFsdWUgPT09IHJpZ2h0VmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyNDg6XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IGxlZnRWYWx1ZSB8fCByaWdodFZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8qIGVzbGludC1lbmFibGUgZXFlcWVxICovXG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgRXhwclR5cGUuVEVSVElBUlk6XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBldmFsRXhwcihcbiAgICAgICAgICAgICAgICAgICAgZXhwci5zZWdzW2V2YWxFeHByKGV4cHIuc2Vnc1swXSwgZGF0YSwgb3duZXIpID8gMSA6IDJdLFxuICAgICAgICAgICAgICAgICAgICBkYXRhLFxuICAgICAgICAgICAgICAgICAgICBvd25lclxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgRXhwclR5cGUuQUNDRVNTT1I6XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBkYXRhLmdldChleHByKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBFeHByVHlwZS5JTlRFUlA6XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBldmFsRXhwcihleHByLmV4cHIsIGRhdGEsIG93bmVyKTtcblxuICAgICAgICAgICAgICAgIGlmIChvd25lcikge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbCA9IGV4cHIuZmlsdGVycy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmaWx0ZXIgPSBleHByLmZpbHRlcnNbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZmlsdGVyTmFtZSA9IGZpbHRlci5uYW1lLnBhdGhzWzBdLnZhbHVlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob3duZXIuZmlsdGVyc1tmaWx0ZXJOYW1lXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gb3duZXIuZmlsdGVyc1tmaWx0ZXJOYW1lXS5hcHBseShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt2YWx1ZV0uY29uY2F0KGV2YWxBcmdzKGZpbHRlci5hcmdzLCBkYXRhLCBvd25lcikpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKERFRkFVTFRfRklMVEVSU1tmaWx0ZXJOYW1lXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gREVGQVVMVF9GSUxURVJTW2ZpbHRlck5hbWVdKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyLmFyZ3NbMF0gPyBmaWx0ZXIuYXJnc1swXS52YWx1ZSA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gJyc7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXJlZGVjbGFyZSAqL1xuICAgICAgICAgICAgY2FzZSBFeHByVHlwZS5URVhUOlxuICAgICAgICAgICAgICAgIHZhciBidWYgPSAnJztcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbCA9IGV4cHIuc2Vncy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNlZyA9IGV4cHIuc2Vnc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgYnVmICs9IHNlZy52YWx1ZSB8fCBldmFsRXhwcihzZWcsIGRhdGEsIG93bmVyLCBlc2NhcGVJbnRlcnBIdG1sKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGJ1ZjtcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGFDYWNoZS5zZXQoZGF0YSwgZXhwciwgdmFsdWUpO1xuICAgIH1cblxuICAgIGlmIChleHByLnR5cGUgPT09IEV4cHJUeXBlLklOVEVSUCAmJiBlc2NhcGVJbnRlcnBIdG1sICYmICFleHByLm9yaWdpbmFsKSB7XG4gICAgICAgIHZhbHVlID0gZXNjYXBlSFRNTCh2YWx1ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBldmFsRXhwcjtcblxuXG4vKipcbiAqIEBmaWxlIOS4uuWHveaVsOiwg+eUqOiuoeeul+WPguaVsOaVsOe7hOeahOWAvFxuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuXG4vLyB2YXIgZXZhbEV4cHIgPSByZXF1aXJlKCcuLi9ydW50aW1lL2V2YWwtZXhwcicpO1xuXG4vKipcbiAqIOS4uuWHveaVsOiwg+eUqOiuoeeul+WPguaVsOaVsOe7hOeahOWAvFxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGFyZ3Mg5Y+C5pWw6KGo6L6+5byP5YiX6KGoXG4gKiBAcGFyYW0ge0RhdGF9IGRhdGEg5pWw5o2u546v5aKDXG4gKiBAcGFyYW0ge0NvbXBvbmVudH0gb3duZXIg57uE5Lu2546v5aKDXG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqL1xuZnVuY3Rpb24gZXZhbEFyZ3MoYXJncywgZGF0YSwgb3duZXIpIHtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKGV2YWxFeHByKGFyZ3NbaV0sIGRhdGEsIG93bmVyKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZXZhbEFyZ3M7XG5cblxuLyoqXG4gKiBAZmlsZSDmlbDmja7nvJPlrZjnrqHnkIblmahcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cblxuXG52YXIgZGF0YUNhY2hlU291cmNlID0ge307XG52YXIgZGF0YUNhY2hlQ2xlYXJseSA9IDE7XG5cbi8qKlxuICog5pWw5o2u57yT5a2Y566h55CG5ZmoXG4gKlxuICogQGNvbnN0XG4gKiBAdHlwZSB7T2JqZWN0fVxuICovXG52YXIgZGF0YUNhY2hlID0ge1xuICAgIGNsZWFyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghZGF0YUNhY2hlQ2xlYXJseSkge1xuICAgICAgICAgICAgZGF0YUNhY2hlQ2xlYXJseSA9IDE7XG4gICAgICAgICAgICBkYXRhQ2FjaGVTb3VyY2UgPSB7fTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBzZXQ6IGZ1bmN0aW9uIChkYXRhLCBleHByLCB2YWx1ZSkge1xuICAgICAgICBpZiAoZXhwci5yYXcpIHtcbiAgICAgICAgICAgIGRhdGFDYWNoZUNsZWFybHkgPSAwO1xuICAgICAgICAgICAgKGRhdGFDYWNoZVNvdXJjZVtkYXRhLmlkXSA9IGRhdGFDYWNoZVNvdXJjZVtkYXRhLmlkXSB8fCB7fSlbZXhwci5yYXddID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgZ2V0OiBmdW5jdGlvbiAoZGF0YSwgZXhwcikge1xuICAgICAgICBpZiAoZXhwci5yYXcgJiYgZGF0YUNhY2hlU291cmNlW2RhdGEuaWRdKSB7XG4gICAgICAgICAgICByZXR1cm4gZGF0YUNhY2hlU291cmNlW2RhdGEuaWRdW2V4cHIucmF3XTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZGF0YUNhY2hlO1xuXG5cbi8qKlxuICogQGZpbGUg5q+U6L6D5Y+Y5pu06KGo6L6+5byP5LiO55uu5qCH6KGo6L6+5byP5LmL6Ze055qE5YWz57O7XG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG4vLyB2YXIgRXhwclR5cGUgPSByZXF1aXJlKCcuLi9wYXJzZXIvZXhwci10eXBlJyk7XG4vLyB2YXIgZXZhbEV4cHIgPSByZXF1aXJlKCcuL2V2YWwtZXhwcicpO1xuLy8gdmFyIGVhY2ggPSByZXF1aXJlKCcuLi91dGlsL2VhY2gnKTtcblxuLyoqXG4gKiDliKTmlq3lj5jmm7Tooajovr7lvI/kuI7lpJrkuKrooajovr7lvI/kuYvpl7TnmoTlhbPns7vvvIww5Li65a6M5YWo5rKh5YWz57O777yMMeS4uuacieWFs+ezu1xuICpcbiAqIEBpbm5lclxuICogQHBhcmFtIHtPYmplY3R9IGNoYW5nZUV4cHIg55uu5qCH6KGo6L6+5byPXG4gKiBAcGFyYW0ge0FycmF5fSBleHBycyDlpJrkuKrmupDooajovr7lvI9cbiAqIEBwYXJhbSB7RGF0YX0gZGF0YSDooajovr7lvI/miYDlsZ7mlbDmja7njq/looNcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuZnVuY3Rpb24gY2hhbmdlRXhwckNvbXBhcmVFeHBycyhjaGFuZ2VFeHByLCBleHBycywgZGF0YSkge1xuICAgIGZvciAodmFyIGkgPSAwLCBsID0gZXhwcnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGlmIChjaGFuZ2VFeHByQ29tcGFyZShjaGFuZ2VFeHByLCBleHByc1tpXSwgZGF0YSkpIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIDA7XG59XG5cbi8qKlxuICog5q+U6L6D5Y+Y5pu06KGo6L6+5byP5LiO55uu5qCH6KGo6L6+5byP5LmL6Ze055qE5YWz57O777yM55So5LqO6KeG5Zu+5pu05paw5Yik5patXG4gKiDop4blm77mm7TmlrDpnIDopoHmoLnmja7lhbblhbPns7vvvIzlgZrlh7rnm7jlupTnmoTmm7TmlrDooYzkuLpcbiAqXG4gKiAwOiDlrozlhajmsqHlhbPns7tcbiAqIDE6IOWPmOabtOihqOi+vuW8j+aYr+ebruagh+ihqOi+vuW8j+eahOavjemhuSjlpoJh5LiOYS5iKSDmiJYg6KGo56S66ZyA6KaB5a6M5YWo5Y+Y5YyWXG4gKiAyOiDlj5jmm7Tooajovr7lvI/mmK/nm67moIfooajovr7lvI/nm7jnrYlcbiAqID4yOiDlj5jmm7Tooajovr7lvI/mmK/nm67moIfooajovr7lvI/nmoTlrZDpobnvvIzlpoJhLmIuY+S4jmEuYlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBjaGFuZ2VFeHByIOWPmOabtOihqOi+vuW8j1xuICogQHBhcmFtIHtPYmplY3R9IGV4cHIg6KaB5q+U6L6D55qE55uu5qCH6KGo6L6+5byPXG4gKiBAcGFyYW0ge0RhdGF9IGRhdGEg6KGo6L6+5byP5omA5bGe5pWw5o2u546v5aKDXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmZ1bmN0aW9uIGNoYW5nZUV4cHJDb21wYXJlKGNoYW5nZUV4cHIsIGV4cHIsIGRhdGEpIHtcbiAgICBzd2l0Y2ggKGV4cHIudHlwZSkge1xuICAgICAgICBjYXNlIEV4cHJUeXBlLkFDQ0VTU09SOlxuICAgICAgICAgICAgdmFyIHBhdGhzID0gZXhwci5wYXRocztcbiAgICAgICAgICAgIHZhciBsZW4gPSBwYXRocy5sZW5ndGg7XG4gICAgICAgICAgICB2YXIgY2hhbmdlUGF0aHMgPSBjaGFuZ2VFeHByLnBhdGhzO1xuICAgICAgICAgICAgdmFyIGNoYW5nZUxlbiA9IGNoYW5nZVBhdGhzLmxlbmd0aDtcblxuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IDE7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBhdGhFeHByID0gcGF0aHNbaV07XG5cbiAgICAgICAgICAgICAgICBpZiAocGF0aEV4cHIudHlwZSA9PT0gRXhwclR5cGUuQUNDRVNTT1JcbiAgICAgICAgICAgICAgICAgICAgJiYgY2hhbmdlRXhwckNvbXBhcmUoY2hhbmdlRXhwciwgcGF0aEV4cHIsIGRhdGEpXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgJiYgaSA8IGNoYW5nZUxlblxuICAgICAgICAgICAgICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBlcWVxZXEgKi9cbiAgICAgICAgICAgICAgICAgICAgJiYgZXZhbEV4cHIocGF0aEV4cHIsIGRhdGEpICE9IGV2YWxFeHByKGNoYW5nZVBhdGhzW2ldLCBkYXRhKVxuICAgICAgICAgICAgICAgICAgICAvKiBlc2xpbnQtZW5hYmxlIGVxZXFlcSAqL1xuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IE1hdGgubWF4KDEsIGNoYW5nZUxlbiAtIGxlbiArIDIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcblxuICAgICAgICBjYXNlIEV4cHJUeXBlLlVOQVJZOlxuICAgICAgICAgICAgcmV0dXJuIGNoYW5nZUV4cHJDb21wYXJlKGNoYW5nZUV4cHIsIGV4cHIuZXhwciwgZGF0YSkgPyAxIDogMDtcblxuXG4gICAgICAgIGNhc2UgRXhwclR5cGUuVEVYVDpcbiAgICAgICAgY2FzZSBFeHByVHlwZS5CSU5BUlk6XG4gICAgICAgIGNhc2UgRXhwclR5cGUuVEVSVElBUlk6XG4gICAgICAgICAgICByZXR1cm4gY2hhbmdlRXhwckNvbXBhcmVFeHBycyhjaGFuZ2VFeHByLCBleHByLnNlZ3MsIGRhdGEpO1xuXG4gICAgICAgIGNhc2UgRXhwclR5cGUuSU5URVJQOlxuICAgICAgICAgICAgaWYgKCFjaGFuZ2VFeHByQ29tcGFyZShjaGFuZ2VFeHByLCBleHByLmV4cHIsIGRhdGEpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGZpbHRlclJlc3VsdDtcbiAgICAgICAgICAgICAgICBlYWNoKGV4cHIuZmlsdGVycywgZnVuY3Rpb24gKGZpbHRlcikge1xuICAgICAgICAgICAgICAgICAgICBmaWx0ZXJSZXN1bHQgPSBjaGFuZ2VFeHByQ29tcGFyZUV4cHJzKGNoYW5nZUV4cHIsIGZpbHRlci5hcmdzLCBkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICFmaWx0ZXJSZXN1bHQ7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gZmlsdGVyUmVzdWx0ID8gMSA6IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgIH1cblxuICAgIHJldHVybiAwO1xufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBjaGFuZ2VFeHByQ29tcGFyZTtcblxuXG4vKipcbiAqIEBmaWxlIOaVsOaNruWPmOabtOexu+Wei+aemuS4vlxuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuLyoqXG4gKiDmlbDmja7lj5jmm7TnsbvlnovmnprkuL5cbiAqXG4gKiBAY29uc3RcbiAqIEB0eXBlIHtPYmplY3R9XG4gKi9cbnZhciBEYXRhQ2hhbmdlVHlwZSA9IHtcbiAgICBTRVQ6IDEsXG4gICAgU1BMSUNFOiAyXG59O1xuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBEYXRhQ2hhbmdlVHlwZTtcblxuXG4vKipcbiAqIEBmaWxlIOaVsOaNruexu1xuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuLy8gdmFyIEV4cHJUeXBlID0gcmVxdWlyZSgnLi4vcGFyc2VyL2V4cHItdHlwZScpO1xuLy8gdmFyIGV2YWxFeHByID0gcmVxdWlyZSgnLi9ldmFsLWV4cHInKTtcbi8vIHZhciBEYXRhQ2hhbmdlVHlwZSA9IHJlcXVpcmUoJy4vZGF0YS1jaGFuZ2UtdHlwZScpO1xuLy8gdmFyIGNyZWF0ZUFjY2Vzc29yID0gcmVxdWlyZSgnLi4vcGFyc2VyL2NyZWF0ZS1hY2Nlc3NvcicpO1xuLy8gdmFyIHBhcnNlRXhwciA9IHJlcXVpcmUoJy4uL3BhcnNlci9wYXJzZS1leHByJyk7XG4vLyB2YXIgZ3VpZCA9IHJlcXVpcmUoJy4uL3V0aWwvZ3VpZCcpO1xuLy8gdmFyIGRhdGFDYWNoZSA9IHJlcXVpcmUoJy4vZGF0YS1jYWNoZScpO1xuXG4vKipcbiAqIOaVsOaNruexu1xuICpcbiAqIEBjbGFzc1xuICogQHBhcmFtIHtPYmplY3Q/fSBkYXRhIOWIneWni+aVsOaNrlxuICogQHBhcmFtIHtNb2RlbD99IHBhcmVudCDniLbnuqfmlbDmja7lrrnlmahcbiAqL1xuZnVuY3Rpb24gRGF0YShkYXRhLCBwYXJlbnQpIHtcbiAgICB0aGlzLmlkID0gZ3VpZCgpO1xuICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICAgIHRoaXMucmF3ID0gZGF0YSB8fCB7fTtcbiAgICB0aGlzLmxpc3RlbmVycyA9IFtdO1xufVxuXG4vLyAjW2JlZ2luXSBlcnJvclxuLy8g5Lul5LiL5Lik5Liq5Ye95pWw5Y+q5Zyo5byA5Y+R5qih5byP5LiL5Y+v55So77yM5Zyo55Sf5Lqn5qih5byP5LiL5LiN5a2Y5ZyoXG4vKipcbiAqIERhdGFUeXBlcyDmo4DmtYtcbiAqL1xuRGF0YS5wcm90b3R5cGUuY2hlY2tEYXRhVHlwZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMudHlwZUNoZWNrZXIpIHtcbiAgICAgICAgdGhpcy50eXBlQ2hlY2tlcih0aGlzLnJhdyk7XG4gICAgfVxufTtcblxuLyoqXG4gKiDorr7nva4gdHlwZSBjaGVja2VyXG4gKlxuICogQHBhcmFtICB7RnVuY3Rpb259IHR5cGVDaGVja2VyIOexu+Wei+agoemqjOWZqFxuICovXG5EYXRhLnByb3RvdHlwZS5zZXRUeXBlQ2hlY2tlciA9IGZ1bmN0aW9uICh0eXBlQ2hlY2tlcikge1xuICAgIHRoaXMudHlwZUNoZWNrZXIgPSB0eXBlQ2hlY2tlcjtcbn07XG5cbi8vICNbZW5kXVxuXG4vKipcbiAqIOa3u+WKoOaVsOaNruWPmOabtOeahOS6i+S7tuebkeWQrOWZqFxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGxpc3RlbmVyIOebkeWQrOWHveaVsFxuICovXG5EYXRhLnByb3RvdHlwZS5saXN0ZW4gPSBmdW5jdGlvbiAobGlzdGVuZXIpIHtcbiAgICBpZiAodHlwZW9mIGxpc3RlbmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRoaXMubGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuICAgIH1cbn07XG5cbi8qKlxuICog56e76Zmk5pWw5o2u5Y+Y5pu055qE5LqL5Lu255uR5ZCs5ZmoXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXIg55uR5ZCs5Ye95pWwXG4gKi9cbkRhdGEucHJvdG90eXBlLnVubGlzdGVuID0gZnVuY3Rpb24gKGxpc3RlbmVyKSB7XG4gICAgdmFyIGxlbiA9IHRoaXMubGlzdGVuZXJzLmxlbmd0aDtcbiAgICB3aGlsZSAobGVuLS0pIHtcbiAgICAgICAgaWYgKCFsaXN0ZW5lciB8fCB0aGlzLmxpc3RlbmVyc1tsZW5dID09PSBsaXN0ZW5lcikge1xuICAgICAgICAgICAgdGhpcy5saXN0ZW5lcnMuc3BsaWNlKGxlbiwgMSk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG4vKipcbiAqIOinpuWPkeaVsOaNruWPmOabtFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBjaGFuZ2Ug5Y+Y5pu05L+h5oGv5a+56LGhXG4gKi9cbkRhdGEucHJvdG90eXBlLmZpcmUgPSBmdW5jdGlvbiAoY2hhbmdlKSB7XG4gICAgaWYgKGNoYW5nZS5vcHRpb24uc2lsZW50IHx8IGNoYW5nZS5vcHRpb24uc2lsZW5jZSB8fCBjaGFuZ2Uub3B0aW9uLnF1aWV0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGlzdGVuZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRoaXMubGlzdGVuZXJzW2ldLmNhbGwodGhpcywgY2hhbmdlKTtcbiAgICB9XG59O1xuXG4vKipcbiAqIOiOt+WPluaVsOaNrumhuVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfE9iamVjdD99IGV4cHIg5pWw5o2u6aG56Lev5b6EXG4gKiBAcGFyYW0ge0RhdGE/fSBjYWxsZWUg5b2T5YmN5pWw5o2u6I635Y+W55qE6LCD55So546v5aKDXG4gKiBAcmV0dXJuIHsqfVxuICovXG5EYXRhLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAoZXhwciwgY2FsbGVlKSB7XG4gICAgdmFyIHZhbHVlID0gdGhpcy5yYXc7XG4gICAgaWYgKCFleHByKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICBleHByID0gcGFyc2VFeHByKGV4cHIpO1xuXG4gICAgdmFyIHBhdGhzID0gZXhwci5wYXRocztcbiAgICBjYWxsZWUgPSBjYWxsZWUgfHwgdGhpcztcblxuICAgIHZhbHVlID0gdmFsdWVbcGF0aHNbMF0udmFsdWVdO1xuXG4gICAgaWYgKHZhbHVlID09IG51bGwgJiYgdGhpcy5wYXJlbnQpIHtcbiAgICAgICAgdmFsdWUgPSB0aGlzLnBhcmVudC5nZXQoZXhwciwgY2FsbGVlKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxLCBsID0gcGF0aHMubGVuZ3RoOyB2YWx1ZSAhPSBudWxsICYmIGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWVbcGF0aHNbaV0udmFsdWUgfHwgZXZhbEV4cHIocGF0aHNbaV0sIGNhbGxlZSldO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xufTtcblxuXG4vKipcbiAqIOaVsOaNruWvueixoeWPmOabtOaTjeS9nFxuICpcbiAqIEBpbm5lclxuICogQHBhcmFtIHtPYmplY3R8QXJyYXl9IHNvdXJjZSDopoHlj5jmm7TnmoTmupDmlbDmja5cbiAqIEBwYXJhbSB7QXJyYXl9IGV4cHJQYXRocyDlsZ7mgKfot6/lvoRcbiAqIEBwYXJhbSB7Kn0gdmFsdWUg5Y+Y5pu05bGe5oCn5YC8XG4gKiBAcGFyYW0ge0RhdGF9IGRhdGEg5a+55bqU55qERGF0YeWvueixoVxuICogQHJldHVybiB7Kn0g5Y+Y5pu05ZCO55qE5paw5pWw5o2uXG4gKi9cbmZ1bmN0aW9uIGltbXV0YWJsZVNldChzb3VyY2UsIGV4cHJQYXRocywgdmFsdWUsIGRhdGEpIHtcbiAgICBpZiAoZXhwclBhdGhzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgdmFyIHByb3AgPSBldmFsRXhwcihleHByUGF0aHNbMF0sIGRhdGEpO1xuICAgIHZhciByZXN1bHQ7XG5cbiAgICBpZiAoc291cmNlIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gK3Byb3A7XG5cbiAgICAgICAgcmVzdWx0ID0gc291cmNlLnNsaWNlKDApO1xuICAgICAgICByZXN1bHRbaXNOYU4oaW5kZXgpID8gcHJvcCA6IGluZGV4XSA9IGltbXV0YWJsZVNldChzb3VyY2VbaW5kZXhdLCBleHByUGF0aHMuc2xpY2UoMSksIHZhbHVlLCBkYXRhKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2Ygc291cmNlID09PSAnb2JqZWN0Jykge1xuICAgICAgICByZXN1bHQgPSB7fTtcblxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgICAgICBpZiAoa2V5ICE9PSBwcm9wKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJlc3VsdFtwcm9wXSA9IGltbXV0YWJsZVNldChzb3VyY2VbcHJvcF0gfHwge30sIGV4cHJQYXRocy5zbGljZSgxKSwgdmFsdWUsIGRhdGEpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNvdXJjZTtcbn1cblxuLyoqXG4gKiDorr7nva7mlbDmja7poblcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xPYmplY3R9IGV4cHIg5pWw5o2u6aG56Lev5b6EXG4gKiBAcGFyYW0geyp9IHZhbHVlIOaVsOaNruWAvFxuICogQHBhcmFtIHtPYmplY3Q9fSBvcHRpb24g6K6+572u5Y+C5pWwXG4gKiBAcGFyYW0ge2Jvb2xlYW59IG9wdGlvbi5zaWxlbnQg6Z2Z6buY6K6+572u77yM5LiN6Kem5Y+R5Y+Y5pu05LqL5Lu2XG4gKi9cbkRhdGEucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIChleHByLCB2YWx1ZSwgb3B0aW9uKSB7XG4gICAgb3B0aW9uID0gb3B0aW9uIHx8IHt9O1xuXG4gICAgLy8gI1tiZWdpbl0gZXJyb3JcbiAgICB2YXIgZXhwclJhdyA9IGV4cHI7XG4gICAgLy8gI1tlbmRdXG5cbiAgICBleHByID0gcGFyc2VFeHByKGV4cHIpO1xuXG4gICAgLy8gI1tiZWdpbl0gZXJyb3JcbiAgICBpZiAoZXhwci50eXBlICE9PSBFeHByVHlwZS5BQ0NFU1NPUikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tTQU4gRVJST1JdIEludmFsaWQgRXhwcmVzc2lvbiBpbiBEYXRhIHNldDogJyArIGV4cHJSYXcpO1xuICAgIH1cbiAgICAvLyAjW2VuZF1cblxuICAgIGlmICh0aGlzLmdldChleHByKSA9PT0gdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGRhdGFDYWNoZS5jbGVhcigpO1xuICAgIHRoaXMucmF3ID0gaW1tdXRhYmxlU2V0KHRoaXMucmF3LCBleHByLnBhdGhzLCB2YWx1ZSwgdGhpcyk7XG4gICAgdGhpcy5maXJlKHtcbiAgICAgICAgdHlwZTogRGF0YUNoYW5nZVR5cGUuU0VULFxuICAgICAgICBleHByOiBleHByLFxuICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgIG9wdGlvbjogb3B0aW9uXG4gICAgfSk7XG5cbiAgICAvLyAjW2JlZ2luXSBlcnJvclxuICAgIHRoaXMuY2hlY2tEYXRhVHlwZXMoKTtcbiAgICAvLyAjW2VuZF1cblxufTtcblxuLyoqXG4gKiDlkIjlubbmm7TmlrDmlbDmja7poblcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xPYmplY3R9IGV4cHIg5pWw5o2u6aG56Lev5b6EXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIOW+heWQiOW5tueahOaVsOaNruWAvFxuICogQHBhcmFtIHtPYmplY3Q9fSBvcHRpb24g6K6+572u5Y+C5pWwXG4gKiBAcGFyYW0ge2Jvb2xlYW59IG9wdGlvbi5zaWxlbnQg6Z2Z6buY6K6+572u77yM5LiN6Kem5Y+R5Y+Y5pu05LqL5Lu2XG4gKi9cbkRhdGEucHJvdG90eXBlLm1lcmdlID0gZnVuY3Rpb24gKGV4cHIsIHNvdXJjZSwgb3B0aW9uKSB7XG4gICAgb3B0aW9uID0gb3B0aW9uIHx8IHt9O1xuXG4gICAgLy8gI1tiZWdpbl0gZXJyb3JcbiAgICB2YXIgZXhwclJhdyA9IGV4cHI7XG4gICAgLy8gI1tlbmRdXG5cbiAgICBleHByID0gcGFyc2VFeHByKGV4cHIpO1xuXG4gICAgLy8gI1tiZWdpbl0gZXJyb3JcbiAgICBpZiAoZXhwci50eXBlICE9PSBFeHByVHlwZS5BQ0NFU1NPUikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tTQU4gRVJST1JdIEludmFsaWQgRXhwcmVzc2lvbiBpbiBEYXRhIG1lcmdlOiAnICsgZXhwclJhdyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB0aGlzLmdldChleHByKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbU0FOIEVSUk9SXSBNZXJnZSBFeHBlY3RzIGEgVGFyZ2V0IG9mIFR5cGUgXFwnb2JqZWN0XFwnOyBnb3QgJyArIHR5cGVvZiBvbGRWYWx1ZSk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBzb3VyY2UgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignW1NBTiBFUlJPUl0gTWVyZ2UgRXhwZWN0cyBhIFNvdXJjZSBvZiBUeXBlIFxcJ29iamVjdFxcJzsgZ290ICcgKyB0eXBlb2Ygc291cmNlKTtcbiAgICB9XG4gICAgLy8gI1tlbmRdXG5cbiAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIHRoaXMuc2V0KFxuICAgICAgICAgICAgY3JlYXRlQWNjZXNzb3IoXG4gICAgICAgICAgICAgICAgZXhwci5wYXRocy5jb25jYXQoXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBFeHByVHlwZS5TVFJJTkcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGtleVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIHNvdXJjZVtrZXldLFxuICAgICAgICAgICAgb3B0aW9uXG4gICAgICAgICk7XG4gICAgfVxufTtcblxuLyoqXG4gKiDln7rkuo7mm7TmlrDlh73mlbDmm7TmlrDmlbDmja7poblcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xPYmplY3R9IGV4cHIg5pWw5o2u6aG56Lev5b6EXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiDmlbDmja7lpITnkIblh73mlbBcbiAqIEBwYXJhbSB7T2JqZWN0PX0gb3B0aW9uIOiuvue9ruWPguaVsFxuICogQHBhcmFtIHtib29sZWFufSBvcHRpb24uc2lsZW50IOmdmem7mOiuvue9ru+8jOS4jeinpuWPkeWPmOabtOS6i+S7tlxuICovXG5EYXRhLnByb3RvdHlwZS5hcHBseSA9IGZ1bmN0aW9uIChleHByLCBmbiwgb3B0aW9uKSB7XG4gICAgb3B0aW9uID0gb3B0aW9uIHx8IHt9O1xuXG4gICAgLy8gI1tiZWdpbl0gZXJyb3JcbiAgICB2YXIgZXhwclJhdyA9IGV4cHI7XG4gICAgLy8gI1tlbmRdXG5cbiAgICBleHByID0gcGFyc2VFeHByKGV4cHIpO1xuXG4gICAgLy8gI1tiZWdpbl0gZXJyb3JcbiAgICBpZiAoZXhwci50eXBlICE9PSBFeHByVHlwZS5BQ0NFU1NPUikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tTQU4gRVJST1JdIEludmFsaWQgRXhwcmVzc2lvbiBpbiBEYXRhIGFwcGx5OiAnICsgZXhwclJhdyk7XG4gICAgfVxuICAgIC8vICNbZW5kXVxuXG4gICAgdmFyIG9sZFZhbHVlID0gdGhpcy5nZXQoZXhwcik7XG5cbiAgICAvLyAjW2JlZ2luXSBlcnJvclxuICAgIGlmICh0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgJ1tTQU4gRVJST1JdIEludmFsaWQgQXJndW1lbnRcXCdzIFR5cGUgaW4gRGF0YSBhcHBseTogJ1xuICAgICAgICAgICAgKyAnRXhwZWN0ZWQgRnVuY3Rpb24gYnV0IGdvdCAnICsgdHlwZW9mIGZuXG4gICAgICAgICk7XG4gICAgfVxuICAgIC8vICNbZW5kXVxuXG4gICAgdmFyIHZhbHVlID0gZm4ob2xkVmFsdWUpO1xuXG4gICAgaWYgKG9sZFZhbHVlID09PSB2YWx1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5zZXQoZXhwciwgdmFsdWUsIG9wdGlvbik7XG59O1xuXG4vKipcbiAqIOaVsOe7hOaVsOaNrumhuXNwbGljZeaTjeS9nFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfE9iamVjdH0gZXhwciDmlbDmja7pobnot6/lvoRcbiAqIEBwYXJhbSB7QXJyYXl9IGFyZ3Mgc3BsaWNlIOaOpeWPl+eahOWPguaVsOWIl+ihqO+8jOaVsOe7hOmhueS4jkFycmF5LnByb3RvdHlwZS5zcGxpY2XnmoTlj4LmlbDkuIDoh7RcbiAqIEBwYXJhbSB7T2JqZWN0PX0gb3B0aW9uIOiuvue9ruWPguaVsFxuICogQHBhcmFtIHtib29sZWFufSBvcHRpb24uc2lsZW50IOmdmem7mOiuvue9ru+8jOS4jeinpuWPkeWPmOabtOS6i+S7tlxuICogQHJldHVybiB7QXJyYXl9IOaWsOaVsOe7hFxuICovXG5EYXRhLnByb3RvdHlwZS5zcGxpY2UgPSBmdW5jdGlvbiAoZXhwciwgYXJncywgb3B0aW9uKSB7XG4gICAgb3B0aW9uID0gb3B0aW9uIHx8IHt9O1xuICAgIC8vICNbYmVnaW5dIGVycm9yXG4gICAgdmFyIGV4cHJSYXcgPSBleHByO1xuICAgIC8vICNbZW5kXVxuXG4gICAgZXhwciA9IHBhcnNlRXhwcihleHByKTtcblxuICAgIC8vICNbYmVnaW5dIGVycm9yXG4gICAgaWYgKGV4cHIudHlwZSAhPT0gRXhwclR5cGUuQUNDRVNTT1IpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbU0FOIEVSUk9SXSBJbnZhbGlkIEV4cHJlc3Npb24gaW4gRGF0YSBzcGxpY2U6ICcgKyBleHByUmF3KTtcbiAgICB9XG4gICAgLy8gI1tlbmRdXG5cbiAgICB2YXIgdGFyZ2V0ID0gdGhpcy5nZXQoZXhwcik7XG4gICAgdmFyIHJldHVyblZhbHVlID0gW107XG5cbiAgICBpZiAodGFyZ2V0IGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gYXJnc1swXTtcbiAgICAgICAgaWYgKGluZGV4IDwgMCB8fCBpbmRleCA+IHRhcmdldC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBuZXdBcnJheSA9IHRhcmdldC5zbGljZSgwKTtcbiAgICAgICAgcmV0dXJuVmFsdWUgPSBuZXdBcnJheS5zcGxpY2UuYXBwbHkobmV3QXJyYXksIGFyZ3MpO1xuICAgICAgICBkYXRhQ2FjaGUuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5yYXcgPSBpbW11dGFibGVTZXQodGhpcy5yYXcsIGV4cHIucGF0aHMsIG5ld0FycmF5LCB0aGlzKTtcblxuICAgICAgICB0aGlzLmZpcmUoe1xuICAgICAgICAgICAgZXhwcjogZXhwcixcbiAgICAgICAgICAgIHR5cGU6IERhdGFDaGFuZ2VUeXBlLlNQTElDRSxcbiAgICAgICAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgICAgICAgIGRlbGV0ZUNvdW50OiByZXR1cm5WYWx1ZS5sZW5ndGgsXG4gICAgICAgICAgICB2YWx1ZTogcmV0dXJuVmFsdWUsXG4gICAgICAgICAgICBpbnNlcnRpb25zOiBhcmdzLnNsaWNlKDIpLFxuICAgICAgICAgICAgb3B0aW9uOiBvcHRpb25cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gI1tiZWdpbl0gZXJyb3JcbiAgICB0aGlzLmNoZWNrRGF0YVR5cGVzKCk7XG4gICAgLy8gI1tlbmRdXG5cbiAgICByZXR1cm4gcmV0dXJuVmFsdWU7XG59O1xuXG4vKipcbiAqIOaVsOe7hOaVsOaNrumhuXB1c2jmk43kvZxcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xPYmplY3R9IGV4cHIg5pWw5o2u6aG56Lev5b6EXG4gKiBAcGFyYW0geyp9IGl0ZW0g6KaBcHVzaOeahOWAvFxuICogQHBhcmFtIHtPYmplY3Q9fSBvcHRpb24g6K6+572u5Y+C5pWwXG4gKiBAcGFyYW0ge2Jvb2xlYW59IG9wdGlvbi5zaWxlbnQg6Z2Z6buY6K6+572u77yM5LiN6Kem5Y+R5Y+Y5pu05LqL5Lu2XG4gKiBAcmV0dXJuIHtudW1iZXJ9IOaWsOaVsOe7hOeahGxlbmd0aOWxnuaAp1xuICovXG5EYXRhLnByb3RvdHlwZS5wdXNoID0gZnVuY3Rpb24gKGV4cHIsIGl0ZW0sIG9wdGlvbikge1xuICAgIHZhciB0YXJnZXQgPSB0aGlzLmdldChleHByKTtcblxuICAgIGlmICh0YXJnZXQgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICB0aGlzLnNwbGljZShleHByLCBbdGFyZ2V0Lmxlbmd0aCwgMCwgaXRlbV0sIG9wdGlvbik7XG4gICAgICAgIHJldHVybiB0YXJnZXQubGVuZ3RoICsgMTtcbiAgICB9XG59O1xuXG4vKipcbiAqIOaVsOe7hOaVsOaNrumhuXBvcOaTjeS9nFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfE9iamVjdH0gZXhwciDmlbDmja7pobnot6/lvoRcbiAqIEBwYXJhbSB7T2JqZWN0PX0gb3B0aW9uIOiuvue9ruWPguaVsFxuICogQHBhcmFtIHtib29sZWFufSBvcHRpb24uc2lsZW50IOmdmem7mOiuvue9ru+8jOS4jeinpuWPkeWPmOabtOS6i+S7tlxuICogQHJldHVybiB7Kn1cbiAqL1xuRGF0YS5wcm90b3R5cGUucG9wID0gZnVuY3Rpb24gKGV4cHIsIG9wdGlvbikge1xuICAgIHZhciB0YXJnZXQgPSB0aGlzLmdldChleHByKTtcblxuICAgIGlmICh0YXJnZXQgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICB2YXIgbGVuID0gdGFyZ2V0Lmxlbmd0aDtcbiAgICAgICAgaWYgKGxlbikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3BsaWNlKGV4cHIsIFtsZW4gLSAxLCAxXSwgb3B0aW9uKVswXTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbi8qKlxuICog5pWw57uE5pWw5o2u6aG5c2hpZnTmk43kvZxcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xPYmplY3R9IGV4cHIg5pWw5o2u6aG56Lev5b6EXG4gKiBAcGFyYW0ge09iamVjdD19IG9wdGlvbiDorr7nva7lj4LmlbBcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gb3B0aW9uLnNpbGVudCDpnZnpu5jorr7nva7vvIzkuI3op6blj5Hlj5jmm7Tkuovku7ZcbiAqIEByZXR1cm4geyp9XG4gKi9cbkRhdGEucHJvdG90eXBlLnNoaWZ0ID0gZnVuY3Rpb24gKGV4cHIsIG9wdGlvbikge1xuICAgIHJldHVybiB0aGlzLnNwbGljZShleHByLCBbMCwgMV0sIG9wdGlvbilbMF07XG59O1xuXG4vKipcbiAqIOaVsOe7hOaVsOaNrumhuXVuc2hpZnTmk43kvZxcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xPYmplY3R9IGV4cHIg5pWw5o2u6aG56Lev5b6EXG4gKiBAcGFyYW0geyp9IGl0ZW0g6KaBdW5zaGlmdOeahOWAvFxuICogQHBhcmFtIHtPYmplY3Q9fSBvcHRpb24g6K6+572u5Y+C5pWwXG4gKiBAcGFyYW0ge2Jvb2xlYW59IG9wdGlvbi5zaWxlbnQg6Z2Z6buY6K6+572u77yM5LiN6Kem5Y+R5Y+Y5pu05LqL5Lu2XG4gKiBAcmV0dXJuIHtudW1iZXJ9IOaWsOaVsOe7hOeahGxlbmd0aOWxnuaAp1xuICovXG5EYXRhLnByb3RvdHlwZS51bnNoaWZ0ID0gZnVuY3Rpb24gKGV4cHIsIGl0ZW0sIG9wdGlvbikge1xuICAgIHZhciB0YXJnZXQgPSB0aGlzLmdldChleHByKTtcblxuICAgIGlmICh0YXJnZXQgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICB0aGlzLnNwbGljZShleHByLCBbMCwgMCwgaXRlbV0sIG9wdGlvbik7XG4gICAgICAgIHJldHVybiB0YXJnZXQubGVuZ3RoICsgMTtcbiAgICB9XG59O1xuXG4vKipcbiAqIOaVsOe7hOaVsOaNrumhueenu+mZpOaTjeS9nFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfE9iamVjdH0gZXhwciDmlbDmja7pobnot6/lvoRcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCDopoHnp7vpmaTpobnnmoTntKLlvJVcbiAqIEBwYXJhbSB7T2JqZWN0PX0gb3B0aW9uIOiuvue9ruWPguaVsFxuICogQHBhcmFtIHtib29sZWFufSBvcHRpb24uc2lsZW50IOmdmem7mOiuvue9ru+8jOS4jeinpuWPkeWPmOabtOS6i+S7tlxuICovXG5EYXRhLnByb3RvdHlwZS5yZW1vdmVBdCA9IGZ1bmN0aW9uIChleHByLCBpbmRleCwgb3B0aW9uKSB7XG4gICAgdGhpcy5zcGxpY2UoZXhwciwgW2luZGV4LCAxXSwgb3B0aW9uKTtcbn07XG5cbi8qKlxuICog5pWw57uE5pWw5o2u6aG556e76Zmk5pON5L2cXG4gKlxuICogQHBhcmFtIHtzdHJpbmd8T2JqZWN0fSBleHByIOaVsOaNrumhuei3r+W+hFxuICogQHBhcmFtIHsqfSB2YWx1ZSDopoHnp7vpmaTnmoTpoblcbiAqIEBwYXJhbSB7T2JqZWN0PX0gb3B0aW9uIOiuvue9ruWPguaVsFxuICogQHBhcmFtIHtib29sZWFufSBvcHRpb24uc2lsZW50IOmdmem7mOiuvue9ru+8jOS4jeinpuWPkeWPmOabtOS6i+S7tlxuICovXG5EYXRhLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAoZXhwciwgdmFsdWUsIG9wdGlvbikge1xuICAgIHZhciB0YXJnZXQgPSB0aGlzLmdldChleHByKTtcblxuICAgIGlmICh0YXJnZXQgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICB2YXIgbGVuID0gdGFyZ2V0Lmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKGxlbi0tKSB7XG4gICAgICAgICAgICBpZiAodGFyZ2V0W2xlbl0gPT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zcGxpY2UoZXhwciwgW2xlbiwgMV0sIG9wdGlvbik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBEYXRhO1xuXG5cbi8qKlxuICogQGZpbGUg55Sf5ZG95ZGo5pyf57G7XG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG5mdW5jdGlvbiBsaWZlQ3ljbGVPd25JcyhuYW1lKSB7XG4gICAgcmV0dXJuIHRoaXNbbmFtZV07XG59XG5cbi8qIGVzbGludC1kaXNhYmxlIGZlY3MtdmFsaWQtdmFyLWpzZG9jICovXG4vKipcbiAqIOiKgueCueeUn+WRveWRqOacn+S/oeaBr1xuICpcbiAqIEBpbm5lclxuICogQHR5cGUge09iamVjdH1cbiAqL1xudmFyIExpZmVDeWNsZSA9IHtcbiAgICBzdGFydDoge30sXG5cbiAgICBjb21waWxlZDoge1xuICAgICAgICBpczogbGlmZUN5Y2xlT3duSXMsXG4gICAgICAgIGNvbXBpbGVkOiB0cnVlXG4gICAgfSxcblxuICAgIGluaXRlZDoge1xuICAgICAgICBpczogbGlmZUN5Y2xlT3duSXMsXG4gICAgICAgIGNvbXBpbGVkOiB0cnVlLFxuICAgICAgICBpbml0ZWQ6IHRydWVcbiAgICB9LFxuXG4gICAgcGFpbnRpbmc6IHtcbiAgICAgICAgaXM6IGxpZmVDeWNsZU93bklzLFxuICAgICAgICBjb21waWxlZDogdHJ1ZSxcbiAgICAgICAgaW5pdGVkOiB0cnVlLFxuICAgICAgICBwYWludGluZzogdHJ1ZVxuICAgIH0sXG5cbiAgICBjcmVhdGVkOiB7XG4gICAgICAgIGlzOiBsaWZlQ3ljbGVPd25JcyxcbiAgICAgICAgY29tcGlsZWQ6IHRydWUsXG4gICAgICAgIGluaXRlZDogdHJ1ZSxcbiAgICAgICAgY3JlYXRlZDogdHJ1ZVxuICAgIH0sXG5cbiAgICBhdHRhY2hlZDoge1xuICAgICAgICBpczogbGlmZUN5Y2xlT3duSXMsXG4gICAgICAgIGNvbXBpbGVkOiB0cnVlLFxuICAgICAgICBpbml0ZWQ6IHRydWUsXG4gICAgICAgIGNyZWF0ZWQ6IHRydWUsXG4gICAgICAgIGF0dGFjaGVkOiB0cnVlXG4gICAgfSxcblxuICAgIGxlYXZpbmc6IHtcbiAgICAgICAgaXM6IGxpZmVDeWNsZU93bklzLFxuICAgICAgICBjb21waWxlZDogdHJ1ZSxcbiAgICAgICAgaW5pdGVkOiB0cnVlLFxuICAgICAgICBjcmVhdGVkOiB0cnVlLFxuICAgICAgICBhdHRhY2hlZDogdHJ1ZSxcbiAgICAgICAgbGVhdmluZzogdHJ1ZVxuICAgIH0sXG5cbiAgICBkZXRhY2hlZDoge1xuICAgICAgICBpczogbGlmZUN5Y2xlT3duSXMsXG4gICAgICAgIGNvbXBpbGVkOiB0cnVlLFxuICAgICAgICBpbml0ZWQ6IHRydWUsXG4gICAgICAgIGNyZWF0ZWQ6IHRydWUsXG4gICAgICAgIGRldGFjaGVkOiB0cnVlXG4gICAgfSxcblxuICAgIGRpc3Bvc2VkOiB7XG4gICAgICAgIGlzOiBsaWZlQ3ljbGVPd25JcyxcbiAgICAgICAgZGlzcG9zZWQ6IHRydWVcbiAgICB9XG59O1xuLyogZXNsaW50LWVuYWJsZSBmZWNzLXZhbGlkLXZhci1qc2RvYyAqL1xuXG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IExpZmVDeWNsZTtcblxuXG4vKipcbiAqIEBmaWxlIOiKgueCueexu+Wei1xuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuLyoqXG4gKiDoioLngrnnsbvlnotcbiAqXG4gKiBAY29uc3RcbiAqIEB0eXBlIHtPYmplY3R9XG4gKi9cbnZhciBOb2RlVHlwZSA9IHtcbiAgICBURVhUOiAxLFxuICAgIElGOiAyLFxuICAgIEZPUjogMyxcbiAgICBFTEVNOiA0LFxuICAgIENNUFQ6IDUsXG4gICAgU0xPVDogNixcbiAgICBUUEw6IDdcbn07XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IE5vZGVUeXBlO1xuXG5cbi8qKlxuICogQGZpbGUg6I635Y+WIEFOb2RlIHByb3BzIOaVsOe7hOS4reebuOW6lCBuYW1lIOeahOmhuVxuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuLyoqXG4gKiDojrflj5YgQU5vZGUgcHJvcHMg5pWw57uE5Lit55u45bqUIG5hbWUg55qE6aG5XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGFOb2RlIEFOb2Rl5a+56LGhXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBuYW1l5bGe5oCn5Yy56YWN5LiyXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIGdldEFOb2RlUHJvcChhTm9kZSwgbmFtZSkge1xuICAgIHZhciBpbmRleCA9IGFOb2RlLmhvdHNwb3QucHJvcHNbbmFtZV07XG4gICAgaWYgKGluZGV4ICE9IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGFOb2RlLnByb3BzW2luZGV4XTtcbiAgICB9XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGdldEFOb2RlUHJvcDtcblxuXG4vKipcbiAqIEBmaWxlIOiOt+WPluWxnuaAp+WkhOeQhuWvueixoVxuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuLy8gdmFyIGNvbnRhaW5zID0gcmVxdWlyZSgnLi4vdXRpbC9jb250YWlucycpO1xuLy8gdmFyIGVtcHR5ID0gcmVxdWlyZSgnLi4vdXRpbC9lbXB0eScpO1xuLy8gdmFyIHN2Z1RhZ3MgPSByZXF1aXJlKCcuLi9icm93c2VyL3N2Zy10YWdzJyk7XG4vLyB2YXIgZXZhbEV4cHIgPSByZXF1aXJlKCcuLi9ydW50aW1lL2V2YWwtZXhwcicpO1xuLy8gdmFyIGdldEFOb2RlUHJvcCA9IHJlcXVpcmUoJy4vZ2V0LWEtbm9kZS1wcm9wJyk7XG4vLyB2YXIgTm9kZVR5cGUgPSByZXF1aXJlKCcuL25vZGUtdHlwZScpO1xuXG5cbi8qKlxuICogSFRNTCDlsZ7mgKflkowgRE9NIOaTjeS9nOWxnuaAp+eahOWvueeFp+ihqFxuICpcbiAqIEBpbm5lclxuICogQGNvbnN0XG4gKiBAdHlwZSB7T2JqZWN0fVxuICovXG52YXIgSFRNTF9BVFRSX1BST1BfTUFQID0ge1xuICAgICdyZWFkb25seSc6ICdyZWFkT25seScsXG4gICAgJ2NlbGxwYWRkaW5nJzogJ2NlbGxQYWRkaW5nJyxcbiAgICAnY2VsbHNwYWNpbmcnOiAnY2VsbFNwYWNpbmcnLFxuICAgICdjb2xzcGFuJzogJ2NvbFNwYW4nLFxuICAgICdyb3dzcGFuJzogJ3Jvd1NwYW4nLFxuICAgICd2YWxpZ24nOiAndkFsaWduJyxcbiAgICAndXNlbWFwJzogJ3VzZU1hcCcsXG4gICAgJ2ZyYW1lYm9yZGVyJzogJ2ZyYW1lQm9yZGVyJyxcbiAgICAnZm9yJzogJ2h0bWxGb3InXG59O1xuXG4vKipcbiAqIOm7mOiupOeahOWFg+e0oOeahOWxnuaAp+iuvue9rueahOWPmOaNouaWueazlVxuICpcbiAqIEBpbm5lclxuICogQHR5cGUge09iamVjdH1cbiAqL1xudmFyIGRlZmF1bHRFbGVtZW50UHJvcEhhbmRsZXIgPSB7XG4gICAgYXR0cjogZnVuY3Rpb24gKGVsZW1lbnQsIG5hbWUsIHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSAhPSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gJyAnICsgbmFtZSArICc9XCInICsgdmFsdWUgKyAnXCInO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIHByb3A6IGZ1bmN0aW9uIChlbGVtZW50LCBuYW1lLCB2YWx1ZSkge1xuICAgICAgICB2YXIgcHJvcE5hbWUgPSBIVE1MX0FUVFJfUFJPUF9NQVBbbmFtZV0gfHwgbmFtZTtcbiAgICAgICAgdmFyIGVsID0gZWxlbWVudC5lbDtcblxuICAgICAgICAvLyBpbnB1dCDnmoQgdHlwZSDmmK/kuKrnibnmrorlsZ7mgKfvvIzlhbblrp7kuZ/lupTor6XnlKggc2V0QXR0cmlidXRlXG4gICAgICAgIC8vIOS9huaYryB0eXBlIOS4jeW6lOivpei/kOihjOaXtuWKqOaAgeaUueWPmO+8jOWQpuWImeS8muacieWFvOWuueaAp+mXrumimFxuICAgICAgICAvLyDmiYDku6Xov5nph4znm7TmjqXlsLHkuI3nrqHkuoZcbiAgICAgICAgaWYgKHN2Z1RhZ3NbZWxlbWVudC50YWdOYW1lXSB8fCAhKHByb3BOYW1lIGluIGVsKSkge1xuICAgICAgICAgICAgZWwuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGVsW3Byb3BOYW1lXSA9IHZhbHVlID09IG51bGwgPyAnJyA6IHZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gYXR0cmlidXRlIOe7keWumueahOaYryB0ZXh077yM5omA5Lul5LiN5Lya5Ye6546wIG51bGwg55qE5oOF5Ya177yM6L+Z6YeM5peg6ZyA5aSE55CGXG4gICAgICAgIC8vIOaNouWPpeivneadpeivtO+8jHNhbiDmmK/lgZrkuI3liLAgYXR0cmlidXRlIOaXtuacieaXtuaXoOeahFxuICAgICAgICAvLyBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgICAgICAvLyAgICAgZWwucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuICAgICAgICAvLyB9XG4gICAgfSxcblxuICAgIG91dHB1dDogZnVuY3Rpb24gKGVsZW1lbnQsIGJpbmRJbmZvLCBkYXRhKSB7XG4gICAgICAgIGRhdGEuc2V0KGJpbmRJbmZvLmV4cHIsIGVsZW1lbnQuZWxbYmluZEluZm8ubmFtZV0sIHtcbiAgICAgICAgICAgIHRhcmdldDoge1xuICAgICAgICAgICAgICAgIGlkOiBlbGVtZW50LmlkLFxuICAgICAgICAgICAgICAgIHByb3A6IGJpbmRJbmZvLm5hbWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufTtcblxuLyogZXNsaW50LWRpc2FibGUgZmVjcy1wcm9wZXJ0aWVzLXF1b3RlICovXG4vKipcbiAqIOm7mOiupOeahOWxnuaAp+iuvue9ruWPmOaNouaWueazlVxuICpcbiAqIEBpbm5lclxuICogQHR5cGUge09iamVjdH1cbiAqL1xudmFyIGRlZmF1bHRFbGVtZW50UHJvcEhhbmRsZXJzID0ge1xuICAgIHN0eWxlOiB7XG4gICAgICAgIGF0dHI6IGZ1bmN0aW9uIChlbGVtZW50LCBuYW1lLCB2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICcgc3R5bGU9XCInICsgdmFsdWUgKyAnXCInO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIHByb3A6IGZ1bmN0aW9uIChlbGVtZW50LCBuYW1lLCB2YWx1ZSkge1xuICAgICAgICAgICAgZWxlbWVudC5lbC5zdHlsZS5jc3NUZXh0ID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgJ2NsYXNzJzogeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgICAgIGF0dHI6IGZ1bmN0aW9uIChlbGVtZW50LCBuYW1lLCB2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICcgY2xhc3M9XCInICsgdmFsdWUgKyAnXCInO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIHByb3A6IGZ1bmN0aW9uIChlbGVtZW50LCBuYW1lLCB2YWx1ZSkge1xuICAgICAgICAgICAgZWxlbWVudC5lbC5jbGFzc05hbWUgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBzbG90OiB7XG4gICAgICAgIGF0dHI6IGVtcHR5LFxuICAgICAgICBwcm9wOiBlbXB0eVxuICAgIH0sXG5cbiAgICByZWFkb25seTogZ2VuQm9vbFByb3BIYW5kbGVyKCdyZWFkb25seScpLFxuICAgIGRpc2FibGVkOiBnZW5Cb29sUHJvcEhhbmRsZXIoJ2Rpc2FibGVkJyksXG4gICAgYXV0b2ZvY3VzOiBnZW5Cb29sUHJvcEhhbmRsZXIoJ2F1dG9mb2N1cycpLFxuICAgIHJlcXVpcmVkOiBnZW5Cb29sUHJvcEhhbmRsZXIoJ3JlcXVpcmVkJyksXG4gICAgZHJhZ2dhYmxlOiBnZW5Cb29sUHJvcEhhbmRsZXIoJ2RyYWdnYWJsZScpXG59O1xuLyogZXNsaW50LWVuYWJsZSBmZWNzLXByb3BlcnRpZXMtcXVvdGUgKi9cblxuLy8gZHJhZ2dhYmxlIGF0dHJpYnV0ZSDmmK/mnprkuL7nsbvlnovvvIzkvYYgcHJvcGVydHkg5o6l5Y+XIGJvb2xlYW5cbi8vIOaJgOS7pei/memHjOWjsOaYjiBib29sIHByb3DvvIznhLblkI4gYXR0ciDnva7lm57mnaVcbmRlZmF1bHRFbGVtZW50UHJvcEhhbmRsZXJzLmRyYWdnYWJsZS5hdHRyID0gZGVmYXVsdEVsZW1lbnRQcm9wSGFuZGxlci5hdHRyO1xuXG52YXIgY2hlY2tlZFByb3BIYW5kbGVyID0gZ2VuQm9vbFByb3BIYW5kbGVyKCdjaGVja2VkJyk7XG52YXIgYW5hbElucHV0Q2hlY2tlciA9IHtcbiAgICBjaGVja2JveDogY29udGFpbnMsXG4gICAgcmFkaW86IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIHJldHVybiBhID09PSBiO1xuICAgIH1cbn07XG5cbmZ1bmN0aW9uIGFuYWxJbnB1dENoZWNrZWRTdGF0ZShlbGVtZW50LCB2YWx1ZSwgb3Blcikge1xuICAgIHZhciBiaW5kVmFsdWUgPSBnZXRBTm9kZVByb3AoZWxlbWVudC5hTm9kZSwgJ3ZhbHVlJyk7XG4gICAgdmFyIGJpbmRUeXBlID0gZ2V0QU5vZGVQcm9wKGVsZW1lbnQuYU5vZGUsICd0eXBlJyk7XG5cbiAgICBpZiAoYmluZFZhbHVlICYmIGJpbmRUeXBlKSB7XG4gICAgICAgIHZhciB0eXBlID0gZXZhbEV4cHIoYmluZFR5cGUuZXhwciwgZWxlbWVudC5zY29wZSwgZWxlbWVudC5vd25lcik7XG5cbiAgICAgICAgaWYgKGFuYWxJbnB1dENoZWNrZXJbdHlwZV0pIHtcbiAgICAgICAgICAgIHZhciBiaW5kQ2hlY2tlZCA9IGdldEFOb2RlUHJvcChlbGVtZW50LmFOb2RlLCAnY2hlY2tlZCcpO1xuICAgICAgICAgICAgaWYgKCFiaW5kQ2hlY2tlZC5oaW50RXhwcikge1xuICAgICAgICAgICAgICAgIGJpbmRDaGVja2VkLmhpbnRFeHByID0gYmluZFZhbHVlLmV4cHI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBjaGVja2VkU3RhdGUgPSBhbmFsSW5wdXRDaGVja2VyW3R5cGVdKFxuICAgICAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgICAgIGV2YWxFeHByKGJpbmRWYWx1ZS5leHByLCBlbGVtZW50LnNjb3BlLCBlbGVtZW50Lm93bmVyKVxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgc3dpdGNoIChvcGVyKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnYXR0cic6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjaGVja2VkU3RhdGUgPyAnIGNoZWNrZWQ9XCJjaGVja2VkXCInIDogJyc7XG5cbiAgICAgICAgICAgICAgICBjYXNlICdwcm9wJzpcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5lbC5jaGVja2VkID0gY2hlY2tlZFN0YXRlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY2hlY2tlZFByb3BIYW5kbGVyW29wZXJdKGVsZW1lbnQsICdjaGVja2VkJywgdmFsdWUpO1xufVxuXG52YXIgZWxlbWVudFByb3BIYW5kbGVycyA9IHtcbiAgICBpbnB1dDoge1xuICAgICAgICBtdWx0aXBsZTogZ2VuQm9vbFByb3BIYW5kbGVyKCdtdWx0aXBsZScpLFxuICAgICAgICBjaGVja2VkOiB7XG4gICAgICAgICAgICBhdHRyOiBmdW5jdGlvbiAoZWxlbWVudCwgbmFtZSwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYW5hbElucHV0Q2hlY2tlZFN0YXRlKGVsZW1lbnQsIHZhbHVlLCAnYXR0cicpO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgcHJvcDogZnVuY3Rpb24gKGVsZW1lbnQsIG5hbWUsIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgYW5hbElucHV0Q2hlY2tlZFN0YXRlKGVsZW1lbnQsIHZhbHVlLCAncHJvcCcpO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgb3V0cHV0OiBmdW5jdGlvbiAoZWxlbWVudCwgYmluZEluZm8sIGRhdGEpIHtcbiAgICAgICAgICAgICAgICB2YXIgZWwgPSBlbGVtZW50LmVsO1xuICAgICAgICAgICAgICAgIHZhciBiaW5kVmFsdWUgPSBnZXRBTm9kZVByb3AoZWxlbWVudC5hTm9kZSwgJ3ZhbHVlJyk7XG4gICAgICAgICAgICAgICAgdmFyIGJpbmRUeXBlID0gZ2V0QU5vZGVQcm9wKGVsZW1lbnQuYU5vZGUsICd0eXBlJykgfHwge307XG5cbiAgICAgICAgICAgICAgICBpZiAoYmluZFZhbHVlICYmIGJpbmRUeXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoYmluZFR5cGUucmF3KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdjaGVja2JveCc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVtlbC5jaGVja2VkID8gJ3B1c2gnIDogJ3JlbW92ZSddKGJpbmRJbmZvLmV4cHIsIGVsLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3JhZGlvJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5jaGVja2VkICYmIGRhdGEuc2V0KGJpbmRJbmZvLmV4cHIsIGVsLnZhbHVlLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGVsZW1lbnQuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wOiBiaW5kSW5mby5uYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBkZWZhdWx0RWxlbWVudFByb3BIYW5kbGVyLm91dHB1dChlbGVtZW50LCBiaW5kSW5mbywgZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgdGV4dGFyZWE6IHtcbiAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgIGF0dHI6IGVtcHR5LFxuICAgICAgICAgICAgcHJvcDogZGVmYXVsdEVsZW1lbnRQcm9wSGFuZGxlci5wcm9wLFxuICAgICAgICAgICAgb3V0cHV0OiBkZWZhdWx0RWxlbWVudFByb3BIYW5kbGVyLm91dHB1dFxuICAgICAgICB9XG4gICAgfSxcblxuICAgIG9wdGlvbjoge1xuICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgYXR0cjogZnVuY3Rpb24gKGVsZW1lbnQsIG5hbWUsIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICcgdmFsdWU9XCInICsgKHZhbHVlIHx8ICcnKSArICdcIidcbiAgICAgICAgICAgICAgICAgICAgKyAoaXNPcHRpb25TZWxlY3RlZChlbGVtZW50LCB2YWx1ZSkgPyAnc2VsZWN0ZWQnIDogJycpO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgcHJvcDogZnVuY3Rpb24gKGVsZW1lbnQsIG5hbWUsIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgZGVmYXVsdEVsZW1lbnRQcm9wSGFuZGxlci5wcm9wKGVsZW1lbnQsIG5hbWUsIHZhbHVlKTtcblxuICAgICAgICAgICAgICAgIGlmIChpc09wdGlvblNlbGVjdGVkKGVsZW1lbnQsIHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmVsLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgc2VsZWN0OiB7XG4gICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICBhdHRyOiBlbXB0eSxcbiAgICAgICAgICAgIHByb3A6IGZ1bmN0aW9uIChlbGVtZW50LCBuYW1lLCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuZWwudmFsdWUgPSB2YWx1ZSB8fCAnJztcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIG91dHB1dDogZGVmYXVsdEVsZW1lbnRQcm9wSGFuZGxlci5vdXRwdXRcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbmZ1bmN0aW9uIGlzT3B0aW9uU2VsZWN0ZWQoZWxlbWVudCwgdmFsdWUpIHtcbiAgICB2YXIgcGFyZW50U2VsZWN0ID0gZWxlbWVudC5wYXJlbnQ7XG4gICAgd2hpbGUgKHBhcmVudFNlbGVjdCkge1xuICAgICAgICBpZiAocGFyZW50U2VsZWN0LnRhZ05hbWUgPT09ICdzZWxlY3QnKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHBhcmVudFNlbGVjdCA9IHBhcmVudFNlbGVjdC5wYXJlbnQ7XG4gICAgfVxuXG5cbiAgICBpZiAocGFyZW50U2VsZWN0KSB7XG4gICAgICAgIHZhciBzZWxlY3RWYWx1ZSA9IG51bGw7XG4gICAgICAgIHZhciBwcm9wO1xuICAgICAgICB2YXIgZXhwcjtcblxuICAgICAgICBpZiAoKHByb3AgPSBnZXRBTm9kZVByb3AocGFyZW50U2VsZWN0LmFOb2RlLCAndmFsdWUnKSlcbiAgICAgICAgICAgICYmIChleHByID0gcHJvcC5leHByKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIHNlbGVjdFZhbHVlID0gcGFyZW50U2VsZWN0Lm5vZGVUeXBlID09PSBOb2RlVHlwZS5DTVBUXG4gICAgICAgICAgICAgICAgPyBldmFsRXhwcihleHByLCBwYXJlbnRTZWxlY3QuZGF0YSwgcGFyZW50U2VsZWN0KVxuICAgICAgICAgICAgICAgIDogZXZhbEV4cHIoZXhwciwgcGFyZW50U2VsZWN0LnNjb3BlLCBwYXJlbnRTZWxlY3Qub3duZXIpXG4gICAgICAgICAgICAgICAgfHwgJyc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2VsZWN0VmFsdWUgPT09IHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLyoqXG4gKiDnlJ/miJAgYm9vbCDnsbvlnovlsZ7mgKfnu5Hlrprmk43kvZznmoTlj5jmjaLmlrnms5VcbiAqXG4gKiBAaW5uZXJcbiAqIEBwYXJhbSB7c3RyaW5nfSBhdHRyTmFtZSDlsZ7mgKflkI1cbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gZ2VuQm9vbFByb3BIYW5kbGVyKGF0dHJOYW1lKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgYXR0cjogZnVuY3Rpb24gKGVsZW1lbnQsIG5hbWUsIHZhbHVlKSB7XG4gICAgICAgICAgICAvLyDlm6DkuLrlhYPntKDnmoRhdHRy5YC85b+F6aG757uP6L+HaHRtbCBlc2NhcGXvvIzlkKbliJnlj6/og73mnInmvI/mtJ5cbiAgICAgICAgICAgIC8vIOaJgOS7pei/memHjOebtOaOpeWvueWBh+WAvOWtl+espuS4suW9ouW8j+i/m+ihjOWkhOeQhlxuICAgICAgICAgICAgLy8gTmFO5LmL57G76Z2e5Li75rWB55qE5bCx5YWI5LiN6ICD6JmR5LqGXG4gICAgICAgICAgICB2YXIgcHJvcCA9IGdldEFOb2RlUHJvcChlbGVtZW50LmFOb2RlLCBuYW1lKTtcbiAgICAgICAgICAgIGlmIChwcm9wICYmIHByb3AucmF3ID09PSAnJ1xuICAgICAgICAgICAgICAgIHx8IHZhbHVlICYmIHZhbHVlICE9PSAnZmFsc2UnICYmIHZhbHVlICE9PSAnMCdcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnICcgKyBhdHRyTmFtZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBwcm9wOiBmdW5jdGlvbiAoZWxlbWVudCwgbmFtZSwgdmFsdWUpIHtcbiAgICAgICAgICAgIHZhciBwcm9wTmFtZSA9IEhUTUxfQVRUUl9QUk9QX01BUFthdHRyTmFtZV0gfHwgYXR0ck5hbWU7XG4gICAgICAgICAgICBlbGVtZW50LmVsW3Byb3BOYW1lXSA9ICEhKHZhbHVlICYmIHZhbHVlICE9PSAnZmFsc2UnICYmIHZhbHVlICE9PSAnMCcpO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuXG4vKipcbiAqIOiOt+WPluWxnuaAp+WkhOeQhuWvueixoVxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudCDlhYPntKDlrp7kvotcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIOWxnuaAp+WQjVxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiBnZXRQcm9wSGFuZGxlcihlbGVtZW50LCBuYW1lKSB7XG4gICAgdmFyIHRhZ1Byb3BIYW5kbGVycyA9IGVsZW1lbnRQcm9wSGFuZGxlcnNbZWxlbWVudC50YWdOYW1lXTtcbiAgICBpZiAoIXRhZ1Byb3BIYW5kbGVycykge1xuICAgICAgICB0YWdQcm9wSGFuZGxlcnMgPSBlbGVtZW50UHJvcEhhbmRsZXJzW2VsZW1lbnQudGFnTmFtZV0gPSB7fTtcbiAgICB9XG5cbiAgICB2YXIgcHJvcEhhbmRsZXIgPSB0YWdQcm9wSGFuZGxlcnNbbmFtZV07XG4gICAgaWYgKCFwcm9wSGFuZGxlcikge1xuICAgICAgICBwcm9wSGFuZGxlciA9IGRlZmF1bHRFbGVtZW50UHJvcEhhbmRsZXJzW25hbWVdIHx8IGRlZmF1bHRFbGVtZW50UHJvcEhhbmRsZXI7XG4gICAgICAgIHRhZ1Byb3BIYW5kbGVyc1tuYW1lXSA9IHByb3BIYW5kbGVyO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9wSGFuZGxlcjtcbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZ2V0UHJvcEhhbmRsZXI7XG5cblxuLyoqXG4gKiBAZmlsZSDliKTmlq3lj5jmm7TmmK/lkKbmnaXmupDkuo7lhYPntKBcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cbi8qKlxuICog5Yik5pat5Y+Y5pu05piv5ZCm5p2l5rqQ5LqO5YWD57Sg77yM5p2l5rqQ5LqO5YWD57Sg5pe277yM6KeG5Zu+5pu05paw6ZyA6KaB6Zi75patXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGNoYW5nZSDlj5jmm7Tlr7nosaFcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudCDlhYPntKBcbiAqIEBwYXJhbSB7c3RyaW5nP30gcHJvcE5hbWUg5bGe5oCn5ZCN77yM5Y+v6YCJ44CC6ZyA6KaB57K+56Gu5Yik5pat5piv5ZCm5p2l5rqQ5LqO5q2k5bGe5oCn5pe25Lyg5YWlXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBpc0RhdGFDaGFuZ2VCeUVsZW1lbnQoY2hhbmdlLCBlbGVtZW50LCBwcm9wTmFtZSkge1xuICAgIHZhciBjaGFuZ2VUYXJnZXQgPSBjaGFuZ2Uub3B0aW9uLnRhcmdldDtcbiAgICByZXR1cm4gY2hhbmdlVGFyZ2V0ICYmIGNoYW5nZVRhcmdldC5pZCA9PT0gZWxlbWVudC5pZFxuICAgICAgICAmJiAoIXByb3BOYW1lIHx8IGNoYW5nZVRhcmdldC5wcm9wID09PSBwcm9wTmFtZSk7XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGlzRGF0YUNoYW5nZUJ5RWxlbWVudDtcblxuXG4vKipcbiAqIEBmaWxlIOWcqOWvueixoeS4iuS9v+eUqGFjY2Vzc29y6KGo6L6+5byP5p+l5om+5pa55rOVXG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG4vLyB2YXIgZXZhbEV4cHIgPSByZXF1aXJlKCcuLi9ydW50aW1lL2V2YWwtZXhwcicpO1xuXG4vKipcbiAqIOWcqOWvueixoeS4iuS9v+eUqGFjY2Vzc29y6KGo6L6+5byP5p+l5om+5pa55rOVXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSDmupDlr7nosaFcbiAqIEBwYXJhbSB7T2JqZWN0fSBuYW1lRXhwciDooajovr7lvI9cbiAqIEBwYXJhbSB7RGF0YX0gZGF0YSDmiYDlsZ7mlbDmja7njq/looNcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICovXG5mdW5jdGlvbiBmaW5kTWV0aG9kKHNvdXJjZSwgbmFtZUV4cHIsIGRhdGEpIHtcbiAgICB2YXIgbWV0aG9kID0gc291cmNlO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IG1ldGhvZCAhPSBudWxsICYmIGkgPCBuYW1lRXhwci5wYXRocy5sZW5ndGg7IGkrKykge1xuICAgICAgICBtZXRob2QgPSBtZXRob2RbZXZhbEV4cHIobmFtZUV4cHIucGF0aHNbaV0sIGRhdGEpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0aG9kO1xufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmaW5kTWV0aG9kO1xuXG5cbi8qKlxuICogQGZpbGUg5aOw5piO5byP5LqL5Lu255qE55uR5ZCs5Ye95pWwXG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG5cbi8vIHZhciBldmFsQXJncyA9IHJlcXVpcmUoJy4uL3J1bnRpbWUvZXZhbC1hcmdzJyk7XG4vLyB2YXIgZmluZE1ldGhvZCA9IHJlcXVpcmUoJy4uL3J1bnRpbWUvZmluZC1tZXRob2QnKTtcbi8vIHZhciBEYXRhID0gcmVxdWlyZSgnLi4vcnVudGltZS9kYXRhJyk7XG5cbi8qKlxuICog5aOw5piO5byP5LqL5Lu255qE55uR5ZCs5Ye95pWwXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGV2ZW50QmluZCDnu5Hlrprkv6Hmga/lr7nosaFcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNDb21wb25lbnRFdmVudCDmmK/lkKbnu4Tku7boh6rlrprkuYnkuovku7ZcbiAqIEBwYXJhbSB7RGF0YX0gZGF0YSDmlbDmja7njq/looNcbiAqIEBwYXJhbSB7RXZlbnR9IGUg5LqL5Lu25a+56LGhXG4gKi9cbmZ1bmN0aW9uIGV2ZW50RGVjbGFyYXRpb25MaXN0ZW5lcihldmVudEJpbmQsIGlzQ29tcG9uZW50RXZlbnQsIGRhdGEsIGUpIHtcbiAgICB2YXIgbWV0aG9kID0gZmluZE1ldGhvZCh0aGlzLCBldmVudEJpbmQuZXhwci5uYW1lLCBkYXRhKTtcblxuICAgIGlmICh0eXBlb2YgbWV0aG9kID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHZhciBzY29wZSA9IG5ldyBEYXRhKFxuICAgICAgICAgICAgeyRldmVudDogaXNDb21wb25lbnRFdmVudCA/IGUgOiBlIHx8IHdpbmRvdy5ldmVudH0sXG4gICAgICAgICAgICBkYXRhXG4gICAgICAgICk7XG4gICAgICAgIG1ldGhvZC5hcHBseSh0aGlzLCBldmFsQXJncyhldmVudEJpbmQuZXhwci5hcmdzLCBzY29wZSwgdGhpcykpO1xuICAgIH1cbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZXZlbnREZWNsYXJhdGlvbkxpc3RlbmVyO1xuXG5cbi8qKlxuICogQGZpbGUg5b6A5a2X56ym5Liy6L+e5o6l5a+56LGh5Lit5re75Yqg5a2X56ym5LiyXG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG4vLyB2YXIgaWVPbGRUaGFuOSA9IHJlcXVpcmUoJy4uL2Jyb3dzZXIvaWUtb2xkLXRoYW4tOScpO1xuXG4vKipcbiAqIOW+gOWtl+espuS4sui/nuaOpeWvueixoeS4rea3u+WKoOWtl+espuS4slxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBidWYg5a2X56ym5Liy6L+e5o6l5a+56LGhXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIOimgea3u+WKoOeahOWtl+espuS4slxuICovXG52YXIgaHRtbEJ1ZmZlclB1c2ggPVxuICAgIC8vICNbYmVnaW5dIGFsbHVhXG4gICAgaWVPbGRUaGFuOVxuICAgICAgICA/XG4gICAgICAgIGZ1bmN0aW9uIChidWYsIHN0cikge1xuICAgICAgICAgICAgYnVmLnJhd1tidWYubGVuZ3RoKytdID0gc3RyO1xuICAgICAgICAgICAgYnVmLnRhZ1N0YXJ0ID0gMDtcbiAgICAgICAgfVxuICAgICAgICA6XG4gICAgLy8gI1tlbmRdXG4gICAgICAgIGZ1bmN0aW9uIChidWYsIHN0cikge1xuICAgICAgICAgICAgYnVmLnJhdyArPSBzdHI7XG4gICAgICAgIH07XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGh0bWxCdWZmZXJQdXNoO1xuXG5cbi8qKlxuICogQGZpbGUg6Ieq6Zet5ZCI5qCH562+6KGoXG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG4vLyB2YXIgc3BsaXRTdHIyT2JqID0gcmVxdWlyZSgnLi4vdXRpbC9zcGxpdC1zdHItMi1vYmonKTtcblxuLyoqXG4gKiDoh6rpl63lkIjmoIfnrb7liJfooahcbiAqXG4gKiBAdHlwZSB7T2JqZWN0fVxuICovXG52YXIgaG90VGFncyA9IHNwbGl0U3RyMk9iaignZGl2LHNwYW4saW5wdXQsYnV0dG9uLHRleHRhcmVhLGZvcm0sbGFiZWwsZGwsZHQsZGQsdWwsb2wsbGksYSxiLHUsaDEsaDIsaDMsaDQsaDUsaDYnKTtcblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gaG90VGFncztcblxuXG4vKipcbiAqIEBmaWxlIOaYr+WQpua1j+iniOWZqOeOr+Wig1xuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxudmFyIGlzQnJvd3NlciA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnO1xuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBpc0Jyb3dzZXI7XG5cblxuLyoqXG4gKiBAZmlsZSBpbnNlcnRCZWZvcmUg5pa55rOV55qE5YW85a655oCn5bCB6KOFXG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG4vKipcbiAqIGluc2VydEJlZm9yZSDmlrnms5XnmoTlhbzlrrnmgKflsIHoo4VcbiAqXG4gKiBAcGFyYW0ge0hUTUxOb2RlfSB0YXJnZXRFbCDopoHmj5LlhaXnmoToioLngrlcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHBhcmVudEVsIOeItuWFg+e0oFxuICogQHBhcmFtIHtIVE1MRWxlbWVudD99IGJlZm9yZUVsIOWcqOatpOWFg+e0oOS5i+WJjeaPkuWFpVxuICovXG5mdW5jdGlvbiBpbnNlcnRCZWZvcmUodGFyZ2V0RWwsIHBhcmVudEVsLCBiZWZvcmVFbCkge1xuICAgIGlmIChwYXJlbnRFbCkge1xuICAgICAgICBpZiAoYmVmb3JlRWwpIHtcbiAgICAgICAgICAgIHBhcmVudEVsLmluc2VydEJlZm9yZSh0YXJnZXRFbCwgYmVmb3JlRWwpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcGFyZW50RWwuYXBwZW5kQ2hpbGQodGFyZ2V0RWwpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCZWZvcmU7XG5cblxuLyoqXG4gKiBAZmlsZSDliJvlu7rlrZfnrKbkuLLov57mjqXlr7nosaHvvIznlKjkuo7ot6jlubPlj7Dmj5Dpq5jmgKfog73nmoTlrZfnrKbkuLLov57mjqXvvIzkuIfkuIDkuI3lsI/lv4PmlK/mjIHogIHlvI/mtY/op4jlmajkuoblkaJcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cbi8vIHZhciBpZU9sZFRoYW45ID0gcmVxdWlyZSgnLi4vYnJvd3Nlci9pZS1vbGQtdGhhbi05Jyk7XG5cbi8qKlxuICog5Yib5bu65a2X56ym5Liy6L+e5o6l5a+56LGhXG4gKlxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiBjcmVhdGVIVE1MQnVmZmVyKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHJhdzpcbiAgICAgICAgICAgIC8vICNbYmVnaW5dIGFsbHVhXG4gICAgICAgICAgICBpZU9sZFRoYW45XG4gICAgICAgICAgICAgICAgPyBbXVxuICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgIC8vICNbZW5kXVxuICAgICAgICAgICAgICAgICcnLFxuICAgICAgICBsZW5ndGg6IDAsXG4gICAgICAgIHRhZ1N0YXJ0OiAxLFxuICAgICAgICBpbnNlcnRDb21tZW50czogW11cbiAgICB9O1xufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVIVE1MQnVmZmVyO1xuXG5cbi8qKlxuICogQGZpbGUg5b6AaHRtbOWtl+espuS4sui/nuaOpeWvueixoeS4rea3u+WKoOazqOmHilxuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuLy8gdmFyIGllT2xkVGhhbjkgPSByZXF1aXJlKCcuLi9icm93c2VyL2llLW9sZC10aGFuLTknKTtcblxuLyoqXG4gKiDlvoBodG1s5a2X56ym5Liy6L+e5o6l5a+56LGh5Lit5re75Yqg5rOo6YeKXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGJ1ZiDlrZfnrKbkuLLov57mjqXlr7nosaFcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIg6KaB5re75Yqg55qE5a2X56ym5LiyXG4gKi9cbnZhciBodG1sQnVmZmVyQ29tbWVudCA9XG4gICAgLy8gI1tiZWdpbl0gYWxsdWFcbiAgICBpZU9sZFRoYW45XG4gICAgICAgID9cbiAgICAgICAgZnVuY3Rpb24gKGJ1Ziwgc3RyKSB7XG4gICAgICAgICAgICBidWYucmF3W2J1Zi5sZW5ndGgrK10gPSAnPCEtLScgKyBzdHIgKyAnLS0+JztcbiAgICAgICAgICAgIGlmIChidWYudGFnU3RhcnQpIHtcbiAgICAgICAgICAgICAgICBidWYuaW5zZXJ0Q29tbWVudHMucHVzaChbc3RyLCBidWYudGFnSWRdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICA6XG4gICAgLy8gI1tlbmRdXG4gICAgICAgIGZ1bmN0aW9uIChidWYsIHN0cikge1xuICAgICAgICAgICAgYnVmLnJhdyArPSAnPCEtLScgKyBzdHIgKyAnLS0+JztcbiAgICAgICAgfVxuO1xuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBodG1sQnVmZmVyQ29tbWVudDtcblxuXG4vKipcbiAqIEBmaWxlIOi+k+WHuiBIVE1MIGJ1ZmZlciDlhoXlrrnliLAgRE9NIOS4ilxuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuLy8gdmFyIGllT2xkVGhhbjkgPSByZXF1aXJlKCcuLi9icm93c2VyL2llLW9sZC10aGFuLTknKTtcbi8vIHZhciBpbnNlcnRCZWZvcmUgPSByZXF1aXJlKCcuLi9icm93c2VyL2luc2VydC1iZWZvcmUnKTtcblxuLyoqXG4gKiDovpPlh7ogSFRNTCBidWZmZXIg5YaF5a655YiwIERPTSDkuIpcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gYnVmIGh0bWzlrZfnrKbkuLLov57mjqXlr7nosaFcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHRhcmdldCDnm67moIdET03lhYPntKBcbiAqIEBwYXJhbSB7c3RyaW5nP30gcG9zIOebuOWvuXRhcmdldOeahOS9jee9rlxuICovXG5mdW5jdGlvbiBvdXRwdXRIVE1MQnVmZmVyKGJ1ZiwgdGFyZ2V0LCBwb3MpIHtcbiAgICAvLyBodG1sIOayoeWGheWuueWwseS4jeimgeiuvue9riBpbm5lckhUTUzkuoZcbiAgICAvLyDov5nph4zov5jog73pgb/lhY3lnKggSUUg5LiLIGNvbXBvbmVudCByb290IOS4uiBpbnB1dCDnrYnlhYPntKDml7borr7nva4gaW5uZXJIVE1MIOaKpemUmeeahOmXrumimFxuICAgIHZhciBodG1sID1cbiAgICAgICAgLy8gI1tiZWdpbl0gYWxsdWFcbiAgICAgICAgaWVPbGRUaGFuOVxuICAgICAgICAgICAgPyBidWYucmF3LmpvaW4oJycpXG4gICAgICAgICAgICA6XG5cbiAgICAgICAgLy8gI1tlbmRdXG4gICAgICAgICAgICBidWYucmF3O1xuXG4gICAgaWYgKCFodG1sKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAocG9zKSB7XG4gICAgICAgIHRhcmdldC5pbnNlcnRBZGphY2VudEhUTUwocG9zLCBodG1sKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRhcmdldC5pbm5lckhUTUwgPSBodG1sO1xuICAgIH1cblxuICAgIC8vIOWkhOeQhiBpZSDkvY7niYjmnKzkuIvoh6rliqjov4fmu6QgY29tbWVudCDnmoTpl67pophcbiAgICAvLyAjW2JlZ2luXSBhbGx1YVxuICAgIGlmIChpZU9sZFRoYW45KSB7XG4gICAgICAgIHZhciBpbnNlcnRDb21tZW50cyA9IGJ1Zi5pbnNlcnRDb21tZW50cztcbiAgICAgICAgdmFyIGxlbiA9IGluc2VydENvbW1lbnRzLmxlbmd0aDtcblxuICAgICAgICB3aGlsZSAobGVuLS0pIHtcbiAgICAgICAgICAgIHZhciBpbnNlcnRDb21tZW50ID0gaW5zZXJ0Q29tbWVudHNbbGVuXTtcbiAgICAgICAgICAgIHZhciBjb21tZW50Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoaW5zZXJ0Q29tbWVudFswXSk7XG4gICAgICAgICAgICB2YXIgaW5zZXJ0UGFyZW50RWwgPSBpbnNlcnRDb21tZW50WzFdID8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaW5zZXJ0Q29tbWVudFsxXSkgOiBudWxsO1xuICAgICAgICAgICAgdmFyIGluc2VydEJlZm9yZUVsID0gbnVsbDtcblxuICAgICAgICAgICAgaWYgKGluc2VydFBhcmVudEVsKSB7XG4gICAgICAgICAgICAgICAgaW5zZXJ0QmVmb3JlRWwgPSBpbnNlcnRQYXJlbnRFbC5maXJzdENoaWxkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChwb3MpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnYWZ0ZXJlbmQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXJ0UGFyZW50RWwgPSB0YXJnZXQucGFyZW50Tm9kZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluc2VydEJlZm9yZUVsID0gdGFyZ2V0Lm5leHRTaWJsaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnYmVmb3JlYmVnaW4nOlxuICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXJ0UGFyZW50RWwgPSB0YXJnZXQucGFyZW50Tm9kZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluc2VydEJlZm9yZUVsID0gdGFyZ2V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnYmVmb3JlZW5kJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGluc2VydFBhcmVudEVsID0gdGFyZ2V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXJ0QmVmb3JlRWwgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGluc2VydFBhcmVudEVsID0gdGFyZ2V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXJ0QmVmb3JlRWwgPSBpbnNlcnRQYXJlbnRFbC5maXJzdENoaWxkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaW5zZXJ0QmVmb3JlKGNvbW1lbnROb2RlLCBpbnNlcnRQYXJlbnRFbCwgaW5zZXJ0QmVmb3JlRWwpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vICNbZW5kXVxufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBvdXRwdXRIVE1MQnVmZmVyO1xuXG5cbi8qKlxuICogQGZpbGUg6L6T5Ye6IEhUTUwgYnVmZmVyIOWGheWuueWIsCBET00g5LiKXG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG4vLyB2YXIgb3V0cHV0SFRNTEJ1ZmZlciA9IHJlcXVpcmUoJy4vb3V0cHV0LWh0bWwtYnVmZmVyJyk7XG5cbi8qKlxuICog5bCGIEhUTUwgYnVmZmVyIOWGheWuueaPkuWFpeWIsCBET00g6IqC54K55LmL5YmNXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGJ1ZiBodG1s5a2X56ym5Liy6L+e5o6l5a+56LGhXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwYXJlbnRFbCDniLblhYPntKBcbiAqIEBwYXJhbSB7SFRNTE5vZGU/fSBiZWZvcmVFbCDlnKjmraToioLngrnkuYvliY3mj5LlhaVcbiAqL1xuZnVuY3Rpb24gb3V0cHV0SFRNTEJ1ZmZlckJlZm9yZShidWYsIHBhcmVudEVsLCBiZWZvcmVFbCkge1xuICAgIGlmIChiZWZvcmVFbCkge1xuICAgICAgICBpZiAoYmVmb3JlRWwubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgICAgICAgIG91dHB1dEhUTUxCdWZmZXIoYnVmLCBiZWZvcmVFbCwgJ2JlZm9yZWJlZ2luJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgdGVtcEZsYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgICAgIHBhcmVudEVsLmluc2VydEJlZm9yZSh0ZW1wRmxhZywgYmVmb3JlRWwpO1xuICAgICAgICAgICAgb3V0cHV0SFRNTEJ1ZmZlcihidWYsIHRlbXBGbGFnLCAnYmVmb3JlYmVnaW4nKTtcbiAgICAgICAgICAgIHBhcmVudEVsLnJlbW92ZUNoaWxkKHRlbXBGbGFnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgb3V0cHV0SFRNTEJ1ZmZlcihidWYsIHBhcmVudEVsLCAnYmVmb3JlZW5kJyk7XG4gICAgfVxufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBvdXRwdXRIVE1MQnVmZmVyQmVmb3JlO1xuXG5cbi8qKlxuICogQGZpbGUgIOiOt+WPluiKgueCuSBzdHVtcCDnmoTniLblhYPntKBcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cbi8qKlxuICog6I635Y+W6IqC54K5IHN0dW1wIOeahOeItuWFg+e0oFxuICogaWbjgIFmb3Ig6IqC54K555qEIGVsIHN0dW1wIOaYryBjb21tZW50IG5vZGXvvIzlnKggSUUg5LiL6L+Y5Y+v6IO95LiN5a2Y5ZyoXG4gKiDojrflj5blhbbniLblhYPntKDpgJrluLjnlKjkuo4gZWwg55qE5p+l5om+77yM5Lul5Y+K6KeG5Zu+5Y+Y5pu055qE5o+S5YWl5pON5L2cXG4gKlxuICogQHBhcmFtIHtOb2RlfSBub2RlIOiKgueCueWvueixoVxuICogQHJldHVybiB7SFRNTEVsZW1lbnR9XG4gKi9cbmZ1bmN0aW9uIGdldE5vZGVTdHVtcFBhcmVudChub2RlKSB7XG4gICAgaWYgKG5vZGUuZWwpIHtcbiAgICAgICAgcmV0dXJuIG5vZGUuZWwucGFyZW50Tm9kZTtcbiAgICB9XG5cbiAgICBub2RlID0gbm9kZS5wYXJlbnQ7XG4gICAgdmFyIHBhcmVudE5vZGU7XG4gICAgd2hpbGUgKG5vZGUpIHtcbiAgICAgICAgcGFyZW50Tm9kZSA9IG5vZGUuX2dldEVsKCk7XG4gICAgICAgIGlmIChwYXJlbnROb2RlKSB7XG4gICAgICAgICAgICB3aGlsZSAocGFyZW50Tm9kZSAmJiBwYXJlbnROb2RlLm5vZGVUeXBlICE9PSAxKSB7XG4gICAgICAgICAgICAgICAgcGFyZW50Tm9kZSA9IHBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgbm9kZSA9IG5vZGUucGFyZW50O1xuICAgIH1cblxuICAgIHJldHVybiBwYXJlbnROb2RlO1xufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBnZXROb2RlU3R1bXBQYXJlbnQ7XG5cblxuLyoqXG4gKiBAZmlsZSAg6I635Y+W6IqC54K5IHN0dW1wIOeahCBjb21tZW50XG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG5cbi8vIHZhciBnZXROb2RlU3R1bXBQYXJlbnQgPSByZXF1aXJlKCcuL2dldC1ub2RlLXN0dW1wLXBhcmVudCcpO1xuXG4vKipcbiAqIOiOt+WPluiKgueCuSBzdHVtcCDnmoQgY29tbWVudFxuICpcbiAqIEBwYXJhbSB7Tm9kZX0gbm9kZSDoioLngrnlr7nosaFcbiAqIEByZXR1cm4ge0NvbW1lbnR9XG4gKi9cbmZ1bmN0aW9uIGdldE5vZGVTdHVtcChub2RlKSB7XG4gICAgaWYgKHR5cGVvZiBub2RlLmVsID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB2YXIgcGFyZW50Tm9kZSA9IGdldE5vZGVTdHVtcFBhcmVudChub2RlKTtcbiAgICAgICAgdmFyIGVsID0gcGFyZW50Tm9kZS5maXJzdENoaWxkO1xuXG4gICAgICAgIHdoaWxlIChlbCkge1xuICAgICAgICAgICAgaWYgKGVsLm5vZGVUeXBlID09PSA4XG4gICAgICAgICAgICAgICAgJiYgZWwuZGF0YS5pbmRleE9mKG5vZGUuaWQpID09PSAwXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBpZiAobm9kZS5lbCkge1xuICAgICAgICAgICAgICAgICAgICBub2RlLnNlbCA9IG5vZGUuZWw7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbm9kZS5lbCA9IGVsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBlbCA9IGVsLm5leHRTaWJsaW5nO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGUuZWw7XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGdldE5vZGVTdHVtcDtcblxuXG4vKipcbiAqIEBmaWxlIOWIpOaWreWFg+e0oOaYr+WQpuS4jeWFgeiuuOiuvue9rkhUTUxcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cbi8vIHNvbWUgaHRtbCBlbGVtZW50cyBjYW5ub3Qgc2V0IGlubmVySFRNTCBpbiBvbGQgaWVcbi8vIHNlZTogaHR0cHM6Ly9tc2RuLm1pY3Jvc29mdC5jb20vZW4tdXMvbGlicmFyeS9tczUzMzg5NyhWUy44NSkuYXNweFxuXG4vKipcbiAqIOWIpOaWreWFg+e0oOaYr+WQpuS4jeWFgeiuuOiuvue9rkhUTUxcbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbCDopoHliKTmlq3nmoTlhYPntKBcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIG5vU2V0SFRNTChlbCkge1xuICAgIHJldHVybiAvXihjb2x8Y29sZ3JvdXB8ZnJhbWVzZXR8c3R5bGV8dGFibGV8dGJvZHl8dGZvb3R8dGhlYWR8dHJ8c2VsZWN0KSQvaS50ZXN0KGVsLnRhZ05hbWUpXG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IG5vU2V0SFRNTDtcblxuXG4vKipcbiAqIEBmaWxlICDojrflj5boioLngrkgc3R1bXAg55qEIGNvbW1lbnRcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cbi8vIHZhciBub1NldEhUTUwgPSByZXF1aXJlKCcuLi9icm93c2VyL25vLXNldC1odG1sJyk7XG5cbi8vICNbYmVnaW5dIGVycm9yXG4vKipcbiAqIOiOt+WPluiKgueCuSBzdHVtcCDnmoQgY29tbWVudFxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsIEhUTUzlhYPntKBcbiAqL1xuZnVuY3Rpb24gd2FyblNldEhUTUwoZWwpIHtcbiAgICAvLyBkb250IHdhcm4gaWYgbm90IGluIGJyb3dzZXIgcnVudGltZVxuICAgIGlmICghKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIHNvbWUgaHRtbCBlbGVtZW50cyBjYW5ub3Qgc2V0IGlubmVySFRNTCBpbiBvbGQgaWVcbiAgICAvLyBzZWU6IGh0dHBzOi8vbXNkbi5taWNyb3NvZnQuY29tL2VuLXVzL2xpYnJhcnkvbXM1MzM4OTcoVlMuODUpLmFzcHhcbiAgICBpZiAobm9TZXRIVE1MKGVsKSkge1xuICAgICAgICB2YXIgbWVzc2FnZSA9ICdbU0FOIFdBUk5JTkddIHNldCBodG1sIGZvciBlbGVtZW50IFwiJyArIGVsLnRhZ05hbWVcbiAgICAgICAgICAgICsgJ1wiIG1heSBjYXVzZSBhbiBlcnJvciBpbiBvbGQgSUUnO1xuICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG4gICAgICAgIGlmICh0eXBlb2YgY29uc29sZSA9PT0gJ29iamVjdCcgJiYgY29uc29sZS53YXJuKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4obWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgICAgLyogZXNsaW50LWVuYWJsZSBuby1jb25zb2xlICovXG4gICAgfVxufVxuLy8gI1tlbmRdXG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHdhcm5TZXRIVE1MO1xuXG5cbi8qKlxuICogQGZpbGUg5Yik5pat5piv5ZCm57uT5p2f5qGpXG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG4vLyAjW2JlZ2luXSByZXZlcnNlXG4vKipcbiAqIOWIpOaWreaYr+WQpue7k+adn+ahqVxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR8SFRNTENvbW1lbnR9IHRhcmdldCDopoHliKTmlq3nmoTlhYPntKBcbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIOahqeexu+Wei1xuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaXNFbmRTdHVtcCh0YXJnZXQsIHR5cGUpIHtcbiAgICByZXR1cm4gdGFyZ2V0Lm5vZGVUeXBlID09PSA4ICYmIHRhcmdldC5kYXRhID09PSAnL3MtJyArIHR5cGU7XG59XG4vLyAjW2VuZF1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gaXNFbmRTdHVtcDtcblxuXG4vKipcbiAqIEBmaWxlIOiOt+WPluiKgueCueWcqOe7hOS7tuagkeS4reeahOi3r+W+hFxuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuXG4vLyB2YXIgTm9kZVR5cGUgPSByZXF1aXJlKCcuL25vZGUtdHlwZScpO1xuXG4vLyAjW2JlZ2luXSByZXZlcnNlXG4vKipcbiAqIOiOt+WPluiKgueCueWcqOe7hOS7tuagkeS4reeahOi3r+W+hFxuICpcbiAqIEBwYXJhbSB7Tm9kZX0gbm9kZSDoioLngrnlr7nosaFcbiAqIEByZXR1cm4ge0FycmF5fVxuICovXG5mdW5jdGlvbiBnZXROb2RlUGF0aChub2RlKSB7XG4gICAgdmFyIG5vZGVQYXRocyA9IFtdO1xuICAgIHZhciBub2RlUGFyZW50ID0gbm9kZTtcbiAgICB3aGlsZSAobm9kZVBhcmVudCkge1xuICAgICAgICBzd2l0Y2ggKG5vZGVQYXJlbnQubm9kZVR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgTm9kZVR5cGUuRUxFTTpcbiAgICAgICAgICAgICAgICBub2RlUGF0aHMudW5zaGlmdChub2RlUGFyZW50LnRhZ05hbWUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIE5vZGVUeXBlLklGOlxuICAgICAgICAgICAgICAgIG5vZGVQYXRocy51bnNoaWZ0KCdpZicpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIE5vZGVUeXBlLkZPUjpcbiAgICAgICAgICAgICAgICBub2RlUGF0aHMudW5zaGlmdCgnZm9yWycgKyBub2RlUGFyZW50LmFub2RlLmRpcmVjdGl2ZXNbJ2ZvciddLnJhdyArICddJyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZG90LW5vdGF0aW9uXG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgTm9kZVR5cGUuU0xPVDpcbiAgICAgICAgICAgICAgICBub2RlUGF0aHMudW5zaGlmdCgnc2xvdFsnICsgKG5vZGVQYXJlbnQubmFtZSB8fCAnZGVmYXVsdCcpICsgJ10nKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBOb2RlVHlwZS5UUEw6XG4gICAgICAgICAgICAgICAgbm9kZVBhdGhzLnVuc2hpZnQoJ3RlbXBsYXRlJyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgTm9kZVR5cGUuQ01QVDpcbiAgICAgICAgICAgICAgICBub2RlUGF0aHMudW5zaGlmdCgnY29tcG9uZW50WycgKyAobm9kZVBhcmVudC5zdWJUYWcgfHwgJ3Jvb3QnKSArICddJyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgTm9kZVR5cGUuVEVYVDpcbiAgICAgICAgICAgICAgICBub2RlUGF0aHMudW5zaGlmdCgndGV4dCcpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgbm9kZVBhcmVudCA9IG5vZGVQYXJlbnQucGFyZW50O1xuICAgIH1cblxuICAgIHJldHVybiBub2RlUGF0aHM7XG59XG4vLyAjW2VuZF1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZ2V0Tm9kZVBhdGg7XG5cblxuLyoqXG4gKiBAZmlsZSB0ZXh0IOiKgueCueexu1xuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuLy8gdmFyIGVhY2ggPSByZXF1aXJlKCcuLi91dGlsL2VhY2gnKTtcbi8vIHZhciBpc0Jyb3dzZXIgPSByZXF1aXJlKCcuLi9icm93c2VyL2lzLWJyb3dzZXInKTtcbi8vIHZhciByZW1vdmVFbCA9IHJlcXVpcmUoJy4uL2Jyb3dzZXIvcmVtb3ZlLWVsJyk7XG4vLyB2YXIgaW5zZXJ0QmVmb3JlID0gcmVxdWlyZSgnLi4vYnJvd3Nlci9pbnNlcnQtYmVmb3JlJyk7XG4vLyB2YXIgY3JlYXRlSFRNTEJ1ZmZlciA9IHJlcXVpcmUoJy4uL3J1bnRpbWUvY3JlYXRlLWh0bWwtYnVmZmVyJyk7XG4vLyB2YXIgaHRtbEJ1ZmZlclB1c2ggPSByZXF1aXJlKCcuLi9ydW50aW1lL2h0bWwtYnVmZmVyLXB1c2gnKTtcbi8vIHZhciBodG1sQnVmZmVyQ29tbWVudCA9IHJlcXVpcmUoJy4uL3J1bnRpbWUvaHRtbC1idWZmZXItY29tbWVudCcpO1xuLy8gdmFyIG91dHB1dEhUTUxCdWZmZXJCZWZvcmUgPSByZXF1aXJlKCcuLi9ydW50aW1lL291dHB1dC1odG1sLWJ1ZmZlci1iZWZvcmUnKTtcbi8vIHZhciBjaGFuZ2VFeHByQ29tcGFyZSA9IHJlcXVpcmUoJy4uL3J1bnRpbWUvY2hhbmdlLWV4cHItY29tcGFyZScpO1xuLy8gdmFyIGV2YWxFeHByID0gcmVxdWlyZSgnLi4vcnVudGltZS9ldmFsLWV4cHInKTtcbi8vIHZhciBOb2RlVHlwZSA9IHJlcXVpcmUoJy4vbm9kZS10eXBlJyk7XG4vLyB2YXIgZ2V0Tm9kZVN0dW1wID0gcmVxdWlyZSgnLi9nZXQtbm9kZS1zdHVtcCcpO1xuLy8gdmFyIHdhcm5TZXRIVE1MID0gcmVxdWlyZSgnLi93YXJuLXNldC1odG1sJyk7XG4vLyB2YXIgaXNFbmRTdHVtcCA9IHJlcXVpcmUoJy4vaXMtZW5kLXN0dW1wJyk7XG4vLyB2YXIgZ2V0Tm9kZVBhdGggPSByZXF1aXJlKCcuL2dldC1ub2RlLXBhdGgnKTtcblxuXG4vKipcbiAqIHRleHQg6IqC54K557G7XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGFOb2RlIOaKveixoeiKgueCuVxuICogQHBhcmFtIHtDb21wb25lbnR9IG93bmVyIOaJgOWxnue7hOS7tueOr+Wig1xuICogQHBhcmFtIHtNb2RlbD19IHNjb3BlIOaJgOWxnuaVsOaNrueOr+Wig1xuICogQHBhcmFtIHtOb2RlfSBwYXJlbnQg54i25Lqy6IqC54K5XG4gKiBAcGFyYW0ge0RPTUNoaWxkcmVuV2Fsa2VyP30gcmV2ZXJzZVdhbGtlciDlrZDlhYPntKDpgY3ljoblr7nosaFcbiAqL1xuZnVuY3Rpb24gVGV4dE5vZGUoYU5vZGUsIG93bmVyLCBzY29wZSwgcGFyZW50LCByZXZlcnNlV2Fsa2VyKSB7XG4gICAgdGhpcy5hTm9kZSA9IGFOb2RlO1xuICAgIHRoaXMub3duZXIgPSBvd25lcjtcbiAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG5cbiAgICAvLyAjW2JlZ2luXSByZXZlcnNlXG4gICAgaWYgKHJldmVyc2VXYWxrZXIpIHtcbiAgICAgICAgdmFyIGN1cnJlbnROb2RlID0gcmV2ZXJzZVdhbGtlci5jdXJyZW50O1xuICAgICAgICBpZiAoY3VycmVudE5vZGUpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoY3VycmVudE5vZGUubm9kZVR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50Tm9kZS5kYXRhID09PSAncy10ZXh0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudE5vZGUuZGF0YSA9IHRoaXMuaWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXZlcnNlV2Fsa2VyLmdvTmV4dCgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAoMSkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudE5vZGUgPSByZXZlcnNlV2Fsa2VyLmN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjdXJyZW50Tm9kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tTQU4gUkVWRVJTRSBFUlJPUl0gVGV4dCBlbmQgZmxhZyBub3QgZm91bmQuIFxcblBhdGhzOiAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIGdldE5vZGVQYXRoKHRoaXMpLmpvaW4oJyA+ICcpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNFbmRTdHVtcChjdXJyZW50Tm9kZSwgJ3RleHQnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXZlcnNlV2Fsa2VyLmdvTmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50Tm9kZS5kYXRhID0gdGhpcy5pZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV2ZXJzZVdhbGtlci5nb05leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgcmV2ZXJzZVdhbGtlci5nb05leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmFOb2RlLnRleHRFeHByLm9yaWdpbmFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVsID0gY3VycmVudE5vZGU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gI1tlbmRdXG59XG5cblRleHROb2RlLnByb3RvdHlwZS5ub2RlVHlwZSA9IE5vZGVUeXBlLlRFWFQ7XG5cbi8qKlxuICog5bCGdGV4dCBhdHRhY2jliLDpobXpnaJcbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwYXJlbnRFbCDopoHmt7vliqDliLDnmoTniLblhYPntKBcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnTvvJ19IGJlZm9yZUVsIOimgea3u+WKoOWIsOWTquS4quWFg+e0oOS5i+WJjVxuICovXG5UZXh0Tm9kZS5wcm90b3R5cGUuYXR0YWNoID0gZnVuY3Rpb24gKHBhcmVudEVsLCBiZWZvcmVFbCkge1xuICAgIHZhciBidWYgPSBjcmVhdGVIVE1MQnVmZmVyKCk7XG4gICAgdGhpcy5fYXR0YWNoSFRNTChidWYpO1xuICAgIG91dHB1dEhUTUxCdWZmZXJCZWZvcmUoYnVmLCBwYXJlbnRFbCwgYmVmb3JlRWwpO1xufTtcblxuLyoqXG4gKiDplIDmr4EgdGV4dCDoioLngrlcbiAqL1xuVGV4dE5vZGUucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5fcHJldiA9IG51bGw7XG4gICAgdGhpcy5lbCA9IG51bGw7XG59O1xuXG4vKipcbiAqIOiOt+WPluaWh+acrOiKgueCueWvueW6lOeahOS4u+WFg+e0oFxuICpcbiAqIEByZXR1cm4ge0hUTUxDb21tZW50fEhUTUxUZXh0Tm9kZX1cbiAqL1xuVGV4dE5vZGUucHJvdG90eXBlLl9nZXRFbCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5lbCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbDtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuYU5vZGUudGV4dEV4cHIub3JpZ2luYWwpIHtcbiAgICAgICAgdmFyIHBhcmVudCA9IHRoaXMucGFyZW50O1xuICAgICAgICB2YXIgcHJldjtcblxuICAgICAgICB2YXIgbWUgPSB0aGlzO1xuICAgICAgICBlYWNoKHBhcmVudC5jaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkLCBpKSB7XG4gICAgICAgICAgICBpZiAoY2hpbGQgPT09IG1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwcmV2ID0gY2hpbGQ7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhciBwYXJlbnRFbCA9IHBhcmVudC5fZ2V0RWwoKTtcbiAgICAgICAgaWYgKHBhcmVudEVsLm5vZGVUeXBlICE9PSAxKSB7XG4gICAgICAgICAgICBwYXJlbnRFbCA9IHBhcmVudEVsLnBhcmVudE5vZGU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcHJldkVsID0gcHJldiAmJiBwcmV2Ll9nZXRFbCgpICYmIHByZXYuZWwubmV4dFNpYmxpbmc7XG4gICAgICAgIGlmICghcHJldkVsKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKHBhcmVudC5ub2RlVHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgTm9kZVR5cGUuVFBMOlxuICAgICAgICAgICAgICAgIGNhc2UgTm9kZVR5cGUuU0xPVDpcbiAgICAgICAgICAgICAgICAgICAgcHJldkVsID0gcGFyZW50LnNlbC5uZXh0U2libGluZztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgcHJldkVsID0gcGFyZW50RWwuZmlyc3RDaGlsZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICAgICAgaWYgKHRoaXMuY29udGVudCkge1xuICAgICAgICAgICAgdGhpcy5lbCA9IHByZXZFbDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZWwgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG4gICAgICAgICAgICBpbnNlcnRCZWZvcmUodGhpcy5lbCwgcGFyZW50RWwsIHByZXZFbCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZ2V0Tm9kZVN0dW1wKHRoaXMpO1xufSxcblxuLyoqXG4gKiBhdHRhY2ggdGV4dCDoioLngrnnmoQgaHRtbFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBidWYgaHRtbOS4suWtmOWCqOWvueixoVxuICovXG5UZXh0Tm9kZS5wcm90b3R5cGUuX2F0dGFjaEhUTUwgPSBmdW5jdGlvbiAoYnVmKSB7XG4gICAgdGhpcy5jb250ZW50ID0gZXZhbEV4cHIodGhpcy5hTm9kZS50ZXh0RXhwciwgdGhpcy5zY29wZSwgdGhpcy5vd25lciwgMSk7XG5cbiAgICBpZiAodGhpcy5hTm9kZS50ZXh0RXhwci5vcmlnaW5hbCkge1xuICAgICAgICBodG1sQnVmZmVyQ29tbWVudChidWYsIHRoaXMuaWQpO1xuICAgIH1cblxuICAgIGh0bWxCdWZmZXJQdXNoKGJ1ZiwgdGhpcy5jb250ZW50KTtcblxuICAgIGlmICh0aGlzLmFOb2RlLnRleHRFeHByLm9yaWdpbmFsKSB7XG4gICAgICAgIGh0bWxCdWZmZXJDb21tZW50KGJ1ZiwgdGhpcy5pZCk7XG4gICAgfVxufTtcblxudmFyIHRleHRVcGRhdGVQcm9wID0gaXNCcm93c2VyXG4gICAgJiYgKHR5cGVvZiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJykudGV4dENvbnRlbnQgPT09ICdzdHJpbmcnXG4gICAgICAgID8gJ3RleHRDb250ZW50J1xuICAgICAgICA6ICdkYXRhJyk7XG5cbi8qKlxuICog5pu05pawIHRleHQg6IqC54K555qE6KeG5Zu+XG4gKlxuICogQHBhcmFtIHtBcnJheX0gY2hhbmdlcyDmlbDmja7lj5jljJbkv6Hmga9cbiAqL1xuVGV4dE5vZGUucHJvdG90eXBlLl91cGRhdGUgPSBmdW5jdGlvbiAoY2hhbmdlcykge1xuICAgIGlmICh0aGlzLmFOb2RlLnRleHRFeHByLnZhbHVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgZWwgPSB0aGlzLl9nZXRFbCgpO1xuXG4gICAgdmFyIGxlbiA9IGNoYW5nZXMgPyBjaGFuZ2VzLmxlbmd0aCA6IDA7XG4gICAgd2hpbGUgKGxlbi0tKSB7XG4gICAgICAgIGlmIChjaGFuZ2VFeHByQ29tcGFyZShjaGFuZ2VzW2xlbl0uZXhwciwgdGhpcy5hTm9kZS50ZXh0RXhwciwgdGhpcy5zY29wZSkpIHtcbiAgICAgICAgICAgIHZhciB0ZXh0ID0gZXZhbEV4cHIodGhpcy5hTm9kZS50ZXh0RXhwciwgdGhpcy5zY29wZSwgdGhpcy5vd25lciwgMSk7XG5cbiAgICAgICAgICAgIGlmICh0ZXh0ICE9PSB0aGlzLmNvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnQgPSB0ZXh0O1xuICAgICAgICAgICAgICAgIHZhciByYXdUZXh0ID0gZXZhbEV4cHIodGhpcy5hTm9kZS50ZXh0RXhwciwgdGhpcy5zY29wZSwgdGhpcy5vd25lcik7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hTm9kZS50ZXh0RXhwci5vcmlnaW5hbCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc3RhcnRSZW1vdmVFbCA9IHRoaXMuc2VsLm5leHRTaWJsaW5nO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcGFyZW50RWwgPSBlbC5wYXJlbnROb2RlO1xuXG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChzdGFydFJlbW92ZUVsICE9PSBlbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlbW92ZVRhcmdldCA9IHN0YXJ0UmVtb3ZlRWw7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydFJlbW92ZUVsID0gc3RhcnRSZW1vdmVFbC5uZXh0U2libGluZztcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZUVsKHJlbW92ZVRhcmdldCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyAjW2JlZ2luXSBlcnJvclxuICAgICAgICAgICAgICAgICAgICB3YXJuU2V0SFRNTChwYXJlbnRFbCk7XG4gICAgICAgICAgICAgICAgICAgIC8vICNbZW5kXVxuXG4gICAgICAgICAgICAgICAgICAgIHZhciB0ZW1wRmxhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnRFbC5pbnNlcnRCZWZvcmUodGVtcEZsYWcsIGVsKTtcbiAgICAgICAgICAgICAgICAgICAgdGVtcEZsYWcuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmViZWdpbicsIHRleHQpO1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnRFbC5yZW1vdmVDaGlsZCh0ZW1wRmxhZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlbFt0ZXh0VXBkYXRlUHJvcF0gPSByYXdUZXh0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gVGV4dE5vZGU7XG5cblxuLyoqXG4gKiBAZmlsZSDliKTmlq3lj5jmm7TmlbDnu4TmmK/lkKblvbHlk43liLDmlbDmja7lvJXnlKjmkZjopoFcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cbi8vIHZhciBlYWNoID0gcmVxdWlyZSgnLi4vdXRpbC9lYWNoJyk7XG5cbi8qKlxuICog5Yik5pat5Y+Y5pu05pWw57uE5piv5ZCm5b2x5ZON5Yiw5pWw5o2u5byV55So5pGY6KaBXG4gKlxuICogQHBhcmFtIHtBcnJheX0gY2hhbmdlcyDlj5jmm7TmlbDnu4RcbiAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhUmVmIOaVsOaNruW8leeUqOaRmOimgVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gY2hhbmdlc0lzSW5EYXRhUmVmKGNoYW5nZXMsIGRhdGFSZWYpIHtcbiAgICB2YXIgcmVzdWx0O1xuXG4gICAgZWFjaChjaGFuZ2VzLCBmdW5jdGlvbiAoY2hhbmdlKSB7XG4gICAgICAgIGlmICghY2hhbmdlLm92ZXJ2aWV3KSB7XG4gICAgICAgICAgICB2YXIgcGF0aHMgPSBjaGFuZ2UuZXhwci5wYXRocztcbiAgICAgICAgICAgIGNoYW5nZS5vdmVydmlldyA9IHBhdGhzWzBdLnZhbHVlO1xuXG4gICAgICAgICAgICBpZiAocGF0aHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgIGNoYW5nZS5leHRPdmVydmlldyA9IHBhdGhzWzBdLnZhbHVlICsgJy4nICsgcGF0aHNbMV0udmFsdWU7XG4gICAgICAgICAgICAgICAgY2hhbmdlLndpbGRPdmVydmlldyA9IHBhdGhzWzBdLnZhbHVlICsgJy4qJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJlc3VsdCA9IGRhdGFSZWZbY2hhbmdlLm92ZXJ2aWV3XVxuICAgICAgICAgICAgfHwgY2hhbmdlLndpbGRPdmVydmlldyAmJiBkYXRhUmVmW2NoYW5nZS53aWxkT3ZlcnZpZXddXG4gICAgICAgICAgICB8fCBjaGFuZ2UuZXh0T3ZlcnZpZXcgJiYgZGF0YVJlZltjaGFuZ2UuZXh0T3ZlcnZpZXddO1xuXG4gICAgICAgIHJldHVybiAhcmVzdWx0O1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gY2hhbmdlc0lzSW5EYXRhUmVmO1xuXG5cbi8qKlxuICogQGZpbGUgYXR0YWNoaW5nIOeahCBlbGVtZW50IOWSjCBjb21wb25lbnQg5rGgXG4gICAgICAgICDlrozmiJAgaHRtbCBmaWxsIOWQjuaJp+ihjCBhdHRhY2hlZCDmk43kvZzvvIzov5vooYzkuovku7bnu5HlrprnrYnlkI7nu63ooYzkuLpcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cblxuLyoqXG4gKiBhdHRhY2hpbmcg55qEIGVsZW1lbnQg5ZKMIGNvbXBvbmVudCDpm4blkIhcbiAqXG4gKiBAaW5uZXJcbiAqIEB0eXBlIHtBcnJheX1cbiAqL1xudmFyIGF0dGFjaGluZ05vZGVzID0gW107XG5cbi8qKlxuICogYXR0YWNoaW5nIOaTjeS9nOWvueixoVxuICpcbiAqIEB0eXBlIHtPYmplY3R9XG4gKi9cbnZhciBhdHRhY2hpbmdzID0ge1xuXG4gICAgLyoqXG4gICAgICog5re75YqgIGF0dGFjaGluZyDnmoQgZWxlbWVudCDmiJYgY29tcG9uZW50XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdHxDb21wb25lbnR9IG5vZGUgYXR0YWNoaW5n55qEbm9kZVxuICAgICAqL1xuICAgIGFkZDogZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgYXR0YWNoaW5nTm9kZXMucHVzaChub2RlKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog5omn6KGMIGF0dGFjaGluZyDlrozmiJDooYzkuLpcbiAgICAgKi9cbiAgICBkb25lOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBub2RlcyA9IGF0dGFjaGluZ05vZGVzLnNsaWNlKDApO1xuICAgICAgICBhdHRhY2hpbmdOb2RlcyA9IFtdO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gbm9kZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICBub2Rlc1tpXS5fYXR0YWNoZWQoKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGF0dGFjaGluZ3M7XG5cblxuLyoqXG4gKiBAZmlsZSDlhYPntKDlrZDoioLngrnpgY3ljobmk43kvZznsbtcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cbi8vIHZhciByZW1vdmVFbCA9IHJlcXVpcmUoJy4uL2Jyb3dzZXIvcmVtb3ZlLWVsJyk7XG5cbi8vICNbYmVnaW5dIHJldmVyc2Vcbi8qKlxuICog5YWD57Sg5a2Q6IqC54K56YGN5Y6G5pON5L2c57G7XG4gKlxuICogQGlubmVyXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsIOimgemBjeWOhueahOWFg+e0oFxuICovXG5mdW5jdGlvbiBET01DaGlsZHJlbldhbGtlcihlbCkge1xuICAgIHRoaXMucmF3ID0gW107XG4gICAgdGhpcy5pbmRleCA9IDA7XG4gICAgdGhpcy50YXJnZXQgPSBlbDtcblxuICAgIHZhciBjaGlsZCA9IGVsLmZpcnN0Q2hpbGQ7XG4gICAgdmFyIG5leHQ7XG4gICAgd2hpbGUgKGNoaWxkKSB7XG4gICAgICAgIG5leHQgPSBjaGlsZC5uZXh0U2libGluZztcblxuICAgICAgICBzd2l0Y2ggKGNoaWxkLm5vZGVUeXBlKSB7XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgaWYgKC9eXFxzKiQvLnRlc3QoY2hpbGQuZGF0YSB8fCBjaGlsZC50ZXh0Q29udGVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlRWwoY2hpbGQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yYXcucHVzaChjaGlsZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICAgICAgdGhpcy5yYXcucHVzaChjaGlsZCk7XG4gICAgICAgIH1cblxuICAgICAgICBjaGlsZCA9IG5leHQ7XG4gICAgfVxuXG4gICAgdGhpcy5jdXJyZW50ID0gdGhpcy5yYXdbdGhpcy5pbmRleF07XG4gICAgdGhpcy5uZXh0ID0gdGhpcy5yYXdbdGhpcy5pbmRleCArIDFdO1xufVxuXG4vKipcbiAqIOW+gOS4i+i1sOS4gOS4quWFg+e0oFxuICovXG5ET01DaGlsZHJlbldhbGtlci5wcm90b3R5cGUuZ29OZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuY3VycmVudCA9IHRoaXMucmF3WysrdGhpcy5pbmRleF07XG4gICAgdGhpcy5uZXh0ID0gdGhpcy5yYXdbdGhpcy5pbmRleCArIDFdO1xufTtcbi8vICNbZW5kXVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBET01DaGlsZHJlbldhbGtlcjtcblxuXG4vKipcbiAqIEBmaWxlIOWFg+e0oOiKgueCueexu1xuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuXG4vLyB2YXIgZWFjaCA9IHJlcXVpcmUoJy4uL3V0aWwvZWFjaCcpO1xuLy8gdmFyIGd1aWQgPSByZXF1aXJlKCcuLi91dGlsL2d1aWQnKTtcbi8vIHZhciByZW1vdmVFbCA9IHJlcXVpcmUoJy4uL2Jyb3dzZXIvcmVtb3ZlLWVsJyk7XG4vLyB2YXIgY2hhbmdlRXhwckNvbXBhcmUgPSByZXF1aXJlKCcuLi9ydW50aW1lL2NoYW5nZS1leHByLWNvbXBhcmUnKTtcbi8vIHZhciBjaGFuZ2VzSXNJbkRhdGFSZWYgPSByZXF1aXJlKCcuLi9ydW50aW1lL2NoYW5nZXMtaXMtaW4tZGF0YS1yZWYnKTtcbi8vIHZhciBldmFsRXhwciA9IHJlcXVpcmUoJy4uL3J1bnRpbWUvZXZhbC1leHByJyk7XG4vLyB2YXIgYXR0YWNoaW5ncyA9IHJlcXVpcmUoJy4vYXR0YWNoaW5ncycpO1xuLy8gdmFyIExpZmVDeWNsZSA9IHJlcXVpcmUoJy4vbGlmZS1jeWNsZScpO1xuLy8gdmFyIE5vZGVUeXBlID0gcmVxdWlyZSgnLi9ub2RlLXR5cGUnKTtcbi8vIHZhciByZXZlcnNlRWxlbWVudENoaWxkcmVuID0gcmVxdWlyZSgnLi9yZXZlcnNlLWVsZW1lbnQtY2hpbGRyZW4nKTtcbi8vIHZhciBpc0RhdGFDaGFuZ2VCeUVsZW1lbnQgPSByZXF1aXJlKCcuL2lzLWRhdGEtY2hhbmdlLWJ5LWVsZW1lbnQnKTtcbi8vIHZhciBlbGVtZW50VXBkYXRlQ2hpbGRyZW4gPSByZXF1aXJlKCcuL2VsZW1lbnQtdXBkYXRlLWNoaWxkcmVuJyk7XG4vLyB2YXIgZWxlbWVudE93bkF0dGFjaEhUTUwgPSByZXF1aXJlKCcuL2VsZW1lbnQtb3duLWF0dGFjaC1odG1sJyk7XG4vLyB2YXIgZWxlbWVudE93bkNyZWF0ZSA9IHJlcXVpcmUoJy4vZWxlbWVudC1vd24tY3JlYXRlJyk7XG4vLyB2YXIgZWxlbWVudE93bkF0dGFjaCA9IHJlcXVpcmUoJy4vZWxlbWVudC1vd24tYXR0YWNoJyk7XG4vLyB2YXIgZWxlbWVudE93bkRldGFjaCA9IHJlcXVpcmUoJy4vZWxlbWVudC1vd24tZGV0YWNoJyk7XG4vLyB2YXIgZWxlbWVudE93bkRpc3Bvc2UgPSByZXF1aXJlKCcuL2VsZW1lbnQtb3duLWRpc3Bvc2UnKTtcbi8vIHZhciBlbGVtZW50T3duR2V0RWwgPSByZXF1aXJlKCcuL2VsZW1lbnQtb3duLWdldC1lbCcpO1xuLy8gdmFyIGVsZW1lbnRPd25HZXRFbElkID0gcmVxdWlyZSgnLi9lbGVtZW50LW93bi1nZXQtZWwtaWQnKTtcbi8vIHZhciBlbGVtZW50T3duT25FbCA9IHJlcXVpcmUoJy4vZWxlbWVudC1vd24tb24tZWwnKTtcbi8vIHZhciBlbGVtZW50T3duVG9QaGFzZSA9IHJlcXVpcmUoJy4vZWxlbWVudC1vd24tdG8tcGhhc2UnKTtcbi8vIHZhciBlbGVtZW50QXR0YWNoZWQgPSByZXF1aXJlKCcuL2VsZW1lbnQtYXR0YWNoZWQnKTtcbi8vIHZhciBlbGVtZW50RGlzcG9zZSA9IHJlcXVpcmUoJy4vZWxlbWVudC1kaXNwb3NlJyk7XG4vLyB2YXIgZWxlbWVudEluaXRUYWdOYW1lID0gcmVxdWlyZSgnLi9lbGVtZW50LWluaXQtdGFnLW5hbWUnKTtcbi8vIHZhciBoYW5kbGVQcm9wID0gcmVxdWlyZSgnLi9oYW5kbGUtcHJvcCcpO1xuLy8gdmFyIHdhcm5TZXRIVE1MID0gcmVxdWlyZSgnLi93YXJuLXNldC1odG1sJyk7XG4vLyB2YXIgZ2V0Tm9kZVBhdGggPSByZXF1aXJlKCcuL2dldC1ub2RlLXBhdGgnKTtcblxuLyoqXG4gKiDlhYPntKDoioLngrnnsbtcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gYU5vZGUg5oq96LGh6IqC54K5XG4gKiBAcGFyYW0ge0NvbXBvbmVudH0gb3duZXIg5omA5bGe57uE5Lu2546v5aKDXG4gKiBAcGFyYW0ge01vZGVsPX0gc2NvcGUg5omA5bGe5pWw5o2u546v5aKDXG4gKiBAcGFyYW0ge05vZGV9IHBhcmVudCDniLbkurLoioLngrlcbiAqIEBwYXJhbSB7RE9NQ2hpbGRyZW5XYWxrZXI/fSByZXZlcnNlV2Fsa2VyIOWtkOWFg+e0oOmBjeWOhuWvueixoVxuICovXG5mdW5jdGlvbiBFbGVtZW50KGFOb2RlLCBvd25lciwgc2NvcGUsIHBhcmVudCwgcmV2ZXJzZVdhbGtlcikge1xuICAgIHRoaXMuYU5vZGUgPSBhTm9kZTtcbiAgICB0aGlzLm93bmVyID0gb3duZXI7XG4gICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuXG4gICAgdGhpcy5saWZlQ3ljbGUgPSBMaWZlQ3ljbGUuc3RhcnQ7XG4gICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xuICAgIHRoaXMuX2VsRm5zID0gW107XG4gICAgdGhpcy5wYXJlbnRDb21wb25lbnQgPSBwYXJlbnQubm9kZVR5cGUgPT09IE5vZGVUeXBlLkNNUFRcbiAgICAgICAgPyBwYXJlbnRcbiAgICAgICAgOiBwYXJlbnQucGFyZW50Q29tcG9uZW50O1xuXG4gICAgdGhpcy5pZCA9IGd1aWQoKTtcblxuICAgIGVsZW1lbnRJbml0VGFnTmFtZSh0aGlzKTtcblxuICAgIHRoaXMuX3RvUGhhc2UoJ2luaXRlZCcpO1xuXG4gICAgLy8gI1tiZWdpbl0gcmV2ZXJzZVxuICAgIGlmIChyZXZlcnNlV2Fsa2VyKSB7XG4gICAgICAgIHZhciBjdXJyZW50Tm9kZSA9IHJldmVyc2VXYWxrZXIuY3VycmVudDtcblxuICAgICAgICBpZiAoIWN1cnJlbnROb2RlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tTQU4gUkVWRVJTRSBFUlJPUl0gRWxlbWVudCBub3QgZm91bmQuIFxcblBhdGhzOiAnXG4gICAgICAgICAgICAgICAgKyBnZXROb2RlUGF0aCh0aGlzKS5qb2luKCcgPiAnKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY3VycmVudE5vZGUubm9kZVR5cGUgIT09IDEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignW1NBTiBSRVZFUlNFIEVSUk9SXSBFbGVtZW50IHR5cGUgbm90IG1hdGNoLCBleHBlY3QgMSBidXQgJ1xuICAgICAgICAgICAgICAgICsgY3VycmVudE5vZGUubm9kZVR5cGUgKyAnLlxcblBhdGhzOiAnXG4gICAgICAgICAgICAgICAgKyBnZXROb2RlUGF0aCh0aGlzKS5qb2luKCcgPiAnKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY3VycmVudE5vZGUudGFnTmFtZS50b0xvd2VyQ2FzZSgpICE9PSB0aGlzLnRhZ05hbWUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignW1NBTiBSRVZFUlNFIEVSUk9SXSBFbGVtZW50IHRhZ05hbWUgbm90IG1hdGNoLCBleHBlY3QgJ1xuICAgICAgICAgICAgICAgICsgdGhpcy50YWdOYW1lICsgJyBidXQgbWVhdCAnICsgY3VycmVudE5vZGUudGFnTmFtZS50b0xvd2VyQ2FzZSgpICsgJy5cXG5QYXRoczogJ1xuICAgICAgICAgICAgICAgICsgZ2V0Tm9kZVBhdGgodGhpcykuam9pbignID4gJykpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5lbCA9IGN1cnJlbnROb2RlO1xuICAgICAgICB0aGlzLmVsLmlkID0gdGhpcy5fZ2V0RWxJZCgpO1xuICAgICAgICByZXZlcnNlV2Fsa2VyLmdvTmV4dCgpO1xuXG4gICAgICAgIHJldmVyc2VFbGVtZW50Q2hpbGRyZW4odGhpcyk7XG5cbiAgICAgICAgYXR0YWNoaW5ncy5hZGQodGhpcyk7XG4gICAgfVxuICAgIC8vICNbZW5kXVxufVxuXG5cblxuRWxlbWVudC5wcm90b3R5cGUubm9kZVR5cGUgPSBOb2RlVHlwZS5FTEVNO1xuXG5cbkVsZW1lbnQucHJvdG90eXBlLmF0dGFjaCA9IGVsZW1lbnRPd25BdHRhY2g7XG5FbGVtZW50LnByb3RvdHlwZS5kZXRhY2ggPSBlbGVtZW50T3duRGV0YWNoO1xuRWxlbWVudC5wcm90b3R5cGUuZGlzcG9zZSA9IGVsZW1lbnRPd25EaXNwb3NlO1xuRWxlbWVudC5wcm90b3R5cGUuX2F0dGFjaEhUTUwgPSBlbGVtZW50T3duQXR0YWNoSFRNTDtcbkVsZW1lbnQucHJvdG90eXBlLl9jcmVhdGUgPSBlbGVtZW50T3duQ3JlYXRlO1xuRWxlbWVudC5wcm90b3R5cGUuX2dldEVsID0gZWxlbWVudE93bkdldEVsO1xuRWxlbWVudC5wcm90b3R5cGUuX2dldEVsSWQgPSBlbGVtZW50T3duR2V0RWxJZDtcbkVsZW1lbnQucHJvdG90eXBlLl90b1BoYXNlID0gZWxlbWVudE93blRvUGhhc2U7XG5FbGVtZW50LnByb3RvdHlwZS5fb25FbCA9IGVsZW1lbnRPd25PbkVsO1xuXG5FbGVtZW50LnByb3RvdHlwZS5fZG9uZUxlYXZlID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLmxlYXZlRGlzcG9zZSkge1xuICAgICAgICBpZiAoIXRoaXMubGlmZUN5Y2xlLmRpc3Bvc2VkKSB7XG4gICAgICAgICAgICBlbGVtZW50RGlzcG9zZShcbiAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgIHRoaXMuZGlzcG9zZU5vRGV0YWNoLFxuICAgICAgICAgICAgICAgIHRoaXMuZGlzcG9zZU5vVHJhbnNpdGlvblxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmICh0aGlzLmxpZmVDeWNsZS5hdHRhY2hlZCkge1xuICAgICAgICByZW1vdmVFbCh0aGlzLl9nZXRFbCgpKTtcbiAgICAgICAgdGhpcy5fdG9QaGFzZSgnZGV0YWNoZWQnKTtcbiAgICB9XG59O1xuXG4vKipcbiAqIOinhuWbvuabtOaWsFxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGNoYW5nZXMg5pWw5o2u5Y+Y5YyW5L+h5oGvXG4gKi9cbkVsZW1lbnQucHJvdG90eXBlLl91cGRhdGUgPSBmdW5jdGlvbiAoY2hhbmdlcykge1xuICAgIGlmICghY2hhbmdlc0lzSW5EYXRhUmVmKGNoYW5nZXMsIHRoaXMuYU5vZGUuaG90c3BvdC5kYXRhKSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fZ2V0RWwoKTtcbiAgICB2YXIgbWUgPSB0aGlzO1xuXG4gICAgdmFyIGR5bmFtaWNQcm9wcyA9IHRoaXMuYU5vZGUuaG90c3BvdC5keW5hbWljUHJvcHM7XG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBkeW5hbWljUHJvcHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIHZhciBwcm9wID0gZHluYW1pY1Byb3BzW2ldO1xuXG4gICAgICAgIGZvciAodmFyIGogPSAwLCBjaGFuZ2VMZW4gPSBjaGFuZ2VzLmxlbmd0aDsgaiA8IGNoYW5nZUxlbjsgaisrKSB7XG4gICAgICAgICAgICB2YXIgY2hhbmdlID0gY2hhbmdlc1tqXTtcblxuICAgICAgICAgICAgaWYgKCFpc0RhdGFDaGFuZ2VCeUVsZW1lbnQoY2hhbmdlLCB0aGlzLCBwcm9wLm5hbWUpXG4gICAgICAgICAgICAgICAgJiYgKFxuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VFeHByQ29tcGFyZShjaGFuZ2UuZXhwciwgcHJvcC5leHByLCB0aGlzLnNjb3BlKVxuICAgICAgICAgICAgICAgICAgICB8fCBwcm9wLmhpbnRFeHByICYmIGNoYW5nZUV4cHJDb21wYXJlKGNoYW5nZS5leHByLCBwcm9wLmhpbnRFeHByLCB0aGlzLnNjb3BlKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGhhbmRsZVByb3AucHJvcCh0aGlzLCBwcm9wLm5hbWUsIGV2YWxFeHByKHByb3AuZXhwciwgdGhpcy5zY29wZSwgdGhpcy5vd25lcikpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGh0bWxEaXJlY3RpdmUgPSB0aGlzLmFOb2RlLmRpcmVjdGl2ZXMuaHRtbDtcbiAgICBpZiAoaHRtbERpcmVjdGl2ZSkge1xuICAgICAgICBlYWNoKGNoYW5nZXMsIGZ1bmN0aW9uIChjaGFuZ2UpIHtcbiAgICAgICAgICAgIGlmIChjaGFuZ2VFeHByQ29tcGFyZShjaGFuZ2UuZXhwciwgaHRtbERpcmVjdGl2ZS52YWx1ZSwgbWUuc2NvcGUpKSB7XG4gICAgICAgICAgICAgICAgLy8gI1tiZWdpbl0gZXJyb3JcbiAgICAgICAgICAgICAgICB3YXJuU2V0SFRNTChtZS5lbCk7XG4gICAgICAgICAgICAgICAgLy8gI1tlbmRdXG4gICAgICAgICAgICAgICAgbWUuZWwuaW5uZXJIVE1MID0gZXZhbEV4cHIoaHRtbERpcmVjdGl2ZS52YWx1ZSwgbWUuc2NvcGUsIG1lLm93bmVyKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZWxlbWVudFVwZGF0ZUNoaWxkcmVuKHRoaXMsIGNoYW5nZXMpO1xuICAgIH1cbn07XG5cbi8qKlxuICog5omn6KGM5a6M5oiQYXR0YWNoZWTnirbmgIHnmoTooYzkuLpcbiAqL1xuRWxlbWVudC5wcm90b3R5cGUuX2F0dGFjaGVkID0gZnVuY3Rpb24gKCkge1xuICAgIGVsZW1lbnRBdHRhY2hlZCh0aGlzKTtcbn07XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IEVsZW1lbnQ7XG5cblxuLyoqXG4gKiBAZmlsZSDnlJ/miJDlrZDlhYPntKBodG1sXG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG4vLyB2YXIgZXNjYXBlSFRNTCA9IHJlcXVpcmUoJy4uL3J1bnRpbWUvZXNjYXBlLWh0bWwnKTtcbi8vIHZhciBodG1sQnVmZmVyUHVzaCA9IHJlcXVpcmUoJy4uL3J1bnRpbWUvaHRtbC1idWZmZXItcHVzaCcpO1xuLy8gdmFyIGV2YWxFeHByID0gcmVxdWlyZSgnLi4vcnVudGltZS9ldmFsLWV4cHInKTtcbi8vIHZhciBnZXRBTm9kZVByb3AgPSByZXF1aXJlKCcuL2dldC1hLW5vZGUtcHJvcCcpO1xuLy8gdmFyIGNyZWF0ZU5vZGUgPSByZXF1aXJlKCcuL2NyZWF0ZS1ub2RlJyk7XG5cbi8qKlxuICog55Sf5oiQ5a2Q5YWD57SgaHRtbFxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudCDlhYPntKBcbiAqIEBwYXJhbSB7T2JqZWN0fSBidWYgaHRtbOS4suWtmOWCqOWvueixoVxuICovXG5mdW5jdGlvbiBnZW5FbGVtZW50Q2hpbGRyZW5IVE1MKGVsZW1lbnQsIGJ1Zikge1xuICAgIGlmIChlbGVtZW50LnRhZ05hbWUgPT09ICd0ZXh0YXJlYScpIHtcbiAgICAgICAgdmFyIHZhbHVlUHJvcCA9IGdldEFOb2RlUHJvcChlbGVtZW50LmFOb2RlLCAndmFsdWUnKTtcbiAgICAgICAgaWYgKHZhbHVlUHJvcCkge1xuICAgICAgICAgICAgaHRtbEJ1ZmZlclB1c2goYnVmLCBlc2NhcGVIVE1MKGV2YWxFeHByKHZhbHVlUHJvcC5leHByLCBlbGVtZW50LnNjb3BlLCBlbGVtZW50Lm93bmVyKSkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgaHRtbERpcmVjdGl2ZSA9IGVsZW1lbnQuYU5vZGUuZGlyZWN0aXZlcy5odG1sO1xuXG4gICAgICAgIGlmIChodG1sRGlyZWN0aXZlKSB7XG4gICAgICAgICAgICBodG1sQnVmZmVyUHVzaChidWYsIGV2YWxFeHByKGh0bWxEaXJlY3RpdmUudmFsdWUsIGVsZW1lbnQuc2NvcGUsIGVsZW1lbnQub3duZXIpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBhTm9kZUNoaWxkcmVuID0gZWxlbWVudC5hTm9kZS5jaGlsZHJlbjtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gYU5vZGVDaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgY2hpbGQgPSBjcmVhdGVOb2RlKGFOb2RlQ2hpbGRyZW5baV0sIGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2hpbGRyZW4ucHVzaChjaGlsZCk7XG4gICAgICAgICAgICAgICAgY2hpbGQuX2F0dGFjaEhUTUwoYnVmKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZ2VuRWxlbWVudENoaWxkcmVuSFRNTDtcblxuXG4vKipcbiAqIEBmaWxlIOmUgOavgeiKgueCue+8jOa4heepuuiKgueCueS4iueahOaXoOeUqOaIkOWRmFxuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuXG4vKipcbiAqIOmUgOavgeiKgueCuVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBub2RlIOiKgueCueWvueixoVxuICovXG5mdW5jdGlvbiBub2RlRGlzcG9zZShub2RlKSB7XG4gICAgbm9kZS5lbCA9IG51bGw7XG4gICAgbm9kZS5vd25lciA9IG51bGw7XG4gICAgbm9kZS5zY29wZSA9IG51bGw7XG4gICAgbm9kZS5hTm9kZSA9IG51bGw7XG4gICAgbm9kZS5wYXJlbnQgPSBudWxsO1xuICAgIG5vZGUucGFyZW50Q29tcG9uZW50ID0gbnVsbDtcbiAgICBub2RlLmNoaWxkcmVuID0gbnVsbDtcblxuICAgIGlmIChub2RlLl90b1BoYXNlKSB7XG4gICAgICAgIG5vZGUuX3RvUGhhc2UoJ2Rpc3Bvc2VkJyk7XG4gICAgfVxuXG4gICAgaWYgKG5vZGUuX29uZGlzcG9zZWQpIHtcbiAgICAgICAgbm9kZS5fb25kaXNwb3NlZCgpO1xuICAgIH1cbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gbm9kZURpc3Bvc2U7XG5cblxuLyoqXG4gKiBAZmlsZSDpgJrov4fnu4Tku7blj43op6PliJvlu7roioLngrnnmoTlt6XljoLmlrnms5VcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cbi8vIHZhciBob3RUYWdzID0gcmVxdWlyZSgnLi4vYnJvd3Nlci9ob3QtdGFncycpO1xuLy8gdmFyIE5vZGVUeXBlID0gcmVxdWlyZSgnLi9ub2RlLXR5cGUnKTtcbi8vIHZhciBUZXh0Tm9kZSA9IHJlcXVpcmUoJy4vdGV4dC1ub2RlJyk7XG4vLyB2YXIgRWxlbWVudCA9IHJlcXVpcmUoJy4vZWxlbWVudCcpO1xuLy8gdmFyIFNsb3ROb2RlID0gcmVxdWlyZSgnLi9zbG90LW5vZGUnKTtcbi8vIHZhciBGb3JOb2RlID0gcmVxdWlyZSgnLi9mb3Itbm9kZScpO1xuLy8gdmFyIElmTm9kZSA9IHJlcXVpcmUoJy4vaWYtbm9kZScpO1xuLy8gdmFyIFRlbXBsYXRlTm9kZSA9IHJlcXVpcmUoJy4vdGVtcGxhdGUtbm9kZScpO1xuXG4vLyAjW2JlZ2luXSByZXZlcnNlXG4vKipcbiAqIOmAmui/h+e7hOS7tuWPjeino+WIm+W7uuiKgueCuVxuICpcbiAqIEBwYXJhbSB7QU5vZGV9IGFOb2RlIOaKveixoeiKgueCuVxuICogQHBhcmFtIHtET01DaGlsZHJlbldhbGtlcn0gcmV2ZXJzZVdhbGtlciDlrZDlhYPntKDpgY3ljoblr7nosaFcbiAqIEBwYXJhbSB7Tm9kZX0gcGFyZW50IOeItuS6suiKgueCuVxuICogQHBhcmFtIHtNb2RlbD19IHNjb3BlIOaJgOWxnuaVsOaNrueOr+Wig1xuICogQHJldHVybiB7Tm9kZX1cbiAqL1xuZnVuY3Rpb24gY3JlYXRlUmV2ZXJzZU5vZGUoYU5vZGUsIHJldmVyc2VXYWxrZXIsIHBhcmVudCwgc2NvcGUpIHtcbiAgICB2YXIgcGFyZW50SXNDb21wb25lbnQgPSBwYXJlbnQubm9kZVR5cGUgPT09IE5vZGVUeXBlLkNNUFQ7XG4gICAgdmFyIG93bmVyID0gcGFyZW50SXNDb21wb25lbnQgPyBwYXJlbnQgOiAocGFyZW50LmNoaWxkT3duZXIgfHwgcGFyZW50Lm93bmVyKTtcbiAgICBzY29wZSA9IHNjb3BlIHx8IChwYXJlbnRJc0NvbXBvbmVudCA/IHBhcmVudC5kYXRhIDogKHBhcmVudC5jaGlsZFNjb3BlIHx8IHBhcmVudC5zY29wZSkpO1xuXG4gICAgaWYgKGFOb2RlLnRleHRFeHByKSB7XG4gICAgICAgIHJldHVybiBuZXcgVGV4dE5vZGUoYU5vZGUsIG93bmVyLCBzY29wZSwgcGFyZW50LCByZXZlcnNlV2Fsa2VyKTtcbiAgICB9XG5cbiAgICBpZiAoYU5vZGUuZGlyZWN0aXZlc1snaWYnXSkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGRvdC1ub3RhdGlvblxuICAgICAgICByZXR1cm4gbmV3IElmTm9kZShhTm9kZSwgb3duZXIsIHNjb3BlLCBwYXJlbnQsIHJldmVyc2VXYWxrZXIpO1xuICAgIH1cblxuICAgIGlmIChhTm9kZS5kaXJlY3RpdmVzWydmb3InXSkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGRvdC1ub3RhdGlvblxuICAgICAgICByZXR1cm4gbmV3IEZvck5vZGUoYU5vZGUsIG93bmVyLCBzY29wZSwgcGFyZW50LCByZXZlcnNlV2Fsa2VyKTtcbiAgICB9XG5cbiAgICBpZiAoaG90VGFnc1thTm9kZS50YWdOYW1lXSkge1xuICAgICAgICByZXR1cm4gbmV3IEVsZW1lbnQoYU5vZGUsIG93bmVyLCBzY29wZSwgcGFyZW50LCByZXZlcnNlV2Fsa2VyKTtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKGFOb2RlLnRhZ05hbWUpIHtcbiAgICAgICAgY2FzZSAnc2xvdCc6XG4gICAgICAgICAgICByZXR1cm4gbmV3IFNsb3ROb2RlKGFOb2RlLCBvd25lciwgc2NvcGUsIHBhcmVudCwgcmV2ZXJzZVdhbGtlcik7XG5cbiAgICAgICAgY2FzZSAndGVtcGxhdGUnOlxuICAgICAgICAgICAgcmV0dXJuIG5ldyBUZW1wbGF0ZU5vZGUoYU5vZGUsIG93bmVyLCBzY29wZSwgcGFyZW50LCByZXZlcnNlV2Fsa2VyKTtcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdmFyIENvbXBvbmVudFR5cGUgPSBvd25lci5nZXRDb21wb25lbnRUeXBlKGFOb2RlKTtcbiAgICAgICAgICAgIGlmIChDb21wb25lbnRUeXBlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb21wb25lbnRUeXBlKHtcbiAgICAgICAgICAgICAgICAgICAgYU5vZGU6IGFOb2RlLFxuICAgICAgICAgICAgICAgICAgICBvd25lcjogb3duZXIsXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlOiBzY29wZSxcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50OiBwYXJlbnQsXG4gICAgICAgICAgICAgICAgICAgIHN1YlRhZzogYU5vZGUudGFnTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgcmV2ZXJzZVdhbGtlcjogcmV2ZXJzZVdhbGtlclxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBuZXcgRWxlbWVudChhTm9kZSwgb3duZXIsIHNjb3BlLCBwYXJlbnQsIHJldmVyc2VXYWxrZXIpO1xufVxuLy8gI1tlbmRdXG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZVJldmVyc2VOb2RlO1xuXG5cbi8qKlxuICogQGZpbGUg6ZSA5q+B6YeK5pS+5YWD57Sg55qE5a2Q5YWD57SgXG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG4vKipcbiAqIOmUgOavgemHiuaUvuWFg+e0oOeahOWtkOWFg+e0oFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBlbGVtZW50IOWFg+e0oOiKgueCuVxuICogQHBhcmFtIHtib29sZWFuPX0gbm9EZXRhY2gg5piv5ZCm5LiN6KaB5oqK6IqC54K55LuOZG9t56e76ZmkXG4gKiBAcGFyYW0ge2Jvb2xlYW49fSBub1RyYW5zaXRpb24g5piv5ZCm5LiN5pi+56S66L+H5rih5Yqo55S75pWI5p6cXG4gKi9cbmZ1bmN0aW9uIGVsZW1lbnREaXNwb3NlQ2hpbGRyZW4oZWxlbWVudCwgbm9EZXRhY2gsIG5vVHJhbnNpdGlvbikge1xuICAgIHZhciBjaGlsZHJlbiA9IGVsZW1lbnQuY2hpbGRyZW47XG4gICAgdmFyIGxlbiA9IGNoaWxkcmVuICYmIGNoaWxkcmVuLmxlbmd0aDtcbiAgICB3aGlsZSAobGVuLS0pIHtcbiAgICAgICAgY2hpbGRyZW5bbGVuXS5kaXNwb3NlKG5vRGV0YWNoLCBub1RyYW5zaXRpb24pO1xuICAgIH1cbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZWxlbWVudERpc3Bvc2VDaGlsZHJlbjtcblxuXG4vKipcbiAqIEBmaWxlIOabtOaWsOWFg+e0oOeahOWtkOWFg+e0oOinhuWbvlxuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuXG4vKipcbiAqIOabtOaWsOWFg+e0oOeahOWtkOWFg+e0oOinhuWbvlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBlbGVtZW50IOimgeabtOaWsOeahOWFg+e0oFxuICogQHBhcmFtIHtBcnJheX0gY2hhbmdlcyDmlbDmja7lj5jljJbkv6Hmga9cbiAqL1xuZnVuY3Rpb24gZWxlbWVudFVwZGF0ZUNoaWxkcmVuKGVsZW1lbnQsIGNoYW5nZXMpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IGVsZW1lbnQuY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGVsZW1lbnQuY2hpbGRyZW5baV0uX3VwZGF0ZShjaGFuZ2VzKTtcbiAgICB9XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGVsZW1lbnRVcGRhdGVDaGlsZHJlbjtcblxuXG4vKipcbiAqIEBmaWxlIOS9v+WFg+e0oOiKgueCueWIsOi+vuebuOW6lOeahOeUn+WRveWRqOacn1xuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuXG4vLyB2YXIgTGlmZUN5Y2xlID0gcmVxdWlyZSgnLi9saWZlLWN5Y2xlJyk7XG5cbi8qKlxuICog5L2/5YWD57Sg6IqC54K55Yiw6L6+55u45bqU55qE55Sf5ZG95ZGo5pyfXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUg55Sf5ZG95ZGo5pyf5ZCN56ewXG4gKi9cbmZ1bmN0aW9uIGVsZW1lbnRPd25Ub1BoYXNlKG5hbWUpIHtcbiAgICB0aGlzLmxpZmVDeWNsZSA9IExpZmVDeWNsZVtuYW1lXSB8fCB0aGlzLmxpZmVDeWNsZTtcbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZWxlbWVudE93blRvUGhhc2U7XG5cblxuLyoqXG4gKiBAZmlsZSDmiafooYzlrozmiJBhdHRhY2hlZOeKtuaAgeeahOihjOS4ulxuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuXG4vKipcbiAqIOaJp+ihjOWujOaIkGF0dGFjaGVk54q25oCB55qE6KGM5Li6XG4gKi9cbmZ1bmN0aW9uIG5vZGVPd25TaW1wbGVBdHRhY2hlZCgpIHtcbiAgICB0aGlzLl90b1BoYXNlKCdhdHRhY2hlZCcpO1xufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBub2RlT3duU2ltcGxlQXR0YWNoZWQ7XG5cblxuLyoqXG4gKiBAZmlsZSDliJvlu7roioLngrnnmoTlt6XljoLmlrnms5VcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cbi8vIHZhciBob3RUYWdzID0gcmVxdWlyZSgnLi4vYnJvd3Nlci9ob3QtdGFncycpO1xuLy8gdmFyIE5vZGVUeXBlID0gcmVxdWlyZSgnLi9ub2RlLXR5cGUnKTtcbi8vIHZhciBUZXh0Tm9kZSA9IHJlcXVpcmUoJy4vdGV4dC1ub2RlJyk7XG4vLyB2YXIgRWxlbWVudCA9IHJlcXVpcmUoJy4vZWxlbWVudCcpO1xuLy8gdmFyIFNsb3ROb2RlID0gcmVxdWlyZSgnLi9zbG90LW5vZGUnKTtcbi8vIHZhciBGb3JOb2RlID0gcmVxdWlyZSgnLi9mb3Itbm9kZScpO1xuLy8gdmFyIElmTm9kZSA9IHJlcXVpcmUoJy4vaWYtbm9kZScpO1xuLy8gdmFyIFRlbXBsYXRlTm9kZSA9IHJlcXVpcmUoJy4vdGVtcGxhdGUtbm9kZScpO1xuXG5cbi8qKlxuICog5Yib5bu66IqC54K5XG4gKlxuICogQHBhcmFtIHtBTm9kZX0gYU5vZGUg5oq96LGh6IqC54K5XG4gKiBAcGFyYW0ge05vZGV9IHBhcmVudCDniLbkurLoioLngrlcbiAqIEBwYXJhbSB7TW9kZWw9fSBzY29wZSDmiYDlsZ7mlbDmja7njq/looNcbiAqIEByZXR1cm4ge05vZGV9XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZU5vZGUoYU5vZGUsIHBhcmVudCwgc2NvcGUpIHtcbiAgICB2YXIgcGFyZW50SXNDb21wb25lbnQgPSBwYXJlbnQubm9kZVR5cGUgPT09IE5vZGVUeXBlLkNNUFQ7XG4gICAgdmFyIG93bmVyID0gcGFyZW50SXNDb21wb25lbnQgPyBwYXJlbnQgOiAocGFyZW50LmNoaWxkT3duZXIgfHwgcGFyZW50Lm93bmVyKTtcbiAgICBzY29wZSA9IHNjb3BlIHx8IChwYXJlbnRJc0NvbXBvbmVudCA/IHBhcmVudC5kYXRhIDogKHBhcmVudC5jaGlsZFNjb3BlIHx8IHBhcmVudC5zY29wZSkpO1xuXG5cbiAgICBpZiAoYU5vZGUudGV4dEV4cHIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUZXh0Tm9kZShhTm9kZSwgb3duZXIsIHNjb3BlLCBwYXJlbnQpO1xuICAgIH1cblxuICAgIGlmIChhTm9kZS5kaXJlY3RpdmVzWydpZiddKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZG90LW5vdGF0aW9uXG4gICAgICAgIHJldHVybiBuZXcgSWZOb2RlKGFOb2RlLCBvd25lciwgc2NvcGUsIHBhcmVudCk7XG4gICAgfVxuXG4gICAgaWYgKGFOb2RlLmRpcmVjdGl2ZXNbJ2ZvciddKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZG90LW5vdGF0aW9uXG4gICAgICAgIHJldHVybiBuZXcgRm9yTm9kZShhTm9kZSwgb3duZXIsIHNjb3BlLCBwYXJlbnQpO1xuICAgIH1cblxuICAgIGlmIChob3RUYWdzW2FOb2RlLnRhZ05hbWVdKSB7XG4gICAgICAgIHJldHVybiBuZXcgRWxlbWVudChhTm9kZSwgb3duZXIsIHNjb3BlLCBwYXJlbnQpO1xuICAgIH1cblxuXG5cbiAgICBzd2l0Y2ggKGFOb2RlLnRhZ05hbWUpIHtcbiAgICAgICAgY2FzZSAnc2xvdCc6XG4gICAgICAgICAgICByZXR1cm4gbmV3IFNsb3ROb2RlKGFOb2RlLCBvd25lciwgc2NvcGUsIHBhcmVudCk7XG5cbiAgICAgICAgY2FzZSAndGVtcGxhdGUnOlxuICAgICAgICAgICAgcmV0dXJuIG5ldyBUZW1wbGF0ZU5vZGUoYU5vZGUsIG93bmVyLCBzY29wZSwgcGFyZW50KTtcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdmFyIENvbXBvbmVudFR5cGUgPSBvd25lci5nZXRDb21wb25lbnRUeXBlKGFOb2RlKTtcbiAgICAgICAgICAgIGlmIChDb21wb25lbnRUeXBlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb21wb25lbnRUeXBlKHtcbiAgICAgICAgICAgICAgICAgICAgYU5vZGU6IGFOb2RlLFxuICAgICAgICAgICAgICAgICAgICBvd25lcjogb3duZXIsXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlOiBzY29wZSxcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50OiBwYXJlbnQsXG4gICAgICAgICAgICAgICAgICAgIHN1YlRhZzogYU5vZGUudGFnTmFtZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBuZXcgRWxlbWVudChhTm9kZSwgb3duZXIsIHNjb3BlLCBwYXJlbnQpO1xufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVOb2RlO1xuXG5cbi8qKlxuICogQGZpbGUg55Sf5oiQ5a2Q5YWD57SgXG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG4vLyB2YXIgZWFjaCA9IHJlcXVpcmUoJy4uL3V0aWwvZWFjaCcpO1xuLy8gdmFyIGNyZWF0ZU5vZGUgPSByZXF1aXJlKCcuL2NyZWF0ZS1ub2RlJyk7XG5cbi8qKlxuICog55Sf5oiQ5a2Q5YWD57SgXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50IOWFg+e0oFxuICogQHBhcmFtIHtPYmplY3R9IGJ1ZiBodG1s5Liy5a2Y5YKo5a+56LGhXG4gKi9cbmZ1bmN0aW9uIGdlbkVsZW1lbnRDaGlsZHJlbihlbGVtZW50LCBwYXJlbnRFbCwgYmVmb3JlRWwpIHtcbiAgICBwYXJlbnRFbCA9IHBhcmVudEVsIHx8IGVsZW1lbnQuX2dldEVsKCk7XG4gICAgZWFjaChlbGVtZW50LmFOb2RlLmNoaWxkcmVuLCBmdW5jdGlvbiAoYU5vZGVDaGlsZCkge1xuICAgICAgICB2YXIgY2hpbGQgPSBjcmVhdGVOb2RlKGFOb2RlQ2hpbGQsIGVsZW1lbnQpO1xuICAgICAgICBlbGVtZW50LmNoaWxkcmVuLnB1c2goY2hpbGQpO1xuICAgICAgICBjaGlsZC5hdHRhY2gocGFyZW50RWwsIGJlZm9yZUVsKTtcbiAgICB9KTtcbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZ2VuRWxlbWVudENoaWxkcmVuO1xuXG5cbi8qKlxuICogQGZpbGUg5bCG5rKh5pyJIHJvb3Qg5Y+q5pyJIGNoaWxkcmVuIOeahOWFg+e0oCBhdHRhY2gg5Yiw6aG16Z2iXG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG5cbi8vIHZhciBlYWNoID0gcmVxdWlyZSgnLi4vdXRpbC9lYWNoJyk7XG4vLyB2YXIgaW5zZXJ0QmVmb3JlID0gcmVxdWlyZSgnLi4vYnJvd3Nlci9pbnNlcnQtYmVmb3JlJyk7XG4vLyB2YXIgY3JlYXRlTm9kZSA9IHJlcXVpcmUoJy4vY3JlYXRlLW5vZGUnKTtcbi8vIHZhciBnZW5FbGVtZW50Q2hpbGRyZW4gPSByZXF1aXJlKCcuL2dlbi1lbGVtZW50LWNoaWxkcmVuJyk7XG4vLyB2YXIgYXR0YWNoaW5ncyA9IHJlcXVpcmUoJy4vYXR0YWNoaW5ncycpO1xuXG5cbi8qKlxuICog5bCG5rKh5pyJIHJvb3Qg5Y+q5pyJIGNoaWxkcmVuIOeahOWFg+e0oCBhdHRhY2gg5Yiw6aG16Z2iXG4gKiDkuLvopoHnlKjkuo4gc2xvdCDlkowgdGVtcGxhdGVcbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwYXJlbnRFbCDopoHmt7vliqDliLDnmoTniLblhYPntKBcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnTvvJ19IGJlZm9yZUVsIOimgea3u+WKoOWIsOWTquS4quWFg+e0oOS5i+WJjVxuICovXG5mdW5jdGlvbiBub2RlT3duT25seUNoaWxkcmVuQXR0YWNoKHBhcmVudEVsLCBiZWZvcmVFbCkge1xuICAgIHRoaXMuc2VsID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCh0aGlzLmlkKTtcbiAgICBpbnNlcnRCZWZvcmUodGhpcy5zZWwsIHBhcmVudEVsLCBiZWZvcmVFbCk7XG5cbiAgICBnZW5FbGVtZW50Q2hpbGRyZW4odGhpcywgcGFyZW50RWwsIGJlZm9yZUVsKTtcblxuICAgIHRoaXMuZWwgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KHRoaXMuaWQpO1xuICAgIGluc2VydEJlZm9yZSh0aGlzLmVsLCBwYXJlbnRFbCwgYmVmb3JlRWwpO1xuXG4gICAgYXR0YWNoaW5ncy5kb25lKCk7XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IG5vZGVPd25Pbmx5Q2hpbGRyZW5BdHRhY2g7XG5cblxuLyoqXG4gKiBAZmlsZSDojrflj5boioLngrnlr7nlupTnmoQgc3R1bXAg5Li75YWD57SgXG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG4vLyB2YXIgZ2V0Tm9kZVN0dW1wID0gcmVxdWlyZSgnLi9nZXQtbm9kZS1zdHVtcCcpO1xuXG4vKipcbiAqIOiOt+WPluiKgueCueWvueW6lOeahCBzdHVtcCDkuLvlhYPntKBcbiAqXG4gKiBAcmV0dXJuIHtDb21tZW50fVxuICovXG5mdW5jdGlvbiBub2RlT3duR2V0U3R1bXBFbCgpIHtcbiAgICByZXR1cm4gZ2V0Tm9kZVN0dW1wKHRoaXMpO1xufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBub2RlT3duR2V0U3R1bXBFbDtcblxuXG4vKipcbiAqIEBmaWxlIHNsb3Qg6IqC54K557G7XG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG4vLyB2YXIgZWFjaCA9IHJlcXVpcmUoJy4uL3V0aWwvZWFjaCcpO1xuLy8gdmFyIGd1aWQgPSByZXF1aXJlKCcuLi91dGlsL2d1aWQnKTtcbi8vIHZhciBjcmVhdGVBTm9kZSA9IHJlcXVpcmUoJy4uL3BhcnNlci9jcmVhdGUtYS1ub2RlJyk7XG4vLyB2YXIgRXhwclR5cGUgPSByZXF1aXJlKCcuLi9wYXJzZXIvZXhwci10eXBlJyk7XG4vLyB2YXIgY3JlYXRlQWNjZXNzb3IgPSByZXF1aXJlKCcuLi9wYXJzZXIvY3JlYXRlLWFjY2Vzc29yJyk7XG4vLyB2YXIgZXZhbEV4cHIgPSByZXF1aXJlKCcuLi9ydW50aW1lL2V2YWwtZXhwcicpO1xuLy8gdmFyIERhdGEgPSByZXF1aXJlKCcuLi9ydW50aW1lL2RhdGEnKTtcbi8vIHZhciBEYXRhQ2hhbmdlVHlwZSA9IHJlcXVpcmUoJy4uL3J1bnRpbWUvZGF0YS1jaGFuZ2UtdHlwZScpO1xuLy8gdmFyIGNoYW5nZUV4cHJDb21wYXJlID0gcmVxdWlyZSgnLi4vcnVudGltZS9jaGFuZ2UtZXhwci1jb21wYXJlJyk7XG4vLyB2YXIgaHRtbEJ1ZmZlckNvbW1lbnQgPSByZXF1aXJlKCcuLi9ydW50aW1lL2h0bWwtYnVmZmVyLWNvbW1lbnQnKTtcbi8vIHZhciBpbnNlcnRCZWZvcmUgPSByZXF1aXJlKCcuLi9icm93c2VyL2luc2VydC1iZWZvcmUnKTtcbi8vIHZhciBOb2RlVHlwZSA9IHJlcXVpcmUoJy4vbm9kZS10eXBlJyk7XG4vLyB2YXIgYXR0YWNoaW5ncyA9IHJlcXVpcmUoJy4vYXR0YWNoaW5ncycpO1xuLy8gdmFyIExpZmVDeWNsZSA9IHJlcXVpcmUoJy4vbGlmZS1jeWNsZScpO1xuLy8gdmFyIGdldEFOb2RlUHJvcCA9IHJlcXVpcmUoJy4vZ2V0LWEtbm9kZS1wcm9wJyk7XG4vLyB2YXIgZ2VuRWxlbWVudENoaWxkcmVuSFRNTCA9IHJlcXVpcmUoJy4vZ2VuLWVsZW1lbnQtY2hpbGRyZW4taHRtbCcpO1xuLy8gdmFyIG5vZGVEaXNwb3NlID0gcmVxdWlyZSgnLi9ub2RlLWRpc3Bvc2UnKTtcbi8vIHZhciBjcmVhdGVSZXZlcnNlTm9kZSA9IHJlcXVpcmUoJy4vY3JlYXRlLXJldmVyc2Utbm9kZScpO1xuLy8gdmFyIGVsZW1lbnREaXNwb3NlQ2hpbGRyZW4gPSByZXF1aXJlKCcuL2VsZW1lbnQtZGlzcG9zZS1jaGlsZHJlbicpO1xuLy8gdmFyIGVsZW1lbnRVcGRhdGVDaGlsZHJlbiA9IHJlcXVpcmUoJy4vZWxlbWVudC11cGRhdGUtY2hpbGRyZW4nKTtcbi8vIHZhciBlbGVtZW50T3duVG9QaGFzZSA9IHJlcXVpcmUoJy4vZWxlbWVudC1vd24tdG8tcGhhc2UnKTtcbi8vIHZhciBub2RlT3duU2ltcGxlQXR0YWNoZWQgPSByZXF1aXJlKCcuL25vZGUtb3duLXNpbXBsZS1hdHRhY2hlZCcpO1xuLy8gdmFyIG5vZGVPd25Pbmx5Q2hpbGRyZW5BdHRhY2ggPSByZXF1aXJlKCcuL25vZGUtb3duLW9ubHktY2hpbGRyZW4tYXR0YWNoJyk7XG4vLyB2YXIgbm9kZU93bkdldFN0dW1wRWwgPSByZXF1aXJlKCcuL25vZGUtb3duLWdldC1zdHVtcC1lbCcpO1xuXG5cbi8qKlxuICogc2xvdCDoioLngrnnsbtcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gYU5vZGUg5oq96LGh6IqC54K5XG4gKiBAcGFyYW0ge0NvbXBvbmVudH0gb3duZXIg5omA5bGe57uE5Lu2546v5aKDXG4gKiBAcGFyYW0ge01vZGVsPX0gc2NvcGUg5omA5bGe5pWw5o2u546v5aKDXG4gKiBAcGFyYW0ge05vZGV9IHBhcmVudCDniLbkurLoioLngrlcbiAqIEBwYXJhbSB7RE9NQ2hpbGRyZW5XYWxrZXI/fSByZXZlcnNlV2Fsa2VyIOWtkOWFg+e0oOmBjeWOhuWvueixoVxuICovXG5mdW5jdGlvbiBTbG90Tm9kZShhTm9kZSwgb3duZXIsIHNjb3BlLCBwYXJlbnQsIHJldmVyc2VXYWxrZXIpIHtcbiAgICB2YXIgcmVhbEFOb2RlID0gY3JlYXRlQU5vZGUoKTtcbiAgICB0aGlzLmFOb2RlID0gcmVhbEFOb2RlO1xuICAgIHRoaXMub3duZXIgPSBvd25lcjtcbiAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgdGhpcy5wYXJlbnRDb21wb25lbnQgPSBwYXJlbnQubm9kZVR5cGUgPT09IE5vZGVUeXBlLkNNUFRcbiAgICAgICAgPyBwYXJlbnRcbiAgICAgICAgOiBwYXJlbnQucGFyZW50Q29tcG9uZW50O1xuXG4gICAgdGhpcy5pZCA9IGd1aWQoKTtcblxuICAgIHRoaXMubGlmZUN5Y2xlID0gTGlmZUN5Y2xlLnN0YXJ0O1xuICAgIHRoaXMuY2hpbGRyZW4gPSBbXTtcblxuICAgIC8vIGNhbGMgc2xvdCBuYW1lXG4gICAgdGhpcy5uYW1lQmluZCA9IGdldEFOb2RlUHJvcChhTm9kZSwgJ25hbWUnKTtcbiAgICBpZiAodGhpcy5uYW1lQmluZCkge1xuICAgICAgICB0aGlzLmlzTmFtZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLm5hbWUgPSBldmFsRXhwcih0aGlzLm5hbWVCaW5kLmV4cHIsIHRoaXMuc2NvcGUsIHRoaXMub3duZXIpO1xuICAgIH1cblxuICAgIC8vIGNhbGMgYU5vZGUgY2hpbGRyZW5cbiAgICB2YXIgZ2l2ZW5TbG90cyA9IG93bmVyLmdpdmVuU2xvdHM7XG4gICAgdmFyIGdpdmVuQ2hpbGRyZW47XG4gICAgaWYgKGdpdmVuU2xvdHMpIHtcbiAgICAgICAgZ2l2ZW5DaGlsZHJlbiA9IHRoaXMuaXNOYW1lZCA/IGdpdmVuU2xvdHMubmFtZWRbdGhpcy5uYW1lXSA6IGdpdmVuU2xvdHMubm9uYW1lO1xuICAgIH1cblxuICAgIGlmIChnaXZlbkNoaWxkcmVuKSB7XG4gICAgICAgIHRoaXMuaXNJbnNlcnRlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgcmVhbEFOb2RlLmNoaWxkcmVuID0gZ2l2ZW5DaGlsZHJlbiB8fCBhTm9kZS5jaGlsZHJlbi5zbGljZSgwKTtcblxuICAgIHZhciBtZSA9IHRoaXM7XG5cbiAgICAvLyBjYWxjIHNjb3BlZCBzbG90IHZhcnNcbiAgICByZWFsQU5vZGUudmFycyA9IGFOb2RlLnZhcnM7XG4gICAgdmFyIGluaXREYXRhID0ge307XG4gICAgZWFjaChyZWFsQU5vZGUudmFycywgZnVuY3Rpb24gKHZhckl0ZW0pIHtcbiAgICAgICAgbWUuaXNTY29wZWQgPSB0cnVlO1xuICAgICAgICBpbml0RGF0YVt2YXJJdGVtLm5hbWVdID0gZXZhbEV4cHIodmFySXRlbS5leHByLCBzY29wZSwgb3duZXIpO1xuICAgIH0pO1xuXG4gICAgLy8gY2hpbGQgb3duZXIgJiBjaGlsZCBzY29wZVxuICAgIGlmICh0aGlzLmlzSW5zZXJ0ZWQpIHtcbiAgICAgICAgdGhpcy5jaGlsZE93bmVyID0gb3duZXIub3duZXI7XG4gICAgICAgIHRoaXMuY2hpbGRTY29wZSA9IG93bmVyLnNjb3BlO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmlzU2NvcGVkKSB7XG4gICAgICAgIHRoaXMuY2hpbGRTY29wZSA9IG5ldyBEYXRhKGluaXREYXRhLCB0aGlzLmNoaWxkU2NvcGUgfHwgdGhpcy5zY29wZSk7XG4gICAgfVxuXG5cbiAgICBvd25lci5zbG90Q2hpbGRyZW4ucHVzaCh0aGlzKTtcblxuICAgIC8vICNbYmVnaW5dIHJldmVyc2VcbiAgICBpZiAocmV2ZXJzZVdhbGtlcikge1xuXG4gICAgICAgIHRoaXMuc2VsID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCh0aGlzLmlkKTtcbiAgICAgICAgaW5zZXJ0QmVmb3JlKHRoaXMuc2VsLCByZXZlcnNlV2Fsa2VyLnRhcmdldCwgcmV2ZXJzZVdhbGtlci5jdXJyZW50KTtcblxuICAgICAgICBlYWNoKHRoaXMuYU5vZGUuY2hpbGRyZW4sIGZ1bmN0aW9uIChhTm9kZUNoaWxkKSB7XG4gICAgICAgICAgICBtZS5jaGlsZHJlbi5wdXNoKGNyZWF0ZVJldmVyc2VOb2RlKGFOb2RlQ2hpbGQsIHJldmVyc2VXYWxrZXIsIG1lKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuZWwgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KHRoaXMuaWQpO1xuICAgICAgICBpbnNlcnRCZWZvcmUodGhpcy5lbCwgcmV2ZXJzZVdhbGtlci50YXJnZXQsIHJldmVyc2VXYWxrZXIuY3VycmVudCk7XG5cbiAgICAgICAgYXR0YWNoaW5ncy5hZGQodGhpcyk7XG4gICAgfVxuICAgIC8vICNbZW5kXVxufVxuXG5TbG90Tm9kZS5wcm90b3R5cGUubm9kZVR5cGUgPSBOb2RlVHlwZS5TTE9UO1xuXG4vKipcbiAqIOmUgOavgemHiuaUviBzbG90XG4gKlxuICogQHBhcmFtIHtib29sZWFuPX0gbm9EZXRhY2gg5piv5ZCm5LiN6KaB5oqK6IqC54K55LuOZG9t56e76ZmkXG4gKiBAcGFyYW0ge2Jvb2xlYW49fSBub1RyYW5zaXRpb24g5piv5ZCm5LiN5pi+56S66L+H5rih5Yqo55S75pWI5p6cXG4gKi9cblNsb3ROb2RlLnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24gKG5vRGV0YWNoLCBub1RyYW5zaXRpb24pIHtcbiAgICB0aGlzLmNoaWxkT3duZXIgPSBudWxsO1xuICAgIHRoaXMuY2hpbGRTY29wZSA9IG51bGw7XG5cbiAgICBlbGVtZW50RGlzcG9zZUNoaWxkcmVuKHRoaXMsIG5vRGV0YWNoLCBub1RyYW5zaXRpb24pO1xuICAgIG5vZGVEaXNwb3NlKHRoaXMpO1xufTtcblxuU2xvdE5vZGUucHJvdG90eXBlLmF0dGFjaCA9IG5vZGVPd25Pbmx5Q2hpbGRyZW5BdHRhY2g7XG5TbG90Tm9kZS5wcm90b3R5cGUuX3RvUGhhc2UgPSBlbGVtZW50T3duVG9QaGFzZTtcblNsb3ROb2RlLnByb3RvdHlwZS5fZ2V0RWwgPSBub2RlT3duR2V0U3R1bXBFbDtcblNsb3ROb2RlLnByb3RvdHlwZS5fYXR0YWNoZWQgPSBub2RlT3duU2ltcGxlQXR0YWNoZWQ7XG5cbi8qKlxuICogYXR0YWNo5YWD57Sg55qEaHRtbFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBidWYgaHRtbOS4suWtmOWCqOWvueixoVxuICovXG5TbG90Tm9kZS5wcm90b3R5cGUuX2F0dGFjaEhUTUwgPSBmdW5jdGlvbiAoYnVmKSB7XG4gICAgaHRtbEJ1ZmZlckNvbW1lbnQoYnVmLCB0aGlzLmlkKTtcbiAgICBnZW5FbGVtZW50Q2hpbGRyZW5IVE1MKHRoaXMsIGJ1Zik7XG4gICAgaHRtbEJ1ZmZlckNvbW1lbnQoYnVmLCB0aGlzLmlkKTtcblxuICAgIGF0dGFjaGluZ3MuYWRkKHRoaXMpO1xufTtcblxuLyoqXG4gKiDop4blm77mm7TmlrDlh73mlbBcbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBjaGFuZ2VzIOaVsOaNruWPmOWMluS/oeaBr1xuICogQHBhcmFtIHtib29sZWFuPX0gaXNGcm9tT3V0ZXIg5Y+Y5YyW5L+h5oGv5piv5ZCm5p2l5rqQ5LqO54i257uE5Lu25LmL5aSW55qE57uE5Lu2XG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5TbG90Tm9kZS5wcm90b3R5cGUuX3VwZGF0ZSA9IGZ1bmN0aW9uIChjaGFuZ2VzLCBpc0Zyb21PdXRlcikge1xuICAgIHZhciBtZSA9IHRoaXM7XG5cbiAgICBpZiAodGhpcy5uYW1lQmluZCAmJiBldmFsRXhwcih0aGlzLm5hbWVCaW5kLmV4cHIsIHRoaXMuc2NvcGUsIHRoaXMub3duZXIpICE9PSBtZS5uYW1lKSB7XG4gICAgICAgIHRoaXMub3duZXIuX25vdGlmeU5lZWRSZWxvYWQoKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChpc0Zyb21PdXRlcikge1xuICAgICAgICBpZiAodGhpcy5pc0luc2VydGVkKSB7XG4gICAgICAgICAgICBlbGVtZW50VXBkYXRlQ2hpbGRyZW4odGhpcywgY2hhbmdlcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlmICh0aGlzLmlzU2NvcGVkKSB7XG4gICAgICAgICAgICBlYWNoKHRoaXMuYU5vZGUudmFycywgZnVuY3Rpb24gKHZhckl0ZW0pIHtcbiAgICAgICAgICAgICAgICBtZS5jaGlsZFNjb3BlLnNldCh2YXJJdGVtLm5hbWUsIGV2YWxFeHByKHZhckl0ZW0uZXhwciwgbWUuc2NvcGUsIG1lLm93bmVyKSk7XG4gICAgICAgICAgICB9KTtcblxuXG4gICAgICAgICAgICB2YXIgc2NvcGVkQ2hhbmdlcyA9IFtdO1xuICAgICAgICAgICAgZWFjaChjaGFuZ2VzLCBmdW5jdGlvbiAoY2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFtZS5pc0luc2VydGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHNjb3BlZENoYW5nZXMucHVzaChjaGFuZ2UpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGVhY2gobWUuYU5vZGUudmFycywgZnVuY3Rpb24gKHZhckl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5hbWUgPSB2YXJJdGVtLm5hbWU7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZWxhdGlvbiA9IGNoYW5nZUV4cHJDb21wYXJlKGNoYW5nZS5leHByLCB2YXJJdGVtLmV4cHIsIG1lLnNjb3BlKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAocmVsYXRpb24gPCAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoY2hhbmdlLnR5cGUgPT09IERhdGFDaGFuZ2VUeXBlLlNFVCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGVkQ2hhbmdlcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBEYXRhQ2hhbmdlVHlwZS5TRVQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcjogY3JlYXRlQWNjZXNzb3IoW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dHlwZTogRXhwclR5cGUuU1RSSU5HLCB2YWx1ZTogbmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogbWUuY2hpbGRTY29wZS5nZXQobmFtZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uOiBjaGFuZ2Uub3B0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChyZWxhdGlvbiA9PT0gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGVkQ2hhbmdlcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByOiBjcmVhdGVBY2Nlc3NvcihbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0eXBlOiBFeHByVHlwZS5TVFJJTkcsIHZhbHVlOiBuYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IERhdGFDaGFuZ2VUeXBlLlNQTElDRSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleDogY2hhbmdlLmluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZUNvdW50OiBjaGFuZ2UuZGVsZXRlQ291bnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGNoYW5nZS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnNlcnRpb25zOiBjaGFuZ2UuaW5zZXJ0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb246IGNoYW5nZS5vcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZWxlbWVudFVwZGF0ZUNoaWxkcmVuKHRoaXMsIHNjb3BlZENoYW5nZXMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCF0aGlzLmlzSW5zZXJ0ZWQpIHtcbiAgICAgICAgICAgIGVsZW1lbnRVcGRhdGVDaGlsZHJlbih0aGlzLCBjaGFuZ2VzKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IFNsb3ROb2RlO1xuXG5cbi8qKlxuICogQGZpbGUg5aSN5Yi25oyH5Luk6ZuG5ZCI5a+56LGhXG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG4vKipcbiAqIOWkjeWItuaMh+S7pOmbhuWQiOWvueixoVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2Ug6KaB5aSN5Yi255qE5oyH5Luk6ZuG5ZCI5a+56LGhXG4gKiBAcGFyYW0ge09iamVjdD19IGV4Y2x1ZGVzIOmcgOimgeaOkumZpOeahGtleembhuWQiFxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiBjbG9uZURpcmVjdGl2ZXMoc291cmNlLCBleGNsdWRlcykge1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBleGNsdWRlcyA9IGV4Y2x1ZGVzIHx8IHt9O1xuXG4gICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoIWV4Y2x1ZGVzW2tleV0pIHtcbiAgICAgICAgICAgIHJlc3VsdFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBjbG9uZURpcmVjdGl2ZXM7XG5cblxuLyoqXG4gKiBAZmlsZSDnroDljZXmiafooYzplIDmr4HoioLngrnnmoTooYzkuLpcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cbi8vIHZhciByZW1vdmVFbCA9IHJlcXVpcmUoJy4uL2Jyb3dzZXIvcmVtb3ZlLWVsJyk7XG4vLyB2YXIgbm9kZURpc3Bvc2UgPSByZXF1aXJlKCcuL25vZGUtZGlzcG9zZScpO1xuLy8gdmFyIGVsZW1lbnREaXNwb3NlQ2hpbGRyZW4gPSByZXF1aXJlKCcuL2VsZW1lbnQtZGlzcG9zZS1jaGlsZHJlbicpO1xuXG4vKipcbiAqIOeugOWNleaJp+ihjOmUgOavgeiKgueCueeahOihjOS4ulxuICpcbiAqIEBwYXJhbSB7Ym9vbGVhbj19IG5vRGV0YWNoIOaYr+WQpuS4jeimgeaKiuiKgueCueS7jmRvbeenu+mZpFxuICovXG5mdW5jdGlvbiBub2RlT3duU2ltcGxlRGlzcG9zZShub0RldGFjaCkge1xuICAgIGVsZW1lbnREaXNwb3NlQ2hpbGRyZW4odGhpcywgbm9EZXRhY2gsIDEpO1xuXG4gICAgaWYgKCFub0RldGFjaCkge1xuICAgICAgICByZW1vdmVFbCh0aGlzLl9nZXRFbCgpKTtcbiAgICB9XG5cbiAgICBub2RlRGlzcG9zZSh0aGlzKTtcbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gbm9kZU93blNpbXBsZURpc3Bvc2U7XG5cblxuLyoqXG4gKiBAZmlsZSDliJvlu7roioLngrnlr7nlupTnmoQgc3R1bXAgY29tbWVudCDlhYPntKBcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cblxuXG4vKipcbiAqIOWIm+W7uuiKgueCueWvueW6lOeahCBzdHVtcCBjb21tZW50IOS4u+WFg+e0oFxuICovXG5mdW5jdGlvbiBub2RlT3duQ3JlYXRlU3R1bXAoKSB7XG4gICAgdGhpcy5lbCA9IHRoaXMuZWwgfHwgZG9jdW1lbnQuY3JlYXRlQ29tbWVudCh0aGlzLmlkKTtcbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gbm9kZU93bkNyZWF0ZVN0dW1wO1xuXG5cblxuXG4vLyAjW2JlZ2luXSBhbGx1YVxuZnVuY3Rpb24gaXNTZXRIVE1MTm90QWxsb3cobm9kZSkge1xuICAgIG5vZGUgPSBub2RlLnBhcmVudDtcbiAgICB3aGlsZSAobm9kZSkge1xuICAgICAgICBzd2l0Y2ggKG5vZGUubm9kZVR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgTm9kZVR5cGUuRUxFTTpcbiAgICAgICAgICAgIGNhc2UgTm9kZVR5cGUuQ01QVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gbm9kZS5hTm9kZS5ob3RzcG90Lm5vU2V0SFRNTDtcbiAgICAgICAgfVxuXG4gICAgICAgIG5vZGUgPSBub2RlLnBhcmVudDtcbiAgICB9XG59XG4vLyAjW2VuZF1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gaXNTZXRIVE1MTm90QWxsb3c7XG5cblxuLyoqXG4gKiBAZmlsZSBmb3Ig5oyH5Luk6IqC54K557G7XG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG4vLyB2YXIgZXh0ZW5kID0gcmVxdWlyZSgnLi4vdXRpbC9leHRlbmQnKTtcbi8vIHZhciBpbmhlcml0cyA9IHJlcXVpcmUoJy4uL3V0aWwvaW5oZXJpdHMnKTtcbi8vIHZhciBlYWNoID0gcmVxdWlyZSgnLi4vdXRpbC9lYWNoJyk7XG4vLyB2YXIgZ3VpZCA9IHJlcXVpcmUoJy4uL3V0aWwvZ3VpZCcpO1xuLy8gdmFyIGNyZWF0ZUFOb2RlID0gcmVxdWlyZSgnLi4vcGFyc2VyL2NyZWF0ZS1hLW5vZGUnKTtcbi8vIHZhciBFeHByVHlwZSA9IHJlcXVpcmUoJy4uL3BhcnNlci9leHByLXR5cGUnKTtcbi8vIHZhciBwYXJzZUV4cHIgPSByZXF1aXJlKCcuLi9wYXJzZXIvcGFyc2UtZXhwcicpO1xuLy8gdmFyIGNyZWF0ZUFjY2Vzc29yID0gcmVxdWlyZSgnLi4vcGFyc2VyL2NyZWF0ZS1hY2Nlc3NvcicpO1xuLy8gdmFyIGNsb25lRGlyZWN0aXZlcyA9IHJlcXVpcmUoJy4uL3BhcnNlci9jbG9uZS1kaXJlY3RpdmVzJyk7XG4vLyB2YXIgRGF0YSA9IHJlcXVpcmUoJy4uL3J1bnRpbWUvZGF0YScpO1xuLy8gdmFyIERhdGFDaGFuZ2VUeXBlID0gcmVxdWlyZSgnLi4vcnVudGltZS9kYXRhLWNoYW5nZS10eXBlJyk7XG4vLyB2YXIgY2hhbmdlRXhwckNvbXBhcmUgPSByZXF1aXJlKCcuLi9ydW50aW1lL2NoYW5nZS1leHByLWNvbXBhcmUnKTtcbi8vIHZhciBjcmVhdGVIVE1MQnVmZmVyID0gcmVxdWlyZSgnLi4vcnVudGltZS9jcmVhdGUtaHRtbC1idWZmZXInKTtcbi8vIHZhciBodG1sQnVmZmVyQ29tbWVudCA9IHJlcXVpcmUoJy4uL3J1bnRpbWUvaHRtbC1idWZmZXItY29tbWVudCcpO1xuLy8gdmFyIG91dHB1dEhUTUxCdWZmZXIgPSByZXF1aXJlKCcuLi9ydW50aW1lL291dHB1dC1odG1sLWJ1ZmZlcicpO1xuLy8gdmFyIG91dHB1dEhUTUxCdWZmZXJCZWZvcmUgPSByZXF1aXJlKCcuLi9ydW50aW1lL291dHB1dC1odG1sLWJ1ZmZlci1iZWZvcmUnKTtcbi8vIHZhciBldmFsRXhwciA9IHJlcXVpcmUoJy4uL3J1bnRpbWUvZXZhbC1leHByJyk7XG4vLyB2YXIgY2hhbmdlc0lzSW5EYXRhUmVmID0gcmVxdWlyZSgnLi4vcnVudGltZS9jaGFuZ2VzLWlzLWluLWRhdGEtcmVmJyk7XG4vLyB2YXIgcmVtb3ZlRWwgPSByZXF1aXJlKCcuLi9icm93c2VyL3JlbW92ZS1lbCcpO1xuLy8gdmFyIGluc2VydEJlZm9yZSA9IHJlcXVpcmUoJy4uL2Jyb3dzZXIvaW5zZXJ0LWJlZm9yZScpO1xuLy8gdmFyIExpZmVDeWNsZSA9IHJlcXVpcmUoJy4vbGlmZS1jeWNsZScpO1xuLy8gdmFyIGF0dGFjaGluZ3MgPSByZXF1aXJlKCcuL2F0dGFjaGluZ3MnKTtcbi8vIHZhciBOb2RlVHlwZSA9IHJlcXVpcmUoJy4vbm9kZS10eXBlJyk7XG4vLyB2YXIgY3JlYXRlTm9kZSA9IHJlcXVpcmUoJy4vY3JlYXRlLW5vZGUnKTtcbi8vIHZhciBjcmVhdGVSZXZlcnNlTm9kZSA9IHJlcXVpcmUoJy4vY3JlYXRlLXJldmVyc2Utbm9kZScpO1xuLy8gdmFyIGdldE5vZGVTdHVtcFBhcmVudCA9IHJlcXVpcmUoJy4vZ2V0LW5vZGUtc3R1bXAtcGFyZW50Jyk7XG4vLyB2YXIgbm9kZU93blNpbXBsZURpc3Bvc2UgPSByZXF1aXJlKCcuL25vZGUtb3duLXNpbXBsZS1kaXNwb3NlJyk7XG4vLyB2YXIgbm9kZU93bkNyZWF0ZVN0dW1wID0gcmVxdWlyZSgnLi9ub2RlLW93bi1jcmVhdGUtc3R1bXAnKTtcbi8vIHZhciBub2RlT3duR2V0U3R1bXBFbCA9IHJlcXVpcmUoJy4vbm9kZS1vd24tZ2V0LXN0dW1wLWVsJyk7XG4vLyB2YXIgZWxlbWVudERpc3Bvc2VDaGlsZHJlbiA9IHJlcXVpcmUoJy4vZWxlbWVudC1kaXNwb3NlLWNoaWxkcmVuJyk7XG4vLyB2YXIgd2FyblNldEhUTUwgPSByZXF1aXJlKCcuL3dhcm4tc2V0LWh0bWwnKTtcbi8vIHZhciBpc1NldEhUTUxOb3RBbGxvdyA9IHJlcXVpcmUoJy4vaXMtc2V0LWh0bWwtbm90LWFsbG93Jyk7XG4vLyB2YXIgZGF0YUNhY2hlID0gcmVxdWlyZSgnLi4vcnVudGltZS9kYXRhLWNhY2hlJyk7XG5cblxuLyoqXG4gKiDlvqrnjq/pobnnmoTmlbDmja7lrrnlmajnsbtcbiAqXG4gKiBAaW5uZXJcbiAqIEBjbGFzc1xuICogQHBhcmFtIHtPYmplY3R9IGZvckVsZW1lbnQgZm9y5YWD57Sg5a+56LGhXG4gKiBAcGFyYW0geyp9IGl0ZW0g5b2T5YmN6aG555qE5pWw5o2uXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXgg5b2T5YmN6aG555qE57Si5byVXG4gKi9cbmZ1bmN0aW9uIEZvckl0ZW1EYXRhKGZvckVsZW1lbnQsIGl0ZW0sIGluZGV4KSB7XG4gICAgdGhpcy5pZCA9IGd1aWQoKTtcbiAgICB0aGlzLnBhcmVudCA9IGZvckVsZW1lbnQuc2NvcGU7XG4gICAgdGhpcy5yYXcgPSB7fTtcbiAgICB0aGlzLmxpc3RlbmVycyA9IFtdO1xuXG4gICAgdGhpcy5kaXJlY3RpdmUgPSBmb3JFbGVtZW50LmFOb2RlLmRpcmVjdGl2ZXNbJ2ZvciddOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGRvdC1ub3RhdGlvblxuICAgIHRoaXMucmF3W3RoaXMuZGlyZWN0aXZlLml0ZW0ucmF3XSA9IGl0ZW07XG4gICAgdGhpcy5yYXdbdGhpcy5kaXJlY3RpdmUuaW5kZXgucmF3XSA9IGluZGV4O1xufVxuXG4vKipcbiAqIOWwhuaVsOaNruaTjeS9nOeahOihqOi+vuW8j++8jOi9rOaNouaIkOS4uuWvuXBhcmVudOaVsOaNruaTjeS9nOeahOihqOi+vuW8j1xuICog5Li76KaB5piv5a+5aXRlbeWSjGluZGV46L+b6KGM5aSE55CGXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGV4cHIg6KGo6L6+5byPXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbkZvckl0ZW1EYXRhLnByb3RvdHlwZS5leHByUmVzb2x2ZSA9IGZ1bmN0aW9uIChleHByKSB7XG4gICAgdmFyIGRpcmVjdGl2ZSA9IHRoaXMuZGlyZWN0aXZlO1xuICAgIHZhciBtZSA9IHRoaXM7XG5cbiAgICBmdW5jdGlvbiByZXNvbHZlSXRlbShleHByKSB7XG4gICAgICAgIGlmIChleHByLnR5cGUgPT09IEV4cHJUeXBlLkFDQ0VTU09SXG4gICAgICAgICAgICAmJiBleHByLnBhdGhzWzBdLnZhbHVlID09PSBkaXJlY3RpdmUuaXRlbS5wYXRoc1swXS52YWx1ZVxuICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVBY2Nlc3NvcihcbiAgICAgICAgICAgICAgICBkaXJlY3RpdmUudmFsdWUucGF0aHMuY29uY2F0KFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBFeHByVHlwZS5OVU1CRVIsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogbWUuZ2V0KGRpcmVjdGl2ZS5pbmRleClcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZXhwci5wYXRocy5zbGljZSgxKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZXhwcjtcbiAgICB9XG5cbiAgICBleHByID0gcmVzb2x2ZUl0ZW0oZXhwcik7XG5cbiAgICB2YXIgcmVzb2x2ZWRQYXRocyA9IFtdO1xuXG4gICAgZWFjaChleHByLnBhdGhzLCBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICByZXNvbHZlZFBhdGhzLnB1c2goXG4gICAgICAgICAgICBpdGVtLnR5cGUgPT09IEV4cHJUeXBlLkFDQ0VTU09SXG4gICAgICAgICAgICAgICAgJiYgaXRlbS5wYXRoc1swXS52YWx1ZSA9PT0gZGlyZWN0aXZlLmluZGV4LnBhdGhzWzBdLnZhbHVlXG4gICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBFeHByVHlwZS5OVU1CRVIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IG1lLmdldChkaXJlY3RpdmUuaW5kZXgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA6IHJlc29sdmVJdGVtKGl0ZW0pXG4gICAgICAgICk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gY3JlYXRlQWNjZXNzb3IocmVzb2x2ZWRQYXRocyk7XG59O1xuXG4vLyDku6PnkIbmlbDmja7mk43kvZzmlrnms5VcbmluaGVyaXRzKEZvckl0ZW1EYXRhLCBEYXRhKTtcbmVhY2goXG4gICAgWydzZXQnLCAncmVtb3ZlJywgJ3Vuc2hpZnQnLCAnc2hpZnQnLCAncHVzaCcsICdwb3AnLCAnc3BsaWNlJ10sXG4gICAgZnVuY3Rpb24gKG1ldGhvZCkge1xuICAgICAgICBGb3JJdGVtRGF0YS5wcm90b3R5cGVbJ18nICsgbWV0aG9kXSA9IERhdGEucHJvdG90eXBlW21ldGhvZF07XG4gICAgICAgIEZvckl0ZW1EYXRhLnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24gKGV4cHIpIHtcbiAgICAgICAgICAgIGV4cHIgPSB0aGlzLmV4cHJSZXNvbHZlKHBhcnNlRXhwcihleHByKSk7XG4gICAgICAgICAgICBkYXRhQ2FjaGUuY2xlYXIoKTtcbiAgICAgICAgICAgIHRoaXMucGFyZW50W21ldGhvZF0uYXBwbHkoXG4gICAgICAgICAgICAgICAgdGhpcy5wYXJlbnQsXG4gICAgICAgICAgICAgICAgW2V4cHJdLmNvbmNhdChBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfTtcbiAgICB9XG4pO1xuXG4vKipcbiAqIOWIm+W7uiBmb3Ig5oyH5Luk5YWD57Sg55qE5a2Q5YWD57SgXG4gKlxuICogQGlubmVyXG4gKiBAcGFyYW0ge0ZvckRpcmVjdGl2ZX0gZm9yRWxlbWVudCBmb3Ig5oyH5Luk5YWD57Sg5a+56LGhXG4gKiBAcGFyYW0geyp9IGl0ZW0g5a2Q5YWD57Sg5a+55bqU5pWw5o2uXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXgg5a2Q5YWD57Sg5a+55bqU5bqP5Y+3XG4gKiBAcmV0dXJuIHtFbGVtZW50fVxuICovXG5mdW5jdGlvbiBjcmVhdGVGb3JEaXJlY3RpdmVDaGlsZChmb3JFbGVtZW50LCBpdGVtLCBpbmRleCkge1xuICAgIHZhciBpdGVtU2NvcGUgPSBuZXcgRm9ySXRlbURhdGEoZm9yRWxlbWVudCwgaXRlbSwgaW5kZXgpO1xuICAgIHJldHVybiBjcmVhdGVOb2RlKGZvckVsZW1lbnQuaXRlbUFOb2RlLCBmb3JFbGVtZW50LCBpdGVtU2NvcGUpO1xufVxuXG4vKipcbiAqIGZvciDmjIfku6ToioLngrnnsbtcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gYU5vZGUg5oq96LGh6IqC54K5XG4gKiBAcGFyYW0ge0NvbXBvbmVudH0gb3duZXIg5omA5bGe57uE5Lu2546v5aKDXG4gKiBAcGFyYW0ge01vZGVsPX0gc2NvcGUg5omA5bGe5pWw5o2u546v5aKDXG4gKiBAcGFyYW0ge05vZGV9IHBhcmVudCDniLbkurLoioLngrlcbiAqIEBwYXJhbSB7RE9NQ2hpbGRyZW5XYWxrZXI/fSByZXZlcnNlV2Fsa2VyIOWtkOWFg+e0oOmBjeWOhuWvueixoVxuICovXG5mdW5jdGlvbiBGb3JOb2RlKGFOb2RlLCBvd25lciwgc2NvcGUsIHBhcmVudCwgcmV2ZXJzZVdhbGtlcikge1xuICAgIHRoaXMuYU5vZGUgPSBhTm9kZTtcbiAgICB0aGlzLm93bmVyID0gb3duZXI7XG4gICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICAgIHRoaXMucGFyZW50Q29tcG9uZW50ID0gcGFyZW50Lm5vZGVUeXBlID09PSBOb2RlVHlwZS5DTVBUXG4gICAgICAgID8gcGFyZW50XG4gICAgICAgIDogcGFyZW50LnBhcmVudENvbXBvbmVudDtcblxuICAgIHRoaXMuaWQgPSBndWlkKCk7XG4gICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xuXG4gICAgdGhpcy5pdGVtQU5vZGUgPSBjcmVhdGVBTm9kZSh7XG4gICAgICAgIGNoaWxkcmVuOiBhTm9kZS5jaGlsZHJlbixcbiAgICAgICAgcHJvcHM6IGFOb2RlLnByb3BzLFxuICAgICAgICBldmVudHM6IGFOb2RlLmV2ZW50cyxcbiAgICAgICAgdGFnTmFtZTogYU5vZGUudGFnTmFtZSxcbiAgICAgICAgdmFyczogYU5vZGUudmFycyxcbiAgICAgICAgaG90c3BvdDogYU5vZGUuaG90c3BvdCxcbiAgICAgICAgZGlyZWN0aXZlczogY2xvbmVEaXJlY3RpdmVzKGFOb2RlLmRpcmVjdGl2ZXMsIHtcbiAgICAgICAgICAgICdmb3InOiAxXG4gICAgICAgIH0pXG4gICAgfSk7XG5cbiAgICB0aGlzLnBhcmFtID0gYU5vZGUuZGlyZWN0aXZlc1snZm9yJ107IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZG90LW5vdGF0aW9uXG5cbiAgICAvLyAjW2JlZ2luXSByZXZlcnNlXG4gICAgaWYgKHJldmVyc2VXYWxrZXIpIHtcbiAgICAgICAgdmFyIG1lID0gdGhpcztcbiAgICAgICAgZWFjaChcbiAgICAgICAgICAgIGV2YWxFeHByKHRoaXMucGFyYW0udmFsdWUsIHRoaXMuc2NvcGUsIHRoaXMub3duZXIpLFxuICAgICAgICAgICAgZnVuY3Rpb24gKGl0ZW0sIGkpIHtcbiAgICAgICAgICAgICAgICB2YXIgaXRlbVNjb3BlID0gbmV3IEZvckl0ZW1EYXRhKG1lLCBpdGVtLCBpKTtcbiAgICAgICAgICAgICAgICB2YXIgY2hpbGQgPSBjcmVhdGVSZXZlcnNlTm9kZShtZS5pdGVtQU5vZGUsIHJldmVyc2VXYWxrZXIsIG1lLCBpdGVtU2NvcGUpO1xuICAgICAgICAgICAgICAgIG1lLmNoaWxkcmVuLnB1c2goY2hpbGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMuX2NyZWF0ZSgpO1xuICAgICAgICBpbnNlcnRCZWZvcmUodGhpcy5lbCwgcmV2ZXJzZVdhbGtlci50YXJnZXQsIHJldmVyc2VXYWxrZXIuY3VycmVudCk7XG4gICAgfVxuICAgIC8vICNbZW5kXVxufVxuXG5cbkZvck5vZGUucHJvdG90eXBlLm5vZGVUeXBlID0gTm9kZVR5cGUuRk9SO1xuRm9yTm9kZS5wcm90b3R5cGUuX2NyZWF0ZSA9IG5vZGVPd25DcmVhdGVTdHVtcDtcbkZvck5vZGUucHJvdG90eXBlLl9nZXRFbCA9IG5vZGVPd25HZXRTdHVtcEVsO1xuRm9yTm9kZS5wcm90b3R5cGUuZGlzcG9zZSA9IG5vZGVPd25TaW1wbGVEaXNwb3NlO1xuXG4vKipcbiAqIOWwhuWFg+e0oGF0dGFjaOWIsOmhtemdoueahOihjOS4ulxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHBhcmVudEVsIOimgea3u+WKoOWIsOeahOeItuWFg+e0oFxuICogQHBhcmFtIHtIVE1MRWxlbWVudO+8nX0gYmVmb3JlRWwg6KaB5re75Yqg5Yiw5ZOq5Liq5YWD57Sg5LmL5YmNXG4gKi9cbkZvck5vZGUucHJvdG90eXBlLmF0dGFjaCA9IGZ1bmN0aW9uIChwYXJlbnRFbCwgYmVmb3JlRWwpIHtcbiAgICB0aGlzLl9jcmVhdGUoKTtcbiAgICBpbnNlcnRCZWZvcmUodGhpcy5lbCwgcGFyZW50RWwsIGJlZm9yZUVsKTtcblxuICAgIC8vIHBhaW50IGxpc3RcbiAgICB2YXIgZWwgPSB0aGlzLmVsIHx8IHBhcmVudEVsLmZpcnN0Q2hpbGQ7XG4gICAgdmFyIHByZXZFbCA9IGVsICYmIGVsLnByZXZpb3VzU2libGluZztcbiAgICB2YXIgYnVmID0gY3JlYXRlSFRNTEJ1ZmZlcigpO1xuXG4gICAgcHJldjogd2hpbGUgKHByZXZFbCkge1xuICAgICAgICB2YXIgbmV4dFByZXYgPSBwcmV2RWwucHJldmlvdXNTaWJsaW5nO1xuICAgICAgICBzd2l0Y2ggKHByZXZFbC5ub2RlVHlwZSkge1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIGJyZWFrIHByZXY7XG5cbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICBpZiAoIS9eXFxzKiQvLnRlc3QocHJldkVsLnRleHRDb250ZW50KSkge1xuICAgICAgICAgICAgICAgICAgICBicmVhayBwcmV2O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJlbW92ZUVsKHByZXZFbCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHByZXZFbCA9IG5leHRQcmV2O1xuICAgIH1cblxuICAgIGlmIChcbiAgICAgICAgLy8gI1tiZWdpbl0gYWxsdWFcbiAgICAgICAgaXNTZXRIVE1MTm90QWxsb3codGhpcylcbiAgICAgICAgfHxcbiAgICAgICAgLy8gI1tlbmRdXG4gICAgICAgIHByZXZFbCAmJiBwcmV2RWwubm9kZVR5cGUgIT09IDFcbiAgICApIHtcbiAgICAgICAgdmFyIG1lID0gdGhpcztcbiAgICAgICAgZWFjaChcbiAgICAgICAgICAgIGV2YWxFeHByKHRoaXMucGFyYW0udmFsdWUsIHRoaXMuc2NvcGUsIHRoaXMub3duZXIpLFxuICAgICAgICAgICAgZnVuY3Rpb24gKGl0ZW0sIGkpIHtcbiAgICAgICAgICAgICAgICB2YXIgY2hpbGQgPSBjcmVhdGVGb3JEaXJlY3RpdmVDaGlsZChtZSwgaXRlbSwgaSk7XG4gICAgICAgICAgICAgICAgbWUuY2hpbGRyZW4ucHVzaChjaGlsZCk7XG4gICAgICAgICAgICAgICAgY2hpbGQuYXR0YWNoKHBhcmVudEVsLCBlbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuICAgIGVsc2UgaWYgKCFwcmV2RWwpIHtcbiAgICAgICAgdGhpcy5fYXR0YWNoSFRNTChidWYsIDEpO1xuICAgICAgICBvdXRwdXRIVE1MQnVmZmVyKGJ1ZiwgcGFyZW50RWwsICdhZnRlcmJlZ2luJyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB0aGlzLl9hdHRhY2hIVE1MKGJ1ZiwgMSk7XG4gICAgICAgIG91dHB1dEhUTUxCdWZmZXIoYnVmLCBwcmV2RWwsICdhZnRlcmVuZCcpO1xuICAgIH1cblxuICAgIGF0dGFjaGluZ3MuZG9uZSgpO1xufTtcblxuLyoqXG4gKiDlsIblhYPntKDku47pobXpnaLkuIrnp7vpmaTnmoTooYzkuLpcbiAqL1xuRm9yTm9kZS5wcm90b3R5cGUuZGV0YWNoID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLmxpZmVDeWNsZS5hdHRhY2hlZCkge1xuICAgICAgICBlbGVtZW50RGlzcG9zZUNoaWxkcmVuKHRoaXMpO1xuICAgICAgICB0aGlzLmNoaWxkcmVuID0gW107XG4gICAgICAgIHJlbW92ZUVsKHRoaXMuX2dldEVsKCkpO1xuICAgICAgICB0aGlzLmxpZmVDeWNsZSA9IExpZmVDeWNsZS5kZXRhY2hlZDtcbiAgICB9XG59O1xuXG5cbi8qKlxuICogYXR0YWNo5YWD57Sg55qEaHRtbFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBidWYgaHRtbOS4suWtmOWCqOWvueixoVxuICogQHBhcmFtIHtib29sZWFufSBvbmx5Q2hpbGRyZW4g5piv5ZCm5Y+qYXR0YWNo5YiX6KGo5pys6LqraHRtbO+8jOS4jeWMheaLrHN0dW1w6YOo5YiGXG4gKi9cbkZvck5vZGUucHJvdG90eXBlLl9hdHRhY2hIVE1MID0gZnVuY3Rpb24gKGJ1Ziwgb25seUNoaWxkcmVuKSB7XG4gICAgdmFyIG1lID0gdGhpcztcbiAgICBlYWNoKFxuICAgICAgICBldmFsRXhwcih0aGlzLnBhcmFtLnZhbHVlLCB0aGlzLnNjb3BlLCB0aGlzLm93bmVyKSxcbiAgICAgICAgZnVuY3Rpb24gKGl0ZW0sIGkpIHtcbiAgICAgICAgICAgIHZhciBjaGlsZCA9IGNyZWF0ZUZvckRpcmVjdGl2ZUNoaWxkKG1lLCBpdGVtLCBpKTtcbiAgICAgICAgICAgIG1lLmNoaWxkcmVuLnB1c2goY2hpbGQpO1xuICAgICAgICAgICAgY2hpbGQuX2F0dGFjaEhUTUwoYnVmKTtcbiAgICAgICAgfVxuICAgICk7XG5cbiAgICBpZiAoIW9ubHlDaGlsZHJlbikge1xuICAgICAgICBodG1sQnVmZmVyQ29tbWVudChidWYsIG1lLmlkKTtcbiAgICB9XG59O1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBmZWNzLW1heC1zdGF0ZW1lbnRzICovXG5cbi8qKlxuICog6KeG5Zu+5pu05paw5Ye95pWwXG4gKlxuICogQHBhcmFtIHtBcnJheX0gY2hhbmdlcyDmlbDmja7lj5jljJbkv6Hmga9cbiAqL1xuRm9yTm9kZS5wcm90b3R5cGUuX3VwZGF0ZSA9IGZ1bmN0aW9uIChjaGFuZ2VzKSB7XG5cbiAgICB2YXIgbWUgPSB0aGlzO1xuICAgIC8vIOaOp+WItuWIl+ihqOabtOaWsOetlueVpeaYr+WQpuWOn+agt+abtOaWsOeahOWPmOmHj1xuICAgIHZhciBvcmlnaW5hbFVwZGF0ZSA9IHRoaXMuYU5vZGUuZGlyZWN0aXZlcy50cmFuc2l0aW9uO1xuXG5cbiAgICB2YXIgb2xkQ2hpbGRyZW5MZW4gPSB0aGlzLmNoaWxkcmVuLmxlbmd0aDtcbiAgICB2YXIgY2hpbGRyZW5DaGFuZ2VzID0gbmV3IEFycmF5KG9sZENoaWxkcmVuTGVuKTtcblxuICAgIGZ1bmN0aW9uIHB1c2hUb0NoaWxkcmVuQ2hhbmdlcyhjaGFuZ2UpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBjaGlsZHJlbkNoYW5nZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICAoY2hpbGRyZW5DaGFuZ2VzW2ldID0gY2hpbGRyZW5DaGFuZ2VzW2ldIHx8IFtdKS5wdXNoKGNoYW5nZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgZGlzcG9zZUNoaWxkcmVuID0gW107XG5cbiAgICB0aGlzLl9nZXRFbCgpO1xuXG4gICAgLy8g5Yik5pat5YiX6KGo5piv5ZCm54i25YWD57Sg5LiL5ZSv5LiA55qE5YWD57SgXG4gICAgLy8g5aaC5p6c5piv55qE6K+d77yM5Y+v5Lul5YGa5LiA5Lqb5pu05paw5LyY5YyWXG4gICAgdmFyIHBhcmVudEVsID0gZ2V0Tm9kZVN0dW1wUGFyZW50KHRoaXMpO1xuICAgIHZhciBwYXJlbnRGaXJzdENoaWxkID0gcGFyZW50RWwuZmlyc3RDaGlsZDtcbiAgICB2YXIgcGFyZW50TGFzdENoaWxkID0gcGFyZW50RWwubGFzdENoaWxkO1xuICAgIHZhciBpc09ubHlQYXJlbnRDaGlsZCA9IG9sZENoaWxkcmVuTGVuID4gMCAvLyDmnInlranlrZDml7ZcbiAgICAgICAgICAgICYmIHBhcmVudEZpcnN0Q2hpbGQgPT09IHRoaXMuY2hpbGRyZW5bMF0uX2dldEVsKClcbiAgICAgICAgICAgICYmIChwYXJlbnRMYXN0Q2hpbGQgPT09IHRoaXMuZWwgfHwgcGFyZW50TGFzdENoaWxkID09PSB0aGlzLmNoaWxkcmVuW29sZENoaWxkcmVuTGVuIC0gMV0uX2dldEVsKCkpXG4gICAgICAgIHx8IG9sZENoaWxkcmVuTGVuID09PSAwIC8vIOaXoOWtqeWtkOaXtlxuICAgICAgICAgICAgJiYgcGFyZW50Rmlyc3RDaGlsZCA9PT0gdGhpcy5lbFxuICAgICAgICAgICAgJiYgcGFyZW50TGFzdENoaWxkID09PSB0aGlzLmVsO1xuXG4gICAgLy8g5o6n5Yi25YiX6KGo5piv5ZCm5pW05L2T5pu05paw55qE5Y+Y6YePXG4gICAgdmFyIGlzQ2hpbGRyZW5SZWJ1aWxkO1xuXG4gICAgdmFyIG5ld0xpc3QgPSBldmFsRXhwcih0aGlzLnBhcmFtLnZhbHVlLCB0aGlzLnNjb3BlLCB0aGlzLm93bmVyKTtcbiAgICB2YXIgbmV3TGVuID0gbmV3TGlzdCAmJiBuZXdMaXN0Lmxlbmd0aCB8fCAwO1xuXG4gICAgLyogZXNsaW50LWRpc2FibGUgbm8tcmVkZWNsYXJlICovXG4gICAgZm9yICh2YXIgY0luZGV4ID0gMCwgY0xlbiA9IGNoYW5nZXMubGVuZ3RoOyBjSW5kZXggPCBjTGVuOyBjSW5kZXgrKykge1xuICAgICAgICB2YXIgY2hhbmdlID0gY2hhbmdlc1tjSW5kZXhdO1xuICAgICAgICB2YXIgcmVsYXRpb24gPSBjaGFuZ2VFeHByQ29tcGFyZShjaGFuZ2UuZXhwciwgdGhpcy5wYXJhbS52YWx1ZSwgdGhpcy5zY29wZSk7XG5cbiAgICAgICAgaWYgKCFyZWxhdGlvbikge1xuICAgICAgICAgICAgLy8g5peg5YWz5pe277yM55u05o6l5Lyg6YCS57uZ5a2Q5YWD57Sg5pu05paw77yM5YiX6KGo5pys6Lqr5LiN6ZyA6KaB5YqoXG4gICAgICAgICAgICBwdXNoVG9DaGlsZHJlbkNoYW5nZXMoY2hhbmdlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChyZWxhdGlvbiA+IDIpIHtcbiAgICAgICAgICAgIC8vIOWPmOabtOihqOi+vuW8j+aYr2xpc3Tnu5Hlrprooajovr7lvI/nmoTlrZDpoblcbiAgICAgICAgICAgIC8vIOWPqumcgOimgeWvueebuOW6lOeahOWtkOmhuei/m+ihjOabtOaWsFxuICAgICAgICAgICAgdmFyIGNoYW5nZVBhdGhzID0gY2hhbmdlLmV4cHIucGF0aHM7XG4gICAgICAgICAgICB2YXIgZm9yTGVuID0gdGhpcy5wYXJhbS52YWx1ZS5wYXRocy5sZW5ndGg7XG4gICAgICAgICAgICB2YXIgY2hhbmdlSW5kZXggPSArZXZhbEV4cHIoY2hhbmdlUGF0aHNbZm9yTGVuXSwgdGhpcy5zY29wZSwgdGhpcy5vd25lcik7XG5cbiAgICAgICAgICAgIGlmIChpc05hTihjaGFuZ2VJbmRleCkpIHtcbiAgICAgICAgICAgICAgICBwdXNoVG9DaGlsZHJlbkNoYW5nZXMoY2hhbmdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNoYW5nZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogY2hhbmdlLnR5cGUsXG4gICAgICAgICAgICAgICAgICAgIGV4cHI6IGNyZWF0ZUFjY2Vzc29yKFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJhbS5pdGVtLnBhdGhzLmNvbmNhdChjaGFuZ2VQYXRocy5zbGljZShmb3JMZW4gKyAxKSlcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGNoYW5nZS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IGNoYW5nZS5pbmRleCxcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlQ291bnQ6IGNoYW5nZS5kZWxldGVDb3VudCxcbiAgICAgICAgICAgICAgICAgICAgaW5zZXJ0aW9uczogY2hhbmdlLmluc2VydGlvbnMsXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbjogY2hhbmdlLm9wdGlvblxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAoY2hpbGRyZW5DaGFuZ2VzW2NoYW5nZUluZGV4XSA9IGNoaWxkcmVuQ2hhbmdlc1tjaGFuZ2VJbmRleF0gfHwgW10pXG4gICAgICAgICAgICAgICAgICAgIC5wdXNoKGNoYW5nZSk7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jaGlsZHJlbltjaGFuZ2VJbmRleF0pIHtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChjaGFuZ2UudHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBEYXRhQ2hhbmdlVHlwZS5TRVQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGlsZHJlbltjaGFuZ2VJbmRleF0uc2NvcGUuX3NldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlLmV4cHIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3NpbGVudDogMX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgRGF0YUNoYW5nZVR5cGUuU1BMSUNFOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2hpbGRyZW5bY2hhbmdlSW5kZXhdLnNjb3BlLl9zcGxpY2UoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZS5leHByLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXS5jb25jYXQoY2hhbmdlLmluZGV4LCBjaGFuZ2UuZGVsZXRlQ291bnQsIGNoYW5nZS5pbnNlcnRpb25zKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3NpbGVudDogMX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNoYW5nZS50eXBlID09PSBEYXRhQ2hhbmdlVHlwZS5TRVQpIHtcbiAgICAgICAgICAgIC8vIOWPmOabtOihqOi+vuW8j+aYr2xpc3Tnu5Hlrprooajovr7lvI/mnKzouqvmiJbmr43pobnnmoTph43mlrDorr7lgLxcbiAgICAgICAgICAgIC8vIOatpOaXtumcgOimgeabtOaWsOaVtOS4quWIl+ihqFxuXG5cbiAgICAgICAgICAgIC8vIOiAgeeahOavlOaWsOeahOWkmueahOmDqOWIhu+8jOagh+iusOmcgOimgWRpc3Bvc2VcbiAgICAgICAgICAgIGlmIChvbGRDaGlsZHJlbkxlbiA+IG5ld0xlbikge1xuICAgICAgICAgICAgICAgIGRpc3Bvc2VDaGlsZHJlbiA9IGRpc3Bvc2VDaGlsZHJlbi5jb25jYXQodGhpcy5jaGlsZHJlbi5zbGljZShuZXdMZW4pKTtcblxuICAgICAgICAgICAgICAgIGNoaWxkcmVuQ2hhbmdlcyA9IGNoaWxkcmVuQ2hhbmdlcy5zbGljZSgwLCBuZXdMZW4pO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hpbGRyZW4gPSB0aGlzLmNoaWxkcmVuLnNsaWNlKDAsIG5ld0xlbik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIOaVtOmhueWPmOabtFxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuZXdMZW47IGkrKykge1xuICAgICAgICAgICAgICAgIChjaGlsZHJlbkNoYW5nZXNbaV0gPSBjaGlsZHJlbkNoYW5nZXNbaV0gfHwgW10pLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBEYXRhQ2hhbmdlVHlwZS5TRVQsXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbjogY2hhbmdlLm9wdGlvbixcbiAgICAgICAgICAgICAgICAgICAgZXhwcjogY3JlYXRlQWNjZXNzb3IodGhpcy5wYXJhbS5pdGVtLnBhdGhzLnNsaWNlKDApKSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG5ld0xpc3RbaV1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIC8vIOWvuWxpc3Tmm7TkuIrnuqfmlbDmja7nmoTnm7TmjqXorr7nva5cbiAgICAgICAgICAgICAgICBpZiAocmVsYXRpb24gPCAyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuQ2hhbmdlc1tpXS5wdXNoKGNoYW5nZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2hpbGRyZW5baV0pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGlsZHJlbltpXS5zY29wZS5fc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJhbS5pdGVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3TGlzdFtpXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzaWxlbnQ6IDF9XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoaWxkcmVuW2ldID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlzQ2hpbGRyZW5SZWJ1aWxkID0gMTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChyZWxhdGlvbiA9PT0gMiAmJiBjaGFuZ2UudHlwZSA9PT0gRGF0YUNoYW5nZVR5cGUuU1BMSUNFICYmICFpc0NoaWxkcmVuUmVidWlsZCkge1xuICAgICAgICAgICAgLy8g5Y+Y5pu06KGo6L6+5byP5pivbGlzdOe7keWumuihqOi+vuW8j+acrOi6q+aVsOe7hOeahHNwbGljZeaTjeS9nFxuICAgICAgICAgICAgLy8g5q2k5pe26ZyA6KaB5Yig6Zmk6YOo5YiG6aG577yM5Yib5bu66YOo5YiG6aG5XG4gICAgICAgICAgICB2YXIgY2hhbmdlU3RhcnQgPSBjaGFuZ2UuaW5kZXg7XG4gICAgICAgICAgICB2YXIgZGVsZXRlQ291bnQgPSBjaGFuZ2UuZGVsZXRlQ291bnQ7XG4gICAgICAgICAgICB2YXIgaW5zZXJ0aW9uc0xlbiA9IGNoYW5nZS5pbnNlcnRpb25zLmxlbmd0aDtcbiAgICAgICAgICAgIHZhciBuZXdDb3VudCA9IGluc2VydGlvbnNMZW4gLSBkZWxldGVDb3VudDtcblxuICAgICAgICAgICAgaWYgKG5ld0NvdW50KSB7XG4gICAgICAgICAgICAgICAgdmFyIGluZGV4Q2hhbmdlID0ge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBEYXRhQ2hhbmdlVHlwZS5TRVQsXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbjogY2hhbmdlLm9wdGlvbixcbiAgICAgICAgICAgICAgICAgICAgZXhwcjogdGhpcy5wYXJhbS5pbmRleFxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gY2hhbmdlU3RhcnQgKyBkZWxldGVDb3VudDsgaSA8IHRoaXMuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgKGNoaWxkcmVuQ2hhbmdlc1tpXSA9IGNoaWxkcmVuQ2hhbmdlc1tpXSB8fCBbXSkucHVzaChpbmRleENoYW5nZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hpbGRyZW5baV0gJiYgdGhpcy5jaGlsZHJlbltpXS5zY29wZS5fc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhDaGFuZ2UuZXhwcixcbiAgICAgICAgICAgICAgICAgICAgICAgIGkgLSBkZWxldGVDb3VudCArIGluc2VydGlvbnNMZW4sXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHNpbGVudDogMSB9XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgZGVsZXRlTGVuID0gZGVsZXRlQ291bnQ7XG4gICAgICAgICAgICB3aGlsZSAoZGVsZXRlTGVuLS0pIHtcbiAgICAgICAgICAgICAgICBpZiAoZGVsZXRlTGVuIDwgaW5zZXJ0aW9uc0xlbikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaSA9IGNoYW5nZVN0YXJ0ICsgZGVsZXRlTGVuO1xuICAgICAgICAgICAgICAgICAgICAvLyB1cGRhdGVcbiAgICAgICAgICAgICAgICAgICAgKGNoaWxkcmVuQ2hhbmdlc1tpXSA9IGNoaWxkcmVuQ2hhbmdlc1tpXSB8fCBbXSkucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBEYXRhQ2hhbmdlVHlwZS5TRVQsXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb246IGNoYW5nZS5vcHRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByOiBjcmVhdGVBY2Nlc3Nvcih0aGlzLnBhcmFtLml0ZW0ucGF0aHMuc2xpY2UoMCkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG5ld0xpc3RbaV1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoaWxkcmVuW2ldKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoaWxkcmVuW2ldLnNjb3BlLl9zZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJhbS5pdGVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0xpc3RbaV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzaWxlbnQ6IDEgfVxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG5ld0NvdW50IDwgMCkge1xuICAgICAgICAgICAgICAgIGRpc3Bvc2VDaGlsZHJlbiA9IGRpc3Bvc2VDaGlsZHJlbi5jb25jYXQodGhpcy5jaGlsZHJlbi5zcGxpY2UoY2hhbmdlU3RhcnQgKyBpbnNlcnRpb25zTGVuLCAtbmV3Q291bnQpKTtcbiAgICAgICAgICAgICAgICBjaGlsZHJlbkNoYW5nZXMuc3BsaWNlKGNoYW5nZVN0YXJ0ICsgaW5zZXJ0aW9uc0xlbiwgLW5ld0NvdW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKG5ld0NvdW50ID4gMCkge1xuICAgICAgICAgICAgICAgIHZhciBzcGxpY2VBcmdzID0gW2NoYW5nZVN0YXJ0ICsgZGVsZXRlQ291bnQsIDBdLmNvbmNhdChuZXcgQXJyYXkobmV3Q291bnQpKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoaWxkcmVuLnNwbGljZS5hcHBseSh0aGlzLmNoaWxkcmVuLCBzcGxpY2VBcmdzKTtcbiAgICAgICAgICAgICAgICBjaGlsZHJlbkNoYW5nZXMuc3BsaWNlLmFwcGx5KGNoaWxkcmVuQ2hhbmdlcywgc3BsaWNlQXJncyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgbmV3Q2hpbGRyZW5MZW4gPSB0aGlzLmNoaWxkcmVuLmxlbmd0aDtcblxuICAgIC8vIOagh+iusCBsZW5ndGgg5piv5ZCm5Y+R55Sf5Y+Y5YyWXG4gICAgaWYgKG5ld0NoaWxkcmVuTGVuICE9PSBvbGRDaGlsZHJlbkxlbikge1xuICAgICAgICB2YXIgbGVuZ3RoQ2hhbmdlID0ge1xuICAgICAgICAgICAgdHlwZTogRGF0YUNoYW5nZVR5cGUuU0VULFxuICAgICAgICAgICAgb3B0aW9uOiB7fSxcbiAgICAgICAgICAgIGV4cHI6IGNyZWF0ZUFjY2Vzc29yKFxuICAgICAgICAgICAgICAgIHRoaXMucGFyYW0udmFsdWUucGF0aHMuY29uY2F0KHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogRXhwclR5cGUuU1RSSU5HLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ2xlbmd0aCdcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChjaGFuZ2VzSXNJbkRhdGFSZWYoW2xlbmd0aENoYW5nZV0sIHRoaXMuYU5vZGUuaG90c3BvdC5kYXRhKSkge1xuICAgICAgICAgICAgcHVzaFRvQ2hpbGRyZW5DaGFuZ2VzKGxlbmd0aENoYW5nZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyDmuIXpmaTlupTor6XlubLmjonnmoQgY2hpbGRcbiAgICB0aGlzLl9kb0NyZWF0ZUFuZFVwZGF0ZSA9IGRvQ3JlYXRlQW5kVXBkYXRlO1xuXG4gICAgLy8g6L+Z6YeM5LiN55SoZ2V0VHJhbnNpdGlvbu+8jGdldFRyYW5zaXRpb27lkoxzY29wZeebuOWFs++8jGZvcuWSjGZvckl0ZW3nmoRzY29wZeaYr+S4jeWQjOeahFxuICAgIC8vIOaJgOS7pWdldFRyYW5zaXRpb27nu5PmnpzmnKzouqvkuZ/mmK/kuI3kuIDoh7TnmoTjgILkuI3lpoLnm7TmjqXliKTmlq3mjIfku6TmmK/lkKblrZjlnKjvvIzlpoLmnpzlrZjlnKjlsLHkuI3ov5vlhaXmmrTlipvmuIXpmaTmqKHlvI9cbiAgICAvLyB2YXIgdmlvbGVudENsZWFyID0gaXNPbmx5UGFyZW50Q2hpbGQgJiYgbmV3Q2hpbGRyZW5MZW4gPT09IDAgJiYgIWVsZW1lbnRHZXRUcmFuc2l0aW9uKG1lKTtcbiAgICB2YXIgdmlvbGVudENsZWFyID0gIW9yaWdpbmFsVXBkYXRlICYmIGlzT25seVBhcmVudENoaWxkICYmIG5ld0NoaWxkcmVuTGVuID09PSAwO1xuXG4gICAgdmFyIGRpc3Bvc2VkQ2hpbGRDb3VudCA9IDA7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkaXNwb3NlQ2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGRpc3Bvc2VDaGlsZCA9IGRpc3Bvc2VDaGlsZHJlbltpXTtcbiAgICAgICAgaWYgKGRpc3Bvc2VDaGlsZCkge1xuICAgICAgICAgICAgZGlzcG9zZUNoaWxkLl9vbmRpc3Bvc2VkID0gY2hpbGREaXNwb3NlZDtcbiAgICAgICAgICAgIGRpc3Bvc2VDaGlsZC5kaXNwb3NlKHZpb2xlbnRDbGVhciwgdmlvbGVudENsZWFyKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNoaWxkRGlzcG9zZWQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2aW9sZW50Q2xlYXIpIHtcbiAgICAgICAgLy8gY2xvbmVOb2RlICsgcmVwbGFjZUNoaWxkIGlzIGZhc3RlclxuICAgICAgICAvLyBwYXJlbnRFbC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgdmFyIHJlcGxhY2VOb2RlID0gcGFyZW50RWwuY2xvbmVOb2RlKGZhbHNlKTtcbiAgICAgICAgcGFyZW50RWwucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQocmVwbGFjZU5vZGUsIHBhcmVudEVsKTtcbiAgICAgICAgdGhpcy5lbCA9IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQodGhpcy5pZCk7XG4gICAgICAgIHJlcGxhY2VOb2RlLmFwcGVuZENoaWxkKHRoaXMuZWwpO1xuICAgIH1cblxuICAgIGlmIChkaXNwb3NlQ2hpbGRyZW4ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGRvQ3JlYXRlQW5kVXBkYXRlKCk7XG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiBjaGlsZERpc3Bvc2VkKCkge1xuICAgICAgICBkaXNwb3NlZENoaWxkQ291bnQrKztcbiAgICAgICAgaWYgKGRpc3Bvc2VkQ2hpbGRDb3VudCA9PT0gZGlzcG9zZUNoaWxkcmVuLmxlbmd0aFxuICAgICAgICAgICAgJiYgZG9DcmVhdGVBbmRVcGRhdGUgPT09IG1lLl9kb0NyZWF0ZUFuZFVwZGF0ZVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGRvQ3JlYXRlQW5kVXBkYXRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkb0NyZWF0ZUFuZFVwZGF0ZSgpIHtcbiAgICAgICAgbWUuX2RvQ3JlYXRlQW5kVXBkYXRlID0gbnVsbDtcbiAgICAgICAgaWYgKHZpb2xlbnRDbGVhcikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cblxuICAgICAgICB2YXIgbmV3Q2hpbGRCdWYgPSBjcmVhdGVIVE1MQnVmZmVyKCk7XG5cbiAgICAgICAgLy8g5a+555u45bqU55qE6aG56L+b6KGM5pu05pawXG4gICAgICAgIGlmIChvbGRDaGlsZHJlbkxlbiA9PT0gMCAmJiBpc09ubHlQYXJlbnRDaGlsZCkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuZXdDaGlsZHJlbkxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgKG1lLmNoaWxkcmVuW2ldID0gY3JlYXRlRm9yRGlyZWN0aXZlQ2hpbGQobWUsIG5ld0xpc3RbaV0sIGkpKS5fYXR0YWNoSFRNTChuZXdDaGlsZEJ1Zik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvdXRwdXRIVE1MQnVmZmVyKG5ld0NoaWxkQnVmLCBwYXJlbnRFbCk7XG4gICAgICAgICAgICBtZS5lbCA9IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQobWUuaWQpO1xuICAgICAgICAgICAgcGFyZW50RWwuYXBwZW5kQ2hpbGQobWUuZWwpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8g5aaC5p6c5LiNYXR0YWNoZWTliJnnm7TmjqXliJvlu7rvvIzlpoLmnpzlrZjlnKjliJnosIPnlKjmm7TmlrDlh73mlbBcblxuICAgICAgICAgICAgLy8gdmFyIGF0dGFjaFN0dW1wID0gdGhpcztcblxuICAgICAgICAgICAgLy8gd2hpbGUgKG5ld0NoaWxkcmVuTGVuLS0pIHtcbiAgICAgICAgICAgIC8vICAgICB2YXIgY2hpbGQgPSBtZS5jaGlsZHJlbltuZXdDaGlsZHJlbkxlbl07XG4gICAgICAgICAgICAvLyAgICAgaWYgKGNoaWxkLmxpZmVDeWNsZS5hdHRhY2hlZCkge1xuICAgICAgICAgICAgLy8gICAgICAgICBjaGlsZHJlbkNoYW5nZXNbbmV3Q2hpbGRyZW5MZW5dLmxlbmd0aCAmJiBjaGlsZC5fdXBkYXRlKGNoaWxkcmVuQ2hhbmdlc1tuZXdDaGlsZHJlbkxlbl0pO1xuICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgIC8vICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgY2hpbGQuYXR0YWNoKHBhcmVudEVsLCBhdHRhY2hTdHVtcC5fZ2V0RWwoKSB8fCBwYXJlbnRFbC5maXJzdENoaWxkKTtcbiAgICAgICAgICAgIC8vICAgICB9XG5cbiAgICAgICAgICAgIC8vICAgICBhdHRhY2hTdHVtcCA9IGNoaWxkO1xuICAgICAgICAgICAgLy8gfVxuXG4gICAgICAgICAgICAvLyAjW2JlZ2luXSBhbGx1YVxuICAgICAgICAgICAgdmFyIHNldEhUTUxOb3RBbGxvdyA9IGlzU2V0SFRNTE5vdEFsbG93KG1lKTtcbiAgICAgICAgICAgIC8vICNbZW5kXVxuXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5ld0NoaWxkcmVuTGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgY2hpbGQgPSBtZS5jaGlsZHJlbltpXTtcblxuICAgICAgICAgICAgICAgIGlmIChjaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbkNoYW5nZXNbaV0gJiYgY2hpbGQuX3VwZGF0ZShjaGlsZHJlbkNoYW5nZXNbaV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbWUuY2hpbGRyZW5baV0gPSBjcmVhdGVGb3JEaXJlY3RpdmVDaGlsZChtZSwgbmV3TGlzdFtpXSwgaSk7XG4gICAgICAgICAgICAgICAgICAgIG5ld0NoaWxkQnVmID0gbmV3Q2hpbGRCdWYgfHwgY3JlYXRlSFRNTEJ1ZmZlcigpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vICNbYmVnaW5dIGFsbHVhXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZXRIVE1MTm90QWxsb3cpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuZXdDaGlsZFN0YXJ0ID0gaTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gI1tlbmRdXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIG1lLmNoaWxkcmVuW2ldLl9hdHRhY2hIVE1MKG5ld0NoaWxkQnVmKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyAjW2JlZ2luXSBhbGx1YVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vICNbZW5kXVxuXG5cbiAgICAgICAgICAgICAgICAgICAgLy8gZmx1c2ggbmV3IGNoaWxkcmVuIGh0bWxcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5leHRDaGlsZCA9IG1lLmNoaWxkcmVuW2kgKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgPT09IG5ld0NoaWxkcmVuTGVuIC0gMSB8fCBuZXh0Q2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBiZWZvcmVFbCA9IG5leHRDaGlsZCAmJiBuZXh0Q2hpbGQuX2dldEVsKCkgJiYgKG5leHRDaGlsZC5zZWwgfHwgbmV4dENoaWxkLmVsKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8IG1lLmVsO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAjW2JlZ2luXSBhbGx1YVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNldEhUTUxOb3RBbGxvdykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoOyBuZXdDaGlsZFN0YXJ0IDw9IGk7IG5ld0NoaWxkU3RhcnQrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZS5jaGlsZHJlbltuZXdDaGlsZFN0YXJ0XS5hdHRhY2gocGFyZW50RWwsIGJlZm9yZUVsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICNbZW5kXVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0SFRNTEJ1ZmZlckJlZm9yZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3Q2hpbGRCdWYsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudEVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZWZvcmVFbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICNbYmVnaW5dIGFsbHVhXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAjW2VuZF1cblxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3Q2hpbGRCdWYgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgYXR0YWNoaW5ncy5kb25lKCk7XG4gICAgfVxufTtcblxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBGb3JOb2RlO1xuXG5cbi8qKlxuICogQGZpbGUg5riF5rSX5p2h5Lu2IGFOb2RlXG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG5cbi8vIHZhciBjcmVhdGVBTm9kZSA9IHJlcXVpcmUoJy4uL3BhcnNlci9jcmVhdGUtYS1ub2RlJyk7XG4vLyB2YXIgY2xvbmVEaXJlY3RpdmVzID0gcmVxdWlyZSgnLi4vcGFyc2VyL2Nsb25lLWRpcmVjdGl2ZXMnKTtcblxuXG4vKipcbiAqIOa4hea0l+adoeS7tiBhTm9kZe+8jOi/lOWbnue6r+WHgOaXoOadoeS7tuaMh+S7pOeahCBhTm9kZVxuICpcbiAqIEBwYXJhbSB7QU5vZGV9IGFOb2RlIOadoeS7tuiKgueCueWvueixoVxuICogQHJldHVybiB7QU5vZGV9XG4gKi9cbmZ1bmN0aW9uIHJpbnNlQ29uZEFOb2RlKGFOb2RlKSB7XG4gICAgdmFyIGNsZWFyQU5vZGUgPSBjcmVhdGVBTm9kZSh7XG4gICAgICAgIGNoaWxkcmVuOiBhTm9kZS5jaGlsZHJlbixcbiAgICAgICAgcHJvcHM6IGFOb2RlLnByb3BzLFxuICAgICAgICBldmVudHM6IGFOb2RlLmV2ZW50cyxcbiAgICAgICAgdGFnTmFtZTogYU5vZGUudGFnTmFtZSxcbiAgICAgICAgdmFyczogYU5vZGUudmFycyxcbiAgICAgICAgaG90c3BvdDogYU5vZGUuaG90c3BvdCxcbiAgICAgICAgZGlyZWN0aXZlczogY2xvbmVEaXJlY3RpdmVzKGFOb2RlLmRpcmVjdGl2ZXMsIHtcbiAgICAgICAgICAgICdpZic6IDEsXG4gICAgICAgICAgICAnZWxzZSc6IDEsXG4gICAgICAgICAgICAnZWxpZic6IDFcbiAgICAgICAgfSlcbiAgICB9KTtcblxuICAgIHJldHVybiBjbGVhckFOb2RlO1xufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByaW5zZUNvbmRBTm9kZTtcblxuXG4vKipcbiAqIEBmaWxlIGlmIOaMh+S7pOiKgueCueexu1xuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuLy8gdmFyIGVhY2ggPSByZXF1aXJlKCcuLi91dGlsL2VhY2gnKTtcbi8vIHZhciBndWlkID0gcmVxdWlyZSgnLi4vdXRpbC9ndWlkJyk7XG4vLyB2YXIgaHRtbEJ1ZmZlckNvbW1lbnQgPSByZXF1aXJlKCcuLi9ydW50aW1lL2h0bWwtYnVmZmVyLWNvbW1lbnQnKTtcbi8vIHZhciBldmFsRXhwciA9IHJlcXVpcmUoJy4uL3J1bnRpbWUvZXZhbC1leHByJyk7XG4vLyB2YXIgTm9kZVR5cGUgPSByZXF1aXJlKCcuL25vZGUtdHlwZScpO1xuLy8gdmFyIHJpbnNlQ29uZEFOb2RlID0gcmVxdWlyZSgnLi9yaW5zZS1jb25kLWFub2RlJyk7XG4vLyB2YXIgY3JlYXRlTm9kZSA9IHJlcXVpcmUoJy4vY3JlYXRlLW5vZGUnKTtcbi8vIHZhciBjcmVhdGVSZXZlcnNlTm9kZSA9IHJlcXVpcmUoJy4vY3JlYXRlLXJldmVyc2Utbm9kZScpO1xuLy8gdmFyIGdldE5vZGVTdHVtcFBhcmVudCA9IHJlcXVpcmUoJy4vZ2V0LW5vZGUtc3R1bXAtcGFyZW50Jyk7XG4vLyB2YXIgZWxlbWVudFVwZGF0ZUNoaWxkcmVuID0gcmVxdWlyZSgnLi9lbGVtZW50LXVwZGF0ZS1jaGlsZHJlbicpO1xuLy8gdmFyIG5vZGVPd25TaW1wbGVEaXNwb3NlID0gcmVxdWlyZSgnLi9ub2RlLW93bi1zaW1wbGUtZGlzcG9zZScpO1xuLy8gdmFyIG5vZGVPd25HZXRTdHVtcEVsID0gcmVxdWlyZSgnLi9ub2RlLW93bi1nZXQtc3R1bXAtZWwnKTtcblxuLyoqXG4gKiBpZiDmjIfku6ToioLngrnnsbtcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gYU5vZGUg5oq96LGh6IqC54K5XG4gKiBAcGFyYW0ge0NvbXBvbmVudH0gb3duZXIg5omA5bGe57uE5Lu2546v5aKDXG4gKiBAcGFyYW0ge01vZGVsPX0gc2NvcGUg5omA5bGe5pWw5o2u546v5aKDXG4gKiBAcGFyYW0ge05vZGV9IHBhcmVudCDniLbkurLoioLngrlcbiAqIEBwYXJhbSB7RE9NQ2hpbGRyZW5XYWxrZXI/fSByZXZlcnNlV2Fsa2VyIOWtkOWFg+e0oOmBjeWOhuWvueixoVxuICovXG5mdW5jdGlvbiBJZk5vZGUoYU5vZGUsIG93bmVyLCBzY29wZSwgcGFyZW50LCByZXZlcnNlV2Fsa2VyKSB7XG4gICAgdGhpcy5hTm9kZSA9IGFOb2RlO1xuICAgIHRoaXMub3duZXIgPSBvd25lcjtcbiAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgdGhpcy5wYXJlbnRDb21wb25lbnQgPSBwYXJlbnQubm9kZVR5cGUgPT09IE5vZGVUeXBlLkNNUFRcbiAgICAgICAgPyBwYXJlbnRcbiAgICAgICAgOiBwYXJlbnQucGFyZW50Q29tcG9uZW50O1xuXG4gICAgdGhpcy5pZCA9IGd1aWQoKTtcbiAgICB0aGlzLmNoaWxkcmVuID0gW107XG5cbiAgICB0aGlzLmNvbmQgPSB0aGlzLmFOb2RlLmRpcmVjdGl2ZXNbJ2lmJ10udmFsdWU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZG90LW5vdGF0aW9uXG5cbiAgICAvLyAjW2JlZ2luXSByZXZlcnNlXG4gICAgaWYgKHJldmVyc2VXYWxrZXIpIHtcbiAgICAgICAgaWYgKGV2YWxFeHByKHRoaXMuY29uZCwgdGhpcy5zY29wZSwgdGhpcy5vd25lcikpIHtcbiAgICAgICAgICAgIHRoaXMuZWxzZUluZGV4ID0gLTE7XG4gICAgICAgICAgICB0aGlzLmNoaWxkcmVuWzBdID0gY3JlYXRlUmV2ZXJzZU5vZGUoXG4gICAgICAgICAgICAgICAgcmluc2VDb25kQU5vZGUoYU5vZGUpLFxuICAgICAgICAgICAgICAgIHJldmVyc2VXYWxrZXIsXG4gICAgICAgICAgICAgICAgdGhpc1xuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBtZSA9IHRoaXM7XG4gICAgICAgICAgICBlYWNoKGFOb2RlLmVsc2VzLCBmdW5jdGlvbiAoZWxzZUFOb2RlLCBpbmRleCkge1xuICAgICAgICAgICAgICAgIHZhciBlbGlmID0gZWxzZUFOb2RlLmRpcmVjdGl2ZXMuZWxpZjtcblxuICAgICAgICAgICAgICAgIGlmICghZWxpZiB8fCBlbGlmICYmIGV2YWxFeHByKGVsaWYudmFsdWUsIG1lLnNjb3BlLCBtZS5vd25lcikpIHtcbiAgICAgICAgICAgICAgICAgICAgbWUuZWxzZUluZGV4ID0gaW5kZXg7XG4gICAgICAgICAgICAgICAgICAgIG1lLmNoaWxkcmVuWzBdID0gY3JlYXRlUmV2ZXJzZU5vZGUoXG4gICAgICAgICAgICAgICAgICAgICAgICByaW5zZUNvbmRBTm9kZShlbHNlQU5vZGUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmV2ZXJzZVdhbGtlcixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyAjW2VuZF1cbn1cblxuSWZOb2RlLnByb3RvdHlwZS5ub2RlVHlwZSA9IE5vZGVUeXBlLklGO1xuSWZOb2RlLnByb3RvdHlwZS5fZ2V0RWwgPSBub2RlT3duR2V0U3R1bXBFbDtcbklmTm9kZS5wcm90b3R5cGUuZGlzcG9zZSA9IG5vZGVPd25TaW1wbGVEaXNwb3NlO1xuXG5cbi8qKlxuICogYXR0YWNo5YWD57Sg55qEaHRtbFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBidWYgaHRtbOS4suWtmOWCqOWvueixoVxuICovXG5JZk5vZGUucHJvdG90eXBlLl9hdHRhY2hIVE1MID0gZnVuY3Rpb24gKGJ1Zikge1xuICAgIHZhciBtZSA9IHRoaXM7XG4gICAgdmFyIGVsc2VJbmRleDtcbiAgICB2YXIgY2hpbGQ7XG5cbiAgICBpZiAoZXZhbEV4cHIodGhpcy5jb25kLCB0aGlzLnNjb3BlLCB0aGlzLm93bmVyKSkge1xuICAgICAgICBjaGlsZCA9IGNyZWF0ZU5vZGUocmluc2VDb25kQU5vZGUobWUuYU5vZGUpLCBtZSk7XG4gICAgICAgIGVsc2VJbmRleCA9IC0xO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZWFjaChtZS5hTm9kZS5lbHNlcywgZnVuY3Rpb24gKGVsc2VBTm9kZSwgaW5kZXgpIHtcbiAgICAgICAgICAgIHZhciBlbGlmID0gZWxzZUFOb2RlLmRpcmVjdGl2ZXMuZWxpZjtcblxuICAgICAgICAgICAgaWYgKCFlbGlmIHx8IGVsaWYgJiYgZXZhbEV4cHIoZWxpZi52YWx1ZSwgbWUuc2NvcGUsIG1lLm93bmVyKSkge1xuICAgICAgICAgICAgICAgIGNoaWxkID0gY3JlYXRlTm9kZShyaW5zZUNvbmRBTm9kZShlbHNlQU5vZGUpLCBtZSk7XG4gICAgICAgICAgICAgICAgZWxzZUluZGV4ID0gaW5kZXg7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGQpIHtcbiAgICAgICAgbWUuY2hpbGRyZW5bMF0gPSBjaGlsZDtcbiAgICAgICAgY2hpbGQuX2F0dGFjaEhUTUwoYnVmKTtcbiAgICAgICAgbWUuZWxzZUluZGV4ID0gZWxzZUluZGV4O1xuICAgIH1cblxuICAgIGh0bWxCdWZmZXJDb21tZW50KGJ1ZiwgdGhpcy5pZCk7XG59O1xuXG4vKipcbiAqIOinhuWbvuabtOaWsOWHveaVsFxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGNoYW5nZXMg5pWw5o2u5Y+Y5YyW5L+h5oGvXG4gKi9cbklmTm9kZS5wcm90b3R5cGUuX3VwZGF0ZSA9IGZ1bmN0aW9uIChjaGFuZ2VzKSB7XG4gICAgdmFyIG1lID0gdGhpcztcbiAgICB2YXIgY2hpbGRBTm9kZSA9IG1lLmFOb2RlO1xuICAgIHZhciBlbHNlSW5kZXg7XG5cbiAgICBpZiAoZXZhbEV4cHIodGhpcy5jb25kLCB0aGlzLnNjb3BlLCB0aGlzLm93bmVyKSkge1xuICAgICAgICBlbHNlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGVhY2gobWUuYU5vZGUuZWxzZXMsIGZ1bmN0aW9uIChlbHNlQU5vZGUsIGluZGV4KSB7XG4gICAgICAgICAgICB2YXIgZWxpZiA9IGVsc2VBTm9kZS5kaXJlY3RpdmVzLmVsaWY7XG5cbiAgICAgICAgICAgIGlmIChlbGlmICYmIGV2YWxFeHByKGVsaWYudmFsdWUsIG1lLnNjb3BlLCBtZS5vd25lcikgfHwgIWVsaWYpIHtcbiAgICAgICAgICAgICAgICBlbHNlSW5kZXggPSBpbmRleDtcbiAgICAgICAgICAgICAgICBjaGlsZEFOb2RlID0gZWxzZUFOb2RlO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGVsc2VJbmRleCA9PT0gbWUuZWxzZUluZGV4KSB7XG4gICAgICAgIGVsZW1lbnRVcGRhdGVDaGlsZHJlbihtZSwgY2hhbmdlcyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgY2hpbGQgPSBtZS5jaGlsZHJlblswXTtcbiAgICAgICAgbWUuY2hpbGRyZW4gPSBbXTtcbiAgICAgICAgaWYgKGNoaWxkKSB7XG4gICAgICAgICAgICBjaGlsZC5fb25kaXNwb3NlZCA9IG5ld0NoaWxkO1xuICAgICAgICAgICAgY2hpbGQuZGlzcG9zZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbmV3Q2hpbGQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1lLmVsc2VJbmRleCA9IGVsc2VJbmRleDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBuZXdDaGlsZCgpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBlbHNlSW5kZXggIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB2YXIgY2hpbGQgPSBjcmVhdGVOb2RlKHJpbnNlQ29uZEFOb2RlKGNoaWxkQU5vZGUpLCBtZSk7XG4gICAgICAgICAgICB2YXIgcGFyZW50RWwgPSBnZXROb2RlU3R1bXBQYXJlbnQobWUpO1xuICAgICAgICAgICAgY2hpbGQuYXR0YWNoKHBhcmVudEVsLCBtZS5fZ2V0RWwoKSB8fCBwYXJlbnRFbC5maXJzdENoaWxkKTtcblxuICAgICAgICAgICAgbWUuY2hpbGRyZW5bMF0gPSBjaGlsZDtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IElmTm9kZTtcblxuXG4vKipcbiAqIEBmaWxlIHRlbXBsYXRlIOiKgueCueexu1xuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuLy8gdmFyIGVhY2ggPSByZXF1aXJlKCcuLi91dGlsL2VhY2gnKTtcbi8vIHZhciBndWlkID0gcmVxdWlyZSgnLi4vdXRpbC9ndWlkJyk7XG4vLyB2YXIgaW5zZXJ0QmVmb3JlID0gcmVxdWlyZSgnLi4vYnJvd3Nlci9pbnNlcnQtYmVmb3JlJyk7XG4vLyB2YXIgaHRtbEJ1ZmZlckNvbW1lbnQgPSByZXF1aXJlKCcuLi9ydW50aW1lL2h0bWwtYnVmZmVyLWNvbW1lbnQnKTtcbi8vIHZhciBOb2RlVHlwZSA9IHJlcXVpcmUoJy4vbm9kZS10eXBlJyk7XG4vLyB2YXIgTGlmZUN5Y2xlID0gcmVxdWlyZSgnLi9saWZlLWN5Y2xlJyk7XG4vLyB2YXIgZ2VuRWxlbWVudENoaWxkcmVuSFRNTCA9IHJlcXVpcmUoJy4vZ2VuLWVsZW1lbnQtY2hpbGRyZW4taHRtbCcpO1xuLy8gdmFyIG5vZGVEaXNwb3NlID0gcmVxdWlyZSgnLi9ub2RlLWRpc3Bvc2UnKTtcbi8vIHZhciBjcmVhdGVSZXZlcnNlTm9kZSA9IHJlcXVpcmUoJy4vY3JlYXRlLXJldmVyc2Utbm9kZScpO1xuLy8gdmFyIGVsZW1lbnREaXNwb3NlQ2hpbGRyZW4gPSByZXF1aXJlKCcuL2VsZW1lbnQtZGlzcG9zZS1jaGlsZHJlbicpO1xuLy8gdmFyIGVsZW1lbnRPd25Ub1BoYXNlID0gcmVxdWlyZSgnLi9lbGVtZW50LW93bi10by1waGFzZScpO1xuLy8gdmFyIGF0dGFjaGluZ3MgPSByZXF1aXJlKCcuL2F0dGFjaGluZ3MnKTtcbi8vIHZhciBlbGVtZW50VXBkYXRlQ2hpbGRyZW4gPSByZXF1aXJlKCcuL2VsZW1lbnQtdXBkYXRlLWNoaWxkcmVuJyk7XG4vLyB2YXIgbm9kZU93blNpbXBsZUF0dGFjaGVkID0gcmVxdWlyZSgnLi9ub2RlLW93bi1zaW1wbGUtYXR0YWNoZWQnKTtcbi8vIHZhciBub2RlT3duT25seUNoaWxkcmVuQXR0YWNoID0gcmVxdWlyZSgnLi9ub2RlLW93bi1vbmx5LWNoaWxkcmVuLWF0dGFjaCcpO1xuLy8gdmFyIG5vZGVPd25HZXRTdHVtcEVsID0gcmVxdWlyZSgnLi9ub2RlLW93bi1nZXQtc3R1bXAtZWwnKTtcblxuLyoqXG4gKiB0ZW1wbGF0ZSDoioLngrnnsbtcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gYU5vZGUg5oq96LGh6IqC54K5XG4gKiBAcGFyYW0ge0NvbXBvbmVudH0gb3duZXIg5omA5bGe57uE5Lu2546v5aKDXG4gKiBAcGFyYW0ge01vZGVsPX0gc2NvcGUg5omA5bGe5pWw5o2u546v5aKDXG4gKiBAcGFyYW0ge05vZGV9IHBhcmVudCDniLbkurLoioLngrlcbiAqIEBwYXJhbSB7RE9NQ2hpbGRyZW5XYWxrZXI/fSByZXZlcnNlV2Fsa2VyIOWtkOWFg+e0oOmBjeWOhuWvueixoVxuICovXG5mdW5jdGlvbiBUZW1wbGF0ZU5vZGUoYU5vZGUsIG93bmVyLCBzY29wZSwgcGFyZW50LCByZXZlcnNlV2Fsa2VyKSB7XG4gICAgdGhpcy5hTm9kZSA9IGFOb2RlO1xuICAgIHRoaXMub3duZXIgPSBvd25lcjtcbiAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgdGhpcy5wYXJlbnRDb21wb25lbnQgPSBwYXJlbnQubm9kZVR5cGUgPT09IE5vZGVUeXBlLkNNUFRcbiAgICAgICAgPyBwYXJlbnRcbiAgICAgICAgOiBwYXJlbnQucGFyZW50Q29tcG9uZW50O1xuXG4gICAgdGhpcy5pZCA9IGd1aWQoKTtcbiAgICB0aGlzLmxpZmVDeWNsZSA9IExpZmVDeWNsZS5zdGFydDtcbiAgICB0aGlzLmNoaWxkcmVuID0gW107XG5cbiAgICAvLyAjW2JlZ2luXSByZXZlcnNlXG4gICAgaWYgKHJldmVyc2VXYWxrZXIpIHtcbiAgICAgICAgdGhpcy5zZWwgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KHRoaXMuaWQpO1xuICAgICAgICBpbnNlcnRCZWZvcmUodGhpcy5zZWwsIHJldmVyc2VXYWxrZXIudGFyZ2V0LCByZXZlcnNlV2Fsa2VyLmN1cnJlbnQpO1xuXG4gICAgICAgIHZhciBtZSA9IHRoaXM7XG4gICAgICAgIGVhY2godGhpcy5hTm9kZS5jaGlsZHJlbiwgZnVuY3Rpb24gKGFOb2RlQ2hpbGQpIHtcbiAgICAgICAgICAgIG1lLmNoaWxkcmVuLnB1c2goY3JlYXRlUmV2ZXJzZU5vZGUoYU5vZGVDaGlsZCwgcmV2ZXJzZVdhbGtlciwgbWUpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5lbCA9IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQodGhpcy5pZCk7XG4gICAgICAgIGluc2VydEJlZm9yZSh0aGlzLmVsLCByZXZlcnNlV2Fsa2VyLnRhcmdldCwgcmV2ZXJzZVdhbGtlci5jdXJyZW50KTtcblxuICAgICAgICBhdHRhY2hpbmdzLmFkZCh0aGlzKTtcbiAgICB9XG4gICAgLy8gI1tlbmRdXG59XG5cblxuXG5UZW1wbGF0ZU5vZGUucHJvdG90eXBlLm5vZGVUeXBlID0gTm9kZVR5cGUuVFBMO1xuXG5UZW1wbGF0ZU5vZGUucHJvdG90eXBlLmF0dGFjaCA9IG5vZGVPd25Pbmx5Q2hpbGRyZW5BdHRhY2g7XG5cbi8qKlxuICog6ZSA5q+B6YeK5pS+XG4gKlxuICogQHBhcmFtIHtib29sZWFuPX0gbm9EZXRhY2gg5piv5ZCm5LiN6KaB5oqK6IqC54K55LuOZG9t56e76ZmkXG4gKiBAcGFyYW0ge2Jvb2xlYW49fSBub1RyYW5zaXRpb24g5piv5ZCm5LiN5pi+56S66L+H5rih5Yqo55S75pWI5p6cXG4gKi9cblRlbXBsYXRlTm9kZS5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uIChub0RldGFjaCwgbm9UcmFuc2l0aW9uKSB7XG4gICAgZWxlbWVudERpc3Bvc2VDaGlsZHJlbih0aGlzLCBub0RldGFjaCwgbm9UcmFuc2l0aW9uKTtcbiAgICBub2RlRGlzcG9zZSh0aGlzKTtcbn07XG5cblxuVGVtcGxhdGVOb2RlLnByb3RvdHlwZS5fdG9QaGFzZSA9IGVsZW1lbnRPd25Ub1BoYXNlO1xuVGVtcGxhdGVOb2RlLnByb3RvdHlwZS5fZ2V0RWwgPSBub2RlT3duR2V0U3R1bXBFbDtcblxuLyoqXG4gKiBhdHRhY2gg5YWD57Sg55qEIGh0bWxcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gYnVmIGh0bWzkuLLlrZjlgqjlr7nosaFcbiAqL1xuVGVtcGxhdGVOb2RlLnByb3RvdHlwZS5fYXR0YWNoSFRNTCA9IGZ1bmN0aW9uIChidWYpIHtcbiAgICBodG1sQnVmZmVyQ29tbWVudChidWYsIHRoaXMuaWQpO1xuICAgIGdlbkVsZW1lbnRDaGlsZHJlbkhUTUwodGhpcywgYnVmKTtcbiAgICBodG1sQnVmZmVyQ29tbWVudChidWYsIHRoaXMuaWQpO1xuXG4gICAgYXR0YWNoaW5ncy5hZGQodGhpcyk7XG59O1xuXG5UZW1wbGF0ZU5vZGUucHJvdG90eXBlLl9hdHRhY2hlZCA9IG5vZGVPd25TaW1wbGVBdHRhY2hlZDtcblxuLyoqXG4gKiDop4blm77mm7TmlrDlh73mlbBcbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBjaGFuZ2VzIOaVsOaNruWPmOWMluS/oeaBr1xuICovXG5UZW1wbGF0ZU5vZGUucHJvdG90eXBlLl91cGRhdGUgPSBmdW5jdGlvbiAoY2hhbmdlcykge1xuICAgIGVsZW1lbnRVcGRhdGVDaGlsZHJlbih0aGlzLCBjaGFuZ2VzKTtcbn07XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IFRlbXBsYXRlTm9kZTtcblxuXG4vKipcbiAqIEBmaWxlIOWvueWFg+e0oOeahOWtkOiKgueCuei/m+ihjOWPjeino1xuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuXG4vLyB2YXIgZWFjaCA9IHJlcXVpcmUoJy4uL3V0aWwvZWFjaCcpO1xuLy8gdmFyIERPTUNoaWxkcmVuV2Fsa2VyID0gcmVxdWlyZSgnLi9kb20tY2hpbGRyZW4td2Fsa2VyJyk7XG4vLyB2YXIgY3JlYXRlUmV2ZXJzZU5vZGUgPSByZXF1aXJlKCcuL2NyZWF0ZS1yZXZlcnNlLW5vZGUnKTtcblxuLy8gI1tiZWdpbl0gcmV2ZXJzZVxuXG4vKipcbiAqIOWvueWFg+e0oOeahOWtkOiKgueCuei/m+ihjOWPjeino1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBlbGVtZW50IOWFg+e0oFxuICovXG5mdW5jdGlvbiByZXZlcnNlRWxlbWVudENoaWxkcmVuKGVsZW1lbnQpIHtcbiAgICB2YXIgaHRtbERpcmVjdGl2ZSA9IGVsZW1lbnQuYU5vZGUuZGlyZWN0aXZlcy5odG1sO1xuXG4gICAgaWYgKCFodG1sRGlyZWN0aXZlKSB7XG4gICAgICAgIHZhciByZXZlcnNlV2Fsa2VyID0gbmV3IERPTUNoaWxkcmVuV2Fsa2VyKGVsZW1lbnQuZWwpO1xuXG4gICAgICAgIGVhY2goZWxlbWVudC5hTm9kZS5jaGlsZHJlbiwgZnVuY3Rpb24gKGFOb2RlQ2hpbGQpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuY2hpbGRyZW4ucHVzaChjcmVhdGVSZXZlcnNlTm9kZShhTm9kZUNoaWxkLCByZXZlcnNlV2Fsa2VyLCBlbGVtZW50KSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbi8vICNbZW5kXVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXZlcnNlRWxlbWVudENoaWxkcmVuO1xuXG5cbi8qKlxuICogQGZpbGUg5qCH6K6wIEhUTUwg5a2X56ym5Liy6L+e5o6l5a+56LGh5b2T5YmN5Li6IHRhZyDotbflp4vkvY3nva5cbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cbi8vIHZhciBpZU9sZFRoYW45ID0gcmVxdWlyZSgnLi4vYnJvd3Nlci9pZS1vbGQtdGhhbi05Jyk7XG4vLyB2YXIgZW1wdHkgPSByZXF1aXJlKCcuLi91dGlsL2VtcHR5Jyk7XG5cbi8qKlxuICog5qCH6K6wIEhUTUwg5a2X56ym5Liy6L+e5o6l5a+56LGh5b2T5YmN5Li6IHRhZyDotbflp4vkvY3nva5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gYnVmIOWtl+espuS4sui/nuaOpeWvueixoVxuICogQHBhcmFtIHtzdHJpbmd9IGlkIOi1t+Wni3RhZ+eahGlkXG4gKi9cbnZhciBodG1sQnVmZmVyVGFnU3RhcnQgPVxuICAgIC8vICNbYmVnaW5dIGFsbHVhXG4gICAgaWVPbGRUaGFuOVxuICAgID8gZnVuY3Rpb24gKGJ1ZiwgaWQpIHtcbiAgICAgICAgYnVmLnRhZ0lkID0gaWQ7XG4gICAgICAgIGJ1Zi50YWdTdGFydCA9IDE7XG4gICAgfVxuICAgIDpcbiAgICAvLyAjW2VuZF1cbiAgICBlbXB0eTtcblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gaHRtbEJ1ZmZlclRhZ1N0YXJ0O1xuXG5cbi8qKlxuICogQGZpbGUg5aSE55CG5YWD57Sg55qE5bGe5oCn5pON5L2cXG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG4vLyB2YXIgZ2V0UHJvcEhhbmRsZXIgPSByZXF1aXJlKCcuL2dldC1wcm9wLWhhbmRsZXInKTtcblxuLyoqXG4gKiDlpITnkIblhYPntKDlsZ7mgKfmk43kvZxcbiAqL1xudmFyIGhhbmRsZVByb3AgPSB7XG4gICAgYXR0cjogZnVuY3Rpb24gKGVsZW1lbnQsIG5hbWUsIHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBnZXRQcm9wSGFuZGxlcihlbGVtZW50LCBuYW1lKS5hdHRyKGVsZW1lbnQsIG5hbWUsIHZhbHVlKTtcbiAgICB9LFxuXG4gICAgcHJvcDogZnVuY3Rpb24gKGVsZW1lbnQsIG5hbWUsIHZhbHVlKSB7XG4gICAgICAgIGdldFByb3BIYW5kbGVyKGVsZW1lbnQsIG5hbWUpLnByb3AoZWxlbWVudCwgbmFtZSwgdmFsdWUpO1xuICAgIH1cbn07XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGhhbmRsZVByb3A7XG5cblxuLyoqXG4gKiBAZmlsZSBib29s5bGe5oCn6KGoXG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG5cbi8vIHZhciBzcGxpdFN0cjJPYmogPSByZXF1aXJlKCcuLi91dGlsL3NwbGl0LXN0ci0yLW9iaicpO1xuXG4vKipcbiAqIGJvb2zlsZ7mgKfooahcbiAqXG4gKiBAdHlwZSB7T2JqZWN0fVxuICovXG52YXIgYm9vbEF0dHJzID0gc3BsaXRTdHIyT2JqKCdjaGVja2VkLHJlYWRvbmx5LHNlbGVjdGVkLG11bHRpcGxlLGRpc2FibGVkJyk7XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGJvb2xBdHRycztcblxuXG4vKipcbiAqIEBmaWxlIGF0dGFjaCDlhYPntKDnmoQgSFRNTFxuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuLy8gdmFyIGh0bWxCdWZmZXJQdXNoID0gcmVxdWlyZSgnLi4vcnVudGltZS9odG1sLWJ1ZmZlci1wdXNoJyk7XG4vLyB2YXIgaHRtbEJ1ZmZlclRhZ1N0YXJ0ID0gcmVxdWlyZSgnLi4vcnVudGltZS9odG1sLWJ1ZmZlci10YWctc3RhcnQnKTtcbi8vIHZhciBlc2NhcGVIVE1MID0gcmVxdWlyZSgnLi4vcnVudGltZS9lc2NhcGUtaHRtbCcpO1xuLy8gdmFyIGV2YWxFeHByID0gcmVxdWlyZSgnLi4vcnVudGltZS9ldmFsLWV4cHInKTtcbi8vIHZhciBhdXRvQ2xvc2VUYWdzID0gcmVxdWlyZSgnLi4vYnJvd3Nlci9hdXRvLWNsb3NlLXRhZ3MnKTtcbi8vIHZhciBnZXRBTm9kZVByb3AgPSByZXF1aXJlKCcuL2dldC1hLW5vZGUtcHJvcCcpO1xuLy8gdmFyIE5vZGVUeXBlID0gcmVxdWlyZSgnLi9ub2RlLXR5cGUnKTtcbi8vIHZhciBoYW5kbGVQcm9wID0gcmVxdWlyZSgnLi9oYW5kbGUtcHJvcCcpO1xuLy8gdmFyIGdlbkVsZW1lbnRDaGlsZHJlbkhUTUwgPSByZXF1aXJlKCcuL2dlbi1lbGVtZW50LWNoaWxkcmVuLWh0bWwnKTtcbi8vIHZhciBhdHRhY2hpbmdzID0gcmVxdWlyZSgnLi9hdHRhY2hpbmdzJyk7XG4vLyB2YXIgTGlmZUN5Y2xlID0gcmVxdWlyZSgnLi9saWZlLWN5Y2xlJyk7XG4vLyB2YXIgYm9vbEF0dHJzID0gcmVxdWlyZSgnLi4vYnJvd3Nlci9ib29sLWF0dHJzJyk7XG5cblxuXG4vKipcbiAqIGF0dGFjaCDlhYPntKDnmoQgSFRNTFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBidWYgaHRtbOS4suWtmOWCqOWvueixoVxuICovXG5mdW5jdGlvbiBlbGVtZW50T3duQXR0YWNoSFRNTChidWYpIHtcbiAgICB0aGlzLmxpZmVDeWNsZSA9IExpZmVDeWNsZS5wYWludGluZztcbiAgICB2YXIgdGFnTmFtZSA9IHRoaXMudGFnTmFtZTtcblxuICAgIC8vIHRhZyBzdGFydFxuICAgIGlmICghdGFnTmFtZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGVsZW1lbnRJc0NvbXBvbmVudCA9IHRoaXMubm9kZVR5cGUgPT09IE5vZGVUeXBlLkNNUFQ7XG4gICAgaHRtbEJ1ZmZlclB1c2goYnVmLCAnPCcgKyB0YWdOYW1lICsgdGhpcy5hTm9kZS5ob3RzcG90LnN0YXRpY0F0dHIpO1xuXG4gICAgdmFyIHByb3BzID0gdGhpcy5hTm9kZS5ob3RzcG90LmR5bmFtaWNQcm9wcztcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IHByb3BzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICB2YXIgcHJvcCA9IHByb3BzW2ldO1xuICAgICAgICBpZiAoIXByb3AuaWQpIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IGVsZW1lbnRJc0NvbXBvbmVudFxuICAgICAgICAgICAgICAgID8gZXZhbEV4cHIocHJvcC5leHByLCB0aGlzLmRhdGEsIHRoaXMpXG4gICAgICAgICAgICAgICAgOiBldmFsRXhwcihwcm9wLmV4cHIsIHRoaXMuc2NvcGUsIHRoaXMub3duZXIsIDEpO1xuXG4gICAgICAgICAgICBpZiAocHJvcC54ICYmICFib29sQXR0cnNbcHJvcC5uYW1lXSkge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gZXNjYXBlSFRNTCh2YWx1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGh0bWxCdWZmZXJQdXNoKGJ1ZiwgaGFuZGxlUHJvcC5hdHRyKHRoaXMsIHByb3AubmFtZSwgdmFsdWUpIHx8ICcnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciBpZCA9IHRoaXMuX2dldEVsSWQoKTtcbiAgICBodG1sQnVmZmVyUHVzaChidWYsICcgaWQ9XCInICsgaWQgKyAnXCInICsgJz4nKTtcbiAgICBpZiAoIWF1dG9DbG9zZVRhZ3NbdGFnTmFtZV0pIHtcbiAgICAgICAgaHRtbEJ1ZmZlclRhZ1N0YXJ0KGJ1ZiwgaWQpO1xuICAgIH1cblxuICAgIC8vIGdlbiBjaGlsZHJlblxuICAgIGdlbkVsZW1lbnRDaGlsZHJlbkhUTUwodGhpcywgYnVmKTtcblxuICAgIC8vIHRhZyBjbG9zZVxuICAgIGlmICghYXV0b0Nsb3NlVGFnc1t0YWdOYW1lXSkge1xuICAgICAgICBodG1sQnVmZmVyUHVzaChidWYsICc8LycgKyB0YWdOYW1lICsgJz4nKTtcbiAgICB9XG5cbiAgICBhdHRhY2hpbmdzLmFkZCh0aGlzKTtcbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZWxlbWVudE93bkF0dGFjaEhUTUw7XG5cblxuLyoqXG4gKiBAZmlsZSDliJvlu7roioLngrnlr7nlupTnmoQgSFRNTEVsZW1lbnQg5Li75YWD57SgXG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG5cbi8vIHZhciBlYWNoID0gcmVxdWlyZSgnLi4vdXRpbC9lYWNoJyk7XG4vLyB2YXIgZXZhbEV4cHIgPSByZXF1aXJlKCcuLi9ydW50aW1lL2V2YWwtZXhwcicpO1xuLy8gdmFyIGNyZWF0ZUVsID0gcmVxdWlyZSgnLi4vYnJvd3Nlci9jcmVhdGUtZWwnKTtcbi8vIHZhciBoYW5kbGVQcm9wID0gcmVxdWlyZSgnLi9oYW5kbGUtcHJvcCcpO1xuLy8gdmFyIExpZmVDeWNsZSA9IHJlcXVpcmUoJy4vbGlmZS1jeWNsZScpO1xuLy8gdmFyIE5vZGVUeXBlID0gcmVxdWlyZSgnLi9ub2RlLXR5cGUnKTtcblxuLyoqXG4gKiDliJvlu7roioLngrnlr7nlupTnmoQgSFRNTEVsZW1lbnQg5Li75YWD57SgXG4gKi9cbmZ1bmN0aW9uIGVsZW1lbnRPd25DcmVhdGUoKSB7XG4gICAgaWYgKCF0aGlzLmxpZmVDeWNsZS5jcmVhdGVkKSB7XG4gICAgICAgIHRoaXMubGlmZUN5Y2xlID0gTGlmZUN5Y2xlLnBhaW50aW5nO1xuICAgICAgICB0aGlzLmVsID0gY3JlYXRlRWwodGhpcy50YWdOYW1lKTtcbiAgICAgICAgdmFyIGlzQ29tcG9uZW50ID0gdGhpcy5ub2RlVHlwZSA9PT0gTm9kZVR5cGUuQ01QVDtcblxuICAgICAgICB2YXIgbWUgPSB0aGlzO1xuICAgICAgICBlYWNoKHRoaXMuYU5vZGUucHJvcHMsIGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBpc0NvbXBvbmVudFxuICAgICAgICAgICAgICAgID8gZXZhbEV4cHIocHJvcC5leHByLCBtZS5kYXRhLCBtZSlcbiAgICAgICAgICAgICAgICA6IGV2YWxFeHByKHByb3AuZXhwciwgbWUuc2NvcGUsIG1lLm93bmVyKTtcblxuICAgICAgICAgICAgaGFuZGxlUHJvcC5wcm9wKG1lLCBwcm9wLm5hbWUsIHZhbHVlKTtcblxuICAgICAgICAgICAgaWYgKHByb3AubmFtZSA9PT0gJ2lkJykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5lbC5pZCA9IHRoaXMuX2dldEVsSWQoKTtcblxuICAgICAgICB0aGlzLl90b1BoYXNlKCdjcmVhdGVkJyk7XG4gICAgfVxufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBlbGVtZW50T3duQ3JlYXRlO1xuXG5cbi8qKlxuICogQGZpbGUg5bCG5YWD57SgYXR0YWNo5Yiw6aG16Z2iXG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG4vLyB2YXIgY3JlYXRlSFRNTEJ1ZmZlciA9IHJlcXVpcmUoJy4uL3J1bnRpbWUvY3JlYXRlLWh0bWwtYnVmZmVyJyk7XG4vLyB2YXIgb3V0cHV0SFRNTEJ1ZmZlciA9IHJlcXVpcmUoJy4uL3J1bnRpbWUvb3V0cHV0LWh0bWwtYnVmZmVyJyk7XG4vLyB2YXIgaW5zZXJ0QmVmb3JlID0gcmVxdWlyZSgnLi4vYnJvd3Nlci9pbnNlcnQtYmVmb3JlJyk7XG4vLyB2YXIgZ2VuRWxlbWVudENoaWxkcmVuSFRNTCA9IHJlcXVpcmUoJy4vZ2VuLWVsZW1lbnQtY2hpbGRyZW4taHRtbCcpO1xuLy8gdmFyIGdlbkVsZW1lbnRDaGlsZHJlbiA9IHJlcXVpcmUoJy4vZ2VuLWVsZW1lbnQtY2hpbGRyZW4nKTtcblxuLyoqXG4gKiDlsIblhYPntKBhdHRhY2jliLDpobXpnaJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gZWxlbWVudCDlhYPntKDoioLngrlcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHBhcmVudEVsIOimgea3u+WKoOWIsOeahOeItuWFg+e0oFxuICogQHBhcmFtIHtIVE1MRWxlbWVudO+8nX0gYmVmb3JlRWwg6KaB5re75Yqg5Yiw5ZOq5Liq5YWD57Sg5LmL5YmNXG4gKi9cbmZ1bmN0aW9uIGVsZW1lbnRBdHRhY2goZWxlbWVudCwgcGFyZW50RWwsIGJlZm9yZUVsKSB7XG4gICAgZWxlbWVudC5fY3JlYXRlKCk7XG4gICAgaW5zZXJ0QmVmb3JlKGVsZW1lbnQuZWwsIHBhcmVudEVsLCBiZWZvcmVFbCk7XG5cbiAgICBpZiAoIWVsZW1lbnQuX2NvbnRlbnRSZWFkeSkge1xuICAgICAgICAvLyAjW2JlZ2luXSBhbGx1YVxuICAgICAgICBpZiAoZWxlbWVudC5hTm9kZS5ob3RzcG90Lm5vU2V0SFRNTCkge1xuICAgICAgICAgICAgZ2VuRWxlbWVudENoaWxkcmVuKGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAvLyAjW2VuZF1cbiAgICAgICAgICAgIHZhciBidWYgPSBjcmVhdGVIVE1MQnVmZmVyKCk7XG4gICAgICAgICAgICBnZW5FbGVtZW50Q2hpbGRyZW5IVE1MKGVsZW1lbnQsIGJ1Zik7XG4gICAgICAgICAgICBvdXRwdXRIVE1MQnVmZmVyKGJ1ZiwgZWxlbWVudC5lbCk7XG4gICAgICAgIC8vICNbYmVnaW5dIGFsbHVhXG4gICAgICAgIH1cbiAgICAgICAgLy8gI1tlbmRdXG5cbiAgICAgICAgZWxlbWVudC5fY29udGVudFJlYWR5ID0gMTtcbiAgICB9XG59XG5cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZWxlbWVudEF0dGFjaDtcblxuXG4vKipcbiAqIEBmaWxlIOWwhuWFg+e0oGF0dGFjaOWIsOmhtemdolxuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuXG4vLyB2YXIgZWxlbWVudEF0dGFjaCA9IHJlcXVpcmUoJy4vZWxlbWVudC1hdHRhY2gnKTtcbi8vIHZhciBhdHRhY2hpbmdzID0gcmVxdWlyZSgnLi9hdHRhY2hpbmdzJyk7XG5cbi8qKlxuICog5bCG5YWD57SgYXR0YWNo5Yiw6aG16Z2iXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcGFyZW50RWwg6KaB5re75Yqg5Yiw55qE54i25YWD57SgXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW5077ydfSBiZWZvcmVFbCDopoHmt7vliqDliLDlk6rkuKrlhYPntKDkuYvliY1cbiAqL1xuZnVuY3Rpb24gZWxlbWVudE93bkF0dGFjaChwYXJlbnRFbCwgYmVmb3JlRWwpIHtcbiAgICBpZiAoIXRoaXMubGlmZUN5Y2xlLmF0dGFjaGVkKSB7XG4gICAgICAgIGVsZW1lbnRBdHRhY2godGhpcywgcGFyZW50RWwsIGJlZm9yZUVsKTtcbiAgICAgICAgYXR0YWNoaW5ncy5hZGQodGhpcyk7XG4gICAgICAgIGF0dGFjaGluZ3MuZG9uZSgpO1xuXG4gICAgICAgIHRoaXMuX3RvUGhhc2UoJ2F0dGFjaGVkJyk7XG4gICAgfVxufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBlbGVtZW50T3duQXR0YWNoO1xuXG5cbi8qKlxuICogQGZpbGUg6I635Y+WIGVsZW1lbnQg55qEIHRyYW5zaXRpb24g5o6n5Yi25a+56LGhXG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG4vLyB2YXIgZXZhbEFyZ3MgPSByZXF1aXJlKCcuLi9ydW50aW1lL2V2YWwtYXJncycpO1xuLy8gdmFyIGZpbmRNZXRob2QgPSByZXF1aXJlKCcuLi9ydW50aW1lL2ZpbmQtbWV0aG9kJyk7XG4vLyB2YXIgTm9kZVR5cGUgPSByZXF1aXJlKCcuL25vZGUtdHlwZScpO1xuXG4vKipcbiAqIOiOt+WPliBlbGVtZW50IOeahCB0cmFuc2l0aW9uIOaOp+WItuWvueixoVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBlbGVtZW50IOWFg+e0oFxuICogQHJldHVybiB7T2JqZWN0P31cbiAqL1xuZnVuY3Rpb24gZWxlbWVudEdldFRyYW5zaXRpb24oZWxlbWVudCkge1xuICAgIHZhciBhTm9kZSA9IGVsZW1lbnQubm9kZVR5cGUgPT09IE5vZGVUeXBlLkNNUFQgPyBlbGVtZW50LmdpdmVuQU5vZGUgOiBlbGVtZW50LmFOb2RlO1xuICAgIHZhciBkaXJlY3RpdmUgPSBhTm9kZSAmJiBhTm9kZS5kaXJlY3RpdmVzLnRyYW5zaXRpb247XG4gICAgdmFyIG93bmVyID0gZWxlbWVudC5vd25lcjtcblxuICAgIHZhciB0cmFuc2l0aW9uO1xuICAgIGlmIChkaXJlY3RpdmUgJiYgb3duZXIpIHtcbiAgICAgICAgdHJhbnNpdGlvbiA9IGZpbmRNZXRob2Qob3duZXIsIGRpcmVjdGl2ZS52YWx1ZS5uYW1lKTtcblxuICAgICAgICBpZiAodHlwZW9mIHRyYW5zaXRpb24gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHRyYW5zaXRpb24gPSB0cmFuc2l0aW9uLmFwcGx5KFxuICAgICAgICAgICAgICAgIG93bmVyLFxuICAgICAgICAgICAgICAgIGV2YWxBcmdzKGRpcmVjdGl2ZS52YWx1ZS5hcmdzLCBlbGVtZW50LnNjb3BlLCBvd25lcilcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJhbnNpdGlvbiB8fCBlbGVtZW50LnRyYW5zaXRpb247XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGVsZW1lbnRHZXRUcmFuc2l0aW9uO1xuXG5cbi8qKlxuICogQGZpbGUg5YWD57Sg6IqC54K55omn6KGMbGVhdmXooYzkuLpcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cbi8vIHZhciBlbGVtZW50R2V0VHJhbnNpdGlvbiA9IHJlcXVpcmUoJy4vZWxlbWVudC1nZXQtdHJhbnNpdGlvbicpO1xuXG5cbi8qKlxuICog5YWD57Sg6IqC54K55omn6KGMbGVhdmXooYzkuLpcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gZWxlbWVudCDlhYPntKBcbiAqL1xuZnVuY3Rpb24gZWxlbWVudExlYXZlKGVsZW1lbnQpIHtcbiAgICB2YXIgbGlmZUN5Y2xlID0gZWxlbWVudC5saWZlQ3ljbGU7XG4gICAgaWYgKGxpZmVDeWNsZS5sZWF2aW5nIHx8ICFsaWZlQ3ljbGUuYXR0YWNoZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChlbGVtZW50LmRpc3Bvc2VOb1RyYW5zaXRpb24pIHtcbiAgICAgICAgZWxlbWVudC5fZG9uZUxlYXZlKCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgdHJhbnNpdGlvbiA9IGVsZW1lbnRHZXRUcmFuc2l0aW9uKGVsZW1lbnQpO1xuXG4gICAgICAgIGlmICh0cmFuc2l0aW9uICYmIHRyYW5zaXRpb24ubGVhdmUpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuX3RvUGhhc2UoJ2xlYXZpbmcnKTtcbiAgICAgICAgICAgIHRyYW5zaXRpb24ubGVhdmUoZWxlbWVudC5fZ2V0RWwoKSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuX2RvbmVMZWF2ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBlbGVtZW50Ll9kb25lTGVhdmUoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZWxlbWVudExlYXZlO1xuXG5cbi8qKlxuICogQGZpbGUg5bCG5YWD57Sg5LuO6aG16Z2i5LiK56e76ZmkXG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG4vLyB2YXIgZWxlbWVudExlYXZlID0gcmVxdWlyZSgnLi9lbGVtZW50LWxlYXZlJyk7XG5cbi8qKlxuICog5bCG5YWD57Sg5LuO6aG16Z2i5LiK56e76ZmkXG4gKi9cbmZ1bmN0aW9uIGVsZW1lbnRPd25EZXRhY2goKSB7XG4gICAgZWxlbWVudExlYXZlKHRoaXMpO1xufVxuXG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGVsZW1lbnRPd25EZXRhY2g7XG5cblxuLyoqXG4gKiBAZmlsZSDplIDmr4Hph4rmlL7lhYPntKBcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cbi8vIHZhciBlbGVtZW50TGVhdmUgPSByZXF1aXJlKCcuL2VsZW1lbnQtbGVhdmUnKTtcblxuLyoqXG4gKiDplIDmr4Hph4rmlL7lhYPntKBcbiAqXG4gKiBAcGFyYW0ge2Jvb2xlYW49fSBub0RldGFjaCDmmK/lkKbkuI3opoHmioroioLngrnku45kb23np7vpmaRcbiAqIEBwYXJhbSB7Ym9vbGVhbj19IG5vVHJhbnNpdGlvbiDmmK/lkKbkuI3mmL7npLrov4fmuKHliqjnlLvmlYjmnpxcbiAqL1xuZnVuY3Rpb24gZWxlbWVudE93bkRpc3Bvc2Uobm9EZXRhY2gsIG5vVHJhbnNpdGlvbikge1xuICAgIHRoaXMubGVhdmVEaXNwb3NlID0gMTtcbiAgICB0aGlzLmRpc3Bvc2VOb0RldGFjaCA9IG5vRGV0YWNoO1xuICAgIHRoaXMuZGlzcG9zZU5vVHJhbnNpdGlvbiA9IG5vVHJhbnNpdGlvbjtcblxuICAgIGVsZW1lbnRMZWF2ZSh0aGlzKTtcbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZWxlbWVudE93bkRpc3Bvc2U7XG5cblxuLyoqXG4gKiBAZmlsZSDojrflj5boioLngrnlr7nlupTnmoTkuLvlhYPntKBcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cbi8qKlxuICog6I635Y+W6IqC54K55a+55bqU55qE5Li75YWD57SgXG4gKlxuICogQHJldHVybiB7SFRNTEVsZW1lbnR9XG4gKi9cbmZ1bmN0aW9uIGVsZW1lbnRPd25HZXRFbCgpIHtcbiAgICBpZiAoIXRoaXMuZWwpIHtcbiAgICAgICAgdGhpcy5lbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuX2VsSWQpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmVsO1xufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBlbGVtZW50T3duR2V0RWw7XG5cblxuLyoqXG4gKiBAZmlsZSDojrflj5boioLngrnlr7nlupTnmoTkuLvlhYPntKBpZFxuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuLyoqXG4gKiDojrflj5boioLngrnlr7nlupTnmoTkuLvlhYPntKBpZFxuICpcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZWxlbWVudE93bkdldEVsSWQoKSB7XG4gICAgdmFyIGlkO1xuICAgIGlmICh0aGlzLmFOb2RlLmhvdHNwb3QuaWRQcm9wKSB7XG4gICAgICAgIGlkID0gdGhpcy5ub2RlVHlwZSA9PT0gTm9kZVR5cGUuQ01QVFxuICAgICAgICAgICAgPyBldmFsRXhwcih0aGlzLmFOb2RlLmhvdHNwb3QuaWRQcm9wLmV4cHIsIHRoaXMuZGF0YSwgdGhpcylcbiAgICAgICAgICAgIDogZXZhbEV4cHIodGhpcy5hTm9kZS5ob3RzcG90LmlkUHJvcC5leHByLCB0aGlzLnNjb3BlLCB0aGlzLm93bmVyLCAxKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKHRoaXMuX2VsSWQgPSBpZCB8fCB0aGlzLmlkKTtcbn1cblxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBlbGVtZW50T3duR2V0RWxJZDtcblxuXG4vKipcbiAqIEBmaWxlIOS4uuWFg+e0oOeahCBlbCDnu5Hlrprkuovku7ZcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cbi8vIHZhciBvbiA9IHJlcXVpcmUoJy4uL2Jyb3dzZXIvb24nKTtcblxuLyoqXG4gKiDkuLrlhYPntKDnmoQgZWwg57uR5a6a5LqL5Lu2XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUg5LqL5Lu25ZCNXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBsaXN0ZW5lciDnm5HlkKzlmahcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gY2FwdHVyZSDmmK/lkKbmmK/mjZXojrfpmLbmrrXop6blj5FcbiAqL1xuZnVuY3Rpb24gZWxlbWVudE93bk9uRWwobmFtZSwgbGlzdGVuZXIsIGNhcHR1cmUpIHtcbiAgICBpZiAodHlwZW9mIGxpc3RlbmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNhcHR1cmUgPSAhIWNhcHR1cmU7XG4gICAgICAgIHRoaXMuX2VsRm5zLnB1c2goW25hbWUsIGxpc3RlbmVyLCBjYXB0dXJlXSk7XG4gICAgICAgIG9uKHRoaXMuX2dldEVsKCksIG5hbWUsIGxpc3RlbmVyLCBjYXB0dXJlKTtcbiAgICB9XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGVsZW1lbnRPd25PbkVsO1xuXG5cbi8qKlxuICogQGZpbGUgIOS6i+S7tue7keWumuS4jeWtmOWcqOeahCB3YXJuaW5nXG4gKiBAYXV0aG9yIHZhcnNoYSh3YW5nc2h1b25wdUBnbWFpbC5jb20pXG4gKi9cblxuLy8gdmFyIGVhY2ggPSByZXF1aXJlKCcuLi91dGlsL2VhY2gnKTtcblxuLy8gI1tiZWdpbl0gZXJyb3Jcbi8qKlxuICog5LqL5Lu257uR5a6a5LiN5a2Y5Zyo55qEIHdhcm5pbmdcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gZXZlbnRCaW5kIOS6i+S7tue7keWumuWvueixoVxuICogQHBhcmFtIHtDb21wb25lbnR9IG93bmVyIOaJgOWxnueahOe7hOS7tuWvueixoVxuICovXG5mdW5jdGlvbiB3YXJuRXZlbnRMaXN0ZW5NZXRob2QoZXZlbnRCaW5kLCBvd25lcikge1xuICAgIHZhciB2YWxpZCA9IHRydWU7XG4gICAgdmFyIG1ldGhvZCA9IG93bmVyO1xuICAgIGVhY2goZXZlbnRCaW5kLmV4cHIubmFtZS5wYXRocywgZnVuY3Rpb24gKHBhdGgpIHtcbiAgICAgICAgaWYgKCFwYXRoLnZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBtZXRob2QgPSBtZXRob2RbcGF0aC52YWx1ZV07XG4gICAgICAgIHZhbGlkID0gISFtZXRob2Q7XG4gICAgICAgIHJldHVybiB2YWxpZDtcbiAgICB9KTtcblxuICAgIGlmICghdmFsaWQpIHtcbiAgICAgICAgdmFyIHBhdGhzID0gW107XG4gICAgICAgIGVhY2goZXZlbnRCaW5kLmV4cHIubmFtZS5wYXRocywgZnVuY3Rpb24gKHBhdGgpIHtcbiAgICAgICAgICAgIHBhdGhzLnB1c2gocGF0aC52YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgbWVzc2FnZSA9ICdbU0FOIFdBUk5JTkddICcgKyBldmVudEJpbmQubmFtZSArICcgbGlzdGVuIGZhaWwsXCInICsgcGF0aHMuam9pbignLicpICsgJ1wiIG5vdCBleGlzdCc7XG5cbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuICAgICAgICBpZiAodHlwZW9mIGNvbnNvbGUgPT09ICdvYmplY3QnICYmIGNvbnNvbGUud2Fybikge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKG1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIC8qIGVzbGludC1lbmFibGUgbm8tY29uc29sZSAqL1xuICAgIH1cbn1cbi8vICNbZW5kXVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSB3YXJuRXZlbnRMaXN0ZW5NZXRob2Q7XG5cblxuLyoqXG4gKiBAZmlsZSDlrozmiJDlhYPntKAgYXR0YWNoZWQg5ZCO55qE6KGM5Li6XG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG5cbi8vIHZhciBiaW5kID0gcmVxdWlyZSgnLi4vdXRpbC9iaW5kJyk7XG4vLyB2YXIgZW1wdHkgPSByZXF1aXJlKCcuLi91dGlsL2VtcHR5Jyk7XG4vLyB2YXIgaXNCcm93c2VyID0gcmVxdWlyZSgnLi4vYnJvd3Nlci9pcy1icm93c2VyJyk7XG4vLyB2YXIgdHJpZ2dlciA9IHJlcXVpcmUoJy4uL2Jyb3dzZXIvdHJpZ2dlcicpO1xuLy8gdmFyIE5vZGVUeXBlID0gcmVxdWlyZSgnLi9ub2RlLXR5cGUnKTtcbi8vIHZhciBlbGVtZW50R2V0VHJhbnNpdGlvbiA9IHJlcXVpcmUoJy4vZWxlbWVudC1nZXQtdHJhbnNpdGlvbicpO1xuLy8gdmFyIGV2ZW50RGVjbGFyYXRpb25MaXN0ZW5lciA9IHJlcXVpcmUoJy4vZXZlbnQtZGVjbGFyYXRpb24tbGlzdGVuZXInKTtcbi8vIHZhciBnZXRQcm9wSGFuZGxlciA9IHJlcXVpcmUoJy4vZ2V0LXByb3AtaGFuZGxlcicpO1xuLy8gdmFyIHdhcm5FdmVudExpc3Rlbk1ldGhvZCA9IHJlcXVpcmUoJy4vd2Fybi1ldmVudC1saXN0ZW4tbWV0aG9kJyk7XG5cbi8qKlxuICog5Y+M57uR6L6T5YWl5qGGQ29tcG9zaXRpb25FbmTkuovku7bnm5HlkKzlh73mlbBcbiAqXG4gKiBAaW5uZXJcbiAqL1xuZnVuY3Rpb24gaW5wdXRPbkNvbXBvc2l0aW9uRW5kKCkge1xuICAgIGlmICghdGhpcy5jb21wb3NpbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuY29tcG9zaW5nID0gMDtcblxuICAgIHRyaWdnZXIodGhpcywgJ2lucHV0Jyk7XG59XG5cbi8qKlxuICog5Y+M57uR6L6T5YWl5qGGQ29tcG9zaXRpb25TdGFydOS6i+S7tuebkeWQrOWHveaVsFxuICpcbiAqIEBpbm5lclxuICovXG5mdW5jdGlvbiBpbnB1dE9uQ29tcG9zaXRpb25TdGFydCgpIHtcbiAgICB0aGlzLmNvbXBvc2luZyA9IDE7XG59XG5cbmZ1bmN0aW9uIHhQcm9wT3V0cHV0ZXIoeFByb3AsIGRhdGEpIHtcbiAgICBnZXRQcm9wSGFuZGxlcih0aGlzLCB4UHJvcC5uYW1lKS5vdXRwdXQodGhpcywgeFByb3AsIGRhdGEpO1xufVxuXG5mdW5jdGlvbiBpbnB1dFhQcm9wT3V0cHV0ZXIoZWxlbWVudCwgeFByb3AsIGRhdGEpIHtcbiAgICB2YXIgb3V0cHV0ZXIgPSBiaW5kKHhQcm9wT3V0cHV0ZXIsIGVsZW1lbnQsIHhQcm9wLCBkYXRhKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNvbXBvc2luZykge1xuICAgICAgICAgICAgb3V0cHV0ZXIoZSk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG4vKipcbiAqIOWujOaIkOWFg+e0oCBhdHRhY2hlZCDlkI7nmoTooYzkuLpcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gZWxlbWVudCDlhYPntKDoioLngrlcbiAqL1xuZnVuY3Rpb24gZWxlbWVudEF0dGFjaGVkKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50Ll90b1BoYXNlKCdjcmVhdGVkJyk7XG5cbiAgICB2YXIgZWxlbWVudElzQ29tcG9uZW50ID0gZWxlbWVudC5ub2RlVHlwZSA9PT0gTm9kZVR5cGUuQ01QVDtcbiAgICB2YXIgZGF0YSA9IGVsZW1lbnRJc0NvbXBvbmVudCA/IGVsZW1lbnQuZGF0YSA6IGVsZW1lbnQuc2NvcGU7XG5cbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1yZWRlY2xhcmUgKi9cblxuICAgIC8vIOWkhOeQhuiHqui6q+WPmOWMluaXtuWPjOWQkee7keWumueahOmAu+i+kVxuICAgIHZhciB4UHJvcHMgPSBlbGVtZW50LmFOb2RlLmhvdHNwb3QueFByb3BzO1xuICAgIGZvciAodmFyIGkgPSAwLCBsID0geFByb3BzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICB2YXIgZWwgPSBlbGVtZW50Ll9nZXRFbCgpO1xuICAgICAgICB2YXIgeFByb3AgPSB4UHJvcHNbaV07XG5cbiAgICAgICAgc3dpdGNoICh4UHJvcC5uYW1lKSB7XG4gICAgICAgICAgICBjYXNlICd2YWx1ZSc6XG4gICAgICAgICAgICAgICAgc3dpdGNoIChlbGVtZW50LnRhZ05hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnaW5wdXQnOlxuICAgICAgICAgICAgICAgICAgICBjYXNlICd0ZXh0YXJlYSc6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNCcm93c2VyICYmIHdpbmRvdy5Db21wb3NpdGlvbkV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5fb25FbCgnY2hhbmdlJywgaW5wdXRPbkNvbXBvc2l0aW9uRW5kKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50Ll9vbkVsKCdjb21wb3NpdGlvbnN0YXJ0JywgaW5wdXRPbkNvbXBvc2l0aW9uU3RhcnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuX29uRWwoJ2NvbXBvc2l0aW9uZW5kJywgaW5wdXRPbkNvbXBvc2l0aW9uRW5kKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5fb25FbChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoJ29uaW5wdXQnIGluIGVsKSA/ICdpbnB1dCcgOiAncHJvcGVydHljaGFuZ2UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0WFByb3BPdXRwdXRlcihlbGVtZW50LCB4UHJvcCwgZGF0YSlcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3NlbGVjdCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50Ll9vbkVsKCdjaGFuZ2UnLCBiaW5kKHhQcm9wT3V0cHV0ZXIsIGVsZW1lbnQsIHhQcm9wLCBkYXRhKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ2NoZWNrZWQnOlxuICAgICAgICAgICAgICAgIHN3aXRjaCAoZWxlbWVudC50YWdOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2lucHV0JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoZWwudHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2NoZWNrYm94JzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdyYWRpbyc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuX29uRWwoJ2NsaWNrJywgYmluZCh4UHJvcE91dHB1dGVyLCBlbGVtZW50LCB4UHJvcCwgZGF0YSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGJpbmQgZXZlbnRzXG4gICAgdmFyIGV2ZW50cyA9IGVsZW1lbnRJc0NvbXBvbmVudFxuICAgICAgICA/IGVsZW1lbnQuYU5vZGUuZXZlbnRzLmNvbmNhdChlbGVtZW50Lm5hdGl2ZUV2ZW50cylcbiAgICAgICAgOiBlbGVtZW50LmFOb2RlLmV2ZW50cztcblxuICAgIGZvciAodmFyIGkgPSAwLCBsID0gZXZlbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICB2YXIgZXZlbnRCaW5kID0gZXZlbnRzW2ldO1xuICAgICAgICB2YXIgb3duZXIgPSBlbGVtZW50SXNDb21wb25lbnQgPyBlbGVtZW50IDogZWxlbWVudC5vd25lcjtcblxuICAgICAgICAvLyDliKTmlq3mmK/lkKbmmK9uYXRpdmVFdmVudO+8jOS4i+mdoueahHdhcm7mlrnms5Xlkozkuovku7bnu5Hlrprpg73pnIDopoFcbiAgICAgICAgLy8g5L6d5q2k5oyH5a6aZXZlbnRCaW5kLmV4cHIubmFtZeS9jeS6jm93bmVy6L+Y5pivb3duZXIub3duZXLkuIpcbiAgICAgICAgaWYgKGV2ZW50QmluZC5tb2RpZmllci5uYXRpdmUpIHtcbiAgICAgICAgICAgIG93bmVyID0gb3duZXIub3duZXI7XG4gICAgICAgICAgICBkYXRhID0gZWxlbWVudC5zY29wZSB8fCBvd25lci5kYXRhO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gI1tiZWdpbl0gZXJyb3JcbiAgICAgICAgd2FybkV2ZW50TGlzdGVuTWV0aG9kKGV2ZW50QmluZCwgb3duZXIpO1xuICAgICAgICAvLyAjW2VuZF1cblxuICAgICAgICBlbGVtZW50Ll9vbkVsKFxuICAgICAgICAgICAgZXZlbnRCaW5kLm5hbWUsXG4gICAgICAgICAgICBiaW5kKFxuICAgICAgICAgICAgICAgIGV2ZW50RGVjbGFyYXRpb25MaXN0ZW5lcixcbiAgICAgICAgICAgICAgICBvd25lcixcbiAgICAgICAgICAgICAgICBldmVudEJpbmQsXG4gICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICBkYXRhXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgZXZlbnRCaW5kLm1vZGlmaWVyLmNhcHR1cmVcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBlbGVtZW50Ll90b1BoYXNlKCdhdHRhY2hlZCcpO1xuXG5cbiAgICBpZiAoZWxlbWVudC5faXNJbml0RnJvbUVsKSB7XG4gICAgICAgIGVsZW1lbnQuX2lzSW5pdEZyb21FbCA9IGZhbHNlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFyIHRyYW5zaXRpb24gPSBlbGVtZW50R2V0VHJhbnNpdGlvbihlbGVtZW50KTtcbiAgICAgICAgaWYgKHRyYW5zaXRpb24gJiYgdHJhbnNpdGlvbi5lbnRlcikge1xuICAgICAgICAgICAgdHJhbnNpdGlvbi5lbnRlcihlbGVtZW50Ll9nZXRFbCgpLCBlbXB0eSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGVsZW1lbnRBdHRhY2hlZDtcblxuXG4vKipcbiAqIEBmaWxlIOmUgOavgeWFg+e0oOiKgueCuVxuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuXG4vLyB2YXIgdW4gPSByZXF1aXJlKCcuLi9icm93c2VyL3VuJyk7XG4vLyB2YXIgcmVtb3ZlRWwgPSByZXF1aXJlKCcuLi9icm93c2VyL3JlbW92ZS1lbCcpO1xuLy8gdmFyIGVsZW1lbnREaXNwb3NlQ2hpbGRyZW4gPSByZXF1aXJlKCcuL2VsZW1lbnQtZGlzcG9zZS1jaGlsZHJlbicpO1xuLy8gdmFyIG5vZGVEaXNwb3NlID0gcmVxdWlyZSgnLi9ub2RlLWRpc3Bvc2UnKTtcblxuLyoqXG4gKiDplIDmr4HlhYPntKDoioLngrlcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gZWxlbWVudCDopoHplIDmr4HnmoTlhYPntKDoioLngrlcbiAqIEBwYXJhbSB7T2JqZWN0PX0gb3B0aW9ucyDplIDmr4HooYzkuLrnmoTlj4LmlbBcbiAqL1xuZnVuY3Rpb24gZWxlbWVudERpc3Bvc2UoZWxlbWVudCkge1xuICAgIGVsZW1lbnREaXNwb3NlQ2hpbGRyZW4oZWxlbWVudCwgMSwgMSk7XG5cbiAgICAvLyBlbCDkuovku7bop6Pnu5FcbiAgICB2YXIgbGVuID0gZWxlbWVudC5fZWxGbnMubGVuZ3RoO1xuICAgIHdoaWxlIChsZW4tLSkge1xuICAgICAgICB2YXIgZm4gPSBlbGVtZW50Ll9lbEZuc1tsZW5dO1xuICAgICAgICB1bihlbGVtZW50Ll9nZXRFbCgpLCBmblswXSwgZm5bMV0sIGZuWzJdKTtcbiAgICB9XG4gICAgZWxlbWVudC5fZWxGbnMgPSBudWxsO1xuXG5cbiAgICAvLyDlpoLmnpzmsqHmnIlwYXJlbnTvvIzor7TmmI7mmK/kuIDkuKpyb290IGNvbXBvbmVudO+8jOS4gOWumuimgeS7jmRvbeagkeS4rXJlbW92ZVxuICAgIGlmICghZWxlbWVudC5kaXNwb3NlTm9EZXRhY2ggfHwgIWVsZW1lbnQucGFyZW50KSB7XG4gICAgICAgIHJlbW92ZUVsKGVsZW1lbnQuX2dldEVsKCkpO1xuICAgIH1cblxuICAgIGlmIChlbGVtZW50Ll90b1BoYXNlKSB7XG4gICAgICAgIGVsZW1lbnQuX3RvUGhhc2UoJ2RldGFjaGVkJyk7XG4gICAgfVxuXG4gICAgbm9kZURpc3Bvc2UoZWxlbWVudCk7XG59XG5cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZWxlbWVudERpc3Bvc2U7XG5cblxuLyoqXG4gKiBAZmlsZSDliJ3lp4vljJYgZWxlbWVudCDoioLngrnnmoQgdGFnTmFtZSDlpITnkIZcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cbi8vIHZhciBpZU9sZFRoYW45ID0gcmVxdWlyZSgnLi4vYnJvd3Nlci9pZS1vbGQtdGhhbi05Jyk7XG5cbi8qKlxuICog5Yid5aeL5YyWIGVsZW1lbnQg6IqC54K555qEIHRhZ05hbWUg5aSE55CGXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG5vZGUg6IqC54K55a+56LGhXG4gKi9cbmZ1bmN0aW9uIGVsZW1lbnRJbml0VGFnTmFtZShub2RlKSB7XG4gICAgbm9kZS50YWdOYW1lID0gbm9kZS50YWdOYW1lIHx8IG5vZGUuYU5vZGUudGFnTmFtZSB8fCAnZGl2JztcblxuICAgIC8vICNbYmVnaW5dIGFsbHVhXG4gICAgLy8gaWU4LSDkuI3mlK/mjIFpbm5lckhUTUzovpPlh7roh6rlrprkuYnmoIfnrb5cbiAgICBpZiAoaWVPbGRUaGFuOSAmJiBub2RlLnRhZ05hbWUuaW5kZXhPZignLScpID4gMCkge1xuICAgICAgICBub2RlLnRhZ05hbWUgPSAnZGl2JztcbiAgICB9XG4gICAgLy8gI1tlbmRdXG59XG5cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZWxlbWVudEluaXRUYWdOYW1lO1xuXG5cbi8qKlxuICogQGZpbGUg57uZIGRldnRvb2wg5Y+R6YCa55+l5raI5oGvXG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG4vLyB2YXIgaXNCcm93c2VyID0gcmVxdWlyZSgnLi4vYnJvd3Nlci9pcy1icm93c2VyJyk7XG5cbi8vICNbYmVnaW5dIGRldnRvb2xcbnZhciBzYW40ZGV2dG9vbDtcblxuLyoqXG4gKiDnu5kgZGV2dG9vbCDlj5HpgJrnn6Xmtojmga9cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSDmtojmga/lkI3np7BcbiAqIEBwYXJhbSB7Kn0gYXJnIOa2iOaBr+WPguaVsFxuICovXG5mdW5jdGlvbiBlbWl0RGV2dG9vbChuYW1lLCBhcmcpIHtcbiAgICBpZiAoaXNCcm93c2VyICYmIHNhbjRkZXZ0b29sICYmIHNhbjRkZXZ0b29sLmRlYnVnICYmIHdpbmRvdy5fX3Nhbl9kZXZ0b29sX18pIHtcbiAgICAgICAgd2luZG93Ll9fc2FuX2RldnRvb2xfXy5lbWl0KG5hbWUsIGFyZyk7XG4gICAgfVxufVxuXG5lbWl0RGV2dG9vbC5zdGFydCA9IGZ1bmN0aW9uIChtYWluKSB7XG4gICAgc2FuNGRldnRvb2wgPSBtYWluO1xuICAgIGVtaXREZXZ0b29sKCdzYW4nLCBtYWluKTtcbn07XG4vLyAjW2VuZF1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZW1pdERldnRvb2w7XG5cblxuLyoqXG4gKiBAZmlsZSDnu4Tku7bnsbtcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cbi8vIHZhciBiaW5kID0gcmVxdWlyZSgnLi4vdXRpbC9iaW5kJyk7XG4vLyB2YXIgZWFjaCA9IHJlcXVpcmUoJy4uL3V0aWwvZWFjaCcpO1xuLy8gdmFyIGd1aWQgPSByZXF1aXJlKCcuLi91dGlsL2d1aWQnKTtcbi8vIHZhciBleHRlbmQgPSByZXF1aXJlKCcuLi91dGlsL2V4dGVuZCcpO1xuLy8gdmFyIG5leHRUaWNrID0gcmVxdWlyZSgnLi4vdXRpbC9uZXh0LXRpY2snKTtcbi8vIHZhciBlbWl0RGV2dG9vbCA9IHJlcXVpcmUoJy4uL3V0aWwvZW1pdC1kZXZ0b29sJyk7XG4vLyB2YXIgRXhwclR5cGUgPSByZXF1aXJlKCcuLi9wYXJzZXIvZXhwci10eXBlJyk7XG4vLyB2YXIgcGFyc2VFeHByID0gcmVxdWlyZSgnLi4vcGFyc2VyL3BhcnNlLWV4cHInKTtcbi8vIHZhciBjcmVhdGVBY2Nlc3NvciA9IHJlcXVpcmUoJy4uL3BhcnNlci9jcmVhdGUtYWNjZXNzb3InKTtcbi8vIHZhciBwb3N0UHJvcCA9IHJlcXVpcmUoJy4uL3BhcnNlci9wb3N0LXByb3AnKTtcbi8vIHZhciByZW1vdmVFbCA9IHJlcXVpcmUoJy4uL2Jyb3dzZXIvcmVtb3ZlLWVsJyk7XG4vLyB2YXIgRGF0YSA9IHJlcXVpcmUoJy4uL3J1bnRpbWUvZGF0YScpO1xuLy8gdmFyIGV2YWxFeHByID0gcmVxdWlyZSgnLi4vcnVudGltZS9ldmFsLWV4cHInKTtcbi8vIHZhciBjaGFuZ2VFeHByQ29tcGFyZSA9IHJlcXVpcmUoJy4uL3J1bnRpbWUvY2hhbmdlLWV4cHItY29tcGFyZScpO1xuLy8gdmFyIGNvbXBpbGVDb21wb25lbnQgPSByZXF1aXJlKCcuL2NvbXBpbGUtY29tcG9uZW50Jyk7XG4vLyB2YXIgY29tcG9uZW50UHJlaGVhdCA9IHJlcXVpcmUoJy4vY29tcG9uZW50LXByZWhlYXQnKTtcbi8vIHZhciBMaWZlQ3ljbGUgPSByZXF1aXJlKCcuL2xpZmUtY3ljbGUnKTtcbi8vIHZhciBhdHRhY2hpbmdzID0gcmVxdWlyZSgnLi9hdHRhY2hpbmdzJyk7XG4vLyB2YXIgZ2V0QU5vZGVQcm9wID0gcmVxdWlyZSgnLi9nZXQtYS1ub2RlLXByb3AnKTtcbi8vIHZhciBpc0RhdGFDaGFuZ2VCeUVsZW1lbnQgPSByZXF1aXJlKCcuL2lzLWRhdGEtY2hhbmdlLWJ5LWVsZW1lbnQnKTtcbi8vIHZhciBldmVudERlY2xhcmF0aW9uTGlzdGVuZXIgPSByZXF1aXJlKCcuL2V2ZW50LWRlY2xhcmF0aW9uLWxpc3RlbmVyJyk7XG4vLyB2YXIgcmV2ZXJzZUVsZW1lbnRDaGlsZHJlbiA9IHJlcXVpcmUoJy4vcmV2ZXJzZS1lbGVtZW50LWNoaWxkcmVuJyk7XG4vLyB2YXIgY2FtZWxDb21wb25lbnRCaW5kcyA9IHJlcXVpcmUoJy4vY2FtZWwtY29tcG9uZW50LWJpbmRzJyk7XG4vLyB2YXIgTm9kZVR5cGUgPSByZXF1aXJlKCcuL25vZGUtdHlwZScpO1xuLy8gdmFyIGVsZW1lbnRJbml0VGFnTmFtZSA9IHJlcXVpcmUoJy4vZWxlbWVudC1pbml0LXRhZy1uYW1lJyk7XG4vLyB2YXIgZWxlbWVudEF0dGFjaGVkID0gcmVxdWlyZSgnLi9lbGVtZW50LWF0dGFjaGVkJyk7XG4vLyB2YXIgZWxlbWVudERpc3Bvc2UgPSByZXF1aXJlKCcuL2VsZW1lbnQtZGlzcG9zZScpO1xuLy8gdmFyIGVsZW1lbnRVcGRhdGVDaGlsZHJlbiA9IHJlcXVpcmUoJy4vZWxlbWVudC11cGRhdGUtY2hpbGRyZW4nKTtcbi8vIHZhciBlbGVtZW50T3duR2V0RWwgPSByZXF1aXJlKCcuL2VsZW1lbnQtb3duLWdldC1lbCcpO1xuLy8gdmFyIGVsZW1lbnRPd25HZXRFbElkID0gcmVxdWlyZSgnLi9lbGVtZW50LW93bi1nZXQtZWwtaWQnKTtcbi8vIHZhciBlbGVtZW50T3duT25FbCA9IHJlcXVpcmUoJy4vZWxlbWVudC1vd24tb24tZWwnKTtcbi8vIHZhciBlbGVtZW50T3duQ3JlYXRlID0gcmVxdWlyZSgnLi9lbGVtZW50LW93bi1jcmVhdGUnKTtcbi8vIHZhciBlbGVtZW50T3duQXR0YWNoID0gcmVxdWlyZSgnLi9lbGVtZW50LW93bi1hdHRhY2gnKTtcbi8vIHZhciBlbGVtZW50T3duRGV0YWNoID0gcmVxdWlyZSgnLi9lbGVtZW50LW93bi1kZXRhY2gnKTtcbi8vIHZhciBlbGVtZW50T3duRGlzcG9zZSA9IHJlcXVpcmUoJy4vZWxlbWVudC1vd24tZGlzcG9zZScpO1xuLy8gdmFyIGVsZW1lbnRPd25BdHRhY2hIVE1MID0gcmVxdWlyZSgnLi9lbGVtZW50LW93bi1hdHRhY2gtaHRtbCcpO1xuLy8gdmFyIHdhcm5FdmVudExpc3Rlbk1ldGhvZCA9IHJlcXVpcmUoJy4vd2Fybi1ldmVudC1saXN0ZW4tbWV0aG9kJyk7XG4vLyB2YXIgZWxlbWVudERpc3Bvc2VDaGlsZHJlbiA9IHJlcXVpcmUoJy4vZWxlbWVudC1kaXNwb3NlLWNoaWxkcmVuJyk7XG4vLyB2YXIgZWxlbWVudEF0dGFjaCA9IHJlcXVpcmUoJy4vZWxlbWVudC1hdHRhY2gnKTtcbi8vIHZhciBoYW5kbGVQcm9wID0gcmVxdWlyZSgnLi9oYW5kbGUtcHJvcCcpO1xuLy8gdmFyIGNyZWF0ZURhdGFUeXBlc0NoZWNrZXIgPSByZXF1aXJlKCcuLi91dGlsL2NyZWF0ZS1kYXRhLXR5cGVzLWNoZWNrZXInKTtcblxuXG5cbi8qKlxuICog57uE5Lu257G7XG4gKlxuICogQGNsYXNzXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyDliJ3lp4vljJblj4LmlbBcbiAqL1xuZnVuY3Rpb24gQ29tcG9uZW50KG9wdGlvbnMpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gICAgdGhpcy5saWZlQ3ljbGUgPSBMaWZlQ3ljbGUuc3RhcnQ7XG4gICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xuICAgIHRoaXMuX2VsRm5zID0gW107XG4gICAgdGhpcy5saXN0ZW5lcnMgPSB7fTtcbiAgICB0aGlzLnNsb3RDaGlsZHJlbiA9IFtdO1xuXG4gICAgdmFyIGNsYXp6ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuICAgIHRoaXMuZmlsdGVycyA9IHRoaXMuZmlsdGVycyB8fCBjbGF6ei5maWx0ZXJzIHx8IHt9O1xuICAgIHRoaXMuY29tcHV0ZWQgPSB0aGlzLmNvbXB1dGVkIHx8IGNsYXp6LmNvbXB1dGVkIHx8IHt9O1xuICAgIHRoaXMubWVzc2FnZXMgPSB0aGlzLm1lc3NhZ2VzIHx8IGNsYXp6Lm1lc3NhZ2VzIHx8IHt9O1xuICAgIHRoaXMuc3ViVGFnID0gb3B0aW9ucy5zdWJUYWc7XG5cbiAgICAvLyBjb21waWxlXG4gICAgY29tcGlsZUNvbXBvbmVudChjbGF6eik7XG4gICAgY29tcG9uZW50UHJlaGVhdChjbGF6eik7XG5cbiAgICB2YXIgbWUgPSB0aGlzO1xuICAgIHZhciBwcm90b0FOb2RlID0gY2xhenoucHJvdG90eXBlLmFOb2RlO1xuXG4gICAgbWUuZ2l2ZW5BTm9kZSA9IG9wdGlvbnMuYU5vZGU7XG4gICAgbWUuZ2l2ZW5OYW1lZFNsb3RCaW5kcyA9IFtdO1xuICAgIG1lLmdpdmVuU2xvdHMgPSB7XG4gICAgICAgIG5hbWVkOiB7fVxuICAgIH07XG5cbiAgICB0aGlzLm93bmVyID0gb3B0aW9ucy5vd25lcjtcbiAgICB0aGlzLnNjb3BlID0gb3B0aW9ucy5zY29wZTtcbiAgICB0aGlzLmVsID0gb3B0aW9ucy5lbDtcblxuICAgIHZhciBwYXJlbnQgPSBvcHRpb25zLnBhcmVudDtcbiAgICBpZiAocGFyZW50KSB7XG4gICAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICAgICAgICB0aGlzLnBhcmVudENvbXBvbmVudCA9IHBhcmVudC5ub2RlVHlwZSA9PT0gTm9kZVR5cGUuQ01QVFxuICAgICAgICAgICAgPyBwYXJlbnRcbiAgICAgICAgICAgIDogcGFyZW50ICYmIHBhcmVudC5wYXJlbnRDb21wb25lbnQ7XG4gICAgfVxuXG4gICAgdGhpcy5pZCA9IGd1aWQoKTtcblxuICAgIC8vICNbYmVnaW5dIHJldmVyc2VcbiAgICBpZiAodGhpcy5lbCkge1xuICAgICAgICB2YXIgZmlyc3RDaGlsZCA9IHRoaXMuZWwuZmlyc3RDaGlsZDtcbiAgICAgICAgaWYgKGZpcnN0Q2hpbGQgJiYgZmlyc3RDaGlsZC5ub2RlVHlwZSA9PT0gOCkge1xuICAgICAgICAgICAgdmFyIHN0dW1wTWF0Y2ggPSBmaXJzdENoaWxkLmRhdGEubWF0Y2goL15cXHMqcy1kYXRhOihbXFxzXFxTXSspPyQvKTtcbiAgICAgICAgICAgIGlmIChzdHVtcE1hdGNoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHN0dW1wVGV4dCA9IHN0dW1wTWF0Y2hbMV07XG5cbiAgICAgICAgICAgICAgICAvLyBmaWxsIGNvbXBvbmVudCBkYXRhXG4gICAgICAgICAgICAgICAgb3B0aW9ucy5kYXRhID0gKG5ldyBGdW5jdGlvbihcbiAgICAgICAgICAgICAgICAgICAgJ3JldHVybiAnICsgc3R1bXBUZXh0LnJlcGxhY2UoL15bXFxzXFxuXSovLCAnJylcbiAgICAgICAgICAgICAgICApKSgpO1xuXG4gICAgICAgICAgICAgICAgcmVtb3ZlRWwoZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gI1tlbmRdXG5cbiAgICAvLyBuYXRpdmXkuovku7bmlbDnu4RcbiAgICB0aGlzLm5hdGl2ZUV2ZW50cyA9IFtdO1xuXG4gICAgaWYgKHRoaXMuZ2l2ZW5BTm9kZSkge1xuICAgICAgICAvLyDnu4Tku7bov5DooYzml7bkvKDlhaXnmoTnu5PmnoTvvIzlgZpzbG906Kej5p6QXG4gICAgICAgIHRoaXMuX2NyZWF0ZUdpdmVuU2xvdHMoKTtcblxuICAgICAgICBlYWNoKHRoaXMuZ2l2ZW5BTm9kZS5ldmVudHMsIGZ1bmN0aW9uIChldmVudEJpbmQpIHtcbiAgICAgICAgICAgIC8vIOS/neWtmOW9k+WJjeWunuS+i+eahG5hdGl2ZeS6i+S7tu+8jOS4i+mdouWIm+W7umFOb2Rl5pe25YCZ5YGa5ZCI5bm2XG4gICAgICAgICAgICBpZiAoZXZlbnRCaW5kLm1vZGlmaWVyLm5hdGl2ZSkge1xuICAgICAgICAgICAgICAgIG1lLm5hdGl2ZUV2ZW50cy5wdXNoKGV2ZW50QmluZCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyAjW2JlZ2luXSBlcnJvclxuICAgICAgICAgICAgd2FybkV2ZW50TGlzdGVuTWV0aG9kKGV2ZW50QmluZCwgb3B0aW9ucy5vd25lcik7XG4gICAgICAgICAgICAvLyAjW2VuZF1cblxuICAgICAgICAgICAgbWUub24oXG4gICAgICAgICAgICAgICAgZXZlbnRCaW5kLm5hbWUsXG4gICAgICAgICAgICAgICAgYmluZChldmVudERlY2xhcmF0aW9uTGlzdGVuZXIsIG9wdGlvbnMub3duZXIsIGV2ZW50QmluZCwgMSwgb3B0aW9ucy5zY29wZSksXG4gICAgICAgICAgICAgICAgZXZlbnRCaW5kXG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnRhZ05hbWUgPSBwcm90b0FOb2RlLnRhZ05hbWUgfHwgbWUuZ2l2ZW5BTm9kZS50YWdOYW1lO1xuICAgICAgICB0aGlzLmJpbmRzID0gY2FtZWxDb21wb25lbnRCaW5kcyh0aGlzLmdpdmVuQU5vZGUucHJvcHMpO1xuICAgIH1cblxuICAgIHRoaXMuX3RvUGhhc2UoJ2NvbXBpbGVkJyk7XG5cbiAgICAvLyBpbml0IGRhdGFcbiAgICB0aGlzLmRhdGEgPSBuZXcgRGF0YShcbiAgICAgICAgZXh0ZW5kKFxuICAgICAgICAgICAgdHlwZW9mIHRoaXMuaW5pdERhdGEgPT09ICdmdW5jdGlvbicgJiYgdGhpcy5pbml0RGF0YSgpIHx8IHt9LFxuICAgICAgICAgICAgb3B0aW9ucy5kYXRhXG4gICAgICAgIClcbiAgICApO1xuXG4gICAgZWxlbWVudEluaXRUYWdOYW1lKHRoaXMpO1xuXG4gICAgZWFjaCh0aGlzLmJpbmRzLCBmdW5jdGlvbiAoYmluZCkge1xuICAgICAgICBwb3N0UHJvcChiaW5kKTtcblxuICAgICAgICBpZiAobWUuc2NvcGUpIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IGV2YWxFeHByKGJpbmQuZXhwciwgbWUuc2NvcGUsIG1lLm93bmVyKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZWNvbWZlL3Nhbi9pc3N1ZXMvMTkxXG4gICAgICAgICAgICAgICAgbWUuZGF0YS5zZXQoYmluZC5uYW1lLCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vICNbYmVnaW5dIGVycm9yXG4gICAgLy8g5Zyo5Yid5aeL5YyWICsg5pWw5o2u57uR5a6a5ZCO77yM5byA5aeL5pWw5o2u5qCh6aqMXG4gICAgLy8gTk9URTog5Y+q5Zyo5byA5Y+R54mI5pys5Lit6L+b6KGM5bGe5oCn5qCh6aqMXG4gICAgdmFyIGRhdGFUeXBlcyA9IHRoaXMuZGF0YVR5cGVzIHx8IGNsYXp6LmRhdGFUeXBlcztcbiAgICBpZiAoZGF0YVR5cGVzKSB7XG4gICAgICAgIHZhciBkYXRhVHlwZUNoZWNrZXIgPSBjcmVhdGVEYXRhVHlwZXNDaGVja2VyKFxuICAgICAgICAgICAgZGF0YVR5cGVzLFxuICAgICAgICAgICAgdGhpcy5zdWJUYWcgfHwgdGhpcy5uYW1lIHx8IGNsYXp6Lm5hbWVcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5kYXRhLnNldFR5cGVDaGVja2VyKGRhdGFUeXBlQ2hlY2tlcik7XG4gICAgICAgIHRoaXMuZGF0YS5jaGVja0RhdGFUeXBlcygpO1xuICAgIH1cbiAgICAvLyAjW2VuZF1cblxuICAgIHRoaXMuY29tcHV0ZWREZXBzID0ge307XG4gICAgLyogZXNsaW50LWRpc2FibGUgZ3VhcmQtZm9yLWluICovXG4gICAgZm9yICh2YXIgZXhwciBpbiB0aGlzLmNvbXB1dGVkKSB7XG4gICAgICAgIGlmICghdGhpcy5jb21wdXRlZERlcHNbZXhwcl0pIHtcbiAgICAgICAgICAgIHRoaXMuX2NhbGNDb21wdXRlZChleHByKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKiBlc2xpbnQtZW5hYmxlIGd1YXJkLWZvci1pbiAqL1xuXG4gICAgaWYgKCF0aGlzLmRhdGFDaGFuZ2VyKSB7XG4gICAgICAgIHRoaXMuZGF0YUNoYW5nZXIgPSBiaW5kKHRoaXMuX2RhdGFDaGFuZ2VyLCB0aGlzKTtcbiAgICAgICAgdGhpcy5kYXRhLmxpc3Rlbih0aGlzLmRhdGFDaGFuZ2VyKTtcbiAgICB9XG4gICAgdGhpcy5fdG9QaGFzZSgnaW5pdGVkJyk7XG5cbiAgICAvLyAjW2JlZ2luXSByZXZlcnNlXG4gICAgaWYgKHRoaXMuZWwpIHtcbiAgICAgICAgYXR0YWNoaW5ncy5hZGQodGhpcyk7XG4gICAgICAgIHJldmVyc2VFbGVtZW50Q2hpbGRyZW4odGhpcyk7XG4gICAgICAgIGF0dGFjaGluZ3MuZG9uZSgpO1xuICAgIH1cblxuICAgIHZhciB3YWxrZXIgPSBvcHRpb25zLnJldmVyc2VXYWxrZXI7XG4gICAgaWYgKHdhbGtlcikge1xuICAgICAgICB2YXIgY3VycmVudE5vZGUgPSB3YWxrZXIuY3VycmVudDtcbiAgICAgICAgaWYgKGN1cnJlbnROb2RlICYmIGN1cnJlbnROb2RlLm5vZGVUeXBlID09PSAxKSB7XG4gICAgICAgICAgICB0aGlzLmVsID0gY3VycmVudE5vZGU7XG4gICAgICAgICAgICB0aGlzLmVsLmlkID0gdGhpcy5fZ2V0RWxJZCgpO1xuICAgICAgICAgICAgd2Fsa2VyLmdvTmV4dCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV2ZXJzZUVsZW1lbnRDaGlsZHJlbih0aGlzKTtcblxuICAgICAgICBhdHRhY2hpbmdzLmFkZChtZSk7XG4gICAgfVxuICAgIC8vICNbZW5kXVxufVxuXG5cblxuQ29tcG9uZW50LnByb3RvdHlwZS5nZXRDb21wb25lbnRUeXBlID0gZnVuY3Rpb24gKGFOb2RlKSB7XG4gICAgcmV0dXJuIHRoaXMuY29tcG9uZW50c1thTm9kZS50YWdOYW1lXTtcbn07XG5cbi8qKlxuICog5Yid5aeL5YyW5Yib5bu657uE5Lu25aSW6YOo5Lyg5YWl55qE5o+S5qe95a+56LGhXG4gKlxuICogQHByb3RlY3RlZFxuICovXG5Db21wb25lbnQucHJvdG90eXBlLl9jcmVhdGVHaXZlblNsb3RzID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBtZSA9IHRoaXM7XG4gICAgbWUuZ2l2ZW5TbG90cy5uYW1lZCA9IHt9O1xuXG4gICAgLy8g57uE5Lu26L+Q6KGM5pe25Lyg5YWl55qE57uT5p6E77yM5YGac2xvdOino+aekFxuICAgIG1lLmdpdmVuQU5vZGUgJiYgbWUuc2NvcGUgJiYgZWFjaChtZS5naXZlbkFOb2RlLmNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgdmFyIHRhcmdldDtcblxuICAgICAgICB2YXIgc2xvdEJpbmQgPSAhY2hpbGQudGV4dEV4cHIgJiYgZ2V0QU5vZGVQcm9wKGNoaWxkLCAnc2xvdCcpO1xuICAgICAgICBpZiAoc2xvdEJpbmQpIHtcbiAgICAgICAgICAgICFtZS5naXZlblNsb3RJbml0ZWQgJiYgbWUuZ2l2ZW5OYW1lZFNsb3RCaW5kcy5wdXNoKHNsb3RCaW5kKTtcblxuICAgICAgICAgICAgdmFyIHNsb3ROYW1lID0gZXZhbEV4cHIoc2xvdEJpbmQuZXhwciwgbWUuc2NvcGUsIG1lLm93bmVyKTtcbiAgICAgICAgICAgIHRhcmdldCA9IG1lLmdpdmVuU2xvdHMubmFtZWRbc2xvdE5hbWVdO1xuICAgICAgICAgICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSBtZS5naXZlblNsb3RzLm5hbWVkW3Nsb3ROYW1lXSA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCFtZS5naXZlblNsb3RJbml0ZWQpIHtcbiAgICAgICAgICAgIHRhcmdldCA9IG1lLmdpdmVuU2xvdHMubm9uYW1lO1xuICAgICAgICAgICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSBtZS5naXZlblNsb3RzLm5vbmFtZSA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGFyZ2V0ICYmIHRhcmdldC5wdXNoKGNoaWxkKTtcbiAgICB9KTtcblxuICAgIG1lLmdpdmVuU2xvdEluaXRlZCA9IHRydWU7XG59O1xuXG4vKipcbiAqIOexu+Wei+agh+ivhlxuICpcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKi9cbkNvbXBvbmVudC5wcm90b3R5cGUubm9kZVR5cGUgPSBOb2RlVHlwZS5DTVBUO1xuXG4vKipcbiAqIOWcqOS4i+S4gOS4quabtOaWsOWRqOacn+i/kOihjOWHveaVsFxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIOimgei/kOihjOeahOWHveaVsFxuICovXG5Db21wb25lbnQucHJvdG90eXBlLm5leHRUaWNrID0gbmV4dFRpY2s7XG5cbi8qIGVzbGludC1kaXNhYmxlIG9wZXJhdG9yLWxpbmVicmVhayAqL1xuLyoqXG4gKiDkvb/oioLngrnliLDovr7nm7jlupTnmoTnlJ/lkb3lkajmnJ9cbiAqXG4gKiBAcHJvdGVjdGVkXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSDnlJ/lkb3lkajmnJ/lkI3np7BcbiAqL1xuQ29tcG9uZW50LnByb3RvdHlwZS5fY2FsbEhvb2sgPVxuQ29tcG9uZW50LnByb3RvdHlwZS5fdG9QaGFzZSA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgaWYgKCF0aGlzLmxpZmVDeWNsZVtuYW1lXSkge1xuICAgICAgICB0aGlzLmxpZmVDeWNsZSA9IExpZmVDeWNsZVtuYW1lXSB8fCB0aGlzLmxpZmVDeWNsZTtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzW25hbWVdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDpgJrnn6VkZXZ0b29sXG4gICAgICAgIC8vICNbYmVnaW5dIGRldnRvb2xcbiAgICAgICAgZW1pdERldnRvb2woJ2NvbXAtJyArIG5hbWUsIHRoaXMpO1xuICAgICAgICAvLyAjW2VuZF1cbiAgICB9XG59O1xuLyogZXNsaW50LWVuYWJsZSBvcGVyYXRvci1saW5lYnJlYWsgKi9cblxuXG4vKipcbiAqIOa3u+WKoOS6i+S7tuebkeWQrOWZqFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIOS6i+S7tuWQjVxuICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXIg55uR5ZCs5ZmoXG4gKiBAcGFyYW0ge3N0cmluZz99IGRlY2xhcmF0aW9uIOWjsOaYjuW8j1xuICovXG5Db21wb25lbnQucHJvdG90eXBlLm9uID0gZnVuY3Rpb24gKG5hbWUsIGxpc3RlbmVyLCBkZWNsYXJhdGlvbikge1xuICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgaWYgKCF0aGlzLmxpc3RlbmVyc1tuYW1lXSkge1xuICAgICAgICAgICAgdGhpcy5saXN0ZW5lcnNbbmFtZV0gPSBbXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxpc3RlbmVyc1tuYW1lXS5wdXNoKHtmbjogbGlzdGVuZXIsIGRlY2xhcmF0aW9uOiBkZWNsYXJhdGlvbn0pO1xuICAgIH1cbn07XG5cbi8qKlxuICog56e76Zmk5LqL5Lu255uR5ZCs5ZmoXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUg5LqL5Lu25ZCNXG4gKiBAcGFyYW0ge0Z1bmN0aW9uPX0gbGlzdGVuZXIg55uR5ZCs5ZmoXG4gKi9cbkNvbXBvbmVudC5wcm90b3R5cGUudW4gPSBmdW5jdGlvbiAobmFtZSwgbGlzdGVuZXIpIHtcbiAgICB2YXIgbmFtZUxpc3RlbmVycyA9IHRoaXMubGlzdGVuZXJzW25hbWVdO1xuICAgIHZhciBsZW4gPSBuYW1lTGlzdGVuZXJzICYmIG5hbWVMaXN0ZW5lcnMubGVuZ3RoO1xuXG4gICAgd2hpbGUgKGxlbi0tKSB7XG4gICAgICAgIGlmICghbGlzdGVuZXIgfHwgbGlzdGVuZXIgPT09IG5hbWVMaXN0ZW5lcnNbbGVuXS5mbikge1xuICAgICAgICAgICAgbmFtZUxpc3RlbmVycy5zcGxpY2UobGVuLCAxKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cblxuLyoqXG4gKiDmtL7lj5Hkuovku7ZcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSDkuovku7blkI1cbiAqIEBwYXJhbSB7T2JqZWN0fSBldmVudCDkuovku7blr7nosaFcbiAqL1xuQ29tcG9uZW50LnByb3RvdHlwZS5maXJlID0gZnVuY3Rpb24gKG5hbWUsIGV2ZW50KSB7XG4gICAgdmFyIG1lID0gdGhpcztcbiAgICBlYWNoKHRoaXMubGlzdGVuZXJzW25hbWVdLCBmdW5jdGlvbiAobGlzdGVuZXIpIHtcbiAgICAgICAgbGlzdGVuZXIuZm4uY2FsbChtZSwgZXZlbnQpO1xuICAgIH0pO1xufTtcblxuLyoqXG4gKiDorqHnrpcgY29tcHV0ZWQg5bGe5oCn55qE5YC8XG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb21wdXRlZEV4cHIgY29tcHV0ZWTooajovr7lvI/kuLJcbiAqL1xuQ29tcG9uZW50LnByb3RvdHlwZS5fY2FsY0NvbXB1dGVkID0gZnVuY3Rpb24gKGNvbXB1dGVkRXhwcikge1xuICAgIHZhciBjb21wdXRlZERlcHMgPSB0aGlzLmNvbXB1dGVkRGVwc1tjb21wdXRlZEV4cHJdO1xuICAgIGlmICghY29tcHV0ZWREZXBzKSB7XG4gICAgICAgIGNvbXB1dGVkRGVwcyA9IHRoaXMuY29tcHV0ZWREZXBzW2NvbXB1dGVkRXhwcl0gPSB7fTtcbiAgICB9XG5cbiAgICB0aGlzLmRhdGEuc2V0KGNvbXB1dGVkRXhwciwgdGhpcy5jb21wdXRlZFtjb21wdXRlZEV4cHJdLmNhbGwoe1xuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBnZXQ6IGJpbmQoZnVuY3Rpb24gKGV4cHIpIHtcbiAgICAgICAgICAgICAgICAvLyAjW2JlZ2luXSBlcnJvclxuICAgICAgICAgICAgICAgIGlmICghZXhwcikge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tTQU4gRVJST1JdIGNhbGwgZ2V0IG1ldGhvZCBpbiBjb21wdXRlZCBuZWVkIGFyZ3VtZW50Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vICNbZW5kXVxuXG4gICAgICAgICAgICAgICAgaWYgKCFjb21wdXRlZERlcHNbZXhwcl0pIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcHV0ZWREZXBzW2V4cHJdID0gMTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jb21wdXRlZFtleHByXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2FsY0NvbXB1dGVkKGV4cHIpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy53YXRjaChleHByLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jYWxjQ29tcHV0ZWQoY29tcHV0ZWRFeHByKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5nZXQoZXhwcik7XG4gICAgICAgICAgICB9LCB0aGlzKVxuICAgICAgICB9XG4gICAgfSkpO1xufTtcblxuLyoqXG4gKiDmtL7lj5Hmtojmga9cbiAqIOe7hOS7tuWPr+S7pea0vuWPkea2iOaBr++8jOa2iOaBr+Wwhuayv+edgOe7hOS7tuagkeWQkeS4iuS8oOmAku+8jOebtOWIsOmBh+S4iuesrOS4gOS4quWkhOeQhua2iOaBr+eahOe7hOS7tlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIOa2iOaBr+WQjeensFxuICogQHBhcmFtIHsqP30gdmFsdWUg5raI5oGv5YC8XG4gKi9cbkNvbXBvbmVudC5wcm90b3R5cGUuZGlzcGF0Y2ggPSBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcbiAgICB2YXIgcGFyZW50Q29tcG9uZW50ID0gdGhpcy5wYXJlbnRDb21wb25lbnQ7XG5cbiAgICB3aGlsZSAocGFyZW50Q29tcG9uZW50KSB7XG4gICAgICAgIHZhciByZWNlaXZlciA9IHBhcmVudENvbXBvbmVudC5tZXNzYWdlc1tuYW1lXSB8fCBwYXJlbnRDb21wb25lbnQubWVzc2FnZXNbJyonXTtcbiAgICAgICAgaWYgKHR5cGVvZiByZWNlaXZlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgcmVjZWl2ZXIuY2FsbChcbiAgICAgICAgICAgICAgICBwYXJlbnRDb21wb25lbnQsXG4gICAgICAgICAgICAgICAge3RhcmdldDogdGhpcywgdmFsdWU6IHZhbHVlLCBuYW1lOiBuYW1lfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgcGFyZW50Q29tcG9uZW50ID0gcGFyZW50Q29tcG9uZW50LnBhcmVudENvbXBvbmVudDtcbiAgICB9XG59O1xuXG4vKipcbiAqIOiOt+WPlue7hOS7tuWGhemDqOeahCBzbG90XG4gKlxuICogQHBhcmFtIHtzdHJpbmc9fSBuYW1lIHNsb3TlkI3np7DvvIznqbrkuLpkZWZhdWx0IHNsb3RcbiAqIEByZXR1cm4ge0FycmF5fVxuICovXG5Db21wb25lbnQucHJvdG90eXBlLnNsb3QgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICB2YXIgbWUgPSB0aGlzO1xuXG4gICAgZnVuY3Rpb24gY2hpbGRyZW5UcmF2ZXJzYWwoY2hpbGRyZW4pIHtcbiAgICAgICAgZWFjaChjaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgICBpZiAoY2hpbGQubm9kZVR5cGUgPT09IE5vZGVUeXBlLlNMT1QgJiYgY2hpbGQub3duZXIgPT09IG1lKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkLmlzTmFtZWQgJiYgY2hpbGQubmFtZSA9PT0gbmFtZVxuICAgICAgICAgICAgICAgICAgICB8fCAhY2hpbGQuaXNOYW1lZCAmJiAhbmFtZVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChjaGlsZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY2hpbGRyZW5UcmF2ZXJzYWwoY2hpbGQuY2hpbGRyZW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjaGlsZHJlblRyYXZlcnNhbCh0aGlzLmNoaWxkcmVuKTtcbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiDojrflj5bluKbmnIkgc2FuLXJlZiDmjIfku6TnmoTlrZDnu4Tku7blvJXnlKhcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSDlrZDnu4Tku7bnmoTlvJXnlKjlkI1cbiAqIEByZXR1cm4ge0NvbXBvbmVudH1cbiAqL1xuQ29tcG9uZW50LnByb3RvdHlwZS5yZWYgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHZhciByZWZUYXJnZXQ7XG4gICAgdmFyIG93bmVyID0gdGhpcztcblxuICAgIGZ1bmN0aW9uIGNoaWxkcmVuVHJhdmVyc2FsKGNoaWxkcmVuKSB7XG4gICAgICAgIGVhY2goY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgICAgZWxlbWVudFRyYXZlcnNhbChjaGlsZCk7XG4gICAgICAgICAgICByZXR1cm4gIXJlZlRhcmdldDtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZWxlbWVudFRyYXZlcnNhbChlbGVtZW50KSB7XG4gICAgICAgIHZhciBub2RlVHlwZSA9IGVsZW1lbnQubm9kZVR5cGU7XG4gICAgICAgIGlmIChub2RlVHlwZSA9PT0gTm9kZVR5cGUuVEVYVCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVsZW1lbnQub3duZXIgPT09IG93bmVyKSB7XG4gICAgICAgICAgICB2YXIgcmVmO1xuICAgICAgICAgICAgc3dpdGNoIChlbGVtZW50Lm5vZGVUeXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBOb2RlVHlwZS5FTEVNOlxuICAgICAgICAgICAgICAgICAgICByZWYgPSBlbGVtZW50LmFOb2RlLmRpcmVjdGl2ZXMucmVmO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVmICYmIGV2YWxFeHByKHJlZi52YWx1ZSwgZWxlbWVudC5zY29wZSwgb3duZXIpID09PSBuYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWZUYXJnZXQgPSBlbGVtZW50Ll9nZXRFbCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSBOb2RlVHlwZS5DTVBUOlxuICAgICAgICAgICAgICAgICAgICByZWYgPSBlbGVtZW50LmdpdmVuQU5vZGUuZGlyZWN0aXZlcy5yZWY7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZWYgJiYgZXZhbEV4cHIocmVmLnZhbHVlLCBlbGVtZW50LnNjb3BlLCBvd25lcikgPT09IG5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZlRhcmdldCA9IGVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgIXJlZlRhcmdldCAmJiBjaGlsZHJlblRyYXZlcnNhbChlbGVtZW50LnNsb3RDaGlsZHJlbik7XG4gICAgICAgIH1cblxuICAgICAgICAhcmVmVGFyZ2V0ICYmIGNoaWxkcmVuVHJhdmVyc2FsKGVsZW1lbnQuY2hpbGRyZW4pO1xuICAgIH1cblxuICAgIGNoaWxkcmVuVHJhdmVyc2FsKHRoaXMuY2hpbGRyZW4pO1xuXG4gICAgcmV0dXJuIHJlZlRhcmdldDtcbn07XG5cblxuLyoqXG4gKiDop4blm77mm7TmlrDlh73mlbBcbiAqXG4gKiBAcGFyYW0ge0FycmF5P30gY2hhbmdlcyDmlbDmja7lj5jljJbkv6Hmga9cbiAqL1xuQ29tcG9uZW50LnByb3RvdHlwZS5fdXBkYXRlID0gZnVuY3Rpb24gKGNoYW5nZXMpIHtcbiAgICBpZiAodGhpcy5saWZlQ3ljbGUuZGlzcG9zZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBtZSA9IHRoaXM7XG5cblxuICAgIHZhciBuZWVkUmVsb2FkRm9yU2xvdCA9IGZhbHNlO1xuICAgIHRoaXMuX25vdGlmeU5lZWRSZWxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIG5lZWRSZWxvYWRGb3JTbG90ID0gdHJ1ZTtcbiAgICB9O1xuXG4gICAgaWYgKGNoYW5nZXMpIHtcbiAgICAgICAgZWFjaChjaGFuZ2VzLCBmdW5jdGlvbiAoY2hhbmdlKSB7XG4gICAgICAgICAgICB2YXIgY2hhbmdlRXhwciA9IGNoYW5nZS5leHByO1xuXG4gICAgICAgICAgICBlYWNoKG1lLmJpbmRzLCBmdW5jdGlvbiAoYmluZEl0ZW0pIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVsYXRpb247XG4gICAgICAgICAgICAgICAgdmFyIHNldEV4cHIgPSBiaW5kSXRlbS5uYW1lO1xuICAgICAgICAgICAgICAgIHZhciB1cGRhdGVFeHByID0gYmluZEl0ZW0uZXhwcjtcblxuICAgICAgICAgICAgICAgIGlmICghaXNEYXRhQ2hhbmdlQnlFbGVtZW50KGNoYW5nZSwgbWUsIHNldEV4cHIpXG4gICAgICAgICAgICAgICAgICAgICYmIChyZWxhdGlvbiA9IGNoYW5nZUV4cHJDb21wYXJlKGNoYW5nZUV4cHIsIHVwZGF0ZUV4cHIsIG1lLnNjb3BlKSlcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlbGF0aW9uID4gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0RXhwciA9IGNyZWF0ZUFjY2Vzc29yKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogRXhwclR5cGUuU1RSSU5HLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHNldEV4cHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0uY29uY2F0KGNoYW5nZUV4cHIucGF0aHMuc2xpY2UodXBkYXRlRXhwci5wYXRocy5sZW5ndGgpKVxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlRXhwciA9IGNoYW5nZUV4cHI7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBtZS5kYXRhLnNldChzZXRFeHByLCBldmFsRXhwcih1cGRhdGVFeHByLCBtZS5zY29wZSwgbWUub3duZXIpLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogbWUub3duZXIuaWRcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGVhY2gobWUuZ2l2ZW5OYW1lZFNsb3RCaW5kcywgZnVuY3Rpb24gKGJpbmRJdGVtKSB7XG4gICAgICAgICAgICAgICAgbmVlZFJlbG9hZEZvclNsb3QgPSBuZWVkUmVsb2FkRm9yU2xvdCB8fCBjaGFuZ2VFeHByQ29tcGFyZShjaGFuZ2VFeHByLCBiaW5kSXRlbS5leHByLCBtZS5zY29wZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuICFuZWVkUmVsb2FkRm9yU2xvdDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAobmVlZFJlbG9hZEZvclNsb3QpIHtcbiAgICAgICAgICAgIHRoaXMuX2NyZWF0ZUdpdmVuU2xvdHMoKTtcbiAgICAgICAgICAgIHRoaXMuX3JlcGFpbnRDaGlsZHJlbigpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIHNsb3RDaGlsZHJlbkxlbiA9IHRoaXMuc2xvdENoaWxkcmVuLmxlbmd0aDtcbiAgICAgICAgICAgIHdoaWxlIChzbG90Q2hpbGRyZW5MZW4tLSkge1xuICAgICAgICAgICAgICAgIHZhciBzbG90Q2hpbGQgPSB0aGlzLnNsb3RDaGlsZHJlbltzbG90Q2hpbGRyZW5MZW5dO1xuXG4gICAgICAgICAgICAgICAgaWYgKHNsb3RDaGlsZC5saWZlQ3ljbGUuZGlzcG9zZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zbG90Q2hpbGRyZW4uc3BsaWNlKHNsb3RDaGlsZHJlbkxlbiwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHNsb3RDaGlsZC5pc0luc2VydGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHNsb3RDaGlsZC5fdXBkYXRlKGNoYW5nZXMsIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciBkYXRhQ2hhbmdlcyA9IHRoaXMuZGF0YUNoYW5nZXM7XG4gICAgaWYgKGRhdGFDaGFuZ2VzKSB7XG4gICAgICAgIHRoaXMuZGF0YUNoYW5nZXMgPSBudWxsO1xuICAgICAgICBlYWNoKHRoaXMuYU5vZGUuaG90c3BvdC5keW5hbWljUHJvcHMsIGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgICAgICAgICBlYWNoKGRhdGFDaGFuZ2VzLCBmdW5jdGlvbiAoY2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNoYW5nZUV4cHJDb21wYXJlKGNoYW5nZS5leHByLCBwcm9wLmV4cHIsIG1lLmRhdGEpXG4gICAgICAgICAgICAgICAgICAgIHx8IHByb3AuaGludEV4cHIgJiYgY2hhbmdlRXhwckNvbXBhcmUoY2hhbmdlLmV4cHIsIHByb3AuaGludEV4cHIsIG1lLmRhdGEpXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZVByb3AucHJvcChcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXZhbEV4cHIocHJvcC5leHByLCBtZS5kYXRhLCBtZSlcbiAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGVsZW1lbnRVcGRhdGVDaGlsZHJlbih0aGlzLCBkYXRhQ2hhbmdlcyk7XG4gICAgICAgIGlmIChuZWVkUmVsb2FkRm9yU2xvdCkge1xuICAgICAgICAgICAgdGhpcy5fY3JlYXRlR2l2ZW5TbG90cygpO1xuICAgICAgICAgICAgdGhpcy5fcmVwYWludENoaWxkcmVuKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl90b1BoYXNlKCd1cGRhdGVkJyk7XG5cbiAgICAgICAgaWYgKHRoaXMub3duZXIpIHtcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUJpbmR4T3duZXIoZGF0YUNoYW5nZXMpO1xuICAgICAgICAgICAgdGhpcy5vd25lci5fdXBkYXRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9ub3RpZnlOZWVkUmVsb2FkID0gbnVsbDtcbn07XG5cbkNvbXBvbmVudC5wcm90b3R5cGUuX3VwZGF0ZUJpbmR4T3duZXIgPSBmdW5jdGlvbiAoZGF0YUNoYW5nZXMpIHtcbiAgICB2YXIgbWUgPSB0aGlzO1xuXG4gICAgaWYgKHRoaXMub3duZXIpIHtcbiAgICAgICAgZWFjaChkYXRhQ2hhbmdlcywgZnVuY3Rpb24gKGNoYW5nZSkge1xuICAgICAgICAgICAgZWFjaChtZS5iaW5kcywgZnVuY3Rpb24gKGJpbmRJdGVtKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNoYW5nZUV4cHIgPSBjaGFuZ2UuZXhwcjtcbiAgICAgICAgICAgICAgICBpZiAoYmluZEl0ZW0ueFxuICAgICAgICAgICAgICAgICAgICAmJiAhaXNEYXRhQ2hhbmdlQnlFbGVtZW50KGNoYW5nZSwgbWUub3duZXIpXG4gICAgICAgICAgICAgICAgICAgICYmIGNoYW5nZUV4cHJDb21wYXJlKGNoYW5nZUV4cHIsIHBhcnNlRXhwcihiaW5kSXRlbS5uYW1lKSwgbWUuZGF0YSlcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHVwZGF0ZVNjb3BlRXhwciA9IGJpbmRJdGVtLmV4cHI7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGFuZ2VFeHByLnBhdGhzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZVNjb3BlRXhwciA9IGNyZWF0ZUFjY2Vzc29yKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJpbmRJdGVtLmV4cHIucGF0aHMuY29uY2F0KGNoYW5nZUV4cHIucGF0aHMuc2xpY2UoMSkpXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgbWUuc2NvcGUuc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlU2NvcGVFeHByLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXZhbEV4cHIoY2hhbmdlRXhwciwgbWUuZGF0YSwgbWUpLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogbWUuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3A6IGJpbmRJdGVtLm5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5cbi8qKlxuICog6YeN5paw57uY5Yi257uE5Lu255qE5YaF5a65XG4gKiDlvZMgZHluYW1pYyBzbG90IG5hbWUg5Y+R55Sf5Y+Y5pu05oiWIHNsb3Qg5Yy56YWN5Y+R55Sf5Y+Y5YyW5pe277yM6YeN5paw57uY5Yi2XG4gKiDlnKjnu4Tku7bnuqfliKvph43nu5jmnInngrnnspfmmrTvvIzkvYbmmK/og73kv53or4Hop4blm77nu5PmnpzmraPnoa7mgKdcbiAqL1xuQ29tcG9uZW50LnByb3RvdHlwZS5fcmVwYWludENoaWxkcmVuID0gZnVuY3Rpb24gKCkge1xuICAgIGVsZW1lbnREaXNwb3NlQ2hpbGRyZW4odGhpcywgMSwgMSk7XG4gICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xuXG4gICAgdGhpcy5fY29udGVudFJlYWR5ID0gMDtcbiAgICB0aGlzLnNsb3RDaGlsZHJlbiA9IFtdO1xuICAgIGVsZW1lbnRBdHRhY2godGhpcyk7XG4gICAgYXR0YWNoaW5ncy5kb25lKCk7XG59O1xuXG5cbi8qKlxuICog57uE5Lu25YaF6YOo55uR5ZCs5pWw5o2u5Y+Y5YyW55qE5Ye95pWwXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBjaGFuZ2Ug5pWw5o2u5Y+Y5YyW5L+h5oGvXG4gKi9cbkNvbXBvbmVudC5wcm90b3R5cGUuX2RhdGFDaGFuZ2VyID0gZnVuY3Rpb24gKGNoYW5nZSkge1xuICAgIGlmICh0aGlzLmxpZmVDeWNsZS5wYWludGluZyB8fCB0aGlzLmxpZmVDeWNsZS5jcmVhdGVkKSB7XG4gICAgICAgIGlmICghdGhpcy5kYXRhQ2hhbmdlcykge1xuICAgICAgICAgICAgbmV4dFRpY2sodGhpcy5fdXBkYXRlLCB0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuZGF0YUNoYW5nZXMgPSBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZGF0YUNoYW5nZXMucHVzaChjaGFuZ2UpO1xuICAgIH1cbiAgICBlbHNlIGlmICh0aGlzLmxpZmVDeWNsZS5pbml0ZWQgJiYgdGhpcy5vd25lcikge1xuICAgICAgICB0aGlzLl91cGRhdGVCaW5keE93bmVyKFtjaGFuZ2VdKTtcbiAgICB9XG59O1xuXG5cbi8qKlxuICog55uR5ZCs57uE5Lu255qE5pWw5o2u5Y+Y5YyWXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGRhdGFOYW1lIOWPmOWMlueahOaVsOaNrumhuVxuICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXIg55uR5ZCs5Ye95pWwXG4gKi9cbkNvbXBvbmVudC5wcm90b3R5cGUud2F0Y2ggPSBmdW5jdGlvbiAoZGF0YU5hbWUsIGxpc3RlbmVyKSB7XG4gICAgdmFyIGRhdGFFeHByID0gcGFyc2VFeHByKGRhdGFOYW1lKTtcblxuICAgIHRoaXMuZGF0YS5saXN0ZW4oYmluZChmdW5jdGlvbiAoY2hhbmdlKSB7XG4gICAgICAgIGlmIChjaGFuZ2VFeHByQ29tcGFyZShjaGFuZ2UuZXhwciwgZGF0YUV4cHIsIHRoaXMuZGF0YSkpIHtcbiAgICAgICAgICAgIGxpc3RlbmVyLmNhbGwodGhpcywgZXZhbEV4cHIoZGF0YUV4cHIsIHRoaXMuZGF0YSwgdGhpcyksIGNoYW5nZSk7XG4gICAgICAgIH1cbiAgICB9LCB0aGlzKSk7XG59O1xuXG4vKipcbiAqIOe7hOS7tumUgOavgeeahOihjOS4ulxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIOmUgOavgeihjOS4uueahOWPguaVsFxuICovXG5Db21wb25lbnQucHJvdG90eXBlLmRpc3Bvc2UgPSBlbGVtZW50T3duRGlzcG9zZTtcblxuQ29tcG9uZW50LnByb3RvdHlwZS5fZG9uZUxlYXZlID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLmxlYXZlRGlzcG9zZSkge1xuICAgICAgICBpZiAoIXRoaXMubGlmZUN5Y2xlLmRpc3Bvc2VkKSB7XG4gICAgICAgICAgICAvLyDov5nph4zkuI3nlKjmjKjkuKrosIPnlKggZGlzcG9zZSDkuobvvIzlm6DkuLogY2hpbGRyZW4g6YeK5pS+6ZO+5Lya6LCD55So55qEXG4gICAgICAgICAgICB0aGlzLnNsb3RDaGlsZHJlbiA9IG51bGw7XG5cbiAgICAgICAgICAgIHRoaXMuZGF0YS51bmxpc3RlbigpO1xuICAgICAgICAgICAgdGhpcy5kYXRhQ2hhbmdlciA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLmRhdGFDaGFuZ2VzID0gbnVsbDtcblxuICAgICAgICAgICAgZWxlbWVudERpc3Bvc2UoXG4gICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3Bvc2VOb0RldGFjaCxcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3Bvc2VOb1RyYW5zaXRpb25cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0aGlzLmxpc3RlbmVycyA9IG51bGw7XG5cbiAgICAgICAgICAgIHRoaXMuZ2l2ZW5BTm9kZSA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLmdpdmVuU2xvdHMgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5naXZlbk5hbWVkU2xvdEJpbmRzID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmICh0aGlzLmxpZmVDeWNsZS5hdHRhY2hlZCkge1xuICAgICAgICByZW1vdmVFbCh0aGlzLl9nZXRFbCgpKTtcbiAgICAgICAgdGhpcy5fdG9QaGFzZSgnZGV0YWNoZWQnKTtcbiAgICB9XG59O1xuXG4vKipcbiAqIOWujOaIkOe7hOS7tiBhdHRhY2hlZCDlkI7nmoTooYzkuLpcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gZWxlbWVudCDlhYPntKDoioLngrlcbiAqL1xuQ29tcG9uZW50LnByb3RvdHlwZS5fYXR0YWNoZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5fZ2V0RWwoKTtcbiAgICBlbGVtZW50QXR0YWNoZWQodGhpcyk7XG59O1xuXG5Db21wb25lbnQucHJvdG90eXBlLmF0dGFjaCA9IGVsZW1lbnRPd25BdHRhY2g7XG5Db21wb25lbnQucHJvdG90eXBlLmRldGFjaCA9IGVsZW1lbnRPd25EZXRhY2g7XG5Db21wb25lbnQucHJvdG90eXBlLl9hdHRhY2hIVE1MID0gZWxlbWVudE93bkF0dGFjaEhUTUw7XG5Db21wb25lbnQucHJvdG90eXBlLl9jcmVhdGUgPSBlbGVtZW50T3duQ3JlYXRlO1xuQ29tcG9uZW50LnByb3RvdHlwZS5fZ2V0RWwgPSBlbGVtZW50T3duR2V0RWw7XG5Db21wb25lbnQucHJvdG90eXBlLl9nZXRFbElkID0gZWxlbWVudE93bkdldEVsSWQ7XG5Db21wb25lbnQucHJvdG90eXBlLl9vbkVsID0gZWxlbWVudE93bk9uRWw7XG5cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50O1xuXG5cbi8qKlxuICogQGZpbGUg5Yib5bu657uE5Lu257G7XG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG4vLyB2YXIgQ29tcG9uZW50ID0gcmVxdWlyZSgnLi9jb21wb25lbnQnKTtcbi8vIHZhciBpbmhlcml0cyA9IHJlcXVpcmUoJy4uL3V0aWwvaW5oZXJpdHMnKTtcblxuLyoqXG4gKiDliJvlu7rnu4Tku7bnsbtcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvdG8g57uE5Lu257G755qE5pa55rOV6KGoXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqL1xuZnVuY3Rpb24gZGVmaW5lQ29tcG9uZW50KHByb3RvKSB7XG4gICAgLy8g5aaC5p6c5Lyg5YWl5LiA5Liq5LiN5pivIHNhbiBjb21wb25lbnQg55qEIGNvbnN0cnVjdG9y77yM55u05o6l6L+U5Zue5LiN5piv57uE5Lu25p6E6YCg5Ye95pWwXG4gICAgLy8g6L+Z56eN5Zy65pmv5a+86Ie055qE6ZSZ6K+vIHNhbiDkuI3kuojogIPomZFcbiAgICBpZiAodHlwZW9mIHByb3RvID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBwcm90bztcbiAgICB9XG5cbiAgICAvLyAjW2JlZ2luXSBlcnJvclxuICAgIGlmICh0eXBlb2YgcHJvdG8gIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignW1NBTiBGQVRBTF0gcGFyYW0gbXVzdCBiZSBhIHBsYWluIG9iamVjdC4nKTtcbiAgICB9XG4gICAgLy8gI1tlbmRdXG5cbiAgICBmdW5jdGlvbiBDb21wb25lbnRDbGFzcyhvcHRpb24pIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgICAgICBDb21wb25lbnQuY2FsbCh0aGlzLCBvcHRpb24pO1xuICAgIH1cblxuICAgIENvbXBvbmVudENsYXNzLnByb3RvdHlwZSA9IHByb3RvO1xuICAgIGluaGVyaXRzKENvbXBvbmVudENsYXNzLCBDb21wb25lbnQpO1xuXG4gICAgcmV0dXJuIENvbXBvbmVudENsYXNzO1xufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBkZWZpbmVDb21wb25lbnQ7XG5cblxuLyoqXG4gKiBAZmlsZSDnvJbor5Hnu4Tku7bnsbtcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cblxuLy8gdmFyIGNyZWF0ZUFOb2RlID0gcmVxdWlyZSgnLi4vcGFyc2VyL2NyZWF0ZS1hLW5vZGUnKTtcbi8vIHZhciBwYXJzZVRlbXBsYXRlID0gcmVxdWlyZSgnLi4vcGFyc2VyL3BhcnNlLXRlbXBsYXRlJyk7XG4vLyB2YXIgcGFyc2VUZXh0ID0gcmVxdWlyZSgnLi4vcGFyc2VyL3BhcnNlLXRleHQnKTtcbi8vIHZhciBkZWZpbmVDb21wb25lbnQgPSByZXF1aXJlKCcuL2RlZmluZS1jb21wb25lbnQnKTtcblxuXG4vKipcbiAqIOe8luivkee7hOS7tuexu+OAgumihOino+aekHRlbXBsYXRl5ZKMY29tcG9uZW50c1xuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IENvbXBvbmVudENsYXNzIOe7hOS7tuexu1xuICovXG5mdW5jdGlvbiBjb21waWxlQ29tcG9uZW50KENvbXBvbmVudENsYXNzKSB7XG4gICAgdmFyIHByb3RvID0gQ29tcG9uZW50Q2xhc3MucHJvdG90eXBlO1xuXG4gICAgLy8gcHJlIGRlZmluZSBjb21wb25lbnRzIGNsYXNzXG4gICAgaWYgKCFwcm90by5oYXNPd25Qcm9wZXJ0eSgnX2NtcHRSZWFkeScpKSB7XG4gICAgICAgIHByb3RvLmNvbXBvbmVudHMgPSBDb21wb25lbnRDbGFzcy5jb21wb25lbnRzIHx8IHByb3RvLmNvbXBvbmVudHMgfHwge307XG4gICAgICAgIHZhciBjb21wb25lbnRzID0gcHJvdG8uY29tcG9uZW50cztcblxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gY29tcG9uZW50cykgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgICAgICAgICB2YXIgY29tcG9uZW50Q2xhc3MgPSBjb21wb25lbnRzW2tleV07XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29tcG9uZW50Q2xhc3MgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50c1trZXldID0gZGVmaW5lQ29tcG9uZW50KGNvbXBvbmVudENsYXNzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNvbXBvbmVudENsYXNzID09PSAnc2VsZicpIHtcbiAgICAgICAgICAgICAgICBjb21wb25lbnRzW2tleV0gPSBDb21wb25lbnRDbGFzcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHByb3RvLl9jbXB0UmVhZHkgPSAxO1xuICAgIH1cblxuXG4gICAgLy8gcHJlIGNvbXBpbGUgdGVtcGxhdGVcbiAgICBpZiAoIXByb3RvLmhhc093blByb3BlcnR5KCdhTm9kZScpKSB7XG4gICAgICAgIHByb3RvLmFOb2RlID0gY3JlYXRlQU5vZGUoKTtcblxuICAgICAgICB2YXIgdHBsID0gQ29tcG9uZW50Q2xhc3MudGVtcGxhdGUgfHwgcHJvdG8udGVtcGxhdGU7XG4gICAgICAgIGlmICh0cGwpIHtcbiAgICAgICAgICAgIHZhciBhTm9kZSA9IHBhcnNlVGVtcGxhdGUodHBsLCB7XG4gICAgICAgICAgICAgICAgdHJpbVdoaXRlc3BhY2U6IHByb3RvLnRyaW1XaGl0ZXNwYWNlIHx8IENvbXBvbmVudENsYXNzLnRyaW1XaGl0ZXNwYWNlLFxuICAgICAgICAgICAgICAgIGRlbGltaXRlcnM6IHByb3RvLmRlbGltaXRlcnMgfHwgQ29tcG9uZW50Q2xhc3MuZGVsaW1pdGVyc1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YXIgZmlyc3RDaGlsZCA9IGFOb2RlLmNoaWxkcmVuWzBdO1xuXG4gICAgICAgICAgICAvLyAjW2JlZ2luXSBlcnJvclxuICAgICAgICAgICAgaWYgKGFOb2RlLmNoaWxkcmVuLmxlbmd0aCAhPT0gMSB8fCBmaXJzdENoaWxkLmlzVGV4dCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignW1NBTiBGQVRBTF0gdGVtcGxhdGUgbXVzdCBoYXZlIGEgcm9vdCBlbGVtZW50LicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gI1tlbmRdXG5cbiAgICAgICAgICAgIHByb3RvLmFOb2RlID0gZmlyc3RDaGlsZDtcbiAgICAgICAgICAgIGlmIChmaXJzdENoaWxkLnRhZ05hbWUgPT09ICd0ZW1wbGF0ZScpIHtcbiAgICAgICAgICAgICAgICBmaXJzdENoaWxkLnRhZ05hbWUgPSBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgY29tcG9uZW50UHJvcEV4dHJhID0ge1xuICAgICAgICAgICAgICAgICdjbGFzcyc6IHtuYW1lOiAnY2xhc3MnLCBleHByOiBwYXJzZVRleHQoJ3t7Y2xhc3MgfCBfY2xhc3MgfCBfc2VwKFwiIFwiKX19Jyl9LFxuICAgICAgICAgICAgICAgICdzdHlsZSc6IHtuYW1lOiAnc3R5bGUnLCBleHByOiBwYXJzZVRleHQoJ3t7c3R5bGUgfCBfc3R5bGUgfCBfc2VwKFwiO1wiKX19Jyl9LFxuICAgICAgICAgICAgICAgICdpZCc6IHtuYW1lOiAnaWQnLCBleHByOiBwYXJzZVRleHQoJ3t7aWR9fScpfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdmFyIGxlbiA9IGZpcnN0Q2hpbGQucHJvcHMubGVuZ3RoO1xuICAgICAgICAgICAgd2hpbGUgKGxlbi0tKSB7XG4gICAgICAgICAgICAgICAgdmFyIHByb3AgPSBmaXJzdENoaWxkLnByb3BzW2xlbl07XG4gICAgICAgICAgICAgICAgdmFyIGV4dHJhID0gY29tcG9uZW50UHJvcEV4dHJhW3Byb3AubmFtZV07XG5cbiAgICAgICAgICAgICAgICBpZiAoZXh0cmEpIHtcbiAgICAgICAgICAgICAgICAgICAgZmlyc3RDaGlsZC5wcm9wcy5zcGxpY2UobGVuLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50UHJvcEV4dHJhW3Byb3AubmFtZV0gPSBwcm9wO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9wLm5hbWUgIT09ICdpZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3AuZXhwci5zZWdzLnB1c2goZXh0cmEuZXhwci5zZWdzWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3AuZXhwci52YWx1ZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZpcnN0Q2hpbGQucHJvcHMucHVzaChcbiAgICAgICAgICAgICAgICBjb21wb25lbnRQcm9wRXh0cmFbJ2NsYXNzJ10sIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZG90LW5vdGF0aW9uXG4gICAgICAgICAgICAgICAgY29tcG9uZW50UHJvcEV4dHJhLnN0eWxlLFxuICAgICAgICAgICAgICAgIGNvbXBvbmVudFByb3BFeHRyYS5pZFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gY29tcGlsZUNvbXBvbmVudDtcblxuXG4vKipcbiAqIEBmaWxlIOe7hOS7tumihOeDrVxuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuLy8gdmFyIEV4cHJUeXBlID0gcmVxdWlyZSgnLi4vcGFyc2VyL2V4cHItdHlwZScpO1xuLy8gdmFyIGVhY2ggPSByZXF1aXJlKCcuLi91dGlsL2VhY2gnKTtcbi8vIHZhciBoYW5kbGVQcm9wID0gcmVxdWlyZSgnLi9oYW5kbGUtcHJvcCcpO1xuLy8gdmFyIGdldEFOb2RlUHJvcCA9IHJlcXVpcmUoJy4vZ2V0LWEtbm9kZS1wcm9wJyk7XG4vLyB2YXIgbm9TZXRIVE1MID0gcmVxdWlyZSgnLi4vYnJvd3Nlci9uby1zZXQtaHRtbCcpO1xuLy8gdmFyIGllID0gcmVxdWlyZSgnLi4vYnJvd3Nlci9pZScpO1xuXG4vKipcbiAqIOe7hOS7tumihOeDre+8jOWIhuaekOe7hOS7tmFOb2Rl55qE5pWw5o2u5byV55So562J5L+h5oGvXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gQ29tcG9uZW50Q2xhc3Mg57uE5Lu257G7XG4gKi9cbmZ1bmN0aW9uIGNvbXBvbmVudFByZWhlYXQoQ29tcG9uZW50Q2xhc3MpIHtcbiAgICB2YXIgc3RhY2sgPSBbXTtcblxuICAgIGZ1bmN0aW9uIHJlY29yZEhvdHNwb3REYXRhKHJlZnMsIG5vdENvbnRlbnREYXRhKSB7XG4gICAgICAgIHZhciBsZW4gPSBzdGFjay5sZW5ndGg7XG4gICAgICAgIGVhY2goc3RhY2ssIGZ1bmN0aW9uIChhTm9kZSwgaW5kZXgpIHtcbiAgICAgICAgICAgIGlmICghbm90Q29udGVudERhdGEgfHwgaW5kZXggIT09IGxlbiAtIDEpIHtcbiAgICAgICAgICAgICAgICBlYWNoKHJlZnMsIGZ1bmN0aW9uIChyZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgYU5vZGUuaG90c3BvdC5kYXRhW3JlZl0gPSAxO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIGFuYWx5c2VBTm9kZUhvdHNwb3QoYU5vZGUpIHtcbiAgICAgICAgaWYgKCFhTm9kZS5ob3RzcG90KSB7XG4gICAgICAgICAgICBzdGFjay5wdXNoKGFOb2RlKTtcblxuXG4gICAgICAgICAgICBpZiAoYU5vZGUudGV4dEV4cHIpIHtcbiAgICAgICAgICAgICAgICBhTm9kZS5ob3RzcG90ID0ge2RhdGE6IHt9fTtcbiAgICAgICAgICAgICAgICByZWNvcmRIb3RzcG90RGF0YShhbmFseXNlRXhwckRhdGFIb3RzcG90KGFOb2RlLnRleHRFeHByKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBhTm9kZS5ob3RzcG90ID0ge1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgLy8gI1tiZWdpbl0gYWxsdWFcbiAgICAgICAgICAgICAgICAgICAgbm9TZXRIVE1MOiBpZSAmJiBub1NldEhUTUwoYU5vZGUpLFxuICAgICAgICAgICAgICAgICAgICAvLyAjW2VuZF1cbiAgICAgICAgICAgICAgICAgICAgZHluYW1pY1Byb3BzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgeFByb3BzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQXR0cjogJycsXG4gICAgICAgICAgICAgICAgICAgIHByb3BzOiB7fVxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAvLyA9PT0gYW5hbHlzZSBob3RzcG90IGRhdGE6IHN0YXJ0XG4gICAgICAgICAgICAgICAgZWFjaChhTm9kZS52YXJzLCBmdW5jdGlvbiAodmFySXRlbSkge1xuICAgICAgICAgICAgICAgICAgICByZWNvcmRIb3RzcG90RGF0YShhbmFseXNlRXhwckRhdGFIb3RzcG90KHZhckl0ZW0uZXhwcikpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgZWFjaChhTm9kZS5wcm9wcywgZnVuY3Rpb24gKHByb3ApIHtcbiAgICAgICAgICAgICAgICAgICAgcmVjb3JkSG90c3BvdERhdGEoYW5hbHlzZUV4cHJEYXRhSG90c3BvdChwcm9wLmV4cHIpKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIC8qIGVzbGludC1kaXNhYmxlIGd1YXJkLWZvci1pbiAqL1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBhTm9kZS5kaXJlY3RpdmVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkaXJlY3RpdmUgPSBhTm9kZS5kaXJlY3RpdmVzW2tleV07XG4gICAgICAgICAgICAgICAgICAgIHJlY29yZEhvdHNwb3REYXRhKGFuYWx5c2VFeHByRGF0YUhvdHNwb3QoZGlyZWN0aXZlLnZhbHVlKSwga2V5ICE9PSAnaHRtbCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvKiBlc2xpbnQtZW5hYmxlIGd1YXJkLWZvci1pbiAqL1xuXG4gICAgICAgICAgICAgICAgZWFjaChhTm9kZS5lbHNlcywgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgIGFuYWx5c2VBTm9kZUhvdHNwb3QoY2hpbGQpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgZWFjaChhTm9kZS5jaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgIGFuYWx5c2VBTm9kZUhvdHNwb3QoY2hpbGQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIC8vID09PSBhbmFseXNlIGhvdHNwb3QgZGF0YTogZW5kXG5cblxuICAgICAgICAgICAgICAgIC8vID09PSBhbmFseXNlIGhvdHNwb3QgcHJvcHM6IHN0YXJ0XG4gICAgICAgICAgICAgICAgZWFjaChhTm9kZS5wcm9wcywgZnVuY3Rpb24gKHByb3AsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIGFOb2RlLmhvdHNwb3QucHJvcHNbcHJvcC5uYW1lXSA9IGluZGV4O1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9wLm5hbWUgPT09ICdpZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3AuaWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYU5vZGUuaG90c3BvdC5pZFByb3AgPSBwcm9wO1xuICAgICAgICAgICAgICAgICAgICAgICAgYU5vZGUuaG90c3BvdC5keW5hbWljUHJvcHMucHVzaChwcm9wKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChwcm9wLmV4cHIudmFsdWUgIT0gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgJiYgIS9eKHRlbXBsYXRlfGlucHV0fHRleHRhcmVhfHNlbGVjdHxvcHRpb24pJC8udGVzdChhTm9kZS50YWdOYW1lKVxuICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFOb2RlLmhvdHNwb3Quc3RhdGljQXR0ciArPSBoYW5kbGVQcm9wLmF0dHIoYU5vZGUsIHByb3AubmFtZSwgcHJvcC5leHByLnZhbHVlKSB8fCAnJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wLngpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhTm9kZS5ob3RzcG90LnhQcm9wcy5wdXNoKHByb3ApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYU5vZGUuaG90c3BvdC5keW5hbWljUHJvcHMucHVzaChwcm9wKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgLy8gaWUg5LiL77yM5aaC5p6cIG9wdGlvbiDmsqHmnIkgdmFsdWUg5bGe5oCn77yMc2VsZWN0LnZhbHVlID0geHgg5pON5L2c5LiN5Lya6YCJ5LitIG9wdGlvblxuICAgICAgICAgICAgICAgIC8vIOaJgOS7peayoeacieiuvue9riB2YWx1ZSDml7bvvIzpu5jorqTmioogb3B0aW9uIOeahOWGheWuueS9nOS4uiB2YWx1ZVxuICAgICAgICAgICAgICAgIGlmIChhTm9kZS50YWdOYW1lID09PSAnb3B0aW9uJ1xuICAgICAgICAgICAgICAgICAgICAmJiAhZ2V0QU5vZGVQcm9wKGFOb2RlLCAndmFsdWUnKVxuICAgICAgICAgICAgICAgICAgICAmJiBhTm9kZS5jaGlsZHJlblswXVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWVQcm9wID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3ZhbHVlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHI6IGFOb2RlLmNoaWxkcmVuWzBdLnRleHRFeHByXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGFOb2RlLnByb3BzLnB1c2godmFsdWVQcm9wKTtcbiAgICAgICAgICAgICAgICAgICAgYU5vZGUuaG90c3BvdC5keW5hbWljUHJvcHMucHVzaCh2YWx1ZVByb3ApO1xuICAgICAgICAgICAgICAgICAgICBhTm9kZS5ob3RzcG90LnByb3BzLnZhbHVlID0gYU5vZGUucHJvcHMubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gPT09IGFuYWx5c2UgaG90c3BvdCBwcm9wczogZW5kXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHN0YWNrLnBvcCgpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxuICAgIGFuYWx5c2VBTm9kZUhvdHNwb3QoQ29tcG9uZW50Q2xhc3MucHJvdG90eXBlLmFOb2RlKTtcbn1cblxuLyoqXG4gKiDliIbmnpDooajovr7lvI/nmoTmlbDmja7lvJXnlKhcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gZXhwciDopoHliIbmnpDnmoTooajovr7lvI9cbiAqIEByZXR1cm4ge0FycmF5fVxuICovXG5mdW5jdGlvbiBhbmFseXNlRXhwckRhdGFIb3RzcG90KGV4cHIpIHtcbiAgICB2YXIgcmVmcyA9IFtdO1xuXG4gICAgZnVuY3Rpb24gYW5hbHlzZUV4cHJzKGV4cHJzKSB7XG4gICAgICAgIGVhY2goZXhwcnMsIGZ1bmN0aW9uIChleHByKSB7XG4gICAgICAgICAgICByZWZzID0gcmVmcy5jb25jYXQoYW5hbHlzZUV4cHJEYXRhSG90c3BvdChleHByKSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHN3aXRjaCAoZXhwci50eXBlKSB7XG4gICAgICAgIGNhc2UgRXhwclR5cGUuQUNDRVNTT1I6XG4gICAgICAgICAgICB2YXIgcGF0aHMgPSBleHByLnBhdGhzO1xuICAgICAgICAgICAgcmVmcy5wdXNoKHBhdGhzWzBdLnZhbHVlKTtcblxuICAgICAgICAgICAgaWYgKHBhdGhzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICByZWZzLnB1c2gocGF0aHNbMF0udmFsdWUgKyAnLicgKyAocGF0aHNbMV0udmFsdWUgfHwgJyonKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGFuYWx5c2VFeHBycyhwYXRocy5zbGljZSgxKSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIEV4cHJUeXBlLlVOQVJZOlxuICAgICAgICAgICAgcmV0dXJuIGFuYWx5c2VFeHByRGF0YUhvdHNwb3QoZXhwci5leHByKTtcblxuICAgICAgICBjYXNlIEV4cHJUeXBlLlRFWFQ6XG4gICAgICAgIGNhc2UgRXhwclR5cGUuQklOQVJZOlxuICAgICAgICBjYXNlIEV4cHJUeXBlLlRFUlRJQVJZOlxuICAgICAgICAgICAgYW5hbHlzZUV4cHJzKGV4cHIuc2Vncyk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIEV4cHJUeXBlLklOVEVSUDpcbiAgICAgICAgICAgIHJlZnMgPSBhbmFseXNlRXhwckRhdGFIb3RzcG90KGV4cHIuZXhwcik7XG5cbiAgICAgICAgICAgIGVhY2goZXhwci5maWx0ZXJzLCBmdW5jdGlvbiAoZmlsdGVyKSB7XG4gICAgICAgICAgICAgICAgYW5hbHlzZUV4cHJzKGZpbHRlci5uYW1lLnBhdGhzKTtcbiAgICAgICAgICAgICAgICBhbmFseXNlRXhwcnMoZmlsdGVyLmFyZ3MpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZnM7XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGNvbXBvbmVudFByZWhlYXQ7XG5cblxuLyoqXG4gKiBAZmlsZSDlsIYgYmluZHMg55qEIG5hbWUg5LuOIGtlYmFiY2FzZSDovazmjaLmiJAgY2FtZWxjYXNlXG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG4vLyB2YXIga2ViYWIyY2FtZWwgPSByZXF1aXJlKCcuLi91dGlsL2tlYmFiMmNhbWVsJyk7XG4vLyB2YXIgZWFjaCA9IHJlcXVpcmUoJy4uL3V0aWwvZWFjaCcpO1xuXG4vKipcbiAqIOWwhiBiaW5kcyDnmoQgbmFtZSDku44ga2ViYWJjYXNlIOi9rOaNouaIkCBjYW1lbGNhc2VcbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBiaW5kcyBiaW5kc+mbhuWQiFxuICogQHJldHVybiB7QXJyYXl9XG4gKi9cbmZ1bmN0aW9uIGNhbWVsQ29tcG9uZW50QmluZHMoYmluZHMpIHtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgZWFjaChiaW5kcywgZnVuY3Rpb24gKGJpbmQpIHtcbiAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgbmFtZToga2ViYWIyY2FtZWwoYmluZC5uYW1lKSxcbiAgICAgICAgICAgIGV4cHI6IGJpbmQuZXhwcixcbiAgICAgICAgICAgIHg6IGJpbmQueCxcbiAgICAgICAgICAgIHJhdzogYmluZC5yYXdcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBjYW1lbENvbXBvbmVudEJpbmRzO1xuXG5cbi8qKlxuICogQGZpbGUg57yW6K+R5rqQ56CB55qEIGhlbHBlciDmlrnms5Xpm4blkIhcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cbi8vIHZhciBlYWNoID0gcmVxdWlyZSgnLi4vdXRpbC9lYWNoJyk7XG4vLyB2YXIgRXhwclR5cGUgPSByZXF1aXJlKCcuLi9wYXJzZXIvZXhwci10eXBlJyk7XG5cbi8vICNbYmVnaW5dIHNzclxuLy8gXG4vLyAvKipcbi8vICAqIOe8luivkea6kOeggeeahCBoZWxwZXIg5pa55rOV6ZuG5ZCI5a+56LGhXG4vLyAgKi9cbi8vIHZhciBjb21waWxlRXhwclNvdXJjZSA9IHtcbi8vIFxuLy8gICAgIC8qKlxuLy8gICAgICAqIOWtl+espuS4suWtl+mdouWMllxuLy8gICAgICAqXG4vLyAgICAgICogQHBhcmFtIHtzdHJpbmd9IHNvdXJjZSDpnIDopoHlrZfpnaLljJbnmoTlrZfnrKbkuLJcbi8vICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IOWtl+espuS4suWtl+mdouWMlue7k+aenFxuLy8gICAgICAqL1xuLy8gICAgIHN0cmluZ0xpdGVyYWxpemU6IGZ1bmN0aW9uIChzb3VyY2UpIHtcbi8vICAgICAgICAgcmV0dXJuICdcIidcbi8vICAgICAgICAgICAgICsgc291cmNlXG4vLyAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xceDVDL2csICdcXFxcXFxcXCcpXG4vLyAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKVxuLy8gICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXHgwQS9nLCAnXFxcXG4nKVxuLy8gICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXHgwOS9nLCAnXFxcXHQnKVxuLy8gICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXHgwRC9nLCAnXFxcXHInKVxuLy8gICAgICAgICAgICAgICAgIC8vIC5yZXBsYWNlKCAvXFx4MDgvZywgJ1xcXFxiJyApXG4vLyAgICAgICAgICAgICAgICAgLy8gLnJlcGxhY2UoIC9cXHgwQy9nLCAnXFxcXGYnIClcbi8vICAgICAgICAgICAgICsgJ1wiJztcbi8vICAgICB9LFxuLy8gXG4vLyAgICAgLyoqXG4vLyAgICAgICog55Sf5oiQ5pWw5o2u6K6/6Zeu6KGo6L6+5byP5Luj56CBXG4vLyAgICAgICpcbi8vICAgICAgKiBAcGFyYW0ge09iamVjdD99IGFjY2Vzc29yRXhwciBhY2Nlc3NvcuihqOi+vuW8j+WvueixoVxuLy8gICAgICAqIEByZXR1cm4ge3N0cmluZ31cbi8vICAgICAgKi9cbi8vICAgICBkYXRhQWNjZXNzOiBmdW5jdGlvbiAoYWNjZXNzb3JFeHByKSB7XG4vLyAgICAgICAgIHZhciBjb2RlID0gJ2NvbXBvbmVudEN0eC5kYXRhJztcbi8vICAgICAgICAgaWYgKGFjY2Vzc29yRXhwcikge1xuLy8gICAgICAgICAgICAgZWFjaChhY2Nlc3NvckV4cHIucGF0aHMsIGZ1bmN0aW9uIChwYXRoKSB7XG4vLyAgICAgICAgICAgICAgICAgaWYgKHBhdGgudHlwZSA9PT0gRXhwclR5cGUuQUNDRVNTT1IpIHtcbi8vICAgICAgICAgICAgICAgICAgICAgY29kZSArPSAnWycgKyBjb21waWxlRXhwclNvdXJjZS5kYXRhQWNjZXNzKHBhdGgpICsgJ10nO1xuLy8gICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4vLyAgICAgICAgICAgICAgICAgfVxuLy8gXG4vLyAgICAgICAgICAgICAgICAgc3dpdGNoICh0eXBlb2YgcGF0aC52YWx1ZSkge1xuLy8gICAgICAgICAgICAgICAgICAgICBjYXNlICdzdHJpbmcnOlxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgY29kZSArPSAnLicgKyBwYXRoLnZhbHVlO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4vLyBcbi8vICAgICAgICAgICAgICAgICAgICAgY2FzZSAnbnVtYmVyJzpcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGNvZGUgKz0gJ1snICsgcGF0aC52YWx1ZSArICddJztcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuLy8gICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgIH0pO1xuLy8gICAgICAgICB9XG4vLyBcbi8vICAgICAgICAgcmV0dXJuIGNvZGU7XG4vLyAgICAgfSxcbi8vIFxuLy8gICAgIC8qKlxuLy8gICAgICAqIOeUn+aIkOaPkuWAvOS7o+eggVxuLy8gICAgICAqXG4vLyAgICAgICogQHBhcmFtIHtPYmplY3R9IGludGVycEV4cHIg5o+S5YC86KGo6L6+5byP5a+56LGhXG4vLyAgICAgICogQHJldHVybiB7c3RyaW5nfVxuLy8gICAgICAqL1xuLy8gICAgIGludGVycDogZnVuY3Rpb24gKGludGVycEV4cHIpIHtcbi8vICAgICAgICAgdmFyIGNvZGUgPSBjb21waWxlRXhwclNvdXJjZS5leHByKGludGVycEV4cHIuZXhwcik7XG4vLyBcbi8vIFxuLy8gICAgICAgICBlYWNoKGludGVycEV4cHIuZmlsdGVycywgZnVuY3Rpb24gKGZpbHRlcikge1xuLy8gICAgICAgICAgICAgY29kZSA9ICdjb21wb25lbnRDdHguY2FsbEZpbHRlcihcIicgKyBmaWx0ZXIubmFtZS5wYXRoc1swXS52YWx1ZSArICdcIiwgWycgKyBjb2RlO1xuLy8gICAgICAgICAgICAgZWFjaChmaWx0ZXIuYXJncywgZnVuY3Rpb24gKGFyZykge1xuLy8gICAgICAgICAgICAgICAgIGNvZGUgKz0gJywgJyArIGNvbXBpbGVFeHByU291cmNlLmV4cHIoYXJnKTtcbi8vICAgICAgICAgICAgIH0pO1xuLy8gICAgICAgICAgICAgY29kZSArPSAnXSknO1xuLy8gICAgICAgICB9KTtcbi8vIFxuLy8gICAgICAgICBpZiAoIWludGVycEV4cHIub3JpZ2luYWwpIHtcbi8vICAgICAgICAgICAgIHJldHVybiAnZXNjYXBlSFRNTCgnICsgY29kZSArICcpJztcbi8vICAgICAgICAgfVxuLy8gXG4vLyAgICAgICAgIHJldHVybiBjb2RlO1xuLy8gICAgIH0sXG4vLyBcbi8vICAgICAvKipcbi8vICAgICAgKiDnlJ/miJDmlofmnKzniYfmrrXku6PnoIFcbi8vICAgICAgKlxuLy8gICAgICAqIEBwYXJhbSB7T2JqZWN0fSB0ZXh0RXhwciDmlofmnKzniYfmrrXooajovr7lvI/lr7nosaFcbi8vICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4vLyAgICAgICovXG4vLyAgICAgdGV4dDogZnVuY3Rpb24gKHRleHRFeHByKSB7XG4vLyAgICAgICAgIGlmICh0ZXh0RXhwci5zZWdzLmxlbmd0aCA9PT0gMCkge1xuLy8gICAgICAgICAgICAgcmV0dXJuICdcIlwiJztcbi8vICAgICAgICAgfVxuLy8gXG4vLyAgICAgICAgIHZhciBjb2RlID0gJyc7XG4vLyBcbi8vICAgICAgICAgZWFjaCh0ZXh0RXhwci5zZWdzLCBmdW5jdGlvbiAoc2VnKSB7XG4vLyAgICAgICAgICAgICB2YXIgc2VnQ29kZSA9IGNvbXBpbGVFeHByU291cmNlLmV4cHIoc2VnKTtcbi8vICAgICAgICAgICAgIGNvZGUgKz0gY29kZSA/ICcgKyAnICsgc2VnQ29kZSA6IHNlZ0NvZGU7XG4vLyAgICAgICAgIH0pO1xuLy8gXG4vLyAgICAgICAgIHJldHVybiBjb2RlO1xuLy8gICAgIH0sXG4vLyBcbi8vICAgICAvKipcbi8vICAgICAgKiDkuozlhYPooajovr7lvI/mk43kvZznrKbmmKDlsITooahcbi8vICAgICAgKlxuLy8gICAgICAqIEB0eXBlIHtPYmplY3R9XG4vLyAgICAgICovXG4vLyAgICAgYmluYXJ5T3A6IHtcbi8vICAgICAgICAgLyogZXNsaW50LWRpc2FibGUgKi9cbi8vICAgICAgICAgNDM6ICcrJyxcbi8vICAgICAgICAgNDU6ICctJyxcbi8vICAgICAgICAgNDI6ICcqJyxcbi8vICAgICAgICAgNDc6ICcvJyxcbi8vICAgICAgICAgNjA6ICc8Jyxcbi8vICAgICAgICAgNjI6ICc+Jyxcbi8vICAgICAgICAgNzY6ICcmJicsXG4vLyAgICAgICAgIDk0OiAnIT0nLFxuLy8gICAgICAgICAxMjE6ICc8PScsXG4vLyAgICAgICAgIDEyMjogJz09Jyxcbi8vICAgICAgICAgMTIzOiAnPj0nLFxuLy8gICAgICAgICAxNTU6ICchPT0nLFxuLy8gICAgICAgICAxODM6ICc9PT0nLFxuLy8gICAgICAgICAyNDg6ICd8fCdcbi8vICAgICAgICAgLyogZXNsaW50LWVuYWJsZSAqL1xuLy8gICAgIH0sXG4vLyBcbi8vICAgICAvKipcbi8vICAgICAgKiDnlJ/miJDooajovr7lvI/ku6PnoIFcbi8vICAgICAgKlxuLy8gICAgICAqIEBwYXJhbSB7T2JqZWN0fSBleHByIOihqOi+vuW8j+WvueixoVxuLy8gICAgICAqIEByZXR1cm4ge3N0cmluZ31cbi8vICAgICAgKi9cbi8vICAgICBleHByOiBmdW5jdGlvbiAoZXhwcikge1xuLy8gICAgICAgICBzd2l0Y2ggKGV4cHIudHlwZSkge1xuLy8gICAgICAgICAgICAgY2FzZSBFeHByVHlwZS5VTkFSWTpcbi8vICAgICAgICAgICAgICAgICByZXR1cm4gJyEnICsgY29tcGlsZUV4cHJTb3VyY2UuZXhwcihleHByLmV4cHIpO1xuLy8gXG4vLyAgICAgICAgICAgICBjYXNlIEV4cHJUeXBlLkJJTkFSWTpcbi8vICAgICAgICAgICAgICAgICByZXR1cm4gY29tcGlsZUV4cHJTb3VyY2UuZXhwcihleHByLnNlZ3NbMF0pXG4vLyAgICAgICAgICAgICAgICAgICAgICsgY29tcGlsZUV4cHJTb3VyY2UuYmluYXJ5T3BbZXhwci5vcGVyYXRvcl1cbi8vICAgICAgICAgICAgICAgICAgICAgKyBjb21waWxlRXhwclNvdXJjZS5leHByKGV4cHIuc2Vnc1sxXSk7XG4vLyBcbi8vICAgICAgICAgICAgIGNhc2UgRXhwclR5cGUuVEVSVElBUlk6XG4vLyAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbXBpbGVFeHByU291cmNlLmV4cHIoZXhwci5zZWdzWzBdKVxuLy8gICAgICAgICAgICAgICAgICAgICArICc/JyArIGNvbXBpbGVFeHByU291cmNlLmV4cHIoZXhwci5zZWdzWzFdKVxuLy8gICAgICAgICAgICAgICAgICAgICArICc6JyArIGNvbXBpbGVFeHByU291cmNlLmV4cHIoZXhwci5zZWdzWzJdKTtcbi8vIFxuLy8gICAgICAgICAgICAgY2FzZSBFeHByVHlwZS5TVFJJTkc6XG4vLyAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbXBpbGVFeHByU291cmNlLnN0cmluZ0xpdGVyYWxpemUoZXhwci52YWx1ZSk7XG4vLyBcbi8vICAgICAgICAgICAgIGNhc2UgRXhwclR5cGUuTlVNQkVSOlxuLy8gICAgICAgICAgICAgICAgIHJldHVybiBleHByLnZhbHVlO1xuLy8gXG4vLyAgICAgICAgICAgICBjYXNlIEV4cHJUeXBlLkJPT0w6XG4vLyAgICAgICAgICAgICAgICAgcmV0dXJuIGV4cHIudmFsdWUgPyAndHJ1ZScgOiAnZmFsc2UnO1xuLy8gXG4vLyAgICAgICAgICAgICBjYXNlIEV4cHJUeXBlLkFDQ0VTU09SOlxuLy8gICAgICAgICAgICAgICAgIHJldHVybiBjb21waWxlRXhwclNvdXJjZS5kYXRhQWNjZXNzKGV4cHIpO1xuLy8gXG4vLyAgICAgICAgICAgICBjYXNlIEV4cHJUeXBlLklOVEVSUDpcbi8vICAgICAgICAgICAgICAgICByZXR1cm4gY29tcGlsZUV4cHJTb3VyY2UuaW50ZXJwKGV4cHIpO1xuLy8gXG4vLyAgICAgICAgICAgICBjYXNlIEV4cHJUeXBlLlRFWFQ6XG4vLyAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbXBpbGVFeHByU291cmNlLnRleHQoZXhwcik7XG4vLyAgICAgICAgIH1cbi8vICAgICB9XG4vLyB9O1xuLy8gI1tlbmRdXG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGNvbXBpbGVFeHByU291cmNlO1xuXG5cbi8qKlxuICogQGZpbGUg57yW6K+R5rqQ56CB55qE5Lit6Ze0YnVmZmVy57G7XG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG4vLyB2YXIgZWFjaCA9IHJlcXVpcmUoJy4uL3V0aWwvZWFjaCcpO1xuLy8gdmFyIGNvbXBpbGVFeHByU291cmNlID0gcmVxdWlyZSgnLi9jb21waWxlLWV4cHItc291cmNlJyk7XG5cblxuLy8gI1tiZWdpbl0gc3NyXG4vLyAvKipcbi8vICAqIOe8luivkea6kOeggeeahOS4remXtGJ1ZmZlcuexu1xuLy8gICpcbi8vICAqIEBjbGFzc1xuLy8gICovXG4vLyBmdW5jdGlvbiBDb21waWxlU291cmNlQnVmZmVyKCkge1xuLy8gICAgIHRoaXMuc2VncyA9IFtdO1xuLy8gfVxuLy8gXG4vLyAvKipcbi8vICAqIOa3u+WKoOWOn+Wni+S7o+egge+8jOWwhuWOn+WwgeS4jeWKqOi+k+WHulxuLy8gICpcbi8vICAqIEBwYXJhbSB7c3RyaW5nfSBjb2RlIOWOn+Wni+S7o+eggVxuLy8gICovXG4vLyBDb21waWxlU291cmNlQnVmZmVyLnByb3RvdHlwZS5hZGRSYXcgPSBmdW5jdGlvbiAoY29kZSkge1xuLy8gICAgIHRoaXMuc2Vncy5wdXNoKHtcbi8vICAgICAgICAgdHlwZTogJ1JBVycsXG4vLyAgICAgICAgIGNvZGU6IGNvZGVcbi8vICAgICB9KTtcbi8vIH07XG4vLyBcbi8vIC8qKlxuLy8gICog5re75Yqg6KKr5ou85o6l5Li6aHRtbOeahOWOn+Wni+S7o+eggVxuLy8gICpcbi8vICAqIEBwYXJhbSB7c3RyaW5nfSBjb2RlIOWOn+Wni+S7o+eggVxuLy8gICovXG4vLyBDb21waWxlU291cmNlQnVmZmVyLnByb3RvdHlwZS5qb2luUmF3ID0gZnVuY3Rpb24gKGNvZGUpIHtcbi8vICAgICB0aGlzLnNlZ3MucHVzaCh7XG4vLyAgICAgICAgIHR5cGU6ICdKT0lOX1JBVycsXG4vLyAgICAgICAgIGNvZGU6IGNvZGVcbi8vICAgICB9KTtcbi8vIH07XG4vLyBcbi8vIC8qKlxuLy8gICog5re75YqgcmVuZGVyZXLmlrnms5XnmoTotbflp4vmupDnoIFcbi8vICAqL1xuLy8gQ29tcGlsZVNvdXJjZUJ1ZmZlci5wcm90b3R5cGUuYWRkUmVuZGVyZXJTdGFydCA9IGZ1bmN0aW9uICgpIHtcbi8vICAgICB0aGlzLmFkZFJhdygnZnVuY3Rpb24gKGRhdGEsIHBhcmVudEN0eCwgZ2l2ZW5TbG90cykgeycpO1xuLy8gICAgIHRoaXMuYWRkUmF3KCd2YXIgaHRtbCA9IFwiXCI7Jyk7XG4vLyB9O1xuLy8gXG4vLyAvKipcbi8vICAqIOa3u+WKoHJlbmRlcmVy5pa55rOV55qE57uT5p2f5rqQ56CBXG4vLyAgKi9cbi8vIENvbXBpbGVTb3VyY2VCdWZmZXIucHJvdG90eXBlLmFkZFJlbmRlcmVyRW5kID0gZnVuY3Rpb24gKCkge1xuLy8gICAgIHRoaXMuYWRkUmF3KCdyZXR1cm4gaHRtbDsnKTtcbi8vICAgICB0aGlzLmFkZFJhdygnfScpO1xuLy8gfTtcbi8vIFxuLy8gLyoqXG4vLyAgKiDmt7vliqDooqvmi7zmjqXkuLpodG1s55qE6Z2Z5oCB5a2X56ym5LiyXG4vLyAgKlxuLy8gICogQHBhcmFtIHtzdHJpbmd9IHN0ciDooqvmi7zmjqXnmoTlrZfnrKbkuLJcbi8vICAqL1xuLy8gQ29tcGlsZVNvdXJjZUJ1ZmZlci5wcm90b3R5cGUuam9pblN0cmluZyA9IGZ1bmN0aW9uIChzdHIpIHtcbi8vICAgICB0aGlzLnNlZ3MucHVzaCh7XG4vLyAgICAgICAgIHN0cjogc3RyLFxuLy8gICAgICAgICB0eXBlOiAnSk9JTl9TVFJJTkcnXG4vLyAgICAgfSk7XG4vLyB9O1xuLy8gXG4vLyAvKipcbi8vICAqIOa3u+WKoOiiq+aLvOaOpeS4umh0bWznmoTmlbDmja7orr/pl65cbi8vICAqXG4vLyAgKiBAcGFyYW0ge09iamVjdD99IGFjY2Vzc29yIOaVsOaNruiuv+mXruihqOi+vuW8j+WvueixoVxuLy8gICovXG4vLyBDb21waWxlU291cmNlQnVmZmVyLnByb3RvdHlwZS5qb2luRGF0YVN0cmluZ2lmeSA9IGZ1bmN0aW9uICgpIHtcbi8vICAgICB0aGlzLnNlZ3MucHVzaCh7XG4vLyAgICAgICAgIHR5cGU6ICdKT0lOX0RBVEFfU1RSSU5HSUZZJ1xuLy8gICAgIH0pO1xuLy8gfTtcbi8vIFxuLy8gLyoqXG4vLyAgKiDmt7vliqDooqvmi7zmjqXkuLpodG1s55qE6KGo6L6+5byPXG4vLyAgKlxuLy8gICogQHBhcmFtIHtPYmplY3R9IGV4cHIg6KGo6L6+5byP5a+56LGhXG4vLyAgKi9cbi8vIENvbXBpbGVTb3VyY2VCdWZmZXIucHJvdG90eXBlLmpvaW5FeHByID0gZnVuY3Rpb24gKGV4cHIpIHtcbi8vICAgICB0aGlzLnNlZ3MucHVzaCh7XG4vLyAgICAgICAgIGV4cHI6IGV4cHIsXG4vLyAgICAgICAgIHR5cGU6ICdKT0lOX0VYUFInXG4vLyAgICAgfSk7XG4vLyB9O1xuLy8gXG4vLyAvKipcbi8vICAqIOeUn+aIkOe8luivkeWQjuS7o+eggVxuLy8gICpcbi8vICAqIEByZXR1cm4ge3N0cmluZ31cbi8vICAqL1xuLy8gQ29tcGlsZVNvdXJjZUJ1ZmZlci5wcm90b3R5cGUudG9Db2RlID0gZnVuY3Rpb24gKCkge1xuLy8gICAgIHZhciBjb2RlID0gW107XG4vLyAgICAgdmFyIHRlbXAgPSAnJztcbi8vIFxuLy8gICAgIGZ1bmN0aW9uIGdlblN0ckxpdGVyYWwoKSB7XG4vLyAgICAgICAgIGlmICh0ZW1wKSB7XG4vLyAgICAgICAgICAgICBjb2RlLnB1c2goJ2h0bWwgKz0gJyArIGNvbXBpbGVFeHByU291cmNlLnN0cmluZ0xpdGVyYWxpemUodGVtcCkgKyAnOycpO1xuLy8gICAgICAgICB9XG4vLyBcbi8vICAgICAgICAgdGVtcCA9ICcnO1xuLy8gICAgIH1cbi8vIFxuLy8gICAgIGVhY2godGhpcy5zZWdzLCBmdW5jdGlvbiAoc2VnKSB7XG4vLyAgICAgICAgIGlmIChzZWcudHlwZSA9PT0gJ0pPSU5fU1RSSU5HJykge1xuLy8gICAgICAgICAgICAgdGVtcCArPSBzZWcuc3RyO1xuLy8gICAgICAgICAgICAgcmV0dXJuO1xuLy8gICAgICAgICB9XG4vLyBcbi8vICAgICAgICAgZ2VuU3RyTGl0ZXJhbCgpO1xuLy8gICAgICAgICBzd2l0Y2ggKHNlZy50eXBlKSB7XG4vLyAgICAgICAgICAgICBjYXNlICdKT0lOX0RBVEFfU1RSSU5HSUZZJzpcbi8vICAgICAgICAgICAgICAgICBjb2RlLnB1c2goJ2h0bWwgKz0gc3RyaW5naWZpZXIuYW55KCcgKyBjb21waWxlRXhwclNvdXJjZS5kYXRhQWNjZXNzKCkgKyAnKTsnKTtcbi8vICAgICAgICAgICAgICAgICBicmVhaztcbi8vIFxuLy8gICAgICAgICAgICAgY2FzZSAnSk9JTl9FWFBSJzpcbi8vICAgICAgICAgICAgICAgICBjb2RlLnB1c2goJ2h0bWwgKz0gJyArIGNvbXBpbGVFeHByU291cmNlLmV4cHIoc2VnLmV4cHIpICsgJzsnKTtcbi8vICAgICAgICAgICAgICAgICBicmVhaztcbi8vIFxuLy8gICAgICAgICAgICAgY2FzZSAnSk9JTl9SQVcnOlxuLy8gICAgICAgICAgICAgICAgIGNvZGUucHVzaCgnaHRtbCArPSAnICsgc2VnLmNvZGUgKyAnOycpO1xuLy8gICAgICAgICAgICAgICAgIGJyZWFrO1xuLy8gXG4vLyAgICAgICAgICAgICBjYXNlICdSQVcnOlxuLy8gICAgICAgICAgICAgICAgIGNvZGUucHVzaChzZWcuY29kZSk7XG4vLyAgICAgICAgICAgICAgICAgYnJlYWs7XG4vLyBcbi8vICAgICAgICAgfVxuLy8gICAgIH0pO1xuLy8gXG4vLyAgICAgZ2VuU3RyTGl0ZXJhbCgpO1xuLy8gXG4vLyAgICAgcmV0dXJuIGNvZGUuam9pbignXFxuJyk7XG4vLyB9O1xuLy8gXG4vLyAjW2VuZF1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gQ29tcGlsZVNvdXJjZUJ1ZmZlcjtcblxuXG4vKipcbiAqIEBmaWxlIOWwhue7hOS7tue8luivkeaIkCByZW5kZXIg5pa55rOV55qEIGpzIOa6kOeggVxuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuXG4vLyB2YXIgZWFjaCA9IHJlcXVpcmUoJy4uL3V0aWwvZWFjaCcpO1xuLy8gdmFyIGd1aWQgPSByZXF1aXJlKCcuLi91dGlsL2d1aWQnKTtcbi8vIHZhciBwYXJzZUV4cHIgPSByZXF1aXJlKCcuLi9wYXJzZXIvcGFyc2UtZXhwcicpO1xuLy8gdmFyIGNyZWF0ZUFOb2RlID0gcmVxdWlyZSgnLi4vcGFyc2VyL2NyZWF0ZS1hLW5vZGUnKTtcbi8vIHZhciBjbG9uZURpcmVjdGl2ZXMgPSByZXF1aXJlKCcuLi9wYXJzZXIvY2xvbmUtZGlyZWN0aXZlcycpO1xuLy8gdmFyIGF1dG9DbG9zZVRhZ3MgPSByZXF1aXJlKCcuLi9icm93c2VyL2F1dG8tY2xvc2UtdGFncycpO1xuLy8gdmFyIENvbXBpbGVTb3VyY2VCdWZmZXIgPSByZXF1aXJlKCcuL2NvbXBpbGUtc291cmNlLWJ1ZmZlcicpO1xuLy8gdmFyIGNvbXBpbGVFeHByU291cmNlID0gcmVxdWlyZSgnLi9jb21waWxlLWV4cHItc291cmNlJyk7XG4vLyB2YXIgcmluc2VDb25kQU5vZGUgPSByZXF1aXJlKCcuL3JpbnNlLWNvbmQtYW5vZGUnKTtcbi8vIHZhciBnZXRBTm9kZVByb3AgPSByZXF1aXJlKCcuL2dldC1hLW5vZGUtcHJvcCcpO1xuXG4vLyAjW2JlZ2luXSBzc3Jcbi8vIFxuLy8gLyoqXG4vLyAgKiDnlJ/miJDluo/liJfljJbml7botbflp4vmoannmoRodG1sXG4vLyAgKlxuLy8gICogQHBhcmFtIHtzdHJpbmd9IHR5cGUg5qGp57G75Z6L5qCH6K+GXG4vLyAgKiBAcGFyYW0ge3N0cmluZz99IGNvbnRlbnQg5qGp5YaF55qE5YaF5a65XG4vLyAgKiBAcmV0dXJuIHtzdHJpbmd9XG4vLyAgKi9cbi8vIGZ1bmN0aW9uIHNlcmlhbGl6ZVN0dW1wKHR5cGUsIGNvbnRlbnQpIHtcbi8vICAgICByZXR1cm4gJzwhLS1zLScgKyB0eXBlICsgKGNvbnRlbnQgPyAnOicgKyBjb250ZW50IDogJycpICsgJy0tPic7XG4vLyB9XG4vLyBcbi8vIC8qKlxuLy8gICog55Sf5oiQ5bqP5YiX5YyW5pe257uT5p2f5qGp55qEaHRtbFxuLy8gICpcbi8vICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIOahqeexu+Wei+agh+ivhlxuLy8gICogQHJldHVybiB7c3RyaW5nfVxuLy8gICovXG4vLyBmdW5jdGlvbiBzZXJpYWxpemVTdHVtcEVuZCh0eXBlKSB7XG4vLyAgICAgcmV0dXJuICc8IS0tL3MtJyArIHR5cGUgKyAnLS0+Jztcbi8vIH1cbi8vIFxuLy8gLyoqXG4vLyAgKiBlbGVtZW50IOeahOe8luivkeaWueazlembhuWQiOWvueixoVxuLy8gICpcbi8vICAqIEBpbm5lclxuLy8gICovXG4vLyB2YXIgZWxlbWVudFNvdXJjZUNvbXBpbGVyID0ge1xuLy8gXG4vLyAgICAgLyogZXNsaW50LWRpc2FibGUgbWF4LXBhcmFtcyAqL1xuLy8gICAgIC8qKlxuLy8gICAgICAqIOe8luivkeWFg+e0oOagh+etvuWktFxuLy8gICAgICAqXG4vLyAgICAgICogQHBhcmFtIHtDb21waWxlU291cmNlQnVmZmVyfSBzb3VyY2VCdWZmZXIg57yW6K+R5rqQ56CB55qE5Lit6Ze0YnVmZmVyXG4vLyAgICAgICogQHBhcmFtIHtzdHJpbmd9IHRhZ05hbWUg5qCH562+5ZCNXG4vLyAgICAgICogQHBhcmFtIHtBcnJheX0gcHJvcHMg5bGe5oCn5YiX6KGoXG4vLyAgICAgICogQHBhcmFtIHtzdHJpbmc/fSBleHRyYVByb3Ag6aKd5aSW55qE5bGe5oCn5LiyXG4vLyAgICAgICogQHBhcmFtIHtib29sZWFuP30gaXNDbG9zZSDmmK/lkKbpl63lkIhcbi8vICAgICAgKi9cbi8vICAgICB0YWdTdGFydDogZnVuY3Rpb24gKHNvdXJjZUJ1ZmZlciwgdGFnTmFtZSwgcHJvcHMsIGV4dHJhUHJvcCwgaXNDbG9zZSkge1xuLy8gICAgICAgICBzb3VyY2VCdWZmZXIuam9pblN0cmluZygnPCcgKyB0YWdOYW1lKTtcbi8vICAgICAgICAgc291cmNlQnVmZmVyLmpvaW5TdHJpbmcoZXh0cmFQcm9wIHx8ICcnKTtcbi8vIFxuLy8gICAgICAgICAvLyBpbmRleCBsaXN0XG4vLyAgICAgICAgIHZhciBwcm9wc0luZGV4ID0ge307XG4vLyAgICAgICAgIGVhY2gocHJvcHMsIGZ1bmN0aW9uIChwcm9wKSB7XG4vLyAgICAgICAgICAgICBwcm9wc0luZGV4W3Byb3AubmFtZV0gPSBwcm9wO1xuLy8gICAgICAgICB9KTtcbi8vIFxuLy8gICAgICAgICBlYWNoKHByb3BzLCBmdW5jdGlvbiAocHJvcCkge1xuLy8gICAgICAgICAgICAgaWYgKHByb3AubmFtZSA9PT0gJ3Nsb3QnKSB7XG4vLyAgICAgICAgICAgICAgICAgcmV0dXJuO1xuLy8gICAgICAgICAgICAgfVxuLy8gXG4vLyAgICAgICAgICAgICBpZiAocHJvcC5uYW1lID09PSAndmFsdWUnKSB7XG4vLyAgICAgICAgICAgICAgICAgc3dpdGNoICh0YWdOYW1lKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3RleHRhcmVhJzpcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbi8vIFxuLy8gICAgICAgICAgICAgICAgICAgICBjYXNlICdzZWxlY3QnOlxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlQnVmZmVyLmFkZFJhdygnJHNlbGVjdFZhbHVlID0gJ1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgY29tcGlsZUV4cHJTb3VyY2UuZXhwcihwcm9wLmV4cHIpXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyAnIHx8IFwiXCI7J1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbi8vIFxuLy8gICAgICAgICAgICAgICAgICAgICBjYXNlICdvcHRpb24nOlxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlQnVmZmVyLmFkZFJhdygnJG9wdGlvblZhbHVlID0gJ1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgY29tcGlsZUV4cHJTb3VyY2UuZXhwcihwcm9wLmV4cHIpXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyAnOydcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAvLyB2YWx1ZVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlQnVmZmVyLmFkZFJhdygnaWYgKCRvcHRpb25WYWx1ZSAhPSBudWxsKSB7Jyk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VCdWZmZXIuam9pblJhdygnXCIgdmFsdWU9XFxcXFwiXCIgKyAkb3B0aW9uVmFsdWUgKyBcIlxcXFxcIlwiJyk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VCdWZmZXIuYWRkUmF3KCd9Jyk7XG4vLyBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNlbGVjdGVkXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VCdWZmZXIuYWRkUmF3KCdpZiAoJG9wdGlvblZhbHVlID09PSAkc2VsZWN0VmFsdWUpIHsnKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZUJ1ZmZlci5qb2luU3RyaW5nKCcgc2VsZWN0ZWQnKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZUJ1ZmZlci5hZGRSYXcoJ30nKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbi8vICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICB9XG4vLyBcbi8vICAgICAgICAgICAgIHN3aXRjaCAocHJvcC5uYW1lKSB7XG4vLyAgICAgICAgICAgICAgICAgY2FzZSAncmVhZG9ubHknOlxuLy8gICAgICAgICAgICAgICAgIGNhc2UgJ2Rpc2FibGVkJzpcbi8vICAgICAgICAgICAgICAgICBjYXNlICdtdWx0aXBsZSc6XG4vLyAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wLnJhdyA9PT0gJycpIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZUJ1ZmZlci5qb2luU3RyaW5nKCcgJyArIHByb3AubmFtZSk7XG4vLyAgICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VCdWZmZXIuam9pblJhdygnYm9vbEF0dHJGaWx0ZXIoXCInICsgcHJvcC5uYW1lICsgJ1wiLCAnXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyBjb21waWxlRXhwclNvdXJjZS5leHByKHByb3AuZXhwcilcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICArICcpJ1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgKTtcbi8vICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgICAgICBicmVhaztcbi8vIFxuLy8gICAgICAgICAgICAgICAgIGNhc2UgJ2NoZWNrZWQnOlxuLy8gICAgICAgICAgICAgICAgICAgICBpZiAodGFnTmFtZSA9PT0gJ2lucHV0Jykge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlUHJvcCA9IHByb3BzSW5kZXgudmFsdWU7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWVDb2RlID0gY29tcGlsZUV4cHJTb3VyY2UuZXhwcih2YWx1ZVByb3AuZXhwcik7XG4vLyBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZVByb3ApIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHByb3BzSW5kZXgudHlwZS5yYXcpIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnY2hlY2tib3gnOlxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlQnVmZmVyLmFkZFJhdygnaWYgKGNvbnRhaW5zKCdcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIGNvbXBpbGVFeHByU291cmNlLmV4cHIocHJvcC5leHByKVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgJywgJ1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgdmFsdWVDb2RlXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyAnKSkgeydcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VCdWZmZXIuam9pblN0cmluZygnIGNoZWNrZWQnKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZUJ1ZmZlci5hZGRSYXcoJ30nKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuLy8gXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3JhZGlvJzpcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZUJ1ZmZlci5hZGRSYXcoJ2lmICgnXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyBjb21waWxlRXhwclNvdXJjZS5leHByKHByb3AuZXhwcilcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArICcgPT09ICdcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIHZhbHVlQ29kZVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgJykgeydcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VCdWZmZXIuam9pblN0cmluZygnIGNoZWNrZWQnKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZUJ1ZmZlci5hZGRSYXcoJ30nKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgICAgICBicmVhaztcbi8vIFxuLy8gICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4vLyAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wLmF0dHIpIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZUJ1ZmZlci5qb2luU3RyaW5nKCcgJyArIHByb3AuYXR0cik7XG4vLyAgICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VCdWZmZXIuam9pblJhdygnYXR0ckZpbHRlcihcIicgKyBwcm9wLm5hbWUgKyAnXCIsICdcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIChwcm9wLnggPyAnZXNjYXBlSFRNTCgnIDogJycpXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyBjb21waWxlRXhwclNvdXJjZS5leHByKHByb3AuZXhwcilcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIChwcm9wLnggPyAnKScgOiAnJylcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICArICcpJ1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgKTtcbi8vICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgICAgICBicmVhaztcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgfSk7XG4vLyBcbi8vICAgICAgICAgc291cmNlQnVmZmVyLmpvaW5TdHJpbmcoaXNDbG9zZSA/ICcvPicgOiAnPicpO1xuLy8gICAgIH0sXG4vLyAgICAgLyogZXNsaW50LWVuYWJsZSBtYXgtcGFyYW1zICovXG4vLyBcbi8vICAgICAvKipcbi8vICAgICAgKiDnvJbor5HlhYPntKDpl63lkIhcbi8vICAgICAgKlxuLy8gICAgICAqIEBwYXJhbSB7Q29tcGlsZVNvdXJjZUJ1ZmZlcn0gc291cmNlQnVmZmVyIOe8luivkea6kOeggeeahOS4remXtGJ1ZmZlclxuLy8gICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0YWdOYW1lIOagh+etvuWQjVxuLy8gICAgICAqL1xuLy8gICAgIHRhZ0VuZDogZnVuY3Rpb24gKHNvdXJjZUJ1ZmZlciwgdGFnTmFtZSkge1xuLy8gICAgICAgICBpZiAoIWF1dG9DbG9zZVRhZ3NbdGFnTmFtZV0pIHtcbi8vICAgICAgICAgICAgIHNvdXJjZUJ1ZmZlci5qb2luU3RyaW5nKCc8LycgKyB0YWdOYW1lICsgJz4nKTtcbi8vICAgICAgICAgfVxuLy8gXG4vLyAgICAgICAgIGlmICh0YWdOYW1lID09PSAnc2VsZWN0Jykge1xuLy8gICAgICAgICAgICAgc291cmNlQnVmZmVyLmFkZFJhdygnJHNlbGVjdFZhbHVlID0gbnVsbDsnKTtcbi8vICAgICAgICAgfVxuLy8gXG4vLyAgICAgICAgIGlmICh0YWdOYW1lID09PSAnb3B0aW9uJykge1xuLy8gICAgICAgICAgICAgc291cmNlQnVmZmVyLmFkZFJhdygnJG9wdGlvblZhbHVlID0gbnVsbDsnKTtcbi8vICAgICAgICAgfVxuLy8gICAgIH0sXG4vLyBcbi8vICAgICAvKipcbi8vICAgICAgKiDnvJbor5HlhYPntKDlhoXlrrlcbi8vICAgICAgKlxuLy8gICAgICAqIEBwYXJhbSB7Q29tcGlsZVNvdXJjZUJ1ZmZlcn0gc291cmNlQnVmZmVyIOe8luivkea6kOeggeeahOS4remXtGJ1ZmZlclxuLy8gICAgICAqIEBwYXJhbSB7QU5vZGV9IGFOb2RlIOWFg+e0oOeahOaKveixoeiKgueCueS/oeaBr1xuLy8gICAgICAqIEBwYXJhbSB7Q29tcG9uZW50fSBvd25lciDmiYDlsZ7nu4Tku7blrp7kvovnjq/looNcbi8vICAgICAgKi9cbi8vICAgICBpbm5lcjogZnVuY3Rpb24gKHNvdXJjZUJ1ZmZlciwgYU5vZGUsIG93bmVyKSB7XG4vLyAgICAgICAgIC8vIGlubmVyIGNvbnRlbnRcbi8vICAgICAgICAgaWYgKGFOb2RlLnRhZ05hbWUgPT09ICd0ZXh0YXJlYScpIHtcbi8vICAgICAgICAgICAgIHZhciB2YWx1ZVByb3AgPSBnZXRBTm9kZVByb3AoYU5vZGUsICd2YWx1ZScpO1xuLy8gICAgICAgICAgICAgaWYgKHZhbHVlUHJvcCkge1xuLy8gICAgICAgICAgICAgICAgIHNvdXJjZUJ1ZmZlci5qb2luUmF3KCdlc2NhcGVIVE1MKCdcbi8vICAgICAgICAgICAgICAgICAgICAgKyBjb21waWxlRXhwclNvdXJjZS5leHByKHZhbHVlUHJvcC5leHByKVxuLy8gICAgICAgICAgICAgICAgICAgICArICcpJ1xuLy8gICAgICAgICAgICAgICAgICk7XG4vLyAgICAgICAgICAgICB9XG4vLyBcbi8vICAgICAgICAgICAgIHJldHVybjtcbi8vICAgICAgICAgfVxuLy8gXG4vLyAgICAgICAgIHZhciBodG1sRGlyZWN0aXZlID0gYU5vZGUuZGlyZWN0aXZlcy5odG1sO1xuLy8gICAgICAgICBpZiAoaHRtbERpcmVjdGl2ZSkge1xuLy8gICAgICAgICAgICAgc291cmNlQnVmZmVyLmpvaW5FeHByKGh0bWxEaXJlY3RpdmUudmFsdWUpO1xuLy8gICAgICAgICB9XG4vLyAgICAgICAgIGVsc2Uge1xuLy8gICAgICAgICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cbi8vICAgICAgICAgICAgIGVhY2goYU5vZGUuY2hpbGRyZW4sIGZ1bmN0aW9uIChhTm9kZUNoaWxkKSB7XG4vLyAgICAgICAgICAgICAgICAgc291cmNlQnVmZmVyLmFkZFJhdyhhTm9kZUNvbXBpbGVyLmNvbXBpbGUoYU5vZGVDaGlsZCwgc291cmNlQnVmZmVyLCBvd25lcikpO1xuLy8gICAgICAgICAgICAgfSk7XG4vLyAgICAgICAgICAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLXVzZS1iZWZvcmUtZGVmaW5lICovXG4vLyAgICAgICAgIH1cbi8vICAgICB9XG4vLyB9O1xuLy8gXG4vLyAvKipcbi8vICAqIEFOb2RlIOeahOe8luivkeaWueazlembhuWQiOWvueixoVxuLy8gICpcbi8vICAqIEBpbm5lclxuLy8gICovXG4vLyB2YXIgYU5vZGVDb21waWxlciA9IHtcbi8vIFxuLy8gICAgIC8qKlxuLy8gICAgICAqIOe8luivkeiKgueCuVxuLy8gICAgICAqXG4vLyAgICAgICogQHBhcmFtIHtBTm9kZX0gYU5vZGUg5oq96LGh6IqC54K5XG4vLyAgICAgICogQHBhcmFtIHtDb21waWxlU291cmNlQnVmZmVyfSBzb3VyY2VCdWZmZXIg57yW6K+R5rqQ56CB55qE5Lit6Ze0YnVmZmVyXG4vLyAgICAgICogQHBhcmFtIHtDb21wb25lbnR9IG93bmVyIOaJgOWxnue7hOS7tuWunuS+i+eOr+Wig1xuLy8gICAgICAqIEBwYXJhbSB7T2JqZWN0fSBleHRyYSDnvJbor5HmiYDpnIDnmoTkuIDkupvpop3lpJbkv6Hmga9cbi8vICAgICAgKi9cbi8vICAgICBjb21waWxlOiBmdW5jdGlvbiAoYU5vZGUsIHNvdXJjZUJ1ZmZlciwgb3duZXIsIGV4dHJhKSB7XG4vLyAgICAgICAgIGV4dHJhID0gZXh0cmEgfHwge307XG4vLyAgICAgICAgIHZhciBjb21waWxlTWV0aG9kID0gJ2NvbXBpbGVFbGVtZW50Jztcbi8vIFxuLy8gICAgICAgICBpZiAoYU5vZGUudGV4dEV4cHIpIHtcbi8vICAgICAgICAgICAgIGNvbXBpbGVNZXRob2QgPSAnY29tcGlsZVRleHQnO1xuLy8gICAgICAgICB9XG4vLyAgICAgICAgIGVsc2UgaWYgKGFOb2RlLmRpcmVjdGl2ZXNbJ2lmJ10pIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBkb3Qtbm90YXRpb25cbi8vICAgICAgICAgICAgIGNvbXBpbGVNZXRob2QgPSAnY29tcGlsZUlmJztcbi8vICAgICAgICAgfVxuLy8gICAgICAgICBlbHNlIGlmIChhTm9kZS5kaXJlY3RpdmVzWydmb3InXSkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGRvdC1ub3RhdGlvblxuLy8gICAgICAgICAgICAgY29tcGlsZU1ldGhvZCA9ICdjb21waWxlRm9yJztcbi8vICAgICAgICAgfVxuLy8gICAgICAgICBlbHNlIGlmIChhTm9kZS50YWdOYW1lID09PSAnc2xvdCcpIHtcbi8vICAgICAgICAgICAgIGNvbXBpbGVNZXRob2QgPSAnY29tcGlsZVNsb3QnO1xuLy8gICAgICAgICB9XG4vLyAgICAgICAgIGVsc2UgaWYgKGFOb2RlLnRhZ05hbWUgPT09ICd0ZW1wbGF0ZScpIHtcbi8vICAgICAgICAgICAgIGNvbXBpbGVNZXRob2QgPSAnY29tcGlsZVRlbXBsYXRlJztcbi8vICAgICAgICAgfVxuLy8gICAgICAgICBlbHNlIHtcbi8vICAgICAgICAgICAgIHZhciBDb21wb25lbnRUeXBlID0gb3duZXIuZ2V0Q29tcG9uZW50VHlwZShhTm9kZSk7XG4vLyAgICAgICAgICAgICBpZiAoQ29tcG9uZW50VHlwZSkge1xuLy8gICAgICAgICAgICAgICAgIGNvbXBpbGVNZXRob2QgPSAnY29tcGlsZUNvbXBvbmVudCc7XG4vLyAgICAgICAgICAgICAgICAgZXh0cmEuQ29tcG9uZW50Q2xhc3MgPSBDb21wb25lbnRUeXBlO1xuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICB9XG4vLyBcbi8vICAgICAgICAgYU5vZGVDb21waWxlcltjb21waWxlTWV0aG9kXShhTm9kZSwgc291cmNlQnVmZmVyLCBvd25lciwgZXh0cmEpO1xuLy8gICAgIH0sXG4vLyBcbi8vICAgICAvKipcbi8vICAgICAgKiDnvJbor5HmlofmnKzoioLngrlcbi8vICAgICAgKlxuLy8gICAgICAqIEBwYXJhbSB7QU5vZGV9IGFOb2RlIOiKgueCueWvueixoVxuLy8gICAgICAqIEBwYXJhbSB7Q29tcGlsZVNvdXJjZUJ1ZmZlcn0gc291cmNlQnVmZmVyIOe8luivkea6kOeggeeahOS4remXtGJ1ZmZlclxuLy8gICAgICAqL1xuLy8gICAgIGNvbXBpbGVUZXh0OiBmdW5jdGlvbiAoYU5vZGUsIHNvdXJjZUJ1ZmZlcikge1xuLy8gICAgICAgICBpZiAoYU5vZGUudGV4dEV4cHIub3JpZ2luYWwpIHtcbi8vICAgICAgICAgICAgIHNvdXJjZUJ1ZmZlci5qb2luU3RyaW5nKHNlcmlhbGl6ZVN0dW1wKCd0ZXh0JykpO1xuLy8gICAgICAgICB9XG4vLyBcbi8vICAgICAgICAgdmFyIHZhbHVlID0gYU5vZGUudGV4dEV4cHIudmFsdWU7XG4vLyAgICAgICAgIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4vLyAgICAgICAgICAgICBzb3VyY2VCdWZmZXIuam9pbkV4cHIoYU5vZGUudGV4dEV4cHIpO1xuLy8gICAgICAgICB9XG4vLyAgICAgICAgIGVsc2Uge1xuLy8gICAgICAgICAgICAgc291cmNlQnVmZmVyLmpvaW5TdHJpbmcodmFsdWUpO1xuLy8gICAgICAgICB9XG4vLyBcbi8vICAgICAgICAgaWYgKGFOb2RlLnRleHRFeHByLm9yaWdpbmFsKSB7XG4vLyAgICAgICAgICAgICBzb3VyY2VCdWZmZXIuam9pblN0cmluZyhzZXJpYWxpemVTdHVtcEVuZCgndGV4dCcpKTtcbi8vICAgICAgICAgfVxuLy8gICAgIH0sXG4vLyBcbi8vICAgICAvKipcbi8vICAgICAgKiDnvJbor5F0ZW1wbGF0ZeiKgueCuVxuLy8gICAgICAqXG4vLyAgICAgICogQHBhcmFtIHtBTm9kZX0gYU5vZGUg6IqC54K55a+56LGhXG4vLyAgICAgICogQHBhcmFtIHtDb21waWxlU291cmNlQnVmZmVyfSBzb3VyY2VCdWZmZXIg57yW6K+R5rqQ56CB55qE5Lit6Ze0YnVmZmVyXG4vLyAgICAgICogQHBhcmFtIHtDb21wb25lbnR9IG93bmVyIOaJgOWxnue7hOS7tuWunuS+i+eOr+Wig1xuLy8gICAgICAqL1xuLy8gICAgIGNvbXBpbGVUZW1wbGF0ZTogZnVuY3Rpb24gKGFOb2RlLCBzb3VyY2VCdWZmZXIsIG93bmVyKSB7XG4vLyAgICAgICAgIGVsZW1lbnRTb3VyY2VDb21waWxlci5pbm5lcihzb3VyY2VCdWZmZXIsIGFOb2RlLCBvd25lcik7XG4vLyAgICAgfSxcbi8vIFxuLy8gICAgIC8qKlxuLy8gICAgICAqIOe8luivkSBpZiDoioLngrlcbi8vICAgICAgKlxuLy8gICAgICAqIEBwYXJhbSB7QU5vZGV9IGFOb2RlIOiKgueCueWvueixoVxuLy8gICAgICAqIEBwYXJhbSB7Q29tcGlsZVNvdXJjZUJ1ZmZlcn0gc291cmNlQnVmZmVyIOe8luivkea6kOeggeeahOS4remXtGJ1ZmZlclxuLy8gICAgICAqIEBwYXJhbSB7Q29tcG9uZW50fSBvd25lciDmiYDlsZ7nu4Tku7blrp7kvovnjq/looNcbi8vICAgICAgKi9cbi8vICAgICBjb21waWxlSWY6IGZ1bmN0aW9uIChhTm9kZSwgc291cmNlQnVmZmVyLCBvd25lcikge1xuLy8gICAgICAgICBzb3VyY2VCdWZmZXIuYWRkUmF3KCcoZnVuY3Rpb24gKCkgeycpO1xuLy8gXG4vLyAgICAgICAgIHNvdXJjZUJ1ZmZlci5hZGRSYXcoJ3ZhciBpZkluZGV4ID0gbnVsbDsnKTtcbi8vIFxuLy8gICAgICAgICAvLyBvdXRwdXQgbWFpbiBpZlxuLy8gICAgICAgICB2YXIgaWZEaXJlY3RpdmUgPSBhTm9kZS5kaXJlY3RpdmVzWydpZiddOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGRvdC1ub3RhdGlvblxuLy8gICAgICAgICBzb3VyY2VCdWZmZXIuYWRkUmF3KCdpZiAoJyArIGNvbXBpbGVFeHByU291cmNlLmV4cHIoaWZEaXJlY3RpdmUudmFsdWUpICsgJykgeycpO1xuLy8gICAgICAgICBzb3VyY2VCdWZmZXIuYWRkUmF3KFxuLy8gICAgICAgICAgICAgYU5vZGVDb21waWxlci5jb21waWxlKFxuLy8gICAgICAgICAgICAgICAgIHJpbnNlQ29uZEFOb2RlKGFOb2RlKSxcbi8vICAgICAgICAgICAgICAgICBzb3VyY2VCdWZmZXIsXG4vLyAgICAgICAgICAgICAgICAgb3duZXJcbi8vICAgICAgICAgICAgIClcbi8vICAgICAgICAgKTtcbi8vICAgICAgICAgc291cmNlQnVmZmVyLmFkZFJhdygnfScpO1xuLy8gXG4vLyAgICAgICAgIC8vIG91dHB1dCBlbGlmIGFuZCBlbHNlXG4vLyAgICAgICAgIGVhY2goYU5vZGUuZWxzZXMsIGZ1bmN0aW9uIChlbHNlQU5vZGUsIGluZGV4KSB7XG4vLyAgICAgICAgICAgICB2YXIgZWxpZkRpcmVjdGl2ZSA9IGVsc2VBTm9kZS5kaXJlY3RpdmVzLmVsaWY7XG4vLyAgICAgICAgICAgICBpZiAoZWxpZkRpcmVjdGl2ZSkge1xuLy8gICAgICAgICAgICAgICAgIHNvdXJjZUJ1ZmZlci5hZGRSYXcoJ2Vsc2UgaWYgKCcgKyBjb21waWxlRXhwclNvdXJjZS5leHByKGVsaWZEaXJlY3RpdmUudmFsdWUpICsgJykgeycpO1xuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgZWxzZSB7XG4vLyAgICAgICAgICAgICAgICAgc291cmNlQnVmZmVyLmFkZFJhdygnZWxzZSB7Jyk7XG4vLyAgICAgICAgICAgICB9XG4vLyBcbi8vICAgICAgICAgICAgIHNvdXJjZUJ1ZmZlci5hZGRSYXcoXG4vLyAgICAgICAgICAgICAgICAgYU5vZGVDb21waWxlci5jb21waWxlKFxuLy8gICAgICAgICAgICAgICAgICAgICByaW5zZUNvbmRBTm9kZShlbHNlQU5vZGUpLFxuLy8gICAgICAgICAgICAgICAgICAgICBzb3VyY2VCdWZmZXIsXG4vLyAgICAgICAgICAgICAgICAgICAgIG93bmVyXG4vLyAgICAgICAgICAgICAgICAgKVxuLy8gICAgICAgICAgICAgKTtcbi8vICAgICAgICAgICAgIHNvdXJjZUJ1ZmZlci5hZGRSYXcoJ30nKTtcbi8vICAgICAgICAgfSk7XG4vLyBcbi8vICAgICAgICAgc291cmNlQnVmZmVyLmFkZFJhdygnfSkoKTsnKTtcbi8vICAgICB9LFxuLy8gXG4vLyAgICAgLyoqXG4vLyAgICAgICog57yW6K+RIGZvciDoioLngrlcbi8vICAgICAgKlxuLy8gICAgICAqIEBwYXJhbSB7QU5vZGV9IGFOb2RlIOiKgueCueWvueixoVxuLy8gICAgICAqIEBwYXJhbSB7Q29tcGlsZVNvdXJjZUJ1ZmZlcn0gc291cmNlQnVmZmVyIOe8luivkea6kOeggeeahOS4remXtGJ1ZmZlclxuLy8gICAgICAqIEBwYXJhbSB7Q29tcG9uZW50fSBvd25lciDmiYDlsZ7nu4Tku7blrp7kvovnjq/looNcbi8vICAgICAgKi9cbi8vICAgICBjb21waWxlRm9yOiBmdW5jdGlvbiAoYU5vZGUsIHNvdXJjZUJ1ZmZlciwgb3duZXIpIHtcbi8vICAgICAgICAgdmFyIGZvckVsZW1lbnRBTm9kZSA9IGNyZWF0ZUFOb2RlKHtcbi8vICAgICAgICAgICAgIGNoaWxkcmVuOiBhTm9kZS5jaGlsZHJlbixcbi8vICAgICAgICAgICAgIHByb3BzOiBhTm9kZS5wcm9wcyxcbi8vICAgICAgICAgICAgIGV2ZW50czogYU5vZGUuZXZlbnRzLFxuLy8gICAgICAgICAgICAgdGFnTmFtZTogYU5vZGUudGFnTmFtZSxcbi8vICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IGNsb25lRGlyZWN0aXZlcyhhTm9kZS5kaXJlY3RpdmVzLCB7XG4vLyAgICAgICAgICAgICAgICAgJ2Zvcic6IDFcbi8vICAgICAgICAgICAgIH0pLFxuLy8gICAgICAgICAgICAgaG90c3BvdDogYU5vZGUuaG90c3BvdFxuLy8gICAgICAgICB9KTtcbi8vIFxuLy8gICAgICAgICB2YXIgZm9yRGlyZWN0aXZlID0gYU5vZGUuZGlyZWN0aXZlc1snZm9yJ107IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZG90LW5vdGF0aW9uXG4vLyAgICAgICAgIHZhciBpdGVtTmFtZSA9IGZvckRpcmVjdGl2ZS5pdGVtLnJhdztcbi8vICAgICAgICAgdmFyIGluZGV4TmFtZSA9IGZvckRpcmVjdGl2ZS5pbmRleC5yYXc7XG4vLyAgICAgICAgIHZhciBsaXN0TmFtZSA9IGNvbXBpbGVFeHByU291cmNlLmRhdGFBY2Nlc3MoZm9yRGlyZWN0aXZlLnZhbHVlKTtcbi8vIFxuLy8gICAgICAgICBpZiAoaW5kZXhOYW1lID09PSAnJGluZGV4Jykge1xuLy8gICAgICAgICAgICAgaW5kZXhOYW1lID0gZ3VpZCgpO1xuLy8gICAgICAgICB9XG4vLyBcbi8vICAgICAgICAgc291cmNlQnVmZmVyLmFkZFJhdygnZm9yICgnXG4vLyAgICAgICAgICAgICArICd2YXIgJyArIGluZGV4TmFtZSArICcgPSAwOyAnXG4vLyAgICAgICAgICAgICArIGluZGV4TmFtZSArICcgPCAnICsgbGlzdE5hbWUgKyAnLmxlbmd0aDsgJ1xuLy8gICAgICAgICAgICAgKyBpbmRleE5hbWUgKyAnKyspIHsnXG4vLyAgICAgICAgICk7XG4vLyAgICAgICAgIHNvdXJjZUJ1ZmZlci5hZGRSYXcoJ2NvbXBvbmVudEN0eC5kYXRhLicgKyBpbmRleE5hbWUgKyAnPScgKyBpbmRleE5hbWUgKyAnOycpO1xuLy8gICAgICAgICBzb3VyY2VCdWZmZXIuYWRkUmF3KCdjb21wb25lbnRDdHguZGF0YS4nICsgaXRlbU5hbWUgKyAnPSAnICsgbGlzdE5hbWUgKyAnWycgKyBpbmRleE5hbWUgKyAnXTsnKTtcbi8vICAgICAgICAgc291cmNlQnVmZmVyLmFkZFJhdyhcbi8vICAgICAgICAgICAgIGFOb2RlQ29tcGlsZXIuY29tcGlsZShcbi8vICAgICAgICAgICAgICAgICBmb3JFbGVtZW50QU5vZGUsXG4vLyAgICAgICAgICAgICAgICAgc291cmNlQnVmZmVyLFxuLy8gICAgICAgICAgICAgICAgIG93bmVyXG4vLyAgICAgICAgICAgICApXG4vLyAgICAgICAgICk7XG4vLyAgICAgICAgIHNvdXJjZUJ1ZmZlci5hZGRSYXcoJ30nKTtcbi8vICAgICB9LFxuLy8gXG4vLyAgICAgLyoqXG4vLyAgICAgICog57yW6K+RIHNsb3Qg6IqC54K5XG4vLyAgICAgICpcbi8vICAgICAgKiBAcGFyYW0ge0FOb2RlfSBhTm9kZSDoioLngrnlr7nosaFcbi8vICAgICAgKiBAcGFyYW0ge0NvbXBpbGVTb3VyY2VCdWZmZXJ9IHNvdXJjZUJ1ZmZlciDnvJbor5HmupDnoIHnmoTkuK3pl7RidWZmZXJcbi8vICAgICAgKiBAcGFyYW0ge0NvbXBvbmVudH0gb3duZXIg5omA5bGe57uE5Lu25a6e5L6L546v5aKDXG4vLyAgICAgICovXG4vLyAgICAgY29tcGlsZVNsb3Q6IGZ1bmN0aW9uIChhTm9kZSwgc291cmNlQnVmZmVyLCBvd25lcikge1xuLy8gICAgICAgICBzb3VyY2VCdWZmZXIuYWRkUmF3KCcoZnVuY3Rpb24gKCkgeycpO1xuLy8gXG4vLyAgICAgICAgIHNvdXJjZUJ1ZmZlci5hZGRSYXcoJ2Z1bmN0aW9uICRkZWZhdWx0U2xvdFJlbmRlcihjb21wb25lbnRDdHgpIHsnKTtcbi8vICAgICAgICAgc291cmNlQnVmZmVyLmFkZFJhdygnICB2YXIgaHRtbCA9IFwiXCI7Jyk7XG4vLyAgICAgICAgIGVhY2goYU5vZGUuY2hpbGRyZW4sIGZ1bmN0aW9uIChhTm9kZUNoaWxkKSB7XG4vLyAgICAgICAgICAgICBzb3VyY2VCdWZmZXIuYWRkUmF3KGFOb2RlQ29tcGlsZXIuY29tcGlsZShhTm9kZUNoaWxkLCBzb3VyY2VCdWZmZXIsIG93bmVyKSk7XG4vLyAgICAgICAgIH0pO1xuLy8gICAgICAgICBzb3VyY2VCdWZmZXIuYWRkUmF3KCcgIHJldHVybiBodG1sOycpO1xuLy8gICAgICAgICBzb3VyY2VCdWZmZXIuYWRkUmF3KCd9Jyk7XG4vLyBcbi8vICAgICAgICAgc291cmNlQnVmZmVyLmFkZFJhdygnICB2YXIgJGdpdmVuU2xvdCA9IFtdOycpO1xuLy8gXG4vLyAgICAgICAgIHZhciBuYW1lUHJvcCA9IGdldEFOb2RlUHJvcChhTm9kZSwgJ25hbWUnKTtcbi8vICAgICAgICAgaWYgKG5hbWVQcm9wKSB7XG4vLyAgICAgICAgICAgICBzb3VyY2VCdWZmZXIuYWRkUmF3KCd2YXIgJHNsb3ROYW1lID0gJyArIGNvbXBpbGVFeHByU291cmNlLmV4cHIobmFtZVByb3AuZXhwcikgKyAnOycpO1xuLy8gICAgICAgICB9XG4vLyAgICAgICAgIGVsc2Uge1xuLy8gICAgICAgICAgICAgc291cmNlQnVmZmVyLmFkZFJhdygndmFyICRzbG90TmFtZSA9IG51bGw7Jyk7XG4vLyAgICAgICAgIH1cbi8vIFxuLy8gICAgICAgICBzb3VyY2VCdWZmZXIuYWRkUmF3KCd2YXIgJGN0eEdpdmVuU2xvdHMgPSBjb21wb25lbnRDdHguZ2l2ZW5TbG90czsnKTtcbi8vICAgICAgICAgc291cmNlQnVmZmVyLmFkZFJhdygnZm9yICh2YXIgJGkgPSAwOyAkaSA8ICRjdHhHaXZlblNsb3RzLmxlbmd0aDsgJGkrKykgeycpO1xuLy8gICAgICAgICBzb3VyY2VCdWZmZXIuYWRkUmF3KCcgIGlmICgkY3R4R2l2ZW5TbG90c1skaV1bMV0gPT0gJHNsb3ROYW1lKSB7Jyk7XG4vLyAgICAgICAgIHNvdXJjZUJ1ZmZlci5hZGRSYXcoJyAgICAkZ2l2ZW5TbG90LnB1c2goJGN0eEdpdmVuU2xvdHNbJGldWzBdKTsnKTtcbi8vICAgICAgICAgc291cmNlQnVmZmVyLmFkZFJhdygnICB9Jyk7XG4vLyAgICAgICAgIHNvdXJjZUJ1ZmZlci5hZGRSYXcoJ30nKTtcbi8vIFxuLy8gXG4vLyAgICAgICAgIHNvdXJjZUJ1ZmZlci5hZGRSYXcoJ3ZhciAkaXNJbnNlcnRlZCA9ICRnaXZlblNsb3QubGVuZ3RoID4gMDsnKTtcbi8vICAgICAgICAgc291cmNlQnVmZmVyLmFkZFJhdygnaWYgKCEkaXNJbnNlcnRlZCkgeyAkZ2l2ZW5TbG90LnB1c2goJGRlZmF1bHRTbG90UmVuZGVyKTsgfScpO1xuLy8gXG4vLyAgICAgICAgIHNvdXJjZUJ1ZmZlci5hZGRSYXcoJ3ZhciAkc2xvdEN0eCA9ICRpc0luc2VydGVkID8gY29tcG9uZW50Q3R4Lm93bmVyIDogY29tcG9uZW50Q3R4OycpO1xuLy8gICAgICAgICBpZiAoYU5vZGUudmFycykge1xuLy8gICAgICAgICAgICAgc291cmNlQnVmZmVyLmFkZFJhdygnJHNsb3RDdHggPSB7ZGF0YTogZXh0ZW5kKHt9LCAkc2xvdEN0eC5kYXRhKSwgZmlsdGVyczogJHNsb3RDdHguZmlsdGVycywgY2FsbEZpbHRlcjogJHNsb3RDdHguY2FsbEZpbHRlcn07Jyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbi8vICAgICAgICAgICAgIGVhY2goYU5vZGUudmFycywgZnVuY3Rpb24gKHZhckl0ZW0pIHtcbi8vICAgICAgICAgICAgICAgICBzb3VyY2VCdWZmZXIuYWRkUmF3KFxuLy8gICAgICAgICAgICAgICAgICAgICAnJHNsb3RDdHguZGF0YVtcIicgKyB2YXJJdGVtLm5hbWUgKyAnXCJdID0gJ1xuLy8gICAgICAgICAgICAgICAgICAgICArIGNvbXBpbGVFeHByU291cmNlLmV4cHIodmFySXRlbS5leHByKVxuLy8gICAgICAgICAgICAgICAgICAgICArICc7J1xuLy8gICAgICAgICAgICAgICAgICk7XG4vLyAgICAgICAgICAgICB9KTtcbi8vICAgICAgICAgfVxuLy8gXG4vLyAgICAgICAgIHNvdXJjZUJ1ZmZlci5hZGRSYXcoJ2ZvciAodmFyICRyZW5kZXJJbmRleCA9IDA7ICRyZW5kZXJJbmRleCA8ICRnaXZlblNsb3QubGVuZ3RoOyAkcmVuZGVySW5kZXgrKykgeycpO1xuLy8gICAgICAgICBzb3VyY2VCdWZmZXIuYWRkUmF3KCcgIGh0bWwgKz0gJGdpdmVuU2xvdFskcmVuZGVySW5kZXhdKCRzbG90Q3R4KTsnKTtcbi8vICAgICAgICAgc291cmNlQnVmZmVyLmFkZFJhdygnfScpO1xuLy8gXG4vLyAgICAgICAgIHNvdXJjZUJ1ZmZlci5hZGRSYXcoJ30pKCk7Jyk7XG4vLyAgICAgfSxcbi8vIFxuLy8gICAgIC8qKlxuLy8gICAgICAqIOe8luivkeaZrumAmuiKgueCuVxuLy8gICAgICAqXG4vLyAgICAgICogQHBhcmFtIHtBTm9kZX0gYU5vZGUg6IqC54K55a+56LGhXG4vLyAgICAgICogQHBhcmFtIHtDb21waWxlU291cmNlQnVmZmVyfSBzb3VyY2VCdWZmZXIg57yW6K+R5rqQ56CB55qE5Lit6Ze0YnVmZmVyXG4vLyAgICAgICogQHBhcmFtIHtDb21wb25lbnR9IG93bmVyIOaJgOWxnue7hOS7tuWunuS+i+eOr+Wig1xuLy8gICAgICAqIEBwYXJhbSB7T2JqZWN0fSBleHRyYSDnvJbor5HmiYDpnIDnmoTkuIDkupvpop3lpJbkv6Hmga9cbi8vICAgICAgKi9cbi8vICAgICBjb21waWxlRWxlbWVudDogZnVuY3Rpb24gKGFOb2RlLCBzb3VyY2VCdWZmZXIsIG93bmVyLCBleHRyYSkge1xuLy8gICAgICAgICBleHRyYSA9IGV4dHJhIHx8IHt9O1xuLy8gICAgICAgICAvLyBpZiAoYU5vZGUudGFnTmFtZSA9PT0gJ29wdGlvbidcbi8vICAgICAgICAgLy8gICAgICYmICFnZXRBTm9kZVByb3AoYU5vZGUsICd2YWx1ZScpXG4vLyAgICAgICAgIC8vICAgICAmJiBhTm9kZS5jaGlsZHJlblswXVxuLy8gICAgICAgICAvLyApIHtcbi8vICAgICAgICAgLy8gICAgIGFOb2RlLnByb3BzLnB1c2goe1xuLy8gICAgICAgICAvLyAgICAgICAgIG5hbWU6ICd2YWx1ZScsXG4vLyAgICAgICAgIC8vICAgICAgICAgZXhwcjogYU5vZGUuY2hpbGRyZW5bMF0udGV4dEV4cHJcbi8vICAgICAgICAgLy8gICAgIH0pO1xuLy8gICAgICAgICAvLyB9XG4vLyBcbi8vICAgICAgICAgZWxlbWVudFNvdXJjZUNvbXBpbGVyLnRhZ1N0YXJ0KFxuLy8gICAgICAgICAgICAgc291cmNlQnVmZmVyLFxuLy8gICAgICAgICAgICAgYU5vZGUudGFnTmFtZSxcbi8vICAgICAgICAgICAgIGFOb2RlLnByb3BzLFxuLy8gICAgICAgICAgICAgZXh0cmEucHJvcFxuLy8gICAgICAgICApO1xuLy8gXG4vLyAgICAgICAgIGVsZW1lbnRTb3VyY2VDb21waWxlci5pbm5lcihzb3VyY2VCdWZmZXIsIGFOb2RlLCBvd25lcik7XG4vLyAgICAgICAgIGVsZW1lbnRTb3VyY2VDb21waWxlci50YWdFbmQoc291cmNlQnVmZmVyLCBhTm9kZS50YWdOYW1lKTtcbi8vICAgICB9LFxuLy8gXG4vLyAgICAgLyoqXG4vLyAgICAgICog57yW6K+R57uE5Lu26IqC54K5XG4vLyAgICAgICpcbi8vICAgICAgKiBAcGFyYW0ge0FOb2RlfSBhTm9kZSDoioLngrnlr7nosaFcbi8vICAgICAgKiBAcGFyYW0ge0NvbXBpbGVTb3VyY2VCdWZmZXJ9IHNvdXJjZUJ1ZmZlciDnvJbor5HmupDnoIHnmoTkuK3pl7RidWZmZXJcbi8vICAgICAgKiBAcGFyYW0ge0NvbXBvbmVudH0gb3duZXIg5omA5bGe57uE5Lu25a6e5L6L546v5aKDXG4vLyAgICAgICogQHBhcmFtIHtPYmplY3R9IGV4dHJhIOe8luivkeaJgOmcgOeahOS4gOS6m+mineWkluS/oeaBr1xuLy8gICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGV4dHJhLkNvbXBvbmVudENsYXNzIOWvueW6lOe7hOS7tuexu1xuLy8gICAgICAqL1xuLy8gICAgIGNvbXBpbGVDb21wb25lbnQ6IGZ1bmN0aW9uIChhTm9kZSwgc291cmNlQnVmZmVyLCBvd25lciwgZXh0cmEpIHtcbi8vICAgICAgICAgaWYgKGFOb2RlKSB7XG4vLyAgICAgICAgICAgICBzb3VyY2VCdWZmZXIuYWRkUmF3KCd2YXIgJHNsb3ROYW1lID0gbnVsbDsnKTtcbi8vICAgICAgICAgICAgIHNvdXJjZUJ1ZmZlci5hZGRSYXcoJ3ZhciAkZ2l2ZW5TbG90cyA9IFtdOycpO1xuLy8gICAgICAgICAgICAgZWFjaChhTm9kZS5jaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7XG4vLyAgICAgICAgICAgICAgICAgdmFyIHNsb3RCaW5kID0gIWNoaWxkLnRleHRFeHByICYmIGdldEFOb2RlUHJvcChjaGlsZCwgJ3Nsb3QnKTtcbi8vICAgICAgICAgICAgICAgICBpZiAoc2xvdEJpbmQpIHtcbi8vICAgICAgICAgICAgICAgICAgICAgc291cmNlQnVmZmVyLmFkZFJhdygnJHNsb3ROYW1lID0gJyArIGNvbXBpbGVFeHByU291cmNlLmV4cHIoc2xvdEJpbmQuZXhwcikgKyAnOycpO1xuLy8gICAgICAgICAgICAgICAgICAgICBzb3VyY2VCdWZmZXIuYWRkUmF3KCckZ2l2ZW5TbG90cy5wdXNoKFtmdW5jdGlvbiAoY29tcG9uZW50Q3R4KSB7Jyk7XG4vLyAgICAgICAgICAgICAgICAgICAgIHNvdXJjZUJ1ZmZlci5hZGRSYXcoJyAgdmFyIGh0bWwgPSBcIlwiOycpO1xuLy8gICAgICAgICAgICAgICAgICAgICBzb3VyY2VCdWZmZXIuYWRkUmF3KGFOb2RlQ29tcGlsZXIuY29tcGlsZShjaGlsZCwgc291cmNlQnVmZmVyLCBvd25lcikpO1xuLy8gICAgICAgICAgICAgICAgICAgICBzb3VyY2VCdWZmZXIuYWRkUmF3KCcgIHJldHVybiBodG1sOycpO1xuLy8gICAgICAgICAgICAgICAgICAgICBzb3VyY2VCdWZmZXIuYWRkUmF3KCd9LCAkc2xvdE5hbWVdKTsnKTtcbi8vICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgZWxzZSB7XG4vLyAgICAgICAgICAgICAgICAgICAgIHNvdXJjZUJ1ZmZlci5hZGRSYXcoJyRnaXZlblNsb3RzLnB1c2goW2Z1bmN0aW9uIChjb21wb25lbnRDdHgpIHsnKTtcbi8vICAgICAgICAgICAgICAgICAgICAgc291cmNlQnVmZmVyLmFkZFJhdygnICB2YXIgaHRtbCA9IFwiXCI7Jyk7XG4vLyAgICAgICAgICAgICAgICAgICAgIHNvdXJjZUJ1ZmZlci5hZGRSYXcoYU5vZGVDb21waWxlci5jb21waWxlKGNoaWxkLCBzb3VyY2VCdWZmZXIsIG93bmVyKSk7XG4vLyAgICAgICAgICAgICAgICAgICAgIHNvdXJjZUJ1ZmZlci5hZGRSYXcoJyAgcmV0dXJuIGh0bWw7Jyk7XG4vLyAgICAgICAgICAgICAgICAgICAgIHNvdXJjZUJ1ZmZlci5hZGRSYXcoJ31dKTsnKTtcbi8vICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICB9KTtcbi8vICAgICAgICAgfVxuLy8gXG4vLyAgICAgICAgIHZhciBDb21wb25lbnRDbGFzcyA9IGV4dHJhLkNvbXBvbmVudENsYXNzO1xuLy8gICAgICAgICB2YXIgY29tcG9uZW50ID0gbmV3IENvbXBvbmVudENsYXNzKHtcbi8vICAgICAgICAgICAgIGFOb2RlOiBhTm9kZSxcbi8vICAgICAgICAgICAgIG93bmVyOiBvd25lcixcbi8vICAgICAgICAgICAgIHN1YlRhZzogYU5vZGUudGFnTmFtZVxuLy8gICAgICAgICB9KTtcbi8vIFxuLy8gICAgICAgICB2YXIgZ2l2ZW5EYXRhID0gW107XG4vLyBcbi8vICAgICAgICAgZWFjaChjb21wb25lbnQuYmluZHMsIGZ1bmN0aW9uIChwcm9wKSB7XG4vLyAgICAgICAgICAgICBnaXZlbkRhdGEucHVzaChcbi8vICAgICAgICAgICAgICAgICBjb21waWxlRXhwclNvdXJjZS5zdHJpbmdMaXRlcmFsaXplKHByb3AubmFtZSlcbi8vICAgICAgICAgICAgICAgICArICc6J1xuLy8gICAgICAgICAgICAgICAgICsgY29tcGlsZUV4cHJTb3VyY2UuZXhwcihwcm9wLmV4cHIpXG4vLyAgICAgICAgICAgICApO1xuLy8gICAgICAgICB9KTtcbi8vIFxuLy8gICAgICAgICBzb3VyY2VCdWZmZXIuYWRkUmF3KCdodG1sICs9ICgnKTtcbi8vICAgICAgICAgc291cmNlQnVmZmVyLmFkZFJlbmRlcmVyU3RhcnQoKTtcbi8vICAgICAgICAgY29tcGlsZUNvbXBvbmVudFNvdXJjZShzb3VyY2VCdWZmZXIsIGNvbXBvbmVudCwgZXh0cmEgJiYgZXh0cmEucHJvcCk7XG4vLyAgICAgICAgIHNvdXJjZUJ1ZmZlci5hZGRSZW5kZXJlckVuZCgpO1xuLy8gICAgICAgICBzb3VyY2VCdWZmZXIuYWRkUmF3KCcpKHsnICsgZ2l2ZW5EYXRhLmpvaW4oJyxcXG4nKSArICd9LCBjb21wb25lbnRDdHgsICRnaXZlblNsb3RzKTsnKTtcbi8vICAgICAgICAgc291cmNlQnVmZmVyLmFkZFJhdygnJGdpdmVuU2xvdHMgPSBudWxsOycpO1xuLy8gICAgIH1cbi8vIH07XG4vLyAvKiBlc2xpbnQtZGlzYWJsZSBndWFyZC1mb3ItaW4gKi9cbi8vIFxuLy8gLyoqXG4vLyAgKiDnlJ/miJDnu4Tku7YgcmVuZGVyZXIg5pe2IGN0eCDlr7nosaHmnoTlu7rnmoTku6PnoIFcbi8vICAqXG4vLyAgKiBAaW5uZXJcbi8vICAqIEBwYXJhbSB7Q29tcGlsZVNvdXJjZUJ1ZmZlcn0gc291cmNlQnVmZmVyIOe8luivkea6kOeggeeahOS4remXtGJ1ZmZlclxuLy8gICogQHBhcmFtIHtPYmplY3R9IGNvbXBvbmVudCDnu4Tku7blrp7kvotcbi8vICAqIEBwYXJhbSB7c3RyaW5nP30gZXh0cmFQcm9wIOmineWklueahOWxnuaAp+S4slxuLy8gICovXG4vLyBmdW5jdGlvbiBjb21waWxlQ29tcG9uZW50U291cmNlKHNvdXJjZUJ1ZmZlciwgY29tcG9uZW50LCBleHRyYVByb3ApIHtcbi8vICAgICBzb3VyY2VCdWZmZXIuYWRkUmF3KGdlbkNvbXBvbmVudENvbnRleHRDb2RlKGNvbXBvbmVudCkpO1xuLy8gICAgIHNvdXJjZUJ1ZmZlci5hZGRSYXcoJ2NvbXBvbmVudEN0eC5vd25lciA9IHBhcmVudEN0eDsnKTtcbi8vICAgICBzb3VyY2VCdWZmZXIuYWRkUmF3KCdjb21wb25lbnRDdHguZ2l2ZW5TbG90cyA9IGdpdmVuU2xvdHM7Jyk7XG4vLyBcbi8vIFxuLy8gICAgIHNvdXJjZUJ1ZmZlci5hZGRSYXcoJ2RhdGEgPSBleHRlbmQoY29tcG9uZW50Q3R4LmRhdGEsIGRhdGEpOycpO1xuLy8gICAgIHNvdXJjZUJ1ZmZlci5hZGRSYXcoJ2ZvciAodmFyICRpID0gMDsgJGkgPCBjb21wb25lbnRDdHguY29tcHV0ZWROYW1lcy5sZW5ndGg7ICRpKyspIHsnKTtcbi8vICAgICBzb3VyY2VCdWZmZXIuYWRkUmF3KCcgIHZhciAkY29tcHV0ZWROYW1lID0gY29tcG9uZW50Q3R4LmNvbXB1dGVkTmFtZXNbJGldOycpO1xuLy8gICAgIHNvdXJjZUJ1ZmZlci5hZGRSYXcoJyAgZGF0YVskY29tcHV0ZWROYW1lXSA9IGNvbXBvbmVudEN0eC5jb21wdXRlZFskY29tcHV0ZWROYW1lXSgpOycpO1xuLy8gICAgIHNvdXJjZUJ1ZmZlci5hZGRSYXcoJ30nKTtcbi8vIFxuLy8gICAgIGV4dHJhUHJvcCA9IGV4dHJhUHJvcCB8fCAnJztcbi8vIFxuLy8gICAgIHZhciBldmVudERlY2xhcmF0aW9ucyA9IFtdO1xuLy8gICAgIGZvciAodmFyIGtleSBpbiBjb21wb25lbnQubGlzdGVuZXJzKSB7XG4vLyAgICAgICAgIGVhY2goY29tcG9uZW50Lmxpc3RlbmVyc1trZXldLCBmdW5jdGlvbiAobGlzdGVuZXIpIHtcbi8vICAgICAgICAgICAgIGlmIChsaXN0ZW5lci5kZWNsYXJhdGlvbikge1xuLy8gICAgICAgICAgICAgICAgIGV2ZW50RGVjbGFyYXRpb25zLnB1c2gobGlzdGVuZXIuZGVjbGFyYXRpb24pO1xuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICB9KTtcbi8vICAgICB9XG4vLyBcbi8vICAgICBlbGVtZW50U291cmNlQ29tcGlsZXIudGFnU3RhcnQoXG4vLyAgICAgICAgIHNvdXJjZUJ1ZmZlcixcbi8vICAgICAgICAgY29tcG9uZW50LnRhZ05hbWUsXG4vLyAgICAgICAgIGNvbXBvbmVudC5hTm9kZS5wcm9wcyxcbi8vICAgICAgICAgZXh0cmFQcm9wXG4vLyAgICAgKTtcbi8vIFxuLy8gICAgIGlmICghY29tcG9uZW50Lm93bmVyKSB7XG4vLyAgICAgICAgIHNvdXJjZUJ1ZmZlci5qb2luU3RyaW5nKCc8IS0tcy1kYXRhOicpO1xuLy8gICAgICAgICBzb3VyY2VCdWZmZXIuam9pbkRhdGFTdHJpbmdpZnkoKTtcbi8vICAgICAgICAgc291cmNlQnVmZmVyLmpvaW5TdHJpbmcoJy0tPicpO1xuLy8gICAgIH1cbi8vIFxuLy8gXG4vLyBcbi8vICAgICBlbGVtZW50U291cmNlQ29tcGlsZXIuaW5uZXIoc291cmNlQnVmZmVyLCBjb21wb25lbnQuYU5vZGUsIGNvbXBvbmVudCk7XG4vLyAgICAgZWxlbWVudFNvdXJjZUNvbXBpbGVyLnRhZ0VuZChzb3VyY2VCdWZmZXIsIGNvbXBvbmVudC50YWdOYW1lKTtcbi8vIH1cbi8vIFxuLy8gdmFyIHN0cmluZ2lmaWVyID0ge1xuLy8gICAgIG9iajogZnVuY3Rpb24gKHNvdXJjZSkge1xuLy8gICAgICAgICB2YXIgcHJlZml4Q29tbWE7XG4vLyAgICAgICAgIHZhciByZXN1bHQgPSAneyc7XG4vLyBcbi8vICAgICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuLy8gICAgICAgICAgICAgaWYgKHR5cGVvZiBzb3VyY2Vba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbi8vICAgICAgICAgICAgICAgICBjb250aW51ZTtcbi8vICAgICAgICAgICAgIH1cbi8vIFxuLy8gICAgICAgICAgICAgaWYgKHByZWZpeENvbW1hKSB7XG4vLyAgICAgICAgICAgICAgICAgcmVzdWx0ICs9ICcsJztcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgIHByZWZpeENvbW1hID0gMTtcbi8vIFxuLy8gICAgICAgICAgICAgcmVzdWx0ICs9IGNvbXBpbGVFeHByU291cmNlLnN0cmluZ0xpdGVyYWxpemUoa2V5KSArICc6JyArIHN0cmluZ2lmaWVyLmFueShzb3VyY2Vba2V5XSk7XG4vLyAgICAgICAgIH1cbi8vIFxuLy8gICAgICAgICByZXR1cm4gcmVzdWx0ICsgJ30nO1xuLy8gICAgIH0sXG4vLyBcbi8vICAgICBhcnI6IGZ1bmN0aW9uIChzb3VyY2UpIHtcbi8vICAgICAgICAgdmFyIHByZWZpeENvbW1hO1xuLy8gICAgICAgICB2YXIgcmVzdWx0ID0gJ1snO1xuLy8gXG4vLyAgICAgICAgIGVhY2goc291cmNlLCBmdW5jdGlvbiAodmFsdWUpIHtcbi8vICAgICAgICAgICAgIGlmIChwcmVmaXhDb21tYSkge1xuLy8gICAgICAgICAgICAgICAgIHJlc3VsdCArPSAnLCc7XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICBwcmVmaXhDb21tYSA9IDE7XG4vLyBcbi8vICAgICAgICAgICAgIHJlc3VsdCArPSBzdHJpbmdpZmllci5hbnkodmFsdWUpO1xuLy8gICAgICAgICB9KTtcbi8vIFxuLy8gICAgICAgICByZXR1cm4gcmVzdWx0ICsgJ10nO1xuLy8gICAgIH0sXG4vLyBcbi8vICAgICBzdHI6IGZ1bmN0aW9uIChzb3VyY2UpIHtcbi8vICAgICAgICAgcmV0dXJuIGNvbXBpbGVFeHByU291cmNlLnN0cmluZ0xpdGVyYWxpemUoc291cmNlKTtcbi8vICAgICB9LFxuLy8gXG4vLyAgICAgZGF0ZTogZnVuY3Rpb24gKHNvdXJjZSkge1xuLy8gICAgICAgICByZXR1cm4gJ25ldyBEYXRlKCcgKyBzb3VyY2UuZ2V0VGltZSgpICsgJyknO1xuLy8gICAgIH0sXG4vLyBcbi8vICAgICBhbnk6IGZ1bmN0aW9uIChzb3VyY2UpIHtcbi8vICAgICAgICAgc3dpdGNoICh0eXBlb2Ygc291cmNlKSB7XG4vLyAgICAgICAgICAgICBjYXNlICdzdHJpbmcnOlxuLy8gICAgICAgICAgICAgICAgIHJldHVybiBzdHJpbmdpZmllci5zdHIoc291cmNlKTtcbi8vIFxuLy8gICAgICAgICAgICAgY2FzZSAnbnVtYmVyJzpcbi8vICAgICAgICAgICAgICAgICByZXR1cm4gJycgKyBzb3VyY2U7XG4vLyBcbi8vICAgICAgICAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuLy8gICAgICAgICAgICAgICAgIHJldHVybiBzb3VyY2UgPyAndHJ1ZScgOiAnZmFsc2UnO1xuLy8gXG4vLyAgICAgICAgICAgICBjYXNlICdvYmplY3QnOlxuLy8gICAgICAgICAgICAgICAgIGlmICghc291cmNlKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuLy8gICAgICAgICAgICAgICAgIH1cbi8vIFxuLy8gICAgICAgICAgICAgICAgIGlmIChzb3VyY2UgaW5zdGFuY2VvZiBBcnJheSkge1xuLy8gICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RyaW5naWZpZXIuYXJyKHNvdXJjZSk7XG4vLyAgICAgICAgICAgICAgICAgfVxuLy8gXG4vLyAgICAgICAgICAgICAgICAgaWYgKHNvdXJjZSBpbnN0YW5jZW9mIERhdGUpIHtcbi8vICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0cmluZ2lmaWVyLmRhdGUoc291cmNlKTtcbi8vICAgICAgICAgICAgICAgICB9XG4vLyBcbi8vICAgICAgICAgICAgICAgICByZXR1cm4gc3RyaW5naWZpZXIub2JqKHNvdXJjZSk7XG4vLyAgICAgICAgIH1cbi8vIFxuLy8gICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBTdHJpbmdpZnk6JyArIHNvdXJjZSk7XG4vLyAgICAgfVxuLy8gfTtcbi8vIFxuLy8gLyoqXG4vLyAgKiDnlJ/miJDnu4Tku7YgcmVuZGVyZXIg5pe2IGN0eCDlr7nosaHmnoTlu7rnmoTku6PnoIFcbi8vICAqXG4vLyAgKiBAaW5uZXJcbi8vICAqIEBwYXJhbSB7T2JqZWN0fSBjb21wb25lbnQg57uE5Lu25a6e5L6LXG4vLyAgKiBAcmV0dXJuIHtzdHJpbmd9XG4vLyAgKi9cbi8vIGZ1bmN0aW9uIGdlbkNvbXBvbmVudENvbnRleHRDb2RlKGNvbXBvbmVudCkge1xuLy8gICAgIHZhciBjb2RlID0gWyd2YXIgY29tcG9uZW50Q3R4ID0geyddO1xuLy8gXG4vLyAgICAgLy8gZ2l2ZW4gYW5vZGVcbi8vICAgICBjb2RlLnB1c2goJ2dpdmVuU2xvdHM6IFtdLCcpO1xuLy8gXG4vLyAgICAgLy8gZmlsdGVyc1xuLy8gICAgIGNvZGUucHVzaCgnZmlsdGVyczogeycpO1xuLy8gICAgIHZhciBmaWx0ZXJDb2RlID0gW107XG4vLyAgICAgZm9yICh2YXIga2V5IGluIGNvbXBvbmVudC5maWx0ZXJzKSB7XG4vLyAgICAgICAgIHZhciBmaWx0ZXIgPSBjb21wb25lbnQuZmlsdGVyc1trZXldO1xuLy8gXG4vLyAgICAgICAgIGlmICh0eXBlb2YgZmlsdGVyID09PSAnZnVuY3Rpb24nKSB7XG4vLyAgICAgICAgICAgICBmaWx0ZXJDb2RlLnB1c2goa2V5ICsgJzogJyArIGZpbHRlci50b1N0cmluZygpKTtcbi8vICAgICAgICAgfVxuLy8gICAgIH1cbi8vICAgICBjb2RlLnB1c2goZmlsdGVyQ29kZS5qb2luKCcsJykpO1xuLy8gICAgIGNvZGUucHVzaCgnfSwnKTtcbi8vIFxuLy8gICAgIGNvZGUucHVzaChcbi8vICAgICAgICAgJ2NhbGxGaWx0ZXI6IGZ1bmN0aW9uIChuYW1lLCBhcmdzKSB7Jyxcbi8vICAgICAgICAgJyAgICB2YXIgZmlsdGVyID0gdGhpcy5maWx0ZXJzW25hbWVdIHx8IERFRkFVTFRfRklMVEVSU1tuYW1lXTsnLFxuLy8gICAgICAgICAnICAgIGlmICh0eXBlb2YgZmlsdGVyID09PSBcImZ1bmN0aW9uXCIpIHsnLFxuLy8gICAgICAgICAnICAgICAgICByZXR1cm4gZmlsdGVyLmFwcGx5KHRoaXMsIGFyZ3MpOycsXG4vLyAgICAgICAgICcgICAgfScsXG4vLyAgICAgICAgICd9LCdcbi8vICAgICApO1xuLy8gXG4vLyAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tcmVkZWNsYXJlICovXG4vLyAgICAgLy8gY29tcHV0ZWQgb2JqXG4vLyAgICAgY29kZS5wdXNoKCdjb21wdXRlZDogeycpO1xuLy8gICAgIHZhciBjb21wdXRlZENvZGUgPSBbXTtcbi8vICAgICBmb3IgKHZhciBrZXkgaW4gY29tcG9uZW50LmNvbXB1dGVkKSB7XG4vLyAgICAgICAgIHZhciBjb21wdXRlZCA9IGNvbXBvbmVudC5jb21wdXRlZFtrZXldO1xuLy8gXG4vLyAgICAgICAgIGlmICh0eXBlb2YgY29tcHV0ZWQgPT09ICdmdW5jdGlvbicpIHtcbi8vICAgICAgICAgICAgIGNvbXB1dGVkQ29kZS5wdXNoKGtleSArICc6ICdcbi8vICAgICAgICAgICAgICAgICArIGNvbXB1dGVkLnRvU3RyaW5nKCkucmVwbGFjZShcbi8vICAgICAgICAgICAgICAgICAgICAgL3RoaXMuZGF0YS5nZXRcXCgoW15cXCldKylcXCkvZyxcbi8vICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKG1hdGNoLCBleHByTGl0ZXJhbCkge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGV4cHJTdHIgPSAobmV3IEZ1bmN0aW9uKCdyZXR1cm4gJyArIGV4cHJMaXRlcmFsKSkoKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBleHByID0gcGFyc2VFeHByKGV4cHJTdHIpO1xuLy8gXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29tcGlsZUV4cHJTb3VyY2UuZXhwcihleHByKTtcbi8vICAgICAgICAgICAgICAgICAgICAgfSlcbi8vICAgICAgICAgICAgICk7XG4vLyAgICAgICAgIH1cbi8vICAgICB9XG4vLyAgICAgY29kZS5wdXNoKGNvbXB1dGVkQ29kZS5qb2luKCcsJykpO1xuLy8gICAgIGNvZGUucHVzaCgnfSwnKTtcbi8vIFxuLy8gICAgIC8vIGNvbXB1dGVkIG5hbWVzXG4vLyAgICAgY29kZS5wdXNoKCdjb21wdXRlZE5hbWVzOiBbJyk7XG4vLyAgICAgY29tcHV0ZWRDb2RlID0gW107XG4vLyAgICAgZm9yICh2YXIga2V5IGluIGNvbXBvbmVudC5jb21wdXRlZCkge1xuLy8gICAgICAgICB2YXIgY29tcHV0ZWQgPSBjb21wb25lbnQuY29tcHV0ZWRba2V5XTtcbi8vIFxuLy8gICAgICAgICBpZiAodHlwZW9mIGNvbXB1dGVkID09PSAnZnVuY3Rpb24nKSB7XG4vLyAgICAgICAgICAgICBjb21wdXRlZENvZGUucHVzaCgnXCInICsga2V5ICsgJ1wiJyk7XG4vLyAgICAgICAgIH1cbi8vICAgICB9XG4vLyAgICAgY29kZS5wdXNoKGNvbXB1dGVkQ29kZS5qb2luKCcsJykpO1xuLy8gICAgIGNvZGUucHVzaCgnXSwnKTtcbi8vICAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLXJlZGVjbGFyZSAqL1xuLy8gXG4vLyAgICAgLy8gZGF0YVxuLy8gICAgIGNvZGUucHVzaCgnZGF0YTogJyArIHN0cmluZ2lmaWVyLmFueShjb21wb25lbnQuZGF0YS5nZXQoKSkgKyAnLCcpO1xuLy8gXG4vLyAgICAgLy8gdGFnTmFtZVxuLy8gICAgIGNvZGUucHVzaCgndGFnTmFtZTogXCInICsgY29tcG9uZW50LnRhZ05hbWUgKyAnXCInKTtcbi8vICAgICBjb2RlLnB1c2goJ307Jyk7XG4vLyBcbi8vICAgICByZXR1cm4gY29kZS5qb2luKCdcXG4nKTtcbi8vIH1cbi8vIFxuLy8gLyogZXNsaW50LWVuYWJsZSBndWFyZC1mb3ItaW4gKi9cbi8vIFxuLy8gLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbi8vIC8qIGVzbGludC1kaXNhYmxlIGZlY3MtY2FtZWxjYXNlICovXG4vLyBcbi8vIC8qKlxuLy8gICog57uE5Lu257yW6K+R55qE5qih5p2/5Ye95pWwXG4vLyAgKlxuLy8gICogQGlubmVyXG4vLyAgKi9cbi8vIGZ1bmN0aW9uIGNvbXBvbmVudENvbXBpbGVQcmVDb2RlKCkge1xuLy8gICAgIHZhciAkdmVyc2lvbiA9ICczLjUuMSc7XG4vLyBcbi8vICAgICBmdW5jdGlvbiBleHRlbmQodGFyZ2V0LCBzb3VyY2UpIHtcbi8vICAgICAgICAgaWYgKHNvdXJjZSkge1xuLy8gICAgICAgICAgICAgT2JqZWN0LmtleXMoc291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbi8vICAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBzb3VyY2Vba2V5XTtcbi8vICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJykge1xuLy8gICAgICAgICAgICAgICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuLy8gICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgIH0pO1xuLy8gICAgICAgICB9XG4vLyBcbi8vICAgICAgICAgcmV0dXJuIHRhcmdldDtcbi8vICAgICB9XG4vLyBcbi8vICAgICBmdW5jdGlvbiBlYWNoKGFycmF5LCBpdGVyYXRvcikge1xuLy8gICAgICAgICBpZiAoYXJyYXkgJiYgYXJyYXkubGVuZ3RoID4gMCkge1xuLy8gICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBhcnJheS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbi8vICAgICAgICAgICAgICAgICBpZiAoaXRlcmF0b3IoYXJyYXlbaV0sIGkpID09PSBmYWxzZSkge1xuLy8gICAgICAgICAgICAgICAgICAgICBicmVhaztcbi8vICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgIH1cbi8vICAgICB9XG4vLyBcbi8vICAgICBmdW5jdGlvbiBjb250YWlucyhhcnJheSwgdmFsdWUpIHtcbi8vICAgICAgICAgdmFyIHJlc3VsdDtcbi8vICAgICAgICAgZWFjaChhcnJheSwgZnVuY3Rpb24gKGl0ZW0pIHtcbi8vICAgICAgICAgICAgIHJlc3VsdCA9IGl0ZW0gPT09IHZhbHVlO1xuLy8gICAgICAgICAgICAgcmV0dXJuICFyZXN1bHQ7XG4vLyAgICAgICAgIH0pO1xuLy8gXG4vLyAgICAgICAgIHJldHVybiByZXN1bHQ7XG4vLyAgICAgfVxuLy8gXG4vLyAgICAgdmFyIEhUTUxfRU5USVRZID0ge1xuLy8gICAgICAgICAvKiBqc2hpbnQgaWdub3JlOnN0YXJ0ICovXG4vLyAgICAgICAgICcmJzogJyZhbXA7Jyxcbi8vICAgICAgICAgJzwnOiAnJmx0OycsXG4vLyAgICAgICAgICc+JzogJyZndDsnLFxuLy8gICAgICAgICAnXCInOiAnJnF1b3Q7Jyxcbi8vICAgICAgICAgLyogZXNsaW50LWRpc2FibGUgcXVvdGVzICovXG4vLyAgICAgICAgIFwiJ1wiOiAnJiMzOTsnXG4vLyAgICAgICAgIC8qIGVzbGludC1lbmFibGUgcXVvdGVzICovXG4vLyAgICAgICAgIC8qIGpzaGludCBpZ25vcmU6ZW5kICovXG4vLyAgICAgfTtcbi8vIFxuLy8gICAgIGZ1bmN0aW9uIGh0bWxGaWx0ZXJSZXBsYWNlcihjKSB7XG4vLyAgICAgICAgIHJldHVybiBIVE1MX0VOVElUWVtjXTtcbi8vICAgICB9XG4vLyBcbi8vICAgICBmdW5jdGlvbiBlc2NhcGVIVE1MKHNvdXJjZSkge1xuLy8gICAgICAgICBpZiAoc291cmNlID09IG51bGwpIHtcbi8vICAgICAgICAgICAgIHJldHVybiAnJztcbi8vICAgICAgICAgfVxuLy8gXG4vLyAgICAgICAgIHJldHVybiBTdHJpbmcoc291cmNlKS5yZXBsYWNlKC9bJjw+XCInXS9nLCBodG1sRmlsdGVyUmVwbGFjZXIpO1xuLy8gICAgIH1cbi8vIFxuLy8gICAgIHZhciBERUZBVUxUX0ZJTFRFUlMgPSB7XG4vLyAgICAgICAgIHVybDogZW5jb2RlVVJJQ29tcG9uZW50LFxuLy8gICAgICAgICBfY2xhc3M6IGZ1bmN0aW9uIChzb3VyY2UpIHtcbi8vICAgICAgICAgICAgIGlmIChzb3VyY2UgaW5zdGFuY2VvZiBBcnJheSkge1xuLy8gICAgICAgICAgICAgICAgIHJldHVybiBzb3VyY2Uuam9pbignICcpO1xuLy8gICAgICAgICAgICAgfVxuLy8gXG4vLyAgICAgICAgICAgICByZXR1cm4gc291cmNlO1xuLy8gICAgICAgICB9LFxuLy8gICAgICAgICBfc3R5bGU6IGZ1bmN0aW9uIChzb3VyY2UpIHtcbi8vICAgICAgICAgICAgIGlmICh0eXBlb2Ygc291cmNlID09PSAnb2JqZWN0Jykge1xuLy8gICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSAnJztcbi8vICAgICAgICAgICAgICAgICBpZiAoc291cmNlKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0ga2V5ICsgJzonICsgc291cmNlW2tleV0gKyAnOyc7XG4vLyAgICAgICAgICAgICAgICAgICAgIH0pO1xuLy8gICAgICAgICAgICAgICAgIH1cbi8vIFxuLy8gICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4vLyAgICAgICAgICAgICB9XG4vLyBcbi8vICAgICAgICAgICAgIHJldHVybiBzb3VyY2UgfHwgJyc7XG4vLyAgICAgICAgIH0sXG4vLyAgICAgICAgIF9zZXA6IGZ1bmN0aW9uIChzb3VyY2UsIHNlcCkge1xuLy8gICAgICAgICAgICAgcmV0dXJuIHNvdXJjZSA/IHNlcCArIHNvdXJjZSA6ICcnO1xuLy8gICAgICAgICB9XG4vLyAgICAgfTtcbi8vIFxuLy8gICAgIGZ1bmN0aW9uIGF0dHJGaWx0ZXIobmFtZSwgdmFsdWUpIHtcbi8vICAgICAgICAgaWYgKHZhbHVlKSB7XG4vLyAgICAgICAgICAgICByZXR1cm4gJyAnICsgbmFtZSArICc9XCInICsgdmFsdWUgKyAnXCInO1xuLy8gICAgICAgICB9XG4vLyBcbi8vICAgICAgICAgcmV0dXJuICcnO1xuLy8gICAgIH1cbi8vIFxuLy8gICAgIGZ1bmN0aW9uIGJvb2xBdHRyRmlsdGVyKG5hbWUsIHZhbHVlKSB7XG4vLyAgICAgICAgIGlmICh2YWx1ZSAmJiB2YWx1ZSAhPT0gJ2ZhbHNlJyAmJiB2YWx1ZSAhPT0gJzAnKSB7XG4vLyAgICAgICAgICAgICByZXR1cm4gJyAnICsgbmFtZTtcbi8vICAgICAgICAgfVxuLy8gXG4vLyAgICAgICAgIHJldHVybiAnJztcbi8vICAgICB9XG4vLyBcbi8vICAgICBmdW5jdGlvbiBzdHJpbmdMaXRlcmFsaXplKHNvdXJjZSkge1xuLy8gICAgICAgICByZXR1cm4gJ1wiJ1xuLy8gICAgICAgICAgICAgKyBzb3VyY2Vcbi8vICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFx4NUMvZywgJ1xcXFxcXFxcJylcbi8vICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpXG4vLyAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xceDBBL2csICdcXFxcbicpXG4vLyAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xceDA5L2csICdcXFxcdCcpXG4vLyAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xceDBEL2csICdcXFxccicpXG4vLyAgICAgICAgICAgICArICdcIic7XG4vLyAgICAgfVxuLy8gXG4vLyAgICAgdmFyIHN0cmluZ2lmaWVyID0ge1xuLy8gICAgICAgICBvYmo6IGZ1bmN0aW9uIChzb3VyY2UpIHtcbi8vICAgICAgICAgICAgIHZhciBwcmVmaXhDb21tYTtcbi8vICAgICAgICAgICAgIHZhciByZXN1bHQgPSAneyc7XG4vLyBcbi8vICAgICAgICAgICAgIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4vLyAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBzb3VyY2Vba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbi8vICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuLy8gICAgICAgICAgICAgICAgIH1cbi8vIFxuLy8gICAgICAgICAgICAgICAgIGlmIChwcmVmaXhDb21tYSkge1xuLy8gICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0gJywnO1xuLy8gICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICBwcmVmaXhDb21tYSA9IDE7XG4vLyBcbi8vICAgICAgICAgICAgICAgICByZXN1bHQgKz0gc3RyaW5nTGl0ZXJhbGl6ZShrZXkpICsgJzonICsgc3RyaW5naWZpZXIuYW55KHNvdXJjZVtrZXldKTtcbi8vICAgICAgICAgICAgIH0pO1xuLy8gXG4vLyAgICAgICAgICAgICByZXR1cm4gcmVzdWx0ICsgJ30nO1xuLy8gICAgICAgICB9LFxuLy8gXG4vLyAgICAgICAgIGFycjogZnVuY3Rpb24gKHNvdXJjZSkge1xuLy8gICAgICAgICAgICAgdmFyIHByZWZpeENvbW1hO1xuLy8gICAgICAgICAgICAgdmFyIHJlc3VsdCA9ICdbJztcbi8vIFxuLy8gICAgICAgICAgICAgZWFjaChzb3VyY2UsIGZ1bmN0aW9uICh2YWx1ZSkge1xuLy8gICAgICAgICAgICAgICAgIGlmIChwcmVmaXhDb21tYSkge1xuLy8gICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0gJywnO1xuLy8gICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICBwcmVmaXhDb21tYSA9IDE7XG4vLyBcbi8vICAgICAgICAgICAgICAgICByZXN1bHQgKz0gc3RyaW5naWZpZXIuYW55KHZhbHVlKTtcbi8vICAgICAgICAgICAgIH0pO1xuLy8gXG4vLyAgICAgICAgICAgICByZXR1cm4gcmVzdWx0ICsgJ10nO1xuLy8gICAgICAgICB9LFxuLy8gXG4vLyAgICAgICAgIHN0cjogZnVuY3Rpb24gKHNvdXJjZSkge1xuLy8gICAgICAgICAgICAgcmV0dXJuIHN0cmluZ0xpdGVyYWxpemUoc291cmNlKTtcbi8vICAgICAgICAgfSxcbi8vIFxuLy8gICAgICAgICBkYXRlOiBmdW5jdGlvbiAoc291cmNlKSB7XG4vLyAgICAgICAgICAgICByZXR1cm4gJ25ldyBEYXRlKCcgKyBzb3VyY2UuZ2V0VGltZSgpICsgJyknO1xuLy8gICAgICAgICB9LFxuLy8gXG4vLyAgICAgICAgIGFueTogZnVuY3Rpb24gKHNvdXJjZSkge1xuLy8gICAgICAgICAgICAgc3dpdGNoICh0eXBlb2Ygc291cmNlKSB7XG4vLyAgICAgICAgICAgICAgICAgY2FzZSAnc3RyaW5nJzpcbi8vICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0cmluZ2lmaWVyLnN0cihzb3VyY2UpO1xuLy8gXG4vLyAgICAgICAgICAgICAgICAgY2FzZSAnbnVtYmVyJzpcbi8vICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnICsgc291cmNlO1xuLy8gXG4vLyAgICAgICAgICAgICAgICAgY2FzZSAnYm9vbGVhbic6XG4vLyAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzb3VyY2UgPyAndHJ1ZScgOiAnZmFsc2UnO1xuLy8gXG4vLyAgICAgICAgICAgICAgICAgY2FzZSAnb2JqZWN0Jzpcbi8vICAgICAgICAgICAgICAgICAgICAgaWYgKCFzb3VyY2UpIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuLy8gICAgICAgICAgICAgICAgICAgICB9XG4vLyBcbi8vICAgICAgICAgICAgICAgICAgICAgaWYgKHNvdXJjZSBpbnN0YW5jZW9mIEFycmF5KSB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RyaW5naWZpZXIuYXJyKHNvdXJjZSk7XG4vLyAgICAgICAgICAgICAgICAgICAgIH1cbi8vIFxuLy8gICAgICAgICAgICAgICAgICAgICBpZiAoc291cmNlIGluc3RhbmNlb2YgRGF0ZSkge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0cmluZ2lmaWVyLmRhdGUoc291cmNlKTtcbi8vICAgICAgICAgICAgICAgICAgICAgfVxuLy8gXG4vLyAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzdHJpbmdpZmllci5vYmooc291cmNlKTtcbi8vICAgICAgICAgICAgIH1cbi8vIFxuLy8gICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgU3RyaW5naWZ5OicgKyBzb3VyY2UpO1xuLy8gICAgICAgICB9XG4vLyAgICAgfTtcbi8vIH1cbi8vIC8qIGVzbGludC1lbmFibGUgbm8tdW51c2VkLXZhcnMgKi9cbi8vIC8qIGVzbGludC1lbmFibGUgZmVjcy1jYW1lbGNhc2UgKi9cbi8vIFxuLy8gLyoqXG4vLyAgKiDlsIbnu4Tku7bnvJbor5HmiJAgcmVuZGVyIOaWueazleeahCBqcyDmupDnoIFcbi8vICAqXG4vLyAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBDb21wb25lbnRDbGFzcyDnu4Tku7bnsbtcbi8vICAqIEByZXR1cm4ge3N0cmluZ31cbi8vICAqL1xuLy8gZnVuY3Rpb24gY29tcGlsZUpTU291cmNlKENvbXBvbmVudENsYXNzKSB7XG4vLyAgICAgdmFyIHNvdXJjZUJ1ZmZlciA9IG5ldyBDb21waWxlU291cmNlQnVmZmVyKCk7XG4vLyBcbi8vICAgICBzb3VyY2VCdWZmZXIuYWRkUmVuZGVyZXJTdGFydCgpO1xuLy8gICAgIHNvdXJjZUJ1ZmZlci5hZGRSYXcoXG4vLyAgICAgICAgIGNvbXBvbmVudENvbXBpbGVQcmVDb2RlLnRvU3RyaW5nKClcbi8vICAgICAgICAgICAgIC5zcGxpdCgnXFxuJylcbi8vICAgICAgICAgICAgIC5zbGljZSgxKVxuLy8gICAgICAgICAgICAgLmpvaW4oJ1xcbicpXG4vLyAgICAgICAgICAgICAucmVwbGFjZSgvXFx9XFxzKiQvLCAnJylcbi8vICAgICApO1xuLy8gXG4vLyAgICAgLy8g5YWI5Yid5aeL5YyW5Liq5a6e5L6L77yM6K6p5qih5p2/57yW6K+R5oiQIEFOb2Rl77yM5bm25LiU6IO96I635b6X5Yid5aeL5YyW5pWw5o2uXG4vLyAgICAgdmFyIGNvbXBvbmVudCA9IG5ldyBDb21wb25lbnRDbGFzcygpO1xuLy8gXG4vLyAgICAgY29tcGlsZUNvbXBvbmVudFNvdXJjZShzb3VyY2VCdWZmZXIsIGNvbXBvbmVudCk7XG4vLyAgICAgc291cmNlQnVmZmVyLmFkZFJlbmRlcmVyRW5kKCk7XG4vLyAgICAgcmV0dXJuIHNvdXJjZUJ1ZmZlci50b0NvZGUoKTtcbi8vIH1cbi8vICNbZW5kXVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBjb21waWxlSlNTb3VyY2U7XG5cbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuLy8gICAgIHZhciBuZXh0VGljayA9IHJlcXVpcmUoJy4vdXRpbC9uZXh0LXRpY2snKTtcbi8vICAgICB2YXIgaW5oZXJpdHMgPSByZXF1aXJlKCcuL3V0aWwvaW5oZXJpdHMnKTtcbi8vICAgICB2YXIgcGFyc2VUZW1wbGF0ZSA9IHJlcXVpcmUoJy4vcGFyc2VyL3BhcnNlLXRlbXBsYXRlJyk7XG4vLyAgICAgdmFyIHBhcnNlRXhwciA9IHJlcXVpcmUoJy4vcGFyc2VyL3BhcnNlLWV4cHInKTtcbi8vICAgICB2YXIgRXhwclR5cGUgPSByZXF1aXJlKCcuL3BhcnNlci9leHByLXR5cGUnKTtcbi8vICAgICB2YXIgTGlmZUN5Y2xlID0gcmVxdWlyZSgnLi92aWV3L2xpZmUtY3ljbGUnKTtcbi8vICAgICB2YXIgTm9kZVR5cGUgPSByZXF1aXJlKCcuL3ZpZXcvbm9kZS10eXBlJyk7XG4vLyAgICAgdmFyIENvbXBvbmVudCA9IHJlcXVpcmUoJy4vdmlldy9jb21wb25lbnQnKTtcbi8vICAgICB2YXIgY29tcGlsZUNvbXBvbmVudCA9IHJlcXVpcmUoJy4vdmlldy9jb21waWxlLWNvbXBvbmVudCcpO1xuLy8gICAgIHZhciBkZWZpbmVDb21wb25lbnQgPSByZXF1aXJlKCcuL3ZpZXcvZGVmaW5lLWNvbXBvbmVudCcpO1xuLy8gICAgIHZhciBlbWl0RGV2dG9vbCA9IHJlcXVpcmUoJy4vdXRpbC9lbWl0LWRldnRvb2wnKTtcbi8vICAgICB2YXIgY29tcGlsZUpTU291cmNlID0gcmVxdWlyZSgnLi92aWV3L2NvbXBpbGUtanMtc291cmNlJyk7XG4vLyAgICAgdmFyIERhdGFUeXBlcyA9IHJlcXVpcmUoJy4vdXRpbC9kYXRhLXR5cGVzJyk7XG5cblxuICAgIHZhciBzYW4gPSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBzYW7niYjmnKzlj7dcbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgICAgICovXG4gICAgICAgIHZlcnNpb246ICczLjUuMScsXG5cbiAgICAgICAgLy8gI1tiZWdpbl0gZGV2dG9vbFxuICAgICAgICAvKipcbiAgICAgICAgICog5piv5ZCm5byA5ZCv6LCD6K+V44CC5byA5ZCv6LCD6K+V5pe2IGRldnRvb2wg5Lya5bel5L2cXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAgICAgKi9cbiAgICAgICAgZGVidWc6IHRydWUsXG4gICAgICAgIC8vICNbZW5kXVxuXG4gICAgICAgIC8vICNbYmVnaW5dIHNzclxuLy8gICAgICAgICAvKipcbi8vICAgICAgICAgICog5bCG57uE5Lu257G757yW6K+R5oiQIHJlbmRlcmVyIOaWueazlVxuLy8gICAgICAgICAgKlxuLy8gICAgICAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBDb21wb25lbnRDbGFzcyDnu4Tku7bnsbtcbi8vICAgICAgICAgICogQHJldHVybiB7ZnVuY3Rpb24oT2JqZWN0KTpzdHJpbmd9XG4vLyAgICAgICAgICAqL1xuLy8gICAgICAgICBjb21waWxlVG9SZW5kZXJlcjogZnVuY3Rpb24gKENvbXBvbmVudENsYXNzKSB7XG4vLyAgICAgICAgICAgICB2YXIgcmVuZGVyZXIgPSBDb21wb25lbnRDbGFzcy5fX3NzclJlbmRlcmVyO1xuLy8gXG4vLyAgICAgICAgICAgICBpZiAoIXJlbmRlcmVyKSB7XG4vLyAgICAgICAgICAgICAgICAgdmFyIGNvZGUgPSBjb21waWxlSlNTb3VyY2UoQ29tcG9uZW50Q2xhc3MpO1xuLy8gICAgICAgICAgICAgICAgIHJlbmRlcmVyID0gKG5ldyBGdW5jdGlvbigncmV0dXJuICcgKyBjb2RlKSkoKTtcbi8vICAgICAgICAgICAgICAgICBDb21wb25lbnRDbGFzcy5fX3NzclJlbmRlcmVyID0gcmVuZGVyZXI7XG4vLyAgICAgICAgICAgICB9XG4vLyBcbi8vICAgICAgICAgICAgIHJldHVybiByZW5kZXJlcjtcbi8vICAgICAgICAgfSxcbi8vIFxuLy8gICAgICAgICAvKipcbi8vICAgICAgICAgICog5bCG57uE5Lu257G757yW6K+R5oiQIHJlbmRlcmVyIOaWueazleeahOa6kOaWh+S7tlxuLy8gICAgICAgICAgKlxuLy8gICAgICAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBDb21wb25lbnRDbGFzcyDnu4Tku7bnsbtcbi8vICAgICAgICAgICogQHJldHVybiB7c3RyaW5nfVxuLy8gICAgICAgICAgKi9cbi8vICAgICAgICAgY29tcGlsZVRvU291cmNlOiBjb21waWxlSlNTb3VyY2UsXG4gICAgICAgIC8vICNbZW5kXVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDnu4Tku7bln7rnsbtcbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUge0Z1bmN0aW9ufVxuICAgICAgICAgKi9cbiAgICAgICAgQ29tcG9uZW50OiBDb21wb25lbnQsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOWIm+W7uue7hOS7tuexu1xuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gcHJvdG8g57uE5Lu257G755qE5pa55rOV6KGoXG4gICAgICAgICAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICAgICAgICAgKi9cbiAgICAgICAgZGVmaW5lQ29tcG9uZW50OiBkZWZpbmVDb21wb25lbnQsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOe8luivkee7hOS7tuexu+OAgumihOino+aekHRlbXBsYXRl5ZKMY29tcG9uZW50c1xuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBDb21wb25lbnRDbGFzcyDnu4Tku7bnsbtcbiAgICAgICAgICovXG4gICAgICAgIGNvbXBpbGVDb21wb25lbnQ6IGNvbXBpbGVDb21wb25lbnQsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOino+aekCB0ZW1wbGF0ZVxuICAgICAgICAgKlxuICAgICAgICAgKiBAaW5uZXJcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHNvdXJjZSB0ZW1wbGF0ZSDmupDnoIFcbiAgICAgICAgICogQHJldHVybiB7QU5vZGV9XG4gICAgICAgICAqL1xuICAgICAgICBwYXJzZVRlbXBsYXRlOiBwYXJzZVRlbXBsYXRlLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDop6PmnpDooajovr7lvI9cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHNvdXJjZSDmupDnoIFcbiAgICAgICAgICogQHJldHVybiB7T2JqZWN0fVxuICAgICAgICAgKi9cbiAgICAgICAgcGFyc2VFeHByOiBwYXJzZUV4cHIsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOihqOi+vuW8j+exu+Wei+aemuS4vlxuICAgICAgICAgKlxuICAgICAgICAgKiBAY29uc3RcbiAgICAgICAgICogQHR5cGUge09iamVjdH1cbiAgICAgICAgICovXG4gICAgICAgIEV4cHJUeXBlOiBFeHByVHlwZSxcblxuICAgICAgICAvKipcbiAgICAgICAgICog55Sf5ZG95ZGo5pyfXG4gICAgICAgICAqL1xuICAgICAgICBMaWZlQ3ljbGU6IExpZmVDeWNsZSxcblxuICAgICAgICAvKipcbiAgICAgICAgICog6IqC54K557G75Z6LXG4gICAgICAgICAqXG4gICAgICAgICAqIEBjb25zdFxuICAgICAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAgICAgKi9cbiAgICAgICAgTm9kZVR5cGU6IE5vZGVUeXBlLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlnKjkuIvkuIDkuKrmm7TmlrDlkajmnJ/ov5DooYzlh73mlbBcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtGdW5jdGlvbn0gZm4g6KaB6L+Q6KGM55qE5Ye95pWwXG4gICAgICAgICAqL1xuICAgICAgICBuZXh0VGljazogbmV4dFRpY2ssXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOaehOW7uuexu+S5i+mXtOeahOe7p+aJv+WFs+ezu1xuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBzdWJDbGFzcyDlrZDnsbvlh73mlbBcbiAgICAgICAgICogQHBhcmFtIHtGdW5jdGlvbn0gc3VwZXJDbGFzcyDniLbnsbvlh73mlbBcbiAgICAgICAgICovXG4gICAgICAgIGluaGVyaXRzOiBpbmhlcml0cyxcblxuICAgICAgICAvKipcbiAgICAgICAgICogRGF0YVR5cGVzXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICAgICAqL1xuICAgICAgICBEYXRhVHlwZXM6IERhdGFUeXBlc1xuICAgIH07XG5cbiAgICAvLyBleHBvcnRcbiAgICBpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIC8vIEZvciBDb21tb25KU1xuICAgICAgICBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBzYW47XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgICAgICAvLyBGb3IgQU1EXG4gICAgICAgIGRlZmluZSgnc2FuJywgW10sIHNhbik7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyBGb3IgPHNjcmlwdCBzcmM9XCIuLi5cIlxuICAgICAgICByb290LnNhbiA9IHNhbjtcbiAgICB9XG5cbiAgICAvLyAjW2JlZ2luXSBkZXZ0b29sXG4gICAgZW1pdERldnRvb2wuc3RhcnQoc2FuKTtcbiAgICAvLyAjW2VuZF1cbn0pKHRoaXMpO1xuIiwiKGZ1bmN0aW9uIChnbG9iYWwsIHVuZGVmaW5lZCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgaWYgKGdsb2JhbC5zZXRJbW1lZGlhdGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBuZXh0SGFuZGxlID0gMTsgLy8gU3BlYyBzYXlzIGdyZWF0ZXIgdGhhbiB6ZXJvXG4gICAgdmFyIHRhc2tzQnlIYW5kbGUgPSB7fTtcbiAgICB2YXIgY3VycmVudGx5UnVubmluZ0FUYXNrID0gZmFsc2U7XG4gICAgdmFyIGRvYyA9IGdsb2JhbC5kb2N1bWVudDtcbiAgICB2YXIgcmVnaXN0ZXJJbW1lZGlhdGU7XG5cbiAgICBmdW5jdGlvbiBzZXRJbW1lZGlhdGUoY2FsbGJhY2spIHtcbiAgICAgIC8vIENhbGxiYWNrIGNhbiBlaXRoZXIgYmUgYSBmdW5jdGlvbiBvciBhIHN0cmluZ1xuICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGNhbGxiYWNrID0gbmV3IEZ1bmN0aW9uKFwiXCIgKyBjYWxsYmFjayk7XG4gICAgICB9XG4gICAgICAvLyBDb3B5IGZ1bmN0aW9uIGFyZ3VtZW50c1xuICAgICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgYXJnc1tpXSA9IGFyZ3VtZW50c1tpICsgMV07XG4gICAgICB9XG4gICAgICAvLyBTdG9yZSBhbmQgcmVnaXN0ZXIgdGhlIHRhc2tcbiAgICAgIHZhciB0YXNrID0geyBjYWxsYmFjazogY2FsbGJhY2ssIGFyZ3M6IGFyZ3MgfTtcbiAgICAgIHRhc2tzQnlIYW5kbGVbbmV4dEhhbmRsZV0gPSB0YXNrO1xuICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUobmV4dEhhbmRsZSk7XG4gICAgICByZXR1cm4gbmV4dEhhbmRsZSsrO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsZWFySW1tZWRpYXRlKGhhbmRsZSkge1xuICAgICAgICBkZWxldGUgdGFza3NCeUhhbmRsZVtoYW5kbGVdO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJ1bih0YXNrKSB7XG4gICAgICAgIHZhciBjYWxsYmFjayA9IHRhc2suY2FsbGJhY2s7XG4gICAgICAgIHZhciBhcmdzID0gdGFzay5hcmdzO1xuICAgICAgICBzd2l0Y2ggKGFyZ3MubGVuZ3RoKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgY2FsbGJhY2soYXJnc1swXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgY2FsbGJhY2soYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgY2FsbGJhY2soYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KHVuZGVmaW5lZCwgYXJncyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJ1bklmUHJlc2VudChoYW5kbGUpIHtcbiAgICAgICAgLy8gRnJvbSB0aGUgc3BlYzogXCJXYWl0IHVudGlsIGFueSBpbnZvY2F0aW9ucyBvZiB0aGlzIGFsZ29yaXRobSBzdGFydGVkIGJlZm9yZSB0aGlzIG9uZSBoYXZlIGNvbXBsZXRlZC5cIlxuICAgICAgICAvLyBTbyBpZiB3ZSdyZSBjdXJyZW50bHkgcnVubmluZyBhIHRhc2ssIHdlJ2xsIG5lZWQgdG8gZGVsYXkgdGhpcyBpbnZvY2F0aW9uLlxuICAgICAgICBpZiAoY3VycmVudGx5UnVubmluZ0FUYXNrKSB7XG4gICAgICAgICAgICAvLyBEZWxheSBieSBkb2luZyBhIHNldFRpbWVvdXQuIHNldEltbWVkaWF0ZSB3YXMgdHJpZWQgaW5zdGVhZCwgYnV0IGluIEZpcmVmb3ggNyBpdCBnZW5lcmF0ZWQgYVxuICAgICAgICAgICAgLy8gXCJ0b28gbXVjaCByZWN1cnNpb25cIiBlcnJvci5cbiAgICAgICAgICAgIHNldFRpbWVvdXQocnVuSWZQcmVzZW50LCAwLCBoYW5kbGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIHRhc2sgPSB0YXNrc0J5SGFuZGxlW2hhbmRsZV07XG4gICAgICAgICAgICBpZiAodGFzaykge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRseVJ1bm5pbmdBVGFzayA9IHRydWU7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcnVuKHRhc2spO1xuICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW1tZWRpYXRlKGhhbmRsZSk7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRseVJ1bm5pbmdBVGFzayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxOZXh0VGlja0ltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgcHJvY2Vzcy5uZXh0VGljayhmdW5jdGlvbiAoKSB7IHJ1bklmUHJlc2VudChoYW5kbGUpOyB9KTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjYW5Vc2VQb3N0TWVzc2FnZSgpIHtcbiAgICAgICAgLy8gVGhlIHRlc3QgYWdhaW5zdCBgaW1wb3J0U2NyaXB0c2AgcHJldmVudHMgdGhpcyBpbXBsZW1lbnRhdGlvbiBmcm9tIGJlaW5nIGluc3RhbGxlZCBpbnNpZGUgYSB3ZWIgd29ya2VyLFxuICAgICAgICAvLyB3aGVyZSBgZ2xvYmFsLnBvc3RNZXNzYWdlYCBtZWFucyBzb21ldGhpbmcgY29tcGxldGVseSBkaWZmZXJlbnQgYW5kIGNhbid0IGJlIHVzZWQgZm9yIHRoaXMgcHVycG9zZS5cbiAgICAgICAgaWYgKGdsb2JhbC5wb3N0TWVzc2FnZSAmJiAhZ2xvYmFsLmltcG9ydFNjcmlwdHMpIHtcbiAgICAgICAgICAgIHZhciBwb3N0TWVzc2FnZUlzQXN5bmNocm9ub3VzID0gdHJ1ZTtcbiAgICAgICAgICAgIHZhciBvbGRPbk1lc3NhZ2UgPSBnbG9iYWwub25tZXNzYWdlO1xuICAgICAgICAgICAgZ2xvYmFsLm9ubWVzc2FnZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXMgPSBmYWxzZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBnbG9iYWwucG9zdE1lc3NhZ2UoXCJcIiwgXCIqXCIpO1xuICAgICAgICAgICAgZ2xvYmFsLm9ubWVzc2FnZSA9IG9sZE9uTWVzc2FnZTtcbiAgICAgICAgICAgIHJldHVybiBwb3N0TWVzc2FnZUlzQXN5bmNocm9ub3VzO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbFBvc3RNZXNzYWdlSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIC8vIEluc3RhbGxzIGFuIGV2ZW50IGhhbmRsZXIgb24gYGdsb2JhbGAgZm9yIHRoZSBgbWVzc2FnZWAgZXZlbnQ6IHNlZVxuICAgICAgICAvLyAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuL0RPTS93aW5kb3cucG9zdE1lc3NhZ2VcbiAgICAgICAgLy8gKiBodHRwOi8vd3d3LndoYXR3Zy5vcmcvc3BlY3Mvd2ViLWFwcHMvY3VycmVudC13b3JrL211bHRpcGFnZS9jb21tcy5odG1sI2Nyb3NzRG9jdW1lbnRNZXNzYWdlc1xuXG4gICAgICAgIHZhciBtZXNzYWdlUHJlZml4ID0gXCJzZXRJbW1lZGlhdGUkXCIgKyBNYXRoLnJhbmRvbSgpICsgXCIkXCI7XG4gICAgICAgIHZhciBvbkdsb2JhbE1lc3NhZ2UgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgaWYgKGV2ZW50LnNvdXJjZSA9PT0gZ2xvYmFsICYmXG4gICAgICAgICAgICAgICAgdHlwZW9mIGV2ZW50LmRhdGEgPT09IFwic3RyaW5nXCIgJiZcbiAgICAgICAgICAgICAgICBldmVudC5kYXRhLmluZGV4T2YobWVzc2FnZVByZWZpeCkgPT09IDApIHtcbiAgICAgICAgICAgICAgICBydW5JZlByZXNlbnQoK2V2ZW50LmRhdGEuc2xpY2UobWVzc2FnZVByZWZpeC5sZW5ndGgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCBvbkdsb2JhbE1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGdsb2JhbC5hdHRhY2hFdmVudChcIm9ubWVzc2FnZVwiLCBvbkdsb2JhbE1lc3NhZ2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShtZXNzYWdlUHJlZml4ICsgaGFuZGxlLCBcIipcIik7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbE1lc3NhZ2VDaGFubmVsSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHZhciBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG4gICAgICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBoYW5kbGUgPSBldmVudC5kYXRhO1xuICAgICAgICAgICAgcnVuSWZQcmVzZW50KGhhbmRsZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIGNoYW5uZWwucG9ydDIucG9zdE1lc3NhZ2UoaGFuZGxlKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsUmVhZHlTdGF0ZUNoYW5nZUltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICB2YXIgaHRtbCA9IGRvYy5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICAvLyBDcmVhdGUgYSA8c2NyaXB0PiBlbGVtZW50OyBpdHMgcmVhZHlzdGF0ZWNoYW5nZSBldmVudCB3aWxsIGJlIGZpcmVkIGFzeW5jaHJvbm91c2x5IG9uY2UgaXQgaXMgaW5zZXJ0ZWRcbiAgICAgICAgICAgIC8vIGludG8gdGhlIGRvY3VtZW50LiBEbyBzbywgdGh1cyBxdWV1aW5nIHVwIHRoZSB0YXNrLiBSZW1lbWJlciB0byBjbGVhbiB1cCBvbmNlIGl0J3MgYmVlbiBjYWxsZWQuXG4gICAgICAgICAgICB2YXIgc2NyaXB0ID0gZG9jLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gICAgICAgICAgICBzY3JpcHQub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJ1bklmUHJlc2VudChoYW5kbGUpO1xuICAgICAgICAgICAgICAgIHNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBudWxsO1xuICAgICAgICAgICAgICAgIGh0bWwucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgICAgICAgICBzY3JpcHQgPSBudWxsO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGh0bWwuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsU2V0VGltZW91dEltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgc2V0VGltZW91dChydW5JZlByZXNlbnQsIDAsIGhhbmRsZSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gSWYgc3VwcG9ydGVkLCB3ZSBzaG91bGQgYXR0YWNoIHRvIHRoZSBwcm90b3R5cGUgb2YgZ2xvYmFsLCBzaW5jZSB0aGF0IGlzIHdoZXJlIHNldFRpbWVvdXQgZXQgYWwuIGxpdmUuXG4gICAgdmFyIGF0dGFjaFRvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mICYmIE9iamVjdC5nZXRQcm90b3R5cGVPZihnbG9iYWwpO1xuICAgIGF0dGFjaFRvID0gYXR0YWNoVG8gJiYgYXR0YWNoVG8uc2V0VGltZW91dCA/IGF0dGFjaFRvIDogZ2xvYmFsO1xuXG4gICAgLy8gRG9uJ3QgZ2V0IGZvb2xlZCBieSBlLmcuIGJyb3dzZXJpZnkgZW52aXJvbm1lbnRzLlxuICAgIGlmICh7fS50b1N0cmluZy5jYWxsKGdsb2JhbC5wcm9jZXNzKSA9PT0gXCJbb2JqZWN0IHByb2Nlc3NdXCIpIHtcbiAgICAgICAgLy8gRm9yIE5vZGUuanMgYmVmb3JlIDAuOVxuICAgICAgICBpbnN0YWxsTmV4dFRpY2tJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIGlmIChjYW5Vc2VQb3N0TWVzc2FnZSgpKSB7XG4gICAgICAgIC8vIEZvciBub24tSUUxMCBtb2Rlcm4gYnJvd3NlcnNcbiAgICAgICAgaW5zdGFsbFBvc3RNZXNzYWdlSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSBpZiAoZ2xvYmFsLk1lc3NhZ2VDaGFubmVsKSB7XG4gICAgICAgIC8vIEZvciB3ZWIgd29ya2Vycywgd2hlcmUgc3VwcG9ydGVkXG4gICAgICAgIGluc3RhbGxNZXNzYWdlQ2hhbm5lbEltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2UgaWYgKGRvYyAmJiBcIm9ucmVhZHlzdGF0ZWNoYW5nZVwiIGluIGRvYy5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpKSB7XG4gICAgICAgIC8vIEZvciBJRSA24oCTOFxuICAgICAgICBpbnN0YWxsUmVhZHlTdGF0ZUNoYW5nZUltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBGb3Igb2xkZXIgYnJvd3NlcnNcbiAgICAgICAgaW5zdGFsbFNldFRpbWVvdXRJbXBsZW1lbnRhdGlvbigpO1xuICAgIH1cblxuICAgIGF0dGFjaFRvLnNldEltbWVkaWF0ZSA9IHNldEltbWVkaWF0ZTtcbiAgICBhdHRhY2hUby5jbGVhckltbWVkaWF0ZSA9IGNsZWFySW1tZWRpYXRlO1xufSh0eXBlb2Ygc2VsZiA9PT0gXCJ1bmRlZmluZWRcIiA/IHR5cGVvZiBnbG9iYWwgPT09IFwidW5kZWZpbmVkXCIgPyB0aGlzIDogZ2xvYmFsIDogc2VsZikpO1xuIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbn07XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbih0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBwYXNzaW5nIGZ1bmN0aW9uIGluIG9wdGlvbnMsIHRoZW4gdXNlIGl0IGZvciByZXNvbHZlIFwiaGVhZFwiIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgLy8gVXNlZnVsIGZvciBTaGFkb3cgUm9vdCBzdHlsZSBpLmVcbiAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgLy8gICBpbnNlcnRJbnRvOiBmdW5jdGlvbiAoKSB7IHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvb1wiKS5zaGFkb3dSb290IH1cbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdHZhciBzdHlsZVRhcmdldCA9IGdldFRhcmdldC5jYWxsKHRoaXMsIHRhcmdldCk7XG5cdFx0XHQvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXHRcdFx0aWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG5cdFx0XHRcdFx0Ly8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuXHRcdH1cblx0XHRyZXR1cm4gbWVtb1t0YXJnZXRdXG5cdH07XG59KSgpO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09IFwiYm9vbGVhblwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuICAgICAgICBpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwib2JqZWN0XCIgJiYgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpIHtcblx0XHR2YXIgbmV4dFNpYmxpbmcgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50byArIFwiIFwiICsgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpO1xuXHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIG5leHRTaWJsaW5nKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJbU3R5bGUgTG9hZGVyXVxcblxcbiBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0JyAoJ29wdGlvbnMuaW5zZXJ0QXQnKSBmb3VuZC5cXG4gTXVzdCBiZSAndG9wJywgJ2JvdHRvbScsIG9yIE9iamVjdC5cXG4gKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyI2luc2VydGF0KVxcblwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC98XFxzKiQpL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG4iLCJ2YXIgYXBwbHkgPSBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHk7XG5cbi8vIERPTSBBUElzLCBmb3IgY29tcGxldGVuZXNzXG5cbmV4cG9ydHMuc2V0VGltZW91dCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFRpbWVvdXQoYXBwbHkuY2FsbChzZXRUaW1lb3V0LCB3aW5kb3csIGFyZ3VtZW50cyksIGNsZWFyVGltZW91dCk7XG59O1xuZXhwb3J0cy5zZXRJbnRlcnZhbCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFRpbWVvdXQoYXBwbHkuY2FsbChzZXRJbnRlcnZhbCwgd2luZG93LCBhcmd1bWVudHMpLCBjbGVhckludGVydmFsKTtcbn07XG5leHBvcnRzLmNsZWFyVGltZW91dCA9XG5leHBvcnRzLmNsZWFySW50ZXJ2YWwgPSBmdW5jdGlvbih0aW1lb3V0KSB7XG4gIGlmICh0aW1lb3V0KSB7XG4gICAgdGltZW91dC5jbG9zZSgpO1xuICB9XG59O1xuXG5mdW5jdGlvbiBUaW1lb3V0KGlkLCBjbGVhckZuKSB7XG4gIHRoaXMuX2lkID0gaWQ7XG4gIHRoaXMuX2NsZWFyRm4gPSBjbGVhckZuO1xufVxuVGltZW91dC5wcm90b3R5cGUudW5yZWYgPSBUaW1lb3V0LnByb3RvdHlwZS5yZWYgPSBmdW5jdGlvbigpIHt9O1xuVGltZW91dC5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5fY2xlYXJGbi5jYWxsKHdpbmRvdywgdGhpcy5faWQpO1xufTtcblxuLy8gRG9lcyBub3Qgc3RhcnQgdGhlIHRpbWUsIGp1c3Qgc2V0cyB1cCB0aGUgbWVtYmVycyBuZWVkZWQuXG5leHBvcnRzLmVucm9sbCA9IGZ1bmN0aW9uKGl0ZW0sIG1zZWNzKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcbiAgaXRlbS5faWRsZVRpbWVvdXQgPSBtc2Vjcztcbn07XG5cbmV4cG9ydHMudW5lbnJvbGwgPSBmdW5jdGlvbihpdGVtKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcbiAgaXRlbS5faWRsZVRpbWVvdXQgPSAtMTtcbn07XG5cbmV4cG9ydHMuX3VucmVmQWN0aXZlID0gZXhwb3J0cy5hY3RpdmUgPSBmdW5jdGlvbihpdGVtKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcblxuICB2YXIgbXNlY3MgPSBpdGVtLl9pZGxlVGltZW91dDtcbiAgaWYgKG1zZWNzID49IDApIHtcbiAgICBpdGVtLl9pZGxlVGltZW91dElkID0gc2V0VGltZW91dChmdW5jdGlvbiBvblRpbWVvdXQoKSB7XG4gICAgICBpZiAoaXRlbS5fb25UaW1lb3V0KVxuICAgICAgICBpdGVtLl9vblRpbWVvdXQoKTtcbiAgICB9LCBtc2Vjcyk7XG4gIH1cbn07XG5cbi8vIHNldGltbWVkaWF0ZSBhdHRhY2hlcyBpdHNlbGYgdG8gdGhlIGdsb2JhbCBvYmplY3RcbnJlcXVpcmUoXCJzZXRpbW1lZGlhdGVcIik7XG4vLyBPbiBzb21lIGV4b3RpYyBlbnZpcm9ubWVudHMsIGl0J3Mgbm90IGNsZWFyIHdoaWNoIG9iamVjdCBgc2V0aW1tZWlkYXRlYCB3YXNcbi8vIGFibGUgdG8gaW5zdGFsbCBvbnRvLiAgU2VhcmNoIGVhY2ggcG9zc2liaWxpdHkgaW4gdGhlIHNhbWUgb3JkZXIgYXMgdGhlXG4vLyBgc2V0aW1tZWRpYXRlYCBsaWJyYXJ5LlxuZXhwb3J0cy5zZXRJbW1lZGlhdGUgPSAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgJiYgc2VsZi5zZXRJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiICYmIGdsb2JhbC5zZXRJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICh0aGlzICYmIHRoaXMuc2V0SW1tZWRpYXRlKTtcbmV4cG9ydHMuY2xlYXJJbW1lZGlhdGUgPSAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgJiYgc2VsZi5jbGVhckltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBnbG9iYWwuY2xlYXJJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMgJiYgdGhpcy5jbGVhckltbWVkaWF0ZSk7XG4iLCJ2YXIgZztcclxuXHJcbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXHJcbmcgPSAoZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIHRoaXM7XHJcbn0pKCk7XHJcblxyXG50cnkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxyXG5cdGcgPSBnIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSB8fCAoMSwgZXZhbCkoXCJ0aGlzXCIpO1xyXG59IGNhdGNoIChlKSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcclxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcclxufVxyXG5cclxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxyXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xyXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGc7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=