<template>
    <div>
       <h1>{{msg}}</h1>
         <button @click='back'>返回。。。。。。。。。。。。。。。。。。。。。。。。。</button>
    </div>
</template>
    
<script>
export default {
    name: "tehui",
    data () {
        return {
             msg:'商品详情页面',
            // msg:this.$route.params.propductId
           
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
    
</style>