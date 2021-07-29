一款简单的字符串模板**方法**

# 使用如下:
```javascript
var result = render('你好<%= this.name %>', { name: 'da宗熊' });
result; // -> '你好da宗熊'
```

# 其中有三种语法:

1. `<%= [key] %>` 输出被Html转义后的内容:
  ```javascript
  var result = render('hi <%= this.name %>', { name: '<span>da宗熊</span>' });
  // 输出: hi &lt;span&gt;da宗熊&lt;/span&gt;
  ```


2. `<%=# [key] %>` 输出原本内容:
  ```javascript
  var result = render('hi <%=# this.name %>', { name: '<span>da宗熊</span>' });
  // 输出: hi <span>da宗熊</span>
  ```


3. `<%  %>` 放置代码块

  ```javascript
  var result = render(`
    <% var list = this.list; %>
    <% for (var i = 0, max = list.length; i < max; i++) { %>
      当前是: <%= list[i] %>
    <% } %>
  `, { list: ['a', 'b', 'c'] });

  /*
    输出:
    当前是: a
    当前是: b
    当前是: c
  */

  ```

# 参数
`render`的第三个值，是参数，有以下值:
```javascript
* @property {boolean} [options.expandAttr=false] 是否展开属性
* @property {string} [options.nullValue=''] null或undefined的取值，应该是显示啥

// 例如:
render('hi <%= name %> <%= age %>', { name: 'da宗熊', age: null }, { expandAttr: true, nullValue: 'unknown' });
// => 输出 "hi da宗熊 unknown"
```