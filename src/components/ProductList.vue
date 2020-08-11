<template>
<div>
  <section id="products" class="section products products_best">
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
  <section class="section products products_all" v-if="showCatalogue">
    <h2 class="title products-title">Лучший выбор</h2>
    <div class="container">
      <form class="products-form">
        <div class="products-form__group">
          <div for="form-select">Сортировка по</div>
          <div class="products-form__select_value" @click="showSelect = !showSelect">{{sortBy}}<i class="fas fa-angle-down" :class="showSelect ? 'fas_active' : ''"></i></div>
          <div v-if="showSelect" class="products-form__select">
            <input id="opt0" @change="showSelect = false" type="radio" value="производителю" v-model="sortBy">
            <label for="opt0">производителю</label>
            <input id="opt1" @change="showSelect = false" type="radio" value="цене" v-model="sortBy">
            <label for="opt1">цене</label>
            <input id="opt2" @change="showSelect = false" type="radio" value="популярности" v-model="sortBy">
            <label for="opt2">популярности</label>
          </div>
        </div>
        <div class="products-form__group">
          <label for="form-search">Поиск</label>
          <input class="products-form__input" id="form-search" :value="searchBy" @input="search($event)">
          <i class="fas fa-search"></i>
        </div>
      </form>
      <div class="products-items" v-if="showAll">
        <app-product :pattern="searchBy" v-for="item in products" :key="item.id" :info="item"></app-product>
      </div>
      <template v-else>
        <div class="products-items__wrapper" v-for="(fabric, index) in fabrics" :key="index" v-show="showFab(fabric.products)">
          <div class="products-items__title">
            <div class="products-items__title__img"><img :src="fabric.img" alt="" ></div>
            <h3 @mouseenter="fabric.hover = true" @mouseleave="fabric.hover = false" class="products-items__title__text">({{fabric.name}})<i class="products-icon fas fa-question-circle"></i></h3>
            <span v-show="fabric.hover" class="products-items__title__descr">{{fabric.descr}}</span>
          </div>
          <div class="products-items">
            <app-product :pattern="searchBy" v-for="item in fabric.products" :key="item.id" :info="item"></app-product>
          </div>
        </div>
      </template>
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
import AppProduct from "./Product";
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
      fabrics: []
    }
  },
  components: {
    AppProduct,
  },
  computed: {
    ...mapGetters(['products', 'productsByFabs']),
    showAll() {
      return this.sortBy !== 'производителю' ? true : false;
    }
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
    this.fabrics = [{
          name: 'Alcon',
          descr: 'Описание',
          hover: false,
          img: './img/alcon.svg',
          products: this.productsByFabs['alcon']
        },
        {
          name: 'Bausch and Lomb',
          descr: 'Описание',
          hover: false,
          img: './img/bausch.svg',
          products: this.productsByFabs['bausch and lomb']
        },
        {
          name: 'Zeiss',
          descr: 'Описание',
          hover: false,
          img: './img/zeiss.svg',
          products: this.productsByFabs['zeiss']
        },
        {
          name: 'Oculentis',
          descr: 'Описание',
          hover: false,
          img: './img/oculentis.jpg',
          products: this.productsByFabs['oculentis']
        }]
  }
}
</script>

