// 全部元素，都继承于此
import draggable from 'vuedraggable';

export default {
  components: {
    draggable,
  },

  props: {
    // data = { attribute, style, panel, html, children }
    data: {
      type: Object,
      default() { return {}; }
    },
    // 所属的排序分组
    group: {
      type: String,
      default: 'content',
    },
  },

  computed: {
    attribute() {
      return this.data.attribute;
    },
    style() {
      return Object.assign({}, this.data.style || {}, this.data.abstractStyle || {});
    },
    panel() {
      return this.data.panel;
    },
    children() {
      return this.data.children || [];
    },
    html() {
      return this.data.html || '';
    },
  },

  methods: {

  },
}