import Vue from 'vue'
import VueRouter from 'vue-router'
const Openpage =()=> import('../views/Openpage.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'openpage',
    component: Openpage
  },
]

const router = new VueRouter({
  routes
})

export default router
