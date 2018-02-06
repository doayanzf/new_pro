<template>
    <div class="Dboy">
       <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" 
                    :class="{ afterType: isType == 1 }"
                    @click="changeType(1)">
                        <div class="firstD">充值￥500</div>
                        <div class="twoD">の20元 在送30元抵金券
                            <span class="inDspan"></span>
                        </div>
                        <span class="posSpan"
                            :class="{ spanType: isType == 1 }"                            
                        ></span>
                </div>
                <div class="swiper-slide"
                    :class="{ afterType: isType == 2 }"
                    @click="changeType(2)">
                        <div class="firstD">充值￥500</div>
                        <div class="twoD">の20元 在送30元抵金券
                            <span class="inDspan"></span>
                        </div>
                        <span class="posSpan"
                            :class="{ spanType: isType == 2 }"                            
                        ></span>

                </div>
                <div class="swiper-slide"
                    :class="{ afterType: isType == 3 }"
                    @click="changeType(3)">
                        <div class="firstD">充值￥500</div>
                        <div class="twoD">の20元 在送30元抵金券
                            <span class="inDspan"></span>
                        </div>
                        <span class="posSpan"
                            :class="{ spanType: isType == 3 }"                            
                        ></span>

                </div>
                <div class="swiper-slide callFour"
                    :class="{ afterType: isType == 4 }"
                    @click="changeType(4)">
                        <div class="firstD">充值￥500</div>
                        <div class="twoD">の20元 在送30元抵金券
                            <span class="inDspan"></span>
                        </div>
                        <span class="posSpan"
                            :class="{ spanType: isType == 4 }"                            
                        ></span>

                </div>
            </div>
             <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>
  
<script>
import Swiper from '../../../../static/swiper-3.4.2.min.js'
export default {
    name: "Carousel",
    data () {
        return {
             isType: 4
        };
    },
    methods: {
        changeType(num) {
            this.isType = num
        }
    }
}


       
</script>
    
<style lang="css" scoped>
    @import '../../../../static/swiper-3.4.2.min.css';
    .inDspan{
        display: inline-block;
        background: url('../img/icon-more@3x.png')
        no-repeat;
        background-size: cover;
        width: .4rem;
        height: .4rem;
        float: right;
        margin: .18rem .4rem 0 0;
    }
    .posSpan{
        display: block;
        background: url('../img/r-unselect@3x.png')
        no-repeat;
        background-size: cover;
        width: .533333rem;
        height: .533333rem;
        position: absolute;
        top: .32rem;
        right: .32rem;
    }
    .spanType{
        background: url('../img/r-selected@3x.png')
        no-repeat;
        background-size: cover;
    }
    .Dboy{
        
        padding-top: .333333rem;
        background: #fff;
    }
    .swiper-container {
        /* width: 8.8rem; */
        height: 2.933333rem;
        /* border: 1px solid rgb(21, 214, 14); */
        background: #fff;
        display: flex;
    }
    .swiper-slide{
        margin-right: .266667rem;
        border-radius: .32rem;
        background:#e5f6e5;
        width: 6.4rem;
        height: 2.933333rem;
        position: relative;
        display: flex;
        flex-direction: column;
        text-indent: .426667rem;
    }
    .firstD{
        padding-top: .85rem;
        height: 50%;
        font-size: .48rem;
    }
    .twoD{
        height: 50%;
        line-height: .8rem;
        font-size: .346667rem;
        color: #1f6117;
    }
    .afterType{
        background: #c0ebc0;
    }
    .callFour{
        margin-right: 0;
    }
</style>