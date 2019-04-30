"use strict";
// @doc https://www.tslang.cn/docs/handbook/basic-types.html
// 测试一下各个类型
;
// 数字类型
var l2_number = 6;
console.log(typeof l2_number);
// 字符串类型
var l2_string = '呵呵';
console.log(typeof l2_string);
// 数组类型
var l2_arr1 = [1, 2, 3];
var l2_arr2 = l2_arr1;
var l2_arr3 = [];
var l2_arr4 = [{ name: 'x' }];
// 数组的变种，元组
var l2_tuple1 = ['xx', 2];
// 元组的越界元素，只要满足 string 或者 number 的要求，均可以赋值（但是如果是调用原生的方法，如果两个类型没有一个支持的，就会报错）
l2_arr1[2] = 2;
// 枚举 默认索引，是从0开始的，下面指定了默认从 1 开始（甚至可以给每一项赋值，枚举转出来的对象，比较有趣，下标和名字，均能访问）
var L2_Color;
(function (L2_Color) {
    L2_Color[L2_Color["Red"] = 1] = "Red";
    L2_Color[L2_Color["Green"] = 2] = "Green";
    L2_Color[L2_Color["Blue"] = 3] = "Blue";
})(L2_Color || (L2_Color = {}));
// => {1: "Red", 2: "Green", 3: "Blue", Red: 1, Green: 2, Blue: 3}
console.log(L2_Color);
// any 类型，代表任意类型，与数组配合也是不错的，但不建议使用
var l2_any;
l2_any = 1;
l2_any = true;
l2_any = [];
l2_any = void 0;
l2_any = null;
// void 类型，代表 undefined（如果没设置严格的 strictNullChecks:true，那么 null 和 undefined 是相等的）
function l2_void() {
    return void 0;
}
// null 和 undefined 类型，没什么用
// newver 类型，代表永远不会存在的类型，如异常、死循环等，可以指定这个类型
// object 类型，表示非原始的类型，就不是上述说的任意一个类型
var l2_object1 = {};
// 声明一个外部方法，它是有以下参数，以及返回的
function l2_create(o) {
    console.log(o);
}
l2_create({});
l2_create(null);
// l2_create(void 0); // 这是错误的，因为没有声明
// 断言类型
var l2_some = 'this is a string';
// 虽然不声明 l2_some 为 string，实际也没什么关系，但是声明后，更加健壮？
var l2_some_length1 = l2_some.length;
// 与上面的声明等价~
var l2_some_length2 = l2_some.length;
console.log('\n');
console.log('\n');
//# sourceMappingURL=index2.js.map