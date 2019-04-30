"use strict";
// @doc https://www.tslang.cn/docs/handbook/enums.html
var ShapeKind;
(function (ShapeKind) {
    ShapeKind[ShapeKind["Circle"] = 0] = "Circle";
    ShapeKind[ShapeKind["Square"] = 1] = "Square";
})(ShapeKind || (ShapeKind = {}));
var c = {
    //    ~~~~~~~~~~~~~~~~ Error!
    // kind: ShapeKind.Square,
    kind: ShapeKind.Circle,
    radius: 100,
};
// console.log(l5_Enum) // 报错，因为这个枚举，实际上不存在
function isNumber(x) {
    return typeof x === "number";
}
function isString(x) {
    return typeof x === "string";
}
function padLeft(value, padding) {
    if (isNumber(padding)) {
        return Array(padding + 1).join(" ") + value;
    }
    if (isString(padding)) {
        return padding + value;
    }
    throw new Error("Expected string or number, got '" + padding + "'.");
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
//# sourceMappingURL=index5.js.map