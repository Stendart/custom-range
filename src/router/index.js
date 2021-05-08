import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/peopleList',
    name: 'PeopleList',
    component: () => import('../views/PeopleList.vue')
  },
  {
    path: '/selectPeople/:id',
    name: 'selectPeople',
    component: () => import('../components/SelectPeople.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
