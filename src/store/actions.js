import authService from '../services/AuthService';
import itemService from '../services/ItemService.js';
import bidService from '../services/BidService';
import { store } from '.';

export const actions = {

  async login(store, credentials) {
    const { user, token } = await authService.login(credentials);
    localStorage.setItem('token', JSON.stringify(token));

    store.commit('setActiveUser', user);
    store.commit('setToken', token);
  },

  async getActiveUser(store) {
    if (store.getters.isAuthenticated) {
      const data = await authService.me();
      store.commit('setActiveUser',data.user);
    } else {
      store.commit('setActiveUser', {});
    }
  },

  async logout(store) {
    await authService.logout();
    store.commit('setToken', null);
    store.commit('setActiveUser', {});
    localStorage.removeItem('token');
  },

  async register(store, credentials) {
    const { user, token } = await authService.register(credentials);
    localStorage.setItem('token', JSON.stringify(token))
    store.commit('setActiveUser', user)
    store.commit('setToken', token)
  },
  
  async updateUser(store, credentials) {
    const { user } = await authService.update(credentials);
    console.log( user);
    store.commit('setActiveUser', user)
  },

  async getItems(state, payload) {
    const response = await itemService.getAll(payload);
    store.commit('setItems', response);
  },

  addItem(store, item) {
    itemService.add(item);
  },

  addBid(store, data) {
    bidService.add(data);
  },

  async getBids(store) {
    const data = await bidService.getUserBids();
    store.commit('setBids', data);
  },
};