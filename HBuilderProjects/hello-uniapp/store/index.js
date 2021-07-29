import Vue from 'vue';
import Vuex from 'vuex';
import product from './product.js';

// 必须在这里引用 Vuex
Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    product
  }
});

export default store;