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
    component: () => import('../views/AboutView.vue')
  },
  {
    path:'/fashion',
    name : 'fashion',
    component : () => import('../test/Day01_02.vue')
  },
  {
    path:'/restaurant',
    name : 'restaurant',
    component : () => import('../test/Day01_03.vue')
  },
  {
    path:'/grade',
    name : 'grade',
    component : () => import('../test/Day02_03.vue')
  },
  {
    path:'/forStu',
    name : 'for Study',
    component : () => import('../test/Day03_01.vue')
  },
  {
    path:'/comp',
    name : 'Component Study',
    component : () => import('../test/Day03_02.vue')
  },
  {
    path:'/axios',
    name : 'Axios Study',
    component : () => import('../test/03_04_Axios.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
