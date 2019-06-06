<script>
	export default {
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

<style>
	/*每个页面公共css */
</style>
