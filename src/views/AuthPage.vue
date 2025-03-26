<template>
  <div class="background">
    <div class="form">
      <FormAuthLink/>
      <h1 class="form__title">
        {{ title }}
      </h1>
      <FormInput/>
      <FormInput/>
      <FormCheckbox/>
      <BaseButtonSquare
        authButton="true"
        button="Войти"
      />
    </div>
  </div>
</template>

<script>
import FormAuthLink from '@/components/ui/FormAuthLink'
import FormInput from '@/components/ui/FormInput'
import FormCheckbox from '@/components/ui/FormCheckbox'
import BaseButtonSquare from '@/components/ui/BaseButtonSquare'

export default {
  name: 'AuthPage',
  components: {
    FormAuthLink,
    FormInput,
    FormCheckbox,
    BaseButtonSquare
  },
  props: {
    title: {
      type: String,
      default: 'Вход'
    }
  },
  setup () {
  }
}
</script>

<style lang="scss" scoped>
.background {
  background: url('../assets/image/background_auth.png');
  background-size: 100%;
  background-repeat: no-repeat;
  height: 100vh;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    background: rgba(0, 0, 0, 0.45);
    width: 100%;
    height: 100%;
  }
}

.form {
  font-family: "Montserrat", serif;
  background-color: #fff;
  padding: 7px 19px 34px 20px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  text-align: center;
  position: absolute;
  z-index: 1;

  &__title {
    font-weight: 700;
    font-size: 31px;
    color: #161516;
    margin-bottom: 36px;
  }
}
</style>
