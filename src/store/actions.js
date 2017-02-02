// Instead of mutating the state, actions commit mutations.
// We can pass a second argument to store.commit which is the "payload"
// for the mutation. Payloads are typically objects.
import _ from 'lodash'
import axios from 'axios'

const baseURL = 'http://localhost:3000'
// const baseURL = '/api'

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
export const populateNewDeck = ({ commit }) => {
  return axios.get(baseURL + '/newdeck')
    .then(res => {
      commit('mutateNewDeck', res.data)
    })
}

export const populateShuffled = ({ commit }) => {
  return axios.get(baseURL + '/shuffled/1')
    .then(res => {
      commit('mutateShuffled', res.data.cards)
    })
}

export const postShuffledDeck = ({ dispatch, state }) => {
  let x = {
    'id': 1,
    'cards': _.shuffle(_.cloneDeep(state.newDeck))
  }
  return axios.put(baseURL + '/shuffled/1', x)
    .then(res => {
      dispatch('populateShuffled')
    })
}
