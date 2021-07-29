var elScroller = document.getElementById('scroller');
var elLoadMore = document.getElementById('loadmore');
var elLoadPrevious = document.getElementById('loadprevious');

Transform(elScroller, true);
Transform(elLoadMore, true);
Transform(elLoadPrevious, true);

var alloyTouch = null;

window.addEventListener('load', function() {
  alloyTouch = new AlloyTouch({
    touch: '#wrapper',
    target: elScroller,
    property: 'translateY',
    initialValue: 0, // 必填
    max: 0, // 顶部最大滚动值
    min: -elScroller.scrollHeight + window.innerHeight, // 底部最小滚动值
    sensitivity: 0.75,
    change: function (value) {
      if (value > 0) {
        elLoadPrevious.translateY = value;
      } else {
        elLoadPrevious.translateY = 0;
      }

      if (value <= this.min) {
        elLoadMore.translateY = value - this.min;
      } else {
        elLoadMore.translateY = 0;
      }
    },
    touchMove: function (evt, value) {
      if (value < 50) {
        elLoadPrevious.innerHTML = elLoadMore.getAttribute('data-text-ready');
      } else {
        elLoadPrevious.innerHTML = elLoadMore.getAttribute('data-text-done');
      }

      if (value > this.min - 50) {
        elLoadMore.innerHTML = elLoadMore.getAttribute('data-text-ready');
      } else {
        elLoadMore.innerHTML = elLoadMore.getAttribute('data-text-done');
      }
    },
    touchEnd: function (evt, value) {
      if (value >= 50) {
        this.to(60);
        loadPrevious(this);
        return false;
      }

      if (value <= this.min - 50) {
        this.to(this.min - 60);
        loadnext(this);
        return false;
      }
    }
  });

  function loadPrevious(at) {
    setTimeout(function() {
      at.to(0);
    }, 2000);
  }

  function loadnext(at) {
    setTimeout(function() {
      at.to(0);
      setTimeout(function() {
        elLoadMore.translateY = 0;
      }, 200);
    }, 2000);
  }
});
window.addEventListener('resize', function() {
  alloyTouch.min = -elScroller.scrollHeight + window.innerHeight;
});
