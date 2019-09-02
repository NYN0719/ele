import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible'
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
  render: h => h(App)
}).$mount('#app')
