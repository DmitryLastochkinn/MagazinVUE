import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)
export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      meta: { layout: 'empty' },
      component: () => import('../views/Login.vue')
    },
    {
      path: '/register',
      name: 'register',
      meta: { layout: 'empty' },
      component: () => import('../views/Register.vue')
    },
    {
      path: '/',
      name: 'home',
      meta: { layout: 'main' },
      component: () => import('../views/Home.vue')
    },
    {
      path: '/orders',
      name: 'orders',
      meta: { layout: 'main' },
      component: () => import('../views/Orders.vue')
    },
    {
      path: '/customers',
      name: 'customers',
      meta: { layout: 'main' },
      component: () => import('../views/Customers.vue')
    },
    {
      path: '/categories',
      name: 'categories',
      meta: { layout: 'main' },
      component: () => import('../views/Categories.vue')
    },
    {
      path: '/items',
      name: 'Items',
      meta: { layout: 'main' },
      component: () => import('../views/Items.vue')
    }
  ]
})