<template>
  <header
    :class="{
      'header': true,
      'header_card': headerCard
    }"
  >
    <div
      :class="{
        'header__wrapper': true,
        'header__wrapper_basket': headerWrapperBasket,
        'header__wrapper_card': headerWrapperCard
      }"
      >
      <div
        :class="{
          'title-wrapper': true,
          'title-wrapper_basket': titleWrapperBasket
        }"
        >
        <BaseButton
          v-if="headerWrapperBasket || headerWrapperCard"
          @clickActionBtn="goBack"
          arrow
        />
        <h1 class="header-title">
          {{ title }}
        </h1>
      </div>
      <div class="header-basket">
        <div
          :class="{
            'header-basket__wrapper': true,
            'header-basket__wrapper_basket': basketWrapperBasket
          }"
          >
          <div class="price-wrapper">
            <p class="price-wrapper__counts">
              {{ countBasket }} {{ productWord }}
            </p>
            <p class="price-wrapper__price">
              на сумму {{ sumInBasket.toLocaleString('ru-Ru') }} ₽
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

import BaseButton from '@/components/ui/BaseButton'
import BaseButtonSquare from '@/components/ui/BaseButtonSquare'
import basketIcon from '@/components/icons/basketIcon'

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
      return store.getters.getAllPriceProductsInBasket
    })

    const productWord = computed(() => {
      const count = countBasket.value
      if (count > 10 && [11, 12, 13, 14].includes(count % 100)) {
        return 'товаров'
      } else if (count % 10 === 1) {
        return 'товар'
      } else if ([2, 3, 4].includes(count % 10)) {
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
  font-family: "Montserrat", serif;
  background-color: #161516;

  &_card {
    background-color: transparent;
  }

  &__wrapper {
    max-width: 1310px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    padding: 54px 0 81px 0;
    color: #fff;

    &_basket {
      justify-content: flex-end;
      padding: 53px 0 38px 0;
    }

    &_card {
      padding: 53px 0 25px 0;
    }
  }
}

.button-back {
  display: none;

  &_basket {
    display: block;
  }
}

.title-wrapper {
  display: flex;
  gap: 63px;

  &_basket {
    margin-right: 114px;
  }
}

.header-title {
  font-weight: 700;
  font-size: 31px;
  line-height: 38px;
}

.header-basket {
  display: flex;

&__wrapper {
  display: flex;
  align-items: center;

  &_basket{
    display: none;
  }
}
}

.price-wrapper {
  display: flex;
  flex-direction: column;

    &__counts, &__price {
    font-weight: 500;
    font-size: 17px;
    line-height: 20px;
    text-align: right;
  }
}

.basket {
  margin: 0 20px;
  cursor: pointer;
}
</style>
