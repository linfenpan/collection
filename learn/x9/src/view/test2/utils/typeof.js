'use strict';

export function typeOf(o) {
  if (o === null) {
    return 'null';
  } else if (o === void 0) {
    return 'undefined';
  }
  return Object.prototype.toString.call(o).toString().split(' ')[1].slice(0, -1).toLowerCase();
}