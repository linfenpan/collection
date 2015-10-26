module.exports = {
    // 入口文件
    entry: {
        entry: "./entry.js",
        conls: ["./entry1.js", "./entry2.js"]
    },
    // 输出文件
    output: {
        path: __dirname,
        // [name]是上面配置entry中的key
        filename: "[name].bundle.js",
        // [id]是索引，但是chunkFilename不知道用来干嘛的
        chunkFilename: "[id].bundle.js"
    },
    module: {
        loaders: [
            // 当检查到 require 有.css 结尾，使用style和css loader进行加载
            {test: '/\.css$/', loader: 'style!css'}
        ]
    }
};
