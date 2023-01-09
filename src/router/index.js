import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: '/',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/vote',
    name: 'vote',
    component: () => import('../views/VoteView.vue')
  }, 
  {
    path: '/realtimevote',
    name: 'realtimevote',
    component: () => import('../views/realtimeVote.vue')
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
