<template>
    <div>
        <div class='bac' @click='back'></div>
       <img src="./img/screencapture-wmall-wochu-cn-h5-tg-groupList-html-1517538223132.png" alt="">
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