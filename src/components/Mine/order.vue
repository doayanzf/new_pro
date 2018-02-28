<template>
    <div class="Dboy">
       <div class="Dfirst" @click="backRou">全部订单</div>
       <div class="Dtwo">
           <router-link to="/Coupon/unused" class="routerR" :class="{botlv:nameL == 1}" @click="Cbotlv(1)">全部</router-link>
           <!-- <span>未使用</span> -->
           <router-link to="/Coupon/Use" class="routerR" :class="{botlv:nameL == 2}" @click="Cbotlv(2)">待付款</router-link>
           <router-link to="/Coupon/Age" class="routerR" :class="{botlv:nameL == 3}" @click="Cbotlv(3)">待收货</router-link>
           <router-link to="/Coupon/Age" class="routerR" :class="{botlv:nameL == 4}" @click="Cbotlv(4)">待评价</router-link>
       </div>
       <router-view>

       </router-view>
       <div class="Dthree">
           亲~您还没有相关订单~
       </div>
       <button class="Bfirst">去看看优惠</button>
    </div>
</template>
    
<script>
export default {
    name: "Order",
    data () {
        return {
             nameL: 1
        };
    },
    methods: {
        Cbotlv(um) {
            this.nameL = um
            if(um == 1){
                this.$router.push({
                    path: '/Coupon/unused'
                })
            } else if (um == 2) {
                this.$router.push({
                    path: '/Coupon/Use'
                })
            } else if (um == 3) {
                this.$router.push({
                    path: '/Coupon/Age'
                })
            }
        },
        backRou() {
            this.$router.push({
                path: '/mine'
            })
        }
    }
}
</script>
    
<style lang="css" scoped>
    .Dboy{
        height: 17.786667rem;
        background: url(./img/noTag.png)
        no-repeat center 3.8rem ;
        background-size: 4.8rem;
        text-align: center;
    }
    .Dthree{
        padding-top: 7rem;
        font-size: .426667rem;
    }
    .Dtwo{
        height: 1.233333rem;
        background: #fff;
        display: flex;
        justify-content: space-around;
    }
    .routerR{
        line-height: 1.233333rem;
        width: 1.6rem;
        text-align: center;
        font-size: .293333rem;
    }
    .botlv{
        border-bottom: #6eb042 solid .026667rem;
        color: #6eb042;
    }
    .Dfirst{
        font-size: .453333rem;
        height: 1.2rem;
        line-height: 1.2rem;
        width: 100%;
        border-bottom: 1px #e5e5e5 solid;
        text-align: center;
        background: #fff url('img/back(1).png')
        no-repeat .133333rem center;
    }
    .Bfirst{
        width: 5.226667rem;
        height: 1.333333rem;
        background: #6eb042;
        border: none;
        border-radius: .266666rem;
        font-size: .4rem;
        color: #fff;
        margin-top: .933333rem;
    }
</style>