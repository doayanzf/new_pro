<template>
    <div class="Dboy">
       <ul class="outUl">
            <li>支付方式</li>
            <li v-for="(value, index) in productList" 
                :key="value.id" 
                @click="changeLI(index)">
               <img class="srcLeft" :src="value.img" alt="">
               {{ value.name }}
                <img class="srcRight imgClass aa" 
                    src="../img/uncheck@3x.png" 
                    alt="">
                <img class="srcRight imgClass bb"
                    v-if="num == index" 
                    src="../img/checked@3x.png" 
                    alt="">
            </li>
           

       </ul>
    </div>
</template>
  
<script>
export default {
    name: "Card",
    data () {
        return {
             isType: 4,
             data:'',
             productList:'',
             num:0,
        };
    },
    methods: {
        changeLI(num) {
            this.num = num

        }
    },
    created () {
        this.axios.get('http://10.0.157.250:8888/rechrge')
        .then(res => {
            this.productList = res.data.shop_data.paytypes
        })
    }
}


</script>
    
<style lang="css" scoped>
   
    .srcLeft{
        margin-top: .4rem;
        float: left;
        width: .533333rem;
        height: .533333rem;
    }
    .srcRight{
        margin-top: .4rem;
        float: right;
        width: .533333rem;
        height: .533333rem;
    }
    .outUl{
        
        background: #fff;
    }
   .outUl>li{
       height: 1.333333rem;
       line-height: 1.333333rem;
       font-size: .373333rem;
       border-top: solid .026667rem #e5e5e5;
       text-indent: .35rem;
       position: relative;
   }
   .imgClass{
       position: absolute;
       top: 1px;
       right: 1px;
   }
</style>

