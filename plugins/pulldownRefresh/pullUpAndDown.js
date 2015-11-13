;(function($, IScroll){
    function PullDownRefresh(){
        this.init.apply(this, arguments);
    };
    PullDownRefresh.prototype = {
        init: function($el, options){
            this.$dom = $el;
            // 参数
            this.options = $.extend({
                down: ".pull-down-wrap",
                // 滚动到 100% 的高度，就触发事件
                downRate: 1,
                up: ".pull-up-wrap",
                // 上拉 到 100% 高度时，就触发事件
                upRate: 1,
                // restart 动画的时间
                restartTime: 300
            }, options || {});
            // iscroll 参数
            this.iscrollOptions = $.extend({
                click: true,
                scrollbars: true,
                fadeScrollbars: true,
                probeType: 2
            }, options ? options.iscroll : {});

            this.iscroll = new IScroll($el[0], this.iscrollOptions);
            this.$up = $el.find(this.options.up);
            this.$down = $el.find(this.options.down);

            // 操作是否锁定
            this.isLock = false;

            this.bindUI();
        },
        bindUI: function(){
            var self = this;
            var iscroll = this.iscroll;
            var $up = this.$up, $down = this.$down;
            var upRate = this.options.upRate, downRate = this.options.downRate;
            var upHeight, downHeight;

            function realDistance(height, rate){
                return rate > 1 ? rate : height * rate;
            }
            function downPercent(){
                return  iscroll.y / realDistance(downHeight, downRate);
            }
            function upPercent(){
                return  (iscroll.maxScrollY - iscroll.y) / realDistance(upHeight, upRate);
            }
            function checkLockFn(fn){
                return function(){
                    if(self.isLock){
                        return;
                    }
                    fn.apply(this, arguments);
                };
            }

            iscroll.on("scrollStart", checkLockFn(function(){
                upHeight = $up.outerHeight();
                downHeight = $down.outerHeight();
                $up.css({
                    bottom: -upHeight
                });
                $down.css({
                    top: -downHeight
                });
            }));
            // 检查是否滚动到设置的距离
            // 如果到了 设置的 距离，因为是 absolute 定位，所以，需要修正 iscroll 的 overTopY 或 overBottomY 的值
            iscroll.on("scroll", checkLockFn(function(){
                var y = iscroll.y, percent;
                if(y > 0){
                    percent = downPercent();
                    self.fire("pullingDown", $down, percent, iscroll);
                    if(percent >= 1){
                        iscroll.overTopY = downHeight;
                    }else{
                        iscroll.overTopY = 0;
                    }
                }else if(y < iscroll.maxScrollY){
                    percent = upPercent();
                    self.fire("pullingUp", $up, percent, iscroll);
                    if(percent >= 1){
                        iscroll.overBottomY = upHeight;
                    }else{
                        iscroll.overBottomY = 0;
                    }
                }
            }));

            if($up.size() > 0){
                iscroll.on("slideUp", checkLockFn(function(){
                    if(iscroll.overBottomY){
                        self.isLock = true;
                        self.fire("pulledUp", $up);
                    }
                }));
            }
            if($down.size() > 0){
                iscroll.on("slideDown", checkLockFn(function(){
                    if(iscroll.overTopY){
                        self.isLock = true;
                        self.fire("pulledDown", $down);
                    }
                }));
            }
        },
        restart: function(){
            var self = this;
            var iscroll = this.iscroll, time = this.options.restartTime;
            var y = iscroll.overBottomY ? iscroll.maxScrollY : 0;

            iscroll.overBottomY = iscroll.overTopY = 0;
            iscroll.refresh(time);
            setTimeout(function(){
                self.isLock = false;
            }, time);
        },
        __: {},
        fire: function(ev){
            var self = this;
            var args = [].slice.call(arguments, 1);
            var list = this.__[ev];
            $(list).each(function(i, fn){
                fn.apply(self, args);
            });
        },
        on: function(ev, fn){
            var map = this.__;
            map[ev] = map[ev] || [];
            map[ev].push(fn);
        }
    };
    $.fn.extend({
        "pullUpAndDown": function(options){
            return new PullDownRefresh(this, options);;
        }
    });
})($, window.IScroll);