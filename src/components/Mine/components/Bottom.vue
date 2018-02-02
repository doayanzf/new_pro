<template>
<div class="Dbox" v-on:click='Dclick($event)'>     
    <div class="box">
       <i id="groundBuy">我饿团购</i>
       <i id="myAddress">收货地址</i>
       <i id="myfavorite">我的收藏</i>
       <i id="about">关于我厨</i>
    </div>
    <div class="box box2">
       <i id="help">帮助中心</i>
       <i id="dOpinion">意见反馈</i>
       <i id="setUp">设置中心</i>
       <i id="phone">客服意见</i>
    </div>

</div>
</template>
    
<script>
export default {
    name: "Bottom",
    data () {
        return {
             
        };
    },
    methods: {
        Dclick(e) {
            var id = e.target.getAttribute("id")
            // alert(id)
            if (id == 'groundBuy') {
                this.$router.push({
                    path: '/order'
                })
            }else if (id == 'myAddress') {
                this.$router.push({
                    path: '/myAddress'
                })
            } else if (id == 'myfavorite') {
                this.$router.push({
                    path: '/myfavorite'
                })

            } else if (id == 'about') {
                this.$router.push({
                    path: '/about'
                })

            } else if (id == 'help') {
                this.$router.push({
                    path: '/help'
                })

            } else if (id == 'dOpinion') {
                this.$router.push({
                    path: '/dOpinion'
                })

            } else if (id == 'setUp') {
                this.$router.push({
                    path: '/setUp'
                })

            } else if (id == 'phone') {
                this.$router.push({
                    path: '/phone'
                })

            }
        }
    }
}
</script>
    
<style lang="css" scoped>
    .Dbox{
        height: 4.48rem;
        background: #fff;
        
    }
    .box{
        display: flex;
        justify-content: space-between;
        height: 2.133333rem;
        color: #999;
    }
    .box>i{
        width: 25%;
        height: 100%;
        font-style: normal;
        text-align: center;
        padding-top: 1.5rem;
    }
    .box>i:nth-of-type(1){
        background: url('img/mytg@3x.png')
        center .453333rem no-repeat;
        background-size: .8rem;
    }
    .box>i:nth-of-type(2){
        background: url('img/location@3x.png')
        center .453333rem no-repeat;
        background-size: .8rem;
    }
    .box>i:nth-of-type(3){
        background: url('img/favorite@3x.png')
        center .453333rem no-repeat;
        background-size: .8rem;
    }
    .box>i:nth-of-type(4){
        background: url('img/aboutus@3x.png')
        center .453333rem no-repeat;
        background-size: .8rem;
    }

    .box2>i:nth-of-type(1){
        background: url('img/mytg@3x.png')
        center .453333rem no-repeat;
        background-size: .8rem;
    }
    .box2>i:nth-of-type(2){
        background: url('img/help@3x.png')
        center .453333rem no-repeat;
        background-size: .8rem;
    }
    .box2>i:nth-of-type(3){
        background: url('img/setup@3x.png')
        center .453333rem no-repeat;
        background-size: .8rem;
    }
    .box2>i:nth-of-type(4){
        background: url('img/kefu@3x.png')
        center .453333rem no-repeat;
        background-size: .8rem;
    }
    .box2{
        border-top: 1px solid #e5e5e5;
    }
</style>