import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/vote',
    name: 'vote',
    component: () => import('../views/VoteView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
