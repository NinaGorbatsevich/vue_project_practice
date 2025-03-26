<template>
  <p class="text">
    {{ text }}
  </p>
</template>

<script>

export default {
  name: 'FormAuthLink',
  components: {
  },
  props: {
    text: {
      type: String,
      default: 'Зарегистрироваться'
    }
  },
  setup () {
  }
}
</script>

<style lang="scss" scoped>
.text {
  font-weight: 300;
  font-size: 11px;
  text-decoration: underline;
  text-align: right;
  color: #D58C51;
  margin-bottom: 15px;
}
</style>
