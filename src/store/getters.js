export const getters = {
  isAuthenticated: (state) => !!state.token,
  activeUser: (state) => state.activeUser,
  items: (state) => state.items,
  numberOfItems: (state) => state.numberOfItems,
  bids: (state) => state.bids,
};