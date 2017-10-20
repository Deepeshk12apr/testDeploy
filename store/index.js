import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

console.log(process.BROWSER_BUILD)
if(process.BROWSER_BUILD){
  require('vuex-persistedstate');
}

const store = new Vuex.Store({
  state: {  
  	count:  0,
    username:  'test',
    name:''
  },
  mutations: {
    incCount(state){
    	state.count =  state.count + 1
      // Cookie.set("count", state.count)
      // state.count = Cookie.get("count")
    },
    setCounter(state,int){
      state.count = int
    },
    setUser(state,text){
      // console.log('mutation'+ text)
      // Cookie.set( "username", text)
      state.username = text +'zap'
    }
  },
  actions: {
    incCount ({ commit }) {
      commit('incCount')
    },
    setUser({ commit },context){
      commit('setUser',context)
    },
    setCounter({ commit },context){
      commit('setCounter',context)
    }
  }
})

export default store
