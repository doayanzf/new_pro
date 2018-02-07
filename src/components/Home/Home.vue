<template>
     <div id = 'box'>
		<ul id = 'head'>
			<li><img src="./img/wochuLogo.png" class='img1' alt=""></li>
			<li><a class='img2' href="">请填写地址 </a></li>
			<li><a href=""><img src="./img/icon.png" class='img3' alt=""></a></li>
			<li><a href=""><img  @click = 'searc' src="./img/search.png" class='img4' alt=""></a></li>
		</ul>
		<div class="abcd" >
			<mt-swipe :auto="1000">
			<mt-swipe-item><img  @click="tejiataocan" src="./img/9cee48bc-51f7-47df-b9a7-e6d1b81d572c.jpg" alt=""></mt-swipe-item>
			<mt-swipe-item><img @click="jiayan" src="./img/c24a3227-8177-4ada-b9b6-a390b28f212e (1).jpg" alt=""></mt-swipe-item>
			<mt-swipe-item><img @click="jianguo" src="./img/ceb4ac53-dcc2-46dc-839e-54ba336899bf.jpg" alt=""></mt-swipe-item>
			<mt-swipe-item><img @click='shucai' src="./img/1a1c094a-abc3-46a2-8aa0-726b5711bd4e.jpg" alt=""></mt-swipe-item>
			<mt-swipe-item><img @click='shucai' src="./img/62c71877-1f51-44d2-aae7-dafd35f8e33f.jpg" alt=""></mt-swipe-item>
			<mt-swipe-item><img @click="nongjiale" src="./img/9c015991-8a35-4675-a627-9d51d401acd0.jpg" alt=""></mt-swipe-item>
			<mt-swipe-item><img @click='bank' src="./img/285cbf69-b11f-4f8d-9955-a83a71543c8c.jpg" alt=""></mt-swipe-item>
			</mt-swipe>
		  </div>
		  <ul id = 'gou'>
			  <li  @click='tehui'><img src="./img/4b5226d0-068b-47ab-8942-4cce2079c134.jpg" alt=""></li>
			  <li @click="tejiataocan"><img src="./img/51760a0f-2fb2-465e-936e-cada0969a3f2.jpg" alt=""></li>
			  <li @click="chaojituangou"><img src="./img/04309f99-dd62-4654-a27e-41534240bd98.jpg" alt=""></li>
			  <li @click="jingcai"><img src="./img/485a48f7-1df6-4d7a-85c6-193bd65f4e4e.jpg" alt=""></li>
			  <li @click="shilixinpin"><img src="./img/6f4bc5fb-1734-4566-a9a8-4886e7488050.jpg" alt=""></li>
			  <li @click="niunai"><img src="./img/8bd774b9-69aa-4b13-8434-9be4ce30fb5d.jpg" alt=""></li>
			  <li @click='bank'><img src="./img/e615c3f6-698b-4fe9-ae21-f9a8e8598929.jpg" alt=""></li>
			  <li @click="wode"><img src="./img/c04031aa-dd93-4c6e-bef6-e3622b247702.jpg" alt=""></li>
		  </ul>
		  <div id ='kuaibao'>
           	  <div id='kk'>
			  		<img src="./img/f58332d2-ad98-4d10-aa96-28d1b8090d37.jpg" class='k1' alt="">
			  </div>
			  <a href="" @click="heizhurou">罗汉上素净菜9.9元 点击购买</a>
			  <img src="./img/213213.png" class='k2' alt="">
              <img class='k3' @click="heizhurou" src="./img/6cc79d06-92ea-4fee-a9d2-edc6fda32407.jpg"  alt="">
		  </div>
		  <div id='xianshi'>———— 限时特惠 ————</div>
			<ul id='maya' v-if="youhui.length > 0">
		  		 <li><img :src="youhui[0].ite[0].imgUrl"  @click='tehui' class='u2' alt=""></li>
			     <li>{{youhui[0].ite[0].goodsName}}</li>
			     <li>￥{{youhui[0].ite[0].price}}<span>￥{{youhui[0].ite[0].marketPrice}}</span><img  @click = "add_note(youhui[0].ite[0])" class= 'add' src="./img/add.png" alt=""></li>
		    </ul>
			 <ul id = 'tehui2'>
         <div class="swiper-container nav">
           <div class="swiper-wrapper nav_1">
              <template v-if="youhui.length > 0">
                <li  v-for="you in youhui[1].ite" :key='you.id' class='tehui3 swiper-slide'>
                      <ul	class = 'te1'>
                        <li><img :src="you.imgUrl" alt="" @click='nongfushanquan(you)'></li>
                        <li>{{you.goodsName}}</li>
                        <li>￥{{you.marketPrice}}</li>
                        <li>￥{{you.price}}<img  @click = 'add_note(you)' class= 'add' src="./img/add.png" alt=""></li>
                      </ul>
                 	 </li>
              </template>
                 	 
           </div>
         </div>
			 </ul>
			<div id = 'nongjia'>
				<div id = 'nong1'>
					<h1>农家乐4菜开心团</h1>
					<img  @click="chaojituangou" src="./img/8f64d926-a06e-4ca8-99cf-8e299b4395d0.jpg" alt="">
				</div>
				<div id = 'nong2'><img  @click="heizhurou" src="./img/a192d8da-e34f-42f6-98ff-27d8ca310761.jpg" alt=""></div>
				<div id = 'nong3'>
					<h1>发现好货</h1>
					<p>我厨优选新西兰羔羊块</p>
					<img  @click="nongjiale" src="./img/03e0fe1a-df06-4a58-9414-559e69646eed.jpg" alt=""></div>
			</div>
			<img id ="img"  @click="manglu" src="./img/157bef06-9a42-4319-821a-421c07c60333.jpg" alt="">
			<div id='maishou'>
				<div id = 'mai1'>
					<h1>买手推荐</h1>
					<p>超值购买</p>
					<img @click='dami' src="./img/e83a2301-70b4-4e56-bf1a-dcd3a72bfa32.jpg" alt="">
				</div>
				<div id = 'mai2'>
					<h1>大厨教做菜</h1>
					<p>腌笃鲜</p>
					<img @click="zuocai" src="./img/5278a768-4657-4f4b-9d07-64ec74f25f04.jpg" alt="">
				</div>
				<div id = 'mai3'>
					<h1>净菜热销排行</h1>
					<p>荷塘小炒</p>
					<img  @click='dami' src="./img/68855427-f98d-4658-bd36-d08be25b9e73.jpg" alt="">
				</div>
				<div id = 'mai4'>
					<h1>银行特惠</h1>
					<p>专享特惠福利</p>
					<img @click='bank' src="./img/91ed2aea-1130-477a-87af-9b1752a59572.jpg" alt="">
				</div>
			</div>
			 <div id='xinpin'>———— 新品推荐 ————</div>
			<ul id='caomei' v-if="caome.length > 0">
				<li><img :src="caome[0].ite[0].imgUrl" class='u2' @click='tehui' alt=""></li>
				<li>{{caome[0].ite[0].goodsName}}</li>
				<li>￥{{caome[0].ite[0].price}}<span>￥{{caome[0].ite[0].marketPrice}}</span><img class= 'add'  @click = "add_note(youhui[0].ite[0])" src="./img/add.png" alt=""></li>
		     </ul>
			 <ul id = 'xinpin2'  v-if="caome.length > 0">
				 <li v-for="cao in caome[1].ite" :key='cao.id'>
					 <ul class = 'xin1'>
						 <li><img @click='nongfushanquan(cao)' :src="cao.imgUrl" alt="" ></li>
						 <li>{{cao.goodsName}}</li>
						 <li>￥{{cao.marketPrice}}</li>
						 <li>￥{{cao.price}}<img  @click = 'add_note(cao)' class= 'add' src="./img/add.png" alt=""></li>
					 </ul>
				 </li> 
			 </ul>
			<div class = 'newyearfood' v-for='prolist in pro3' :Key='prolist.id' >
				<img :src="prolist.imge.ite[0].imgUrl">
				<ul class='dongtaishengcheng' v-for='pro2list in prolist.list.ite' :Key='pro2list.id'>
					<li><img :src="pro2list.imgUrl" @click = 'nongfushanquan(pro2list)' alt="">
						<h1>{{pro2list.goodsName}}</h1>
						<h2>￥{{pro2list.marketPrice}}</h2>
						<h3>￥{{pro2list.price}}<img  @click = 'add_note(pro2list)'  class= 'add' src="./img/add.png" alt=""></h3>
					</li>
				</ul>
			</div>





			<div id='kong'></div>
	</div>
