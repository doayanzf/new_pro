<template>
    <div id='box'>
       <div id ='head'>
            <img class='back' @click='back' src="./img2/back(1).png" alt="">
            <img   src="./img/search.png" class='img4' alt="">
            <input type="text" v-model="msg" @click='dis'>
            <button @click='sou'>搜索</button>
        </div>
          <h2>我厨为您找的结果共{{dataGoods.length}}个</h2>
        <div class="concent" v-for="product in dataGoodsTow" :key="product.id">
        
          <div class="content_more">
               <div class="content_more_left">
                   <img :src="product.picUrl" alt="">
               </div>
               <div class="content_more_right">
                   <div class="right_1">
                        <strong>{{product.goodsName}}</strong>
                        <br>
                        <span>{{product.description}}</span>
                        
                   </div>
                   <div class="right_2">
                       <p>￥{{product.marketPrice}}&nbsp;&nbsp;<span>￥{{product.price}}</span></p>
                       
                       <div>
                           <img src="./../Sort/img/icon-listcart-75@3x.png" alt="">
                       </div>   
                   </div>   
               </div>
           </div>
        </div>
    </div>
</template>
    
<script>
export default {
  name: "component_name",
  data() {
    return {
      msg: "",
      dataGoods: "",
      dataGoodsTow: ""
      //  productList: [
      //      {productId: '1001', productName: '商品1', productPrice: 11.5},
      //      {productId: '1002', productName: '商品2', productPrice: 12.5},
      //      {productId: '1003', productName: '商品3', productPrice: 13.5},
      //      {productId: '1004', productName: '商品4', productPrice: 14.5},
      //      {productId: '1005', productName: '商品5', productPrice: 15.5},

      //  ]
    };
  },
  methods: {
    back() {
      history.back();
    },
    sou() {
      if (this.msg == "") {
        console.log(this.msg);
        this.if_flag = true;
        console.log(this.if_flag);
        window.setTimeout(() => {
          this.if_flag = false;
        }, 2000);
      }
      if (this.msg != "") {
        this.arr.push({ goodsname: this.msg });
        console.log(this.arr);
        this.msg = "";
      }
    },

    dis() {
      if (this.msg == "") {
        this.if_flag = false;
      }
    },
    toData() {
      this.dataGoodsTow = dataGoods;
    }
  },
  created() {
    this.axios.get(this.$store.getters.getRe).then(res => {
      console.log(res.data.shop_data);

      this.dataGoods = res.data.shop_data;
      this.dataGoodsTow = this.dataGoods;
    });
  }
};
</script>
    
<style lang="css" scoped>
#box {
  width: 9.94695rem;
  background: white;
}
.bac {
  position: fixed;
  width: 2.65252rem;
  height: 2.65252rem;
}
#head {
  width: 100%;
  height: 1.32626rem;
  position: relative;
  border-bottom: 1px solid #f6f6f6;
  margin-bottom: 0.265252rem;
}
#head > [type="text"] {
  height: 0.928382rem;
  width: 7.29443rem;
  background: #f1f2f6;
  border-radius: 0.66313rem;
  margin-left: 1.32626rem;
  margin-top: 0.212202rem;
  border: none;
  padding-left: 0.928382rem;
}
#head .back {
  width: 0.530504rem;
  height: 0.795756rem;
  position: absolute;
  left: 0.397878rem;
  top: 0.265252rem;
}
#head .img4 {
  position: absolute;
  width: 0.530504rem;
  height: 0.530504rem;
  top: 0.397878rem;
  left: 60px;
}
#head > button {
  background: white;
  border: none;
  font-size: 0.424403rem;
}
h2 {
  text-align: center;
}
.concent {
  width: 100%;
  height: 3.872679rem;
  border-bottom: 0.026525rem solid #ebebeb;
}
.content_more {
  width: 100%;
  height: 3.899204rem;
  border-bottom: 1px solid #f4f5f7;
}
.content_more_left {
  width: 3.448276rem;
  height: 3.448276rem;
  padding-top: 0.344828rem;
  float: left;
}

.content_more_left img {
  width: 3.448276rem;
  height: 3.448276rem;
}
.content_more_right {
  height: 3.448276rem;
  padding-top: 0.344828rem;
}
.content_more_right .right_1 strong {
  font-size: 0.450928rem;
}
.content_more_right .right_1 span {
  line-height: 0.769231rem;
  font-size: 0.371353rem;
}
.content_more_right .right_2 {
  line-height: 1.830239rem;
  display: flex;
  justify-content: space-between;
}
.content_more_right .right_2 div {
  width: 1.432361rem;
  height: 1.432361rem;
  margin-top: 0.265252rem;
}
.content_more_right .right_2 p {
  font-size: 0.344828rem;
  color: #ff885b;
}
.content_more_right .right_2 p span {
  font-size: 0.318302rem;
  text-decoration: line-through;
  color: #cecece;
}
.content_more_right .right_2 img {
  width: 0.795756rem;
  height: 0.795756rem;
}
</style>