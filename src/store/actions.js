// Instead of mutating the state, actions commit mutations.
// We can pass a second argument to store.commit which is the "payload"
// for the mutation. Payloads are typically objects.
import _ from 'lodash'
import axios from 'axios'

// const baseURL = 'http://localhost:3000'
const baseURL = '/api'

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

export const populatePlayer1Hand = ({ commit }) => {
  return axios.get(baseURL + '/players/1')
    .then(res => {
      commit('mutatePlayer1Hand', res.data.cards)
    })
}

export const populatePlayer2Hand = ({ commit }) => {
  return axios.get(baseURL + '/players/2')
    .then(res => {
      commit('mutatePlayer2Hand', res.data.cards)
    })
}

export const populatePlayer3Hand = ({ commit }) => {
  return axios.get(baseURL + '/players/3')
    .then(res => {
      commit('mutatePlayer3Hand', res.data.cards)
    })
}

export const populatePlayer4Hand = ({ commit }) => {
  return axios.get(baseURL + '/players/4')
    .then(res => {
      commit('mutatePlayer4Hand', res.data.cards)
    })
}

export const postPlayer1Hand = ({ dispatch }, cardSet) => {
  let cardsObj = { 'id': 1, 'cards': cardSet }
  return axios.put(baseURL + '/players/1', cardsObj)
    .then(res => {
      dispatch('populatePlayer1Hand')
    })
}

export const postPlayer2Hand = ({ dispatch }, cardSet) => {
  let cardsObj = { 'id': 2, 'cards': cardSet }
  return axios.put(baseURL + '/players/2', cardsObj)
    .then(res => {
      dispatch('populatePlayer2Hand')
    })
}

export const postPlayer3Hand = ({ dispatch }, cardSet) => {
  let cardsObj = { 'id': 3, 'cards': cardSet }
  return axios.put(baseURL + '/players/3', cardsObj)
    .then(res => {
      dispatch('populatePlayer3Hand')
    })
}

export const postPlayer4Hand = ({ dispatch }, cardSet) => {
  let cardsObj = { 'id': 4, 'cards': cardSet }
  return axios.put(baseURL + '/players/4', cardsObj)
    .then(res => {
      dispatch('populatePlayer4Hand')
    })
}

export const postShuffledDeck = ({ dispatch, state }) => {
  let cardsObj = {
    'id': 1,
    'cards': _.shuffle(_.cloneDeep(state.newDeck))
  }
  return axios.put(baseURL + '/shuffled/1', cardsObj)
    .then(res => {
      dispatch('populateShuffled')
    })
}
