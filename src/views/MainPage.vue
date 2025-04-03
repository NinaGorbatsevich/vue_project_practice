<template>
  <HeaderMain/>
  <TheMain/>
</template>

<script>
import { onBeforeMount } from 'vue'
import { useStore } from 'vuex'

import HeaderMain from '@/components/blocks/HeaderMain.vue'
import TheMain from '@/components/blocks/TheMain.vue'

export default {
  name: 'MainPage',
  components: {
    HeaderMain,
    TheMain
  },
  setup () {
    const store = useStore()
    onBeforeMount(() => {
      store.commit('setDataDistribution')
    })
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
</style>
