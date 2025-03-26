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
  clip: rect(0 0 0 0);
  height: 1px; width: 1px;
  margin: -1px; padding: 0;
  border: 0;
  }

#inputPreview {
  font-family: 'Montserrat', serif;
  display: flex;
  justify-content: left;
  margin-bottom: 30px;
  }

.css-checkbox + label {
  position: relative;
  font-size: 11px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  color: #301411;
  }

.css-checkbox + label::before {
  content: " ";
  display: inline-block;
  vertical-align: middle;
  margin-right: 3px;
  width: 18px;
  height: 18px;
  background-color: white;
  border: 1px solid #D58C51;
  border-radius: 50%;
  box-shadow: none;
  }

.css-checkbox:checked + label::after {
  content: " ";
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNMTczLjg5OCA0MzkuNDA0bC0xNjYuNC0xNjYuNGMtOS45OTctOS45OTctOS45OTctMjYuMjA2IDAtMzYuMjA0bDM2LjIwMy0zNi4yMDRjOS45OTctOS45OTggMjYuMjA3LTkuOTk4IDM2LjIwNCAwTDE5MiAzMTIuNjkgNDMyLjA5NSA3Mi41OTZjOS45OTctOS45OTcgMjYuMjA3LTkuOTk3IDM2LjIwNCAwbDM2LjIwMyAzNi4yMDRjOS45OTcgOS45OTcgOS45OTcgMjYuMjA2IDAgMzYuMjA0bC0yOTQuNCAyOTQuNDAxYy05Ljk5OCA5Ljk5Ny0yNi4yMDcgOS45OTctMzYuMjA0LS4wMDF6Ii8+PC9zdmc+");
  background-repeat: no-repeat;
  background-size: 10px 10px;
  background-position: center center;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 0px;
  left: 2px;
  top: 1px;
  text-align: center;
  background-color: transparent;
  font-size: 10px;
  height: 16px;
  width: 16px;
  }
</style>
