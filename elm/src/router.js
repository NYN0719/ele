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
//import Home from './views/cityplace.vue'
//import headbar from './components/headbar(2).vue'
//import VueResource from 'vue-resource'
// import Home from './views/cityplace.vue'
import Searchcity from './views/searchcity.vue'
<<<<<<< HEAD
// import VueResource from 'vue-resource'

=======
import VueResource from 'vue-resource'
import Rest from './views/rest.vue'
import shipin from './views/shipin.vue'
>>>>>>> 032d715273bc8f3e7463834baf3577f9ffb672ed
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
      childrens: [
        {
          path: '/searchShop',
          name: 'searchShop',
          component: SearchShop,
        }
      ]
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
      path: '/Rest',
      name: 'Rest',
      component: Rest,
    },
    {
      path: '/shipin',
      name: 'shipin',
      component: shipin,
    },
  ]
})
