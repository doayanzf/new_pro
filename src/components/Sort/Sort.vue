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
               <li class="li" :class="{liClass: firstClass == 'aaa'}" @click="changeBg(1)"><router-link to="/sort/tuijian" :class="{routerClass: routerClass == 'aaa'}">推荐</router-link></li>
               <li class="li" :class="{liClass: liClass == 2}" @click="changeBg(2)"><router-link to="/sort/wochuyouxuan" :class="{routerClass: routerClass == 2}">我厨优选</router-link></li>
               <li class="li" :class="{liClass: liClass == 3}" @click="changeBg(3)"><router-link to="/sort/canguanmingcai" :class="{routerClass: routerClass == 3}">餐馆名菜</router-link></li>
               <li class="li" :class="{liClass: liClass == 4}" @click="changeBg(4)"><router-link to="/sort/quanbujingcai" :class="{routerClass: routerClass == 4}">全部净菜</router-link></li>
               <li class="li" :class="{liClass: liClass == 5}" @click="changeBg(5)"><router-link to="/sort/ertongzhuanqu" :class="{routerClass: routerClass == 5}">儿童专区</router-link></li>
               <li class="li" :class="{liClass: liClass == 6}" @click="changeBg(6)"><router-link to="/sort/shucai" :class="{routerClass: routerClass == 6}">蔬菜</router-link></li>
               <li class="li" :class="{liClass: liClass == 7}" @click="changeBg(7)"><router-link to="/sort/shuiguo" :class="{routerClass: routerClass == 7}">水果</router-link></li>
               <li class="li" :class="{liClass: liClass == 8}" @click="changeBg(8)"><router-link to="/sort/rouqindan" :class="{routerClass: routerClass == 8}">肉禽蛋</router-link></li>
               <li class="li" :class="{liClass: liClass == 9}" @click="changeBg(9)"><router-link to="/sort/chuichanhaixian" :class="{routerClass: routerClass == 9}">水产海鲜</router-link></li>
               <li class="li" :class="{liClass: liClass == 10}" @click="changeBg(10)"><router-link to="/sort/ruyinxidian" :class="{routerClass: routerClass == 10}">乳饮西点</router-link></li>
               <li class="li" :class="{liClass: liClass == 11}" @click="changeBg(11)"><router-link to="/sort/dianxisushi" :class="{routerClass: routerClass == 11}">点心素食</router-link></li>
               
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
             msg: 'Sort',
             firstClass: 'aaa',
             liClass: 'li',
             routerClass: 'aaa',
             isShow: false
        };
    },
    methods: {
        changeBg(num) {
            if (num == 1) {
                this.firstClass = 'aaa';
                this.liClass = '';
                this.routerClass = 'aaa';
            } else {
                this.firstClass = '';
                this.liClass = num;
                this.routerClass = num;
            }
        }
    },
   watch:{
       $route(){
        console.log('jianting');
        this.isShow = true;
       }
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
    .li{
        width: 2.440318rem;
        height: 1.352785rem;
        display: flex;
        justify-content: center;
        line-height: 1.352785rem;
    }
    .liClass{
        width: 2.440318rem;
        height: 1.352785rem;
        display: flex;
        justify-content: center;
        line-height: 1.352785rem;
        border-left: 1px solid green;
        font-size: .371353rem;
        color: green;
    }
    .routerClass{
        color: green;
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