import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Register from './views/register'
import 'lib-flexible'
import rest from './views/rest.vue'
// 图标

import "swiper/dist/css/swiper.min.css"
import './assets/css/icon_footer/iconfont.css'
import './assets/css/iconfont_my/iconfont.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios,axios)

Vue.config.productionTip = false
axios.defaults.withCredentials = true;
Vue.prototype.$axios = axios
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
