"use strict";
// @doc https://www.tslang.cn/docs/handbook/interfaces.html
function createSquare(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ color: "black" });
var square_config2 = { color: 'red', width: 200 };
var l3_my_searchfunc;
// 默认继承了 l3_SearchFunc 的声明
l3_my_searchfunc = function (a, b) {
    return true;
};
var Clock = /** @class */ (function () {
    function Clock() {
        this.currentTime = new Date;
    }
    return Clock;
}());
var Clock2 = /** @class */ (function () {
    function Clock2(hour, minute) {
        if (hour === void 0) { hour = 1; }
        if (minute === void 0) { minute = 2; }
        this.hour = hour;
        this.minute = minute;
        this.currentTime = new Date;
    }
    Clock2.prototype.test = function (hour, minute) {
    };
    return Clock2;
}());
//# sourceMappingURL=index3.js.map