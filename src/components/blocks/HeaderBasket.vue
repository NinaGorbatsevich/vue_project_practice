<template>
  <HeaderMain
    :headerWrapperBasket="true"
    :titleWrapperBasket="true"
    :buttonBackBasket="true"
    title="КОРЗИНА С ВЫБРАННЫМИ ТОВАРАМИ"
    :basketWrapperBasket="true"
  />
</template>

<script>

import HeaderMain from '@/components/blocks/HeaderMain.vue'

export default {
  name: 'HeaderBasket',
  components: {
    HeaderMain
  },
  props: {
  },
  setup () {
  }
}
</script>

<style lang="scss" scoped>

</style>
