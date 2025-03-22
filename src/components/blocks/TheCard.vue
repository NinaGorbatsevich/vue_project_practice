<template>
  <HeaderMain
    :headerCard="true"
    :headerWrapperCard="true"
    :buttonBackBasket="true"
    title=""
  />
  <div class="background">
    <div class="wrapper">
      <CardProduct
        :srcImg= "require('../../assets/image/1.png')"
        :imageCard="true"
        :cardCard="true"
        :cardLinkCard="true"
        :wrapperTextCard="true"
        title="Устрицы по рокфеллеровски"
        :titleCard="true"
        subtitle="Не следует, однако забывать, что консультация с широким активом
          представляет собой интересный эксперимент проверки новых предложений.
          Не следует, однако забывать, что сложившаяся структура организации позволяет
          оценить значение новых предложений. Разнообразный и богатый опыт начало
          повседневной работы по формированию позиции требуют от нас анализа позиций.
          Не следует, однако забывать, что консультация с широким активом представляет
          собой интересный эксперимент проверки новых предложений. Не следует, однако
          забывать, что сложившаяся структура организации позволяет оценить значение новых предложений."
        :subtitleCard="true"
        :cardPriceCard="true"
        price="2 700"
        :priceCard="true"
        :baseButtonOff="true"
      />
    </div>
  </div>
</template>

<script>
import HeaderMain from '../blocks/HeaderMain.vue'
import CardProduct from '@/components/elements/CardProduct.vue'

export default {
  name: 'TheCard',
  components: {
    HeaderMain,
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
  height: calc(100vh - 131px);
}

.wrapper {
  max-width: 1310px;
  margin: 0 auto;
}
</style>
