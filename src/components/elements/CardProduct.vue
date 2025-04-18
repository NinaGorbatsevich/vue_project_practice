<template>
  <div
    :class="{
      'cards': true,
      'cards_basket': cardsBasket
    }"
    @click="$router.push(`/card/${id}`)"
    >
    <div
      :class="{
        'card': true,
        'card_basket': cardBasket,
        'card_card': cardCard
        }"
      >
      <div
        :class="{
          'card__link': true,
          'card__link_basket': cardLinkBasket,
          'card__link_card': cardLinkCard
          }"
        >
        <img
          :src="srcImg" alt=""
          :class="{
            'image': true,
            'image_basket': imageBasket,
            'image_card': imageCard
            }"
          >
        <div
          :class="{
            'wrapper-text': true,
            'wrapper-text_card': wrapperTextCard
            }"
          >
          <h3
            :class="{
              'wrapper-text__title': true,
              'wrapper-text__title_basket': titleBasket,
              'wrapper-text__title_card': titleCard
              }"
            >
            {{ title }}
          </h3>
          <p
            :class="{
              'wrapper-text__subtitle': true,
              'wrapper-text__subtitle_basket': subtitleBasket,
              'wrapper-text__subtitle_card': subtitleCard
              }"
            >
            {{ subtitle }}
          </p>
        </div>
      </div>
    <div
      :class="{
        'card__price': true,
        'card__price_basket': cardPriceBasket,
        'card__price_card': cardPriceCard
        }"
      >
      <p
        :class="{
          'price': true,
          'price_card': priceCard
          }"
        >
        {{ price.toLocaleString('ru-Ru') }} ₽
      </p>
      <BaseButton
        add
        :remove="cardBasket"
        @clickActionBtn="$emit('clickProductBtn')"
        :class="{
          'base-button': true,
          'base-button_off': baseButtonOff
          }"
        />
      <BaseButtonSquare button="В КОРЗИНУ"
        @clickBtn="$emit('clickBtn')"
        :class="{
          'btn-square': true,
          'btn-square_off': btnSquareOff
          }"
        />
      </div>
    </div>
  </div>
</template>

<script>

import BaseButton from '@/components/ui/BaseButton'
import BaseButtonSquare from '../ui/BaseButtonSquare'

export default {
  name: 'CardProduct',
  components: {
    BaseButton,
    BaseButtonSquare
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
      type: Number,
      default: 0
    },
    cardsBasket: {
      type: Boolean,
      default: false
    },
    cardBasket: {
      type: Boolean,
      default: false
    },
    cardLinkBasket: {
      type: Boolean,
      default: false
    },
    imageBasket: {
      type: Boolean,
      default: false
    },
    titleBasket: {
      type: Boolean,
      default: false
    },
    subtitleBasket: {
      type: Boolean,
      default: false
    },
    cardPriceBasket: {
      type: Boolean,
      default: false
    },
    cardsCard: {
      type: Boolean,
      default: false
    },
    cardCard: {
      type: Boolean,
      default: false
    },
    cardLinkCard: {
      type: Boolean,
      default: false
    },
    imageCard: {
      type: Boolean,
      default: false
    },
    titleCard: {
      type: Boolean,
      default: false
    },
    subtitleCard: {
      type: Boolean,
      default: false
    },
    cardPriceCard: {
      type: Boolean,
      default: false
    },
    wrapperTextCard: {
      type: Boolean,
      default: false
    },
    priceCard: {
      type: Boolean,
      default: false
    },
    baseButtonOff: {
      type: Boolean,
      default: false
    },
    btnSquareOff: {
      type: Boolean,
      default: false
    },
    id: {
      type: Number,
      default: 0
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

  &_card {
    width: 100%;
    border: none;
    padding: 0;
    height: 400px;
    position: relative;

    &:hover {
      color: #FFFFFF;
    }
  }

  &__price {
    font-weight: 500;
    font-size: 17px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
    margin-top: auto;

    &_basket {
      margin: auto 0 auto auto;
      color: #D58C51;
    }

    &_card {
      justify-content: flex-end;
      margin-right: 110px;
      position: absolute;
      top: 365px;
      right: 40px;
    }
  }

  &_basket {
    flex-direction: row;
    width: 100%;
    height: 122px;
    padding: 0;
    margin-bottom: 31px;
    border: none;
    align-items: center;
  }

  &__link {

    &_basket {
      display: flex;
      align-items: center;
    }

    &_card {
      display: flex;
      flex-direction: row;
      cursor: default;
    }
  }
}

.wrapper-text {

  &_card {
    max-width: 528px;
  }

  &__title {
    font-weight: 500;
    font-size: 17px;
    margin: 31px 0 13px 0;

    &_card {
      font-size: 30px;
      color: #D58C51;
      margin: 58px 0 21px 0;
    }

    &_basket {
      max-width: 310px;
      margin: 0;
    }
  }

  &__subtitle {
    font-weight: 400;
    font-size: 14px;
    margin-bottom: 52px;

    &_card {
      margin: 21px 0 34px 0;
    }

    &_basket {
      display: none;
    }
  }
}

.cards_basket {
  display: block;
  overflow: scroll;
}

.image {

  &_basket {
    width: 122px;
    margin-right: 98px;
  }

  &_card {
    width: 503px;
    margin: 0 200px 0 70px;
  }
}

.price_card {
  margin-right: 137px;
}

.base-button_off {
  display: none;
}

.btn-square_off {
  display: none;
}
</style>
