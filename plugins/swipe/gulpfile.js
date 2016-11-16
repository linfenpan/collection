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
    @example
        var swiper = new Swiper(element, options)
    @options
        [
          index[开始索引], ratio[每个子元素，占总宽度百分比 < 1], elastic[阻力大小 < 1],
          slideTime[滑动时间], resetTime[重置事件], nextDistance[到下一帧距离px或<1],
          interval[自动切换到下一帧的时间], repeat[是否循环], wrapSelector[wrap选择器],
          childSelector[子元素选择器], slideCallback[切换到下一帧的回调]
        ]
    @bug
        no listener at "transitionEnd" event, the behavior of the timer may be strange when we are away from the page
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
