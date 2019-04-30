// @doc https://www.tslang.cn/docs/handbook/enums.html

enum ShapeKind {
  Circle,
  Square,
}

interface Circle {
  // 不建议这样使用哈，要用也是这样: kind: ShapeKind
  kind: ShapeKind.Circle;
  radius: number;
}

interface Square {
  // 不建议这样使用哈，要用也是这样: kind: ShapeKind
  kind: ShapeKind.Square;
  sideLength: number;
}

let c: Circle = {
  //    ~~~~~~~~~~~~~~~~ Error!
  // kind: ShapeKind.Square,

  kind: ShapeKind.Circle,
  radius: 100,
}

// 这个代码是错误的，想想看 x 必定是 ShapeKind，但是你的判断，却是如果 x 不是 ShapeKind，那是不是傻？
// function l5_f1(x: ShapeKind) {
//   if (x !== ShapeKind.Circle || x !== ShapeKind.Square) {
//     console.log('呵呵');
//   }
// }
// console.log(l5_f1())

// 外部枚举，仅声明，不做生成、初始化
declare enum l5_Enum {
  A = 1,
  B,
  C = 2
}
// console.log(l5_Enum) // 报错，因为这个枚举，实际上不存在



function isNumber(x: any): x is number {
  return typeof x === "number";
}

function isString(x: any): x is string {
  return typeof x === "string";
}

function padLeft(value: string, padding: string | number) {
  if (isNumber(padding)) {
      return Array(padding + 1).join(" ") + value;
  }
  if (isString(padding)) {
      return padding + value;
  }
  throw new Error(`Expected string or number, got '${padding}'.`);
}


// function foo(x: number) {
//   // 想想，如果 x = 1/2/3/4，实际上均满足这个条件啊，所以 typescript 不建议这么使用
//   if (x != 1 || x != 2) {
//       //         ~~~~~~~
//       // Operator '!==' cannot be applied to types '1' and '2'.
//       console.log('呵呵2')；
//   }
// }
// foo(2);
