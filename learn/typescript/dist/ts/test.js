"use strict";
// interface Person {
//   firstName: string;
//   lastName: string;
// }
// function greeter(person: Person) {
//   return "Hello, " + person.firstName + ' ' + person.lastName; 
// }
// let user = { firstName: 'Type', lastName: 'Script' };
// document.body.innerHTML = greeter(user);
// // 基础类型
// let isDone: boolean = true;
// let isTen: number = 10;
// let isStr: string = 'bb';
// let isStr2: string = `Hello, my name is ${name}`;
// let arr1: Array<number> = [1, 2, 3];
// let arr2: number[] = [1, 2, 3];
// let x: [string, number] = ['1', 1];  // 定义前两位，是字符串、数字的形式，后面的，就没有顺序的要求了，但是也仅限输入数字和字符串
// // 枚举，默认 Color.Red = 0，以此递增
// enum Color1 { Red, Green, Blue }
// // 如果指定起始值，后面的值，按起始值递增
// enum Color2 { Red = 1, Green, Blue }
// // 也可以全部赋值
// enum Color3 { Red = 2, Green = 4, Blue = 6}
// // 反过来，也是可以使用
// Color3[2] === 'Red';
// // 类型断言
// let someValue: any = "this is a string";
// let strLength1: number = (<string>someValue).length;
// let strLength2: number = (someValue as string).length;
// // 普通接口
// interface inter1 {
//   firstName: string;
//   secondName: string;
// };
// // 接口字段可选，颜色可选，但是宽度必须设置
// interface inter2 {
//   color?: string;
//   width: number;
// };
// // 只读属性，修改的话，会报错
// interface inter3 {
//   readonly x: number;
//   readonly y: number;
// };
// let point3: inter3 = { x: 1, y: 2 };
// // point3.y = 3; // 会出现警告
// // 定义任意可能的属性值
// interface inter4 {
//   color?: string;
//   width?: number;
//   // 可以是非 color 和 width 的任意属性，任意值
//   [propName: string]: any;
// }
// // 定义函数的返回值
// interface searchFn {
//   (source: string, subString: string): boolean; // 参数有两个，分别是source和subString，返回值必须是 boolean
// }
// let mySearch: searchFn;
// mySearch = function(source: string, sub: string):boolean {
//   return true;
// }
// // 类定义
// class Greeter {
//   greeting: string;
//   constructor(message: string) {
//     this.greeting = message;
//   }
//   greet() {
//     return "Hello, " + this.greeting;
//   }
// }
// let greeterTest = new Greeter('World');
// // 类继承
// class Animal {
//   name: string;
//   constructor(theName: string) {
//     this.name = theName;
//   }
//   move(distanceInMeters: number = 0) { // 不传入，默认是 0
//     console.log(`${this.name} moved ${distanceInMeters}m.`);
//   }
// }
// class Dog extends Animal {
//   constructor(name: string) {
//     super(name);
//   }
//   bark() {
//     console.log('Woof! Woof!');
//   }
// }
// const dog = new Dog('Keyli');
// dog.bark();
// dog.move();
// dog.move(10);
// dog.bark();
//# sourceMappingURL=test.js.map