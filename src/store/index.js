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

  // Table Component State -----------------------------------------------------
  newDeck: [],
  shuffled: [],
  player1Hand: [],
  player2Hand: [],
  player3Hand: [],
  player4Hand: [],
  tableHand: [],
  teamScores: [{ 'scores': [], 'id': 1 }, { 'scores': [], 'id': 2 }]
}

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})

if (module.hot) {
  module.hot.accept([
    './getters',
    './actions',
    './mutations'
  ], () => {
    store.hotUpdate({
      getters: require('./getters'),
      actions: require('./actions'),
      mutations: require('./mutations')
    })
  })
}

export default store
