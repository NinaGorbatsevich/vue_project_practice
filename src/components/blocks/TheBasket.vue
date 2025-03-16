<template>
  <div class="basket">
    <div class="basket__container">
      <CardProduct
        v-for="(item, i) in productsList"
        :key="i"
        :title="item.title"
        :srcImg="item.img"
        :subtitle="item.subtitle"
        :price="item.price"
        :btnSquareOff="true"
        :cardBasket="true"
        :imageBasket="true"
        :titleBasket="true"
        :subtitleBasket="true"
        :cardLinkBasket="true"
        :cardPriceBasket="true"
      />
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

import CardProduct from '../elements/CardProduct.vue'

export default {
  name: 'TheBasket',
  components: {
    CardProduct
  },
  props: {
  },
  setup () {
    const store = useStore()
    const productsInBasket = computed(() => {
      return store.getters.getBasketProducts
    })

    return {
      productsInBasket
    }
  }
}
</script>

<style lang="scss" scoped>
  .basket {
    background-color: #161516;
    padding-bottom: 102px;
    height: calc(100vh - 260px);
    overflow: auto;

    &__container {
        max-width: 860px;
        margin: 0 auto;
      }
    }
</style>
