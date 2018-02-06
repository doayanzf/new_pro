<template>
    <div class="backgound" @click="recharge">
       <div class="top">
           <div>
                <h1>{{ balance }}</h1>
                <p>账户余额</p>
           </div>
           <div>
               <h1>{{ prime }}</h1>
               <p>优惠券</p>
           </div>
       </div>
       <div class="bottom">
           <img src="./img/profile-arrow@3x.png" alt=""  >
           <p>充值立送现金券哦~</p>
           <p @click.stop="coupon">马上充值 &gt</p>
       </div>
    </div>
</template>
    
<script>
export default {
  name: "center",
  data() {
    return {
        balance: 0,
        prime: 0
    };
  },
  methods: {
    recharge() {
      this.$router.push({
        path: '/recharge'
      })
    },
    coupon() {
      this.$router.push({
        path: '/coupon'
      })
    }

  }
};
</script>
    
<style lang="css" scoped>
.backgound {
  height: 3.28rem;
  width: 9.386667rem;
  background: #fff;
  border-radius: 0.25rem;
}
.top {
  height: 60%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.top > div {
  height: 1.146667rem;
  width: 50%;
  text-align: center;
}
.top > div:last-child {
  border-left: #e5e5e5 solid 0.026667rem;
}
.bottom {
  height: 40%;
  width: 100%;
  background-color: #428b0e;
  border-bottom-right-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
  position: relative;
  display: flex;
  justify-content: center;
}
.bottom>p{
    font-size: .346667rem;
    color: #fff;
    text-align: center;
    height: 1.146667rem;
    line-height: 1.146667rem;
}
.bottom>p:first-of-type{
    width: 50%;
    background: url('img/g-recharge@3x.png')
    .486667rem  center no-repeat;
    background-size: .48rem;
    text-indent: 0.8rem;
}
.bottom>p:last-of-type{
    width: 50%;
    text-indent: 0.5rem;
}
.bottom > img {
  display: block;
  height: 0.266667rem;
  width: 0.853333rem;
  position: absolute;
  top: -0.2rem;
  left: 1.92rem;
}
</style>