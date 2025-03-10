<template>
  <div class="basket">
    <div class="basket__container">
      <CardProduct
        :cardBasket="true"
        :srcImg= "require('../../assets/image/1.png')"
        :cardImageBasket="true"
        title="Устрицы по рокфеллеровски"
        :cardTitleBasket="true"
        subtitle="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры"
        :cardSubtitleBasket="true"
        :cardPriceBasket="true"
        price="2 700 ₽"
      />
      <CardProduct
        :cardBasket="true"
        :srcImg= "require('../../assets/image/1.png')"
        :cardImageBasket="true"
        title="Устрицы по рокфеллеровски"
        :cardTitleBasket="true"
        subtitle="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры"
        :cardSubtitleBasket="true"
        :cardPriceBasket="true"
        price="2 700 ₽"
      />
      <CardProduct
        :cardBasket="true"
        :srcImg= "require('../../assets/image/2.png')"
        :cardImageBasket="true"
        title="Свиные ребрышки на гриле с зеленью"
        :cardTitleBasket="true"
        subtitle="Не следует, однако забывать, что реализация намеченных плановых"
        :cardSubtitleBasket="true"
        :cardPriceBasket="true"
        price="1 600 ₽"
      />
      <CardProduct
        :cardBasket="true"
        :srcImg= "require('../../assets/image/1.png')"
        :cardImageBasket="true"
        title="Устрицы по рокфеллеровски"
        :cardTitleBasket="true"
        subtitle="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры"
        :cardSubtitleBasket="true"
        :cardPriceBasket="true"
        price="2 700 ₽"
      />
      <CardProduct
        :cardBasket="true"
        :srcImg= "require('../../assets/image/3.png')"
        :cardImageBasket="true"
        title="Креветки по-королевски в лимонном соке"
        :cardTitleBasket="true"
        subtitle="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры"
        :cardSubtitleBasket="true"
        :cardPriceBasket="true"
        price="1 820 ₽"
      />
      <CardProduct
        :cardBasket="true"
        :srcImg= "require('../../assets/image/1.png')"
        :cardImageBasket="true"
        title="Устрицы по рокфеллеровски"
        :cardTitleBasket="true"
        subtitle="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры"
        :cardSubtitleBasket="true"
        :cardPriceBasket="true"
        price="2 700 ₽"
      />
    </div>
  </div>
</template>

<script>
import CardProduct from '../elements/CardProduct.vue'

export default {
  name: 'TheBasket',
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
  .basket {
    background-color: #161516;
    padding-bottom: 102px;
    height: calc(100vh - 223px);
    overflow: auto;

    &__container {
        max-width: 860px;
        margin: 0 auto;
      }
    }
</style>
