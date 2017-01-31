import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'

Vue.use(Vuex)

const state = {
  // Counter Component State ---------------------------------------------------
  count: 0,
  history: [],

  // ArtistSearch Component State ----------------------------------------------
  isBusy: false,
  artists: []
}

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})

/* This is a carry-over from the webpack simple starter (Vue default). I wasn't
sure if Nuxt would already have this in place, though it appears to be the
case so far. Need to delete if HMR is/keeps functioning correctly */
// if (module.hot) {
//   module.hot.accept([
//     './getters',
//     './actions',
//     './mutations'
//   ], () => {
//     store.hotUpdate({
//       getters: require('./getters'),
//       actions: require('./actions'),
//       mutations: require('./mutations')
//     })
//   })
// }

export default store
