<template>
  <main class="main">
    <div class="main__wrapper">
      <CardProduct
        :srcImg= "require('../../assets/image/1.png')"
        title="Устрицы по рокфеллеровски"
        subtitle="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры"
        price="2 700 ₽"
      />
      <CardProduct
        :srcImg= "require('../../assets/image/2.png')"
        title="Свиные ребрышки на гриле с зеленью"
        subtitle="Не следует, однако забывать, что реализация намеченных плановых"
        price="1 600 ₽"
      />
      <CardProduct
        :srcImg= "require('../../assets/image/3.png')"
        title="Креветки по-королевски в лимонном соке"
        subtitle="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры"
        price="1 820 ₽"
      />
      <CardProduct
        :srcImg= "require('../../assets/image/4.png')"
        title="Устрицы по рокфеллеровски"
        subtitle="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры"
        price="2 700 ₽"
      />
      <CardProduct
        :srcImg= "require('../../assets/image/1.png')"
        title="Устрицы по рокфеллеровски"
        subtitle="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры"
        price="2 700 ₽"
      />
      <CardProduct
        :srcImg= "require('../../assets/image/2.png')"
        title="Свиные ребрышки на гриле с зеленью"
        subtitle="Не следует, однако забывать, что реализация намеченных плановых"
        price="1 600 ₽"
      />
      <CardProduct
        :srcImg= "require('../../assets/image/3.png')"
        title="Креветки по-королевски в лимонном соке"
        subtitle="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры"
        price="1 820 ₽"
      />
      <CardProduct
        :srcImg= "require('../../assets/image/4.png')"
        title="Устрицы по рокфеллеровски"
        subtitle="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры"
        price="2 700 ₽"
      />
    </div>
  </main>
</template>

<script>

import CardProduct from '@/components/elements/CardProduct.vue'

export default {
  name: 'TheMain',
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
  .main {
    background-color: #161516;

    &__wrapper {
      max-width: 1310px;
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      padding-bottom: 50px;
    }
  }
</style>
