import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      cart:localStorage.getItem('cart')?JSON.parse(localStorage.getItem('cart')):[]
  },
  mutations: {
      change(state,payload){
          state.cart.push(payload);
          localStorage.setItem("cart",JSON.stringify(state))
      }
      
  },
  actions: {

  }
})
