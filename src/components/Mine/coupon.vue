<template>
    <div class="Dboy">
       <div class="Dfirst" @click="backRou">优惠券</div>
       <div class="Dtwo">
           <router-link to="/Coupon/unused" class="routerR" :class="{botlv:nameL == 1}" @click="Cbotlv(1)">未使用</router-link>
           <!-- <span>未使用</span> -->
           <router-link to="/Coupon/Use" class="routerR" :class="{botlv:nameL == 2}" @click="Cbotlv(2)">已使用</router-link>
           <router-link to="/Coupon/Age" class="routerR" :class="{botlv:nameL == 3}" @click="Cbotlv(3)">已过期</router-link>
       </div>
       <router-view>

       </router-view>
       <div class="Dthree">
           暂时没有可用的优惠券
       </div>
    </div>
</template>
    
<script>
export default {
    name: "Coupon",
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
        no-repeat center 6.08rem ;
        background-size: 4.8rem;
        text-align: center;
    }
    .Dthree{
        padding-top: 9rem;
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
</style>