<template>
    <div class="box">
       <li v-for="product in productList" :key="product.id" class="tmain" @click="toproductDetail(product.productId)">
           <img :src="product.checkicon" alt="">
           <p>{{ product.name }}</p>
       </li>
       
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
    methods: {
        toproductDetail(productId){
            this.axios.get('http://10.0.157.219:8888/sort_dianxin_cai')
            .then(res => {
                console.log(res.data.shop_data);
                               
                this.$store.dispatch('add',res.data.shop_data)
            }),
            this.$router.push({

                path: '/productDetail/' + productId,
                query: {
                    name: '刘',
                    age: 18
                }
            })
        }
    },
    created() {
        this.axios.get('http://10.0.157.219:8888/sort_dianxin')
      .then(res => {
        console.log(res.data.shop_data);
        
        this.productList = res.data.shop_data
      }),
      this.axios.get('http://10.0.157.219:8888/sort_dianxin_cai')
         .then(res => {
            this.dataGoods = res.data.shop_data
            this.$store.dispatch('add',res.data.shop_data)
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