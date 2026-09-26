import { createWebHistory, createRouter } from 'vue-router'

import PaintList from './components/PaintList.vue'
import AddPaint from './components/AddPaint.vue'

const routes = [
  { path: '/', component: PaintList },
  { path: '/addPaint', component: AddPaint },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router