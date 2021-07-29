'use strict';

export function getCurrentTime() {
  return new Date/1;
}

export function recordLoadTime(time) {
  var img = new Image();
  img.src = '/test.gif?time=' + time;
}