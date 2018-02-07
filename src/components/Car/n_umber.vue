<template>
    <div class="number">
        <img src="./img/reduce.png" alt="" @click="reduce">
        <div>{{ count }}</div>
        <img src="./img/plus.png" alt="" @click="plus">
    </div>
</template>
    
<script>
export default {
    name: "Number",
    data() {
        // return data;
        return {
            count: 1
        }
    },
    methods: {
        plus() {
            this.count++;
            this.$emit('up', this.danJia);
        },
        reduce() {
            if(this.count == 1){

            } else {
                this.count--;
                this.$emit('up', -(this.danJia));
            }
        }
    },
    props: ['danJia']
}
</script>
    
<style lang="css" scoped>
    .number{
        width: 2.16rem;
        height: .693333rem;
        background: #f5f5f5;
        float: right;
        margin-right: .32rem;
        border-radius: .32rem;
        display: flex;
        justify-content: space-between;
    }
    .number div{
        margin-top: .16rem;
    }
</style>