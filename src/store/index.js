import { createStore } from 'vuex'

export default createStore({
  state: {
    CountProductsInBasket: 0
  },
  getters: {
    getCountProductsInBasket: (state) => state.CountProductsInBasket
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
