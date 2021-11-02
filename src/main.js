import Vue from 'vue'

import VueRouter from 'vue-router'
import Vuex from 'vuex'
import 'bootstrap';
import router from './router'
import 'mdb-ui-kit/css/mdb.min.css';

import {store} from './store'
import App from './App.vue'
Vue.use(Vuex)
Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
