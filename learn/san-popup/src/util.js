'use strict';

export const browser = (function() {
  var ua = navigator.userAgent;
  var ual = ua.toLowerCase();

  var android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
  var ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
  var ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
  var iphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/);

  let phoneVersion = '';
  if  (android) {
    phoneVersion = android[2];
  } else if (iphone && !ipod) {
    phoneVersion = iphone[2].replace(/_/g, '.');
  } else if (ipad) {
    phoneVersion = ipad[2].replace(/_/g, '.');
  } else if (ipod) {
    phoneVersion = ipod[3].replace(/_/g, '.');
  }

  return {
    version: (ual.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/) || [])[1],
    safari: /webkit/.test(ual),
    opera: /opera/.test(ual),
    msie: /msie/.test(ual) && !/opera/.test(ual),
    mozilla: /mozilla/.test(ual) && !/(compatible|webkit)/.test(ual),

    android: !!android,
    ios: !!(ipad || ipod || iphone),
    phoneVersion: phoneVersion,
  };
})();

export function hasClass(el, c) {
  return new RegExp('(\\s|^)' + c + '(\\s|$)').test(el.className);
};

export function addClass(el, c) {
  if (hasClass(el, c)) {
    return;
  }
  if (el.classList) {
    el.classList.add(c);
  } else {
    el.className += ' ' + c;
  }
};

export function removeClass(el, c) {
  if (el.classList) {
    el.classList.remove(c);
  } else {
    el.className = el.className.replace(new RegExp('\\b' + c + '\\b'), '');
  }
};

export function onTransitionEnd(dom, callback, { event/* 监听 animationEnd 之类的事件 */, timeout }) {
  var events = ['webkitTransitionEnd', 'transitionend', 'oTransitionEnd', 'MSTransitionEnd', 'msTransitionEnd'],
    i;
  
  if (event) {
    var en1 = event.replace(/^\w/, function(w) {
      return w.toUpperCase();
    });
    events = [
      'webkit' + en1, 
      event.toLowerCase(), 
      'o' + en1,
      'MS' + en1,
      'ms' + en1
    ];
  }

  var timer;
  function fireCallBack(e) {
    if (e.target !== this) return;
    clearTimeout(timer);
    callback.call(this);
    for (i = 0; i < events.length; i++) {
      dom.removeEventListener(events[i], fireCallBack);
    }
  }

  if (callback) {
    for (i = 0; i < events.length; i++) {
      dom.addEventListener(events[i], fireCallBack);
    }
    if (timeout) {
      timer = setTimeout(function() {
        fireCallBack.call(dom, { target: dom });
      }, timeout);
    }
  }

  return dom;
};


export function typeOf(o) {
  if (o === null) {
    return 'null';
  } else if (o === void 0) {
    return 'undefined';
  }
  return Object.prototype.toString.call(o).toString().split(' ')[1].slice(0, -1).toLowerCase();
}

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


// evt = "click.a" => return => { name: 'click', type: 'a' }
function parseEvent(evt) {
  var events = evt.split('.');
  return { name: events[0], type: events[1] };
};

// 遍历事件，event = 'event1 event2', fn(name, type)
function listEvent(evt, fn) {
  evt.split(' ').forEach(function(e) {
    var eventObj = parseEvent(e);
    var name = eventObj.name;
    var type = eventObj.type;
    
    fn(name, type, e);
  });
};

