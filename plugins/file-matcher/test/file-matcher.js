'use strict';
const Path = require('path');
const FileMatcher = require('../lib/file-matcher');

const matcher1 = new FileMatcher({
  cwd: Path.resolve(__dirname, 'src'),
  cache: true,
  deep: false
});

console.assert(
  matcher1.find(/\.js$/).length <= 0,
  '不应该找到文件的 -> []'
);
console.assert(
  matcher1.find(/\.html$/).length == 1,
  '应该找到单个文件 -> [index.html]'
);
console.assert(
  matcher1.find(/\.js$/, { deep: true }).length > 0,
  '应该找到多个文件 -> [js/index.js, js/jquery/jquery.js]'
);
console.assert(
  Path.normalize(matcher1.find(/\.html/, { relative: false })[0]).indexOf(matcher1.opts.cwd) === 0,
  '找到的文件，应该带有绝对路径的 -> [X:/xxx/xxx/index.html]'
);
console.assert(
  matcher1.find(/\.js$/, { cwd: Path.resolve(__dirname, 'src/js') }).length == 1,
  '应该只能找到单个文件 -> [index.js]'
);


const matcher2 = new FileMatcher({
  cwd: Path.resolve(__dirname, 'src'),
  cache: false,
  deep: true
});

console.assert(
  matcher2.find(/\.html$/).length === 1,
  '应该找到唯一的文件 -> [index.html]'
);
console.assert(
  matcher2.find(/\.js$/).length === 2,
  '应该找到两个脚本 -> [js/index.js, lib/jquery/jquery.js]'
);
console.assert(
  matcher2.find(/\.js$/, { deep: false }).length === 0,
  '不应该命中任何文件 -> []'
);
console.assert(
  matcher2.find(/\.js$/, { cwd: Path.resolve(__dirname, 'src/lib') }),
  '应该能命中一个文件 -> [jquery/jquery.js]'
);
console.assert(
  matcher2.find(/\.js$/, { cwd: Path.resolve(__dirname, 'src/lib'), deep: false }),
  '没有命中文件 -> []'
);
console.assert(
  Path.normalize(matcher2.find(/\.js$/, { cwd: Path.resolve(__dirname, 'src/js'), relative: false })[0]).indexOf(matcher2.opts.cwd) === 0,
  '找到的文件，应该带有绝对路径的 -> [X:/xxx/xxx/index.html]'
);
