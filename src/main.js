import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import 'bootstrap';
import router from './router'
import 'mdb-vue-ui-kit/css/mdb.min.css';
import {store} from './store'


Vue.use(Vuex)
Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
