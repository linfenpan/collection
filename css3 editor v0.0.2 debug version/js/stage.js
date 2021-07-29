/** 舞台 */
;~function(G, $, Event){

    var $stage = $("#stage"),
        $content = $("#content");

    // 拖入元素
    Event.on(Event.ST_HAD_PLACE_IN_ITEM, function(elem){
        // 如果是图片，则需要重新计算宽度
        if(elem.tagName.toLowerCase() === "img"){
            elem.style.width = elem.width + "px";
            elem.style.height = elem.height + "px";
        };

        elem = G.addItem(elem);
        $stage.append(elem);
        $(elem).zdraggable().trigger("click");
    });

    // frame索引
    Event.on(Event.G_FRAMES_CHANGE, function(index, list){
        // 把当前列表的元素，放入当前的 画布 内
        $stage.empty();
        for(var i = 0, max = list.length; i < max; i++){
            var item = list[i];
            $(item.elem).zdraggable();
            $stage.append(item.elem);
        }
    });

    // 按下了删除键
    // 舞台缩放
    var canDelete = false, contentZoom = 1, maxZoom = 2, minZoom = .4;
    $("#content").on("mouseenter", function(){
        canDelete = true;
    }).on("mouseleave", function(){
        canDelete = false;
    });
    Event.on(Event.W_KEY_DOWN, function(code, e){
        if(canDelete && code === KEY_CODE.DELETE){
            // 删除选中元素

            var $elem = $stage.find(".active");
            if($elem.size() > 0){
                var id = $elem.data("id");
                if(window.confirm("确定删除元素:" + id)){
                    G.removeItem(id);
                    $elem.remove();

                    // 没选中当前元素
                    Event.fire(Event.ST_ITEM_SELECT);
                }
            }
        }else if(e.ctrlKey){
            switch(code){
                // 舞台缩放
                case KEY_CODE.EQ:   // =
                    // 放大舞台
                    if(contentZoom + .2 > maxZoom){
                        contentZoom = maxZoom;
                    }else{
                        contentZoom += .2;
                    }
                    $content.zdroppable("zoom", contentZoom);
                    break;
                case KEY_CODE.ST:   // -
                    if(contentZoom - .2 < minZoom){
                        contentZoom = minZoom;
                    }else{
                        contentZoom -= .2;
                    }
                    $content.zdroppable("zoom", contentZoom);
                    break;
                case KEY_CODE.ZERO:
                    contentZoom = 1;
                    $content.zdroppable("zoom", contentZoom);
                    // 聚焦到重点
                    focusCenter($stage.width(), $stage.height());
                    break;
            }
        }

    });

    // 常用舞台尺寸
    // 240 * 320
    // 320 * 480
    // 480 * 640
    // 768 * 1024
    // 1024 * 768
    // 1200 * 800

    // 舞台大小初始化
    Event.on(Event.ST_INIT_AREA, function(width, height){
        // 画布 width + height
        $stage.css({width, height, top: height});
        // 舞台 3 倍的宽高
        $content.css({
            "min-width": width * 3,
            "min-height": height * 3
        });

        // 插入的范围标志
        var $mark = $("#rangeMark");
        $mark.css({
            width: width * 3,
            height: height * 3
        });


        focusCenter(width, height);
    });
    // 聚焦到中点
    function focusCenter(width, height){
        // 应该滚动到屏幕中间
        var $ms  = $("#mainStage");
        var mw   = $ms.width(), mh = $ms.height();
        var left = Math.abs(mw - width) / 2, top = Math.abs(mh - height) / 2;

        $ms.prop("scrollTop", height - top);
        $ms.prop("scrollLeft", width - left);
    };


    // dom元素被点击、拖动
    $stage.on("click", ".item", function(){
        $(this).addClass("active").siblings(".active").removeClass("active");
        // 选中当前元素
        Event.fire(Event.ST_ITEM_SELECT, this);
        return false;
    }).on("click", function(){
        $(this).find(".active").removeClass("active");
        // 没选中当前元素
        Event.fire(Event.ST_ITEM_SELECT);
        return false;
    }).on("zdrag", ".item", function(){
        // 理论上，梳理了 位置 就 OK
        var style = this.__style;
        style.left = this.style.left;
        style.top  = this.style.top;
        Event.fire(Event.ST_ITEM_DRAG, this);
    });


}(G, $, Event);
