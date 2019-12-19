"use strict";

var pkg = require("./package.json");
var gulp = require("gulp");
var concat = require("gulp-concat");
var rename = require("gulp-rename");
var uglify = require("gulp-uglify");
var header = require("gulp-header");
var footer = require("gulp-footer");

var today = new Date;
var banner = `/*!
    @author <%= author %>
    @version <%= version %>
    @license <%= license %>
    @lastModify ${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}
    @repository <%= repository.url %>
    @demo https://linfenpan.github.io/demo/swiper/index.html
    @example
        var swiper = new Swiper(element, options)
    @options
        [
          index[开始索引], ratio[每个子元素，占总宽度百分比 < 1], elastic[阻力大小 < 1],
          slideTime[滑动时间], resetTime[重置事件], nextDistance[到下一帧距离px或<1],
          interval[自动切换到下一帧的时间], repeat[是否循环], wrapSelector[wrap选择器],
          childSelector[子元素选择器], slideCallback[切换到下一帧的回调]
        ]
    @method
        swiper.resize(); // 当内容宽度、高度有所变化时，调用
        swiper.destroy(); // 销毁swiper
    @bug
        不会监听 "transitionEnd" 事件, 当页面嵌入在app的webview同时启动自动轮询时，因为visibilitychange事件不触发，所以动画会出现一瞬间的跳动。当然，不在webview内，一切正常得很~
*/`;

gulp.task("default", () => {
    gulp.src(["lib/utils.js", "lib/touch.js", "lib/swiper.js"])
        .pipe(concat("swiper.js"))
        .pipe(header(banner + "\n!function(window){\n", pkg))
        .pipe(footer("}(window);"))
        .pipe(gulp.dest("./"))
        .pipe(uglify({
            preserveComments: "license"
        }))
        .pipe(rename({suffix: ".min"}))
        .pipe(gulp.dest("./"));
});
