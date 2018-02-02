<template>
    <div class="box">
        <div v-for="product in productList" :key="product.id">
            <h1>---{{ product.name }}---</h1>
            <li class="tmain" v-for="pro in product.children" :key="pro.id">
                <img :src="pro.imgUrl" alt="">
                <p>{{pro.name}}</p>
            </li>
        </div>

        
       
    </div>
</template>
    
<script>
export default {
    name: "component_name",
    data () {
        return {
             msg: '我是推荐',
            productList: []
        };
    },
    created() {
        this.axios.get('http://10.0.157.219:8888/sort_tuijian')
      .then(res => {
        console.log(res.data.shop_data);
        
        this.productList = res.data.shop_data
      })

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
    }
    /* .box div{
        padding-top: .265252rem
    } */
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
        text-align: center;
        clear: both;
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