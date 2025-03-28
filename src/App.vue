<template>
  <router-view/>
</template>
<script>
import { onBeforeMount } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'HomeView',
  components: {
  },
  props: {
  },
  setup () {
    const router = useRouter()

    onBeforeMount(() => { /* до того как отрисуется страница */
      if (localStorage.isAuth === undefined) { /* если человек зашел первый раз, isAuth неопределено */
        localStorage.setItem('isAuth', JSON.stringify(false)) /* создаем новый ключ isAuth и передаем значение false */
      }

      if (!JSON.parse(localStorage.isAuth)) { /* преобразуем isAuth в булеан значение, если пользователь не авторизован (false), открываем страницу авторизации */
        router.push('/authorization')
      }
    })
  }
}
</script>
<style lang="scss">
</style>
