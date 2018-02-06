<template>
    <div id="box">
        <div id="img">
            <img src="./img/wochu.png" alt="">
        </div>
       <h3>您的购物车为空</h3>
       <p>可以看看哪些想买的</p>
       <div id="other" @click="turn">
           随便逛逛
       </div>
    </div>
</template>
    
<script>
export default {
    name: "component_name",
    data () {
        return {
            msg: ''
        };
    },
    methods: {
        turn() {
            // 点击随便逛逛后跳转
        }
    }
}
</script>
    
<style lang="css" scoped>
    #box{
        width: 10rem;
        height: 17.706667rem;
        background: #f4f4f4;
        padding-top: 4rem;
    }
    img{
        margin: 0 3.573333rem;
    }
    h3{
        color: #636666;
        font-size: .426667rem;
        line-height: 1.066667rem;
        text-align: center;
    }
    p{
        height: .533333rem;
        color: #e1e1e1;
        font-size: .373333rem;
        line-height: .533333rem;
        text-align: center;
    }
    #other{
        margin: .213333rem auto;
        width: 2.88rem;
        height: .8rem;
        border: 2px solid #f4b791;
        color: #f47a2b;
        text-align: center;
        line-height: .8rem;
    }
</style>