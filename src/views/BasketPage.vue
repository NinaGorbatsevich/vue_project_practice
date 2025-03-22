<template>
  <TheBasket/>
  <FooterBasket/>
</template>

<script>

import TheBasket from '@/components/blocks/TheBasket.vue'
import FooterBasket from '@/components/blocks/FooterBasket.vue'

export default {
  name: 'BasketPage',
  components: {
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
