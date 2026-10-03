import { createWebHistory, createRouter } from 'vue-router'

import PaintList from './components/PaintList.vue'
import PaintSchemes from './components/PaintSchemes.vue'

const routes = [
  { path: '/', component: PaintList },
  { path: '/Schemes', component: PaintSchemes },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router