</template>
    
<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
import Vue from 'vue'
export default {
  name: "component_name",
  data() {
    return {
      msg: "Home",
      dataList: [],
      pro: [],
      pro2: [],
      pro3: [],
      caome: [],
      youhui: []
    };
  },
  methods: {
    // 添加货物
    add_note(data) {
      this.$store.dispatch("add_goods", data);
    },
    tehui() {
      this.$router.push({
        path: "/tehui",
        query: {
          name: "本周特惠",
          type: 1
        }
      });
    },
    tejiataocan() {
      this.$router.push({
        path: "/tejiataocan",
        query: {
          name: "本周特价",
          type: 2
        }
      });
    },
    chaojituangou() {
      this.$router.push({
        path: "/chaojituangou",
        query: {
          name: "超级团购",
          type: 3
        }
      });
    },
    jiayan() {
      this.$router.push({
        path: "/jiayan",
        query: {
          name: "家宴盛典",
          type: 3
        }
      });
    },
    jianguo() {
      this.$router.push({
        path: "/jianguo",
        query: {
          name: "干货坚果",
          type: 8
        }
      });
    },
    shucai() {
      this.$router.push({
        path: "/shucai",
        query: {
          goodsname: "时令鲜蔬",
          type: "S"
        }
      });
    },
    rexiaojingcai() {
      this.$router.push({
        path: "/zuocai",
        query: {
          name: "热销净菜",
          type: 4
        }
      });
    },
    dami() {
      this.$router.push({
        path: "/dami",
        query: {
          goodsname: "大米",
          type: "J"
        }
      });
    },
    xihongshi() {
      this.$router.push({
        path: "/xihongshi",
        query: {
          goodsname: "西红柿",
          type: "C"
        }
      });
    },
    heizhurou() {
      this.$router.push({
        path: "/heizhurou",
        query: {
          name: "特价黑猪肉",
          type: 5
        }
      });
    },
    nongfushanquan(pro) {
      this.$router.push({
        path: "/goodsDetails/" + 123,
        query: {
          name: "限时特惠"
        }
      });
      this.$store.dispatch("xx", pro);
    },
    shilixinpin() {
      this.$router.push({
        path: "/shilixinpin",
        query: {
          name: "shilixinpin",
          type: 7
        }
      });
    },
    jingcai() {
      this.$router.push({
        path: "/tejiajingcai",
        query: {
          name: "tejiajingcai",
          type: 32431
        }
      });
    },
    nongjiale() {
      this.$router.push({
        path: "/nongjiale",
        query: {
          name: "农夫山泉",
          type: 7
        }
      });
    },
    manglu() {
      this.$router.push({
        path: "/manglu",
        query: {
          name: "忙碌一天做点好吃的",
          type: 8
        }
      });
    },
    zuocai() {
      this.$router.push({
        path: "/zuocai",
        query: {
          name: "做菜",
          type: 9
        }
      });
    },
    bank() {
      this.$router.push({
        path: "/bank",
        query: {
          name: "银行",
          type: 10
        }
      });
    },
    wode() {
      this.$router.push({
        path: "/mine",
        query: {
          name: "个人账户"
        }
      });
    },
    niunai() {
      this.$router.push({
        path: "/niunai",
        query: {
          goodsname: "牛奶",
          type: "H"
        }
      });
    },
    searc() {
      this.$router.push({
        path: "/search"
      });
    }
  },
  mounted() {
    console.log("mounted", this);
    // var swiper = new Swiper(".swiper-container", {
    //   pagination: ".swiper-pagination",
    //   paginationClickable: true,
    //   slidesPerView: 3,
    //   // slidesPerView: "auto",
    //   loop: true,
    //   // speed: 600,
    //   freeMode: true,
    //   freeModeMomentum: false,
    //   freeModeMomentumBounce: false,
    //   // 最后一个元素和容器的间隔
    //   // slidesOffsetAfter : 55,
    //   initialSlide: 0,
    //   // 右边不回弹
    //   // slidesPerView: 'auto',
    //   onTouchEnd: function() {
    //     swiper.startAutoplay();
    //   }
    // });
    console.log(this)
   
    
  },
  // 在created钩子函数里面做网络请求
  created() {
   
    // 使用axios处理网络请求
    this.axios.get("http://10.0.157.250:8888/home").then(res => {
      console.log(res.data.shop_data.length);
      this.dataList = res.data.shop_data;
      for (var index in this.dataList) {
        if (index % 2 != 0) {
          this.pro2.push(this.dataList[index]);
        } else {
          this.pro.push(this.dataList[index]);
        }
      }
      for (var i = 0; i < 10; i++) {
        this.pro3.push({ imge: this.pro[i], list: this.pro2[i], foodid: i });
        console.log(this.pro3);
      }
    })
      this.axios.get("http://10.0.157.250:8888/caomei").then(res => {
        console.log(res.data.shop_data);
  
        this.caome = res.data.shop_data;
        // this.caome = this.caome.concat(res.data.shop_data);
        console.log(this.caome);
      })
      this.axios.get("http://10.0.157.250:8888/youhui").then(res => {
        console.log(res.data.shop_data);
        this.youhui = res.data.shop_data;
        // this.youhui =
        console.log(this.youhui);

          Vue.nextTick(function () {
            
                var swiper = new Swiper(".swiper-container", {
                pagination: ".swiper-pagination",
                  // paginationClickable: true,
                  slidesPerView: 2.5,
                  // slidesPerView: "auto",
                  // loop: true,
                  // speed: 600,
                  freeMode: true,
              
                });
              
            })
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
  padding-top: 0.1px;
  z-index: 2;
}
#head {
  position: fixed;
  width: 100%;
  height: 1.405836rem;
  padding: 0 0.265252rem;
  z-index: 3;
  background: white;
}
#head li {
  list-style: none;
  float: left;
}
#head li:nth-of-type(1) {
  width: 1.458886rem;
  height: 1.405836rem;
  margin-right: 0.450928rem;
  padding-top: 0.397878rem;
}
#head li:nth-of-type(2) {
  width: 2.254642rem;
  height: 1.458886rem;
}
#head li:nth-of-type(2) a {
  display: block;
  width: 2.254642rem;
  height: 1.405836rem;
  line-height: 1.32626rem;
}
#head li:nth-of-type(3) {
  width: 0.265252rem;
  height: 1.458886rem;
  padding-top: 0.61008rem;
}
#head li:nth-of-type(4) {
  width: 0.636605rem;
  height: 1.458886rem;
  padding-top: 0.424403rem;
}
#head li .img1 {
  width: 1.299735rem;
  height: 0.583554rem;
  margin-bottom: 0.132626rem;
}
#head li .img2 {
  text-decoration: none;
  font-size: 0.424403rem;
  color: #41793a;
  display: inline-block;
}
#head li .img3 {
  width: 0.212202rem;
  height: 0.212202rem;
  margin-left: 0.265252rem;
  margin-bottom: 0.265252rem;
}
#head li .img4 {
  width: 0.530504rem;
  height: 0.530504rem;
  margin-left: 4.244032rem;
  margin-bottom: 0.132626rem;
}
.abcd {
  width: 100%;
  height: 4.774536rem;
  margin-top: 1.405836rem;
}
.abcd img {
  width: 9.94695rem;
  height: 4.509284rem;
}

