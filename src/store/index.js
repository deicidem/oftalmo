import Vue from 'vue';
import Vuex from 'vuex';
import data from './database';
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    products: [],
    productsByFabs: {}
  },
  getters: {
    products(state) {
      return state.products;
    },
    productsByFabs(state) {
      return state.productsByFabs;
    }
  },
  mutations: {
    setProducts(state, data) {
      state.products = data.products;
      state.productsByFabs = data.productsByFabs;
    }
  },
  actions: {
    setProducts(store) {
      // fetch('./database.json')
      // .then(response => response.json())
      // .then(response => {
      //   store.commit('setProducts', response);
      // });
      let products = data;
      let dataByFabs = {};
      products.forEach(elem => {
        let a = elem['Производитель'].replace(/\[([^)]+)\]/, '').trim().toLowerCase();
        if (dataByFabs[a] instanceof Array) {
          dataByFabs[a].push(elem);
        } else {
          dataByFabs[a] = [elem];
        }
      });
      store.commit('setProducts', {products: data, productsByFabs: dataByFabs});

    }
  }
});