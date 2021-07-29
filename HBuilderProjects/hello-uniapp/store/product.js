/** 商品相关内容 */

const state = {
  productList: null,
};

const getters = {
  
};

const mutations = {
  updateProductList(state, { list }) {
    state.productList = list;
  }
};

const actions = {
  updateProductList({ commit }, { list }) {
    commit('updateProductList', { list });
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};