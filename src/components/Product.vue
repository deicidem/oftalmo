<template>
<div class="products-item" v-show="show">
  <div class="products-item__img"><img src="img/product.jpg" alt=""></div>
  <div class="products-item__content">
    <div class="products-item__text">
      <h3 class="products-item__title">{{info['Название']}}</h3>
      <div class="products-item__subtitle">{{info['Слоган']}}</div>
      <ul class="products-item__list">
        <li v-for="(item, index) in table" :key="index"
          @mouseenter="item.hover = true" 
          @mouseleave="item.hover = false">
          {{item.name}}: {{item.value}}
          <template v-if="item.description !== ''">
            <i class="products-icon fas fa-question-circle"></i>
            <span v-if="item.hover" class="products-item__descr">{{item.description}}</span>
          </template>
        </li>
      </ul>
    <div class="products-item__img_mobile"><img src="img/product.jpg" alt=""></div>
    </div>
    <button class="products-item__button">Купить</button>
  </div>
</div>
</template>

<script>
export default {
  props: {
    info: Object,
    pattern: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      table: []
    }
  },
  computed: {
    show(){
      if (this.pattern !== '') {
        let a = (this.info['Название']).toLowerCase().indexOf(this.pattern.toLowerCase());
        return a !== -1;
      } return true;
      
    }
  },
  mounted() {
    let i = 0;
    for (const key in this.info) {
      let pattern = /\[([^)]+)\]/;
      let descr = this.info[key].match(pattern) != null ? this.info[key].match(pattern)[1] : '';
      let val = this.info[key].replace(pattern, '');
      if (i > 2) {
        this.info[key]
        this.table.push({
          name: key,
          value: val,
          hover: false,
          description: descr
        })
      }
      i++;
    }
  }
}
</script>
