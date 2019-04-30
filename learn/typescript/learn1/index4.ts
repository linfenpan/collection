// @doc https://www.tslang.cn/docs/handbook/classes.html

class L4_Person {
  protected name: string;
  constructor(name: string) { this.name = name; }
}

class Employee extends L4_Person {
  // 同时可以赋予默认值
  private department: string = 'cbg';

  constructor(name: string, department: string) {
      super(name)
      this.department = department;
  }

  public getElevatorPitch() {
      return `Hello, my name is ${this.name} and I work in ${this.department}.`;
  }
}

let howard = new Employee("Howard", "Sales");
console.log(howard.getElevatorPitch());
// howard.name; // 错误，因为 name 为 protected，能给子类实例访问，但是外部是受限的
// 如果 constructor 被标注为 protected，那么该类只能让 子类 来继承使用，外部不能创建实例


// readonly 标识，注明属性只读，只能在构造函数中，进行更改
class Person2 {
  readonly name:string = '未知';

  constructor(theName: string) {
    this.name = theName;
  }
}
let person2 = new Person2('你好');
console.log(person2);
// person2.name = '222'; // 报错，因为 name 是只读的

// 与 Person2 等价
class Person3 {
  constructor(readonly name: string) {}
}


// 静态属性
class l4_Static {
  static orign = { x: 1, y: 2 };

  constructor(public scale: number) {}

  calculate(x: number, y: number) {
    return {
      x: x + l4_Static.orign.x * this.scale,
      y: y + l4_Static.orign.y * this.scale
    };
  }
}


// 抽象类，与 interface 类似，不过允许实现部分方法，允许写构造函数，只是要 abstract 标注而已
abstract class l4_Animal {
  abstract makeSound(): void;
  move(): void {
      console.log('roaming the earch...');
  }
}

class l4_Greeter {
  static standardGreeting = "Hello, there";
  greeting: string = 'one';
  greet() {
      if (this.greeting) {
        return "Hello, " + this.greeting;
      }
      else {
        return l4_Greeter.standardGreeting;
      }
  }
}

let l4_greeter1: l4_Greeter;
l4_greeter1 = new l4_Greeter();
console.log(l4_greeter1.greet());

// 等价于 greeterMacker = l4_Greeter;
let l4_greeterMaker: typeof l4_Greeter = l4_Greeter;
l4_greeterMaker.standardGreeting = "Hey there!";

let l4_greeter2: l4_Greeter = new l4_greeterMaker();
console.log(l4_greeter2.greet());