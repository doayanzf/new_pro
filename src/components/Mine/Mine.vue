<template>
<!-- 总背景图 -->
    <div class="Dbody">
        <div class="imgBack">
            <img src="./img/cust-icon-nologin.png" alt="">
            <p>{{ number }}</p>
        </div>
        <div class="TopD">
            <TopC class="TopC"></TopC>
        </div>
        <Center class="Center"></Center>
        <Bottom class="Bottom"></Bottom>
    </div>
</template>
    
<script>
import TopC from './components/TopC'
import Center from './components/Center'
import Bottom from './components/Bottom'
export default {
    name: "component_name",
    data () {
        return {
             msg: 'Mine',
             number: '1580****698'
        };
    },
    components: {
        TopC,
        Center,
        Bottom,
    }
}
</script>
    
<style lang="css" scoped>
    .Dbody{
        width: 100%;
        background-color: #f4f4f4;
    }
    .TopD{
        position: relative;
        height: 1.386667rem;
    }
    .TopC{
        position: absolute;
        top: -2.4rem;
        left: .32rem;        
    }
    .Center{
        clear: both;
    }
    .Bottom{
        margin-top: .266667rem;
        /* height: 2.4rem; */

    }


    /* ----------上背景------------ */
    .imgBack{
        width: 100%;
        height: 6.047745rem;
        background: url('img/header_bg@3x.png');
        background-size: cover;
        font-size: 2.666667rem;
        color: aliceblue;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
    }
    .imgBack>img{
        border-radius: 50%;
        width: 1.6rem;
        height: 1.6rem;
    }
    .imgBack>p{
        margin-top: .48rem;
        font-size: .293333rem;
        height: 2.666667rem;
    }
</style>