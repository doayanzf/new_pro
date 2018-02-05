import Vue from 'vue'
import Vuex from 'vuex'
import { start } from 'repl';
import { read, stat } from 'fs';

Vue.use(Vuex)

export default new Vuex.Store ({
    state: {
        pageData:'',
        reData: ''
    }    
    ,
    mutations: {
        ADD(state,data) {
            state.pageData = data
        },
        RE(state,data){
            state.reData = data;
        }
    },
    actions: {
        add(state,data) {
            state.commit('ADD',data)
        },
        re(state,data){
            state.commit('RE', data)
        }
    },
    getters: {
        getData(state){
            return state.pageData
        },
        getRe(state){
            return state.reData
        }
    }
})
