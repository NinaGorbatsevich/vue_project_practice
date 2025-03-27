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
  font-size: 14px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  height: 20px;
  color: rgb(0, 0, 0);
}

.css-checkbox + label::before {
  content: " ";
  display: inline-block;
  vertical-align: middle;
  margin-right: 9px;
  width: 18px;
  height: 18px;
  background-color: white;
  border: 1px solid #D58C51;
  border-radius: 50%;
  box-shadow: none;
}

.css-checkbox:checked + label::after {
  content: " ";
  background-color: #D58C51;
  border: 1px solid #D58C51;
  border-radius: 50%;
  background-position: center center;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 1.1%;
  top: 19%;
  text-align: center;
  height: 11px;
  width: 11px;
}
</style>
