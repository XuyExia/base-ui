import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

//   ./就是代表同层级

Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})

export default store
