import Vue from 'vue'
import Router from 'vue-router'
import Register from './views/register.vue'
import Amend from './views/amend.vue'
import cityplace from './views/cityplace.vue'
import Xiangqing from './views/xiangqing.vue'
//about
import About from './views/About.vue'
//搜索
import Search from './views/search.vue'
//订单
import OrderList from './views/orderList.vue'
//我的
import Myself from './views/myself.vue'
import searchcity from './views/searchcity(1).vue'
Vue.use(Router)
//Vue.use(VueResource)
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'cityplace',
      component: cityplace,
    },
    {
      path:'/register',
      name:'register',
      component:Register
    },
    {
      path:'/amend',
      name:'amend',
      comments:Amend,
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
    {
      path: '/xiangqing',
      name: 'xiangqing',
      component: Xiangqing,
    },
    {
      path: '/searchcity',
      name: 'searchcity',
      component: searchcity,
    },
  ]
})
