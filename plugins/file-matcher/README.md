使用如下:

```javascript
// 下面的参数，是默认值
const matcher = new FileMatcher({
  // 查找的根目录
  cwd: process.cwd(),
  // 是否搜查子目录
  deep: true,
  // 忽略目录下，匹配条件的目录 or 文件
  ignore: [/node_modules/],
  // 是否使用缓存模式，使用的话，每次 find 都从缓存去查找，不再需要遍历所有目录，提高效率
  cache: false,
  // 是否返回相对路径
  relative: true
});

// find 方法，第一个参数，支持单个正则，或者是正则的列表
const files = matcher.find(/\.js$/, { /* 参考构造函数的参数 */ });
```