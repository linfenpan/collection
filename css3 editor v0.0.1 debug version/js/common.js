// 全局工具
var Util = (function(){
	var obj = {};
	var remote = require('remote');
	var dialog = remote.require('dialog');
	var fs = require('fs-extra');
	var path = require('path');
	var assertPath = path.join(__dirname, "assert");
	// 临时目录的相对路径
	var relativePath = path.relative(__dirname, assertPath);

	// 新开项目
	$(function(){
		toolBar.on(EVENT_TOOL_BAR_OPEN_PRO, function(filePath, dir, fs, path){
			// 把项目底下，所有assert中的文件，拷贝到当前 __dirname 下的 assert
			if(fs.existsSync(path.join(dir, "./assert"))){
				fs.copySync(path.join(dir, "./assert"), assertPath);
			}
		});
	});

	$.extend(obj, {
		// 只做简单的替换
		format: function(str, obj, empty){
			return str.replace(/\${([^}]*)}/g, function(str, key){
				return obj[key] || empty || "";
			});
		},
		// 格式化文本
		formatText: function(text){
			return text.replace(/\n/g, "<br/>")
						.replace(/<([^>]+)>(.*?)<\/\1>/g, "<br/>$2")
						.replace(/^\s*<br\/>/, "");
		},
		// 获取唯一ID
		generateId: function(){
			return "example_" + new Date/1;
		},
		// 获取默认样式
		getDefStyle: function(){
			return {
				position: "absolute",
				translate: "0px",
				opacity: "1",
				rotate: "0deg",
				scale: "1"
			};
		},
		// 图片选择
		imageSelectDialog: function(callback){
			dialog.showOpenDialog({
				filters: [
					{name: "Images", extensions: ["jpg", "jpeg", "png", "gif"]}
				]
			}, callback);
		},
		// 把资源拷贝到临时目录
		copyToTmp: function(filePath, type, newName){
			var basename = newName || path.basename(filePath);
			fs.copySync(filePath, path.join(assertPath, type, basename));
			return path.join(relativePath, type, basename);
		},
		// 打开保存窗口
		saveDialog: function(callback){
			dialog.showSaveDialog({
				title: "项目保存",
				filters: [
					{name: "c3an", extensions: ["c3an"]},
					{name: "All Files", extensions: [""]}
				]
			}, function(filePath){
				// TODO 可保存路径，也可保存到文件咧
				if(filePath){
					var basename = path.basename(filePath);
					if(/c3an$/.test(basename)){
						filePath = path.dirname(filePath);
					}
					callback(filePath, fs, path);
				}
			});
		},
		// 打开心有的项目
		openProject: function(callback){
			dialog.showOpenDialog({
				title: "打开项目",
				filters: [
					{name: "c3an", extensions: ["c3an"]}
				]
			}, function(filePath){
				// 打开窗口，返回的，是一个列表..
				if(filePath){
					filePath = filePath[0];
					callback && callback(filePath, fs, path);
				}
			})
		},
		// 获取图片的临时路径
		getImageTmpPath: function(imagePath){
			return path.join(relativePath, imagePath);
		}
	});

	// 开放给外部的属性
	obj.relativePath = relativePath;

	return obj;
})();

// 全局事件控制
var GC = {
	_: $({}),
	fire: function(){
		this._.trigger(arguments[0], [].slice.call(arguments, 1));
	},
	on: function(ev, fn){
		this._.on(ev, function(e){
            fn.apply(this, [].slice.call(arguments, 1));
        });
	}
};

// 事件列表
var EVENT = {};
EVENT["STAGE_ITEM_SELECT"] = "STAGE_ITEM_SELECT";			// 舞台 item 被选中了
EVENT["STAGE_ITEM_DRAG"] = "STAGE_ITEM_DRAG";				// 元素被拖动了
EVENT["STAGE_ITEM_NONE_SELECT"] = "STAGE_ITEM_NONE_SELECT";	// 元素没有被选中


