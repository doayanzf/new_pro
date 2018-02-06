<template>
    <div>
        <header>
            <img src="./img/back.png" alt="">
            <div>凑单</div>
        </header>
        <main>
            <ul>
                <li>
                    <div><img src="./img/unselect2.png" alt=""></div>
                    
                </li>
            </ul>
        </main>
        <footer>
            <div><img src="./img/unselect2.png" alt=""></div>
            <div>全选</div>
            <div>还差：<span> {{ price }} </span></div>
            <div>加入购物车</div>
        </footer>

    </div>
</template>
    
<script>
export default {
    name: "component_name",
    data () {
        return {
            price: '￥33.30'
        };
    },
    methods: {
        toproductDetail(productId){
            // 使用实例的$router的push方法进行传递, 注意这个是$router 接受的时候是$route
            // 字符串形式(路由路径)
            // this.$router.push('/productDetail/' + productId);
            // 对象形式
            // this.$router.push({
            //     path: '/productDetail/' + productId
            // })
            // 可以带查询参数 (之前的路由规则不影响)
            this.$router.push({

                path: '/productDetail/' + productId,
                query: {
                    name: '刘',
                    age: 18
                }
            })
        }
    }
    
}
</script>
    
<style lang="css" scoped>
    *{
        margin: 0;
        padding: 0;
        /* box-sizing: border-box; */
    }
    header{
        width: 10rem;
        height: 1.173333rem;
        border-bottom: 1px solid #73c664;
        background: #fff;
    }
    header img{
        float: left;
        margin: .46rem 0 0 .533333rem;
    }
    header div{
        float: left;
        font-size: .373333rem;
        margin: .41rem 0 0 3.566667rem;
    }
    main li{
        height: 2.506667rem;
    }
    footer{
        width: 10rem;
        height: 1.173333rem;
        border-top: 1px solid #e9e9e9;
        background: #fff;
        position: fixed;
        bottom: 0;
    }
    footer div{
        float: left;
    }
    footer div:first-of-type{
        margin: .38rem 0 0 .533333rem;
    }
    footer div:nth-of-type(2){
        font-size: .4rem;
        margin: .31rem 0 0 .32rem;
    }
    footer div:nth-of-type(3){
        font-size: .293333rem;
        margin: .31rem 0 0 2.46rem;
    }
    footer div:nth-of-type(3) span{
        font-size: .4rem;
        color: #fe6936;
    }
    footer div:last-of-type{
        color: #fff;
        width: 2.026667rem;
        height: .88rem;
        line-height: .88rem;
        text-align: center;
        font-size: .346667rem;
        background: red;
        border-radius: 3px;
        margin: .133333rem 0 0 .566667rem;
    }
</style>