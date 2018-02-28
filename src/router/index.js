import Vue from 'vue'
import Router from 'vue-router'
import Mapping from '../components/Mapping'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/map',
      name: 'Mapping',
      component: Mapping
    }
  ]
})