#gou {
  width: 100%;
  height: 5.172414rem;
}
#gou li {
  width: 1.856764rem;
  height: 2.122016rem;
  float: left;
  list-style: none;
  margin-left: 0.530504rem;
  margin-bottom: 0.530504rem;
}
#gou li img {
  width: 1.856764rem;
  height: 2.122016rem;
}
#kuaibao a {
  text-decoration: none;
  font-size: 0.318302rem;
  color: #405640;
  float: left;
  height: 0.954907rem;
  line-height: 0.954907rem;
  margin-left: 0.265252rem;
}
#kuaibao {
  width: 100%;
  border-top: 1px solid #e5e5e5;
  padding-top: 0.397878rem;
}
#kk {
  float: left;
  width: 1.193634rem;
  height: 0.954907rem;
  border-right: 1px solid #e5e5e5;
  padding-right: 0.265252rem;
  margin-left: 0.132626rem;
  margin-bottom: 0.265252rem;
}
#kuaibao .k1 {
  width: 0.848806rem;
  height: 0.848806rem;
  display: block;
}
#kuaibao .k2 {
  float: left;
  width: 0.450928rem;
  height: 0.212202rem;
  margin-top: 0.371353rem;
  margin-left: 3.183024rem;
}
#kuaibao .k3 {
  display: block;
  width: 10rem;
  height: 3.713528rem;
}
#kuaibao h1 {
  height: 0.530504rem;
  width: 100%;
  background: #f4f4f4;
}
#xianshi {
  width: 100%;
  height: 1.591512rem;
  text-align: center;
  line-height: 1.591512rem;
  font-size: 0.530504rem;
  font-weight: bold;
  color: green;
}
#maya {
  padding-top: 0.265252rem;
  width: 100%;
  height: 4rem;
  border-bottom: 1px solid #e5e5e5;
  border-top: 1px solid #e5e5e5;
}
#maya li {
  list-style: none;
  float: left;
  line-height: 1.193634rem;
}
#maya li:nth-of-type(1) {
  width: 3.97878rem;
  height: 3.183024rem;
}
#maya li:nth-of-type(1) img {
  width: 3.97878rem;
  height: 3.183024rem;
}
#maya li:nth-of-type(2) {
  font-size: 0.477454rem;
  font-weight: bold;
  color: #666666;
  width: 5.835544rem;
  height: 1.061008rem;
}
#maya li:nth-of-type(3) {
  font-size: 0.477454rem;
  color: red;
  width: 5.835544rem;
  height: 1.061008rem;
}
#maya li:nth-of-type(3) span {
  font-size: 0.424403rem;
  text-decoration: line-through;
  color: #9999a5;
}
#tehui2 {
  width: 100%;
  height: 6.100796rem;
  white-space: nowrap;
  overflow: hidden;
  white-space: nowrap;
  overflow: hidden;
  padding-top: 10px;
}
#tehui2 .tehui3 {
  display: inline-block;
  width: 3.448276rem;
  height: 5.835544rem;
  list-style: none;
  margin-left: 0.212202rem;
  margin-right: 0.212202rem;
}
#tehui2 img {
  width: 3.448276rem;
  height: 3.448276rem;
}
#tehui2 .tehui3 ul li:first-of-type {
  text-indent: 0em;
}
#tehui2 .tehui3 ul li:nth-of-type(2) {
  height: 0.530504rem;
  line-height: 0.530504rem;
  font-size: 0.318302rem;
  color: #808080;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
