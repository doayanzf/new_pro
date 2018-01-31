<template>
    <div>
       <div class="tmain">
           <img src="./img/4708eb00-5959-4e8d-a44e-84817368396e.jpg" alt="">
           <span>本帮菜</span>
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