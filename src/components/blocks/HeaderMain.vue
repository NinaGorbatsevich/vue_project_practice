<template>
  <header :class="{'header': true, 'header_card': headerCard}">
    <div :class="{'header__wrapper': true, 'header__wrapper_basket': headerWrapperBasket}">
      <div :class="{'title-wrapper': true, 'title-wrapper_basket': titleWrapperBasket}">
        <router-link to="/" :class="{'button-back': true, 'button-back_basket': buttonBackBasket}">
          <BaseButton :arrow="true"/>
        </router-link>
        <h1 class="header-title">{{ title }}</h1>
      </div>
      <div class="header-basket">
        <div :class="{'basket-wrapper': true, 'basket-wrapper_basket': basketWrapperBasket}">
          <p class="price"> товара на сумму 3500р</p>
          <router-link to="/basket">
            <basketIcon class="basket"/>
          </router-link>
        </div>
        <BaseButtonSquare
          button="Выйти"
          :exitButton="true"
        />
      </div>
    </div>
  </header>
</template>

<script>
import BaseButton from '@/components/ui/BaseButton.vue'
import BaseButtonSquare from '@/components/ui/BaseButtonSquare.vue'
import basketIcon from '@/components/icons/basketIcon.vue'

export default {
  name: 'HeaderMain',
  components: {
    BaseButton,
    basketIcon,
    BaseButtonSquare
  },
  props: {
    buttonBackBasket: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: 'НАША ПРОДУКЦИЯ'
    },
    titleWrapperBasket: {
      type: Boolean,
      default: false
    },
    basketWrapperBasket: {
      type: Boolean,
      default: false
    },
    headerWrapperBasket: {
      type: Boolean,
      default: false
    },
    headerCard: {
      type: Boolean,
      default: false
    }
  },
  setup () {
  }
}
</script>

<style lang="scss" scoped>
  .header {
    background-color: #161516;

    &__wrapper {
      max-width: 1310px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 0 auto;
      padding: 48px 0 75px 0;
      color: #fff;
    }
  }

  .button-back {
    display: none;
  }

  .title-wrapper {
    display: flex;
    gap: 63px;
  }

  .header-title {
    font-family: "Montserrat", serif;
    font-weight: 700;
    font-size: 31px;
    line-height: 38px;
  }

  .header-basket {
    display: flex;
    align-items: center;
  }

  .basket-wrapper {
    display: flex;
    align-items: center;
  }

  .price {
    font-family: "Montserrat", serif;
    font-weight: 500;
    width: 151px;
    font-size: 17px;
    line-height: 20px;
    text-align: right;
  }

  .basket {
    margin: 0 20px;
    cursor: pointer;
  }

  .header__wrapper_basket{
    justify-content: flex-end;
  }

  .title-wrapper_basket {
    margin-right: 114px;
  }

  .button-back_basket {
    display: block;
  }

  .basket-wrapper_basket{
    display: none;
  }

  .header_card {
    background: url('../../assets/image/background_card.png'), #161516;
    background-size: 100%;
  }
</style>