// 初始化的编译
var InitCompile = {
	// 需要保存的数据
	saveData: {},
	// 编译后的列表
	list: [],
	// 遍历配置列表
	// list: { id:{id:, type:, content:, frames:{"0":{style}, "1":{style}}, id:{} }
	// maxFrame: 最大帧数
	init: function(list, maxFrame){
		// 需要保存的数据:
		this.saveData.max = maxFrame;
		this.saveData.frames = list;

		list = list || [];

		var maxFrame = maxFrame || 0, resList = new Array(maxFrame);
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
				var obj = this.initElem(item, frames[j]);
				resList[j].push(obj || {});
			}
		}
		// 返回的数据: [ [frame1], [frame2] ], 其中 frame1: {elem:, compile:, parent:{id:, type:, content:, frames:}}
		return this.list = resList;
	},
	// 根据配置，生成元素
	// item: {type:, id:, content:, frames:[]}
	// frame: {top:, left:}
	initElem: function(item, frame){
		if(!frame){
			return null;
		}

		var elem, newItem = {};
		elem = $(this.createElem(item))[0];
		this.fixElemAttribute(elem, item, frame);

		// 新的配置
		newItem.elem = elem;
		newItem.compile = frame;
		newItem.parent = item;
		return newItem;
	},
	// 根据配置创建元素: item: {type:, id:, content:, frame: {top:, left:}}
	createElem: function(item, idMode){
		switch(item.type){
			case "image":
				return `<img ${idMode ? "id" : "data-id"}="${item.id}" src="${item.content}" />`;
			case "text":
				return `<div ${idMode ? "id" : "data-id"}="${item.id}" ${idMode ? "" : "contentEditable"}>${item.content}</div>`;
		};
		return "";
	},
	// 修正元素的属性
	fixElemAttribute: function(elem, item, style){
		if(!elem){return;}
		elem.className = "item";
		elem.setAttribute("style", this.changeObjectToStyle(style));
		elem.setAttribute("data-id", item.id);
	},
	// 获取初始化后的数据
	getInitData: function(){
		return this.list;
	},
	// 获取需要保存的数据
	getSaveData: function(){
		return this.saveData;
	},
	// 获取保存的帧
	getSaveFrames: function(){
		return this.saveData.frames;
	},
	// 插入新的数据
	insertNewSaveItem: function(item, frame, frameIndex){
		var list = this.saveData.frames;
		var item =
		list.push(item);
	},
	// 更替元素的ID
	replaceItemId: function(old, now){
		var config = this.saveData.frames, oldItem = config[old], nowItem = config[now];
		if(oldItem && !nowItem){
			nowItem = config[now] = oldItem;
			nowItem.id = now;
			delete config[old];
			return true;
		}else{
			return false;
		}
	},
	// 把两个配置合并，并删除旧的
	combineItems: function(old, now){
		var frame = this.getSaveFrames();
		var oldFrame = frame[old], nowFrame = frame[now];
		if(oldFrame && nowFrame){
			// 将 frames 进行合并，now 覆盖 old
			var oldList = oldFrame.frames, nowList = nowFrame.frames;
			for(var i in oldList){
				nowList[i] = nowList[i] || oldList[i];
			};
			delete frame[old];
			return nowFrame;
		}
		return oldFrame;
	},
	// 把普通的样式对象，转为 Css3TrGenerator 识别的对象
	changeStyleToC3: function(frame, defined){
		var compileItem = {normal: {}, transform: {}};
		// 在 frame 里，只有属于 transform 的属性，才放到 transform 中
		for(var i in frame){
			var key = "normal";
			if(/^(scale|translate|rotate|skew)/.test(i)){
				key = "transform";
			}
			compileItem[key][i] = frame[i];
		};
		defined && (compileItem["defined"] = defined);

		return compileItem;
	},
	// 把对象转为样式
	changeObjectToStyle: function(obj, defined){
		return Css3TrGenerator.generateStyle( this.changeStyleToC3(obj, defined) );
	}
};

// 文件保存
$(function(){
	;!function(InitCompile, toolBar, window){

		toolBar.on(EVENT_TOOL_BAR_SAVE_PRO, function(filePath, fs, path){
			var data = InitCompile.getSaveData();
			data.max = $("#frames .list li").size();

			fs.ensureDirSync(filePath);
			// 保存配置
			fs.writeFileSync(path.join(filePath, "project.c3an"), JSON.stringify(data), {
				encoding: "utf8"
			});
		});

	}(InitCompile, toolBar, window);
});

// 新开项目
$(function(){
	;!function(InitCompile, toolBar){
		toolBar.on(EVENT_TOOL_BAR_OPEN_PRO, function(filePath, dir, fs, path){
			var config = fs.readJsonSync(filePath);
			InitCompile.init(config.frames, config.max);
		});
	}(InitCompile, toolBar);
});

// 生成配置
// var list = [
// 	{
// 		id: "image1",
// 		type: "image",
// 		content: "./img/2.png",
// 		frames: [
// 			{position: "absolute", width: "100px", height: "200px", top:"0px", left:"-100px"},
// 			{position: "absolute", width: "100px", height: "200px", top:"0px", left:"100px"}
// 		]
// 	},
// 	{
// 		id: "text2",
// 		type: "text",
// 		content: "da宗熊",
// 		frames: [
// 			{position: "absolute", top:"0px", left:"-50px"},
// 			{position: "absolute", top:"0px", left:"10px"}
// 		]
// 	}
// ];
var list = {
	// "image1": {
	// 	"id":"image1",
	// 	"type":"image",
	// 	"content":"./img/2.png",
	// 	"frames":{
	// 		"0" : {"position":"absolute","width":"160px","height":"200px","top":"0px","left":"-100px"},
	// 		"1" : {"position":"absolute","width":"160px","height":"200px","top":"0px","left":"100px"}
	// 	}
	// },
	// "text2": {
	// 	"id":"text2",
	// 	"type":"text",
	// 	"content":"da宗熊",
	// 	"frames":{
	// 		"0": {"position":"absolute","top":"0px","left":"-50px"},
	// 		"1": {"position":"absolute","top":"0px","left":"10px"}
	// 	}
	// }
};
console.log(InitCompile.init(list, 0));




// 菜单创建
var remote = require('remote');
var Menu = remote.require('menu');
var MenuItem = remote.require('menu-item');

var menu = new Menu();
menu.append(new MenuItem({ label: '删除', click: function() { console.log('item 1 clicked'); } }));
menu.append(new MenuItem({ type: 'separator' }));
menu.append(new MenuItem({ label: 'CheckBox1', type: 'checkbox', checked: true }));
menu.append(new MenuItem({ label: 'CheckBox2', type: 'checkbox', checked: false }));
menu.append(new MenuItem({ type: 'separator' }));
menu.append(new MenuItem({ label: 'MenuItem3', type: 'radio', checked: false }));
menu.append(new MenuItem({ label: 'MenuItem4', type: 'radio', checked: true }));

window.addEventListener('contextmenu', function (e) {
  console.log(e);
  menu.popup(remote.getCurrentWindow());
   e.preventDefault();
}, false);

// 最顶层菜单
// Menu.setApplicationMenu(menu);
