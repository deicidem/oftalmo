<template>
<div>
  <section id="products" class="section products">
    <h2 class="title products-title">Лучший выбор</h2>
    <div class="container">
      <div class="products-subtitle">
        *все цены зависят от рассчитанной врачом диоптрии. Необходимо уточнять цены по телефону
      </div>
      <div class="products-items products-items_best">
        <app-product v-show="index < 5" v-for="(item, index) in products" :key="item.id" :info="item"></app-product>
      </div>
      <button @click="onShowCatalogue" class="button products-button">Показать весь ассортимент</button>
    </div>
    <div class="wave">
      <svg viewBox="0 0 1122 88" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 43.5021C0 43.5021 255 120.504 560.75 43.5021C866.5 -33.5 1121.5 43.5021 1121.5 43.5021V0H0V43.5021Z" fill="#6083ab" />
      </svg>
    </div>
  </section>
  <section class="section products products_all" v-if="true">
    <h2 class="title products-title">Лучший выбор</h2>
    <div class="container">
      <form class="products-form">
        <div class="products-form__group">
          <div for="form-select">Сортировка по</div>
          <div class="products-form__select_value" @click="showSelect = !showSelect">{{sortBy}}<i class="fas fa-angle-down" :class="showSelect ? 'fas_active' : ''"></i></div>
          <div v-if="showSelect" class="products-form__select">
            <input id="selectName0" @change="showSelect = false" type="radio" value="производителю" v-model="sortBy">
            <label for="selectName0">производителю</label>
            <input id="selectName1" @change="showSelect = false" type="radio" value="цене" v-model="sortBy">
            <label for="selectName1">цене</label>
            <input id="selectName2" @change="showSelect = false" type="radio" value="популярности" v-model="sortBy">
            <label for="selectName2">популярности</label>
          </div>
        </div>
        <div class="products-form__group">
          <label for="form-search">Поиск</label>
          <input class="products-form__input" id="form-search" :value="searchBy" @input="search($event)">
          <i class="fas fa-search"></i>
        </div>
      </form>
      <div class="products-items__wrapper" v-show="showFab(productsByFabs['alcon'])">
        <div class="products-items__title">
          <img src="./assets/alcon.svg" alt="" class="products-items__title__img">
          <h3 class="products-items__title__text">(Alcon)</h3>
          <i class="products-icon fas fa-question-circle"></i>
          <span class="products-items__title__descr">asdfasdf</span>
        </div>
        <div class="products-items">
          <app-product :pattern="searchBy" v-for="item in productsByFabs['alcon']" :key="item.id" :info="item"></app-product>
        </div>
      </div>
      <div class="products-items__wrapper" v-show="showFab(productsByFabs['bausch and lomb'])">
        <div class="products-items__title">
          <img src="./assets/bausch.svg" alt="" class="products-items__title__img">
          <h3 class="products-items__title__text">(Bausch and Lomb)</h3>
          <i class="products-icon fas fa-question-circle"></i>
          <span class="products-items__title__descr">asdfasdf</span>
        </div>
        <div class="products-items">
          <app-product :pattern="searchBy" v-for="item in productsByFabs['bausch and lomb']" :key="item.id" :info="item"></app-product>
        </div>
      </div>
      <div class="products-items__wrapper" v-show="showFab(productsByFabs['zeiss'])">
        <div class="products-items__title">
          <img src="./assets/zeiss.svg" alt="" class="products-items__title__img">
          <h3 class="products-items__title__text">(Zeiss)</h3>
          <i class="products-icon fas fa-question-circle"></i>
          <span class="products-items__title__descr">asdfasdf</span>
        </div>
        <div class="products-items">
          <app-product :pattern="searchBy" v-for="item in productsByFabs['zeiss']" :key="item.id" :info="item"></app-product>
        </div>
      </div>
      <div class="products-items__wrapper" v-show="showFab(productsByFabs['oculentis'])">
      <div class="products-items__title">
        <img src="./assets/oculentis.jpg" alt="" class="products-items__title__img">
        <h3 class="products-items__title__text">(Oculentis)</h3>
        <i class="products-icon fas fa-question-circle"></i>
        <span class="products-items__title__descr">asdfasdf</span>
      </div>
      <div class="products-items">
        <app-product :pattern="searchBy" v-for="item in productsByFabs['oculentis']" :key="item.id" :info="item"></app-product>
      </div>
    </div>
    </div>
    
    <div class="wave">
      <svg viewBox="0 0 1122 88" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 43.5021C0 43.5021 255 120.504 560.75 43.5021C866.5 -33.5 1121.5 43.5021 1121.5 43.5021V0H0V43.5021Z" fill="#fff" />
      </svg>
    </div>
  </section>
</div>
</template>

<script>
import AppProduct from "./components/Product";
import AppProductList from "./components/ProductList";
import {
  mapGetters
} from "vuex";

export default {
  data() {
    return {
      sortBy: 'производителю',
      showSelect: false,
      searchBy: '',
      showCatalogue: false,
      fabrics: [{
        name: 'Alcon',
      }]
    }
  },
  components: {
    AppProduct,
    AppProductList
  },
  computed: {
    ...mapGetters(['products', 'productsByFabs'])
  },
  methods: {
    search(e) {
      this.searchBy = e.target.value;
    },
    onShowCatalogue() {
      document.querySelector('#about').classList.toggle('about-blue')
      this.showCatalogue = !this.showCatalogue
    },
    showFab(items) {
      if (items) {
        if (this.searchBy !== '') {
          for (let index = 0; index < items.length; index++) {
            if (items[index]['Название'].toLowerCase().indexOf(this.searchBy.toLowerCase()) !== -1) {
              return true;
            }
          }
          return false;
        }
        return true;
      }
      return false;
      
    }
  },
  created() {
    this.$store.dispatch('setProducts');
  }
}
</script>

<style lang="sass">

</style>
