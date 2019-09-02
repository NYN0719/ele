import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/cityplace.vue'
import Searchcity from './views/searchcity.vue'
import VueResource from 'vue-resource'

Vue.use(Router)
Vue.use(VueResource)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      props:route => ({name:route.query.cityname})
    },
    {
      path: '/searchcity',
      name: 'searchcity',
      component: Searchcity
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
