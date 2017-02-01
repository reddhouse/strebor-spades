// Instead of mutating the state, actions commit mutations.
// We can pass a second argument to store.commit which is the "payload"
// for the mutation. Payloads are typically objects.

import axios from 'axios'

// const apiURL = 'http://localhost:3000'
const apiURL = '/api'

// Counter Component Actions ---------------------------------------------------
export const increment = ({ commit }) => commit('increment')

export const decrement = ({ commit }) => commit('decrement')

export const incrementIfOdd = ({ commit, state }) => {
  if ((state.count + 1) % 2 === 0) {
    commit('increment')
  }
}
export const incrementAsync = ({ commit }) => {
  setTimeout(() => {
    commit('increment')
  }, 1000)
}

// Table Component Actions ----------------------------------------------
export const populateFullDeck = ({ commit }) => {
  return axios.get(apiURL + '/fulldeck')
    .then(res => {
      commit('receiveFullDeck', res.data)
    })
}
