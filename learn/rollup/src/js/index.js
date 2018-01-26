'use strict';

import { getCurrentTime } from './util';

console.log(getCurrentTime());

function Test() {
  console.log('hello');
  var str = [
    '1',
    '2'
  ];
  var str2 = "mm";
  
  return str.join('') + str2;
}

Test();