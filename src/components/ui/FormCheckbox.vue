<template>
  <label>
    <input type="checkbox" class="checkbox-round"/>
    Я согласен получать обновления на почту
  </label>
</template>

<script>

export default {
  name: 'FormCheckbox',
  components: {
  },
  props: {
  },
  setup () {
  }
}
</script>

<style lang="scss" scoped>
label {
  font-family: 'Montserrat', serif;
  font-weight: 300;
  font-size: 11px;
  color: #301411;
  margin-bottom: 30px;
  text-align: left;
}

.checkbox-round {
    width: 1.3em;
    height: 1.3em;
    background-color: white;
    border-radius: 50%;
    vertical-align: middle;
    border: 1px solid #D58C51;
    appearance: none;
    -webkit-appearance: none;
    outline: none;
    cursor: pointer;
}
.checkbox-round:checked {
    background-color: #D58C51;
}
</style>
