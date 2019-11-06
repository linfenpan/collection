<template>
	<view class="page-index">
    <view class="content">
      <view class="list-item">
        <navigator url="/pages/product-list/index">商品列表</navigator>
      </view>
      
      <view class="list-item">
        <navigator url="/pages/product/index?serverid=669&eid=201903041900113-669-TCTFO0YQ6X4G">商品详情</navigator>
      </view>
      
      <view class="list-item">
        <navigator url="/pages/dialog/dialog">弹窗测试</navigator>
      </view>
    </view>
    
		<!-- <image class="logo" src="/static/logo.png"></image>
		<view>
			<text class="title">{{title}}</text>
		</view>
    <view class="info">
      <text class="author">{{ author }}</text>
    </view> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
        author: 'da棕熊',
				title: 'Hello word'
      }
		},
		onLoad(options) {
      // 代替 mounted 的，其中 options 获取上个页面，传过来的数据呢~
      console.log('index.vue加载完毕');
		},
    onReady() {
      // 代替 created 的
    },
    onReachBottom() {
      console.log('到达底部了吗');
    },
		methods: {

		}
	}
</script>

<style lang="less">
	.page-index {
    .content {
      padding: 20upx;
    }
  }
</style>
