<template>
	<view class="page-dialog">
		<view class="list-item arrow" @click="showToast">Toast</view>
    <view class="list-item arrow" @click="showToastWithIcon">Toast 带图标</view>
    
    <view class="list-item arrow" @click="showLoading">Loading</view>
    
    <view class="list-item arrow" @click="showActionSheet">
      ShowActionSheet
      <text v-if="sheetSelect" style="float: right; color: gray; padding-right: 20upx;">选中:({{ sheetSelect }})</text>
    </view>
    
    <view class="list-item arrow" @click="showModal">
      ShowModal
    </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				sheetSelect: ''
			}
		},
		methods: {
			showToast() {
        uni.showToast({
          icon: 'none',
          title: 'toast提示怎么样的？'
        });
      },
      
      showToastWithIcon() {
        uni.showToast({
          title: '成功（超短文案）',
          icon: 'success',
        });
      },
      
      showLoading() {
        uni.showLoading({
          title: '加载中...',
          mask: true,
        });
        
        setTimeout(() => {
          uni.hideLoading();
        }, 1500);
      },
      
      showActionSheet() {
        const list = ['A', 'B', 'C'];
        uni.showActionSheet({
          itemList: list, // 数组长度，最大为6
          success: (res) => {
            this.sheetSelect = list[res.tapIndex];
          }
        })
      },
      
      showModal() {
        uni.showModal({
          title: '提示',
          content: '这是一个模态弹窗',
          success: function (res) {
              if (res.confirm) {
                console.log('用户点击确定');
              } else if (res.cancel) {
                console.log('用户点击取消');
              }
          }
        });
      },
      
      // TODO 尝试 subNVue 搞定弹窗
		}
	}
</script>

<style lang="less">

</style>
