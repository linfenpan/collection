// 拿到配置，然后，初始化第1帧
var _InitFrame = {
	// 帧配置列表
	list: [],
	// 当前索引
	index: -1,
	// 初始化某一帧
	set: function(index){
		index = index < 0 ? 0 : index;
		var list = this.list[index];
		if( !list ){return false;}

		this.clearStage();
		// list 的数据 [ [frame1], [frame2] ], frame1: {elem:, compile:, parent:{id:, type:, content:, frames:}}
		for(var i = 0, max = list.length; i < max; i++){
			var item = list[i];
			// item = {compile: 编译出来的样式, elem: 需要插入的元素, parent: id等信息}
			// 这时候，修正一下元素的各个属性吧
			// 至少修正
			var style = $.extend({}, item.compile);
			delete style.__listener;
			InitCompile.fixElemAttribute(item.elem, item.parent, style);

			this.addToStage(item.elem, item.compile, item);
		}

		this.index = index;
		return true;
	},
	// 舞台
	stage: null,
	// 把元素加入到舞台
	addToStage: function(elem, compile, item){
		this.stage.appendChild(elem);
		// 让元素可拖动
		$(elem).draggable();
	},
	// 把元素从舞台移除
	removeFromStage: function(elem){
		try{
			$(elem).off("drag").off("mousedown").draggable("destroy");
		}catch(e){
			console.error("产生了一个无关紧要的错误..");
		}
		this.stage.removeChild(elem);
	},
	// 清空舞台
	clearStage: function(){
		var list = [].slice.call(this.stage.children, 0);
		for(var i = 0, max = list.length; i < max; i++){
			this.removeFromStage(list[i]);
		}
	}
};
// 初始化 frames 列表
var InitFrame = Object.create(_InitFrame);
InitFrame.$list = $("#frames");
// 重写 set 操作
InitFrame.set = function(index){
	GC.fire(EVENT.STAGE_ITEM_NONE_SELECT);
	// 如果列表没有数据，添加一个数据
	if(this.list.length <= 0){
		this.$list.find(".add").trigger("click");
	}
	return this.__proto__.set.call(this, index);
};
// 重写添加到舞台
InitFrame.addToStage = function(elem, compile, item){
	if(!elem){
		return;
	}
	var self = this, domStyle = elem.style;

	// 继承圆形里的方法
	this.__proto__.addToStage.call(this, elem);
	// 增加自己的处理
	$(elem).on("drag", function(){
		var id = this.getAttribute("id");
		// 拖动的时候，配置其实已经更新了，所以，相应的，也需要更新
		// 嗯，只更新 top, left, width, height 而已~
		self.combineItemWithStyle(compile, domStyle);
		GC.fire(EVENT.STAGE_ITEM_DRAG, this, compile, item);
	}).on("mousedown", function(){
		// 舞台上，搜索拥有item的元素，点击后，发布一个选中的事件
		$(this).addClass("active").siblings(".active").removeClass("active");
		GC.fire(EVENT.STAGE_ITEM_SELECT, this, compile, item);
		return false;
	})

	// 监听 对应 配置是否更变了，如果是，则更新元素，如果不是
	compile.__listener && Object.unobserve(compile, compile.__listener);
	compile.__listener = function(changes){
		changes.forEach(function(change){
			// 被更改的属性
			var attr = change.name;
			if(attr in domStyle){
				// chagne.object 是原来的对象
				domStyle[attr] = change.object[attr];
			}else{
				// 几个特殊的样式
				var list = ["rotate", "scale"], obj = change.object;
				var newItem = {};
				for(var i = 0, max = list.length; i < max; i++){
					var key = list[i];
					if(typeof key !== "undefined"){
						newItem[key] = obj[key];
					}
				}
				// 新的 transform 样式:
				var style = elem.getAttribute("style").replace(/(-webkit-|-ms-|)transform:[^;]*;/g, "");
				var newStyle = self.generateTransform(newItem);
				elem.setAttribute("style", style + newStyle);
			}
		});
	};
	Object.observe(compile, compile.__listener);
};
// 生成样式
InitFrame.generateTransform = function(item){
	return Css3TrGenerator.generateStyle({transform: item});
};
// 根据 dom.style 更新 配置
InitFrame.combineItemWithStyle = function(item, domStyle){
	item.top = domStyle.top;
	item.left = domStyle.left;
	item.width = domStyle.width;
	item.height = domStyle.height;
};
InitFrame.bindUI = function(){
	var self = this;

	// frame 栏目点击
	this.$list.on("click", ".item", function(){
		var $that = $(this), $stage = $(self.stage);
		// 记录下当前选中的元素
		var id = $stage.find(".active").attr("id");
		if(InitFrame.set($that.index())){
			$that.addClass("active").siblings(".active").removeClass("active");
			// 触发元素的选中状态
			id && $stage.find("[data-id=" + id + "]").trigger("mousedown");
		}
	});

	$(this.stage || "#stage").on("mousedown", function(){
		// 没有选中任何元素
		$(this).find(".active").removeClass("active");
		GC.fire(EVENT.STAGE_ITEM_NONE_SELECT);
	});

	// 点击新增 frames
	this.$list.on("click", ".add", function(){
		var frame = [];
		// 复制最后一帧
		if(this.list.length > 0){
			var last = this.list[this.list.length - 1];
			// last: [{compile, elem, parent}]
			if(last){
				for(var i = 0, max = last.length; i < max; i++){
					var item = last[i], obj = {};
					obj.parent = item.parent;
					obj.compile = $.extend({}, item.compile);
					// 清理
					delete obj.compile.__listener;
					// 复制一个元素
					obj.elem = $(InitCompile.createElem(item.parent))[0];

					frame.push(obj);
				}
			}
		}
		// 给列表新增一帧
		this.list.push(frame);

		this.set(this.list.length - 1);
		this.bindUI();
	}.bind(this));

	// 下面栏目的数量
	this.bindUI = function(){
		var list = this.list;
		if(!list || list.length <= 0){return;}
		var html = "";
		for(var i = 0, max = list.length; i < max; i++){
			html += "<li class='item'>"+ (i + 1) +"</li>"
		};
		this.$list.find(".list").html(html);
		this.$list.find("li").eq(this.index < 0 ? 0 : this.index).addClass("active");
	};
	this.bindUI();
};
InitFrame.setData = function(list){
	this.list = list;
	this.bindUI();
};
InitFrame.setStage = function(stage){
	this.stage = stage;
};
// 把内容，插入到当前帧
InitFrame.addElementToCurrentFrame = function(elem, id, type, content, style){
	var list = this.list[this.index];
	// 插入的对象，应该是: {elem:, compile:, parent:{id:, type:, content:, frames:[{}, {}]}}
	var data = InitCompile.getSaveFrames();
	if(!data[id]){
		data[id] = {
			id, type, content,
			frames: {}
		};
	};
	data[id].frames[this.index] = style;

	var item = {
		elem,
		compile: style
	};
	item.parent = data[id];

	// 插入当前帧
	list.push(item);

	// 修正一次样式 + 属性
	InitCompile.fixElemAttribute(elem, data[id], style);

	this.addToStage(elem, item.compile, item);
	// 触发选中效果
	$(elem).trigger("mousedown");
};
// 把文本，插入到当前帧
InitFrame.addTextToCurrentFrame = function(text, id, style){
	// 替换 换行，替换标签，替换第一个 <br/>
	text = Util.formatText(text);

	var elem = InitCompile.createElem({
		type: "text", id, content: text
	});
	elem = $(elem)[0];

	InitFrame.addElementToCurrentFrame(elem, id, "text", text, style);
};
// 元素插入到当前帧
InitFrame.addImageToCurrentFrame = function(elem, id, style){
	InitFrame.addElementToCurrentFrame(elem, id, "image", elem.getAttribute("src"), style);
};
InitFrame.setStage($("#stage")[0]);
InitFrame.setData(InitCompile.getInitData());
InitFrame.set(0);


