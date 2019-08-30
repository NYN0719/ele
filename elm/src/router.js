import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/cityplace.vue'
//about
import About from './views/About.vue'
//搜索
import Search from './views/search.vue'
//订单
import OrderList from './views/orderList.vue'
//我的
import Myself from './views/myself.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
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
