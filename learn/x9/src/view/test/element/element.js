// 全部元素，都继承于此
export default {
  props: {
    // data = { attribute, style, panel, html, children }
    data: {
      type: Object,
      default() { return {}; }
    },
  },

  computed: {
    attribute() {
      return this.data.attribute;
    },
    style() {
      return this.data.style;
    },
    panel() {
      return this.data.panel;
    },
    children() {
      return this.data.children;
    },
    html() {
      return this.data.html || {};
    },
  },

  methods: {

  },
}