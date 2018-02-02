<template>
     <div id = 'box'>
		<ul id = 'head'>
			<li><img src="./img/wochuLogo.png" class='img1' alt=""></li>
			<li><a class='img2' href="">请填写地址 </a></li>
			<li><a href=""><img src="./img/icon.png" class='img3' alt=""></a></li>
			<li><a href=""><img src="./img/search.png" class='img4'alt=""></a></li>
		</ul>
		 <!--  <div class="center_div">
            <div class="Carousel">
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                      <img src="img/9cee48bc-51f7-47df-b9a7-e6d1b81d572c.jpg" alt="">
                       <img src="img/c24a3227-8177-4ada-b9b6-a390b28f212e (1).jpg" alt="">
                       <img src="img/ceb4ac53-dcc2-46dc-839e-54ba336899bf.jpg" alt="">
						<img src="img/1a1c094a-abc3-46a2-8aa0-726b5711bd4e.jpg" alt="">
						<img src="img/62c71877-1f51-44d2-aae7-dafd35f8e33f.jpg" alt="">
						<img src="img/62c71877-1f51-44d2-aae7-dafd35f8e33f.jpg" alt="">
						<img src="img/285cbf69-b11f-4f8d-9955-a83a71543c8c.jpg" alt="">
                    </div>
                    <div class="swiper-pagination"></div>
                </div>
            </div>
 -->
		<div class="swiper-container">
			<!-- <div class="swiper-wrapper">
			  <div class="swiper-slide"><a href=""><img src="./img/9cee48bc-51f7-47df-b9a7-e6d1b81d572c.jpg" alt=""></a></div>
			  <div class="swiper-slide"><a href=""><img src="./img/c24a3227-8177-4ada-b9b6-a390b28f212e (1).jpg" alt=""></a></div>
			  <div class="swiper-slide"><a href=""><img src="./img/ceb4ac53-dcc2-46dc-839e-54ba336899bf.jpg" alt=""></a></div>
			  <div class="swiper-slide"><a href=""><img src="./img/1a1c094a-abc3-46a2-8aa0-726b5711bd4e.jpg" alt=""></a></div>
			  <div class="swiper-slide"><a href=""><img src="./img/62c71877-1f51-44d2-aae7-dafd35f8e33f.jpg" alt=""></a></div>
			  <div class="swiper-slide"><a href=""><img src="./img/62c71877-1f51-44d2-aae7-dafd35f8e33f.jpg" alt=""></a></div>
			  <div class="swiper-slide"><a href=""><img src="./img/285cbf69-b11f-4f8d-9955-a83a71543c8c.jpg" alt=""></a></div>
			</div>
			<div class="swiper-pagination"></div> -->
		  </div>
		  <ul id = 'gou'>
			  <li  @click='tehui'><img src="./img/4b5226d0-068b-47ab-8942-4cce2079c134.jpg" alt=""></li>
			  <li @click="tejiataocan"><img src="./img/51760a0f-2fb2-465e-936e-cada0969a3f2.jpg" alt=""></li>
			  <li @click="chaojituangou"><img src="./img/04309f99-dd62-4654-a27e-41534240bd98.jpg" alt=""></li>
			  <li @click="rexiaojingcai"><img src="./img/485a48f7-1df6-4d7a-85c6-193bd65f4e4e.jpg" alt=""></li>
			  <li @click="tejiataocan"><img src="./img/6f4bc5fb-1734-4566-a9a8-4886e7488050.jpg" alt=""></li>
			  <li @click="chaojituangou"><img src="./img/8bd774b9-69aa-4b13-8434-9be4ce30fb5d.jpg" alt=""></li>
			  <li @click="chaojituangou"><img src="./img/e615c3f6-698b-4fe9-ae21-f9a8e8598929.jpg" alt=""></li>
			  <li @click="chaojituangou"><img src="./img/c04031aa-dd93-4c6e-bef6-e3622b247702.jpg" alt=""></li>
		  </ul>
		  <div id ='kuaibao'>
            <div id='kk'><img src="./img/f58332d2-ad98-4d10-aa96-28d1b8090d37.jpg" class='k1'alt=""></div>
			
			<a href="" @click="heizhurou">罗汉上素净菜9.9元 点击购买</a>
			<img src="./img/213213.png" class='k2' alt="">
            <img class='k3' @click="heizhurou" src="./img/6cc79d06-92ea-4fee-a9d2-edc6fda32407.jpg"  alt="">
			 <h1></h1>
		  </div>
		  <div id='xianshi'>———— 限时特惠 ————</div>
			<ul id='maya' @click='tehui'>
		  	<li><img src="./img/0a5ff6e1-b510-408a-8225-4d5fedc8b936.jpg" class='u1' alt=""></li>
			<li>崇明二年半龄老麻鸭900g</li>
			<li>崇明本地老麻鸭，散养年龄超过...</li>
			<li>￥89.0<span>￥98</span><img class= 'add' src="./img/add.png" alt=""></li>
		     </ul>
			 <ul id = 'tehui2'>
				 <li>
					 <ul id = 'te1'>
						 <li @click='nongfushanquan'><img src="./img/48f54c64-c567-495e-94cf-362144ff2625.jpg" alt=""></li>
						 <li>农夫山泉17.5...</li>
						 <li>￥89</li>
						 <li>￥59.9<img  class= 'add' src="./img/add.png" alt=""></li>
					 </ul>
				 </li>
				 <li>
					 <ul id = 'te2'> 
						 <li  @click="tejiataocan"><img src="./img/618ce6a4-6ecf-4f38-8e22-2fdb247699ed.jpg" alt=""></li>
						 <li>江西南丰贡橘...</li>
						 <li>￥39</li>
						 <li>￥59.8<img  class= 'add' src="./img/add.png" alt=""></li>
					 </ul>
				 </li>
				 <li>
					 <ul id = 'te3'>
						 <li @click="chaojituangou"><img src="./img/c8db2f99-d79e-4c4a-97e8-3e95c67a3b2e.jpg" alt=""></li>
						 <li>我厨优选青浦红...</li>
						 <li>￥56</li>
						 <li>￥50.9<img  class= 'add' src="./img/add.png" alt=""></li>
					 </ul>
				 </li>
				 <li>
					 <ul id = 'te4'>
						 <li @click="nongjiale"><img src="./img/48f54c64-c567-495e-94cf-362144ff2625.jpg" alt=""></li>
						 <li>我厨优选崇明青...</li>
						 <li>￥29</li>
						 <li>￥10.9<img  class= 'add' src="./img/add.png" alt=""></li>
					 </ul>
				 </li>
				 <li>
					 <ul id = 'te5' >
						 <li  @click="rexiaojingcai"><img src="./img/27e2c9a5-a583-416b-8818-55f97c2d26b7.jpg" alt=""></li>
						 <li>中粮佳康小排...</li>
						 <li>￥39</li>
						 <li>￥43<img  class= 'add' src="./img/add.png" alt=""></li>
					 </ul>
				 </li>
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
					<img @click='nongfushanquan' src="./img/e83a2301-70b4-4e56-bf1a-dcd3a72bfa32.jpg" alt="">
				</div>
				<div id = 'mai2'>
					<h1>大厨教做菜</h1>
					<p>腌笃鲜</p>
					<img @click="zuocai" src="./img/5278a768-4657-4f4b-9d07-64ec74f25f04.jpg" alt="">
				</div>
				<div id = 'mai3'>
					<h1>净菜热销排行</h1>
					<p>荷塘小炒</p>
					<img  @click='nongfushanquan' src="./img/68855427-f98d-4658-bd36-d08be25b9e73.jpg" alt="">
				</div>
				<div id = 'mai4'>
					<h1>银行特惠</h1>
					<p>专享特惠福利</p>
					<img @click='bank' src="./img/91ed2aea-1130-477a-87af-9b1752a59572.jpg" alt="">
				</div>
			</div>
			 <div id='xinpin'>———— 新品推荐 ————</div>
			<ul id='caomei' @click='tehui'>
		  	<li><img src="./img/2be66477-9998-4209-a2f5-ec3906daf940.jpg" class='u2' alt=""></li>
			<li>我厨优选青浦红霞草莓一盒</li>
			<li>(15-20枚净含量300g以...</li>
			<li>￥19.9<span>￥39.9</span><img class= 'add' src="./img/add.png" alt=""></li>
		     </ul>
			 <ul id = 'xinpin2'>
				 <li>
					 <ul id = 'xin1'>
						 <li><img @click='nongfushanquan' src="./img/a07398a3-bf2f-4bde-badc-38848ba6ccce.jpg" alt=""></li>
						 <li>茨菇500g.</li>
						 <li>￥9.9</li>
						 <li>￥5.9<img  class= 'add' src="./img/add.png" alt=""></li>
					 </ul>
				 </li>
				 <li>
					 <ul id = 'xin2'> 
						 <li><img  @click='nongfushanquan' src="./img/48f54c64-c567-495e-94cf-362144ff2625.jpg" alt=""></li>
						 <li>农夫山泉17.5...</li>
						 <li>￥89</li>
						 <li>￥59.9<img  class= 'add' src="./img/add.png" alt=""></li>
					 </ul>
				 </li>
				 <li>
					 <ul id = 'xin3'>
						 <li><img  @click='nongfushanquan' src="./img/ab7d738c-aad5-475d-ae92-1ef92dd31e2d.jpg" alt=""></li>
						 <li>富老三酸菜</li>
						 <li></li>
						 <li>￥3.9<img  class= 'add' src="./img/add.png" alt=""></li>
					 </ul>
				 </li>
			 </ul>
			<div class = 'newyearfood'>
				<img src="./img/62840794-8b97-44ac-8b57-f82a5aea1049.jpg" alt="" sizes="" srcset="">
				<ul class='dongtaishengcheng'>
					<li><img src="./img/1fd00e2e-303b-408b-bd71-6e448eaafb9b.jpg" alt="">
					<h1>薄饼羊肉</h1>
					<h2>￥29.9</h2>
					<h3>￥35.9<img  class= 'add' src="./img/add.png" alt=""></h3>
					</li>
					<li><img src="./img/e490b4d0-513f-4962-9fdc-6c0348644e78.jpg" alt="">
					<h1>薄饼羊肉</h1>
					<h2>￥29.9</h2>
					<h3>￥35.9<img  class= 'add' src="./img/add.png" alt=""></h3>
					</li>
					<li><img src="./img/85bff62a-598d-4134-824e-1bc5fbf00fe7.jpg" alt="">
					<h1>薄饼羊肉</h1>
					<h2>￥29.9</h2>
					<h3>￥35.9<img  class= 'add' src="./img/add.png" alt=""></h3>
					</li>
					<li><img src="./img/0601e2cd-fe0c-4704-bffe-fffe1c69119b.jpg" alt="">
					<h1>薄饼羊肉</h1>
					<h2>￥29.9</h2>
					<h3>￥35.9<img  class= 'add' src="./img/add.png" alt=""></h3>
					</li>
					<li><img src="./img/ff47b036-4455-44d9-9b23-5edbecf457e6.jpg" alt="">
					<h1>薄饼羊肉</h1>
					<h2>￥29.9</h2>
					<h3>￥35.9<img  class= 'add' src="./img/add.png" alt=""></h3>
					</li>
					<li><img src="./img/ff47b036-4455-44d9-9b23-5edbecf457e6.jpg" alt="">
					<h1>薄饼羊肉</h1>
					<h2>￥29.9</h2>
					<h3>￥35.9<img  class= 'add' src="./img/add.png" alt=""></h3>
					</li>
					
				</ul>
			</div>













			 <div id='kong'></div>
	</div>
</template>
    
<script>
export default {
    name: "component_name",
    data () {
        return {
             msg: 'Home'
        };
    },
    methods: {
       tehui() {
         this.$router.push({
                path:'/tehui',
                query: {
                     name:'本周特惠',
                    type:1
                }
            })
	   },
	    tejiataocan() {
         this.$router.push({
                path:'/tejiataocan',
                query: {
                    name:'本周特价',
                    type:2
                }
            })
	   },
	   chaojituangou() {
         this.$router.push({
                path:'/chaojituangou',
                query: {
                    name:'超级团购',
                    type:3
                }
            })
	   },
	    rexiaojingcai() {
         this.$router.push({
                path:'/rexiaojingcai',
                query: {
                    name:'热销净菜',
                    type:4
                }
            })
	   },
	   heizhurou() {
         this.$router.push({
                path:'/heizhurou',
                query: {
                    name:'特价黑猪肉',
                    type:5
                }
            })
	   },
	   nongfushanquan() {
         this.$router.push({
                path:'/nongfushanquan',
                query: {
                    name:'农夫山泉',
                    type:6
                }
            })
	   },
	    nongjiale() {
         this.$router.push({
                path:'/nongjiale',
                query: {
                    name:'农夫山泉',
                    type:7
                }
            })
	   },
	   manglu() {
         this.$router.push({
                path:'/manglu',
                query: {
                    name:'忙碌一天做点好吃的',
                    type:8
                }
            })
	   }, 
	   zuocai() {
         this.$router.push({
                path:'/zuocai',
                query: {
                    name:'做菜',
                    type:9
                }
            })
	   },
		bank() {
         this.$router.push({
                path:'/bank',
                query: {
                    name:'银行',
                    type:10
                }
            })
	   },
	},
	  // 在created钩子函数里面做网络请求
//   created() {
//     // 使用axios处理网络请求
//     this.axios.get('http://h5.yztctech.net/api/axf/apimiaosha.php')
//       .then(res => {
//         this.productList = res.data.product
//       })
//   }
}
</script>
    
<style lang="css" scoped>
    *{
    padding: 0;
    margin: 0;
    box-sizing:border-box;
	}
	#box{
		width:100%;
		background:white;
	}
	#head{
		width:100%;
		height:1.405836rem;
		padding: 0 .265252rem
	} 
	#head li{
		list-style: none;
		float: left;
	}
	#head li:nth-of-type(1){
		width:1.458886rem;
		height:1.405836rem;
		margin-right:.450928rem;
		padding-top:.397878rem
	}
	#head li:nth-of-type(2){
		width:2.254642rem;
		height:1.458886rem
	}
	#head li:nth-of-type(2) a{
		display: block;
		width:2.254642rem;
		height:1.405836rem;
		line-height:1.32626rem
	}
	#head li:nth-of-type(3){
		width:.265252rem;
		height:1.458886rem;
		padding-top:.61008rem
	}
	#head li:nth-of-type(4){
		width:.636605rem;
		height:1.458886rem;
		padding-top:.424403rem
	}
	#head li .img1{
		width:1.299735rem;
		height: .583554rem;
		margin-bottom:.132626rem
	}
	#head li .img2{
		text-decoration: none;
		font-size:.424403rem;
		color: #41793a;
		display: inline-block;
	}
	#head li .img3{
		width:.212202rem;
		height: .212202rem;
		margin-left:.265252rem;
		margin-bottom:.265252rem
	}
	#head li .img4{
		width:.530504rem;
		height: .530504rem;
		margin-left:4.244032rem;
		margin-bottom:.132626rem;
	}
	.swiper-container {
		width:100%;
		height:4.774536rem
	}
	.swiper-container img{
		width:100%
	}
