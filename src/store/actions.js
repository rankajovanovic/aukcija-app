import authService from '../services/AuthService';
import itemService from '../services/ItemService.js'
import { store } from '.';

export const actions = {

  async login(store, credentials) {
    const { user, token } = await authService.login(credentials);
    console.log(user);
    localStorage.setItem('token', JSON.stringify(token));

    store.commit('setActiveUser', user);
    store.commit('setToken', token);
  },
  async getActiveUser(store) {

    if (store.getters.isAuthenticated) {
      const activeUser = await authService.getMyProfile();
      store.commit('setActiveUser', activeUser);
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
  async getItems(state, payload) {
    const response = await itemService.getAll(payload);
    store.commit('setItems', response.data);
  },
  addItem(store, item) {
    itemService.add(item);
  }
};