<template>
    <div id = "box1">
        <div class='bac' @click='back'></div>
       <img src="./img/loginTop.gif" alt="">
       <ul id='u1'>
           <li>密码登录</li>
           <li>短信登录</li>
       </ul>
       <form action="">
           <input type="text" placeholder="输入手机号">
           <input type="password" placeholder="输入密码">
       </form>
       <h2>登录</h2>
       <h3>为注册用户，系统自动为您注册</h3>
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
#box1{
    background:white;
}
    img{
        width:10rem;
    }
    .bac{
         position:fixed;
        width:2.65252rem;
        height:2.65252rem;
    }
    #u1{
        width:100%;
        height:1.32626rem;
        padding-left:2.122016rem;
        margin-bottom:.132626rem;
    }
     #u1 li {
         float: left;
         list-style: none;
         height:1.32626rem;
         line-height:1.32626rem;
         width:2.122016rem;
         color:green;
         font-size:.424403rem;
         margin-right:1.061008rem;
         text-align: center;
     }
    #u1 li:nth-of-type(1) {
        border-bottom:.05305rem solid green;
    }
    input{
        width:8.885942rem;
        height: 1.32626rem;
        margin-left: .530504rem;
        border:none;
        padding-left:.132626rem;
        font-size: .424403rem;
    }
    [type="text"]{
        border-bottom:1px solid #999
    }
    h2{
        width:8.885942rem;
        height: 1.32626rem;
        margin-left: .530504rem;
        border-radius:.795756rem;
        text-align: center;
        font-size: 20px;
        background:rgb(131, 170, 131);
        font-weight: normal;
        color:white;
        line-height: 1.32626rem;
    }
    h3{
        width:8.885942rem;
        height: 1.32626rem;
        text-align: center;
        line-height: 1.32626rem;
        font-size: .424403rem;
        color:#666;
    }
</style>