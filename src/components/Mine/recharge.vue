<template>
   <!-- 总背景图 -->
    <div class="Dbody">
        <div class="posD">
            <div class="imgBack">
                <p @click="backP"></p>
                <p>个人账户</p>
                <p>账户明细</p>
            </div>
            <div class="PosinD">
                <div class="TopD" :class="{ cssName1: msg, 'cssName2': !msg }" >
                    <div class="dLeft" @click="changeB(true)"></div>
                    <div class="dRight" @click="changeB(false)"></div>
                </div>
                <div class="bootomD">
                    <p>账户余额(元)</p>
                    <h1><span>￥</span>{{ money }}</h1>
                </div>
            </div>
        </div>
        <div class="fixedD">
        </div>
        <div class="rouDbottom">
            <Carousel class="Carousel"></Carousel>
            <Card class="Card"></Card>
        </div>
        <div class="divShow">
        </div>

        
    </div>
</template>
    
<script>
import Carousel from './recharge/Carousel'
import Card from './recharge/Card'
export default {
    name: "Recharge",
    data () {
        return {
             msg: true,
             money: 0
        };
    },
    methods: {
        backP() {
            history.back()
        },
        changeB(data){
            this.msg = data
        }
    },
    components: {
        Carousel,
        Card
    }
}
</script>
    
<style lang="css" scoped>
    .Dbody{
        width: 100%;
        background-color: #f4f4f4;
    }
    .divShow{
        height: 4rem;
        /* border: #a59999 1px solid; */
        /* background: rgb(255, 255, 255); */
    }
    .rouD{
        height: .586667rem;
        border-radius: 0 0 .453333rem .453333rem;
        background: rgb(255, 255, 255);
        
    }
    .rouDbottom{
        background: rgb(255, 255, 255);
        margin: 0 .32rem;
        padding: 0 .293333rem;
        height: 15.093333rem;
        box-shadow: 0px 0px 15px #888888;
        border-radius: 0 0 .386667rem .386667rem;
    }
    .Carousel{
        margin: 0 auto;
    }
    /* 固定部分 */
    .fixedD{
        height: 6rem;
        /* background: #fff; */
    }
    /* 浮动中间部分开始 */
    .posD{        
        clear: both;
        display: flex;
        flex-direction: column;
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        z-index: 2;
    }
    .PosinD{
        position: absolute;
        top: 2rem;
        width: 100%;
        height: 4.133333rem;
    }
    .TopD{
        width: 9.386667rem;
        height:1.866667rem;
        display: flex;
        align-items: stretch;
        margin: 0 auto;
        /* padding: 0 .293333rem; */
        
    }
    .TopD>div{
        width: 50%;
    }
    .bootomD{
        width: 9.386667rem;
        margin: 0 auto;
        height: 2.186667rem;
        background: rgb(255, 255, 255);
        border-top: #e5e5e5 .026667rem solid;
        border-bottom: #e5e5e5 .026667rem solid;
        display: flex;
        align-items: stretch;
    }
    .bootomD>p{
        color: #a59999;
        padding-left: .346667rem;
        padding-top: .52rem;
        font-size: .426667rem;
        width: 50%;
        background: url('./img/account-slogan@3x.png')
        .32rem 1.253333rem no-repeat;
        background-size: 2.586667rem .4rem;
    }
    .bootomD>h1{
        height: 2.186667rem;
        line-height:  2.186667rem;
        text-align: center;
        font-size: 1rem;
        width: 50%;
    }
    .bootomD>h1>span{
        font-size: .56rem;
    }
    .cssName1{
        background-image: url('./img/online-recharge@3x.png');
        background-size: cover;
    }
    .cssName2{
        background-image: url('./img/card-recharge@3x.png');
        background-size: cover;
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
    /* 上一行后退部分 */
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

</style>