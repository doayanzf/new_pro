<template>
    <div >
       <div class="header">
           <div @click="back()">
               <img src="./img/back.png" alt="">
           </div>
           <div>{{dataGoods[0].title}}</div>
           <div>
               <img src="./img/icon-search-40@2x.png" @click="searc" alt="">
               <img src="./img/cart_n.png" alt="">
           </div>
           
       </div>

       <div class="swiper-container nav">
           <div class="nav_1 swiper-wrapper">
              
                    
                    <div class="li swiper-slide" :class="{liClass: firstClass == ind}" @click="changeBg(ind)" v-for="( pro, ind) in dataGoods" :key="pro.id">
                        {{pro.name}}
                    </div>
                    <!-- <li class="li" :class="{liClass: liClass == 2}" @click="changeBg(2)">{{dataGoodsTow.name}}</li>
                    <li class="li" :class="{liClass: liClass == 3}" @click="changeBg(3)"></li> -->
                    <!-- <li>我厨优选海鲜</li>
                    <li>我厨优选海鲜</li>
                    <li>我厨优选海鲜</li>    -->
              
           </div>    
       </div>
       <div class="nav_2">
               <ul>
                   <li>特惠</li>
                   <li>价格</li>
               </ul>
           </div>
       <div v-for="product in dataGoodsTow.goods" :key="product.id" class="content" >
           <div class="content_more">
               <div class="content_more_left">
                   <img :src="product.picUrl" alt="" @click="toGood(product.productId, product)">
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
                           <img @click = "add_note(product)" src="./img/icon-listcart-75@3x.png" alt="">
                       </div>   
                   </div>   
               </div>
           </div>
       </div>
       
       
    </div>
</template>
    
<script>
import Swiper from 'swiper';
    import 'swiper/dist/css/swiper.min.css';
export default {
    name: "ProductDetali",
    data () {
        return {
             msg: '商品详情页面',
             dataGoods: '',
             dataGoodsTow: '',
             firstClass: 0,
             liClass: 'li'
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
            this.$router.go(-1)
        },
        add_note(product) {
             this.$store.dispatch('add_goods',product)
        },
        
        toGood(productId,product){
            this.$router.push({

                path:'/goodsDetails/' + productId,
                query: {
                    name: '刘',
                    age: 18
                }
            })
            this.$store.dispatch('xx',product)
            
            
            
        },
        toData() {
            this.dataGoodsTow = dataGoods[0]
            
        },
        changeBg(n) {
            // if (num == 1) {
            //     this.firstClass = 'aaa';
            //     this.liClass = '';
            // } else {
            //     this.firstClass = '';
            //     this.liClass = num;
            // }
            this.firstClass = n;

            this.dataGoodsTow = this.dataGoods[n]
            

        },
        searc() {
         this.$router.push({
                path:'/search',
            })
	   }
    },
    created() {

        this.dataGoods = this.$store.getters.getData
        this.dataGoodsTow = this.dataGoods[0];
    },
    mounted() {
        console.log('mounted', this)
        var swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            // slidesPerView: 1.5,
            slidesPerView: 'auto',
            // loop: true,
            // speed: 600,
            freeMode : true,
            freeModeMomentum : false,
            freeModeMomentumBounce : false,
            // 最后一个元素和容器的间隔
            // slidesOffsetAfter : 55,
            initialSlide :0,
            // 右边不回弹
            // slidesPerView: 'auto',
            onTouchEnd: function() {
                swiper.startAutoplay()
            }
        });
    }
    
}
</script>
    
<style lang="css" scoped>
    *{
        margin: 0;
        padding: 0;
        
    }
    .header{
        width: 100%;
        height: 1.32626rem;
        /* background: red; */
        display: flex;
        justify-content: space-between;
        background: white;
    }
    .header div:nth-of-type(1){
        padding-top: .132626rem;
    }
    .header div:nth-of-type(2){
        padding-top: .265252rem;
    }
    .header div:nth-of-type(3){
        padding-top: .132626rem;
    }
    
    .header div:nth-of-type(1) img{
        width: .848806rem;
        height: .928382rem;
        padding-left: .265252rem;
        
    }
    .header div:nth-of-type(3) img{
        width: .742706rem;
        height: .742706rem;
    }
    .header div:nth-of-type(3) img:nth-of-type(1){
        padding-right: .132626rem;
    }
    .header div:nth-of-type(2) {
        font-size: .397878rem;
    }
    .nav{
        width: 100%;
        height: 1.37931rem;
        background: white;
        margin-top: .132626rem;
    }
    

    

    .nav_1{
        /* overflow: hidden; */
        height: 1.37931rem;
        position: relative;
    }

    .nav_1 ul{
        width: 50.079576rem;
        height: 1.37931rem;
        overflow-x:auto;
        font-size: .397878rem;
        
    }
    .li{
        
        /* background: red; */
        text-align: center;
        line-height: 1.37931rem;
        float: left;
     
        width: 3.076923rem;
        height: 1.37931rem;
    }
    .liClass{
        text-align: center;
        line-height: 1.37931rem;
        /* float: left; */
        width: 3.076923rem;
        height: 1.37931rem;
        border-bottom: 1px solid green;
        color: green;

    }
    .nav_2{
        width: 100%;
        height: .954907rem;
        background: white;
    
    }
    .nav_2 ul{
        display: flex;
        justify-content: space-around;
    }
    .nav_2 li{
        padding-top: .265252rem;
    }
    .content{
        width: 100%;
        margin-top: .265252rem;
        background: white;
    }
    .content_more{
        width: 100%;
        height: 3.899204rem;
        border-bottom: 1px solid #f4f5f7;
    }
    .content_more_left{
        width: 2.65252rem;
        height: 2.65252rem;
        padding-top: .530504rem;
        margin-left: .530504rem;
        margin-right: .265252rem;
        float: left;
    }
       
    
    .content_more_left img{

        width: 2.65252rem;
        height: 2.65252rem;
        
    }
    .content_more_right{
        height: 3.448276rem;
        padding-top: .212202rem;
      
    }
    .content_more_right .right_1 strong{
        font-size: .450928rem;
       
    }
    .content_more_right .right_1 span{
        
        line-height: .769231rem;
        font-size: .371353rem;
    }
    .content_more_right .right_2{
        line-height: 1.830239rem;
        display: flex;
        justify-content: space-between;
    }
    .content_more_right .right_2 div{
        width: 1.432361rem;
        height: 1.432361rem;
        margin-top: .265252rem;
    }
    .content_more_right .right_2 p{
        font-size: .344828rem;
        color: #ff885b;
    }
    .content_more_right .right_2 p span{
        font-size: .318302rem;
        text-decoration: line-through;
        color: #cecece;
    }
    .content_more_right .right_2 img{
       width: .795756rem;
       height: .795756rem;
       
       
    }
</style>