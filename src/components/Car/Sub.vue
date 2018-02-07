<template>
    <div >
           <div class="header">
               <img src="./img/left.png" alt="" @click="back()">
           </div>    
           <img src="./img/bg-line.png" alt="">  
    </div>
</template>
    
<script>
export default {
    name: "ProductDetali",
    data () {
        return {
             msg: '商品详情页面',
             dataGoods: '',
             dataGoodsTow: '',
             firstClass: 'aaa',
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
    }
    .header img{
        width: .848806rem;
        height: .928382rem;
        padding-left: .265252rem;
    }
   
</style>