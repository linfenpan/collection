// 移动端的切换
// @NOTICE 这是个失败的作品，不要使用！！！！
;(function(window){
    function noop(){ };
    function on(el, ev, fn, isBu){
        var arr = ev.split(" ");
        arr.forEach(function(val, index){
            el.addEventListener(val, fn, isBu || false);
        });
    };
    function each(obj, fn){
        for (var i in obj) {
            if (obj.hasOwnProperty(i)) {
                fn.call(obj, obj[i], i, obj);
            }
        }
    };
    function extend(source, target){
        each(target, function(value, key){
            source[key] = value;
        });
        return source;
    };
    function $(selector){
        return document.querySelector(selector);
    };
    function prefix(key) {
        var cssPrefix = "";
        var style = document.documentElement.style;
        var list = ["webkitT", "MozT", "msT", "oT", "t"];
        for (var i = 0, max = list.length; i < max; i++) {
            var item = list[i];
            if (style.hasOwnProperty(item + "ransform")) {
                cssPrefix = item.slice(0, -1);
                break;
            }
        }
        prefix = function(key){
            if (style.hasOwnProperty(key) || !cssPrefix) {
                return key;
            }
            return cssPrefix + key.slice(0, 1).toUpperCase() + key.slice(1);
        }
        return prefix(key);
    };
    function css(elem, cssObject){
        var style = elem.style;
        each(cssObject, function(value, key){
            style[prefix(key)] = value;
        });
    };
    function getTranslateX(elem){
        var x = elem.style[prefix("transform")];
        x = x && parseInt(x.match(/translateX\((.*?)\)/)[1]) || 0;
        return x;
    };

    // 封装 Touch 代理
    var Touch = (function(window){
        var ui = {}, isTouch = /mobile/i.test(window.navigator.userAgent);
        // 对应的事件
        var event = {
            start: isTouch ? "touchstart" : "mousedown",
            move: isTouch ? "touchmove" : "mousemove",
            end: isTouch ? "touchend touchcancel" : "mouseup mouseleave",
            needCatch: "click"
        };

        // 当前坐标
        function point(e){
            e = e.targetTouches && e.targetTouches[0] || e.changedTouches && e.changedTouches[0] || e;
            return {x: e.pageX, y: e.pageY};
        };

        // 持有某个元素
        ui.hold = function(el){
            el = typeof el === "string" ? $(el) : el;
            var ac = {
                onStart: function(e){
                    var cr = ac.start = point(e);
                    ac.end = null;
                    ac.onstart && ac.onstart(cr, e);
                },
                onMove: function(e){
                    if(ac.start){
                        var cr = ac.cr(e);
                        if(!(ac.onmove && ac.onmove(cr, e))){
                            e.preventDefault();
                        }
                    }
                },
                onEnd: function(e){
                    if(ac.start){
                        var cr = ac.end = ac.cr(e);
                        ac.start = null;
                        ac.onend && ac.onend(cr, e);
                    }
                },
                onPrevent: function(e){
                    var cr = ac.end || {};
                    if(Math.abs(cr.x) > 1){
                        e.preventDefault();
                        e.stopPropagation();
                    };
                },
                cr: function(e){
                    var cr = point(e);
                    cr.x -= ac.start.x;
                    cr.y -= ac.start.y;
                    return cr;
                }
            };
            on(el, event.start, ac.onStart);
            on(el, event.move, ac.onMove);
            on(el, event.end, ac.onEnd);
            !isTouch && on(el, event.needCatch, ac.onPrevent, true);
            return ac;
        };

        return ui;
    })(window);


    // 左右切换
    function Swipe(elem, options) {
        this.eRoot = elem;
        this.eWrap = elem.querySelector(".swipe-wrap");
        this.options = extend({
            precent: .6,          // 出现的百分比
            elastic: 0.3,        // 弹力
            visibleCount: 3,     // 可见元素数目
            nextDistance: 0.2,   // 下一个的百分比
            autoTime: 3000,      // 需要自动切换吗
            autoStart: true,     // 自动调用 start
            slideTime: 300,      // 切换时间
            index: 0,            // 默认索引
            callback: function(toIndex){  },       // 动画切换后的回调
            repeat: true         // 是否可以循环滚动，现在有BUG。。
        }, options || {});
        this.init();
    };
    Swipe.prototype = {
        rootWidth: null,
        itemWidth: null,
        options: null,
        size: null,
        eRoot: null,
        eWrap: null,
        eChildren: null,
        init: function(){
            var options = this.options;
            var index = this.index = options.index;
            this.reset(options);

            css(this.eRoot, {visibility: "visible"});


            this.setIndex(index);

            this.startTimer();

            this.init = noop;
        },
        bindUI: function(){
            if (this.size < 3) {
                return;
            }
            // 持有元素的 移动事件
            var self = this, options = this.options;
            var holder = this.holder = Touch.hold(this.eRoot);

            holder.onstart = function(startPoint, e){
                each(self.eChildren, function(elem){
                    if (elem.dataset) {
                        elem.dataset.x = getTranslateX(elem);
                    }
                });
            };

            holder.onmove = function(distance, e){
                self.stopTimer();
                if(!options.repeat && ((self.index <= 0 && distance.x > 0) || (self.index >= self.size - 1 && distance.x < 0))){
                    self.move(distance.x * options.elastic);
                } else {
                    self.move(distance.x);
                }
            };

            holder.onend = function(distance, e){
                var nextDistance = options.nextDistance < 1 ? options.nextDistance * self.itemWidth : nextDistance;
                if (Math.abs(distance.x) < nextDistance) {
                    self.move(0, options.slideTime);
                } else {
                    var index = self.index;
                    self.setIndex(distance.x >= 0 ? (index - 1) : (index + 1), true);
                }
                self.startTimer();
            };

            on(window, "resize", function(){
                self.resize();
            });

            this.bindUI = noop;
        },
        next: function(){
            this.setIndex(this.index + 1, true);
        },
        prev: function(){
            this.setIndex(this.index - 1, true);
        },
        // 修正索引
        fixIndex: function(index){
            var options = this.options;
            var size = this.size;
            if (index < 0) {
                index = options.repeat ? (size + index) : 0;
            } else if (index >= size){
                index = options.repeat ? (index - size) : (size - 1);
            }
            return index;
        },
        setIndex: function(index, startAnimate){
            var self = this;
            var rootWidth = this.rootWidth;
            var itemWidth = this.itemWidth;
            var options = this.options;
            var eChildren = this.eChildren;
            var eList = [];

            // 修正索引
            index = this.fixIndex(index);
            var isNext = self.index == 0 ? index > 0 : self.index == (self.size - 1) ? index != (self.size - 1) : index > self.index;

            var eCur = eChildren[this.fixIndex(index)];
            var ePrev = eChildren[this.fixIndex(index - 1)],
                eNext = eChildren[this.fixIndex(index + 1)];

            var visibleWidth = (rootWidth - itemWidth) / 2;

            function getElemMoveX(elem, moveX){
                var index = elem.dataset.index;
                return -index * itemWidth + moveX;
            };

            var time = startAnimate ? options.slideTime : 0;
            var half = Math.ceil(options.visibleCount / 2) + 1;
            var x;

            // 修正之前的所有元素
            var prevIdx = 1;
            while (prevIdx <= half) {
                ePrev = eChildren[this.fixIndex(index - prevIdx)];
                x = getElemMoveX(ePrev, visibleWidth - itemWidth * prevIdx);
                css(ePrev, {transform: "translateX("+ x +"px)", transitionDuration: (prevIdx <= (isNext ? 2 : 1) ? (time || 0) : 0) + "ms"});
                prevIdx++;
            }

            x = getElemMoveX(eCur, visibleWidth);
            css(eCur, {transform: "translateX("+ x +"px)", transitionDuration: (time || 0) + "ms"});
            eCur.dataset.x = x;

            // 修正之后的所有元素
            var nextIdx = 1;
            while (nextIdx <= half) {
                eNext = eChildren[this.fixIndex(index + nextIdx)];
                x = getElemMoveX(eNext, visibleWidth + itemWidth * nextIdx);
                css(eNext, {transform: "translateX("+ x +"px)", transitionDuration: (nextIdx <= 2 ? (time || 0) : 0) + "ms"});
                nextIdx++;
            }

            this.index = index;
            options.callback && options.callback(this.index);
        },
        move: function(moveDistance, time){
            each(this.eChildren, function(elem){
                if (elem.style) {
                    css(elem, {transform: "translateX("+ (+elem.dataset.x + moveDistance) +"px)"});
                    css(elem, {transitionDuration: (time || 0) + "ms"});
                }
            });
        },
        reset: function(options){
            this.eChildren = this.eRoot.querySelectorAll(".swipe-wrap > div");
            this.size = this.eChildren.length;
            this.rootWidth = this.eRoot.clientWidth
            var width = this.itemWidth = options.precent * this.rootWidth;

            css(this.eWrap, {width: this.size * width + "px"});
            each(this.eChildren, function(elem, index){
                if (elem.dataset) {
                    elem.dataset.index = index;
                    css(elem, {width: width + "px"});
                }
            });
            this.bindUI();
        },
        resize: function(){
            this.reset(this.options);
        },
        startTimer: function(){
            this.stopTimer();
            var self = this;
            this.timer = setTimeout(function(){
                self.next();
                self.startTimer();
            }, this.options.autoTime);
        },
        stopTimer: function(){
            clearTimeout(this.timer);
        }
    };

    Swipe.Touch = Touch;
    window.Swipe = Swipe;
})(window);