/*	.swiper-pagination-bullet {
	background: rgba(red, green, blue, 0.5)
}

.swiper-pagination-bullet-active {
	width: 25px;
	background: rgb(255, 255, 255);
	border-radius: 5px;
}
*/
#gou{
	width:100%;
	height:5.172414rem
}
#gou li {
	width:1.856764rem;
	height: 2.122016rem;
	float: left;
	list-style: none;
	margin-left:.530504rem;
	margin-bottom: .530504rem
}
#gou li img{
	width:1.856764rem;
	height: 2.122016rem
}
#kuaibao a{
	text-decoration: none;
	font-size: .318302rem;
	color: #405640;
    float:left;
    height:.954907rem;
    line-height:.954907rem;
    margin-left:.265252rem
}
#kuaibao{
    width:100%;
	border-top:1px solid #e5e5e5;
	padding-top:.397878rem;
}
#kk{
    float:left;
	width:1.193634rem;
	height:.954907rem;
    border-right:1px solid #e5e5e5;
    padding-right:.265252rem;
    margin-left:.132626rem;
     margin-bottom:.265252rem
}
#kuaibao .k1{
	width:.848806rem;
	height:.848806rem;
    display:block
}
#kuaibao .k2{
    float:left;
	width:.450928rem;
	height:.212202rem;
    margin-top:.371353rem;
    margin-left:3.183024rem;
}
#kuaibao .k3{
    display:block;
    width:10rem;
    height:3.713528rem;
}
#kuaibao h1{
	height:.530504rem;
	width:100%;
	background:#f4f4f4;
}
#xianshi{
	width:100%;
	height:1.591512rem;
	text-align:center;
	line-height:1.591512rem;
	font-size:.530504rem;
	font-weight:bold;
	color:green
}
#maya{
	padding-top:.265252rem;
	width:100%;
	height: 4rem;
	border-bottom:1px solid #e5e5e5;
	border-top:1px solid #e5e5e5;
}
#maya li{
	list-style:none;
	float:left;
	line-height:1.193634rem
}
#maya li:nth-of-type(1) {
	width:3.97878rem;
	height:3.183024rem;
}
#maya li:nth-of-type(1) img{
	width:3.97878rem;
	height:3.183024rem;
}
#maya li:nth-of-type(2) {
	font-size:.477454rem;
	font-weight:bold;
	color:#666666;
	width:5.835544rem;
	height:1.061008rem
}
#maya li:nth-of-type(3) {
	font-size:.371353rem;
	color:#666666;
	width:5.835544rem;
	height:1.061008rem
}
#maya li:nth-of-type(4) {
	font-size:.477454rem;
	color:red;
	width:5.835544rem;
	height:1.061008rem
}
#maya li:nth-of-type(4) span{
	font-size:.424403rem;
	text-decoration:line-through;
	color:#9999a5;
}
#tehui2{
	width:100%;
	height: 5.835544rem;
	white-space:nowrap;
	overflow: hidden;
	white-space:nowrap;
}
#tehui2>li {
	display: inline-block;
	width: 2.917772rem;
	height: 5.835544rem;
	list-style: none;
	margin-left:.212202rem;
	margin-right:.212202rem;
}
#tehui2 img {
	width:2.917772rem;
	height: 3.448276rem;
}
#tehui2>li ul li:first-of-type {
	text-indent:0em;
}
#tehui2>li ul li:nth-of-type(2) {
	height:.530504rem;
	line-height:.530504rem;
	font-size:.318302rem;
	color:#808080;
}
#tehui2>li ul li:nth-of-type(3) {
	font-size:.238727rem;
	color:#bababa;
	height:.530504rem;
	line-height:.530504rem;
	text-decoration: line-through
}
#tehui2>li ul li:nth-of-type(4) {
	font-size:.265252rem;
	height:.530504rem;
	line-height:.530504rem;
	color:#566956;
}
#tehui2>li ul li {
	text-indent:1.5em;
}
#maya li{
	position: relative;
}
.add {
	width:.689655rem;
	height:.689655rem;
	position: absolute;
	right:.265252rem;
	top:.265252rem
}
#tehui2>li ul li{
	position: relative;
}
#tehui2 .add {
	width:.689655rem;
	height:.689655rem;
	position: absolute;
	right:.132626rem;
	top:-.079576rem
}
#nongjia{
	width:100%;
	height:8.355438rem;
	padding-top:.397878rem;
	background:#f4f4f4;
}
#nong1{
	width:4.774536rem;
	height:7.95756rem;
	float: left;
	margin-right:.132626rem;
	position: relative;
	margin-left:.212202rem;
}
#nong1 img{
	width:4.774536rem;
	height:7.95756rem;
}
#nong2{
	width:4.774536rem;
	height:3.97878rem;
	float: left;
	margin-bottom:.026525rem;
}
#nong2 img{
	width:4.774536rem;
	height:3.97878rem;
}

