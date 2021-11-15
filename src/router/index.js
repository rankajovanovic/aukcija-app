import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import SingleItem from '../views/SingleItem.vue'
import AddItem from '../views/AddItem.vue'
import Profile from '../views/Profile.vue'
import BuyHistory from '../views/BuyHistory.vue'
import SoldItems from '../views/SoldItems.vue'
import ActiveOffers from '../views/ActiveOffers.vue'

import { globalAuthGuard } from '../guards/authGuard'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: { guestRequired: true },
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    meta: { guestRequired: true },
  },
  {
    path: '/items/:id',
    name: 'single-item',
    component: SingleItem,
    meta: { authRequired: true }
  },
  {
    path: '/add',
    name: 'add-item',
    component: AddItem,
    meta: { authRequired: true }
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
    meta: { authRequired: true }
  },
  {
    path: '/buy-history',
    name: 'buy-history',
    component: BuyHistory,
    meta: { authRequired: true }
  },
  {
    path: '/sold-items',
    name: 'sold-items',
    component: SoldItems,
    meta: { authRequired: true }
  },
  {
    path: '/active-offers',
    name: 'active-offers',
    component: ActiveOffers,
    meta: { authRequired: true }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach(globalAuthGuard);
export default router