// 根据 frame 的内容，生成相关的内容
InitFrame.generateSaveData = function(){
	// 1. 将 list 转为 配置文件
	var list = this.list, newList = [], newObj = {}, index = -1;
	list.forEach(function(subList){
		// 当前列表的索引
		index++;
		// item: {parent: {content:, id:, type:}, compile: {top:, left:, width:, height:, rotate:}}
		subList.forEach(function(item){
			var pt = item.parent, id = pt.id, compile = $.extend({}, item.compile || {});
			if(!newObj[id]){
				newObj[id] = {
					id: pt.id,
					type: pt.type,
					content: pt.content,
					frames: []
				};
			};
			// TODO 如果索引大于当前的长度，应该填充空白数据?
			var frame = newObj[id].frames;
			// 清理 compile 对象多余的方法
			delete compile.__listener;
			// console.log("这个莫名的delete，有BUG") // 使用 extend 之后，应该就没BUG了

			frame.push(compile);
		});
	});
	// 2. 将 map 对象，转为数组
	for(var i in newObj){
		newList.push(newObj[i]);
	};
	return newList;
};

// 生成对应的 html 文件
InitFrame.createHTML = function(){
	var fs = require("fs-extra"), path = require("path");
	var html = fs.readFileSync(path.join(__dirname, "./tmp/html")).toString();
	var obj = {
		style: this.createHTMLCLASS(),
		html: this.createContainerHtml(this.list[0]),
		width: "600px",
		height: "800px",
		initClass: this.createClassName + 0,
		classPrefix: this.createClassName,
		max: this.list.length
	};
	html = Util.format(html, obj);
	return html;
};
// 生成对应的 class 文件
InitFrame.createHTMLCLASS = function(){
	var list = this.list;
	var classList = [], item;
	for(var i = 0, max = list.length; i < max; i++){
		classList.push(this.createClass(i, list[i]));
	}
	return classList.join("\n\n");
};
// 生成 class context
InitFrame.createClassName = "frame_";
InitFrame.createClass = function(index, list){
	// pre 加上几个空格，能更加漂亮~
	var style = [], pre = "		." + this.createClassName + index, item;
	var defined = index !== 0 ? {over: "1s", wait: "0s", tf: "ease"} : null;
	// list: [{}, {compile: 样式, parent: {id, type, content} }]
	for(var i = 0, max = list.length; i < max; i++){
		item = list[i];
		if(!$.isEmptyObject(item)){
			// 样式
			var compile = $.extend({}, item.compile);
			delete compile.__listener;

			var text = InitCompile.changeObjectToStyle(compile, defined);
			text = pre + " #" + item.parent.id + "{" + text + "}";
			style.push(text);
		}
	};
	return style.join("\n");
};
// 生成container中的元素
InitFrame.createContainerHtml = function(list){
	var html = [];
	list.forEach(function(item){
		html.push("	" + InitCompile.createElem(item.parent, true));
	});
	return html.join("\n");
};


