// @doc https://www.tslang.cn/docs/handbook/interfaces.html

// 问号，代表可选参数
interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  let newSquare = {color: "white", area: 100};
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}

let mySquare = createSquare({color: "black"});


// readonly 代表只读，不可写
interface SquareConfig2 {
  // 只读 和 可选，可以一起使用
  readonly color?: string;
  width: number;
}

let square_config2:SquareConfig2 = { color: 'red', width: 200 };
// square_config2.color = 'green'; // 报错，只读


// 支持任何不在的声明
interface SquareConfig3 {
  color?: string;
  width?: number;
  // 支持任意 字符串的属性，它的值允许任何
  [propName: string]: any;
}



// 函数接口
interface l3_SearchFunc {
  (source: string, substring: string): boolean;
}

let l3_my_searchfunc: l3_SearchFunc;
  // 默认继承了 l3_SearchFunc 的声明
l3_my_searchfunc = function(a, b) {
  return true;
}
// l3_my_searchfunc(1, 2); // 报错，因为 1 不是string


// 类类型: 声明类必须有某个属性
interface ClockInterface {
  currentTime: Date;
}
class Clock implements ClockInterface {
  currentTime: Date;
  constructor() {
    this.currentTime = new Date;
  }
}

// 类类型: 声明类，必须以怎样 声明其他 方法呢
interface ClockConstructor {
  test (hour: number, minute: number): any;
}
class Clock2 implements ClockConstructor {
  currentTime: Date;
  constructor(public hour: number = 1, public minute: number = 2) {
    this.currentTime = new Date;
  }

  test (hour: number, minute:number) {

  }
}


// 接口集成
interface l3_Shape {
  color: string;
}
interface l3_Square extends l3_Shape {
  width: number;
}
