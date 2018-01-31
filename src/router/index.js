// 配置路由的js
import Vue from 'vue'

// 导入路由模块
import VueRouter from 'vue-router'
// 全局安装一下路由模块
Vue.use(VueRouter)

// 分别导入四个组件
import Home from '../components/Home/Home.vue'
import Car from '../components/Car/Car.vue'
import Sort from '../components/Sort/Sort.vue'
import Mine from '../components/Mine/Mine.vue'


// 创建路由实例，并且配置路由规则
export default new VueRouter({
  // 这里写路由规则
  routes: [
    // router-link里的to跳转的地址，paht后面要和to一致
    // component就是根据路由地址，找到对应的组件，显示到router-view中
    { path: '', component: Home },
    { path: '/home', component: Home },
    { path: '/Sort', component: Sort },
    { path: '/mine', component: Mine },
    { path: '/car', component: Car }
  ]
})

