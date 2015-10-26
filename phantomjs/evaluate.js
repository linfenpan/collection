var page = require("webpage").create();
page.onConsoleMessage = function(msg){
    // 定义了这个，所有页面中的console，也会进入这里
    console.log("%c" + msg, "color:red;");
};
page.open("http://www.baidu.com/", function(status){
    // 也可以通过 page.includeJs("脚本的绝对路径", 回调);给页面加载外部脚本，然后就可以在 evaluate中，使用该脚本
    var title = page.evaluate(function(){
        // 这里的console.log将不会执行，如果不定义 page.onConsoleMessage方法的话
        console.log("I am here");
        // 只能返回简单的对象，如果对象中含有函数或闭包，那些函数，都是不可执行的
        return {
            title: document.title
        };
    });
    console.log("Page title is: " + title.title);

    phantom.exit();
});
