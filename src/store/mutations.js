export const mutations = {
  setActiveUser(state, activeUser) {
    state.activeUser = activeUser;
  },

  setToken(state, token) {
    state.token = token;
  },
  
  setItems(state, items) {
    state.items = items;
  }
};