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
// 导入分类二级路由
import TuiJian from '../components/Sort/TuiJian.vue'
import WoChuyx from '../components/Sort/WoChuyx.vue'
import CanGuanmc from '../components/Sort/CanGuanmc.vue'
import QuanBujc from '../components/Sort/QuanBujc.vue'
import ErTongzq from '../components/Sort/ErTongzq.vue'
import ShuCai from '../components/Sort/ShuCai.vue'
import ShuiGuo from '../components/Sort/ShuiGuo.vue'
import RouQind from '../components/Sort/RouQind.vue'
import ShuiChanhx from '../components/Sort/ShuiChanhx.vue'
import RuYinxd from '../components/Sort/RuYinxd.vue'
import DianXinss from '../components/Sort/DianXinss.vue'

// 导入mine一级路由
import Recharge from '../components/Mine/recharge.vue'
import Coupon from '../components/Mine/coupon.vue'
import Help from '../components/Mine/help.vue'
import Order from '../components/Mine/order.vue'
import Phone from '../components/Mine/phone.vue'
import Setup from '../components/Mine/setup.vue'
import About from '../components/Mine/about.vue'
import GroundBuy from '../components/Mine/groundBuy.vue'
import DOpinion from '../components/Mine/dOpinion.vue'
import Myfavorite from '../components/Mine/myfavorite.vue'
import MyAddress from '../components/Mine/myAddress.vue'


// 创建路由实例，并且配置路由规则
export default new VueRouter({
  mode: 'history',
  // 这里写路由规则
  routes: [
    // router-link里的to跳转的地址，paht后面要和to一致
    // component就是根据路由地址，找到对应的组件，显示到router-view中
    // { path: '', component: Home },
    { path: '', redirect: '/home' },
    { path: '/home', component: Home },
    { path: '/sort', component: Sort, children: [
      {path: 'tuijian', component: TuiJian},
      {path: 'wochuyouxuan', component: WoChuyx},
      {path: 'canguanmingcai', component: CanGuanmc},
      {path: 'quanbujingcai', component: QuanBujc},
      {path: 'ertongzhuanqu', component: ErTongzq},
      {path: 'shucai', component: ShuCai},
      {path: 'shuiguo', component: ShuiGuo},
      {path: 'rouqindan', component: RouQind},
      {path: 'chuichanhaixian', component: ShuiChanhx},
      {path: 'ruyinxidian', component: RuYinxd},
      {path: 'dianxisushi', component: DianXinss}
      
      
    ] },

    { path: '/mine', component: Mine},
    { path: '/recharge', component: Recharge},
    { path: '/coupon', component: Coupon},
    { path: '/help', component: Help},
    { path: '/dOpinion', component: DOpinion},
    { path: '/order', component: Order},
    { path: '/phone', component: Phone},
    { path: '/setup', component: Setup},
    { path: '/about', component: About},
    { path: '/groundBuy', component: GroundBuy},
    { path: '/myfavorite', component: Myfavorite},
    { path: '/myAddress', component: MyAddress},



    { path: '/coupon', component: Coupon},
    { path: '/car', component: Car }
  ]
})

