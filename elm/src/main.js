import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Register from './views/register'
import 'lib-flexible'
import rest from './views/rest.vue'

import "swiper/dist/css/swiper.min.css"
import './assets/css/icon_footer/iconfont.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios,axios)

Vue.config.productionTip = false
axios.defaults.withCredentials = true;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
