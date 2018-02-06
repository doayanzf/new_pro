
<template>
    <div>
        <div class='bac' @click='back'></div>
       <img src="./img2/screencapture-wmall-wochu-cn-h5-mall-goodsDetail-html-1517823597136.png" alt="">
    </div>
</template>
    
<script>
export default {
    name: "component_name",
    data () {
        return {
             
        };
    },
     methods: {
        back() {
            history.back()
        }
    }
}
</script>
    
<style lang="css" scoped>
    img{
        width:10rem;
    }
    .bac{
        position:fixed;
        width:2.65252rem;
        height:2.65252rem;
       
    }
</style>