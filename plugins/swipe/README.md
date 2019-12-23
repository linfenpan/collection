# swiper.js

一个简单的广告切换组件，具体效果见: [例子](https://linfenpan.github.io/demo/swiper/index.html)

# 使用
需写入必要样式:

```css
.swiper {
  overflow: hidden;
  visibility: hidden;
  position: relative;
}
.swiper-wrap {
  overflow: hidden;
  position: relative;
}
.swiper-item {
  float:left;
  position: relative;
  -webkit-transition-property: -webkit-transform;
  transition-property: -webkit-transform;
  transition-property: transform;
  transition-property: transform, -webkit-transform;
  -webkit-transition-timing-function: ease;
          transition-timing-function: ease;
  -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
}
```

html 结果组织如下:
```html
<div class="swiper">
  <div class='swiper-wrap'>
    <div class="swiper-item">内容1</div>
    <div class="swiper-item">内容2</div>
    <div class="swiper-item">内容3</div>
  </div>
</div>
```

调用脚本:
```javascript
var swiper = new Swiper(document.querySelector(".swiper"));
```

# options
即初始化的第二个参数
```javascript
new Swiper(elem[, options]);
```

## index：开始的索引
## ratio：每个子元素，占总宽度百分比，值为 0 ~ 1，默认 1
## elastic：阻力大小，值为 0 ~ 1，默认 0.3
## slideTime：滑动时间
## resetTime：重置事件
## nextDistance：到下一帧距离px或<1
## interval：自动切换到下一帧的时间，默认0，不自动切换
## repeat：是否允许循环滑动
## wrapSelector：wrap选择器，默认 .swiper-wrap
## childSelector：子元素选择器，默认 .swiper-item
## slideCallback：切换到下一帧的回调，动画完成前会执行


# api

## swiper.resize()
当元素大小发生更变时，可以调用此方法重置组件长宽

## swiper.next(withAnimate?)
切换到下一页

## swiper.prev(withAnimate?)
切换到上一页

## swiper.startTimer()
启动计时器

## swiper.stopTimer()
关闭计时器

## swiper.destroy()
销毁组件

## swiper.setIndex(index[, withAnimate?])
切换到指定页面，第二个参数是 是否启动 动画