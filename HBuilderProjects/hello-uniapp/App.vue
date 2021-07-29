<script>
	export default {
    globalData: {
      // 全局数据，通过 getApp().globalData.xx 来操作
      counter: 1,
    },
		onLaunch: function() {
      // 页面刷新，首次进入，均会触发
			console.log('App Launch')
		},
		onShow: function() {
      // 前后台切换，会触发，web端tab切换也会触发
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
    onError: function(err) {
      // 捕获 app 的错误
      console.log(err);
    }
	}
</script>

<style lang="less">
	/*每个页面公共css */
  .list-item {
    border-bottom: 1upx solid #ddd;
    &.arrow, > navigator {
      @r: 8upx;
      @t: 20upx;
      @l: 1.5;
      display: block;
      position: relative;
      padding: @t @r;
      line-height: @l;
      &:after {
        content: '>';
        color: #999;
        position: absolute;
        top: @t * (1 + (@l - 1) / 4);
        right: @r/2;
        font-family: monospace;
      }
    }
  }
</style>
