<template>
  <header class="header">
    <div class="header__wrapper">
      <h1 class="header-title">НАША ПРОДУКЦИЯ</h1>
      <div class="header-basket">
        <p class="price">3 товара на сумму 3500р</p>
        <basketIcon class="basket"/>
      </div>
    </div>
  </header>
</template>

<script>

import basketIcon from '@/components/icons/basketIcon.vue'

export default {
  name: 'HeaderMain',
  components: {
    basketIcon
  },
  props: {
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
      justify-content: space-between;
      margin: 0 auto;
      padding: 48px 0 75px 0;
      color: #fff;
    }
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

  .price {
    font-family: "Montserrat", serif;
    font-weight: 500;
    width: 151px;
    font-size: 17px;
    line-height: 20px;
    text-align: right;
  }

  .basket {
    margin-left: 20px;
    cursor: pointer;
  }
</style>
