<template>
  <draggable :list="list" :group="group">
    <content-item
      class="drag-resize-item"
      v-for="item in listMap.normal"
      :key="item.id"
      :item="item"
      :minWidth="minWidth"
      :minHeight="minHeight"
      :zIndex="zIndex"
      :group="group"
    />
    <div slot="footer" v-if="listMap.abs.length">
      <content-item
        class="drag-resize-item"
        v-for="item in listMap.abs"
        :key="item.id"
        :item="item"
        :minWidth="minWidth"
        :minHeight="minHeight"
        :zIndex="zIndex"
        :group="group"
      />
    </div>
  </draggable>
</template>

<script>
import mixin from './mixin';
import draggable from 'vuedraggable';
import contentItem from './content-item.vue';

export default {
  name: 'content-items',

  mixins: [ mixin ],

  components: { draggable, contentItem },

  props: {
    // 被调整的目标
    // 展示的内容, items = [ { id, style, attribute, children... }, {} ]
    list: {
      type: Array,
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
    // => { normal: 普通内容列表, abs: 定位内容列表 }
    listMap() {
      const isAbsoluteStyle = this.isAbsoluteStyle.bind(this);
      return this.list.reduce(function(map, item) {
        if (isAbsoluteStyle(item.style)) {
          map.abs.push(item);
        } else {
          map.normal.push(item);
        }
        return map;
      }, { normal: [], abs: [] });
    },
  },
}
</script>
