<template>
    <div id='box'>
        <div id='h1'>
        <h1>
            <img class='back' @click='back' src="./img2/back(1).png" alt="">本周特惠专区<img class='car' src="./img2/icon-cart-60@3x.png" alt="">
        </h1>
       </div>
        <div class = 'xinpin' v-for='pro in goods' :key="pro.id">
            <img class='img' :src="pro.picUrl" alt=""  @click="zhuanqu(pro)">
            <h1>{{pro.goodsName}}</h1>
            <h2>￥{{pro.price}}<span>￥{{pro.marketPrice}}</span><img class='img2' @click="add(pro)" src="./img2/icon-listcart-75@3x.png" alt=""></h2>
        </div>
    </div>
</template>
    
<script>
export default {
  name: "tehui",
  data() {
    return {
      msg: "商品详情页面",
      goods: []
    };
  },
  methods: {
    back() {
      history.back();
    },
    zhuanqu(pro) {
      this.$router.push({
        path: "/goodsDetails/" + 123,
        query: {
          name: "本周特惠专区"
        }
      });
      this.$store.dispatch("xx", pro);
    },
    add(data) {
      this.$store.dispatch("add_goods", data);
    }
  },
  created() {
    this.axios.get("http://10.0.157.250:8888/benzhou").then(res => {
      this.goods = res.data.shop_data;
      console.log(this.goods);
    });
  }
};
</script>
    
<style lang="css" scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#box {
  width: 100%;
  background: white;
  z-index: 1;
  padding-top: 1.32626rem;
}
#h1 {
  width: 100%;
  height: 1.32626rem;
  position: fixed;
  z-index: 3;
  top: 0;
  background: white;
}
#h1 > h1 {
  width: 100%;
  height: 1.32626rem;
  font-size: 0.424403rem;
  line-height: 1.32626rem;
  text-align: center;
  position: relative;
  border-bottom: 1px solid #e5e5e5;
}
#h1 > h1 .back {
  width: 0.530504rem;
  height: 0.795756rem;
  position: absolute;
  left: 0.397878rem;
  top: 0.265252rem;
}
#h1 > h1 .car {
  width: 0.636605rem;
  height: 0.636605rem;
  position: absolute;
  right: 0.265252rem;
  top: 0.212202rem;
}
.xinpin {
  height: 3.97878rem;
  width: 100%;
  font-size: 0.424403rem;
  border-bottom: 1px solid #e5e5e5;
}
.xinpin .img {
  width: 3.713528rem;
  height: 3.713528rem;
  float: left;
}
.xinpin .img2 {
  width: 0.689655rem;
  height: 0.689655rem;
  position: absolute;
}
.xinpin h1 {
  font-size: 0.450928rem;
  height: 2.122016rem;
  padding-top: 0.530504rem;
  color: #666666;
  text-indent: 1em;
}
.xinpin h2 {
  float: left;
  font-size: 0.371353rem;
  height: 1.856764rem;
  line-height: 2.122016rem;
  color: #ff5918;
  position: relative;
  margin-left: 0.397878rem;
}
.xinpin h2 span {
  font-size: 0.291777rem;
  color: #cccfd8;
  margin-left: 0.265252rem;
}
.xinpin h2 .img2 {
  position: absolute;
  top: 0.689655rem;
  right: -3.183024rem;
}
</style>