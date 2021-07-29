define("main", function(require){
    var POP = require("/lib/pop/pop.js");

    // 加载适配方案
    // var solution = require("/lib/fontSize.js");
    // solution.init({ maxWidth: 720, minWidth: 320, minFont: 12 });

    // var solution = require("/lib/meta.js");
    // solution.init({ width: 720 });

    var solution = require("/lib/zoom.js");
    solution.init({ width: 720 });

    // 站点导航
    var siteHeader = require("/lib/siteHeader/siteHeader.js");
    siteHeader.init();


    // 页脚
    var siteFooter = require("/lib/siteFooter/siteFooter.js");
    siteFooter.init($("#appContent")[0]);

});


$("#appContent").show();
require("main");