#nong3{
	width:4.774536rem;
	height:3.952255rem;
	float: left;
	position: relative;
}
#nong1 h1{
	position: absolute;
	font-size:.450928rem;
	top:.265252rem;
	left: .185676rem
}
#nong3 h1{
	position: absolute;
	font-size:.450928rem;
	top:.265252rem;
	left:.530504rem;
}
#nong3 p{
	position: absolute;
	font-size: .371353rem;
	color:#f0f0f0;
	left:.530504rem;
	top:1.007958rem
}
#nong3 img{
	width:4.774536rem;
	height:3.952255rem;
}
#img{
	width:100%;
	height:3.713528rem;
	margin-top:.185676rem
}
#maishou{
	width:100%;
	height:8.62069rem;
	background:#f4f4f4;
	padding-top:.66313rem;
	padding-left:.132626rem
}
#maishou div{
	width:4.774536rem;
	height:3.448276rem;
	float: left;
	position: relative;
}
#mai1,#mai3 {
	margin-right:.132626rem
}
#mai1,#mai2 {
	margin-bottom:.530504rem;
}
#maishou div img{
	width:4.774536rem;
	height:3.448276rem
}

#maishou div h1{
	position: absolute;
	font-size:.450928rem;
	top:.265252rem;
	left:.3rem;
}
#maishou div p{
	position: absolute;
	font-size: .371353rem;
	color:#f0f0f0;
	left:.3rem;
	top:1.007958rem
}
#xinpin{
	width:100%;
	height:1.591512rem;
	text-align:center;
	line-height:1.591512rem;
	font-size:.530504rem;
	font-weight:bold;
	color:green
}
#caomei{
	padding-top:.265252rem;
	width:100%;
	height: 4rem;
	border-bottom:1px solid #e5e5e5;
	border-top:1px solid #e5e5e5;
}
#caomei li{
	list-style:none;
	float:left;
	line-height:1.193634rem
}
#caomei li:nth-of-type(1) {
	width:3.97878rem;
	height:3.183024rem;
}
#caomei li:nth-of-type(1) img{
	width:3.97878rem;
	height:3.183024rem;
}
#caomei li:nth-of-type(2) {
	font-size:.477454rem;
	font-weight:bold;
	color:#666666;
	width:5.835544rem;
	height:1.061008rem
}
#caomei li:nth-of-type(3) {
	font-size:.371353rem;
	color:#666666;
	width:5.835544rem;
	height:1.061008rem
}
#caomei li:nth-of-type(4) {
	font-size:.477454rem;
	color:red;
	width:5.835544rem;
	height:1.061008rem
}
#caomei li:nth-of-type(4) span{
	font-size:.424403rem;
	text-decoration:line-through;
	color:#9999a5;
}
#xinpin2{
	width:100%;
	height: 5.835544rem;
	white-space:nowrap;
	overflow: hidden;
	white-space:nowrap;
}
#xinpin2>li {
	display: inline-block;
	width: 2.917772rem;
	height: 5.835544rem;
	list-style: none;
	margin-left:.212202rem;
	margin-right:.212202rem;
}
#xinpin2 img {
	width:2.917772rem;
	height: 3.448276rem;
}
#xinpin2>li ul li:first-of-type {
	text-indent:0em;
}
#xinpin2>li ul li:nth-of-type(2) {
	height:.530504rem;
	line-height:.530504rem;
	font-size:.318302rem;
	color:#808080;
}
#xinpin2>li ul li:nth-of-type(3) {
	font-size:.238727rem;
	color:#bababa;
	height:.530504rem;
	line-height:.530504rem;
	text-decoration: line-through
}
#xinpin2>li ul li:nth-of-type(4) {
	font-size:.265252rem;
	height:.530504rem;
	line-height:.530504rem;
	color:#566956;
}
#xinpin2>li ul li {
	text-indent:1.5em;
}
#caomei li{
	position: relative;
}

#xinpin2>li ul li{
	position: relative;
}
#xinpin2 .add {
	width:.689655rem;
	height:.689655rem;
	position: absolute;
	right:.132626rem;
	top:-.079576rem
}
.newyearfood>img{
	width:100%;
	height:3.97878rem
}
.dongtaishengcheng li {
	float: left;
	width:3.050398rem;
	height:5.30504rem;
	list-style: none;
	margin-left:.212202rem
}
.dongtaishengcheng li img{
	width: 2.65252rem;
	height:2.65252rem;
}
.dongtaishengcheng li h1{
	font-size: .344828rem;
	color:#454545;
	text-indent:1em;
}
.dongtaishengcheng li h2{
	font-size:.265252rem;
	color:#c6c6c6;
	text-indent:1em;
	height: .66313rem;
	line-height:30px
}
.dongtaishengcheng li h3{
	font-size:.318302rem;
	color:#fa8c47;
	text-indent:1em;
	position: relative;
}
.dongtaishengcheng li h3 img {
	width:.689655rem;
	height:.689655rem;
	position: absolute;
	right:.265252rem;
	top:-.132626rem
}






















#kong{
	width:100%;
	height:13.262599rem
}
</style>