#tehui2 .tehui3 ul li:nth-of-type(3) {
  font-size: 0.238727rem;
  color: #bababa;
  height: 0.530504rem;
  line-height: 0.530504rem;
  text-decoration: line-through;
}
#tehui2 .tehui3 ul li:nth-of-type(4) {
  font-size: 0.265252rem;
  height: 0.530504rem;
  line-height: 0.530504rem;
  color: red;
}
#tehui2 .tehui3 ul li {
  text-indent: 1.5em;
}
#maya li {
  position: relative;
}
.add {
  width: 0.689655rem;
  height: 0.689655rem;
  position: absolute;
  right: 0.265252rem;
  top: 0.265252rem;
}
#tehui2 .tehui3 ul li {
  position: relative;
}
#tehui2 .add {
  width: 0.689655rem;
  height: 0.689655rem;
  position: absolute;
  right: 0.132626rem;
  top: -0.079576rem;
}
#nongjia {
  width: 100%;
  height: 8.355438rem;
  padding-top: 0.397878rem;
  background: #f4f4f4;
}
#nong1 {
  width: 4.774536rem;
  height: 7.95756rem;
  float: left;
  margin-right: 0.132626rem;
  position: relative;
  margin-left: 0.212202rem;
}
#nong1 img {
  width: 4.774536rem;
  height: 7.95756rem;
}
#nong2 {
  width: 4.774536rem;
  height: 3.97878rem;
  float: left;
  margin-bottom: 0.026525rem;
}
#nong2 img {
  width: 4.774536rem;
  height: 3.97878rem;
}

