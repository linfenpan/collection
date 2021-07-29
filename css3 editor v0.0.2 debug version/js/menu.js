/** 顶部菜单 */
;~function(window, G, Event, $){

    var fs = G.fs, path = G.path, dialog = G.dialog;

    var $menu = $("#tools"), $stage = $("#content");
    var $body = $("body");

    // 菜单点击，把相关的内置事件 data-cmd，发布出去
    $menu.on("click", ".item", function(){
        var cmd = $(this).data("cmd");
        $menu.trigger(cmd);
    });

    // 项目保存
    var savePath = G.search.path || "";
    $menu.on("save", function(e){
        if(!savePath){
            dialog.showSaveDialog({
                title: "保存项目",
                defaultPath: "test." + G.project.ext,
                filters: [
                    {name: "css3Animation", extensions: [G.project.ext]}
                ]
            }, function(file){
                if(file){
                    if(fs.existsSync(file)){
                        // 文件已经存在，则使用当前目录
                        // 窗口自己就会询问了，不多此一举
                        // if(window.confirm("是否覆盖原项目?")){
                            var dir = path.dirname(file);
                            var fullPath = file;
                            savePath = fullPath;

                            Event.fire(Event.M_SAVE_PROJECT, dir, fullPath);
                        // }
                    }else{
                        // 第1次保存，修复路径 d://yyy/zzz/xxx.c3an -->  d://yyy/zzz/xxx/project.c3an
                        var dir = path.join( path.dirname(file), path.basename(file).slice(0, -(G.project.ext.length + 1)) );
                        var fullPath = path.join(dir, "project.c3an");
                        // 确保目录存在
                        fs.ensureDirSync(dir);
                        savePath = fullPath;

                        Event.fire(Event.M_SAVE_PROJECT, dir, fullPath);
                    }
                }
            });
        }else{
            Event.fire(Event.M_SAVE_PROJECT, path.dirname(savePath), savePath);
        }
    });

        // 设置保存路径
    Event.on(Event.M_SAVE_PROJECT, function(dir, fullPath){
        savePath = fullPath;
        console.log(dir, fullPath);
    });

        // 监听ctrl + s
    Event.on(Event.W_KEY_DOWN, function(keyCode, e){
        if(keyCode === KEY_CODE.S && e.ctrlKey){
            $menu.trigger("save");
        }
    });
    // END 项目保存

    // 返回主界面
    $menu.on("returnToStart", function(){
        if(!savePath){
            if(window.confirm("是否保存现有项目?")){
                $menu.trigger("save");
            }
        }else{
            $menu.trigger("save");
        }
        // 切换到新建项目的链接里
        function gotoStart(){
            window.location.href = "./start.html";
        }
        Event.on(Event.M_SAVE_PROJECT, gotoStart);
    });
    // END 返回主界面

    // 图片上传
    $menu.on("uploadImage", function(){
        dialog.showOpenDialog({
            filters: [
                {name: "Images", extensions: ["jpg", "png", "gif"]}
            ]
        }, function(file){
            if(file){
                file = file[0];
                Event.fire(Event.M_HAD_IMAGE_UPLOAD, G.save.assert.image(file));
            }
        });
    });
    // END 图片上传


    // 插入文字
    $menu.on("insertText", function(){
        $stage.addClass("textInsert");
        var event = "click.text.insert", $textarea;

        // 取消命令
        $body.one("cancelInsertTextCmd", remove);
        // 避免冒泡立刻触发
        setTimeout(function(){
            $body.one("click", function(){
                $body.trigger("cancelInsertTextCmd");
            });
        }, 1);

        function remove(){
            $stage.off(event).removeClass("textInsert");
        }
        function addTextArea(e){
            // 插入输入框
            var $textarea = $("<textarea class='textInsertTextArea'></textarea>");
            var zoom = $stage.prop("style").zoom || 1;
            $textarea.css({
                position: "absolute",
                top: e.offsetY / zoom,
                left: e.offsetX / zoom,
                "min-width": "20px"
            });
            console.log(e);
            $textarea.blur(function(){
                var val = $(this).val().trim();
                if(val){
                    var offset = $textarea.offset(), pOffset = $("#stage").offset();
                    var top = offset.top - pOffset.top, left = offset.left - pOffset.left;
                    var width = $textarea.width(), height = $textarea.height();

                    var elem = G.createElement({
                        id: G.id(),
                        content: val,
                        type: "text"
                    }, {
                        top: top + "px", left: left + "px", width: width + "px", height: height + "px"
                    });

                    // 发布最新元素
                    Event.fire(Event.ST_HAD_PLACE_IN_ITEM, elem);
                }
                $(this).remove();
            });

            $stage.append($textarea);
            $textarea.focus();
        }
        $stage.on(event, addTextArea);
    });
    // END 插入文字

}(window, G, Event, $);
