import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Register from './views/register.vue'
import 'lib-flexible'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

Vue.config.productionTip = false
Vue.prototype.$axios = axios;
axios.defaults.withCredentials = true;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
