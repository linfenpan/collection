// 把网页存为图片
// 个人认为：或许用来测量网页加载时间，是个不错的选择
var page = require("webpage").create();
page.open("http://www.guopan.cn/", function(){
    page.render("./pic/guopan.png");
    phantom.exit();
});
