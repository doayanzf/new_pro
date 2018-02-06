import Vue from 'vue'
import Vuex from 'vuex'
import { start } from 'repl';
import { read, stat } from 'fs';

Vue.use(Vuex)

export default new Vuex.Store ({
    state: {
        pageData:'',
        reData: '',
        goodsList:[]
    }    
    ,
    mutations: {
        ADD(state,data) {
            state.pageData = data
        },
        RE(state,data){
            state.reData = data;
        },
        ADD_GOODS(state,data) {
            state.goodsList.push(data)
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
        }
    }
})
