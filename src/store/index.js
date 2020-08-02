import Vue from 'vue';
import Vuex from 'vuex';
import getProducts from './database';
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    products: []
  },
  getters: {
    products(state) {
      return state.products;
    }
  },
  mutations: {
    setProducts(state, data) {
      state.products = data;
    }
  },
  actions: {
    setProducts(store) {
      // fetch('./database.json')
      // .then(response => response.json())
      // .then(response => {
      //   store.commit('setProducts', response);
      // });
      store.commit('setProducts', getProducts);

    }
  }
});

