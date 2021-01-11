import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import About from '../views/About'

Vue.use(VueRouter)

const routes = [
  { name: 'Home', path: '/', component: Home },
  { name: 'About', path: '/about', component: About }
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router