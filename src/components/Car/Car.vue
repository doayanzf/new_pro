<template>
    <div>
        <div id="fixed" class="fixed">
            <header>
                <div  @click="back()"><img src="./img/back.png" alt=""></div>
                <div><img src="./img/location.png" alt=""></div>
                <div> {{ address }} </div>
                <div><img src="./img/xiala.png" alt=""></div>
                <div @click="edit">{{ span }}</div>
            </header>
            <nav>
                <ul id="date">
                    <li class="date" :class="{dateClass: dateClass == 1}" @click="changeBg(1)">今天配送</li>
                    <li class="date" :class="{dateClass: firstClass == 'aaa'}" @click="changeBg(2)"> {{ data1 }} </li>
                    <li class="date" :class="{dateClass: dateClass == 3}" @click="changeBg(3)"> {{ data2 }} </li>
                    <li class="date" :class="{dateClass: dateClass == 4}" @click="changeBg(4)"> {{ data3 }} </li>
                </ul>
                <ul id="time">
                    <li class="time" :class="{timeClass: secondClass == 'bbb'}" @click="changeBg2(1)">17:30以前</li>
                    <li class="time" :class="{timeClass: timeClass == 2}" @click="changeBg2(2)">8:00-11:30</li>
                    <li class="time" :class="{timeClass: timeClass == 3}" @click="changeBg2(3)">15:30-17:30</li>
                    <li class="time" :class="{timeClass: timeClass == 4}" @click="changeBg2(4)">17:30-8:30</li>
                </ul>
                <p class="fenge"></p>
            </nav>
        </div>
        <div class="wtf"></div>
       <main>
           <div id="main1">
               <p class="title"><span>活动</span>其它</p>
               <ul>
                   <li v-for="(pro, index) in dataGoods">
                       <div  @click="changeImg()" class="selected"></div>
                       <img :src="pro.imgUrl ? pro.imgUrl : pro.picUrl" alt="" class="foodImg">
                       <div class="food">{{ pro.goodsName }}</div>
                       <div>
                           <div>
                               <div class="pricenow">￥{{ pro.price }}</div>
                               <div class="price">￥{{ pro.marketPrice }}</div>
                           </div>
                           <n_umber 
                                :danJia='pro.price'
                                @up="addPrice"></n_umber>
                          
                       </div>
                   </li>
               </ul>
           </div>
       </main>
       <div class="wtf2"></div>
       <footer v-show="footer">
           <img src="./img/selected.png" alt="">
           <div id="price">合计：<span>￥{{ price.toFixed(2) }}</span></div>
           <div id="jiesuan" @click="toSub()">结算({{ this.dataGoods.length }})</div>
           <div id="baoyou" v-show="!panduan">已包邮</div>
           <div id="baoyou2" v-show="panduan" @click="coudan">全场满99包邮 点我包邮<span id="trangle"></span></div>
       </footer>
       <div id="footer2" v-show="!footer">
           <img src="./img/unselect.png" alt="">
           <div>全选</div>
           <div @click="clear">清除购物车</div>
           <div>删除</div>
       </div>
    </div>
</template>
    
