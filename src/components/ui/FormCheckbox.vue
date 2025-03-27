<template>
  <div id="inputPreview">
    <input name="cssCheckbox" id="demo_opt_1" type="checkbox" class="css-checkbox">
    <label for="demo_opt_1">
      Я согласен получать обновления на почту
    </label>
  </div>
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
.css-checkbox {
  position: absolute;
  overflow: hidden;
}

#inputPreview {
  display: flex;
  justify-content: left;
  margin-bottom: 30px;
}

.css-checkbox + label {
  position: relative;
  font-family: "Montserrat", serif;
  font-size: 11px;
  font-weight: 300;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  height: 20px;
  color: #301411;
}

.css-checkbox + label::before {
  content: " ";
  display: inline-block;
  margin-right: 9px;
  width: 18px;
  height: 18px;
  background-color: white;
  border: 1px solid #D58C51;
  border-radius: 50%;
}

.css-checkbox:checked + label::after {
  content: " ";
  background-color: #D58C51;
  border: 1px solid #D58C51;
  border-radius: 50%;
  position: absolute;
  left: 4px;
  top: 4px;
  height: 10px;
  width: 10px;
}
</style>
