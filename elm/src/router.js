import Vue from 'vue'
import Router from 'vue-router'
//import Home from './views/cityplace.vue'
//import headbar from './components/headbar(2).vue'
import xiangqing from './views/xiangqing.vue'
//import VueResource from 'vue-resource'

Vue.use(Router)
//Vue.use(VueResource)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: xiangqing
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
