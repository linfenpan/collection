<template>
  <view class="page-product-list">
    <view class="banner">
      <image class="icon" src="https://cbg-my.res.netease.com/rc76a93b2a8018ea075454/dist/assert/index/index-banner.jpg" mode="widthFix" :lazy-load="true" />
    </view>
    <view class="product-list">
      <product-item v-for="item,index in list" v-bind:key="index" />
    </view>
    <scroll-loadmore :list.sync="list" :loadmore="loadmore" ref="scroll"></scroll-loadmore>
  </view>
</template>

<script>
  import ProductItem from '../../components/product-item.vue';
  import ScrollLoadmore from '../../components/scroll-load-more.vue';
  
  function $getMore() {
    return (new Array(Math.ceil(Math.random() * 10) + 1)).join('.').split('').map(function() { return {}; });
  }
  
  export default {
    components: {
      ProductItem,
      ScrollLoadmore,
    },
    data() {
      return {
        list: [{}],
      };
    },
    
    methods: {
      loadmore(page, done, isGiveup) {
        console.log('页码:' + page);
        setTimeout(() => {
          const more = $getMore();
          const i = page <= 2 ? 1 : Math.random();
          done({
            list: more,
            nomore: i >= 0.01 && i <= 0.1,
            error: i < 0.01 ? '请求错误，请点击重试' : false,
          });
        }, 1000);
      },
    },
    
    // 监听下拉刷新
    onPullDownRefresh() {
      setTimeout(() => {
        // this.list = [];
        this.$refs.scroll && this.$refs.scroll.restart();
        uni.stopPullDownRefresh();
      }, 200);
    },
    
    onPageScroll() {
      this.$refs.scroll && this.$refs.scroll.onScroll();
    },
    
    // onReady() {
    //   console.log('ready list')
    //   this.$refs.scroll && this.$refs.scroll.init();
    // }
  }
</script>

<style lang="less">
  .page-product-list {
    .product-list {
      margin: 0 20upx;
    }
    
    .banner .icon {
      width: 100%;
    }
  }
</style>
