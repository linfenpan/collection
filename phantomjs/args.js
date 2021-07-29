var system  = require("system");
if(system.args.length === 1){
    console.log("尝试添加一些参数试试! phantomjs args.js foo bar baz");
}else{
    system.args.forEach(function(arg, i){
        console.log(i + ": " + arg);
    });
}
phantom.exit();
