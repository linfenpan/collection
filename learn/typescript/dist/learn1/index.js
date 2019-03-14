"use strict";
// 学习文档: https://www.tslang.cn/docs/handbook/typescript-in-5-minutes.html
// 参数需要指定使用的类型，不然会有警告的
function greeter(person) {
    return 'Hello, ' + person;
}
var user = 'da宗熊';
document.body.innerHTML = greeter(user);
function greeter2(person) {
    return 'Hello, ' + person.firstName + ' ' + person.lastName;
}
var user2 = { firstName: 'Jane', lastName: 'User', age: 30 };
document.body.innerHTML += '<br/>' + greeter2(user2);
// 类测试
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + ' ' + middleInitial + ' ' + lastName;
        // 在构造函数中的变量，会变扔到 this 里面
        // console.log('在构造函数中的变量，会被扔到 this 里面', this.firstName);
    }
    Student.prototype.sayHi = function () {
        console.log('hi:' + this.fullName);
    };
    return Student;
}());
var user3 = new Student('Jane', 'M.', 'User');
user3.sayHi();
document.body.innerHTML += '<br/>' + greeter2(user3);
// 类型: 枚举 -> 索引从 0 开始，Color.Red = 0  -- Color[0] = 'Red'
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
console.log(Color);
//# sourceMappingURL=index.js.map