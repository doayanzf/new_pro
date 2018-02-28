import Vue from 'vue'
import Vuex from 'vuex'
import { start } from 'repl';
import { read, stat } from 'fs';

Vue.use(Vuex)
import { Swipe, SwipeItem } from 'mint-ui';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
export default new Vuex.Store ({
    state: {
        pageData:'',
        reData: '',
        goodsList:[],
        xxList: []
       
    }   , 
    mutations: {
        CHANGBOOLE(state, id) {
            for ( var temp of state.goodsList ) {
                if ( temp.source == id ) {
                    temp.offShelve = !temp.offShelve
                }
            }

        },
        ADDNUM( state, id ) {
            for (var temp of state.goodsList) {
                if ( temp.source == id & !temp.offShelve == true ) {
                    temp.onSale++
                }
            }
        },
        RENUM(state, id) {
            for (var temp of state.goodsList) {
                if (temp.source == id & !temp.offShelve == true) {
                    if (temp.onSale > 0) {
                        temp.onSale--
                    }
                }
            }
        },
        ADD(state,data) {
            state.pageData = data
        },
        RE(state,data){
            state.reData = data;
        },
        ADD_GOODS(state,data) {
            if(state.goodsList.length > 0) {
                for(var temp of state.goodsList){
                    if(temp.offShelve ==  data.offShelve) {
                        temp.onSale++
                    } else {
                        state.goodsList.push(data);
                    }
                }
            } else {
                state.goodsList.push(data)
            }
        },
        XX(state,data){
            state.xxList = data;
        },
        ALLTURE(state, boole) {
            for ( var temp of state.goodsList ) {
                temp.offShelve = !boole
            }
        }
    },
    actions: {
        changeboole(state, id) {
            state.commit('CHANGBOOLE',id)
        },
        addNum(state, id) {
            state.commit('ADDNUM',id)
        },
        reNum(state, id) {
            state.commit('RENUM',id)
        },
        add(state,data) {
            state.commit('ADD',data)
        },
        re(state,data){
            state.commit('RE', data)
        },
        add_goods(state,data) {
            state.commit('ADD_GOODS',data)
        },
        xx(state,data) {
            state.commit('XX',data)
        },
        allture(state, boole) {
            state.commit('ALLTURE',boole)
        }
    },
    getters: {
        getData(state){
            return state.pageData
        },
        getRe(state){
            return state.reData
        },
        getGoods(state){
            return state.goodsList
        },
        getXx(state){
            return state.xxList
        },
        totalprice(state) {
            var totalprice = 0
            for (var temp of state.goodsList) {
                if (!temp.offShelve) {
                    totalprice += temp.onSale *　temp.price
                }
            }
            return totalprice
        },
        goodsnum(state) {
            var goodsnum = 0
            for (var temp of state.goodsList) {
                if (!temp.offShelve) {
                    goodsnum += temp.onSale
                }
            }
            return goodsnum
        },
        totalgoods(state) {
            var totalgoods = []
            for (var temp of state.goodsList) {
                if (!temp.offShelve) {
                    totalgoods.push(temp)
                }
            }
            return totalgoods
        }
    }
})
