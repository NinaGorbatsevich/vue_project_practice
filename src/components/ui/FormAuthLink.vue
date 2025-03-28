<template>
  <a href="" class="text" onclick="return false;">
    {{ text }}
  </a>
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
  display: flex;
  justify-content: flex-end;
  color: #D58C51;
  margin-bottom: 15px;
}
</style>
