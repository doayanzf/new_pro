<template>
    <div>
       <div class="tit">
           <img src="./img/back.gif" alt="" @click="back()">
           <h1>我的收藏</h1>
       </div>
    </div>
</template>
    
<script>
export default {
    name: "Myfavorite",
    data () {
        return {
             
        };
    },
  methods: {
      back() {
            
            this.$router.push({
                path:'/mine'
            })
        }
  }
}
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
</style>