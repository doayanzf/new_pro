<template>
   <!-- 总背景图 -->
    <div class="Dbody">
        <div class="imgBack">
            <p></p>
            <p>个人账户</p>
            <p>账户明细</p>
        </div>
        
        <div class="TopD">
            <!-- <TopC class="TopC"></TopC> -->
        </div>
    </div>
</template>
    
<script>
export default {
    name: "Recharge",
    data () {
        return {
             
        };
    }
}
</script>
    
<style lang="css" scoped>
    .Dbody{
        width: 100%;
        background-color: #f4f4f4;
        border: 1px blue solid;
    }
    .imgBack>p:nth-of-type(1){
        width: 1.066667rem;
        height: 1.333333rem;
        background: url("./img/back@3x.png") 
        center center no-repeat;
        background-size: .32rem .586667rem;
    }
    .imgBack>p:nth-of-type(2){
        width: 7.28rem;
        height: 1.333333rem;
        line-height: 1.333333rem;
        text-align: center;
        font-size: .453333rem;
    }
    .imgBack>p:nth-of-type(3){
        width: 1.706667rem;
        height: 1.333333rem;
        line-height: 1.333333rem;
        text-align: center;
    }




    /* ----------上背景------------ */
    .imgBack{
        width: 100%;
        height: 6.047745rem;
        background: url('img/header_bg@3x.png');
        background-size: cover;
        font-size: .293333rem;
        color: aliceblue;
        display: flex;
        align-items: flex-start;
        
    }
</style>