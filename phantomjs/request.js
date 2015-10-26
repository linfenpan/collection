var page = require("webpage").create();

page.onResourceRequested = function(request){
    // 所有请求，都走这里
    console.log("Request " + JSON.stringify(request, null, 4));
};

page.onResourceReceived = function(response){
    // 所有的接收，都走这里
    console.log("Receive " + JSON.stringify(response, null, 4));
};

page.open("http://www.baidu.com/", function(){
    phantom.exit();
});
