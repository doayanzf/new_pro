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
        ADD(state,data) {
            state.pageData = data
        },
        RE(state,data){
            state.reData = data;
        },
        ADD_GOODS(state,data) {
            state.goodsList.push(data);
            console.log(state.goodsList)
        },
        XX(state,data){
            state.xxList = data;
            console.log(state.xxList)
        }
    },
    actions: {
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
        }
    }
})
