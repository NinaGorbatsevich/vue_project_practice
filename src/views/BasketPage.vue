<template>
  <HeaderBasket/>
  <TheBasket/>
  <FooterBasket/>
</template>

<script>

import HeaderBasket from '@/components/blocks/HeaderBasket.vue'
import TheBasket from '@/components/blocks/TheBasket.vue'
import FooterBasket from '@/components/blocks/FooterBasket.vue'

export default {
  name: 'BasketPage',
  components: {
    HeaderBasket,
    TheBasket,
    FooterBasket
  },
  props: {
  },
  setup () {
  }
}
</script>

<style lang="scss" scoped>

</style>
