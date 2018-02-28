<template>
    <div>
           <div class="header">
               <img src="./img/left.png" alt="" @click="back()">
               <h2>确认订单</h2>
           </div>    
           <img src="./img/bg-line.png" alt="">  
            <div class="address">
                <strong>张峰  1888888888</strong>
                <br>
                <p>上海市,上海市,虹口区哈尔滨路261号临嘉兴路267号</p>
                <br>
                <strong>配送时间: &nbsp;&nbsp;02/07(周三)&nbsp;&nbsp;08:30-17:30</strong>

            </div>
           <img src="./img/bg-line.png" alt="">  
           <div class="shangpin">
               <div>    
                   <span>商品清单</span>
               </div>
               <div>
                   <span>共{{ goodsnum }}件</span>
                   <img src="./img/right.jpg" alt="">
               </div>
           </div>
           
        <div class="swiper-container">
            <div id="main1" class="swiper-wrapper">
                <span v-for="(pro, index) in dataGoods" :key="index.id" class="tpos swiper-slide">
                    <span class="pos">x{{ pro.onSale }}</span>
                    <img :src="pro.imgUrl ? pro.imgUrl : pro.picUrl" alt="" class="foodImg">
                </span>
            </div>
        </div>
        
    
       <div class="beizhu">
           <div>优惠码</div><br>
           <div>优惠券</div><br>
           <div>账户余额</div><br>
           <div>发票</div><br>
           <div>备注</div>
       </div>

        <div class="tabar">
           <div class="taber_1">
              <span>应付:{{ totalprice }}￥</span>
           </div>
           <div class="taber_2">
               <span>提交订单</span>
           </div>
       </div>
    </div>
</template>
    
<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
import Vue from "vue";

export default {
  name: "Sub",
  data() {
    return {
      msg: ""
    };
  },
  methods: {
    back() {
      //h5方法
      // history.back();
      //vue方法(-1)是上一个
      this.$router.go(-1);
    }
  },
  computed: {
    dataGoods() {
      return this.$store.getters.totalgoods;
    },
    goodsnum() {
      return this.$store.getters.goodsnum;
    },
    totalprice() {
      return this.$store.getters.totalprice;
    }
    
  },
  created() {
     Vue.nextTick(function() {
        var swiper = new Swiper(".swiper-container", {
        pagination: ".swiper-pagination",
        // paginationClickable: true,
        slidesPerView: 4,
        // slidesPerView: "auto",
        // loop: true,
        // speed: 600,
          freeMode: true
        });
    });
    // setTimeout(function () {
    //   var swiper = new Swiper(".swiper-container", {
    //     pagination: ".swiper-pagination",
    //     // paginationClickable: true,
    //     slidesPerView: 2.5,
    //     // slidesPerView: "auto",
    //     // loop: true,
    //     // speed: 600,
    //     freeMode: true
    //     });
    // }, 5000)
  }
};
</script>
    
<style lang="css" scoped>
* {
  margin: 0;
  padding: 0;
}
.tpos{
  position: relative;
}
.pos{
  text-align: center;
  position: absolute;
  /* display: inline-block; */
  width: .733333rem;
  height: .533333rem;
  line-height: .533333rem;
  background-color: #f9f9f9;
  border: #000 solid .026667rem;
  border-radius: 1rem;
}
.header {
  width: 100%;
  height: 1.32626rem;
  display: flex;
  padding-top: 0.397878rem;
  background: white;
}
.header img {
  width: 0.66313rem;
  height: 0.66313rem;
  padding-left: 0.265252rem;
}
.header h2 {
  margin: 0 auto;
}
.address {
  width: 100%;
  height: 2.493369rem;
  padding-top: 0.265252rem;
  padding-left: 0.212202rem;
  background: white;
}
.address strong {
  font-size: 0.397878rem;
}
.address strong:nth-of-type(1) {
  line-height: 0.795756rem;
}
.shangpin {
  width: 100%;
  height: 1.32626rem;
  background: white;
  display: flex;
  justify-content: space-between;
  padding-top: 0.265252rem;
}
.shangpin div:nth-of-type(1) {
  /* padding-top: .265252rem; */
  padding-left: 0.132626rem;
  font-size: 0.397878rem;
}
.shangpin div:nth-of-type(2) {
  padding-right: 0.132626rem;
  font-size: 0.397878rem;
}
.shangpin div:nth-of-type(2) img {
  width: 0.318302rem;
  height: 0.318302rem;
}

#main1 {
  display: flex;
  /* flex-wrap: wrap;
  justify-content: space-around; */
  width: 10rem;
  /* height: 2.758621rem; */
  margin-top: 0.265252rem;
  clear: both;
}
#main1 img {
  width: 2.572944rem;
  height: 2.572944rem;
}
#main1 div {
  margin-top: 0.265252rem;
  background: white;
}
.beizhu {
  width: 100%;
  /* height: 6.790451rem;; */
  font-size: 0.424403rem;
}
.beizhu div {
  width: 100%;
  height: 1.37931rem;
  background: white;
  margin-top: 0.265252rem;
  line-height: 1.37931rem;
  padding-left: 0.265252rem;
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
  font-size: 0.397878rem;
}
.taber_1 {
  width: 10rem;
  height: 1.37931rem;
  background: white;
  line-height: 1.37931rem;
  text-align: center;
}

.taber_2 {
  width: 100%;
  height: 1.37931rem;
  background: #ff5918;
  text-align: center;
  font-size: 0.477454rem;
  color: white;
  line-height: 1.37931rem;
}
</style>

