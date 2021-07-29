/** 文件保存 */
;~function(G, Event, $){
    var fs = G.fs, path = G.path, ejs = require("ejs");

    Event.on(Event.M_SAVE_PROJECT, function(dir, fullPath){
        try{
            // 写入配置
            fs.writeJsonSync(fullPath, G.data);

            // 通过配置，生成首页
            var html = fs.readFileSync(path.join(__dirname, "./tmp/html"), {encode: "utf8"}).toString();
            html = ejs.render(html, $.extend({prefix: "frame_"}, G.data));
            // 保存文件
            fs.writeFileSync(path.join(dir, "index.html"), html, {encode: "utf8"});

            // 复制资源文件
            fs.copySync(path.join(__dirname, G.assertPath), path.join(dir, "./assert"));
        }catch(e){
            alert(e);
        }
    });
}(G, Event, $);
