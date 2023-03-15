import { createRouter, createWebHistory } from 'vue-router'
import Counter from '@/pages/Counter.vue'
import NotFound from '@/pages/NotFound.vue'

const routes = [
  {
    path: '/counter',
    name: 'Counter',
    component: Counter
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