// 可拖入
$("#content").droppable({
	accept: "#gallery .item",
	drop: function(event, ui) {
		console.log(event, ui);
		var $elem = ui.helper, src = $elem.attr("src");
		var $pt = $(InitFrame.stage);
		var eOffset = $elem.offset(), pOffset = $pt.offset();

		var image = new Image();
		image.onload = function(){
			var width = this.width, height = this.height;
			var top = eOffset.top - pOffset.top, left = eOffset.left - pOffset.left;
			var id = Util.generateId();
			var elem = $( InitCompile.createElem({id, type: "image", content: src}) )[0];

			// 把元素加入当前的配置中
			// {elem:, compile:, parent:{id:, type:, content:, frames:}}
			InitFrame.addImageToCurrentFrame(elem, id, {
				width: width + "px", height: height + "px", top: top + "px", left: left + "px", position: "absolute"
			});

			image.onload = null;
		}
		image.src = src;

	}
});

// 项目保存
$(function(){
	;!function(InitFrame, toolBar, window){
		// 保存项目
		toolBar.on(EVENT_TOOL_BAR_SAVE_PRO, function(filePath, fs, path){

			// 1. html 文件
			var html = InitFrame.createHTML();
				// 确保保存路径存在，不存在，则创建
			fs.ensureDirSync(filePath);
				// 放心大胆的保存吧
			fs.writeFileSync( path.join(filePath, "index.html"), html, {
				encoding: "utf8"
			} );
			// 2. 图片
			var data = window.InitCompile.getSaveFrames();
			for(var i in data){
				var item = data[i];
				switch(item.type){
					case "image":
						var newFileName = path.join(filePath, item.content);
						var newBasePath = path.dirname(newFileName);
						fs.ensureDirSync(newBasePath);
						fs.copySync(path.join(__dirname, item.content), newFileName);
						break;
				}
			}
		});

		// 新建项目
		toolBar.on(EVENT_TOOL_BAR_NEW_PRO, function(){
			InitFrame.setData([]);
			InitFrame.set(0);
		});

		// 新开项目
		toolBar.on(EVENT_TOOL_BAR_OPEN_PRO, function(filePath, dir, fs, path){
			InitFrame.setData(InitCompile.getInitData());
			InitFrame.set(0);
		});

	}(InitFrame, toolBar, window);
});
