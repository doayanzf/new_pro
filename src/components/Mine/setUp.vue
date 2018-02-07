<template>
    <div>
       <div class="tit">
           <img src="./img/back.gif" alt="" @click="back()">
           <h1>设置</h1>
       </div>
       <ul>
           <li>
               <span>个人资料</span>
               
               <img src="./img/next.png" alt="">
           </li>
           <li>
               <span>账户安全</span>
               
               
               <img src="./img/next.png" alt="">
               
           </li>
           <li>
               <span>设置支付密码</span>
               
               
               <img src="./img/next.png" alt="">
               
           </li>
           
           
       </ul>
    </div>
</template>
    
<script>
export default {
  name: "Setup",
  data() {
    return {};
  },
  methods: {
    back() {
      //h5方法
      // history.back();
      //vue方法(-1)是上一个
      // this.$router.go(-1)
      this.$router.push({
        path: "/mine"
      });
    }
  }
};
</script>
    
<style lang="css" scoped>
.tit {
  width: 100%;
  height: 1.564987rem;
  background: white;
  border-bottom: 1px solid #9bd791;
}
.tit img {
  width: 0.66313rem;
  height: 0.795756rem;
  float: left;
  margin-left: 0.530504rem;
  margin-top: 0.344828rem;
}
.tit h1 {
  text-align: center;
  line-height: 1.564987rem;
}
ul {
  background: white;
}
li {
  padding-top: 0.265252rem;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 1.114058rem;
  border-bottom: 1px solid #d5d5d5;
  font-size: 0.503979rem;
}
li > img {
  width: 0.397878rem;
  height: 0.530504rem;
  margin-right: 0.265252rem;
}
li > span {
  padding-left: 0.265252rem;
}
</style>