var page = require("webpage").create();
var fs = require("fs");

phantom.outputEncoding = "gbk";
// 这个脚本运行的文件夹路径
console.log(page.libraryPath);

page.open("http://www.100bt.com/", function(){
    // console.log(JSON.stringify(page.cookies, null, 2));  // 返回的，是个数组
    // console.log(page.content); 网页内容
    phantom.exit();
});
