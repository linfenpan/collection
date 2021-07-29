<template>
  <view class="product-item" :class="{ 'product-item-clickable': clickable }" @click="onclick">
    <image :src="data.icon" class="icon" :lazy-load="true" />
    <view class="info">
      <view class="left">
        <text class="name">{{ data.equip_name }}</text>
        <text class="level">{{ data.subtitle }}</text>      
        <view class="attr" v-if="data.desc_sumup">{{ data.desc_sumup }}</view>
        <view class="added_attrs" v-if="data.agg_added_attrs">{{ data.agg_added_attrs.join(' ') }}</view>
        <view class="highlights">
          <text v-for="(h,i) in data.highlight" :key="i">{{ h[0] }}</text>
        </view>
      </view>
      
      <view class="right">
        <view class="server">
          {{ data.area_name }}<text v-if="data.server_name">-{{ data.server_name }}</text>
        </view>
        
        <view class="price" v-if="data.price_total">¥{{ data.price_total|fenToYuan2 }}</view>
        <view class="price" v-else-if="data.price">¥{{ data.price|fenToYuan2 }}</view>
        <view class="price" v-else>&nbsp;</view>

        <view class="collect" v-if="data.collect_num">
          <text>{{ data.collect_num || 0 }}人收藏</text>
        </view>
      </view>
      
    </view>
    
    <view class="bottom"><slot name="bottom"></slot></view>
  </view>
</template>

<script>
  import ProductItems from './product-item.json';
  export default {
    props: {
      clickable: {
        type: Boolean,
        default: true,
      },
      link: {
        type: String,
        default: ''
      },
    },
    
    data() {
      return {
        data: ProductItems[Math.floor(Math.random() * ProductItems.length)],
      }
    },
    
    filters: {
      fenToYuan2(val) {
        return Math.round((val || 0) / 100).toFixed(2);
      },
    },
    
    methods: {
      onclick() {
        if (this.clickable) {
          const data = this.data;
          uni.navigateTo({
            url: this.link || `/pages/product/index?serverid=${data.serverid}&eid=${data.eid}`
          });
        }
      }
    },
  }
</script>

<style lang="less">
  .product-item {
    min-height: 100upx;
    padding: 24upx 0;
    border-bottom: 1upx solid #ddd;
  
    .icon {
      float: left;
      width: 100upx;
      height: 100upx;
    }
    
    .info {
      display: flex;
      overflow: hidden;
      padding-left: 16upx;
      font-size: 28upx;
      line-height: 165%;
      color: #888;
    }
    
    .left {
      flex: 1;
    }
    
    .right {
      padding-left: 10upx;
      text-align: right;
    }
    
    .name {
      font-weight: bold;
      font-size: 120%;
      color: #333;
    }
    
    .level {
      border-left: 1upx solid #e5e5e5;
      margin-left: .4em;
      padding-left: .4em;
    }
    
    .server {
      float: right;
    }
    
    .price {
      color: #e74e4b;
      font-weight: bold;
      font-size: 120%;
    }
    
    .highlights > text {
      display: inline-block;
      margin-right: 16upx;
      padding: 8upx 12upx;
      border-radius: 8upx;
      line-height: 1;
      background: #f1f1f1;
      color: #1e1e1e;
    }
    
    .bottom {
      clear: both;
    }
  }
  
  .product-item-clickable {
    transition: opacity .3s ease;
    &:active {
      opacity: 0.8;
    }
  }
</style>
