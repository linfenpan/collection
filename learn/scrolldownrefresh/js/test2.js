var $wrapper = $('#wrapper');
var $loadMore = $('#loadmore');
var $document = $(document);
var $window = $(window);

var elLoadMore = $loadMore[0];
Transform($loadMore[0], true);

var elWrapper = $wrapper[0];
Transform($wrapper[0], true);


;(function () {
  'use strict';
  if (!Date.now)
      Date.now = function () { return new Date().getTime(); };

  var vendors = ['webkit', 'moz'];
  for (var i = 0; i < vendors.length && !window.requestAnimationFrame; ++i) {
      var vp = vendors[i];
      window.requestAnimationFrame = window[vp + 'RequestAnimationFrame'];
      window.cancelAnimationFrame = (window[vp + 'CancelAnimationFrame']
                                 || window[vp + 'CancelRequestAnimationFrame']);
  }
  if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) // iOS6 is buggy
      || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
      var lastTime = 0;
      window.requestAnimationFrame = function (callback) {
          var now = Date.now();
          var nextTime = Math.max(lastTime + 16, now);
          return setTimeout(function () { callback(lastTime = nextTime); },
                            nextTime - now);
      };
      window.cancelAnimationFrame = clearTimeout;
  }
}());

function ease(x) {
  return Math.sqrt(1 - Math.pow(x - 1, 2));
}

function startAnimate(startValue, endValue, time, onChange, onEnd) {
  var tickId = 0;
  var dv = endValue - startValue;
  var beginTime = new Date();
  var toTick = function () {
    var dt = new Date() - beginTime;
    if (dt >= time) {
      onChange && onChange(endValue);
      onEnd && onEnd(endValue);
      return;
    }
    var value = dv * ease(dt / time) + startValue;
    tickId = requestAnimationFrame(toTick);
    //cancelAnimationFrame必须在 tickID = requestAnimationFrame(toTick);的后面
    onChange && onChange(value);
  };
  toTick();

  return function cancel() {
    cancelAnimationFrame(tickId);
  };
};

function point(e){
  e = e.targetTouches && e.targetTouches[0] || e.changedTouches && e.changedTouches[0] || e;
  return { x: e.pageX, y: e.pageY };
};

function ScrollWatcher($dom, opts) {
  var self = this;

  self.$win = $(window);
  $doc = self.$doc = $dom || $(document);
  self.isDocument = $doc.is(document) || $doc.is('body,html');

  self.opts = $.extend({
    touchStart: $.noop,
    touchMove: $.noop,
    touchEnd: $.noop
  }, opts || {});

  self.init();
}

ScrollWatcher.prototype = {
  init: function() {
    var self = this;
    self.isStart = false;

    self.startScrollY = 0;
    self.maxScrollY = 0;
    self.startInfo = null;

    self.bindEvent();
  },
  bindEvent: function() {
    var $doc = this.$doc;
    $doc.on('touchstart', $.proxy(this._start, this));
    $doc.on('touchmove', $.proxy(this._move, this));
    $doc.on('touchend touchcancel', $.proxy(this._end, this));

    if (self.isDocument) {
      self._bindResize();
    }
  },
  _bindResize: function() {
    // TODO 监控 window 的更改
    self.maxScrollY = self._getMaxScrollY();
  },
  _getMaxScrollY: function() {
    var self = this;
    var $doc = self.$doc;
    if (self.isDocument) {
      return $doc.height() - self.$win.height();
    } else {
      return $doc.prop('scrollHeight') - $doc.prop('clientHeight');
    }
  },
  _getCurrentScrollY: function(e) {
    var self = this;
    var $doc = self.$doc;
    var scrollTop = $doc.scrollTop();
    
    return point(e).y - this.startInfo.y;
  },
  _start: function(e) {
    var self = this;
    self.isStart = true;
    // 记录最大滚动距离
    self.maxScrollY = self._getMaxScrollY();
    // 记录当前滚动位置
    self.startScrollY = self.$doc.getScrollTop();
    // 记录起始信息
    self.startInfo = point(e);

    // 触发 opts.touchStart 事件
    var value = self.startScrollY;
    opts.touchStart && opts.touchStart.call(this, e, value);
  },
  _move: function(e) {
    if (!this.isStart) { return; }
    // 计算当前的真正 scrollY 值
    // 触发 opts.touchMove
  },
  _end: function(e) {
    if (!this.isStart) { return; }
    this.isStart = false;

    // 计算最后的 scrollY 值
    // 触发 opts.toucheEnd
  }
};

