<template>
  <HeaderCard/>
  <TheCard/>
</template>

<script>

import HeaderCard from '@/components/blocks/HeaderCard.vue'
import TheCard from '@/components/blocks/TheCard.vue'

export default {
  name: 'CardPage',
  components: {
    HeaderCard,
    TheCard
  },
  props: {
  },
  setup () {
  }
}
</script>

<style lang="scss" scoped>

</style>
