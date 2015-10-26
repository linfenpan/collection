var freemaker = require("freemaker"), path = require("path"), fs = require("fs");
//
// console.log(freemaker);

var fm = new freemaker({
    viewRoot: path.join(__dirname, "/ftl"),
    options: {

    }
});

// 绑定单个模板
fm.render("index.html", {user: 'da宗熊', email: "xxx@qq.com", list: [1, 2, 3]}, function(error, html, output){
    if(error){
        console.log("错了:", error);
    }else{
        console.log(html);
        fs.writeFileSync("./index.html", html);
    };
    // output 里，含有错误
    console.log(output);
});
