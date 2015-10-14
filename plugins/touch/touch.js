define(function(require, exports, module){
    var ui = {}, noop = function(){}, isTouch = /mobile/i.test(window.navigator.userAgent);
    // 对应的事件
    var event = {
        start: isTouch ? "touchstart" : "mousedown",
        move: isTouch ? "touchmove" : "mousemove",
        end: isTouch ? "touchend touchcancel" : "mouseup mouseleave"
    };

    // 绑定事件
    function on(el, ev, fn){
        var arr = ev.split(" ");
        arr.forEach(function(val, index){
            el.addEventListener(val, fn, false);
        });
    };

    // 当前坐标
    function point(e){
        e = e.targetTouches && e.targetTouches[0] || e.changedTouches && e.changedTouches[0] || e;
        return {x: e.pageX, y: e.pageY};
    };

    // 持有某个元素
    ui.hold = function(el){
        el = typeof el === "string" ? document.querySelector(el) : el;
        var ac = {
            onStart: function(e){
                var cr = ac.start = point(e);
                ac.onstart && ac.onstart(cr, e);
            },
            onMove: function(e){
                if(ac.start){
                    var cr = ac.cr(e);
                    e.preventDefault();
                    ac.onmove && ac.onmove(cr, e);
                }
            },
            onEnd: function(e){
                if(ac.start){
                    var cr = ac.cr(e);
                    ac.start = null;
                    ac.onend && ac.onend(cr, e);
                }
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
        return ac;
    };

    module.exports = ui;
});
