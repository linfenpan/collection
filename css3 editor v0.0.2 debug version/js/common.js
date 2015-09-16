// 5 个板块
// 1、menu
// 2、gallery
// 3、message
// 4、stage
// 5、frames
// 脚本的脚在，在此文件进行


// 涉及两个板块的功能，通过 板块1-板块2.js 这样的脚本，进行记录
// 所有事件，统一放在common中
// common 需提供最基础的功能: 打开文件、remote对象、事件对象
// common 中，应该保存项目的基本信息，如保存地址、图片基本路径等
// common 中，存储项目的配置文件，所有项目相关的配置，放于common中


// 全局对象
// 提供 配置、存储路径、remote对象等
var G = {};
// 提供 remote 对象
// 程序中，可能使用到的路径、文件等接口
;~function(G, $){
	var remote = require("remote");
	$.extend(G, {
		remote	: remote,
		dialog	: remote.require("dialog"),
		fs		: require("fs-extra"),
		path	: require("path")
	});
}(G, $);
// 对象 和 样式之间的转换
;~function(G, Css3TrGenerator){
	// 默认样式
	G.defStyle = {
		position: "absolute",
		top: "0px",
		left: "0px",
		width: "50px",
		height: "50px",
		translate: "0px",
		opacity: "1",
		rotate: "0deg",
		scale: "1"
	};
	/**
	 * 把普通的样式对象，转为 Css3TrGenerator 识别的对象
	 * @param style {Object} 样式对象
	 * @param defined {Object} ---> {over:, tf:, wait:}
	 * @return {Object} Css3TrGenerator 的配置对象
	*/
	G.changeStyleToC3 = function(style, defined){
		var compileItem = {normal: {}, transform: {}};
		// 在 frame 里，只有属于 transform 的属性，才放到 transform 中
		for(var i in style){
			var key = "normal";
			if(/^(scale|translate|rotate|skew)/.test(i)){
				key = "transform";
			}
			compileItem[key][i] = style[i];
		};
		defined && (compileItem["defined"] = defined);
		return compileItem;
	};
	// 把样式对象，转为样式
	G.changeStyleToCSS = function(style, defined){
		// style - > c3
		var c3 = this.changeStyleToC3(style, defined);
		// c3 - > css
		return  Css3TrGenerator.generateStyle(c3);
	};

	// 把样式，转换为 样式 对象
	G.changeCssToStyle = function(css){
		var obj = {};
		css.replace(/([^:]+):([^;]+);\s*/g, function(str, key, val){
			key = key.trim();
			if(/transform/g.test(key)){
				val.replace(/([^(]+)\(([^)]+)\)/g, function(str, key, val){
					obj[key.trim()] = val.trim();
				});
			}else{
				obj[key] = val.trim();
			}
		});
		return obj;
	};
}(G, Css3TrGenerator);
// 全局的配置
;~function(G, Event, $){
	// 给frames.js使用的数据列表
	G.dataList 		= [];
	// 当前帧索引
	G.frameIndex	= -1;
	/**
	 * 对词法进行分析，分解为可解析的 dataList
	 * @param list { id:{id:, type:, content:, frames:{"0":{style}, "1":{style}}, id:{} }
	 * @param max 当前帧数目
	 */
	function analysis(list, max){
		var list = list || [];
		var maxFrame = max || 0, resList = new Array(maxFrame);

		// 二维数组初始化
		(new Array(maxFrame + 1)).join("i").replace(/i/g, function(str, index){
			return resList[index] = [], "";
		});

		// 1. 把所有 frames 的元素，进行加工
		// 2. 把加工后的元素，保存到而为数组中
		for(var i in list){
			var item = list[i], frames = item.frames;
			for(var j = 0; j < maxFrame; j++){
				// item: { type:, id:, frames:{"0":{style}, "1":{style}} }
				var obj = G.changeFrameToCF(item, frames[j]);
				resList[j].push(obj || {});
			}
		}
		// 返回的数据: [ [frame1], [frame2] ], 其中 frame1: {elem:, style:, parent:{id:, type:, content:, frames:}}
		G.dataList = resList;
	};
	/**
	 * 把帧配置，转为可用的配置
	 * @param item {Object} ---> { type:, id:, frames: { "0":{style}, "1":{style} } }
	 * @param frame {Object} ---> {style}
	 * @return {Object} ---> { elem, style, parent: { id, type, content:, frames:{} }}
	 */
	G.changeFrameToCF = function(item, frame){
		if(!frame){
			return null;
		}
		var elem, newItem = {};
		elem = $(this.createElement(item, frame))[0];

		newItem.elem = elem;
		newItem.style = frame;
		newItem.parent = item;
		// 这是，是不是应该把 style 的更改，绑定到 elem 上去呢?
		// SO, do it
		bindElementAndStyle(newItem.elem, newItem.style);
		bindElementAndCF(newItem.elem, newItem.parent);

		return newItem;
	};
	function bindElementAndStyle(elem, style){
		if(!elem || !style){
			return;
		}

		// 尝试解绑
		elem && elem.__listener && Object.unobserve(style, elem.__listener);
		elem.__listener = function(changes){
			var domStyle = this, self = style;

			changes.forEach(function(change){
				// 被更改的属性
				var attr = change.name;
				if(attr in domStyle){
					// chagne.object 是原来的对象
					domStyle[attr] = change.object[attr];
				}else{
					// 几个特殊的样式
					var list = ["rotate", "scale", "skew", "translate"], obj = change.object;
					var newItem = {};
					for(var i = 0, max = list.length; i < max; i++){
						var key = list[i];
						if(typeof key !== "undefined"){
							newItem[key] = obj[key];
						}
					}
					// 新的 transform 样式:
					var style = elem.getAttribute("style").replace(/(-webkit-|-ms-|)transform:[^;]*;/g, "");
					var newStyle = window.Css3TrGenerator.generateStyle({transform: newItem});
					elem.setAttribute("style", style + newStyle);
				}
			});

		}.bind(elem.style);
		elem.__style = style;

		Object.observe(style, elem.__listener);
	};
	function bindElementAndCF(elem, cf){
		if(!elem || !cf){
			return;
		}
		// 尝试解绑
		elem && elem.__listener2 && Object.unobserve(style, elem.__listener2);
		elem.__listener2 = function(changes){
			changes.forEach(function(change){
				// 被更改的属性
				var val = change.object[change.name];
				switch(change.name) {
					case "id":
						elem.setAttribute("data-id", val);
						break;
					case "content":
						var tag = elem.tagName.toLowerCase();
						if(tag === "image"){
							elem.setAttribute("src", val);
						}else{
							tag.innerHTML = val;
						}
						break;
				}
			});

		};
		Object.observe(cf, elem.__listener2);
	};
	/**
	 * 根据配置创建元素
	 * @param item {Object} ---> {id:, content:, style:}
	 * @param style {Object} 帧样式
	 * @return {dom | null}
	 */
	G.createElement = function(item, style){
		var elem = G.createElementHtml(item, false);
		if(elem){
			elem = $(elem)[0];
			elem.className = "item";
			elem.setAttribute("style", this.changeStyleToCSS($.extend({}, G.defStyle, style)));
			elem.setAttribute("data-id", item.id);
		}
		return elem === "" ? null : elem;
	};
	/**
	 * 根据配置创建元素
	 * @param item {Object} ---> {id:, content:}
	 * @param idMode {Boolean} 是否生成 id 代替 data-id
	 * @return {String} 元素的字符
	 */
	G.createElementHtml = function(item, idMode){
		switch(item.type){
			case "image":
				return `<img ${idMode ? "id" : "data-id"}="${item.id}" src="${item.content}" />`;
			case "text":
				return `<div ${idMode ? "id" : "data-id"}="${item.id}" ${idMode ? "" : "contentEditable"}>${item.content}</div>`;
		};
		return "";
	};


	// 默认配置
	var defaultData =  {
		max		: 0,	// 帧数
		frames	: {}	// 动画配置
	};
	// 项目配置
	G.data = $.extend(true, {}, defaultData);
	// 更改全局配置对象
	G.setData = function(data, isNullProject){
		this.data = data || this.data;
		analysis(this.data.frames, this.data.max);

		Event.fire(Event.G_CONFIG_CHANGE, this.dataList, isNullProject);
	};
	// 重置
	G.resetData = function(){
		this.data = $.extend(true, {}, defaultData);
		G.setData(null, true);
		G.newFrame();
	};
	// 新建项目
	G.newProject = function(width, height){
	    G.setFrameIndex(0);

		G.data.stageWidth = width;
		G.data.stageHeight = height;

		// 重置舞台大小
		Event.fire(Event.ST_INIT_AREA, width, height);

		// 新建项目
		Event.fire(Event.G_NEW_PROJECT);
	};

}(G, Event, $);
// 对配置进行新增、删除操作
;~function(G, Event, $){
	// 设置帧的索引
	G.setFrameIndex = function(index){
		index = index >= this.dataList.length ? this.dataList.length - 1 : index < 0 ? 0 : index;
		if(index != this.frameIndex){
			this.frameIndex = index;
			Event.fire(Event.G_FRAMES_CHANGE, this.frameIndex, this.dataList[this.frameIndex]);
		}
	};
	// 新增一帧
	G.newFrame = function(){
		var len = this.dataList.length, frame;
		// 复制最后的一帧
		if(len > 0){
			frame = $.extend(true, [], this.dataList[len - 1]);
			for(var i = 0, max = frame.length; i < max; i++){
				var item	= frame[i];
				// 把 frame 中的所有 elem，重新生成一遍
				item 		= this.changeFrameToCF(item.parent, item.style);
				frame[i]	= item;
			};
			addFrame(frame);
		}else{
			frame = [];
			this.dataList.push(frame);
		}
		G.data.max++;
		// 依赖setIndex的修正，无视一点点BUG
		G.setFrameIndex(G.data.max);

		return frame;
	};
	// 新增 frame
	function addFrame(frame){
		// 遍历帧，把最新一整，放入 data 中
		var data	= G.data.frames
			index	= G.dataList.length;

		for(var i = 0, max = frame.length; i < max; i++){
			var item	= frame[i];
			if(data[item.parent.id]){
				data[item.parent.id]["frames"][index] = item.style;
			}
		};
		G.dataList.push(frame);
	};
	// 删除帧
	G.removeFrame = function(index){
		var frame = this.dataList.splice(index, 1);
		if(frame){
			// 把对应的索引全干掉
			var data = this.data.frames;
			for(var i in data){
				delete data[i][index];
			}
			G.data.max--;
		}
	};
	// 添加新元素
	G.addItem = function(elem){
		var id 		= elem.getAttribute("data-id"),
			style 	= this.changeCssToStyle(elem.getAttribute("style")),
			type	= elem.tagName.toLowerCase() == "img" ? "image" : "text",
			content = type == "image" ? elem.getAttribute("src") : G.format.text(elem.innerHTML);

		var item = {
			id, type, content, frames:{}
		};
		var data	= G.data.frames[id] = item;

		for(var i = 0, max = G.data.max; i < max; i++){
			data.frames[i] = $.extend({}, style);	// 深复制
		}

		var list = this.dataList;
		for(var i = 0, max = Math.min(list.length, G.data.max); i < max; i++){
			var newItem = G.changeFrameToCF(item, data.frames[i]);
			list[i].push(newItem);
			if(i === this.frameIndex){
				elem = newItem.elem;
			}
		}
		// 返回当前 帧 的 该元素的配置
		return elem;
	};
	// 删除元素
	G.removeItem = function(id){
		var data = G.data.frames;
		if(data[id]){
			delete data[id];
			var list = G.dataList;
			for(var i = 0, max = list.length; i < max; i++){
				var subLst = list[i];
				subLst.forEach(function(item, index, list){
					if(item.parent.id === id){
						// TODO 是否需要解绑 Object.observe ?
						list.splice(index, 1);
					}
				});
			}
		}
	};
	// 重命名元素
	G.renameItem = function(oldId, newId){
		var data = G.data.frames,
			list = G.dataList;
		if(data[oldId] && !data[newId]){
			var item = data[newId] = data[oldId];
			// 相关 dom 元素，在插入 dataList 的时候，有自动绑定 id 更换，自动变更的操作
			item.id = newId;

			delete data[oldId];
			return true;
		}else{
			return false;
		}
	};
}(G, Event, $);
// 资源保存路径
;~function(G){
	G.dirname		= window.__dirname;														// 项目运行路径
	G.assertPath	= G.path.relative(G.dirname, G.path.join(G.dirname, "./assert"));		// 资源路径
	G.imagePath		= G.path.join(G.assertPath, "./img");									// 图片资源路径
	G.savePath		= "";																	// 项目保存路径


	// 资源保存
	G.save = function(){/* TODO 项目保存 */};
	G.save.assert = {
		_imageId: 1,
		image	: function(file){
			var newPath = G.path.join(G.imagePath, "image_" + this._imageId++ + G.path.extname(file));
			G.fs.copySync(file, G.path.join(G.dirname, newPath));
			return newPath.replace(/\\/g, "/");
		}
	};

}(G);
// 项目的基本设置
;~function(G, $){
	G.project = {};
	$.extend(G.project, {
		ext		: "c3an"		// 	项目拓展名
	});
}(G, $);
// 一些基础支持
;~function(G){
	// 自增id
	var id = new Date/1;
	G.id = function(){
		return "id_" + id++;
	};
	// 格式化
	G.format = {};
	// 格式化 text 内容
	G.format.text = function(text){
		return text.replace(/\n/g, "<br/>")
					.replace(/<([^>]+)>(.*?)<\/\1>/g, "<br/>$2")
					.replace(/^\s*<br\/>/, "");
	};
	// location.search 对象
	G.search = {};
	location.search.replace(/(?:&|\?)([^=]*)=([^&]*)/g, function(str, key, val){
		G.search[key] = decodeURIComponent(val);
	});

}(G);
