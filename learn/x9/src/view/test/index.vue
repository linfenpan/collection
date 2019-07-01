<template>
  <div class="main">
    <div class="components">
      <draggable :list="components" :sort="false" :clone="cloneComponent" :group="{ name: 'content', pull: 'clone', put: false }">
        <div class="component-item" v-for="(item,index) in components" :key="index" @click="createAbsComponent(item)">
          <span :style="item.style" class="component-item-cnt">{{ item.name }}</span>
        </div>
      </draggable>
    </div>
    <div class="content-container">
      <!-- <div class="content-wrap"> -->
        <div class="content-holder"></div>
        <!-- 禁止组件移动，还可以 -> :move="moveComponent" -->
        <draggable class="content" v-model="result" group="content">
          <!-- TODO 要传入初始化的高度 和 宽度 -->
          <!-- TODO 要传入初始化时的 x 和 y 坐标 -->
          <!-- isStaticMode 参数，是摆放在固定位置的 -->
          <drag-resize v-for="item in result" :key="item.id"
            class="content-item" 
            :w="375"
            :h="0"
            :z="isAbsoluteStyle(item.style) ? 10 : 'auto'"
            :minw="5"
            :minh="5"
            :isStaticMode="!isAbsoluteStyle(item.style)"
            :isActive="item.id == activeId"
            @mousedown.native="saveActiveElement(item.id)"
            @deselect="$event => deselectElement(item.id)"
            @resizing="$event => changeItem(item, $event)"
            @dragging="$event => changeItem(item, $event)"
          >
            <element-div v-if="item.tag == 'div'"
              :data="item"
              group="content"
            />
            <element-container v-else-if="item.tag == 'container'"
              :data="item"
              group="content"
            />
          </drag-resize>
        </draggable>
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable';
import dragResize from './component/drag-resize/vue-drag-resize.vue';
import elementDiv from './element/element-div.vue';
import elementContainer from './element/element-container.vue';

let ID = 1;
export default {
  components: {
    draggable,
    dragResize,
    elementDiv,
    elementContainer,
  },

  data() {
    return {
      components: [
        {
          name: '插入标题',
          panel: 'text',
          tag: 'div',
          html: '请输入文本',
          attribute: { },
          style: { 'font-size': '18px', 'font-weight': 'bold', 'line-height': '2', 'height': '40px', 'width': '375px', 'text-align': 'center' },
          abstractStyle: { }, // 仅展示用的样式，非实际样式（用于补充预览的）
          children: [],
        },
        {
          name: '插入文本',
          panel: 'text',
          tag: 'div',
          html: '请输入文本',
          attribute: { },
          style: { 'font-size': '14px', 'line-height': '2', 'height': '30px', 'width': '375px', 'text-align': 'center' },
          abstractStyle: { }, // 仅展示用的样式，非实际样式（用于补充预览的）
          children: [],
        },
        {
          name: '容器',
          panel: 'container',
          tag: 'container',
          attribute: { },
          style: { 'width': '375px', 'height': '30px', "line-height": 1.5 },
          abstractStyle: { }, // 仅展示用的样式，非实际样式（用于补充预览的）
          children: [],
        },
      ],

      // 被选中的元素
      activeId: -1,

      // 插入的内容
      result: [

      ]
    };
  },

  methods: {
    // 是定位样式吗
    isAbsoluteStyle(style) {
      const position = (style || {}).position;
      return position == 'absolute' || position == 'fixed';
    },

    // 复制组件
    cloneComponent(data) {
      const res = { id: ID++ };
      Object.keys(data).forEach((key) => {
        const value = data[key];
        if (Array.isArray(value)) {
          res[key] = [ ...value ];
        } else if (typeof value == 'object') {
          res[key] = { ...value };
        } else {
          res[key] = value;
        }
      });
      return res;
    },

    // 创建绝对定位的组件
    createAbsComponent(data) {
      data = this.cloneComponent(data);
      data.style = Object.assign(data.style || {}, { 'position': 'absolute' });
      this.changeItem(data, { });
      this.result.push(data);
    },

    // 调整元素样式
    changeItem(data, style) {
      const now = Object.keys(style).reduce((map, key) => {
        map[key] = style[key] + 'px';
        return map;
      }, {});
      data.style = Object.assign({}, data.style || {}, now);

      // 如果是定位元素
      if (this.isAbsoluteStyle(data.style)) {
        const style = data.style;
        'top,left,right,bottom'.split(',').forEach((key) => {
          const val = data.style[key];
          delete data.abstractStyle[key];
          data.abstractStyle[key] = '';
        });
        data.abstractStyle.position = 'static';
      }
    },

    // // 移动组件
    // moveComponent({ relatedContext, draggedContext }, orgEvent) {
    //   const relatedElement = relatedContext.element;
    //   const draggedElement = draggedContext.element;

    //   return (
    //     (!relatedElement || !this.isAbsoluteStyle(relatedElement.style)) && 
    //     !this.isAbsoluteStyle(draggedElement.style)
    //   );
    // },

    // 记录下上次选中的元素 id
    saveActiveElement(id) {
      this.activeId = id;
    },

    // 反选元素
    deselectElement(id) {
      if (this.activeId == id) {
        this.activeId = -1;
      }
    },

    // 尝试删除板块
    tryDelete() {
      const activeId = this.activeId;
      if (activeId >= 0) {
        const index = this.result.findIndex((item) => {
          return item.id == activeId;
        });
        if (index >=0) {
          this.result.splice(index, 1);
        }
        this.activeId = -1;
      }
    },

    bindUI() {
      this.unbindUI();
      // 绑定删除功能
      if (!this.fnDelete) {
        this.fnDelete = this.tryDelete.bind(this);
        window.addEventListener('keyup', this.fnDelete);
      }
    },

    unbindUI() {
      // 解绑删除功能
      window.removeEventListener('keyup', this.fnDelete);
      this.fnDelete = null;
    },
  },

  mounted() {
    this.bindUI();
  },

  beforeDestroy() {
    this.unbindUI();
  },
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
.components .component-item {
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
  opacity: 0.5;
}
.content {
  .sortable-ghost {
    .component-item-cnt { display: inline-block; }
  }
}
</style>
