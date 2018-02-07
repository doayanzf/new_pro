// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyload from 'vue-lazyload'  //引入这个懒加载插件

import axios from 'axios'
import store from './store'
import { Swipe, SwipeItem } from 'mint-ui';

import 'mint-ui/lib/style.css'
// Vue.use(VueLazyload)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  
  loading: './components/img/loadding.gif',
  attempt: 1
})
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.prototype.axios = axios
Vue.config.productionTip = false
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store
})

