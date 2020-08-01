<template>
  <section id="products" class="section products">
    <h2 class="title products-title">Лучший выбор</h2>
    <div class="container">
      <div class="products-subtitle">
        *все цены зависят от рассчитанной врачом диоптрии. Необходимо уточнять цены по телефону
      </div>
      <div class="products-items">
        <app-product></app-product>
        <app-product></app-product>
        <app-product></app-product>
        <app-product></app-product>
        <app-product></app-product>
      </div>
    </div>
    
    <svg viewBox="0 0 1122 88" class="wave" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M560.75 44.0021C255 121.004 0 44.0021 0 44.0021V88H1121.5V44.0021C1121.5 44.0021 866.5 -33 560.75 44.0021Z"
        fill="#fff" />
    </svg>
  </section>
</template>

<script>
import AppProduct from "./components/Product";

export default {
  components: {
    AppProduct
  }
}
</script>

<style lang="sass">

</style>
