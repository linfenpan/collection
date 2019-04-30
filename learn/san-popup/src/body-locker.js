'use strict';

var doc = window.document;

// 检测是否支持 passive 事件
var hasPassiveEvents = false;
if (typeof window !== 'undefined') {
  try {
    // 检测是否支持 passive 事件
    var hasPassiveEvents = false;
    if (typeof window !== 'undefined') {
      var passiveTestOptions = {};
      Object.defineProperty(passiveTestOptions, 'passive', {
        get: function() {
          hasPassiveEvents = true;
          return undefined;
        }
      });
      window.addEventListener('testPassive', null, passiveTestOptions);
      window.removeEventListener('testPassive', null, passiveTestOptions);
    }
  } catch (e) {
    // ie7 ~ 8 会出错的，不理它
  }
}

// 获取 eventListener 的第三个参数
var getEventOptions = function() {
  return hasPassiveEvents ? { passive: false } : undefined;
};


// 阻止默认事件
var preventDefault = function(rawEvent) {
  var e = rawEvent || window.event;
  // 多点触碰，一般是手势缩放啦，放过它吧
  if (e.touches.length > 1) return true;
  // 需要看看此事件是否可取消，只有可取消才阻止默认事件
  if (e.preventDefault && e.cancelable) e.preventDefault();
  return false;
};


// 获取元素的样式表
var getStyle = function(elem, key) {
  var map = getComputedStyle(elem);
  return key ? map[key] : map;
};


// 当前滚动中的元素
var currentScrollElement = null;
// 在 touchstart 时，初始的 clientY 值
var initialClientY = 0;

// 劫持第一个点击的元素
var captchTouch = function(event) {
  var target = event.target;
  // 找寻第一个有滚动轴的元素
  // 如果这个滚动的元素，是 body 或者 html，则当作没有这个元素
  var parent = target;
  currentScrollElement = null;
  initialClientY = 0;

  while (parent) {
    var tagName = parent.tagName.toLowerCase();
    if (tagName == 'body' || tagName == 'html') {
      break;
    }

    var scroll = getStyle(parent, 'overflowY');
    if (scroll == 'scroll' || scroll == 'auto') {
      currentScrollElement = parent;
      initialClientY = event.targetTouches[0].clientY;
      break;
    }
    parent = parent.parentElement || parent.parentNode;
  }
};


// https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight#Problems_and_solutions
var isTargetElementTotallyScrolled = function(targetElement) {
  return targetElement ? targetElement.scrollHeight - targetElement.scrollTop <= targetElement.clientHeight : false;
}

// 处理滚动事件
var handleScroll = function(event) {
  if (event.touches.length === 1) {
    if (currentScrollElement) {
      var clientY = event.targetTouches[0].clientY - initialClientY;
      var targetElement = currentScrollElement;

      // 元素处于最顶部
      if (targetElement && targetElement.scrollTop === 0 && clientY > 0) {
        return preventDefault(event);
      }

      // 元素处于可滚动的最底部了
      if (isTargetElementTotallyScrolled(targetElement) && clientY < 0) {
        return preventDefault(event);
      }

      event.stopPropagation();
      return true;
    }
    // 阻止最外层的滚动
    preventDefault(event);
  }
  // nothing~
};

var lockList = [];

var lock = function(id) {
  if (lockList.length <= 0) {
    doc.addEventListener('touchstart', captchTouch, getEventOptions());
    doc.addEventListener('touchmove', handleScroll, getEventOptions());
  }
  if (lockList.indexOf(id) < 0) {
    lockList.push(id);
  }
};

var unlock = function(id) {
  var index = lockList.indexOf(id);
  if (index >= 0) {
    lockList.splice(index, 1);
  }

  if (lockList.length <= 0) {
    doc.removeEventListener('touchstart', captchTouch, getEventOptions());
    doc.removeEventListener('touchmove', handleScroll, getEventOptions());
  }
};


var BodyLockerId = 1;
function BodyLocker() {
  // 当前层次
  this.layerIndex = 0;
  this.id = BodyLockerId++;
}

BodyLocker.prototype = {
  clear: function() {
    this.layerIndex = 0;
    unlock(this.id);
  },

  lock: function() {
    if (this.layerIndex == 0) {
      lock(this.id);
    }
    this.layerIndex += 1;
  },

  unlock: function() {
    this.layerIndex = Math.max(this.layerIndex - 1, 0);
    if (this.layerIndex <= 0) {
      unlock(this.id);
    }
  }
}

export default BodyLocker;