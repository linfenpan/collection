/**
  * 简单的模板渲染方法
 * @example
 *   var result = render('你好<%= this.name %>', { name: 'da宗熊' }); // -> '你好da宗熊'
 *   使用与 ejs 类似，含三类语法: <% 代码块 %>，<%= 输出内容[被转义后的] %>，<%=# 输出内容[没被转义的] %>
 * @param {*} html 模板
 * @param {*} data 数据
 * @param {object} options
 * @property {boolean} [options.expandAttr=false] 是否展开属性
 * @property {string} [options.nullValue=''] null或undefined的取值，应该是显示啥
 * @returns {string}
 */
function render(html, data, options) {
  function merge(a, b) {
    for (var key in b) { if (b.hasOwnProperty(key)) { a[key] = b[key]; } }
    return a;
  }
  options = merge({ expandAttr: false, nullValue: '' }, options || {});

  var reg = new RegExp('<%=?#?([\\s\\S]*?)%>', 'g');
  data = data || {};
  html = html || '';

  var functionBody = ['var $_res = [];\n'];
  var start = 0;

  function pure(str) {
    return typeof str === 'string' ? str.replace(/"/g, '\\"').replace(/\n|\r/g, '\\n') : str;
  }

  // 增加取值函数
  functionBody.push('var $_val = function(v) { return v == null ? "'+ pure(options.nullValue) +'" : v };');

  // 添加转义函数
  functionBody.push('var $_escape = ' + (function (s) {
    var str = s + '';
      str = str.replace(/&/g, '&amp;');
      str = str.replace(/</g, '&lt;');
      str = str.replace(/>/g, '&gt;');
      str = str.replace(/"/g, '&quot;');
    return str;
  }).toString() + ';\n');

  // 把 data 所有属性，插入一次，请保留 $_res、$_val、 $_escape 三个变量
  if (options.expandAttr) {
    for (var key in data) {
      if (data.hasOwnProperty(key) && /^[^\d\s"']/.test(key)) {
        functionBody.push('var ' + key + ' = this.' + key + ';\n');
      }
    }
  }

  var exec = null;
  while (exec = reg.exec(html)) {
    var index = exec.index;
    var str = exec[0];
    var key = exec[1];
    var offset = str.length;

    if (start < index) {
      functionBody.push('$_res.push("'+ pure(html.slice(start, index)) +'");\n');
    }
    start = index + offset;

    // <%= value %> 转义输出
    // <%=# value %> 不转义输出
    if (str.charAt(2) === '=') {
      if (str.charAt(3) === '#') {
        functionBody.push('$_res.push($_val('+ key +'));\n');
      } else {
        functionBody.push('$_res.push($_escape($_val('+ key +')));\n');
      }
    } else {
      functionBody.push(key + '\n');
    }
  }

  // 如果 start 不是尽头，就再插入一次
  if (start < html.length) {
    functionBody.push('$_res.push("'+ pure(html.slice(start, html.length)) +'");\n');
  }

  functionBody.push('return $_res.join(\'\');');
  var fn = new Function(functionBody.join(''));
  var res = fn.call(data || {});
  fn = null;

  return res;
};