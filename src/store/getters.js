// Getters are like computed properties for stores
// They receive the state as their first argument

// Counter Component Getters, left behind for examples ------------------------
export const count = state => state.count

const limit = 5

export const recentHistory = state => {
  const end = state.history.length
  const begin = end - limit < 0 ? 0 : end - limit
  return state.history
    .slice(begin, end)
    .toString()
    .replace(/,/g, ', ')
}

// Table Component Getters -----------------------------------------------------
export const newDeck = state => state.newDeck
export const shuffled = state => state.shuffled
export const player1Hand = state => state.player1Hand
export const player2Hand = state => state.player2Hand
export const player3Hand = state => state.player3Hand
export const player4Hand = state => state.player4Hand

export const tableHand = state => state.tableHand
