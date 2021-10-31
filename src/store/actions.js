import authService from '../services/AuthService';
import itemService from '../services/ItemService.js'
import { store } from '.';

export const actions = {
  
  async login(store, credentials) {
    console.log('login action', { credentials})
    const { user, token, ...data } = await authService.login(credentials);
    console.log('login action, got response', { user, token , data})
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
    await authService.register(credentials);
  },
  async getItems() {
    const items = await itemService.getAll();
    store.commit('setItems', items);
    console.log(items);
    
  }
};