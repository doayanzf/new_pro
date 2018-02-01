<template>
    <div>
        <div class="booder">
            <img src="./details_img/3e0c6682-5aff-4bf2-83bd-f3bdcc20a735.jpg" alt="">
        </div>
       <div class="header">
           <div @click="back()">
               <img src="./details_img/refer.png" alt="">
           </div>
       </div>
       <div class="commodity_name">
           <h1>我厨优选特供白菜仔300g</h1>
           <span>口感鲜嫩,清香爽口</span>
            <p>￥8.9&nbsp;&nbsp;<span>￥9.9</span></p>
       </div>
       <div class="characteristics">
           <img src="./details_img/navigation.png" alt="">
       </div>
           
    </div>
</template>
    
<script>
export default {
    name: "GoodsDetails",
    data () {
        return {
             msg: '商品详情页面',
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
        }
    }
}
</script>
    
<style lang="css" scoped>
    *{
        margin: 0;
        padding: 0;
        
    }
    .header img{
        width: .795756rem;
        height: .795756rem;
        position: absolute;
        top: .265252rem;
        left: .530504rem;
        z-index: 4;
    }
    .booder{
        width: 10rem;
        height: 10rem;
        position: relative;
        z-index: 3;
    }
    .booder img{
        width: 10rem;
        height: 10rem;
    }
    .commodity_name{
        width: 9.416446rem;
        height: 3.289125rem;
        background: white;
        z-index: 5;
        border-radius: 2em;
        position: absolute;
        top: 9.310345rem;
        left: .265252rem;
        box-shadow: 8px 8px 10px #888888;
    }
    .commodity_name h1{
        color: #2a422a;
        padding-left: .265252rem;
        padding-top: .530504rem;
        padding-bottom: .265252rem;

    }
    .commodity_name span{
        padding-left: .265252rem;
       
    }
    .commodity_name p{
        font-size: .424403rem;
        color: #ff885b;
        padding-top: .265252rem;
        padding-left: .265252rem;
        
    }
    .commodity_name p span{
        font-size: .318302rem;
        text-decoration: line-through;
        color: #cecece;
        padding-left: .265252rem;
    }
    .characteristics{
        width: 100%;
        height: 3.580902rem;
        position: relative;
    }
    .characteristics img{
        width: 10rem;
        height: .583554rem;
        position: absolute;
        bottom: 0;
    }
</style>