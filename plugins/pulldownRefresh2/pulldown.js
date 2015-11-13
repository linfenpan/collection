define(function(require, exports, module){
    var Touch = require("../touch/touch.js");

    var PULL_DOWN_ANM = "pull-down-animate";
    var PULL_DOWN_ACTIVE = "pull-down-active";
    var PULL_ING_DOWN_EVENT = "pullingDown";
    var PULL_ED_DOWN_EVENT = "pulledDown";

    var ui = {
        init: function(selector, options){
            this.$dom = document.querySelector(selector);
            // 劫持元素的 touch 事件
            this.cupture = Touch.hold(this.$dom);

            var op = this.options = this.extend({
                // 下拉刷新的元素， elem 元素选择器, rate 触发操作的百分比|px，force 下拉的阻力
                downElem: ".pull-down",
                downRate: 1,
                downForce: .25
            }, options || {});

            // 下拉刷新的元素
            this.$down = this.$dom.querySelector(op.downElem);
            this.$downWrap = this.$down.children[0];

            this.isLock = false;

            this.bindUI();
            this.bindEvent();
        },
        bindUI: function(){
            this.$down.classList.add("pull-down");
            this.$downWrap.classList.add("pull-down-content");
        },
        bindEvent: function(){
            var cupture = this.cupture;
            var options = this.options;
            var $wrap = this.$downWrap;
            var $down = this.$down;
            var $dom = this.$dom;
            var self = this;

            // 如果锁定了，则不操作
            function checkLock(fn, res){
                return function(){
                    if(self.isLock){
                        return res === undefined ? true : res;
                    }
                    return fn.apply(this, arguments);
                }
            };
            function realHeight(height, rate){
                return rate > 1 ? rate : height * rate;
            };

            var startTop, startHeight;
            cupture.onstart = checkLock(function(p, e){
                startTop = $dom.scrollTop;
                startHeight = Math.max($wrap.offsetHeight, $wrap.clientHeight);
                $down.classList.remove(PULL_DOWN_ANM);
            });
            cupture.onmove = checkLock(function(c, e){
                if(startTop == 0 && c.y < 0 || $dom.scrollTop > 0){
                    return true;
                }
                var height = c.y * options.downForce;
                var percent = Math.min(1, height / startHeight);
                $down.style.height = height + "px";
                self.fire(PULL_ING_DOWN_EVENT, $down, percent);
            }, true);
            cupture.onend = checkLock(function(c, e){
                $down.classList.add(PULL_DOWN_ANM);

                var height = $down.clientHeight,
                    targetHeight = startHeight;
                if(realHeight(targetHeight, options.downRate) <= height){
                    $down.classList.add(PULL_DOWN_ACTIVE);
                    $down.style.height = targetHeight + "px";
                    self.isLock = true;
                    self.fire(PULL_ED_DOWN_EVENT, $down);
                }else{
                    $down.style.height = "0px";
                }
            });
        },
        restart: function(time){
            var $down = this.$down, self = this;
            $down.classList.remove(PULL_DOWN_ACTIVE);
            setTimeout(function(){
                $down.classList.remove(PULL_DOWN_ANM);
                self.isLock = false;
            }, time);
            $down.style.height = "0px";
        },
        __: {},
        fire: function(ev){
            var self = this;
            var args = [].slice.call(arguments, 1);
            var list = this.__[ev];
            list.forEach(function(fn, i){
                fn.apply(self, args);
            });
        },
        on: function(ev, fn){
            var map = this.__;
            map[ev] = map[ev] || [];
            map[ev].push(fn);
        },
        extend: function(o1, o2){
            for(var i in o2){
                if(o2.hasOwnProperty(i)){
                    o1[i] = o2[i];
                }
            }
            return o1;
        }
    };
    var PullDown = function(){
        this.init.apply(this, arguments);
    }
    PullDown.prototype = ui;

    module.exports = PullDown;
});