<script>
import n_umber from './n_umber'
export default {
    name: "component_name",
    data () {
        return {
             address: '哈尔滨路261号',
             data1: '2/2周五',
             data2: '2/3周六',
             data3: '2/4周日',
             dateClass: 'date',
             timeClass: 'time',
             firstClass: 'aaa',
             secondClass: 'bbb',
             selectClass: 'selected',
             price: 0,
             panduan: true,
             num: [],
             footer: true,
             span: '编辑',
             dataGoods: [],
             fnData:1,
        };
    },
    methods: {
        back() {
            //h5方法
            // history.back();
            //vue方法(-1)是上一个
            this.$router.go(-1)
        },
        addPrice(chN) {
            this.price += chN
            
            if(this.price >= 99) {
                this.panduan = false
            }

        },
        changeBg(num) {
            if (num == 2) {
                this.firstClass = 'aaa';
                this.dateClass = '';
            } else {
                this.firstClass = '';
                this.dateClass = num;
            }
            
        },
        changeBg2(num2) {
            if (num2 == 1) {
                this.secondClass = 'bbb';
                this.timeClass = '';
            } else {
                this.secondClass = '';
                this.timeClass = num2;
            }
        },
        reduce(index) {
            this.fnData--;
            // console.log(this.num)
        },
        plus(index) {
            this.fnData++;
            // console.log(this.num)
        },
        coudan() {
            
            this.$router.push({
                path: '/coudan/' + 123,
                query: {
                    name: '刘',
                    age: 18
                }
            })
        },
        toSub(){
            this.$router.push({

                path:'/sub/' + 123,
                query: {
                    name: '刘',
                    age: 18
                }
            })
        },
        clear() {

        },
        edit() {
            this.footer ? this.span = "完成" : this.span = "编辑";
            this.footer = !this.footer;
        },
        changeImg(num) {
            
        }
    },
    components: {
        n_umber
    },
    created() {
        if (this.$store.getters.getGoods[0]) {
            this.dataGoods = this.$store.getters.getGoods
            // console.log(this.dataGoods)
            
            for(var pro of this.dataGoods) {
                // console.log(pro)
                this.price += pro.price
            }
            
            if (this.price >= 99) {
                this.panduan = false;
            }
        } else {
            this.$router.push({
                path: '/car2'
            })
        }
        
    }
}
</script>
    
