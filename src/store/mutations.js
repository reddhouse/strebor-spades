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
export const mutateNewDeck = (state, serverDeck) => {
  state.newDeck = serverDeck
}
export const mutateShuffled = (state, serverShuffled) => {
  state.shuffled = serverShuffled
}
export const mutatePlayer1Hand = (state, serverPlayer1) => {
  state.player1Hand = serverPlayer1
}
export const mutatePlayer2Hand = (state, serverPlayer2) => {
  state.player2Hand = serverPlayer2
}
export const mutatePlayer3Hand = (state, serverPlayer3) => {
  state.player3Hand = serverPlayer3
}
export const mutatePlayer4Hand = (state, serverPlayer4) => {
  state.player4Hand = serverPlayer4
}
