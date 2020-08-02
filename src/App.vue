<template>
  <div>
    <section id="products" class="section products">
    <h2 class="title products-title">Лучший выбор</h2>
    <div class="container">
      <div class="products-subtitle">
        *все цены зависят от рассчитанной врачом диоптрии. Необходимо уточнять цены по телефону
      </div>
      <div class="products-items">
        <app-product v-for="item in products" :key="item.id" :info="item"></app-product>
      </div>
    </div>
    <svg viewBox="0 0 1122 88" class="wave" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M560.75 44.0021C255 121.004 0 44.0021 0 44.0021V88H1121.5V44.0021C1121.5 44.0021 866.5 -33 560.75 44.0021Z"
        fill="#fff" />
    </svg>
  </section>
  <section id="products" class="section products products_all">
    <h2 class="title products-title">Лучший выбор</h2>
    <div class="container">
      <form  class="products-form">
        <div class="products-form__group">
          <div for="form-select">Сортировка по</div>
          <div class="products-form__select_value" @click="showSelect = !showSelect">{{sortBy}}<i class="fas fa-angle-down" :class="showSelect ? 'fas_active' : ''"></i></div>
          <div v-if="showSelect"  class="products-form__select">
            <input id="selectName0" @change="showSelect = false" type="radio" value="производителю" v-model="sortBy">
            <label for="selectName0" >производителю</label>
            <input id="selectName1" @change="showSelect = false" type="radio" value="цене" v-model="sortBy">
            <label for="selectName1" >цене</label>
            <input id="selectName2" @change="showSelect = false" type="radio" value="популярности" v-model="sortBy">
            <label for="selectName2" >популярности</label>
          </div>
        </div>
        <div class="products-form__group">
          <label for="form-search">Поиск</label>
          <input class="products-form__input" id="form-search" :value="searchBy" @input="search($event)">
          <i class="fas fa-search"></i>
        </div>
      </form>
        <div class="products-items">
          <app-product :pattern="searchBy" v-for="item in products" :key="item.id" :info="item"></app-product>
        </div>
    </div>
    <svg viewBox="0 0 1122 88" class="wave" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M560.75 44.0021C255 121.004 0 44.0021 0 44.0021V88H1121.5V44.0021C1121.5 44.0021 866.5 -33 560.75 44.0021Z"
        fill="#fff" />
    </svg>
  </section>
  </div>
</template>

<script>
import AppProduct from "./components/Product";
import {mapGetters} from "vuex";

export default {
  data() {
    return {
      sortBy: 'производителю',
      showSelect: false,
      searchBy: ''
    }
  },
  components: {
    AppProduct
  },
  computed: {
      ...mapGetters(['products'])
  },
  methods: {
    search(e) {
      this.searchBy = e.target.value;
    }
  },
  created() {
    this.$store.dispatch('setProducts');
  }
}
</script>

<style lang="sass">

</style>
