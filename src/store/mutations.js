export const mutations = {
  setActiveUser(state, activeUser) {
    state.activeUser = activeUser;
  },

  setToken(state, token) {
    state.token = token;
  },
  
  setItems(state, payload) {
    state.items =  payload[0];
    state.numberOfItems = payload[1];
  },

  setBids(state, bids) {
    state.bids = bids;
  }
};