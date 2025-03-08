<template>
  <button class="order-button">
    Оформить заказ
  </button>
</template>

<script>

export default {
  name: 'BaseButtonSquare',
  components: {
  },
  props: {
  },
  setup () {
  }
}
</script>

<style lang="scss" scoped>
.order-button {
    font-family: "Montserrat", serif;
    font-weight: 400;
    font-size: 14px;
    color: #131313;
    background-color: #D58C51;
    padding: 12px 40px;

    &:hover{
      border-color: #D58C51;
      color: #D58C51;
      background-color: transparent;
      transition: background-color 0.5s ease;
    }
  }
</style>