#nong3 {
  width: 4.774536rem;
  height: 3.952255rem;
  float: left;
  position: relative;
}
#nong1 h1 {
  position: absolute;
  font-size: 0.450928rem;
  top: 0.265252rem;
  left: 0.185676rem;
}
#nong3 h1 {
  position: absolute;
  font-size: 0.450928rem;
  top: 0.265252rem;
  left: 0.530504rem;
}
#nong3 p {
  position: absolute;
  font-size: 0.371353rem;
  color: #f0f0f0;
  left: 0.530504rem;
  top: 1.007958rem;
}
#nong3 img {
  width: 4.774536rem;
  height: 3.952255rem;
}
#img {
  width: 100%;
  height: 3.713528rem;
  margin-top: 0.185676rem;
}
#maishou {
  width: 100%;
  height: 8.62069rem;
  background: #f4f4f4;
  padding-top: 0.66313rem;
  padding-left: 0.132626rem;
}
#maishou div {
  width: 4.774536rem;
  height: 3.448276rem;
  float: left;
  position: relative;
}
#mai1,
#mai3 {
  margin-right: 0.132626rem;
}
#mai1,
#mai2 {
  margin-bottom: 0.530504rem;
}
#maishou div img {
  width: 4.774536rem;
  height: 3.448276rem;
}

