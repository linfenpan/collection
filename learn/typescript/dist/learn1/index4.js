"use strict";
// @doc https://www.tslang.cn/docs/handbook/classes.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, department) {
        var _this = _super.call(this, name) || this;
        // 同时可以赋予默认值
        _this.department = 'cbg';
        _this.department = department;
        return _this;
    }
    Employee.prototype.getElevatorPitch = function () {
        return "Hello, my name is " + this.name + " and I work in " + this.department + ".";
    };
    return Employee;
}(Person));
var howard = new Employee("Howard", "Sales");
console.log(howard.getElevatorPitch());
// howard.name; // 错误，因为 name 为 protected，能给子类实例访问，但是外部是受限的
// 如果 constructor 被标注为 protected，那么该类只能让 子类 来继承使用，外部不能创建实例
// readonly 标识，注明属性只读，只能在构造函数中，进行更改
var Person2 = /** @class */ (function () {
    function Person2(theName) {
        this.name = '未知';
        this.name = theName;
    }
    return Person2;
}());
var person2 = new Person2('你好');
console.log(person2);
// person2.name = '222'; // 报错，因为 name 是只读的
// 与 Person2 等价
var Person3 = /** @class */ (function () {
    function Person3(name) {
        this.name = name;
    }
    return Person3;
}());
// 静态属性
var l4_Static = /** @class */ (function () {
    function l4_Static(scale) {
        this.scale = scale;
    }
    l4_Static.prototype.calculate = function (x, y) {
        return {
            x: x + l4_Static.orign.x * this.scale,
            y: y + l4_Static.orign.y * this.scale
        };
    };
    l4_Static.orign = { x: 1, y: 2 };
    return l4_Static;
}());
// 抽象类，与 interface 类似，不过允许实现部分方法，允许写构造函数，只是要 abstract 标注而已
var l4_Animal = /** @class */ (function () {
    function l4_Animal() {
    }
    l4_Animal.prototype.move = function () {
        console.log('roaming the earch...');
    };
    return l4_Animal;
}());
var l4_Greeter = /** @class */ (function () {
    function l4_Greeter() {
        this.greeting = 'one';
    }
    l4_Greeter.prototype.greet = function () {
        if (this.greeting) {
            return "Hello, " + this.greeting;
        }
        else {
            return l4_Greeter.standardGreeting;
        }
    };
    l4_Greeter.standardGreeting = "Hello, there";
    return l4_Greeter;
}());
var l4_greeter1;
l4_greeter1 = new l4_Greeter();
console.log(l4_greeter1.greet());
// 等价于 greeterMacker = l4_Greeter;
var l4_greeterMaker = l4_Greeter;
l4_greeterMaker.standardGreeting = "Hey there!";
var l4_greeter2 = new l4_greeterMaker();
console.log(l4_greeter2.greet());
//# sourceMappingURL=index4.js.map