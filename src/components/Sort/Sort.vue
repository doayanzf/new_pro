<template>
    <div id="app">
       <!-- <h1>{{ msg }}</h1> -->
       <div class="search">
           <div class="search-input">
               <img src="./img/icon-search-40@2x.png" alt="">
               <span>支持首字母搜索</span>
           </div>
        
           
       </div>
       <div class="sort-options">
           <ul class="sort-options-ul1">
               <li><router-link to="/sort/tuijian">推荐</router-link></li>
               <li><router-link to="/sort/wochuyouxuan">我厨优选</router-link></li>
               <li><router-link to="/sort/canguanmingcai">餐馆名菜</router-link></li>
               <li><router-link to="/sort/quanbujingcai">全部净菜</router-link></li>
               <li><router-link to="/sort/ertongzhuanqu">儿童专区</router-link></li>
               <li><router-link to="/sort/shucai">蔬菜</router-link></li>
               <li><router-link to="/sort/shuiguo">水果</router-link></li>
               <li><router-link to="/sort/rouqindan">肉禽蛋</router-link></li>
               <li><router-link to="/sort/chuichanhaixian">水产海鲜</router-link></li>
               <li><router-link to="/sort/ruyinxidian">乳饮西点</router-link></li>
               <li><router-link to="/sort/dianxisushi">点心素食</router-link></li>
           
                      
            </ul>
            
            

       </div>
       <div class="sort-options-2">
           <ul>
                <router-view></router-view>
                
            </ul>
       </div>
       
       
    </div>
</template>
    
<script>
export default {
    name: "component_name",
    data () {
        return {
             msg: 'Sort'
        };
    }
}

</script>
    
<style lang="css" scoped>
    *{
        margin: 0;
        padding: 0;
    }
    
    .search{
        width: 100%;
        height: 50px;
        background-color: white;
        display: flex;
        justify-content: center;
    }
    .search-input{
        width: 359px;
        height: 35px;
        border: 2px solid #f4f5f7;
        border-radius: 5%;
        color: gray;
    
    }
    .search-input img{
        width: 23px;
        height: 18px;
        padding-top: 10px;
        
    }
    .sort-options{
        background: #f4f5f7;
        width: 92px;
       
    }
    .sort-options li{
        width: 92px;
        height: 51px;
        display: flex;
        justify-content: center;
        line-height: 51px;
        
    }
    .sort-options{
        float: left;
    }
    .sort-options-2{
        float: right;
        width: 250px;
    }
    
    
    
</style>