// Mutatitions are the only way to actually change the state in a
// vuex store. Each mutation has a string type and a handler.
// They can receieve a second payload argument as well.
// The handler functions receieve state as their first argument.
// Mutation are synchronous transactions. See actions for async operations.

// Counter Component Mutations -------------------------------------------------
export const increment = state => {
  state.count++
  state.history.push('increment')
}

export const decrement = state => {
  state.count--
  state.history.push('decrement')
}

// ArtistSearch Component Mutations --------------------------------------------
export const requestSearchResults = (state) => {
  state.isBusy = true
}

export const receiveSearchResults = (state, { artists }) => {
  state.artists = artists
  state.isBusy = false
}
