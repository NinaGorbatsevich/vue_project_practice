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
        :id="item.id"
        @clickProductBtn="deleteProductBasket(item.idx)"
      />
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

import HeaderMain from '../blocks/HeaderMain'
import CardProduct from '../elements/CardProduct'

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

    const deleteProductBasket = (idx) => {
      store.commit('setDeleteProductInBasket', idx)
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
  height: calc(100vh - 228px);
  overflow: auto;

  &::-webkit-scrollbar { display: none; }

  &__container {
      max-width: 860px;
      margin: 0 auto;
    }
  }
</style>
