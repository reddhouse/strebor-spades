// Instead of mutating the state, actions commit mutations.
// We can pass a second argument to store.commit which is the "payload"
// for the mutation. Payloads are typically objects.
import _ from 'lodash'
import axios from 'axios'

const baseURL = 'http://localhost:3000'
// const baseURL = '/api'

// Table Component Actions -----------------------------------------------------
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
  let pkg = { 'cards': cardSet }
  return axios.put(baseURL + '/players/1', pkg)
    .then(res => {
      dispatch('populatePlayer1Hand')
    })
}

export const postPlayer2Hand = ({ dispatch }, cardSet) => {
  let pkg = { 'cards': cardSet }
  return axios.put(baseURL + '/players/2', pkg)
    .then(res => {
      dispatch('populatePlayer2Hand')
    })
}

export const postPlayer3Hand = ({ dispatch }, cardSet) => {
  let pkg = { 'cards': cardSet }
  return axios.put(baseURL + '/players/3', pkg)
    .then(res => {
      dispatch('populatePlayer3Hand')
    })
}

export const postPlayer4Hand = ({ dispatch }, cardSet) => {
  let pkg = { 'cards': cardSet }
  return axios.put(baseURL + '/players/4', pkg)
    .then(res => {
      dispatch('populatePlayer4Hand')
    })
}

export const postShuffledDeck = ({ dispatch, state }) => {
  let shuffle1 = _.shuffle(_.cloneDeep(state.newDeck))
  let shuffle2 = _.shuffle(shuffle1)
  let shuffle3 = _.shuffle(shuffle2)
  let pkg = { 'cards': shuffle3 }
  return axios.put(baseURL + '/shuffled/1', pkg)
    .then(res => {
      dispatch('populateShuffled')
    })
}

// PlayableCard Component Actions ----------------------------------------------
export const populateTableHand = ({ commit }) => {
  return axios.get(baseURL + '/tablehand')
    .then(res => {
      commit('mutateTableHand', res.data)
    })
}

export const postPlayedCard = ({ dispatch }, payload) => {
  let pkg = { 'card': payload.card }
  return axios.put(baseURL + '/tablehand/' + payload.playerID, pkg)
    .then(res => {
      dispatch('populateTableHand')
    })
}
