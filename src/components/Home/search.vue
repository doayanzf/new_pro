<template>
    <div id='box'>
        <div id ='head'>
    <img class='back' @click='back' src="./img2/back(1).png" alt="">
    <img   src="./img/search.png" class='img4' alt="">
       <input type="text" v-model="msg">
       <button @click='sou'>搜索</button>
        </div>
        <div  id = 'remen'> 热门搜索
            <ul>
           <li>牛排</li>
            <li>豆腐</li>
            <li>年货</li>
            <li>火锅</li>
            <li>羊肉</li>
            <li>特供蔬菜</li>
            <li>冷冻</li>
       </ul>
       </div>
      
       
      <div id ='lishi'>
          搜索历史
          <ul>
           <li></li>
       </ul>
        <p>清空搜索记录</p>
      </div>
       <div id ='tishi'  v-show='jisuan'>
           <img src="./img2/i-omg.png" alt=""><br>
           搜索内容不能为空
       </div>
    </div>
</template>
    
<script>
export default {
    name: "component_name",
    data () {
        return {
             inputlist:[],
             msg:'',
             if_flag:false
        };
    },
     methods: {
        back() {
            history.back()
        },
        sou(){
            if(this.msg == '') {
                console.log(this.msg)
                 this.if_flag = true
                window.setTimeout(function(){
                    
                     this.if_flag = false;
                     console.log(this.if_flag)
                },1000)
            }
        }
    },
    computed: {
        jisuan () {
            if(!this.if_flag) {
                return false
            }
        }
    }
}
</script>
    
<style lang="css" scoped>
    #box {
        width: 9.94695rem;
        background: white;
    }
    .bac{
        position:fixed;
        width:2.65252rem;
        height:2.65252rem;
       
    }
    #head{
        width:100%;
        height:1.32626rem;
        position: relative;
        border-bottom:1px solid #f6f6f6;
        margin-bottom:.265252rem
    }
    #head>[type="text"]{
        height:.928382rem;
        width: 7.29443rem;
        background:#f1f2f6;
        border-radius:.66313rem;
         margin-left:1.32626rem;
         margin-top:.212202rem;
         border:none;
         padding-left:.928382rem;
    }
       #head  .back{
        width:.530504rem;
        height:.795756rem;
        position: absolute;
        left:.397878rem;
        top:.265252rem
    }
    #head  .img4{
        position:absolute;
		width:.530504rem;
		height: .530504rem;
        top:.397878rem;
        left:60px
	}
    #head>button{
        background: white;
        border:none;
        font-size:.424403rem
    }
    #remen{
        width:9.416446rem;
        margin: 0 auto;
        font-size: .424403rem;
        margin-bottom:.265252rem
    }
       #lishi{
        width:9.416446rem;
        margin: 0 auto;
        font-size: .424403rem;
    }
    #remen ul{
        background:#f4f5f7;
        width:9.416446rem;
        height:2.65252rem
    }
    #remen li{
        list-style:none;
        font-size: .344828rem;
        float: left;
        width:1.299735rem;
        height:.795756rem;
        font-size: .344828rem;
        text-align:center;
        line-height:.795756rem;
        background: white;
        margin-left: .265252rem;
        margin-right: .265252rem;
        margin-top:.265252rem;
        margin-bottom: .265252rem
    }
    #remen li:nth-of-type(6){
        width:1.98939rem;
    }
    #lishi p{
        width:100%;
        height:.795756rem;
        font-size: .265252rem;
        line-height:.795756rem;
        color:#afafaf;
        text-align:center
    }
    #tishi{
        position: fixed;
        width:3.97878rem;
        height:2.122016rem;
        background:black;
        color:white;
        left:2.917772rem;
        top:7.95756rem;
        text-align:center;
        border-radius: .265252rem;
       padding-top:.265252rem;
       
    }
       #tishi img{
           width:.795756rem;
           height:.795756rem;
       }
</style>