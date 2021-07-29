// 事件中心
// 所有事件，应该依赖此对象存在
var Event = {
	__: {},
	_b: function(event){
		if(!this.__[event]){
			// 遇到 return false 停止执行
			// 如果 fire 过了，add的时候，执行一次
			this.__[event] = $.Callbacks("stopOnFalse memory");
		}
	},
	on: function(event, cb){
		this._b(event);
		this.__[event].add(cb);
	},
	fire: function(event){
		this._b(event);
		var cb = this.__[event];
		if(cb){
			cb.fire.apply(cb, [].slice.call(arguments, 1));
		}
	}
	// 事件列表	G:全局	M:菜单	GL:画廊	MS:详情	ST:舞台	W: window级别
	,G_CONFIG_CHANGE: "G_CONFIG_CHANGE"				// 全局项目配置更新了, #param {config} 配置对象, #param {isNullProject} 是否初始的空项目
	,G_FRAMES_CHANGE: "G_FRAMES_CHANGE"				// 帧状态更变了, #param index, #param 当前帧的数据
	,G_NEW_PROJECT: "G_NEW_PROJECT"					// 新建项目

	,GL_NEW_IMAGE: "GL_NEW_IMAGE"					// 画廊，新增图片，#param {src}

	,ST_INIT_AREA: "ST_INIT_AREA"					// 初始化舞台的区域, #param width, #param height
	,ST_HAD_PLACE_IN_ITEM: "ST_HAD_PLACE_IN_ITEM"	// 舞台，放入了元素【文本|图片】, #param {dom}
	,ST_ITEM_SELECT: "ST_ITEM_SELECT"				// 舞台的元素，被选中了, #param {dom|null} 有值，选中，没值，没选中
	,ST_ITEM_DRAG: "ST_ITEM_DRAG"					// 舞台元素被拖动了, #param {dom}

	,M_HAD_IMAGE_UPLOAD: "M_HAD_IMAGE_UPLOAD"		// 上传了图片, #param {src}
	,M_SAVE_PROJECT: "M_SAVE_PROJECT"				// 项目保存, #param {dir path}, #param {file full path}

	,MS_STYLE_CHANGE: "MS_DATA_CHANGE"				// 元素的样式更变了, #param {style attr}, #param {style value}
	,MS_ID_CHANGE: "MS_ID_CHANGE"					// 元素的ID更变了, #param {string} 新的ID

	,W_KEY_DOWN: "W_KEY_DOWN"						// 窗口有某个按键按下了, #param {int} 按下的 keyCode, #param {event}
};
