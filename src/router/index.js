import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Exercises from '@/components/Exercises'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/exercise',
      name: 'Exercise',
      component: Exercises
    }
  ]
})
