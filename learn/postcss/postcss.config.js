'use strict';
const Path = require('path');

module.exports = {
  plugins: [
    // 加载图片，不用管前缀路径
    // 1. 添加了 width(图片地址)/height(地址)/size(地址) 获取图片宽高，不过只是 px
    // 2. 不能识别 svg 的宽度和高度
    // 3. inline(地址)，可以引入 base64 的图片
    require('postcss-assets')({
      // 使用相对路径
      relative: true,
      // 寻址目录，千万不要在前面加 /，或让你哭的
      loadPaths: ['image1', 'image2'],
      // 是否在图片地址后，添加 版本号，不建议开启
      cachebuster: true
    }),

    // 替换图片，postcss-assets 可以读取 with、height，以及使用 resolve，inline 关键字
    // 但是 postcss-url 不需要使用 resolve，就使用原本的 url 关键字，而且提供 base64 和 hash 两种形式
    // 因为 postcss-assets 会转换出 url 的形式，所以，这里我们不设置 basePath 参数
    // 建议只使用 inline 方法，作为 base64 的引入，不然老奇怪的
    require('postcss-url')({
      url: 'inline',
      maxSize: 2, // 单位是 kb
      // basePath: ['image1', 'image2']
    }),

    // 类似 sass 的语法，但是并不是 sass https://github.com/jonathantneal/precss
    // 1. 能使用 @custom-selector 和 @custom-media，不要使用 var(--xx) 的语法，没有转换的
    // 2. 支持 sass 的大部分语法，如: $var, @for, @each, @if, @mixin + @include, @extend, @at-root, @import 等
    require('precss'),

    // 规则自动排序，除了降低编译效率，木有什么用...
    require('postcss-sorting')({
      // 可以选择，按字母排序， 'alphabetical'
      'properties-order': [
        'overflow', 'display',
        'position', 'z-index', 'top', 'left', 'bottom', 'right',
        'width', 'height', 'line-height', 'max-width', 'min-width', 'max-height', 'min-height',
        'margin', 'margin-top', 'margin-left', 'margin-bottom', 'margin-right',
        'padding', 'padding-top', 'padding-left', 'padding-bottom', 'padding-right'
      ],
    }),

    // 不建议使用 cssnext，请使用 precss 代替之
    // // 支持下一版本的 css 功能，内置了 autoprefixer，所以要兼容IE 8，需要配置 browsers: [] 参数
    // // 1. 自定义变量 :root { --var1: var1 value; }
    // // 2. 支持 calc 函数 与 变量一起使用 -> calc(var(--width) * 10)
    // // 3. 自定义媒体查询，@custom-media --small-viewport (max-width: 30em); -> @media (--small-viewport) {}
    // // 4. 自定义选择器， @custom-selector :--button button, .button;  -> :--button { 属性 }
    // // 5. 支持background-image: image-set(url() 1px, url() 2px, url() xxdpi)，自动转换分辨率的文件
    // // 6. 允许使用 filter 属性
    // // 7. rem 不支持时，回退到 px 单位，比例是 1rem = 16px，可在
    // // 8. system-ui 指向当前系统的所有字体
    // require('postcss-cssnext')({
    //   // 参数看 https://github.com/MoOx/postcss-cssnext/blob/master/src/features.js
    //   features: {
    //     // rem: false, // 关闭功能
    //     // https://github.com/robwierzbowski/node-pixrem
    //     rem: {
    //       rootValue: 16,  // 可被 :root 和 html 的 font-size 值，覆盖
    //       atrules: false, // @ 的规则，是否要一起转换
    //       html: true      // 是否根据 :root 和 html 规则的 font-size，重新计算
    //     }
    //   }
    // }),

    // cssnano 是一个样式压缩插件，能删除注释、空白、去除重复代码、过时浏览器前缀，一般能压缩 50% 的代码
    // 一般建议这么使用，就足够了，因为 cssnext 中，包含了 autoprefixer，所以 cssnano 中，需要把插件关闭
    // 里面含有一些规则，要知道的:
    // 1. calc 会被尽量计算出来，如 calc(2 * 100px) -> 200px;
    // 2. 颜色值，会尽量转为 hex 格式
    // 3. 单位的值，会被尽量统一，如 500ms -> .5s
    // 4. 删除非重点的注释、删除重复代码、删除不生效代码、空代码，多余的换行、空格会被删除
    // 5. margin-left 之类的属性，会被合并，同一个选择器的代码，会被合并，font 的相关属性会被格式化
    // 6. 渐变的方向，会被修复为 deg 的格式
    // 7. @charset 的声明，会被提升到顶部
    // 8. display 如果有两个值，会被尽量更正为一个值
    // 9. background-position 的值，会被修复为百分比
    // 10. 字符串内容，换行等会被修复
    // 11. transition 和 animation 的 timing-function-properties 会被统一
    // 12. unicode 字符转换
    // 13. background-url 格式统一
    // 14. 格式化各个值的位置，如 border: red solid 1px -> border: 1px solid red;
    // 15. 将 base64 的 svg，更改为 svg 的声明，更加简短
    require('cssnano')({ autoprefixer: false }),

    // 自动补全前缀
    require('autoprefixer')({
      browsers: ['> 20%', 'ie >= 8']
    })
  ]
};
