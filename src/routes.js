import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Product from './components/ProductList.vue';

const routes = [{
  path: '/',
  component: Product
}];

export const router = new VueRouter ({
  routes,
  mode: 'history'
});
