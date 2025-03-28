<template>
  <button
  :class="{
    'button_order': true,
    'button_exit': exitButton,
    'button_auth': authButton
    }"
    >
    {{ button }}
  </button>
</template>

<script>

export default {
  name: 'BaseButtonSquare',
  components: {
  },
  props: {
    button: {
      type: String,
      default: 'Оформить заказ'
    },
    exitButton: {
      type: Boolean,
      default: false
    },
    authButton: {
      type: Boolean,
      default: false
    }
  },
  setup () {
  }
}
</script>

<style lang="scss" scoped>
.button {
  &_order {
    font-family: "Montserrat", serif;
    font-weight: 400;
    font-size: 14px;
    background-color: #D58C51;
    color: #131313;
    border: 1px solid #D58C51;
    padding: 12px 40px;
    cursor: pointer;

    &:hover{
      color: #D58C51;
      background-color: transparent;
      transition: background-color 0.5s ease;
      }
    }

  &_exit {
  padding: 12px 75px 13px 77px;
  background-color: transparent;
  color: #D58C51;

    &:hover {
      background-color: #D58C51;
      color: #131313;
      }
    }

  &_auth {
    padding: 12px 0px;
    width: 200px;
    position: relative;
    left: 50%;
    transform: translate(-50%, 0);
  }
}
</style>
