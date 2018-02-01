<template>
    <div class="box">
       <li class="tmain">
           <img src="./img/4708eb00-5959-4e8d-a44e-84817368396e.jpg" alt="">
           <p>本帮菜</p>
       </li>
       
    </div>
</template>
    
<script>
export default {
    name: "component_name",
    data () {
        return {
             msg: '我是推荐',
            
        };
    }
}
</script>
    
<style lang="css" scoped>
    *{
        margin: 0;
        padding: 0;
    }
    .box{
        margin-left: .530504rem;
        margin-top: .265252rem;
    }
    .tmain{
        width: 1.511936rem;
        height: 2.095491rem;
    }
    li{
        width: 2.387268rem;
        height: 1.246684rem;
        margin-left: .530504rem;
        margin-top: .397878rem;
    }
    h1{
        font-size: .371353rem;
        margin: 0 auto;
    }
    img{
        width: 1.32626rem;
        height: 1.32626rem;
    }
    p{
        font-size: .265252rem;
        width: 1.352785rem;
        height: .901857rem;
    }
</style>