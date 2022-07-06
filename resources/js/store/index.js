import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import * as getters from './getters'
import * as mutations from './mutations'
import actions from './actions'
import todo from './actions/todo'
import subtodo from './actions/subtodo'

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions: {
    ...actions,
    ...todo,
    ...subtodo,
  },
  modules: {}
})
