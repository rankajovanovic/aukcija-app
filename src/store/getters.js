export const getters = {
  isAuthenticated: (state) => !!state.token,
  items: (state) => state.items
};