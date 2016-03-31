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
        [index, ratio, elastic, slideTime, resetTime, nextDistance, interval, repeat, wrapSelector, childSelector, slideCallback]
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
