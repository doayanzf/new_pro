<template>
    <div>
        <div class='bac' @click='back'></div>
       <img class='img' src="./img2/db675a44-77a6-433d-a9cf-8e99f311fbb9.jpg" alt="">
        <img class='img' src="./img2/658e3d04-9599-48eb-80ba-1fa55d040140.jpg" alt="">
         <img class='img' src="./img2/75a17d74-3d45-4de2-b229-969af46ffc07.jpg" alt="">
        <ul class='u1'>
           <li v-for="pro in goods" :key="pro.id" class="l1">
               <ul class='u2'>
                   <li><img  :src="pro.icon"></li>
                   <li>{{pro.goodsName}}</li>
                   <li>￥{{pro.price}}<span>￥{{pro.marketPrice}}</span></li>
                   <li @click="add_note(pro)">加入购物车</li>
               </ul>
           </li>
       </ul>
    </div>
</template>
    
<script>
export default {
  name: "component_name",
  data() {
    return {
      goods: []
    };
  },
  methods: {
    back() {
      history.back();
    },
    add_note(data) {
      this.$store.dispatch("add_goods", data);
    },
  },
  created() {
    this.axios.get("http://10.0.157.250:8888/jianguo").then(res => {
      this.goods = res.data.shop_data;
      console.log(this.goods);
    });
  }
};
</script>
    
<style lang="css" scoped>
.img {
  width: 10rem;
}
.bac {
  position: fixed;
  width: 2.65252rem;
  height: 2.65252rem;
}
.ul {
  width: 100%;
  background: white;
}
.l1 {
  width: 4.774536rem;
  height: 7.29443rem;
  background: white;
  float: left;
}
.u2 {
  background: white;
  width: 4.774536rem;
  height: 7.29443rem;
}
.u2 li {
  list-style: none;
}
.u2 li img {
  width: 4.774536rem;
}
.u2 li:nth-of-type(2) {
  height: 0.795756rem;
  width: 4.774536rem;
  line-height: 0.795756rem;
  font-size: 0.397878rem;
  text-align: center;
}
.u2 li:nth-of-type(3) {
  height: 0.795756rem;
  width: 4.774536rem;
  line-height: 0.795756rem;
  font-size: 0.318302rem;
  color: red;
  text-align: center;
}
.u2 li:nth-of-type(3) span {
  height: 0.795756rem;
  width: 4.774536rem;
  line-height: 0.795756rem;
  font-size: 0.265252rem;
  color: #666;
  text-decoration: line-through;
}
.u2 li:nth-of-type(4) {
  background: yellow;
  height: 0.795756rem;
  width: 3rem;
  border-radius: 0.530504rem;
  margin-left: 0.795756rem;
  line-height: 0.795756rem;
  font-size: 0.265252rem;
  text-align: center;
}
</style>