<template>
  <div class="main">
    <div class="components">
      <draggable :list="components" :sort="false" :clone="cloneComponent" :group="{ name: 'content', pull: 'clone', put: false }">
        <div class="component-item" v-for="(c,index) in components" :key="index">
          <span :style="c.style">{{ c.name }}</span>
        </div>
      </draggable>
    </div>
    <div class="content-container">
      <!-- <div class="content-wrap"> -->
        <div class="content-holder"></div>
        <draggable class="content" v-model="result" group="content">
          <!-- TODO 要传入初始化的高度 和 宽度 -->
          <!-- TODO 要传入初始化时的 x 和 y 坐标 -->
          <drag-resize v-for="item in result" :key="item.id"
            class="content-item" 
            :minw="5"
            :minh="5"
            :isStaticMode="true"
            :isActive="item.id == activeId"
            @mousedown.native="saveActiveElement(item.id)"
            @deselect="$event => deselectElement(item.id)"
            @resizing="$event => changeItem(item.initData, $event)"
            @dragging="$event => changeItem(item.initData, $event)"
          >
            <element-div v-if="item.initData.tag == 'div'"
              :data="item.initData"
            />
          </drag-resize>
        </draggable>
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable';
// import dragResize from 'vue-drag-resize';
import dragResize from './component/drag-resize/vue-drag-resize.vue';
import elementDiv from './element/element-div.vue';

let ID = 1;
export default {
  components: {
    draggable,
    dragResize,
    elementDiv,
  },

  data() {
    return {
      components: [
        {
          html: '<div>请输入文本</div>',
          name: '插入标题',
          panel: 'text',
          initData: {
            tag: 'div',
            html: '请输入文本',
            attribute: { },
            style: {'font-size': '18px', 'font-weight': 'bold', 'width': '100%' },
          }
        },
        {
          html:  '<div>请输入文本</div>',
          name: '插入文本',
          panel: 'text',
          initData: {
            tag: 'div',
            html: '请输入文本',
            attribute: { },
            style: { 'width': '100%' },
          }
        }
      ],

      // 被选中的元素
      activeId: -1,

      // 插入的内容
      result: [

      ]
    };
  },

  methods: {
    cloneComponent(data) {
      const clone = Object.create(data);
      clone.id = ID++;
      return clone;
    },

    changeItem(data, style) {
      const now = Object.keys(style).reduce((map, key) => {
        map[key] = style[key] + 'px';
        return map;
      }, {});
      data.style = Object.assign({}, data.style || {}, now);
    },

    // 记录下上次选中的元素 id
    saveActiveElement(id) {
      this.activeId = id;
    },

    deselectElement(id) {
      if (this.activeId == id) {
        this.activeId = -1;
      }
    },
  }
}
</script>

<style lang="less">
.main {
  display: flex;
  height: 100%;
}
.components {
  width: 200px;
  background: #fff;
}
.component-item {
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
  font-size: 14px;
  background: #fff;
  box-shadow: 0 0 4px #000;
}
.content-item {
  float: left;
  word-break: break-all;
  word-wrap: break-word;
  vertical-align: top;
}
</style>
