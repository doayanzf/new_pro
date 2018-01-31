<template>
    <div>
        <h1>---我厨精选---</h1>
       <div class="tmain">
           <img src="./img/7d78dba5-d085-48e4-a5f7-d60afae06ac4.jpg" alt="">
           <span>全网抄底</span>
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