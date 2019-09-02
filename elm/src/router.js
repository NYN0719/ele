import Vue from 'vue'
import Router from 'vue-router'
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
