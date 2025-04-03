<template>
  <main class="main">
    <form action="" class="main__form">
      <h2 class="title">
        Спасибо за покупку,<br>
        Ваш заказ обрабатывается!
      </h2>
      <div class="button">
        <router-link to="/">
          <baseButtonSquare
            button="На главную"
          />
        </router-link>
      </div>
    </form>
  </main>
</template>

<script>
import { useStore } from 'vuex'
import BaseButtonSquare from '@/components/ui/BaseButtonSquare.vue'

export default {
  name: 'OrderPage',
  components: {
    BaseButtonSquare
  },
  props: {
  },
  setup () {
    const store = useStore()
    const clearBasket = () => {
      store.commit('setClearBasket')
    }

    return {
      clearBasket
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  background: url('../assets/image/background_auth.png');
  background-size: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  &__form {
    background-color: #fff;
    width: 450px;
    height: 300px;
    padding: 25px;
    font-family: Montserrat;
    font-weight: 700;
    font-size: 31px;
    display: flex;
    flex-direction: column;
    gap: 50px;
  }
}

.title {
  text-align: center;
}

.button {
  text-align: center;
}
</style>
