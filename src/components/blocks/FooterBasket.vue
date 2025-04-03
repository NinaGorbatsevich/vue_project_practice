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
        <BaseButtonSquare
          @clickBtn="createOrder"
        />
      </div>
  </footer>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

import BaseButtonSquare from '../ui/BaseButtonSquare'

export default {
  name: 'FooterBasket',
  components: {
    BaseButtonSquare
  },
  props: {
  },
  setup () {
    const router = useRouter()
    const store = useStore()
    const sumInBasket = computed(() => {
      return store.getters.getAllPriceProductsInBasket
    })

    const createOrder = () => {
      if (sumInBasket.value !== 0) {
        router.push('/order')
        store.commit('setClearBasket')
      } else {
        alert('Корзина пуста')
      }
    }

    return {
      sumInBasket,
      createOrder
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
