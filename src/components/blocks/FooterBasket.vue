<template>
  <footer class="footer">
    <span class="footer__line"></span>
      <div class="final">
        <div class="final__price">
          <p class="order">ЗАКАЗ НА СУММУ:</p>
          <p class="final-price">6 220 ₽</p>
        </div>
        <BaseButtonSquare/>
      </div>
  </footer>
</template>

<script>
import BaseButtonSquare from '../ui/BaseButtonSquare.vue'

export default {
  name: 'FooterBasket',
  components: {
    BaseButtonSquare
  },
  props: {
  },
  setup () {
  }
}
</script>

<style lang="scss" scoped>
  .footer {
    background-color: #161516;

    &__line {
      display: block;
      width: 100%;
      height: 1px;
      background-color: #D58C51;
    }
  }

  .final {
    max-width: 860px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    padding: 20px 0 27px 0;

    &__price {
      display: flex;
    }
  }

  .order {
    font-family: "Montserrat", serif;
    font-weight: 400;
    font-size: 21px;
    color: #fff;
    margin-right: 16px;
  }

  .final-price {
    font-family: "Montserrat", serif;
    font-weight: 400;
    font-size: 18px;
    color: #D58C51;
  }
</style>
