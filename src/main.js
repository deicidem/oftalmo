import Vue from 'vue';
import App from './App.vue';

import {store} from './store/';
// import {router} from './routes';

new Vue({
  el: '#app',
  store,
  // router,
  render: h => h(App),
});


let button = document.querySelector('.header-menu__button');
let menu = document.querySelector('.header_mobile');
button.addEventListener('click', function() {
  this.classList.toggle('header-menu__button_active');
  menu.classList.toggle('header_mobile_active');

});