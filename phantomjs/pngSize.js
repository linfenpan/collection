var page = require("webpage").create();

// console.log(page.settings.userAgent);
// page.settings.userAgent = 'SpecialAgent';)

// viewportSize 和 clipRect 一定要参数设定齐全，才会生效

// 设置屏幕的宽度
page.viewportSize = {width: 1920, height: 1024};
// 设置截屏的宽度
page.clipRect = {top:0, left:0, width: 1024, height: 512};

page.open("http://qq.100bt.com/", function(status){
    if(status == "success"){
        page.render("./pic/qq.png");
    };
    console.log(status);
    phantom.exit();
});
