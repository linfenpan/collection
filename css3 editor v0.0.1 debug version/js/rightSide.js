// 右侧栏控制
var RightSide = {
	// 父亲
	$pt: $("#side"),
	// 当前操作 item
	curItem: {},
	// 父亲元素
	parentItem: {},
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

		// 当值更改的时候，反馈到 item 上
		// 在 frameList 中，已经做了 item 更改，自动更新 elem.style 的操作了
		$pt.on("input change", "input[bind!=id],select[bind]", function(){
			var key = $(this).attr("bind");
			var arr = $pt.find("[bind="+ key +"]").map(function(i, v){return v.value;});
			self.curItem[key] = [].join.call(arr, "");
		});
		// 更变ID，附带更变配置
		$pt.on("blur", "input[bind=id]", function(){
			var oldId = self.parentItem.id, nowId = $(this).val().trim();
			if(InitCompile.replaceItemId(oldId, nowId)){
				$(InitFrame.stage).find("[data-id="+ oldId +"]").attr("data-id", nowId);
			}else if(oldId != nowId){
				if(window.confirm("ID有冲突，是否合并冲突对象?")){
					// 修正 self.parentItem 的数据
					$.extend(self.parentItem, InitCompile.combineItems(oldId, nowId));
				}else{
					$(this).val(oldId);
				}
			}
		});
	},
    bindEvent: function(){
		var $root = this.$pt.find(".subSet"),
			$input = $root.find("input"),
			$select = $root.find("select");

		// 元素被选中，元素被拖动，都需要更新右侧面板
        GC.on(EVENT.STAGE_ITEM_SELECT + " " + EVENT.STAGE_ITEM_DRAG, function(elem, compile, item){
			$input.removeAttr("readonly");
			$select.removeAttr("disabled");

			this.curItem = compile;
			this.parentItem = item.parent;

            this.initSideInput(compile, item);
        }.bind(this));
		// 元素没有被选中
		GC.on(EVENT.STAGE_ITEM_NONE_SELECT, function(){
			$input.attr("readonly", true);
			$select.attr("disabled", true);
		}.bind(this));
    },
    // 初始化 side 的input的值
    initSideInput: function(compile, item){
		var $pt = this.$pt;
		// 类型绑定
        $pt.find("[data-type]").each(function(){
			var $that = $(this);
            var type = $that.data("type"), val = compile[type];

			if(type == "id"){
				$that.val(item.parent.id);
				return;
			}

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
	init: function(){
        this.bindUI();
        this.bindEvent();
		// 默认没选中
		GC.fire(EVENT.STAGE_ITEM_NONE_SELECT);
	}
};

RightSide.init();
