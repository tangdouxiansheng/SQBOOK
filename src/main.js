import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import "./assets/flexble"                //引入改变像素单位的文件
import axios from "axios"                //引入axios
Vue.prototype.$axios = axios
import MintUI from 'mint-ui'             //引入mint-ui
import 'mint-ui/lib/style.css'
import { Indicator } from 'mint-ui';
Vue.use(MintUI);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
