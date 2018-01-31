<template>
<!-- 总背景图 -->
    <div class="Dbody">
        <div class="imgBack">
            
        </div>
    </div>
</template>
    
<script>



export default {
    name: "component_name",
    data () {
        return {
             msg: 'Mine'
        };
    }
}
</script>
    
<style lang="css" scoped>
    .Dbody{
        width: 100%;
        background-color: aquamarine;
    }
    .imgBack{
        width: 100%;
        height: 12.65252rem;
        border: 1px red solid;
        background: url('img/header_bg@3x.png');
        background-size: cover;
    }
</style>