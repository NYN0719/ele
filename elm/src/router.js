import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD
// import Home from './views/Home.vue'
import rest from './views/rest.vue'
=======
<<<<<<< HEAD
import Home from './views/Home.vue'
import Register from './views/register.vue'
import Amend from './views/amend.vue'
=======
<<<<<<< HEAD
//import Home from './views/cityplace.vue'
//import headbar from './components/headbar(2).vue'
import xiangqing from './views/xiangqing.vue'
//import VueResource from 'vue-resource'
=======
import Home from './views/cityplace.vue'
//about
import About from './views/About.vue'
//搜索
import Search from './views/search.vue'
//订单
import OrderList from './views/orderList.vue'
//我的
import Myself from './views/myself.vue'

>>>>>>> 50f65a26cfa796e3dba794214212f7080a4119bd
>>>>>>> 3a6123959040a801c71a06a0a81602ee890ca3b9
>>>>>>> bdb21a5bf79ea046fc99c1f204480216669b0e48

Vue.use(Router)
//Vue.use(VueResource)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
<<<<<<< HEAD
      component: rest
=======
      component: xiangqing
    },
    {
      path:'/register',
      name:'register',
      component:Register
    },
    {
      path:'/amend',
      name:'amend',
      comments:Amend
>>>>>>> bdb21a5bf79ea046fc99c1f204480216669b0e48
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/search',
      name: 'search',
      component: Search,
    },
    {
      path: '/orderList',
      name: 'orderList',
      component: OrderList,
    },
    {
      path: '/myself',
      name: 'myself',
      component: Myself,
    },
  ]
})
