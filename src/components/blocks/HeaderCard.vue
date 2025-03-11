<template>
    <HeaderMain
      :headerCard="true"
      :buttonBackBasket="true"
      title=""
    />
</template>

<script>

import HeaderMain from '@/components/blocks/HeaderMain.vue'

export default {
  name: 'HeaderCard',
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
