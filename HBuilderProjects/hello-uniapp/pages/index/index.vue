<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view>
			<text class="title">{{title}}</text>
		</view>
    <view class="info">
      <text class="author">{{ author }}</text>
    </view>
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

<style>
	.content {
		text-align: center;
		height: 400upx;
	}

	.logo {
		height: 200upx;
		width: 200upx;
		margin-top: 200upx;
	}

	.title {
		font-size: 36upx;
		color: #8f8f94;
	}
  
  .info {
    text-align: center;
  }
  .author {
    font-size: 24upx;
    color: #ff0000;
  }
</style>
