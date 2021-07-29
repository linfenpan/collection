var app = require("app");
var ipc = require("ipc");
var BrowserWindow = require("browser-window");

var window = null;


app.on("ready", function(){
	window = new BrowserWindow({
		width:"100%", height:"100%"
	});
	// 	console.log(__dirname); __dirname 是当前文件运行的目录地址
	window.loadUrl(__dirname + "/index.html");	// 载入链接，也可以是文件的可绝对路径
	window.openDevTools();
});

// 监听在线状态变化
ipc.on("online-status-changed", function(event, status){
	console.log(status);
});