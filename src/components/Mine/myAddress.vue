<template>
    <div id='box'>
        <div id='h1'>
        <h1>
            <img class='back' @click='back' src="./img/back(1).png" alt="">收货地址管理
        </h1>
       </div>
       <ul id ='main'>
           <li><img src="./img/259916994214049135.png" alt=""><p><span>张峰</span>158 0520 3698</p><div class='moren1'>默认</div></li>
           <li><img src="./img/824605450533496648.png" alt=""><p>上海市，上海市，虹口区哈尔滨路261号<br>-临嘉兴路267号</p><div class='moren2'>无</div></li>
       </ul>
       <h2>添加新的收货地址</h2>
    </div>
</template>
    
<script>
export default {
    name: "MyAddress",
    data () {
        return {
             
        };
    },
    methods:{
    back() {
      history.back();
    },
    }
}
</script>
    
<style lang="css" scoped>
    * {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#box {
  width: 100%;
  background: #f4f4f4;
  z-index: 1;
  padding-top: 1.32626rem;
  height:15.915119rem;
;
}
#h1 {
  width: 100%;
  height: 1.32626rem;
  position: fixed;
  z-index: 3;
  top: 0;
  background: white;
}
#h1 > h1 {
  width: 100%;
  height: 1.32626rem;
  font-size: 0.424403rem;
  line-height: 1.32626rem;
  text-align: center;
  position: relative;
  border-bottom: 1px solid #f0f0f0;
}
#h1 > h1 .back {
  width: 0.530504rem;
  height: 0.795756rem;
  position: absolute;
  left: 0.397878rem;
  top: 0.265252rem;
}
#main{
    width:9.416446rem;
    margin: 0 auto;
    margin-top:.265252rem;
    background: white;
}
#main li:nth-of-type(1) {
    border-bottom:1px solid #999
}
#main li:nth-of-type(1) img{
    width:.530504rem;
    height: .530504rem;
    float: left;
    margin-top:.503979rem;
    margin-left:.132626rem;
    margin-right:.265252rem;
}
#main li:nth-of-type(2) img{
    width:.530504rem;
    height:.530504rem;
    float: left;
    margin-top:.530504rem;
    margin-left: .132626rem;
    margin-right:.265252rem;
}
#main li{
    width:8.885942rem;
    margin-left: .265252rem;
    height: 1.591512rem;
    list-style: none;
    font-size: 12px;
    color: #666;
  
}
#main li:nth-of-type(1) p{
    float: left;
    height: 1.591512rem;
    line-height: 1.591512rem
}
#main li:nth-of-type(2) p{
    float: left;
    height: 1.591512rem;
    line-height:.530504rem;
    padding-top:.424403rem
}
#main li p span{
    font-size: .397878rem;
    font-weight: bold;
    margin-right:.265252rem;
}
#main li .moren1{
    float: right;
    color:green;
    width: 1.061008rem;
    height:.583554rem;
    line-height: .583554rem;
    border:1px solid green;
    border-radius:.106101rem;
    margin-top:20px;
    text-align: center;
      margin-right:.05305rem
}
#main li .moren2{
    float: right;
    color:white;
     width: 1.061008rem;
    height:.583554rem;
    line-height: .583554rem;
    background:green;
    border-radius:.106101rem;
    margin-top:20px;
    text-align: center;
    margin-right:.05305rem
}
h2{
    font-weight: normal;
    width: 7.95756rem;
    height: 1.061008rem;
    text-align:center;
    line-height: 1.061008rem;
    background:green;
    color:white;
    font-size: .371353rem;
    position: fixed;
    left:1.246684rem;
    bottom:70px;

}
</style>