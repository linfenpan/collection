
;!function(window, $){

var $pt = $("#gallery"), $list = $pt.find("ul");
var tmp = '<li><img src="${src}" class="item" /></li>';


// 工具栏新增图片
toolBar.on(EVENT_TOOL_BAR_NEW_IMAGE, function(src){
    var $li = window.Util.format(tmp, {src});
    $li = $($li);

    $list.append($li);
    setDraggable($li.find(".item"));
});
// 新建项目
toolBar.on(EVENT_TOOL_BAR_NEW_PRO, function(){
    $list.empty();
});


// 让元素可拖动
function setDraggable($elem){
    $elem.draggable({
    	helper: "clone",
    	zIndex: 100
    });
}

// TODO 临时性的，当前所有元素，可拖动..
setDraggable($("#gallery .item"));

}(window, $);
