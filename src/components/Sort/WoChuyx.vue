<template>
    <div class="box">
       <li v-for="product in productList" :key="product.id" class="tmain" @click="toproductDetail(product.productId)">
           <img src="./img/4e3b486b-51fc-4147-90f8-54cdb5cf28c2.jpg" alt="">
           <p>我厨优选蔬菜</p>
       </li>
       
    </div>
</template>
    
<script>
export default {
    name: "component_name",
    data () {
        return {
             msg: '我是推荐',
             productList: [
                 {productId: '1001', productName: '商品1', productPrice: 11.5},
                 {productId: '1002', productName: '商品2', productPrice: 12.5},
                 {productId: '1003', productName: '商品3', productPrice: 13.5},
                 {productId: '1004', productName: '商品4', productPrice: 14.5},
                 {productId: '1005', productName: '商品5', productPrice: 15.5},
                 
             ]
            
        };
    },
    methods: {
        toproductDetail(productId){
            // 使用实例的$router的push方法进行传递, 注意这个是$router 接受的时候是$route
            // 字符串形式(路由路径)
            // this.$router.push('/productDetail/' + productId);
            // 对象形式
            // this.$router.push({
            //     path: '/productDetail/' + productId
            // })
            // 可以带查询参数 (之前的路由规则不影响)
            this.$router.push({

                path: '/productDetail/' + productId,
                query: {
                    name: '刘',
                    age: 18
                }
            })
        }
    }
}
</script>
    
<style lang="css" scoped>
    *{
        margin: 0;
        padding: 0;
    }
    .box{
        
        margin-left: .530504rem;
        margin-top: .265252rem;
        float: left;
    }
    .tmain{
        width: 1.511936rem;
        height: 2.095491rem;
    }
    li{
        width: 1.98939rem;
        height: 2.758621rem;
        float: left;
        margin-left: .530504rem;
        margin-top: .397878rem;
    }
    h1{
        font-size: .371353rem;
        margin: 0 auto;
    }
    img{
        width: 1.32626rem;
        height: 1.32626rem;
    }
    p{
        font-size: .265252rem;
        width: 1.352785rem;
        height: .901857rem;
    }
</style>