'use strict';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 被选中的组件id
    selectedComponentIds: []
  },

  getters: {

  },

  mutations: {
    updateSelectedComponentIds(state, { selectedComponentIds = [] }) {
      state.selectedComponentIds = selectedComponentIds;
    },
  },

  actions: {
    updateSelectedComponentIds({ commit, dispatch }, { selectedComponentIds = [] }) {
      commit('updateSelectedComponentIds', { selectedComponentIds });
    },

    bindUIComponentRemove() {

    },
    unbindUIComponentRemove() {

    },
  },
});