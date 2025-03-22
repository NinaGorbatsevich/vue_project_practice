<template>
  <HeaderMain
    :headerWrapperBasket="true"
    :titleWrapperBasket="true"
    :buttonBackBasket="true"
    title="КОРЗИНА С ВЫБРАННЫМИ ТОВАРАМИ"
    :basketWrapperBasket="true"
  />
  <div class="basket">
    <div class="basket__container">
      <CardProduct
        v-for="(item, i) in productsInBasket"
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
        @clickProductBtn="deleteProductBasket(item.id)"
      />
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

import HeaderMain from '../blocks/HeaderMain.vue'
import CardProduct from '../elements/CardProduct.vue'

export default {
  name: 'TheBasket',
  components: {
    HeaderMain,
    CardProduct
  },
  props: {
  },
  setup () {
    const store = useStore()
    const productsInBasket = computed(() => {
      return store.getters.getBasketProducts
    })

    const deleteProductBasket = (id) => {
      store.commit('setDeleteProductInBasket', id)
    }
    return {
      productsInBasket,
      deleteProductBasket
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