function _Dispatcher(context) {
  context = context || null;
  // map = { eventName: [ { type: 'subEventName', fn: fn } ] }
  var map = {  };
  // argsMap = { eventName1: [], eventName2: [] }
  var argsMap = {  };

  return {
    /**
     * 绑定事件
     * @param {String} event = 'eventName'|'eventName.subEventName'|'event1 event2'
     * @param {Function} fn 事件的回调函数
     * @param {Boolean} [triggerIfHadFired] 如果触发过了，是否立即执行一次？
     * @return self
    */
    on: function(event, fn, triggerIfHadFired) {
      var ctx = this;

      listEvent(event, function(key, type, evt) {
        if (!map[key]) {
          map[key] = [];
        }
        
        var item = { type: type, fn: fn };
        map[key].push(item);
        
        // 如果历史中，这个函数，已经被触发过了，应该立刻执行
        var args = argsMap[evt] || argsMap[key];
        if (triggerIfHadFired && args) {
          ctx.fire(evt, args, [ item ]);
        }
      });
      
      return ctx;
    },

    /**
     * 一次性事件，触发一次后，自动解绑，参考 on 的使用
     * @return self
    */
    one: function(event, fn) {
      var ctx = this;
      var newFn = function() {
        fn.apply(this, [].slice.call(arguments, 0));
        ctx.off(event, newFn);
      };
      
      ctx.on(event, newFn);
      
      return ctx;
    },

    /**
     * 事件发布，触发当前所有的
     * @param {String} event = 'eventName'|'eventName.subEventName'|'event1 event2'
     * @param {Array|Null} args 事件触发的参数列表
     * @param {Array} [triggerList] 触发列表 -> [ {type, fn} ]
     * @return self
    */
    fire: function(event, args, triggerList) {
      args = args || [];
      if (typeOf(args) !== 'array') {
        throw new Error('fire(e, args), args should be array');
      }
      
      listEvent(event, function(key, type, evt) {
        argsMap[evt] = args.slice(0);

        if (!map[key]) {
          return;
        }
        
        // slice(0)，是用于防止 one，或者 off 带来的不良影响
        var list = (triggerList || map[key] || []).slice(0);

        list.forEach(function(item) {
          // @notice，如果 item，已经不在 map[key] 中了，应该放弃本次执行
          if (list.indexOf(item) < 0) {
            return;
          }
          
          if (type) {
            if (item.type === type) {
              item.fn.apply(context, args);
            }
          } else {
            item.fn.apply(context, args);
          }
        });
      });
      return this;
    },

    /**
     * 事件解绑
     * @param {String} event 需要解绑的回调事件，event = 'eventName'|'eventName.subEventName'|'event1 event2'
     * @param {Function|Null} fn 当前事件，须解绑的回调事件
     * @return self
    */
    off: function(event, fn) {
      listEvent(event, function(key, type, evt) {
        if (!map[key]) {
          return;
        }
        
        var dataList = map[key];
        if (fn) {
          // 找到特定的 fn，删除之
          var list = dataList.slice(0);
          dataList = [];

          for (var i = 0, max = list.length; i < max; i++) {
            var item = list[i];
            // 函数相等，如果指定了 type，则类型也相等，才删除
            if (item.fn != fn || (type != item.type)) {
              dataList.push(item);
            }
          }

          map[key] = dataList;
        } else if (type) {
          // 找到特定的 type，删除之
          var list = dataList.slice(0);
          dataList = [];

          for (var i = 0, max = list.length; i < max; i++) {
            var item = list[i];
            if (item.type != type) { 
              dataList.push(item);
            }
          }
          
          map[key] = dataList;
        } else {
          map[key] = [];
        }
      });
      return this;
    },

    /**
     * 销毁发布器
     */
    destroy() {
      map = {};
      argsMap = {};
    }
  };
}

/**
 * 把 on/off/one/fire/cleanupDispatcher 等方法，捆绑到当前的上下文
 * @param {*} context 
 */
_Dispatcher.pipe = function(context) {
  var dispatcher = new Dispatcher(context);
  context.cleanupDispatcher = function() {
    dispatcher.destroy();
  };
  context._dispatcher = dispatcher;

  const list = ['on', 'off', 'one', 'fire'];
  for (let i = 0, max = list.length; i < max; i++) {
    const key = list[i];
    context[key] = dispatcher[key].bind(context);
  };

  return dispatcher;
};

export const Dispatcher = _Dispatcher;