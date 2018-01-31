<template>
    <div>
       <div class="tmain">
           <img src="./img/4e3b486b-51fc-4147-90f8-54cdb5cf28c2.jpg" alt="">
           <span>我厨优选蔬菜</span>
       </div>
       
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
    .tmain{
        width: 57px;
        height: 79px;
    }
    li{
        width: 90px;
        height: 47px;
    }
    h1{
        font-size: 14px;
        margin: 0 auto;
    }
    img{
        width: 50px;
        height: 50px;
    }
    span{
        font-size: 10px;
    }
</style>