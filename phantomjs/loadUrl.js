var page = require("webpage").create(),
    system = require("system");

if(system.args.length <= 1){
    console.log("Usage: loadSpeed.js <some URL>");
    phantom.exit();
};

// 0: 是当前脚本
var t = new Date(), url = system.args[1];
page.open(url, function(status){
    if(status !== "success"){
        console.log("Fail to load: " + url);
    }else{
        t = new Date() - t;
        console.log("Loading time: " + t + " ms");
    }
    phantom.exit();
});
