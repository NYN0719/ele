import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
<<<<<<< HEAD
import Register from './views/register.vue'
import 'lib-flexible'
<<<<<<< HEAD
import rest from './views/rest.vue'

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios,axios)

Vue.config.productionTip = false
axios.defaults.withCredentials = true;
new Vue({
  router,
  store,
  rest,
=======
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
=======
import 'lib-flexible'
<<<<<<< HEAD
import "swiper/dist/css/swiper.min.css"
=======
import './assets/css/icon_footer/iconfont.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
>>>>>>> 3a6123959040a801c71a06a0a81602ee890ca3b9

>>>>>>> 50f65a26cfa796e3dba794214212f7080a4119bd
Vue.config.productionTip = false
<<<<<<< HEAD
Vue.prototype.$axios = axios;
axios.defaults.withCredentials = true;
=======
Vue.use(VueAxios,axios)
axios.defaults.withCredentials = true
Vue.prototype.$axios = axios;

>>>>>>> 3a6123959040a801c71a06a0a81602ee890ca3b9
new Vue({
  router,
  store,
  axios,
  VueAxios,
>>>>>>> bdb21a5bf79ea046fc99c1f204480216669b0e48
  render: h => h(App)
}).$mount('#app')
