<template>
	<view class="scroll-load-more">
		<view v-if="nomore" class="nomore">
      <slot name="nomore">
        <text>已加载全部</text>
      </slot>
    </view>
    <view v-else-if="loading" class="loading">
      <slot name="loading">
        <text>加载中...</text>
      </slot>
    </view>
    <view v-else-if="errorText" @click="errorRetry && retry($event)" class="error">
      <slot name="error">
        <text>{{ errorText }}</text>
      </slot>
    </view>
	</view>
</template>

<script>
  /**
   * @example 
   * <scroll-loadmore ref="scroll" />
   * 在页面滚动时，触发滚动函数
   * onPageScroll() { this.$refs.scroll && this.$refs.scroll.onScroll(); }
   */
  const RootClassname = 'scroll-load-more';
  
	export default {
    props: {
      // @sync 数据存储的列表，如果不存入，就自己维护吧
      list: {
        type: Array,
        default() {
          return [];
        },
      },
      // 加载更多
      loadmore: {
        type: Function,
        required: true,
        default(page, done, isGiveup) { },
      },
      offset: {
        type: Number,
        default: 50,
      },
      disabled: {
        type: Boolean,
        default: false,
      },
      // 错误信息，数据加载失败时，显示的
      error: {
        type: String,
        default: '加载失败'
      },
      // 点击错误的时候，允许重试吗
      errorRetry: {
        type: Boolean,
        default: true,
      },
      // 触发首次加载吗
      firstLoad: {
        type: Boolean,
        default: true,
      },
      // 起始的分页索引
      startPageIndex: {
        type: Number,
        default: 1,
      },
    },
    
    data() {
      return {
        nomore: '',
        loading: '',
        resetTime: '',
        pageIndex: 0,

        errorText: '',
      };
    },
    
    watch: {
      disabled(now) {
        if (now) {
          this.$_stop_loadmore();
        }
      }
    },
    
    computed: {
      canLoadmore() {
        const ctx = this;
        return !ctx.nomore && !this.loading && !this.errorText && !this.disabled;
      }
    },
    
    methods: {      
      restart() {
        this.$emit('update:list', []);
        this.onScroll();
      },
      
      $_reset() {
        const ctx = this;
        ctx.nomore = '';
        ctx.loading = '';
        ctx.resetTime = new Date/1;
        ctx.pageIndex = 1;
        
        ctx.errorText = '';
      },
      
      async onScroll() {
        const { scrollY, base, win, el } = await this.$_get_scroll_info();
        // 判断是否已经离开屏幕，或者被隐藏掉
        if (el.left <= 0 && el.right <= 0) {
          return;
        }
        this.$_callback(scrollY + this.offset >= base);
      },
      
      // 获取屏幕、元素的滚动情况
      $_get_scroll_info() {
        const win = new Promise((resolve) => {
          uni.createSelectorQuery().selectViewport().fields({
            size: true, 
            scrollOffset: true
          }, data => {
            resolve(data);
          }).exec();
        });
        const el = new Promise((resolve) => {
          uni.createSelectorQuery().in(this).select('.' + RootClassname).fields({
            rect: true
          }, data => {
            resolve(data);
          }).exec();
        });
        
        return new Promise(resolve => {
          Promise.all([win, el]).then(([w, e]) => {
            const scrollTop = w.scrollTop || 0;
            resolve({
              scrollY: (w.height || 0) + scrollTop,
              base: (e.top || 0) + scrollTop,
              win: w, el: e,
            });
          });
        });
      },
      
      /**
       * 触发回调
       * @param {boolean} isIntersect 是否进入屏幕了
       * */
      $_callback(isIntersect) {
        if (!isIntersect || !this.canLoadmore) {
          return;
        }
        this.$_loadmore();
      },
      
      $_stop_loadmore() {
        this.loading = false;
        this.resetTime = new Date/1;
      },
      
      $_loadmore(pageIndex) {
        const ctx = this;
        let page = Math.max(1, pageIndex || ctx.pageIndex);
        
        const lastRestTime = ctx.resetTime;
        /**
         * 此次请求，是否已经被放弃了
         * */
        const isGiveup = function() {
          return ctx.resetTime > lastRestTime;
        };
        /**
         * 加载结束的回调
         * @property {boolean|string} [param0.error=false] 出现错误了吗？非 boolean 值，会覆盖掉 errorText 的
         * */
        const done = function({ error = false, nomore = false, list = [] }) {          
          /** 请求已经被放弃掉了 */
          if (isGiveup()) { return; }
          
          ctx.loading = false;
          
          /** 突然间被禁用了 */
          if (ctx.disabled) { return; }
          
          ctx.pageIndex = page + 1;
          if (error) {
            ctx.errorText = typeof error === 'boolean' ? ctx.error : error;
            return;
          } else if (nomore) {
            ctx.nomore = true;
            return;
          }
          
          let result = ctx.list || [];
          result.push.apply(result, list)
          
          ctx.$emit('update:list', result);
          ctx.$nextTick(() => {
            ctx.onScroll();
          });
        };
        
        ctx.errorText = '';
        ctx.nomore = false;
        ctx.loading = true;
        ctx.loadmore(page, done, isGiveup);
      },
      
      /** 尝试去重新加载最后一页，仅出现错误 或者 没数据时可用 */
      retry() {
        const ctx = this;
        if (ctx.errorText || ctx.nomore) {
          this.$_loadmore(ctx.pageIndex - 1);
        }
      },
    },
    
    mounted() {
      this.pageIndex = this.startPageIndex;
      if (this.firstLoad) {
        this.onScroll();
      }
    },
	}
</script>

<style lang="less">
.scroll-load-more {
  padding: 20upx 0;
  
  .nomore, .loading, .error {
    text-align: center;
  }
}
</style>
