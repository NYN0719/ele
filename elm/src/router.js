import Vue from 'vue'
import Router from 'vue-router'
//登录注册
import Register from './views/register.vue'
//服务中心
import serve from './views/serve.vue'
//说明
import Explain from './views/explain.vue'
//下载app
import Download from './views/download.vue'
import Amend from './views/amend.vue'
import cityplace from './views/cityplace.vue'
import Xiangqing from './views/xiangqing.vue'
import Searchcity from './views/searchcity.vue'
import shipin from './views/shipin.vue'
Vue.use(Router)
//about
import About from './views/About.vue'
//搜索
import Search from './views/search.vue'
//搜索点击进入餐馆
import SearchShop from './views/searchShop.vue'
//订单
import OrderList from './views/orderList.vue'
//订单详情
import OrderDetail from './views/orderDetail.vue'
//我的
import Myself from './views/myself.vue'
import searchcity from './views/searchcity(1).vue'
import rest from './views/rest.vue'
import integral from './views/integral.vue'
import balance from './views/balance.vue'
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
    },
    {
      //登录注册
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      //服务中心
      path: '/serve',
      name: 'serve',
      component: serve
    },
    {
      //说明
      path:'/explain',
      name:'explain',
      component:Explain
    },
    {
      //下载app
      path: '/download',
      name: 'download',
      component: Download
    },
    {
      path: '/amend',
      name: 'amend',
      comments: Amend,
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
      path: '/searchShop/:shopID',
      name: 'searchShop',
      component: SearchShop,
    },
    {
      path: '/orderList',
      name: 'orderList',
      component: OrderList,
    },
    {
      path: '/orderDetail/:orderIdx',
      name: 'orderDetail',
      component: OrderDetail,
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
    {
      path: '/rest',
      name: 'rest',
      component: rest,
    },
    {
      path: '/integral',
      name: 'integral',
      component: integral,
    },
    {
      path: '/balance',
      name: 'balance',
      component: balance,
    },
    {
      path: '/shipin',
      name: 'shipin',
      component: shipin,
    },
  ]
})
