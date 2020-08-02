<template>
<div class="products-items__wrapper">
  <div class="products-items__title">
    <img src="../assets/alcon.svg" alt="" class="products-items__title__img">
    <h3 class="products-items__title__text">({{name}})</h3>
    <i class="products-icon fas fa-question-circle"></i>
    <span class="products-items__title__descr">asdfasdf</span>
  </div>
  <div class="products-items">
    <app-product :pattern="pattern" v-for="item in products" :key="item.id" :info="item"></app-product>
  </div>
</div>
</template>

<script>
import AppProduct from "./Product";

export default {
  props: ['pattern', 'products', 'name'],
  components: {
    AppProduct,
  },
}
</script>