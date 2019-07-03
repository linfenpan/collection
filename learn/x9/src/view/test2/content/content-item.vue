<template>
  <drag-resize 
    class="content-item"
    :key="item.id"
    :w="getInitialWidth(item.style)"
    :h="getInitialHeight(item.style)"
    :x="item.style.left ? parseInt(item.style.left) : 0"
    :y="item.style.top ? parseInt(item.style.top) : 0"
    :z="isAbsoluteStyle(item.style) ? zIndex : 'auto'"
    :minw="minWidth"
    :minh="minHeight"
    :isStaticMode="!isAbsoluteStyle(item.style)"
    :isActive="isActive(item)"
    @mousedown.native="selectComponent(item)"
    @deselect="$event => deSelectComponent(item)"
    @resizing="$event => changeItem(item, $event)"
    @dragging="$event => changeItem(item, $event)"
  >
    <component :is="getComponent(item)" :data="item" :group="group" />
  </drag-resize>
</template>

<script>
import mixin from './mixin';
import dragResize from '../component/drag-resize/vue-drag-resize.vue';
import { ElementMap, EmptyElement } from '../config';
import { extend } from '../utils';

export default {
  mixins: [ mixin ],

  components: { dragResize },

  props: {
    // 被调整的目标
    // 展示的内容, item = { id, style, attribute, children... }
    item: {
      type: Object,
      required: true,
    },
    // 排序的分组
    group: {
      type: String,
      default: 'content',
    },
    // 初始的 zIndex 值
    zIndex: {
      type: Number,
      default: 1,
    },
    // 最小宽度
    minWidth: {
      type: Number,
      default: 1,
    },
    // 最小高度
    minHeight: {
      type: Number,
      default: 1,
    },
  },

  computed: {
    // 选中的组件id列表
    selectedComponentIds() {
      return this.$store.state.selectedComponentIds || [];
    },
  },

  methods: {
    // 获取初始宽度
    getInitialWidth(style) {
      return parseInt((style || {}).width) || 0;
    },

    // 获取初始高度
    getInitialHeight(style) {
      return parseInt((style || {}).height) || 0;
    },

    // TODO 内容是否被选中
    isActive(item) {
      const selectedComponentIds = this.selectedComponentIds;
      return !!selectedComponentIds.find((id) => {
        return id == item.id;
      });
    },

    // 更新选中元素
    updateSelectedComponentIds(selectedComponentIds) {
      this.$store.dispatch('updateSelectedComponentIds', { selectedComponentIds });
    },

    // 选中元素
    selectComponent(item) {
      let selectedComponentIds = this.selectedComponentIds;
      if (!this.isAbsoluteStyle(item.style)) {
        selectedComponentIds = [];
      }
      if (selectedComponentIds.findIndex(id => id == item.id) < 0) {
        this.updateSelectedComponentIds(selectedComponentIds.concat(item.id));
      }
    },

    // 不再选中组件
    deSelectComponent(item) {
      const selectedComponentIds = this.selectedComponentIds.slice(0);
      const index = selectedComponentIds.findIndex(id => id == item.id);

      if (index >= 0) {
        selectedComponentIds.splice(index, 1);
        this.updateSelectedComponentIds(selectedComponentIds);
      }
    },

    // 获取要展示的组件
    getComponent(item) {
      console.log(ElementMap)
      return ElementMap[item.tag] || EmptyElement;
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
  },
}
</script>
