/** 元素信息 */
;~function(window, Event, G, $, RightUI){

    var $root = RightUI.$pt, currentDom;

    // 设置是否可用
    function setItemEnable(enable){
        var $input = $root.find("input[bind]"), $select = $root.find("select[bind]");
        var method = enable ? "removeAttr" : "attr";
        $input[method]("readonly", true);
        $select[method]("disabled", true);
    }

    // 舞台选中元素
    Event.on(Event.ST_ITEM_SELECT, function(dom){
        setItemEnable(!!dom);
        RightUI.setValue(dom);

        currentDom = dom;
    });

    // 舞台元素被拖动
    Event.on(Event.ST_ITEM_DRAG, function(dom){
        // 只修改 x、y 位置
        RightUI.setValue(dom);
    });

    // frame 的索引更新了，禁止所有组件
    Event.on(Event.G_FRAMES_CHANGE, function(){
        setItemEnable(false);
    });

    // 信息栏目，导致样式更变
    Event.on(Event.MS_STYLE_CHANGE, function(name, value){
        if(!currentDom){return;}
        var style = currentDom.__style;
        style[name] = value;
    });

    // 更新ID
    Event.on(Event.MS_ID_CHANGE, function(newId){
        if(!currentDom){return;}
        var oldId = currentDom.getAttribute("data-id");
        if(oldId !== newId && !G.renameItem(oldId, newId)){
            alert("ID已存在，不能更换哦~");
        }
    });

    // 舞台大小更新了
    Event.on(Event.ST_INIT_AREA, function(width, height){
        RightUI.setAreaSize(width, height);
    });

    RightUI.bindUI();

}(window, Event, G, $, {
    $pt: $("#side"),
    $sw: $("#stageWidth"),
    $sh: $("#stageHeight"),
    bindUI: function(){
        var self = this, $pt = this.$pt;

		// 所有数字组件，禁止输入非数字
		$pt.on("keypress", "[type=number]", function(e){
			if(/\d|\.|-/.test(String.fromCharCode(e.keyCode))){
				return true;
			}else{
				return false;
			}
		});

		// 样式值更变
		$pt.on("input change", "input[bind!=id],select[bind]", function(){
			var key = $(this).attr("bind");
			var arr = $pt.find("[bind="+ key +"]").map(function(i, v){return v.value;});

            // 发布样式更变的事件
            window.Event.fire(window.Event.MS_STYLE_CHANGE, key, [].join.call(arr, ""));
		});

		// 更变ID，附带更变配置
		$pt.on("blur", "input[bind=id]", function(){
            // ID 更改了咯~
            window.Event.fire(window.Event.MS_ID_CHANGE, $.trim($(this).val()) );
		});
    },
    // 设 input 和 select 的值
    setValue: function(elem){
        if(!elem){return;}

		var $pt = this.$pt;
        // 从 elem 中，获取需要的内容
        var id = elem.getAttribute("data-id");
        var style = elem.__style;

        if(!style){return;}

		// 类型绑定
        $pt.find("[data-type]").each(function(){
			var $that = $(this);
            var type = $that.data("type");

			if(type == "id"){
				$that.val(id);
				return;
			}

            var val = style[type];
            if(val){
				var res = /(-?\d*\.?\d*)(px|rem|%|deg)$/.exec(val);
                $that.val(res ? res[1] : val);
				if( res ){
					$(this).siblings("[data-type="+ type + "Unit" +"]").val( res[2] );
				}
            }else{
				if($that.prop("tagName").toLowerCase() == "select"){
					$that.prop("selectedIndex", 0);
				}else{
					$that.val($that.prop("defaultValue"));
				}
			}
        });
    },
    // 舞台大小
    setAreaSize: function(width, height){
        this.$sw.val(width);
        this.$sh.val(height);
    }
});
