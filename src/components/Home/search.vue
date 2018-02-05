<template>
    <div id='box'>
        <div id ='head'>
            <img class='back' @click='back' src="./img2/back(1).png" alt="">
            <img   src="./img/search.png" class='img4' alt="">
            <input type="text" v-model="msg" @click='dis'>
            <button @click='sou'>搜索</button>
        </div>
        <div  id = 'remen'> 热门搜索
            <ul>
            <li  @click="toproductDetail()">牛排</li>
            <li  @click="toproductDetail1()">豆腐</li>
            <li  @click="toproductDetail2()">年货</li>
            <li @click="toproductDetail3()">火锅</li>
            <li  @click="toproductDetail4()">羊肉</li>
            <li  @click="toproductDetail5()">特供蔬菜</li>
            <li  @click="toproductDetail6()">冷冻</li>
       </ul>
       </div>
      
       
      <div id ='lishi'>
          搜索历史
         
           <msg-li :arr="arr"></msg-li>
       
        <p>清空搜索记录</p>
      </div>
       <div id ='tishi'  v-show='if_flag'>
           <img src="./img2/i-omg.png" alt=""><br>
           搜索内容不能为空
       </div>
    </div>
</template>
    
<script>
export default {
  name: "component_name",
  data() {
    return {
      inputlist: [],
      msg: "",
      if_flag: "",
      arr: []
      
    };
  },
  methods: {
    back() {
      history.back();
    },
    sou() {
      if (this.msg == "") {
        console.log(this.msg);
        this.if_flag = true;
        console.log(this.if_flag);
        window.setTimeout(() => {
          this.if_flag = false;
        }, 2000);
      }
      if (this.msg != "") {
        this.arr.push({ goodsname: this.msg });
        console.log(this.arr);
        this.msg = "";
      }
    },

    dis() {
      if (this.msg == "") {
        this.if_flag = false;
      }
    },
    toproductDetail(productId){
            this.axios.get('http://10.0.157.219:8888/s_niuPai')
            .then(res => {
                console.log(res.data.shop_data);
                               
                this.$store.dispatch('re',res.data.shop_data)
            }),
            
            this.$router.push({

                path: '/souSuo/' + productId,
                query: {
                    name: '刘',
                    age: 18
                }
            })
            
    },
    toproductDetail1(productId){
            this.axios.get('http://10.0.157.219:8888/s_douFu')
            .then(res => {
                console.log(res.data.shop_data);
                               
                this.$store.dispatch('re',res.data.shop_data)
            }),
            
            this.$router.push({

                path: '/souSuo/' + productId,
                query: {
                    name: '刘',
                    age: 18
                }
            })
            
    },
    toproductDetai2(productId){
        
    },
    toproductDetail3(productId){
            this.axios.get('http://10.0.157.219:8888/s_huoGuo')
            .then(res => {
                console.log(res.data.shop_data);
                               
                this.$store.dispatch('re',res.data.shop_data)
            }),
            
            this.$router.push({

                path: '/souSuo/' + productId,
                query: {
                    name: '刘',
                    age: 18
                }
            })
            
    },
    toproductDetail4(productId){
            this.axios.get('http://10.0.157.219:8888/s_yangRou')
            .then(res => {
                console.log(res.data.shop_data);
                               
                this.$store.dispatch('re',res.data.shop_data)
            }),
            
            this.$router.push({

                path: '/souSuo/' + productId,
                query: {
                    name: '刘',
                    age: 18
                }
            })
            
    },
    toproductDetail5(productId){
           
            
    },
    toproductDetail6(productId){
            this.axios.get('http://10.0.157.219:8888/s_lengDong')
            .then(res => {
                console.log(res.data.shop_data);
                               
                this.$store.dispatch('re',res.data.shop_data)
            }),
            
            this.$router.push({

                path: '/souSuo/' + productId,
                query: {
                    name: '刘',
                    age: 18
                }
            })
            
    },
    created() {

        this.axios.get('http://10.0.157.219:8888/s_niuPai')
         .then(res => {
            this.dataGoods = res.data.shop_data
            this.$store.dispatch('re',res.data.shop_data)
        })

    }
  },
  computed: {
    jisuan() {
      if (!this.if_flag) {
        return false;
      }
    }
  },
  components: {
    "msg-li": {
      template: `
                <ul>
                <li v-for='pro in arr'>{{pro.goodsname}}</li>
                </ul>
            `,
      props: ["arr"]
    }
  },
  created() {
    if (window.localStorage.searchdate) {
      this.arr = window.localStorage.searchdate;
    } else {
      window.localStorage.searchdate = [];
      this.arr = window.localStorage.searchdate;
    }
  }
};
</script>
    
<style lang="css" scoped>
#box {
  width: 9.94695rem;
  background: white;
}
.bac {
  position: fixed;
  width: 2.65252rem;
  height: 2.65252rem;
}
#head {
  width: 100%;
  height: 1.32626rem;
  position: relative;
  border-bottom: 1px solid #f6f6f6;
  margin-bottom: 0.265252rem;
}
#head > [type="text"] {
  height: 0.928382rem;
  width: 7.29443rem;
  background: #f1f2f6;
  border-radius: 0.66313rem;
  margin-left: 1.32626rem;
  margin-top: 0.212202rem;
  border: none;
  padding-left: 0.928382rem;
}
#head .back {
  width: 0.530504rem;
  height: 0.795756rem;
  position: absolute;
  left: 0.397878rem;
  top: 0.265252rem;
}
#head .img4 {
  position: absolute;
  width: 0.530504rem;
  height: 0.530504rem;
  top: 0.397878rem;
  left: 60px;
}
#head > button {
  background: white;
  border: none;
  font-size: 0.424403rem;
}
#remen {
  width: 9.416446rem;
  margin: 0 auto;
  font-size: 0.424403rem;
  margin-bottom: 0.265252rem;
}
#lishi {
  width: 9.416446rem;
  margin: 0 auto;
  font-size: 0.424403rem;
}
#remen ul {
  background: #f4f5f7;
  width: 9.416446rem;
  height: 2.65252rem;
}
#remen li {
  list-style: none;
  font-size: 0.344828rem;
  float: left;
  width: 1.299735rem;
  height: 0.795756rem;
  font-size: 0.344828rem;
  text-align: center;
  line-height: 0.795756rem;
  background: white;
  margin-left: 0.265252rem;
  margin-right: 0.265252rem;
  margin-top: 0.265252rem;
  margin-bottom: 0.265252rem;
}
#remen li:nth-of-type(6) {
  width: 1.98939rem;
}
#lishi p {
  width: 100%;
  height: 0.795756rem;
  font-size: 0.265252rem;
  line-height: 0.795756rem;
  color: #afafaf;
  text-align: center;
}
#tishi {
  position: fixed;
  width: 3.97878rem;
  height: 2.122016rem;
  background: black;
  color: white;
  left: 2.917772rem;
  top: 7.95756rem;
  text-align: center;
  border-radius: 0.265252rem;
  padding-top: 0.265252rem;
}
#tishi img {
  width: 0.795756rem;
  height: 0.795756rem;
}
</style>