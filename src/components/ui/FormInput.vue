<template>
  <input type="text" :placeholder="placeholder">
</template>

<script>

export default {
  name: 'FormInput',
  components: {
  },
  props: {
    placeholder: {
      type: String,
      default: 'Логин'
    }
  },
  setup () {
  }
}
</script>

<style lang="scss" scoped>
input {
  padding: 10px 18px;
  border: 1px solid #D58C51;
  border-radius: 61px;
  width: 420px;
  margin-bottom: 15px;

  &::placeholder {
    font-family: Montserrat;
    font-weight: 400;
    font-size: 16px;
    color: #161516;
  }

  &:focus {
    outline: none;
    border: 1px solid #D58C51;
  }
}
</style>
