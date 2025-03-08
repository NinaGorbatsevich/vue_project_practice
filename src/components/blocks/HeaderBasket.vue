<template>
  <header class="header">
    <div class="header__wrapper">
      <router-link to="/">
      <BaseButton :arrow="true"/>
      </router-link>
      <h2 class="header__title">
        Корзина с выбранными товарами
      </h2>
    </div>
  </header>
</template>

<script>
import BaseButton from '../ui/BaseButton.vue'

export default {
  name: 'HeaderBasket',
  components: {
    BaseButton
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
      display: flex;
      gap: 63px;
      padding: 53px 0 38px 0;
      margin: 0 auto;
      max-width: 860px;
    }

    &__title {
      font-family: "Montserrat", serif;
      font-weight: 700;
      font-size: 31px;
      line-height: 38px;
      color: #fff;
      }
  }
</style>
