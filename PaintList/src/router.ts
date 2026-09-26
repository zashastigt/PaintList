import { createWebHistory, createRouter } from 'vue-router'

import PaintList from './components/PaintList.vue'

const routes = [
  { path: '/', component: PaintList },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router