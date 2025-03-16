<template>
  <main class="main">
    <div class="main__wrapper">
      <CardProduct
        v-for="(item, i) in productsList"
        :key="i"
        :title="item.title"
        :srcImg="item.img"
        :subtitle="item.subtitle"
        :price="item.price"
        :btnSquareOff="true"
      />
    </div>
  </main>
</template>

<script>
import { computed } from 'vue'/* метод который отслеживает происходящее */
import { useStore } from 'vuex'

import CardProduct from '@/components/elements/CardProduct.vue'

export default {
  name: 'TheMain',
  components: {
    CardProduct
  },
  props: {
  },
  setup () {
    const store = useStore()/* переменная для обращения запросов */
    const productsList = computed(() => { /* отслеживает изменения */
      return store.getters.getProducts
    })

    return {
      productsList
    }
  }
}
</script>

<style lang="scss" scoped>
  .main {
    background-color: #161516;

    &__wrapper {
      max-width: 1310px;
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
      gap: 35px 20px;
      padding-bottom: 50px;
    }
  }

  .subtitle {
    display: block;
  }
</style>
