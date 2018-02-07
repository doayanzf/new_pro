<template>
    <div>
        <div  @click="changeImg($event)" :class="{ selected: msg, 'selectClass': !msg }" ></div>
    </div>
    
</template>
    
<script>
export default {
    name: "select",
    data() {
        return {
            msg: true
        }
    },
    methods: {
        changeImg(can) {
            this.msg = !this.msg;
            var elem = can.target.parentNode.nextSibling.nextSibling.nextSibling.nextSibling
            var elem2 = elem.nextSibling.nextSibling.lastChild.children[1];
            // console.log(elem2.innerText)
            // console.log(this.danJia)
            var money = elem2.innerText * this.danJia
            if (this.msg) {
                this.$emit('sele', money, 1);

            } else {
                this.$emit('sele', -money, -1);
            }
        },
        childFn() {
            alert(123);
            if (this.jie) {
                this.msg = true;
            } else {
                this.msg = false;
            }
        }
    },
    props: ['danJia', 'jie']
}
</script>
    
<style lang="css" scoped>
    .selected{
        margin: 1.226667rem .32rem 0;
        width: .44rem;
        height: .44rem;
        background: url(./img/selected.png);
        float: left;
    }
    .selectClass{
        margin: 1.226667rem .32rem 0;
        width: .44rem;
        height: .44rem;
        background: url(./img/unselect.png);
        float: left;
    }
</style>