#maishou div h1 {
  position: absolute;
  font-size: 0.450928rem;
  top: 0.265252rem;
  left: 0.3rem;
}
#maishou div p {
  position: absolute;
  font-size: 0.371353rem;
  color: #f0f0f0;
  left: 0.3rem;
  top: 1.007958rem;
}
#xinpin {
  width: 100%;
  height: 1.591512rem;
  text-align: center;
  line-height: 1.591512rem;
  font-size: 0.530504rem;
  font-weight: bold;
  color: green;
}
#caomei {
  padding-top: 0.265252rem;
  width: 100%;
  height: 4rem;
  border-bottom: 1px solid #e5e5e5;
  border-top: 1px solid #e5e5e5;
}
#caomei li {
  list-style: none;
  float: left;
  line-height: 1.193634rem;
}
#caomei li:nth-of-type(1) {
  width: 3.97878rem;
  height: 3.183024rem;
}
#caomei li:nth-of-type(1) img {
  width: 3.97878rem;
  height: 3.183024rem;
}
#caomei li:nth-of-type(2) {
  font-size: 0.477454rem;
  font-weight: bold;
  color: #666666;
  width: 5.835544rem;
  height: 2.122016rem;
}
#caomei li:nth-of-type(3) {
  font-size: 0.477454rem;
  color: red;
  width: 5.835544rem;
  height: 1.061008rem;
}
#caomei li:nth-of-type(3) span {
  font-size: 0.424403rem;
  text-decoration: line-through;
  color: #9999a5;
}
#xinpin2 {
  width: 100%;
  height: 5.835544rem;
  white-space: nowrap;
  overflow: hidden;
  white-space: nowrap;
}
#xinpin2 > li {
  display: inline-block;
  width: 2.917772rem;
  height: 5.835544rem;
  list-style: none;
  margin-left: 0.212202rem;
  margin-right: 0.212202rem;
}
#xinpin2 img {
  width: 2.917772rem;
  height: 3.448276rem;
}
#xinpin2 > li ul li:first-of-type {
  text-indent: 0em;
}
#xinpin2 > li ul li:nth-of-type(2) {
  height: 0.530504rem;
  line-height: 0.530504rem;
  font-size: 0.318302rem;
  color: #808080;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
#xinpin2 > li ul li:nth-of-type(3) {
  font-size: 0.238727rem;
  color: #bababa;
  height: 0.530504rem;
  line-height: 0.530504rem;
  text-decoration: line-through;
}
#xinpin2 > li ul li:nth-of-type(4) {
  font-size: 0.265252rem;
  height: 0.530504rem;
  line-height: 0.530504rem;
  color: #566956;
}
#xinpin2 > li ul li {
  text-indent: 1.5em;
}
#caomei li {
  position: relative;
}

#xinpin2 > li ul li {
  position: relative;
}
#xinpin2 .add {
  width: 0.689655rem;
  height: 0.689655rem;
  position: absolute;
  right: 0.132626rem;
  top: -0.079576rem;
}
.newyearfood > img {
  width: 100%;
  height: 3.97878rem;
}
.dongtaishengcheng li {
  float: left;
  width: 3.050398rem;
  height: 5.30504rem;
  list-style: none;
  margin-left: 0.212202rem;
  padding-top: 10px;
}
.dongtaishengcheng li img {
  width: 2.65252rem;
  height: 2.65252rem;
}
.dongtaishengcheng li h1 {
  font-size: 0.344828rem;
  width: 3.050398rem;
  color: #454545;
  text-indent: 1em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.dongtaishengcheng li h2 {
  font-size: 0.265252rem;
  color: #c6c6c6;
  text-indent: 1em;
  height: 0.66313rem;
  line-height: 30px;
  text-decoration: line-through;
}
.dongtaishengcheng li h3 {
  font-size: 0.318302rem;
  color: #fa8c47;
  text-indent: 1em;
  position: relative;
}
.dongtaishengcheng li h3 img {
  width: 0.689655rem;
  height: 0.689655rem;
  position: absolute;
  right: 0.265252rem;
  top: -0.132626rem;
}

#kong {
  width: 100%;
  height: 13.262599rem;
}
</style>