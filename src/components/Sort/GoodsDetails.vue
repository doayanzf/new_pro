<template>
    <div>
        <div class="booder">
           <div class='bac' @click='back'></div>
            <img :src="dataGoods.imgUrl ? dataGoods.imgUrl : dataGoods.picUrl" alt="">
        </div>
       <div class="header">
           <div @click="back()">
               <img src="./details_img/refer.png" alt="">
           </div>
       </div>
       <div class="commodity_name">
           <h1>{{dataGoods.goodsName}}</h1>
           <span>{{dataGoods.description}}</span>
            <p>￥{{dataGoods.price}}&nbsp;&nbsp;<span>￥{{dataGoods.marketPrice}}</span></p>
       </div>
       <div class="characteristics">
           <img src="./details_img/navigation.png" alt="">
       </div>

       <div class="addres">
           <div class="addres_1">
                <p>
                    产地:<span>宁夏</span>
                </p>
                <p>
                    保质期:<span></span>
                </p>
           </div>
           <div class="addres_2">
               <p>
                规格:<span>300g</span>
               </p>
               <p>
                储存条件:<span>0.0~4.0℃</span>                  
               </p>
           </div>
          
       </div>

       <div class="pingjia">
           <strong>商品评价</strong>
           <img src="./details_img/next.png" alt="">
       </div>
       <div class="like">
           <p>-----猜你喜欢-----</p>
       </div>
       <div class="img">
           <img :src="dataGoods.imgUrl ? dataGoods.imgUrl : dataGoods.picUrl" alt="">
           <img :src="dataGoods.imgUrl ? dataGoods.imgUrl : dataGoods.picUrl" alt="">
       </div>

       <div class="tabar">
           <div>
               <img src="./img/cart_n.png" alt="">
           </div>
           <div @click = "add_note(dataGoods)">
               <span>加入购物车</span>
           </div>
       </div>
           
    </div>
</template>
    
<script>
export default {
  name: "GoodsDetails",
  data() {
    return {
      msg: "商品详情页面",
      dataGoods: ""
      //  msg: this.$route.params.productId
      // productList: [
      //      {productId: '1001', productName: '商品1', productPrice: 11.5},
      //      {productId: '1002', productName: '商品2', productPrice: 12.5},
      //      {productId: '1003', productName: '商品3', productPrice: 13.5},
      //      {productId: '1004', productName: '商品4', productPrice: 14.5},
      //      {productId: '1005', productName: '商品5', productPrice: 15.5},

      //  ]
    };
  },
  computed: {
    product() {
      // this.$route.params.productId 路由传递过来的参数都会放在这里
      // for(var tempProduct of this.productList){
      //     if(this.$route.params.productId == tempProduct.productId){
      //         return tempProduct
      //     }
      // }
    }
  },
  methods: {
    back() {
      //h5方法
      // history.back();
      //vue方法(-1)是上一个
      this.$router.go(-1);
    },
    add_note(dataGoods) {
      this.$store.dispatch("add_goods", dataGoods);
    }
  },
  created() {
    this.dataGoods = this.$store.getters.getXx;
  }
};
</script>
    
<style lang="css" scoped>
* {
  margin: 0;
  padding: 0;
}
.bac {
  position: fixed;
  width: 2.65252rem;
  height: 2.65252rem;
}
.tabar {
  z-index: 4;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  border-top: 1px solid #e5e5e5;
  height: 1.37931rem;

  display: flex;
}
.tabar div:nth-of-type(1) {
  width: 1.962865rem;
  height: 1.37931rem;
  text-align: center;
  background: #eb481c;
  padding-top: 0.265252rem;
  border-right: 1px solid white;
}
.tabar div:nth-of-type(2) {
  width: 100%;
  height: 1.37931rem;
  text-align: center;
  background: #ff5918;
  color: white;
  text-align: center;
  font-size: 0.477454rem;
}
.tabar div:nth-of-type(2) span {
  line-height: 1.37931rem;
}
.tabar div:nth-of-type(1) img {
  width: 0.795756rem;
  height: 0.795756rem;
}
.header img {
  width: 0.795756rem;
  height: 0.795756rem;
  position: absolute;
  top: 0.265252rem;
  left: 0.530504rem;
  z-index: 4;
}
.booder {
  width: 10rem;
  height: 10rem;
  position: relative;
  z-index: 3;
}
.booder img {
  width: 10rem;
  height: 10rem;
}
.commodity_name {
  width: 9.416446rem;
  height: 3.289125rem;
  background: white;
  z-index: 5;
  border-radius: 2em;
  position: absolute;
  top: 9.310345rem;
  left: 0.265252rem;
  box-shadow: 8px 8px 10px #888888;
}
.commodity_name h1 {
  color: #2a422a;
  padding-left: 0.265252rem;
  padding-top: 0.530504rem;
  padding-bottom: 0.265252rem;
}
.commodity_name span {
  padding-left: 0.265252rem;
}
.commodity_name p {
  font-size: 0.424403rem;
  color: #ff885b;
  padding-top: 0.265252rem;
  padding-left: 0.265252rem;
}
.commodity_name p span {
  font-size: 0.318302rem;
  text-decoration: line-through;
  color: #cecece;
  padding-left: 0.265252rem;
}
.characteristics {
  width: 100%;
  height: 3.580902rem;
  position: relative;
}
.characteristics img {
  width: 10rem;
  height: 0.477454rem;
  position: absolute;
  bottom: 0.212202rem;
}
.addres {
  width: 100%;
  height: 2.572944rem;
  background: white;
}
.addres p {
  color: #9f9f9f;
}
.addres p span {
  color: #2a422a;
}
.addres_1 {
  padding-top: 0.557029rem;
  font-size: 0.397878rem;
}
.addres_1 p {
  float: left;
}
.addres_1 p:nth-of-type(1) {
  padding-left: 1.32626rem;
}
.addres_1 p:nth-of-type(2) {
  padding-left: 25%;
}
.addres_2 {
  padding-top: 0.795756rem;
  clear: both;
  display: flex;
  justify-content: space-around;
  font-size: 0.397878rem;
}
.pingjia {
  width: 100%;
  height: 1.32626rem;
  background: white;
  margin-top: 0.265252rem;
  display: flex;
  justify-content: space-between;
  padding-top: 0.397878rem;
  padding-left: 0.265252rem;
  padding-right: 0.265252rem;
  font-size: 0.397878rem;
}
.pingjia img {
  width: 0.344828rem;
  height: 0.344828rem;
}
.like {
  width: 100%;
  height: 1.140584rem;
  font-size: 0.450928rem;
  text-align: center;
}
.like p {
  line-height: 1.140584rem;
}
.img img {
  width: 10rem;
  height: 10rem;
}
</style>