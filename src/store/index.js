import Vue from 'vue'
import Vuex from 'vuex'
import { start } from 'repl';
import { read } from 'fs';

Vue.use(Vuex)

export default new Vuex.Store ({
    state: {
        pageData:''
    }    
    ,
    mutations: {
        ADD(state,data) {
            state.pageData = data
        }
    },
    actions: {
        add(state,data) {
            state.commit('ADD',data)
        }
    },
    getters: {
        getData(state){
            return state.pageData
        }
    }
})
