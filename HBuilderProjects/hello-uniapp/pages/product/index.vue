<template>
	<view class="page-product">
		<web-view v-if="url" :src="url"></web-view>
    <view v-if="error">
      <text>404</text>
    </view>
    <view v-else>
      loading...
    </view>
	</view>
</template>

<script>
	export default {    
    computed: {
      url() {
        const query = this.$route.query;
        const eid = query.eid, serverid = query.serverid;
        if (!eid || !serverid) {
          return '';
        }
        return `https://xyq-m.cbg.163.com/cgi/mweb/equip/${serverid}/${eid}`;
      },
      error() {
        const query = this.$route.query;
        const eid = query.eid, serverid = query.serverid;
        if (!eid || !serverid) {
          return true;
        }
        return false;
      },
    },
    
		methods: {
			
		},
	}
</script>

<style lang="less">
.page-product {
  padding-top: 100upx;
  text-align: center;
  color: #666;
  // height: calc(100vh - var(--status-bar-height) - var(--window-top) - var(--window-bottom));
}
</style>
