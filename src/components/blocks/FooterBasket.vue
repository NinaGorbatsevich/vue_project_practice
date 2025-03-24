<template>
  <footer class="footer">
      <div class="footer__wrapper">
        <div class="final-price">
          <p class="final-price__text">
            ЗАКАЗ НА СУММУ:
          </p>
          <p class="final-price__price">
            {{ sumInBasket.toLocaleString('ru-Ru') }} ₽
          </p>
        </div>
        <BaseButtonSquare/>
      </div>
  </footer>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

import BaseButtonSquare from '../ui/BaseButtonSquare.vue'

export default {
  name: 'FooterBasket',
  components: {
    BaseButtonSquare
  },
  props: {
  },
  setup () {
    const store = useStore()
    const sumInBasket = computed(() => {
      return store.getters.getAllPriceProductsInBasket
    })
    return {
      sumInBasket
    }
  }
}
</script>

<style lang="scss" scoped>
  .footer {
    background-color: #161516;
    border-top: 1px solid #D58C51;

    &__wrapper {
      max-width: 860px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0 auto;
      padding: 20px 0 27px 0;
    }
  }

  .final-price {
    font-family: "Montserrat", serif;
    font-weight: 400;
    display: flex;

    &__text {
    font-size: 21px;
    color: #fff;
    margin-right: 16px;
    }

    &__price {
    font-size: 18px;
    color: #D58C51;
    }
  }

</style>
