var toolBar = GC;
var EVENT_TOOL_BAR_NEW_IMAGE = "EVENT_TOOL_BAR_NEW_IMAGE";  // 新增图片
var EVENT_TOOL_BAR_SAVE_PRO = "EVENT_TOOL_BAR_SAVE_PRO";    // 保存项目
var EVENT_TOOL_BAR_NEW_PRO = "EVENT_TOOL_BAR_NEW_PRO";    // 新建项目
var EVENT_TOOL_BAR_OPEN_PRO = "EVENT_TOOL_BAR_OPEN_PRO";   // 打开现有项目

;!function(window, $){

// 调用后台的桥梁
var fs = require("fs-extra"), path = require("path");

// 工具栏，操作的舞台
var $bar = $("#tools"), $stage = $("#content");
var stateOffset = $stage.offset();

var $body = $("body");

// 监听 cmd 触发
$bar.on("click", ".item", function(){
    var cmd = $(this).data("cmd");

    // 取消上一条命令
    $bar.trigger("cancelPreCmd");

    $bar.trigger(cmd);
    // console.log(11);
    return false;
});
$body.on("click", function(){
    // 取消上一条命令
    $bar.trigger("cancelPreCmd");
});

// 监听保存
var savePath = "";
$bar.on("save", function(){
    if(!savePath){
        window.Util.saveDialog(function(filePath){
            savePath = filePath;
            toolBar.fire(EVENT_TOOL_BAR_SAVE_PRO, filePath, fs, path);
        });
    }else{
        toolBar.fire(EVENT_TOOL_BAR_SAVE_PRO, savePath, fs, path);
    }
});
// 新建项目时，需要保存之前的项目
$bar.on("beforeNewProject", function(){
    if(savePath){
        toolBar.fire(EVENT_TOOL_BAR_SAVE_PRO, savePath, fs, path);
        $bar.trigger("newProject");
        savePath = "";
    }else{
        if(window.confirm("是否保存当前项目?")){
            $bar.trigger("save");
        }else{
            $bar.trigger("newProject");
            savePath = "";
        }
    }
});

// 监听插入图片
var imageId = 1;
$bar.on("uploadImage", function(){
    window.Util.imageSelectDialog(function(list){
        if(list){
            list.forEach(function(str){
                var name = "image_" + imageId++;
                name += path.extname(str);
                toolBar.fire(EVENT_TOOL_BAR_NEW_IMAGE, Util.copyToTmp(str, "img", name));
            });
        }
    });
});


// 新建项目
$bar.on("newProject", function(){
    toolBar.fire(EVENT_TOOL_BAR_NEW_PRO);
});

// 打开现有项目
$bar.on("openProject", function(){
    if(savePath){
        toolBar.fire(EVENT_TOOL_BAR_SAVE_PRO, savePath, fs, path);
        $bar.trigger("_selectProject");
    }else{
        if(window.confirm("是否保存当前项目?")){
            $bar.trigger("save");
        }else{
            $bar.trigger("_selectProject");
        }
    }
});
// 打开现有的东西
$bar.on("_selectProject", function(){
    savePath = "";
    Util.openProject(function(filePath, fs, path){
        var root = path.dirname(filePath);
        // 把路径和配置文件发布出去
        savePath = root;
        toolBar.fire(EVENT_TOOL_BAR_OPEN_PRO, filePath, root, fs, path);

    });
});


// 监听插入文字
$bar.on("insertText", function(){
    $stage.addClass("textInsert");
    var event = "click.text.insert", $textarea;

    // 取消命令
    $body.one("cancelPreCmd", remove);

    function remove(){
        $stage.off(event).removeClass("textInsert");
    }
    function add(){
        $stage.on(event, function(e){
            // 通过冒泡移除绑定
            // remove();
            addTextArea(e);
        });
    }
    function addTextArea(e){
        // 插入输入框
        $textarea = $("<textarea class='textInsertTextArea'></textarea>");
        $textarea.css({
            position: "absolute",
            top: e.clientY,
            left: e.clientX,
            "min-width": "20px"
        });
        $textarea.blur(function(){
            var val = $(this).val().trim();
            if(val){
                var offset = $textarea.offset(), pOffset = $("#stage").offset();
                var top = offset.top - pOffset.top, left = offset.left - pOffset.left;
                // 插入到真正的舞台
                InitFrame.addTextToCurrentFrame(val, Util.generateId(), $.extend(Util.getDefStyle(), {
                    top: top + "px", left: left + "px"
                }));
            }
            $(this).remove();
        });
        $stage.append($textarea);
        $textarea.focus();
    }
    add();
});


}(window, $);
