<template>
    <div class="body">
        
       
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
    .body::after{
        content: "";
        display: block;
        clear: both;
    }
    
    .search{
        width: 100%;
        height: 1.32626rem;
        background-color: white;
        display: flex;
        justify-content: center;
        margin-bottom: .265252rem;
    }
    .search-input{
        width: 9.522546rem;
        height: .928382rem;
        margin-top: .132626rem;
        border: 2px solid #f4f5f7;
        border-radius: 5%;
        color: gray;
    
    }
    .search-input img{
        width: .66313rem;
        height: .66313rem;
        padding-top: .132626rem;
        
    }
    .sort-options{
        background: white;
        width: 2.440318rem;
       
    }
    .sort-options ul{
        /* border-right: 2px solid #e7e7e7; */
    }
    .sort-options li{
        width: 2.440318rem;
        height: 1.352785rem;
        display: flex;
        justify-content: center;
        line-height: 1.352785rem;
        
        
    }
    .sort-options{
        float: left;
    }
    .sort-options-2{
        float: right;
        width: 7.427056rem;
        height: 15.145889rem;
        background: white;
    }
    
    
    
</style>