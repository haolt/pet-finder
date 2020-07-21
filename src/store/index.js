import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogin: true,
    // isLogin: false,
    type: '',
  },
  // Reducer
  mutations: {
    changeIsLogin (state) {
      state.isLogin = !state.isLogin;
    },
    UPDATE_TYPE (state, type) {
      state.type = type;
    }
  },
  actions: {
    doUpdateType({commit}, type) {
      commit('UPDATE_TYPE', type);
    }
  },
  modules: {
  }
});
