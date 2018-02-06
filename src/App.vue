<template>
  <div id="app">
    <!-- router-view是单页应用，路由切换时填充内容的容器，
      换句话说，就是每点击一个路由跳转，我们只是把router-view中的内容替换掉而已
     -->
    <router-view></router-view>
    <div class="tabbar" v-show="isShow">
      <router-link to="/home">首页</router-link>
      <router-link to="/Sort">分类</router-link>
      <router-link to="/car">购物车</router-link>
      <router-link to="/mine">我的</router-link>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
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
  }
}
</script>

<style>
#app{
  background: #f4f5f7;
}
#app .tabbar{
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 1.333333rem;
  background-color: wheat;
  display: flex;
  align-items: center;
  justify-content: space-around;
}


</style>
