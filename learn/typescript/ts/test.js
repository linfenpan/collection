var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function greeter(person) {
    return "Hello, " + person.firstName + ' ' + person.lastName;
}
var user = { firstName: 'Type', lastName: 'Script' };
document.body.innerHTML = greeter(user);
// 基础类型
var isDone = true;
var isTen = 10;
var isStr = 'bb';
var isStr2 = "Hello, my name is " + name;
var arr1 = [1, 2, 3];
var arr2 = [1, 2, 3];
var x = ['1', 1]; // 定义前两位，是字符串、数字的形式，后面的，就没有顺序的要求了，但是也仅限输入数字和字符串
// 枚举，默认 Color.Red = 0，以此递增
var Color1;
(function (Color1) {
    Color1[Color1["Red"] = 0] = "Red";
    Color1[Color1["Green"] = 1] = "Green";
    Color1[Color1["Blue"] = 2] = "Blue";
})(Color1 || (Color1 = {}));
// 如果指定起始值，后面的值，按起始值递增
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 2] = "Green";
    Color2[Color2["Blue"] = 3] = "Blue";
})(Color2 || (Color2 = {}));
// 也可以全部赋值
var Color3;
(function (Color3) {
    Color3[Color3["Red"] = 2] = "Red";
    Color3[Color3["Green"] = 4] = "Green";
    Color3[Color3["Blue"] = 6] = "Blue";
})(Color3 || (Color3 = {}));
// 反过来，也是可以使用
Color3[2] === 'Red';
// 类型断言
var someValue = "this is a string";
var strLength1 = someValue.length;
var strLength2 = someValue.length;
;
;
;
var point3 = { x: 1, y: 2 };
var mySearch;
mySearch = function (source, sub) {
    return true;
};
// 类定义
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter;
}());
var greeterTest = new Greeter('World');
// 类继承
var Animal = /** @class */ (function () {
    function Animal(theName) {
        this.name = theName;
    }
    Animal.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log(this.name + " moved " + distanceInMeters + "m.");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.bark = function () {
        console.log('Woof! Woof!');
    };
    return Dog;
}(Animal));
var dog = new Dog('Keyli');
dog.bark();
dog.move();
dog.move(10);
dog.bark();
//# sourceMappingURL=test.js.map