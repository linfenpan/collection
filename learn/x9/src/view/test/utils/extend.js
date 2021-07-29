'use strict';
import { typeOf } from './typeof';

/**
 * 与配置合并，如果当前属性是个对象，则对象间再次合并
 * @param {Object} orgData 原数据
 * @param {Object} data 合并的内容，允许多个data
 * @example merge(obj, data1, data2, ...);
 * @returns {Object}
*/
export function merge(orgData, data) {
 function doMerge(source, now) {
   for (var key in now) {
     if (now.hasOwnProperty(key)) {
       var nowValue = now[key];
       var typeNowVal = typeOf(nowValue);

       if (typeNowVal === 'object') {
         var sourceVal = source[key];
         var typeSourceVal = typeOf(sourceVal);
         if (typeSourceVal === 'object') {
           source[key] = merge(sourceVal, nowValue);
         } else {
           source[key] = merge({}, nowValue);
         }
       } else {
         source[key] = nowValue;
       }
     }
   }
   return source;
 }

 var args = [].slice.call(arguments, 1);
 var result = orgData || {};
 for (var i = 0, max = args.length; i < max; i++) {
   result = doMerge(result, args[i] || {});
 }
 return result;
};

export function extend(isDeep, orgData) {
  var args = [].slice.call(arguments, 0);

  if (typeOf(isDeep) === 'object') {
    orgData = isDeep;
    isDeep = void 0;
    args = args.slice(1);
  } else {
    args = args.slice(2);
  }

  function extend(source, now) {
    for (var key in now) {
      if (now.hasOwnProperty(key)) {
        var val = now[key];
        var typeVal = typeOf(val);
        
        if (isDeep) {
          switch (typeVal) {
            case 'object':
              source[key] = extend({}, val);
              break;
            case 'array':
              var arr = val.slice(0);
              var res = [];
              for (var i = 0, max = arr.length; i < max; i++) {
                var v1 = { v: arr[i] };
                var v2 = extend({}, v1);
                res.push(v2.v);
              }
              source[key] = res;
              break;
            default:
              source[key] = val;
          }
        } else {
          source[key] = val;
        }
      }
    }
    return source;
  }

  var result = orgData || {};
  if (args.length <= 0) {
    result = extend({}, result);
  } else {
    for (var i = 0, max = args.length; i < max; i++) {
      result = extend(result, args[i] || {});
    }
  }
  
  return result;
};


/**
 * 数组深复制
 * @param {array} array 被深复制的数组
 * @return {array}
 */
export function deepCloneArray(array) {
  return array.slice(0).map(v => {
    var t = typeOf(v);
    switch (t) {
      case 'object':
        return extend(true, v);
      case 'array':
        return deepCloneArray(v);
    }
    return v;
  });
};