<template>
  <header :class="{
    'header': true,
    'header_card': headerCard
    }">
    <div :class="{
      'header__wrapper': true,
      'header__wrapper_basket': headerWrapperBasket,
      'header__wrapper_card': headerWrapperCard
      }">
      <div :class="{
        'title-wrapper': true,
        'title-wrapper_basket': titleWrapperBasket
        }">
          <BaseButton
            v-if="headerWrapperBasket || headerWrapperCard"
            @clickActionBtn="goBack"
            arrow
          />
        <h1 class="header-title">{{ title }}</h1>
      </div>
      <div class="header-basket">
        <div :class="{
          'basket-wrapper': true,
          'basket-wrapper_basket': basketWrapperBasket
          }">
          <div class="price-wrapper">
            <p class="counts">
              {{ countBasket }} {{ productWord }}
            </p>
            <p class="price">
              на сумму {{ sumInBasket }} ₽
            </p>
          </div>
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
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

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
    },
    headerWrapperCard: {
      type: Boolean,
      default: false
    }
  },
  setup () {
    const store = useStore()
    const router = useRouter()
    const countBasket = computed(() => {
      return store.getters.getCountProductsInBasket
    })
    const sumInBasket = computed(() => {
      return store.getters.getAllPricePoductsInBasket
    })

    const productWord = computed(() => {
      const count = countBasket.value
      if (count % 10 === 1 && count % 100 !== 11) {
        return 'товар'
      } else if (count % 10 >= 2 && count % 100 <= 4) {
        return 'товара'
      } else {
        return 'товаров'
      }
    })

    const goBack = () => {
      router.go(-1)
    }
    return {
      countBasket,
      sumInBasket,
      goBack,
      productWord
    }
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

  .price-wrapper {
    display: flex;
    flex-direction: column;
  }

  .counts, .price {
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

  .header__wrapper_card {
    padding: 48px 0 30px 0;
  }
</style>
