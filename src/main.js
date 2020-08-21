import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {request} from '@/network/request'
Vue.config.productionTip = false
Vue.prototype.request=request

Vue.filter('setWH',(url,arg)=>{  //全局过滤器
  return url.replace(/w\.h/,arg)
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
