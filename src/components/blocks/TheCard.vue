<template>
  <div class="background">
    <CardProduct
      :srcImg= "require('../../assets/image/1.png')"
      title="Устрицы по рокфеллеровски"
      subtitle="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры"
      price="2 700 ₽"
    />
  </div>
</template>

<script>
import CardProduct from '@/components/elements/CardProduct.vue'

export default {
  name: 'TheCard',
  components: {
    CardProduct
  },
  props: {
  },
  setup () {
  }
}
</script>

<style lang="scss" scoped>
.background {
  background: url('../../assets/image/background_card.png'), #161516;
  background-size: 100%;
  height: calc(100vh - 180px);
}
</style>
