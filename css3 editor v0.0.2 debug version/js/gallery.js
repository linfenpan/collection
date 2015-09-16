/** 画廊 */
;~function(window, Event, $){

    var $pt         = $("#gallery"),
        $list       = $pt.find("ul"),
        $content    = $("#content"),
        $stage      = $("#stage");


    // 菜单添加新图片
    Event.on(Event.M_HAD_IMAGE_UPLOAD, function(src){
        var $li = `<li><img src="${src}" class="item" /></li>`;
        $li = $($li);

        $list.append($li);
        setDraggable($li.find(".item"));

        // 画廊添加了新的图片
        Event.fire(Event.GL_NEW_IMAGE, src);
    });


    // 让元素可拖动
    function setDraggable($elem){
        $elem.zdraggable({
        	clone: true,
            connectTo: "#content"
        });
    };

    // 元素可以拖入舞台
    $content.zdroppable({
        drop: function($elem){
            $elem.attr("data-id", G.id());
            // content 和 stage 之间，是存在一点位置的说~
            $elem.css({
                left: function(i, v){
                    return parseInt(v) - $stage.prop("offsetLeft");
                },
                top: function(i, v){
                    return parseInt(v) - $stage.prop("offsetTop");
                }
            });

            // 放入元素
            Event.fire(Event.ST_HAD_PLACE_IN_ITEM, $elem[0]);
        }
    });


    // 新建项目中
    Event.on(Event.G_NEW_PROJECT, function(){
        // 遍历 assert/img 目录，把所有图片扔出来
        var fs = G.fs, path = G.path;

        var imagePath = path.join(__dirname, G.imagePath);
        if(fs.existsSync(imagePath)){
            fs.readdir(imagePath, function(error, files){
                var basePath = G.imagePath.replace(/\\/g, "/");
                files.forEach(function(file){
                    // 新建图片
                    Event.fire(Event.M_HAD_IMAGE_UPLOAD, imagePath + "/" + file);
                });
            });
        }

    });

}(window, Event, $);
