'use strict';
/**
  * 目标，提供一个日志打点的框架
  *
 */
;(function (ctx, name, defination) {
  ctx[name] = defination(ctx);
})(window, 'Tracker', function(win) {
  var doc = win.document;
  var encode = win.encodeURIComponent;
  var decode = win.decodeURIComponent;

  function each(obj, callback) {
    if (typeOf(obj) === 'array') {
      for (var i = 0, max = obj.length; i < max; i++) {
        callback.call(obj, obj[i], i);
      }
    } else {
      for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
          callback.call(obj, obj[key], key);
        }
      }
    }
  }
  function typeOf(obj) {
    if (obj === null) { return 'null'; }
    if (obj === void 0) { return 'undefined'; }
    return Object.prototype.toString.call(obj).split(' ')[1].slice(0, -1).toLowerCase();
  }
  function toArray(obj) {
    return [].slice.call(obj, 0);
  }
  function trim(str) {
    if (str) {
      return str.trim ? str.trim() : str.toString().replace(/^\s+|\s+$/g, '');
    }
    return '';
  }
  function extend(obj) {
    var args = toArray(arguments);
    var obj = args.shift();
    each(args, function(sour) {
      each(sour, function(val, key) {
        obj[key] = val;
      });
    });
    return obj;
  }
  function toQueryString(obj, isListMode) {
    var params = [];
    each(obj, function(val, key) {
      var type = typeOf(val);
      switch (type) {
        case 'object':
          var str = toQueryString(val).replace(/([^=&]?)=/g, key + '%5B$1%5D=');
          params.push(str);
          break;
        case 'array':
          var res = [];
          each(val, function(v) {
            res.push(key + (isListMode ? '' : '%5B%5D') + '=' + encode(v));
          });
          params.push(res.join('&'));
          break;
        default:
          params.push(key + '=' + encode(val));
      }
    });
    return params.join('&');
  }
  function addEvent(el, evt, fn, isBubble) {
    if (el.addEventListener) {
      el.addEventListener(evt, fn, !!isBubble);
    } else {
      el.attachEvent('on' + evt, fn);
    }
  }
  function removeEvent(el, evt, fn, isBubble) {
    if (el.removeEventListener) {
      el.removeEventListener(evt, fn, !!isBubble);
    } else {
      el.detachEvent('on' + evt, fn);
    }
  }
  function getParentByAttr(elem, attr) {
    var parent = elem;
    while (parent) {
      var attributes = parent.attributes;
      if (!attributes) {
        break;
      }
      if (attr in attributes) {
        return parent;
      }
      parent = parent.parentNode;
    }
    return null;
  }
  var Cookie = {
    read: function(key) {
      var res = doc.cookie.match('(^|;)\\s*' + encode(key) + '\\s*=\\s*([^;]+)');
      return res ? decode(res.pop()) : '';
    },
    write: function(key, val, day) {
      var expires = '';
      if (day) {
        var date = new Date;
        date.setDate(date.getDate() + day);
        expires = 'expires=' + date.toGMTString();
      }
      doc.cookie = key + '=' + encode(val) + ';' + expires;
    },
    remove: function(key) {
      this.write(key, null, -1);
    }
  };

  // 统计属性转换 map
  var StatAttributeMap = {
    'EA': function(adapter, options) {
      // params = ['.xxx', 'serverid']
      var elem = options.root;
      var params = options.params;
      var selector = params[0];
      if (selector) {
        elem = adapter.queryChild(options.root, selector);
      }
      return elem && elem.getAttribute(params[1]) || '';
    },
    'ET': function(adapter, options) {
      var elem = options.root;
      var params = options.params;
      var selector = params[0];
      if (selector) {
        elem = adapter.queryChild(options.root, selector);
      }
      return elem && adapter.getText(elem) || '';
    },
    'G': function(adapter, options) {
      var val = '';
      try {
        var expr = options.params[0];
        val = eval(expr);
      } catch (e) { }
      return val;
    }
  };

  // 元素选择适配器
  var Adapter = {
    // 请返回单个dom元素
    querySelector: function(selector) {
      return document.querySelector(selector);
    },
    // 请返回单个dom元素
    queryChild: function(root, selector) {
      return root.querySelector(selector);
    },
    getAttribute: function(ele, attr) {
      return ele.getAttribute(attr);
    },
    getHtml: function(ele) {
      return ele.innerHTML;
    },
    getText: function(ele) {
      return ele.innerText;
    }
  };

  function Tracker(options) {
    var ctx = this;
    ctx.update(options || {});
    ctx.isDebug = false;
  }

  Tracker.prototype = {
    _log: function() {
      var args = arguments;
      this.isDebug && window.console && console.log.apply(console, args);
    },

    // 更新参数
    update: function(options) {
      if (!options) { return; }

      var ctx = this;

      // [保存在上下文的key, options的key, 默认值]
      var keysList = [
        // 日志上报地址
        ['url', 'url', ''],
        // 日志的默认数据，重新 update，会覆盖掉之前的值
        ['dataSend', 'data', {}],
        // 特殊属性切割符号，如 G_EquipInfo.xxx
        ['splitTag', 'splitTag', '_'],
        // 统计属性
        ['statAttr', 'statAttr', 'stat'],
        // 停止统计的标志
        ['stopAttr', 'stopAttr', 'statstop'],
        // 统计的额外参数
        ['statParam', 'statParam', 'statparam'],
        // 是否需要指纹
        ['fingerprint', 'fingerprint', false],
        // 如果没有值，默认返回神马?
        ['defaultValue', 'defaultValue', '-']
      ];

      for (var i = 0, max = keysList.length; i < max; i++) {
        var keys = keysList[i];
        var val = options[keys[1]];
        var key0 = keys[0];

        if (val == null) {
          // 从历史中获取
          ctx[key0] = ctx[key0] == null ? keys[2] : ctx[key0];
        } else {
          ctx[key0] = val;  
        }
      }
    },

    // 拓展默认数据
    extendData: function(data) {
      extend(this.dataSend, data || {});
    },

    getFingerprint: function() {
      var ctx = this;
      if (!ctx.fingerprintValue) {
        ctx.fingerprintValue = Cookie.read('fingerprint');
      }
      return ctx.fingerprintValue;
    },

    bindClick: function(elRoot, defaultOptions) {
      var ctx = this;
      var options = extend({
        data: '',
        event: 'click',
        statAttr: ctx.statAttr,
        stopAttr: ctx.stopAttr,
        statParam: ctx.statParam,
        isListModeSend: false
      }, defaultOptions || {});

      var statAttr = options.statAttr;
      var stopAttr = options.stopAttr;
      var statParam = options.statParam;

      elRoot = elRoot || doc;
      elRoot.setAttribute && elRoot.setAttribute(stopAttr, '');

      function clickHandler(e) {
        var target = e.target || e.srcElement;
        var attributes = target.attributes;

        // 元素没有统计属性，而且父元素也没有，则不统计
        if ((!attributes || !(statAttr in attributes))) {
          target = getParentByAttr(target, statAttr);
          if (!target) {
            return;
          }
        }

        // 从当前元素，往上寻找的所有属性
        var allAttr = ctx.getAllStat(target, statParam, stopAttr);
        // 当前元素的属性
        var currentStatAttr = ctx.compileStat(target, target.getAttribute(statAttr)) || {};

        // 默认数据 = Tracker 默认数据 + bindClick 的默认数据
        var dataDefault = extend(
          ctx.compileStat(elRoot, ctx.dataSend) || {},
          ctx.compileStat(elRoot, options.data) || {}
        );
        // 是否需要指纹 + 默认数据 + 当前 stat属性 + statparam属性
        var data = extend(
          ctx.fingerprint ? { fingerprint: ctx.getFingerprint() } : {}, 
          dataDefault,
          allAttr,
          currentStatAttr
        );

        ctx._log(data);
        ctx.sendLog(data, options.isListModeSend);
      }

      if (elRoot.addEventListener) {
        addEvent(elRoot, options.event, clickHandler, true);
      } else {
        elRoot.attachEvent('onmouseup', clickHandler);
      }
    },

    getAllStat: function(elem, statParam, stopAttr) {
      // <div stat="ip: ET_#client_ip; version: 100" />
      // equip_serverid: EA_a img, data_serverid;  从当前元素开始选择， Element Attribute
      // ip: ET_#client_ip 子元素的文本，Element Text
      // serverid: G_ServerInfo.serverid 全局变量，如果是 function，则传入当前元素与tracker，并且运行, Global
      // ver: 100 静态字段

      var ctx = this;
      var list = [];
      var parent = elem;

      // 一直寻找到根目录或拥有停止属性的元素，找到所有的需要配置的元素
      var shouldStop = false;
      while (parent && parent != doc) {
        var attr = parent.getAttribute(statParam);
        if (attr) {
          list.push({
            elem: parent,
            attr: attr
          });
        }
        parent = parent.parentNode;

        if (shouldStop) {
          break;
        }
        var attributes = parent.attributes;
        if (stopAttr && (!attributes || stopAttr in attributes)) {
          shouldStop = true;
        }
      }
      // 将数据倒转，越外层，应该优先级更低
      list.reverse();

      // 以分号间隔，是每个独立的表达式
      var res = {};
      each(list, function (item) {
        extend(res, ctx.compileStat(item.elem, item.attr) || {});
      });

      return res;
    },

    /**
     * 把元素的值，编译为可运行的对象
     * @param {object} elem - 参考的dom对象
     * @param {string|object} stat - 需要编译的字符串，或者是结果对象
    */
    compileStat: function(elem, stat) {
      if (arguments.length == 1) {
        stat = elem;
        elem = null;
      }
      if (!stat) {
        return;
      }

      var ctx = this;
      var type = typeOf(stat);
      var res = {};
      var root = elem;
      var TAG = ctx.splitTag;
      var DEF = ctx.defaultValue;

      function def(v) {
        return v == null ? DEF : v;
      }

      switch (type) {
        case 'string':
          // ip: ET_#client_ip; type: web;
          // 以分号间隔表达式，冒号为key/value间隔
          var attrs = stat.split(';');
          each(attrs, function(str) {
            var idx = str.indexOf(':');
            if (idx < 0) {
              idx = 0;
            }
            var key = trim(str.slice(0, idx));
            var val = trim(str.slice(idx + 1));
            if (!key) {
              return;
            }

            // TAG = '_'
            idx = val.indexOf(TAG);
            // 从 ip: ET_#client_ip 中，找到 ET 和 #client_ip
            var type = '';
            if (idx > 0) {
              // 非 TAG 开头，并且 TAG 存在，则获取相关的 type 和 val
              type = val.slice(0, idx);
              val = val.slice(idx + 1);
            } else if (idx == 0){
              // 以 TAG 开头，后面的内容，不做任何处理
              val = val.slice(1);
              return res[key] = def(val);
            }

            // 以逗号间隔，是函数要运行的参数
            var params = val.split(',');
            each(params, function (v, i) { params[i] = trim(v); });

            // 属性转换，如果在属性 MAP 中不存在，则原值返回
            if (type) {
              if (StatAttributeMap[type]) {
                val = StatAttributeMap[type].call(ctx, Adapter, {
                  root: root,
                  params: params,
                  key: key,
                  value: val,
                  type: type
                });
              } else {
                val = type + TAG + val;
              }
            }
            return res[key] = def(val);
          });
          break;
        case 'object':
          each(stat, function(val, key) {
            if (val == void 0) {
              res[key] = DEF;
              return;
            }
            var typeVal = typeOf(val);
            switch (typeVal) {
              case 'object':
                var obj = (res[key] || {});
                res[key] = extend(obj, ctx.compileStat(root, val));
                break;
              case 'function':
                res[key] = val.call(ctx, Adapter, { root: root, key: key });
                break;
              default:
                res[key] = def(val);
            }
          });
          break;
      }

      return res;
    },

    sendLog: function(params, callback, isListMode) {
      var ctx = this;
      var url = ctx.url;
      var typeCallback = typeOf(callback);

      switch (typeCallback) {
        case 'function':
          break;
        case 'object':
          var options = callback;
          isListMode = !!options.isListMode;
          callback = options.callback;
          url = options.url;
          break;
        default:
          isListMode = !!callback;
          callback = null;
      }

      var img = new Image();
      img.onload = img.onerror = function() {
        callback && callback();
        img.onload = img.onerror = null;
      };

      var qs = toQueryString(extend({v: Math.random()}, params || {}), isListMode);
      img.src = url + (url.indexOf('?') >= 0 ? '' : '?') + qs;
    },

    sendWithDefault: function(params, callback, isListMode) {
      var data = this.dataSend || {};
      if (typeof data == 'string') {
        data = this.compileStat(data);
      }
      
      var obj = {};
      if (this.fingerprint) {
        obj.fingerprint = this.getFingerprint();
      }
      
      params = this.compileStat(
        extend(obj, this.dataSend, params || {})
      );
      return this.sendLog(params, callback, isListMode);
    }
  };

  Tracker.StatAttributeMap = StatAttributeMap;
  Tracker.addConverter = function(key, fn) {
    StatAttributeMap[key] = typeOf(fn) === 'string' ? StatAttributeMap[fn] : fn;
    return this;
  };

  Tracker.setAdapter = function(adapter) {
    extend(Adapter, adapter || {});
  };

  // FIX 修正跳转时，请求没发送的bug
  addEvent(window, 'beforeunload',function() {
    setTimeout(function() { }, 1000);
  }, true);

  return Tracker;
});
