var TouchHolder = (function(){
    var ui = {}, isTouchMode = /mobile/i.test(window.navigator.userAgent);

    // 对应的事件
    var event = {
        start: isTouchMode ? "touchstart" : "mousedown",
        move: isTouchMode ? "touchmove" : "mousemove",
        end: isTouchMode ? "touchend touchcancel" : "mouseup mouseleave",
        needCatch: "click"
    };

    // 当前坐标
    function point(e){
        e = e.targetTouches && e.targetTouches[0] || e.changedTouches && e.changedTouches[0] || e;
        return {x: e.pageX, y: e.pageY};
    };

    // 持有某个元素
    ui.hold = function(elem){
        elem = $(elem);
        var holder = {
            start: Empty,   // start/end -> {x:, y:, spaceX: 移动了x距离, spaceY: 移动了y距离}
            end: Empty,
            onStart: Empty,
            onMove: Empty,
            onEnd: Empty,
        };

        var eventsHandler = {
            onStart: function(e){
                var startPoint = holder.start = point(e);
                startPoint.spaceX = startPoint.spaceY = 0;

                holder.end = Empty;
                holder.onStart && holder.onStart(startPoint, e);
            },
            onMove: function(e){
                if(holder.start){
                    var diff = eventsHandler.calcDiffAfterStart(e);
                    var callbackReturnFalse = !(holder.onMove && holder.onMove(diff, e));
                    callbackReturnFalse && e.preventDefault();
                }
            },
            onEnd: function(e){
                if(holder.start){
                    var diff = holder.end = eventsHandler.calcDiffAfterStart(e);
                    holder.start = null;
                    holder.onEnd && holder.onEnd(diff, e);
                }
            },
            onPrevent: function(e){
                var diff = holder.end || {};
                if(Math.abs(diff.spaceX) > 1){
                    e.preventDefault();
                    e.stopPropagation();
                };
            },
            // 计算开始之后，移动的差值
            calcDiffAfterStart: function(e){
                var currentPoint = point(e);
                currentPoint.spaceX = currentPoint.x - holder.start.x;
                currentPoint.spaceY = currentPoint.y - holder.start.y;
                return currentPoint;
            }
        };

        addListener(elem, event.start, eventsHandler.onStart);
        addListener(elem, event.move, eventsHandler.onMove);
        addListener(elem, event.end, eventsHandler.onEnd);
        !isTouchMode && addListener(elem, event.needCatch, eventsHandler.onPrevent, true);

        holder.destroy = function() {
            removeListener(elem, event.start, eventsHandler.onStart);
            removeListener(elem, event.move, eventsHandler.onMove);
            removeListener(elem, event.end, eventsHandler.onEnd);
            !isTouchMode && removeListener(elem, event.needCatch, eventsHandler.onPrevent, true);
        };

        return holder;
    };

    return ui;
})();
