<template>
    <div @click="order">
        
       <i>待付款</i>
       <i>待收货</i>
       <i>待评价</i>
       <i>退货/售后</i>
       <i><span></span>我的订单</i>
       
    </div>
    
</template>
    
<script>
export default {
    name: "Center",
    data () {
        return {
             
        };
    },
    methods: {
        order() {
          this.$router.push({
            path: '/order'
          })
        }
        
    }
}
</script>
    
<style lang="css" scoped>
    div{
        height: 2.4rem;
        display: flex;
        justify-content: space-between;
        background: #fff;
    }
    div>i{
        width: 20%;
        height: 100%;
        font-style: normal;
        text-align: center;
        padding-top: 1.5rem;
    }
    div>i:nth-of-type(1){
        background: url('img/needtopay@3x.png')
        center .453333rem no-repeat;
        background-size: .8rem;
    }
    div>i:nth-of-type(2){
        background: url('img/no-receive@3x.png')
        center .453333rem no-repeat;
        background-size: .8rem;
    }
    div>i:nth-of-type(3){
        background: url('img/no-comment@3x.png')
        center .453333rem no-repeat;
        background-size: .8rem;
    }
    div>i:nth-of-type(4){
        background: url('img/historyget@3x.png')
        center .453333rem no-repeat;
        background-size: .8rem;
    }
    div>i:nth-of-type(5){
        background: url('img/myorders@3x.png')
        center .453333rem no-repeat;
        background-size: .8rem;
        position: relative;
    }
    div>i:nth-of-type(5)>span{
        position: absolute;
        display: inline-block;
        height: 1.386667rem;
        border-left: 1px solid #cccccc;
        left: 0;
        top: .533333rem;
    }
</style>