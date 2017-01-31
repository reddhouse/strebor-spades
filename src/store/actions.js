// Instead of mutating the state, actions commit mutations.
// We can pass a second argument to store.commit which is the "payload"
// for the mutation. Payloads are typically objects.

import axios from 'axios'

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

// ArtistSearch Component Actions ----------------------------------------------
export const searchByArtistName = ({ commit }, { name }) => {
  commit('requestSearchResults')
  return axios.get('https://api.spotify.com/v1/search?q=' + name + '&type=artist&limit=10')
    .then(res => {
      commit('receiveSearchResults', {artists: res.data.artists.items})
    })
}
export const setTitle = ({ commit }, { title }) => {
  commit('setTitle', { title })
}
