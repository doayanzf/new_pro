<template>
  <div id="app">
    <!-- router-view是单页应用，路由切换时填充内容的容器，
      换句话说，就是每点击一个路由跳转，我们只是把router-view中的内容替换掉而已
     -->
    <router-view></router-view>
    <div class="tabbar" v-show="isShow">
      <router-link  @click.native ="clickImg(1)" to="/home" class="link" >
        <img src="./components/img/index_n.png" alt="">
        <img v-show="showIm == 1" src="./components/img/index_r.png" alt="">
        <br>
        <b>首页</b>
      </router-link>
      <router-link @click.native ="clickImg(2)" to="/Sort" class="link">
        <img src="./components/img/shopping_n.png" alt="">
        <img v-show="showIm == 2"  src="./components/img/shopping_r.png" alt="">
        <br>
        <b>分类</b>
      </router-link>
      <router-link @click.native ="clickImg(3)" :to="car" class="link">
        <img src="./components/img/cart_n.png" alt="">        
        <img v-show="showIm == 3"  src="./components/img/cart_r.png" alt="">        
        <br>
        <b>购物车</b>
      </router-link>
      <router-link @click.native ="clickImg(4)" to="/mine" class="link">
        <img src="./components/img/my_n.png" alt="">        
        <img v-show="showIm == 4"  src="./components/img/my_r.png" alt="">        
        <br>
        <b>我的</b>
      </router-link>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  data() {
    return {
      showIm:1,
      car: '/car'
    }
  },
  components: {
    HelloWorld
  },
  computed: {
    isShow() {
        if ((this.$route.path.indexOf('/productDetail/') != -1) || 
        (this.$route.path.indexOf('/coudan') != -1) ||
         (this.$route.path.indexOf('/tehui') != -1) || 
         (this.$route.path.indexOf('/bank') != -1) || 
         (this.$route.path.indexOf('/bobing') != -1) || 
         (this.$route.path.indexOf('/chaojituangou') != -1) || 
         (this.$route.path.indexOf('/daiyv') != -1) || 
         (this.$route.path.indexOf('/dami') != -1) || 
         (this.$route.path.indexOf('/gutang') != -1) || 
         (this.$route.path.indexOf('/heizhurou') != -1) || 
         (this.$route.path.indexOf('/jiakang') != -1) || 
         (this.$route.path.indexOf('/juzi') != -1) || 
         (this.$route.path.indexOf('/manglu') != -1) || 
         (this.$route.path.indexOf('/niunai') != -1) || 
         (this.$route.path.indexOf('/nongfushanquan') != -1) || 
         (this.$route.path.indexOf('/nongjiale') != -1) || 
         (this.$route.path.indexOf('/rexiaojingcai') != -1) || 
         (this.$route.path.indexOf('/search') != -1) || 
         (this.$route.path.indexOf('/SouSuo') != -1) || 
         (this.$route.path.indexOf('/tejiataocan') != -1) || 
         (this.$route.path.indexOf('/xihongshi') != -1) || 
         (this.$route.path.indexOf('/youxuan') != -1) || 
         (this.$route.path.indexOf('/zuocai') != -1)
          
         ){
            return false;
        } else {
            return true;
        }
        // return this.$route.path.indexOf('/productDetail/') == -1 ? true : false;
    }
    
  },
  methods:{
    clickImg(index){
      this.showIm = index
    }
  }
//   beforeUpdate() {
//       if (this.dataGoods.length != 0) {
//           this.car = '/car'
//       } else {
//           this.car = '/car2'
//       }
//   }
}
</script>

<style>
#app{
  background: #f4f5f7;
}
#app .tabbar{
  z-index: 3;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  border-top: 1px solid #e5e5e5;
  height: 1.37931rem;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
#app .tabbar img{
  width: .769231rem;
  height: .769231rem;
  position: absolute;
  top: .13rem;
  left:.848806rem;
}
.link{
  padding-top: .3626rem;
  position: relative;
  width: 25%;
  height: 1.32626rem;
  text-align: center;
}

</style>
