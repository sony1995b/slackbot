import Vue from 'vue'
import App from './App.vue'
require('es6-promise').polyfill() // i.e. 호환성 해결 (크로스브라우징)
import router from './router'

import store from "./store/index"
// Bootstrap Vue Plugin
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)
// AXIOS
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

import AxiosPlugin from 'vue-axios-cors';
Vue.use(AxiosPlugin);
axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'

import ApiService from "@/services/api.service";
import ApiURL from "@/config/api-url-list";

ApiService.init(ApiURL.cpc_host);

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
