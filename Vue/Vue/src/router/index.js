import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutView.vue')
  },
  {
    path:'/fashion',
    name : 'fashion',
    component : () => import('../text/Day01_02.vue')
  },
  {
    path:'/restaurant',
    name : 'restaurant',
    component : () => import('../text/Day01_03.vue')
  },
  {
    path:'/grade',
    name : 'grade',
    component : () => import('../text/Day02_03.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
