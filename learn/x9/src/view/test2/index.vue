<template>
  <div class="main">
    <div class="elements">
      <draggable :list="elements" :sort="false" :clone="cloneComponent" :group="{ name: 'content', pull: 'clone', put: false }">
        <div class="element-item" v-for="(item,index) in elements" :key="index" @click="createAbsComponent(item)">
          <span :style="item.style" class="element-item-cnt">{{ item.name }}</span>
        </div>
      </draggable>
    </div>
    <div class="content-container">
      <div class="content-holder"></div>
      <content-items class="content" :list="result" group="content" ref="content" />
    </div>
  </div>
</template>

<script>
import mixin from './content/mixin';
import draggable from 'vuedraggable';
import elementDiv from './element/element-div.vue';
import elementContainer from './element/element-container.vue';

// @hack 给子组件使用
import contentItems from './content/content-items.vue';
Vue.mixin({
  components: {
    contentItems,
  },
});

let ID = 1;
let ContentWidth = 375;

export default {
  mixins: [ mixin ],

  components: {
    draggable,
    contentItems,
  },

  data() {
    return {
      // 元素组件
      elements: [
        {
          name: '插入标题',
          panel: 'text',
          tag: 'div',
          html: '请输入文本',
          attribute: { },
          style: { 'font-size': '18px', 'font-weight': 'bold', 'line-height': '2', 'height': '40px', 'width': `${ContentWidth}px`, 'text-align': 'center' },
          abstractStyle: { }, // 仅展示用的样式，非实际样式（用于补充预览的）
          children: [],
        },
        {
          name: '插入文本',
          panel: 'text',
          tag: 'div',
          html: '请输入文本',
          attribute: { },
          style: { 'font-size': '14px', 'line-height': '2', 'height': '30px', 'width': `${ContentWidth}px`, 'text-align': 'center' },
          abstractStyle: { }, // 仅展示用的样式，非实际样式（用于补充预览的）
          children: [],
        },
        {
          name: '容器',
          panel: 'container',
          tag: 'container',
          attribute: { },
          style: { 'width': `${ContentWidth}px`, 'height': '30px', "line-height": 1.5 },
          abstractStyle: { }, // 仅展示用的样式，非实际样式（用于补充预览的）
          children: [],
        },
      ],

      // 结果数据
      result: [ ]
    };
  },

  methods: {
    // 获取主体内容的布局信息
    getContentRect() {
      const elConent = this.$refs.content.$el;
      let rect = { top: 0, left: 0, width: 0, height: 0 };
      if (elConent) {
        rect = elConent.getBoundingClientRect();
      }
      return { top: rect.top, left: rect.left, width: rect.width, height: rect.height };
    },

    // 复制组件
    cloneComponent(data) {
      const res = this.cloneElementData(data);
      res.id = ID++;
      return res;
    },

    // 创建绝对定位的组件
    createAbsComponent(data) {
      const rect = this.getContentRect();
      const elContent = this.$refs.content.$el;
      const elParent = elContent.parentElement;

      const parentHeight = elParent.clientHeight;
      const dataWidth = parseInt(data.style.width) || ContentWidth;

      const top = Math.abs(rect.top) - elContent.offsetTop + Math.min(parentHeight, elContent.clientHeight)/2;
      const left = (ContentWidth - dataWidth)/2;

      data = this.cloneComponent(data);
      data.style = Object.assign(data.style || {}, { position: 'absolute', top: `${top}px`, left: `${left}px` });
      data.abstractStyle.position = 'static';
      this.result.push(data);
    },

    // // 尝试删除板块
    // tryDelete() {
    //   const { keyCode, key } = event || {};
    //   // 点击了任意一个删除按钮
    //   if (key == 'Backspace' || key == 'Delete' || keyCode == 8 || keyCode == 46) {
    //     const activeId = this.activeId;
    //     if (activeId >= 0) {
    //       const index = this.result.findIndex((item) => {
    //         return item.id == activeId;
    //       });
    //       if (index >=0) {
    //         this.result.splice(index, 1);
    //       }
    //       this.activeId = -1;
    //     }
    //   }
    // },

    // bindUI() {
    //   this.unbindUI();
    //   // 绑定删除功能
    //   if (!this.fnDelete) {
    //     this.fnDelete = this.tryDelete.bind(this);
    //     window.addEventListener('keyup', this.fnDelete);
    //   }
    // },

    // unbindUI() {
    //   // 解绑删除功能
    //   window.removeEventListener('keyup', this.fnDelete);
    //   this.fnDelete = null;
    // },
  },

  // mounted() {
  //   this.bindUI();
  // },

  // beforeDestroy() {
  //   this.unbindUI();
  // },
}
</script>

<style lang="less">
.main {
  display: flex;
  height: 100%;
}
.elements {
  width: 200px;
  background: #fff;
}
.elements .element-item {
  padding: 12px 20px;
  outline: 1px dotted #ccc;
}

.content-container {
  flex: 1;
  padding: 10px;
  background: #f0f0f0;
  overflow: auto;
  text-align: center;
  font-size: 0;
}
.content-holder {
  display: inline-block;
  vertical-align: middle;
  min-height: 100%;
}
.content {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  width: 375px;
  min-height: 667px;
  text-align: left;
  font-size: 0;
  background: #fff;
  box-shadow: 0 0 4px #000;
}
.content-item {
  display: inline-block;
  word-break: break-all;
  word-wrap: break-word;
  vertical-align: top;
  cursor: default;
}

// 排序相关的内容
.sortable-ghost {
  z-index: 20;
  opacity: 0.5;
}
.content {
  .sortable-ghost {
    .element-item-cnt { display: inline-block; }
  }
}
</style>
