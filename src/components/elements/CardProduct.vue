<template>
  <div :class="{'cards': true, 'cards_basket': cardsBasket}">
    <div :class="{'card': true, 'card_basket': cardBasket}">
      <img :src="srcImg" alt="" :class="{'card__image': true, 'card__image_basket': cardImageBasket}">
      <h3 :class="{'card__title': true, 'card__title_basket': cardTitleBasket}">{{ title }}</h3>
      <p :class="{'card__subtitle': true, 'card__subtitle_basket': cardSubtitleBasket}">{{ subtitle }}</p>
      <div :class="{'card__price': true, 'card__price_basket': cardPriceBasket}">
        <p :class="{'price': true, 'price_basket': priceBasket}">{{ price }}</p>
        <BaseButton :add="true"/>
      </div>
    </div>
  </div>
</template>

<script>

import BaseButton from '@/components/ui/BaseButton.vue'

export default {
  name: 'CardProduct',
  components: {
    BaseButton
  },
  props: {
    srcImg: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    },
    price: {
      type: String,
      default: ''
    },
    cardsBasket: {
      type: Boolean,
      default: false
    },
    cardBasket: {
      type: Boolean,
      default: false
    },
    cardImageBasket: {
      type: Boolean,
      default: false
    },
    cardTitleBasket: {
      type: Boolean,
      default: false
    },
    cardSubtitleBasket: {
      type: Boolean,
      default: false
    },
    cardPriceBasket: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
  .card {
    width: 312px;
    height: 552px;
    font-family: "Montserrat", serif;
    border: 1px solid #D58C51;
    color: #FFFFFF;
    padding: 43px 21px 36px 21px;
    display: flex;
    flex-direction: column;

    &:hover {
      color: #D58C51;
      transition: color 0.3s ease;
    }

    &__title {
      font-weight: 500;
      font-size: 17px;
      margin: 31px 0 13px 0;
    }

    &__subtitle {
      font-weight: 400;
      font-size: 14px;
      margin-bottom: 52px;
    }

    &__price {
      font-weight: 500;
      font-size: 17px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 15px;
      margin-top: auto;
    }
  }

  .cards_basket {
    display: block;
    overflow: scroll;
  }

  .card {

    &_basket {
      flex-direction: row;
      width: 100%;
      height: 122px;
      padding: 0;
      margin-bottom: 31px;
      border: none;
      align-items: center;
    }

    &__image_basket {
      width: 122px;
      margin-right: 98px;
    }

    &__title_basket {
      max-width: 310px;
      margin: 0;
    }

    &__subtitle_basket {
      display: none;
    }

    &__price_basket {
      margin: auto 0 auto auto;
      color: #D58C51;
    }
  }
</style>
