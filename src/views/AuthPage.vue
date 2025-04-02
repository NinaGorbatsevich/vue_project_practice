<template>
  <main class="main">
    <form class="form" @submit.prevent="postForm">
      <span class="form__toggle">
        <FormAuthLink
          @click="toggleForm"
          :text="namesForm.toggleName"
        />
      </span>
      <h2 class="form__title">
        {{ namesForm.titleForm }}
      </h2>

      <div class="form__item">
        <FormInput
          v-model.trim="login"
          @input="getLaunchValidForm"
        />
        <p class="form__item-error">{{ errorLogin }}</p>
      </div>

      <div class="form__item">
        <FormInput
          placeholder="Пароль"
          v-model.trim="password"
          @input="getLaunchValidForm"
          type="password"
        />
        <p class="form__item-error">{{ errorPassword }}</p>
      </div>

      <FormCheckbox/>

      {{ errorValidAuthReg }}

      <BaseButtonSquare
        authButton
        :button="namesForm.buttonName"
      />
    </form>
  </main>
</template>

<script>
import { ref, reactive, onBeforeMount } from 'vue'
import { useRouter } from 'vue-router'

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
    const router = useRouter()

    const login = ref('')
    const password = ref('')
    const errorLogin = ref('')
    const errorPassword = ref('')
    const errorValidAuthReg = ref('')

    const isToggleForm = ref(true)

    const namesForm = reactive({
      toggleName: 'Зарегистрироваться',
      titleForm: 'Вход',
      buttonName: 'Войти'
    })

    onBeforeMount(() => {
      if (localStorage.userList === undefined) {
        localStorage.setItem('userList', JSON.stringify([]))
      }
    })

    const postForm = () => {
      if (isToggleForm.value) {
        goAuthorization()
      } else {
        setRegistrationUser()
      }
    }

    const setRegistrationUser = () => {
      getValidInputReg()
      if (errorLogin.value !== '' && errorPassword.value !== '') {
        return
      }

      const userList = JSON.parse(localStorage.userList) /* получаем массив из зарегистрированных пользователей */

      const isActiveUser = userList.some(item => { /* проверка на совпадение */
        return item.login === login.value
      })

      if (isActiveUser) {
        errorValidAuthReg.value = 'Такой логин уже существует, придумайте другой'
      } else {
        userList.push({
          login: login.value,
          password: password.value,
          basket: []
        })
        toggleForm()
      }

      localStorage.userList = JSON.stringify(userList)
    }

    const goAuthorization = () => {
      getValidInputAuth()
      const userAuth = JSON.parse(localStorage.userList)

      const currentSeachUser = userAuth.find(item => item.login === login.value)

      if (currentSeachUser?.password === password.value) {
        localStorage.isAuth = JSON.stringify(true)
        localStorage.currentUser = JSON.stringify({
          currentUser: currentSeachUser.login,
          basket: currentSeachUser.basket
        })
        router.push('/')
      } else if (password.value.length !== 0 && login.value.length !== 0) {
        errorValidAuthReg.value = 'Логин или пароль не верный'
      }
    }

    const getLaunchValidForm = () => {
      isToggleForm.value ? getValidInputAuth() : getValidInputReg()
    }

    const getValidInputReg = () => {
      if (login.value.length === 0) {
        errorLogin.value = 'Поле не должно быть пустым'
      }

      if (password.value.length === 0) {
        errorPassword.value = 'Поле не должно быть пустым'
      }

      if (login.value.length > 0 && login.value.length < 4) {
        errorLogin.value = 'Логин должен содержать не менее 4-х символов'
      } else if (login.value.length >= 4) {
        errorLogin.value = ''
      }

      if (password.value.length > 0 && password.value.length < 4) {
        errorPassword.value = 'Пароль должен содержать не менее 4-х символов'
      } else if (password.value.length >= 4) {
        errorPassword.value = ''
      }
    }

    const getValidInputAuth = () => {
      if (login.value.length === 0) {
        errorLogin.value = 'Поле не должно быть пустым'
      } else {
        errorLogin.value = ''
      }

      if (password.value.length === 0) {
        errorPassword.value = 'Поле не должно быть пустым'
      } else {
        errorPassword.value = ''
      }
    }

    const toggleForm = () => {
      isToggleForm.value = !isToggleForm.value

      login.value = ''
      password.value = ''
      errorLogin.value = ''
      errorPassword.value = ''
      errorValidAuthReg.value = ''

      if (isToggleForm.value) {
        namesForm.toggleName = 'Зарегистрироваться'
        namesForm.titleForm = 'Вход'
        namesForm.buttonName = 'Войти'
      } else {
        namesForm.toggleName = 'Авторизоваться'
        namesForm.titleForm = 'Регистрация'
        namesForm.buttonName = 'Зарегистрироваться'
      }
    }

    return {
      login,
      password,
      errorLogin,
      errorPassword,
      errorValidAuthReg,
      isToggleForm,
      namesForm,
      toggleForm,
      getValidInputReg,
      getValidInputAuth,
      getLaunchValidForm,
      postForm,
      goAuthorization,
      setRegistrationUser
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  background: url('../assets/image/background_auth.png') no-repeat;
  background-size: cover;
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

  &__item {
    position: relative;

    &-error {
      position: absolute;
      top: 40px;
      left: 19px;
      font-family: 'Montserrat', serif;
      font-weight: 300;
      font-size: 8px;
      color: #FF0B0B;
    }
  }
}
</style>
