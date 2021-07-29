// 学习文档: https://www.tslang.cn/docs/handbook/typescript-in-5-minutes.html

// 参数需要指定使用的类型，不然会有警告的
function greeter(person: string) {
  return 'Hello, ' + person;
}
let user = 'da宗熊';
document.body.innerHTML = greeter(user);


// 接口测试
interface Person {
  firstName: string;
  lastName: string;
}

function greeter2(person: Person) {
  return 'Hello, ' + person.firstName + ' ' + person.lastName;
}
let user2 = { firstName: 'Jane', lastName: 'User', age: 30 };
document.body.innerHTML += '<br/>' + greeter2(user2);


// 类测试
class Student {
  fullName: string;
  
  // 无论是 public 还是 protected 和 private，其实都会存在当前对象中，只是影响到继承而已
  constructor(public firstName:string, public middleInitial:string, public lastName:string) {
    this.fullName = firstName + ' ' + middleInitial + ' ' + lastName;
    // 在构造函数中的变量，会变扔到 this 里面
    // console.log('在构造函数中的变量，会被扔到 this 里面', this.firstName);
  }

  sayHi() {
    console.log('hi:' + this.fullName);
  }
}
let user3 = new Student('Jane', 'M.', 'User');
console.log(user3);
user3.sayHi();
document.body.innerHTML += '<br/>' + greeter2(user3);


// 类型: 枚举 -> 索引从 0 开始，Color.Red = 0  -- Color[0] = 'Red'
enum Color {Red, Green, Blue}
console.log(Color);