<style lang="css" scoped>
    #fixed{
        position: fixed;
        top: 0;
        background: #fff;
    }
    .wtf{
        height: 3.6rem;
    }
    header{
        width: 10rem;
        height: 1.2rem;
        border-bottom: 1px solid #e9e9e9;
        line-height: 1.2rem;
    }
    header div{
        height: 1.2rem;
        float: left;
        color: #5d5d5d;
        font-size: .346667rem;
        margin: 0 .16rem;
    }
    header div:first-of-type{
        margin: 0 1.2rem 0 .533333rem;
    }
    header div:nth-of-type(3){
        width: 3.466667rem;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    header div:last-of-type{
        margin:0 .533333rem 0 1.2rem ;
    }
    nav{
        height: 2.4rem;
    }
    nav ul{
        display: flex;
        justify-content: space-between;
    }
    nav .date{
        width: 25%;
        height: 1.066667rem;
        line-height: 1.066667rem;
        text-align: center;
        float: left;
        border-bottom: 2px solid #f5d1bc;
    }
    nav .dateClass{
        width: 25%;
        height: 1.066667rem;
        line-height: 1.066667rem;
        text-align: center;
        color: #f96d17;
        background: #fef9f5;
        border: 2px solid #f5d1bc;
        border-bottom: 2px solid #f6f4f1;
    }
    nav .time{
        width: 2.266667rem;
        height: 1.066667rem;
        line-height: 1.066667rem;
        text-align: center;
        float: left;
    }
    #time{
        background: #fef9f5;
        padding: 0 .213333rem;
    }
    nav .timeClass{
        width: 2.266667rem;
        text-align: center;
        color: #fa680d;
        height: .64rem;
        line-height: .64rem;
        background: #f2c0a4;
        border-radius: .373333rem;
        margin-top: .213333rem;
    }
    #date li:first-of-type{
        color: #d5d5d5;
    }
    #time li{
        border-bottom: none;
    }
    .fenge{
        height: .266667rem;
        background: #f5f5f5;
    }
    main{
        background: #fff;
    }
    main ul{
        border-top: 2px solid #f2f2f2;
    }
    .title{
        font-size: .32rem;
        padding: .32rem 0 .32rem .266667rem;
    }
    .title span{
        display: inline-block;
        width: 1.013333rem;
        height: .69rem;
        line-height: .64rem;
        border: 2px solid #fa8f4e;
        border-radius: 6px;
        color: #f9701b;
        text-align: center;
        margin-right: .266667rem;
    }
    main li{
        height: 2.906667rem;
        border-bottom: 1px solid #f1f1f1;
        clear: both;
    }
    main img{
        float: left;
    }
    .selected{
        margin: 1.226667rem .32rem 0;
        width: .44rem;
        height: .44rem;
        background: url(./img/selected.png);
        float: left;
    }
    .selectClass{
        margin: 1.226667rem .32rem 0;
        width: .44rem;
        height: .44rem;
        background: url(./img/unselect.png);
        float: left;
    }
    .foodImg{
        margin: .213333rem;
        width: 2.56rem;
        height: 2.56rem;
    }
    .food{
        width: 4.8rem;
        height: .906667rem;
        line-height: .426667rem;
        font-size: .373333rem;
        margin: .32rem .66666rem .66666rem 0;
        float: left;
    }
    .number{
        width: 2.16rem;
        height: .693333rem;
        background: #f5f5f5;
        float: right;
        margin-right: .32rem;
        border-radius: .32rem;
        display: flex;
        justify-content: space-between;
    }
    .number div{
        margin-top: .16rem;
    }
    .pricenow{
        float: left;
        width: 1.066667rem;
        height: .373333rem;
        font-size: .373333rem;
        color: #f75200;
    }
    .price{
        float: left;
        width: 1.066667rem;
        padding: .08rem 0 0 .16rem;
        color: #999999;
        text-decoration:line-through;
    }
    .wtf2{
        height: 4.468rem;
        background: #f5f5f5;
    }
    footer{
        width: 10rem;
        height: 1.5rem;
        border: 1px solid #eaeae9;
        position: fixed;
        bottom: 1.333333rem;
        background: #fff;
    }
    footer img{
        margin: .48rem .266667rem 0;
        float: left;
    }
    #price{
        float: left;
        margin-top: .266667rem;
    }
    footer span{
        color: #f75200;
        font-size: .426667rem;
    }
    #baoyou{
        float: left;
        color: #adadad;
        font-size: .32rem;
        position: fixed;
        bottom: 1.6rem;
        left: 1.013333rem;
    }
    #jiesuan{
        width: 3.066667rem;
        height: 1.5rem;
        float: right;
        font-size: .533333rem;
        line-height: 1.5rem;
        color: #fff;
        background: #f96d16;
        text-align: center;
    }
    #baoyou2{
        width: 3.733333rem;
        height: .69rem;
        background: #f0bd9f;
        border-radius: .32rem;
        line-height: .68rem;
        position: fixed;
        left: 1.44rem;
        bottom: 2.88rem;
        text-align: center;
        color: #fff;
    }
    #trangle{
        border: .16rem solid #f0bd9f;;
        border-bottom: none;
        border-left-color: white;
        border-right-color: white;
        position: absolute;
        left: 1.2rem;
        bottom: -.16rem;
    }
    #footer2{
        width: 10rem;
        height: 1.4rem;
        border: 1px solid #eaeae9;
        position: fixed;
        bottom: 1.46rem;
        background: #fff;
    }
    #footer2 img{
        margin: .48rem .266667rem 0;
        float: left;
    }
    #footer2 div{
        float: left;
    }
    #footer2 div:first-of-type{
        color: #f75200;
        font-size: .426667rem;
        margin: .36rem 3.09rem 0 0;
    }
    #footer2 div:nth-of-type(2){
        color: #969696;
        font-size: .346667rem;
        margin: .48rem .266667rem 0 0;
    }
    #footer2 div:nth-of-type(3){
        width: 3.066667rem;
        height: 1.4rem;
        line-height: 1.4rem;
        text-align: center;
        background: #ff3b30;
        color: #fff;
        font-size: .4rem;
    }
    
    
</style>


