/** 底部的帧 */
;~function(window, G, Event, $){

    var $root = $("#frames");

    // 索引更变了
    // list = [{elem:, style:, parent: {type:, id:, content:, frames:{}}}]
    Event.on(Event.G_FRAMES_CHANGE, function(index, list){
        // 生成帧列表
        var html = "";
        for(var i = 0, max = G.dataList.length; i < max; i++){
            html += `<li class="item">${i + 1}</li>`;
        }
        $root.find(".list").html(html).find(".item").eq(index).addClass("active");
    });


    // 点击事件
    $root.on("click", ".list .item", function(){
        G.setFrameIndex($(this).index());
    }).on("click", ".add", function(){
        G.newFrame();
    });



}(window, G, Event, $);