var watcher = new ScrollWatcher();
console.log(watcher.maxScrollY);

//
// function PlayGroup(pos) {
//   this.group = [];
//   this.isLock = false;
//   this.lastPos = pos || 0;
// }
// PlayGroup.prototype = {
//   // 加到一起玩的分组
//   // opts = { member: [dom1, dom2], check: Fn(val) 是否要play, play: Fn(dom, val)[各自怎么玩] }
//   addGroup: function(opts) {
//     this.group.push(opts);
//   },
//   // pos = 0
//   run: function(args) {
//     if (this.isLock) { return; }
//     var list = this.group;
//     args = args || [];
//
//     for (var i = 0, ilen = list.length; i < ilen; i++) {
//       var data = list[i];
//       var result = data.check.apply(data, args);
//
//       if (result !== false) {
//         this._play(data, result);
//       }
//     }
//   },
//   _play: function(data, result) {
//     var member = data.member;
//     for (var m = 0, mlen = member.length; m < mlen; m++) {
//       data.play.call(data, member[m], result);
//     }
//   },
//   // 锁定 run 操作
//   lock: function(isLock) {
//     this.isLock = !!isLock;
//   },
//   // pos = 0
//   to: function(endPos, duration, onChange, onEnd) {
//     var self = this;
//     return startAnimate(this.lastPos, endPos, duration, function(pos) {
//       var list = self.group;
//       for (var i = 0, ilen = list.length; i < ilen; i++) {
//         var data = list[i];
//         self._play(data, pos);
//       }
//       onChange && onChange.call(self, pos);
//     }, function(pos) {
//       onEnd && onEnd.call(self, pos);
//     });
//   }
// };
//
// var playGroup = new PlayGroup($window.scrollTop);
//
// playGroup.addGroup({
//   member: [ elWrapper, elLoadMore ],
//   startY: 0,
//   isStart: false,
//   check: function(scrollTop, scrollHeight, pos) {
//     if (!this.isStart) {
//       this.isStart = true;
//       this.startY = pos.y;
//       console.log('reset')
//     }
//
//     if (scrollTop >= scrollHeight) {
//       return this.startY - pos.y;
//     }
//
//     return false;
//   },
//   play: function(el, y) {
//     console.log(y);
//     el.translateY = -y * 0.3;
//   }
// });

// var scrollHeight, scrollTop;
// var startY = 0;
// var isStart = false;
// var isLock = false;
//
// $document.on('touchmove', function(e) {
//   scrollHeight = $document.outerHeight() - $window.height();
//   scrollTop = $window.scrollTop();
//
//   // 是否滚动到底部，如果是，则往上拉
//   // if (scrollTop >= scrollHeight) {
//   //   var pos = point(e);
//   //   if (!isStart) {
//   //     startY = pos.y;
//   //     isStart = true;
//   //   }
//   //
//   //   var h = (startY - pos.y) * 0.4;
//   //   if (h >= 0) {
//   //     elLoadMore.translateY = -h;
//   //     elWrapper.translateY = -h;
//   //   }
//   //   e.preventDefault();
//   // } else {
//   //   var h = (startY - pos.y) * 0.4;
//   //   startAnimate(-h, -60, 1000, function(v) {
//   //     elLoadMore.translateY = v;
//   //     elWrapper.translateY = v;
//   //   });
//   // }
// });
//
// $document.on('touchend touchcancel', function(distance, e) {
//   console.log('end');
//   // if (canReset == false) {
//   //   canReset = true;
//   //   $({ val: 60 }).animate({ val: 0 }, {
//   //     step: function(v) {
//   //       elLoadMore.translateY = -v;
//   //       elWrapper.translateY = -v;
//   //     },
//   //     duration: 120
//   //   });
//   // }
// });
