<template>
  <div class="background">
    <HeaderMain
      :headerCard="true"
      :headerWrapperCard="true"
      :buttonBackBasket="true"
      title=""
    />
    <div class="wrapper">
      <CardProduct
        :srcImg="currentProduct?.img"
        :title="currentProduct?.title"
        :subtitle="currentProduct?.subtitle"
        :price="currentProduct?.price"
        :imageCard="true"
        :cardCard="true"
        :cardLinkCard="true"
        :wrapperTextCard="true"
        :titleCard="true"
        :subtitleCard="true"
        :cardPriceCard="true"
        :priceCard="true"
        :baseButtonOff="true"
        @clickBtn="add"
      />
    </div>
  </div>
</template>

<script>
import { onMounted, computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { uuid } from 'vue-uuid'

import HeaderMain from '../components/blocks/HeaderMain.vue'
import CardProduct from '../components/elements/CardProduct.vue'

export default {
  name: 'CardPage',
  components: {
    HeaderMain,
    CardProduct
  },
  props: {
  },
  setup () {
    const store = useStore()
    const route = useRoute()
    onMounted(() => {
      store.commit('setCurrentProduct', route.params.id)
    })

    const currentProduct = computed(() => {
      return store.getters.getCurrentProduct
    })

    const add = () => {
      store.commit('setAddProductInBasket',
        {
          idx: uuid.v1(),
          id: currentProduct.value.id,
          img: currentProduct.value.img,
          title: currentProduct.value.title,
          price: currentProduct.value.price
        }
      )
    }

    return {
      currentProduct,
      add
    }
  }
}
</script>

<style lang="scss" scoped>
.background {
  background: url('../assets/image/background_card.png'), #161516;
  background-size: 100%;
  height: 100vh;
}

.wrapper {
  max-width: 1310px;
  margin: 0 auto;
}
</style>
